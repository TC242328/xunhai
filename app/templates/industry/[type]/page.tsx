import Link from "next/link";
import { notFound } from "next/navigation";

type IndustryTemplate = {
  title: string;
  subtitle: string;
  heroText: string;
  pageStructure: string[];
  modules: string[];
  conversionPlan: string[];
  stylePreviews: {
    name: string;
    image: string;
    fit: string;
    palette: string;
  }[];
  templateSamples?: {
    title: string;
    image: string;
    desc: string;
  }[];
  servicePackages?: { title: string; items: string[] }[];
  advantages?: string[];
  faq?: { q: string; a: string }[];
};

const industryTemplates: Record<string, IndustryTemplate> = {
  corporate: {
    title: "企业网模板",
    subtitle: "适合企业官网、平台型业务与行业解决方案公司",
    heroText: "打造专业可信的企业官网，以品牌展示与业务转化为核心，构建可持续迭代的企业网络门户。",
    pageStructure: ["首页", "客户案例", "解决方案", "新闻资讯", "关于我们", "联系我们"],
    modules: ["双语切换", "云平台项目模块", "服务内容模块", "成功案例与资讯", "联系方式区"],
    conversionPlan: ["首屏突出平台价值", "解决方案按角色拆分", "案例模块做行业筛选", "底部保留电话与表单"],
    templateSamples: [
      {
        title: "企业模板示意",
        image: "/case-images/iot-template-full.png",
        desc: "已按企业官网风格适配，可用于平台型与行业方案型企业展示。",
      },
    ],
    stylePreviews: [
      {
        name: "物联平台风",
        image: "/case-images/corporate-style-1.png",
        fit: "适合智慧工地与物联网平台类官网",
        palette: "科技蓝 + 白",
      },
      {
        name: "行业案例风",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        fit: "适合客户案例与项目成果展示",
        palette: "深蓝 + 中性灰",
      },
      {
        name: "解决方案风",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        fit: "适合展示平台能力与行业方案",
        palette: "深色 + 科技蓝",
      },
    ],
  },
  brand: {
    title: "品牌展示模板",
    subtitle: "适合设计公司、品牌工作室、创意服务团队",
    heroText: "通过高质感视觉与品牌故事，提升品牌辨识度。",
    pageStructure: ["首页", "品牌故事", "作品展示", "服务流程", "客户评价", "联系我们"],
    modules: ["全屏视觉Banner", "品牌理念区", "作品瀑布流", "团队介绍", "咨询表单"],
    conversionPlan: ["首页强调定位", "作品页按行业分类", "增加客户口碑", "底部常驻咨询入口"],
    stylePreviews: [
      {
        name: "高级感画册风",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        fit: "适合设计工作室、品牌团队",
        palette: "黑白灰",
      },
      {
        name: "创意多彩风",
        image:
          "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
        fit: "适合创意机构、视觉品牌",
        palette: "亮色渐变",
      },
      {
        name: "简洁留白风",
        image:
          "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=80",
        fit: "适合轻奢品牌展示",
        palette: "米白 + 浅灰",
      },
    ],
  },
  "global-shop": {
    title: "外贸独立站模板",
    subtitle: "适合跨境卖家、工厂出海品牌、海外B2C",
    heroText: "深度赋能中国品牌出海，兼顾品牌展示、询盘获取与下单转化。",
    pageStructure: ["首页", "产品目录", "产品详情", "关于我们", "物流与售后", "联系我们"],
    modules: ["多语言切换", "多币种显示", "询盘与报价", "海外支付", "SEO基础设置"],
    conversionPlan: ["首屏突出交付能力", "详情页强化参数", "增加信任背书", "询盘表单最少字段"],
    servicePackages: [
      {
        title: "建站与开发",
        items: ["个人网站定制开发", "多语言多币种", "支付与物流插件集成"],
      },
      {
        title: "视觉与体验优化",
        items: ["品牌UI视觉统一", "移动端适配优化", "速度与安全加固", "CTA转化路径优化"],
      },
      {
        title: "数据与运营支持",
        items: ["GA/Meta像素埋点", "广告投放对接", "SEO基础架构", "后台培训与交接"],
      },
    ],
    advantages: ["标准站 5-10 天上线", "全流程交付清晰透明", "以转化为核心做页面设计", "支持长期迭代维护"],
    faq: [
      { q: "建站周期多久？", a: "模板型站点一般 5-10 天，定制功能视复杂度 20-60 天。" },
      { q: "支持哪些平台？", a: "常见为 Shopify 与 WordPress，也可按业务形态做技术选型。" },
      { q: "是否支持后续运营？", a: "可提供SEO、广告追踪、数据分析和持续优化服务。" },
    ],
    stylePreviews: [
      {
        name: "出海品牌风",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        fit: "适合跨境DTC品牌",
        palette: "黑 + 白 + 点缀色",
      },
      {
        name: "产品参数风",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        fit: "适合设备、电子品类出海",
        palette: "深色 + 科技蓝",
      },
      {
        name: "商城促销风",
        image:
          "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
        fit: "适合高频营销活动品牌",
        palette: "白底 + 高对比按钮",
      },
    ],
  },
  landing: {
    title: "营销落地页模板",
    subtitle: "适合投放广告、活动推广、新品上线",
    heroText: "单页聚焦一个目标，最大化获取线索和成交。",
    pageStructure: ["首屏卖点", "痛点场景", "方案优势", "客户见证", "常见问题", "行动按钮"],
    modules: ["强主标题", "前后对比", "社证评价", "限时优惠", "转化表单"],
    conversionPlan: ["减少无关跳转", "按钮文案统一", "表单放两处", "页面加载速度优先"],
    stylePreviews: [
      {
        name: "高转化直销风",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        fit: "适合广告投放落地页",
        palette: "亮色按钮 + 白底",
      },
      {
        name: "活动倒计时风",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        fit: "适合新品预售和活动页",
        palette: "深色 + 高亮红橙",
      },
      {
        name: "专家背书风",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        fit: "适合教育、咨询、服务推广",
        palette: "蓝白商务",
      },
    ],
  },
  "service-company": {
    title: "服务型公司模板",
    subtitle: "适合咨询、代运营、技术外包、本地服务机构",
    heroText: "清晰展示服务内容和流程，让客户快速决定是否合作。",
    pageStructure: ["首页", "服务项目", "服务流程", "案例说明", "报价说明", "预约咨询"],
    modules: ["服务清单卡片", "流程时间轴", "行业案例", "报价区间", "在线预约"],
    conversionPlan: ["首屏放核心服务", "流程区降低顾虑", "案例写结果数据", "预约入口固定显示"],
    stylePreviews: [
      {
        name: "专业顾问风",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        fit: "适合咨询、代运营公司",
        palette: "深蓝 + 白",
      },
      {
        name: "本地服务风",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        fit: "适合本地生活服务机构",
        palette: "浅灰 + 主题色",
      },
      {
        name: "数据成果风",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        fit: "适合强调结果导向团队",
        palette: "深色图表 + 白底",
      },
    ],
  },
  education: {
    title: "教育培训模板",
    subtitle: "适合培训机构、在线课程、职业教育品牌",
    heroText: "突出课程价值与师资能力，提升试听和报名转化。",
    pageStructure: ["首页", "课程体系", "名师介绍", "学员成果", "校区信息", "立即报名"],
    modules: ["课程分类导航", "师资卡片", "学员评价", "试听预约", "报名表单"],
    conversionPlan: ["课程页强调结果", "师资区放真实经历", "评价区图文并行", "报名按钮贯穿全页"],
    stylePreviews: [
      {
        name: "学院官网风",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
        fit: "适合培训机构官网",
        palette: "蓝白教育风",
      },
      {
        name: "课程销售风",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
        fit: "适合在线课程报名",
        palette: "白底 + 活力色",
      },
      {
        name: "职业提升风",
        image:
          "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
        fit: "适合职业教育品牌",
        palette: "深蓝 + 橙色",
      },
    ],
  },
  "chemical-coating": {
    title: "化工涂料模板",
    subtitle: "适合化工材料、涂料、环保工艺类企业",
    heroText: "突出产品参数、应用场景和资质认证，建立行业信任。",
    pageStructure: ["首页", "产品体系", "应用场景", "检测报告", "技术支持", "联系我们"],
    modules: ["参数对比", "案例场景图", "资质证书", "询盘表单"],
    conversionPlan: ["首屏突出安全与稳定", "详情页参数完整", "底部固定询盘入口", "增加下载资料按钮"],
    templateSamples: [
      {
        title: "化工材料模板示意",
        image: "/case-images/chemical-template-full.png",
        desc: "已适配为整页展示图，适合化工与材料类企业直接参考。",
      },
    ],
    stylePreviews: [
      {
        name: "工业参数风",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
        fit: "适合化工与材料企业官网",
        palette: "深蓝 + 灰白",
      },
      {
        name: "实验室信任风",
        image:
          "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
        fit: "适合检测报告和技术服务展示",
        palette: "白 + 冷灰",
      },
      {
        name: "应用场景风",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
        fit: "适合强调行业应用案例",
        palette: "深色 + 强对比",
      },
    ],
  },
  "mechanical-equipment": {
    title: "机械设备模板",
    subtitle: "适合机械制造、工业设备、自动化工厂类企业",
    heroText: "打造中国机械行业具有影响力的品牌，突出设备能力与工程实力。",
    pageStructure: ["首页", "关于我们", "优质服务", "新闻动态", "联系我们"],
    modules: ["产品展示（工业机器人/零部件/标准设备）", "企业介绍", "新闻中心", "联系表单"],
    conversionPlan: ["首屏强调品牌口号", "产品模块按品类分组", "新闻模块提升专业度", "底部保留电话与询盘表单"],
    templateSamples: [
      {
        title: "机械设备模板示意",
        image: "/case-images/mechanical-template-full.png",
        desc: "参考机械行业模板结构，适合设备企业官网展示与获客。",
      },
    ],
    stylePreviews: [
      {
        name: "工业品牌风",
        image:
          "https://images.unsplash.com/photo-1565431184865-bac3f4f27f3f?auto=format&fit=crop&w=1200&q=80",
        fit: "适合机械设备与工业制造企业",
        palette: "深蓝 + 白",
      },
      {
        name: "自动化产线风",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        fit: "适合自动化设备与产线企业",
        palette: "深灰 + 工业蓝",
      },
      {
        name: "工程案例风",
        image:
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
        fit: "适合强调工程项目与交付能力",
        palette: "白 + 钢铁灰",
      },
    ],
  },
  "semiconductor-tech": {
    title: "半导体科技模板",
    subtitle: "适合芯片、电子元件、硬科技企业",
    heroText: "以技术实力和产品规格为主线，突出研发能力。",
    pageStructure: ["首页", "核心产品", "技术平台", "应用行业", "新闻动态", "联系我们"],
    modules: ["参数表", "芯片架构示意", "行业应用卡片", "在线咨询"],
    conversionPlan: ["首屏展示技术亮点", "产品页放规格下载", "应用页按行业分类", "联系我们保留电话与表单"],
    templateSamples: [
      {
        title: "电子工厂模板示意",
        image: "/case-images/semiconductor-template-full.png",
        desc: "已适配为整页展示图，适合半导体与电子工厂官网风格。",
      },
    ],
    stylePreviews: [
      {
        name: "芯片科技风",
        image: "/case-images/semiconductor-template.png",
        fit: "适合半导体与电子工厂官网展示",
        palette: "科技蓝 + 深灰",
      },
      {
        name: "硬核参数风",
        image:
          "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1200&q=80",
        fit: "适合参数导向型B2B网站",
        palette: "黑白 + 点缀蓝",
      },
      {
        name: "研发展示风",
        image:
          "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
        fit: "适合突出研发团队与实验环境",
        palette: "深蓝 + 银灰",
      },
    ],
  },
  "smart-tech": {
    title: "智能机器人模板",
    subtitle: "适合机器人、智能科技、自动化方案类企业",
    heroText: "聚焦机器人自主移动解决方案，突出一体化方案服务与技术实力。",
    pageStructure: ["首页", "公司业务", "新闻资讯", "核心技术", "关于我们", "联系我们"],
    modules: ["在线视频模块", "业务能力卡片", "产品视频专区", "案例与新闻模块"],
    conversionPlan: ["首屏突出技术定位", "业务模块分层展示", "视频增强信任", "底部固定联系方式与咨询入口"],
    templateSamples: [
      {
        title: "智能机器人模板示意",
        image: "/case-images/smart-robot-template-full.png",
        desc: "参考智能机器人官网结构，适合展示平台能力、核心技术与业务落地。",
      },
    ],
    stylePreviews: [
      {
        name: "机器人科技风",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
        fit: "适合机器人与AI解决方案官网",
        palette: "科技蓝 + 深灰",
      },
      {
        name: "移动平台风",
        image:
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
        fit: "适合展示自主移动平台与应用集成",
        palette: "白底 + 科技蓝",
      },
      {
        name: "业务展示风",
        image:
          "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=1200&q=80",
        fit: "适合公司业务与案例展示",
        palette: "蓝白商务",
      },
    ],
  },
  "fashion-women": {
    title: "女装品牌模板",
    subtitle: "适合女装品牌、电商独立站、时尚集合店",
    heroText: "以视觉氛围和单品转化为核心，打造品牌感独立站。",
    pageStructure: ["首页", "新品上架", "分类列表", "商品详情", "品牌故事", "购物车结账"],
    modules: ["Lookbook", "尺码助手", "穿搭推荐", "限时促销"],
    conversionPlan: ["首屏突出主推款", "详情页增加搭配推荐", "结账流程减少步骤", "活动区强化时效"],
    stylePreviews: [
      {
        name: "轻奢简约风",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
        fit: "适合高客单品牌女装站",
        palette: "米白 + 黑",
      },
      {
        name: "时尚画报风",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        fit: "适合视觉导向型品牌",
        palette: "白 + 高级灰",
      },
      {
        name: "活动营销风",
        image:
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80",
        fit: "适合频繁上新与促销品牌",
        palette: "浅色背景 + 亮色按钮",
      },
    ],
  },
  "hr-service": {
    title: "人力资源模板",
    subtitle: "适合招聘服务、猎头、组织咨询类公司",
    heroText: "突出服务能力与成功案例，提高企业客户咨询率。",
    pageStructure: ["首页", "服务内容", "行业方案", "成功案例", "顾问团队", "联系我们"],
    modules: ["服务流程图", "岗位库展示", "客户评价", "预约沟通表单"],
    conversionPlan: ["首屏突出服务对象", "服务流程降低沟通成本", "案例展示真实结果", "表单字段精简"],
    stylePreviews: [
      {
        name: "专业咨询风",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        fit: "适合HR与咨询机构官网",
        palette: "商务蓝 + 白",
      },
      {
        name: "招聘平台风",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        fit: "适合岗位与服务双展示",
        palette: "白底 + 中性色",
      },
      {
        name: "团队信任风",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        fit: "适合突出顾问团队能力",
        palette: "深蓝 + 灰白",
      },
    ],
  },
  instrumentation: {
    title: "仪器器材模板",
    subtitle: "适合仪器设备、测试器材、工业工具企业",
    heroText: "突出产品性能、参数和行业应用，提升B2B询盘效率。",
    pageStructure: ["首页", "产品中心", "技术参数", "应用行业", "资料下载", "联系我们"],
    modules: ["规格表", "应用案例", "售后服务", "询价表单"],
    conversionPlan: ["参数页可下载", "应用场景可筛选", "底部固定询价按钮", "联系方式多渠道显示"],
    stylePreviews: [
      {
        name: "设备展示风",
        image:
          "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
        fit: "适合工业仪器企业官网",
        palette: "深灰 + 蓝色",
      },
      {
        name: "参数文档风",
        image:
          "https://images.unsplash.com/photo-1581092919535-7146ff1a590e?auto=format&fit=crop&w=1200&q=80",
        fit: "适合技术参数导向页面",
        palette: "白底 + 冷色调",
      },
      {
        name: "应用案例风",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        fit: "适合强调行业落地能力",
        palette: "蓝灰 + 白",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(industryTemplates).map((type) => ({ type }));
}

export default async function IndustryTemplatePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const template = industryTemplates[type];
  const heroBgByType: Record<string, string> = {
    "semiconductor-tech": "/case-images/semiconductor-template-full.png",
    "chemical-coating": "/case-images/chemical-template-full.png",
  };

  if (!template) notFound();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">{template.title}</h1>
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            返回首页
          </Link>
        </div>
      </section>

      <section
        className="border-b border-slate-200"
        style={
          heroBgByType[type]
            ? {
                backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('${heroBgByType[type]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500">{template.subtitle}</p>
          <p className="mt-3 max-w-3xl text-lg font-semibold text-slate-800">{template.heroText}</p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-bold">页面结构</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {template.pageStructure.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-bold">核心模块</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {template.modules.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-bold">转化建议</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {template.conversionPlan.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      {template.templateSamples?.length ? (
        <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-5">
            <h2 className="text-2xl font-black tracking-tight">模板示意图</h2>
            <p className="mt-2 text-sm text-slate-600">根据你提供的模板图片已完成页面适配。</p>
          </div>
          <div
            className={`grid gap-6 ${
              template.templateSamples.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
            }`}
          >
            {template.templateSamples.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover md:h-[560px]"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {template.servicePackages?.length ? (
        <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black tracking-tight">服务内容模块</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {template.servicePackages.map((pack) => (
              <article key={pack.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-bold">{pack.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {pack.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {template.advantages?.length ? (
        <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black tracking-tight">核心优势</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {template.advantages.map((item) => (
                <p key={item} className="rounded-md bg-white p-3 text-sm text-slate-700">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {template.faq?.length ? (
        <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black tracking-tight">常见问题</h2>
          <div className="mt-5 space-y-3">
            {template.faq.map((item) => (
              <article key={item.q} className="rounded-lg border border-slate-200 p-4">
                <p className="font-semibold">{item.q}</p>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

    </main>
  );
}
