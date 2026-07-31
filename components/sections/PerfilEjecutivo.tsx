import { Building2, Landmark, GraduationCap, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const hitos = [
  { icon: Users, label: "+20 años", detalle: "dirigiendo negocios propios" },
  { icon: Building2, label: "3 establecimientos", detalle: "gestión integral en Bellotza" },
  { icon: Landmark, label: "Experiencia societaria", detalle: "y financiera (Promociones AISA)" },
  { icon: GraduationCap, label: "RR. HH. · PRL · IA", detalle: "formación aplicada a la gestión" },
];

export function PerfilEjecutivo() {
  return (
    <Section id="perfil" eyebrow="Perfil ejecutivo" title="Dirección construida desde la experiencia empresarial">
      <div className="mt-8 max-w-2xl">
        <p className="text-lg leading-relaxed text-ink-muted">
          He construido mi trayectoria desde la dirección, la toma de decisiones y la gestión integral de negocios propios.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {hitos.map((hito, i) => (
          <Reveal key={hito.label} delay={i * 0.05} className="h-full">
            <div className="flex h-full flex-col gap-3 bg-paper p-6">
              <hito.icon size={20} aria-hidden className="text-accent" />
              <p className="font-serif text-xl leading-tight">{hito.label}</p>
              <p className="text-sm text-ink-muted">{hito.detalle}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
