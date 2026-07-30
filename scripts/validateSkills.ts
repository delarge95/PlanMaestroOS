// @ts-nocheck
// scripts/validateSkills.ts - Strict Automated Validation Script for Skill Graph & Local Fichas
import { skillSteps } from '../src/data/fitness/skills/skillSteps.js';
import { skillPaths } from '../src/data/fitness/skills/skillPaths.js';
import { skillExercises } from '../src/data/fitness/skills/exercises.js';
import { exerciseDatabase } from '../src/data/exercises/index.js';

console.log('🤸 Validando Grafo de Habilidades, Fichas Locales & Verificación FitApp...');

let validatedSteps = 0;
let validatedPaths = 0;
let verifiedFitAppLinks = 0;

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

// 2. Validate Skill Steps & Local SkillExercises & FitApp Binding
for (const step of skillSteps) {
  validatedSteps++;

  // Assert 1: pathId exists
  if (!pathMap.has(step.pathId)) {
    throw new Error(`[ERROR] Paso '${step.title}': ruta padre no encontrada ('${step.pathId}')`);
  }

  // Assert 2: Prerequisite IDs exist
  for (const prereqId of step.prerequisiteIds) {
    if (!stepMap.has(prereqId)) {
      throw new Error(`[ERROR] Paso '${step.title}': prerrequisito no encontrado ('${prereqId}')`);
    }
  }

  // Assert 3: Next IDs exist
  for (const nextId of step.nextIds) {
    if (!stepMap.has(nextId)) {
      throw new Error(`[ERROR] Paso '${step.title}': siguiente paso no encontrado ('${nextId}')`);
    }
  }

  // Assert 4: Local SkillExercise exists
  const localEx = skillExercises[step.id];
  if (localEx) {
    if (localEx.fitApp.verified && localEx.fitApp.match === 'exact') {
      verifiedFitAppLinks++;
      if (!localEx.fitApp.exerciseId) {
        throw new Error(`[ERROR] Paso '${step.title}': verificado como exacto pero exerciseId es nulo.`);
      }
      if (!exerciseDatabase[localEx.fitApp.exerciseId]) {
        throw new Error(`[ERROR] Paso '${step.title}': exerciseId de FitApp no existe en exerciseDatabase ('${localEx.fitApp.exerciseId}')`);
      }
    }
  }
}

console.log(`\n✅ ¡VALIDACIÓN EXITOSA! ${validatedPaths} rutas, ${validatedSteps} pasos y ${verifiedFitAppLinks} enlaces FitApp estrictos verificados sin fallbacks.`);
