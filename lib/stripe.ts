import Stripe from "stripe";

const globalForStripe = globalThis as unknown as {
  stripe: Stripe | undefined;
  stripeKey: string | undefined;
};

export function getStripe(secretKey: string) {
  if (!secretKey) {
    throw new Error("缺少 Stripe Secret Key");
  }

  if (globalForStripe.stripe && globalForStripe.stripeKey === secretKey) {
    return globalForStripe.stripe;
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: "2026-03-25.dahlia",
    appInfo: {
      name: "SOLE Store",
      version: "1.0.0",
    },
  });

  globalForStripe.stripe = stripe;
  globalForStripe.stripeKey = secretKey;
  return stripe;
}
