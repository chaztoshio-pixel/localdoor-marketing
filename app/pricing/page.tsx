import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { pricing as c } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "EDDM Pricing & How Quotes Work",
  description:
    "Transparent explanation of how LocalDoor prices EDDM campaigns. Production, routes, postage, and service levels.",
  path: "/pricing",
});

export default function PricingPage() {
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
          <div className="max-w-2xl mb-12 flex flex-col gap-3">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              How pricing is structured.
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-px bg-stone-20 border border-stone-20">
            {c.components.map((comp, i) => (
              <li key={comp.title} className="bg-stone-5 p-8 md:p-10 flex flex-col gap-3">
                <span className="font-mono text-small text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-title text-ink">{comp.title}</h3>
                <p className="text-body text-ink-60">{comp.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl mb-12 flex flex-col gap-3">
            <Eyebrow>Examples</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              Illustrative campaign estimates.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.examples.map((ex) => (
              <div
                key={ex.title}
                className="bg-stone-5 border border-stone-20 p-8 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-display-sm text-ink">
                    {ex.title}
                  </h3>
                  <span className="text-micro uppercase tracking-[0.12em] text-ink-60">
                    {ex.sub}
                  </span>
                </div>
                <p className="text-body text-ink-60">{ex.spec}</p>
                <div className="mt-auto pt-4 border-t border-stone-20">
                  <p className="font-mono text-small text-ember">{ex.est}</p>
                  <p className="mt-2 text-small text-ink-60">{ex.note}</p>
                </div>
                <span className="inline-block mt-2 px-2 py-1 bg-ember-tint text-ember-dark text-micro uppercase tracking-[0.12em] self-start">
                  Illustrative
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 flex flex-col gap-4">
              <Eyebrow>Not included</Eyebrow>
              <h2 className="font-display text-display-md text-ink">
                What's not in the base numbers.
              </h2>
            </div>
            <ul className="md:col-span-7 grid sm:grid-cols-2 gap-3">
              {c.notIncluded.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-body text-ink bg-stone-5 border border-stone-20 p-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl flex flex-col gap-4 mb-10">
            <Eyebrow>Get a real quote</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              Ready to put numbers on paper?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.ctas.map((cta, i) => (
              <a
                key={cta.href}
                href={cta.href}
                className="group block bg-ink text-stone-5 p-10 border border-ink hover:border-ember transition-colors"
              >
                <span className="eyebrow text-ember">Path {i + 1}</span>
                <h3 className="mt-3 font-display text-display-sm">
                  {cta.label}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-small text-stone-5 group-hover:text-ember">
                  Go →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-14 text-small text-ink-60 max-w-3xl border-l-2 border-stone-20 pl-4 italic">
            {c.disclaimer}
          </p>
        </Container>
      </Section>
    </>
  );
}
