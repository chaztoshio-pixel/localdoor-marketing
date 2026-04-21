import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Refund and Cancellation Policy",
  description:
    "How we handle cancellations, refunds, and recurring program changes.",
  path: "/legal/refunds-and-cancellations",
});

export default function RefundsPage() {
  return (
    <LegalLayout
      title="Refund and Cancellation Policy"
      intro="How cancellations and refunds are handled at LocalDoor Marketing."
    >
      <h2>1. Before proof approval</h2>
      <p>
        You may cancel or pause a campaign before final proof approval. Work
        completed to that point (e.g., strategy, design time, route planning)
        is billable at the rates specified in your quote. Unused amounts are
        refunded.
      </p>

      <h2>2. After proof approval</h2>
      <p>
        Once a proof is approved and production begins, the campaign is no
        longer refundable. Design, print, and mail prep costs are committed.
      </p>

      <h2>3. Postage</h2>
      <p>
        Postage paid to USPS or a mail handling vendor is non-refundable once
        deposited, per their policies.
      </p>

      <h2>4. Defective production</h2>
      <p>
        If delivered pieces are materially defective, contact us within 7 days
        of delivery. We will, at our discretion, reprint or credit the
        applicable portion.
      </p>

      <h2>5. Recurring programs</h2>
      <p>
        Recurring programs may be paused or canceled with at least 14 days&rsquo;
        written notice before the next scheduled drop. Drops already in
        production follow the &ldquo;After proof approval&rdquo; rules above.
      </p>

      <h2>6. No response guarantee</h2>
      <p>
        Refunds are not issued based on campaign response or performance
        outcomes.
      </p>
    </LegalLayout>
  );
}
