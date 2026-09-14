// src/lib/career/careerNotionPush.ts — Push de aplicaciones laborales a Notion
// vía Worker IA (fire-and-forget, §0.5: la app sigue 100% funcional offline).
//
// Upsert: sin notionPageId → crea en Notion y guarda el pageId; con él → PATCH.
// Se dispara desde las acciones del careerStore (add/update/nextAction/moveStage).

import { pushCareerAppToWorker } from '../ai/workerClient';
import { useCareerStore } from '../../data/career/careerStore';
import type { JobApplication } from '../../data/career/applications';

function toPayload(app: JobApplication) {
  return {
    id: app.id,
    notionPageId: app.notionPageId,
    company: app.companyName,
    role: app.roleTitle,
    stage: app.stage,
    nextAction: app.singleNextAction,
    followUpDateIso: app.followUpDateIso || undefined,
    cvVersionSent: app.cvVersionSent || undefined,
    notes: app.notes || undefined,
    sourceUrl: app.contactUrl || undefined,
  };
}

/**
 * Empuja una aplicación a Notion. Tolerante a fallo total (worker caído,
 * sin deploy, sin red): falla en silencio — el estado local manda.
 */
export function pushApplicationToNotion(app: JobApplication): void {
  void pushCareerAppToWorker(toPayload(app))
    .then(({ data }) => {
      if (data?.ok && data.pageId && data.pageId !== app.notionPageId) {
        // Guarda el pageId para que el próximo push sea update, no duplicado.
        useCareerStore.getState().setNotionPageId(app.id, data.pageId);
      }
    })
    .catch(() => { /* offline por diseño */ });
}
