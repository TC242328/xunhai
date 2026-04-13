import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-heading text-4xl font-black">支付已取消</h1>
      <p className="mt-4 text-muted-foreground">
        你可以返回购物车继续修改商品后再次结账。
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link href="/shop" className={cn(buttonVariants())}>
          返回商店
        </Link>
        <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
          去首页
        </Link>
      </div>
    </div>
  );
}
