import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description: "浔海科技联系方式。",
};

/** 联系页：企业联系方式 */
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-black tracking-tight">
        联系我们
      </h1>
      <ul className="mt-8 space-y-4 text-muted-foreground">
        <li>
          <span className="font-medium text-foreground">商务邮箱：</span>
          <a
            className="underline-offset-4 hover:text-foreground hover:underline"
            href="mailto:13805492641@163.com"
          >
            13805492641@163.com
          </a>
        </li>
        <li>
          <span className="font-medium text-foreground">客服微信：</span>
          13805492641（电话同号）
        </li>
        <li>
          <span className="font-medium text-foreground">联系电话：</span>
          13805492641
        </li>
      </ul>
    </div>
  );
}
