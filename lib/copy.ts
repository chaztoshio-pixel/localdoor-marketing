/**
 * Central copy source. Every page pulls strings from here.
 * Edit copy here, rebuild, done.
 *
 * Structure mirrors BRAND-AND-COPY-BOOK.md.
 */

export const brand = {
  name: "LocalDoor Marketing",
  nameShort: "LocalDoor",
  uspsIndependence:
    "LocalDoor Marketing is an independent direct-mail services company. We are not affiliated with, endorsed by, or sponsored by the United States Postal Service.",
  contactEmail: "hello@localdoormarketing.com",
  privacyEmail: "privacy@localdoormarketing.com",
  legalEmail: "legal@localdoormarketing.com",
  accessibilityEmail: "accessibility@localdoormarketing.com",
  hours: "Monday–Friday, 9am–6pm Pacific",
  tagline:
    "Premium direct mail for local growth — nationwide EDDM, route-level targeting, and postcard design built to get a response.",
};

/* ───────────────────────────  HOMEPAGE  ─────────────────────────── */

export const home = {
  hero: {
    eyebrow: "Premium direct mail for local growth",
    h1: "Custom postcard and print design, route-based EDDM print and mail, and fully managed campaigns—built for businesses that want direct mail done right.",
    sub: "Launch premium direct-mail campaigns anywhere in the United States with custom creative, route intelligence, premium production, and mailing coordination from one focused team.",
    chips: [
      { label: "Postcard & Print Design", href: "/postcard-design" },
      { label: "EDDM Print & Mail", href: "/eddm-print-and-mail" },
      { label: "Full-Service EDDM Campaigns", href: "/full-service-eddm" },
    ],
    primary: { label: "Explore Full-Service EDDM", href: "/full-service-eddm" },
    secondary: { label: "Build an EDDM Quote", href: "/eddm-print-and-mail" },
    tertiary: { label: "Upload Artwork or Request Design", href: "/postcard-design#upload" },
    trustLine: "Nationwide coverage · Route-level targeting · Independent of USPS",
  },
  trustStrip: [
    "Nationwide EDDM coverage",
    "Postcards, door hangers, brochures",
    "Route-level household targeting",
    "Managed print and mail prep",
    "Strategy built for local response",
  ],
  services: {
    eyebrow: "Services",
    h2: "Three services. One campaign team.",
    intro:
      "Start where you are. Design a piece, map the right routes and mail it, or hand us the entire campaign start to finish.",
    cards: [
      {
        title: "Postcard & Print Design",
        description:
          "EDDM postcards, oversized postcards, door hangers, hand-distributed flyers, business cards, rack cards, and brochures — designed for print and response.",
        bullets: [
          "Upload your own or brief our studio",
          "Standard SKUs via cart, custom work via quote",
          "Mail-ready layouts, print-ready files",
        ],
        href: "/postcard-design",
        cta: "Explore design services",
      },
      {
        title: "EDDM Print & Mail",
        description:
          "Search a market, compare routes, estimate household reach, upload artwork or request design help, and move into print and mail coordination.",
        bullets: [
          "Route-level targeting with overlays",
          "Guided quote today, live checkout ahead",
          "Design handoff included",
        ],
        href: "/eddm-print-and-mail",
        cta: "Build an EDDM quote",
      },
      {
        title: "Full-Service EDDM Campaigns",
        description:
          "We handle strategy, route planning, design, print production, mailing preparation, and USPS coordination from one accountable team.",
        bullets: [
          "Strategy, routes, design, print, mail",
          "Existing artwork or full managed creative",
          "One calendar, one invoice, one owner",
        ],
        href: "/full-service-eddm",
        cta: "See full-service campaigns",
      },
    ],
  },
  portfolio: {
    eyebrow: "Selected work",
    h2: "Postcards built to get opened, read, and responded to.",
    chips: [
      "All",
      "Home services",
      "Dental & medical",
      "Restaurants",
      "Real estate",
      "Professional services",
    ],
    cta: { label: "See the full portfolio", href: "/portfolio" },
  },
  howItWorks: {
    eyebrow: "Process",
    h2: "A campaign workflow built for local businesses.",
    steps: [
      {
        n: "01",
        title: "Inquiry",
        body: "Share your market, goals, and any creative direction. We'll respond with a campaign path and estimate.",
      },
      {
        n: "02",
        title: "Strategy & Creative",
        body: "Route planning, audience overlay, and postcard design tailored to your offer.",
      },
      {
        n: "03",
        title: "Proof & Production",
        body: "You approve proofs. We handle print specs, indicia, and carrier-route prep.",
      },
      {
        n: "04",
        title: "Launch",
        body: "Mailing is prepared, coordinated with the appropriate mail handling path, and tracked through drop.",
      },
    ],
    cta: { label: "See the full process", href: "/how-it-works" },
  },
  routeIntel: {
    eyebrow: "Route intelligence",
    h2: "Target the right neighborhoods, not just a ZIP code.",
    body: "Every market has routes that convert and routes that don't. We help you evaluate routes by household count, demographic fit, drive-time from your location, and the mix of residential and business addresses on the route.",
    bullets: [
      "Route-level household estimates and drive-time context",
      "Optional overlays for age, household size, and income bands",
      "Guidance on route mix — residential only, business included, or balanced",
      "Save and compare route sets before committing to a drop",
    ],
    cta: { label: "Start a route plan", href: "/eddm-print-and-mail" },
  },
  recurring: {
    eyebrow: "Recurring direct mail",
    h2: "One postcard rarely wins. Recurring drops do.",
    body: "Most high-performing direct mail campaigns aren't one-off. They're patterned drops to the same neighborhoods on a predictable cadence. We set up monthly, bi-monthly, and quarterly programs for businesses that treat direct mail like a channel — not an experiment.",
    features: [
      { title: "Monthly cadence", body: "Same routes, rotating offers." },
      { title: "Creative refresh", body: "New art each drop to avoid banner blindness." },
      {
        title: "Single managed workflow",
        body: "One invoice, one approval flow, one calendar.",
      },
    ],
    cta: { label: "Ask about recurring programs", href: "/contact?type=recurring" },
  },
  faqPreview: {
    eyebrow: "FAQ",
    h2: "What local businesses ask before their first drop.",
    items: [
      {
        q: "What is EDDM and how is it different from standard direct mail?",
        a: "EDDM — Every Door Direct Mail — lets you send mail to every address on a carrier route without a mailing list. It's route-based rather than list-based, which makes it well suited for local businesses targeting neighborhoods.",
      },
      {
        q: "Do I need a mailing list?",
        a: "Not for EDDM. You pick routes; the mail goes to every household on those routes. We help you choose the right routes for your business.",
      },
      {
        q: "How do you target by neighborhood?",
        a: "We plan at the carrier-route level, not just by ZIP code. That means we can choose routes inside the same ZIP based on household count, residential/business mix, and optional demographic overlays.",
      },
      {
        q: "How long does a campaign take from brief to mailbox?",
        a: "A standard campaign typically runs 2–4 weeks from brief to drop window, depending on revisions and print scheduling. Rush campaigns are available on request.",
      },
      {
        q: "Can I send the same postcard to the same routes every month?",
        a: "Yes — most of our best campaigns are recurring drops with rotating creative. Recurring programs are managed on a single calendar and invoice cadence.",
      },
    ],
    cta: { label: "See all FAQs", href: "/faq" },
  },
  finalCta: {
    eyebrow: "Start where you are",
    h2: "Three entry points. One campaign team.",
    cards: [
      {
        label: "I have artwork ready",
        description:
          "Send print-ready files for any format — postcards, door hangers, brochures, and more.",
        cta: "Upload a design",
        href: "/postcard-design#upload",
      },
      {
        label: "I need a route plan",
        description:
          "Search a market, build routes, estimate households, and request a managed quote.",
        cta: "Build a quote",
        href: "/eddm-print-and-mail",
      },
      {
        label: "I want it all handled",
        description: "Strategy, design, print, mailing — done for you.",
        cta: "Book a strategy call",
        href: "/contact?type=strategy-call",
      },
    ],
  },
};

