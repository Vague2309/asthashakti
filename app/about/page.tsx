import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { AwardIcon } from "@/components/icons";
import {
  siteConfig,
  leadership,
  recognition,
  partnerOrg,
  donateLink,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: siteConfig.missionStatement,
};

export default function AboutPage() {
  const award = recognition[0];

  return (
    <>
      <PageHero
        image="/images/about/award-ceremony.jpg"
        imageAlt="Astha Shakti receiving the Most Promising NGO Award India 2018 at The Taj West End, Bengaluru"
        imagePosition="center 30%"
        eyebrow="About Us"
        title="Faith in service, in practice"
        description={siteConfig.missionStatement}
      />

      {/* Story */}
      <Container as="section" className="grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our story
          </h2>
          <p className="text-muted-foreground">
            {siteConfig.legalName} was built around a simple belief: a child who is
            well-fed and well-educated has a real chance to change the course of their
            own life. That belief shapes our flagship program, <strong className="text-foreground">NUTRI-ED</strong> —
            nutritive food paired with quality education, run for underprivileged and
            economically deprived children in Bengaluru.
          </p>
          <p className="text-muted-foreground">
            NUTRI-ED is run in partnership with {partnerOrg.name}, at {partnerOrg.campus},
            giving children daily meals alongside schooling, skill development and
            personality-building activities under one roof.
          </p>
          <blockquote className="border-l-4 border-accent py-1 pl-4 text-lg italic text-foreground">
            &ldquo;A nourished body can have an illuminating mind.&rdquo;
            <footer className="mt-1 text-sm not-italic text-muted-foreground">
              — {leadership.name}, {leadership.title}
            </footer>
          </blockquote>
          <p className="text-sm text-muted-foreground">
            {siteConfig.legalName} is a registered nonprofit. [Founding year, registration
            type and registration number to be added once confirmed.]
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/about/team-group.jpg"
              alt="The Astha Shakti team at the program center"
              width={1536}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Part of the Astha Shakti team, led by {leadership.name} ({leadership.title}).
          </p>
        </div>
      </Container>

      {/* Recognition */}
      <section className="bg-surface-muted py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
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
      </section>

      {/* CTA */}
      <Container as="section" className="flex flex-col items-start gap-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Want to be part of this story?
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Whether through time, skills or support — there are a few ways to get
          involved with Astha Shakti.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={donateLink.href} variant="accent" size="lg">
            {donateLink.label}
          </Button>
          <Button href="/volunteer" variant="outline" size="lg">
            Volunteer with us
          </Button>
          <Button href="/programs" variant="ghost" size="lg">
            See our programs
          </Button>
        </div>
      </Container>
    </>
  );
}
