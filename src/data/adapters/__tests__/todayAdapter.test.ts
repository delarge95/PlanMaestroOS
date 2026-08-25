// src/data/adapters/__tests__/todayAdapter.test.ts

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getTodayDomainView, getCareerPipelineView, mapNotionTasksToTodayView } from '../todayAdapter';
import { useActiveProgramStore } from '../../fitness/activeProgramStore';
import { useCareerStore } from '../../career/careerStore';
import { useVocabularyStore } from '../../../lib/languages/vocabularyStore';
import { useClinicalStore } from '../../clinical/clinicalStore';

describe('todayAdapter (AG-ORQ)', () => {
  beforeEach(() => {
    // Reset stores if necessary
    vi.restoreAllMocks();
  });

  it('genera una vista SSR-safe determinista sin fallar', () => {
    const view = getTodayDomainView({ ssrSafe: true, now: new Date('2026-08-24T10:00:00Z') });
    expect(view.uiState.status).toBe('ready');
    expect(view.top3Tasks).toHaveLength(3);
    expect(view.top3Tasks[0].area).toBe('Carrera');
    expect(view.top3Tasks[1].area).toBe('Fitness');
    expect(view.top3Tasks[2].area).toBe('Idiomas');
    expect(view.fitnessSummary.activeRoutineTitle).toBeDefined();
    expect(view.careerSummary.activeApplicationsCount).toBeGreaterThan(0);
  });

  it('consume el calendario real de fitness para calcular el día de entrenamiento', () => {
    // Lunes 24 de agosto de 2026 -> workoutDayIndex = 1
    const mondayDate = new Date('2026-08-24T10:00:00Z');
    const view = getTodayDomainView({ ssrSafe: false, now: mondayDate });

    expect(view.fitnessSummary.nextWorkoutDayTitle).toContain('Día 1');
    expect(view.top3Tasks[1].area).toBe('Fitness');
    expect(view.top3Tasks[1].title).toContain('Min-Max');
  });

  it('identifica correctamente días de fin de semana (LISS / Descanso)', () => {
    // Sábado 29 de agosto de 2026
    const saturdayDate = new Date('2026-08-29T10:00:00Z');
    const view = getTodayDomainView({ ssrSafe: false, now: saturdayDate });

    expect(view.fitnessSummary.nextWorkoutDayTitle).toContain('Sábado');
    expect(view.fitnessSummary.nextWorkoutDayTitle).toContain('LISS');
  });

  it('integra careerStore en getCareerPipelineView', () => {
    const pipeline = getCareerPipelineView();
    expect(pipeline.uiState.status).toBe('ready');
    expect(pipeline.applications.length).toBeGreaterThan(0);
    expect(pipeline.applications[0]).toHaveProperty('company');
    expect(pipeline.applications[0]).toHaveProperty('nextAction');
    expect(pipeline.assets.length).toBeGreaterThan(0);
    expect(pipeline.aiDrafts.length).toBeGreaterThan(0);
  });

  it('mapea tareas de Notion cuando se suministran', () => {
    const mapped = mapNotionTasksToTodayView(
      [
        { Titulo: 'Preparar demo reel', AreaId: 'Carrera', Prioridad: 'Alta' },
        { Titulo: 'Entrenar piernas', AreaId: 'Fitness', Prioridad: 'Media' },
      ],
      { BloqueA: 'Bloque A · Testing Notion' }
    );

    expect(mapped.activeBlock).toBe('Bloque A · Testing Notion');
    expect(mapped.top3Tasks).toHaveLength(2);
    expect(mapped.top3Tasks?.[0].title).toBe('Preparar demo reel');
  });
});
