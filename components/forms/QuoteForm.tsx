"use client";

import { useState } from "react";
import { Field } from "@/components/ui/Field";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ConsentBlock } from "./ConsentBlock";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <form
      className="grid md:grid-cols-2 gap-x-6 gap-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("submitted");
      }}
      noValidate
    >
      <Field label="First name" htmlFor="q-first" required>
        <Input id="q-first" name="first_name" required autoComplete="given-name" />
      </Field>
      <Field label="Last name" htmlFor="q-last" required>
        <Input id="q-last" name="last_name" required autoComplete="family-name" />
      </Field>
      <Field label="Business name" htmlFor="q-biz" required className="md:col-span-2">
        <Input id="q-biz" name="business_name" required autoComplete="organization" />
      </Field>
      <Field label="Email" htmlFor="q-email" required>
        <Input id="q-email" name="email" type="email" required autoComplete="email" />
      </Field>
      <Field label="Phone" htmlFor="q-phone" required>
        <Input id="q-phone" name="phone" type="tel" required autoComplete="tel" />
      </Field>
      <Field label="Market / ZIP / city" htmlFor="q-market" required className="md:col-span-2">
        <Input id="q-market" name="market" placeholder="Irvine, CA 92603 — 5 mi radius" required />
      </Field>
      <Field
        label="Route set or area summary"
        htmlFor="q-routes"
        hint="If you've already built routes above, we'll attach them automatically. Otherwise, describe the area."
        className="md:col-span-2"
      >
        <Textarea id="q-routes" name="routes_summary" rows={3} />
      </Field>
      <Field label="Postcard size" htmlFor="q-size">
        <Select id="q-size" name="size" defaultValue="">
          <option value="" disabled>Select a size</option>
          <option value="4.25x6">4.25 × 6</option>
          <option value="6x9">6 × 9</option>
          <option value="6x11">6 × 11</option>
          <option value="unsure">Not sure yet</option>
        </Select>
      </Field>
      <Field label="Paper and finish" htmlFor="q-paper">
        <Select id="q-paper" name="paper" defaultValue="">
          <option value="" disabled>Select paper</option>
          <option>14pt gloss</option>
          <option>14pt matte</option>
          <option>16pt premium matte</option>
          <option>Not sure yet</option>
        </Select>
      </Field>
      <Field label="Design status" htmlFor="q-design" className="md:col-span-2">
        <Select id="q-design" name="design_status" defaultValue="">
          <option value="" disabled>Select an option</option>
          <option value="upload">I will upload artwork</option>
          <option value="custom">I need design help</option>
          <option value="brief">I need a studio brief</option>
        </Select>
      </Field>
      <Field label="Recurring interest" htmlFor="q-recur">
        <Select id="q-recur" name="recurring" defaultValue="">
          <option value="" disabled>Select cadence</option>
          <option>One-time drop</option>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Not sure yet</option>
        </Select>
      </Field>
      <Field label="Target drop window" htmlFor="q-drop">
        <Select id="q-drop" name="drop_window" defaultValue="">
          <option value="" disabled>Select timing</option>
          <option>This month</option>
          <option>Next month</option>
          <option>Within the quarter</option>
          <option>Flexible</option>
        </Select>
      </Field>
      <Field label="Notes" htmlFor="q-notes" className="md:col-span-2">
        <Textarea id="q-notes" name="notes" rows={4} />
      </Field>

      <div className="md:col-span-2 pt-2">
        <ConsentBlock />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
        <Button size="lg" withArrow>
          Request managed quote
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
