import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { FormacionItem } from "@/types/profile";

function grupoDe(item: FormacionItem): "finalizada" | "en_curso" | "continua" {
  if (item.id === "ia-herramientas-digitales") return "continua";
  if (item.estado === "completada") return "finalizada";
  return "en_curso";
}

const grupos: { key: ReturnType<typeof grupoDe>; label: string }[] = [
  { key: "finalizada", label: "Formación finalizada" },
  { key: "en_curso", label: "En curso" },
  { key: "continua", label: "Formación continua" },
];

export function Formacion() {
  return (
    <Section id="formacion" eyebrow="Formación" title="Formación académica y en curso">
      <div className="mt-14 space-y-12">
        {grupos.map((grupo) => {
          const items = perfil.formacion.filter((f) => grupoDe(f) === grupo.key);
          if (items.length === 0) return null;
          return (
            <div key={grupo.key}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{grupo.label}</p>
              <div className="mt-4 divide-y divide-line border-t border-line">
                {items.map((item, i) => (
                  <Reveal key={item.id} delay={i * 0.05}>
                    <div className="py-5">
                      <h3 className="font-serif text-lg">{item.titulo}</h3>
                      <p className="mt-1 text-sm text-ink-muted">
                        {[item.institucion, item.periodo].filter(Boolean).join(" · ")}
                      </p>
                      {item.detalle ? <p className="mt-1 text-sm text-ink-muted">{item.detalle}</p> : null}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
