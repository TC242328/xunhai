import Link from "next/link";
import { ProductForm } from "@/components/admin/product-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** 新建商品 */
export default function AdminNewProductPage() {
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
      <h1 className="font-heading text-2xl font-bold text-white">新建商品</h1>
      <ProductForm mode="create" />
    </div>
  );
}
