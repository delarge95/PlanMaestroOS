// worker/src/jobs/morningPlan.ts - Job Diario de Planificación Matutina

import { processAiActionInWorker } from '../ai/client';

export async function runMorningPlanJob() {
  console.log('[Job Matutino] Ejecutando generación de borrador de plan del día...');
  const res = await processAiActionInWorker({
    action: 'propose-top3',
    sourcesUsed: ['Tareas pendientes en Notion', 'Calendario del día']
  });
  console.log('[Job Matutino] Borrador generado:', res.content);
  return res;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runMorningPlanJob().catch(console.error);
}
