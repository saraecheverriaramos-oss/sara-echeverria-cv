import { cn } from "@/lib/utils";

/**
 * Marca visible de contenido no confirmado. Nunca se usa en el PDF público.
 */
export function PendingTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink-muted/40 px-2.5 py-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-ink-muted",
        className,
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink-muted/50" />
      {children}
    </span>
  );
}
