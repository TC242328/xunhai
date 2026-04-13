"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/** 顶栏深浅色切换（跟随系统 + 手动覆盖） */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="size-9" disabled>
        <span className="size-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="size-9"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "切换为浅色" : "切换为深色"}
    >
      {isDark ? (
        <Sun className="size-4 text-amber-300" />
      ) : (
        <Moon className="size-4 text-zinc-700" />
      )}
    </Button>
  );
}
