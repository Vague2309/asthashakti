import type { MetadataRoute } from "next";
import { siteConfig, navLinks, donateLink } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navLinks.map((l) => l.href), donateLink.href];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    // Deliberately omitting lastModified: a hardcoded date would go stale,
    // and a live `new Date()` here forces this route to render dynamically
    // per-request instead of as a static file.
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
