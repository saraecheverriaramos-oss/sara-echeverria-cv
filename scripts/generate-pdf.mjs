// Genera todas las variantes de public/Sara-Echeverria-Ramos-CV*.pdf a
// partir de data/profile.ts y data/cv-variants.ts.
// Ejecutar con: npm run generate:pdf
import { Font, renderToFile } from "@react-pdf/renderer";
import { createElement } from "react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCvContent } from "../lib/pdf/cv-content.ts";
import { CvDocument } from "../lib/pdf/CvDocument.tsx";
import { cvVariants } from "../data/cv-variants.ts";

// Registrado también aquí (no solo en CvDocument.tsx): bajo tsx, este script
// y el módulo del documento pueden acabar con instancias distintas del
// singleton de @react-pdf/renderer, por lo que la desactivación de guiones
// solo es fiable si se aplica sobre el `Font` que usa `renderToFile` aquí.
Font.registerHyphenationCallback((word) => [word]);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

for (const variant of cvVariants) {
  const cv = getCvContent(variant.id);
  const outputPath = path.join(publicDir, cv.nombreArchivo);
  await renderToFile(createElement(CvDocument, { cv }), outputPath);
  console.log(`PDF generado (${variant.etiqueta}): ${outputPath}`);
}
