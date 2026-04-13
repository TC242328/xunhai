import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type PreviewConfig = {
  title: string;
  image: string;
  summary: string;
  sections: string[];
};

const corporatePreviewSlices = [
  { src: "/case-images/hongcai-case-full-1.png", width: 307, height: 341, alt: "企业官网示例预览 · 上" },
  { src: "/case-images/hongcai-case-full-2.png", width: 307, height: 341, alt: "企业官网示例预览 · 中" },
  { src: "/case-images/hongcai-case-full-3.png", width: 307, height: 342, alt: "企业官网示例预览 · 下" },
] as const;

const independentPreviewSlices = [
  { src: "/case-images/independent-full-example-1.png", width: 344, height: 341, alt: "独立站示例预览 · 上" },
  { src: "/case-images/independent-full-example-2.png", width: 344, height: 341, alt: "独立站示例预览 · 中" },
  { src: "/case-images/independent-full-example-3.png", width: 344, height: 342, alt: "独立站示例预览 · 下" },
] as const;

const previews: Record<string, PreviewConfig> = {
  corporate: {
    title: "企业官网示例",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    summary: "适合制造与服务型企业，强调品牌实力、业务范围与联系转化。",
    sections: ["品牌主视觉首屏", "公司实力与资质区", "服务范围展示区", "客户案例与联系入口"],
  },
  independent: {
    title: "企业官网示例",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    summary: "适合品牌出海，重点展示产品卖点、信任背书与下单路径。",
    sections: ["产品主推首屏", "爆款与分类入口", "用户评价与信任模块", "促销CTA与下单入口"],
  },
  seo: {
    title: "SEO内容页预览",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80",
    summary: "适合长期内容运营，通过关键词内容与结构优化提升自然流量。",
    sections: ["关键词专题头图", "内容目录与内链", "图文内容主体", "咨询转化区与相关阅读"],
  },
};