/* ───────────────────────────  POSTCARD DESIGN  ─────────────────────────── */

export const postcardDesign = {
  hero: {
    eyebrow: "Postcard & Print Design Studio",
    h1: "Postcard & Print Design, built to get a response.",
    sub: "EDDM postcards, oversized postcards, door hangers, hand-distributed flyers, business cards, rack cards, and brochures — designed for print, mail, and response. Upload your artwork or brief our studio on a custom concept.",
    primary: { label: "Upload my design", href: "#upload" },
    secondary: { label: "Request a custom design", href: "#custom-brief" },
    trustLine: "Standard SKUs via cart · Custom work via quote · Mail-ready layouts",
  },
  productFamilies: [
    { name: "EDDM Postcards", sub: "4.25×6, 6×9, 6×11", path: "Cart or quote" },
    { name: "Oversized Postcards", sub: "8.5×5.5, 9×12", path: "Quote" },
    { name: "Door Hangers", sub: "4×11, 4.25×11", path: "Cart or quote" },
    { name: "Flyers", sub: "Hand-distributed", path: "Cart or quote" },
    { name: "Business Cards", sub: "Supporting collateral", path: "Cart" },
    { name: "Rack Cards", sub: "4×9 standard", path: "Cart or quote" },
    { name: "Brochures", sub: "Bi-fold, tri-fold", path: "Quote" },
    { name: "On Request", sub: "Additional print collateral", path: "Quote" },
  ],
  commerceRule:
    "Standard SKUs default to cart + upload. Custom, premium, unusual-finish, or enterprise work routes to quote. Business cards are supporting collateral — not EDDM mailpieces.",
  pathSelector: {
    eyebrow: "Pick a starting point",
    h2: "Two paths. Same quality of output.",
    cards: [
      {
        title: "I already have artwork",
        body: "Send us your design and we'll prep it for print and mailing — including file checks, bleed, indicia placement, and mail panel layout.",
        provide: "Front and back design files, fonts (or outlined text), brand assets.",
        href: "#upload",
        cta: "Start upload",
      },
      {
        title: "I need it designed from scratch",
        body: "Brief our studio on your goal, offer, and brand. We design a concept built to get opened and get a response — then refine with you through proofs.",
        provide: "Business info, offer, brand direction, inspiration (optional).",
        href: "#custom-brief",
        cta: "Start a brief",
      },
    ],
  },
  included: {
    eyebrow: "Studio output",
    h2: "What you receive from the design studio.",
    items: [
      {
        title: "Front and back design",
        body: "Editorial layouts prepared for both sides of your postcard.",
      },
      {
        title: "Mail-ready specs",
        body: "Bleed, safe zones, indicia space, and mail panel arranged per USPS EDDM specifications.",
      },
      {
        title: "Proofs with markup",
        body: "PDF proofs with clear revision tracking. Typical projects include up to two rounds of revisions in the base scope.",
      },
      {
        title: "Print-ready files",
        body: "Final high-resolution PDFs suitable for print, handed off directly to our print partner or to you.",
      },
    ],
  },
  mailGuidance: {
    eyebrow: "Mail readiness",
    h2: "Designed for what shows up in mailboxes — not just a screen.",
    body: "A postcard that looks great on a laptop isn't automatically mail-ready. Addressed mail, EDDM-flagged mail, and promotional postcards each have specific requirements around indicia placement, barcode clearance, and the mailing address panel. Our layouts account for these from the first concept, so your design doesn't need a second redesign before it can ship.",
    bullets: [
      "Indicia placement consistent with your chosen mail path",
      "Address panel and barcode safe zones respected",
      "Bleed and trim built in from the start",
      "Final format may reserve part of the design for address and indicia space — we account for this in the initial concept",
    ],
  },
  revisions: {
    eyebrow: "Revisions",
    h2: "Clear rounds. Clear approvals.",
    items: [
      {
        step: "Round 1 proof",
        body: "First concept delivered as an annotated PDF. You respond with structured feedback.",
      },
      {
        step: "Round 2 refinement",
        body: "Revisions incorporated, typography and layout tightened, final offer copy locked.",
      },
      {
        step: "Print approval",
        body: "You sign off on a print-ready proof. Once approved, no further changes are made before production.",
      },
    ],
    disclaimer:
      "Additional rounds beyond the included scope are quoted separately. We'll confirm any additional fees in writing before proceeding.",
  },
  faq: [
    {
      q: "Can I send you my own brand guidelines?",
      a: "Yes. Share logos, colors, fonts, and any brand guidelines in your upload or brief and we'll work inside them. If you don't have formal guidelines, we'll infer from your existing website or materials.",
    },
    {
      q: "What file types do you accept for uploads?",
      a: "PDF, AI, PSD, JPG, PNG, and TIFF. Print-ready PDFs with bleed are preferred.",
    },
    {
      q: "What postcard sizes do you support?",
      a: "Standard EDDM-eligible sizes including 4.25×6, 6×9, and 6×11. We can also design non-EDDM standard sizes for addressed mail on request.",
    },
    {
      q: "How many rounds of revisions are included?",
      a: "Up to two rounds of revisions are included in the base custom-design scope. Additional rounds are quoted separately.",
    },
    {
      q: "Do you write the copy on the postcard, or do I?",
      a: "Either. Light headline and offer copywriting is included in the custom design scope. For heavier copywriting or multi-version campaigns, we quote separately.",
    },
    {
      q: "Can you match my website or existing print style?",
      a: "Yes. Share your site or any existing materials and we'll align the postcard's voice and visual system with your existing brand.",
    },
  ],
  upsell: {
    eyebrow: "Ready to mail?",
    h2: "Design is step one. Here's the rest.",
    cards: [
      {
        title: "Planning to mail this piece?",
        body: "Add route selection and mailing next. Search a market, pick routes, estimate households, and submit for quote.",
        href: "/eddm-print-and-mail",
        cta: "Go to EDDM Print & Mail",
        recommended: true,
      },
      {
        title: "Hand it all to us",
        body: "Let our team handle strategy, routes, design, print, and mail prep end to end.",
        href: "/full-service-eddm",
        cta: "See Full-Service EDDM Campaigns",
        recommended: false,
      },
    ],
  },
};

