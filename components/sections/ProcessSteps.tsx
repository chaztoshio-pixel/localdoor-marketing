import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Step = { n: string; title: string; body: string };

/**
 * Two layouts:
 *  - horizontal (default): compact 4-step row for homepage-style previews
 *  - vertical: long-form timeline for How It Works and Full-Service process sections
 */
export function ProcessSteps({
  eyebrow,
  h2,
  steps,
  layout = "horizontal",
  id,
}: {
  eyebrow?: string;
  h2?: string;
  steps: Step[];
  layout?: "horizontal" | "vertical";
  id?: string;
}) {
  return (
    <Section id={id}>
      <Container>
        {(eyebrow || h2) && (
          <div className="max-w-3xl mb-14 md:mb-20">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {h2 ? (
              <h2 className="mt-4 font-display text-display-md md:text-display-lg text-ink">
                {h2}
              </h2>
            ) : null}
          </div>
        )}

        {layout === "horizontal" ? (
          <ol className="grid md:grid-cols-4 gap-px bg-stone-20 border border-stone-20">
            {steps.map((s) => (
              <li
                key={s.n}
                className="bg-stone-5 p-8 flex flex-col gap-3 min-h-[200px]"
              >
                <span className="font-mono text-small text-ember">{s.n}</span>
                <h3 className="font-display text-title text-ink">{s.title}</h3>
                <p className="text-small text-ink-60">{s.body}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="relative border-l border-stone-20 md:border-l-0 md:grid md:grid-cols-12 md:gap-0">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="relative md:col-span-12 md:grid md:grid-cols-12 md:gap-8 pb-10 md:pb-12 pl-6 md:pl-0"
              >
                <div className="md:col-span-3 flex md:flex-col gap-3 md:items-start mb-3 md:mb-0">
                  <span className="font-mono text-small text-ember">{s.n}</span>
                  <h3 className="font-display text-title text-ink">{s.title}</h3>
                </div>
                <div className="md:col-span-9 md:border-l md:border-stone-20 md:pl-8 md:pb-12">
                  <p className="text-body-lg text-ink-60 max-w-prose">{s.body}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-ember md:hidden"
                />
                {i !== steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute left-[calc(25%)] top-6 bottom-0 w-px bg-stone-20"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        )}
      </Container>
    </Section>
  );
}
