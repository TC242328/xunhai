/** 鞋款大类：用于列表筛选与展示 */
export type ShoeCategory = "sneaker" | "runner" | "casual";

/** 单个配色：含展示图与标签 */
export interface ShoeColorVariant {
  /** 配色唯一键，用于购物车与 URL 状态 */
  key: string;
  /** 中文配色名 */
  label: string;
  /** 色块（用于切换圆点） */
  hex: string;
  /** 该配色主图 */
  image: string;
}

/** 商品数据结构（演示用静态数据） */
export interface ShoeProduct {
  id: string;
  slug: string;
  name: string;
  /** 一句话卖点 */
  tagline: string;
  category: ShoeCategory;
  /** 中文分类名 */
  categoryLabel: string;
  price: number;
  /** 是否标为新品 */
  isNew?: boolean;
  /** 详情长文案 */
  description: string;
  colors: ShoeColorVariant[];
  /** 多角度图（可与当前配色主图组合展示） */
  gallery: string[];
  /** 可选尺码 */
  sizes: string[];
  /** 列表排序权重（越小越靠前），来自数据库 */
  sortOrder?: number;
}