/* ───────────────────────────  EDDM PRINT & MAIL  ─────────────────────────── */

export const eddmPrintMail = {
  hero: {
    eyebrow: "EDDM Print & Mail",
    h1: "Route, Print, and Mail Your EDDM Campaign.",
    sub: "Search a market, compare routes, estimate household reach, add your artwork or request design help, and move into a guided print-and-mail workflow from one place.",
    primary: { label: "Start Building Routes", href: "#route-builder" },
    secondary: { label: "Request a Managed Quote", href: "#quote" },
    tertiary: { label: "I Need Design Help First", href: "/postcard-design#custom-brief" },
  },
  phases: {
    phase1: {
      eyebrow: "Phase 1 · Guided quote today",
      body: "Today this page builds a route plan and campaign brief. Final pricing and checkout happen after a campaign manager reviews route availability, postage, and specs.",
    },
    phase2: {
      eyebrow: "Phase 2 · Live checkout ahead",
      body: "Same workflow will support live route selection, dynamic pricing, saved route plans, and direct checkout. Architecture is ready — backend wiring rolls out as integrations (USPS carrier-route data, payment, mail-house) connect.",
    },
  },
  areaSearch: {
    h2: "Start with where you want your campaign to land.",
    helper:
      "Enter a ZIP, city, or address. We'll surface EDDM-eligible carrier routes around that point. Final route availability is confirmed at quote.",
    presets: ["1 mi", "3 mi", "5 mi", "10 mi", "Custom"],
  },
  planner: {
    filters: {
      title: "Narrow your routes",
      toggles: [
        "Residential only",
        "Prioritize high household count",
        "Exclude business-heavy routes",
      ],
      ageOptions: ["18–34", "35–54", "55+", "All"],
      hhSizeOptions: ["1–2", "3–4", "5+", "All"],
      incomeOptions: ["Low", "Mid", "High", "All"],
      premiumOverlays: [
        "Dwelling mix (single-family / multi / mixed)",
        "Owner occupancy %",
        "Homeownership",
        "Residential / business mix",
      ],
      helper:
        "Premium overlays use aggregated third-party demographic data. Overlay availability and fees confirmed at quote.",
    },
    map: {
      badge: "Stylized route view — final routes confirmed at quote.",
    },
    list: {
      header: "Your selected routes",
      empty: "Select routes from the map or the filters panel to build your drop.",
      summary: {
        title: "Estimate summary",
        windowLabel: "Estimated drop window",
        windowValue: "10–14 business days from proof approval",
      },
      ctas: {
        primary: { label: "Continue to design handoff", href: "#design-handoff" },
        secondary: { label: "Save and continue later", href: "#save" },
        tertiary: { label: "Request a managed quote", href: "#quote" },
      },
    },
  },
  designHandoff: {
    h2: "Bring your design or let us handle it.",
    cards: [
      {
        title: "Upload my design",
        href: "/postcard-design#upload",
        cta: "Upload artwork",
      },
      {
        title: "Request a custom design",
        href: "/postcard-design#custom-brief",
        cta: "Brief our studio",
      },
      {
        title: "Continue later",
        href: "#save",
        cta: "Save my route set",
      },
    ],
  },
  quote: {
    h2: "Request your campaign quote.",
    intro:
      "Every quote is reviewed by a campaign manager before we send back numbers. We'll confirm route availability, production specs, mailing class, estimated postage, and timing.",
  },
  miniProcess: [
    "Route plan",
    "Proofs and approval",
    "Print production",
    "Mail drop and tracking",
  ],
  faq: [
    {
      q: "Is this checkout, or a quote?",
      a: "This page builds a route plan and a campaign brief. Final pricing and checkout happen after our team confirms route availability, postage, and production specs.",
    },
    {
      q: "How accurate are the household estimates?",
      a: "Household estimates in the planner are indicative. Final counts are confirmed against the most current carrier-route data at quote.",
    },
    {
      q: "Can I mix residential and business routes?",
      a: "Yes. Some campaigns target residential only, some include a business mix. We'll recommend based on your offer.",
    },
    {
      q: "Do I need my postcard designed before requesting a quote?",
      a: "No. You can request a quote first. Design and production run in parallel once the quote is accepted.",
    },
    {
      q: "What's your typical turnaround from approval to drop?",
      a: "Approximately 10–14 business days from proof approval to drop window. Rush turnarounds are available on request.",
    },
    {
      q: "Can I target by age or income?",
      a: "Core overlays (age band, household size, income band) are available, plus premium overlays (dwelling mix, owner occupancy) via third-party data. Overlay fees confirmed at quote.",
    },
    {
      q: "Can you mail the same postcard monthly?",
      a: "Yes. Recurring programs are one of the most effective ways to use EDDM. We manage recurring drops on a single calendar and invoice cadence.",
    },
    {
      q: "What if I want to cancel after requesting a quote?",
      a: "Requesting a quote is not a commitment. Quotes are free and non-binding. See our Refund and Cancellation Policy for what happens after proof approval.",
    },
  ],
  finalCta: {
    h2: "Ready to map your market?",
    sub: "Start building routes or hand us the goal and we'll come back with a plan.",
    primary: { label: "Start building routes", href: "#route-builder" },
    secondary: {
      label: "Talk to a campaign manager",
      href: "/contact?type=campaign-quote",
    },
  },
};

