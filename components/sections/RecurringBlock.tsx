import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function RecurringBlock({
  eyebrow,
  h2,
  body,
  features,
  cta,
}: {
  eyebrow: string;
  h2: string;
  body: string;
  features?: { title: string; body: string }[];
  cta: { label: string; href: string };
}) {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-6 flex flex-col gap-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5">
              {h2}
            </h2>
            <p className="text-body-lg text-stone-40 max-w-prose">{body}</p>
            <Link
              href={cta.href}
              className="mt-2 inline-flex items-center gap-2 text-body text-ember hover:text-stone-5 transition-colors font-medium"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          {features ? (
            <ul className="md:col-span-6 divide-y divide-ink-80 border-y border-ink-80">
              {features.map((f) => (
                <li key={f.title} className="py-6 grid grid-cols-12 gap-6">
                  <div className="col-span-4 font-display text-title text-stone-5">
                    {f.title}
                  </div>
                  <div className="col-span-8 text-body text-stone-40">{f.body}</div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
