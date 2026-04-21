import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { PRODUCTS } from "@/lib/products";
import { INDUSTRIES } from "@/lib/industries";

const PRIMARY_PATHS = [
  "/",
  "/print-products",
  "/print-design",
  "/eddm-print-mail",
  "/full-service-eddm",
  "/pricing",
  "/how-it-works",
  "/portfolio",
  "/industries",
  "/faq",
  "/about",
  "/contact",
  "/cart",
  "/proof-approval",
];

const LEGAL_PATHS = [
  "/legal/terms",
  "/legal/privacy",
  "/legal/service-and-production",
  "/legal/refunds-and-cancellations",
  "/legal/sms-terms",
  "/legal/acceptable-content",
  "/legal/accessibility",
];

const CITY_SLUGS = ["irvine-ca", "austin-tx", "phoenix-az"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    ...PRIMARY_PATHS.map((p) => ({
      url: new URL(p, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.8,
    })),
    ...PRODUCTS.map((p) => ({
      url: new URL(`/print-products/${p.pathSegment}`, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...INDUSTRIES.map((i) => ({
      url: new URL(`/industries/${i.slug}`, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CITY_SLUGS.map((slug) => ({
      url: new URL(`/cities/${slug}`, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...LEGAL_PATHS.map((p) => ({
      url: new URL(p, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
