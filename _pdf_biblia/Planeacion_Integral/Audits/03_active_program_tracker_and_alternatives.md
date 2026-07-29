# Fitness — Rutina activa, tracker y alternativas

## Archivos a modificar
- Modificar: `src/components/fitness/FitAppWorkoutLogger.tsx`
- Modificar: `src/components/fitness/FitnessTabWorkspace.tsx`
- Modificar: `src/components/fitness/DrawerMiniFitnessViewer.tsx`
- Crear: `src/components/fitness/ActiveProgramSelector.tsx`
- Crear: `src/components/fitness/ExerciseSubstitutionDrawer.tsx`
- Crear: `src/data/fitness/alternatives.ts`
- Crear: `src/data/fitness/activeProgramStore.ts`
- Leer e integrar: `_pdf_biblia/Planeacion_Integral/investigacion/plan_fitness.md`

## Estado persistente
```ts
type ActiveProgramState = {
  programId: string;
  currentWeek: number;
  currentDayId: string;
  selectedExerciseOverrides: Record<string, string>; // prescriptionId -> substitute exerciseId
  startedAt: string;
  updatedAt: string;
};
```
Persistir con el mecanismo existente de FitApp (localStorage/estado actual). Versionar la clave y migrar datos previos; jamás borrar logs existentes.

## Flujo
1. Usuario abre Tracker y selecciona programa activo, semana y día.
2. Se carga la prescripción desde el catálogo, no una copia paralela.
3. Cada ejercicio presenta `Original`, `Alternativa del programa` y `Alternativa personal/plan_fitness`.
4. Al sustituir, validar patrón, músculos objetivo, equipo y contraindicaciones; guardar el override por `prescriptionId`.
5. El logger conserva carga, reps, RIR/RPE, sets completados y notas para el ejercicio realmente ejecutado.

## Prioridad de alternativas
1. Sustitución 1 y 2 documentadas por el programa.
2. Alternativas explícitamente aprobadas en `plan_fitness.md`.
3. Motor FitApp existente, filtrado por `movementPattern`, músculos primarios, equipo disponible y restricciones.

No ofrecer alternativas “parecidas” sin una equivalencia definida. Si no hay alternativa compatible, mostrar “No hay sustitución segura configurada” y enlazar a la base FitApp; no inventar una.

## Técnica de datos
```ts
export type Alternative = {
  exerciseId: string;
  reason: 'source-program' | 'plan-fitness' | 'fitapp-compatible';
  preserves: Array<'pattern'|'primary-muscle'|'range'|'load-profile'>;
  note?: string;
};
```

## Criterios de aceptación
- Una sola rutina está activa globalmente.
- Cambiar de semana/día no pierde el set log.
- Cambiar un ejercicio no altera la prescripción fuente; crea un override reversible.
- El historial registra original, sustituto, motivo y fecha.
- Todas las herramientas actuales de alternativas FitApp siguen disponibles como tercera capa.
