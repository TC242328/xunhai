import Link from "next/link";
import { notFound } from "next/navigation";
import { allCases } from "@/app/templates/cases";

export function generateStaticParams() {
  return allCases.map((item) => ({ slug: item.slug }));
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const current = allCases.find((item) => item.slug === slug);

  if (!current) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">{current.name}</h1>
          <Link href="/templates" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            返回模板库
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <img src={current.image} alt={current.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-slate-600">{current.summary}</p>
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">预估交付周期：{current.timeline}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">网站页面结构</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {current.pages.map((page) => (
              <li key={page}>- {page}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">功能配置</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {current.features.map((feature) => (
              <li key={feature}>- {feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
