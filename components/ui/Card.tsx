import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "dark";
  padding?: "sm" | "md" | "lg";
};

export function Card({
  tone = "default",
  padding = "md",
  className,
  ...props
}: CardProps) {
  const tones = {
    default: "bg-stone-5 border-stone-20 hover:border-ink-60 text-ink",
    muted: "bg-stone-10 border-stone-20 hover:border-ink-60 text-ink",
    dark: "bg-ink-80 border-ink-80 hover:border-ember text-stone-5",
  };
  const paddings = {
    sm: "p-6",
    md: "p-8",
    lg: "p-10 md:p-12",
  };
  return (
    <div
      className={cn(
        "border rounded-none transition-colors duration-200",
        tones[tone],
        paddings[padding],
        className
      )}
      {...props}
    />
  );
}
