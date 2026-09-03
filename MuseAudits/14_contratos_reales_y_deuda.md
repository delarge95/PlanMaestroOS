# 14 — Mapa de contratos REALES (código manda, docs obedecen)

> Verdad verificada leyendo el código el 2026-09-04. Si un doc contradice esta tabla,
> el doc está desactualizado. Agentes: antes de escribir contra un store, leer la
> interfaz citada aquí (lección del incidente ORQ).

## 14.1 Núcleo determinista (existe, funciona, docs no lo describen)

| Pieza | Ruta real | Exports clave |
|---|---|---|
| Tipos reglas | `src/lib/rules/types.ts` | `DomainRule, RuleContext{userState,week,previousWeek?,todayIso,domain?}, RuleEvaluation, RuleStatus ok\|warning\|violation\|not-applicable, EvidenceTier, SourceRef{docId,chapter?,page?}, Range, RiskThresholds` |
| Evaluador | `src/lib/rules/evaluateRules.ts` | `evaluateRule, evaluateRules, withRisk, withinBounds, defaultMessage` (prioridad: not-applicable > violation > warning > ok) |
| Feed UserState | `src/lib/rules/userStateFeed.ts` (**NO `src/lib/fitness/`**) | `buildUserState, readRealUserStateSources, workoutsToSessions, biofeedbackToDailyLogs, classifyPattern, RawLoggedWorkout, RawBioFeedback` |
| EventBus | `src/lib/events/eventBus.ts` + `types.ts` | `createEventBus, EventBus{on,onAny,once,emit,history,last}`, 20 `AppEventType` cerrados. **0 emisores/oyentes productivos hoy** |
| Sugerencias | `src/lib/suggestions/suggestionEngine.ts`, `fromRuleEvaluations.ts`, `types.ts` | `SuggestionEngine{propose,markShown,accept,dismiss,apply,recordOutcome,expireDue,active,snapshot,restore}`, cooldowns `{training-load:24,pain:48,progression:72,lifestyle:96}`, defaults maxActive 3 / TTL 72h |
| Inbox UI | `src/components/suggestions/SuggestionInbox.tsx` | Montado en Today |
| UserState | `src/data/contracts/userState.ts` (`USER_STATE_VERSION=1`) | `UserState{version,updatedAtIso,profile,dailyLogs,sessions,pain,skills,metrics}`, `createEmptyUserState, deriveWeekAggregates, computeDeltas, computeStreaks, weekKeyFor` |
| Task | `src/data/contracts/task.ts` | `Task{id,externalId,notionPageId?,title,area,singleNextAction,estimatedMinutes,priority:Alta\|Media\|Baja,dueDateIso?,status:PorHacer\|EnCurso\|Bloqueado\|Hecho\|Saltado,isTop3?,blockAssignment?}` |
| Agregador Hoy | `src/data/adapters/todayAdapter.ts` | `getTodayDomainView, getCareerPipelineView` (lee careerStore + vocabularyStore + clinicalStore + fitness). **Gastronomía ausente** |

## 14.2 Los 12 stores reales (keys exactas localStorage)

`plan-maestro-state-v3` (app) · `fitapp-active-program-v1` · `planmaestro_active_progressions_v1` ·
`plan-maestro-skills-store-v1` · `career-state-v1` · `clinical-state-v1` ·
`languages-vocabulary-v1` · `nutrition-local-v1` (v3) · `cardio-presets-v1` ·
`fitapp-prehab-state-v1` · `portapp-sprint-board-v1` · `portapp-launch-v1` ·
más raw `fitapp_workout_history`, `cardio_session_history` (sin zustand).

**Deuda**: `migrateLocalStorage.ts` cubre 4/12 y mapea `plan_maestro_career_goals`
(huérfana: `careerStore` persiste `career-state-v1`). Fix en archivo 23.

## 14.3 Divergencias que hay que unificar (una sola dueña por concepto)

1. **Task**: `task.ts` (`Hecho|Saltado|isTop3|blockAssignment`) vs `globalDataModel.ts TaskEntity`
   (`Completado`, sin esos campos). Dueña: `task.ts`. Migrar `TaskEntity.status` al vocabulario de `task.ts`.
2. **Pipeline career**: `domainContracts.ts CareerPipelineItem` (5: Prospecto…Rechazado) vs
   `globalDataModel.ts CareerApplicationEntity` (9 pipelineStage) vs `applications.ts`
   (7 `PipelineStage` Frío…Cerrado + 10 `TrackerStatus`). Dueño: `applications.ts` (7+10,
   es lo que la UI usa). Los otros dos pasan a vistas derivadas, no tipos paralelos.
3. **Áreas**: `Task.area` trae `tesis|idiomas` que `AreaEntity.slug` no tiene. Añadirlas al slug.
4. **Notion adapters dobles**: `src/lib/adapters/notionTasks.ts|notionCareer.ts`
   (campos `Title/Status/Area/ExternalId`) vs `src/data/notion/mappers.ts`
   (`Titulo/Estado/Prioridad/Empresa/Rol` + filtro clínico). Dueño: `mappers.ts`
   (tiene sanitización). Reescribir los dos adapters como wrappers finos. Detalle en archivo 23.
5. **Env**: `.env.example` dice `NOTION_API_KEY`, el código lee `NOTION_TOKEN`.
   Dueño: `NOTION_TOKEN`. Corregir `.env.example` (1 línea).
6. **Worker triple contrato**: `WorkerClient` (`Bearer /api/v1/write|ai/propose|sync`) vs
   `requestAiAction` (`x-pm-key POST /ai/action`) vs `handleWorkerRequest({action})`
   sin HTTP. Dueño: contrato único en archivo 22. Hasta entonces, **nadie añade endpoints**.
7. **RAG legacy**: `staticRag.ts`/`dynamicRag.ts` (dominios `fitness|idiomas|clinico|proyectos`,
   datos quemados) vs RAG v4 (`scripts/build_rag/schema.ts`, 11 dominios, `rag/*.json`).
   Dueño: v4. Marcar legacy `@deprecated` y no consumirlo en código nuevo.
8. **Reglas muertas**: `fit:deload-due`, `fit:pain-not-worse-next-day` con `appliesWhen:()=>false`
   (`fitnessRules.ts:158,194`). O se alimentan (`pain[]` hoy nunca se escribe) o se borran
   en el encargo que implemente `painLog` (archivo 18).
9. **Año muerto**: `workoutsToSessions:86` usa siempre año actual (rama muerta). Reescribir
   parse con año explícito del log o `undefined` honesto.
10. **`energy` sin contrato**: viaja en `context.domain` sin tipo. Añadir
    `RuleContextDomain{energyToday?:PerceivedEnergy, vocabDueCount?:number}` tipado.
