import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PlaceholderSection from "@/components/layout/PlaceholderSection";
import ContactBand from "@/components/sections/ContactBand";
import { sponsorshipTiers, donationNote } from "@/content/programs";

export const metadata: Metadata = {
  title: "Donate",
  description: "Sponsor a child through Astha Shakti's NUTRI-ED program.",
};

export default function DonatePage() {
  return (
    <>
      <PlaceholderSection
        title="Donate"
        description="A full online donation flow is coming soon. Sponsorship tiers below are accurate today — to actually give, please contact us directly for now."
        milestone="a later milestone"
      />

      <Container as="section" className="grid gap-10 pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Sponsorship options
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-muted">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                    What it covers
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                    Period
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold text-foreground">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {sponsorshipTiers.map((tier, i) => (
                  <tr key={tier.id} className={i % 2 ? "bg-surface-muted/50" : ""}>
                    <td className="px-4 py-3 text-foreground">{tier.label}</td>
                    <td className="px-4 py-3 text-muted-foreground">{tier.period || "—"}</td>
                    <td className="px-4 py-3 text-right font-medium text-foreground">
                      ₹{tier.amountInr.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{donationNote}</p>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border p-6 text-center">
          <Image
            src="/images/donate/placeholder-qr.png"
            alt="Placeholder QR code"
            width={240}
            height={240}
            className="h-48 w-48"
          />
          <p className="text-sm font-medium text-foreground">Placeholder QR code</p>
          <p className="text-xs text-muted-foreground">
            This is not yet a live payment QR. It will be replaced with Astha
            Shakti&apos;s actual UPI/payment QR code once set up.
          </p>
        </div>
      </Container>

      <ContactBand />
    </>
  );
}
