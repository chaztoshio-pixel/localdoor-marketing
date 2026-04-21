import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Item = { title: string; body: string };

/** 4-card or 6-card grid of included service items. Reused on service pages. */
export function WhatsIncludedGrid({
  eyebrow,
  h2,
  items,
  columns = 3,
}: {
  eyebrow: string;
  h2: string;
  items: Item[];
  columns?: 2 | 3;
}) {
  const gridClass =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Section>
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16 flex flex-col gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-display text-display-md md:text-display-lg text-ink">{h2}</h2>
        </div>
        <ul className={`grid ${gridClass} gap-px bg-stone-20 border border-stone-20`}>
          {items.map((item) => (
            <li key={item.title} className="bg-stone-5 p-6 md:p-8 flex flex-col gap-3">
              <Check className="h-5 w-5 text-plum" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-title text-ink">{item.title}</h3>
              <p className="text-body text-ink-60">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
