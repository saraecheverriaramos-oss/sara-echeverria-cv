import { Mail, MapPin, Phone } from "lucide-react";
import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

const iconos = {
  email: Mail,
  telefono: Phone,
  ubicacion: MapPin,
} as const;

export function Contacto() {
  const canales = perfil.contacto.filter((c) => c.disponible && c.valor);

  return (
    <Section id="contacto" eyebrow="Contacto" title="Hablemos del siguiente proyecto que dirigir">
      <div className="mt-14 grid gap-14 lg:grid-cols-2">
        <Reveal>
          <ul className="space-y-5">
            {canales.map((dato) => {
              const Icon = iconos[dato.tipo as keyof typeof iconos] ?? MapPin;
              return (
                <li key={dato.tipo} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                    <Icon size={16} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm text-ink-muted">{dato.etiqueta}</p>
                    {dato.href ? (
                      <a href={dato.href} className="text-ink hover:text-accent">
                        {dato.valor}
                      </a>
                    ) : (
                      <p className="text-ink">{dato.valor}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          {perfil.idiomas.length > 0 ? (
            <p className="mt-10 border-t border-line pt-6 text-sm text-ink-muted">
              <span className="font-medium text-ink">Idiomas: </span>
              {perfil.idiomas.map((i) => `${i.nombre} (${i.nivel})`).join(" · ")}
            </p>
          ) : null}
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
