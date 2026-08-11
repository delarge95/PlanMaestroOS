// src/lib/ai/jobs/stuckTasksJob.ts - Detección de Bloqueo en Tareas >7 días

import type { AiResponse } from '../client';

export async function runStuckTasksJob(taskTitle: string): Promise<AiResponse> {
  return {
    text: `Posible bloqueo en "${taskTitle}":\nHipótesis: La tarea es demasiado grande o carece de un primer paso claro de menos de 10 minutos.\nSugerencia: Dividir en 3 sub-pasos específicos (ej. 1. Buscar plantilla, 2. Escribir párrafo 1, 3. Revisar).`,
    sourcesUsed: ['Detector de tareas estancadas (>7 días)'],
    tokensUsed: 95,
    timestampIso: new Date().toISOString()
  };
}
