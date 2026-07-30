import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PendingTag } from "@/components/ui/PendingTag";

export function Formacion() {
  return (
    <Section id="formacion" eyebrow="Formación" title="Formación académica y en curso">
      <div className="mt-14 divide-y divide-line border-t border-line">
        {perfil.formacion.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div>
                <h3 className="font-serif text-lg">{item.titulo}</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {item.institucion ?? "Institución pendiente de confirmar"}
                  {item.calificacion ? ` · ${item.calificacion}` : null}
                </p>
                {item.detalle ? <p className="mt-1 text-sm text-ink-muted">{item.detalle}</p> : null}
                {item.pendiente.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.pendiente.map((p) => (
                      <PendingTag key={p}>{p}</PendingTag>
                    ))}
                  </div>
                ) : null}
              </div>
              <span
                className={
                  item.estado === "en_curso"
                    ? "shrink-0 rounded-full bg-accent-soft/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink"
                    : "shrink-0 rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink-muted"
                }
              >
                {item.estado === "en_curso" ? "En curso" : "Completada"}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
