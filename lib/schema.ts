import { SITE_NAME, SITE_URL } from "./seo";

type Faq = { q: string; a: string };
type BreadcrumbItem = { label: string; href: string };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@localdoormarketing.com",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    disambiguatingDescription:
      "LocalDoor Marketing is an independent direct-mail services company. We are not affiliated with, endorsed by, or sponsored by the United States Postal Service.",
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
    url: new URL(input.url, SITE_URL).toString(),
  };
}

export function productSchema(input: {
  name: string;
  description: string;
  url: string;
  sku: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    sku: input.sku,
    url: new URL(input.url, SITE_URL).toString(),
    image: input.image ?? `${SITE_URL}/logo-mark.svg`,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

export function breadcrumbSchema(trail: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: new URL(item.href, SITE_URL).toString(),
    })),
  };
}

/**
 * Renders a JSON-LD block as a string for <script> tags.
 * Usage: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />
 */
export function jsonLd(data: object) {
  return JSON.stringify(data);
}
