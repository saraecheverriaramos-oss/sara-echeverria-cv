import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChapterDivider } from "@/components/ChapterDivider";
import { Hero } from "@/components/sections/Hero";
import { PerfilEjecutivo } from "@/components/sections/PerfilEjecutivo";
import { Trayectoria } from "@/components/sections/Trayectoria";
import { EvolucionProfesional } from "@/components/sections/EvolucionProfesional";
import { Proyectos } from "@/components/sections/Proyectos";
import { Competencias } from "@/components/sections/Competencias";
import { Herramientas } from "@/components/sections/Herramientas";
import { Formacion } from "@/components/sections/Formacion";
import { Filosofia } from "@/components/sections/Filosofia";
import { Contacto } from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-noche focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal">
        {/* Bloque 1 — Perfil y trayectoria */}
        <Hero />
        <PerfilEjecutivo />
        <Trayectoria />
        <EvolucionProfesional />

        <ChapterDivider />

        {/* Bloque 2 — Valor profesional, proyectos y contacto */}
        <Competencias />
        <Herramientas />
        <Proyectos />
        <Formacion />
        <Filosofia />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
