// src/data/career/careerStore.ts — Store laboral con persistencia real (AG-CAREER, ciclo 1).
//
// Sustituye los mocks en memoria: las aplicaciones/empresas viven en un store
// zustand persistido en localStorage bajo la clave 'career-state-v1' (IndexedDB
// queda para el adaptador global de CORE; este persist es el mismo patrón que
// usan los stores consolidados de fitness).
//
// Regla de contrato (doc-01 + doc-12): cada aplicación tiene EXACTAMENTE una
// única próxima acción. `setNextAction` es el único camino para fijarla y
// `moveStage` la exige antes de avanzar de columna (Tarea 3).

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  applicationsSeed,
  trackerWeeklyPlan,
  trackerCanonicalRules,
  fitScoreRule,
  trackerImportedAt
} from './applicationsSeed';
import { companiesSeed } from './companiesSeed';
import {
  STAGE_TO_DEFAULT_TRACKER_STATUS,
  TRACKER_STATUS_TO_STAGE,
  type JobApplication,
  type PipelineStage,
  type TrackerStatus,
  type WeeklyPlanWeek
} from './applications';
import type { CompanyRecord, CompanyTimelineEvent } from './companies';
import type { CompanyResearch } from './careerContracts';

export interface CareerState {
  /** Versión del shape persistido (migraciones futuras la leen). */
  version: 1;
  applications: JobApplication[];
  companies: CompanyRecord[];
  /** Progreso del plan semanal de 16 semanas (tracker xlsx, hoja Weekly Plan). */
  weeklyPlan: WeeklyPlanWeek[];
  /**
   * Investigación profunda por empresa, claveada por nombre en minúsculas.
   * Additive sobre el shape v1: el persist merge mantiene {} si no existía.
   */
  companyResearch: Record<string, CompanyResearch>;
  /** Última fecha ISO de actualización de cualquier colección. */
  updatedAt: string;

  // — Aplicaciones —
  addApplication: (input: Omit<JobApplication, 'id' | 'updatedAtIso'> & { id?: string }) => string;
  updateApplication: (id: string, patch: Partial<Omit<JobApplication, 'id' | 'updatedAtIso'>>) => void;
  /**
   * Mueve de columna el pipeline. REGLA: si la aplicación no tiene una única
   * próxima acción definida, el movimiento se RECHAZA (devuelve false) — la UI
   * debe mostrar el badge pendiente y pedir la acción primero.
   */
  moveStage: (id: string, targetStage: PipelineStage) => boolean;
  /** Fija la única próxima acción de una aplicación (y opcionalmente su fecha de seguimiento). */
  setNextAction: (id: string, action: string, followUpDateIso?: string) => void;
  /** Resetea TODO al estado importado del tracker (re-import destructivo consciente). */
  resetToSeed: () => void;
  /** Añade/actualiza empresas sin borrar timelines existentes (upsert por id o nombre). */
  upsertCompany: (record: CompanyRecord) => void;
  /** Registra un evento inmutable en la línea de tiempo de una empresa. */
  addTimelineEvent: (companyName: string, event: Omit<CompanyTimelineEvent, 'id'>) => void;
  /** Upsert de la investigación de una empresa (clave: nombre en minúsculas). */
  upsertCompanyResearch: (research: CompanyResearch) => void;
}

const todayIso = () => new Date().toISOString().slice(0, 10);

const findCompanyByName = (companies: CompanyRecord[], name: string): CompanyRecord | undefined =>
  companies.find((c) => c.name.toLowerCase() === name.toLowerCase());

