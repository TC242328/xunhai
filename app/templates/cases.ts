export type TemplateCase = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  pages: string[];
  features: string[];
  timeline: string;
};

export type TemplateGroup = {
  title: string;
  intro: string;
  cases: TemplateCase[];
};

export const caseGroups: TemplateGroup[] = [
  {
    title: "企业官网",
    intro: "以下为我们自研演示模板，可按行业快速定制。",
    cases: [
      {
        slug: "demo-a-manufacturing",
        name: "演示模板 A / 制造企业官网",
        image:
          "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
        summary: "适合中小制造企业，重点展示资质、产品线和合作客户。",
        pages: ["首页", "产品中心", "解决方案", "关于我们", "联系我们"],
        features: ["询盘表单", "多语言切换", "SEO基础配置", "移动端适配"],
        timeline: "2-3 周",
      },
      {
        slug: "demo-b-consulting",
        name: "演示模板 B / 咨询公司官网",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
        summary: "适合本地咨询团队，强调服务流程和成功案例。",
        pages: ["首页", "服务介绍", "案例展示", "团队介绍", "预约咨询"],
        features: ["预约表单", "案例筛选", "WhatsApp跳转", "埋点统计"],
        timeline: "2 周",
      },
      {
        slug: "demo-c-tech-service",
        name: "演示模板 C / 科技服务官网",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
        summary: "适合技术服务公司，突出方案能力与交付标准。",
        pages: ["首页", "服务模块", "行业方案", "技术博客", "联系我们"],
        features: ["在线咨询", "内容管理", "CDN加速", "表单线索入库"],
        timeline: "3 周",
      },
    ],
  },
  {
    title: "宠物独立站",
    intro: "强调品牌调性、产品卖点和移动端购买体验。",
    cases: [
      {
        slug: "demo-d-pet-supplies",
        name: "演示模板 D / 宠物用品独立站",
        image:
          "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
        summary: "适合宠物用品品牌，突出单品卖点和口碑。",
        pages: ["首页", "商品列表", "商品详情", "购物车", "品牌故事"],
        features: ["优惠券", "评论系统", "一页结账", "弃单挽回"],
        timeline: "3-4 周",
      },
      {
        slug: "demo-e-pet-food",
        name: "演示模板 E / 宠物食品独立站",
        image:
          "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80",
        summary: "适合宠物食品品牌，强调成分展示和复购链路。",
        pages: ["首页", "产品分类", "营养成分", "订阅计划", "售后支持"],
        features: ["订阅购", "会员积分", "物流追踪", "邮件营销"],
        timeline: "4 周",
      },
      {
        slug: "demo-f-pet-brand",
        name: "演示模板 F / 宠物品牌官网",
        image:
          "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
        summary: "适合宠物生活方式品牌，注重品牌感和视觉统一。",
        pages: ["首页", "品牌故事", "系列产品", "媒体报道", "联系方式"],
        features: ["Lookbook展示", "品牌视频", "分销申请", "基础数据看板"],
        timeline: "3 周",
      },
    ],
  },
  {
    title: "衣服独立站",
    intro: "偏简洁品牌路线，注重产品陈列和下单转化。",
    cases: [
      {
        slug: "demo-g-menswear",
        name: "演示模板 G / 男装独立站",
        image:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
        summary: "适合男装品牌，突出搭配展示和爆款转化。",
        pages: ["首页", "新品专区", "商品列表", "商品详情", "购物车"],
        features: ["尺码助手", "套装推荐", "支付聚合", "客服插件"],
        timeline: "3-4 周",
      },
      {
        slug: "demo-h-womenswear",
        name: "演示模板 H / 女装独立站",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
        summary: "适合女装品牌，注重视觉呈现和活动营销。",
        pages: ["首页", "风格分类", "活动专题", "商品详情", "会员中心"],
        features: ["限时促销", "直播回放", "会员等级", "短信通知"],
        timeline: "4 周",
      },
      {
        slug: "demo-i-fashion-brand",
        name: "演示模板 I / 服饰品牌独立站",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
        summary: "适合小众服饰品牌，重点做品牌感与复购。",
        pages: ["首页", "品牌理念", "系列目录", "购买指南", "联系我们"],
        features: ["多币种", "多语言", "SEO优化", "复购提醒"],
        timeline: "3 周",
      },
    ],
  },
];

export const allCases = caseGroups.flatMap((group) => group.cases);
