import Link from "next/link";

/** 全站页脚：联系方式与版权 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-card/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-heading text-lg font-semibold tracking-tight">
            SOLE Store
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            潮流鞋履独立站 · 演示数据仅供预览。商务合作请邮件联系。
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-medium text-foreground">联系我们</span>
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="mailto:hello@solestore.demo"
          >
            hello@solestore.demo
          </a>
          <span className="text-muted-foreground">微信客服：SOLEStoreDemo</span>
          <Link
            href="/contact"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            留言与门店信息
          </Link>
          <Link
            href="/admin/login"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            商家后台
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SOLE Store · 潮流鞋履 · 保留所有权利
      </div>
    </footer>
  );
}
