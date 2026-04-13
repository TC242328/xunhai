"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type StylePreview = {
  name: string;
  image: string;
  fit: string;
  palette: string;
};

export function StylePreviewGrid({ items }: { items: StylePreview[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <Dialog key={item.name}>
          <DialogTrigger
            className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:-translate-y-0.5 hover:shadow-md"
            aria-label={`查看${item.name}布局草图`}
          >
            <img src={item.image} alt={item.name} className="h-44 w-full object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.fit}</p>
              <p className="mt-2 text-xs font-semibold text-slate-500">主色调：{item.palette}</p>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-white p-0 sm:max-w-2xl" showCloseButton>
            <div className="overflow-hidden rounded-xl">
              <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
              <div className="p-5">
                <DialogHeader>
                  <DialogTitle>{item.name}首页布局草图</DialogTitle>
                  <DialogDescription>{item.fit} · 主色调 {item.palette}</DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-3">
                  <div className="rounded-md border border-slate-200 p-3">
                    <p className="text-xs font-semibold text-slate-500">导航区</p>
                    <div className="mt-2 flex items-center justify-between rounded bg-slate-100 px-3 py-2 text-xs text-slate-700">
                      <span>LOGO</span>
                      <span>首页 / 服务 / 模板 / 联系</span>
                    </div>
                  </div>

                  <div className="rounded-md border border-slate-200 p-3">
                    <p className="text-xs font-semibold text-slate-500">首屏区</p>
                    <div className="mt-2 rounded bg-slate-100 p-3 text-xs text-slate-700">
                      主标题 + 副标题 + 核心价值点 + 背景视觉
                    </div>
                  </div>

                  <div className="rounded-md border border-slate-200 p-3">
                    <p className="text-xs font-semibold text-slate-500">CTA 区</p>
                    <div className="mt-2 flex gap-2">
                      <span className="rounded bg-slate-900 px-2 py-1 text-xs text-white">立即咨询</span>
                      <span className="rounded border border-slate-300 px-2 py-1 text-xs text-slate-700">
                        查看方案
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
