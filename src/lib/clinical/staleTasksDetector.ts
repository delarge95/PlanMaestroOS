// src/lib/clinical/staleTasksDetector.ts - Detección Discreta de Tareas Estancadas

import type { Task } from '../../data/contracts/task';

export interface StaleTaskDetectionResult {
  staleTask: Task | null;
  isStale: boolean;
}

export function detectStaleTask(tasks: Task[]): StaleTaskDetectionResult {
  const now = new Date();
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

  for (const task of tasks) {
    if (task.status === 'Hecho') continue;
    if (!task.dueDateIso) continue;

    const due = new Date(task.dueDateIso).getTime();
    const diff = now.getTime() - due;

    if (diff > SEVEN_DAYS_MS) {
      return { staleTask: task, isStale: true };
    }
  }

  return { staleTask: null, isStale: false };
}
