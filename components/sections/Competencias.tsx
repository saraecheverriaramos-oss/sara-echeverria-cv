import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Competencias() {
  return (
    <Section
      id="competencias"
      eyebrow="Competencias"
      title="Cuatro áreas, sin puntuaciones de autoevaluación"
      lead="Se agrupan por área en lugar de puntuarse: una competencia se demuestra en la trayectoria, no en una barra de progreso."
    >
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {perfil.competencias.map((grupo, i) => (
          <Reveal key={grupo.area} delay={i * 0.05}>
            <h3 className="font-serif text-lg text-accent">{grupo.area}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {grupo.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1 text-sm text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
