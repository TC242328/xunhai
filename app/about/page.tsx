import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解 SOLE Store 的品牌故事与理念。",
};

/** 关于页：品牌叙事（演示文案） */
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-black tracking-tight">
        关于 SOLE Store
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        SOLE Store
        是一个以「态度先行」为理念的潮流鞋履独立站演示项目：深色界面、霓虹渐变与街头视觉语言，只为衬托每一双鞋的主角感。
      </p>
      <p className="mt-4 text-muted-foreground">
        本站商品、价格与库存均为前端假数据，用于展示 Next.js App Router、Tailwind
        CSS 与 shadcn/ui 组件的整合方式。后续可接入真实 CMS、支付与物流。
      </p>
    </div>
  );
}
