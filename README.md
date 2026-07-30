# Sara Echeverría Ramos — Web CV

Web-currículum profesional: Dirección de Personas, gestión empresarial,
transformación digital, IA aplicada y Prevención de Riesgos Laborales.
Construida con Next.js 16 (App Router), TypeScript, Tailwind CSS 4 y Framer
Motion.

Incluye una versión imprimible (`/cv-pdf`) y un generador de **tres variantes**
de CV en PDF real (texto seleccionable, compatible con sistemas ATS) a partir
de la misma fuente de datos que la web. La web pública nunca muestra avisos
de "pendiente de validar": lo no confirmado simplemente no aparece.

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

**Todo el contenido profesional vive en dos archivos:**

```
data/profile.ts        Hechos: experiencia, formación, proyectos, contacto...
data/cv-variants.ts     Variantes del PDF: solo énfasis (titular, resumen, orden)
```

Ambos alimentan la web y todos los PDF — no hay que duplicar nada. Sus formas
están definidas en `types/profile.ts`.

Reglas al editar `data/profile.ts`:

- No se inventan fechas, cargos, cifras, resultados económicos, porcentajes,
  facturación, número de empleados, idiomas, herramientas ni calificaciones
  académicas que no estén confirmados.
- Un dato no confirmado se deja como `null`, se omite el campo, o
  directamente no se añade la entrada. Ni la web ni el PDF muestran avisos
  de "pendiente de validar" — ese seguimiento vive solo en los comentarios
  de cabecera de `data/profile.ts` y en este README.
- El bloque `filosofia` es contenido editorial propuesto (marcado
  internamente como `editorial_pendiente_aprobacion`), pendiente de
  aprobación de Sara antes de darlo por definitivo.
- Para activar el botón de descarga de CV, `cv.archivoDisponible` debe ser
  `true` y debe existir `public/Sara-Echeverria-Ramos-CV.pdf` (ver más abajo).
- El formulario de contacto (`components/sections/ContactForm.tsx`) abre el
  gestor de correo del visitante con un `mailto:` prerrellenado hacia el
  email confirmado en `data/profile.ts` — no requiere backend ni secretos.
  Si en el futuro se añade un servicio de envío real, sustituir el `onSubmit`
  por la llamada a ese servicio.

### Datos pendientes de confirmar (seguimiento interno, no público)

- LinkedIn (oculto en web y PDF hasta disponer de la URL exacta).
- Institución y fechas exactas de la habilitación docente en FP.
- Fechas exactas de la Diplomatura en Relaciones Laborales y del Técnico
  Superior en Administración y Finanzas.
- Confirmar antes de cada despliegue que `artmotorgroup.es` y
  `atmsergesgroup.es` siguen siendo los dominios correctos de esos proyectos.

## Incorporar o cambiar la fotografía

La fotografía del hero vive en `public/images/sara-echeverria-hero.jpg` y se
referencia en `components/sections/Hero.tsx` vía `next/image`. Para
cambiarla:

1. Sustituye el archivo (o añade uno nuevo en `public/images/`) sin filtros
   ni retoques que alteren rasgos, color o textura natural.
2. Elimina los metadatos EXIF antes de subirla (puede contener ubicación o
   fecha): `sharp`/Pillow sin copiar EXIF, o cualquier herramienta equivalente.
3. Actualiza el `src` y, si cambia el encuadre, el `object-position` en
   `Hero.tsx` para mantener el rostro correctamente centrado.
4. El PDF ATS nunca lleva fotografía — no la añadas a `CvDocument.tsx`.

`public/images/sara-echeverria-alt.jpg` es una alternativa ya preparada, sin
usar por ahora (no mostrar las dos fotografías a la vez).

## Generar los CV en PDF

Los PDF se generan con [`@react-pdf/renderer`](https://react-pdf.org/) a
partir de `data/profile.ts` + `data/cv-variants.ts` (vía
`lib/pdf/cv-content.ts` y `lib/pdf/CvDocument.tsx`), por lo que siempre
quedan sincronizados con la web.

```bash
npm run generate:pdf
```

Esto crea/actualiza, en `public/`:

| Variante                      | Archivo                                  |
| ------------------------------ | ----------------------------------------- |
| General directivo (por defecto) | `Sara-Echeverria-Ramos-CV.pdf`             |
| Dirección de Personas y RR. HH. | `Sara-Echeverria-Ramos-CV-RRHH.pdf`        |
| Gerencia y Dirección Administrativa | `Sara-Echeverria-Ramos-CV-Gerencia.pdf` |

Cada uno: A4, dos páginas, una sola columna, texto seleccionable, sin
fotografía, sin tablas ni iconos sustituyendo palabras, enlaces reales y
clicables a los proyectos — pensado para sistemas ATS y portales de empleo
(LinkedIn, InfoJobs, Indeed, Lanbide...).

Para añadir una variante nueva (por ejemplo, Transformación Digital o PRL),
añade una entrada a `data/cv-variants.ts` — no hay que tocar nada más.

Vuelve a ejecutar `npm run generate:pdf` cada vez que cambies `data/profile.ts`
o `data/cv-variants.ts`.

> Nota técnica: `@react-pdf/renderer` inserta por defecto guiones de
> separación silábica automáticos que corrompen el texto seleccionable
> (p. ej. "atmserges-group.es"). Por eso `scripts/generate-pdf.mjs` desactiva
> `Font.registerHyphenationCallback` antes de renderizar — no lo elimines.

## Estructura del proyecto

```
app/                     Rutas (App Router): página principal, /cv-pdf, sitemap, robots
components/              Componentes de UI
  sections/              Una sección de la web = un componente
  ui/                    Bloques reutilizables (Section, Reveal, Container…)
data/profile.ts          Fuente única de hechos del CV
data/cv-variants.ts       Variantes del PDF (énfasis, no hechos)
types/profile.ts          Tipos del modelo de datos
lib/pdf/                  Generación del PDF (contenido compartido + documento react-pdf)
scripts/generate-pdf.mjs  Script de generación de las 3 variantes de PDF
public/images/            Fotografía profesional
```

## Verificación

```bash
npm run lint       # ESLint
npx tsc --noEmit   # Comprobación de tipos
npm run build      # Build de producción (Turbopack)
npm run generate:pdf
```

## Despliegue

Proyecto estándar de Next.js, listo para [Vercel](https://vercel.com/new):
importa el repositorio y despliega sin configuración adicional. Antes de
publicar en producción, actualiza `siteUrl` en `app/layout.tsx`,
`app/sitemap.ts` y `app/robots.ts` con el dominio final.
