// @ts-nocheck
// scripts/validateSkills.ts - Automated Validation Script for Skill Graph
import { skillSteps } from '../src/data/fitness/skills/skillSteps.js';
import { skillPaths } from '../src/data/fitness/skills/skillPaths.js';
import { exerciseDatabase } from '../src/data/exercises/index.js';

console.log('🤸 Validando Grafo de Habilidades & Integración FitApp...');

let validatedSteps = 0;
let validatedPaths = 0;

const pathMap = new Map(skillPaths.map((p) => [p.id, p]));
const stepMap = new Map(skillSteps.map((s) => [s.id, s]));

// 1. Validate Skill Paths
for (const path of skillPaths) {
  validatedPaths++;
  for (const stepId of path.stepIds) {
    if (!stepMap.has(stepId)) {
      throw new Error(`[ERROR] Ruta '${path.title}': paso no encontrado en skillSteps ('${stepId}')`);
    }
  }
}

// 2. Validate Skill Steps & FitApp Exercise Binding
for (const step of skillSteps) {
  validatedSteps++;

  // Assert 1: pathId exists
  if (!pathMap.has(step.pathId)) {
    throw new Error(`[ERROR] Paso '${step.title}': ruta padre no encontrada ('${step.pathId}')`);
  }

  // Assert 2: fitAppExerciseId exists in exerciseDatabase
  if (!exerciseDatabase[step.fitAppExerciseId]) {
    throw new Error(`[ERROR] Paso '${step.title}': ejercicio FitApp no resuelto ('${step.fitAppExerciseId}')`);
  }

  // Assert 3: Prerequisite IDs exist
  for (const prereqId of step.prerequisiteIds) {
    if (!stepMap.has(prereqId)) {
      throw new Error(`[ERROR] Paso '${step.title}': prerrequisito no encontrado ('${prereqId}')`);
    }
  }

  // Assert 4: Next IDs exist
  for (const nextId of step.nextIds) {
    if (!stepMap.has(nextId)) {
      throw new Error(`[ERROR] Paso '${step.title}': siguiente paso no encontrado ('${nextId}')`);
    }
  }
}

console.log(`\n✅ ¡VALIDACIÓN EXITOSA! ${validatedPaths} rutas y ${validatedSteps} pasos verificados en el grafo.`);
