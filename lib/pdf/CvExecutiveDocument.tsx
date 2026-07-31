import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { CvContent } from "./cv-content";
import type { FormacionItem } from "@/types/profile";

// Ver nota en CvVisualDocument.tsx: bajo tsx, este módulo puede acabar con una
// instancia distinta del singleton de @react-pdf/renderer que el script que
// llama a renderToFile, así que la desactivación de guiones y el registro de
// fuentes también se aplican allí directamente antes de renderizar.
Font.registerHyphenationCallback((word) => [word]);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, "fonts");
const photoPath = path.join(__dirname, "..", "..", "public", "images", "sara-echeverria-hero.jpg");

Font.register({
  family: "Fraunces",
  fonts: [
    { src: path.join(fontsDir, "Fraunces-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontsDir, "Fraunces-SemiBold.ttf"), fontWeight: 600 },
    { src: path.join(fontsDir, "Fraunces-Bold.ttf"), fontWeight: 700 },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    { src: path.join(fontsDir, "Inter-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontsDir, "Inter-SemiBold.ttf"), fontWeight: 600 },
    { src: path.join(fontsDir, "Inter-Bold.ttf"), fontWeight: 700 },
  ],
});

// Puesto de Bellotza reformulado para los CV ejecutivos/ATS (mismo hecho que
// `data/profile.ts`, solo redactado de forma más directa para estos documentos).
const BELLOTZA_PUESTO_ATS = "Propietaria y gerente · Empresaria autónoma";

// Paleta idéntica a la del CV visual principal, pero usada con más
// moderación: sin tarjetas de hitos, sin cabecera de color intenso —
// pensado para lectura ATS y para acompañar al CV visual sin competir con él.
const colors = {
  paper: "#fbf9f5",
  paperMuted: "#f1ede4",
  ink: "#17181c",
  inkMuted: "#55575f",
  line: "#e3ddce",
  accent: "#a8642f",
  focus: "#1c6b63",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    color: colors.ink,
    backgroundColor: colors.paper,
    lineHeight: 1.4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 18,
    paddingHorizontal: 40,
  },
  headerLeft: {
    flexGrow: 1,
    paddingRight: 20,
  },
  name: {
    fontFamily: "Fraunces",
    fontWeight: 700,
    fontSize: 21,
    lineHeight: 1.15,
    color: colors.ink,
  },
  role: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 11,
    lineHeight: 1.2,
    color: colors.ink,
    marginTop: 7,
  },
  subtitulo: {
    fontSize: 8.7,
    color: colors.focus,
    marginTop: 2,
  },
  contactLine: {
    marginTop: 6,
    fontSize: 9,
    color: colors.inkMuted,
  },
  photoFrame: {
    width: 94,
    height: 116,
    borderRadius: 6,
    overflow: "hidden",
  },
  accentRule: {
    height: 2,
    backgroundColor: colors.accent,
  },
  body: {
    paddingHorizontal: 40,
    paddingTop: 18,
  },
  sectionLabel: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 9.5,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: colors.focus,
    marginBottom: 7,
  },
  sectionLabelMuted: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 8,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: colors.inkMuted,
    marginBottom: 7,
  },
  paragraph: {
    fontSize: 10,
    color: colors.inkMuted,
    lineHeight: 1.5,
  },
  competLine: {
    fontSize: 9.7,
    color: colors.inkMuted,
    lineHeight: 1.5,
    marginBottom: 4,
  },
  competArea: {
    fontFamily: "Inter",
    fontWeight: 700,
    color: colors.accent,
  },
  expBlock: {
    marginTop: 14,
  },
  expHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  expEmpresa: {
    fontFamily: "Fraunces",
    fontWeight: 600,
    fontSize: 12.5,
    color: colors.ink,
  },
  expPeriodo: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 8.5,
    color: colors.focus,
  },
  expRole: {
    fontSize: 9.3,
    fontWeight: 600,
    color: colors.accent,
    marginTop: 1,
  },
  expMeta: {
    fontSize: 8.3,
    color: colors.inkMuted,
    marginTop: 1,
    marginBottom: 7,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingRight: 4,
  },
  bulletMark: {
    color: colors.accent,
    marginRight: 5,
    fontSize: 9.5,
  },
  bulletText: {
    fontSize: 9.5,
    color: colors.inkMuted,
    lineHeight: 1.4,
    flex: 1,
  },
  calloutBox: {
    marginTop: 16,
    borderLeftWidth: 2,
    borderLeftColor: colors.focus,
    paddingLeft: 12,
    paddingVertical: 2,
  },
  calloutTitulo: {
    fontFamily: "Fraunces",
    fontWeight: 600,
    fontSize: 10.5,
    color: colors.ink,
    marginBottom: 3,
  },
  calloutTexto: {
    fontSize: 9.5,
    color: colors.inkMuted,
    lineHeight: 1.45,
  },
  projectRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 4,
  },
  projectCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 6,
    padding: 10,
  },
  projectName: {
    fontFamily: "Fraunces",
    fontWeight: 600,
    fontSize: 10.5,
    color: colors.ink,
  },
  projectDomain: {
    fontSize: 8,
    color: colors.focus,
    marginTop: 1,
    marginBottom: 5,
    textDecoration: "none",
  },
  projectText: {
    fontSize: 9,
    color: colors.inkMuted,
    lineHeight: 1.4,
  },
  formLine: {
    fontSize: 9.5,
    marginBottom: 4,
    color: colors.inkMuted,
  },
  formTitulo: {
    fontFamily: "Inter",
    fontWeight: 700,
    color: colors.ink,
  },
  herramientasRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 2,
    gap: 16,
  },
  herramientasCategoria: {
    fontSize: 9.7,
    color: colors.inkMuted,
    lineHeight: 1.5,
    marginBottom: 4,
  },
  footerBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.paperMuted,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  footerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerDisponibilidad: {
    marginTop: 4,
    fontSize: 8,
    color: colors.inkMuted,
  },
  footerText: {
    fontSize: 8.5,
    color: colors.inkMuted,
  },
  footerStrong: {
    fontSize: 9,
    fontWeight: 600,
    color: colors.ink,
  },
});

