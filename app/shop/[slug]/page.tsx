import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getProductBySlug } from "@/lib/product-service";
import { ProductDetailClient } from "@/components/shop/product-detail-client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "未找到" };
  return {
    title: product.name,
    description: product.tagline,
  };
}

/** 商品详情：大图与多角度、配色尺码、加入购物车 */
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

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
      <ProductDetailClient product={product} />
    </div>
  );
}
