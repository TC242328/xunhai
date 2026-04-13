import { AdminChrome } from "@/components/admin/admin-chrome";

/** 后台区域布局：侧栏壳层（登录页自动无侧栏） */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminChrome>{children}</AdminChrome>;
}
