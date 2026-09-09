# DESPACHO 7 — Idiomas anclados a libros + Laboral completo (CVs, investigación) (2026-09-09)

> Mandato del usuario: (1) idiomas guiados por libros académicos con opción de
> ver la página exacta en el PDF, (2) laboral 100% funcional para generar CVs,
> con base de datos e investigación por empresa, (3) arquitectura lista para
> tareas futuras.

## Idiomas — anclaje a libros académicos ✅

- **Registro de libros** `src/data/languages/books.ts`: Grammatik aktiv A1–A2
  (Cornelsen), Menschen A1.1 y A1.2 (Hueber). Ruta pública:
  `public/library/languages/<fileName>.pdf` (patrón de fitness).
- **Contrato nuevo** `Lesson.sourceBook { bookId, section, page?, pageRange? }`.
  Las 4 unidades alemanas anotadas con `section`; páginas ausentes hasta
  verificar contra el PDF físico (§0.1 — nada inventado).
- **BookPdfViewer**: overlay con iframe `#page=N`, navegación ◀ ▶, detección
  HEAD del archivo y tarjeta de guía cuando el PDF aún no está en el repo.
  LessonView: botón "Ver en el libro (pág. por verificar)".
- **PENDIENTE USUARIO**: copiar los PDFs a `public/library/languages/` con los
  nombres exactos del registro (`Grammatik_Aktiv_A1_A2.pdf`,
  `Menschen_A1_1.pdf`, `Menschen_A1_2.pdf`). Al hacerlo, verificar páginas y
  rellenar `page`/`pageRange` en las unidades.

## Laboral — generación de CVs ✅

- `src/data/career/cv/` — modelo + CV base 1:1 del doc-17 §3 (con flags
  [verify] preservados: email/teléfono/portfolio viajan como placeholder y NO
  se renderizan) + las 5 variantes §4–§8 (tools-python marcada secundaria).
- `cvRender.ts` (puro, 7 tests): markdown ATS con título/summary/bullets y
  ORDEN de proyectos por variante.
- `CvGenerator` en **/app/career/portfolio**: chips de variante, preview
  imprimible (CSS de impresión dedicado — solo se imprime el CV), copiar
  markdown, y **registrar versión enviada** en la aplicación del pipeline
  (nuevo campo `JobApplication.cvVersionSent`).
- Flujo: investigar → elegir variante → imprimir/copiar → registrar envío.

## Laboral — investigación por empresa ✅

- Contrato `CompanyResearch` (products/stack/size/hiringProcess/contacts/
  tailoringNotes/fitScoreUser/sources) + `careerStore.companyResearch`
  (persistido, additive al shape v1) + `upsertCompanyResearch`.
- `CompanyResearchPanel` integrado en **Empleo → Base de datos de empresas**:
  formulario por sección, fit propio 0–12 con la regla del tracker
  (≥10 aplicar / 7–9 investigar / ≤6 descartar), **checklist "Lista para
  aplicar"** (fit + productos + stack + tailoring + fuentes) y evento en la
  línea de tiempo al guardar. Link directo al generador de CV.
- Nota: los 120 targets internos (doc-11) + las 126 empresas en Notion
  (DESPACHO 6) siguen siendo las fuentes de targeting; la investigación
  profunda vive en el store y es por-empresa.

## Arquitectura para tareas futuras

- Contratos aditivos y versionados: `sourceBook` (idiomas), `CompanyResearch`
  y `cvVersionSent` (laboral) no rompen shapes existentes (persist merge).
- El registro de libros es la base para: verificación de páginas, más libros
  (inglés académico), y anclar vocabulario a página de libro.
- `cvRender` es puro → puede alimentar futura export PDF server-side o el
  Worker IA (borrador de carta por variante).
- Créditos del subagente de idiomas se agotaron a mitad; su trabajo parcial
  quedó revisado, completado (wiring de LessonView) y verificado por el
  orquestador.

## Verificación final

| Gate | Resultado |
|---|---|
| vitest | **510/510** (+7 cvRender) |
| impl (node:test) | **64/64** |
| astro check | **0 errores** |
| GUI | CV: variante conmuta título/orden/versión · Investigación: panel + checklist en Base de datos |
