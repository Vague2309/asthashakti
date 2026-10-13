import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

/**
 * Site wordmark. The source PNG has a white background/matte (cropped from
 * a promotional flyer), so it's only placed on light surfaces for now.
 * TODO: ask for a transparent-background export so it also works on dark
 * surfaces (e.g. a dark-mode header or footer).
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 rounded ${className}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src="/images/brand/astha-shakti-logo.png"
        alt={`${siteConfig.name} — ${siteConfig.tagline}`}
        width={270}
        height={130}
        priority
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
