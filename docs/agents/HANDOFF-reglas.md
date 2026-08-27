# HANDOFF — Sistema de reglas deterministas (corte vertical, Fase 3 del proyecto)

> **Documento vivo de transferencia** (regla de respaldo §NORMAS: el contexto NO es la conversación, es este archivo). Quien continúe (Autoclaw, ejecutor barato u otra sesión) arranca AQUÍ: contratos reales, decisiones, estado exacto y siguiente paso.

## Objetivo del corte vertical
Cablear de punta a punta: **stores reales → UserState → evaluateRules → SuggestionEngine → superficie UI**, con 10+ reglas semilla de fitness citadas desde `rag/fitness/fuentes/`. Patrón que luego escala por dominio (el volumen lo hará GLM 5.3 web con plantilla, integración por ejecutor barato).

## Contratos REALES (leer antes de escribir — lección ORQ)
- `src/lib/rules/types.ts`: `DomainRule {id, domain, description, type, metric, optimalRange?, riskThresholds?, appliesWhen(ctx), resolveValue(ctx)→number|undefined, confidence, evidenceTier, sourceRef{docId,chapter?,page?}, messages?}`. `resolveValue` undefined ⇒ `not-applicable`.
- `src/lib/rules/evaluateRules.ts`: `evaluateRules(rules, context) → RuleEvaluation[]` (puro). Context: `RuleContext {userState, week, previousWeek?, todayIso, domain?}`.
- `src/data/contracts/userState.ts`: `UserState {dailyLogs, sessions(TrainingSession), pain, skills, metrics}`; `deriveWeekAggregates(state, weekStartIso)` → `WeekAggregates {sessions, hardSets, byPattern(PatternVolume{pattern,hardSets,sessions}), avgSessionRpe?, totalDurationMin, totalVolumeKg?}`. `TrainingSession.exercises[] = SessionExercise {exerciseId, pattern, sets, reps, loadKg, rpe?}`. `DailyLog {sleepHours?, stress?, generalPain?, illness?}`.
- `src/lib/suggestions/types.ts`: `SuggestionCandidate {id, domain, type, priority?, title, body, ruleId?, sourceRef?, ttlHours?}` → motor con máx 3 activas, cooldowns por type, snooze not-now.
- Sesiones reales: localStorage **`fitapp_workout_history`** = `LoggedWorkout[]` (volumeStats.ts): `{id, date? (display es-ES "vie 22 ago"), routineTitle?, durationMinutes?, totalVolumeKg?, exercises?[{name, completedSets?[{weight,reps,rpe?}]}]}`. `parseEsShortDate` en `src/lib/fitness/programCalendar.ts`.
- Bio-feedback real: `src/data/clinical/clinicalStore.ts` → `biofeedback: BioFeedbackEntry[] {dateIso, energy, anxiety, pain, sleepHours}`.

## Decisiones (no relitigar)
1. Feed en `src/lib/rules/userStateFeed.ts` con funciones PURAS que reciben datos crudos (testeable sin DOM); readers de stores por separado.
2. Mapeo honesto: anxiety→DailyLog.stress es PROXY documentado (inferred); pain→generalPain; energy viaja en `context.domain.energyToday` (no está en el contrato DailyLog).
3. Patrón por heurística de nombre (classifyPattern) — documentado como inferred; el patrón canónico vendrá del anatomyGraph en el futuro.
4. Semilla de reglas: ~10, SOLO con citas verificadas en chunks (Israetel RP hyp vol. landmarks ch2 p61; deload ch3 p155; Nippard fundamentals p8 tríada 10-20 series/frec 2-3x/RIR; OTend pain monitor ch5 p85; NSCA overtraining haff).
5. Puente evaluaciones→sugerencias: violation→priority 8, warning→5; types `training-load` (cooldown 24h), `pain` (cooldown 48h).
6. Superficie: `SuggestionInbox` (componente CORE) montado en TodayTabWorkspace (3 líneas aditivas, documentado).

## Estado (ACTUALIZADO 2026-08-26 — CORTE VERTICAL COMPLETO ✅)
- [x] Contratos leídos y verificados contra código real
- [x] userStateFeed.ts + tests (workoutsToSessions con RPE medio, biofeedback→DailyLogs con proxy documentado, classifyPattern heurístico)
- [x] fitnessRules.ts — 10 reglas semilla TODAS citadas (Israetel ch2p61/ch3p155, Nippard p8, OTend ch4p65/ch5p85, Haff ch5; 2 reglas de catálogo not-applicable hasta que exista tracking de mesociclo/pain-timing)
- [x] fromRuleEvaluations.ts (violation→p8/warning→p5, cooldowns training-load 24h/pain 48h/progression 72h/lifestyle 96h) + tests
- [x] SuggestionInbox.tsx montado en TodayTabWorkspace (persist 'suggestions-engine-v1', ahora-no/no-me-interesa)
- [x] Verificación: astro check 0 errores, 448/448 tests (26 nuevos del corte)
- [ ] Volumen (>100 reglas): paquete para GLM 5.3 web (plantilla abajo)

## Cómo continuar el VOLUMEN (siguiente sesión/ejecutor)
1. Extraer candidatos: leer rag/fitness/fuentes/*.md (y nutrition/clinical) buscando `rules:` en headers de chunks.
2. Por cada regla candidata, escribir entrada en fitnessRules.ts (o nutritionRules/clinicalRules nuevos) siguiendo el patrón de las 10 semilla: cita EXACTA del chunk, confidence según texto, appliesWhen/resolveValue honestos (undefined si no hay dato).
3. Prohibido: rangos no presentes en el chunk; reglas sin docId verificable en el manifest del dominio.
4. Tests: extender verticalSlice.test.ts con fixtures por regla nueva (mínimo: un caso warning + un not-applicable).

## Plantilla de catálogo (para el diseño por web / volumen futuro)
Cada regla nueva = entrada TS siguiendo `fitnessRules.ts` con: id `fit:<slug>`, cita REAL copiada del chunk (docId+chapter+page exactos del header del chunk), confidence según el texto (explicit/inferred/qualitative), appliesWhen y resolveValue contra WeekAggregates/UserState. Prohibido inventar rangos no presentes en el chunk.
