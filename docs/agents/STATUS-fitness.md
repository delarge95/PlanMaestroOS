# STATUS — AG-FIT (rama `agent/fitness`)

> Ciclo 2 COMPLETO (2026-08-25): contrato de sesión NUTRI + B9 Modo Guiado.
> Merge de main al día (cardio/, anatomy/, restauración UX incluidos). Sin
> push; commits locales. Ciclo 1 (consolidación + B1-B8) abajo.

## Ciclo 2 — Contrato de sesión para AG-NUTRI

`src/lib/fitness/sessionExport.ts` — puente que NUTRI consumirá para su
estimador kcal (TAREAS_USUARIO: `kcal = f(METs o trabajo mecánico
serie×rep×carga, duración, masa corporal, intensidad)`).

**CONTRATO PARA AG-NUTRI (consumir esto, no reimplementar):**

| Término acordado | Identificador |
|---|---|
| fecha | `SessionSnapshot.dateIso` ('' si la fuente no lo permite) |
| programa | `SessionSnapshot.program` |
| día | `SessionSnapshot.day` |
| ejercicios[] | `SessionSnapshot.exercises[]` |
| id / series / reps | `.id` / `.sets` / `.reps` (media real, 1 decimal) |
| carga? / rpe? / duraciónMin? | `.loadKg?` / `.rpe?` / `.durationMin?` |
| duraciónTotalMin | `SessionSnapshot.durationTotalMin` |

- `buildSessionSnapshot(input)` es PURO y acepta las DOS formas reales del
  historial: logger (`completedSets`, fuente principal) y legacy de
  TodayRoutineStack (`weightsPerSet` + `repRange`; sin RPE posible).
- Agregación honesta: medias reales por ejercicio; carga bodyweight →
  `loadKg: undefined` (nunca 0 fabricado); RPE solo si se registró; ejercicios
  sin series no se exportan; duración total no medida → 0. Regla dura B8
  heredada: **NUTRI NO debe inventar los campos ausentes.**
- IDs con precedencia performed > prescribed > name. Fecha display es-ES del
  logger ("vie 22 ago") → ISO vía `esDisplayDateToIso` (año inferido; dic→ene
  retrocede año; heurística documentada). `durationSec` en sets reservado para
  series por tiempo.
- 11 tests en `src/lib/fitness/__tests__/sessionExport.test.ts`.

## Ciclo 2 — B9 Modo entrenamiento guiado (TAREAS_USUARIO)

Pantalla completa set-a-set que SE AÑADE a Hoy (REGLA DE ORO respetada:
TodayRoutineStack y todo lo restaurado intactos — diff verificado: solo
import + elemento `<GuidedModeLauncher/>` en FitnessToday.tsx).

| Pieza | Rol |
|---|---|
| `src/lib/fitness/guidedSessionEngine.ts` | Motor puro (sin DOM/storage): `parseRestPeriodSeconds` ("3-5 min"→300s, extremo alto, clamp [15,600]), `buildGuidedPlan` desde prescripciones+overrides (video/cues/effortPerSet resueltos una vez), máquina de estados serie→ejercicio→fin con descanso automático (inter-serie e inter-ejercicio usa el restPeriod del ejercicio recién terminado), extras de serie, finishEarly, exportes finales. 14 tests. |
| `src/components/fitness/guided/GuidedModeLauncher.tsx` | Entrada en Hoy: banner "Modo guiado set a set" junto a la rutina del día (mismo selectedDayIndex que TodayRoutineStack); deshabilitado honesto en descanso/día vacío. Construye el plan con las mismas fuentes READ (activeProgramStore + getProgramById + getExerciseDetails). |
| `guided/GuidedSessionRunner.tsx` | Overlay pantalla completa mobile-first: ejercicio actual con YouTubePlayer (READ exerciseDatabase) + cues de techniquePoints + objetivo reps/esfuerzo por serie; inputs grandes peso/reps/RPE con prefill de la última serie REAL registrada; descanso cronometrado configurable (−15s/+30s/Saltar) con beep AudioContext + vibración al acabar; "+ Añadir serie extra"; Escape/salir con confirmación si hay registros. |

Resumen final:
- **Guardar sesión** → append en `fitapp_workout_history` en la FORMA REAL del
  logger (`CompletedWorkout`: completedSets con peso/reps/rpe, duración medida,
  volumen real). Así la sesión guiada aparece en Progreso/B8 con datos
  legítimos — mismo contrato que FitAppWorkoutLogger.
- **Snapshot NUTRI** → JSON visible + copiable construido con
  `buildSessionSnapshot(sessionExportInputFromState(...))` (contrato arriba).
- Series basura (todo a cero) se descartan; sesión sin registros no guarda
  nada.

## Verificación al cierre ciclo 2 (todo verde)

- `npm run validate:fitness` ✅ · `npx tsx scripts/validateFitnessPrograms.ts`
  ✅ (20 programas, 1494 prescripciones) · `npx tsx scripts/validateSkills.ts`
  ✅ (13 rutas, 44 pasos, 13 enlaces).
- `npx astro check` ✅ 0 errores / 0 warnings (con
  `NODE_OPTIONS=--max-old-space-size=8192` en esta máquina).
- `npm test` ✅ 286 tests (28 archivos), +25 nuevos respecto al ciclo 1
  (sessionExport 11, guidedSessionEngine 14).

## Pendientes → PRÓXIMO ciclo

1. **Curación de biblioteca/extracciones para RAG Fase 1** (fitness):
   thenx technique guides, min-max y Nippard aún no tienen dominio RAG propio
   (hablar con AG-CORE para `rag/fitness.json` si procede).
2. **Consumo NUTRI del contrato**: cuando AG-NUTRI monte el estimador kcal,
   leerá snapshots desde el historial (ambas formas ya soportadas). Si prefiere
   endpoint/bridge dedicado, coordinar firma.
3. **Fases 2-3 del Plan Maestro** (reglas DomainRule, pre-workout gate,
   guardarraíles intra-sesión, debrief): el motor guiado deja el estado de
   sesión aislado donde engancharlas.

## Notas de territorio (ciclo 2)

- Intocable verificado: `anatomy/**`, `nutrition/**`, `cardio/**`,
  LibraryMuscles/muscles.astro, ui/tokens/nav. Única edición fuera de archivos
  nuevos: FitnessToday.tsx (+3 líneas aditivas).
- Worktree SIEMPRE limpio entre tareas (commits inmediatos por paso).

---

# HISTÓRICO — Ciclo 1 (consolidación + B1-B8, 2026-08-23)

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

## Pendientes del ciclo 1 → RESUELTOS en ciclo 2

1. ~~B9 — Modo entrenamiento guiado~~ ✅ (ver ciclo 2).
2. ~~Contrato export de sesión para NUTRI~~ ✅ `sessionExport.ts` (ver ciclo 2).
3. Curación de biblioteca/extracciones para RAG Fase 1 (fitness):

## Notas de territorio

- Nunca se tocó: `anatomy/**`, `nutrition/**`, `LibraryMuscles.tsx`,
  `muscles.astro`, `ui/`, tokens, nav (§3.2). Los cambios en nav/fitness son
  solo dentro de componentes fitness existentes.
- Worktree SIEMPRE limpio entre tareas (commits inmediatos por paso).
