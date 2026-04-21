import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { industries as c } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Industries We Serve — EDDM Strategy by Category",
  description:
    "Industry-specific EDDM strategies for home services, dental, med spa, real estate, restaurants, fitness, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
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
          <div className="flex flex-col gap-4">
            {c.verticals.map((v, i) => (
              <article
                key={v.slug}
                className="group bg-stone-5 border border-stone-20 hover:border-ink transition-colors p-8 md:p-10 grid md:grid-cols-12 gap-6 md:gap-10"
              >
                <div className="md:col-span-4 flex flex-col gap-3">
                  <span className="font-mono text-small text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-display-sm text-ink group-hover:text-ember transition-colors">
                    {v.name}
                  </h2>
                  <p className="text-body text-ink-60">{v.line}</p>
                </div>
                <ul className="md:col-span-7 flex flex-col gap-3 md:border-l md:border-stone-20 md:pl-10">
                  {v.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-body text-ink flex items-start gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="md:col-span-1 flex md:justify-end md:items-start">
                  <Link
                    href={`/contact?type=campaign-quote&industry=${v.slug}`}
                    className="inline-flex items-center gap-2 text-small font-medium text-ink group-hover:text-ember transition-colors"
                    aria-label={`Explore ${v.name} campaigns`}
                  >
                    <ArrowRight
                      className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
