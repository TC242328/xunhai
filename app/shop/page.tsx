import type { Metadata } from "next";
import { getAllProducts } from "@/lib/product-service";
import { ShopFilters } from "@/components/shop/shop-filters";
import { ProductGrid } from "@/components/shop/product-grid";
import {
  parseShopSearchParams,
  priceMatches,
} from "@/lib/shop-url";

export const metadata: Metadata = {
  title: "商店",
  description: "浏览球鞋、跑鞋与休闲鞋，按类型与价格筛选。",
};

type ShopPageProps = {
  searchParams: Promise<{ category?: string; price?: string }>;
};

/** 商品列表：网格 + 筛选（类型 / 价位），数据来自数据库 */
export default async function ShopPage({ searchParams }: ShopPageProps) {
  const raw = await searchParams;
  const filters = parseShopSearchParams(raw);
  const all = await getAllProducts();

  const filtered = all.filter((p) => {
    if (filters.category !== "all" && p.category !== filters.category) {
      return false;
    }
    if (!priceMatches(p.price, filters.price)) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
          商店
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          共 {filtered.length} 款鞋履符合当前筛选（全站共 {all.length} 款）。
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start">
        <aside className="lg:sticky lg:top-20">
          <ShopFilters current={filters} />
        </aside>
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