/* ───────────────────────────  FULL-SERVICE EDDM  ─────────────────────────── */

export const fullServiceEddm = {
  hero: {
    eyebrow: "Full-Service EDDM Campaigns",
    h1: "Full-Service EDDM Campaigns.",
    sub: "We handle strategy, route planning, design, print production, mailing preparation, and USPS coordination so you can launch direct mail without piecing the process together yourself.",
    primary: { label: "Book a Strategy Call", href: "/contact?type=strategy-call" },
    secondary: {
      label: "Request a Campaign Quote",
      href: "/contact?type=campaign-quote",
    },
    tertiary: { label: "I Already Have Artwork", href: "/postcard-design#upload" },
    trustLine: "Strategy · Routes · Design · Print · Mail prep · Launch",
  },
  included: {
    h2: "Everything your campaign needs, under one roof.",
    items: [
      {
        title: "Strategy",
        body: "Audience, offer, call-to-action, and campaign cadence reviewed before anything ships.",
      },
      {
        title: "Route planning",
        body: "Carrier-route targeting with household and demographic context for your market.",
      },
      {
        title: "Postcard design",
        body: "Editorial design built for print, mail, and response.",
      },
      {
        title: "Print production",
        body: "High-quality stock, finish, and sizing spec'd to match the campaign.",
      },
      {
        title: "Mailing preparation",
        body: "Indicia, address panels, postage method, and documentation prepared.",
      },
      {
        title: "USPS coordination",
        body: "Drop scheduling and handoff to the appropriate mail-handling path. LocalDoor is independent of USPS.",
      },
    ],
  },
  who: {
    h2: "Built for businesses that want direct mail done, not managed.",
    items: [
      {
        title: "Local service operators",
        body: "Who'd rather run their business than learn EDDM rules.",
      },
      {
        title: "Multi-location owners",
        body: "Running the same campaign across neighborhoods or cities.",
      },
      {
        title: "Growth-stage brands",
        body: "Running recurring drops as a predictable channel.",
      },
    ],
  },
  comparison: {
    h2: "The hidden cost of doing EDDM yourself.",
    diy: {
      title: "DIY path",
      items: [
        "Designing in Canva with no mail-panel layout",
        "Navigating route tools and household counts alone",
        "Print vendor miscommunication on specs",
        "Manual mail prep, paperwork, and indicia confusion",
        "Drop dates slipping with no clear accountability",
      ],
    },
    full: {
      title: "Full-service with LocalDoor",
      items: [
        "Editorial design prepared for mail from the start",
        "Route strategy built around your business, not a ZIP code",
        "Print specs verified before production",
        "Mail prep and carrier-route documentation handled for you",
        "One accountable campaign manager from brief to drop",
      ],
    },
  },
  process: {
    h2: "A managed workflow, start to drop.",
    steps: [
      { n: "01", title: "Discovery call", body: "We learn your market, offer, and growth goal." },
      {
        n: "02",
        title: "Strategy & routes",
        body: "Route targeting, audience overlay, cadence recommendation.",
      },
      {
        n: "03",
        title: "Creative brief & design",
        body: "Concept, copy, front and back layouts, proof cycles.",
      },
      {
        n: "04",
        title: "Proof approval",
        body: "You sign off on a print-ready proof.",
      },
      {
        n: "05",
        title: "Production",
        body: "Print run, stock and finish per spec, quality check.",
      },
      {
        n: "06",
        title: "Mail preparation",
        body: "Indicia, barcode, documentation, scheduling.",
      },
      {
        n: "07",
        title: "Launch & drop window",
        body: "Mail prepared for the scheduled delivery window.",
      },
    ],
  },
  recurring: {
    eyebrow: "Recurring programs",
    h2: "Direct mail compounds when you run it monthly.",
    body: "Most of our best campaigns aren't one-off. They're recurring drops with refreshed creative, running on a predictable calendar. We set up monthly, bi-monthly, and quarterly programs — one approval flow, one calendar, one invoice cadence.",
    cta: { label: "Ask about recurring programs", href: "/contact?type=recurring" },
  },
  faq: [
    {
      q: "How long does a full-service campaign take from call to drop?",
      a: "A typical full-service campaign runs 3–5 weeks from discovery call to drop window, depending on approvals and print scheduling.",
    },
    {
      q: "What's the minimum campaign size?",
      a: "We recommend a minimum of one carrier route (typically ~300–700 households). Smaller campaigns are possible but usually better run as addressed mail rather than EDDM.",
    },
    {
      q: "Can you do multi-market campaigns at once?",
      a: "Yes. Multi-location and multi-city campaigns are run on a single calendar with per-market route plans.",
    },
    {
      q: "What do you need from me to get started?",
      a: "Your market, offer, brand assets, and a rough timeline. Everything else is developed together during the strategy phase.",
    },
    {
      q: "Who owns the artwork?",
      a: "You retain ownership of the final artwork produced for your campaign. See our Terms of Use for full detail.",
    },
    {
      q: "What happens if something goes wrong in production or mailing?",
      a: "Material production defects are addressed per our Service and Production Policy. Postal delivery timing is not controlled by LocalDoor Marketing and is not guaranteed.",
    },
    {
      q: "Are recurring campaigns discounted vs one-off drops?",
      a: "Recurring programs typically see cost efficiencies on design and mail prep once the program is set up. We quote recurring programs with those efficiencies factored in.",
    },
  ],
  finalCta: {
    h2: "Ready to hand off a campaign?",
    primary: { label: "Book a strategy call", href: "/contact?type=strategy-call" },
    secondary: {
      label: "Request a campaign quote",
      href: "/contact?type=campaign-quote",
    },
  },
};

