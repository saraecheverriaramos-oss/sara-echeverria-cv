import { Compass, Users, TrendingUp, Cpu } from "lucide-react";
import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const iconos = [Compass, Users, TrendingUp, Cpu];

export function Competencias() {
  return (
    <Section id="competencias" eyebrow="Competencias" title="Competencias desarrolladas en la gestión directa de negocios">
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {perfil.competencias.map((grupo, i) => {
          const Icon = iconos[i % iconos.length];
          return (
            <Reveal key={grupo.area} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft/40 text-accent">
                  <Icon size={18} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg">{grupo.area}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {grupo.items.slice(0, 6).map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
