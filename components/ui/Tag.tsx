import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "ember" | "dark";
};

export function Tag({ tone = "default", className, children, ...props }: TagProps) {
  const tones = {
    default: "bg-stone-10 text-ink-60",
    ember: "bg-ember-tint text-ember-dark",
    dark: "bg-ink-80 text-stone-5",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center text-micro font-medium uppercase tracking-[0.12em] px-2.5 py-1 rounded-sm",
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
