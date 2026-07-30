import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChapterDivider } from "@/components/ChapterDivider";
import { Hero } from "@/components/sections/Hero";
import { PerfilEjecutivo } from "@/components/sections/PerfilEjecutivo";
import { Trayectoria } from "@/components/sections/Trayectoria";
import { Proyectos } from "@/components/sections/Proyectos";
import { Competencias } from "@/components/sections/Competencias";
import { Formacion } from "@/components/sections/Formacion";
import { Filosofia } from "@/components/sections/Filosofia";
import { Contacto } from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Bloque 1 — Perfil y trayectoria */}
        <Hero />
        <PerfilEjecutivo />
        <Trayectoria />

        <ChapterDivider />

        {/* Bloque 2 — Valor profesional, proyectos y contacto */}
        <Competencias />
        <Proyectos />
        <Formacion />
        <Filosofia />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
