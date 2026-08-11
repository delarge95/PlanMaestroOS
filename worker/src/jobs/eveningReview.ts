// worker/src/jobs/eveningReview.ts - Job Diario de Cierre Nocturno

import { processAiActionInWorker } from '../ai/client';

export async function runEveningReviewJob() {
  console.log('[Job Cierre] Ejecutando generación de revisión nocturna...');
  const res = await processAiActionInWorker({
    action: 'evening-review',
    sourcesUsed: ['Log de actividades completadas hoy']
  });
  console.log('[Job Cierre] Resumen nocturno generado:', res.content);
  return res;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runEveningReviewJob().catch(console.error);
}
