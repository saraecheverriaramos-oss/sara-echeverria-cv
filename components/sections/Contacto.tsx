import { Download, Mail, MapPin, Phone } from "lucide-react";
import { perfil } from "@/data/profile";
import { cvVariants } from "@/data/cv-variants";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

const iconos = {
  email: Mail,
  telefono: Phone,
  ubicacion: MapPin,
} as const;

export function Contacto() {
  const canales = perfil.contacto.filter((c) => c.disponible && c.valor);
  const email = perfil.contacto.find((c) => c.tipo === "email");
  const telefono = perfil.contacto.find((c) => c.tipo === "telefono");

  return (
    <section id="contacto" className="scroll-mt-24 bg-noche py-20 text-noche-ink sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">Contacto</p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Hablemos del siguiente proyecto que dirigir
            </h2>
            <div className="section-sep mt-6" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-5">
              {canales.map((dato) => {
                const Icon = iconos[dato.tipo as keyof typeof iconos] ?? MapPin;
                return (
                  <li key={dato.tipo} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-noche-line text-accent">
                      <Icon size={16} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-noche-ink-muted">{dato.etiqueta}</p>
                      {dato.href ? (
                        <a href={dato.href} className="text-noche-ink hover:text-accent">
                          {dato.valor}
                        </a>
                      ) : (
                        <p className="text-noche-ink">{dato.valor}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              {email?.href ? (
                <a
                  href={email.href}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-focus px-6 py-3 text-sm font-medium text-noche"
                >
                  <Mail size={15} aria-hidden />
                  Enviar correo
                </a>
              ) : null}
              {telefono?.href ? (
                <a
                  href={telefono.href}
                  className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-noche-ink"
                >
                  <Phone size={15} aria-hidden />
                  Llamar
                </a>
              ) : null}
            </div>

            {perfil.idiomas.length > 0 ? (
              <p className="mt-10 border-t border-noche-line pt-6 text-sm text-noche-ink-muted">
                <span className="font-medium text-noche-ink">Idiomas: </span>
                {perfil.idiomas.map((i) => `${i.nombre} (${i.nivel})`).join(" · ")}
              </p>
            ) : (
              <div className="mt-10 border-t border-noche-line pt-6" />
            )}

            <div className={perfil.idiomas.length > 0 ? "mt-6" : ""}>
              <p className="text-sm font-medium text-noche-ink">Descargar CV</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {perfil.cv.archivoDisponible ? (
                  <a
                    href={perfil.cv.visual.ruta}
                    download={perfil.cv.visual.nombreArchivo}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-focus px-4 py-2 text-xs font-medium text-noche"
                  >
                    <Download size={13} aria-hidden />
                    CV visual (principal)
                  </a>
                ) : null}
                {cvVariants.map((variant) => (
                  <a
                    key={variant.id}
                    href={`/${variant.nombreArchivo}`}
                    download={variant.nombreArchivo}
                    className="inline-flex items-center gap-2 rounded-full border border-noche-line px-4 py-2 text-xs text-noche-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Download size={13} aria-hidden />
                    {variant.etiqueta}
                  </a>
                ))}
              </div>
              <p className="mt-2 text-xs text-noche-ink-muted">
                El CV visual es para enviar directamente a empresas y contactos. Las versiones ATS están pensadas
                para portales de empleo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm dark />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
