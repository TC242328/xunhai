import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "企业展示站",
  description: "当前站点仅保留企业官网展示内容。",
};

export default function ShopPage() {
  redirect("/");
}
