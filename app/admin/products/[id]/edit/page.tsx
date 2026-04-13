import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/product-service";
import { ProductForm } from "@/components/admin/product-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ id: string }> };

/** 编辑商品 */
export default async function AdminEditProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/products"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "text-zinc-400 hover:text-white",
          )}
        >
          ← 返回列表
        </Link>
      </div>
      <h1 className="font-heading text-2xl font-bold text-white">编辑：{product.name}</h1>
      <ProductForm mode="edit" product={product} />
    </div>
  );
}
