import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cart — Review & Checkout",
  description: "Review your cart. Complete checkout or request a campaign quote.",
  path: "/cart",
});

/**
 * Cart page — server component shell. Cart state, line items, and checkout
 * logic are placeholders for future integration with Stripe + cart-state store.
 *
 * TODO: integrate cart state (Zustand or React Context) — see LocalDoor-Redesign-Blueprint.md Section 25.
 * TODO: integrate Stripe Checkout for Buy Now mode.
 * TODO: wire Request Quote submission to CRM (HubSpot) with cart payload.
 */
export default function CartPage() {
  return (
    <>
      <section className="bg-stone-5 border-b border-stone-20">
        <Container>
          <div className="py-12 md:py-16 max-w-3xl flex flex-col gap-4">
            <Eyebrow>Cart</Eyebrow>
            <h1 className="font-display text-display-md md:text-display-lg text-ink">
              Your Cart
            </h1>
            <p className="text-body-lg text-ink-60">
              Review items, confirm artwork status, and check out — or request a campaign quote for custom work.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
            {/* Line items column */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* First-order strip — visible to first-time visitors via cookie */}
              <div className="bg-plum-tint border border-plum rounded-md p-4 flex items-start gap-3">
                <Info className="h-4 w-4 text-plum-dark mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <p className="text-small text-plum-dark">
                  <strong className="font-medium">First order?</strong> Save 15% on Print
                  Products. Code applies automatically at checkout.
                </p>
              </div>

              {/* Mailing upsell banner — shown when cart contains EDDM-eligible items without mailing add-on */}
              <div className="bg-ink text-stone-5 border border-plum rounded-md p-5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-micro font-medium uppercase tracking-[0.14em] text-plum-tint">
                      Mail upsell
                    </span>
                    <p className="mt-2 text-body text-stone-40">
                      Planning to mail these? Add route selection and mailing next.
                    </p>
                  </div>
                  <Link
                    href="/eddm-print-mail"
                    className="inline-flex items-center gap-2 text-small font-medium text-stone-5 hover:text-plum-tint transition-colors"
                  >
                    Go to EDDM Print &amp; Mail
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Placeholder empty state — replaced with real line items from cart state */}
              <div className="bg-stone-5 border border-stone-20 rounded-md p-10 md:p-16 flex flex-col items-center gap-4 text-center">
                <div className="h-16 w-16 rounded-full bg-stone-10 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-ink-60" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="font-display text-display-sm text-ink">
                  Your cart is empty
                </h2>
                <p className="text-body text-ink-60 max-w-md">
                  Start with a featured product or build a campaign quote. Cart integration is
                  wired at launch — this is a live shell.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                  <Button href="/print-products" size="lg" withArrow>
                    Shop Print Products
                  </Button>
                  <Button href="/eddm-print-mail" variant="secondary" size="lg">
                    Build an EDDM Quote
                  </Button>
                </div>
              </div>

              {/*
                Line-item row template (reference, for implementation):

                <div className="bg-stone-5 border border-stone-20 rounded-md p-5 grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-2 aspect-[5/4] bg-stone-10 rounded-sm" />
                  <div className="md:col-span-6 flex flex-col gap-1">
                    <h3 className="font-display text-title text-ink">EDDM Postcards</h3>
                    <p className="text-small text-ink-60">6.5 × 9 · 14pt Gloss · Front + Back · 1,000 qty</p>
                    <span className="inline-flex items-center gap-1.5 text-micro uppercase tracking-[0.12em] px-2 py-0.5 rounded-sm bg-plum-tint text-plum-dark w-max">
                      <span className="h-1.5 w-1.5 rounded-full bg-plum" />
                      Uploaded ✓
                    </span>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <div className="font-mono text-body text-ink">$248.00</div>
                  </div>
                  <div className="md:col-span-2 flex justify-end gap-2">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </div>
              */}
            </div>

            {/* Order summary sidebar */}
            <aside className="lg:col-span-4">
              <div className="bg-stone-5 border border-stone-20 rounded-md p-6 md:sticky md:top-24 flex flex-col gap-5">
                <h2 className="font-display text-display-sm text-ink">Order summary</h2>

                <dl className="flex flex-col gap-2 text-body border-b border-stone-20 pb-4">
                  <div className="flex justify-between">
                    <dt className="text-ink-60">Subtotal</dt>
                    <dd className="font-mono text-ink">$0.00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink-60">Shipping (estimated)</dt>
                    <dd className="font-mono text-ink-60">—</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink-60">Tax (estimated)</dt>
                    <dd className="font-mono text-ink-60">—</dd>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-stone-20">
                    <dt className="font-medium text-ink">Total</dt>
                    <dd className="font-mono text-ink font-medium">$0.00</dd>
                  </div>
                </dl>

                {/* Checkout mode toggle */}
                <div className="flex flex-col gap-2">
                  <span className="text-micro font-medium uppercase tracking-[0.12em] text-ink-60">
                    Checkout mode
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className="p-3 border border-ink bg-ink text-stone-5 rounded-md text-small font-medium"
                      aria-pressed="true"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="p-3 border border-stone-20 bg-stone-5 text-ink rounded-md text-small font-medium hover:border-ink transition-colors"
                      aria-pressed="false"
                    >
                      Request Quote
                    </button>
                  </div>
                  <p className="text-micro text-ink-60 leading-relaxed">
                    Buy Now uses Stripe Checkout (card, Apple Pay, Google Pay). Request
                    Quote routes to a campaign manager for mixed or custom orders.
                  </p>
                </div>

                <Button size="lg" withArrow disabled>
                  Checkout
                </Button>
                <Link
                  href="/proof-approval"
                  className="text-small text-ink-60 hover:text-plum underline underline-offset-4 text-center"
                >
                  What happens after I check out?
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
