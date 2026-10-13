import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import VideoCard from "@/components/sections/VideoCard";
import { videos, youtubeChannelUrl } from "@/content/videos";

/**
 * Video section. Pass `limit` to show a preview (e.g. on the homepage)
 * with a link to the full set; omit it to show every video (e.g. on a
 * dedicated gallery/impact page).
 */
export default function VideoGallery({
  limit,
  heading = "See our work",
}: {
  limit?: number;
  heading?: string;
}) {
  const shown = limit ? videos.slice(0, limit) : videos;
  const hasMore = limit !== undefined && limit < videos.length;

  return (
    <Container as="section" className="py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {heading}
        </h2>
        {hasMore && (
          <Button href={youtubeChannelUrl} variant="outline" size="sm">
            More on YouTube
          </Button>
        )}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((video) => (
          <VideoCard key={video.id} id={video.id} title={video.title} />
        ))}
      </div>
    </Container>
  );
}
