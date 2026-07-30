/**
 * Modelo de datos del perfil profesional.
 *
 * Regla de veracidad: cualquier campo que no esté confirmado debe ir como
 * `null` / `[]` / `pendiente: true`, nunca relleno con contenido inventado.
 * Los componentes de la web muestran una etiqueta "Pendiente de validar"
 * quando corresponda; el generador de PDF omite por completo lo no confirmado.
 */

export type StatusFormacion = "completada" | "en_curso";

export interface Idioma {
  nombre: string;
  nivel: string;
}

export interface ExperienciaItem {
  id: string;
  empresa: string;
  sector: string | null;
  puesto: string | null;
  periodo: string | null;
  contexto: string;
  responsabilidades: string[];
  proyectos?: string[];
  resultados?: string[];
  competencias: string[];
  pendiente: string[];
}

export interface ProyectoDestacado {
  id: string;
  nombre: string;
  necesidad: string | null;
  intervencion: string;
  herramientas: string[];
  resultado: string | null;
  enlace?: string;
  pendiente: string[];
}

export interface FormacionItem {
  id: string;
  titulo: string;
  institucion: string | null;
  estado: StatusFormacion;
  detalle?: string;
  calificacion?: string;
  pendiente: string[];
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
  tipo: "email" | "linkedin" | "whatsapp" | "ubicacion";
  valor: string | null;
  etiqueta: string;
  disponible: boolean;
}

export interface PerfilProfesional {
  nombre: string;
  titular: string;
  propuestaValorBreve: string;
  ubicacion: string;
  resumenEjecutivo: string;
  pilares: PilarValor[];
  experiencia: ExperienciaItem[];
  proyectos: ProyectoDestacado[];
  competencias: GrupoCompetencias[];
  formacion: FormacionItem[];
  filosofia: {
    parrafos: string[];
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
