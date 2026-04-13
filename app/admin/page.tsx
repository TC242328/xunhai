import Link from "next/link";
import { auth } from "@/auth";
import { countProducts } from "@/lib/product-service";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** 后台首页：商品数量与快捷入口 */
export default async function AdminHomePage() {
  const session = await auth();
  const total = await countProducts();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-white">
          你好，{session?.user?.name ?? "管理员"}
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          在此维护鞋款数据，前台商店会即时读取数据库中的内容。
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
          <p className="text-sm text-zinc-400">商品总数</p>
          <p className="mt-2 font-heading text-3xl font-bold tabular-nums text-white">
            {total}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/products"
          className={cn(buttonVariants(), "bg-white text-zinc-900 hover:bg-zinc-200")}
        >
          管理商品
        </Link>
        <Link
          href="/admin/products/new"
          className={cn(buttonVariants({ variant: "outline" }), "border-zinc-600 text-zinc-100")}
        >
          新建商品
        </Link>
        <Link
          href="/admin/payments"
          className={cn(buttonVariants({ variant: "outline" }), "border-zinc-600 text-zinc-100")}
        >
          配置支付
        </Link>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost" }), "text-zinc-300 hover:text-white")}
        >
          预览前台
        </Link>
      </div>
    </div>
  );
}
