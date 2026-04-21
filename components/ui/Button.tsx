import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 ease-out-emphasized focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-stone-5 disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ember text-stone-5 hover:bg-ember-dark active:bg-ember-dark shadow-sm",
  secondary:
    "bg-stone-5 text-ink border border-ink hover:bg-ember-tint hover:border-ember-dark hover:text-ember-dark",
  ghost:
    "bg-transparent text-ink hover:text-ember underline-offset-4 hover:underline",
  onDark:
    "bg-stone-5 text-ink hover:bg-ember-tint border border-stone-5 hover:border-ember",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-small",
  lg: "h-13 px-6 text-body",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href);
    if (isExternal) {
      return (
        <a
          href={props.href}
          className={cn(classes, "group")}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={cn(classes, "group")} {...rest}>
      {content}
    </button>
  );
}
