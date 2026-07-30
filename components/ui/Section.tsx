import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  className,
  containerClassName,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <Container className={containerClassName}>
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
            ) : null}
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
            {lead ? <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lead}</p> : null}
          </div>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
