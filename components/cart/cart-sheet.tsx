"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/** 右侧购物车抽屉 + 结账说明弹窗（Stripe 预留） */
export function CartSheet() {
  const {
    lines,
    cartOpen,
    setCartOpen,
    subtotal,
    updateQuantity,
    removeLine,
  } = useCart();
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [checkoutError, setCheckoutError] = React.useState("");
  const [checkingOut, setCheckingOut] = React.useState(false);

  async function handleCheckout() {
    setCheckoutError("");
    setCheckingOut(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lines: lines.map((line) => ({
            slug: line.slug,
            colorKey: line.colorKey,
            size: line.size,
            quantity: line.quantity,
          })),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };
      if (!res.ok || !data.url) {
        setCheckoutError(data.error ?? "结账失败，请稍后重试。");
        setCheckoutOpen(true);
        return;
      }
      window.location.href = data.url;
    } catch {
      setCheckoutError("网络异常，暂时无法发起支付。");
      setCheckoutOpen(true);
    } finally {
      setCheckingOut(false);
    }
  }

  return (
    <>
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>购物车</SheetTitle>
            <SheetDescription>
              以下为本地演示数据，刷新页面后会清空。
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-1 py-2">
            {lines.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                还没有加入任何鞋款，去商店逛逛吧。
              </p>
            ) : (
              lines.map((line) => (
                <div
                  key={line.id}
                  className="flex gap-3 rounded-lg border border-border/60 bg-muted/20 p-3 transition-colors hover:bg-muted/30"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/shop/${line.slug}`}
                      onClick={() => setCartOpen(false)}
                      className="font-heading line-clamp-2 text-sm font-semibold hover:underline"
                    >
                      {line.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {line.colorLabel} · EU {line.size}
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      ¥{line.price.toLocaleString("zh-CN")}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon-xs"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(line.id, line.quantity - 1)
                        }
                      >
                        −
                      </Button>
                      <span className="w-6 text-center text-sm tabular-nums">
                        {line.quantity}
                      </span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon-xs"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(line.id, line.quantity + 1)
                        }
                      >
                        +
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        className="ml-auto text-muted-foreground hover:text-destructive"
                        onClick={() => removeLine(line.id)}
                        aria-label="移除"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <SheetFooter className="gap-3 border-t border-border/80 pt-4">
            <div className="flex w-full items-center justify-between text-sm">
              <span className="text-muted-foreground">合计（演示）</span>
              <span className="font-heading text-lg font-bold tabular-nums">
                ¥{subtotal.toLocaleString("zh-CN")}
              </span>
            </div>
            <Button
              type="button"
              disabled={lines.length === 0 || checkingOut}
              className="w-full bg-gradient-to-r from-orange-500 via-purple-600 to-emerald-500 font-semibold text-white shadow-lg shadow-purple-900/30 hover:opacity-95"
              onClick={() => {
                setCartOpen(false);
                void handleCheckout();
              }}
            >
              {checkingOut ? "正在跳转支付…" : "去结账"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setCartOpen(false)}
            >
              继续购物
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>支付暂不可用</DialogTitle>
            <DialogDescription>
              {checkoutError || "请稍后重试，或联系商家检查支付配置。"}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" onClick={() => setCheckoutOpen(false)}>
              知道了
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
