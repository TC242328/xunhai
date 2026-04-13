"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CartSheet } from "@/components/cart/cart-sheet";

const nav = [
  { href: "/", label: "首页" },
  { href: "/shop", label: "商店" },
  { href: "/new", label: "新品" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系我们" },
];

/** 顶栏：Logo、导航、主题与购物车 */
export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount, setCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-heading shrink-0 text-lg font-black tracking-tight sm:text-xl"
          >
            <span className="bg-gradient-to-r from-orange-400 via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent">
              SOLE
            </span>
            <span className="text-foreground"> Store</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="relative size-9"
              onClick={() => setCartOpen(true)}
              aria-label="打开购物车"
            >
              <ShoppingBag className="size-5" />
              {itemCount > 0 ? (
                <Badge
                  variant="secondary"
                  className="absolute -right-0.5 -top-0.5 min-w-5 justify-center border-0 bg-gradient-to-r from-orange-500 to-fuchsia-600 px-1 text-[10px] text-white"
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </Badge>
              ) : null}
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="打开菜单"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetContent side="right" className="w-[min(100%,320px)]">
                <SheetHeader>
                  <SheetTitle>菜单</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <CartSheet />
    </>
  );
}
