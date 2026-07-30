import { perfil } from "@/data/profile";
import { getCvVariant } from "@/data/cv-variants";
import type { GrupoCompetencias } from "@/types/profile";

/**
 * Proyección del perfil para salidas públicas (vista de impresión y PDF
 * descargable). Todo el contenido es confirmado: no hay campos de
 * seguimiento interno ("pendiente") en esta capa.
 *
 * `variantId` cambia solo el énfasis (titular, resumen, orden de las áreas
 * de competencias y palabras clave) — la experiencia, formación y proyectos
 * son siempre los mismos hechos.
 */
export function getCvContent(variantId: string = "general") {
  const variant = getCvVariant(variantId);

  const contacto = perfil.contacto.filter((c) => c.disponible && c.valor && c.tipo !== "ubicacion");

  const competencias: GrupoCompetencias[] = [...perfil.competencias].sort(
    (a, b) => variant.ordenCompetencias.indexOf(a.area) - variant.ordenCompetencias.indexOf(b.area),
  );

  return {
    nombre: perfil.nombre,
    titular: variant.titular,
    tagline: perfil.tagline,
    ubicacion: perfil.ubicacion,
    disponibilidad: perfil.disponibilidad,
    resumen: variant.resumen,
    resumenBreve: perfil.resumenBreve,
    contacto,
    competencias,
    herramientas: perfil.herramientas,
    experiencia: perfil.experiencia,
    formacion: perfil.formacion,
    proyectos: perfil.proyectos,
    idiomas: perfil.idiomas,
    nombreArchivo: variant.nombreArchivo,
    hitos: [
      { label: "+20 años", detalle: "dirigiendo negocios propios" },
      { label: "3 establecimientos", detalle: "gestión integral en Bellotza" },
      { label: "Experiencia societaria", detalle: "y financiera (Promociones AISA)" },
      { label: "RR. HH. · PRL · IA", detalle: "formación aplicada a la gestión" },
    ],
  };
}

export type CvContent = ReturnType<typeof getCvContent>;
