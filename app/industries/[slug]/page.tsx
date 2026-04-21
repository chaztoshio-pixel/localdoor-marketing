import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PostcardMock } from "@/components/media/PostcardMock";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  INDUSTRIES,
  getIndustry,
} from "@/lib/industries";
import { PRODUCTS_BY_SLUG } from "@/lib/products";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, jsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  return pageMeta({
    title: `${industry.name} Direct Mail & Print Services`,
    description: `${industry.name} direct mail and print — ${industry.oneLine}`,
    path: `/industries/${industry.slug}`,
  });
}

export default function IndustryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();

  const recommendedProducts = industry.recommendedProducts
    .map((slug) => PRODUCTS_BY_SLUG[slug])
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const related = industry.relatedIndustries
    .map(getIndustry)
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-stone-5 border-b border-stone-20">
        <Container>
          <nav aria-label="Breadcrumb" className="pt-6 pb-2">
            <ol className="flex items-center gap-2 text-small text-ink-60">
              <li><Link href="/" className="hover:text-plum">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/industries" className="hover:text-plum">Industries</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-ink" aria-current="page">{industry.name}</li>
            </ol>
          </nav>
          <div className="py-10 md:py-16 max-w-3xl flex flex-col gap-5">
            <Eyebrow>Industry focus</Eyebrow>
            <h1 className="font-display text-display-lg md:text-display-xl text-ink">
              Direct Mail &amp; Print for {industry.name}.
            </h1>
            <p className="text-body-lg md:text-[1.25rem] text-ink-60">
              {industry.oneLine}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="#recommended-products" size="lg" withArrow>
                See recommended products
              </Button>
              <Button
                href={`/contact?type=strategy-call&industry=${industry.slug}`}
                variant="secondary"
                size="lg"
              >
                Book a strategy call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Recommended products */}
      <Section id="recommended-products" tone="muted">
        <Container>
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <Eyebrow>Recommended products</Eyebrow>
            <h2 className="font-display text-display-md text-ink">
              Three products we recommend for {industry.name}.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/print-products/${p.pathSegment}`}
                className="group flex flex-col gap-4 p-6 bg-stone-5 border border-stone-20 hover:border-ink transition-colors"
              >
                <div className="aspect-[5/4] bg-stone-10 rounded-sm overflow-hidden">
                  <PostcardMock
                    variant="grid"
                    frontEyebrow={p.eyebrow.toUpperCase()}
                    frontHeadline={p.name}
                    tagline={p.cartOrQuote}
                    className="border-0"
                  />
                </div>
                <h3 className="font-display text-title text-ink group-hover:text-plum transition-colors">
                  {p.name}
                </h3>
                <p className="text-small text-ink-60 line-clamp-2">{p.tagline}</p>
                <span className="inline-flex items-center gap-1 text-small font-medium text-ink group-hover:text-plum">
                  View product
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Typical campaign approach */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 flex flex-col gap-4">
              <Eyebrow>Campaign approach</Eyebrow>
              <h2 className="font-display text-display-md text-ink">
                Typical campaign for {industry.name}.
              </h2>
            </div>
            <div className="md:col-span-7 flex flex-col gap-5">
              <div>
                <span className="text-micro uppercase tracking-[0.12em] text-plum">Typical offer</span>
                <p className="mt-1 text-body text-ink">{industry.typicalOffer}</p>
              </div>
              <div>
                <span className="text-micro uppercase tracking-[0.12em] text-plum">Route mix</span>
                <p className="mt-1 text-body text-ink">{industry.routeMix}</p>
              </div>
              <div>
                <span className="text-micro uppercase tracking-[0.12em] text-plum">Timing</span>
                <p className="mt-1 text-body text-ink">{industry.timing}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Concept example */}
      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Eyebrow>Concept example</Eyebrow>
              <h2 className="font-display text-display-md text-ink">
                A concept, designed for {industry.name}.
              </h2>
              <p className="text-body text-ink-60 max-w-prose">
                Every example we publish is clearly labeled. This is a studio concept —
                not a real client campaign. We add real client work only with written consent.
              </p>
              <span className="inline-flex items-center gap-1.5 text-micro font-medium uppercase tracking-[0.12em] px-2.5 py-1 rounded-sm bg-plum-tint text-plum-dark w-max">
                <span className="h-1.5 w-1.5 rounded-full bg-plum" />
                Concept · {industry.name}
              </span>
            </div>
            <div className="lg:col-span-7">
              <PostcardMock
                variant="hero"
                frontEyebrow={industry.name.toUpperCase()}
                frontHeadline={industry.typicalOffer.split(",")[0].trim()}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA strip */}
      <Section tone="dark">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5 max-w-2xl">
              Ready to map {industry.name} in your market?
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button href="/eddm-print-mail" variant="onDark" size="lg" withArrow>
                Build an EDDM quote
              </Button>
              <Button href="/full-service-eddm" variant="ghost" size="lg">
                See Full-Service EDDM
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqBlock
        eyebrow={`${industry.name} FAQ`}
        h2={`Common ${industry.name} campaign questions.`}
        items={[
          {
            q: `What's the best postcard size for ${industry.name}?`,
            a: `For mail campaigns, ${industry.name} typically uses EDDM-eligible sizes like 6.5×9 or 6.5×12. For in-store or hand-distribution, 4×6 standard postcards work fine.`,
          },
          {
            q: `What's a realistic timeline for a ${industry.name} campaign?`,
            a: "A standard campaign runs 2–4 weeks from brief to drop window, depending on revisions and print scheduling. Full-Service campaigns run 3–5 weeks.",
          },
          {
            q: `How many pieces should a ${industry.name} business mail per drop?`,
            a: "Typical first drops are 1,000–2,500 pieces to one or two neighborhoods. Recurring programs often scale to 5,000+ per month across multiple routes.",
          },
          {
            q: `Do you offer design help for ${industry.name}?`,
            a: "Yes. Print Design covers every format we print. Upload your own or brief our studio on a custom concept.",
          },
        ]}
        id={`industry-${industry.slug}-faq`}
      />

      {/* Related industries */}
      <Section>
        <Container>
          <div className="max-w-2xl mb-8 flex flex-col gap-3">
            <Eyebrow>Related industries</Eyebrow>
            <h2 className="font-display text-display-md text-ink">
              Other verticals with similar campaigns.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/industries/${r.slug}`}
                className="inline-flex items-center rounded-full px-3.5 py-1.5 text-small font-medium border border-stone-20 bg-stone-5 text-ink-60 hover:border-ink hover:text-ink transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta
        eyebrow="Start where you are"
        h2={`Three ways to run a ${industry.name} campaign.`}
        cards={[
          {
            label: "I have artwork ready",
            description: "Shop products, upload files, and check out.",
            cta: "Shop products",
            href: "/print-products",
          },
          {
            label: "I need a route plan",
            description: `Build a ${industry.name} route plan in your market.`,
            cta: "Build a quote",
            href: "/eddm-print-mail",
          },
          {
            label: "I want it all handled",
            description: "Strategy, design, print, mailing — done for you.",
            cta: "Book a strategy call",
            href: `/contact?type=strategy-call&industry=${industry.slug}`,
          },
        ]}
        tone="dark"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: `Direct Mail & Print for ${industry.name}`,
              description: industry.oneLine,
              url: `/industries/${industry.slug}`,
              serviceType: "Industry-specific direct-mail services",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.name, href: `/industries/${industry.slug}` },
            ])
          ),
        }}
      />
    </>
  );
}
