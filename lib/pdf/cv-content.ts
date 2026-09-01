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

  const formacionAts = [...perfil.formacion]
    .filter((f) => variant.formacionOrdenAts.includes(f.id))
    .sort((a, b) => variant.formacionOrdenAts.indexOf(a.id) - variant.formacionOrdenAts.indexOf(b.id))
    .map((f) => {
      const overridePeriodo = variant.formacionPeriodoOverride?.[f.id];
      return overridePeriodo !== undefined ? { ...f, periodo: overridePeriodo } : f;
    });

  return {
    nombre: perfil.nombre,
    titular: variant.titular,
    subtitulo: variant.subtitulo,
    tagline: perfil.tagline,
    ubicacion: variant.ubicacionOverride ?? perfil.ubicacion,
    disponibilidad: variant.disponibilidadOverride ?? perfil.disponibilidad,
    resumen: variant.resumen,
    resumenBreve: perfil.resumenBreve,
    contacto,
    competencias,
    competenciasPrioritarias: variant.competenciasPrioritarias,
    competenciasComplementarias: variant.competenciasComplementarias,
    herramientas: perfil.herramientas,
    herramientasCategorizadas: variant.herramientasCategorizadas,
    herramientasVisual: perfil.herramientasCategorizadas,
    herramientasNotaSecundaria: perfil.herramientasNotaSecundaria,
    notaSecundaria: variant.notaSecundaria,
    experiencia: perfil.experiencia,
    formacion: perfil.formacion,
    formacionAts,
    proyectos: perfil.proyectos,
    proyectosOverride: variant.proyectosOverride,
    idiomas: perfil.idiomas,
    nombreArchivo: variant.nombreArchivo,
    conFoto: variant.conFoto,
    bellotzaBullets: variant.bellotzaBullets,
    aisaBullets: variant.aisaBullets,
    etapaTitulo: variant.etapaTitulo,
    etapaTexto: variant.etapaTexto,
    etapaBullets: variant.etapaBullets,
    bloqueEspecifico: variant.bloqueEspecifico,
    hitos: [
      { label: "+20 años", detalle: "dirigiendo negocios propios" },
      { label: "3 establecimientos", detalle: "gestión integral en Bellotza" },
      { label: "Experiencia societaria", detalle: "y financiera (Promociones AISA)" },
      { label: "RR. HH. · IA", detalle: "formación aplicada a la gestión" },
    ],
  };
}

export type CvContent = ReturnType<typeof getCvContent>;
