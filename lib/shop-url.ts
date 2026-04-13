import type { ShoeCategory } from "@/lib/types";

export type PriceFilterKey = "all" | "lt800" | "bw800_1500" | "gt1500";

/** 解析列表页查询参数 */
export function parseShopSearchParams(searchParams: {
  category?: string;
  price?: string;
}): {
  category: ShoeCategory | "all";
  price: PriceFilterKey;
} {
  const rawCat = searchParams.category;
  const category: ShoeCategory | "all" =
    rawCat === "sneaker" || rawCat === "runner" || rawCat === "casual"
      ? rawCat
      : "all";

  const rawPrice = searchParams.price;
  const price: PriceFilterKey =
    rawPrice === "lt800" ||
    rawPrice === "bw800_1500" ||
    rawPrice === "gt1500"
      ? rawPrice
      : "all";

  return { category, price };
}

/** 拼接 /shop 查询串，用于筛选链接 */
export function buildShopHref(updates: {
  category?: ShoeCategory | "all";
  price?: PriceFilterKey;
}, current: { category: ShoeCategory | "all"; price: PriceFilterKey }) {
  const category = updates.category ?? current.category;
  const price = updates.price ?? current.price;

  const sp = new URLSearchParams();
  if (category !== "all") sp.set("category", category);
  if (price !== "all") sp.set("price", price);
  const q = sp.toString();
  return q ? `/shop?${q}` : "/shop";
}

export function priceMatches(price: number, key: PriceFilterKey): boolean {
  if (key === "all") return true;
  if (key === "lt800") return price < 800;
  if (key === "bw800_1500") return price >= 800 && price <= 1500;
  return price > 1500;
}
