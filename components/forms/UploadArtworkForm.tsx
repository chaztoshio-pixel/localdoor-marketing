"use client";

import { useState } from "react";
import { Field } from "@/components/ui/Field";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ConsentBlock } from "./ConsentBlock";

/**
 * NOTE: This form is wired for UI + client-side validation only.
 * TODO: Wire the `onSubmit` handler to your server action / CRM / file-upload
 * storage (e.g. S3 + presigned uploads, Uploadthing, or your CRM provider).
 */

export function UploadArtworkForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <form
      className="grid md:grid-cols-2 gap-x-6 gap-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: replace with real submit logic
        setStatus("submitted");
      }}
      noValidate
    >
      <Field label="First name" htmlFor="u-first" required>
        <Input id="u-first" name="first_name" required autoComplete="given-name" />
      </Field>
      <Field label="Last name" htmlFor="u-last" required>
        <Input id="u-last" name="last_name" required autoComplete="family-name" />
      </Field>
      <Field label="Business name" htmlFor="u-biz" required className="md:col-span-2">
        <Input id="u-biz" name="business_name" required autoComplete="organization" />
      </Field>
      <Field label="Email" htmlFor="u-email" required>
        <Input id="u-email" name="email" type="email" required autoComplete="email" />
      </Field>
      <Field label="Phone" htmlFor="u-phone" required>
        <Input id="u-phone" name="phone" type="tel" required autoComplete="tel" />
      </Field>
      <Field label="Website" htmlFor="u-web" className="md:col-span-2">
        <Input id="u-web" name="website" type="url" autoComplete="url" />
      </Field>
      <Field label="Postcard size" htmlFor="u-size">
        <Select id="u-size" name="size" defaultValue="">
          <option value="" disabled>Select a size</option>
          <option value="4.25x6">4.25 × 6</option>
          <option value="6x9">6 × 9</option>
          <option value="6x11">6 × 11</option>
          <option value="other">Other / not sure</option>
        </Select>
      </Field>
      <Field label="Campaign goal" htmlFor="u-goal">
        <Select id="u-goal" name="goal" defaultValue="">
          <option value="" disabled>Select a goal</option>
          <option value="calls">Drive calls</option>
          <option value="appointments">Drive appointments</option>
          <option value="foot_traffic">Drive foot traffic</option>
          <option value="brand">Brand awareness</option>
          <option value="other">Other</option>
        </Select>
      </Field>
      <Field
        label="Artwork upload"
        htmlFor="u-artwork"
        hint="Accepted: PDF, AI, PSD, JPG, PNG, TIFF. Up to 5 files."
        className="md:col-span-2"
      >
        <Input
          id="u-artwork"
          name="artwork"
          type="file"
          multiple
          accept=".pdf,.ai,.psd,.jpg,.jpeg,.png,.tiff"
          className="file:mr-4 file:rounded-md file:border-0 file:bg-ink file:text-stone-5 file:px-4 file:py-2 file:text-small hover:file:bg-ember-dark"
        />
      </Field>
      <Field label="Notes" htmlFor="u-notes" className="md:col-span-2">
        <Textarea
          id="u-notes"
          name="notes"
          rows={5}
          placeholder="Tell us anything useful: target neighborhoods, brand tone, timing, existing materials to match."
        />
      </Field>

      <div className="md:col-span-2 pt-2">
        <ConsentBlock />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
        <Button size="lg" withArrow>
          Send files to LocalDoor
        </Button>
        {status === "submitted" ? (
          <p className="text-small text-ink-60" role="status">
            Thanks. TODO: wire this to a real backend. For now, this is a demo submission.
          </p>
        ) : null}
      </div>
    </form>
  );
}
