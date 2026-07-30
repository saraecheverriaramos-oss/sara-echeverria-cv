import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Filosofia() {
  return (
    <Section id="filosofia" eyebrow="Filosofía de liderazgo" title="Cómo entiende la dirección de personas">
      <Reveal>
        <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
          {perfil.filosofia.fraseGeneral}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {perfil.filosofia.ideas.map((idea, i) => (
          <Reveal key={idea} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line p-6">
              <span className="font-serif text-2xl text-accent/70">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 leading-relaxed text-ink-muted">{idea}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
