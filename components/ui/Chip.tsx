"use client";

import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  as?: "button" | "span";
};

export function Chip({
  active = false,
  className,
  children,
  as = "button",
  ...props
}: ChipProps) {
  const classes = cn(
    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-small font-medium border transition-colors duration-150",
    active
      ? "bg-ink text-stone-5 border-ink"
      : "bg-stone-5 text-ink-60 border-stone-20 hover:border-ink hover:text-ink",
    className
  );

  if (as === "span") {
    return <span className={classes}>{children}</span>;
  }
  return (
    <button
      type="button"
      aria-pressed={active}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
