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
    "Más de 20 años dirigiendo negocios propios, con formación en Recursos Humanos e inteligencia artificial aplicada a la gestión.",

  propuestaValorBreve:
    "Llevo más de dos décadas dirigiendo negocios propios — personas, finanzas, compras y clientes — combinadas con formación en Dirección de Recursos Humanos y aplicación práctica de inteligencia artificial a la gestión.",

  // Encabezado corto de disponibilidad geográfica (no un domicilio ni una
  // limitación de búsqueda): se muestra junto al contacto en la web y en los
  // PDF. La disponibilidad detallada va en `disponibilidad`.
  ubicacion: "Disponibilidad geográfica amplia",
  disponibilidad: "Disponibilidad para proyectos en Euskadi, Navarra y otras ubicaciones según la posición",

  resumenEjecutivo:
    "He desarrollado más de veinte años de experiencia en dirección y gestión integral de negocios propios. Como fundadora, propietaria y gerente de Bellotza (2001–2023), dirigí tres establecimientos y coordiné equipos de hasta 15 personas. Posteriormente, como socia al 50 %, administradora solidaria, gerente y responsable financiera de Promociones AISA Cuatro S.L., participé en la dirección societaria, económica y administrativa de un proyecto de construcción y promoción inmobiliaria. Soy diplomada en Relaciones Laborales y he completado el Máster en Dirección de Recursos Humanos y Gestión de Personas. En paralelo desarrollo páginas web y aplico de forma práctica la inteligencia artificial a la gestión, la comunicación y la productividad.",

  resumenBreve:
    "He desarrollado más de veinte años de experiencia en dirección y gestión integral de negocios propios. Como fundadora, propietaria y gerente de Bellotza (2001–2023), dirigí tres establecimientos y coordiné equipos de hasta 15 personas. Posteriormente, como socia al 50 %, administradora solidaria, gerente y responsable financiera de Promociones AISA Cuatro S.L., participé en la dirección societaria, económica y administrativa de un proyecto de construcción y promoción inmobiliaria. Soy diplomada en Relaciones Laborales y he completado el Máster en Dirección de Recursos Humanos y Gestión de Personas. Actualmente desarrollo páginas web y aplico inteligencia artificial a la gestión, la comunicación y la productividad.",

  pilares: [
    {
      titulo: "Personas y organización",
      descripcion:
        "Experiencia empresarial en dirección, gestión integral y coordinación de personas dentro de negocios propios.",
    },
    {
      titulo: "Dirección y gestión empresarial",
      descripcion:
        "Más de dos décadas como propietaria, empresaria autónoma y gerente, con responsabilidad directa sobre la gestión administrativa, financiera y comercial de negocios propios.",
    },
    {
      titulo: "Visión societaria y financiera",
      descripcion:
        "Socia al 50 %, administradora solidaria, gerente y responsable financiera de Promociones AISA Cuatro S.L., con responsabilidad sobre la gestión económica, contractual y de proveedores de un proyecto de construcción y promoción inmobiliaria.",
    },
    {
      titulo: "Transformación digital e IA",
      descripcion:
        "Desarrollo de páginas web y aplicación práctica de inteligencia artificial en proyectos como ART Motor Group y ATM Serges Group.",
    },
    {
      titulo: "Formación docente",
      descripcion: "Formación para la habilitación docente en Grados A, B y C del Sistema de Formación Profesional, en curso.",
    },
  ],

  experiencia: [
    {
      id: "consultoria-independiente",
      empresa: "Formación de posgrado, proyectos digitales e IA aplicada",
      ubicacion: "Oñati / Pamplona",
      sector: null,
      puesto: "Profesional independiente",
      periodo: "2024 — actualidad",
      contexto:
        "Formación especializada y desarrollo de proyectos digitales con los que amplío y actualizo una trayectoria empresarial consolidada.",
      responsabilidades: [
        "Finalización del Máster en Dirección de Recursos Humanos y Gestión de Personas en ESIC Universidad.",
        "Formación para la Habilitación de Docencia en Grados A, B y C del Sistema de Formación Profesional.",
        "Desarrollo y gestión de páginas web y contenidos digitales para proyectos empresariales.",
        "Aplicación de inteligencia artificial generativa a documentación, comunicación, organización y productividad.",
      ],
      competencias: ["Transformación digital", "Inteligencia artificial aplicada", "Formación de posgrado"],
    },
    {
      id: "transicion-profesional",
      empresa: "Transición y actualización profesional",
      ubicacion: null,
      sector: null,
      puesto: "Revisión y actualización de la trayectoria profesional",
      periodo: "2023 — 2024",
      contexto:
        "Tras finalizar una etapa empresarial de más de veinte años, inicié un proceso de revisión, actualización y orientación de mi trayectoria profesional. Este periodo lo centré en ampliar perspectivas, definir una nueva dirección profesional y preparar la integración de mi experiencia empresarial con la gestión de personas, la administración y las nuevas herramientas digitales.",
      responsabilidades: [
        "Transición profesional tras finalizar una etapa de más de veinte años de dirección y gestión de negocios propios.",
        "Revisión y actualización del perfil hacia posiciones de gerencia, administración, gestión de personas y transformación digital.",
        "Ampliación de conocimientos y preparación de una nueva etapa profesional dentro de una organización.",
      ],
      competencias: ["Actualización profesional", "Reorientación profesional"],
    },
    {
      id: "bellotza",
      empresa: "Bellotza",
      ubicacion: "Oñati, Gipuzkoa",
      sector: "Comercio minorista — floristería, regalo, moda, decoración e interiorismo",
      puesto: "Fundadora, propietaria y gerente",
      periodo: "2001 — 2023",
      contexto:
        "Creé y dirigí Bellotza durante más de veinte años, poniendo en marcha tres establecimientos y distintas líneas de actividad: floristería, artículos de regalo, moda, decoración e interiorismo. Coordiné equipos de hasta 15 personas y asumí la responsabilidad comercial, económica, administrativa, operativa y organizativa del negocio.",
      responsabilidades: [
        "Creación y puesta en marcha de tres establecimientos y distintas líneas de actividad.",
        "Dirección integral durante más de veinte años.",
        "Coordinación de equipos de hasta 15 personas.",
        "Responsabilidad comercial, económica, administrativa y operativa.",
        "Compras, proveedores, clientes y coordinación con asesorías.",
      ],
      competencias: ["Dirección y gestión empresarial", "Gestión comercial", "Dirección de personas"],
    },
    {
      id: "promociones-aisa-cuatro",
      empresa: "Promociones AISA Cuatro S.L.",
      ubicacion: null,
      sector: "Construcción y promoción inmobiliaria",
      puesto: "Socia al 50 %, administradora solidaria, gerente y responsable financiera",
      periodo: "2015 — 2020",
      contexto:
        "Como socia al 50 %, administradora solidaria, gerente y responsable financiera de Promociones AISA Cuatro S.L., participé directamente en la dirección societaria, económica y administrativa de un proyecto de construcción y promoción inmobiliaria.",
      responsabilidades: [
        "Participación directa en decisiones societarias, financieras y operativas.",
        "Gestión económica y administrativa de un proyecto de construcción y promoción inmobiliaria.",
        "Control de presupuestos, facturación, ingresos y gastos.",
        "Coordinación de proveedores y profesionales externos.",
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
    "Microsoft 365",
    "Excel",
    "Google Workspace",
    "Microsoft Planner",
    "Jira",
    "ChatGPT",
    "Claude",
    "Canva",
    "GitHub",
    "Vercel",
    "Hostinger",
    "WordPress",
  ],

  // Selección amplia y legible (16 herramientas + una nota de conocimientos
  // básicos) para el CV Visual principal. Todas confirmadas expresamente
  // por Sara; ningún nivel se presenta como superior al confirmado.
  herramientasCategorizadas: [
    { categoria: "Dirección, gestión y proyectos", items: ["Microsoft 365", "Excel", "Google Workspace", "Microsoft Planner", "Jira"] },
    {
      categoria: "IA, diseño y web",
      items: [
        "ChatGPT",
        "Claude",
        "Claude Code",
        "Canva",
        "GitHub",
        "Vercel",
        "Hostinger",
        "IONOS",
        "WordPress",
        "Google Search Console",
        "Google Business Profile",
      ],
    },
  ],
  herramientasNotaSecundaria:
    "Conocimientos básicos: Power BI, Factusol, Contaplus, A3, Sage y herramientas de administración laboral.",

  // Inventario completo de herramientas y entorno digital, para la sección
  // web "Herramientas y entorno digital". Cada categoría distingue
  // `gruposPorNivel` (herramientas agrupadas por su nivel real de uso,
  // nunca superior al confirmado por Sara) de `aplicacion` (una frase de
  // uso profesional): las capacidades y contextos de uso nunca se
  // presentan como si fueran nombres de herramientas. Niveles admitidos:
  // "Uso habitual", "Uso práctico", "Conocimientos básicos", "Uso con
  // apoyo de inteligencia artificial".
  herramientasEntornoDigital: [
    {
      categoria: "Dirección, análisis y productividad",
      gruposPorNivel: [
        { nivel: "Uso habitual", herramientas: ["Microsoft Excel", "Google Sheets", "Google Analytics", "Meta Business Suite"] },
        { nivel: "Conocimientos básicos", herramientas: ["Power BI"] },
      ],
      aplicacion:
        "Análisis y organización de información, tablas dinámicas, seguimiento de datos, reporting básico y apoyo a la toma de decisiones.",
    },
    {
      categoria: "Gestión de proyectos",
      gruposPorNivel: [
        { nivel: "Uso habitual", herramientas: ["Microsoft Planner", "Jira"] },
        { nivel: "Conocimientos básicos", herramientas: ["Trello", "Notion", "Asana", "ClickUp", "Google Tasks"] },
      ],
      aplicacion: "Planificación, seguimiento de tareas, organización de entregables y coordinación de proyectos.",
    },
    {
      categoria: "Administración y gestión empresarial",
      gruposPorNivel: [{ nivel: "Conocimientos básicos", herramientas: ["Factusol", "Contaplus", "A3", "Sage"] }],
      aplicacion: "Facturación, gestión administrativa, organización de información económica y coordinación con asesorías.",
    },
    {
      categoria: "Recursos Humanos y administración laboral",
      gruposPorNivel: [
        {
          nivel: "Conocimientos básicos",
          herramientas: ["A3 Nómina", "Sistema RED", "SILTRA", "Contrat@", "Certific@2", "DELTA"],
        },
      ],
      aplicacion:
        "Conocimientos básicos de herramientas de administración laboral: A3 Nómina, Sistema RED, SILTRA, Contrat@, Certific@2 y DELTA.",
    },
    {
      categoria: "Inteligencia artificial y automatización",
      gruposPorNivel: [{ nivel: "Uso habitual", herramientas: ["ChatGPT", "Claude", "Claude Code"] }],
      aplicacion:
        "Análisis y síntesis de información, redacción y revisión de documentos, organización de contenidos, apoyo a la investigación, desarrollo web asistido y productividad.",
    },
    {
      categoria: "Comunicación, documentación y contenidos",
      gruposPorNivel: [
        {
          nivel: "Uso habitual",
          herramientas: [
            "Canva",
            "Microsoft PowerPoint",
            "Microsoft Teams",
            "Microsoft Outlook",
            "Adobe Acrobat",
            "iLovePDF",
            "Google Drive",
            "Google Docs",
            "Google Calendar",
            "WhatsApp Desktop",
          ],
        },
      ],
      aplicacion:
        "Presentaciones, materiales corporativos, coordinación, organización documental, edición y preparación de PDF, comunicación y trabajo compartido.",
    },
    {
      categoria: "Desarrollo, publicación y presencia digital",
      gruposPorNivel: [
        {
          nivel: "Uso habitual",
          herramientas: ["GitHub", "Vercel", "Hostinger", "IONOS", "WordPress", "Google Search Console", "Google Business Profile", "LinkedIn Pages"],
        },
        { nivel: "Uso práctico con apoyo de inteligencia artificial", herramientas: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      ],
      aplicacion: "Creación y mantenimiento de páginas web, gestión de repositorios, despliegue, dominios, hosting, indexación y presencia digital.",
    },
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

  evolucionProfesional: {
    titulo: "Una etapa de evolución y actualización profesional",
    subtitulo:
      "Más de veinte años de experiencia empresarial, reforzados con formación de posgrado, capacidades digitales y una nueva perspectiva profesional.",
    bloques: [
      {
        titulo: "Experiencia consolidada",
        texto:
          "Más de veinte años de dirección, gestión económica, actividad comercial, coordinación de personas y toma de decisiones en negocios propios.",
      },
      {
        titulo: "Actualización intensiva",
        texto: "Formación de posgrado, docencia, herramientas digitales, desarrollo web e inteligencia artificial aplicada.",
      },
      {
        titulo: "Nueva aportación",
        texto:
          "Preparación para trasladar experiencia empresarial, madurez profesional y capacidades renovadas a una organización en crecimiento.",
      },
    ],
    cierre:
      "Preparada para aportar una trayectoria empresarial consolidada y conocimientos renovados en una nueva etapa de responsabilidad dentro de una organización.",
  },

  filosofia: {
    estado: "editorial_pendiente_aprobacion",
    fraseGeneral:
      "He gestionado personas, clientes, proveedores y recursos económicos dentro del mismo negocio. Por eso entiendo la dirección de personas como parte de la estrategia empresarial.",
    ideas: [
      "La gestión de personas debe estar conectada con los objetivos, la organización y la sostenibilidad del negocio.",
      "El conocimiento laboral aporta rigor a las decisiones empresariales y protege a las personas y a la organización.",
      "La tecnología y la inteligencia artificial deben simplificar el trabajo y reforzar el criterio profesional, no sustituirlo.",
    ],
  },

  contacto: [
    { tipo: "ubicacion", valor: null, etiqueta: "Ubicación profesional", disponible: false },
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
      ruta: "/Sara-Echeverria-Ramos-CV-General-Directivo-ATS.pdf",
      nombreArchivo: "Sara-Echeverria-Ramos-CV-General-Directivo-ATS.pdf",
    },
  },
};
