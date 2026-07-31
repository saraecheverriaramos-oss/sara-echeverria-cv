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
      "Profesional con más de veinte años de experiencia en creación, dirección y gestión integral de negocios propios. Ha asumido responsabilidades económicas, administrativas, comerciales, operativas y de coordinación de personas, además de dirección societaria y financiera en el ámbito inmobiliario. Diplomada en Relaciones Laborales y Máster en Dirección de Recursos Humanos y Gestión de Personas. Actualmente desarrolla proyectos digitales y aplica inteligencia artificial a la organización, la comunicación y la productividad empresarial.",
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
    etapaTitulo: "Proyectos independientes de desarrollo digital e IA aplicada",
    etapaBullets: [
      "Desarrollo y gestión de páginas web empresariales.",
      "Organización de contenidos, información y activos digitales.",
      "Aplicación de IA generativa a comunicación, documentación y productividad.",
    ],
    bellotzaBullets: [
      "Dirección integral de tres establecimientos, con responsabilidad sobre actividad comercial, administración, gestión económica y operaciones.",
      "Compras, negociación y coordinación de proveedores.",
      "Organización y coordinación del trabajo de las personas vinculadas al negocio.",
      "Toma de decisiones comerciales, económicas y administrativas.",
      "Coordinación con asesorías laborales, fiscales y contables.",
      "Gestión continuada de tres establecimientos durante más de dos décadas.",
    ],
    aisaBullets: [
      "Dirección societaria y participación en decisiones estratégicas y operativas.",
      "Gestión financiera: ingresos, gastos, presupuestos y facturación.",
      "Coordinación de proveedores, profesionales externos y seguimiento de proyectos.",
      "Gestión documental, contractual y administrativa.",
    ],
    proyectosOverride: {},
    bloqueEspecifico: {
      titulo: "Aportación directiva",
      texto:
        "Experiencia integrando visión comercial, control económico, organización de personas y coordinación operativa en la gestión de negocios propios.",
    },
    formacionOrdenAts: ["master-rrhh-esic", "master-prl-upna", "relaciones-laborales", "tecnico-superior-af", "habilitacion-docente-fp"],
  },
  {
    id: "rrhh",
    etiqueta: "Dirección Empresarial y Gestión de Personas",
    nombreArchivo: "Sara-Echeverria-Ramos-CV-Direccion-Personas-RRHH.pdf",
    titular: "Dirección Empresarial y Gestión de Personas",
    resumen:
      "Profesional con más de veinte años de experiencia en dirección empresarial y gestión directa de personas en negocios propios. Como propietaria y gerente ha asumido la selección, incorporación, organización del trabajo, coordinación cotidiana y relación con asesorías laborales. Diplomada en Relaciones Laborales y Máster en Dirección de Recursos Humanos y Gestión de Personas, aporta una visión de RR. HH. conectada con las necesidades del negocio, la transformación digital y la aplicación práctica de inteligencia artificial.",
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
    etapaTitulo: "Proyectos digitales y especialización en Dirección de Personas",
    etapaBullets: [
      "Desarrollo y gestión de páginas web y contenidos para proyectos empresariales.",
      "Aplicación de inteligencia artificial a comunicación, organización, documentación y productividad.",
      "Finalización del Máster en Dirección de Recursos Humanos y Gestión de Personas.",
      "Matriculación en el Máster Universitario en Prevención de Riesgos Laborales.",
      "Formación docente en curso.",
    ],
    bellotzaBullets: [
      "Selección, incorporación y organización del trabajo de las personas vinculadas a los tres establecimientos.",
      "Coordinación cotidiana y comunicación directa con las personas del negocio.",
      "Formación práctica en procedimientos, producto, atención al cliente y operativa.",
      "Coordinación con asesorías laborales para documentación, contratación e incidencias.",
      "Integración de la gestión de personas con las necesidades comerciales, económicas y organizativas del negocio.",
    ],
    aisaBullets: [
      "Coordinación con proveedores, asesorías y profesionales externos vinculados a la actividad.",
      "Organización de información, documentación y seguimiento entre las partes implicadas.",
      "Participación en decisiones societarias, financieras y administrativas como socia y administradora solidaria.",
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
        "Experiencia gestionando personas desde una visión integral del negocio, conectando organización, costes, clientes, proveedores y actividad comercial.",
    },
    formacionOrdenAts: ["master-rrhh-esic", "relaciones-laborales", "master-prl-upna", "habilitacion-docente-fp", "tecnico-superior-af"],
  },
  {
    id: "gerencia",
    etiqueta: "Gerencia y Dirección Administrativa",
    nombreArchivo: "Sara-Echeverria-Ramos-CV-Gerencia-Direccion-Administrativa.pdf",
    titular: "Gerencia · Dirección Administrativa y Financiera",
    resumen:
      "Profesional con más de veinte años de experiencia en gerencia, dirección administrativa y gestión integral de negocios propios. Ha asumido responsabilidad directa sobre administración, control económico, facturación, compras, proveedores, operaciones y coordinación de personas en tres establecimientos comerciales. Como socia al 50 %, administradora solidaria, gerente y responsable financiera de Promociones AISA Cuatro S.L., participó en la dirección societaria, financiera y administrativa de la empresa. Se complementa con formación en Relaciones Laborales, Administración y Finanzas, RR. HH., desarrollo web e inteligencia artificial aplicada a la gestión.",
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
    etapaTitulo: "Proyectos independientes de desarrollo digital e IA aplicada",
    etapaBullets: [
      "Desarrollo y gestión de páginas web y contenidos digitales para proyectos empresariales.",
      "Organización de información, activos digitales e inventarios.",
      "Aplicación de inteligencia artificial a documentación, comunicación, productividad y mejora del trabajo.",
      "Organización de contenidos y flujos de información de los proyectos.",
    ],
    bellotzaBullets: [
      "Dirección integral de la operativa comercial, administrativa y económica de tres establecimientos.",
      "Administración general y control económico.",
      "Compras, negociación y gestión de proveedores.",
      "Facturación, organización administrativa y resolución de incidencias operativas.",
      "Coordinación con asesorías fiscales, contables y laborales.",
      "Gestión continuada de tres establecimientos durante más de dos décadas.",
    ],
    aisaBullets: [
      "Participación directa en decisiones societarias, financieras y operativas.",
      "Gestión de presupuestos, facturación y control de ingresos y gastos.",
      "Gestión documental, contractual y administrativa de la sociedad y sus proyectos.",
      "Coordinación con proveedores, asesorías y profesionales externos.",
      "Seguimiento de la ejecución de proyectos.",
    ],
    proyectosOverride: {
      "art-motor-group":
        "Desarrollo y gestión de la web, organización de contenidos e inventario digital de vehículos y apoyo a la estructura comercial y presencia digital del proyecto.",
      "atm-serges-group":
        "Desarrollo y gestión de la web corporativa, estructuración de contenidos comerciales y presentación digital de servicios de cajeros automáticos y terminales de pago.",
    },
    bloqueEspecifico: {
      titulo: "Aportación a la organización",
      texto: "Visión integral de la empresa, combinando administración, control económico, operaciones, personas, proveedores y clientes.",
    },
    formacionOrdenAts: ["tecnico-superior-af", "relaciones-laborales", "master-rrhh-esic", "master-prl-upna", "habilitacion-docente-fp"],
  },
];

export function getCvVariant(id: string): CvVariant {
  const variant = cvVariants.find((v) => v.id === id);
  if (!variant) {
    throw new Error(`Variante de CV no encontrada: ${id}`);
  }
  return variant;
}
