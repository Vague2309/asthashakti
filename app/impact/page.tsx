import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import StatsBand from "@/components/sections/StatsBand";
import VideoGallery from "@/components/sections/VideoGallery";
import { AwardIcon } from "@/components/icons";
import { siteConfig, contactInfo, leadership, recognition } from "@/content/site";
import { donationNote, pendingStats } from "@/content/programs";

export const metadata: Metadata = {
  title: "Impact & Transparency",
  description: "Verified figures, recognition and registration details for Astha Shakti.",
};

export default function ImpactPage() {
  const award = recognition[0];
  const { address } = contactInfo;

  return (
    <>
      <PageHero
        image="/images/programs/relief-boxes.jpg"
        imageAlt="Astha Shakti team distributing food relief kits"
        eyebrow="Impact & Transparency"
        title="What we can verify, and what's still coming"
        description="We'd rather show confirmed figures than inflate ones we can't back up. Here's what's verified today, alongside our registration details."
      />

      <StatsBand />

      <Container as="section" className="py-16">
        <p className="max-w-2xl text-sm text-muted-foreground">
          A note on the figures above: {pendingStats.join(" and ").toLowerCase()} aren&apos;t
          published here yet — we&apos;ll add them once we have verified numbers rather
          than estimate.
        </p>
      </Container>

      {/* Registration & legal transparency */}
      <section className="bg-surface-muted py-16">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Registration details
          </h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-sm text-muted-foreground">Legal name</dt>
              <dd className="mt-1 font-medium text-foreground">{siteConfig.legalName}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Operating since</dt>
              <dd className="mt-1 font-medium text-foreground">{siteConfig.foundingYear}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Registration number</dt>
              <dd className="mt-1 font-medium text-foreground">{siteConfig.registrationNumber}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Registered address</dt>
              <dd className="mt-1 font-medium text-foreground">
                {address.city}, {address.state}, {address.country}
              </dd>
            </div>
          </dl>
          <p className="mt-6 max-w-xl text-sm text-muted-foreground">{donationNote}</p>
        </Container>
      </section>

      {/* Recognition */}
      <Container as="section" className="grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src="/images/about/certificate.jpg"
            alt={`${award.title} certificate, presented to ${leadership.name}`}
            width={1600}
            height={1491}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            <AwardIcon className="h-3.5 w-3.5" strokeWidth={2} />
            Recognition
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {award.title}
          </h2>
          <p className="text-muted-foreground">
            Awarded by {award.issuer} in the <strong className="text-foreground">{award.category}</strong>{" "}
            category, presented to {leadership.name} at The Taj West End, Bengaluru,
            Karnataka.
          </p>
        </div>
      </Container>

      {/* Annual reports */}
      <section className="bg-surface-muted py-16">
        <Container className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Annual reports
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Downloadable annual reports will be published here once available.
          </p>
        </Container>
      </section>

      <VideoGallery heading="Our work, in video" />
    </>
  );
}
