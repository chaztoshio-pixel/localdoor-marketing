import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted" | "dark";
  size?: "md" | "lg";
};

export function Section({
  tone = "default",
  size = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  const tones = {
    default: "bg-stone-5 text-ink",
    muted: "bg-stone-10 text-ink",
    dark: "bg-ink text-stone-5",
  };
  const sizes = {
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };
  return (
    <section className={cn(tones[tone], sizes[size], className)} {...props}>
      {children}
    </section>
  );
}
