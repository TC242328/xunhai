import { redirect } from "next/navigation";

/** 后台区域布局：侧栏壳层（登录页自动无侧栏） */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  void children;
  redirect("/");
}
