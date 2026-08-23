# STATUS — AG-PORT (rama agent/portfolio)

> Ciclo de reanudación · 2026-08-22. Estado: **Fase 4 (RAG) completa, CV→PDF v1 entregado, foco verificado contra doc 20.** Fases 0–3 se completaron en ciclos anteriores (borrador archivado, checklist doc-33, CV completo, pestaña ArtStation).

## Commits del ciclo

| Commit | Contenido |
|---|---|
| `393be35` | rag(portfolio): manifest del dominio + fuente doc-20 |
| `25c8710` | rag(portfolio): fuente doc-08B (case study TwinSight) |
| `44028ab` | rag(portfolio): fuente doc-17 (CV base + variantes) |
| `ff55ac3` | rag(portfolio): fuente doc-19B (README GitHub) |
| `cf8c251` | rag(portfolio): fuente doc-28E (perfil ArtStation) |
| `1bcebf2` | rag(portfolio): fuente doc-29C (benchmark breakdowns) |
| `19aa314` | rag(portfolio): build `rag/portfolio.json` (6 fuentes, 36 chunks) |
| `6f8938b` | fix(portfolio): hero home alineado con doc-20 + 4 focus routes enlazadas desde /work |
| `3bd8920` | feat(cv): botón "Descargar PDF (A4)" — mandato TAREAS_USUARIO |
| (este) | docs: STATUS-portfolio |

## RAG portafolio (Fase 4) — completado

- `rag/portfolio.json`: **6 fuentes, 36 chunks**, build v4 OK (`npx tsx scripts/build_rag/index.ts --domain portfolio`). Manifest con evidenceTier `internal-doc` y authority por dominio (portfolio-site, case-study, cv, readme, artstation).
- Fuentes parafraseadas con locator `section`: doc-20 (10 chunks: objetivo, estructura MVP, hero, orden de cards, consistencia de términos, SEO, criterios de aceptación MVP, dirección visual), doc-08B (7: posicionamiento, orden de página, métricas con lenguaje seguro, checklists, integraciones), doc-17 (6: identidad, claims prohibidos, base ATS, bullets, variantes, confirmaciones pendientes), doc-19B (3), doc-28E (5: headline/resume, software con niveles, job preferences, links/freelance, NoAI), doc-29C (5: taxonomía de breakdowns, posts TwinSight/retrato, checklists, tools/tags/orden).
- Consulta prevista desde PortfolioSimulator ("¿por qué este orden de proyectos?" → spec citado).

## Verificación focus variants (doc 20) — corregido

- Las 4 variantes de `src/data/focusVariants.ts` (technical-visualization, unity-webgl, unity-technical-artist, 3d-pipeline) estaban enlazadas desde home (FocusVariantSwitcher) pero **no desde /work** → añadida sección "Focus routes" en `work.astro` con las 4 rutas.
- Copy de variantes verificado contra las reglas de consistencia de doc-20 §18: sin términos prohibidos (multimedia, creative, generalist, full-stack, AI expert, game developer, graphic design); wording "digital-twin-adjacent" cauteloso correcto.
- **Desviación corregida en home**: el h1 estilizado ("Realtime 3D Systems / Unity WebGL") no seguía la headline recomendada de doc-20 §4 → ahora "Real-Time 3D / Developer / Unity Technical Artist" + subheadline y línea de ubicación/disponibilidad exactas del spec ("Based in Colombia. Available for remote contractor/B2B roles.").
- Orden de proyectos (TwinSight → Human → ARA): se mantiene. Doc-20 §6 (MVP) ponía ARA 2º, pero doc-29C §19 (más reciente) ordena TwinSight → retrato como pilares 1-2 y la home ya declara esa decisión ("Two anchors"); ARA nunca aparece como principal (regla dura §1 intacta).

## CV → PDF (mandato usuario) — v1 entregado

- Botón **"Descargar PDF (A4)"** en `/cv` (label exacto del mandato), con tooltip que explica "Save as PDF" en el diálogo de impresión.
- **Decisión documentada**: v1 = `window.print()` + hoja de estilos print dedicada (bloque `@media print` por página en `cv.astro`: A4, chrome del sitio oculto, citas de procedencia ocultas). Sin librería de PDF (jsPDF/puppeteer): coste de bundle cero y tipografía pixel-perfect; todo navegador moderno ofrece "Guardar como PDF" en el diálogo. **v2** (si se necesita archivo adjunto sin interacción): render headless.
- Extra v1: `document.title` se fija al `fileName` de la variante activa antes de imprimir → el PDF sugerido por el navegador se nombra correctamente (p.ej. `Alexander_Woodcock_RealTime3D_Unity_CV`); se restaura en `afterprint`.
- Nota doc-28B §9.4 se respeta en UI: los placeholders en corchetes siguen visibles y el panel "Pending confirmations" bloquea conceptualmente el export final.

## Validación

- `npx astro check` → **0 errores, 0 warnings** (37 hints preexistentes del repo).
- `npm test` → **139/139 verdes** (15 archivos; incluye 12 de `src/data/cv/__tests__/cvCompose.test.ts`).
- `npx tsx scripts/build_rag/index.ts --domain portfolio` → OK.
- No se tocó ningún archivo fuera del OWN de §3.7.

## Pendientes / tickets

1. **`rag/index.json` global no se reconstruye** — `--index` falla por chunks inválidos de OTRO dominio (fitness: `maughan-ch47-strength`, `3g-ch2-6-selected` — `entities` debe ser array de strings no vacíos). **Ticket para AG-CORE/propietario de fitness**; portfolio.json es válido por sí mismo.
2. Confirmaciones del usuario antes del CV final (doc-17 §2): email, teléfono, ubicación exacta, URL portafolio, fechas de defensa/graduación/freelance, métricas finales TwinSight, URL demo WebGL — placeholders explícitos en `/cv`.
3. URL real de ArtStation Human breakdown cuando exista (placeholder en checklist visible, no hardcode).
4. v2 del export PDF (render headless) solo si el usuario necesita archivo sin diálogo.
