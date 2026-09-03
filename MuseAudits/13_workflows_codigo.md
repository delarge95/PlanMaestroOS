# 13 — Workflows y esqueletos de código (listos para despachar)

Cómo usar: cada bloque es un futuro ENCARGO (formato NORMAS_ORQUESTADOR: objetivo
único, archivos exactos, qué NO tocar, verificación). Ninguno está implementado.

## W1. Builder del grafo (M2)

- Crear `scripts/build_graph.ts`: lee `rag/*/index` + `src/data/fitness/**` +
  `src/data/career/companies*.ts` → emite `public/data/graph.json`
  `{nodes[], edges[]}` + `graph-stats {orphans[], counts}`.
- Crear `scripts/validateGraph.ts`: falla si huérfanos >5% o arista sin cita.
- NO tocar: ningún componente; solo añade scripts + `src/data/contracts/graph.ts`.
- Verificar: `npx tsx scripts/build_graph.ts && npx tsx scripts/validateGraph.ts`.

## W2. Anamnesis de lesión → reescritura de sesión (M3)

- Crear `src/components/fitness/injury/InjuryCheckin.tsx` (formulario 60s: zona via
  select + mini-visor READ, tipo, inicio, mecanismo, EVA, red-flags) → emite `InjuryReport`.
- Crear `src/lib/fitness/injuryDifferential.ts` PURO: `(report, matrix) => top3[]`
  con matriz inicial de 12 filas curadas (hombro/codo/rodilla/cadera, 3 estructuras c/u).
- Crear reglas `lesion:<slug>` en `src/lib/rules/fitness/` que consumen `InjuryReport`
  + EVA (≥7 descarga / 4-6 sustitución / 1-3 reducir ROM) + tests.
- Crear `src/lib/fitness/painLog.ts` + UI 7-días con regla de derivación (empeora 2 días → sugiere profesional).
- NO tocar: `TodayRoutineStack`, `fitnessRules.ts` existentes (solo añadir archivos + 3 líneas de montaje).
- Verificar: `npm test` (nuevos tests puros) + `astro check`.

## W3. CV procedural por empresa (M4)

- Crear `src/lib/career/fitScore.ts` PURO: `(projects|skills, company) => {score, reasons[]}`.
- Crear `src/lib/career/composeVariant.ts` PURO: `(company, role, projects, cvBase) => CVVariant` con plantillas doc-17/18.
- Crear UI `VariantComposer` en career (select empresa+rol → preview → export checklist doc-36).
- NO tocar: `careerStore`, seeds, pipeline (solo lectura).
- Verificar: tests con 3 empresas seed + smoke `/app/career/portfolio`.

## W4. WearableDay (F9/L2)

- Crear `src/data/contracts/wearable.ts`: `WearableDay {dateIso, steps?, restingHr?, hrv?, sleepMin?, weightKg?}`.
- Extender `userStateFeed.ts` con reader puro `wearableToDailyLogs()` + tests.
- Crear `scripts/import-wearable-csv.ts`: CSV → `WearableDay[]` validados.
- NO tocar: registro manual (el sensor confirma, no sustituye).

## W5. Jobs IA (M1)

- `worker/src/jobs/morning-plan.ts`: vencidas + hoy + energía → `AiDraft` Top3.
- `worker/src/jobs/evening-review.ts`, `stuck-tasks.ts` (>7d), `career-research.ts` (3 empresas/día).
- Todos devuelven borrador + `Datos usados`; UI existente `AiDraftReview` los aprueba.
- Puerta: métrica semanal % aprobados visible en Hoy (si <50%, pausar job).

## W6. QA `/app` + `UnavailableCard` (M7 + N4)

- Extender `scripts/qa.mjs`: las 39 rutas `/app` × 2 viewports + chequeo `set:html`.
- Crear `src/components/common/UnavailableCard.tsx` y usarla en los 4 estados
  (sin worker / sin RAG / sin datos / offline).
