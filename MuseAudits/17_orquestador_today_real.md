# 17 — ORQ/Today real (el integrador que falta)

> Por qué: AG-ORQ virgen + EventBus con 0 emisores + `todayAdapter` sin gastronomía +
> `ClinicalToday` local sin persistir + `index.astro` y `today.astro` montando lo mismo.
> Para qué: que Hoy sea de verdad la puerta única. Cuándo: PRIMERO de cada fase (ADR-7).

## 17.1 Cableado de eventos (encargo E1, 1 día)

Emitir (dónde, exacto): `session:completed|skipped` en `GuidedSessionRunner`
(tras guardar historial) y `FitAppWorkoutLogger`; `session:pain-reported` en el
futuro `InjuryCheckin` (archivo 18) y en `PrehabBlock` check-in; `anomaly:task-stuck`
en `StaleTaskCard` (además del `localStorage` actual); `time:morning|evening` desde
los jobs (archivo 22). Oyentes: `SuggestionEngine` (vía `fromRuleEvaluations`),
`auditLogger` (solo tipo+fecha, sin contenido sensible). Bus singleton:
crear `src/lib/events/bus.ts` con `export const appBus = createEventBus()` —
hoy cada importador crearía el suyo y los eventos se perderían.

## 17.2 `todayAdapter` completo (encargo E2)

Añadir: gastronomía (`GastronomyToday` deja de hardcodear: lee `initialMealPlans` +
`calculateDailyMacros`), idiomas como `Task` (área `idiomas`, `singleNextAction`
"20 min A1"), conteos career (`Aplicaciones esta semana`, `Seguimientos ≤3`).
Resolver duplicado `index.astro`/`today.astro`: `index` redirige a `today` (o viceversa,
decidir en el encargo; hoy montan el mismo `TodayTabWorkspace` y confunden al QA).

## 17.3 Rituales mañana/noche (encargo E3, tras worker real archivo 22)

`runMorningPlanJob` con entradas reales (vencidas + calendario FIT-B1 + energía clínica
+ vocab vencido) → borrador Top3 `Aprobar/Editar`; `runEveningReviewJob` → `Cierre del
día` + mañana. Ambos renderizan en `TodayTabWorkspace` con `AiDraftReview`.
Puerta: si % aprobados <50% dos semanas, job pausado (ADR-5).

## 17.4 Nav que falta (encargo E4, medio día)

`sectionNavConfig.ts`: añadir a `fitness` las reales `today,catalog,skills`;
a `fitness.library`, `index,thenx`; keys `library,schedules,master-plan`
(hoy `detectSection()` devuelve `null` y esas páginas no pintan L2).
Cerrar los 2 tickets (`nutrition`,`anatomy` ya existen como página: solo falta entrada).
Regla permanente: **toda ruta nueva trae nav + smoke QA o el encargo no cierra**.
