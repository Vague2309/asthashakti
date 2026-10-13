import Image from "next/image";
import type { StaticImageData } from "next/image";
import Container from "@/components/ui/Container";
import type { ReactNode } from "react";

/**
 * Full-bleed photo hero with a navy gradient overlay for text legibility.
 * Used to open About/Programs/etc. with a real photo instead of a flat
 * color block — the "overlay" treatment mirrors Astha Shakti's own flyer
 * style, rebuilt as a responsive web section instead of a static image
 * with baked-in text.
 */
export default function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  children,
  imagePosition = "center",
}: {
  image: StaticImageData | string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  imagePosition?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />
        {/* Navy gradient: darkest at the bottom where text sits, fading toward the top. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,18,32,0.55) 0%, rgba(11,18,32,0.75) 55%, rgba(11,18,32,0.92) 100%)",
          }}
        />
      </div>

      <Container className="relative flex min-h-[26rem] flex-col justify-end gap-4 py-16 sm:min-h-[30rem]">
        {eyebrow && (
          <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl text-lg text-white/90">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
