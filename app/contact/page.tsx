import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description: "SOLE Store 联系方式与演示信息。",
};

/** 联系页：邮箱、社交占位 */
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
            href="mailto:hello@solestore.demo"
          >
            hello@solestore.demo
          </a>
        </li>
        <li>
          <span className="font-medium text-foreground">客服微信：</span>
          SOLEStoreDemo
        </li>
        <li>
          <span className="font-medium text-foreground">线下快闪：</span>
          筹备中，欢迎预约探店（演示占位）。
        </li>
      </ul>
    </div>
  );
}
