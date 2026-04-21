/**
 * Print Products catalog — single source of truth for SKU structure.
 *
 * Product pages read from here; any spec change is made here, not in JSX.
 * EDDM eligibility flags determine which products surface the mailing add-on.
 */

export type ProductSize = {
  label: string;
  dimensions: string; // e.g., "4.25 × 6 in"
  isEddmEligible: boolean;
  isDefault?: boolean;
};

export type ProductStock = {
  id: string;
  label: string;
  description: string;
  isPremium?: boolean;
};

export type ProductFinish = {
  id: string;
  label: string;
  isQuoteOnly?: boolean;
};

export type QuantityTier = {
  value: number;
  label: string;
  isQuoteOnly?: boolean;
};

export type TurnaroundOption = {
  id: string;
  label: string;
  rushFee?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  pathSegment: string; // URL path piece
  eyebrow: string;
  tagline: string;
  description: string;
  mockupType: "postcard" | "doorhanger" | "brochure" | "businesscard" | "rackcard" | "flyer";
  sizes: ProductSize[];
  stocks: ProductStock[];
  finishes: ProductFinish[];
  sidesOptions: { id: string; label: string }[];
  quantityTiers: QuantityTier[];
  turnaroundOptions: TurnaroundOption[];
  eddmEligible: boolean;
  cartOrQuote: "Cart" | "Cart or quote" | "Quote";
  crossSells: string[]; // slugs
  featuredOrder: number; // for catalog display order (lower = earlier)
};

const STANDARD_STOCKS: ProductStock[] = [
  { id: "14pt-gloss", label: "14pt Gloss Cover", description: "Our standard — bright, polished, durable." },
  { id: "14pt-matte", label: "14pt Matte Cover", description: "Non-glare premium feel — easy to write on." },
  { id: "16pt-premium", label: "16pt Premium Matte", description: "Thicker, more substantial. Upgrade.", isPremium: true },
];

const PAPER_TEXT_STOCKS: ProductStock[] = [
  { id: "100lb-gloss-text", label: "100lb Gloss Text", description: "Standard for flyers and brochures." },
  { id: "100lb-matte-text", label: "100lb Matte Text", description: "Softer feel, no glare." },
  { id: "14pt-card", label: "14pt Card Stock", description: "Rigid premium option.", isPremium: true },
];

const STANDARD_FINISHES: ProductFinish[] = [
  { id: "none", label: "None" },
  { id: "uv-gloss", label: "UV Gloss Coating" },
  { id: "soft-touch", label: "Soft-Touch Laminate", isQuoteOnly: false },
  { id: "spot-uv", label: "Spot UV", isQuoteOnly: false },
];

const SIDES_OPTIONS = [
  { id: "front-only", label: "Front only" },
  { id: "front-back", label: "Front + back" },
];

const STANDARD_TURNAROUND: TurnaroundOption[] = [
  { id: "standard", label: "Standard · 5–7 business days" },
  { id: "rush", label: "Rush · 3–5 business days", rushFee: true },
  { id: "next-day", label: "Next-day · where supported", rushFee: true },
];

const STANDARD_TIERS: QuantityTier[] = [
  { value: 100, label: "100" },
  { value: 250, label: "250" },
  { value: 500, label: "500" },
  { value: 1000, label: "1,000" },
  { value: 2500, label: "2,500" },
  { value: 5000, label: "5,000" },
  { value: 10000, label: "10,000" },
  { value: 0, label: "Custom → quote", isQuoteOnly: true },
];

const EDDM_TIERS: QuantityTier[] = [
  { value: 200, label: "200 (EDDM minimum)" },
  { value: 500, label: "500" },
  { value: 1000, label: "1,000" },
  { value: 2500, label: "2,500" },
  { value: 5000, label: "5,000" },
  { value: 10000, label: "10,000" },
  { value: 0, label: "Custom → quote", isQuoteOnly: true },
];

