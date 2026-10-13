import { YouTubeEmbed } from "@next/third-parties/google";

/**
 * A single video: a facade thumbnail + play button (via the `lite-youtube`
 * web component that @next/third-parties wraps) that only loads YouTube's
 * actual player JS/iframe after a click. Keeps the gallery page light.
 */
export default function VideoCard({ id, title }: { id: string; title: string }) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-xl border border-border bg-black">
        <YouTubeEmbed videoid={id} playlabel={title} params="rel=0" />
      </div>
      <figcaption className="text-sm text-muted-foreground">{title}</figcaption>
    </figure>
  );
}