export const useCareerStore = create<CareerState>()(
  persist(
    (set, get) => ({
      version: 1,
      applications: applicationsSeed,
      companies: companiesSeed,
      companyResearch: {},
      weeklyPlan: trackerWeeklyPlan,
      updatedAt: trackerImportedAt,

      addApplication: (input) => {
        const id = input.id ?? `app-${Date.now().toString(36)}`;
        const trackerStatus: TrackerStatus =
          input.trackerStatus ??
          (input.stage ? STAGE_TO_DEFAULT_TRACKER_STATUS[input.stage] : 'Saved');
        const app: JobApplication = {
          ...input,
          id,
          trackerStatus,
          stage: input.stage ?? TRACKER_STATUS_TO_STAGE[trackerStatus],
          source: input.source ?? 'manual',
          updatedAtIso: todayIso()
        };
        set((s) => ({ applications: [...s.applications, app], updatedAt: new Date().toISOString() }));
        return id;
      },

      updateApplication: (id, patch) => {
        set((s) => ({
          applications: s.applications.map((a) => (a.id === id ? { ...a, ...patch, updatedAtIso: todayIso() } : a)),
          updatedAt: new Date().toISOString()
        }));
      },

      moveStage: (id, targetStage) => {
        const app = get().applications.find((a) => a.id === id);
        if (!app) return false;
        // Regla dura del contrato: sin única próxima acción no se avanza.
        if (!app.singleNextAction || app.singleNextAction.trim().length === 0) return false;
        set((s) => ({
          applications: s.applications.map((a) =>
            a.id === id
              ? {
                  ...a,
                  stage: targetStage,
                  trackerStatus: STAGE_TO_DEFAULT_TRACKER_STATUS[targetStage],
                  updatedAtIso: todayIso()
                }
              : a
          ),
          updatedAt: new Date().toISOString()
        }));
        return true;
      },

      setNextAction: (id, action, followUpDateIso) => {
        const trimmed = action.trim();
        if (!trimmed) return; // la acción única jamás puede quedar vacía
        set((s) => ({
          applications: s.applications.map((a) =>
            a.id === id
              ? {
                  ...a,
                  singleNextAction: trimmed,
                  followUpDateIso: followUpDateIso ?? a.followUpDateIso,
                  updatedAtIso: todayIso()
                }
              : a
          ),
          updatedAt: new Date().toISOString()
        }));
      },

      resetToSeed: () => {
        set({
          applications: applicationsSeed,
          companies: companiesSeed,
          weeklyPlan: trackerWeeklyPlan,
          updatedAt: new Date().toISOString()
        });
      },

      upsertCompany: (record) => {
        set((s) => {
          const existing = s.companies.find(
            (c) => c.id === record.id || c.name.toLowerCase() === record.name.toLowerCase()
          );
          if (!existing) return { companies: [...s.companies, record], updatedAt: new Date().toISOString() };
          return {
            companies: s.companies.map((c) =>
              c === existing ? { ...c, ...record, timeline: record.timeline.length ? record.timeline : c.timeline } : c
            ),
            updatedAt: new Date().toISOString()
          };
        });
      },

      addTimelineEvent: (companyName, event) => {
        set((s) => {
          const company = findCompanyByName(s.companies, companyName);
          if (!company) return s;
          const id = `${company.id}-e${company.timeline.length + 1}-${Date.now().toString(36)}`;
          return {
            companies: s.companies.map((c) =>
              c === company ? { ...c, timeline: [...c.timeline, { ...event, id }] } : c
            ),
            updatedAt: new Date().toISOString()
          };
        });
      },

      upsertCompanyResearch: (research) => {
        set((s) => ({
          companyResearch: {
            ...s.companyResearch,
            [research.companyName.toLowerCase()]: research
          },
          updatedAt: new Date().toISOString()
        }));
      }
    }),
    {
      name: 'career-state-v1',
      version: 1
    }
  )
);

/** Selectores de conveniencia (evita re-renders por objetos nuevos). */
export const selectApplications = (s: CareerState) => s.applications;
export const selectCompanies = (s: CareerState) => s.companies;
export const selectWeeklyPlan = (s: CareerState) => s.weeklyPlan;

/** Reglas canónicas del tracker (no mutan en runtime — van aparte del persist). */
export { trackerCanonicalRules, fitScoreRule };