function estadoLabel(item: FormacionItem): string {
  if (item.estado === "matriculada") return " · Matriculada.";
  if (item.estado === "en_curso") return " · En curso.";
  if (item.estado === "completada" && item.periodo) return " · Finalizado.";
  return "";
}

function FormacionLine({ item }: { item: FormacionItem }) {
  return (
    <Text style={styles.formLine}>
      <Text style={styles.formTitulo}>{item.titulo}</Text>
      {item.institucion ? ` — ${item.institucion}` : ""}
      {item.periodo ? ` · Curso ${item.periodo}` : ""}
      {estadoLabel(item)}
    </Text>
  );
}

function Header({ cv }: { cv: CvContent }) {
  const contactoTexto = ["Disponibilidad geográfica amplia", ...cv.contacto.map((c) => c.valor)]
    .filter(Boolean)
    .join("   ·   ");

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>{cv.nombre}</Text>
          <Text style={styles.role}>{cv.titular}</Text>
          {cv.subtitulo ? <Text style={styles.subtitulo}>{cv.subtitulo}</Text> : null}
          <Text style={styles.contactLine}>{contactoTexto}</Text>
        </View>
        {cv.conFoto ? (
          <View style={styles.photoFrame}>
            {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf's Image has no alt prop; this isn't HTML */}
            <Image
              src={photoPath}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 18%" }}
            />
          </View>
        ) : null}
      </View>
      <View style={styles.accentRule} />
    </>
  );
}