/* ───────────────────────────  PRICING  ─────────────────────────── */

export const pricing = {
  hero: {
    eyebrow: "Pricing",
    h1: "Campaign pricing, transparently explained.",
    sub: "Exact pricing depends on postcard size, route count, postage method, and service level. Below is how we structure campaigns and what goes into a final quote.",
  },
  components: [
    {
      title: "Postcard production",
      body: "Design, paper, finish, size, and print run. Illustrative example rates shown at quote.",
    },
    {
      title: "Route-driven volume",
      body: "Number of households across the routes you select.",
    },
    {
      title: "Postage",
      body: "Postage is a pass-through cost determined by mail class, piece size, and current postal rates at the time of drop. We do not mark up postage.",
    },
    {
      title: "Prep, handling, and service level",
      body: "Mailing prep, bundling, documentation, and whether the campaign is Print & Mail or Full-Service.",
    },
  ],
  examples: [
    {
      title: "Starter drop",
      sub: "~1 route · ~500 households",
      spec: "4.25×6 postcard · Upload your own artwork",
      est: "Illustrative estimate range: $X,XXX – $X,XXX",
      note: "Final range depends on finish, postage class, and service level.",
    },
    {
      title: "Neighborhood campaign",
      sub: "4–6 routes · ~2,500 households",
      spec: "6×9 postcard · Custom design · Print & Mail",
      est: "Illustrative estimate range: $X,XXX – $X,XXX",
      note: "Final range depends on finish, postage class, and service level.",
    },
    {
      title: "Multi-route monthly",
      sub: "10+ routes · ~5,000+ households per drop",
      spec: "Monthly cadence · Full-service",
      est: "Illustrative estimate range: $X,XXX – $X,XXX per drop",
      note: "Recurring pricing reflects program efficiencies. Final quote in writing.",
    },
  ],
  notIncluded: [
    "Postage pass-through",
    "Premium paper or finish upgrades",
    "Rush turnarounds",
    "Additional revision rounds beyond base scope",
    "Premium demographic overlays",
    "Multi-version artwork for A/B testing",
    "List purchases (for addressed mail outside EDDM)",
  ],
  ctas: [
    { label: "Build a guided quote", href: "/eddm-print-and-mail" },
    { label: "Request a managed quote", href: "/contact?type=campaign-quote" },
  ],
  disclaimer:
    "Published example estimates are illustrative and are not offers. Final pricing is confirmed in a written quote after route availability, production specs, postage method, and service level are reviewed.",
};

