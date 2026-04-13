import { db } from "@/lib/db";

export async function getPaymentSetting() {
  const row = await db.paymentSetting.findUnique({ where: { id: 1 } });
  return row;
}

export async function getStripeConfig() {
  const setting = await getPaymentSetting();

  const secretKey =
    setting?.stripeSecretKey?.trim() || process.env.STRIPE_SECRET_KEY || "";
  const publishableKey =
    setting?.stripePublishableKey?.trim() ||
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "";
  const webhookSecret =
    setting?.stripeWebhookSecret?.trim() || process.env.STRIPE_WEBHOOK_SECRET || "";
  const currency = (setting?.currency || process.env.STRIPE_CURRENCY || "cny")
    .toLowerCase()
    .trim();
  const enabled = Boolean(setting?.enabled) && Boolean(secretKey);

  return {
    enabled,
    secretKey,
    publishableKey,
    webhookSecret,
    currency: currency || "cny",
  };
}
