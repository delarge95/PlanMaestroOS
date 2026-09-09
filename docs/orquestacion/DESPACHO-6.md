# DESPACHO 6 — Sesión de verificación integral + empresas a Notion (2026-09-09)

> Sesión autónoma del orquestador (GLM 5.3 max). Mandato: avanzar toda la
> arquitectura posible, corregir problemas, subir empresas de los docs
> laborales a la DB y actuar como orquestador con subagentes.

## 1. Empresas → Notion Career DB ✅

- Extracción (subagente) de los docs laborales 11/30/31 + grep de los demás:
  **126 empresas objetivo** en `scripts/data/companyTargets.json`
  (13 Alta, 53 Media, 40 Baja, 20 watchlist; 117 con URL; job boards y
  placeholders excluidos).
- Push idempotente con `scripts/push-career-companies.mjs` (dedupe por
  Empresa+Rol, retry 429): **126/126 creadas, 0 fallos**, verificado por
  query paginada. Estado inicial `Prospecto`, `ConsentimientoEnvio=false`.
- Nota: la app ya tenía 120 targets internos (`companyTargets.ts`, AG-CAREER);
  Notion queda como espejo extendido (incluye 9 vacantes vivas del doc-30).

## 2. Incidentes evitados / corrupción detectada

- `package.json` del repo fue SOBREESCRITO por el del cotizador
  (`services-cotizador`) — eliminaba zustand/@notionhq/client/lucide y los
  scripts de CI. Restaurado desde git. Origen probable: extracción de
  `cotizador-fuente.zip` / `services-extract-230150/` en la raíz.
- `services-extract-230150/` (gitignored) se excluyó de tsconfig: astro check
  escaneaba sus `dist/` (2.8 MB de artefactos, 2 falsos errores).

## 3. Merges de worktrees (main)

| Rama | Commits | Contenido | Estado |
|---|---|---|---|
| agent/core | 5 | Worker IA router + workerClient + auditLogger (AG-CORE B1-B5) | ✅ merge limpio |
| agent/fitness | 17 | Ejecución T1-T6 del design audit (ds-*, lucide, jerarquía h1/h2/h3, mojibake) | ✅ merge limpio (95 archivos, −570 líneas netas) |
| agent/servicios | 11 | Cotizador ciclos 16-19 (turbina TURBINE.glb, precio vivo) | ✅ merge limpio |
| agent/portfolio | 1 | **WIP SIN VERIFICAR** — NO mergeado (pendiente de validar) |

## 4. Auditoría de arquitectura (subagente Explore) + fixes aplicados

Verificación global `tsc --noEmit` = EXIT 0. Hallazgos y resolución:

### Corregidos en `fb00047`
- **C1** ExerciseModal: early return antes del useMemo → crash de orden de
  hooks al abrir ficha desde WeeklyGridPlanner. Hooks ahora incondicionales.
  Verificado en vivo (ruta completa del crash).
- **C2** TodayRoutineStack guardaba shape incompatible en
  `fitapp_workout_history` → sesiones invisibles para Progreso/reglas.
  Ahora escribe el shape canónico de `completedWorkoutFromState`.
- **M1** readVocabDue leía `dueDate` (inexistente) → contador siempre 0.
  Ahora usa `isDue()` de spacedRepetition.
- **M2** Año de workouts: ternario con ramas idénticas → mes futuro = año-1.
- **M3** Comparación muerta `t.area === "fitness"` → `"Fitness"` (detalle
  expandible de fitness en Hoy vuelve a ser alcanzable).
- **M10** Datos inventados eliminados del adapter (§0.1): seed "Studio X",
  remoteType fijo, PR hardcodeado, `|| 1`/`|| 3` en conteos. Tests
  actualizados para afirmar comportamiento honesto.
- **GUI** "Día N:" duplicado en Top 3 (prefijo doble del adapter); card
  IDIOMAS mostraba la micro-acción de CARRERA → nueva
  `TodayDomainView.languagesSummary.germanDueCount` + acción propia.
- **M12** Barrel de sugerencias ahora exporta `fromRuleEvaluations` y
  `RULE_SUGGESTION_COOLDOWNS`.

### Deuda documentada (NO corregida — requiere decisión o ciclo propio)
- **M4** RoadmapBoard usa clave retirada `plan_maestro_career_goals`
  (doble fuente de verdad vs careerStore).
- **M5** `cardio_session_history`: nadie la escribe (feed cardio vacío).
- **M6/M7** skillStateStore sin `version`; careerStore sin `partialize`.
- **M8/M9** Doble subsistema de persistencia fitness (`fitapp_workout_history`
  vs `fit_*_v1` huérfanas vía fitnessStorageAdapter).
- **M11** `EnergyLevel` y `PerceivedEnergy` duplicados sin puente.
- Huérfanos verificados: src/lib/graph/**, src/lib/storage/idb+migrate,
  notionSyncService/notionClient (solo UI potencial), FitAppWorkoutLogger,
  ExerciseDatabaseBrowser, InjuryTriage, entre otros (lista completa en el
  informe de auditoría del subagente, registrado en este despacho).

## 5. Worker IA — desplegable

`worker/` ahora tiene `wrangler.toml`, `package.json` y `tsconfig.json`.
El router (B1) genera **mocks deterministas**; la llamada real a Gemini es
el ENCARGO M6 (usuario, en paralelo). Deploy: `cd worker && npm i &&
npx wrangler secret put WORKER_SECRET_KEY && npx wrangler secret put
GEMINI_API_KEY && npm run deploy`.

## 6. Verificación final (todo verde)

| Gate | Resultado |
|---|---|
| `npm test` (vitest) | **503/503** (+20 nuevos de Worker IA) |
| `npm run test:impl` (node:test) | **64/64** (tsx añadido a devDeps) |
| `npx astro check` | **0 errores / 0 warnings** (696 archivos) |
| `npm run build` | 52 páginas OK |
| GUI (Playwright, skill web-gui-tester) | Hoy/Fitness/Laboral/Idiomas/Cronogramas: **5/5 PASS, 0 errores de consola**; configurador de rutina completo (7 ejercicios, RIR/RPE, pesos, sustituciones) |

Fixes adicionales de infra: vitest ya no arrastra los tests node:test de
MuseAudits (corrían rotos como "No test suite found"); `tsx` en devDeps.

## 7. Pendiente del usuario (sin cambios)

- Prompt catálogo de reglas en GLM 5.3 web (DESPACHO-5 §A).
- Gemini Spark: ahora puede leer Career/Sessions/Measurements de Notion (126
  empresas ya cargadas) — DESPACHO-5 §B.
- Worker IA real (ENCARGO M6).
- Validar y merge del WIP de agent/portfolio.
