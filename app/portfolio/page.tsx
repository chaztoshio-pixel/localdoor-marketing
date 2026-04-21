import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { portfolio as c } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Direct Mail Portfolio",
  description:
    "Selected postcard campaigns across home services, dental, real estate, restaurants, and professional services.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section>
        <Container>
          <div className="py-20 md:py-28 flex flex-col gap-6 max-w-3xl">
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <h1 className="font-display text-display-lg md:text-display-xl text-ink">
              {c.hero.h1}
            </h1>
            <p className="text-body-lg md:text-[1.25rem] text-ink-60">{c.hero.sub}</p>
          </div>
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <PortfolioGrid
            items={c.items as any}
            industries={c.industries}
            goals={c.goals}
          />
          <p className="mt-10 text-small text-ink-60 border-l-2 border-stone-20 pl-4 italic max-w-3xl">
            {c.compliance}
          </p>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5 max-w-2xl">
              Want work like this?
            </h2>
            <Button href={c.cta.href} variant="onDark" size="lg" withArrow>
              {c.cta.label}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
