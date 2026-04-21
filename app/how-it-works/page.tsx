import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { howItWorks as c } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "How a LocalDoor EDDM Campaign Works",
  description:
    "Our end-to-end process from inquiry to drop window — strategy, design, proof approval, production, and mail prep.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
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

      <ProcessSteps
        eyebrow="Phases"
        h2="Eight phases, one accountable team."
        steps={c.phases}
        layout="vertical"
      />

      <Section tone="muted">
        <Container>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 flex flex-col gap-4">
              <Eyebrow>Timing</Eyebrow>
              <h2 className="font-display text-display-md text-ink">
                {c.timing.h3}
              </h2>
            </div>
            <ul className="md:col-span-7 flex flex-col gap-4">
              {c.timing.items.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-body text-ink bg-stone-5 border border-stone-20 p-5"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5 max-w-2xl">
              Three ways to start.
            </h2>
            <div className="flex flex-wrap gap-3">
              {c.ctas.map((cta, i) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={i === 0 ? "onDark" : "ghost"}
                  size="lg"
                  withArrow={i === 0}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
