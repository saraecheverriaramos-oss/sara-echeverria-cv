import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { PerfilEjecutivo } from "@/components/sections/PerfilEjecutivo";
import { PropuestaValor } from "@/components/sections/PropuestaValor";
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
        <Hero />
        <PerfilEjecutivo />
        <PropuestaValor />
        <Trayectoria />
        <Proyectos />
        <Competencias />
        <Formacion />
        <Filosofia />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
