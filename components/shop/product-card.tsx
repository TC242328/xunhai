import Image from "next/image";
import Link from "next/link";
import type { ShoeProduct } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  product: ShoeProduct;
}

/** 商店网格中的单品卡片：大图、名称、价格、配色点 */
export function ProductCard({ product }: ProductCardProps) {
  const cover = product.colors[0];
  const extraColors = product.colors.slice(1, 5);
  const more = product.colors.length - 1 - extraColors.length;

  return (
    <Link href={`/shop/${product.slug}`} className="group block h-full">
      <Card className="h-full border-border/60 bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-lg hover:shadow-purple-900/10">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
          <Image
            src={cover.image}
            alt={`${product.name} — ${cover.label}`}
            fill
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.isNew ? (
              <Badge className="border-0 bg-gradient-to-r from-orange-500 to-fuchsia-600 text-white">
                新品
              </Badge>
            ) : null}
            <Badge variant="secondary" className="bg-background/80 backdrop-blur">
              {product.categoryLabel}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-0">
          <CardTitle className="font-heading line-clamp-2 text-base leading-snug sm:text-lg">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
            {product.tagline}
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            <span
              className="size-4 rounded-full ring-2 ring-background ring-offset-1 ring-offset-card"
              style={{ backgroundColor: cover.hex }}
              title={cover.label}
            />
            {extraColors.map((c) => (
              <span
                key={c.key}
                className="size-4 rounded-full ring-1 ring-border"
                style={{ backgroundColor: c.hex }}
                title={c.label}
              />
            ))}
            {more > 0 ? (
              <span className="text-xs text-muted-foreground">+{more}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="border-t-0 pt-0">
          <span className="font-heading text-lg font-bold tabular-nums text-foreground">
            ¥{product.price.toLocaleString("zh-CN")}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
