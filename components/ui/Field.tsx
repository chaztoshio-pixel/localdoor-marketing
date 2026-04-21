import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { FieldLabel } from "./FieldLabel";

type FieldProps = {
  label: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("w-full", className)}>
      <FieldLabel htmlFor={htmlFor} required={required}>
        {label}
      </FieldLabel>
      {children}
      {hint && !error ? (
        <p className="mt-2 text-small text-ink-60">{hint}</p>
      ) : null}
      {error ? (
        <p className="mt-2 text-small text-ember-dark" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
