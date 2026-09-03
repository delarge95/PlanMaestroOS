# 35 — 12 encargos despacho-ready (copiar → pegar → ejecutar)

> Cada encargo es autocontenido: un ejecutor con el repo + `MuseAudits/` lo cierra en
> 1-3 días sin preguntar. Formato NORMAS_ORQUESTADOR. Verificación global: DoD `24 §24.2`.

---

## E1 — Grafo v1 en repo (M2 · 2 días · AG-CORE)
- Leer: `MuseAudits/16`, `14 §14.1`, `impl/graph/*`, `impl/README.md` (fila graph).
- Crear: `src/data/contracts/graph.ts` (copiar `impl/graph/types.ts`),
  `src/lib/graph/engine.ts`, `src/lib/graph/queries.ts` (copiar),
  `scripts/build_graph.ts` + `scripts/validateGraph.ts` (envolver `impl/graph/build.ts` con fs: leer `src/data/**/*.ts` semilla mínima + `rag/*/manifest.json` → `public/data/graph.json`).
- Tests: portar `impl/graph/engine.test.ts` a `src/lib/graph/__tests__/`.
- NO tocar: stores, UI, resto de scripts. Añadir `validate:graph` a `ci` tras `validate:fitness`.
- Cierre: 5 queries verdes + `graph.json` generado + visor pendiente (E11).

## E2 — InjuryCheckin + painLog (M3 · 3 días · AG-FIT)
- Leer: `MuseAudits/18`, `36`, `impl/injury/*`, spec de UI en `40 §InjuryCheckin`.
- Crear: `src/components/fitness/injury/InjuryCheckin.tsx` (spec 40),
  `src/lib/fitness/injuryDifferential.ts` (envolver `impl/injury/triage.ts`),
  `src/lib/rules/fitness/lesion-*.ts` (copiar `impl/injury/lesionRules.ts`),
  `src/lib/fitness/painLog.ts` (copiar). Emitir `session:pain-reported`; escribir `pain[]`.
- NO tocar: `TodayRoutineStack`, `fitnessRules.ts` (solo añadir + montar PainWeekCard).
- Cierre: tests portados + caso simulado EVA 6 hombro → sustitución visible con cita.

## E3 — CV procedural + seeds (M4 · 2 días · AG-CAREER)
- Leer: `MuseAudits/19`, `impl/career/*`, spec `40 §VariantComposer`.
- Crear: `src/lib/career/fitScore.ts`, `composeVariant.ts` (copiar),
  ampliar `companiesSeed` con `impl/career/companySeeds.ts` (17),
  `VariantComposer` UI (spec 40). Borrar/aislar `careerServiceAdapter` MOCK.
- Migrar `RoadmapBoard/CourseTracker/NewsInbox` a `careerStore` (mata key huérfana).
- NO tocar: pipeline stages, seeds existentes (solo añadir).
- Cierre: variante para co-emersya generada con placeholders + 12 seeds cargadas.

## E4 — Wearables CSV + snapshot→nutrición (S3/M5 · 2 días · AG-NUTRI+AG-FIT)
- Leer: `MuseAudits/21`, `impl/bridges/wearable.ts`, `importWearableCsv.ts`, `sessionToNutrition.ts`.
- Crear: `src/data/contracts/wearable.ts` (copiar), `wearableToDailyLogs` en
  `userStateFeed.ts` ( envolver `mergeDailyLogs`), `scripts/import-wearable-csv.ts`
  (envolver parser + fs). En `GuidedSessionRunner`: tras guardar historial, llamar
  `sessionToActivity(snapshot, peso)` → `addActivity` en `nutritionStore` (mantener copiado manual).
- NO tocar: registro manual, `estimateDayBurn` (solo alimentarlo).
- Cierre: sesión guiada ⇒ quemado sube sin tocar nada + CSV ejemplo importado.

## E5 — Worker real + jobs (S4/M1 · 3 días · AG-CORE)
- Leer: `MuseAudits/22`, `07`, `impl/worker/*`, `impl/security/sanitize.ts`.
- Crear: `worker/src/contract.ts`, `server.ts` (router), `ai/prompts/` (copiar PROMPTS),
  cliente Gemini real en `ai/client.ts` (timeout 20s, 1 reintento, topes por acción),
  jobs con entradas reales (envolver `impl/worker/jobs.ts`), `wrangler.toml`,
  `sanitize` pre-LLM. Reescribir `WorkerClient` como wrapper del contrato único.
