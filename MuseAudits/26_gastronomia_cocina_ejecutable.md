# 26 — Gastronomía ejecutable + cocina inteligente

> Estado: estructura 100% (5 componentes, tipos, `macros.ts`, copy exacto) con contenido
> mínimo (2 recetas, 1 plan `Volumen`) y **0 conexiones**: `GastronomyToday` hardcodea
> `Mantenimiento 2400 + Pollo 13:00`, `PlanBoard` local, `SavedInbox` con samples
> `sample1/sample2`, `fitnessGoal` sin lector, `capture-saved.ts` solo parsea + `console.log`.

## 26.1 Conexiones (encargo E1)

- `GastronomyToday` lee `initialMealPlans + calculateDailyMacros` (mata el hardcode).
- `SavedInbox` usa `parseLinkToSavedItem` real (mata los samples) + `Convertir en receta`
  crea `Recipe` propia (flujo ya diseñado, solo cablear).
- `fitnessGoal` → al activar programa fitness, propone proteína/kcal vía `kcalEstimator`
  como borrador de plan + lista de compra agregada (F8 del bus, archivo 08).
- Micros: tabla solo para las 20 recetas propias top (curaduría > exhaustividad).

## 26.2 Cocina inteligente (encargo E2, nuevo, local sin IoT)

`Appliance{id, name, functions[], powerW, recipesFit[]}` + matriz receta↔equipo +
checklist por niveles (esencial → pro) con presupuesto COP priorizado por tu plan
(volumen = balanza + meal-prep primero) + mantenimiento como tareas recurrentes a Hoy.
