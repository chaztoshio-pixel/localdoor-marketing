"use client";

import { useState, useEffect } from "react";
import { Field } from "@/components/ui/Field";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ConsentBlock } from "./ConsentBlock";
import { contact } from "@/lib/copy";

export function ContactForm({ defaultType }: { defaultType?: string }) {
  const [type, setType] = useState(defaultType ?? "general");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  // Sync with URL ?type= param if provided
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const t = url.searchParams.get("type");
    if (t && contact.inquiryTypes.some((i) => i.value === t)) {
      setType(t);
    }
  }, []);

  return (
    <form
      className="grid md:grid-cols-2 gap-x-6 gap-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("submitted");
      }}
      noValidate
    >
      <Field label="First name" htmlFor="c-first" required>
        <Input id="c-first" name="first_name" required autoComplete="given-name" />
      </Field>
      <Field label="Last name" htmlFor="c-last" required>
        <Input id="c-last" name="last_name" required autoComplete="family-name" />
      </Field>
      <Field label="Business name" htmlFor="c-biz" required className="md:col-span-2">
        <Input id="c-biz" name="business_name" required autoComplete="organization" />
      </Field>
      <Field label="Email" htmlFor="c-email" required>
        <Input id="c-email" name="email" type="email" required autoComplete="email" />
      </Field>
      <Field label="Phone" htmlFor="c-phone" required>
        <Input id="c-phone" name="phone" type="tel" required autoComplete="tel" />
      </Field>
      <Field label="Website" htmlFor="c-web">
        <Input id="c-web" name="website" type="url" autoComplete="url" />
      </Field>
      <Field label="Inquiry type" htmlFor="c-type">
        <Select
          id="c-type"
          name="inquiry_type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {contact.inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Market / service area" htmlFor="c-area" className="md:col-span-2">
        <Input id="c-area" name="service_area" placeholder="Irvine, CA — 5 mi radius" />
      </Field>
      <Field label="Message" htmlFor="c-msg" required className="md:col-span-2">
        <Textarea
          id="c-msg"
          name="message"
          rows={5}
          required
          placeholder="A sentence or two on what you want the campaign to do."
        />
      </Field>

      <div className="md:col-span-2 pt-2">
        <ConsentBlock />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
        <Button size="lg" withArrow>
          Send to LocalDoor
        </Button>
        {status === "submitted" ? (
          <p className="text-small text-ink-60" role="status">
            Thanks. TODO: wire this form to your CRM or email inbox.
          </p>
        ) : null}
      </div>
    </form>
  );
}
