/** @type {import('next').NextConfig} */

// Industry slugs — mirror lib/industries.ts. Update both together.
const INDUSTRY_SLUGS = [
  "accountants", "auto-detailing", "auto-repair", "bars", "childcare",
  "chiropractic", "cleaning-services", "cafes", "dental", "dry-cleaners",
  "electrical", "florists", "garage-door", "gyms", "hair-salons",
  "handyman", "hvac", "insurance", "landscaping", "martial-arts",
  "medical-practices", "mortgage-brokers", "music-lessons", "nail-salons",
  "optometrists", "painters", "pest-control", "pet-grooming", "pharmacies",
  "physical-therapy", "pizzerias", "plumbing", "real-estate", "remodeling",
  "restaurants", "roofing", "solar", "spas", "storage",
  "tire-shops", "tutoring", "veterinarians", "legal", "med-spa",
  "moving-companies", "pool-service", "locksmith", "pressure-washing",
  "car-wash", "private-schools", "urgent-care",
];

// Legacy URL → new URL mapping for the old `eddm-for-*` pattern.
// Preserves SEO equity with 301 redirects.
const LEGACY_INDUSTRY_MAP = {
  "auto-detailing": "auto-detailing",
  "auto-repair": "auto-repair",
  "bars-and-breweries": "bars",
  "chiropractors": "chiropractic",
  "cleaning-services": "cleaning-services",
  "coffee-shops": "cafes",
  "dentists": "dental",
  "dry-cleaners": "dry-cleaners",
  "electricians": "electrical",
  "florists": "florists",
  "garage-door": "garage-door",
  "gyms": "gyms",
  "hair-salons": "hair-salons",
  "handyman": "handyman",
  "hvac": "hvac",
  "insurance": "insurance",
  "landscaping": "landscaping",
  "martial-arts": "martial-arts",
  "medical-practices": "medical-practices",
  "mortgage-brokers": "mortgage-brokers",
  "music-lessons": "music-lessons",
  "nail-salons": "nail-salons",
  "optometrists": "optometrists",
  "painters": "painters",
  "pest-control": "pest-control",
  "pet-grooming": "pet-grooming",
  "pharmacies": "pharmacies",
  "physical-therapy": "physical-therapy",
  "pizza-shops": "pizzerias",
  "plumbers": "plumbing",
  "real-estate": "real-estate",
  "remodeling": "remodeling",
  "restaurants": "restaurants",
  "roofers": "roofing",
  "solar": "solar",
  "spas": "spas",
  "storage": "storage",
  "tire-shops": "tire-shops",
  "tutoring": "tutoring",
  "veterinarians": "veterinarians",
  "accountants": "accountants",
  "childcare": "childcare",
};

const legacyIndustryRedirects = Object.entries(LEGACY_INDUSTRY_MAP).map(([oldSlug, newSlug]) => ({
  source: `/eddm-for-${oldSlug}.html`,
  destination: `/industries/${newSlug}`,
  permanent: true,
}));

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    typedRoutes: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  async redirects() {
    return [
      // Legacy service-page URLs → new URLs
      {
        source: "/postcard-design",
        destination: "/print-design",
        permanent: true,
      },
      {
        source: "/eddm-print-and-mail",
        destination: "/eddm-print-mail",
        permanent: true,
      },
      // Legacy industry URLs → new URLs (preserves SEO equity)
      ...legacyIndustryRedirects,
      // Legacy non-.html industry URLs
      ...Object.entries(LEGACY_INDUSTRY_MAP).map(([oldSlug, newSlug]) => ({
        source: `/eddm-for-${oldSlug}`,
        destination: `/industries/${newSlug}`,
        permanent: true,
      })),
      // Legacy top-level catalog URL (from old site)
      {
        source: "/services.html",
        destination: "/full-service-eddm",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/full-service-eddm",
        permanent: true,
      },
      {
        source: "/printing",
        destination: "/print-products",
        permanent: true,
      },
      {
        source: "/printing.html",
        destination: "/print-products",
        permanent: true,
      },
      {
        source: "/mailing",
        destination: "/eddm-print-mail",
        permanent: true,
      },
      {
        source: "/mailing.html",
        destination: "/eddm-print-mail",
        permanent: true,
      },
      {
        source: "/strategy",
        destination: "/full-service-eddm",
        permanent: true,
      },
      {
        source: "/targeting",
        destination: "/eddm-print-mail",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
