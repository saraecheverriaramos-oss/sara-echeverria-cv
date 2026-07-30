import type { CvVariant } from "@/types/profile";

/**
 * Variantes del CV en PDF. Cada variante solo cambia énfasis (titular,
 * resumen, orden de los bloques de competencias, palabras clave y nombre de
 * archivo) — nunca los hechos: experiencia, formación y proyectos son los
 * mismos para todas, tal como están en `data/profile.ts`.
 *
 * Añadir una variante nueva (p. ej. Transformación Digital o PRL) consiste
 * en añadir una entrada aquí; no requiere tocar el resto del proyecto.
 */
export const cvVariants: CvVariant[] = [
  {
    id: "general",
    etiqueta: "General directivo",
    nombreArchivo: "Sara-Echeverria-Ramos-CV.pdf",
    titular: "Dirección de Personas y Gestión Empresarial",
    resumen:
      "Sara Echeverría Ramos dirige negocios propios desde 2001. Como propietaria, empresaria autónoma y gerente, ha llevado la gestión integral de tres establecimientos comerciales — organización, compras, personal, atención al cliente y control económico — y, entre 2015 y 2020, la dirección societaria y financiera de Promociones AISA Cuatro S.L. como socia, administradora solidaria y gerente. Sobre esa base empresarial ha cursado la Diplomatura en Relaciones Laborales y el Máster en Dirección de Recursos Humanos y Gestión de Personas, y cursa el Máster Universitario en Prevención de Riesgos Laborales. En paralelo desarrolla páginas web y aplica de forma práctica la inteligencia artificial a la gestión, la comunicación y la productividad.",
    ordenCompetencias: ["Dirección y gestión", "Visión empresarial", "Recursos Humanos y personas", "Transformación digital"],
    palabrasClave: ["Gerencia", "Dirección de Operaciones", "Gestión empresarial", "Dirección administrativa", "Dirección de Personas"],
  },
  {
    id: "rrhh",
    etiqueta: "Dirección de Personas y RR. HH.",
    nombreArchivo: "Sara-Echeverria-Ramos-CV-RRHH.pdf",
    titular: "Dirección de Recursos Humanos con visión empresarial y capacidad de gestión",
    resumen:
      "Sara Echeverría Ramos combina formación específica en Dirección de Recursos Humanos y Gestión de Personas (ESIC Universidad) y en Relaciones Laborales (UPNA) con una trayectoria real dirigiendo personas dentro de la gestión directa de negocios propios: selección, organización del trabajo, coordinación de equipos y relaciones laborales, ejercidas como propietaria y gerente de Bellotza (2001–2023) y como socia y administradora de Promociones AISA Cuatro S.L. (2015–2020). Cursa además el Máster Universitario en Prevención de Riesgos Laborales. Aplica de forma práctica la inteligencia artificial a la comunicación interna, la organización y la productividad.",
    ordenCompetencias: ["Recursos Humanos y personas", "Dirección y gestión", "Transformación digital", "Visión empresarial"],
    palabrasClave: ["Dirección de Recursos Humanos", "Dirección de Personas", "Selección", "Formación y desarrollo", "Relaciones laborales"],
  },
  {
    id: "gerencia",
    etiqueta: "Gerencia y Dirección Administrativa",
    nombreArchivo: "Sara-Echeverria-Ramos-CV-Gerencia.pdf",
    titular: "Gerencia y Dirección Administrativa con trayectoria empresarial real",
    resumen:
      "Sara Echeverría Ramos ha dirigido negocios propios desde 2001: como propietaria, empresaria autónoma y gerente de Bellotza, con responsabilidad integral sobre tres establecimientos comerciales — gestión económica, compras, proveedores y personal — y, entre 2015 y 2020, como socia al 50 %, administradora solidaria, gerente y responsable financiera de Promociones AISA Cuatro S.L., con dirección societaria, financiera y de operaciones. Formación en Relaciones Laborales, Técnico Superior en Administración y Finanzas, y Máster en Dirección de Recursos Humanos y Gestión de Personas. Desarrolla además páginas web y aplica inteligencia artificial a la gestión y la productividad.",
    ordenCompetencias: ["Dirección y gestión", "Visión empresarial", "Transformación digital", "Recursos Humanos y personas"],
    palabrasClave: ["Gerencia", "Dirección Administrativa", "Dirección financiera", "Gestión empresarial", "Dirección de Operaciones"],
  },
];

export function getCvVariant(id: string): CvVariant {
  const variant = cvVariants.find((v) => v.id === id);
  if (!variant) {
    throw new Error(`Variante de CV no encontrada: ${id}`);
  }
  return variant;
}
