// @ts-nocheck
// scripts/validateFitnessPrograms.ts - Automated validation script for fitness programs
import { allPrograms } from '../src/data/fitness/programs/index.js';
import { exerciseDatabase } from '../src/data/exercises/index.js';
import { resolveExerciseId } from '../src/data/fitness/exerciseResolver.js';

console.log('🏋️ Validando catálogo de programas FitApp...');

let totalPrograms = 0;
let totalPrescriptions = 0;

for (const program of allPrograms) {
  totalPrograms++;
  console.log(`\n📋 Verificando programa: [${program.id}] ${program.title}`);

  for (const week of program.weeks) {
    for (const day of week.days) {
      for (const exercise of day.exercises) {
        totalPrescriptions++;

        const resolvedId = resolveExerciseId(exercise.exerciseId || exercise.displayName);

        // Assert 1: exerciseId must exist in exerciseDatabase
        if (!exerciseDatabase[resolvedId]) {
          throw new Error(`[ERROR] Programa ${program.id}: ejercicio no resuelto '${exercise.displayName}' (ID: ${exercise.exerciseId})`);
        }

        // Assert 2: Mandatory prescription fields present
        const reps = exercise.targetReps || exercise.repRange;
        const rest = exercise.restPeriod || exercise.rest;

        if (!reps || !rest) {
          throw new Error(`[ERROR] Programa ${program.id}: prescripción incompleta para '${exercise.displayName}'`);
        }

        // Assert 3: Substitute exercise IDs exist
        const subs = exercise.substituteOptions || exercise.substituteExerciseIds || [];
        for (const subId of subs) {
          const resolvedSubId = resolveExerciseId(subId);
          if (!exerciseDatabase[resolvedSubId]) {
            throw new Error(`[ERROR] Programa ${program.id}: sustituto no resuelto ('${subId}') en '${exercise.displayName}'`);
          }
        }
      }
    }
  }
}

console.log(`\n✅ ¡VALIDACIÓN EXITOSA! ${totalPrograms} programas, ${totalPrescriptions} prescripciones verificadas sin errores.`);
