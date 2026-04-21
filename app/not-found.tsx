import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section>
      <Container>
        <div className="py-32 md:py-40 flex flex-col gap-6 max-w-2xl">
          <Eyebrow>404</Eyebrow>
          <h1 className="font-display text-display-lg md:text-display-xl text-ink">
            This page isn&rsquo;t in our route plan.
          </h1>
          <p className="text-body-lg text-ink-60">
            The page you&rsquo;re looking for doesn&rsquo;t exist, or it moved.
            Head back to the homepage or jump into a service.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/" size="lg" withArrow>
              Back to home
            </Button>
            <Link href="/eddm-print-and-mail" className="link-underline text-body text-ink">
              Build a quote →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
