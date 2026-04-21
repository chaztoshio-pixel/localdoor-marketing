export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/**
 * Four coequal services — order matters for visual prominence.
 * Print Products is the new top commercial shopping path.
 */
export const servicesNav: NavItem[] = [
  { label: "Print Products", href: "/print-products" },
  { label: "Print Design", href: "/print-design" },
  { label: "EDDM Print & Mail", href: "/eddm-print-mail" },
  { label: "Full-Service EDDM Campaigns", href: "/full-service-eddm" },
];

/** Primary top-nav entries; services dropdown renders servicesNav. */
export const primaryNav: NavItem[] = [
  { label: "Services", href: "/#services", children: servicesNav },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

/** Print Products catalog entries — used in the Print Products mega-menu. */
export const productCategoriesNav: NavItem[] = [
  { label: "EDDM Postcards", href: "/print-products/eddm-postcards" },
  { label: "Oversized Postcards", href: "/print-products/oversized-postcards" },
  { label: "Standard Postcards", href: "/print-products/standard-postcards" },
  { label: "Door Hangers", href: "/print-products/door-hangers" },
  { label: "Flyers", href: "/print-products/flyers" },
  { label: "Business Cards", href: "/print-products/business-cards" },
  { label: "Rack Cards", href: "/print-products/rack-cards" },
  { label: "Brochures & Menus", href: "/print-products/brochures" },
];

export const footerNav = {
  services: servicesNav,
  company: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Industries", href: "/industries" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Service & Production Policy", href: "/legal/service-and-production" },
    { label: "Refund & Cancellation Policy", href: "/legal/refunds-and-cancellations" },
    { label: "SMS Terms", href: "/legal/sms-terms" },
    { label: "Acceptable Content Policy", href: "/legal/acceptable-content" },
    { label: "Accessibility Statement", href: "/legal/accessibility" },
  ],
};
