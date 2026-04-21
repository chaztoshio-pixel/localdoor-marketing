"use client";

import { useMemo, useState } from "react";
import { Search, Plus, X } from "lucide-react";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { LiveRouteMap } from "@/components/media/LiveRouteMap";
import { eddmPrintMail } from "@/lib/copy";

/**
 * Concept UI — not wired to real USPS route data.
 * Users search a market, toggle filters, simulate adding routes from a sample list,
 * and see an estimate summary. Everything funnels into a quote request form below.
 */

type Route = {
  id: string;
  name: string;
  households: number;
  mix: "Residential" | "Mixed" | "Business-heavy";
};

const SAMPLE_ROUTES: Route[] = [
  { id: "C103", name: "Westpark North", households: 612, mix: "Residential" },
  { id: "C104", name: "Quail Hill Loop", households: 548, mix: "Residential" },
  { id: "C108", name: "University Ridge", households: 434, mix: "Mixed" },
  { id: "C112", name: "Business Center Way", households: 298, mix: "Business-heavy" },
  { id: "C115", name: "Turtle Rock East", households: 705, mix: "Residential" },
  { id: "C118", name: "Woodbridge South", households: 821, mix: "Residential" },
  { id: "C121", name: "Oak Creek Ridge", households: 502, mix: "Mixed" },
  { id: "C124", name: "Portola Springs", households: 689, mix: "Residential" },
];

