import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import StatsBand from "@/components/sections/StatsBand";
import VideoGallery from "@/components/sections/VideoGallery";
import { AwardIcon } from "@/components/icons";
import { siteConfig, donateLink, recognition } from "@/content/site";
import { nutriEd } from "@/content/programs";

export default function Home() {
  const award = recognition[0];

  return (
    <>
      <PageHero
        image="/images/programs/hero-background.jpg"
        imageAlt="Children at an Astha Shakti NUTRI-ED meal program"
        eyebrow={siteConfig.tagline}
        title="Nutrition and education, together, for every child"
        description={siteConfig.missionStatement}
      >
        <div className="mt-2 flex flex-wrap gap-3">
          <Button href={donateLink.href} variant="accent" size="lg">
            {donateLink.label}
          </Button>
          <Button href="/volunteer" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
            Volunteer with us
          </Button>
        </div>
      </PageHero>

      <StatsBand />

      {/* Program highlight */}
      <Container as="section" className="grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src="/images/programs/facilities-collage.jpg"
            alt="Scenes from NUTRI-ED: meals, classes, yoga, health checkups and school events"
            width={1565}
            height={1600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            Our program
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {nutriEd.name}: {nutriEd.summary}
          </h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {nutriEd.facilities.slice(0, 6).map((facility) => (
              <li key={facility} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {facility}
              </li>
            ))}
          </ul>
          <Button href="/programs" variant="outline" size="md" className="w-fit">
            Explore our programs
          </Button>
        </div>
      </Container>

      {/* Recognition strip */}
      <section className="bg-surface-muted py-10">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-2.5 text-foreground">
            <AwardIcon className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
            <span>
              <strong>{award.title}</strong> — {award.issuer}
            </span>
          </p>
          <Button href="/about" variant="ghost" size="sm">
            Read our story
          </Button>
        </Container>
      </section>

      <VideoGallery limit={3} />

      {/* Final CTA */}
      <Container as="section" className="flex flex-col items-start gap-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Join hands, get involved
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Sponsor a child, volunteer your time, or simply get in touch — every bit
          of support moves NUTRI-ED forward.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={donateLink.href} variant="accent" size="lg">
            {donateLink.label}
          </Button>
          <Button href="/volunteer" variant="outline" size="lg">
            Volunteer with us
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </>
  );
}
