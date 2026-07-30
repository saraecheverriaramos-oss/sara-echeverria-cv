import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function PropuestaValor() {
  return (
    <Section
      id="propuesta"
      eyebrow="Propuesta de valor"
      title="Cinco pilares, una misma trayectoria"
      lead="No son competencias aisladas: son la misma experiencia de dirigir negocios, personas y proyectos vista desde cinco ángulos."
    >
      <div className="mt-14 divide-y divide-line border-t border-line">
        {perfil.pilares.map((pilar, i) => (
          <Reveal key={pilar.titulo} delay={i * 0.05}>
            <div className="grid gap-3 py-8 sm:grid-cols-[auto_1fr] sm:gap-10">
              <span className="font-serif text-3xl text-accent/70 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-xl">{pilar.titulo}</h3>
                <p className="mt-2 max-w-2xl text-ink-muted leading-relaxed">{pilar.descripcion}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