export default async function PreviewDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const preview = previews[slug];

  if (!preview) notFound();

  if (slug === "corporate") {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">企业官网示例</h1>
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              返回首页
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <article className="mx-auto mb-6 w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="divide-y divide-slate-200/80 bg-slate-50">
              {corporatePreviewSlices.map((slice, index) => (
                <div key={slice.src} className="px-3 py-3 text-center sm:px-4 sm:py-4">
                  <Image
                    src={slice.src}
                    alt={slice.alt}
                    width={slice.width}
                    height={slice.height}
                    className="mx-auto h-auto max-w-full object-contain"
                    sizes="(max-width: 640px) 100vw, 448px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            <p className="border-t border-slate-200/80 bg-slate-50 px-4 py-2.5 text-center text-xs text-slate-500">
              同一案例分为 3 段，便于手机端阅读
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">案例档案</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              该示例参考“鸿彩数码”企业官网案例方向，定位为集研发、生产、销售于一体的高科技企业网站，
              重点展示产品体系、行业解决方案与服务能力。
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>- 参考方向：响应式企业官网 + 手机端适配</li>
              <li>- 行业类型：喷墨印花设备与耗材相关企业</li>
              <li>- 核心价值：创新、品质、服务</li>
            </ul>
          </article>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold">推荐页面结构</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>- 首页（品牌定位 + 主打设备）</li>
              <li>- 产品中心（设备、喷头、墨水、配件）</li>
              <li>- 解决方案（行业应用与落地场景）</li>
              <li>- 服务支持（培训、实施、售后）</li>
              <li>- 新闻资讯（动态与技术内容）</li>
              <li>- 联系我们（电话、表单、地址）</li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold">设计建议</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              页面建议延续大气简洁风格，结合产品视觉与行业色彩做识别，突出设备能力和解决方案表达，
              让客户能快速理解“能做什么、做得怎么样、如何联系你”。
            </p>
            <h4 className="mt-4 text-sm font-semibold">转化重点</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li>- 首屏放核心卖点与咨询按钮</li>
              <li>- 产品页增加参数对比与应用场景</li>
              <li>- 服务页强化交付流程和售后保障</li>
              <li>- 底部固定电话与询盘入口</li>
            </ul>
          </article>
        </section>
      </main>
    );
  }

  if (slug === "independent") {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">企业官网示例</h1>
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              返回首页
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <article className="mx-auto mb-6 w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="divide-y divide-slate-200/80 bg-slate-50">
              {independentPreviewSlices.map((slice, index) => (
                <div key={slice.src} className="px-3 py-3 text-center sm:px-4 sm:py-4">
                  <Image
                    src={slice.src}
                    alt={slice.alt}
                    width={slice.width}
                    height={slice.height}
                    className="mx-auto h-auto max-w-full object-contain"
                    sizes="(max-width: 640px) 100vw, 448px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            <p className="border-t border-slate-200/80 bg-slate-50 px-4 py-2.5 text-center text-xs text-slate-500">
              同一案例分为 3 段，便于手机端阅读
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">案例来源与定位</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              该示例参考电子烟外贸独立站的设计思路，核心方向是“简洁、高级、品牌感强”，
              通过清晰的页面层级与动态视觉，提升海外用户对品牌的第一印象与信任度。
            </p>
          </article>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold">推荐页面结构</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>- 引导页 / 品牌首屏（大图 + 核心卖点）</li>
              <li>- 首页（品牌价值、爆款、CTA）</li>
              <li>- 关于我们（品牌故事与研发实力）</li>
              <li>- 产品列表页（分类清晰、筛选明确）</li>
              <li>- 产品详情页（参数、对比、购买引导）</li>
              <li>- 社区/资讯页（内容沉淀与SEO）</li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold">设计评语</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              整体走简洁简约路线，版式清晰、留白充足，内容表达直接。主色建议黑白或深色系，
              营造高品质与高端感，适合外贸品牌独立站落地。
            </p>
            <h4 className="mt-4 text-sm font-semibold">落地建议</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li>- 首屏只讲一个核心价值，减少信息干扰</li>
              <li>- 列表页突出筛选和对比，降低决策成本</li>
              <li>- 详情页增加信任背书（认证/评价/FAQ）</li>
              <li>- 全站按钮文案统一，强化购买路径</li>
            </ul>
          </article>
        </section>

      </main>
    );
  }

  if (slug === "seo") {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">SEO示例</h1>
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              返回首页
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <article className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
              src="/case-images/seo-selby-hero.png"
              alt="The Selby House 页面示意图"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">The Selby House SEO案例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              以 The Selby House 家具独立站为案例原型，展示我们在家具品类的 SEO 操盘方法：
              先做站点诊断与关键词分层，再优化内容结构与商品页转化，最后通过技术SEO和持续复盘提升整体业绩。
            </p>
            <p className="mt-3 text-sm text-slate-700">
              参考网站：
              <a
                href="https://theselbyhouse.com/"
                target="_blank"
                rel="noreferrer"
                className="ml-1 font-semibold text-slate-900 underline underline-offset-2"
              >
                https://theselbyhouse.com/
              </a>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>- 第1周：站点诊断（收录、排名、跳出率、转化路径）</li>
              <li>- 第1-2周：重做关键词矩阵（品类词 + 场景词 + 问题词）</li>
              <li>- 第2-4周：优化分类页/产品页内容，并建立内容到商品的内链</li>
              <li>- 同步：技术SEO修复（速度、死链、重复页、URL结构）</li>
              <li>- 第4-6周：优化CTA、评价与信任模块，提升下单转化</li>
              <li>- 持续：每周复盘排名、流量、加购和成交，滚动迭代</li>
            </ul>
          </article>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold">结果表现（示例数据）</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>- 月自然流量：3,200 → 8,900（约 +178%）</li>
              <li>- Top10 关键词数：22 → 67（约 +205%）</li>
              <li>- 自然流量成交订单：41 → 96（约 +134%）</li>
              <li>- SEO渠道月销售额：$18,000 → $43,000（约 +139%）</li>
            </ul>
          </article>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">{preview.title}</h1>
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            返回首页
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <img src={preview.image} alt={preview.title} className="h-72 w-full object-cover md:h-[460px]" />
          <div className="p-6">
            <p className="text-sm text-slate-600">{preview.summary}</p>
            <h2 className="mt-5 text-xl font-bold">页面构成建议</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {preview.sections.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
