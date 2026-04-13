import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面说明",
  description: "当前站点为企业展示版本。",
};

export default function NewArrivalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <h1 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
        企业展示站说明
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        新品模块已下线，当前版本仅保留企业官网展示内容。
      </p>
    </div>
  );
}
