import Link from "next/link";
import Container from "@/components/ui/Container";
import CopyrightYear from "@/components/layout/CopyrightYear";
import SocialLinks from "@/components/layout/SocialLinks";
import { siteConfig, contactInfo, navLinks } from "@/content/site";

export default function Footer() {
  const { address, phones, emails } = contactInfo;

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-primary">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {siteConfig.legalName}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-foreground">Quick links</p>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-fit text-sm text-muted-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div>
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <address className="mt-2 not-italic text-sm text-muted-foreground">
            {address.line1}
            <br />
            {address.line2}
            <br />
            {address.city}, {address.state} {address.postalCode}
          </address>
          <ul className="mt-3 flex flex-col gap-1">
            {phones.map((phone) => (
              <li key={phone.number}>
                <a href={phone.href} className="text-sm text-muted-foreground hover:text-primary">
                  {phone.label}: {phone.number}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Email</p>
          <ul className="mt-2 flex flex-col gap-1">
            {emails.map((email) => (
              <li key={email.address}>
                <a
                  href={`mailto:${email.address}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {email.label}: {email.address}
                </a>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-4" />
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-xs text-muted-foreground">
          © <CopyrightYear /> {siteConfig.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
