import type { PerfilProfesional } from "@/types/profile";

/**
 * Fuente única de datos del CV de Sara Echeverría Ramos.
 *
 * — Todo lo que aparece aquí procede literalmente de la información
 *   confirmada por Sara. No se han añadido fechas, cifras, cargos,
 *   resultados económicos ni calificaciones académicas no facilitadas.
 * — Ningún componente público (web o PDF) debe mostrar avisos de tipo
 *   "Pendiente de validar": lo no confirmado se omite (campo ausente o
 *   `null`), nunca se rellena ni se señala visualmente al visitante.
 * — `filosofia.estado` es una marca interna (contenido editorial, pendiente
 *   de aprobación de Sara) y no se renderiza en la web.
 *
 * Pendiente de confirmar (seguimiento interno, no público):
 * - LinkedIn (se oculta hasta disponer de la URL exacta).
 * - Fotografía profesional real (placeholder preparado en el hero).
 * - Institución y fechas exactas de la habilitación docente en FP.
 * - Fechas exactas de la Diplomatura en Relaciones Laborales y del Técnico
 *   Superior en Administración y Finanzas.
 * - Enlaces reales de artmotorgroup.es / atmsergesgroup.es: confirmar que
 *   siguen siendo correctos antes de cada despliegue.
 *
 * Edita este archivo para actualizar la web y todos los PDF a la vez.
 */
