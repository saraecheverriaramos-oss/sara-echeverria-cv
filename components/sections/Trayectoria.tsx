import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Trayectoria() {
  return (
    <Section
      id="trayectoria"
      eyebrow="Trayectoria profesional"
      title="De la dirección de negocios propios a la transformación digital"
    >
      <ol className="mt-14 space-y-0 border-l border-line pl-8 sm:pl-10">
        {perfil.experiencia.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <li className="relative pb-12 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[2.6rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper sm:-left-[3.1rem]"
              />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">{item.periodo}</p>
              <h3 className="mt-1.5 font-serif text-xl">
                {item.empresa}
                <span className="text-ink-muted"> — {item.puesto}</span>
              </h3>
              <p className="mt-0.5 text-sm text-ink-muted">
                {[item.ubicacion, item.sector].filter(Boolean).join(" · ")}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{item.contexto}</p>

              {item.responsabilidades.length > 0 ? (
                <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-ink-muted marker:text-accent">
                  {item.responsabilidades.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              ) : null}

              {item.competencias.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.competencias.map((c) => (
                    <span key={c} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-muted">
                      {c}
                    </span>
                  ))}
                </div>
              ) : null}
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
