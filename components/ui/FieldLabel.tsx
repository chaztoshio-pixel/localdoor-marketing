import { cn } from "@/lib/cn";
import type { LabelHTMLAttributes } from "react";

type FieldLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

export function FieldLabel({
  required,
  className,
  children,
  ...props
}: FieldLabelProps) {
  return (
    <label
      className={cn(
        "block text-micro font-medium uppercase tracking-[0.12em] text-ink-60 mb-2",
        className
      )}
      {...props}
    >
      {children}
      {required ? (
        <span aria-hidden="true" className="text-ember ml-1">
          *
        </span>
      ) : null}
      {required ? <span className="sr-only"> (required)</span> : null}
    </label>
  );
}
