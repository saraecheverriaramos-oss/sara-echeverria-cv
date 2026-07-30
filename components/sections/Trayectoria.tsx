import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TrayectoriaItem } from "./TrayectoriaItem";

export function Trayectoria() {
  return (
    <Section
      id="trayectoria"
      eyebrow="Trayectoria profesional"
      title="De la dirección de negocios propios a la transformación digital"
      lead="Toca cada etapa para ver el detalle: puesto, áreas de responsabilidad y competencias."
    >
      <ol className="mt-14 space-y-0 border-l border-line pl-8 sm:pl-10">
        {perfil.experiencia.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <TrayectoriaItem item={item} defaultOpen />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
