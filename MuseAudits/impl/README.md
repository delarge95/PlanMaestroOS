# `impl/` — La app completa, autocontenida, drop-in

> Todo el código necesario para hacer realidad la app, SIN tocar nada fuera de
> `MuseAudits/`. Cada módulo es TypeScript estricto + tests `node:test`, verificado con
> `npx tsc --noEmit -p MuseAudits/impl/tsconfig.json` y `npx tsx --test MuseAudits/impl/**/*.test.ts`.
> Autocontenido a propósito: define sus propios tipos espejo de los contratos reales
> (archivo `14`); la tabla de aterrizaje dice exactamente dónde cae cada archivo en el repo.

## Mapa de aterrizaje (origen → destino en el repo, cuando el usuario lo autorice)

| Origen (`impl/`) | Destino repo | Encargo |
|---|---|---|
| `graph/types.ts` | `src/data/contracts/graph.ts` (nuevo) | W1/M2 |
| `graph/engine.ts`, `graph/queries.ts` | `src/lib/graph/` (nuevo) | W1/M2 |
| `graph/build.ts` | `scripts/build_graph.ts` + `scripts/validateGraph.ts` | W1/M2 |
| `career/fitScore.ts`, `career/composeVariant.ts` | `src/lib/career/` (nuevo) | M4 |
| `career/jobFeed.ts` | `src/data/career/liveJobFeed.*` + job `careerResearch` | M1/M4 |
| `career/courseROI.ts` | `src/lib/career/courseROI.ts` | M4 |
| `injury/triage.ts` | `src/lib/fitness/injuryDifferential.ts` | M3 |
| `injury/lesionRules.ts` | `src/lib/rules/fitness/lesion-*.ts` | M3 |
| `injury/painLog.ts` | `src/lib/fitness/painLog.ts` | M3 |
| `rules/evidence.ts` | `src/lib/rules/evidence.ts` (jerarquía + especialidad) | M1 |
| `rules/rpeCalibration.ts` | regla seed `fit:rpe-calibration` | M1 |
| `worker/contract.ts`, `worker/server.ts` | `worker/src/` (contrato único + router) | S4 |
| `worker/prompts.ts` | `worker/src/ai/prompts/` | S4/M6 |
| `worker/jobs.ts` | `worker/src/jobs/` (entradas reales) | M1 |
| `sync/fieldMap.ts` | wrappers `src/lib/adapters/notion*.ts` | S5 |
| `sync/migrationMap.ts` | `src/lib/storage/migrateLocalStorage.ts` (ampliar) | S5 |
| `sync/backupService.ts` | `src/lib/storage/backupService.ts` (nuevo, G2) | M6 |
| `qa/qaApp.mjs` | extender `scripts/qa.mjs` (39 rutas `/app`) | M7 |
| `qa/antiSecret.mjs` | `ci` + pre-commit hook (G14 + gigantes-JSON §30.3) | S5 |
| `qa/worktreesSync.mjs` | `npm run worktrees:sync` (G3) | S1 |
| `scripts/linkChecker.mjs` | `scripts/` + job semanal (verifica careers/demos) | M4 |
| `scripts/githubSync.mjs` | snapshot repos → `ProjectCard` (19 §19.4) | M4 |
| `scripts/obsidianSync.mjs` | puente `_obsidian/` ↔ grafo (ADR-3) | M2 |
| `scripts/wearableRunner.mjs` | ingesta CSV → `WearableDay[]` (21) | M5 |
| `scripts/langChunks.mjs` | catálogos EN/DE → chunks v4 (20) | S6 |
| `scripts/restoreBackup.mjs` | verifica backups (nunca aplica) | M6 |
| `scripts/trackerAudit.mjs` | seeds vs xlsx + gap a 12 apps (19) | M4 |
| `scripts/ragAudit.mjs` | calidad v4 por dominio (32) | S6 |
| `qa/appRoutes.ts` | fuente de verdad de rutas para `qaApp` | M7 |
| `security/secureStorage.ts` | `src/lib/storage/secureStorage.ts` (G8 + fix) | M6 |
| `security/sanitize.ts` | pipeline pre-LLM (G-seguridad L3) | S4 |
| `security/dataMatrix.ts` | matriz gobernanza ejecutable (G9) | S5 |
| `bridges/wearable.ts`, `bridges/importWearableCsv.ts` | `src/data/contracts/wearable.ts` + script | L2 |
| `bridges/sessionToNutrition.ts` | parche `GuidedSessionRunner` (F1) | S3 |
| `bridges/morningBriefing.ts` | job `morningPlan` (puro, testeable) | M1 |
| `bridges/minViable.ts` | modo mínimo viable MEV (rescate inercia) | M1 |
| `bridges/webglOnDemand.ts` | parche `AnatomyViewer/ModelPreview` (G4) | M7 |
| `bridges/bleHeartRate.ts` | `src/lib/wearables/bleHeartRate.ts` (L2 BLE) | L2 |
| `rag/synonyms.ts`, `rag/chunkValidate.ts` | búsqueda híbrida + validación chunks | S6 |
| `rag/largeJsonLoader.ts` | carga dinámica JSONs >500KB (G1) | S1 |
| `rules/evidence.ts`, `rules/rpeCalibration.ts` | jerarquía evidencia + calibración RPE | M1 |
| `rules/fatigue.ts` | presupuesto RPE×min + interferencia (38) | M1 |
| `rules/volumeRules.ts` | reglas `fit:vol-*` lote 1 (34) | M1 |
| `rules/dayRules.ts` | seeds nutrición/clínico display-only | M1 |
| `career/companySeeds.ts` | ampliar `companiesSeed` (17 doc-11) | M4 |
| `worker/publicApi.ts` | `worker/src/publicApi.ts` (L5, solo lectura) | L5 |
| `pwa/manifest.webmanifest`, `pwa/sw.js` | `public/` + registro (M7) | M7 |
| `scripts/*.mjs` (7) | `scripts/` del repo (linkChecker, githubSync, obsidianSync, wearableRunner, langChunks, restoreBackup, trackerAudit) | S3 |

## Matemáticas

Todas las fórmulas con deducción y fuentes en `31_matematica_formulas.md`.
