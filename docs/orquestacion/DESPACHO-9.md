# DESPACHO 9 — Los 3 motores: rutinas por objetivo, kcal por ejercicio, pruebas guiadas (2026-09-14)

> Mandato: ¿ya existe (1) generación automática de rutina según lo que busca
> el usuario, (2) kcal quemadas por ejercicio con esfuerzo y músculo,
> (3) dolor que identifica órganos/articulaciones/nervios/ligamentos y hace
> pruebas para detectar la causa? Respuesta: no/no/parcial → construidos hoy.

## A) Generador de rutinas por objetivo (`routineGenerator.ts`)
- Input: objetivo (hipertrofia/fuerza/salud-endurance) · días 2–5 · equipo
  (calistenia/gimnasio/mixto) · minutos/sesión · énfasis · **zonas a evitar
  (enlazado al advisory de salud activo)**.
- Plantillas por frecuencia (Full×2 / PPL / UL×2 / 5 días), selección
  determinista del catálogo real por patrón + scoring de énfasis + exclusión
  de zonas; pasada de relleno si un patrón no tiene candidatos en el equipo.
- Series/reps/RIR/reposo por objetivo, citando fit:volume-mev/mrv y
  fit:frequency. `activateGeneratedRoutine` registra el programa (persistido,
  visible para getProgramById) y lo deja como rutina activa desde HOY.
- UI `RoutineGeneratorPanel` en Fitness → Hoy.

## B) kcal por ejercicio (`exerciseKcal.ts`)
- kcal/min = MET × 3.5 × peso / 200, con **MET ajustado por esfuerzo**
  (RPE 6→3.5 … RPE 10→6.0, derivado de RIR) y **factor de masa muscular**
  (grande 1.15 / media 1.0 / pequeña 0.9); duración real =
  series×(reps×4s+descanso). Base declarada 'inferred' (Compendium
  Ainsworth) — estimación, no medición.
- Peso corporal persistido (`fit-bodyweight-kg`). Visible en el generador
  (≈kcal/sesión) y **en la rutina del día** (chip junto a Finalizar, recalcula
  con las series/reps/esfuerzo editados en el configurador).

## C) Pruebas guiadas + grafo completo (`diagnosticTests.ts`)
- Baterías por zona (rodilla 5 / hombro 4 / genérica 3): preguntas binarias
  con ayuda contextual que re-puntúan las hipótesis → **"causa más probable
  (X%)"** (tests: dolor 24h, isométrico en inserción, laxitud, trayecto
  nervioso, fricción-bursa…).
- `healthIntelligence` ahora expone el grafo COMPLETO de la zona: músculos,
  tendones, **articulaciones, ligamentos y nervios** (desplegable en el panel).
- Nota honesta: "órganos" no aplica al grafo musculoesquelético; viscerales
  siguen siendo derivación médica (red flags).

## Fixes incidentales
- Hydration mismatch por localStorage en initializers (HealthAdvisor/Routine
  Generator) → carga post-mount.
- ExerciseInfo no trae `discipline`; el generador filtra por `category`.
- kcal API dividida (Spec/Input) para inyectar el peso por sesión.

## Verificación
560/560 vitest (+9 motores nuevos) · astro check 0 errores · GUI: banner
advisory persistente entre recargas, generador montado, 0 errores de consola.
