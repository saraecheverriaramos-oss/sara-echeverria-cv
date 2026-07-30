// Genera public/Sara-Echeverria-CV.pdf a partir de data/profile.ts.
// Ejecutar con: npm run generate:pdf
import { renderToFile } from "@react-pdf/renderer";
import { createElement } from "react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCvContent } from "../lib/pdf/cv-content.ts";
import { CvDocument } from "../lib/pdf/CvDocument.tsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "public", "Sara-Echeverria-CV.pdf");

const cv = getCvContent();
await renderToFile(createElement(CvDocument, { cv }), outputPath);

console.log(`PDF generado en: ${outputPath}`);
