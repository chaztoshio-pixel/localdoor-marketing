"use client";

import { useState } from "react";
import { Field } from "@/components/ui/Field";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ConsentBlock } from "./ConsentBlock";

/**
 * TODO: wire to real backend / CRM / file storage.
 */
export function CustomDesignBriefForm() {
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
      <Field label="First name" htmlFor="b-first" required>
        <Input id="b-first" name="first_name" required autoComplete="given-name" />
      </Field>
      <Field label="Last name" htmlFor="b-last" required>
        <Input id="b-last" name="last_name" required autoComplete="family-name" />
      </Field>
      <Field label="Business name" htmlFor="b-biz" required className="md:col-span-2">
        <Input id="b-biz" name="business_name" required autoComplete="organization" />
      </Field>
      <Field label="Email" htmlFor="b-email" required>
        <Input id="b-email" name="email" type="email" required autoComplete="email" />
      </Field>
      <Field label="Phone" htmlFor="b-phone" required>
        <Input id="b-phone" name="phone" type="tel" required autoComplete="tel" />
      </Field>
      <Field label="Website" htmlFor="b-web">
        <Input id="b-web" name="website" type="url" autoComplete="url" />
      </Field>
      <Field label="Industry" htmlFor="b-ind">
        <Select id="b-ind" name="industry" defaultValue="">
          <option value="" disabled>Select your industry</option>
          <option>Home services</option>
          <option>Dental & medical</option>
          <option>Med spa & wellness</option>
          <option>Roofing</option>
          <option>Real estate</option>
          <option>Restaurants</option>
          <option>Fitness</option>
          <option>Legal & professional services</option>
          <option>Other</option>
        </Select>
      </Field>
      <Field
        label="Service area"
        htmlFor="b-area"
        hint="City, radius, region, or specific neighborhoods."
        className="md:col-span-2"
      >
        <Input id="b-area" name="service_area" placeholder="Irvine, CA — 10 mi radius" />
      </Field>
      <Field
        label="Offer or promotion"
        htmlFor="b-offer"
        hint="e.g. $89 spring tune-up, free estimate, 20% off first visit."
        className="md:col-span-2"
      >
        <Textarea id="b-offer" name="offer" rows={3} />
      </Field>
      <Field label="Primary CTA objective" htmlFor="b-cta">
        <Select id="b-cta" name="cta_objective" defaultValue="">
          <option value="" disabled>Select objective</option>
          <option>Call</option>
          <option>Visit website</option>
          <option>Book online</option>
          <option>Walk in</option>
          <option>Text</option>
          <option>Scan QR</option>
          <option>Other</option>
        </Select>
      </Field>
      <Field label="Preferred postcard size" htmlFor="b-size">
        <Select id="b-size" name="size" defaultValue="">
          <option value="" disabled>Select a size</option>
          <option value="4.25x6">4.25 × 6</option>
          <option value="6x9">6 × 9</option>
          <option value="6x11">6 × 11</option>
          <option value="other">Other / not sure</option>
        </Select>
      </Field>
      <Field label="Target audience" htmlFor="b-aud" className="md:col-span-2">
        <Textarea
          id="b-aud"
          name="audience"
          rows={3}
          placeholder="Homeowners, ages 35–65, household income mid-to-high, service-focused buyers."
        />
      </Field>
      <Field label="Brand colors" htmlFor="b-colors">
        <Input id="b-colors" name="brand_colors" placeholder="#123ABC, navy, warm cream" />
      </Field>
      <Field label="Desired turnaround" htmlFor="b-turn">
        <Select id="b-turn" name="turnaround" defaultValue="">
          <option value="" disabled>Select turnaround</option>
          <option value="standard">Standard (5–7 business days)</option>
          <option value="rush">Rush (3–5 business days — fees may apply)</option>
          <option value="flexible">Flexible</option>
        </Select>
      </Field>
      <Field
        label="Logo upload"
        htmlFor="b-logo"
        hint="SVG, PDF, AI, PNG preferred."
      >
        <Input
          id="b-logo"
          name="logo"
          type="file"
          accept=".svg,.pdf,.ai,.png,.jpg"
          className="file:mr-4 file:rounded-md file:border-0 file:bg-ink file:text-stone-5 file:px-4 file:py-2 file:text-small hover:file:bg-ember-dark"
        />
      </Field>
      <Field label="Image upload (optional)" htmlFor="b-imgs">
        <Input
          id="b-imgs"
          name="images"
          type="file"
          multiple
          accept="image/*"
          className="file:mr-4 file:rounded-md file:border-0 file:bg-ink file:text-stone-5 file:px-4 file:py-2 file:text-small hover:file:bg-ember-dark"
        />
      </Field>
      <Field
        label="Design examples / inspirations"
        htmlFor="b-ex"
        className="md:col-span-2"
        hint="Paste links or describe styles you like."
      >
        <Textarea id="b-ex" name="examples" rows={3} />
      </Field>
      <Field label="Notes" htmlFor="b-notes" className="md:col-span-2">
        <Textarea id="b-notes" name="notes" rows={4} />
      </Field>

      <div className="md:col-span-2 pt-2">
        <ConsentBlock />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
        <Button size="lg" withArrow>
          Send brief to LocalDoor
        </Button>
        {status === "submitted" ? (
          <p className="text-small text-ink-60" role="status">
            Thanks. TODO: wire this to a real backend.
          </p>
        ) : null}
      </div>
    </form>
  );
}
