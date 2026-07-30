import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { CvContent } from "./cv-content";

// Documento PDF de una sola columna, sin tablas ni iconos, pensado para
// sistemas ATS: texto plano seleccionable, orden de lectura lineal.
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
          <View key={item.empresa} style={styles.itemBlock} wrap={false}>
            <Text style={styles.itemTitle}>
              {item.empresa}
              {item.puesto ? ` — ${item.puesto}` : ""}
            </Text>
            {item.periodo || item.sector ? (
              <Text style={styles.itemMeta}>{[item.periodo, item.sector].filter(Boolean).join(" · ")}</Text>
            ) : null}
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
          <Text key={item.titulo} style={styles.competenciaLine}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>{item.titulo}</Text>
            {item.institucion ? `, ${item.institucion}` : ""}
            {item.estado === "en_curso" ? " (en curso)" : ""}
            {item.calificacion ? ` — ${item.calificacion}` : ""}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Proyectos destacados</Text>
        {cv.proyectos.map((p) => (
          <Text key={p.nombre} style={styles.competenciaLine}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>{p.nombre}: </Text>
            {p.intervencion}
          </Text>
        ))}
      </Page>
    </Document>
  );
}
