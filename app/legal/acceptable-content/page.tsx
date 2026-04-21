import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Acceptable Content Policy",
  description: "Content we will and will not produce or mail.",
  path: "/legal/acceptable-content",
});

export default function AcceptableContentPage() {
  return (
    <LegalLayout
      title="Acceptable Content Policy"
      intro="To protect recipients, our production partners, and LocalDoor Marketing, we do not produce or mail certain kinds of content."
    >
      <h2>We will not produce or mail content that</h2>
      <ul>
        <li>Violates applicable federal, state, or local law</li>
        <li>Is defamatory, harassing, or targets individuals</li>
        <li>Contains sexually explicit material</li>
        <li>Promotes unlawful products or services</li>
        <li>
          Contains claims or offers that are deceptive, misleading, or
          unsubstantiated
        </li>
        <li>
          Misrepresents LocalDoor Marketing or any other party, including
          government entities (e.g., content falsely implying USPS or other
          federal agency endorsement)
        </li>
        <li>Infringes intellectual property rights</li>
        <li>
          Contains hate speech or content that promotes violence against any
          group
        </li>
        <li>
          Solicits information from recipients in a deceptive manner (e.g.,
          fake invoices, fake government notices)
        </li>
      </ul>

      <h2>Declined projects</h2>
      <p>
        We reserve the right to decline any project at our discretion. If a
        project is declined after partial work, you are billed for work
        completed to that point.
      </p>
    </LegalLayout>
  );
}
