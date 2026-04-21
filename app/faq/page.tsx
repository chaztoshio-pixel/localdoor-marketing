import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { faqPage as c } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "EDDM Direct Mail FAQ",
  description:
    "Answers to the most common questions on EDDM, design, timing, routes, pricing, recurring campaigns, and tracking.",
  path: "/faq",
});

export default function FaqPage() {
  const allItems = c.sections.flatMap((s) => s.items);
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

      <Section tone="muted" size="md">
        <Container>
          <div className="flex flex-col gap-20">
            {c.sections.map((section, i) => (
              <div
                key={section.title}
                className="grid md:grid-cols-12 gap-10"
                id={`faq-${i}`}
              >
                <header className="md:col-span-4">
                  <span className="font-mono text-small text-ember mb-2 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-display-md text-ink">
                    {section.title}
                  </h2>
                </header>
                <div className="md:col-span-8">
                  <Accordion items={section.items} idPrefix={`faq-${i}`} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(allItems)) }}
      />
    </>
  );
}
