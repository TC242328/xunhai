"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/**
 * 后台路由不展示商店顶栏/页脚，避免与客户后台界面叠在一起。
 */
export function ConditionalStoreChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isHome = pathname === "/";
  const isTemplates = pathname.startsWith("/templates");
  const isPreviews = pathname.startsWith("/previews");

  if (isAdmin || isHome || isTemplates || isPreviews) {
    return <div className="flex min-h-full flex-col">{children}</div>;
  }

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
