import { ExternalLink, Mail, MapPin, MessageCircle } from "lucide-react";
import { perfil } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PendingTag } from "@/components/ui/PendingTag";

const iconos = {
  email: Mail,
  linkedin: ExternalLink,
  whatsapp: MessageCircle,
  ubicacion: MapPin,
} as const;

export function Contacto() {
  return (
    <Section id="contacto" eyebrow="Contacto" title="Hablemos del siguiente proyecto que dirigir">
      <div className="mt-14 grid gap-14 lg:grid-cols-2">
        <Reveal>
          <ul className="space-y-5">
            {perfil.contacto.map((dato) => {
              const Icon = iconos[dato.tipo];
              return (
                <li key={dato.tipo} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                    <Icon size={16} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm text-ink-muted">{dato.etiqueta}</p>
                    {dato.disponible && dato.valor ? (
                      <p className="text-ink">{dato.valor}</p>
                    ) : (
                      <PendingTag>Pendiente de incorporar</PendingTag>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="space-y-4" aria-describedby="form-pendiente">
            <div>
              <label htmlFor="nombre" className="text-sm text-ink-muted">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                className="mt-1 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus-visible:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email-contacto" className="text-sm text-ink-muted">
                Correo electrónico
              </label>
              <input
                id="email-contacto"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus-visible:border-accent"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="text-sm text-ink-muted">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="mt-1 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus-visible:border-accent"
              />
            </div>
            <button
              type="submit"
              disabled
              aria-disabled
              className="w-full cursor-not-allowed rounded-full bg-ink/40 px-6 py-3 text-sm font-medium text-paper"
            >
              Enviar mensaje
            </button>
            <p id="form-pendiente" className="text-xs text-ink-muted">
              Formulario pendiente de activar: falta un correo de destino confirmado para su envío.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