/* ───────────────────────────  HOW IT WORKS  ─────────────────────────── */

export const howItWorks = {
  hero: {
    eyebrow: "Process",
    h1: "How a LocalDoor campaign comes together.",
    sub: "A consistent workflow from first call to mailbox drop, whether you're running a one-off or a monthly program.",
  },
  phases: [
    {
      n: "01",
      title: "Inquiry",
      body: "Share your market, goals, and any creative direction via web form, email, or a discovery call.",
    },
    {
      n: "02",
      title: "Strategy / route planning",
      body: "Audience, offer, cadence, and route targeting reviewed. Household and demographic context applied where relevant.",
    },
    {
      n: "03",
      title: "Creative brief",
      body: "We lock the goal, offer, primary CTA, and brand direction for the postcard.",
    },
    {
      n: "04",
      title: "Proof approval",
      body: "Round 1 and (where in scope) Round 2 proofs delivered as annotated PDFs. You sign off on a final print-ready proof.",
    },
    {
      n: "05",
      title: "Production",
      body: "Print run on spec'd stock and finish, with quality check.",
    },
    {
      n: "06",
      title: "Mailing prep",
      body: "Indicia placement, address panel, carrier-route documentation, postage method.",
    },
    {
      n: "07",
      title: "Launch",
      body: "Mail prepared for the scheduled drop window. Delivery is coordinated through the appropriate mail-handling path.",
    },
    {
      n: "08",
      title: "Response tracking guidance",
      body: "We'll help you set up unique phone numbers, QR codes, or landing URLs so response is measurable. Actual response depends on many factors — we do not guarantee response rates or outcomes.",
    },
  ],
  timing: {
    h3: "Timing expectations",
    items: [
      "Standard campaign: ~2–4 weeks from brief to drop window, depending on revisions and print scheduling.",
      "Rush campaigns available on request and subject to fees.",
      "All delivery windows are estimates — USPS drop and delivery timing is not guaranteed by LocalDoor Marketing.",
    ],
  },
  ctas: [
    { label: "Book a strategy call", href: "/contact?type=strategy-call" },
    { label: "Build a quote", href: "/eddm-print-and-mail" },
    { label: "Upload artwork", href: "/postcard-design#upload" },
  ],
};

/* ───────────────────────────  PORTFOLIO  ─────────────────────────── */

export const portfolio = {
  hero: {
    eyebrow: "Portfolio",
    h1: "Selected campaigns and concept work.",
    sub: "Postcards built to get opened, read, and responded to — across home services, dental and medical, real estate, restaurants, and professional services.",
  },
  industries: [
    "All",
    "Home services",
    "Dental & medical",
    "Med spa & wellness",
    "Real estate",
    "Restaurants",
    "Fitness",
    "Professional services",
    "Concept work",
  ],
  goals: [
    "All goals",
    "Drive calls",
    "Drive appointments",
    "Drive foot traffic",
    "Brand awareness",
    "Seasonal offer",
  ],
  items: [
    { title: "Spring Tune-Up", industry: "Home services", goal: "Drive calls", kind: "Concept work" },
    { title: "New Patient Welcome", industry: "Dental & medical", goal: "Drive appointments", kind: "Concept work" },
    { title: "Glow Refresh", industry: "Med spa & wellness", goal: "Drive appointments", kind: "Concept work" },
    { title: "Just Listed", industry: "Real estate", goal: "Brand awareness", kind: "Concept work" },
    { title: "Grand Opening", industry: "Restaurants", goal: "Drive foot traffic", kind: "Concept work" },
    { title: "New Year Intro Offer", industry: "Fitness", goal: "Seasonal offer", kind: "Concept work" },
    { title: "Retainer Check-In", industry: "Professional services", goal: "Drive calls", kind: "Concept work" },
    { title: "Storm Response", industry: "Home services", goal: "Drive calls", kind: "Concept work" },
  ],
  compliance:
    'Portfolio pieces marked "Concept Work" are original studio concepts and have not been mailed for a client. Pieces marked "Client Work" were produced for actual clients; identifying client details are shown only with permission.',
  cta: { label: "Request work like this", href: "/contact" },
};

