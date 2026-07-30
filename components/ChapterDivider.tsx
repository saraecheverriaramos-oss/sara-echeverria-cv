import { Cpu, Rocket, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const ejes = [
  { icon: Users, label: "Personas" },
  { icon: Rocket, label: "Negocio" },
  { icon: Cpu, label: "Tecnología" },
];

export function ChapterDivider() {
  return (
    <div className="relative overflow-hidden bg-noche py-16 text-noche-ink sm:py-20">
      <div aria-hidden className="aurora-blob aurora-gold -left-24 top-1/2 h-72 w-72 -translate-y-1/2" />
      <div aria-hidden className="aurora-blob aurora-teal -right-24 top-1/2 h-72 w-72 -translate-y-1/2" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Parte 02</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
            <span className="gradient-text">Valor profesional, proyectos y contacto</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-8">
            {ejes.map((eje) => (
              <div key={eje.label} className="flex flex-col items-center gap-2 text-noche-ink-muted">
                <eje.icon size={20} aria-hidden className="text-accent" />
                <span className="text-xs uppercase tracking-[0.15em]">{eje.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