export const PRODUCTS: Product[] = [
  {
    slug: "eddm-postcards",
    name: "EDDM Postcards",
    pathSegment: "eddm-postcards",
    eyebrow: "Mail-ready postcards",
    tagline: "USPS EDDM-eligible postcards in the sizes that qualify as flats.",
    description:
      "Postcard sizes that meet USPS flat rules for Every Door Direct Mail. Designed for print, mail, and response. Premium stocks, matte or gloss finishes, and mail-ready layouts with indicia space reserved.",
    mockupType: "postcard",
    sizes: [
      { label: "6.5 × 9", dimensions: "6.5 × 9 in", isEddmEligible: true, isDefault: true },
      { label: "6.5 × 12", dimensions: "6.5 × 12 in", isEddmEligible: true },
      { label: "8.5 × 11", dimensions: "8.5 × 11 in", isEddmEligible: true },
      { label: "9 × 12", dimensions: "9 × 12 in", isEddmEligible: true },
      { label: "11 × 14", dimensions: "11 × 14 in", isEddmEligible: true },
    ],
    stocks: STANDARD_STOCKS,
    finishes: STANDARD_FINISHES,
    sidesOptions: SIDES_OPTIONS,
    quantityTiers: EDDM_TIERS,
    turnaroundOptions: STANDARD_TURNAROUND,
    eddmEligible: true,
    cartOrQuote: "Cart or quote",
    crossSells: ["oversized-postcards", "standard-postcards", "door-hangers"],
    featuredOrder: 1,
  },
  {
    slug: "oversized-postcards",
    name: "Oversized Postcards",
    pathSegment: "oversized-postcards",
    eyebrow: "Stand-out direct mail",
    tagline: "Larger formats with higher perceived value. Great for premium campaigns.",
    description:
      "Oversized postcards in 5.5×8.5, 6×9, 6×11, 6.5×9, and 6.5×12. Sizes 6.5×9 and larger are EDDM-eligible. Printed on premium stocks with premium finish options.",
    mockupType: "postcard",
    sizes: [
      { label: "5.5 × 8.5", dimensions: "5.5 × 8.5 in", isEddmEligible: false },
      { label: "6 × 9", dimensions: "6 × 9 in", isEddmEligible: false, isDefault: true },
      { label: "6 × 11", dimensions: "6 × 11 in", isEddmEligible: true },
      { label: "6.5 × 9", dimensions: "6.5 × 9 in", isEddmEligible: true },
      { label: "6.5 × 12", dimensions: "6.5 × 12 in", isEddmEligible: true },
    ],
    stocks: STANDARD_STOCKS,
    finishes: STANDARD_FINISHES,
    sidesOptions: SIDES_OPTIONS,
    quantityTiers: STANDARD_TIERS,
    turnaroundOptions: STANDARD_TURNAROUND,
    eddmEligible: true,
    cartOrQuote: "Quote",
    crossSells: ["eddm-postcards", "brochures", "door-hangers"],
    featuredOrder: 2,
  },
  {
    slug: "standard-postcards",
    name: "Standard Postcards",
    pathSegment: "standard-postcards",
    eyebrow: "In-store, drop-off, trade show",
    tagline: "Classic postcard sizes for non-EDDM use. Not mail-eligible as EDDM.",
    description:
      "Standard postcard sizes: 4×6, 5×7, 4.25×6. Printed on premium stocks. These sizes do not meet USPS EDDM flat rules; for mail campaigns, see EDDM Postcards.",
    mockupType: "postcard",
    sizes: [
      { label: "4 × 6", dimensions: "4 × 6 in", isEddmEligible: false, isDefault: true },
      { label: "5 × 7", dimensions: "5 × 7 in", isEddmEligible: false },
      { label: "4.25 × 6", dimensions: "4.25 × 6 in", isEddmEligible: false },
    ],
    stocks: STANDARD_STOCKS,
    finishes: STANDARD_FINISHES,
    sidesOptions: SIDES_OPTIONS,
    quantityTiers: STANDARD_TIERS,
    turnaroundOptions: STANDARD_TURNAROUND,
    eddmEligible: false,
    cartOrQuote: "Cart",
    crossSells: ["eddm-postcards", "business-cards", "flyers"],
    featuredOrder: 8,
  },
  {
    slug: "door-hangers",
    name: "Door Hangers",
    pathSegment: "door-hangers",
    eyebrow: "Hand-distributed marketing",
    tagline: "Die-cut door hangers with or without a custom hanger hole shape.",
    description:
      "Standard 4×11 and 4.25×11 door hangers on 14pt or 16pt premium stock. Includes standard die-cut hanger hole; custom shapes routed to quote.",
    mockupType: "doorhanger",
    sizes: [
      { label: "4 × 11", dimensions: "4 × 11 in", isEddmEligible: false, isDefault: true },
      { label: "4.25 × 11", dimensions: "4.25 × 11 in", isEddmEligible: false },
      { label: "3.5 × 8.5", dimensions: "3.5 × 8.5 in", isEddmEligible: false },
    ],
    stocks: STANDARD_STOCKS,
    finishes: STANDARD_FINISHES,
    sidesOptions: SIDES_OPTIONS,
    quantityTiers: STANDARD_TIERS,
    turnaroundOptions: STANDARD_TURNAROUND,
    eddmEligible: false,
    cartOrQuote: "Cart or quote",
    crossSells: ["flyers", "rack-cards", "business-cards"],
    featuredOrder: 3,
  },
  {
    slug: "flyers",
    name: "Flyers",
    pathSegment: "flyers",
    eyebrow: "Events, handouts, in-store",
    tagline: "Half-sheet, letter, and custom flyer printing.",
    description:
      "Flyer printing in 5.5×8.5 (half-sheet), 8.5×11 (letter), and 4×6. Paper text or 14pt card stock. Fast turnaround.",
    mockupType: "flyer",
    sizes: [
      { label: "5.5 × 8.5 (half-sheet)", dimensions: "5.5 × 8.5 in", isEddmEligible: false, isDefault: true },
      { label: "8.5 × 11 (letter)", dimensions: "8.5 × 11 in", isEddmEligible: true },
      { label: "4 × 6", dimensions: "4 × 6 in", isEddmEligible: false },
    ],
    stocks: PAPER_TEXT_STOCKS,
    finishes: [
      { id: "none", label: "None" },
      { id: "uv-gloss", label: "UV Gloss Coating" },
    ],
    sidesOptions: SIDES_OPTIONS,
    quantityTiers: STANDARD_TIERS,
    turnaroundOptions: STANDARD_TURNAROUND,
    eddmEligible: false,
    cartOrQuote: "Cart or quote",
    crossSells: ["brochures", "door-hangers", "rack-cards"],
    featuredOrder: 5,
  },
  {
    slug: "business-cards",
    name: "Business Cards",
    pathSegment: "business-cards",
    eyebrow: "Personal branding",
    tagline: "Premium business cards in standard 3.5 × 2 with premium finish options.",
    description:
      "Standard 3.5×2 business cards on 14pt or 16pt premium stock. Upgrades: spot UV, soft-touch laminate, or 32pt triple-layer (quote). Business cards are supporting collateral — not EDDM mailpieces.",
    mockupType: "businesscard",
    sizes: [
      { label: "3.5 × 2 (standard)", dimensions: "3.5 × 2 in", isEddmEligible: false, isDefault: true },
    ],
    stocks: [
      ...STANDARD_STOCKS,
      { id: "32pt-triple", label: "32pt Triple-Layer", description: "Ultra-thick with a colored edge.", isPremium: true },
    ],
    finishes: [
      { id: "none", label: "None" },
      { id: "spot-uv", label: "Spot UV" },
      { id: "soft-touch", label: "Soft-Touch Laminate" },
      { id: "foil", label: "Foil Accent (quote only)", isQuoteOnly: true },
    ],
    sidesOptions: SIDES_OPTIONS,
    quantityTiers: STANDARD_TIERS,
    turnaroundOptions: STANDARD_TURNAROUND,
    eddmEligible: false,
    cartOrQuote: "Cart",
    crossSells: ["rack-cards", "brochures", "flyers"],
    featuredOrder: 7,
  },
  {
    slug: "rack-cards",
    name: "Rack Cards",
    pathSegment: "rack-cards",
    eyebrow: "Retail counters & hospitality",
    tagline: "4 × 9 rack cards with premium finish upgrades.",
    description:
      "Standard 4×9 and 3.5×8.5 rack cards on 14pt or 16pt premium stock. Finishes: UV, soft-touch, spot UV. Ideal for hotel racks, retail counters, and info stations.",
    mockupType: "rackcard",
    sizes: [
      { label: "4 × 9 (standard)", dimensions: "4 × 9 in", isEddmEligible: false, isDefault: true },
      { label: "3.5 × 8.5", dimensions: "3.5 × 8.5 in", isEddmEligible: false },
    ],
    stocks: STANDARD_STOCKS,
    finishes: STANDARD_FINISHES,
    sidesOptions: SIDES_OPTIONS,
    quantityTiers: STANDARD_TIERS,
    turnaroundOptions: STANDARD_TURNAROUND,
    eddmEligible: false,
    cartOrQuote: "Cart or quote",
    crossSells: ["brochures", "business-cards", "flyers"],
    featuredOrder: 6,
  },
  {
    slug: "brochures",
    name: "Brochures & Menus",
    pathSegment: "brochures",
    eyebrow: "Service explainers & menus",
    tagline: "Bi-fold, tri-fold, and half-fold brochures on premium text stocks.",
    description:
      "Bi-fold 8.5×11 (folds to 5.5×8.5), tri-fold 8.5×11 (folds to 3.67×8.5), and half-fold 11×17 (folds to 8.5×11 — popular for restaurant menus). Stocks: 100lb gloss text, 100lb matte text, or 14pt card.",
    mockupType: "brochure",
    sizes: [
      { label: "Bi-fold 8.5 × 11", dimensions: "8.5 × 11 in (folds to 5.5 × 8.5)", isEddmEligible: false, isDefault: true },
      { label: "Tri-fold 8.5 × 11", dimensions: "8.5 × 11 in (folds to 3.67 × 8.5)", isEddmEligible: false },
      { label: "Half-fold 11 × 17 (menu)", dimensions: "11 × 17 in (folds to 8.5 × 11)", isEddmEligible: false },
    ],
    stocks: PAPER_TEXT_STOCKS,
    finishes: [
      { id: "none", label: "None" },
      { id: "uv-gloss", label: "UV Gloss Coating" },
      { id: "soft-touch", label: "Soft-Touch Laminate" },
    ],
    sidesOptions: [{ id: "both", label: "Both sides (all panels)" }],
    quantityTiers: STANDARD_TIERS,
    turnaroundOptions: STANDARD_TURNAROUND,
    eddmEligible: false,
    cartOrQuote: "Quote",
    crossSells: ["rack-cards", "flyers", "business-cards"],
    featuredOrder: 4,
  },
];

export const PRODUCTS_BY_SLUG = Object.fromEntries(
  PRODUCTS.map((p) => [p.slug, p] as const)
) as Record<string, Product>;

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS_BY_SLUG[slug];
}

export function getFeaturedOrder(): Product[] {
  return [...PRODUCTS].sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function getEddmEligibleProducts(): Product[] {
  return PRODUCTS.filter((p) => p.eddmEligible);
}
