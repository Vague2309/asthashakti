import Container from "@/components/ui/Container";

/**
 * Temporary content for routes that exist in the nav but haven't been
 * built out yet. Each later milestone replaces one of these with real
 * content — the route and metadata stay, only the body changes.
 */
export default function PlaceholderSection({
  title,
  description,
  milestone,
}: {
  title: string;
  description: string;
  milestone: string;
}) {
  return (
    <Container as="section" className="flex flex-1 flex-col gap-4 py-20">
      <span className="w-fit rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-muted-foreground">
        Coming in {milestone}
      </span>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <p className="max-w-xl text-muted-foreground">{description}</p>
    </Container>
  );
}
