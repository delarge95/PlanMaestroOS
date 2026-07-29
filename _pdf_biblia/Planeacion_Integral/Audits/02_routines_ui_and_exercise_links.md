# Fitness — Sección Rutinas

## Componentes a modificar
- Modificar: `src/components/fitness/FitAppRoutinesCatalog.tsx`
- Modificar: `src/components/fitness/UnifiedRoutineTable.tsx`
- Modificar: `src/components/fitness/MinMaxRoutineTable.tsx` (migrar o retirar tras compatibilidad)
- Modificar: `src/components/fitness/FitnessTabWorkspace.tsx`
- Modificar: `src/components/fitness/ExerciseModal.tsx`
- Crear: `src/components/fitness/ProgramOverview.tsx`
- Crear: `src/components/fitness/WorkoutPrescriptionTable.tsx`
- Crear: `src/components/fitness/ExerciseLink.tsx`

## Arquitectura de pantalla
1. **Catálogo:** cards con objetivo, duración, frecuencia, nivel, equipo y botón “Ver programa” / “Activar”.
2. **Detalle:** selector de bloque, semana y día; resumen de objetivo, calentamiento, reglas de progresión y leyenda de RIR/RPE.
3. **Tabla de prescripción:** ejercicio, warm-ups, series, reps, esfuerzo, descanso, técnica final y alternativas.
4. **Detalle de ejercicio:** abrir ficha FitApp sin perder semana/día seleccionados.

## Enlace obligatorio por ejercicio
```tsx
export function ExerciseLink({ exerciseId, children }: { exerciseId: string; children: React.ReactNode }) {
  return <button type="button" onClick={() => openExerciseModal(exerciseId)}>{children}</button>;
}
```
- Usa un botón accesible, no un enlace ficticio.
- Etiqueta: `Ver técnica y alternativas de {nombre}`.
- Si falta el ID, renderiza un estado de error de datos en desarrollo; no ocultes el problema.

## Tabla limpia
Mantener una fila por ejercicio, sin comprimir datos esenciales. En móvil usar tarjetas expansibles, mostrando primero ejercicio, series x reps, RIR/RPE y descanso; el resto en “Ver detalle”. No copiar textos extensos de los PDFs: notas máximas de 160 caracteres y redactadas de forma original.

## Funcionalidad preservada
- Modal de ejercicio.
- Filtros de la base de ejercicios.
- Registro por sets.
- Rutinas existentes y tablas unificadas.
- Navegación por semana/día.

## Criterios de aceptación
- Clic en todo nombre de ejercicio abre exactamente su ficha FitApp.
- Las dos alternativas de la fuente aparecen en cada fila cuando existan.
- Las tablas muestran la semana completa, no solo una muestra o la primera semana.
- Teclado: Tab llega a cada enlace, Enter/Espacio abre ficha, Escape cierra modal.