export function CvExecutiveDocument({ cv }: { cv: CvContent }) {
  const [, bellotza, aisa] = cv.experiencia;

  return (
    <Document title={`${cv.nombre} — ${cv.titular}`} author={cv.nombre} language="es">
      <Page size="A4" style={styles.page}>
        <Header cv={cv} />

        <View style={styles.body}>
          <Text style={styles.sectionLabel}>Perfil profesional</Text>
          <Text style={styles.paragraph}>{cv.resumen}</Text>

          <Text style={[styles.sectionLabel, { marginTop: 14 }]}>Competencias prioritarias</Text>
          {cv.competenciasPrioritarias.map((grupo) => (
            <Text key={grupo.area} style={styles.competLine}>
              <Text style={styles.competArea}>{grupo.area}: </Text>
              {grupo.items.join(", ")}
            </Text>
          ))}

          <Text style={[styles.sectionLabel, { marginTop: 12 }]}>Experiencia</Text>
          <View style={styles.expBlock} wrap={false}>
            <View style={styles.expHeaderRow}>
              <Text style={styles.expEmpresa}>{cv.etapaTitulo}</Text>
              <Text style={styles.expPeriodo}>2024 — actualidad</Text>
            </View>
            {cv.etapaBullets.map((r) => (
              <View key={r} style={styles.bulletRow}>
                <Text style={styles.bulletMark}>—</Text>
                <Text style={styles.bulletText}>{r}</Text>
              </View>
            ))}
          </View>

          <View style={styles.expBlock} wrap={false}>
            <View style={styles.expHeaderRow}>
              <Text style={styles.expEmpresa}>{bellotza.empresa}</Text>
              <Text style={styles.expPeriodo}>{bellotza.periodo}</Text>
            </View>
            <Text style={styles.expRole}>{BELLOTZA_PUESTO_ATS}</Text>
            <Text style={styles.expMeta}>{[bellotza.ubicacion, bellotza.sector].filter(Boolean).join(" · ")}</Text>
            {cv.bellotzaBullets.map((r) => (
              <View key={r} style={styles.bulletRow}>
                <Text style={styles.bulletMark}>—</Text>
                <Text style={styles.bulletText}>{r}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={[styles.body, { paddingTop: 30, paddingBottom: 80 }]}>
          <Text style={styles.sectionLabelMuted}>Experiencia (continuación)</Text>
          <View wrap={false}>
            <View style={styles.expHeaderRow}>
              <Text style={styles.expEmpresa}>{aisa.empresa}</Text>
              <Text style={styles.expPeriodo}>{aisa.periodo}</Text>
            </View>
            <Text style={styles.expRole}>{aisa.puesto}</Text>
            <Text style={styles.expMeta}>{[aisa.ubicacion, aisa.sector].filter(Boolean).join(" · ")}</Text>
            {cv.aisaBullets.map((r) => (
              <View key={r} style={styles.bulletRow}>
                <Text style={styles.bulletMark}>—</Text>
                <Text style={styles.bulletText}>{r}</Text>
              </View>
            ))}
          </View>

          <Text style={[styles.sectionLabel, { marginTop: 16 }]}>Proyectos digitales</Text>
          <View style={styles.projectRow}>
            {cv.proyectos
              .filter((p) => p.enlace)
              .map((p) => (
                <View key={p.id} style={styles.projectCard}>
                  <Text style={styles.projectName}>{p.nombre}</Text>
                  {p.enlace ? (
                    <Link src={p.enlace} style={styles.projectDomain}>
                      {p.enlace.replace(/^https?:\/\//, "")}
                    </Link>
                  ) : null}
                  <Text style={styles.projectText}>{cv.proyectosOverride[p.id] ?? p.intervencion}</Text>
                </View>
              ))}
          </View>

          <View style={styles.calloutBox} wrap={false}>
            <Text style={styles.calloutTitulo}>{cv.bloqueEspecifico.titulo}</Text>
            <Text style={styles.calloutTexto}>{cv.bloqueEspecifico.texto}</Text>
          </View>

          <Text style={[styles.sectionLabel, { marginTop: 16 }]}>Formación</Text>
          {cv.formacionAts.map((f) => (
            <FormacionLine key={f.id} item={f} />
          ))}

          <Text style={[styles.sectionLabel, { marginTop: 12 }]}>Competencias complementarias</Text>
          {cv.competenciasComplementarias.map((grupo) => (
            <Text key={grupo.area} style={styles.competLine}>
              <Text style={styles.competArea}>{grupo.area}: </Text>
              {grupo.items.join(", ")}
            </Text>
          ))}

          <Text style={[styles.sectionLabel, { marginTop: 10 }]}>Herramientas</Text>
          <View style={styles.herramientasRow}>
            {cv.herramientasCategorizadas.map((grupo) => (
              <Text key={grupo.categoria} style={styles.herramientasCategoria}>
                <Text style={styles.competArea}>{grupo.categoria}: </Text>
                {grupo.items.join(", ")}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.footerBar}>
          <View style={styles.footerTopRow}>
            <Text style={styles.footerStrong}>{cv.nombre}</Text>
            <Text style={styles.footerText}>{cv.contacto.map((c) => c.valor).join("   ·   ")}</Text>
          </View>
          <Text style={styles.footerDisponibilidad}>{cv.disponibilidad}</Text>
        </View>
      </Page>
    </Document>
  );
}
