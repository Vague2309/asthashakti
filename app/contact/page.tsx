import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactBand from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Astha Shakti.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/about/team-group.jpg"
        imageAlt="The Astha Shakti team"
        eyebrow="Contact Us"
        title="Get in touch"
        description="Questions about NUTRI-ED, volunteering, or anything else — we'd like to hear from you."
      />

      <Container as="section" className="max-w-xl py-16">
        <ContactForm />
      </Container>

      <ContactBand note="Prefer another way to reach us? Here are our direct details." />
    </>
  );
}
