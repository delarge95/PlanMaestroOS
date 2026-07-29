# Fitness — Modelo de datos y catálogo

## Archivos a crear o modificar
- Modificar: `src/data/exercises/fitappRoutineDataset.ts`
- Modificar: `src/data/exercises/index.ts`
- Crear: `src/data/fitness/programs/types.ts`
- Crear: `src/data/fitness/programs/minMax.ts`
- Crear: `src/data/fitness/programs/powerbuilding.ts`
- Crear: `src/data/fitness/programs/gluteHypertrophy.ts`
- Crear: `src/data/fitness/programs/calisthenics.ts`
- Crear: `src/data/fitness/programs/index.ts`
- Crear: `src/data/fitness/exerciseResolver.ts`

## Contrato TypeScript
```ts
export type EffortTarget = { type: 'rir' | 'rpe'; early?: string; last?: string };
export type ExercisePrescription = {
  id: string;
  exerciseId: string;             // ID canónico de la base FitApp
  displayName: string;            // nombre exacto/normalizado mostrado
  warmupSets: string;             // p. ej. '2' o '1–2'
  workingSets: number | 'NA';
  repRange: string;
  rest: string;
  effort: EffortTarget;
  intensityTechnique?: 'none' | 'drop-set' | 'myo-reps' | 'lengthened-partials' | 'static-hold';
  substituteExerciseIds: string[]; // primero: sustituciones de la fuente; después: plan_fitness
  notes?: string;                 // breve, original, no texto copiado extensamente
  sourceRef: { programId: string; block: string; week: number; day: string };
};
export type WorkoutDay = { id: string; title: string; order: number; exercises: ExercisePrescription[] };
export type ProgramWeek = { week: number; block: string; isIntro?: boolean; isDeload?: boolean; days: WorkoutDay[] };
export type TrainingProgram = {
  id: string; title: string; source: string; durationWeeks: number; split: string[];
  methodology: string[]; equipment: string[]; weeks: ProgramWeek[];
};
```

## Programas a modelar

### Min-Max
Modelar 12 semanas y dos bloques de seis semanas: división Upper 1, Lower 1, Upper 2, Lower 2 y Arms/Delts; sesiones aproximadas de 45 min; 1–2 hard sets por ejercicio; RIR por set; semana 1 de introducción y semana 7 de descarga; técnicas solo donde correspondan en el bloque 2. Cada ejercicio debe conservar las dos sustituciones indicadas y notas operativas breves. [file:36]

### Powerbuilding / Bodybuilding Transformation System
Modelar la progresión por semanas y los días Upper Strength, Lower Strength, Pull Hypertrophy, Push Hypertrophy y Legs Hypertrophy. Guardar early-set RPE, last-set RPE, rep ranges, calentamientos, descansos, técnica de última serie y sustituciones. La primera semana es de adaptación; después, el último set sube de intensidad según la prescripción. [file:34]

### Glute Hypertrophy
Obtener el PDF original desde el repositorio FitApp-Free y extraer exactamente su estructura de bloques, semanas, días, series, repeticiones, RPE/RIR, descansos, alternativas y notas. No inferir semanas o volumen que no estén en la fuente.

## Resolver nombres
Nunca renderizar un ejercicio sin resolver. `resolveExercise(name)` debe:
1. Buscar por ID y alias normalizado.
2. Devolver el ID canónico de FitApp.
3. Generar un reporte de nombres sin resolver durante build/test.
4. Bloquear la publicación de un programa si hay ejercicios obligatorios sin resolver.

```ts
const unresolved = program.weeks.flatMap(w => w.days.flatMap(d => d.exercises))
  .filter(e => !exerciseIndex[e.exerciseId]);
if (unresolved.length) throw new Error(`Exercises unresolved: ${unresolved.map(x => x.displayName).join(', ')}`);
```
