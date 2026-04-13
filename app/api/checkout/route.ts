import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { getStripeConfig } from "@/lib/payment-settings";
import { getStripe } from "@/lib/stripe";

const schema = z.object({
  lines: z
    .array(
      z.object({
        slug: z.string().min(1),
        colorKey: z.string().min(1),
        size: z.string().min(1),
        quantity: z.number().int().min(1).max(10),
      }),
    )
    .min(1),
});

function genOrderNo() {
  return `SO${Date.now().toString().slice(-10)}`;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "购物车数据无效" }, { status: 400 });
  }

  const { enabled, secretKey, currency } = await getStripeConfig();
  if (!enabled || !secretKey) {
    return NextResponse.json(
      { error: "支付尚未启用，请联系商家配置 Stripe。" },
      { status: 400 },
    );
  }

  const stripe = getStripe(secretKey);
  const slugs = [...new Set(parsed.data.lines.map((line) => line.slug))];
  const products = await db.product.findMany({ where: { slug: { in: slugs } } });
  const map = new Map(products.map((p) => [p.slug, p]));

  const resolved = parsed.data.lines.map((line) => {
    const product = map.get(line.slug);
    if (!product) throw new Error(`商品不存在: ${line.slug}`);
    const colors = JSON.parse(product.colors) as Array<{ key: string; label: string }>;
    const color = colors.find((c) => c.key === line.colorKey);
    return {
      product,
      colorLabel: color?.label ?? line.colorKey,
      size: line.size,
      quantity: line.quantity,
    };
  });

  const total = resolved.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const order = await db.order.create({
    data: {
      orderNo: genOrderNo(),
      totalAmount: total,
      currency,
      status: "pending",
      items: {
        create: resolved.map((item) => ({
          productId: item.product.id,
          productName: item.product.name,
          slug: item.product.slug,
          colorLabel: item.colorLabel,
          size: item.size,
          unitPrice: item.product.price,
          quantity: item.quantity,
          lineTotal: item.product.price * item.quantity,
        })),
      },
    },
  });

  const origin = req.headers.get("origin") ?? "http://localhost:3000";
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: resolved.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency,
        unit_amount: item.product.price * 100,
        product_data: {
          name: item.product.name,
          description: `${item.colorLabel} · EU ${item.size}`,
        },
      },
    })),
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/checkout/cancel`,
    metadata: { orderId: order.id },
  });

  await db.order.update({
    where: { id: order.id },
    data: { stripeSessionId: session.id },
  });

  return NextResponse.json({ url: session.url });
}
