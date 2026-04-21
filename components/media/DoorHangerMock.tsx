import { cn } from "@/lib/cn";

/** Portrait die-cut door hanger mockup. Rendered as SVG for brand control. */
export function DoorHangerMock({
  className,
  eyebrow = "HAND DISTRIBUTION",
  headline = "Left At Your Door.",
}: {
  className?: string;
  eyebrow?: string;
  headline?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full aspect-[5/6] rounded-2xl overflow-hidden border border-stone-20 bg-stone-10",
        className
      )}
      aria-hidden="true"
    >
      {/* Front door hanger */}
      <div
        className="absolute top-[10%] left-[22%] w-[40%] aspect-[4/11] bg-stone-5 border border-stone-20 rounded-md shadow-editorial p-4 flex flex-col justify-between"
        style={{ transform: "rotate(-4deg)" }}
      >
        {/* Hanger hole */}
        <div className="mx-auto h-6 w-6 rounded-full border-2 border-stone-20 bg-stone-5" />
        <div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-plum">{eyebrow}</span>
          <h4 className="font-display text-[14px] leading-[1.1] tracking-tight text-ink mt-2">
            {headline}
          </h4>
        </div>
        <div className="h-6 w-6 rounded-sm bg-plum self-end" />
      </div>
      {/* Back door hanger */}
      <div
        className="absolute top-[18%] right-[16%] w-[36%] aspect-[4/11] bg-ink text-stone-5 border border-ink rounded-md shadow-editorial p-4 flex flex-col justify-between"
        style={{ transform: "rotate(5deg)" }}
      >
        <div className="mx-auto h-5 w-5 rounded-full border border-stone-40" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-plum-tint">DOOR HANGER</span>
      </div>
    </div>
  );
}
