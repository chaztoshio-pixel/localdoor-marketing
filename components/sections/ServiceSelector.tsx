import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

type ServiceCard = {
  label: string; // e.g. "Service A"
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
};

/** Four coequal service cards used on homepage. */
export function ServiceSelector({
  eyebrow,
  h2,
  intro,
  cards,
}: {
  eyebrow: string;
  h2: string;
  intro: string;
  cards: ServiceCard[];
}) {
  return (
    <Section id="services">
      <Container>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <header className="md:col-span-5 flex flex-col gap-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              {h2}
            </h2>
          </header>
          <p className="md:col-span-7 self-end text-body-lg text-ink-60 max-w-prose">
            {intro}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col gap-4 bg-stone-5 border border-stone-20 hover:border-ink p-7 min-h-[360px] transition-colors"
            >
              <span className="text-micro font-medium uppercase tracking-[0.12em] text-plum">
                {card.label}
              </span>
              <h3 className="font-display text-title md:text-display-sm leading-tight text-ink group-hover:text-plum transition-colors">
                {card.title}
              </h3>
              <p className="text-body text-ink-60 flex-1">{card.description}</p>
              <ul className="pt-3 flex flex-col gap-2 border-t border-stone-20">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-small text-ink-60">
                    <Check
                      className="h-3.5 w-3.5 text-plum mt-1 shrink-0"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-small font-medium text-ink group-hover:text-plum">
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
  );
}
