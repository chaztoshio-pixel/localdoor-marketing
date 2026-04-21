import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getFeaturedOrder, type Product } from "@/lib/products";
import { PostcardMock } from "@/components/media/PostcardMock";

/** Featured products horizontal rail for homepage + catalog. */
export function FeaturedProducts({ limit = 5 }: { limit?: number }) {
  const featured = getFeaturedOrder().slice(0, limit);

  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow>Featured Products</Eyebrow>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              Premium print, ready to ship — nationwide.
            </h2>
          </div>
          <Link
            href="/print-products"
            className="link-underline text-body text-ink self-start md:self-end"
          >
            Shop all print products
            <ArrowRight className="h-4 w-4 ml-1" strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/print-products/${product.pathSegment}`}
      className="group flex flex-col gap-3 p-4 bg-stone-5 border border-stone-20 hover:border-ink rounded-md transition-all duration-200 hover:shadow-editorial"
    >
      <div className="relative w-full aspect-[5/4] rounded-sm overflow-hidden bg-stone-10">
        <PostcardMock
          variant="grid"
          frontEyebrow={product.eyebrow.toUpperCase()}
          frontHeadline={product.name}
          tagline={product.cartOrQuote}
          className="transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-micro uppercase tracking-[0.12em] text-plum">
          {product.cartOrQuote}
        </span>
        <h3 className="font-display text-title text-ink group-hover:text-plum transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-small text-ink-60 line-clamp-2">{product.tagline}</p>
      </div>
    </Link>
  );
}
