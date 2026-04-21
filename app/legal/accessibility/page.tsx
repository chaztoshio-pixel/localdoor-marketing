import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Accessibility Statement",
  description: "Our commitment to an accessible website and services.",
  path: "/legal/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      intro="LocalDoor Marketing is committed to making our website and services accessible to people with disabilities."
    >
      <h2>Our commitment</h2>
      <ul>
        <li>
          We design and build our site with accessibility in mind, targeting
          WCAG 2.1 AA where feasible.
        </li>
        <li>
          We use semantic HTML, maintain accessible color contrast, provide
          text alternatives for non-text content, and support keyboard
          navigation.
        </li>
        <li>
          Our forms include visible labels, error messaging, and focus states.
        </li>
      </ul>

      <h2>Ongoing improvement</h2>
      <p>
        Accessibility is an ongoing effort. If you experience any accessibility
        barrier on this site, please contact us at{" "}
        <a href="mailto:accessibility@localdoormarketing.com">
          accessibility@localdoormarketing.com
        </a>{" "}
        [TODO: confirm contact]. We will work to address the issue.
      </p>

      <h2>Third-party content</h2>
      <p>
        Portions of our site may include third-party embedded content (e.g.,
        maps, forms, payment widgets). We work with vendors that prioritize
        accessibility, but cannot guarantee full accessibility of every
        third-party element.
      </p>
    </LegalLayout>
  );
}
