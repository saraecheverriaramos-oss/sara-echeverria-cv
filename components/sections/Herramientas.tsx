import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Herramientas() {
  return (
    <Section
      id="herramientas"
      eyebrow="Entorno de trabajo"
      title="Herramientas y entorno digital"
      lead="Tecnología aplicada a la dirección, la organización, la comunicación y el desarrollo de proyectos."
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {perfil.herramientasEntornoDigital.map((grupo, i) => (
          <Reveal key={grupo.categoria} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-line p-6">
              <h3 className="font-serif text-lg text-accent">{grupo.categoria}</h3>

              {grupo.gruposPorNivel.map((nivelGrupo) => (
                <div key={nivelGrupo.nivel} className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted/70">{nivelGrupo.nivel}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {nivelGrupo.herramientas.map((item) => (
                      <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-ink-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted/70">Aplicación</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{grupo.aplicacion}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