export function RouteBuilderConcept() {
  const copy = eddmPrintMail;
  const [query, setQuery] = useState("");
  const [radius, setRadius] = useState(copy.areaSearch.presets[1]);
  const [residentialOnly, setResidentialOnly] = useState(true);
  const [prioritizeHH, setPrioritizeHH] = useState(false);
  const [excludeBiz, setExcludeBiz] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const visibleRoutes = useMemo(() => {
    return SAMPLE_ROUTES.filter((r) => {
      if (residentialOnly && r.mix === "Business-heavy") return false;
      if (excludeBiz && r.mix === "Business-heavy") return false;
      return true;
    }).sort((a, b) =>
      prioritizeHH ? b.households - a.households : 0
    );
  }, [residentialOnly, prioritizeHH, excludeBiz]);

  const selectedRoutes = useMemo(
    () => SAMPLE_ROUTES.filter((r) => selected.includes(r.id)),
    [selected]
  );
  const totalHouseholds = selectedRoutes.reduce((acc, r) => acc + r.households, 0);

  const toggleRoute = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-8" id="route-builder">
      {/* Area search */}
      <div className="bg-stone-5 border border-stone-20 p-6 md:p-8 flex flex-col gap-6">
        <h3 className="font-display text-display-sm text-ink">
          {copy.areaSearch.h2}
        </h3>
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-60"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter ZIP, city, or address (demo — not connected to USPS)"
            className="w-full pl-11 pr-4 py-3 bg-stone-5 border border-stone-20 rounded-md text-body focus:outline-none focus:ring-2 focus:ring-ember focus:border-ember"
            aria-label="Market search"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-micro uppercase tracking-[0.12em] text-ink-60 mr-2">
            Radius
          </span>
          {copy.areaSearch.presets.map((p) => (
            <Chip key={p} active={p === radius} onClick={() => setRadius(p)}>
              {p}
            </Chip>
          ))}
        </div>
        <p className="text-small text-ink-60">{copy.areaSearch.helper}</p>
      </div>

      {/* Three-panel layout */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Filters */}
        <aside className="lg:col-span-3 bg-stone-5 border border-stone-20 p-6 flex flex-col gap-6">
          <h4 className="font-display text-title text-ink">
            {copy.planner.filters.title}
          </h4>
          <div className="flex flex-col gap-3">
            <ToggleRow
              label="Residential only"
              checked={residentialOnly}
              onChange={setResidentialOnly}
            />
            <ToggleRow
              label="Prioritize high household count"
              checked={prioritizeHH}
              onChange={setPrioritizeHH}
            />
            <ToggleRow
              label="Exclude business-heavy routes"
              checked={excludeBiz}
              onChange={setExcludeBiz}
            />
          </div>

          <FilterSelect label="Age band" options={copy.planner.filters.ageOptions} />
          <FilterSelect label="Household size" options={copy.planner.filters.hhSizeOptions} />
          <FilterSelect label="Income band" options={copy.planner.filters.incomeOptions} />

          <div className="pt-4 border-t border-stone-20 flex flex-col gap-3">
            <span className="text-micro uppercase tracking-[0.12em] text-ink-60">
              Premium overlays
            </span>
            <ul className="flex flex-col gap-2">
              {copy.planner.filters.premiumOverlays.map((o) => (
                <li key={o} className="text-small text-ink-60 flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-ember shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
            <p className="text-micro text-ink-60 border-l-2 border-stone-20 pl-3 leading-relaxed">
              {copy.planner.filters.helper}
            </p>
          </div>
        </aside>

        {/* Map */}
        <div className="lg:col-span-5">
          <LiveRouteMap className="aspect-[4/5] lg:aspect-[5/6]" />
          <p className="mt-3 text-micro uppercase tracking-[0.14em] text-ink-60">
            {copy.planner.map.badge}
          </p>
        </div>

        {/* Route list + selection */}
        <aside className="lg:col-span-4 bg-stone-5 border border-stone-20 p-6 flex flex-col gap-5">
          <div>
            <h4 className="font-display text-title text-ink">
              {copy.planner.list.header}
            </h4>
            <p className="text-small text-ink-60 mt-1">
              <span className="font-mono">{selectedRoutes.length}</span> routes ·{" "}
              <span className="font-mono">{totalHouseholds.toLocaleString()}</span>{" "}
              households
            </p>
          </div>

          {selectedRoutes.length === 0 ? (
            <p className="text-small text-ink-60 border border-dashed border-stone-20 rounded-md p-4">
              {copy.planner.list.empty}
            </p>
          ) : (
            <ul className="flex flex-col divide-y divide-stone-20 border-y border-stone-20">
              {selectedRoutes.map((r) => (
                <li
                  key={r.id}
                  className="py-3 flex items-center justify-between gap-3"
                >
                  <div className="flex flex-col">
                    <span className="font-mono text-small text-ink">{r.id}</span>
                    <span className="text-micro uppercase tracking-[0.12em] text-ink-60">
                      {r.mix} · {r.households} HH
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleRoute(r.id)}
                    className="h-8 w-8 inline-flex items-center justify-center rounded-md text-ink-60 hover:text-ember hover:bg-stone-10 transition-colors"
                    aria-label={`Remove route ${r.id}`}
                  >
                    <X className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="pt-2 border-t border-stone-20">
            <h5 className="text-micro uppercase tracking-[0.14em] text-ember mb-3">
              {copy.planner.list.summary.title}
            </h5>
            <dl className="flex flex-col gap-2 text-small">
              <div className="flex justify-between">
                <dt className="text-ink-60">Selected routes</dt>
                <dd className="font-mono text-ink">{selectedRoutes.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-60">Estimated households</dt>
                <dd className="font-mono text-ink">
                  {totalHouseholds.toLocaleString()}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-60">Postcards to print</dt>
                <dd className="font-mono text-ink">
                  {totalHouseholds.toLocaleString()}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-60">{copy.planner.list.summary.windowLabel}</dt>
                <dd className="text-ink text-right">
                  {copy.planner.list.summary.windowValue}
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-2 pt-4 border-t border-stone-20">
            <Button
              href={copy.planner.list.ctas.primary.href}
              size="md"
              withArrow
            >
              {copy.planner.list.ctas.primary.label}
            </Button>
            <Button
              href={copy.planner.list.ctas.tertiary.href}
              variant="secondary"
              size="md"
            >
              {copy.planner.list.ctas.tertiary.label}
            </Button>
            <button
              type="button"
              className="mt-1 text-small text-ink-60 hover:text-ember underline underline-offset-4 self-start"
            >
              {copy.planner.list.ctas.secondary.label}
            </button>
          </div>
        </aside>
      </div>

      {/* Route picker list — mirrors what clicking on the map would add */}
      <div className="bg-stone-5 border border-stone-20 p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-display text-title text-ink">
            Available routes in this market (demo)
          </h4>
          <span className="text-micro uppercase tracking-[0.12em] text-ink-60">
            {visibleRoutes.length} routes
          </span>
        </div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {visibleRoutes.map((r) => {
            const isSelected = selected.includes(r.id);
            return (
              <li key={r.id}>
                <button
                  type="button"
                  onClick={() => toggleRoute(r.id)}
                  aria-pressed={isSelected}
                  className={`w-full text-left border p-4 transition-colors flex flex-col gap-1 ${
                    isSelected
                      ? "border-ember bg-ember-tint"
                      : "border-stone-20 bg-stone-5 hover:border-ink"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-small text-ink">{r.id}</span>
                    {isSelected ? (
                      <span className="text-micro uppercase tracking-[0.12em] text-ember-dark">
                        Selected
                      </span>
                    ) : (
                      <Plus className="h-4 w-4 text-ink-60" strokeWidth={1.5} />
                    )}
                  </div>
                  <span className="text-body text-ink">{r.name}</span>
                  <span className="text-micro uppercase tracking-[0.12em] text-ink-60">
                    {r.mix} · {r.households} HH
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-4 cursor-pointer text-small text-ink">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          checked ? "bg-ember" : "bg-stone-20"
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 bg-stone-5 rounded-full transform transition-transform ${
            checked ? "translate-x-[20px]" : "translate-x-[4px]"
          }`}
        />
      </button>
    </label>
  );
}

function FilterSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-micro uppercase tracking-[0.12em] text-ink-60">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o, i) => (
          <Chip key={o} active={i === options.length - 1}>
            {o}
          </Chip>
        ))}
      </div>
    </div>
  );
}
