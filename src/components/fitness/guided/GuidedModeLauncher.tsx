// src/components/fitness/guided/GuidedModeLauncher.tsx
// B9 — Entrada ADITIVA al modo guiado desde Hoy: banner/botón junto a la
// rutina del día. NO modifica TodayRoutineStack ni ningún restaurado; lee las
// mismas fuentes (activeProgramStore + programs + exerciseResolver) para
// construir el plan del día seleccionado.

import React, { useMemo, useState } from 'react';
import { getProgramById } from '../../../data/fitness/programs';
import { useActiveProgramStore } from '../../../data/fitness/activeProgramStore';
import { getExerciseDetails } from '../../../data/fitness/exerciseResolver';
import { buildGuidedPlan, type GuidedPlan } from '../../../lib/fitness/guidedSessionEngine';
import GuidedSessionRunner from './GuidedSessionRunner';

interface GuidedModeLauncherProps {
  /** Índice del día seleccionado en Hoy (0-4 entreno; >=5 descanso). */
  selectedDayIndex?: number;
}

export default function GuidedModeLauncher({ selectedDayIndex = 1 }: GuidedModeLauncherProps) {
  const [active, setActive] = useState(false);
  const programId = useActiveProgramStore((s) => s.programId);
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const overrides = useActiveProgramStore((s) => s.selectedExerciseOverrides);

  const plan = useMemo<GuidedPlan | null>(() => {
    const program = getProgramById(programId);
    if (!program) return null;
    const safeWeekIdx = Math.min(Math.max(currentWeek - 1, 0), (program.weeks?.length || 1) - 1);
    const week = program.weeks?.[safeWeekIdx] || program.weeks?.[0];
    if (!week?.days?.length) return null;
    const safeDayIdx = Math.min(Math.max(selectedDayIndex, 0), week.days.length - 1);
    const day = week.days[safeDayIdx];
    if (!day) return null;
    return buildGuidedPlan({
      program,
      weekNumber: currentWeek,
      day,
      prescriptions: day.exercises,
      overrides,
      resolve: getExerciseDetails
    });
  }, [programId, currentWeek, selectedDayIndex, overrides]);

  const isRestDay = selectedDayIndex >= 5;
  const disabled = isRestDay || !plan || plan.exercises.length === 0;

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        background: 'rgba(48,209,88,0.06)',
        border: '1px dashed rgba(48,209,88,0.35)',
        borderRadius: 'var(--radius-m, 12px)',
        padding: '12px 16px'
      }}>
        <div style={{ flex: '1 1 220px', minWidth: 0 }}>
          <strong style={{ display: 'block', fontSize: 'var(--fs-body)', color: 'var(--text-primary)' }}>Modo guiado set a set</strong>
          <span style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }}>
            {isRestDay
              ? 'Hoy toca descanso: no hay rutina guiada.'
              : disabled
                ? 'Este día no tiene ejercicios prescritos.'
                : `${plan?.exercises.length} ejercicios · video, cues y descanso cronometrado`}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setActive(true)}
          disabled={disabled}
          title={disabled ? undefined : 'Entrenar la rutina de hoy ejercicio por ejercicio, con serie cronometrada'}
          style={{
            background: disabled ? 'rgba(255,255,255,0.08)' : 'var(--success)',
            border: 'none',
            color: disabled ? 'rgba(255,255,255,0.35)' : '#000',
            padding: '10px 18px',
            borderRadius: '10px',
            fontSize: 'var(--fs-body)',
            fontWeight: 800,
            cursor: disabled ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          ▶ Modo guiado
        </button>
      </div>

      {active && plan && !disabled && (
        <GuidedSessionRunner plan={plan} onClose={() => setActive(false)} />
      )}
    </>
  );
}
