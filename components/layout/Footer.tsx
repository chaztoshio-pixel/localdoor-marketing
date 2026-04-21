import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/lib/nav";
import { brand } from "@/lib/copy";

export function Footer() {
  return (
    <footer className="bg-ink text-stone-5">
      <Container>
        <div className="py-20 md:py-28 grid grid-cols-2 md:grid-cols-12 gap-12">
          <div className="col-span-2 md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-mark.svg"
                alt=""
                aria-hidden="true"
                className="h-8 w-8 shrink-0 bg-stone-5 rounded-md p-0.5"
              />
              <span className="font-display text-title">
                <span className="font-semibold">Local</span>
                <span className="font-light text-mint-light">Door</span>
              </span>
            </Link>
            <p className="text-small text-stone-40 max-w-xs">{brand.tagline}</p>
            <div className="flex flex-col gap-2 text-small text-stone-40">
              <span>{brand.contactEmail}</span>
              <span>{brand.hours}</span>
            </div>
          </div>

          <FooterColumn title="Services" items={footerNav.services} />
          <FooterColumn title="Company" items={footerNav.company} />
          <FooterColumn title="Legal" items={footerNav.legal} className="md:col-span-3" />
        </div>

        <div className="border-t border-ink-80 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-micro text-stone-40 uppercase tracking-[0.12em]">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="max-w-xl md:text-right normal-case tracking-normal text-small text-stone-40">
            {brand.uspsIndependence}
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  className = "md:col-span-2",
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-micro font-medium uppercase tracking-[0.14em] text-ember mb-5">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="text-small text-stone-40 hover:text-stone-5 transition-colors"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
