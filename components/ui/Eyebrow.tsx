import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type EyebrowProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "ember" | "muted" | "light";
};

export function Eyebrow({
  tone = "ember",
  className,
  children,
  ...props
}: EyebrowProps) {
  const tones = {
    ember: "text-ember",
    muted: "text-ink-60",
    light: "text-stone-40",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center text-micro font-medium uppercase tracking-[0.14em]",
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
