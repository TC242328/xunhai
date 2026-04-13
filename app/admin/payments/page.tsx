import { db } from "@/lib/db";
import { savePaymentSetting } from "@/app/admin/payments/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function AdminPaymentsPage() {
  const setting = await db.paymentSetting.findUnique({ where: { id: 1 } });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-white">支付配置</h1>
        <p className="text-sm text-zinc-400">
          绑定 Stripe 后，前台购物车会跳转真实结账页面。
        </p>
      </div>

      <form action={savePaymentSetting} className="max-w-2xl space-y-4">
        <div className="space-y-2">
          <Label htmlFor="stripeSecretKey" className="text-zinc-200">
            Stripe Secret Key
          </Label>
          <Input
            id="stripeSecretKey"
            name="stripeSecretKey"
            defaultValue={setting?.stripeSecretKey ?? ""}
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            placeholder="sk_test_..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="stripePublishableKey" className="text-zinc-200">
            Stripe Publishable Key
          </Label>
          <Input
            id="stripePublishableKey"
            name="stripePublishableKey"
            defaultValue={setting?.stripePublishableKey ?? ""}
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            placeholder="pk_test_..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="stripeWebhookSecret" className="text-zinc-200">
            Stripe Webhook Secret
          </Label>
          <Input
            id="stripeWebhookSecret"
            name="stripeWebhookSecret"
            defaultValue={setting?.stripeWebhookSecret ?? ""}
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            placeholder="whsec_..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currency" className="text-zinc-200">
            币种（默认 cny）
          </Label>
          <Input
            id="currency"
            name="currency"
            defaultValue={setting?.currency ?? "cny"}
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-zinc-200">
          <input
            type="checkbox"
            name="enabled"
            defaultChecked={Boolean(setting?.enabled)}
          />
          启用 Stripe 支付
        </label>

        <Button type="submit" className="bg-white text-zinc-900 hover:bg-zinc-200">
          保存支付配置
        </Button>
      </form>
    </div>
  );
}
