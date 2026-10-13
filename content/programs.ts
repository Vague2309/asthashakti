/**
 * Program content. Source: Astha Shakti's NUTRI-ED flyers and sponsorship
 * materials. Figures/claims not present in those materials are marked
 * PLACEHOLDER and must not be presented as verified.
 */

export const nutriEd = {
  name: "NUTRI-ED",
  summary: "Nutritive food. & quality education.",
  quote: {
    text: "A nourished body can have an illuminating mind.",
    attribution: "T.G. Aruna",
  },
  facilities: [
    "Daily meals",
    "Spoken English classes",
    "Personality development",
    "Yoga and karate",
    "Computer lab",
    "Foreign interns interaction",
    "Educational trips",
    "Excursions",
    "Health checkups",
    "Resource support",
  ],
} as const;

export const sponsorshipTiers = [
  {
    id: "full-year",
    label: "Breakfast, lunch and education for a child",
    period: "One year",
    amountInr: 16500,
  },
  {
    id: "lunch-350-day",
    label: "Lunch for 350 children",
    period: "One day",
    amountInr: 10500,
  },
  {
    id: "lunch-year",
    label: "Lunch for a child",
    period: "One year",
    amountInr: 7000,
  },
  {
    id: "breakfast-350-day",
    label: "Breakfast for 350 children",
    period: "One day",
    amountInr: 5300,
  },
  {
    id: "breakfast-year",
    label: "Breakfast for a child",
    period: "One year",
    amountInr: 3600,
  },
  {
    id: "education-year",
    label: "Education for a child",
    period: "One year",
    amountInr: 6000,
  },
  {
    id: "general-support",
    label: "General support",
    period: "",
    amountInr: 1500,
  },
] as const;

// As stated on Astha Shakti's own sponsorship flyer. Confirm the exact
// certificate type (e.g. 80G) and current registration details before
// stating them as a compliance/legal claim — using the org's own wording
// here rather than inferring a specific tax-code section.
export const donationNote =
  "When you donate for a child, you will receive a 50% tax exemption certificate.";

/**
 * Headline numeric KPIs for the stats band (Home/Impact). Kept to true,
 * short figures only — recognition/credentials (e.g. the 2018 award) get
 * their own dedicated section elsewhere rather than being squeezed into a
 * number tile, and unverified figures are listed separately below instead
 * of rendering as an empty "—" tile with equal visual weight to a real one.
 */
export const keyStats = [
  {
    label: "Serving since",
    value: "2009",
    icon: "calendar",
  },
  {
    label: "Children fed daily",
    value: "350+",
    // Derived from the org's own sponsorship flyer ("Lunch for 350 children
    // for one day"), not a separately reported headline stat.
    icon: "meal",
  },
] as const;

/**
 * Figures we don't have a verified source for yet. Not rendered as stat
 * tiles — listed in prose on Impact & Transparency instead, so the page is
 * honest about what's missing without looking unfinished.
 */
export const pendingStats = ["Children supported to date", "Meals served to date"] as const;
