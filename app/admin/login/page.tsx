import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/admin-login-form";

/** 后台登录（useSearchParams 需 Suspense 边界） */
export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[100dvh] items-center justify-center bg-zinc-950 text-zinc-400">
          加载中…
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
