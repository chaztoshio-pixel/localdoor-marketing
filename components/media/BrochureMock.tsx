import { cn } from "@/lib/cn";

/** Bi-fold or tri-fold brochure mockup as SVG. */
export function BrochureMock({
  className,
  variant = "bi-fold",
  headline = "A Year With Our Clinic, Unfolded.",
}: {
  className?: string;
  variant?: "bi-fold" | "tri-fold";
  headline?: string;
}) {
  const panels = variant === "tri-fold" ? 3 : 2;
  return (
    <div
      className={cn(
        "relative w-full aspect-[5/4] rounded-2xl overflow-hidden border border-stone-20 bg-stone-10",
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute top-[18%] left-[10%] w-[80%] aspect-[11/6] bg-stone-5 border border-stone-20 rounded-md shadow-editorial p-5 flex flex-col justify-between"
        style={{ transform: "rotate(-2deg)" }}
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-plum">
            {variant.toUpperCase().replace("-", " ")}
          </span>
          <h4 className="font-display text-[18px] leading-[1.1] tracking-tight text-ink mt-2">
            {headline}
          </h4>
        </div>
        <div className={`grid grid-cols-${panels} gap-2`}>
          {Array.from({ length: panels }).map((_, i) => (
            <div
              key={i}
              className={i === panels - 1 ? "h-3 bg-plum rounded-full" : "h-3 bg-stone-20 rounded-full"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
