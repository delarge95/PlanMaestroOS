# DESPACHO 8 — CV personalizado por aplicación + brief modular (2026-09-09)

> Mandato: CV generado automáticamente por empresa/aplicación a partir del
> estudio; variables principales + modificaciones personalizadas por empresa;
> portafolio modular por aplicación; conexiones entre secciones verificadas.

## Entregado (commit final de la sesión)

- **cvTailor.ts** (puro, 12 tests): sugerencia de variante por rol (match
  explícito/parcial/fallback), extracción de keywords técnicas por
  diccionario con límites de palabra (nada inventado), auto-tailoring desde
  `CompanyResearch` (stack→énfasis, estudio→keywords), fusión
  variante+kit+research (resumen, keywords, énfasis, proyecto que encabeza).
- **ApplicationKit** persistido por applicationId en careerStore (additive).
- **CvGenerator v2** — modo "Por aplicación": kit autogenerado al elegir
  aplicación, confianza visible ("match explícito"), botón
  "Auto-personalizar desde investigación", campos editables por empresa,
  **brief de portafolio modular** (frase de apertura + ángulo por proyecto),
  registro de `cvVersionSent` como `variante+empresa-v1 (fecha)` y copia
  markdown CV+brief. Verificado en GUI con Treeview Studio.
- Flujo completo operativo: **investigar empresa → auto-personalizar CV →
  brief modular → imprimir/copiar → registrar envío**.

## PDFs de libros de idiomas — NO existen en el disco

Búsqueda exhaustiva (C: usuario/Downloads/Documents/Desktop, D:, E:, F:,
OneDrive, carpetas de libros): los PDFs de Menschen A1.1/A1.2 y Grammatik
aktiv NO están en esta máquina (solo existe la extracción RAG del Grammatik).
No se pueden copiar ni descargar (copyright). **Acción del usuario**: conseguir
los PDFs (p. ej. desde donde los compró) y soltarlos en
`public/library/languages/` con los nombres del registro — el visor los abre
solo y entonces se verifican las páginas de las lecciones.

## Conexiones fitness ↔ laboral ↔ idiomas (verificadas)

- **Hoy** (/app/today): Top 3 con las tres áreas, cada una con su propia
  micro-acción (fitness=sesión de hoy, laboral=micro-acción del pipeline,
  idiomas=vocabulario vencido real SM-2). Semana/cronograma alimenta hoy.
- **Laboral**: investigación → CV → envío conectados por empresa; pipeline
  exige única próxima acción; 126 empresas espejo en Notion.
- **Idiomas**: lecciones ancladas a libro académico + SM-2 alimenta Hoy.

## Estado de verificación

521/521 vitest · 64/64 impl · astro check 0 errores · GUI verificada.

## Siguiente paso lógico (pendiente de los encargos del usuario)

El mayor desbloqueo pendiente es el **Worker IA real (ENCARGO M6)**: con la
llamada a Gemini viva, `autoTailorFromResearch` y el borrador de investigación
por empresa se generan solos (IA = borrador, humano = decisión §0.3). Después:
catálogo de reglas (GLM web) → motor de reglas completo; Gemini Spark leyendo
las 4 DBs de Notion. El WIP de agent/portfolio sigue sin validar/merge.
