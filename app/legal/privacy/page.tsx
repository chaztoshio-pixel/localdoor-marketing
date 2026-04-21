import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How we collect, use, and protect information provided through our site and services.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How LocalDoor Marketing collects, uses, and protects information you provide through our website and services."
    >
      <h2>1. Information we collect</h2>
      <p>
        <strong>Information you provide directly:</strong> name, business name,
        email, phone, mailing address, payment information (processed via a
        third-party payment processor), artwork and creative assets, campaign
        brief content, and any information you submit via forms.
      </p>
      <p>
        <strong>Information collected automatically:</strong> device and browser
        information, IP address, pages visited, and cookies as described below.
      </p>
      <p>
        <strong>Information from third parties:</strong> aggregate demographic
        overlay data used for route planning purposes, provided by third-party
        data providers.
      </p>

      <h2>2. How we use information</h2>
      <p>
        To deliver the services you request, provide quotes and campaign
        proposals, coordinate print and mailing, improve our site and services,
        send you service-related communications, and comply with legal
        obligations.
      </p>

      <h2>3. How we share information</h2>
      <p>
        With service providers that support our operations (e.g., print
        partners, mail preparation vendors, payment processors, CRM, email and
        SMS providers). We do not sell your personal information.
      </p>

      <h2>4. SMS communications</h2>
      <p>
        If you opt in to SMS communications, we will use your phone number to
        send messages related to your project. Message and data rates may apply.
        Reply STOP to opt out at any time. See our{" "}
        <a href="/legal/sms-terms">SMS Terms</a>.
      </p>

      <h2>5. Cookies and tracking</h2>
      <p>
        We use cookies and similar technologies to operate the site, remember
        preferences, and measure site performance. You can manage cookies
        through your browser settings.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain information as long as needed to deliver services and meet
        legal obligations.
      </p>

      <h2>7. Your choices</h2>
      <p>
        You may request access, correction, or deletion of your personal
        information by contacting us. Residents of certain states or regions
        may have additional rights under applicable law (e.g., California,
        Virginia, EU/UK).
      </p>

      <h2>8. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect
        information. No system is 100% secure.
      </p>

      <h2>9. Children&rsquo;s privacy</h2>
      <p>
        Our services are not directed to children under 13. We do not knowingly
        collect information from children.
      </p>

      <h2>10. Changes to this Policy</h2>
      <p>
        We may update this Policy. Material changes will be posted here.
      </p>

      <h2>11. Contact</h2>
      <p>
        <a href="mailto:privacy@localdoormarketing.com">
          privacy@localdoormarketing.com
        </a>{" "}
        [TODO: confirm].
      </p>
    </LegalLayout>
  );
}
