import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PostcardMock } from "@/components/media/PostcardMock";
import { StylizedRouteMap } from "@/components/media/StylizedRouteMap";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { home } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

/**
 * Scalable city landing template.
 *
 * Add a new city by adding a slug to CITIES.
 * Each city slug renders a localized variant of the homepage value prop
 * focused on one metro — great for SEO and paid-search landing.
 *
 * TODO: For production, consider moving CITIES to a CMS or JSON file and
 * generating routes with generateStaticParams.
 */

type City = {
  slug: string;
  name: string; // e.g. "Irvine, CA"
  shortName: string; // e.g. "Irvine"
  marketBlurb: string;
  neighborhoods: string[];
};

const CITIES: Record<string, City> = {
  "irvine-ca": {
    slug: "irvine-ca",
    name: "Irvine, CA",
    shortName: "Irvine",
    marketBlurb:
      "Irvine and the surrounding Orange County markets are well suited to route-level EDDM — dense, mixed residential neighborhoods, steady demand across home services, dental, and real estate categories.",
    neighborhoods: [
      "Woodbridge",
      "Turtle Rock",
      "Quail Hill",
      "Portola Springs",
      "University Park",
      "Oak Creek",
    ],
  },
  "austin-tx": {
    slug: "austin-tx",
    name: "Austin, TX",
    shortName: "Austin",
    marketBlurb:
      "Austin's rapid growth and geographic sprawl reward route-level targeting. We help local businesses choose the right neighborhoods without wasting impressions on irrelevant routes.",
    neighborhoods: [
      "South Congress",
      "East Austin",
      "Mueller",
      "Zilker",
      "Circle C",
      "Cedar Park",
    ],
  },
  "phoenix-az": {
    slug: "phoenix-az",
    name: "Phoenix, AZ",
    shortName: "Phoenix",
    marketBlurb:
      "Phoenix markets favor home services, HVAC, pool, and roofing campaigns. We build route plans around service-area drive times and neighborhood density.",
    neighborhoods: [
      "Arcadia",
      "Biltmore",
      "Ahwatukee",
      "Paradise Valley",
      "North Scottsdale",
      "Gilbert",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CITIES).map((slug) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = CITIES[params.city];
  if (!city) return {};
  return pageMeta({
    title: `EDDM Direct Mail in ${city.name}`,
    description: `Route-level EDDM campaigns in ${city.name}. Custom postcard design, household targeting, and managed mail prep.`,
    path: `/cities/${city.slug}`,
  });
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = CITIES[params.city];
  if (!city) notFound();

  return (
    <>
      <section className="border-b border-stone-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center py-20 md:py-28">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Eyebrow>EDDM in {city.shortName}</Eyebrow>
              <h1 className="font-display text-display-lg md:text-display-xl text-ink">
                Nationwide EDDM, built for {city.name}.
              </h1>
              <p className="text-body-lg md:text-[1.25rem] text-ink-60 max-w-2xl">
                {city.marketBlurb}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/eddm-print-and-mail" size="lg" withArrow>
                  Build a {city.shortName} route plan
                </Button>
                <Button href="/contact?type=strategy-call" variant="secondary" size="lg">
                  Book a strategy call
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <PostcardMock
                variant="hero"
                frontEyebrow={`${city.shortName.toUpperCase()} NEIGHBORHOODS`}
                frontHeadline={`Mail That Lands In The Right Blocks Of ${city.shortName}.`}
              />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Eyebrow>Neighborhoods</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink">
                Route-level targeting across {city.shortName}.
              </h2>
              <p className="text-body-lg text-ink-60 max-w-prose">
                We plan campaigns at the carrier-route level — not just by ZIP
                — so your drop reflects how the market actually behaves.
              </p>
              <ul className="grid grid-cols-2 gap-3 mt-2">
                {city.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-3 text-body text-ink"
                  >
                    <Check className="h-4 w-4 text-ember mt-1 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    {n}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?type=campaign-quote&market=${encodeURIComponent(city.name)}`}
                className="link-underline text-body text-ink mt-2"
              >
                Request a {city.shortName} campaign quote
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <StylizedRouteMap />
            </div>
          </div>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Process"
        h2={`A ${city.shortName} campaign, start to drop.`}
        steps={home.howItWorks.steps}
        layout="horizontal"
      />

      <FaqBlock
        eyebrow="FAQ"
        h2={`EDDM questions for ${city.shortName} businesses.`}
        items={home.faqPreview.items}
        id={`city-faq-${city.slug}`}
      />

      <Section tone="dark">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5 max-w-2xl">
              Ready to map {city.shortName}?
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button href="/eddm-print-and-mail" variant="onDark" size="lg" withArrow>
                Start building routes
              </Button>
              <Button href="/contact?type=strategy-call" variant="ghost" size="lg">
                Book a call
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
