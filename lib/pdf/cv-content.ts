import { perfil } from "@/data/profile";

/**
 * Proyección del perfil para salidas públicas (vista de impresión y PDF
 * descargable): conserva solo lo confirmado. Los campos no confirmados se
 * omiten en lugar de mostrarse como "Pendiente de validar" — ese aviso es
 * exclusivo de la web, para uso interno durante el desarrollo.
 */
export function getCvContent() {
  // La ubicación se expone por separado como `ubicacion`; aquí solo quedan
  // los canales de contacto directo (email, LinkedIn, WhatsApp) confirmados.
  const contacto = perfil.contacto.filter((c) => c.disponible && c.valor && c.tipo !== "ubicacion");

  const experiencia = perfil.experiencia.map((item) => ({
    empresa: item.empresa,
    sector: item.sector,
    puesto: item.puesto,
    periodo: item.periodo,
    contexto: item.contexto,
    responsabilidades: item.responsabilidades,
  }));

  const proyectos = perfil.proyectos.map((p) => ({
    nombre: p.nombre,
    intervencion: p.intervencion,
    herramientas: p.herramientas,
    resultado: p.resultado,
  }));

  const formacion = perfil.formacion.map((f) => ({
    titulo: f.titulo,
    institucion: f.institucion,
    estado: f.estado,
    calificacion: f.calificacion ?? null,
    detalle: f.detalle ?? null,
  }));

  return {
    nombre: perfil.nombre,
    titular: perfil.titular,
    ubicacion: perfil.ubicacion,
    resumen: perfil.resumenEjecutivo,
    contacto,
    competencias: perfil.competencias,
    experiencia,
    formacion,
    proyectos,
    idiomas: perfil.idiomas,
  };
}

export type CvContent = ReturnType<typeof getCvContent>;
