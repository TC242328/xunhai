"use client";

import * as React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import type { ShoeProduct } from "@/lib/types";
import {
  createProduct,
  updateProduct,
  type ProductActionState,
} from "@/app/admin/products/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="min-w-28">
      {pending ? "保存中…" : children}
    </Button>
  );
}

const defaultColors = `[
  {
    "key": "default",
    "label": "默认配色",
    "hex": "#ffffff",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27af?auto=format&fit=crop&w=1200&q=80"
  }
]`;

const defaultGallery = `[
  "https://images.unsplash.com/photo-1542291026-7eec264c27af?auto=format&fit=crop&w=1200&q=80"
]`;

const defaultSizes = `["39", "40", "41", "42", "43"]`;

/** 新建 / 编辑商品表单（JSON 区为配色、图集、尺码数组） */
export function ProductForm({
  mode,
  product,
}: {
  mode: "create" | "edit";
  product?: ShoeProduct;
}) {
  const productId = product?.id;

  const formAction = React.useCallback(
    async (prev: ProductActionState, fd: FormData) => {
      if (mode === "create") return createProduct(prev, fd);
      if (!productId) return { error: "缺少商品 ID" };
      return updateProduct(productId, prev, fd);
    },
    [mode, productId],
  );

  const [state, dispatch] = useActionState(formAction, null);

  const colorsDefault =
    mode === "edit" && product
      ? JSON.stringify(product.colors, null, 2)
      : defaultColors;
  const galleryDefault =
    mode === "edit" && product
      ? JSON.stringify(product.gallery, null, 2)
      : defaultGallery;
  const sizesDefault =
    mode === "edit" && product
      ? JSON.stringify(product.sizes, null, 2)
      : defaultSizes;

  return (
    <form action={dispatch} className="mx-auto max-w-3xl space-y-6">
      {state?.error ? (
        <div className="rounded-lg border border-red-500/40 bg-red-950/40 px-4 py-3 text-sm text-red-200">
          {state.error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="slug">URL 别名（slug）</Label>
          <Input
            id="slug"
            name="slug"
            required
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            defaultValue={product?.slug}
            placeholder="例如 my-shoe-2025"
          />
          <p className="text-xs text-zinc-500">仅小写英文、数字与短横线，用于前台链接 /shop/别名</p>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="name">商品名称</Label>
          <Input
            id="name"
            name="name"
            required
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            defaultValue={product?.name}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="tagline">一句话卖点</Label>
          <Input
            id="tagline"
            name="tagline"
            required
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            defaultValue={product?.tagline}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">类型（英文键）</Label>
          <select
            id="category"
            name="category"
            required
            defaultValue={product?.category ?? "sneaker"}
            className="h-8 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 text-sm text-zinc-100"
          >
            <option value="sneaker">球鞋 sneaker</option>
            <option value="runner">跑鞋 runner</option>
            <option value="casual">休闲 casual</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="categoryLabel">类型中文展示</Label>
          <Input
            id="categoryLabel"
            name="categoryLabel"
            required
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            defaultValue={product?.categoryLabel}
            placeholder="球鞋"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">价格（元，整数）</Label>
          <Input
            id="price"
            name="price"
            type="number"
            min={1}
            required
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            defaultValue={product?.price ?? ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sortOrder">排序（越小越靠前）</Label>
          <Input
            id="sortOrder"
            name="sortOrder"
            type="number"
            min={0}
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            defaultValue={product?.sortOrder ?? 0}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="isNew">是否新品</Label>
          <select
            id="isNew"
            name="isNew"
            defaultValue={product?.isNew ? "true" : "false"}
            className="h-8 w-full max-w-xs rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 text-sm text-zinc-100"
          >
            <option value="false">否</option>
            <option value="true">是</option>
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="description">详情描述</Label>
          <Textarea
            id="description"
            name="description"
            required
            rows={5}
            className="border-zinc-700 bg-zinc-900 text-zinc-100"
            defaultValue={product?.description}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="colors">配色 JSON（数组）</Label>
          <Textarea
            id="colors"
            name="colors"
            required
            rows={12}
            className="border-zinc-700 bg-zinc-900 font-mono text-xs leading-relaxed text-zinc-100"
            defaultValue={colorsDefault}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="gallery">多角度图片 URL JSON（字符串数组）</Label>
          <Textarea
            id="gallery"
            name="gallery"
            required
            rows={6}
            className="border-zinc-700 bg-zinc-900 font-mono text-xs leading-relaxed text-zinc-100"
            defaultValue={galleryDefault}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="sizes">尺码 EU JSON（字符串数组）</Label>
          <Textarea
            id="sizes"
            name="sizes"
            required
            rows={3}
            className="border-zinc-700 bg-zinc-900 font-mono text-xs leading-relaxed text-zinc-100"
            defaultValue={sizesDefault}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <SubmitButton>{mode === "create" ? "创建商品" : "保存修改"}</SubmitButton>
      </div>
    </form>
  );
}
