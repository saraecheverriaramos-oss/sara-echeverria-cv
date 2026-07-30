import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { CvContent } from "./cv-content";

// Desactiva la separación silábica automática: por defecto react-pdf inserta
// guiones reales de corte de línea (p. ej. "atmserges-group.es"), lo que
// corrompe el texto seleccionable y los enlaces de cara a sistemas ATS.
Font.registerHyphenationCallback((word) => [word]);

// Documento PDF de una sola columna, sin tablas ni iconos, pensado para
// sistemas ATS: texto plano seleccionable, orden de lectura lineal, sin
// fotografía. Enlaces reales cuando existen (proyectos).
const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 40,
    fontSize: 10.5,
    fontFamily: "Helvetica",
    color: "#111111",
    lineHeight: 1.35,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
  },
  headline: {
    fontSize: 12.5,
    marginTop: 3,
    color: "#222222",
  },
  contactLine: {
    fontSize: 9.5,
    marginTop: 6,
    color: "#444444",
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    color: "#333333",
    marginTop: 14,
    marginBottom: 5,
    borderBottom: "0.75pt solid #cccccc",
    paddingBottom: 3,
  },
  paragraph: {
    fontSize: 10.5,
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
  },
  itemMeta: {
    fontSize: 9.5,
    color: "#444444",
    marginBottom: 2,
  },
  itemBlock: {
    marginBottom: 8,
  },
  bullet: {
    fontSize: 10.5,
    marginLeft: 10,
  },
  competenciaLine: {
    fontSize: 10.5,
    marginBottom: 3,
  },
  link: {
    color: "#111111",
    textDecoration: "underline",
  },
});

export function CvDocument({ cv }: { cv: CvContent }) {
  const contactoTexto = [cv.ubicacion, ...cv.contacto.map((c) => c.valor)].filter(Boolean).join("   ·   ");

  return (
    <Document title={`${cv.nombre} — CV`} author={cv.nombre} language="es">
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{cv.nombre}</Text>
        <Text style={styles.headline}>{cv.titular}</Text>
        <Text style={styles.contactLine}>{contactoTexto}</Text>

        <Text style={styles.sectionTitle}>Perfil profesional</Text>
        <Text style={styles.paragraph}>{cv.resumen}</Text>

        <Text style={styles.sectionTitle}>Competencias clave</Text>
        {cv.competencias.map((grupo) => (
          <Text key={grupo.area} style={styles.competenciaLine}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>{grupo.area}: </Text>
            {grupo.items.join(", ")}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Experiencia profesional</Text>
        {cv.experiencia.map((item) => (
          <View key={item.id} style={styles.itemBlock} wrap={false}>
            <Text style={styles.itemTitle}>
              {item.empresa} — {item.puesto}
            </Text>
            <Text style={styles.itemMeta}>{[item.periodo, item.ubicacion, item.sector].filter(Boolean).join(" · ")}</Text>
            <Text style={styles.paragraph}>{item.contexto}</Text>
            {item.responsabilidades.map((r) => (
              <Text key={r} style={styles.bullet}>
                • {r}
              </Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Formación</Text>
        {cv.formacion.map((item) => (
          <Text key={item.id} style={styles.competenciaLine}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>{item.titulo}</Text>
            {item.institucion ? `, ${item.institucion}` : ""}
            {item.periodo ? ` — ${item.periodo}` : ""}
            {item.estado === "en_curso" ? " (en curso)" : ""}
            {item.estado === "matriculada" ? " (matriculada)" : ""}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Proyectos digitales</Text>
        {cv.proyectos.map((p) => (
          <Text key={p.id} style={styles.competenciaLine}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>{p.nombre}: </Text>
            {p.intervencion}
            {p.enlace ? (
              <>
                {" — "}
                <Link src={p.enlace} style={styles.link}>
                  {p.enlace.replace(/^https?:\/\//, "")}
                </Link>
              </>
            ) : null}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Información adicional</Text>
        <Text style={styles.paragraph}>
          <Text style={{ fontFamily: "Helvetica-Bold" }}>Herramientas: </Text>
          {cv.herramientas.join(", ")}
        </Text>
        {cv.idiomas.length > 0 ? (
          <Text style={styles.paragraph}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>Idiomas: </Text>
            {cv.idiomas.map((i) => `${i.nombre} (${i.nivel})`).join(" · ")}
          </Text>
        ) : null}
        <Text style={styles.paragraph}>
          <Text style={{ fontFamily: "Helvetica-Bold" }}>Disponibilidad: </Text>
          {cv.disponibilidad}
        </Text>
      </Page>
    </Document>
  );
}
