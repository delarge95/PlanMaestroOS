# Fitness — Migración, validación y pruebas

## Migración
1. Inventariar estructuras existentes en `fitappRoutineDataset.ts`, `FitAppWorkoutLogger.tsx` y `UnifiedRoutineTable.tsx`.
2. Adaptar los datos actuales al nuevo contrato; no duplicar programas en componentes.
3. Mantener adaptadores temporales si otra vista depende de la forma anterior.
4. Migrar primero Min-Max, luego Powerbuilding, luego Glute; finalmente calistenia/prehab.
5. Extraer el PDF de glúteos desde FitApp-Free y verificar manualmente cada semana antes de marcarla completa.

## Script de validación
Crear `scripts/validateFitnessPrograms.ts` y añadirlo al pipeline:
```ts
for (const program of programs) {
  for (const exercise of program.weeks.flatMap(w => w.days.flatMap(d => d.exercises))) {
    assert(exercise.exerciseId in exerciseIndex, `${program.id}: unresolved ${exercise.displayName}`);
    assert(exercise.repRange && exercise.rest && exercise.effort, `${program.id}: incomplete prescription`);
    assert(exercise.substituteExerciseIds.every(id => id in exerciseIndex), `${program.id}: unresolved substitute`);
  }
}
```

Añadir scripts de package.json:
```json
{
  "scripts": {
    "validate:fitness": "tsx scripts/validateFitnessPrograms.ts",
    "test:fitness": "vitest run src/**/*.fitness.test.ts"
  }
}
```

## Pruebas funcionales
- Catálogo muestra los programas y su duración/frecuencia correctas.
- Para cada programa, abrir semana 1, una semana intermedia y última semana; comparar con la fuente que posee el usuario.
- Cada ejercicio y alternativa abre una ficha válida.
- Activar programa, cambiar semana/día, registrar sets, recargar: todo persiste.
- Sustituir ejercicio, revertir sustitución, comprobar historial.
- Probar móvil, teclado, lector de pantalla y estado vacío.
- Confirmar que ninguna función existente de FitApp desapareció.

## Checklist final
- [ ] Sin ejercicios sin resolver.
- [ ] Sin semanas ficticias ni incompletas marcadas como completas.
- [ ] Sin contenido largo copiado de PDFs/libros.
- [ ] Sin pérdida de logs previos.
- [ ] Tracker y catálogo usan la misma fuente de datos.
- [ ] Alternativas del programa, plan_fitness y FitApp operan por capas.
- [ ] Documentación de fuentes y atribución añadida.
