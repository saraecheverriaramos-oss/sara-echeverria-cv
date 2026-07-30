import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const etiquetaEstado: Record<string, string> = {
  en_curso: "En curso",
  matriculada: "Matriculada",
  completada: "Completada",
};

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
                  {[item.institucion, item.periodo].filter(Boolean).join(" · ")}
                </p>
                {item.detalle ? <p className="mt-1 text-sm text-ink-muted">{item.detalle}</p> : null}
              </div>
              <span
                className={
                  item.estado === "completada"
                    ? "shrink-0 rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink-muted"
                    : "shrink-0 rounded-full bg-accent-soft/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink"
                }
              >
                {etiquetaEstado[item.estado]}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
