import type { CvVariant } from "@/types/profile";

/**
 * Variantes del CV ejecutivo/ATS en PDF (General Directivo, Dirección
 * Empresarial y Gestión de Personas, Gerencia y Dirección Administrativa).
 * Cada variante cambia énfasis y redacción — titular, resumen, viñetas de
 * experiencia, competencias curadas, orden de formación, bloque específico
 * de página 2, descripciones de proyectos y palabras clave — pero nunca los
 * hechos: mismos puestos, mismas fechas, misma formación y mismos proyectos
 * que en `data/profile.ts`. Las viñetas de experiencia de cada variante son
 * una reformulación de las mismas responsabilidades ya confirmadas, con el
 * foco propio de esa variante; no se inventan funciones, departamentos,
 * equipos, cifras ni resultados económicos.
 *
 * Añadir una variante nueva consiste en añadir una entrada aquí; no
 * requiere tocar el resto del proyecto.
 */
export const cvVariants: CvVariant[] = [
  {
    id: "general",
    etiqueta: "General Directivo ATS",
    nombreArchivo: "Sara-Echeverria-Ramos-CV-General-Directivo-ATS.pdf",
    titular: "Dirección y Gestión Empresarial",
    subtitulo: "Administración · Personas · Operaciones · Transformación digital",
    resumen:
      "Cuento con más de veinte años de experiencia en creación, dirección y gestión integral de negocios propios. He asumido responsabilidades económicas, administrativas, comerciales y operativas, además de coordinar equipos de hasta 15 personas. Como socia al 50 %, administradora solidaria, gerente y responsable financiera de una empresa de construcción y promoción inmobiliaria, he participado directamente en la dirección societaria y económica de un proyecto con un volumen aproximado de 1.000.000 €. Soy diplomada en Relaciones Laborales y he completado el Máster en Dirección de Recursos Humanos y Gestión de Personas. Actualmente desarrollo proyectos digitales y aplico inteligencia artificial a la organización, la comunicación y la productividad empresarial.",
    ordenCompetencias: ["Dirección y gestión", "Visión empresarial", "Recursos Humanos y personas", "Transformación digital"],
    palabrasClave: ["Gerencia", "Dirección de Operaciones", "Gestión empresarial", "Dirección administrativa", "Dirección de Personas"],
    conFoto: false,
    competenciasPrioritarias: [
      {
        area: "Dirección y operaciones",
        items: [
          "Dirección empresarial",
          "Gestión administrativa y financiera",
          "Planificación y control",
          "Coordinación operativa",
          "Negociación y proveedores",
          "Resolución de incidencias",
        ],
      },
      {
        area: "Desarrollo de negocio",
        items: ["Creación y gestión de negocios", "Estrategia comercial", "Orientación al cliente", "Toma de decisiones", "Transformación digital"],
      },
    ],
    competenciasComplementarias: [
      { area: "Personas y organización", items: ["Coordinación de personas", "Relaciones laborales", "Coordinación con asesorías"] },
      { area: "Transformación digital", items: ["Desarrollo web", "IA generativa aplicada", "Productividad"] },
    ],
    etapaTitulo: "Actualización directiva y proyectos digitales",
    etapaTexto:
      "Actualización profesional tras más de veinte años de dirección y gestión de negocios propios, orientada a integrar experiencia empresarial, gestión de personas y nuevas herramientas digitales.",
    etapaBullets: [
      "Máster en Dirección de Recursos Humanos y Gestión de Personas, finalizado.",
      "Desarrollo y gestión de páginas web y contenidos para proyectos empresariales.",
      "Aplicación de IA generativa a documentación, comunicación, organización y productividad.",
      "Formación en prevención de riesgos laborales y docencia para Formación Profesional.",
    ],
    bellotzaBullets: [
      "Creación y dirección integral de tres establecimientos.",
      "Coordinación de equipos de hasta 15 personas.",
      "Toma de decisiones comerciales, económicas y administrativas.",
      "Compras, negociación y proveedores.",
      "Coordinación con asesorías laborales, fiscales y contables.",
      "Dirección empresarial continuada durante más de veinte años.",
    ],
    aisaBullets: [
      "Dirección societaria y participación en decisiones estratégicas y operativas.",
      "Responsabilidad financiera y administrativa en un proyecto de construcción y promoción inmobiliaria con un volumen aproximado de 1.000.000 €.",
      "Control de presupuestos, ingresos, gastos y facturación.",
      "Coordinación de proveedores, profesionales externos y seguimiento del proyecto.",
    ],
    proyectosOverride: {},
    bloqueEspecifico: {
      titulo: "Aportación directiva",
      texto:
        "Una trayectoria empresarial consolidada, reforzada con conocimientos actuales y capacidad para adaptarse a nuevas formas de gestión y trabajo.",
    },
    formacionOrdenAts: ["master-rrhh-esic", "master-prl-upna", "relaciones-laborales", "tecnico-superior-af", "habilitacion-docente-fp"],
    herramientasCategorizadas: [
      { categoria: "Gestión y productividad", items: ["Excel", "Microsoft 365", "Google Workspace"] },
      { categoria: "Gestión de proyectos", items: ["Microsoft Planner", "Jira"] },
      { categoria: "IA y análisis", items: ["ChatGPT", "Claude", "Power BI (básico)"] },
      { categoria: "Diseño y desarrollo web", items: ["Canva", "GitHub", "Vercel", "WordPress"] },
    ],
  },
  {
    id: "rrhh",
    etiqueta: "Dirección Empresarial y Gestión de Personas",
    nombreArchivo: "Sara-Echeverria-Ramos-CV-Direccion-Personas-RRHH.pdf",
    titular: "Dirección Empresarial y Gestión de Personas",
    resumen:
      "Cuento con más de veinte años de experiencia en dirección empresarial y gestión directa de personas en negocios propios. Como fundadora, propietaria y gerente de Bellotza, coordiné equipos de hasta 15 personas y asumí la organización del trabajo, la incorporación y la formación práctica, además de la coordinación con la asesoría laboral. Soy diplomada en Relaciones Laborales y he completado el Máster en Dirección de Recursos Humanos y Gestión de Personas. Aporto una visión de la gestión de personas conectada con las necesidades del negocio, la transformación digital y la aplicación práctica de inteligencia artificial.",
    ordenCompetencias: ["Recursos Humanos y personas", "Dirección y gestión", "Transformación digital", "Visión empresarial"],
    palabrasClave: ["Dirección de Recursos Humanos", "Dirección de Personas", "Selección", "Formación y desarrollo", "Relaciones laborales"],
    conFoto: true,
    competenciasPrioritarias: [
      {
        area: "Personas y organización",
        items: [
          "Coordinación de personas",
          "Selección e incorporación",
          "Organización del trabajo",
          "Formación práctica",
          "Relaciones laborales",
          "Coordinación con asesorías",
        ],
      },
      {
        area: "Gestión empresarial",
        items: ["Dirección de negocio", "Planificación", "Toma de decisiones", "Gestión administrativa", "Coordinación operativa", "Proveedores"],
      },
    ],
    competenciasComplementarias: [
      { area: "Transformación digital", items: ["Desarrollo web", "IA generativa aplicada", "Comunicación digital"] },
      { area: "Visión empresarial", items: ["Gestión integral", "Visión comercial", "Capacidad de ejecución"] },
    ],
    etapaTitulo: "Especialización en gestión de personas y actualización digital",
    etapaTexto:
      "Proceso de actualización profesional orientado a conectar más de veinte años de dirección empresarial y coordinación de personas con formación especializada en Recursos Humanos, Relaciones Laborales, prevención y herramientas digitales.",
    etapaBullets: [
      "Máster en Dirección de Recursos Humanos y Gestión de Personas, finalizado en ESIC Universidad.",
      "Profundización en relaciones laborales, organización, selección, formación y gestión de personas.",
      "Matriculación en el Máster Universitario en Prevención de Riesgos Laborales.",
      "Formación docente para Formación Profesional.",
      "Aplicación de herramientas digitales e IA a comunicación, documentación y organización del trabajo.",
    ],
    bellotzaBullets: [
      "Coordinación de equipos de hasta 15 personas en tres establecimientos.",
      "Organización del trabajo, incorporación y formación práctica de las personas del negocio.",
      "Coordinación con la asesoría laboral.",
      "Integración de la gestión de personas con las necesidades comerciales y organizativas del negocio.",
    ],
    aisaBullets: [
      "Participación en decisiones societarias, financieras y administrativas como socia y administradora solidaria.",
      "Proyecto de construcción y promoción inmobiliaria con un volumen aproximado de 1.000.000 €.",
      "Coordinación con proveedores, asesorías y profesionales externos.",
      "Organización de información, documentación y seguimiento del proyecto.",
    ],
    proyectosOverride: {
      "art-motor-group":
        "Desarrollo y gestión de la web, organización de contenidos e inventario digital de vehículos y apoyo a la organización comercial del proyecto.",
      "atm-serges-group":
        "Desarrollo y gestión de la web corporativa, estructuración de contenidos comerciales y presentación digital de servicios de cajeros automáticos y terminales de pago.",
    },
    bloqueEspecifico: {
      titulo: "Propuesta de valor en personas",
      texto:
        "Experiencia empresarial y conocimientos actualizados para abordar la gestión de personas desde las necesidades concretas del negocio.",
    },
    formacionOrdenAts: ["master-rrhh-esic", "relaciones-laborales", "master-prl-upna", "habilitacion-docente-fp", "tecnico-superior-af"],
    herramientasCategorizadas: [
      { categoria: "Gestión y productividad", items: ["Microsoft 365", "Excel", "PowerPoint", "Outlook", "Microsoft Teams", "Google Workspace"] },
      { categoria: "Gestión de proyectos", items: ["Microsoft Planner", "Jira"] },
      { categoria: "IA y diseño", items: ["ChatGPT", "Claude", "Canva"] },
    ],
    notaSecundaria: "Conocimientos básicos de A3 Nómina, Sistema RED, SILTRA, Contrat@, Certific@2 y DELTA.",
  },
  {
    id: "gerencia",
    etiqueta: "Gerencia y Dirección Administrativa",
    nombreArchivo: "Sara-Echeverria-Ramos-CV-Gerencia-Direccion-Administrativa.pdf",
    titular: "Gerencia · Dirección Administrativa y Financiera",
    resumen:
      "Cuento con más de veinte años de experiencia en gerencia, dirección administrativa y gestión integral de negocios propios. He asumido responsabilidad directa sobre administración, control económico, facturación, compras, gestión de proveedores, operaciones y coordinación de equipos de hasta 15 personas en tres establecimientos comerciales. Como socia al 50 %, administradora solidaria, gerente y responsable financiera de una empresa de construcción y promoción inmobiliaria, he participado en la dirección societaria, financiera y administrativa de un proyecto con un volumen aproximado de 1.000.000 €. Mi formación incluye la Diplomatura en Relaciones Laborales, el título de Técnico Superior en Administración y Finanzas y el Máster en Dirección de Recursos Humanos y Gestión de Personas, además de formación práctica en desarrollo web e inteligencia artificial aplicada a la gestión.",
    ordenCompetencias: ["Dirección y gestión", "Visión empresarial", "Transformación digital", "Recursos Humanos y personas"],
    palabrasClave: ["Gerencia", "Dirección Administrativa", "Dirección financiera", "Gestión empresarial", "Dirección de Operaciones"],
    conFoto: true,
    competenciasPrioritarias: [
      {
        area: "Gerencia y administración",
        items: [
          "Dirección administrativa",
          "Gestión económica y financiera",
          "Presupuestos y facturación",
          "Organización documental",
          "Coordinación operativa",
          "Proveedores y asesorías",
        ],
      },
      {
        area: "Gestión empresarial",
        items: ["Dirección de negocio", "Planificación", "Toma de decisiones", "Negociación", "Control de gestión", "Resolución de incidencias"],
      },
    ],
    competenciasComplementarias: [
      { area: "Transformación digital", items: ["Desarrollo web", "IA generativa aplicada", "Gestión documental digital"] },
      { area: "Personas y coordinación", items: ["Coordinación de personas", "Selección e incorporación", "Relaciones laborales"] },
    ],
    etapaTitulo: "Actualización en gestión, digitalización e IA aplicada",
    etapaTexto:
      "Actualización profesional tras más de veinte años de gerencia y gestión integral, orientada a incorporar herramientas digitales, inteligencia artificial y nuevas capacidades de organización.",
    etapaBullets: [
      "Reorientación del perfil tras más de veinte años de gerencia y gestión integral.",
      "Actualización en Dirección de Recursos Humanos, administración, prevención y organización.",
      "Desarrollo de páginas web, contenidos, inventarios y activos digitales.",
      "Aplicación de inteligencia artificial a documentación, comunicación y productividad.",
      "Preparación para trasladar experiencia empresarial y capacidades renovadas a una nueva organización.",
    ],
    bellotzaBullets: [
      "Dirección administrativa y económica de tres establecimientos durante más de veinte años.",
      "Administración general, control económico y facturación.",
      "Compras, negociación y proveedores.",
      "Coordinación de equipos de hasta 15 personas.",
      "Coordinación con asesorías fiscales, contables y laborales.",
    ],
    aisaBullets: [
      "Participación directa en decisiones societarias, financieras y operativas.",
      "Responsabilidad financiera y administrativa sobre un proyecto de construcción y promoción inmobiliaria con un volumen aproximado de 1.000.000 €.",
      "Control de presupuestos, facturación, ingresos y gastos.",
      "Gestión documental, contractual y administrativa de la sociedad y del proyecto.",
      "Coordinación con proveedores, asesorías y profesionales externos.",
    ],
    proyectosOverride: {
      "art-motor-group":
        "Desarrollo y gestión de la web, organización de contenidos e inventario digital de vehículos y apoyo a la estructura comercial y presencia digital del proyecto.",
      "atm-serges-group":
        "Desarrollo y gestión de la web corporativa, estructuración de contenidos comerciales y presentación digital de servicios de cajeros automáticos y terminales de pago.",
    },
    bloqueEspecifico: {
      titulo: "Aportación a la organización",
      texto:
        "Experiencia consolidada en administración y gestión empresarial, reforzada con formación reciente, competencias digitales y una visión actualizada de la organización.",
    },
    formacionOrdenAts: ["tecnico-superior-af", "relaciones-laborales", "master-rrhh-esic", "master-prl-upna", "habilitacion-docente-fp"],
    herramientasCategorizadas: [
      { categoria: "Gestión y administración", items: ["Excel", "Microsoft 365", "Outlook", "Google Workspace", "Factusol", "A3"] },
      { categoria: "Organización y análisis", items: ["Microsoft Planner", "Jira", "Power BI (básico)"] },
      { categoria: "Documentación e IA", items: ["Adobe Acrobat", "ChatGPT", "Claude"] },
    ],
  },
];

export function getCvVariant(id: string): CvVariant {
  const variant = cvVariants.find((v) => v.id === id);
  if (!variant) {
    throw new Error(`Variante de CV no encontrada: ${id}`);
  }
  return variant;
}