/* ───────────────────────────  INDUSTRIES  ─────────────────────────── */

export const industries = {
  hero: {
    eyebrow: "Industries",
    h1: "Direct mail strategies that fit your category.",
    sub: "The offer, the timing, and the design all shift by industry. Here's how we approach campaigns in the verticals we know best.",
  },
  verticals: [
    {
      slug: "home-services",
      name: "Home services",
      line: "HVAC, plumbing, electrical, roofing, landscaping, cleaning — seasonal and demand-driven campaigns.",
      bullets: [
        "Typical offers: seasonal tune-up, free estimate, bundled service packages.",
        "Route mix: dense residential routes around service area, drive-time filtered.",
        "Timing: ahead of peak season — drop 2–4 weeks before demand starts.",
      ],
    },
    {
      slug: "dental-medical",
      name: "Dental & medical",
      line: "New patient acquisition, procedure awareness, and retention for dentists, orthodontists, and medical practices.",
      bullets: [
        "Typical offers: new patient special, free consult, referral offer.",
        "Route mix: households within reasonable drive time, demographic overlays where useful.",
        "Timing: steady monthly or quarterly cadence performs best.",
      ],
    },
    {
      slug: "med-spa-wellness",
      name: "Med spa & wellness",
      line: "Premium aesthetic and wellness offers with design that matches a high-trust category.",
      bullets: [
        "Typical offers: seasonal package, treatment series, intro offer for new services.",
        "Route mix: targeted residential routes matching client demographic.",
        "Timing: monthly with creative rotation to keep the brand top-of-mind.",
      ],
    },
    {
      slug: "roofing",
      name: "Roofing",
      line: "Storm-driven demand and proactive inspection campaigns.",
      bullets: [
        "Typical offers: free inspection, storm-response check, roof age estimate.",
        "Route mix: neighborhoods within recent weather exposure, adjusted by geography.",
        "Timing: rapid deployment after storms, plus steady year-round inspection offers.",
      ],
    },
    {
      slug: "real-estate",
      name: "Real estate",
      line: "Neighborhood farming, just-listed / just-sold, and market updates for agents and teams.",
      bullets: [
        "Typical offers: just-listed, just-sold, free home valuation, neighborhood market report.",
        "Route mix: tightly scoped neighborhood routes you farm consistently.",
        "Timing: recurring monthly drops to the same farm area are standard.",
      ],
    },
    {
      slug: "restaurants",
      name: "Restaurants",
      line: "Grand openings, seasonal menus, and repeat-visit offers for local restaurants.",
      bullets: [
        "Typical offers: opening promo, seasonal menu, weekday lunch deal, family bundle.",
        "Route mix: residential routes within an easy drive, foot-traffic corridors.",
        "Timing: pre-opening pushes and recurring monthly cadence for repeat visits.",
      ],
    },
    {
      slug: "fitness",
      name: "Fitness",
      line: "New-year intros, seasonal transformations, and community-building campaigns for gyms and studios.",
      bullets: [
        "Typical offers: intro membership, class pack, transformation program.",
        "Route mix: residential routes around the studio, demographic overlays by age band.",
        "Timing: January kick-offs plus spring and fall refresh waves.",
      ],
    },
    {
      slug: "professional-services",
      name: "Legal & professional services",
      line: "Reputation-led campaigns that build trust for law, accounting, financial, and insurance practices.",
      bullets: [
        "Typical offers: consultation, category-focused service highlight, seasonal awareness (tax, estate).",
        "Route mix: demographic overlays matter — income bands and dwelling mix guide route choice.",
        "Timing: quarterly cadence with creative refresh is typical.",
      ],
    },
  ],
};

/* ───────────────────────────  FAQ (full)  ─────────────────────────── */

