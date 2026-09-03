# 15 — ADRs (decisiones que cierran debates)

Formato: contexto → decisión → consecuencias → migración. Fecha 2026-09-04. Estado: PROPUESTAS
pendientes de ratificación del usuario; mientras tanto, los encargos siguen la decisión.

## ADR-1 — Estructura de repo: quedarse en `src/` + `worker/`

- Contexto: roadmap 01 pide `apps/web|apps/worker|packages/fitapp`; el código real
  (477 archivos, alias `@/`, 39 rutas) vive en `src/` + `worker/`.
- Decisión: **NO migrar a `apps/`**. El split no aporta nada con `output:static` y
  rompería 100+ imports.
- Migración: archivar `architecture/11` como histórico; añadir nota en `roadmap/01`.
- Excepción: `packages/fitapp` nace SOLO si otra app consume el motor (hoy nadie).

## ADR-2 — Deploy: estático + worker separado

- Decisión: **GitHub Pages estático (actual, `deploy.yml` funciona) + worker Cloudflare
  aparte** con el contrato único del archivo 22. `base: /PlanMaestroOS/` se mantiene,
  pero los GLB se sirven con rutas relativas verificadas en QA (fix N7 del archivo 10).
- Consecuencia: `PUBLIC_WORKER_URL` apunta al worker real o vacío (modo local);
  jamás URL ficticia `.internal` en código.

## ADR-3 — Obsidian: lector, no gemelo

- Decisión: `_obsidian/` apunta a `biblioteca/extracciones/` y `docs/` (solo lectura)
  + Dataview sobre `public/data/graph.json`. Notas propias en `_obsidian/notas/`,
  importadas por job como `NoteReference` (RAG dinámico). **Sin sync bidireccional.**
- Dueño: sin agente dedicado; el job lo implementa AG-CORE en M1.

## ADR-4 — Contratos: crear los 4 faltantes y unificar los divergentes

- Crear: `Course, ProjectPortfolio, ReviewCard, PracticeAttempt, SpeakingSession`
  (exigidos por arch 06/08, ausentes). Unificar §14.3 (1-3). Encargo único de 1 día.

## ADR-5 — IA: propone, reglas disponen, humano aprueba

- Decisión: niveles L1 informa / L2 propone / L3 prepara / **L4 ejecuta solo si reversible
  y declarado**. Salud/dinero/comunicaciones externas = siempre aprobación.
  Métrica semanal % aprobados; <50% ⇒ job pausado y recalibrado.

## ADR-6 — Salud: local-only por defecto

- `clinical-state-v1`, `nutrition-local-v1`, `painLog`, `femaleProfile`, `fitapp_workout_history`
  viven en IndexedDB/local. Sync externo solo con opt-in por dominio. Botón
  exportar/borrar. Spark/Sheets jamás reciben salud (archivo 08 reglas a-d).

## ADR-7 — Orquestación: ORQ primero en cada fase

- AG-ORQ deja de ser "ola final": cada fase empieza definiendo/extiendiendo
  `todayAdapter` + eventos, y termina con smoke de Hoy. Detalle archivo 17.

## ADR-8 — Contenido: ronda FINAL manda

- Ante extracciones multi-ronda, solo la marcada FINAL entra a `rag/*/fuentes/`.
  Chunks sin `sourceRef.docId` válido (incl. `TODO-cita` de `anatomy/bones|ligaments|
  tendons|joints`) **no entran al grafo** (van a cola de curación, no a silencio).
