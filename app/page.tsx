import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PostcardMock } from "@/components/media/PostcardMock";
import { StylizedRouteMap } from "@/components/media/StylizedRouteMap";
import { ServiceSelector } from "@/components/sections/ServiceSelector";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RecurringBlock } from "@/components/sections/RecurringBlock";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { FinalCta } from "@/components/sections/FinalCta";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Premium Direct Mail & Print, Nationwide",
  description:
    "Custom postcard and print design, route-based EDDM print and mail, and fully managed campaigns. Irvine, CA. Serving nationwide.",
  path: "/",
});

const SERVICE_CHIPS = [
  { label: "Print Products", href: "/print-products" },
  { label: "Print Design", href: "/print-design" },
  { label: "EDDM Print & Mail", href: "/eddm-print-mail" },
  { label: "Full-Service EDDM Campaigns", href: "/full-service-eddm" },
];

const SERVICE_CARDS = [
  {
    label: "Service A",
    title: "Print Products",
    description:
      "EDDM postcards, oversized postcards, door hangers, flyers, business cards, rack cards, brochures, and menus — designed for print and response.",
    bullets: [
      "Upload now, upload later, or design help",
      "Cart checkout on standard SKUs",
      "Mailing add-on ready on every EDDM size",
    ],
    href: "/print-products",
    cta: "Shop print products",
  },
  {
    label: "Service B",
    title: "Print Design",
    description:
      "Custom design for every format we print. Upload your own or brief our studio on a custom concept.",
    bullets: [
      "Three artwork lanes on every page",
      "Mail-ready layouts with indicia space",
      "Proofs + print-ready files delivered",
    ],
    href: "/print-design",
    cta: "See Print Design",
  },
  {
    label: "Service C",
    title: "EDDM Print & Mail",
    description:
      "Search a market, compare routes, estimate household reach, upload artwork, and move into print-and-mail coordination.",
    bullets: [
      "Route-level targeting with overlays",
      "Guided quote today, live checkout ahead",
      "Design handoff included",
    ],
    href: "/eddm-print-mail",
    cta: "Build an EDDM quote",
  },
  {
    label: "Service D",
    title: "Full-Service EDDM Campaigns",
    description:
      "We handle strategy, route planning, design, print, and mailing coordination from one accountable team.",
    bullets: [
      "Strategy, routes, design, print, mail",
      "Existing artwork or full managed creative",
      "One calendar, one invoice, one owner",
    ],
    href: "/full-service-eddm",
    cta: "See Full-Service EDDM",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center py-16 md:py-24 lg:py-28">
            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
              <Eyebrow>Premium direct mail & print for local growth — nationwide</Eyebrow>
              <h1 className="font-display text-display-md md:text-display-lg lg:text-[3.75rem] leading-[1.08] tracking-[-0.022em] text-ink">
                Custom postcard &amp; print design, route-based{" "}
                <span className="bg-gradient-to-r from-plum-dark via-plum to-pink-500 bg-clip-text text-transparent">
                  EDDM print and mail
                </span>
                , and fully managed campaigns — built for businesses that want direct mail done right.
              </h1>
              <p className="text-body-lg md:text-[1.25rem] text-ink-60 max-w-2xl">
                Shop premium print products, plan a route-based EDDM campaign, or hand us
                the whole thing. Irvine, CA production. Serving businesses nationwide.
              </p>

              {/* Service chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {SERVICE_CHIPS.map((chip) => (
                  <Link
                    key={chip.href}
                    href={chip.href}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-small font-medium border border-ink/20 bg-stone-5 hover:border-plum hover:bg-plum-tint hover:text-plum-dark text-ink transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-plum" />
                    {chip.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button href="/print-products" variant="primary" size="lg" withArrow>
                  Shop Print Products
                </Button>
                <Button href="/eddm-print-mail" variant="secondary" size="lg">
                  Build an EDDM Quote
                </Button>
              </div>
              <Link href="/print-design" className="link-underline text-body text-ink">
                Upload artwork or request design
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <p className="text-small text-ink-60 mt-2">
                Nationwide coverage · Route-level targeting · Independent of USPS
              </p>
            </div>
            <div className="lg:col-span-5">
              <PostcardMock variant="hero" />
            </div>
          </div>
        </Container>
      </section>

      {/* Service selector — four coequal cards */}
      <ServiceSelector
        eyebrow="Services"
        h2="Four coequal doors. One accountable team."
        intro="Start where you are. Shop a product, design a piece, plan a route-based campaign, or hand us the whole thing."
        cards={SERVICE_CARDS}
      />

      {/* Featured Products strip */}
      <FeaturedProducts limit={5} />

      {/* Trust strip */}
      <TrustStrip
        items={[
          "Nationwide EDDM coverage",
          "Irvine, CA production",
          "LocalDoor Campaign Check",
          "Design included with campaigns",
          "Independent of USPS",
        ]}
      />

      {/* Sample Campaign Concepts preview */}
      <Section tone="muted">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl flex flex-col gap-4">
              <Eyebrow>Sample Campaign Concepts</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink">
                Work built to get opened, read, and responded to.
              </h2>
              <p className="text-body-lg text-ink-60 max-w-prose">
                Every concept is clearly labeled. We publish real client work only with
                written consent — no fake testimonials, no invented case studies.
              </p>
            </div>
            <Link href="/portfolio" className="link-underline">
              See the full gallery
              <ArrowRight className="h-4 w-4 ml-1" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { eyebrow: "DRIVE CALLS", headline: "Spring Tune-Up.", tag: "Concept · Home services" },
              { eyebrow: "NEW PATIENT", headline: "A Fresh Start For Your Smile.", tag: "Concept · Dental" },
              { eyebrow: "GRAND OPENING", headline: "A New Table In The Neighborhood.", tag: "Concept · Restaurants" },
            ].map((c, i) => (
              <figure key={i} className="flex flex-col gap-3">
                <PostcardMock
                  variant="grid"
                  frontEyebrow={c.eyebrow}
                  frontHeadline={c.headline}
                />
                <figcaption>
                  <span className="inline-flex items-center gap-1.5 text-micro font-medium uppercase tracking-[0.12em] px-2.5 py-1 rounded-sm bg-plum-tint text-plum-dark">
                    <span className="h-1.5 w-1.5 rounded-full bg-plum" />
                    {c.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <ProcessSteps
        eyebrow="Process"
        h2="A campaign workflow built for local businesses."
        steps={[
          {
            n: "01",
            title: "Inquiry",
            body: "Share your market, goals, and any creative direction. We'll respond with a campaign path and estimate.",
          },
          {
            n: "02",
            title: "Strategy & Creative",
            body: "Route planning, audience overlay, and design tailored to your offer and product format.",
          },
          {
            n: "03",
            title: "Proof & Production",
            body: "You approve proofs. We handle print specs, indicia, finish, and carrier-route prep.",
          },
          {
            n: "04",
            title: "Launch",
            body: "Mailing is prepared, coordinated with the appropriate mail-handling path, and tracked through drop.",
          },
        ]}
        layout="horizontal"
      />

      {/* Route intelligence preview */}
      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Eyebrow>Route intelligence</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink">
                Target the right neighborhoods, not just a ZIP code.
              </h2>
              <p className="text-body-lg text-ink-60 max-w-prose">
                Route-level household estimates, demographic overlays, and drive-time
                context — so every drop reaches people who convert.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "Route-level household estimates and drive-time context",
                  "Core overlays: age, household size, income",
                  "Premium overlays: dwelling mix, owner occupancy",
                  "Save and compare route sets before committing",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base text-ink">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-plum shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/eddm-print-mail" className="link-underline mt-2">
                Start a route plan
                <ArrowRight className="h-4 w-4 ml-1" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <StylizedRouteMap />
            </div>
          </div>
        </Container>
      </Section>

      {/* Recurring campaigns */}
      <RecurringBlock
        eyebrow="Recurring direct mail"
        h2="One postcard rarely wins. Recurring drops do."
        body="Most high-performing direct mail campaigns aren't one-off. They're patterned drops to the same neighborhoods on a predictable cadence. We set up monthly, bi-monthly, and quarterly programs for businesses that treat direct mail like a channel."
        features={[
          { title: "Monthly cadence", body: "Same routes, rotating offers." },
          { title: "Creative refresh", body: "New art each drop to avoid banner blindness." },
          { title: "One managed workflow", body: "One invoice, one approval flow, one calendar." },
        ]}
        cta={{ label: "Ask about recurring programs", href: "/contact?type=recurring" }}
      />

      {/* FAQ preview */}
      <FaqBlock
        eyebrow="FAQ"
        h2="What local businesses ask before their first drop."
        items={[
          {
            q: "What is EDDM and how is it different from standard direct mail?",
            a: "Every Door Direct Mail® lets you send mail to every address on a carrier route without a mailing list. It's route-based rather than list-based, which makes it well suited for local businesses targeting neighborhoods.",
          },
          {
            q: "Do you design door hangers, brochures, and business cards too?",
            a: "Yes. Print Design covers every format we print — postcards, oversized postcards, door hangers, flyers, business cards, rack cards, and brochures. Additional print collateral is available on request.",
          },
          {
            q: "How long does a campaign take from brief to mailbox?",
            a: "A standard campaign typically runs 2–4 weeks from brief to drop window, depending on revisions and print scheduling.",
          },
          {
            q: "Can I send the same postcard to the same routes every month?",
            a: "Yes — most of our best campaigns are recurring drops with rotating creative. Recurring programs are managed on a single calendar and invoice cadence.",
          },
          {
            q: "How do you target by neighborhood?",
            a: "We plan at the carrier-route level, not just by ZIP code. Routes can be filtered by household count, residential/business mix, and optional demographic overlays.",
          },
        ]}
        id="home-faq"
      />

      {/* Final CTA */}
      <FinalCta
        eyebrow="Start where you are"
        h2="Three entry points. One accountable team."
        cards={[
          {
            label: "I have artwork ready",
            description: "Shop products, upload files, check out.",
            cta: "Start an order",
            href: "/print-products",
          },
          {
            label: "I need a route plan",
            description: "Search a market, build routes, estimate households.",
            cta: "Build a quote",
            href: "/eddm-print-mail",
          },
          {
            label: "I want it all handled",
            description: "Strategy, design, print, mailing — done for you.",
            cta: "Book a strategy call",
            href: "/contact?type=strategy-call",
          },
        ]}
        tone="dark"
      />
    </>
  );
}
