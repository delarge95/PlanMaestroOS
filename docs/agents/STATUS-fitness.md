# STATUS — AG-FIT (rama `agent/fitness`)

> Ciclo consolidación + B1-B8 COMPLETO (2026-08-23). Merge de main al día
> (checkpoint docs + rag fix incluidos). Sin push; commits locales.

## Bloque A (refactor) — COMPLETO

| # | Tarea | Commit clave / decisión |
|---|---|---|
| A1 | FitnessTabWorkspace experiencia oficial de `/app/fitness` (`?tab=today/routines/progress/library`); `catalog.astro` = alias redirect a `?tab=routines` | 6941cd9 |
| A2 | Borrados 10 componentes muertos (grep-verificado, 0 referencias) | 0d53ac0 |
| A3 | Rutina min-max con fuente única `fitappRoutineDataset` | 7706001 |
| A4 | `useIsMobile`, index keys estables, estado muerto fuera | 3b5ef16 |
| A5 | Banner Prehab derivado de estado persistido (`fitapp-prehab-state-v1`), cierre por día | 68ca5a1 |

## Bloque B (experiencia Hoy + vínculos + progreso real) — COMPLETO

| # | Tarea | Commit clave / decisión |
|---|---|---|
| B1 | Calendario REAL: `programCalendar.ts` (fecha del sistema; ancla = lunes de `startedAt`; día efectivo = reales − `postponedDays`) | e2045f4 |
| B2 | Postergar/Restablecer con sentido: 1 postergación/día real (`lastPostponedOn`), reset en menú secundario | d5433c4 |
| B3 | Header compacto colapsable en Hoy (+fix JSX huérfano de B3/B5) | b74c8ea |
| B4 | Links correctos desde Hoy (skill→árbol, rutina→rutina); nace `progressionPathLinks.ts` | 29194eb |
| B5 | Video en flujo (ExerciseModal + YouTubePlayer) | b74c8ea |
| B6 | Explorador de rutinas: filtros persistentes (`fitapp_catalog_filters_v1`) + grid tarjetas + detalle en Sheet | 0fde641 |
| B7 | Progresiones↔rutinas vinculadas | 7608706 (ver decisiones) |
| B8 | Progreso real sin números falsos | c5f6d35 + e4ff05f + d12df1d (ver decisiones) |

## Decisiones clave (por si hay que defenderlas o revertirlas)

1. **Modelo calendario (B1/B2)**: día de programa = días reales transcurridos
   desde el lunes ancla MENOS `postponedDays` acumuladas. Postergar empuja todo
   el plan un día al futuro (un día perdido hoy se recupera mañana). Grid L-V
   entrena (workoutDayIndex 1-5, alineado con `scheduleData.ts`), SÁB=LISS,
   DOM=descanso. **CONTRATO (TAREAS_USUARIO AG-ORQ)**: el daily briefing debe
   consumir `programCalendar.ts` + `activeProgramStore` directamente, NO
   reimplementar.
2. **Estructura explorador (B6/B7)**: catálogo = subtab "Rutinas→Catálogo" del
   workspace (`/app/fitness?tab=routines`); detalle de rutina en Sheet con deep
   link `?routine=<id>`. En B7 se endureció el guard: la validez se comprueba
   contra `allPrograms` (antes `getProgramById` devolvía siempre algo y un ID
   inválido abría min-max en silencio).
3. **Links progresión↔rutina (B7)**: mapeo curado groupId→`tg-master-*` en
   `progressionPathLinks.ts` (el `masterWorkout.routineId` de progressionsData
   guarda IDs obsoletos `routine-master-N`; el mapa apunta al ID vigente y un
   test de integridad garantiza que ningún enlace muera). Cada caja de
   progresión con rutina muestra franja con **Activar rutina**
   (`toggleActiveProgram`) + **Ver detalle** (`?tab=routines&routine=`), y el
   Sheet del catálogo enlaza de vuelta a `/app/fitness/skills` para las
   tg-master. Grupos sin rutina (back-lever, core-compression, pistol-squat)
   no muestran la franja.
4. **Progreso real (B8), regla dura**: ningún número sin fuente. Fuentes: READ
   de `activeProgramStore`, `fitapp_workout_history` (logger), `fitapp_log_day_1..5`
   (trackers Hoy), `volumeStats` (adaptador `loggedWorkoutToSessionLog` +
   récords Epley), `loadCalculator` (carga RPE 8 + discos desde e1RM real). Lo
   sin fuente → tarjeta **"Pendiente: logger"** en tono apagado. Eliminados:
   dashboard maqueta `FitAppAnalyticsDashboard` (94%/101%/barras inventadas,
   borrado tras grep 0 referencias), mock de 4 semanas de `AnalyticsChart`,
   pesos por defecto 60kg×8 y "% adherencia" decorativo de
   `ProgressDashboard`. `demoWorkoutLog.ts` queda como generador de desarrollo
   SIN consumidores: no se pinta como progreso del usuario.
   Fechas del logger = display es-ES ("vie 22 ago"): se parsean con
   `parseEsShortDate` (programCalendar); lo no datable no cuenta.

## Verificación al cierre (todo verde)

- `npm run validate:fitness` ✅ 44 pasos de habilidad + 9 mapeos FitApp.
- `npx tsx scripts/validateFitnessPrograms.ts` ✅ 20 programas, 1494 prescripciones.
- `npx tsx scripts/validateSkills.ts` ✅ 13 rutas, 44 pasos, 13 enlaces estrictos.
- `npx astro check` ✅ 0 errores / 0 warnings (35 hints preexistentes).
- `npm test` ✅ 158 tests (17 archivos) — incluye nuevos:
  `src/data/fitness/__tests__/progressionPathLinks.test.ts` (4) y
  `volumeStats.test.ts` extendido (B8, 3 nuevos).

## Pendientes → PRÓXIMO ciclo (TAREAS_USUARIO, ya aprobadas por el usuario)

1. **B9 — Modo entrenamiento guiado**: pantalla completa set-a-set con video,
   descansos cronometrados y avance de serie.
2. **Contrato export de sesión para NUTRI**: exponer datos reales de sesión
   (series/reps/carga/duración/RPE por ejercicio) consumibles por el estimador
   kcal de AG-NUTRI (ciclo 2). La fuente ya existe: `fitapp_workout_history`
   con `completedSets` — falta formalizar el contrato y el endpoint/bridge.
3. **Curación de biblioteca/extracciones para RAG Fase 1** (fitness):
   entoncesx technique guides, min-max y Nippard aún no tienen dominio RAG
   propio (hablar con AG-CORE para `rag/fitness.json` si procede).

## Notas de territorio

- Nunca se tocó: `anatomy/**`, `nutrition/**`, `LibraryMuscles.tsx`,
  `muscles.astro`, `ui/`, tokens, nav (§3.2). Los cambios en nav/fitness son
  solo dentro de componentes fitness existentes.
- Worktree SIEMPRE limpio entre tareas (commits inmediatos por paso).
