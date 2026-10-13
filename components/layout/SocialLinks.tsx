import { YouTubeIcon, InstagramIcon } from "@/components/icons";
import { socialLinks } from "@/content/site";

const platforms = [
  { key: "youtube", href: socialLinks.youtube, label: "YouTube", Icon: YouTubeIcon },
  { key: "instagram", href: socialLinks.instagram, label: "Instagram", Icon: InstagramIcon },
] as const;

export default function SocialLinks({ className = "" }: { className?: string }) {
  const active = platforms.filter((p) => p.href);
  if (active.length === 0) return null;

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {active.map(({ key, href, label, Icon }) => (
        <li key={key}>
          <a
            href={href!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
