"use server";

import { signOut } from "@/auth";

/** 顶栏退出登录 */
export async function signOutFromAdmin() {
  await signOut({ redirectTo: "/admin/login" });
}
