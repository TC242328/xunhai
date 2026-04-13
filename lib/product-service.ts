import type { ShoeCategory, ShoeProduct } from "@/lib/types";
import { db } from "@/lib/db";
import type { Product } from "@prisma/client";

/** 将数据库行映射为前台 ShoeProduct */
function mapRow(row: Product): ShoeProduct {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    tagline: row.tagline,
    category: row.category as ShoeCategory,
    categoryLabel: row.categoryLabel,
    price: row.price,
    isNew: row.isNew,
    description: row.description,
    colors: JSON.parse(row.colors) as ShoeProduct["colors"],
    gallery: JSON.parse(row.gallery) as string[],
    sizes: JSON.parse(row.sizes) as string[],
    sortOrder: row.sortOrder,
  };
}

/** 全部商品（列表、筛选用），按 sortOrder 与更新时间排序 */
export async function getAllProducts(): Promise<ShoeProduct[]> {
  const rows = await db.product.findMany({
    orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
  });
  return rows.map(mapRow);
}

export async function getProductBySlug(
  slug: string,
): Promise<ShoeProduct | null> {
  const row = await db.product.findUnique({ where: { slug } });
  return row ? mapRow(row) : null;
}

export async function getProductById(
  id: string,
): Promise<ShoeProduct | null> {
  const row = await db.product.findUnique({ where: { id } });
  return row ? mapRow(row) : null;
}

/** 首页推荐：新品优先，再按价格 */
export async function getFeaturedProducts(
  count = 6,
): Promise<ShoeProduct[]> {
  const rows = await db.product.findMany({
    orderBy: [{ isNew: "desc" }, { price: "desc" }],
    take: count,
  });
  return rows.map(mapRow);
}

export async function getAllSlugs(): Promise<string[]> {
  const rows = await db.product.findMany({ select: { slug: true } });
  return rows.map((r) => r.slug);
}

export async function countProducts(): Promise<number> {
  return db.product.count();
}
