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
  tagline: string;
  propuestaValorBreve: string;
  ubicacion: string;
  disponibilidad: string;
  resumenEjecutivo: string;
  resumenBreve: string;
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
  /** Selección curada de herramientas agrupadas, para el CV Visual principal (espacio limitado). */
  herramientasCategorizadas: { categoria: string; items: string[] }[];
  /** Nota secundaria de conocimientos básicos (no confirmados como uso habitual) para el CV Visual. */
  herramientasNotaSecundaria: string;
  /**
   * Inventario completo de herramientas y entorno digital, para la sección
   * web "Herramientas y entorno digital". Cada categoría agrupa sus
   * herramientas por `nivel` real de uso (nunca superior al confirmado por
   * Sara) y añade `aplicacion`, una frase de uso profesional — las
   * capacidades y contextos de uso nunca se presentan como si fueran
   * nombres de herramientas.
   */
  herramientasEntornoDigital: {
    categoria: string;
    gruposPorNivel: { nivel: string; herramientas: string[] }[];
    aplicacion: string;
  }[];
  /** Sección web que enmarca la etapa 2023–actualidad como evolución profesional, no como una experiencia laboral literal. */
  evolucionProfesional: {
    titulo: string;
    subtitulo: string;
    bloques: { titulo: string; texto: string }[];
    cierre: string;
  };
  cv: {
    archivoDisponible: boolean;
    visual: { ruta: string; nombreArchivo: string };
    ats: { ruta: string; nombreArchivo: string };
  };
}

/** Overrides que una variante de CV aplica sobre `perfil` para un objetivo concreto. */
export interface CvVariant {
  id: string;
  etiqueta: string;
  nombreArchivo: string;
  titular: string;
  /** Línea secundaria opcional bajo el titular (p. ej. "Administración · Personas · Operaciones · Transformación digital"). */
  subtitulo?: string;
  /** Sustituye `perfil.ubicacion` solo para esta variante, sin afectar a la web ni a las demás variantes. */
  ubicacionOverride?: string;
  /** Sustituye `perfil.disponibilidad` (texto del pie de la página 2 del PDF ejecutivo) solo para esta variante. */
  disponibilidadOverride?: string;
  resumen: string;
  ordenCompetencias: string[];
  palabrasClave: string[];
  /** Si esta variante del PDF lleva fotografía en la cabecera. */
  conFoto: boolean;
  /** Viñetas de Bellotza reformuladas con el énfasis propio de esta variante (mismos hechos, distinta redacción). */
  bellotzaBullets: string[];
  /** Viñetas de Promociones AISA Cuatro reformuladas con el énfasis propio de esta variante. */
  aisaBullets: string[];
  /** Título profesional de la etapa 2023–actualidad (transición + formación/proyectos), adaptado al enfoque de esta variante. */
  etapaTitulo: string;
  /** Párrafo breve de introducción a la etapa 2023–actualidad, adaptado al enfoque de esta variante. */
  etapaTexto: string;
  /** Viñetas de la etapa 2023–actualidad adaptadas al enfoque de esta variante. */
  etapaBullets: string[];
  /** Bloque breve de página 2 con información relevante específica de esta variante. */
  bloqueEspecifico: { titulo: string; texto: string };
  /** Herramientas agrupadas por categoría, priorizadas según el enfoque de esta variante del CV ejecutivo/ATS. */
  herramientasCategorizadas: { categoria: string; items: string[] }[];
  /** Nota secundaria opcional (conocimientos básicos, de menor peso visual) bajo la lista principal de herramientas. */
  notaSecundaria?: string;
  /** IDs de `formacion` a mostrar (y en qué orden) en los CV ejecutivos/ATS de esta variante. */
  formacionOrdenAts: string[];
  /**
   * Sustituye el `periodo` de una entrada concreta de `formacion` solo para esta
   * variante (por id). Usar `""` para ocultar el periodo manteniendo el estado
   * ("Finalizado."/"Matriculada."/"En curso."); usar `null` para ocultar también el estado.
   */
  formacionPeriodoOverride?: Record<string, string | null>;
  /** Competencias prioritarias curadas para el CV ejecutivo/ATS (página 1): 2 grupos, entre 10 y 12 conceptos en total. */
  competenciasPrioritarias: GrupoCompetencias[];
  /** Competencias complementarias curadas para el CV ejecutivo/ATS (página 2): entre 5 y 6 conceptos en total, sin duplicar las prioritarias. */
  competenciasComplementarias: GrupoCompetencias[];
  /** Descripciones de proyectos digitales (ART Motor Group / ATM Serges Group) específicas de esta variante, por id de proyecto. Si un id no está aquí, se usa la descripción por defecto de `data/profile.ts`. */
  proyectosOverride: Record<string, string>;
}
