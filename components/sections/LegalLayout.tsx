import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { footerNav } from "@/lib/nav";
import { brand } from "@/lib/copy";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  lastUpdated = "[TODO]",
  intro,
  children,
}: {
  title: string;
  lastUpdated?: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section>
        <Container>
          <div className="py-16 md:py-24 max-w-3xl flex flex-col gap-4">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="font-display text-display-lg text-ink">{title}</h1>
            {intro ? (
              <p className="text-body-lg text-ink-60 mt-2">{intro}</p>
            ) : null}
            <p className="text-small text-ink-60 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <Section tone="muted" size="md">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-3">
              <nav aria-label="Legal pages" className="lg:sticky lg:top-24">
                <span className="eyebrow mb-4 block">More legal</span>
                <ul className="flex flex-col gap-2">
                  {footerNav.legal.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-small text-ink-60 hover:text-ember transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <article className="lg:col-span-9 bg-stone-5 border border-stone-20 p-6 md:p-10 prose-legal max-w-none">
              {children}
              <div className="mt-12 pt-6 border-t border-stone-20">
                <p className="text-small text-ink-60 italic">
                  {brand.uspsIndependence}
                </p>
                <p className="mt-4 text-small text-ink-60">
                  This content is a starter draft and should be reviewed by a
                  qualified attorney before public use. Items marked [TODO] need
                  business-specific information before going live.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
