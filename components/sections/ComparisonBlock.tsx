import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Column = { title: string; items: string[] };

/** DIY vs Full-Service comparison used on the Full-Service EDDM Campaigns page. */
export function ComparisonBlock({
  eyebrow,
  h2,
  negative,
  positive,
}: {
  eyebrow?: string;
  h2: string;
  negative: Column;
  positive: Column;
}) {
  return (
    <Section tone="default">
      <Container>
        <div className="max-w-3xl mb-12 flex flex-col gap-3">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="font-display text-display-md md:text-display-lg text-ink">{h2}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-stone-20 border border-stone-20">
          <div className="bg-stone-10 p-8 md:p-10 flex flex-col gap-5">
            <h3 className="font-display text-display-sm text-ink flex items-center gap-3">
              <X className="h-5 w-5 text-ink-60" strokeWidth={1.5} aria-hidden="true" />
              {negative.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {negative.items.map((i) => (
                <li key={i} className="text-body text-ink-60 flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-ink-60 shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-5 p-8 md:p-10 flex flex-col gap-5">
            <h3 className="font-display text-display-sm text-ink flex items-center gap-3">
              <Check className="h-5 w-5 text-plum" strokeWidth={1.5} aria-hidden="true" />
              {positive.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {positive.items.map((i) => (
                <li key={i} className="text-body text-ink flex items-start gap-3">
                  <Check
                    className="h-4 w-4 text-plum mt-1 shrink-0"
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
  );
}
