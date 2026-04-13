import Link from "next/link";

const templates = [
  { name: "企业官网模板", type: "corporate" },
  { name: "独立站建设", type: "global-shop" },
];

const coreServices = [
  {
    title: "网站设计",
    points: ["企业官网视觉设计", "内容架构与信息层级", "移动端体验优化"],
  },
  {
    title: "独立站设计",
    points: ["品牌独立站搭建", "产品详情与转化路径", "多语言与多币种支持"],
  },
  {
    title: "SEO优化",
    points: ["站内结构优化", "关键词布局与内容策略", "持续数据复盘优化"],
  },
];

const advantages = [
  "标准站 5-10 天可上线",
  "页面以转化为核心设计",
  "支持后续运营与迭代",
  "提供 1 对 1 方案沟通",
];

const pagePreviews = [
  {
    title: "企业官网示例",
    image: "/case-images/hongcai-case-hero-v2.png",
    desc: "适合制造与服务型企业，强调实力展示与咨询转化。",
    href: "/previews/corporate",
  },
  {
    title: "独立站示例",
    image: "/case-images/independent-example-v2.png",
    desc: "适合品牌出海，突出产品卖点与购买路径。",
    href: "/previews/independent",
  },
  {
    title: "SEO示例",
    image: "/case-images/seo-example-v2.png",
    desc: "参考企业SEO案例：8个月自然流量提升478%，并实现询盘成本明显下降。",
    href: "/previews/seo",
  },
];

const faq = [
  { q: "一般多久可以上线？", a: "模板型项目 5-10 天，定制项目按功能复杂度评估周期。" },
  { q: "你们是否提供SEO后续服务？", a: "提供。可按月执行站内优化、内容策略和数据复盘。" },
  { q: "是否支持企业长期维护？", a: "支持，我们可提供持续迭代与技术维护服务。" },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="text-base font-extrabold tracking-tight sm:text-lg">
            浔海科技
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition-colors hover:text-slate-900">
              服务
            </a>
            <a href="#advantages" className="transition-colors hover:text-slate-900">
              优势
            </a>
            <a href="#results" className="transition-colors hover:text-slate-900">
              成果
            </a>
            <a href="#contact" className="transition-colors hover:text-slate-900">
              联系我们
            </a>
          </nav>
          <a
            href="tel:13805492641"
            className="rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:text-sm"
          >
            电话/微信：13805492641
          </a>
        </div>
      </header>

      <section
        className="border-b border-slate-200"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.86), rgba(255,255,255,0.86)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-slate-500">
              PROFESSIONAL DIGITAL STUDIO
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
              网站建设 · 网站设计
              <span className="block">独立站建设</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              我们专注企业官网与出海独立站建设，通过清晰内容结构和转化导向设计，
              帮你把网站变成持续获客的业务入口。
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                立即咨询方案
              </a>
              <a
                href="#services"
                className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-slate-50"
              >
                查看服务内容
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {coreServices.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                {item.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-2xl font-black tracking-tight">项目示例</h3>
          <p className="text-sm text-slate-500">以下仅为视觉风格参考，可按该方向定制</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pagePreviews.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="block overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <img src={item.image} alt={item.title} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <span className="inline-flex rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                  视觉参考
                </span>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                <p className="mt-2 text-xs font-semibold text-slate-500">可按此风格定制</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="templates" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">行业模板方向</h2>
          <p className="mt-4 text-slate-600">覆盖企业官网、品牌展示、外贸独立站等主流业务场景。</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((item) => (
            <Link
              href={`/templates/industry/${item.type}`}
              key={item.type}
              className="rounded-lg border border-slate-200 bg-white px-5 py-6 text-sm font-semibold transition-colors hover:bg-slate-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      <section id="advantages" className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">核心优势</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">常见问题</h2>
        <div className="mt-8 space-y-3">
          {faq.map((item) => (
            <article key={item.q} className="rounded-lg border border-slate-200 p-5">
              <h3 className="font-bold">{item.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-4xl px-4 py-18 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">现在就开始你的项目</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          联系我们，1 对 1 定制网站设计、独立站设计与SEO优化方案（电话/微信同号）。
        </p>
        <a
          href="tel:13805492641"
          className="mt-8 inline-flex rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          电话咨询：13805492641
        </a>
      </section>
    </main>
  );
}
