import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PostcardMock } from "@/components/media/PostcardMock";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { UploadArtworkForm } from "@/components/forms/UploadArtworkForm";
import { CustomDesignBriefForm } from "@/components/forms/CustomDesignBriefForm";
import { postcardDesign as c, brand } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { serviceSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Print Design Services — Postcards, Brochures, More",
  description:
    "Custom design for every print format we produce. Upload your own or brief our studio on a custom concept.",
  path: "/print-design",
});

export default function PostcardDesignPage() {
  return (
    <>
      {/* Hero */}
      <section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center py-20 md:py-28">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <h1 className="font-display text-display-lg md:text-display-xl text-ink">
                {c.hero.h1}
              </h1>
              <p className="text-body-lg md:text-[1.25rem] text-ink-60 max-w-2xl">
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
              <p className="text-small text-ink-60 mt-2">{c.hero.trustLine}</p>
            </div>
            <div className="lg:col-span-5">
              <PostcardMock
                variant="hero"
                frontEyebrow="NEW PATIENT"
                frontHeadline="A Fresh Start For Your Smile."
                backLabel="Custom Design"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Product families rail */}
      <section className="border-y border-stone-20 bg-stone-5">
        <Container>
          <div className="py-10 md:py-14">
            <div className="flex items-center justify-between gap-6 mb-6 flex-wrap">
              <Eyebrow>Product families</Eyebrow>
              <Link href="#upload" className="link-underline text-small">
                Start with a file →
              </Link>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-px bg-stone-20 border border-stone-20">
              {c.productFamilies.map((fam) => (
                <li
                  key={fam.name}
                  className="bg-stone-5 p-4 md:p-5 flex flex-col gap-2 hover:bg-plum-tint transition-colors"
                >
                  <span className="text-micro uppercase tracking-[0.12em] text-plum">
                    {fam.path}
                  </span>
                  <h3 className="font-display text-[1rem] leading-[1.2] text-ink">
                    {fam.name}
                  </h3>
                  <p className="text-micro text-ink-60">{fam.sub}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-small text-ink-60">{c.commerceRule}</p>
          </div>
        </Container>
      </section>

      {/* Path selector */}
      <Section tone="muted">
        <Container>
          <div className="max-w-2xl mb-14 flex flex-col gap-3">
            <Eyebrow>{c.pathSelector.eyebrow}</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {c.pathSelector.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.pathSelector.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col gap-5 bg-stone-5 border border-stone-20 hover:border-ink p-10 transition-colors"
              >
                <h3 className="font-display text-display-sm text-ink group-hover:text-ember transition-colors">
                  {card.title}
                </h3>
                <p className="text-body-lg text-ink-60 max-w-prose">{card.body}</p>
                <div className="mt-auto pt-6 border-t border-stone-20 flex flex-col gap-3">
                  <span className="text-micro uppercase tracking-[0.12em] text-ink-60">
                    What you provide
                  </span>
                  <p className="text-small text-ink-60">{card.provide}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-body font-medium text-ink group-hover:text-ember">
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

      {/* Upload form */}
      <Section id="upload">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-5 flex flex-col gap-4">
              <Eyebrow>Upload artwork</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink">
                Upload your postcard design.
              </h2>
            </div>
            <p className="md:col-span-7 self-end text-body-lg text-ink-60 max-w-prose">
              Send us your files and any context. We'll confirm receipt and
              respond with mail-prep feedback, a timeline, and an estimate
              within one business day.
            </p>
          </div>
          <div className="bg-stone-5 border border-stone-20 p-6 md:p-10">
            <UploadArtworkForm />
          </div>
        </Container>
      </Section>

      {/* Custom brief */}
      <Section id="custom-brief" tone="muted">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-5 flex flex-col gap-4">
              <Eyebrow>Studio brief</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink">
                Brief our studio on your postcard.
              </h2>
            </div>
            <p className="md:col-span-7 self-end text-body-lg text-ink-60 max-w-prose">
              The more you share here, the sharper the first concept. None of
              these fields are required if you're not sure yet — we'll ask
              anything we're missing after you submit.
            </p>
          </div>
          <div className="bg-stone-5 border border-stone-20 p-6 md:p-10">
            <CustomDesignBriefForm />
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-14 flex flex-col gap-3">
            <Eyebrow>{c.included.eyebrow}</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {c.included.h2}
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-px bg-stone-20 border border-stone-20">
            {c.included.items.map((item) => (
              <li key={item.title} className="bg-stone-5 p-8 md:p-10 flex flex-col gap-3">
                <Check className="h-5 w-5 text-ember" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-display text-title text-ink">{item.title}</h3>
                <p className="text-body text-ink-60">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Mail guidance */}
      <Section tone="muted">
        <Container>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 flex flex-col gap-4">
              <Eyebrow>{c.mailGuidance.eyebrow}</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink">
                {c.mailGuidance.h2}
              </h2>
            </div>
            <div className="md:col-span-7 flex flex-col gap-6">
              <p className="text-body-lg text-ink-60 max-w-prose">
                {c.mailGuidance.body}
              </p>
              <ul className="flex flex-col gap-3">
                {c.mailGuidance.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-body text-ink"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-small text-ink-60 border-l-2 border-stone-20 pl-4 italic">
                {brand.uspsIndependence}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Revisions */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-14 flex flex-col gap-3">
            <Eyebrow>{c.revisions.eyebrow}</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {c.revisions.h2}
            </h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-px bg-stone-20 border border-stone-20">
            {c.revisions.items.map((item, i) => (
              <li key={item.step} className="bg-stone-5 p-8 flex flex-col gap-3">
                <span className="font-mono text-small text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-title text-ink">{item.step}</h3>
                <p className="text-body text-ink-60">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-small text-ink-60 max-w-3xl">
            {c.revisions.disclaimer}
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqBlock
        eyebrow="Design FAQ"
        h2="Design questions, answered."
        items={c.faq}
        id="postcard-faq"
      />

      {/* Upsell */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <Eyebrow>{c.upsell.eyebrow}</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5">
              {c.upsell.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.upsell.cards.map((u) => (
              <Link
                key={u.href}
                href={u.href}
                className="group block p-8 md:p-10 border border-ink-80 hover:border-ember bg-ink-80 transition-colors"
              >
                <h3 className="font-display text-display-sm text-stone-5 group-hover:text-ember transition-colors">
                  {u.title}
                </h3>
                <p className="mt-3 text-body text-stone-40">{u.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-small font-medium text-stone-5 group-hover:text-ember">
                  {u.cta}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Postcard Design for Direct Mail",
              serviceType: "Direct mail postcard design",
              description:
                "Custom postcard design built for print, mail, and response, with support for uploaded artwork or studio-brief custom concepts.",
              url: "/postcard-design",
            })
          ),
        }}
      />
    </>
  );
}
