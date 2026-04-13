"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-heading text-4xl font-black">支付成功</h1>
      <p className="mt-4 text-muted-foreground">
        订单已创建，我们会尽快处理并通过邮件通知你发货进度。
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link href="/" className={cn(buttonVariants())}>
          返回首页
        </Link>
        <Link href="/shop" className={cn(buttonVariants({ variant: "outline" }))}>
          继续逛店
        </Link>
      </div>
    </div>
  );
}
