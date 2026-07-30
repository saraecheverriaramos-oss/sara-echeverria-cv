import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Filosofia() {
  return (
    <Section id="filosofia" eyebrow="Filosofía de liderazgo" title="Cómo entiende la dirección de personas">
      <div className="mt-8 max-w-2xl space-y-6">
        {perfil.filosofia.parrafos.map((parrafo, i) => (
          <Reveal key={parrafo} delay={i * 0.05}>
            <p className="font-serif text-xl leading-relaxed text-ink">{parrafo}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
