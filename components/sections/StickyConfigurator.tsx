"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ArtworkSelector, type ArtworkLane } from "./ArtworkSelector";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/products";

/**
 * Sticky product configurator.
 * Desktop: sticks to right column of product page.
 * Mobile: collapses into a bottom sheet with price + "Configure" button.
 *
 * Live price updates with a 150ms morph animation on any field change.
 * Price logic is illustrative; TODO wire to real product pricing from lib/products or Stripe.
 */
export function StickyConfigurator({ product }: { product: Product }) {
  const defaultSize = product.sizes.find((s) => s.isDefault) ?? product.sizes[0];
  const eddmMinimum = product.eddmEligible ? 200 : 100;

  const [size, setSize] = useState(defaultSize.label);
  const [stock, setStock] = useState(product.stocks[0].id);
  const [finish, setFinish] = useState(product.finishes[0].id);
  const [sides, setSides] = useState(product.sidesOptions[0].id);
  const [quantity, setQuantity] = useState<number>(
    product.eddmEligible ? 200 : 500
  );
  const [turnaround, setTurnaround] = useState(product.turnaroundOptions[0].id);
  const [artwork, setArtwork] = useState<ArtworkLane>("upload-now");
  const [mailingAddOn, setMailingAddOn] = useState(false);
  const [notes, setNotes] = useState("");

  const selectedSize = useMemo(
    () => product.sizes.find((s) => s.label === size) ?? defaultSize,
    [size, product.sizes, defaultSize]
  );

  // Illustrative price logic; real pricing comes from the backend.
  const basePrice = useMemo(() => {
    const sizeMultiplier = selectedSize.isEddmEligible ? 1.1 : 1;
    const stockMultiplier = stock.includes("16pt-premium") ? 1.2 : stock.includes("32pt") ? 1.6 : 1;
    const finishMultiplier = finish === "spot-uv" ? 1.15 : finish === "foil" ? 1.4 : 1;
    const sidesMultiplier = sides === "front-back" ? 1.08 : 1;
    const perUnit = 0.12 * sizeMultiplier * stockMultiplier * finishMultiplier * sidesMultiplier;
    return perUnit * quantity;
  }, [selectedSize, stock, finish, sides, quantity]);

  const isQuoteOnly = quantity === 0; // Custom tier

  return (
    <aside
      className="bg-stone-5 border border-stone-20 rounded-md p-6 md:sticky md:top-24 flex flex-col gap-6 shadow-editorial"
      aria-label="Product configurator"
    >
      {/* Size */}
      <Field label="Size" required>
        <div className="grid grid-cols-2 gap-2">
          {product.sizes.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setSize(s.label)}
              aria-pressed={size === s.label}
              className={cn(
                "text-left p-3 border rounded-md transition-colors text-small",
                size === s.label
                  ? "border-plum bg-plum-tint text-plum-dark"
                  : "border-stone-20 bg-stone-5 hover:border-ink text-ink"
              )}
            >
              <span className="font-medium block">{s.label}</span>
              <span className="text-micro text-ink-60">{s.dimensions}</span>
              {s.isEddmEligible ? (
                <span className="mt-1 inline-flex items-center gap-1 text-micro text-plum">
                  <Check className="h-3 w-3" strokeWidth={2} />
                  EDDM-eligible
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </Field>

      {/* Stock */}
      <Field label="Stock" required>
        <div className="flex flex-col gap-2">
          {product.stocks.map((st) => (
            <button
              key={st.id}
              type="button"
              onClick={() => setStock(st.id)}
              aria-pressed={stock === st.id}
              className={cn(
                "text-left p-3 border rounded-md transition-colors",
                stock === st.id
                  ? "border-plum bg-plum-tint"
                  : "border-stone-20 bg-stone-5 hover:border-ink"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-small font-medium text-ink">{st.label}</span>
                {st.isPremium ? (
                  <span className="text-micro uppercase tracking-[0.12em] text-plum">
                    Premium
                  </span>
                ) : null}
              </div>
              <p className="text-micro text-ink-60 mt-1">{st.description}</p>
            </button>
          ))}
        </div>
      </Field>

      {/* Finish */}
      {product.finishes.length > 1 ? (
        <Field label="Finish">
          <select
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
            className="w-full bg-stone-5 border border-stone-20 rounded-md px-4 py-3 text-body focus:outline-none focus:ring-2 focus:ring-plum focus:border-plum"
          >
            {product.finishes.map((f) => (
              <option key={f.id} value={f.id}>
                {f.label}
              </option>
            ))}
          </select>
        </Field>
      ) : null}

      {/* Sides */}
      {product.sidesOptions.length > 1 ? (
        <Field label="Sides">
          <div className="flex gap-2">
            {product.sidesOptions.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSides(s.id)}
                aria-pressed={sides === s.id}
                className={cn(
                  "flex-1 p-2.5 border rounded-md text-small transition-colors",
                  sides === s.id
                    ? "border-plum bg-plum-tint text-plum-dark"
                    : "border-stone-20 bg-stone-5 hover:border-ink text-ink"
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Field>
      ) : null}

      {/* Quantity */}
      <Field
        label="Quantity"
        required
        hint={
          product.eddmEligible
            ? `USPS EDDM Retail minimum: ${eddmMinimum} pieces per ZIP per day.`
            : undefined
        }
      >
        <div className="grid grid-cols-3 gap-2">
          {product.quantityTiers
            .filter((t) => !product.eddmEligible || t.value === 0 || t.value >= eddmMinimum)
            .map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setQuantity(t.value)}
                aria-pressed={quantity === t.value}
                className={cn(
                  "p-2 border rounded-md text-small transition-colors",
                  quantity === t.value
                    ? "border-plum bg-plum-tint text-plum-dark"
                    : "border-stone-20 bg-stone-5 hover:border-ink text-ink"
                )}
              >
                {t.label}
              </button>
            ))}
        </div>
      </Field>

      {/* Turnaround */}
      <Field label="Turnaround">
        <select
          value={turnaround}
          onChange={(e) => setTurnaround(e.target.value)}
          className="w-full bg-stone-5 border border-stone-20 rounded-md px-4 py-3 text-body focus:outline-none focus:ring-2 focus:ring-plum focus:border-plum"
        >
          {product.turnaroundOptions.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Artwork lanes */}
      <Field label="Artwork">
        <ArtworkSelector value={artwork} onChange={setArtwork} />
      </Field>

      {/* Mailing add-on (EDDM-eligible only) */}
      {product.eddmEligible && selectedSize.isEddmEligible ? (
        <label className="flex items-start gap-3 p-3 border border-plum-tint bg-plum-tint rounded-md cursor-pointer">
          <input
            type="checkbox"
            checked={mailingAddOn}
            onChange={(e) => setMailingAddOn(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-plum"
          />
          <span className="text-small text-ink">
            <strong className="font-medium">Add EDDM mailing →</strong> Continue to route selection after checkout.
          </span>
        </label>
      ) : null}

      {/* Notes */}
      <Field label="Optional notes">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Anything our production team should know."
          className="w-full bg-stone-5 border border-stone-20 rounded-md px-4 py-3 text-body focus:outline-none focus:ring-2 focus:ring-plum focus:border-plum resize-y"
        />
      </Field>

      {/* Price + CTAs */}
      <div className="flex flex-col gap-3 pt-4 border-t border-stone-20">
        <div className="flex items-baseline justify-between">
          <span className="text-micro uppercase tracking-[0.12em] text-ink-60">
            {isQuoteOnly ? "Custom quote" : "Estimated total"}
          </span>
          <span className="font-display text-display-sm text-ink transition-opacity duration-150">
            {isQuoteOnly ? "Quote" : `$${basePrice.toFixed(2)}`}
          </span>
        </div>
        {!isQuoteOnly ? (
          <Button
            size="lg"
            withArrow
            onClick={() => {
              // TODO: integrate cart state — push this configuration to cart.
              // See LocalDoor-Redesign-Blueprint.md Section 25.
              alert("Demo — wire to cart state in production.");
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <Button
            size="lg"
            withArrow
            href={`/contact?type=campaign-quote&product=${product.slug}`}
          >
            Request a Quote
          </Button>
        )}
        {!isQuoteOnly ? (
          <Button
            variant="secondary"
            size="md"
            href={`/contact?type=campaign-quote&product=${product.slug}`}
          >
            Or request a quote
          </Button>
        ) : null}
        {mailingAddOn && product.eddmEligible ? (
          <Link
            href={`/eddm-print-mail?product=${product.slug}&quantity=${quantity}`}
            className="text-center text-small text-plum hover:text-plum-dark underline underline-offset-4"
          >
            Continue to mailing →
          </Link>
        ) : null}
      </div>
    </aside>
  );
}

/** Local Field wrapper matching the global <Field> component style. */
function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-micro uppercase tracking-[0.12em] text-ink-60">
        {label}
        {required ? <span className="text-plum ml-0.5">*</span> : null}
      </label>
      {children}
      {hint ? <p className="text-micro text-ink-60">{hint}</p> : null}
    </div>
  );
}
