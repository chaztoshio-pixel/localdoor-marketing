"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type Item = { q: string; a: string };

export function Accordion({
  items,
  className,
  idPrefix = "faq",
}: {
  items: Item[];
  className?: string;
  idPrefix?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn("border-t border-stone-20", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `${idPrefix}-${i}`;
        return (
          <div key={i} className="border-b border-stone-20">
            <button
              type="button"
              id={`${id}-trigger`}
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left py-6 gap-6 group focus-visible:outline-none"
            >
              <span className="font-display text-title text-ink group-hover:text-ember transition-colors">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-ink-60 shrink-0 transition-transform duration-250 ease-out-emphasized",
                  isOpen && "rotate-180 text-ember"
                )}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-trigger`}
              hidden={!isOpen}
              className="pb-8 pr-10"
            >
              <p className="text-body-lg text-ink-60 max-w-prose">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
