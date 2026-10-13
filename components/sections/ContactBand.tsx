import Container from "@/components/ui/Container";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { contactInfo } from "@/content/site";

/**
 * Prominent, real contact details — used on pages whose main content
 * (forms, flows) is still a placeholder, so visitors always have a direct
 * way to reach Astha Shakti in the meantime.
 */
export default function ContactBand({
  note = "This page is still being built. In the meantime, here's how to reach us directly.",
}: {
  note?: string;
}) {
  const { address, phones, emails, whatsapp } = contactInfo;
  const mobile = phones[0];

  return (
    <Container as="section" className="py-12">
      <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Reach us directly</h2>
        <p className="mt-1 text-sm text-muted-foreground">{note}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={mobile.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground hover:bg-primary-hover"
          >
            <PhoneIcon className="h-4 w-4" />
            {mobile.number}
          </a>
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium text-foreground hover:bg-background"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp us
          </a>
        </div>

        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted-foreground">Phones</dt>
            {phones.map((phone) => (
              <dd key={phone.number}>
                <a href={phone.href} className="text-foreground hover:text-primary">
                  {phone.label}: {phone.number}
                </a>
              </dd>
            ))}
          </div>
          <div>
            <dt className="text-muted-foreground">Email</dt>
            {emails.map((email) => (
              <dd key={email.address}>
                <a href={`mailto:${email.address}`} className="text-foreground hover:text-primary">
                  {email.label}: {email.address}
                </a>
              </dd>
            ))}
          </div>
          <div>
            <dt className="text-muted-foreground">Address</dt>
            <dd className="text-foreground">
              {address.line1}, {address.line2}, {address.city}, {address.state}{" "}
              {address.postalCode}
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  );
}
