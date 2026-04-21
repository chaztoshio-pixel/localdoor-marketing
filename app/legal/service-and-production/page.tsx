import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Service and Production Policy",
  description:
    "How we produce and deliver direct-mail campaigns, and what you can expect.",
  path: "/legal/service-and-production",
});

export default function ServiceAndProductionPage() {
  return (
    <LegalLayout
      title="Service and Production Policy"
      intro="How LocalDoor Marketing produces and delivers campaigns, what you can expect, and where we set limits on scope."
    >
      <h2>1. Scope of services</h2>
      <p>
        Each engagement is scoped in a written proposal or quote. Anything not
        expressly included is out of scope.
      </p>

      <h2>2. Proof approval</h2>
      <p>
        No production begins until you approve a final proof in writing (email
        or equivalent). Once approved, design, copy, and specs are locked.
      </p>

      <h2>3. Revisions</h2>
      <p>
        The number of included revision rounds is specified in your quote.
        Additional rounds are quoted separately.
      </p>

      <h2>4. Specifications</h2>
      <p>
        Paper stock, finish, size, quantity, postage method, and drop window
        are documented in your quote. Production proceeds to those
        specifications.
      </p>

      <h2>5. Print variation</h2>
      <p>
        Printed pieces may vary slightly from on-screen proofs due to color,
        stock, and finish. Minor variation is normal and does not constitute a
        defect. If a piece is materially defective, contact us within 7 days of
        delivery to arrange a remedy.
      </p>

      <h2>6. Delivery estimates</h2>
      <p>
        All timing is estimated. USPS delivery timing is not controlled by
        LocalDoor Marketing and is not guaranteed.
      </p>

      <h2>7. No response guarantee</h2>
      <p>
        Direct mail performance depends on many factors including audience,
        offer, creative, and market conditions. LocalDoor Marketing does not
        guarantee any specific response rate, ROI, or outcome.
      </p>

      <h2>8. Client responsibilities</h2>
      <p>
        You are responsible for the accuracy of the content you provide, the
        legality of your offers, and for any claims made in your creative.
      </p>

      <h2>9. USPS independence</h2>
      <p>
        LocalDoor Marketing is independent of the United States Postal Service.
        Postage is a pass-through cost determined by USPS rates in effect at
        time of drop.
      </p>
    </LegalLayout>
  );
}
