import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** 首页全屏英雄区：背景大图 + 口号 + CTA */
export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <Image
        src="https://picsum.photos/seed/sole-hero/2000/1200"
        alt="潮流球鞋视觉主图"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-purple-950/30" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-28 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
          SOLE Store · 潮流鞋履
        </p>
        <h1 className="font-heading max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          穿出你的
          <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
            态度
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-zinc-200 sm:text-lg">
          球鞋、跑鞋与休闲款一站搜罗。深色街头美学 × 科技质感界面，只为懂鞋的你。
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/shop"
            className={cn(
              buttonVariants({ size: "lg" }),
              "inline-flex h-12 items-center justify-center px-8 text-base font-bold text-white shadow-xl shadow-purple-900/40 transition-transform duration-200 hover:scale-[1.02]",
              "border-0 bg-gradient-to-r from-orange-500 via-purple-600 to-emerald-500 hover:opacity-95",
            )}
          >
            立即探索
          </Link>
          <Link
            href="/new"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "inline-flex h-12 items-center justify-center border-white/30 bg-background/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white/10 hover:text-white",
            )}
          >
            本季新品
          </Link>
        </div>
      </div>
    </section>
  );
}
