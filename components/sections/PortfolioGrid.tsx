"use client";

import { useState, useMemo } from "react";
import { Chip } from "@/components/ui/Chip";
import { Tag } from "@/components/ui/Tag";
import { PostcardMock } from "@/components/media/PostcardMock";

type Item = {
  title: string;
  industry: string;
  goal: string;
  kind: "Client Work" | "Concept Work";
};

export function PortfolioGrid({
  items,
  industries,
  goals,
}: {
  items: Item[];
  industries: string[];
  goals?: string[];
}) {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [activeGoal, setActiveGoal] = useState(goals ? goals[0] : undefined);

  const filtered = useMemo(() => {
    return items.filter((i) => {
      const indOk = activeIndustry === "All" || i.industry === activeIndustry;
      const goalOk =
        !activeGoal || activeGoal === "All goals" || i.goal === activeGoal;
      return indOk && goalOk;
    });
  }, [items, activeIndustry, activeGoal]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {industries.map((i) => (
          <Chip
            key={i}
            active={i === activeIndustry}
            onClick={() => setActiveIndustry(i)}
          >
            {i}
          </Chip>
        ))}
      </div>
      {goals ? (
        <div className="flex flex-wrap gap-2 mb-10">
          {goals.map((g) => (
            <Chip
              key={g}
              active={g === activeGoal}
              onClick={() => setActiveGoal(g)}
            >
              {g}
            </Chip>
          ))}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="text-body text-ink-60 py-12 border-y border-stone-20">
          No portfolio pieces in this filter yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <figure
              key={`${item.title}-${idx}`}
              className="group flex flex-col gap-4"
            >
              <PostcardMock
                variant="grid"
                frontEyebrow={item.goal}
                frontHeadline={item.title}
                className="group-hover:border-ink transition-colors"
              />
              <figcaption className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Tag>{item.industry}</Tag>
                  <Tag tone="ember">{item.goal}</Tag>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-title text-ink">
                    {item.title}
                  </span>
                  <span className="text-micro uppercase tracking-[0.14em] text-ink-60">
                    {item.kind}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
