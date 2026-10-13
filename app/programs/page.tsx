import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import VideoCard from "@/components/sections/VideoCard";
import { partnerOrg, donateLink } from "@/content/site";
import { nutriEd, sponsorshipTiers, donationNote } from "@/content/programs";
import { videos } from "@/content/videos";

export const metadata: Metadata = {
  title: "Our Programs",
  description: nutriEd.summary,
};

const overviewVideo = videos.find((v) => v.id === "WkXWzcFjPsM")!;

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        image="/images/programs/hero-background.jpg"
        imageAlt="Children at an Astha Shakti NUTRI-ED meal program"
        eyebrow={nutriEd.name}
        title="Nutritive food. Quality education."
        description="One program, built around a simple idea: a well-nourished child learns better. NUTRI-ED gives underprivileged children daily meals, schooling and the support to grow beyond the classroom."
      >
        <blockquote className="mt-2 max-w-xl border-l-2 border-accent pl-4 text-white/90 italic">
          &ldquo;{nutriEd.quote.text}&rdquo;
          <footer className="mt-1 text-sm not-italic text-white/70">
            — {nutriEd.quote.attribution}
          </footer>
        </blockquote>
      </PageHero>

      {/* Facilities */}
      <Container as="section" className="py-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What NUTRI-ED provides
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Run in partnership with {partnerOrg.name} at {partnerOrg.campus}, the
          program brings together ten areas of support under one roof.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nutriEd.facilities.map((facility) => (
            <li
              key={facility}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface-muted px-4 py-3"
            >
              <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              <span className="font-medium text-foreground">{facility}</span>
            </li>
          ))}
        </ul>
      </Container>

      {/* Facilities in action */}
      <section className="bg-surface-muted py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/programs/facilities-collage.jpg"
              alt="Scenes from NUTRI-ED: meals, classes, yoga, health checkups and school events"
              width={1565}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              A day inside NUTRI-ED
            </h2>
            <p className="text-muted-foreground">
              From daily meals and spoken English classes to yoga, health checkups
              and school events — NUTRI-ED is built to support a child&apos;s development
              well beyond the classroom.
            </p>
            <Button href={overviewVideo ? `https://youtu.be/${overviewVideo.id}` : "#"} variant="outline" size="md" className="w-fit">
              Watch the program overview
            </Button>
          </div>
        </Container>
      </section>

      {/* Community relief */}
      <Container as="section" className="py-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Community relief response
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Beyond NUTRI-ED, Astha Shakti has stepped in during moments of crisis —
          including COVID-19 relief, distributing food kits and essential supplies
          to children and families in nearby communities.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/programs/relief-boxes.jpg"
              alt="Astha Shakti team with food relief kits distributed during COVID-19"
              width={1186}
              height={1600}
              className="h-full w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/programs/relief-street-distribution.jpg"
              alt="Astha Shakti volunteers distributing sanitizer and supplies to children in the community during COVID-19"
              width={1600}
              height={1503}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </Container>

      {/* Video */}
      {overviewVideo && (
        <section className="bg-surface-muted py-16">
          <Container className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              See NUTRI-ED in action
            </h2>
            <div className="mt-6">
              <VideoCard id={overviewVideo.id} title={overviewVideo.title} />
            </div>
          </Container>
        </section>
      )}

      {/* Sponsorship teaser */}
      <Container as="section" className="py-16">
        <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground sm:px-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Sponsor a child&apos;s year
          </h2>
          <p className="mt-2 max-w-xl text-primary-foreground/85">
            A full year of breakfast, lunch and education for one child costs{" "}
            ₹{sponsorshipTiers[0].amountInr.toLocaleString("en-IN")}. {donationNote}
          </p>
          <Button href={donateLink.href} variant="accent" size="lg" className="mt-6">
            See sponsorship options
          </Button>
        </div>
      </Container>
    </>
  );
}
