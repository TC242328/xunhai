import type { ShoeProduct } from "@/lib/types";

/**
 * 首次写入数据库的演示商品（npm run db:seed）。
 * 前台展示以数据库为准，勿依赖本文件的 id 字段。
 */
export const initialCatalog: ShoeProduct[] = [
  {
    id: "p1",
    slug: "air-apex-velocity",
    name: "AIR APEX 疾速",
    tagline: "城市球场与街头无缝切换",
    category: "sneaker",
    categoryLabel: "球鞋",
    price: 1299,
    isNew: true,
    description:
      "双层缓震中底搭配织物鞋面，侧向支撑加强。夜光细节与反光条让夜跑更安全。适合日常穿搭与轻度训练。",
    colors: [
      {
        key: "ember",
        label: "熔岩橙",
        hex: "#f97316",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27af?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "noir",
        label: "极夜黑",
        hex: "#18181b",
        image:
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9ef?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "volt",
        label: "荧光绿",
        hex: "#22c55e",
        image:
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3e?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "p2",
    slug: "neo-runner-pro",
    name: "NEO RUNNER PRO",
    tagline: "长跑节奏，一鞋掌握",
    category: "runner",
    categoryLabel: "跑鞋",
    price: 899,
    description:
      "工程网眼透气鞋面，超临界发泡中底回弹持久。外底耐磨橡胶分区排布，湿地抓地更稳。",
    colors: [
      {
        key: "cyan",
        label: "电光青",
        hex: "#06b6d4",
        image:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "slate",
        label: "岩灰",
        hex: "#64748b",
        image:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: "p3",
    slug: "street-canvas-low",
    name: "STREET CANVAS 低帮",
    tagline: "经典帆布，街头底色",
    category: "casual",
    categoryLabel: "休闲",
    price: 459,
    description:
      "硫化鞋底柔韧耐穿，鞋头加固。百搭低帮廓形，四季可穿。",
    colors: [
      {
        key: "white",
        label: "云白",
        hex: "#fafafa",
        image:
          "https://images.unsplash.com/photo-1525969002139-1068934cca5d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "navy",
        label: "海军蓝",
        hex: "#312e81",
        image:
          "https://images.unsplash.com/photo-1560769629-975ec94e6a10?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["38", "39", "40", "41", "42", "43"],
  },
  {
    id: "p4",
    slug: "quantum-step-7",
    name: "QUANTUM STEP 7",
    tagline: "轻量推进，节奏更省能",
    category: "runner",
    categoryLabel: "跑鞋",
    price: 1099,
    isNew: true,
    description:
      "碳纤维板 + 轻质泡棉组合，前掌滚动设计。鞋舌一体织减少摩擦。",
    colors: [
      {
        key: "violet",
        label: "量子紫",
        hex: "#8b5cf6",
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "black",
        label: "暗影",
        hex: "#09090b",
        image:
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1579338559194-a2d00e2e88de?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "p5",
    slug: "suede-shadow-90",
    name: "SUEDE SHADOW 90",
    tagline: "复古麂皮，质感出街",
    category: "casual",
    categoryLabel: "休闲",
    price: 729,
    description:
      "头层麂皮拼接网眼，复古跑鞋廓形。中底做旧氧化风，搭配工装或阔腿裤都很出片。",
    colors: [
      {
        key: "taupe",
        label: "灰褐",
        hex: "#a8a29e",
        image:
          "https://images.unsplash.com/photo-1539186607618-0f403b147b9e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "olive",
        label: "军绿",
        hex: "#4d7c0f",
        image:
          "https://images.unsplash.com/photo-1605348535680-fc27bda96714?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: "p6",
    slug: "court-king-legacy",
    name: "COURT KING 传承",
    tagline: "硬地灵感，滑板文化基因",
    category: "sneaker",
    categoryLabel: "球鞋",
    price: 799,
    description:
      "耐磨橡胶包头，加厚鞋舌。鞋垫可拆洗，日常刷街与板场通用。",
    colors: [
      {
        key: "red",
        label: "烈焰红",
        hex: "#dc2626",
        image:
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "bone",
        label: "骨白",
        hex: "#e7e5e4",
        image:
          "https://images.unsplash.com/photo-1605348535680-fc27bda96714?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "p7",
    slug: "carbon-dash-elite",
    name: "CARBON DASH ELITE",
    tagline: "竞赛级推进，为 PB 而生",
    category: "runner",
    categoryLabel: "跑鞋",
    price: 1599,
    isNew: true,
    description:
      "全掌碳板 + PEBA 发泡，单只重量进一步下探。鞋面激光打孔分区透气。",
    colors: [
      {
        key: "lime",
        label: "酸橙",
        hex: "#84cc16",
        image:
          "https://images.unsplash.com/photo-1579338559194-a2d00e2e88de?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "graphite",
        label: "石墨灰",
        hex: "#3f3f46",
        image:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3e?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
  },
  {
    id: "p8",
    slug: "mono-slip-day",
    name: "MONO SLIP 一脚蹬",
    tagline: "极简轮廓，懒人出街",
    category: "casual",
    categoryLabel: "休闲",
    price: 399,
    description:
      "针织袜套鞋口，一脚蹬穿脱。轻量 EVA 中底，遛狗、通勤、咖啡局都合适。",
    colors: [
      {
        key: "charcoal",
        label: "炭灰",
        hex: "#27272a",
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "sand",
        label: "沙色",
        hex: "#d6d3d1",
        image:
          "https://images.unsplash.com/photo-1525969002139-1068934cca5d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["38", "39", "40", "41", "42", "43"],
  },
  {
    id: "p9",
    slug: "rave-hi-platform",
    name: "RAVE HI 厚底",
    tagline: "音乐节与霓虹夜的默认答案",
    category: "sneaker",
    categoryLabel: "球鞋",
    price: 949,
    description:
      "厚底增高廓形，漆皮与哑光皮革撞色。金属鞋眼与宽鞋带强化 Y2K 氛围。",
    colors: [
      {
        key: "purple",
        label: "电音紫",
        hex: "#a855f7",
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "silver",
        label: "液态银",
        hex: "#94a3b8",
        image:
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
    id: "p10",
    slug: "trail-ghost-xc",
    name: "TRAIL GHOST XC",
    tagline: "越野抓地，泥地也敢冲",
    category: "runner",
    categoryLabel: "跑鞋",
    price: 1188,
    description:
      "深齿耳外底与防穿刺中底，鞋头防撞橡胶。鞋带收纳仓避免钩挂。",
    colors: [
      {
        key: "forest",
        label: "森绿",
        hex: "#15803d",
        image:
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "magma",
        label: "岩浆橙",
        hex: "#ea580c",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27af?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a10?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
  },
];

