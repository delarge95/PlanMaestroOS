// src/lib/sync/jobDefinitions.ts - Definición de Jobs del MVP per Documento 03

import { globalSyncEngine, type SyncJobResult } from './syncEngine';

export interface MorningProposal {
  top3Tasks: Array<{
    title: string;
    area: string;
    firstActionUnder10Min: string;
  }>;
  suggestedFocus: string;
}

export interface EveningSummaryDraft {
  completedActionsCount: number;
  openBlockersCount: number;
  reflectionPrompt: string;
  tomorrowDraftPlan: Array<{ title: string; suggestedTimeSlot: string }>;
}

export interface GitHubDigestSummary {
  repoName: string;
  pushedCommitsCount: number;
  mergedPRsCount: number;
  notionSummaryText: string;
}

export interface CareerApplicationDraft {
  company: string;
  role: string;
  matchingScorePercent: number;
  draftNotes: string;
  followUpTaskCreated: boolean;
}

/**
 * Job Mañana — Propuesta, no imposición
 * Lee plan diario, proponen Top 3 con micro-acción < 10 min.
 * Jamás reordena ni cierra tareas automáticamente.
 */
export async function runMorningPrepJob(dateIso: string, dryRun: boolean = true): Promise<SyncJobResult> {
  const dateStr = dateIso.split('T')[0];

  return globalSyncEngine.executeJob(
    {
      jobId: 'morning_prep',
      idempotencyKey: `job_morning_${dateStr}`,
      actionContext: {
        actionType: 'propose_morning_plan',
        requestedBy: 'system_job',
        details: { dateStr }
      },
      dryRun
    },
    async (isDryRun) => {
      // Simulación de lectura de Notion DB 3 (Tasks) y DB 4 (DailyPlan)
      const proposal: MorningProposal = {
        top3Tasks: [
          {
            title: 'Sustentación de tesis TwinSight',
            area: 'Tesis',
            firstActionUnder10Min: 'Abrir presentación y repasar diapositiva 1-3 en voz alta (7 min).'
          },
          {
            title: 'Revisión de pipeline de retopología Blender',
            area: 'Carrera',
            firstActionUnder10Min: 'Verificar topología de la malla base en Blender (5 min).'
          },
          {
            title: 'Sesión Upper 1 (Pecho & Hombro)',
            area: 'Fitness',
            firstActionUnder10Min: 'Revisar pesos de la sesión anterior en la app (3 min).'
          }
        ],
        suggestedFocus: 'Bloque A matutino sin interrupciones ni celular al alcance.'
      };

      if (!isDryRun) {
        // En producción real: Escribe borrador de propuesta en Notion DailyPlan
        console.log(`[Job Mañana] Propuesta guardada en Notion DailyPlan para ${dateStr}`);
      }

      return proposal;
    }
  );
}

/**
 * Job Noche — Cierre asistido
 * Resume sesiones y acciones registradas, propone borrador sin juzgar ni evaluar moralmente.
 */
export async function runEveningAssistJob(dateIso: string, dryRun: boolean = true): Promise<SyncJobResult> {
  const dateStr = dateIso.split('T')[0];

  return globalSyncEngine.executeJob(
    {
      jobId: 'evening_assist',
      idempotencyKey: `job_evening_${dateStr}`,
      actionContext: {
        actionType: 'propose_evening_closure',
        requestedBy: 'system_job',
        details: { dateStr }
      },
      dryRun
    },
    async (isDryRun) => {
      const summary: EveningSummaryDraft = {
        completedActionsCount: 4,
        openBlockersCount: 1,
        reflectionPrompt: '¿Qué hábito o avance de hoy generó menor esfuerzo con mayor claridad?',
        tomorrowDraftPlan: [
          { title: 'Práctica de Alemán A1 (Bloque B)', suggestedTimeSlot: '09:00 - 10:30' },
          { title: 'Actualización de CV y Caso de Estudio TwinSight', suggestedTimeSlot: '11:00 - 13:00' }
        ]
      };

      if (!isDryRun) {
        console.log(`[Job Noche] Borrador de cierre registrado para ${dateStr}`);
      }

      return summary;
    }
  );
}

/**
 * Job GitHub Digest — Resumen de repositorios a Notion
 */
export async function runGitHubDigestJob(repoName: string, dryRun: boolean = true): Promise<SyncJobResult> {
  const dateStr = new Date().toISOString().split('T')[0];

  return globalSyncEngine.executeJob(
    {
      jobId: 'github_digest',
      idempotencyKey: `job_github_${repoName}_${dateStr}`,
      actionContext: {
        actionType: 'summarize_github_activity',
        requestedBy: 'system_job',
        details: { repoName, dateStr }
      },
      dryRun
    },
    async (isDryRun) => {
      const digest: GitHubDigestSummary = {
        repoName,
        pushedCommitsCount: 3,
        mergedPRsCount: 1,
        notionSummaryText: `[GitHub Activity] ${repoName}: 3 commits enviados, 1 PR fusionado (Gobernanza Notion v1.0.0).`
      };

      if (!isDryRun) {
        console.log(`[Job GitHub] Resumen enviado a Notion para ${repoName}`);
      }

      return digest;
    }
  );
}

/**
 * Job Automatizaciones de Carrera — Detecta y crea borrador de aplicación
 * Jamás envía mensajes ni aplica automáticamente (requiere aprobación humana).
 */
export async function runCareerDraftJob(company: string, role: string, dryRun: boolean = true): Promise<SyncJobResult> {
  return globalSyncEngine.executeJob(
    {
      jobId: 'career_draft',
      idempotencyKey: `job_career_${company}_${role}`.toLowerCase().replace(/\s+/g, '_'),
      actionContext: {
        actionType: 'create_application_draft',
        requestedBy: 'system_job',
        details: { company, role }
      },
      dryRun
    },
    async (isDryRun) => {
      const draft: CareerApplicationDraft = {
        company,
        role,
        matchingScorePercent: 88,
        draftNotes: `Coincidencia alta con perfil Technical Artist / Unity WebGL. Destacar proyecto TwinSight X500 y optimización CAD.`,
        followUpTaskCreated: true
      };

      if (!isDryRun) {
        console.log(`[Job Carrera] Borrador de candidatura creado para ${company} (${role}) en Notion DB 5.`);
      }

      return draft;
    }
  );
}
