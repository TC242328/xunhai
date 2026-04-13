import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解浔海科技的服务与项目经验。",
};

/** 关于页：企业介绍 */
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-black tracking-tight">
        关于浔海科技
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        浔海科技专注企业官网建设、独立站搭建与 SEO 优化服务，致力于为企业提供清晰、实用且可持续迭代的网站解决方案。
      </p>
      <p className="mt-4 text-muted-foreground">
        我们以转化为导向，从信息架构、页面设计到上线交付全流程协作，帮助客户把网站变成稳定获客入口。
      </p>
    </div>
  );
}
