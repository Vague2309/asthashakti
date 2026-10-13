import Container from "@/components/ui/Container";
import { CalendarIcon, MealIcon } from "@/components/icons";
import { keyStats } from "@/content/programs";

const icons = { calendar: CalendarIcon, meal: MealIcon } as const;

/**
 * Headline KPI row. Only verified, short numeric figures (see
 * content/programs.ts) — recognition/credentials live in their own section
 * elsewhere, and unverified figures are prose, not an empty "—" tile.
 */
export default function StatsBand() {
  return (
    <section className="border-y border-border bg-primary">
      <Container className="flex flex-col items-center gap-10 py-14 sm:flex-row sm:justify-center sm:gap-0">
        {keyStats.map((stat, i) => {
          const Icon = icons[stat.icon];
          return (
            <div
              key={stat.label}
              className={`flex items-center gap-4 px-10 ${
                i > 0 ? "sm:border-l sm:border-white/15" : ""
              }`}
            >
              <Icon className="h-9 w-9 shrink-0 text-accent" strokeWidth={1.4} />
              <div className="flex flex-col">
                <span className="text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm text-primary-foreground/75">{stat.label}</span>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
