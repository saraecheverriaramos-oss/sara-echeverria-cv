import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { CvContent } from "./cv-content";

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
    fontSize: 9.5,
    color: colors.ink,
    backgroundColor: colors.paper,
    lineHeight: 1.35,
  },
  header: {
    flexDirection: "row",
    backgroundColor: colors.paperMuted,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexGrow: 1,
    paddingRight: 20,
  },
  name: {
    fontFamily: "Fraunces",
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 1.15,
    color: colors.ink,
  },
  role: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 11.5,
    lineHeight: 1.2,
    color: colors.accent,
    marginTop: 10,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 7,
    fontSize: 8.5,
    color: colors.inkMuted,
  },
  tagline: {
    marginTop: 9,
    fontSize: 9.5,
    color: colors.inkMuted,
    lineHeight: 1.4,
    maxWidth: 320,
  },
  photoFrame: {
    width: 96,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
  },
  accentRule: {
    height: 3,
    backgroundColor: colors.accent,
  },
  body: {
    paddingHorizontal: 40,
    paddingTop: 18,
  },
  sectionLabel: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 9,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: colors.focus,
    marginBottom: 6,
  },
  sectionTitle: {
    fontFamily: "Fraunces",
    fontWeight: 600,
    fontSize: 13.5,
    color: colors.ink,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 9.7,
    color: colors.inkMuted,
    lineHeight: 1.45,
  },
  hitosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
    marginBottom: 4,
    gap: 8,
  },
  hitoCard: {
    width: "48.5%",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  hitoLabel: {
    fontFamily: "Fraunces",
    fontWeight: 600,
    fontSize: 12,
    color: colors.ink,
  },
  hitoDetalle: {
    fontSize: 8,
    color: colors.inkMuted,
    marginTop: 1,
  },
  expBlock: {
    marginTop: 16,
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
    fontSize: 9,
    fontWeight: 600,
    color: colors.accent,
    marginTop: 1,
  },
  expMeta: {
    fontSize: 8,
    color: colors.inkMuted,
    marginTop: 1,
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2.5,
    paddingRight: 4,
  },
  bulletMark: {
    color: colors.accent,
    marginRight: 5,
    fontSize: 9,
  },
  bulletText: {
    fontSize: 9,
    color: colors.inkMuted,
    lineHeight: 1.35,
    flex: 1,
  },
  footerBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.paperMuted,
    paddingVertical: 14,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  projectRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
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
    fontSize: 11,
    color: colors.ink,
  },
  projectDomain: {
    fontSize: 8,
    color: colors.focus,
    marginTop: 1,
    marginBottom: 5,
    textDecoration: "none",
  },
  competGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 8,
  },
  competCard: {
    width: "48.5%",
  },
  competArea: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.accent,
    marginBottom: 2,
  },
  competItems: {
    fontSize: 8.3,
    color: colors.inkMuted,
    lineHeight: 1.4,
  },
  formLine: {
    fontSize: 9,
    marginBottom: 4,
    color: colors.inkMuted,
  },
  formTitulo: {
    fontFamily: "Inter",
    fontWeight: 700,
    color: colors.ink,
  },
});

function Header({ cv }: { cv: CvContent }) {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>{cv.nombre}</Text>
          <Text style={styles.role}>Dirección de Personas y Gestión Empresarial</Text>
          <View style={styles.contactRow}>
            <Text>{cv.ubicacion}</Text>
            {cv.contacto.map((c) => (
              <Text key={c.tipo}>{"   ·   " + c.valor}</Text>
            ))}
          </View>
          <Text style={styles.tagline}>{cv.tagline}</Text>
        </View>
        <View style={styles.photoFrame}>
          {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf's Image has no alt prop; this isn't HTML */}
          <Image src={photoPath} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 18%" }} />
        </View>
      </View>
      <View style={styles.accentRule} />
    </>
  );
}

