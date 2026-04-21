"use client";

import Link from "next/link";
import { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";

export function ConsentBlock({
  requirePrivacy = true,
  showSms = true,
  namePrivacy = "consent_privacy",
  nameSms = "consent_sms",
}: {
  requirePrivacy?: boolean;
  showSms?: boolean;
  namePrivacy?: string;
  nameSms?: string;
}) {
  const [privacy, setPrivacy] = useState(false);
  const [sms, setSms] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        name={namePrivacy}
        checked={privacy}
        onChange={(e) => setPrivacy(e.target.checked)}
        required={requirePrivacy}
        label={
          <>
            I agree to the{" "}
            <Link
              href="/legal/privacy"
              className="underline hover:text-ember"
              target="_blank"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/terms"
              className="underline hover:text-ember"
              target="_blank"
            >
              Terms of Use
            </Link>
            . I consent to LocalDoor Marketing contacting me about my inquiry.
            {requirePrivacy ? (
              <span className="text-ember" aria-hidden="true">
                {" "}
                *
              </span>
            ) : null}
          </>
        }
      />
      {showSms ? (
        <Checkbox
          name={nameSms}
          checked={sms}
          onChange={(e) => setSms(e.target.checked)}
          label={
            <>
              I agree to receive text messages from LocalDoor Marketing about my
              project. Msg &amp; data rates may apply. Reply STOP to opt out. See{" "}
              <Link
                href="/legal/sms-terms"
                className="underline hover:text-ember"
                target="_blank"
              >
                SMS Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/legal/privacy"
                className="underline hover:text-ember"
                target="_blank"
              >
                Privacy Policy
              </Link>
              .
            </>
          }
        />
      ) : null}
    </div>
  );
}
