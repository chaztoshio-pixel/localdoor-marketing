import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type Industry = { slug: string; name: string };

export type IndustryCluster = {
  id: string;
  name: string;
  blurb: string;
  industries: Industry[];
};

/**
 * Industries directory: 8 featured verticals on top, then the 6-cluster directory.
 * Used on /industries.
 */
export function IndustriesGrid({
  featured,
  clusters,
}: {
  featured: Array<Industry & { line: string }>;
  clusters: IndustryCluster[];
}) {
  return (
    <>
      {/* Featured 8 */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-micro font-medium uppercase tracking-[0.14em] text-plum">
              Featured verticals
            </span>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              Eight verticals we know best.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((v, i) => (
              <Link
                key={v.slug}
                href={`/industries/${v.slug}`}
                className="group flex flex-col gap-3 p-6 bg-stone-5 border border-stone-20 hover:border-ink transition-colors min-h-[180px]"
              >
                <span className="font-mono text-sm text-plum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-title text-ink group-hover:text-plum transition-colors">
                  {v.name}
                </h3>
                <p className="text-small text-ink-60 flex-1">{v.line}</p>
                <span className="inline-flex items-center gap-1 text-small font-medium text-ink group-hover:text-plum">
                  View details
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full 6-cluster directory */}
      <section className="py-16 md:py-24 bg-stone-10 border-t border-stone-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-micro font-medium uppercase tracking-[0.14em] text-plum">
              Full directory
            </span>
            <h2 className="font-display text-display-md md:text-display-lg text-ink">
              All 40+ industries we serve.
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            {clusters.map((c) => (
              <div key={c.id}>
                <h3 className="font-display text-display-sm text-ink mb-2">{c.name}</h3>
                <p className="text-body text-ink-60 mb-4 max-w-prose">{c.blurb}</p>
                <ul className="flex flex-wrap gap-2">
                  {c.industries.map((i) => (
                    <li key={i.slug}>
                      <Link
                        href={`/industries/${i.slug}`}
                        className="inline-flex items-center rounded-full px-3.5 py-1.5 text-small font-medium border border-stone-20 bg-stone-5 text-ink-60 hover:border-ink hover:text-ink transition-colors"
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
