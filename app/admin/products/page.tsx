import Link from "next/link";
import { db } from "@/lib/db";
import { deleteProduct } from "@/app/admin/products/actions";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** 商品列表：跳转编辑、删除 */
export default async function AdminProductsPage() {
  const rows = await db.product.findMany({
    orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
    select: {
      id: true,
      slug: true,
      name: true,
      price: true,
      categoryLabel: true,
      isNew: true,
      updatedAt: true,
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">商品管理</h1>
          <p className="text-sm text-zinc-400">共 {rows.length} 条记录</p>
        </div>
        <Link
          href="/admin/products/new"
          className={cn(
            buttonVariants(),
            "inline-flex bg-white text-zinc-900 hover:bg-zinc-200",
          )}
        >
          新建商品
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full min-w-[640px] text-left text-sm text-zinc-200">
          <thead className="border-b border-zinc-800 bg-zinc-900/80 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-4 py-3 font-medium">名称</th>
              <th className="px-4 py-3 font-medium">slug</th>
              <th className="px-4 py-3 font-medium">类型</th>
              <th className="px-4 py-3 font-medium">价格</th>
              <th className="px-4 py-3 font-medium">新品</th>
              <th className="px-4 py-3 font-medium">更新</th>
              <th className="px-4 py-3 font-medium">操作</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.id}
                className="border-b border-zinc-800/80 last:border-0 hover:bg-zinc-900/40"
              >
                <td className="px-4 py-3 font-medium text-white">{r.name}</td>
                <td className="px-4 py-3 text-zinc-500">{r.slug}</td>
                <td className="px-4 py-3">{r.categoryLabel}</td>
                <td className="px-4 py-3 tabular-nums">
                  ¥{r.price.toLocaleString("zh-CN")}
                </td>
                <td className="px-4 py-3">{r.isNew ? "是" : "否"}</td>
                <td className="px-4 py-3 text-zinc-500">
                  {r.updatedAt.toLocaleDateString("zh-CN")}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/admin/products/${r.id}/edit`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "border-zinc-600",
                      )}
                    >
                      编辑
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={r.id} />
                      <Button
                        type="submit"
                        variant="destructive"
                        size="sm"
                        className="bg-red-900/80 hover:bg-red-800"
                      >
                        删除
                      </Button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