export function CvVisualDocument({ cv }: { cv: CvContent }) {
  const [consultoria, bellotza, aisa] = cv.experiencia;

  return (
    <Document title={`${cv.nombre} — CV`} author={cv.nombre} language="es">
      <Page size="A4" style={styles.page}>
        <Header cv={cv} />

        <View style={styles.body}>
          <Text style={styles.sectionLabel}>Perfil ejecutivo</Text>
          <Text style={styles.paragraph}>{cv.resumenBreve}</Text>

          <View style={styles.hitosGrid}>
            {cv.hitos.map((hito) => (
              <View key={hito.label} style={styles.hitoCard}>
                <Text style={styles.hitoLabel}>{hito.label}</Text>
                <Text style={styles.hitoDetalle}>{hito.detalle}</Text>
              </View>
            ))}
          </View>

          {[bellotza, aisa].map((item) => (
            <View key={item.id} style={styles.expBlock} wrap={false}>
              <View style={styles.expHeaderRow}>
                <Text style={styles.expEmpresa}>{item.empresa}</Text>
                <Text style={styles.expPeriodo}>{item.periodo}</Text>
              </View>
              <Text style={styles.expRole}>{item.puesto}</Text>
              <Text style={styles.expMeta}>{[item.ubicacion, item.sector].filter(Boolean).join(" · ")}</Text>
              {item.responsabilidades.map((r) => (
                <View key={r} style={styles.bulletRow}>
                  <Text style={styles.bulletMark}>—</Text>
                  <Text style={styles.bulletText}>{r}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={[styles.body, { paddingTop: 34, paddingBottom: 70 }]}>
          <Text style={styles.sectionLabel}>2024 — Actualidad</Text>
          <Text style={styles.sectionTitle}>Desarrollo digital, IA aplicada y especialización profesional</Text>
          <Text style={styles.paragraph}>{consultoria.contexto}</Text>
          <View style={{ marginTop: 6 }}>
            {consultoria.responsabilidades.map((r) => (
              <View key={r} style={styles.bulletRow}>
                <Text style={styles.bulletMark}>—</Text>
                <Text style={styles.bulletText}>{r}</Text>
              </View>
            ))}
          </View>

          <Text style={[styles.sectionLabel, { marginTop: 18 }]}>Proyectos digitales</Text>
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
                  <Text style={styles.paragraph}>{p.intervencion}</Text>
                </View>
              ))}
          </View>

          <Text style={[styles.sectionLabel, { marginTop: 18 }]}>Formación</Text>
          {cv.formacion.map((f) => (
            <Text key={f.id} style={styles.formLine}>
              <Text style={styles.formTitulo}>{f.titulo}</Text>
              {f.institucion ? ` — ${f.institucion}` : ""}
              {f.periodo ? ` · ${f.periodo}` : ""}
              {f.estado === "en_curso" ? " (en curso)" : ""}
              {f.estado === "matriculada" ? " (matriculada)" : ""}
            </Text>
          ))}

          <Text style={[styles.sectionLabel, { marginTop: 14 }]}>Competencias</Text>
          <View style={styles.competGrid}>
            {cv.competencias.map((grupo) => (
              <View key={grupo.area} style={styles.competCard}>
                <Text style={styles.competArea}>{grupo.area}</Text>
                <Text style={styles.competItems}>{grupo.items.slice(0, 5).join(" · ")}</Text>
              </View>
            ))}
          </View>

          <Text style={[styles.sectionLabel, { marginTop: 14 }]}>Herramientas e idiomas</Text>
          <Text style={styles.paragraph}>
            {cv.herramientas.join(" · ")}
            {cv.idiomas.length > 0 ? `   |   ${cv.idiomas.map((i) => `${i.nombre} (${i.nivel})`).join(" · ")}` : ""}
          </Text>
        </View>

        <View style={styles.footerBar}>
          <Text style={styles.footerStrong}>{cv.nombre}</Text>
          <Text style={styles.footerText}>
            {cv.contacto.map((c) => c.valor).join("   ·   ")}
            {"   ·   "}
            {cv.ubicacion}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
