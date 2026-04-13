import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "页面说明",
  description: "当前站点为企业展示版本。",
};

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Link
        href="/shop"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mb-8 text-muted-foreground hover:text-foreground",
        )}
      >
        ← 返回商店
      </Link>
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-black tracking-tight sm:text-3xl">企业展示站说明</h1>
        <p className="mt-3 text-slate-600">商品详情模块已下线，当前版本仅保留企业官网展示内容。</p>
      </div>
    </div>
  );
}
