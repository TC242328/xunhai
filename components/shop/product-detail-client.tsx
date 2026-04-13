"use client";

import * as React from "react";
import Image from "next/image";
import type { ShoeProduct } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductDetailClientProps {
  product: ShoeProduct;
}

/** 详情页交互区：配色、尺码、缩略图、加入购物车 */
export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [colorKey, setColorKey] = React.useState(product.colors[0]?.key ?? "");
  const [size, setSize] = React.useState(product.sizes[0] ?? "");
  const [mainImage, setMainImage] = React.useState(product.colors[0]?.image ?? "");
  const { addLine } = useCart();

  const color = product.colors.find((c) => c.key === colorKey) ?? product.colors[0];
  const thumbSet = new Set<string>();
  if (color?.image) thumbSet.add(color.image);
  product.gallery.forEach((u) => thumbSet.add(u));
  const thumbs = Array.from(thumbSet).slice(0, 5);

  React.useEffect(() => {
    if (color?.image) setMainImage(color.image);
  }, [color?.image]);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-2xl shadow-black/20">
          <Image
            key={mainImage}
            src={mainImage}
            alt={`${product.name} 主图`}
            fill
            priority
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover transition-opacity duration-300"
          />
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {thumbs.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setMainImage(src)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-200 hover:opacity-95",
                src === mainImage
                  ? "border-orange-500 ring-2 ring-orange-500/30"
                  : "border-transparent bg-muted hover:border-border",
              )}
            >
              <Image
                src={src}
                alt="缩略图"
                fill
                sizes="120px"
                loading="lazy"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <div className="flex flex-wrap gap-2">
            {product.isNew ? (
              <Badge className="border-0 bg-gradient-to-r from-orange-500 to-fuchsia-600 text-white">
                新品
              </Badge>
            ) : null}
            <Badge variant="secondary">{product.categoryLabel}</Badge>
          </div>
          <h1 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{product.tagline}</p>
          <p className="font-heading mt-4 text-3xl font-bold tabular-nums">
            ¥{product.price.toLocaleString("zh-CN")}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            配色
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setColorKey(c.key)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-all duration-200",
                  c.key === colorKey
                    ? "border-orange-500 bg-orange-500/10 text-foreground"
                    : "border-border bg-background/50 text-muted-foreground hover:border-purple-500/50",
                )}
              >
                <span
                  className="size-5 rounded-full ring-2 ring-background ring-offset-1"
                  style={{ backgroundColor: c.hex }}
                />
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            尺码（EU）
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={cn(
                  "min-w-11 rounded-lg border px-3 py-2 text-sm font-semibold tabular-nums transition-all duration-200",
                  s === size
                    ? "border-emerald-500 bg-emerald-500/15 text-foreground"
                    : "border-border bg-background/50 text-muted-foreground hover:border-emerald-500/40",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <Button
          type="button"
          size="lg"
          className="h-12 w-full bg-gradient-to-r from-orange-500 via-purple-600 to-emerald-500 text-base font-bold text-white shadow-lg shadow-purple-900/25 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
          onClick={() => {
            if (!color) return;
            addLine({
              slug: product.slug,
              name: product.name,
              image: color.image,
              price: product.price,
              size,
              colorKey: color.key,
              colorLabel: color.label,
            });
          }}
        >
          加入购物车
        </Button>

        <div className="rounded-xl border border-border/60 bg-muted/20 p-4 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </div>
      </div>
    </div>
  );
}
