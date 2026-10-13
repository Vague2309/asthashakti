/**
 * Central site configuration and organization facts.
 *
 * Everything here is sourced from Astha Shakti's own materials (flyers,
 * award certificate, award ceremony photos) unless explicitly marked as a
 * PLACEHOLDER. Do not add new "facts" to this file without a source — add
 * a placeholder and a TODO instead.
 */

export const siteConfig = {
  name: "Astha Shakti",
  legalName: "Astha Shakti Foundation",
  tagline: "Faith in service",
  // Source: NUTRI-ED program flyers.
  missionStatement:
    "Nutritive food with education can help in the overall development of a child. Astha Shakti's core objective is to serve the underprivileged and economically deprived through the NUTRI-ED program, providing opportunities for education, skill development, economic rehabilitation and social integration.",
  url: "https://asthashakti.co.in", // TODO: confirm production domain once this site goes live
  foundingYear: 2009,
  // Provided directly by the org.
  registrationNumber: "BNG(U)BSK68",
} as const;

export const contactInfo = {
  address: {
    line1: "#30, Krupa, 1st Cross, 38th Main",
    line2: "J.P. Nagar, 6th Phase",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560078",
    country: "India",
  },
  phones: [
    { label: "Mobile", number: "+91 85530 18491", href: "tel:+918553018491" },
    { label: "Landline", number: "080-41618491", href: "tel:+918041618491" },
  ],
  emails: [
    // TODO: confirm which address should be the primary/public CTA.
    { label: "Donations & sponsorship", address: "supportast@asthashakti.co.in" },
    { label: "General & volunteering", address: "asthashakti.as@gmail.com" },
  ],
  whatsapp: {
    // Reuses the published mobile number; confirm this number is on WhatsApp before launch.
    number: "+918553018491",
    href: "https://wa.me/918553018491",
  },
} as const;

// TODO: add real handles — icons for Facebook/Twitter/LinkedIn appear on
// Astha Shakti's flyers, but no handles/URLs were provided yet. Leave those
// entries unpublished until confirmed, rather than guessing a URL.
export const socialLinks = {
  facebook: null as string | null,
  instagram: "https://instagram.com/asthashakti8/" as string | null,
  twitter: null as string | null,
  linkedin: null as string | null,
  youtube: "https://www.youtube.com/@asthashakti8487" as string | null,
} as const;

export const leadership = {
  name: "T.G. Aruna",
  title: "Founding Director",
} as const;

// Confirmed by the org: NUTRI-ED programming runs at this partner campus.
export const partnerOrg = {
  name: "Sri Vivekananda Education Society",
  campus: "Vivekananda School, J.P. Nagar",
} as const;

export const recognition = [
  {
    title: "Most Promising NGO Award India, 2018",
    issuer: "NGO Excellence Awards & Conference 2018",
    category: "Child Care and Community Development",
    detail: "Presented to Ms. T.G. Aruna at The Taj West End, Bengaluru, Karnataka",
    date: "2018-12-22",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/impact", label: "Impact & Transparency" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact Us" },
] as const;

// Donate is kept as a distinct, visually emphasized CTA rather than a plain nav link.
export const donateLink = { href: "/donate", label: "Donate" } as const;
