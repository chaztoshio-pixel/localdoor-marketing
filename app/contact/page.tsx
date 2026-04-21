import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact as c, brand } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact LocalDoor Marketing",
  description:
    "Reach a campaign manager to discuss strategy, quotes, design uploads, or a custom design brief.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section>
        <Container>
          <div className="py-20 md:py-28 flex flex-col gap-6 max-w-3xl">
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <h1 className="font-display text-display-lg md:text-display-xl text-ink">
              {c.hero.h1}
            </h1>
            <p className="text-body-lg md:text-[1.25rem] text-ink-60">{c.hero.sub}</p>
          </div>
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="bg-stone-5 border border-stone-20 p-6 md:p-10">
                <ContactForm />
              </div>
            </div>
            <aside className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-stone-5 border border-stone-20 p-6 flex flex-col gap-4">
                <span className="eyebrow">Direct</span>
                <dl className="flex flex-col gap-3 text-body">
                  <div>
                    <dt className="text-micro uppercase tracking-[0.12em] text-ink-60">
                      Email
                    </dt>
                    <dd className="text-ink">{brand.contactEmail}</dd>
                  </div>
                  <div>
                    <dt className="text-micro uppercase tracking-[0.12em] text-ink-60">
                      Hours
                    </dt>
                    <dd className="text-ink">{brand.hours}</dd>
                  </div>
                  <div>
                    <dt className="text-micro uppercase tracking-[0.12em] text-ink-60">
                      Mailing address
                    </dt>
                    <dd className="text-ink-60 text-small">
                      TBD — Irvine, CA (to be confirmed)
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-ink text-stone-5 border border-ink p-6 flex flex-col gap-3">
                <span className="eyebrow text-ember">USPS independence</span>
                <p className="text-small text-stone-40">{brand.uspsIndependence}</p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
