/**
 * USPS EDDM facts — single source of truth.
 *
 * Every page that references USPS specs MUST read from this module.
 * Never hardcode postage rates or size rules in copy or JSX elsewhere.
 *
 * When USPS rates change (typically January and sometimes July),
 * update the constants below and the LAST_UPDATED date.
 */

export const EDDM_RETAIL_RATE_PER_PIECE = 0.247;
export const EDDM_RETAIL_MIN_PIECES_PER_ZIP_PER_DAY = 200;
export const EDDM_RETAIL_MAX_PIECES_PER_ZIP_PER_DAY = 5000;
export const EDDM_MAX_WEIGHT_OZ = 3.3;

/**
 * EDDM flat-size eligibility rules.
 * A piece must satisfy at least ONE of these to qualify as a USPS "flat"
 * eligible for EDDM Retail.
 */
export const EDDM_FLAT_ELIGIBILITY = {
  minLengthInches: 10.5,
  minHeightInches: 6.125,
  minThicknessInches: 0.25,
} as const;

/** Absolute dimensional maximums for EDDM Retail. */
export const EDDM_MAX_DIMENSIONS = {
  heightInches: 12,
  lengthInches: 15,
  thicknessInches: 0.75,
} as const;

/** Absolute dimensional minimums for any mailpiece. */
export const MAILPIECE_MIN_DIMENSIONS = {
  lengthInches: 3.5,
  heightInches: 3.5,
} as const;

/**
 * Indicia placement rules for EDDM Retail pieces.
 * Must include: ECRWSS, EDDM (Retail only), U.S. POSTAGE PAID, city/state.
 * Sans-serif, min 4-pt type.
 */
export const EDDM_INDICIA_RULES = {
  minFontSizePt: 4,
  recommendedFontSizePt: 8,
  placementFromRightEdgeInches: 1.625,
  placementFromTopEdgeInches: 1.375,
  requiredStrings: [
    "ECRWSS",
    "EDDM",
    "U.S. POSTAGE PAID",
  ],
  fontFamily: "sans-serif",
} as const;

/** Bundling rules for EDDM Retail preparation. */
export const EDDM_BUNDLING = {
  minPiecesPerBundle: 50,
  maxPiecesPerBundle: 100,
  maxBundleHeightInches: 6,
} as const;

/**
 * Helper: determine whether a given postcard size is EDDM-eligible.
 * Pass dimensions in inches; returns true if at least one flat-rule dimension is met.
 */
export function isEddmEligible(dimensions: {
  lengthInches: number;
  heightInches: number;
  thicknessInches?: number;
}): boolean {
  const thickness = dimensions.thicknessInches ?? 0;
  return (
    dimensions.lengthInches > EDDM_FLAT_ELIGIBILITY.minLengthInches ||
    dimensions.heightInches > EDDM_FLAT_ELIGIBILITY.minHeightInches ||
    thickness > EDDM_FLAT_ELIGIBILITY.minThicknessInches
  );
}

/** Provenance — update on rate review. */
export const USPS_SOURCE_URLS = {
  officialEddm: "https://www.usps.com/business/every-door-direct-mail.htm",
  routeTool: "https://eddm.usps.com/eddm/select-routes.htm",
  postageRates: "https://www.usps.com/business/prices.htm",
  rateReference2026: "https://www.mailpro.org/post/eddm-postage-rates/",
  requirementsGuide2026: "https://www.mailpro.org/post/eddm-mailing-requirements/",
} as const;

export const USPS_FACTS_LAST_UPDATED = "2026-04-20";

/**
 * Formatted strings for display in body copy. Avoid hardcoding the numeric
 * value outside of this module; if you need it, compose via template literal
 * using the constants above.
 */
export const EDDM_DISPLAY = {
  retailRate: `$${EDDM_RETAIL_RATE_PER_PIECE.toFixed(3)}`,
  minPiecesPerDay: EDDM_RETAIL_MIN_PIECES_PER_ZIP_PER_DAY.toLocaleString(),
  maxPiecesPerDay: EDDM_RETAIL_MAX_PIECES_PER_ZIP_PER_DAY.toLocaleString(),
} as const;
