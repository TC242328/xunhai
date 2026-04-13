export { auth as middleware } from "@/auth";

/** 仅对后台路径运行鉴权，避免影响前台性能 */
export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
