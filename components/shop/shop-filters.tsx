import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ShoeCategory } from "@/lib/types";
import type { PriceFilterKey } from "@/lib/shop-url";
import { buildShopHref } from "@/lib/shop-url";

interface ShopFiltersProps {
  current: { category: ShoeCategory | "all"; price: PriceFilterKey };
}

const categories: { key: ShoeCategory | "all"; label: string }[] = [
  { key: "all", label: "全部类型" },
  { key: "sneaker", label: "球鞋" },
  { key: "runner", label: "跑鞋" },
  { key: "casual", label: "休闲" },
];

const prices: { key: PriceFilterKey; label: string }[] = [
  { key: "all", label: "全部价位" },
  { key: "lt800", label: "¥800 以下" },
  { key: "bw800_1500", label: "¥800 – 1500" },
  { key: "gt1500", label: "¥1500 以上" },
];

/** 商店列表筛选：类型 + 价位，使用链接保持可分享与 SEO */
export function ShopFilters({ current }: ShopFiltersProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border/60 bg-card/30 p-4 backdrop-blur-sm sm:p-5">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          类型
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = current.category === c.key;
            const href = buildShopHref({ category: c.key }, current);
            return (
              <Link
                key={c.key}
                href={href}
                scroll={false}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200",
                  active
                    ? "border-transparent bg-gradient-to-r from-orange-500 via-purple-600 to-emerald-500 text-white shadow-md"
                    : "border-border bg-background/50 text-muted-foreground hover:border-orange-500/40 hover:text-foreground",
                )}
              >
                {c.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          价格
        </p>
        <div className="flex flex-wrap gap-2">
          {prices.map((p) => {
            const active = current.price === p.key;
            const href = buildShopHref({ price: p.key }, current);
            return (
              <Link
                key={p.key}
                href={href}
                scroll={false}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200",
                  active
                    ? "border-transparent bg-muted text-foreground ring-2 ring-purple-500/50"
                    : "border-border bg-background/50 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground",
                )}
              >
                {p.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
