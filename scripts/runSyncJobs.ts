// scripts/runSyncJobs.ts - Runner de Consola para Jobs de Sincronización y Automatización

import {
  runMorningPrepJob,
  runEveningAssistJob,
  runGitHubDigestJob,
  runCareerDraftJob
} from '../src/lib/sync/jobDefinitions';

import { globalSyncEngine } from '../src/lib/sync/syncEngine';

async function main() {
  const args = process.argv.slice(2);
  const isLive = args.includes('--live');
  const dryRun = !isLive;
  const targetJob = args.find((a) => !a.startsWith('--')) || 'all';

  const today = new Date().toISOString();

  console.log(`=======================================================`);
  console.log(`[SyncJobs Runner] Iniciando ejecución de Jobs (Documento 03)`);
  console.log(`[SyncJobs Runner] Modo: ${dryRun ? 'DRY-RUN (Sin escrituras reales)' : 'LIVE (Escritura real)'}`);
  console.log(`[SyncJobs Runner] Selección de job: '${targetJob}'`);
  console.log(`=======================================================\n`);

  if (targetJob === 'morningPrep' || targetJob === 'all') {
    console.log(`--- Ejecutando Job Mañana (Propuesta Top 3) ---`);
    const res = await runMorningPrepJob(today, dryRun);
    console.log(`Resultado:`, JSON.stringify(res, null, 2));
    console.log();
  }

  if (targetJob === 'eveningClosure' || targetJob === 'all') {
    console.log(`--- Ejecutando Job Noche (Cierre asistido) ---`);
    const res = await runEveningAssistJob(today, dryRun);
    console.log(`Resultado:`, JSON.stringify(res, null, 2));
    console.log();
  }

  if (targetJob === 'githubDigest' || targetJob === 'all') {
    console.log(`--- Ejecutando Job GitHub Digest ---`);
    const res = await runGitHubDigestJob('PlanMaestroOS', dryRun);
    console.log(`Resultado:`, JSON.stringify(res, null, 2));
    console.log();
  }

  if (targetJob === 'careerDraft' || targetJob === 'all') {
    console.log(`--- Ejecutando Job Carrera (Borrador Vacante) ---`);
    const res = await runCareerDraftJob('Studio X', 'Unity Technical Artist', dryRun);
    console.log(`Resultado:`, JSON.stringify(res, null, 2));
    console.log();
  }

  const dlq = globalSyncEngine.getDeadLetterQueue();
  if (dlq.length > 0) {
    console.error(`[SyncJobs Runner] ⚠️ Se registraron ${dlq.length} errores en la Dead Letter Queue (DLQ):`);
    console.error(JSON.stringify(dlq, null, 2));
  } else {
    console.log(`[SyncJobs Runner] ✅ Todos los jobs finalizaron sin fallos en DLQ.`);
  }
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('runSyncJobs.ts')) {
  main().catch((err) => {
    console.error('[SyncJobs Runner Error]', err);
    process.exit(1);
  });
}
