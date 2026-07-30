import type { PerfilProfesional } from "@/types/profile";

/**
 * Fuente única de datos del CV de Sara Echeverría.
 *
 * — Todo lo que aparece aquí sin marcar como pendiente procede literalmente
 *   de la información facilitada por Sara. No se han añadido fechas, cifras,
 *   cargos, resultados ni datos de contacto no confirmados.
 * — Los arrays `pendiente` documentan qué falta por validar en cada bloque.
 * — `filosofia` es contenido editorial propuesto, pendiente de aprobación.
 *
 * Edita este archivo para actualizar la web y el PDF a la vez: ambos
 * consumen esta misma fuente.
 */
export const perfil: PerfilProfesional = {
  nombre: "Sara Echeverría",

  titular: "Dirección de personas con visión empresarial y capacidad real de transformación.",

  propuestaValorBreve:
    "Formación específica en Recursos Humanos y Prevención de Riesgos Laborales, sobre una trayectoria real dirigiendo negocios, equipos y proyectos digitales — incluida la aplicación práctica de inteligencia artificial a la gestión empresarial.",

  ubicacion: "País Vasco y Navarra",

  resumenEjecutivo:
    "Trayectoria construida desde la gestión real de negocios: como empresaria, autónoma y gerente ha asumido de forma directa la dirección administrativa, financiera, comercial y de personas de distintos proyectos, en sectores tan diversos como el comercio, la floristería, el interiorismo y la promoción inmobiliaria. Sobre esa base empresarial suma una formación específica en Dirección de Recursos Humanos (Máster ESIC, Trabajo Fin de Máster calificado con 9,5) y cursa actualmente el Máster Universitario en Prevención de Riesgos Laborales en la Universidad Pública de Navarra, junto con la habilitación docente para Formación Profesional. En sus proyectos más recientes — ART Motor Group y ATM Serges Group — ha participado en el desarrollo digital, web y organizativo, aplicando de forma práctica herramientas de inteligencia artificial a la gestión, la comunicación y la productividad.",

  pilares: [
    {
      titulo: "Personas y organización",
      descripcion:
        "Formación específica en Dirección de Recursos Humanos (Máster ESIC, TFM 9,5) aplicada sobre experiencia real dirigiendo personas dentro de la gestión directa de negocios.",
    },
    {
      titulo: "Dirección y gestión empresarial",
      descripcion:
        "Trayectoria como empresaria, autónoma y gerente, con responsabilidad directa sobre la gestión administrativa, financiera y comercial de distintos proyectos.",
    },
    {
      titulo: "Estrategia y ejecución",
      descripcion:
        "Capacidad demostrada de dirigir un proyecto de principio a fin: de la puesta en marcha a la gestión del día a día, en sectores tan distintos como el comercio, la floristería, el interiorismo y la promoción inmobiliaria.",
    },
    {
      titulo: "Transformación digital e IA",
      descripcion:
        "Participación en el desarrollo digital, web y organizativo de ART Motor Group y ATM Serges Group, con aplicación práctica de inteligencia artificial a procesos de gestión y comunicación.",
    },
    {
      titulo: "Prevención, formación y desarrollo",
      descripcion:
        "Máster Universitario en Prevención de Riesgos Laborales en curso (UPNA) y formación en curso para la habilitación docente en Formación Profesional.",
    },
  ],

  experiencia: [
    {
      id: "atm-serges-group",
      empresa: "ATM Serges Group",
      sector: null,
      puesto: null,
      periodo: "Reciente",
      contexto: "Participación reciente en el desarrollo digital, web y organizativo de ATM Serges Group.",
      responsabilidades: ["Desarrollo y gestión de la presencia web.", "Mejora organizativa del proyecto."],
      competencias: ["Transformación digital", "Creación de páginas web", "Inteligencia artificial aplicada"],
      pendiente: ["Cargo formal", "Fechas exactas", "Responsabilidades detalladas", "Resultados acreditados"],
    },
    {
      id: "art-motor-group",
      empresa: "ART Motor Group",
      sector: null,
      puesto: null,
      periodo: "Reciente",
      contexto: "Participación reciente en el desarrollo digital, web y organizativo de ART Motor Group.",
      responsabilidades: ["Desarrollo y gestión de la presencia web.", "Mejora organizativa del proyecto."],
      competencias: ["Transformación digital", "Creación de páginas web", "Inteligencia artificial aplicada"],
      pendiente: ["Cargo formal", "Fechas exactas", "Responsabilidades detalladas", "Resultados acreditados"],
    },
    {
      id: "promociones-aisa-cuatro",
      empresa: "Promociones AISA Cuatro S.L.",
      sector: "Promoción inmobiliaria",
      puesto: null,
      periodo: null,
      contexto: "Parte de la trayectoria empresarial y de gestión de Sara Echeverría.",
      responsabilidades: [],
      competencias: ["Gestión empresarial", "Dirección administrativa"],
      pendiente: ["Cargo", "Periodo", "Responsabilidades detalladas", "Proyectos y resultados"],
    },
    {
      id: "bellotza",
      empresa: "Bellotza",
      sector: null,
      puesto: null,
      periodo: null,
      contexto: "Parte de la trayectoria empresarial y de gestión de Sara Echeverría.",
      responsabilidades: [],
      competencias: ["Gestión empresarial", "Dirección comercial"],
      pendiente: ["Cargo", "Periodo", "Sector", "Responsabilidades detalladas", "Proyectos y resultados"],
    },
  ],

  proyectos: [
    {
      id: "atm-serges-group",
      nombre: "ATM Serges Group — desarrollo digital",
      necesidad: null,
      intervencion: "Desarrollo digital, web y organizativo del proyecto.",
      herramientas: ["Creación y gestión de páginas web", "Herramientas digitales"],
      resultado: null,
      pendiente: ["Necesidad o problema de partida", "Resultado confirmado", "Enlace público"],
    },
    {
      id: "art-motor-group",
      nombre: "ART Motor Group — desarrollo digital",
      necesidad: null,
      intervencion: "Desarrollo digital, web y organizativo del proyecto.",
      herramientas: ["Creación y gestión de páginas web", "Herramientas digitales"],
      resultado: null,
      pendiente: ["Necesidad o problema de partida", "Resultado confirmado", "Enlace público"],
    },
    {
      id: "activos-digitales",
      nombre: "Creación y gestión de páginas web y activos digitales",
      necesidad: null,
      intervencion: "Creación y gestión de páginas web y otros activos digitales en distintos proyectos.",
      herramientas: ["Desarrollo web", "Gestión de contenidos digitales"],
      resultado: null,
      pendiente: ["Proyectos concretos", "Enlaces", "Resultados confirmados"],
    },
    {
      id: "ia-aplicada",
      nombre: "Aplicación práctica de inteligencia artificial",
      necesidad: null,
      intervencion:
        "Aplicación práctica de inteligencia artificial a procesos empresariales, comunicación y productividad.",
      herramientas: ["Herramientas de inteligencia artificial generativa"],
      resultado: null,
      pendiente: ["Herramientas concretas", "Casos de uso documentados", "Resultados medibles"],
    },
  ],

  competencias: [
    {
      area: "Dirección y estrategia",
      items: ["Dirección de equipos", "Gestión empresarial", "Organización", "Negociación", "Toma de decisiones"],
    },
    {
      area: "Recursos Humanos",
      items: [
        "Estrategia de personas",
        "Selección",
        "Desarrollo",
        "Formación",
        "Relaciones laborales",
        "Cultura y organización",
      ],
    },
    {
      area: "Gestión",
      items: [
        "Dirección administrativa",
        "Gestión financiera",
        "Gestión comercial",
        "Coordinación de proveedores y proyectos",
      ],
    },
    {
      area: "Innovación",
      items: [
        "Inteligencia artificial aplicada",
        "Creación de páginas web",
        "Herramientas digitales",
        "Automatización y productividad",
      ],
    },
  ],

  formacion: [
    {
      id: "relaciones-laborales",
      titulo: "Grado en Relaciones Laborales",
      institucion: null,
      estado: "completada",
      pendiente: ["Institución", "Fechas"],
    },
    {
      id: "master-rrhh-esic",
      titulo: "Máster en Dirección de Recursos Humanos",
      institucion: "ESIC",
      estado: "completada",
      calificacion: "Trabajo Fin de Máster calificado con 9,5",
      pendiente: ["Fechas exactas"],
    },
    {
      id: "master-prl-upna",
      titulo: "Máster Universitario en Prevención de Riesgos Laborales",
      institucion: "Universidad Pública de Navarra (UPNA)",
      estado: "en_curso",
      pendiente: ["Fecha prevista de finalización"],
    },
    {
      id: "habilitacion-docente-fp",
      titulo: "Habilitación docente en Formación Profesional",
      institucion: null,
      estado: "en_curso",
      pendiente: ["Institución", "Fecha prevista de finalización"],
    },
    {
      id: "ia-herramientas-digitales",
      titulo: "Formación en inteligencia artificial y herramientas digitales",
      institucion: null,
      estado: "en_curso",
      detalle: "Formación continua con aplicación práctica en proyectos reales (ART Motor Group, ATM Serges Group).",
      pendiente: ["Certificaciones concretas"],
    },
  ],

  filosofia: {
    estado: "editorial_pendiente_aprobacion",
    parrafos: [
      "Dirigir personas no es una función aislada de Recursos Humanos: es una responsabilidad de negocio, la misma que se ejerce al frente de un proyecto propio.",
      "El liderazgo se demuestra en la gestión diaria — en las decisiones administrativas, financieras y comerciales que sostienen una organización — no en el discurso sobre el liderazgo.",
      "La innovación, incluida la inteligencia artificial, no sustituye el criterio: lo amplía. Se incorpora cuando resuelve un problema real de gestión, comunicación o productividad.",
      "La prevención de riesgos laborales parte de la misma idea: una organización bien dirigida cuida de las personas que la sostienen, no solo de sus resultados.",
    ],
  },

  contacto: [
    { tipo: "ubicacion", valor: "País Vasco y Navarra", etiqueta: "Ubicación profesional", disponible: true },
    { tipo: "email", valor: null, etiqueta: "Correo electrónico", disponible: false },
    { tipo: "linkedin", valor: null, etiqueta: "LinkedIn", disponible: false },
    { tipo: "whatsapp", valor: null, etiqueta: "WhatsApp profesional", disponible: false },
  ],

  idiomas: [],

  cv: {
    archivoDisponible: true,
    ruta: "/Sara-Echeverria-CV.pdf",
    nombreArchivo: "Sara-Echeverria-CV.pdf",
  },
};
