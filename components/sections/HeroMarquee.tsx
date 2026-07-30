import { cn } from "@/lib/utils";

export function HeroMarquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const track = [...items, ...items];

  return (
    <div
      aria-hidden
      className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 group-hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em]",
              dark ? "text-noche-ink-muted" : "text-ink-muted",
            )}
          >
            {item}
            <span aria-hidden className="ml-10 text-accent">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