export const perfil: PerfilProfesional = {
  nombre: "Sara Echeverría Ramos",

  titular: "Dirección de Personas y Gestión Empresarial | Experiencia empresarial real, transformación digital e IA aplicada.",

  tagline:
    "Más de 20 años dirigiendo negocios propios, con formación en Recursos Humanos, Prevención de Riesgos Laborales e inteligencia artificial aplicada a la gestión.",

  propuestaValorBreve:
    "Más de dos décadas dirigiendo negocios propios — personas, finanzas, compras y clientes — combinadas con formación en Dirección de Recursos Humanos y Prevención de Riesgos Laborales, y aplicación práctica de inteligencia artificial a la gestión.",

  ubicacion: "Oñati · Pamplona",
  disponibilidad: "Disponibilidad para proyectos en Euskadi, Navarra y otras ubicaciones según la posición",

  resumenEjecutivo:
    "Sara Echeverría Ramos dirige negocios propios desde 2001. Como propietaria, empresaria autónoma y gerente, ha llevado la gestión integral de tres establecimientos comerciales — organización, compras, personal, atención al cliente y control económico — y, entre 2015 y 2020, la dirección societaria y financiera de Promociones AISA Cuatro S.L. como socia, administradora solidaria y gerente. Sobre esa base empresarial ha cursado la Diplomatura en Relaciones Laborales (UPNA) y el Máster en Dirección de Recursos Humanos y Gestión de Personas (ESIC Universidad), y cursa el Máster Universitario en Prevención de Riesgos Laborales. En paralelo desarrolla páginas web y aplica de forma práctica la inteligencia artificial a la gestión, la comunicación y la productividad. Su objetivo actual es incorporar esa experiencia, formación y capacidad de gestión a una organización.",

  resumenBreve:
    "Sara Echeverría Ramos dirige negocios propios desde 2001: gestión integral de tres establecimientos como propietaria y gerente, y dirección societaria y financiera de Promociones AISA Cuatro S.L. (2015–2020). Formación en Relaciones Laborales y en Dirección de Recursos Humanos y Gestión de Personas, con el Máster Universitario en Prevención de Riesgos Laborales en curso. Desarrolla páginas web y aplica de forma práctica la inteligencia artificial a la gestión, la comunicación y la productividad.",

  pilares: [
    {
      titulo: "Personas y organización",
      descripcion:
        "Formación en Dirección de Recursos Humanos y Gestión de Personas (ESIC Universidad) aplicada sobre experiencia real dirigiendo personas dentro de la gestión directa de negocios.",
    },
    {
      titulo: "Dirección y gestión empresarial",
      descripcion:
        "Más de dos décadas como propietaria, empresaria autónoma y gerente, con responsabilidad directa sobre la gestión administrativa, financiera y comercial de negocios propios.",
    },
    {
      titulo: "Visión societaria y financiera",
      descripcion:
        "Socia, administradora solidaria y gerente de Promociones AISA Cuatro S.L., con responsabilidad sobre la gestión económica, contractual y de proveedores del proyecto.",
    },
    {
      titulo: "Transformación digital e IA",
      descripcion:
        "Desarrollo de páginas web y aplicación práctica de inteligencia artificial en proyectos como ART Motor Group y ATM Serges Group.",
    },
    {
      titulo: "Prevención, formación y desarrollo",
      descripcion:
        "Máster Universitario en Prevención de Riesgos Laborales y habilitación docente en Formación Profesional, ambos en curso.",
    },
  ],

  experiencia: [
    {
      id: "consultoria-independiente",
      empresa: "Consultoría independiente — desarrollo digital e IA aplicada",
      ubicacion: "Oñati / Pamplona",
      sector: null,
      puesto: "Profesional independiente",
      periodo: "2024 — actualidad",
      contexto:
        "Etapa activa de especialización profesional: formación de posgrado, desarrollo de páginas web y aplicación práctica de inteligencia artificial a proyectos empresariales.",
      responsabilidades: [
        "Creación y gestión de páginas web para proyectos empresariales.",
        "Aplicación de inteligencia artificial a contenidos, comunicación, gestión y productividad.",
        "Desarrollo y organización de activos digitales.",
        "Formación de posgrado en Dirección de Recursos Humanos, Prevención de Riesgos Laborales y habilitación docente.",
      ],
      competencias: ["Transformación digital", "Inteligencia artificial aplicada", "Formación continua"],
    },
    {
      id: "bellotza",
      empresa: "Bellotza",
      ubicacion: "Oñati, Gipuzkoa",
      sector: "Comercio minorista — floristería, regalo, moda, decoración e interiorismo",
      puesto: "Propietaria, empresaria autónoma y gerente",
      periodo: "2001 — 2023",
      contexto: "Creación, puesta en marcha y dirección integral de tres establecimientos comerciales.",
      responsabilidades: [
        "Dirección comercial, económica y administrativa de los tres establecimientos.",
        "Compras, negociación y coordinación con proveedores.",
        "Selección, coordinación y organización del trabajo de personas.",
        "Atención y fidelización de clientes, escaparatismo e interiorismo comercial.",
        "Coordinación con asesorías laborales, fiscales y contables.",
      ],
      competencias: ["Dirección y gestión empresarial", "Gestión comercial", "Dirección de personas"],
    },
    {
      id: "promociones-aisa-cuatro",
      empresa: "Promociones AISA Cuatro S.L.",
      ubicacion: null,
      sector: "Promoción y gestión inmobiliaria",
      puesto: "Socia al 50 %, administradora solidaria, gerente y responsable financiera",
      periodo: "2015 — 2020",
      contexto:
        "Dirección societaria, financiera y administrativa del proyecto, con participación directa en la toma de decisiones.",
      responsabilidades: [
        "Gestión financiera: control de ingresos, gastos, presupuestos y facturación.",
        "Coordinación de operaciones, proveedores y profesionales externos.",
        "Gestión documental, contractual y societaria.",
        "Coordinación con asesorías y seguimiento de proyectos.",
      ],
      competencias: ["Dirección societaria", "Gestión financiera", "Dirección administrativa"],
    },
  ],

  proyectos: [
    {
      id: "art-motor-group",
      nombre: "ART Motor Group",
      periodo: "Reciente",
      intervencion:
        "Desarrollo y gestión de la página web, organización de contenidos digitales y del inventario de vehículos, y apoyo en la organización comercial del proyecto.",
      herramientas: ["Desarrollo web", "Gestión de contenidos digitales", "Inteligencia artificial generativa"],
      resultado: null,
      enlace: "https://www.artmotorgroup.es",
    },
    {
      id: "atm-serges-group",
      nombre: "ATM Serges Group",
      periodo: "Reciente",
      intervencion:
        "Desarrollo y gestión de la página web corporativa, organización de contenidos comerciales y apoyo en la comunicación de servicios de cajeros automáticos y terminales de pago.",
      herramientas: ["Desarrollo web", "Comunicación corporativa", "Inteligencia artificial generativa"],
      resultado: null,
      enlace: "https://www.atmsergesgroup.es",
    },
    {
      id: "activos-digitales",
      nombre: "Creación y gestión de páginas web y activos digitales",
      periodo: null,
      intervencion: "Creación y gestión de páginas web y otros activos digitales para distintos proyectos empresariales.",
      herramientas: ["GitHub", "Hostinger", "Vercel"],
      resultado: null,
    },
    {
      id: "ia-aplicada",
      nombre: "Aplicación práctica de inteligencia artificial",
      periodo: null,
      intervencion: "Aplicación práctica de inteligencia artificial a la gestión, la comunicación, los contenidos y la productividad.",
      herramientas: ["Inteligencia artificial generativa", "Automatización de tareas"],
      resultado: null,
    },
  ],

  competencias: [
    {
      area: "Dirección y gestión",
      items: [
        "Dirección y gestión empresarial",
        "Organización",
        "Planificación",
        "Toma de decisiones",
        "Gestión económica y financiera",
        "Dirección administrativa",
        "Coordinación operativa",
        "Negociación",
        "Gestión de proveedores",
        "Resolución de incidencias",
      ],
    },
    {
      area: "Recursos Humanos y personas",
      items: [
        "Dirección y coordinación de personas",
        "Selección",
        "Entrevistas",
        "Organización del trabajo",
        "Formación y desarrollo",
        "Relaciones laborales",
        "Comunicación interna",
        "Cultura organizativa",
        "Detección de necesidades",
        "Coordinación con asesorías laborales",
      ],
    },
    {
      area: "Transformación digital",
      items: [
        "Desarrollo de páginas web",
        "Organización de contenidos digitales",
        "Inteligencia artificial aplicada",
        "Herramientas digitales",
        "Automatización",
        "Comunicación digital",
        "Productividad",
        "Desarrollo de activos corporativos",
      ],
    },
    {
      area: "Visión empresarial",
      items: [
        "Creación y puesta en marcha de negocios",
        "Gestión integral",
        "Orientación a cliente",
        "Visión comercial",
        "Control económico",
        "Capacidad de ejecución",
        "Adaptación a distintos sectores",
      ],
    },
  ],

  herramientas: [
    "Microsoft Excel",
    "Microsoft Word",
    "Google Workspace",
    "Canva",
    "GitHub",
    "Hostinger",
    "Vercel",
    "Herramientas de inteligencia artificial generativa",
  ],

  formacion: [
    {
      id: "relaciones-laborales",
      titulo: "Diplomatura en Relaciones Laborales",
      institucion: "Universidad Pública de Navarra (UPNA)",
      periodo: null,
      estado: "completada",
    },
    {
      id: "tecnico-superior-af",
      titulo: "Técnico Superior en Administración y Finanzas",
      institucion: "Colegio Técnico Carlos III, Pamplona",
      periodo: null,
      estado: "completada",
    },
    {
      id: "master-rrhh-esic",
      titulo: "Máster en Dirección de Recursos Humanos y Gestión de Personas",
      institucion: "ESIC Universidad — Campus de Pamplona",
      periodo: "2025–2026",
      estado: "completada",
    },
    {
      id: "master-prl-upna",
      titulo: "Máster Universitario en Prevención de Riesgos Laborales",
      institucion: "Universidad Pública de Navarra (UPNA)",
      periodo: "2026–2027",
      estado: "matriculada",
      detalle:
        "Especialidades del programa: Seguridad en el Trabajo, Higiene Industrial y Ergonomía y Psicosociología Aplicada.",
    },
    {
      id: "habilitacion-docente-fp",
      titulo: "Habilitación para la Docencia en Grados A, B y C del Sistema de Formación Profesional",
      institucion: null,
      periodo: null,
      estado: "en_curso",
    },
    {
      id: "ia-herramientas-digitales",
      titulo: "Formación continua en inteligencia artificial y herramientas digitales",
      institucion: null,
      periodo: null,
      estado: "en_curso",
      detalle: "Aplicación práctica en creación de páginas web, automatización, organización, comunicación y productividad.",
    },
  ],

  filosofia: {
    estado: "editorial_pendiente_aprobacion",
    fraseGeneral: "Dirigir personas es una decisión de negocio, no solo una función de Recursos Humanos.",
    ideas: [
      "Las personas forman parte de la estrategia del negocio.",
      "La gestión requiere criterio y ejecución.",
      "La tecnología debe resolver problemas reales.",
    ],
  },

  contacto: [
    { tipo: "ubicacion", valor: "Oñati · Pamplona", etiqueta: "Ubicación profesional", disponible: true },
    {
      tipo: "email",
      valor: "saraecheverriaramos@gmail.com",
      etiqueta: "Correo electrónico",
      disponible: true,
      href: "mailto:saraecheverriaramos@gmail.com",
    },
    {
      tipo: "telefono",
      valor: "610 733 488",
      etiqueta: "Teléfono",
      disponible: true,
      href: "tel:+34610733488",
    },
    { tipo: "linkedin", valor: null, etiqueta: "LinkedIn", disponible: false },
  ],

  idiomas: [
    { nombre: "Inglés", nivel: "Conocimientos básicos, sin acreditación oficial" },
    { nombre: "Euskera", nivel: "Conocimientos básicos, sin acreditación oficial" },
  ],

  cv: {
    archivoDisponible: true,
    visual: {
      ruta: "/Sara-Echeverria-Ramos-CV-Visual.pdf",
      nombreArchivo: "Sara-Echeverria-Ramos-CV-Visual.pdf",
    },
    ats: {
      ruta: "/Sara-Echeverria-Ramos-CV-ATS.pdf",
      nombreArchivo: "Sara-Echeverria-Ramos-CV-ATS.pdf",
    },
  },
};
