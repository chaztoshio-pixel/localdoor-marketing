import { cn } from "@/lib/cn";

/**
 * Stylized postcard flat-lay — used as a placeholder visual throughout the site
 * before real photography is in place. Front/back panels rendered as SVG on a
 * subtle paper-texture background. Brand-safe, no imagery required.
 */
type PostcardMockProps = {
  className?: string;
  variant?: "hero" | "grid" | "dark";
  tagline?: string;
  backLabel?: string;
  frontEyebrow?: string;
  frontHeadline?: string;
};

export function PostcardMock({
  className,
  variant = "hero",
  tagline = "Premium direct mail for local growth.",
  backLabel = "Route-level EDDM",
  frontEyebrow = "SPRING OFFER",
  frontHeadline = "Tune-Up Your Home For Warmer Days.",
}: PostcardMockProps) {
  const bgClass =
    variant === "dark" ? "bg-ink-80" : variant === "grid" ? "bg-stone-10" : "bg-stone-10";

  return (
    <div
      className={cn(
        "relative w-full aspect-[5/4] rounded-2xl overflow-hidden border border-stone-20",
        bgClass,
        className
      )}
      aria-hidden="true"
    >
      {/* Soft paper grain */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.2"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.4" />
        </svg>
      </div>

      {/* Back postcard (address side) */}
      <div className="absolute top-[12%] right-[8%] w-[52%] aspect-[9/6] bg-stone-5 border border-stone-20 rounded-md shadow-editorial rotate-[6deg] p-5 flex flex-col">
        <div className="flex items-start justify-between">
          <div className="text-[10px] uppercase tracking-[0.2em] text-ink-60">
            {backLabel}
          </div>
          <div className="h-10 w-14 border border-stone-20 rounded-sm flex items-center justify-center text-[8px] text-ink-60 uppercase tracking-widest">
            Indicia
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-1">
          <div className="h-2 w-[60%] bg-stone-20 rounded-full" />
          <div className="h-2 w-[45%] bg-stone-20 rounded-full" />
          <div className="h-2 w-[70%] bg-stone-20 rounded-full" />
        </div>
      </div>

      {/* Front postcard */}
      <div className="absolute top-[22%] left-[8%] w-[58%] aspect-[9/6] bg-ink text-stone-5 border border-ink rounded-md shadow-editorial -rotate-[3deg] p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-ember">
            {frontEyebrow}
          </span>
          <h4 className="font-display text-[22px] leading-[1.1] tracking-tight text-stone-5 max-w-[20ch]">
            {frontHeadline}
          </h4>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-40">
            {tagline}
          </span>
          <div className="h-8 w-8 rounded-sm bg-ember flex items-center justify-center">
            <div className="h-3 w-3 bg-stone-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
