import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import VolunteerForm from "@/components/sections/VolunteerForm";
import ContactBand from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Volunteer and internship opportunities at Astha Shakti.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        image="/images/volunteer/internship-post.jpg"
        imageAlt="Astha Shakti interns"
        imagePosition="center 20%"
        eyebrow="Volunteer"
        title="Exposure. Experience. Learning."
        description="Astha Shakti regularly hosts volunteers and student interns for hands-on experience in social work and sustainability."
      />

      <Container as="section" className="grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ways to get involved
          </h2>
          <p className="text-muted-foreground">
            Whether you have a few hours or a few months, there&apos;s a place for you —
            from hands-on volunteering at the center to structured internships and
            corporate/CSR partnerships.
          </p>
          <div className="mt-2 overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/programs/facilities-collage.jpg"
              alt="Scenes from NUTRI-ED: meals, classes, yoga, health checkups and school events"
              width={1565}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <VolunteerForm />
      </Container>

      <ContactBand note="Prefer another way to reach us? Here are our direct details." />
    </>
  );
}
