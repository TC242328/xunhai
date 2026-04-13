"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireAdmin } from "@/app/admin/guard";

export type ProductActionState = { error?: string } | null;

const colorSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  hex: z.string().min(1),
  image: z.string().min(1),
});

const schema = z.object({
  slug: z
    .string()
    .min(1)
    .max(120)
    .regex(
      /^[a-z0-9-]+$/,
      "URL 别名 slug 仅允许小写字母、数字与短横线",
    ),
  name: z.string().min(1).max(200),
  tagline: z.string().min(1).max(300),
  category: z.enum(["sneaker", "runner", "casual"]),
  categoryLabel: z.string().min(1).max(50),
  price: z.coerce.number().int().min(1).max(999_999),
  description: z.string().min(1).max(8000),
  isNew: z.boolean(),
  colors: z.array(colorSchema).min(1),
  gallery: z.array(z.string().min(1)),
  sizes: z.array(z.string().min(1)).min(1),
  sortOrder: z
    .union([z.string(), z.number()])
    .transform((v) => {
      if (v === "" || v === undefined || v === null) return 0;
      const n = typeof v === "number" ? v : Number(v);
      if (!Number.isFinite(n)) return 0;
      return Math.max(0, Math.min(99_999, Math.floor(n)));
    }),
});

function parseJson<T>(raw: string, label: string) {
  try {
    return { ok: true as const, data: JSON.parse(raw) as T };
  } catch {
    return { ok: false as const, error: `${label} 不是合法 JSON` };
  }
}

function formatZodError(err: z.ZodError) {
  return err.issues.map((i) => i.message).join("；");
}

export async function createProduct(
  _prev: ProductActionState,
  formData: FormData,
): Promise<ProductActionState> {
  await requireAdmin();

  const colorsJson = parseJson<unknown>(String(formData.get("colors") ?? ""), "配色（colors）");
  if (!colorsJson.ok) return { error: colorsJson.error };
  const galleryJson = parseJson<unknown>(String(formData.get("gallery") ?? ""), "多角度图（gallery）");
  if (!galleryJson.ok) return { error: galleryJson.error };
  const sizesJson = parseJson<unknown>(String(formData.get("sizes") ?? ""), "尺码（sizes）");
  if (!sizesJson.ok) return { error: sizesJson.error };

  const parsed = schema.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
    tagline: formData.get("tagline"),
    category: formData.get("category"),
    categoryLabel: formData.get("categoryLabel"),
    price: formData.get("price"),
    description: formData.get("description"),
    isNew: formData.get("isNew") === "true",
    colors: colorsJson.data,
    gallery: galleryJson.data,
    sizes: sizesJson.data,
    sortOrder: formData.get("sortOrder") ?? "",
  });

  if (!parsed.success) {
    return { error: formatZodError(parsed.error) };
  }

  const v = parsed.data;
  try {
    await db.product.create({
      data: {
        slug: v.slug,
        name: v.name,
        tagline: v.tagline,
        category: v.category,
        categoryLabel: v.categoryLabel,
        price: v.price,
        isNew: v.isNew,
        description: v.description,
        colors: JSON.stringify(v.colors),
        gallery: JSON.stringify(v.gallery),
        sizes: JSON.stringify(v.sizes),
        sortOrder: v.sortOrder,
      },
    });
  } catch (e: unknown) {
    if (
      e &&
      typeof e === "object" &&
      "code" in e &&
      (e as { code: string }).code === "P2002"
    ) {
      return { error: "该 URL 别名（slug）已被占用，请更换。" };
    }
    return { error: "保存失败，请检查数据库连接或稍后重试。" };
  }

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/new");
  revalidatePath(`/shop/${v.slug}`);
  redirect("/admin/products");
}

export async function updateProduct(
  id: string,
  _prev: ProductActionState,
  formData: FormData,
): Promise<ProductActionState> {
  await requireAdmin();

  const colorsJson = parseJson<unknown>(String(formData.get("colors") ?? ""), "配色（colors）");
  if (!colorsJson.ok) return { error: colorsJson.error };
  const galleryJson = parseJson<unknown>(String(formData.get("gallery") ?? ""), "多角度图（gallery）");
  if (!galleryJson.ok) return { error: galleryJson.error };
  const sizesJson = parseJson<unknown>(String(formData.get("sizes") ?? ""), "尺码（sizes）");
  if (!sizesJson.ok) return { error: sizesJson.error };

  const parsed = schema.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
    tagline: formData.get("tagline"),
    category: formData.get("category"),
    categoryLabel: formData.get("categoryLabel"),
    price: formData.get("price"),
    description: formData.get("description"),
    isNew: formData.get("isNew") === "true",
    colors: colorsJson.data,
    gallery: galleryJson.data,
    sizes: sizesJson.data,
    sortOrder: formData.get("sortOrder") ?? "",
  });

  if (!parsed.success) {
    return { error: formatZodError(parsed.error) };
  }

  const v = parsed.data;
  const other = await db.product.findFirst({
    where: { slug: v.slug, NOT: { id } },
  });
  if (other) {
    return { error: "该 URL 别名（slug）已被其他商品占用。" };
  }

  try {
    await db.product.update({
      where: { id },
      data: {
        slug: v.slug,
        name: v.name,
        tagline: v.tagline,
        category: v.category,
        categoryLabel: v.categoryLabel,
        price: v.price,
        isNew: v.isNew,
        description: v.description,
        colors: JSON.stringify(v.colors),
        gallery: JSON.stringify(v.gallery),
        sizes: JSON.stringify(v.sizes),
        sortOrder: v.sortOrder,
      },
    });
  } catch {
    return { error: "更新失败，请稍后重试。" };
  }

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/new");
  revalidatePath(`/shop/${v.slug}`);
  redirect("/admin/products");
}

export async function deleteProduct(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) redirect("/admin/products");
  const row = await db.product.findUnique({ where: { id }, select: { slug: true } });
  if (!row) redirect("/admin/products");
  await db.product.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/new");
  revalidatePath(`/shop/${row.slug}`);
  redirect("/admin/products");
}
