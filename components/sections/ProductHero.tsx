import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PostcardMock } from "@/components/media/PostcardMock";
import type { Product } from "@/lib/products";

/** Product-page hero with product name + tagline + mockup visual. */
export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="bg-stone-5 border-b border-stone-20">
      <Container>
        <nav aria-label="Breadcrumb" className="pt-6 pb-2">
          <ol className="flex items-center gap-2 text-small text-ink-60">
            <li>
              <Link href="/" className="hover:text-plum">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/print-products" className="hover:text-plum">
                Print Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>
        <div className="grid lg:grid-cols-12 gap-8 items-center py-8 md:py-14 lg:py-20">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Eyebrow>{product.eyebrow}</Eyebrow>
            <h1 className="font-display text-display-md md:text-display-lg text-ink">
              {product.name}
            </h1>
            <p className="text-body-lg md:text-[1.25rem] text-ink-60 max-w-2xl">
              {product.tagline}
            </p>
            <p className="text-body text-ink-60 max-w-2xl">{product.description}</p>
          </div>
          <div className="lg:col-span-5">
            <PostcardMock
              variant="hero"
              frontEyebrow={product.eyebrow.toUpperCase()}
              frontHeadline={product.name}
              tagline={product.cartOrQuote}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
