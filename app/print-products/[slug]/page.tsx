import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProductHero } from "@/components/sections/ProductHero";
import { StickyConfigurator } from "@/components/sections/StickyConfigurator";
import { TabbedInfoPanel } from "@/components/sections/TabbedInfoPanel";
import { MailingAddOnCard } from "@/components/sections/MailingAddOnCard";
import { CrossSellRail } from "@/components/sections/CrossSellRail";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { FinalCta } from "@/components/sections/FinalCta";
import { PRODUCTS, getProduct } from "@/lib/products";
import { pageMeta } from "@/lib/seo";
import { productSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import {
  EDDM_RETAIL_MIN_PIECES_PER_ZIP_PER_DAY,
  EDDM_RETAIL_MAX_PIECES_PER_ZIP_PER_DAY,
  EDDM_DISPLAY,
} from "@/lib/uspsFacts";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return {};
  return pageMeta({
    title: `${product.name} — ${product.eyebrow} | LocalDoor Marketing`,
    description: product.tagline,
    path: `/print-products/${product.pathSegment}`,
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <>
      <ProductHero product={product} />

      {/* Configurator + tabbed info panel (desktop: side-by-side; mobile: stacked) */}
      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <TabbedInfoPanel
                tabs={[
                  {
                    id: "specs",
                    label: "Specifications",
                    content: (
                      <div className="flex flex-col gap-5">
                        <SpecRow
                          label="Available sizes"
                          value={product.sizes.map((s) => s.dimensions).join(" · ")}
                        />
                        <SpecRow
                          label="Stocks"
                          value={product.stocks.map((s) => s.label).join(" · ")}
                        />
                        {product.finishes.length > 1 ? (
                          <SpecRow
                            label="Finishes"
                            value={product.finishes.map((f) => f.label).join(" · ")}
                          />
                        ) : null}
                        <SpecRow
                          label="Sides"
                          value={product.sidesOptions.map((s) => s.label).join(" · ")}
                        />
                        <SpecRow
                          label="Turnaround"
                          value={product.turnaroundOptions.map((t) => t.label).join(" · ")}
                        />
                        {product.eddmEligible ? (
                          <SpecRow
                            label="EDDM eligibility"
                            value={`Yes, when size meets USPS® flat rules. EDDM Retail minimum ${EDDM_RETAIL_MIN_PIECES_PER_ZIP_PER_DAY.toLocaleString()} pieces per ZIP per day; maximum ${EDDM_RETAIL_MAX_PIECES_PER_ZIP_PER_DAY.toLocaleString()}.`}
                          />
                        ) : (
                          <SpecRow
                            label="EDDM eligibility"
                            value="No — this format does not meet USPS® flat rules. For mailing, see EDDM Postcards."
                          />
                        )}
                      </div>
                    ),
                  },
                  {
                    id: "file-setup",
                    label: "File Setup",
                    content: (
                      <div className="flex flex-col gap-3 text-body text-ink-60">
                        <p><strong>File formats:</strong> PDF (preferred, print-ready), AI, PSD, TIFF at 300 DPI.</p>
                        <p><strong>Color mode:</strong> CMYK. RGB source files are auto-converted with proof approval.</p>
                        <p><strong>Bleed:</strong> 0.125" (3mm) on all sides.</p>
                        <p><strong>Safe zone:</strong> 0.125" inside trim.</p>
                        <p><strong>Resolution:</strong> 300 DPI minimum at final size.</p>
                        <p><strong>Fonts:</strong> Outlined or embedded.</p>
                        {product.eddmEligible ? (
                          <p>
                            <strong>EDDM panel:</strong> address panel and indicia space are reserved on the
                            mail-side of the design. Our design templates place these automatically.
                          </p>
                        ) : null}
                      </div>
                    ),
                  },
                  {
                    id: "proof",
                    label: "Proof & Production",
                    content: (
                      <div className="flex flex-col gap-3 text-body text-ink-60">
                        <p>
                          After checkout, our team reviews your files within 1–2 business days and
                          delivers a digital proof via email.
                        </p>
                        <p>
                          You can approve the proof, request revisions (limited rounds per scope), or
                          cancel before production. Production begins only after written approval.
                        </p>
                        <p>
                          Minor color and finish variation from on-screen proofs is normal. If a piece
                          is materially defective, contact us within 7 days of delivery for remedy.
                        </p>
                      </div>
                    ),
                  },
                  {
                    id: "turnaround",
                    label: "Turnaround & Shipping",
                    content: (
                      <div className="flex flex-col gap-3 text-body text-ink-60">
                        <p>
                          Standard turnaround is 5–7 business days after proof approval. Rush
                          (3–5 business days) and next-day options available where supported;
                          rush fees apply.
                        </p>
                        <p>
                          Shipping via partner carrier (UPS, FedEx, or USPS) with tracking. For
                          EDDM orders, pieces are routed to a USPS drop facility rather than
                          shipped to you.
                        </p>
                        <p>
                          All delivery timing is estimated; USPS mail-in-home timing is not
                          controlled by LocalDoor Marketing.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />

              {product.eddmEligible ? (
                <MailingAddOnCard productSlug={product.slug} />
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <StickyConfigurator product={product} />
            </div>
          </div>
        </Container>
      </Section>

      <TrustStrip
        items={[
          "LocalDoor Campaign Check",
          "CMYK color-managed",
          "Print-ready file review",
          "Design support available",
        ]}
      />

      <CrossSellRail slugs={product.crossSells} />

      <FaqBlock
        eyebrow="Product FAQ"
        h2={`${product.name} — questions, answered.`}
        items={[
          {
            q: "Can I order a proof before full production?",
            a: "Yes. A digital proof is delivered after file review; production begins only after written approval.",
          },
          {
            q: "What's the difference between standard and premium stock?",
            a: "Premium stocks (16pt+) are thicker, heavier, and hold finishes like soft-touch or spot UV better. Standard 14pt stocks are a great default for most campaigns.",
          },
          {
            q: "How fast can you turn this around?",
            a: "Standard 5–7 business days after proof approval. Rush and next-day options available for additional fees.",
          },
          {
            q: "Can I upload artwork later?",
            a: "Yes. Select Upload Later in the configurator; we'll email a secure upload link valid for 7 days. Production starts once files are received and approved.",
          },
          {
            q: "Do you offer bulk discounts beyond 10,000?",
            a: "Yes — any order of 10,000+ routes to a managed quote with campaign-manager review.",
          },
          ...(product.eddmEligible
            ? [
                {
                  q: "Is this product EDDM-eligible?",
                  a: `Yes, when the selected size meets USPS® flat rules. EDDM Retail requires ${EDDM_RETAIL_MIN_PIECES_PER_ZIP_PER_DAY.toLocaleString()}–${EDDM_RETAIL_MAX_PIECES_PER_ZIP_PER_DAY.toLocaleString()} pieces per ZIP per day at current ${EDDM_DISPLAY.retailRate}/piece postage.`,
                },
              ]
            : [
                {
                  q: "Can I mail this product?",
                  a: "This product format is not EDDM-eligible. For direct-mail campaigns, see EDDM Postcards — those sizes meet USPS® flat rules.",
                },
              ]),
        ]}
        id={`${product.slug}-faq`}
      />

      <FinalCta
        eyebrow="Ready to order?"
        h2={`Configure ${product.name} above or talk to a campaign manager.`}
        cards={[
          {
            label: "Add to cart",
            description: `Use the configurator above to spec and add ${product.name} to cart.`,
            cta: "Configure above",
            href: `#configurator`,
          },
          {
            label: "Request a quote",
            description: "Custom sizes, unusual finishes, or 10K+ volumes.",
            cta: "Request a quote",
            href: `/contact?type=campaign-quote&product=${product.slug}`,
          },
          {
            label: "Full-service campaign",
            description: "Strategy, design, print, mailing — handled.",
            cta: "See Full-Service EDDM",
            href: "/full-service-eddm",
          },
        ]}
        tone="dark"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            productSchema({
              name: product.name,
              description: product.description,
              url: `/print-products/${product.pathSegment}`,
              sku: product.slug,
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
              { label: "Print Products", href: "/print-products" },
              { label: product.name, href: `/print-products/${product.pathSegment}` },
            ])
          ),
        }}
      />
    </>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid md:grid-cols-4 gap-2 py-3 border-b border-stone-20 last:border-b-0">
      <dt className="text-micro uppercase tracking-[0.12em] text-ink-60">{label}</dt>
      <dd className="md:col-span-3 text-body text-ink">{value}</dd>
    </div>
  );
}
