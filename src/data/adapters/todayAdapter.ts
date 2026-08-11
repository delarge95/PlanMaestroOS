// src/data/adapters/todayAdapter.ts - Adaptador de presentación para la Pantalla Hoy

import type { TodayDomainView, CareerPipelineView } from '../contracts/domainContracts';
import { useActiveProgramStore } from '../fitness/activeProgramStore';
import { getProgramById } from '../fitness/programs';
import type { NotionTaskPropertyMap, NotionDailyPlanPropertyMap } from '../notion/schema';

/**
 * Genera la vista consolidada para la pantalla "Hoy", abstrayendo orígenes de datos.
 */
export function getTodayDomainView(): TodayDomainView {
  const activeProgramId = useActiveProgramStore.getState().programId;
  const currentProgram = getProgramById(activeProgramId);

  return {
    uiState: {
      status: 'ready',
      lastUpdatedIso: new Date().toISOString()
    },
    activeBlock: 'Bloque A · TwinSight X500: Preparación de Sustentación',
    primaryAction10Min: {
      title: 'Repasar diapositivas 1 a 3 del TwinSight X500 en voz alta',
      targetArea: 'Tesis',
      estimatedMinutes: 7
    },
    top3Tasks: [
      {
        id: 't1',
        title: 'Sustentación de tesis TwinSight X500',
        area: 'Tesis',
        priority: 'Alta'
      },
      {
        id: 't2',
        title: 'Revisión de pipeline Blender CAD a Unity WebGL',
        area: 'Carrera',
        priority: 'Media'
      },
      {
        id: 't3',
        title: 'Sesión Upper 1 (Tracción & Espalda)',
        area: 'Fitness',
        priority: 'Media'
      }
    ],
    fitnessSummary: {
      activeRoutineTitle: currentProgram ? currentProgram.title.replace(/\s*\([^)]*\)/g, '').trim() : 'MinMax Hypertrophy',
      sessionCompletedToday: false,
      nextWorkoutDayTitle: 'Día 1: Upper 1 (Fuerza)',
      recentPR: { exercise: 'Prensa Inclinada', value: '+5 kg (PR MaxWeight)' }
    },
    careerSummary: {
      pendingFollowUpsCount: 1,
      activeApplicationsCount: 3,
      nextFollowUpDate: new Date().toISOString().split('T')[0]
    }
  };
}

/**
 * Mapea propiedades de Notion DB 3 (Tasks) y DB 4 (DailyPlan) a la vista de la pantalla Hoy.
 */
export function mapNotionTasksToTodayView(
  tasks: NotionTaskPropertyMap[],
  dailyPlan?: NotionDailyPlanPropertyMap
): Partial<TodayDomainView> {
  const top3 = tasks.slice(0, 3).map((t, index) => ({
    id: `notion_task_${index}`,
    title: t.Titulo || 'Tarea sin título',
    area: t.AreaId || 'General',
    priority: t.Prioridad || 'Media'
  }));

  return {
    activeBlock: dailyPlan?.BloqueA || 'Bloque A · Trabajo Profundo',
    top3Tasks: top3
  };
}

/**
 * Genera la vista del pipeline de Carrera MVP.
 */
export function getCareerPipelineView(): CareerPipelineView {
  return {
    uiState: {
      status: 'ready',
      lastUpdatedIso: new Date().toISOString()
    },
    applications: [
      {
        id: 'app_1',
        company: 'Studio X',
        role: 'Unity Technical Artist',
        status: 'Aplicado',
        nextAction: 'Seguimiento por LinkedIn a Lead Tech Artist',
        followUpDateIso: new Date().toISOString().split('T')[0],
        remoteType: 'Remoto LATAM'
      },
      {
        id: 'app_2',
        company: 'Digital Twin Interactive',
        role: 'WebGL Real-Time Developer',
        status: 'Prospecto',
        nextAction: 'Personalizar CV con Caso de Estudio TwinSight',
        remoteType: 'Remoto Global'
      }
    ],
    assets: [
      {
        id: 'asset_1',
        title: 'CV Technical Artist (Versión Inglés)',
        category: 'CV',
        version: 'v2.1',
        isApproved: true
      },
      {
        id: 'asset_2',
        title: 'Caso de Estudio TwinSight X500 (WebGL)',
        category: 'CaseStudy',
        version: 'v1.0',
        isApproved: true
      }
    ],
    aiDrafts: [
      {
        id: 'draft_1',
        targetCompany: 'Studio X',
        targetRole: 'Unity Technical Artist',
        draftContent: 'Borrador de mensaje de seguimiento enviando demo reel y métricas de optimización CAD.',
        sourcesUsed: ['TwinSight Case Study', 'LinkedIn Profile'],
        requiresHumanApproval: true,
        isApproved: false
      }
    ]
  };
}
