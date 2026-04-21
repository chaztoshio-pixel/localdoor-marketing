import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Mailing add-on upsell card shown on EDDM-eligible product pages.
 * Rendered as a flagged "recommended" block; clearly positioned mid-page.
 */
export function MailingAddOnCard({
  productSlug,
  quantity,
}: {
  productSlug: string;
  quantity?: number;
}) {
  const qs = new URLSearchParams({ product: productSlug });
  if (quantity) qs.set("quantity", String(quantity));

  return (
    <aside className="relative bg-ink text-stone-5 border border-plum rounded-md p-6 md:p-8">
      <span className="absolute top-4 right-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-micro uppercase tracking-[0.12em] bg-plum text-stone-5">
        Recommended
      </span>
      <span className="text-micro font-medium uppercase tracking-[0.14em] text-plum-tint">
        Planning to mail this piece?
      </span>
      <h3 className="mt-3 font-display text-title md:text-display-sm text-stone-5">
        Add EDDM route selection and mailing.
      </h3>
      <p className="mt-3 text-body text-stone-40 max-w-prose">
        Search a market, pick routes, estimate reach, and submit for a managed
        quote — all in one flow. Your design and quantity carry over from this order.
      </p>
      <Link
        href={`/eddm-print-mail?${qs.toString()}`}
        className="mt-5 inline-flex items-center gap-2 text-small font-medium text-stone-5 hover:text-plum-tint transition-colors"
      >
        Continue to EDDM Print &amp; Mail
        <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      </Link>
    </aside>
  );
}
