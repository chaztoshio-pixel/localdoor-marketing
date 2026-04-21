import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { about as c, brand } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About LocalDoor Marketing — Direct Mail for Local Growth",
  description:
    "Independent direct-mail services company focused on premium postcard design and route-level EDDM for local businesses.",
  path: "/about",
});

export default function AboutPage() {
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

      <Section tone="muted">
        <Container>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Eyebrow>Approach</Eyebrow>
              <h2 className="mt-4 font-display text-display-md text-ink">
                {c.approach.h2}
              </h2>
            </div>
            <p className="md:col-span-8 text-body-lg text-ink-60 max-w-prose">
              {c.approach.body}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl mb-14">
            <Eyebrow>Principles</Eyebrow>
            <h2 className="mt-4 font-display text-display-md md:text-display-lg text-ink">
              {c.principles.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-stone-20 border border-stone-20">
            {c.principles.items.map((p, i) => (
              <div key={p.title} className="bg-stone-5 p-8 flex flex-col gap-3">
                <span className="font-mono text-small text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-title text-ink">{p.title}</h3>
                <p className="text-body text-ink-60">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <Eyebrow>Who we serve</Eyebrow>
              <h2 className="mt-4 font-display text-display-md text-ink">
                {c.serve.h2}
              </h2>
            </div>
            <p className="md:col-span-7 text-body-lg text-ink-60 max-w-prose">
              {c.serve.body}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl flex flex-col gap-3">
              <h2 className="font-display text-display-md md:text-display-lg text-stone-5">
                Reach the team.
              </h2>
              <p className="text-body-lg text-stone-40">{brand.hours}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="onDark" size="lg" withArrow>
                Contact LocalDoor
              </Button>
              <Button href="/eddm-print-and-mail" variant="ghost" size="lg">
                Start a campaign
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
