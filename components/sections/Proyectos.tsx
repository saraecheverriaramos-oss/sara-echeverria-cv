import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PendingTag } from "@/components/ui/PendingTag";

export function Proyectos() {
  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos destacados"
      title="Casos de desarrollo digital y organizativo"
      lead="Se documentan según la información disponible. Los apartados sin datos confirmados quedan señalados en lugar de rellenarse con supuestos."
    >
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {perfil.proyectos.map((proyecto, i) => (
          <Reveal key={proyecto.id} delay={i * 0.05} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line p-7">
              <h3 className="font-serif text-lg">{proyecto.nombre}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{proyecto.intervencion}</p>

              {proyecto.herramientas.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {proyecto.herramientas.map((h) => (
                    <span key={h} className="rounded-full bg-paper-muted px-2.5 py-0.5 text-xs text-ink-muted">
                      {h}
                    </span>
                  ))}
                </div>
              ) : null}

              <p className="mt-5 border-t border-line pt-4 text-sm">
                {proyecto.resultado ? (
                  <span className="text-ink-muted">{proyecto.resultado}</span>
                ) : (
                  <PendingTag>Resultado confirmado — pendiente</PendingTag>
                )}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
