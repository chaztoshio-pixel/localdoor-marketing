import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RouteBuilderConcept } from "@/components/sections/RouteBuilderConcept";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { eddmPrintMail as c } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { serviceSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "EDDM Print & Mail — Route Planning + Premium Print",
  description:
    "Plan routes, print at premium quality, and mail. Transparent campaign totals with a managed quote when you're ready.",
  path: "/eddm-print-mail",
});

export default function EddmPrintMailPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end py-20 md:py-28">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <h1 className="font-display text-display-lg md:text-display-xl text-ink">
                {c.hero.h1}
              </h1>
              <p className="text-body-lg md:text-[1.25rem] text-ink-60 max-w-3xl">
                {c.hero.sub}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button href={c.hero.primary.href} size="lg" withArrow>
                  {c.hero.primary.label}
                </Button>
                <Button href={c.hero.secondary.href} variant="secondary" size="lg">
                  {c.hero.secondary.label}
                </Button>
              </div>
              <Link
                href={c.hero.tertiary.href}
                className="link-underline text-body text-ink"
              >
                {c.hero.tertiary.label}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
            <aside className="lg:col-span-4 bg-ink text-stone-5 p-8 rounded-2xl border border-ink flex flex-col gap-4">
              <span className="eyebrow text-plum-tint">{c.phases.phase1.eyebrow}</span>
              <p className="text-body text-stone-40">{c.phases.phase1.body}</p>
              <div className="h-px bg-ink-80 my-1" />
              <span className="eyebrow text-mint-light">{c.phases.phase2.eyebrow}</span>
              <p className="text-small text-stone-40">{c.phases.phase2.body}</p>
              <Link
                href="#quote"
                className="inline-flex items-center gap-2 text-small text-stone-5 hover:text-plum-tint mt-1"
              >
                Skip to the quote form
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {/* Planner */}
      <Section>
        <Container>
          <RouteBuilderConcept />
        </Container>
      </Section>

      {/* Creative handoff */}
      <Section id="design-handoff" tone="muted">
        <Container>
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <Eyebrow>Creative handoff</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {c.designHandoff.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {c.designHandoff.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block bg-stone-5 border border-stone-20 hover:border-ink p-8 transition-colors"
              >
                <h3 className="font-display text-display-sm text-ink group-hover:text-ember transition-colors">
                  {card.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-1 text-small font-medium text-ink group-hover:text-ember">
                  {card.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quote form */}
      <Section id="quote">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-5 flex flex-col gap-4">
              <Eyebrow>Managed quote</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink">
                {c.quote.h2}
              </h2>
            </div>
            <p className="md:col-span-7 self-end text-body-lg text-ink-60 max-w-prose">
              {c.quote.intro}
            </p>
          </div>
          <div className="bg-stone-5 border border-stone-20 p-6 md:p-10">
            <QuoteForm />
          </div>
        </Container>
      </Section>

      {/* Mini process */}
      <Section tone="muted" size="md">
        <Container>
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-20 border border-stone-20">
            {c.miniProcess.map((step, i) => (
              <li
                key={step}
                className="bg-stone-5 p-6 flex items-center gap-3"
              >
                <span className="font-mono text-small text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-title text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqBlock
        eyebrow="FAQ"
        h2="EDDM Print & Mail questions."
        items={c.faq}
        id="eddm-faq"
      />

      {/* Final CTA */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6">
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5">
              {c.finalCta.h2}
            </h2>
            <p className="text-body-lg text-stone-40 max-w-prose">
              {c.finalCta.sub}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button href={c.finalCta.primary.href} variant="onDark" size="lg" withArrow>
                {c.finalCta.primary.label}
              </Button>
              <Button href={c.finalCta.secondary.href} variant="ghost" size="lg">
                {c.finalCta.secondary.label}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "EDDM Print & Mail",
              serviceType: "Every Door Direct Mail print and mailing service",
              description:
                "Route-level EDDM print and mail coordination with route planning, creative handoff, and managed quote workflow.",
              url: "/eddm-print-and-mail",
            })
          ),
        }}
      />
    </>
  );
}
