import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

type Cta = { label: string; href: string };

export function FinalCta({
  eyebrow,
  h2,
  sub,
  primary,
  secondary,
  cards,
  tone = "dark",
}: {
  eyebrow?: string;
  h2: string;
  sub?: string;
  primary?: Cta;
  secondary?: Cta;
  cards?: { label: string; description: string; cta: string; href: string }[];
  tone?: "default" | "muted" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <Section tone={tone}>
      <Container>
        <div className="flex flex-col items-start md:items-center md:text-center gap-6 mb-12">
          {eyebrow ? (
            <Eyebrow tone={isDark ? "ember" : "ember"}>{eyebrow}</Eyebrow>
          ) : null}
          <h2
            className={`font-display text-display-md md:text-display-lg max-w-4xl ${
              isDark ? "text-stone-5" : "text-ink"
            }`}
          >
            {h2}
          </h2>
          {sub ? (
            <p
              className={`text-body-lg max-w-2xl ${
                isDark ? "text-stone-40" : "text-ink-60"
              }`}
            >
              {sub}
            </p>
          ) : null}
          {(primary || secondary) && (
            <div className="flex flex-wrap items-center gap-3 mt-2">
              {primary ? (
                <Button
                  href={primary.href}
                  variant={isDark ? "onDark" : "primary"}
                  size="lg"
                  withArrow
                >
                  {primary.label}
                </Button>
              ) : null}
              {secondary ? (
                <Button
                  href={secondary.href}
                  variant={isDark ? "ghost" : "secondary"}
                  size="lg"
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>

        {cards ? (
          <div className="grid md:grid-cols-3 gap-4">
            {cards.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className={`group block p-8 border transition-colors duration-200 ${
                  isDark
                    ? "border-ink-80 hover:border-ember bg-ink-80"
                    : "border-stone-20 hover:border-ink bg-stone-5"
                }`}
              >
                <div
                  className={`eyebrow ${isDark ? "text-ember" : "text-ember"}`}
                >
                  {c.label}
                </div>
                <p
                  className={`mt-3 text-body-lg ${
                    isDark ? "text-stone-5" : "text-ink"
                  }`}
                >
                  {c.description}
                </p>
                <span
                  className={`mt-6 inline-flex items-center gap-1.5 text-small font-medium ${
                    isDark
                      ? "text-stone-5 group-hover:text-ember"
                      : "text-ink group-hover:text-ember"
                  }`}
                >
                  {c.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
