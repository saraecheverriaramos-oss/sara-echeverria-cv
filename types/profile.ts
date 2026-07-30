/**
 * Modelo de datos del perfil profesional.
 *
 * Regla de veracidad: ningún campo se rellena con datos no confirmados.
 * Lo no confirmado se deja como `null` / array vacío / campo ausente, y no
 * se renderiza en ningún sitio público (ni web ni PDF). El seguimiento de
 * qué falta por confirmar vive únicamente en comentarios de este archivo,
 * en `data/profile.ts` y en el README — nunca en un componente visible.
 */

export type StatusFormacion = "completada" | "en_curso" | "matriculada";

export interface Idioma {
  nombre: string;
  nivel: string;
}

export interface ExperienciaItem {
  id: string;
  empresa: string;
  ubicacion: string | null;
  sector: string | null;
  puesto: string;
  periodo: string;
  contexto: string;
  responsabilidades: string[];
  competencias: string[];
}

export interface ProyectoDestacado {
  id: string;
  nombre: string;
  periodo: string | null;
  intervencion: string;
  herramientas: string[];
  resultado: string | null;
  enlace?: string;
}

export interface FormacionItem {
  id: string;
  titulo: string;
  institucion: string | null;
  periodo: string | null;
  estado: StatusFormacion;
  detalle?: string;
}

export interface GrupoCompetencias {
  area: string;
  items: string[];
}

export interface PilarValor {
  titulo: string;
  descripcion: string;
}

export interface DatoContacto {
  tipo: "email" | "telefono" | "linkedin" | "ubicacion";
  valor: string | null;
  etiqueta: string;
  disponible: boolean;
  href?: string;
}

export interface PerfilProfesional {
  nombre: string;
  titular: string;
  propuestaValorBreve: string;
  ubicacion: string;
  disponibilidad: string;
  resumenEjecutivo: string;
  pilares: PilarValor[];
  experiencia: ExperienciaItem[];
  proyectos: ProyectoDestacado[];
  competencias: GrupoCompetencias[];
  herramientas: string[];
  formacion: FormacionItem[];
  filosofia: {
    fraseGeneral: string;
    ideas: string[];
    estado: "editorial_pendiente_aprobacion";
  };
  contacto: DatoContacto[];
  idiomas: Idioma[];
  cv: {
    archivoDisponible: boolean;
    ruta: string;
    nombreArchivo: string;
  };
}

/** Overrides que una variante de CV aplica sobre `perfil` para un objetivo concreto. */
export interface CvVariant {
  id: string;
  etiqueta: string;
  nombreArchivo: string;
  titular: string;
  resumen: string;
  ordenCompetencias: string[];
  palabrasClave: string[];
}
