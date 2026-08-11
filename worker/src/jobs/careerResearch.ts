// worker/src/jobs/careerResearch.ts - Job de Investigación de Empresas de Carrera

import { processAiActionInWorker } from '../ai/client';

export async function runCareerResearchJob(companyName = 'Epic Games') {
  console.log(`[Job Career] Investigando empresa: ${companyName}...`);
  const res = await processAiActionInWorker({
    action: 'draft-cold-email',
    payload: { companyName },
    sourcesUsed: ['Base de datos de empresas', 'Pipeline de empleo']
  });
  return res;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runCareerResearchJob().catch(console.error);
}
