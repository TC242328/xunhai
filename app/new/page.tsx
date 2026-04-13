import type { Metadata } from "next";
import { getAllProducts } from "@/lib/product-service";
import { ProductGrid } from "@/components/shop/product-grid";

export const metadata: Metadata = {
  title: "新品",
  description: "SOLE Store 本季新品与限定配色。",
};

export const dynamic = "force-dynamic";

/** 新品页：筛选 isNew，数据来自数据库 */
export default async function NewArrivalsPage() {
  const all = await getAllProducts();
  const newOnes = all.filter((p) => p.isNew);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <h1 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
        本季新品
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        标注「新品」的鞋款集合，含碳板跑鞋、街头球鞋与限量配色灵感。
      </p>
      <div className="mt-10">
        <ProductGrid products={newOnes} />
      </div>
    </div>
  );
}
