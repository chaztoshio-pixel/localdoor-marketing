import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FinalCta } from "@/components/sections/FinalCta";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { PostcardMock } from "@/components/media/PostcardMock";
import { getFeaturedOrder } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Print Products — Premium Postcards, Brochures & More",
  description:
    "Shop premium postcards, door hangers, flyers, business cards, rack cards, and brochures with design and mail upsells.",
  path: "/print-products",
});

export default function PrintProductsPage() {
  const products = getFeaturedOrder();

  return (
    <>
      <section className="bg-stone-5">
        <Container>
          <div className="py-16 md:py-24 lg:py-28 max-w-3xl flex flex-col gap-6">
            <Eyebrow>Print Products</Eyebrow>
            <h1 className="font-display text-display-lg md:text-display-xl text-ink">
              Premium <span className="bg-gradient-to-r from-plum-dark via-plum to-pink-500 bg-clip-text text-transparent">print products</span>, shipped nationwide.
            </h1>
            <p className="text-body-lg md:text-[1.25rem] text-ink-60">
              EDDM postcards, oversized postcards, door hangers, flyers, business cards,
              rack cards, brochures, and menus — with three artwork lanes on every product
              and a mailing add-on ready when you are.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/print-design" size="lg" withArrow>
                Upload your design
              </Button>
              <Button href="/eddm-print-mail" variant="secondary" size="lg">
                Add mailing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip
        items={[
          "Nationwide coverage",
          "Irvine, CA production",
          "LocalDoor Campaign Check",
          "Design included with campaigns",
          "Independent of USPS",
        ]}
      />

      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl flex flex-col gap-4">
              <Eyebrow>Catalog</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink">
                Eight product families. One accountable team.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/print-products/${p.pathSegment}`}
                className="group flex flex-col gap-4 bg-stone-5 border border-stone-20 hover:border-ink p-6 transition-all duration-200 hover:shadow-editorial"
              >
                <div className="aspect-[5/4] rounded-sm overflow-hidden bg-stone-10">
                  <PostcardMock
                    variant="grid"
                    frontEyebrow={p.eyebrow.toUpperCase()}
                    frontHeadline={p.name}
                    tagline={p.cartOrQuote}
                    className="transition-transform duration-300 group-hover:scale-[1.02] border-0"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-micro font-medium uppercase tracking-[0.12em] text-plum">
                    {p.cartOrQuote}
                  </span>
                  <h3 className="font-display text-title text-ink group-hover:text-plum transition-colors leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-small text-ink-60 line-clamp-3">{p.tagline}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-small font-medium text-ink group-hover:text-plum">
                  View product
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/eddm-print-mail"
              className="group block bg-ink text-stone-5 p-8 md:p-10 border border-plum rounded-md hover:bg-plum-dark transition-colors"
            >
              <span className="text-micro font-medium uppercase tracking-[0.14em] text-plum-tint">
                Cross-sell
              </span>
              <h3 className="mt-3 font-display text-display-sm text-stone-5">
                Want to mail what you print?
              </h3>
              <p className="mt-3 text-body text-stone-40">
                Search a market, pick carrier routes, estimate reach, and submit a
                managed quote. Your product and quantity carry over.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-small font-medium text-stone-5 group-hover:text-plum-tint">
                Go to EDDM Print &amp; Mail →
              </span>
            </Link>
            <Link
              href="/print-design"
              className="group block bg-stone-5 border border-stone-20 hover:border-ink p-8 md:p-10 transition-colors"
            >
              <span className="text-micro font-medium uppercase tracking-[0.12em] text-plum">
                Design help
              </span>
              <h3 className="mt-3 font-display text-display-sm text-ink group-hover:text-plum transition-colors">
                Need a concept designed from scratch?
              </h3>
              <p className="mt-3 text-body text-ink-60">
                Brief our studio with industry, offer, and brand direction. We design
                for print and response, proof with you, and hand off print-ready files.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-small font-medium text-ink group-hover:text-plum">
                See Print Design →
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      <FaqBlock
        eyebrow="FAQ"
        h2="Print Products, answered."
        items={[
          {
            q: "Can I upload artwork later?",
            a: "Yes. Every product supports three artwork lanes — Upload Now, Upload Later (we email a secure link), or Need Design Help (brief our studio).",
          },
          {
            q: "Do you offer bulk quantities beyond what's in the configurator?",
            a: "Yes. Any order 10,000+ routes to a managed quote so a campaign manager can spec stock, finish, and turnaround properly.",
          },
          {
            q: "Is every postcard EDDM-eligible?",
            a: "No. USPS EDDM Retail requires a flat-eligible piece — length > 10.5\", height > 6.125\", or thickness > 0.25\". The EDDM Postcards product only shows EDDM-eligible sizes.",
          },
          {
            q: "Do I get a proof before printing?",
            a: "Yes. A digital proof is delivered after artwork review; production begins only after you approve.",
          },
        ]}
        id="print-products-faq"
      />

      <FinalCta
        eyebrow="Start where you are"
        h2="Three entry points. One accountable team."
        cards={[
          {
            label: "I have artwork ready",
            description: "Shop products, upload files, and check out.",
            cta: "Start an order",
            href: "/print-products/eddm-postcards",
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
