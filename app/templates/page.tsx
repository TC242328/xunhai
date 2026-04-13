import Link from "next/link";
import { caseGroups } from "@/app/templates/cases";

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">模板库</h1>
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            返回首页
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-slate-600">
          我们整理了大方简洁的行业网站参考，便于客户快速感知最终效果。可基于任意风格进行定制开发。
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-16 sm:px-6 lg:px-8">
        {caseGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-5">
              <h2 className="text-2xl font-black tracking-tight">{group.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{group.intro}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {group.cases.map((item) => (
                <Link
                  href={`/templates/${item.slug}`}
                  key={item.name}
                  className="block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <img src={item.image} alt={item.name} className="h-56 w-full object-cover" loading="lazy" />
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="mt-3 text-sm font-semibold text-slate-700">查看网站结构与配置</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
