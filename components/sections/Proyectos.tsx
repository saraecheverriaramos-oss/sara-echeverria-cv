import { ArrowUpRight, Globe, Sparkles } from "lucide-react";
import { perfil } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-noche py-20 text-noche-ink sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Proyectos destacados
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Desarrollo digital y aplicación práctica de IA</h2>
            <div className="section-sep mt-6 ml-0" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {perfil.proyectos.map((proyecto, i) => (
            <Reveal key={proyecto.id} delay={i * 0.05} className={spans[i] ?? "lg:col-span-6"}>
              <article className="glass-card flex h-full flex-col rounded-2xl p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-accent">
                  {proyecto.enlace ? <Globe size={17} aria-hidden /> : <Sparkles size={17} aria-hidden />}
                </span>
                <h3 className="mt-5 font-serif text-xl">{proyecto.nombre}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-noche-ink-muted">{proyecto.intervencion}</p>

                {proyecto.herramientas.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proyecto.herramientas.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-noche-line bg-white/5 px-2.5 py-0.5 text-xs text-noche-ink-muted"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                ) : null}

                {proyecto.enlace ? (
                  <a
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-noche-line px-4 py-2 text-sm text-noche-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Ver proyecto
                    <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
