import React, { useState } from 'react';
import { ArrowLeftRight, Info } from 'lucide-react';
import type { TrainingProgram } from '../../data/fitness/programs/types';
import ExerciseLink from './ExerciseLink';
import ExerciseSubstitutionDrawer from './ExerciseSubstitutionDrawer';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';

export interface WorkoutPrescriptionTableProps {
  program: TrainingProgram;
  onOpenExerciseModal?: (exerciseId: string) => void;
}

export function WorkoutPrescriptionTable({
  program,
  onOpenExerciseModal
}: WorkoutPrescriptionTableProps) {
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const setWeek = useActiveProgramStore((s) => s.setWeek);
  const overrides = useActiveProgramStore((s) => s.selectedExerciseOverrides);

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  // Active drawer state
  const [substitutionTarget, setSubstitutionTarget] = useState<{
    prescriptionId: string;
    originalId: string;
    originalName: string;
    sourceSubs: string[];
  } | null>(null);

  const safeWeekIndex = Math.min(Math.max(currentWeek - 1, 0), program.weeks.length - 1);
  const activeWeek = program.weeks[safeWeekIndex] || program.weeks[0];
  const activeDay = activeWeek.days[selectedDayIndex] || activeWeek.days[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* SELECCIÓN DE SEMANA Y DÍA ESTILO APPLE */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* SEMANAS */}
        <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '4px', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
          {program.weeks.map((w) => (
            <button
              key={w.week}
              type="button"
              onClick={() => setWeek(w.week)}
              style={{
                background: currentWeek === w.week ? 'var(--color-accent-primary)' : 'transparent',
                color: currentWeek === w.week ? '#ffffff' : 'var(--text-tertiary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                fontWeight: currentWeek === w.week ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Sem {w.week} {w.isDeload ? '(Deload)' : ''}
            </button>
          ))}
        </div>

        {/* DÍAS */}
        <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '4px', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
          {activeWeek.days.map((day, idx) => (
            <button
              key={day.id}
              type="button"
              onClick={() => setSelectedDayIndex(idx)}
              style={{
                background: selectedDayIndex === idx ? 'var(--color-surface-raised)' : 'transparent',
                color: selectedDayIndex === idx ? 'var(--text)' : 'var(--text-tertiary)',
                border: selectedDayIndex === idx ? '1px solid var(--color-border-visible)' : '1px solid transparent',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                fontWeight: selectedDayIndex === idx ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {day.title}
            </button>
          ))}
        </div>
      </div>

      {/* NOTA DE LA SEMANA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', background: 'var(--surface-elevated)', border: '1px solid var(--color-border-subtle)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
        <Info size={16} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
        <span>{activeWeek.block} · {activeDay.title}: {activeWeek.isDeload ? 'Semana de descarga estratégica. Reducir carga y mantener margen.' : 'Sobrecarga progresiva estándar.'}</span>
      </div>

      {/* TABLA DE PRESCRIPCIÓN RESPONSIVA */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', background: 'var(--surface)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--font-size-body)' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <th style={{ padding: '10px 14px', fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700 }}>EJERCICIO (FITAPP)</th>
              <th style={{ padding: '10px 14px', fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700 }}>CALENTAMIENTO</th>
              <th style={{ padding: '10px 14px', fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700 }}>SERIES × REPS</th>
              <th style={{ padding: '10px 14px', fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700 }}>ESFUERZO (RIR/RPE)</th>
              <th style={{ padding: '10px 14px', fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700 }}>DESCANSO</th>
              <th style={{ padding: '10px 14px', fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700 }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {activeDay.exercises.map((prescription) => {
              const overrideId = overrides[prescription.id];
              const effectiveExerciseId = overrideId || prescription.exerciseId;
              const effectiveDetails = getExerciseDetails(effectiveExerciseId);

              return (
                <tr key={prescription.id} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  {/* EJERCICIO */}
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <ExerciseLink
                        exerciseId={effectiveExerciseId}
                        displayName={effectiveDetails.name}
                        onClickModal={onOpenExerciseModal}
                      />
                      {overrideId && (
                        <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 600 }}>
                          ✓ Sustituido (Original: {prescription.displayName})
                        </span>
                      )}
                      {prescription.notes && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                          {prescription.notes}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* CALENTAMIENTO */}
                  <td style={{ padding: '12px 14px', color: 'var(--text-secondary)' }}>
                    {prescription.warmupSets} series
                  </td>

                  {/* SERIES X REPS */}
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>
                    {prescription.workingSets} × {prescription.repRange}
                  </td>

                  {/* ESFUERZO */}
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ background: 'var(--surface-elevated)', border: '1px solid var(--color-border-visible)', padding: '2px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {prescription.effort.type.toUpperCase()} {prescription.effort.early} (S1) / {prescription.effort.last} (S2)
                    </span>
                  </td>

                  {/* DESCANSO */}
                  <td style={{ padding: '12px 14px', color: 'var(--text-secondary)' }}>
                    {prescription.rest}
                  </td>

                  {/* ACCIONES */}
                  <td style={{ padding: '12px 14px' }}>
                    <button
                      type="button"
                      onClick={() => setSubstitutionTarget({
                        prescriptionId: prescription.id,
                        originalId: prescription.exerciseId,
                        originalName: prescription.displayName,
                        sourceSubs: prescription.substituteExerciseIds
                      })}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--color-border-visible)',
                        color: 'var(--text)',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <ArrowLeftRight size={13} /> Sustituir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* DRAWER DE SUSTITUCCIÓN */}
      {substitutionTarget && (
        <ExerciseSubstitutionDrawer
          isOpen={Boolean(substitutionTarget)}
          onClose={() => setSubstitutionTarget(null)}
          prescriptionId={substitutionTarget.prescriptionId}
          originalExerciseId={substitutionTarget.originalId}
          originalName={substitutionTarget.originalName}
          sourceSubstitutes={substitutionTarget.sourceSubs}
        />
      )}
    </div>
  );
}

export default WorkoutPrescriptionTable;
