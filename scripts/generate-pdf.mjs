// Genera todas las variantes de public/Sara-Echeverria-Ramos-CV*.pdf a
// partir de data/profile.ts y data/cv-variants.ts.
// Ejecutar con: npm run generate:pdf
import { Font, renderToFile } from "@react-pdf/renderer";
import { createElement } from "react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCvContent } from "../lib/pdf/cv-content.ts";
import { CvDocument } from "../lib/pdf/CvDocument.tsx";
import { CvVisualDocument } from "../lib/pdf/CvVisualDocument.tsx";
import { cvVariants } from "../data/cv-variants.ts";
import { perfil } from "../data/profile.ts";

// Registrado también aquí (no solo en CvDocument.tsx / CvVisualDocument.tsx):
// bajo tsx, este script y los módulos de documento pueden acabar con
// instancias distintas del singleton de @react-pdf/renderer, por lo que la
// desactivación de guiones y el registro de fuentes solo son fiables si se
// aplican sobre el `Font` que usa `renderToFile` aquí.
Font.registerHyphenationCallback((word) => [word]);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const fontsDir = path.join(__dirname, "..", "lib", "pdf", "fonts");

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

for (const variant of cvVariants) {
  const cv = getCvContent(variant.id);
  const outputPath = path.join(publicDir, cv.nombreArchivo);
  await renderToFile(createElement(CvDocument, { cv }), outputPath);
  console.log(`PDF generado (${variant.etiqueta}): ${outputPath}`);
}

const cvVisual = getCvContent("general");
const visualOutputPath = path.join(publicDir, perfil.cv.visual.nombreArchivo);
await renderToFile(createElement(CvVisualDocument, { cv: cvVisual }), visualOutputPath);
console.log(`PDF generado (Visual principal): ${visualOutputPath}`);
