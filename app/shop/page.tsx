import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "商店",
  description: "当前站点为企业展示版本，商店模块暂未开放。",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
          商店
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          当前已切换为企业展示站版本，商店功能暂不对外开放。
        </p>
      </div>
    </div>
  );
}
