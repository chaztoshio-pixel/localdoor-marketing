import { cn } from "@/lib/cn";
import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, className, id, ...props }, ref) {
    const autoId = id || `cb-${props.name || Math.random().toString(36).slice(2, 8)}`;
    return (
      <label
        htmlFor={autoId}
        className={cn(
          "flex items-start gap-3 text-small text-ink-60 cursor-pointer",
          className
        )}
      >
        <input
          ref={ref}
          id={autoId}
          type="checkbox"
          className="mt-0.5 h-4 w-4 appearance-none rounded-sm border border-stone-20 bg-stone-5 checked:border-ember checked:bg-ember focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-stone-5 transition-colors shrink-0 relative checked:after:content-[''] checked:after:absolute checked:after:left-[3px] checked:after:top-[0px] checked:after:w-[8px] checked:after:h-[11px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-stone-5 checked:after:rotate-45"
          {...props}
        />
        <span className="leading-snug">{label}</span>
      </label>
    );
  }
);
