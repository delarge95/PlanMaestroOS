// worker/src/jobs/stuckTasks.ts - Job de Detección de Tareas Estancadas

import { processAiActionInWorker } from '../ai/client';

export async function runStuckTasksJob(taskTitle = 'Tarea de ejemplo') {
  console.log(`[Job Stuck Tasks] Verificando tareas estancadas (>7 días) para: ${taskTitle}...`);
  const res = await processAiActionInWorker({
    action: 'stuck-task',
    payload: { taskTitle },
    sourcesUsed: ['Detector de tareas estancadas (>7 días)']
  });
  return res;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runStuckTasksJob().catch(console.error);
}
