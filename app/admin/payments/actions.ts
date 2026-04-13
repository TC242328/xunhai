"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { requireAdmin } from "@/app/admin/guard";

export async function savePaymentSetting(formData: FormData) {
  await requireAdmin();

  const stripeSecretKey = String(formData.get("stripeSecretKey") ?? "").trim();
  const stripePublishableKey = String(
    formData.get("stripePublishableKey") ?? "",
  ).trim();
  const stripeWebhookSecret = String(
    formData.get("stripeWebhookSecret") ?? "",
  ).trim();
  const currency = String(formData.get("currency") ?? "cny")
    .toLowerCase()
    .trim();
  const enabled = String(formData.get("enabled") ?? "") === "on";

  await db.paymentSetting.upsert({
    where: { id: 1 },
    update: {
      stripeSecretKey,
      stripePublishableKey,
      stripeWebhookSecret,
      currency,
      enabled,
    },
    create: {
      id: 1,
      stripeSecretKey,
      stripePublishableKey,
      stripeWebhookSecret,
      currency,
      enabled,
    },
  });

  revalidatePath("/admin/payments");
}
