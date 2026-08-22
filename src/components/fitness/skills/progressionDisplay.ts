// src/components/fitness/skills/progressionDisplay.ts
// Helpers de visualización para las progresiones: nombres cortos y agrupación por fases.
import type {
  ProgressionGroup,
  ProgressionExercise,
} from "../../../data/fitness/skills/types";

// Nombres cortos e ilustrativos por id de progresión.
// El título completo se muestra al desplegar la progresión.
export const SHORT_TITLES: Record<string, string> = {
  "core-compression": "L-Sit → Manna",
  "back-lever": "Back Lever",
  "front-lever": "Front Lever",
  planche: "Planche",
  hspu: "Handstand & HSPU",
  "muscle-up": "Muscle-Up",
  "pistol-squat": "Pistol Squat",
  "94-8.0 Advanced Isometrics": "90° Hold",
  "97-9.0 Core Compression & Levers": "Dragon Flag",
  "132-10.0 Unilateral Pulling Strength": "One Arm Pull-Up",
  "57-11.0 Lateral Chain Strength": "Human Flag",
  "96-12.0 Unilateral Pushing Strength": "One Arm Push-Up",
  "133-13.0 Active Core & Flexibility": "Toes to Bar",
  "131-14.0 Bar Transitions": "Pull Over",
};

export function getShortTitle(group: ProgressionGroup): string {
  return SHORT_TITLES[group.id] || group.title;
}

// Agrupa los ejercicios de una progresión por su fase (phaseName).
// Las progresiones sin fases devuelven un único grupo con todos los ejercicios.
export interface PhaseGroup {
  phaseName: string;
  exercises: ProgressionExercise[];
}

export function groupByPhase(exercises: ProgressionExercise[]): PhaseGroup[] {
  const hasPhases = exercises.some((ex) => ex.phaseName);
  if (!hasPhases) {
    return [{ phaseName: "Pasos", exercises }];
  }

  const map = new Map<string, ProgressionExercise[]>();
  for (const ex of exercises) {
    const key = ex.phaseName || "Pasos";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(ex);
  }
  return Array.from(map.entries()).map(([phaseName, phaseExercises]) => ({
    phaseName,
    exercises: phaseExercises,
  }));
}
