import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "SMS Terms",
  description: "Terms for text message communications from LocalDoor Marketing.",
  path: "/legal/sms-terms",
});

export default function SmsTermsPage() {
  return (
    <LegalLayout
      title="SMS Terms"
      intro="These SMS Terms explain how LocalDoor Marketing sends text messages to phone numbers that have opted in."
    >
      <h2>1. Consent</h2>
      <p>
        By providing your phone number and checking the SMS consent box on any
        LocalDoor form, you agree to receive text messages from LocalDoor
        Marketing regarding your project, quote, or campaign.
      </p>

      <h2>2. Types of messages</h2>
      <p>
        Project updates, quote follow-ups, proof notifications, scheduling, and
        service-related questions. We do not send third-party marketing
        messages.
      </p>

      <h2>3. Frequency</h2>
      <p>Message frequency varies based on your project activity.</p>

      <h2>4. Costs</h2>
      <p>
        Message and data rates may apply. LocalDoor Marketing does not charge
        for the messages themselves, but your carrier may.
      </p>

      <h2>5. Opt out</h2>
      <p>
        Reply STOP at any time to stop receiving messages. Reply HELP for help.
        You can also request to be removed by emailing{" "}
        <a href="mailto:privacy@localdoormarketing.com">
          privacy@localdoormarketing.com
        </a>
        .
      </p>

      <h2>6. Privacy</h2>
      <p>
        Phone numbers provided for SMS communications are handled according to
        our <a href="/legal/privacy">Privacy Policy</a>. They are not sold or
        shared with third parties for marketing purposes.
      </p>

      <h2>7. Supported carriers</h2>
      <p>
        Most major U.S. carriers. Carriers are not liable for delayed or
        undelivered messages.
      </p>

      <h2>8. Changes</h2>
      <p>These SMS Terms may be updated from time to time.</p>
    </LegalLayout>
  );
}
