"use client";

import * as React from "react";

/** 购物车行：同一鞋款 + 尺码 + 配色合并数量 */
export interface CartLine {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  size: string;
  colorKey: string;
  colorLabel: string;
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  /** 购物车侧边栏开关 */
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  /** 商品件数（按 quantity 累加） */
  itemCount: number;
  subtotal: number;
  addLine: (input: {
    slug: string;
    name: string;
    image: string;
    price: number;
    size: string;
    colorKey: string;
    colorLabel: string;
    quantity?: number;
  }) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeLine: (lineId: string) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextValue | null>(null);

function lineId(slug: string, size: string, colorKey: string) {
  return `${slug}::${size}::${colorKey}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = React.useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  const itemCount = React.useMemo(
    () => lines.reduce((n, l) => n + l.quantity, 0),
    [lines],
  );

  const subtotal = React.useMemo(
    () => lines.reduce((n, l) => n + l.price * l.quantity, 0),
    [lines],
  );

  const addLine = React.useCallback(
    (input: {
      slug: string;
      name: string;
      image: string;
      price: number;
      size: string;
      colorKey: string;
      colorLabel: string;
      quantity?: number;
    }) => {
      const id = lineId(input.slug, input.size, input.colorKey);
      const qty = input.quantity ?? 1;
      setLines((prev) => {
        const idx = prev.findIndex((l) => l.id === id);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = {
            ...next[idx],
            quantity: next[idx].quantity + qty,
          };
          return next;
        }
        return [
          ...prev,
          {
            id,
            slug: input.slug,
            name: input.name,
            image: input.image,
            price: input.price,
            size: input.size,
            colorKey: input.colorKey,
            colorLabel: input.colorLabel,
            quantity: qty,
          },
        ];
      });
      setCartOpen(true);
    },
    [],
  );

  const updateQuantity = React.useCallback((id: string, quantity: number) => {
    if (quantity < 1) {
      setLines((prev) => prev.filter((l) => l.id !== id));
      return;
    }
    setLines((prev) =>
      prev.map((l) => (l.id === id ? { ...l, quantity } : l)),
    );
  }, []);

  const removeLine = React.useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clearCart = React.useCallback(() => setLines([]), []);

  const value = React.useMemo(
    () => ({
      lines,
      cartOpen,
      setCartOpen,
      itemCount,
      subtotal,
      addLine,
      updateQuantity,
      removeLine,
      clearCart,
    }),
    [
      lines,
      cartOpen,
      itemCount,
      subtotal,
      addLine,
      updateQuantity,
      removeLine,
      clearCart,
    ],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart 必须在 CartProvider 内使用");
  return ctx;
}
