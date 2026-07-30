import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { perfil } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { HeroMarquee } from "./HeroMarquee";

const rolesClave = [
  "Dirección de Personas",
  "Gestión Empresarial",
  "Prevención de Riesgos Laborales",
  "Transformación Digital",
  "Inteligencia Artificial Aplicada",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-line pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--color-accent-soft),transparent)] opacity-30"
      />

      <Container className="grid min-w-0 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="min-w-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            <MapPin size={12} aria-hidden className="text-accent" />
            {perfil.ubicacion}
          </p>

          <h1 className="max-w-2xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {perfil.titular}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{perfil.propuestaValorBreve}</p>
          <p className="mt-3 max-w-xl text-sm text-ink-muted/80">{perfil.disponibilidad}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#trayectoria"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Explorar trayectoria
              <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contactar
            </a>
            {perfil.cv.archivoDisponible ? (
              <a
                href={perfil.cv.ruta}
                download={perfil.cv.nombreArchivo}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent"
              >
                <Download size={15} aria-hidden />
                Descargar CV en PDF
              </a>
            ) : null}
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <HeroMarquee items={rolesClave} />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-line bg-paper-muted">
            <Image
              src="/images/sara-echeverria-hero.jpg"
              alt="Sara Echeverría Ramos, profesional de Dirección de Personas y Gestión Empresarial"
              fill
              priority
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 60vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "50% 18%" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
