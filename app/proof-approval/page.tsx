import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Proof Approval — How It Works",
  description:
    "What happens after you submit artwork: file review, digital proof, revisions, and sign-off.",
  path: "/proof-approval",
});

const STEPS = [
  {
    n: "01",
    title: "Order placed + artwork submitted",
    body: "After checkout, your order enters our queue. If you chose Upload Later, you'll receive a secure upload link valid for 7 days.",
  },
  {
    n: "02",
    title: "File review (1–2 business days)",
    body: "Our prepress team reviews your files against the product spec: bleed, trim, safe zone, resolution, CMYK, fonts, and (for EDDM) indicia placement.",
  },
  {
    n: "03",
    title: "Digital proof delivered",
    body: "We email a proof PDF. You review it on screen. Color variation from final print is normal — see our Service & Production Policy for detail.",
  },
  {
    n: "04",
    title: "Approve or request revisions",
    body: "Approve to start production. Or request revisions (limited rounds per scope). Custom-design orders follow the design studio's revision workflow.",
  },
  {
    n: "05",
    title: "Production begins",
    body: "Once the proof is approved in writing, the job moves into print production. Changes after this point may incur additional fees or restart the cycle.",
  },
  {
    n: "06",
    title: "Ship or mail",
    body: "Print-only orders ship with tracking via partner carriers. EDDM orders are prepared for USPS drop on your scheduled window.",
  },
];

export default function ProofApprovalPage() {
  return (
    <>
      <section className="bg-stone-5">
        <Container>
          <div className="py-16 md:py-24 max-w-3xl flex flex-col gap-6">
            <Eyebrow>Proof Approval</Eyebrow>
            <h1 className="font-display text-display-lg md:text-display-xl text-ink">
              From Artwork to Approval.
            </h1>
            <p className="text-body-lg md:text-[1.25rem] text-ink-60">
              Exactly what happens after you check out — so there are no surprises between
              order placement and production start.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <ol className="flex flex-col">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className="border-t border-stone-20 py-8 grid md:grid-cols-12 gap-6 first:border-t-0"
              >
                <div className="md:col-span-3 flex md:flex-col gap-3">
                  <span className="font-mono text-sm text-plum">{s.n}</span>
                  <h3 className="font-display text-title text-ink">{s.title}</h3>
                </div>
                <div className="md:col-span-9 md:border-l md:border-stone-20 md:pl-8">
                  <p className="text-body-lg leading-relaxed text-ink-60 max-w-prose">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl flex flex-col gap-4">
            <Eyebrow>Good to know</Eyebrow>
            <h2 className="font-display text-display-md text-ink">A few honest notes.</h2>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="text-body text-ink-60">
                <strong className="text-ink">Proof review is not design work.</strong> If you
                need meaningful design changes after the digital proof, it's handled as a revision
                round per the design scope in your quote or the custom-design brief.
              </li>
              <li className="text-body text-ink-60">
                <strong className="text-ink">CMYK variation is normal.</strong> Printed pieces may
                vary slightly from your on-screen proof. Minor color shifts don't constitute a
                defect. See our <Link href="/legal/service-and-production" className="underline underline-offset-4 hover:text-plum">Service & Production Policy</Link>.
              </li>
              <li className="text-body text-ink-60">
                <strong className="text-ink">USPS delivery timing is estimated.</strong> In-home
                delivery windows are USPS-controlled and not guaranteed by LocalDoor Marketing.
              </li>
              <li className="text-body text-ink-60">
                <strong className="text-ink">Defective pieces get remedied.</strong> Materially
                defective pieces reported within 7 days of delivery are reprinted or credited
                per the policy.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-display-md md:text-display-lg text-stone-5 max-w-2xl">
              Have a question about your order?
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="onDark" size="lg" withArrow>
                Contact support
              </Button>
              <Button href="/faq" variant="ghost" size="lg">
                See FAQ
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
