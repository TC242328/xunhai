import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getStripeConfig } from "@/lib/payment-settings";
import { getStripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const stripeSignature = (await headers()).get("stripe-signature");
  if (!stripeSignature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  const { secretKey, webhookSecret } = await getStripeConfig();
  if (!secretKey || !webhookSecret) {
    return NextResponse.json({ error: "Webhook key is not configured" }, { status: 400 });
  }

  const stripe = getStripe(secretKey);
  const payload = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      stripeSignature,
      webhookSecret,
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const orderId = session.metadata?.orderId;
      if (orderId) {
        await db.order.update({
          where: { id: orderId },
          data: {
            status: "paid",
            stripePaymentIntent: String(session.payment_intent ?? ""),
            customerEmail: session.customer_details?.email ?? null,
          },
        });
      }
    }

    if (event.type === "checkout.session.expired") {
      const session = event.data.object;
      const orderId = session.metadata?.orderId;
      if (orderId) {
        await db.order.update({
          where: { id: orderId },
          data: { status: "cancelled" },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }
}
