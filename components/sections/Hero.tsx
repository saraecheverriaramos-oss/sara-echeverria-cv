import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { perfil } from "@/data/profile";
import { HeroMarquee } from "./HeroMarquee";

const rolesClave = ["Dirección de Personas", "Gestión Empresarial", "Transformación Digital", "Inteligencia Artificial Aplicada"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-noche text-noche-ink">
      <div className="lg:grid lg:min-h-[92vh] lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="relative order-1 h-[58vh] min-h-[24rem] lg:order-2 lg:h-auto">
          <Image
            src="/images/sara-echeverria-hero.jpg"
            alt="Sara Echeverría Ramos, profesional de Dirección de Personas y Gestión Empresarial"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 18%" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-noche via-noche/10 to-transparent lg:bg-gradient-to-r lg:from-noche/0 lg:via-transparent lg:to-transparent"
          />
        </div>

        <div className="relative order-2 flex flex-col justify-center gap-7 overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:order-1 lg:px-16 lg:py-0">
          <div aria-hidden className="aurora-blob aurora-gold -left-32 -top-32 h-[26rem] w-[26rem]" />
          <div aria-hidden className="aurora-blob aurora-teal -bottom-40 left-1/3 h-[22rem] w-[22rem]" />

          <p className="relative z-10 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-noche-line bg-white/5 px-2.5 py-1 text-center font-mono text-[0.65rem] uppercase tracking-[0.12em] text-noche-ink-muted backdrop-blur sm:px-3 sm:text-xs sm:tracking-[0.2em]">
            <MapPin size={12} aria-hidden className="shrink-0 text-accent" />
            {perfil.ubicacion}
          </p>

          <div className="relative z-10">
            <p className="font-serif text-lg text-noche-ink-muted">{perfil.nombre}</p>
            <h1 className="mt-1 max-w-xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.2rem]">
              <span className="gradient-text">{perfil.titular.split("|")[0].trim()}</span>
            </h1>
          </div>

          <p className="relative z-10 max-w-lg text-lg leading-relaxed text-noche-ink-muted">
            {perfil.propuestaValorBreve}
          </p>

          <div className="relative z-10 flex flex-wrap items-center gap-4">
            <a
              href="#trayectoria"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-focus px-6 py-3 text-sm font-medium text-noche transition-transform hover:-translate-y-0.5"
            >
              Ver trayectoria
              <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
            </a>
            {perfil.cv.archivoDisponible ? (
              <a
                href={perfil.cv.visual.ruta}
                download={perfil.cv.visual.nombreArchivo}
                className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-noche-ink"
              >
                <Download size={15} aria-hidden />
                Descargar CV
              </a>
            ) : null}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-medium text-noche-ink-muted underline decoration-noche-line decoration-1 underline-offset-4 transition-colors hover:text-accent"
            >
              Contactar
            </a>
          </div>

          {perfil.cv.archivoDisponible ? (
            <a
              href={perfil.cv.ats.ruta}
              download={perfil.cv.ats.nombreArchivo}
              className="relative z-10 -mt-3 inline-flex w-fit items-center gap-1.5 text-xs text-noche-ink-muted underline decoration-dotted decoration-1 underline-offset-4 transition-colors hover:text-accent"
            >
              Descargar CV ATS (para portales de empleo)
            </a>
          ) : null}

          <div className="relative z-10 border-t border-noche-line pt-6">
            <HeroMarquee items={rolesClave} dark />
          </div>
        </div>
      </div>
    </section>
  );
}
