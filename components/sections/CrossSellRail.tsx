import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PRODUCTS_BY_SLUG } from "@/lib/products";

/** Cross-sell 3-product strip shown near bottom of each product page. */
export function CrossSellRail({ slugs }: { slugs: string[] }) {
  const products = slugs
    .map((slug) => PRODUCTS_BY_SLUG[slug])
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (products.length === 0) return null;

  return (
    <Section tone="muted" size="md">
      <Container>
        <Eyebrow>You may also need</Eyebrow>
        <h2 className="mt-3 font-display text-display-sm md:text-display-md text-ink">
          Related print products
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/print-products/${p.pathSegment}`}
              className="group flex flex-col gap-2 p-6 bg-stone-5 border border-stone-20 hover:border-ink transition-colors"
            >
              <span className="text-micro uppercase tracking-[0.12em] text-plum">
                {p.cartOrQuote}
              </span>
              <h3 className="font-display text-title text-ink group-hover:text-plum transition-colors">
                {p.name}
              </h3>
              <p className="text-small text-ink-60 line-clamp-2">{p.tagline}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-small font-medium text-ink group-hover:text-plum">
                View product
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
