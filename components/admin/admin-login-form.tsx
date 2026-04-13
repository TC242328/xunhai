"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** 登录表单：凭证登录后跳转 callbackUrl */
export function AdminLoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin";
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const password = (
      form.elements.namedItem("password") as HTMLInputElement
    ).value.trim();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });
    setLoading(false);
    if (res?.error) {
      setError("账号或密码错误，请确认输入为 TC24 / 1111。");
      return;
    }
    window.location.href = res?.url ?? callbackUrl;
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-zinc-950 px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl">
        <h1 className="font-heading text-center text-xl font-bold text-white">
          SOLE Store 管理后台
        </h1>
        <p className="mt-2 text-center text-xs text-zinc-500">
          仅供商家使用，请妥善保管账号密码
        </p>
        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          {error ? (
            <div className="rounded-lg border border-red-500/40 bg-red-950/30 px-3 py-2 text-sm text-red-200">
              {error}
            </div>
          ) : null}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-zinc-300">
              账号
            </Label>
            <Input
              id="email"
              name="email"
              type="text"
              required
              autoComplete="username"
              className="border-zinc-700 bg-zinc-950 text-zinc-100"
              placeholder="请输入账号"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-zinc-300">
              密码
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="border-zinc-700 bg-zinc-950 text-zinc-100"
            />
          </div>
          <Button
            type="submit"
            className="mt-2 w-full bg-white text-zinc-900 hover:bg-zinc-200"
            disabled={loading}
          >
            {loading ? "登录中…" : "登录"}
          </Button>
        </form>
      </div>
    </div>
  );
}
