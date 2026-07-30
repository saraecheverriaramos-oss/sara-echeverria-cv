import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { getCvContent } from "@/lib/pdf/cv-content";
import { perfil } from "@/data/profile";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Currículum imprimible",
  description: `Versión imprimible del currículum de ${perfil.nombre}, optimizada para PDF y sistemas ATS.`,
};

export default function CvPdfPage() {
  const cv = getCvContent();

  return (
    <div className="min-h-screen bg-paper-muted print:bg-white">
      <div className="no-print sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper/90 px-6 py-3 backdrop-blur">
        <Link href="/#inicio" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">
          <ArrowLeft size={15} aria-hidden />
          Volver a la web
        </Link>
        <div className="flex items-center gap-3">
          {perfil.cv.archivoDisponible ? (
            <a
              href={perfil.cv.ruta}
              download={perfil.cv.nombreArchivo}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent"
            >
              <Download size={15} aria-hidden />
              Descargar PDF
            </a>
          ) : null}
          <PrintButton />
        </div>
      </div>

      <main className="mx-auto max-w-[210mm] bg-white px-10 py-10 text-[#111] shadow-sm print:shadow-none print:px-0 print:py-0 sm:px-14 sm:py-14">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">{cv.nombre}</h1>
          <p className="mt-1 text-lg text-[#333]">{cv.titular}</p>
          <p className="mt-2 text-sm text-[#555]">
            {cv.ubicacion}
            {cv.contacto.length > 0 ? " · " : null}
            {cv.contacto.map((c) => c.valor).join(" · ")}
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#555]">Perfil profesional</h2>
          <p className="mt-2 text-[15px] leading-relaxed">{cv.resumen}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#555]">Competencias clave</h2>
          <div className="mt-2 space-y-1.5 text-[15px]">
            {cv.competencias.map((grupo) => (
              <p key={grupo.area}>
                <span className="font-semibold">{grupo.area}:</span> {grupo.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#555]">Experiencia profesional</h2>
          <div className="mt-2 space-y-5">
            {cv.experiencia.map((item) => (
              <div key={item.empresa} className="break-inside-avoid">
                <p className="text-[15px] font-semibold">
                  {item.empresa}
                  {item.puesto ? ` — ${item.puesto}` : ""}
                </p>
                <p className="text-sm text-[#555]">
                  {[item.periodo, item.sector].filter(Boolean).join(" · ")}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed">{item.contexto}</p>
                {item.responsabilidades.length > 0 ? (
                  <ul className="mt-1 list-disc pl-5 text-[15px] leading-relaxed">
                    {item.responsabilidades.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#555]">Formación</h2>
          <div className="mt-2 space-y-2 text-[15px]">
            {cv.formacion.map((item) => (
              <p key={item.titulo}>
                <span className="font-semibold">{item.titulo}</span>
                {item.institucion ? `, ${item.institucion}` : ""}
                {item.estado === "en_curso" ? " (en curso)" : ""}
                {item.calificacion ? ` — ${item.calificacion}` : ""}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#555]">Proyectos destacados</h2>
          <div className="mt-2 space-y-2 text-[15px]">
            {cv.proyectos.map((p) => (
              <p key={p.nombre}>
                <span className="font-semibold">{p.nombre}:</span> {p.intervencion}
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
