import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { faqSchema, jsonLd } from "@/lib/schema";

type FaqItem = { q: string; a: string };

export function FaqBlock({
  eyebrow = "FAQ",
  h2,
  items,
  includeSchema = true,
  id,
}: {
  eyebrow?: string;
  h2: string;
  items: FaqItem[];
  includeSchema?: boolean;
  id?: string;
}) {
  return (
    <Section id={id} tone="default">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <header className="md:col-span-4 flex flex-col gap-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {h2}
            </h2>
          </header>
          <div className="md:col-span-8">
            <Accordion items={items} idPrefix={id ?? "faq"} />
          </div>
        </div>
      </Container>
      {includeSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(items)) }}
        />
      ) : null}
    </Section>
  );
}
