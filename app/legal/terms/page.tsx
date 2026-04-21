import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description: "The terms that govern the use of our site and services.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      intro="These Terms of Use govern your use of the LocalDoor Marketing website and services."
    >
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the LocalDoor
        Marketing website (the &ldquo;Site&rdquo;) and the services offered by
        LocalDoor Marketing LLC (&ldquo;LocalDoor,&rdquo; &ldquo;we,&rdquo;
        &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing the Site or using
        our services, you agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old and authorized to engage services on
        behalf of the business you represent.
      </p>

      <h2>2. Services</h2>
      <p>
        LocalDoor provides direct-mail marketing services including postcard
        design, print production coordination, route planning, and mailing
        preparation. Services are scoped in a written proposal or quote.
      </p>

      <h2>3. Customer content and licenses</h2>
      <p>
        You retain ownership of content you submit (artwork, copy, logos). By
        submitting, you grant LocalDoor a limited license to use, reproduce,
        modify, and prepare that content for the purposes of rendering the
        services, including print and mailing. You represent and warrant that
        you have all necessary rights to the content you submit.
      </p>

      <h2>4. Acceptable content</h2>
      <p>
        You may not use our services to produce or distribute content that
        violates our <a href="/legal/acceptable-content">Acceptable Content Policy</a>.
      </p>

      <h2>5. Proof approval</h2>
      <p>
        Campaigns proceed to production only after you approve a final proof.
        Once approved, changes are not possible without a new production cycle,
        which may incur additional fees.
      </p>

      <h2>6. Estimates, timing, and delivery</h2>
      <p>
        All estimates, turnaround times, and delivery windows are approximate.
        LocalDoor does not guarantee specific delivery dates, postal delivery
        performance, or response outcomes from any campaign.
      </p>

      <h2>7. Print variation</h2>
      <p>
        Printed output may vary slightly from on-screen proofs due to color
        management, stock, and finish differences. Minor variation is normal
        and does not constitute a defect.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        The Site, including its design, text, graphics, and software, is owned
        by LocalDoor or its licensors and is protected by applicable
        intellectual property laws.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The Site and services are provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, express or implied, to
        the maximum extent permitted by applicable law.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, LocalDoor&rsquo;s aggregate
        liability for any claim arising out of or related to the services is
        limited to the amount paid by you to LocalDoor for the specific services
        giving rise to the claim.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify LocalDoor for claims arising out of your content,
        your breach of these Terms, or your violation of applicable law.
      </p>

      <h2>12. Changes to the Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        posted on this page.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of California, without
        regard to its conflict of laws principles. [TODO: confirm governing-law
        state with counsel.]
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms may be directed to{" "}
        <a href="mailto:legal@localdoormarketing.com">
          legal@localdoormarketing.com
        </a>{" "}
        [TODO: confirm legal contact].
      </p>
    </LegalLayout>
  );
}
