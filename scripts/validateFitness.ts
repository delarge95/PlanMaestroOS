// scripts/validateFitness.ts - Script de Validación de Integridad Fitness per Tarea 2.5

import { verifiedExerciseMap } from '../src/data/fitness/skills/fitAppExerciseMap';
import { skillSteps } from '../src/data/fitness/skills/skillSteps';

console.log('[Fitness Validation] Iniciando verificación de integridad de habilidades y mapa FitApp...');

let errorsCount = 0;

// 1. Verificar que todo paso de habilidad tenga su ficha local
for (const step of skillSteps) {
  if (!step.title || !step.id) {
    console.error(`❌ [Error] Paso de habilidad sin id o título válido:`, step);
    errorsCount++;
  }
}

// 2. Verificar que ningún enlace FitApp esté activo sin `verified: true`
for (const [id, mapping] of Object.entries(verifiedExerciseMap)) {
  if (mapping.fitAppExerciseId && !mapping.verified) {
    console.error(`❌ [Error] El ejercicio ${id} tiene FitApp ID pero no está verificado (verified: false).`);
    errorsCount++;
  }
}

if (errorsCount > 0) {
  console.error(`\n❌ [Validation Failed] Se encontraron ${errorsCount} errores en la integridad de Fitness.`);
  process.exit(1);
} else {
  console.log(`\n🎉 [Validation Passed] Todo es correcto: Se verificaron ${skillSteps.length} pasos de habilidad y ${Object.keys(verifiedExerciseMap).length} mapeos de FitApp.`);
  process.exit(0);
}