- Tests: portar `impl/worker/worker.test.ts` (primeros tests del worker).
- NO tocar: UI salvo botón nutrición (ENCARGO M6 vigente) + `UnavailableCard`.
- Cierre: `/ai/draft` responde 200 con key, 501 sin key, 401 con mala key.

## E6 — Sync Notion unificado + backup (M6 · 2 días · AG-CORE)
- Leer: `MuseAudits/23`, `impl/sync/*`.
- Hacer: `.env.example` (`NOTION_TOKEN`), adapters como wrappers de `fieldMap`,
  `MIGRATION_MAP` 14 keys, `backupService.ts` (copiar) con disparo tras sesión/postulación,
  `NotionSyncStatus` real, scripts npm `sync:read|sync:write|jobs:run`, piloto 1 dominio.
- NO tocar: resto de dominios (siguen offline).
- Cierre: `today.json` con `Actualizado hace Xh` + backup descargable.

## E7 — RAG EN/DE + validación chunks (S6 · 2 días · AG-EN/AG-DE + Flash)
- Leer: `MuseAudits/07`, `20 §20.1`, `impl/rag/*`.
- Hacer: scripts `en/de-json-to-chunks` (usar `impl/S3` + formato v4),
  `validateChunks` en CI, `synonyms.ts` envolviendo búsqueda, `largeJsonLoader`
  para `master_rag_dataset` + `career/anatomy.json` (mata OOM).
- Cierre: english/german >150 chunks + `astro check` sin flag 8GB.

## E8 — Nav + QA 52 rutas (M7 · 1 día · AG-ORQ)
- Leer: `MuseAudits/17 §17.4`, `32`, `impl/qa/*`.
- Hacer: `sectionNavConfig` completa (destinos finales, nunca redirect-shells),
  2 tickets (nutrition/anatomy), `qaApp` en CI (`qa:app`), `UnavailableCard` en 4 estados.
- Cierre: `qa:app` verde + captura desktop/móvil por dominio.

## E9 — Seguridad (S5 · 1 día · AG-CORE)
- Leer: `MuseAudits/25`, `impl/security/*`.
- Hacer: `secureStorage.ts` + flags local-only + botón exportar/borrar salud,
  `dataMatrix.assertCanSend` en sync/worker, `antiSecret` en CI + hook pre-commit,
  `set:html` auditado (0 externos).
- Cierre: checklist pre-sync `05` en verde.

## E10 — Lesiones contenido + 100 reglas lote 1 (M1/M3 · 3 días · AG-FIT + fisio)
- Leer: `MuseAudits/34`, `36`, `impl/rules/*`, prompt DESPACHO-5 §A.
- Hacer: chunks `volume-landmarks` + reglas torso-empuje (lote 1 de `34`),
  `evidence.ts` en repo, regla `fit:rpe-calibration`, curación `TODO-cita` tendones/articulaciones.
- Cierre: +15 reglas citadas con tests + RAG fitness +1 fuente.

## E11 — Visores: grafo + hoy (M2/M1 · 2 días · AG-ORQ/AG-CORE)
- Leer: `16 §16.3`, `40 §GraphInspector`, `17 §17.2-17.3`.
- Hacer: `GraphInspector` (`/app/library/graph` + nav + smoke), `todayAdapter` completo
  (gastro real, idiomas como Task, conteos career), `index↔today` sin duplicar,
  `ApprovalMeter` semanal.
- Cierre: Hoy muestra fila gastro + idiomas + career vivos.

## E12 — Gastro conectada + cocina v1 (L3 · 2 días · AG-GASTRO)
- Leer: `MuseAudits/26`, `37`, `39`, `impl` (macros bridge en E4).
- Hacer: `GastronomyToday` real, `SavedInbox` con parser, `fitnessGoal`→borrador plan +
  lista compra, micros top-5 en fichas, checklist cocina nivel esencial con COP.
- Cierre: plan volumen propone kcal/proteína de `kcalEstimator` + compra generada.
