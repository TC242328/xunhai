"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ExternalLink, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { signOutFromAdmin } from "@/app/admin/actions";

/** 后台壳：侧栏导航 + 主内容区（登录页不显示侧栏） */
export function AdminChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const links = [
    { href: "/admin", label: "概览", icon: LayoutDashboard },
    { href: "/admin/products", label: "商品管理", icon: Package },
    { href: "/admin/payments", label: "支付配置", icon: CreditCard },
  ];

  return (
    <div className="flex min-h-[100dvh] bg-zinc-950 text-zinc-50">
      <aside className="hidden min-h-screen w-56 shrink-0 flex-col border-r border-zinc-800 bg-zinc-900/50 md:flex">
        <div className="flex h-14 items-center border-b border-zinc-800 px-4 font-heading text-lg font-bold tracking-tight">
          管理后台
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 p-3">
          {links.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-white",
                )}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-zinc-800 p-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mb-2 flex w-full items-center justify-start gap-2 text-zinc-400 hover:text-white",
            )}
          >
            <ExternalLink className="size-4" />
            返回前台网站
          </Link>
          <form action={signOutFromAdmin}>
            <Button
              type="submit"
              variant="outline"
              className="w-full border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-800"
            >
              退出登录
            </Button>
          </form>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-4 md:hidden">
          <span className="font-heading font-bold">管理后台</span>
          <div className="flex gap-2">
            <Link
              href="/admin/products"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "border-zinc-700",
              )}
            >
              商品
            </Link>
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "border-zinc-700",
              )}
            >
              前台
            </Link>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
