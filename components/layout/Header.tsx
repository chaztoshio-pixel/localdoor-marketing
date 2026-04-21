"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav, servicesNav } from "@/lib/nav";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-stone-5/90 backdrop-blur-md transition-colors duration-200",
        scrolled ? "border-b border-stone-20" : "border-b border-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="LocalDoor Marketing — home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mark.svg"
              alt=""
              aria-hidden="true"
              className="h-8 w-8 shrink-0 group-hover:scale-105 transition-transform duration-200"
            />
            <span className="font-display text-title text-ink tracking-tight">
              <span className="font-semibold">Local</span>
              <span className="font-light text-plum">Door</span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-7"
          >
            {primaryNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1 text-small font-medium text-ink-60 hover:text-ink transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </button>
                  {servicesOpen ? (
                    <div
                      className="absolute top-full left-0 pt-3"
                      role="menu"
                    >
                      <div className="min-w-[280px] bg-stone-5 border border-stone-20 rounded-md shadow-editorial p-2">
                        {servicesNav.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-3 text-small text-ink hover:bg-stone-10 rounded-md transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-small font-medium text-ink-60 hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Button href="/contact" variant="ghost" size="md">
                Contact
              </Button>
              <Button href="/eddm-print-and-mail" variant="primary" size="md">
                Start a campaign
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
