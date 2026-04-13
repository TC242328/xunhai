import type { ShoeProduct } from "@/lib/types";
import { ProductCard } from "@/components/shop/product-card";

interface ProductGridProps {
  products: ShoeProduct[];
}

/** 响应式商品网格：移动端两列，平板三列，桌面四列 */
export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
        没有符合筛选条件的鞋款，试试调整筛选条件。
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
