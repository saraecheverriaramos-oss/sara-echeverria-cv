import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function PerfilEjecutivo() {
  return (
    <Section
      id="perfil"
      eyebrow="Perfil ejecutivo"
      title="Quién dirige, y desde dónde"
      lead={perfil.resumenEjecutivo}
    />
  );
}
