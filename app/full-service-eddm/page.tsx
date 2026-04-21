import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PostcardMock } from "@/components/media/PostcardMock";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RecurringBlock } from "@/components/sections/RecurringBlock";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { fullServiceEddm as c, portfolio as portfolioCopy } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { serviceSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Full-Service EDDM Campaigns",
  description:
    "Done-for-you EDDM direct mail. We handle strategy, design, routes, print, and mail prep end to end.",
  path: "/full-service-eddm",
});

export default function FullServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center py-20 md:py-28 lg:py-36">
            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <h1 className="font-display text-display-lg md:text-display-xl text-ink">
                {c.hero.h1}
              </h1>
              <p className="text-body-lg md:text-[1.25rem] text-ink-60 max-w-2xl">
                {c.hero.sub}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
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
              <p className="text-small text-ink-60 mt-2">{c.hero.trustLine}</p>
            </div>
            <div className="lg:col-span-5">
              <PostcardMock
                variant="hero"
                frontEyebrow="FULL SERVICE"
                frontHeadline="The Campaign Handled, End To End."
                backLabel="Done For You"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-14 flex flex-col gap-3">
            <Eyebrow>Included</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {c.included.h2}
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-20 border border-stone-20">
            {c.included.items.map((item) => (
              <li key={item.title} className="bg-stone-5 p-8 flex flex-col gap-3">
                <Check className="h-5 w-5 text-ember" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-display text-title text-ink">{item.title}</h3>
                <p className="text-body text-ink-60">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section tone="muted">
        <Container>
          <div className="max-w-3xl mb-14 flex flex-col gap-3">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {c.who.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.who.items.map((item) => (
              <div
                key={item.title}
                className="bg-stone-5 border border-stone-20 p-8 flex flex-col gap-3"
              >
                <h3 className="font-display text-title text-ink">{item.title}</h3>
                <p className="text-body text-ink-60">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* DIY vs Full-Service */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-14 flex flex-col gap-3">
            <Eyebrow>Why full-service</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {c.comparison.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-20 border border-stone-20">
            <div className="bg-stone-10 p-8 md:p-10 flex flex-col gap-5">
              <h3 className="font-display text-display-sm text-ink flex items-center gap-3">
                <X className="h-5 w-5 text-ink-60" strokeWidth={1.5} aria-hidden="true" />
                {c.comparison.diy.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {c.comparison.diy.items.map((i) => (
                  <li key={i} className="text-body text-ink-60 flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-ink-60 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-5 p-8 md:p-10 flex flex-col gap-5">
              <h3 className="font-display text-display-sm text-ink flex items-center gap-3">
                <Check className="h-5 w-5 text-ember" strokeWidth={1.5} aria-hidden="true" />
                {c.comparison.full.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {c.comparison.full.items.map((i) => (
                  <li key={i} className="text-body text-ink flex items-start gap-3">
                    <Check
                      className="h-4 w-4 text-ember mt-1 shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <ProcessSteps
        eyebrow="Process"
        h2={c.process.h2}
        steps={c.process.steps}
        layout="vertical"
      />

      {/* Recurring */}
      <RecurringBlock
        eyebrow={c.recurring.eyebrow}
        h2={c.recurring.h2}
        body={c.recurring.body}
        cta={c.recurring.cta}
      />

      {/* Portfolio */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-10 flex flex-col gap-3">
            <Eyebrow>Campaigns</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              Work from our full-service clients.
            </h2>
          </div>
          <PortfolioGrid
            items={portfolioCopy.items.slice(0, 6) as any}
            industries={portfolioCopy.industries.slice(0, 6)}
          />
          <p className="mt-6 text-small text-ink-60 border-l-2 border-stone-20 pl-4 italic max-w-3xl">
            {portfolioCopy.compliance}
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqBlock
        eyebrow="FAQ"
        h2="Full-service questions, answered."
        items={c.faq}
        id="fs-faq"
      />

      {/* Final CTA */}
      <Section tone="dark">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5 max-w-2xl">
              {c.finalCta.h2}
            </h2>
            <div className="flex flex-wrap gap-3">
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
              name: "Full-Service EDDM Campaigns",
              serviceType: "Done-for-you Every Door Direct Mail campaigns",
              description:
                "End-to-end EDDM campaign management: strategy, design, route planning, print, and mailing preparation.",
              url: "/full-service-eddm",
            })
          ),
        }}
      />
    </>
  );
}
