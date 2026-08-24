# STATUS — AG-CAREER (ciclo 1, 2026-08-23)

> Rama `agent/career` · worktree `E:\Laboral\.worktrees\career`. 7 commits locales (uno por tarea). Sin push.
> Verificación de cierre: `astro check` 0 errores / 0 warnings · `npm test` 21 archivos, 198 tests verdes (38 de career).

## Resumen del ciclo

La sección laboral dejó de ser simulación con mocks: tracker xlsx real parseado, CompanyDatabase con los 120 targets del doc-11, regla de única próxima acción visible y bloqueante, `rag/career.json` (el RAG más grande del sistema), InteractiveRoadmapDashboard montado y tablero semanal doc-34 en la vista Hoy.

## Datos importados (reales, trazables)

| Fuente | Contenido | Destino |
|---|---|---|
| Tracker xlsx (`_roadmap_laboral/tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx`) | 3 aplicaciones (Treeview Studio, Active Theory, Product Visualization Target — todas Saved/A1, fit 10–12), plan de 16 semanas, 8 reglas canónicas, 9 estados de aplicación, regla de Fit Score (≥10 aplicar / 7–9 investigar / ≤6 descartar) | `applicationsSeed.ts` + `companiesSeed.ts` (auto-generados por `rag/career/scripts/parse-tracker.ts`) |
| Doc-11 (57 KB) | 120 empresas (identity + feasibility + scoring), cola A1 (20) y A2 (16), 31 job boards, 20 recruiters, 26 comunidades, 42 search strings, 6 descalificadores | `companyTargets.ts` (auto-generado por `rag/career/scripts/parse-doc11.ts`) |
| Docs 14/15 | 3 fases / 12 hitos del 30/60/90 con cita por hito, 5 familias de roles (doc-15 §4), meta salarial (doc-15 §5) | `roadmapMilestones.ts` |
| Doc-34 | Cadencia semanal (objetivo 5–8 modo selectivo, follow-ups 3–8, agenda Lun–Vie) | `WeeklyExecutionBoard.tsx` en la vista Hoy |

- **Store propio**: `src/data/career/careerStore.ts` (zustand persist `'career-state-v1'`): aplicaciones editables, `moveStage` (sincroniza `trackerStatus` y RECHAZA avanzar sin única próxima acción), `setNextAction`, `resetToSeed`, timelines de empresas. `JobsPipeline` y `CareerToday` conectados; mocks Epic/Ubisoft/Riot eliminados de toda la UI.
- **Mapper tracker↔pipeline**: `TRACKER_STATUS_TO_STAGE` / `STAGE_TO_DEFAULT_TRACKER_STATUS` en `applications.ts`. Paused queda en columna Frío con badge del estado real.

## Cobertura RAG por doc (rag/career.json — 74 fuentes, 1647 chunks, v4.0.0)

- Chunked por headings (docs OWN de career): 00→48 · 01→54 · 02→61 · 03→41 · 04→47 · 05→42 · 06→33 · 09→37 · 10→56 · 11→23 · 12→70 · 13→34 · 14→46 · 15→73 · 16→51 · 18→99 · 22→75 · 23→77 · 24→76 · 26→65 · 27→80 · 28→52 · 28C→33 · 30→18 · 31→80 · 32→67 · 34→69 · 35→94.
- Index-only (1 chunk de remisión, owner AG-PORT → `rag/portfolio.json`): 07, 08, 08B, 17, 19, 19B, 20, 21, 21B, 28B, 28D, 28D-alt, 28D-complete, 28E, 29, 29B, 29C, 33, 36.
- Historic (9 fuentes, chunk índice con regla "doc-01 manda") y Research (18 md, chunk índice; los PDF de Research/ no se ingieren — quedan como referencia).
- Manifest con docIds estables; `doc-01` authority priority 1 (source of truth del perfil). `rag/index.json` regenerado (6 dominios).
- Regenerar: `npx tsx rag/career/scripts/build-fuentes.ts && npx tsx scripts/build_rag/index.ts --domain career && npx tsx scripts/build_rag/index.ts --index`.

## Decisiones (documentadas)

1. **RoadmapBoard NO se elimina** (Regla de Oro §0.9): `/app/career/roadmap` monta `CareerRoadmapWorkspace` con pestañas "Dashboard 90 días (doc-14/15)" (principal, InteractiveRoadmapDashboard antes huérfano) + "Board de metas" (RoadmapBoard, secundaria).
2. **singleNextAction del seed se deriva de notes/portfolioAngle del tracker** (el xlsx no trae texto de acción por fila); derivación determinista documentada en el parser.
3. **Tier de empresas derivado del scoring doc-11**: A → Top Priority, B → Standard, C/Watchlist → Watchlist; `sourceRef` cita las secciones exactas de cada tabla.
4. **Summaries del RAG conservan el texto original** de los docs: son documentos internos propios (la paráfrasis obligatoria aplica a fuentes externas con copyright); límite 1150 chars con split por párrafos.
5. **Paused → columna Frío** con badge `trackerStatus=Paused` (no existe columna "en pausa" en el kanban consolidado de 7 columnas).

## Pendientes (ciclo 2)

- **Módulo Entrevistas** (docs 23/35/24/13): banco de respuestas, scorecard de oferta, sistema de defensa.
- **Módulo Outreach** (doc 22): biblioteca de templates con variables por target.
- **Targeting matrix con scoring** (doc 31) y **escenarios seleccionables** (doc 27).
- **Fase 3 IA laboral**: drafts de follow-up con `AiDraftReview`, jobs `career-research` y `stuck-tasks` (apps >7 días sin movimiento — la métrica ya se muestra en el tablero semanal).
- Import/export JSON del tracker desde la UI (el reset a seed ya existe); stubs Notion (`notionCareer.ts`) aún apuntan al tipo antiguo — revisar en ciclo 2.
- Research/*.pdf sin ingerir (solo md); valorar extracción si se necesitan.

## Tickets

- Ninguno abierto. No se tocaron archivos de otros agentes (PortfolioSimulator/portfolio.astro/portfolioProjects/portfolioChecklist intactos; nav sin cambios).