export const faqPage = {
  hero: {
    eyebrow: "FAQ",
    h1: "Direct mail, answered.",
    sub: "The questions we hear most often from local businesses launching their first or fiftieth drop.",
  },
  sections: [
    {
      title: "About EDDM",
      items: [
        {
          q: "What is EDDM?",
          a: "Every Door Direct Mail is a USPS program that lets businesses send mail to every address on selected carrier routes without a mailing list. It's a route-based direct mail method well suited for local targeting.",
        },
        {
          q: "How does route targeting work?",
          a: "Routes are the same carrier routes that USPS uses for delivery. We plan at the carrier-route level so you can choose neighborhoods by household count, residential/business mix, and optional demographic overlays.",
        },
        {
          q: "Who delivers the mail?",
          a: "USPS delivers EDDM. LocalDoor Marketing handles design, production, and mail preparation, and coordinates the drop through the appropriate mail-handling path.",
        },
      ],
    },
    {
      title: "Design",
      items: [
        {
          q: "Can I upload my own design or do you design for me?",
          a: "Both. The Postcard Design page supports upload and custom-design briefs equally.",
        },
        {
          q: "What postcard sizes do you support?",
          a: "Standard EDDM-eligible sizes including 4.25×6, 6×9, and 6×11.",
        },
        {
          q: "How many rounds of revisions are included?",
          a: "Up to two rounds of revisions are included in the base custom-design scope.",
        },
      ],
    },
    {
      title: "Timing",
      items: [
        {
          q: "How long does a campaign take from start to drop?",
          a: "A standard campaign runs 2–4 weeks from brief to drop window. Full-service campaigns including discovery run 3–5 weeks.",
        },
        {
          q: "When do postcards actually hit mailboxes?",
          a: "EDDM mail is typically delivered within a 3–5 business day window after drop. Exact delivery timing is controlled by USPS and is not guaranteed.",
        },
      ],
    },
    {
      title: "Pricing & payments",
      items: [
        {
          q: "How do you price campaigns?",
          a: "Pricing is built from four components: postcard production, route-driven volume, postage pass-through, and prep/handling based on service level.",
        },
        {
          q: "Do you mark up postage?",
          a: "No. Postage is a pass-through cost at current postal rates at time of drop.",
        },
        {
          q: "When is payment due?",
          a: "Typical terms are deposit at proof approval, balance before mail drop. Recurring programs are billed on a monthly cadence.",
        },
      ],
    },
    {
      title: "Recurring & cancellations",
      items: [
        {
          q: "Can I run the same campaign monthly?",
          a: "Yes. Recurring programs are one of the most effective ways to use EDDM.",
        },
        {
          q: "What are route limits per drop?",
          a: "EDDM has per-route and per-day mailing piece limits set by USPS. Your campaign manager will confirm limits for your campaign at quote.",
        },
        {
          q: "Can I cancel or modify after approval?",
          a: "Cancellations and modifications are governed by our Refund and Cancellation Policy. Before proof approval, work completed to that point is billable. After proof approval, the campaign is no longer refundable.",
        },
      ],
    },
    {
      title: "Tracking",
      items: [
        {
          q: "How do I track response?",
          a: "We help you set up unique phone numbers, QR codes, or landing URLs to measure response. Response depends on many factors and is not guaranteed.",
        },
      ],
    },
    {
      title: "USPS & independence",
      items: [
        {
          q: "Are you affiliated with USPS?",
          a: "No. LocalDoor Marketing is an independent direct-mail services company. We are not affiliated with, endorsed by, or sponsored by the United States Postal Service. We coordinate with the appropriate postal paths on our clients' behalf.",
        },
      ],
    },
  ],
};

/* ───────────────────────────  ABOUT  ─────────────────────────── */

export const about = {
  hero: {
    eyebrow: "About",
    h1: "A direct-mail team for local businesses.",
    sub: "LocalDoor Marketing is an independent direct-mail services company focused on premium postcard design, route-level neighborhood targeting, and managed EDDM campaigns for local businesses nationwide.",
  },
  approach: {
    h2: "Our approach.",
    body: "Most direct mail feels disposable because it's produced like it's disposable. We treat every campaign like a publication — designed with intent, routed with data, and printed on stock worth receiving. The goal isn't to mail more postcards. It's to mail the right ones.",
  },
  principles: {
    h2: "What we believe.",
    items: [
      {
        title: "Design is the campaign.",
        body: "The postcard carries the entire message. It has to earn a read.",
      },
      {
        title: "Routes matter more than ZIPs.",
        body: "Two routes in the same ZIP can perform very differently. We plan at the route level.",
      },
      {
        title: "Transparency beats guarantees.",
        body: "We don't promise response rates. We promise a clear plan, real specs, and honest timing.",
      },
    ],
  },
  serve: {
    h2: "Who we serve.",
    body: "Nationwide coverage across EDDM-eligible markets. Common categories: home services, dental, medical, med spa, real estate, restaurants, fitness, and professional services.",
  },
};

/* ───────────────────────────  CONTACT  ─────────────────────────── */

export const contact = {
  hero: {
    eyebrow: "Contact",
    h1: "Talk to a campaign manager.",
    sub: "Tell us a little about your business and what you want a campaign to do. We reply within one business day.",
  },
  inquiryTypes: [
    { value: "strategy-call", label: "Strategy call" },
    { value: "campaign-quote", label: "Campaign quote" },
    { value: "design-upload", label: "Design upload" },
    { value: "design-brief", label: "Design brief" },
    { value: "recurring", label: "Recurring program" },
    { value: "general", label: "General question" },
  ],
};

/* ───────────────────────────  FORM SHARED  ─────────────────────────── */

// Consent block copy is rendered with inline anchors by the ConsentBlock component.
// Keep plain strings here — rich markup lives in components/forms/ConsentBlock.tsx.
export const consent = {
  privacyPrefix:
    "I agree to the Privacy Policy and Terms of Use. I consent to LocalDoor Marketing contacting me about my inquiry.",
  smsPrefix:
    "I agree to receive text messages from LocalDoor Marketing about my project. Msg & data rates may apply. Reply STOP to opt out. See SMS Terms and Privacy Policy.",
};
