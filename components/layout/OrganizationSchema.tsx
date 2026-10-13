import { siteConfig, contactInfo, socialLinks } from "@/content/site";

/**
 * schema.org NGO structured data, rendered site-wide. Only fields we can
 * actually back up are included — no fabricated foundingDate, numbers, etc.
 */
export default function OrganizationSchema() {
  const sameAs = [socialLinks.youtube, socialLinks.instagram].filter(
    (url): url is string => Boolean(url)
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    foundingDate: String(siteConfig.foundingYear),
    description: siteConfig.missionStatement,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contactInfo.address.line1}, ${contactInfo.address.line2}`,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.state,
      postalCode: contactInfo.address.postalCode,
      addressCountry: "IN",
    },
    telephone: contactInfo.phones[0].number,
    email: contactInfo.emails[0].address,
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    // Static, internally-sourced JSON — not user input.
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
