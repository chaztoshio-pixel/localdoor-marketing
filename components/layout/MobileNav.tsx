"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav, servicesNav } from "@/lib/nav";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-stone-10 transition-colors"
      >
        <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-stone-5 border-l border-stone-20 shadow-editorial transition-transform duration-300 ease-out-emphasized flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile menu"
        role="dialog"
        aria-modal={open}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-stone-20">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.svg" alt="" aria-hidden="true" className="h-7 w-7" />
            <span className="font-display text-title text-ink">Menu</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-stone-10 transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <nav
          aria-label="Mobile primary"
          className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1"
        >
          <div className="flex flex-col">
            <span className="text-micro font-medium uppercase tracking-[0.14em] text-ink-60 py-2">
              Services
            </span>
            {servicesNav.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="py-3 text-body-lg font-display text-ink hover:text-ember transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <div className="h-px bg-stone-20 my-6" />
          {primaryNav
            .filter((i) => !i.children)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-body-lg font-display text-ink hover:text-ember transition-colors"
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/faq"
            onClick={() => setOpen(false)}
            className="py-3 text-body-lg font-display text-ink hover:text-ember transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-3 text-body-lg font-display text-ink hover:text-ember transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="p-6 border-t border-stone-20 flex flex-col gap-3">
          <Button href="/eddm-print-and-mail" variant="primary" size="lg">
            Start a campaign
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Talk to a manager
          </Button>
        </div>
      </aside>
    </>
  );
}
