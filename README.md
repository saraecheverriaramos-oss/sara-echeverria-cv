# Sara Echeverría — Web CV

Web-currículum profesional de Sara Echeverría: Dirección de Personas, gestión
empresarial, transformación digital, IA aplicada y Prevención de Riesgos
Laborales. Construida con Next.js 16 (App Router), TypeScript, Tailwind CSS 4
y Framer Motion.

Incluye una versión imprimible (`/cv-pdf`) y un generador de CV en PDF real
(texto seleccionable, compatible con sistemas ATS) a partir de la misma
fuente de datos que la web.

## Requisitos

- Node.js 20.9 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Editar el contenido del CV

**Todo el contenido profesional vive en un único archivo:**

```
data/profile.ts
```

Ese archivo alimenta tanto la web como el PDF descargable — no hay que
duplicar nada en dos sitios. Su forma está definida en `types/profile.ts`.

Reglas al editarlo:

- No se inventan fechas, cargos, cifras, resultados ni datos de contacto.
- Si un dato no está confirmado, se deja como `null` (o array vacío) y se
  añade una entrada explicativa en el array `pendiente` de ese bloque. La web
  muestra automáticamente una etiqueta "Pendiente de validar"; el PDF omite
  el campo en lugar de mostrar el aviso.
- El bloque `filosofia` es contenido editorial propuesto — pendiente de
  aprobación de Sara — y está marcado como tal en la propia web.
- Para activar el botón de descarga de CV, `cv.archivoDisponible` debe ser
  `true` y debe existir `public/Sara-Echeverria-CV.pdf` (ver más abajo).
- Para activar el formulario de contacto, añade un email real de destino y
  conecta el `<form>` de `components/sections/Contacto.tsx` a un backend o
  servicio de envío (no incluido por defecto: no existe un email confirmado
  al que enviar los mensajes).

## Generar el CV en PDF

El PDF se genera con [`@react-pdf/renderer`](https://react-pdf.org/) a partir
de `data/profile.ts` (vía `lib/pdf/cv-content.ts` y `lib/pdf/CvDocument.tsx`),
por lo que siempre queda sincronizado con la web.

```bash
npm run generate:pdf
```

Esto crea/actualiza `public/Sara-Echeverria-CV.pdf`: A4, una o dos páginas,
texto seleccionable, sin tablas, columnas ni iconos — pensado para sistemas
ATS y portales de empleo. Vuelve a ejecutar este comando cada vez que
cambies `data/profile.ts`.

## Estructura del proyecto

```
app/                 Rutas (App Router): página principal, /cv-pdf, sitemap, robots
components/          Componentes de UI
  sections/          Una sección de la web = un componente
  ui/                Bloques reutilizables (Section, Reveal, PendingTag…)
data/profile.ts       Fuente única de datos del CV
types/profile.ts      Tipos del modelo de datos
lib/pdf/             Generación del PDF (contenido compartido + documento react-pdf)
scripts/             Script de generación del PDF
```

## Verificación

```bash
npm run lint       # ESLint
npx tsc --noEmit   # Comprobación de tipos
npm run build      # Build de producción (Turbopack)
```

## Despliegue

Proyecto estándar de Next.js, listo para [Vercel](https://vercel.com/new):
importa el repositorio y despliega sin configuración adicional. Antes de
publicar en producción, actualiza `siteUrl` en `app/layout.tsx`,
`app/sitemap.ts` y `app/robots.ts` con el dominio final.
