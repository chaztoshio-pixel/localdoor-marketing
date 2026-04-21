import { Container } from "@/components/ui/Container";

/**
 * Horizontal trust strip — 5 cells of concrete trust signals.
 * Used on homepage, service pages, and product pages.
 */
export function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-stone-20 bg-stone-5">
      <Container>
        <ul
          className={`grid grid-cols-2 md:grid-cols-${Math.min(items.length, 5)} divide-x divide-stone-20`}
        >
          {items.map((item) => (
            <li
              key={item}
              className="px-4 md:px-6 py-4 md:py-5 text-small text-ink-60 text-center md:text-left"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
