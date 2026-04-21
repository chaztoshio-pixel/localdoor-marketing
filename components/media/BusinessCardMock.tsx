import { cn } from "@/lib/cn";

/** Landscape 3.5x2 business card mockup with logo slot. */
export function BusinessCardMock({
  className,
  name = "LocalDoor Marketing",
  subtitle = "Premium print & direct mail",
}: {
  className?: string;
  name?: string;
  subtitle?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full aspect-[5/4] rounded-2xl overflow-hidden border border-stone-20 bg-stone-10",
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute top-[30%] left-[20%] w-[60%] h-[40%] bg-ink text-stone-5 border border-ink rounded-md shadow-editorial p-4 flex items-center justify-between"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-plum-tint">
            BUSINESS CARD
          </span>
          <h4 className="font-display text-[14px] leading-[1.1] tracking-tight text-stone-5 mt-1">
            {name}
          </h4>
          <p className="text-[8px] text-stone-40 mt-1">{subtitle}</p>
        </div>
        <img src="/logo-mark.svg" alt="" className="h-8 w-8" />
      </div>
    </div>
  );
}
