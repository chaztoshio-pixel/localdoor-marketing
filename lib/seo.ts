import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://localdoormarketing.com";
export const SITE_NAME = "LocalDoor Marketing";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

/**
 * Page-level metadata helper. Keeps title/description consistent across pages
 * and wires up canonical + OpenGraph + Twitter cards in one place.
 */
export function pageMeta({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
