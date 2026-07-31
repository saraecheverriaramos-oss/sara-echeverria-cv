import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function EvolucionProfesional() {
  const { titulo, subtitulo, bloques, cierre } = perfil.evolucionProfesional;

  return (
    <Section id="evolucion" eyebrow="Trayectoria reciente" title={titulo} lead={subtitulo}>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {bloques.map((bloque, i) => (
          <Reveal key={bloque.titulo} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line p-6">
              <span className="font-serif text-2xl text-accent/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-lg">{bloque.titulo}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{bloque.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10 max-w-2xl border-t border-line pt-8 font-serif text-xl leading-snug text-ink">{cierre}</p>
      </Reveal>
    </Section>
  );
}
