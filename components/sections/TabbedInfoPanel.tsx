"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Tab = { id: string; label: string; content: React.ReactNode };

/** Accessible tab panel used on product pages for specs, stock, file-setup, etc. */
export function TabbedInfoPanel({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div className="border border-stone-20 bg-stone-5 rounded-md">
      <div role="tablist" aria-label="Product information" className="flex flex-wrap border-b border-stone-20">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={cn(
                "px-5 py-3 text-small font-medium transition-colors border-b-2 -mb-px",
                isActive
                  ? "text-ink border-plum"
                  : "text-ink-60 border-transparent hover:text-ink hover:border-stone-40"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
          className="p-6 md:p-8"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
