"use client";

import { Upload, Clock, Palette } from "lucide-react";
import { cn } from "@/lib/cn";

export type ArtworkLane = "upload-now" | "upload-later" | "need-design-help";

const LANES: Array<{
  id: ArtworkLane;
  title: string;
  description: string;
  icon: typeof Upload;
}> = [
  {
    id: "upload-now",
    title: "Upload now",
    description: "Drag and drop your print-ready files.",
    icon: Upload,
  },
  {
    id: "upload-later",
    title: "Upload later",
    description: "We'll email a secure upload link after checkout.",
    icon: Clock,
  },
  {
    id: "need-design-help",
    title: "Need design help",
    description: "Brief our studio; we'll design from scratch.",
    icon: Palette,
  },
];

/**
 * Three-lane artwork selector.
 * Presented as equal-weight radio cards. Visible on every product page + print-design page.
 */
export function ArtworkSelector({
  value,
  onChange,
}: {
  value: ArtworkLane;
  onChange: (lane: ArtworkLane) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="How would you like to handle artwork?"
      className="grid grid-cols-1 sm:grid-cols-3 gap-2"
    >
      {LANES.map((lane) => {
        const Icon = lane.icon;
        const isSelected = value === lane.id;
        return (
          <button
            key={lane.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(lane.id)}
            className={cn(
              "text-left p-3 border rounded-md transition-colors flex flex-col gap-2",
              isSelected
                ? "border-plum bg-plum-tint"
                : "border-stone-20 bg-stone-5 hover:border-ink"
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4",
                isSelected ? "text-plum-dark" : "text-ink-60"
              )}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="text-small font-medium text-ink">{lane.title}</span>
            <span className="text-micro text-ink-60 leading-snug">{lane.description}</span>
          </button>
        );
      })}
    </div>
  );
}
