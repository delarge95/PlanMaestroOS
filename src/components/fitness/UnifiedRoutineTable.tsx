import React, { useState } from 'react';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';
import ExerciseModal from './ExerciseModal';
import ErrorBoundary from '../ErrorBoundary';

export interface RoutineExercise {
  name: string;
  subOption1?: string;
  subOption2?: string;
  calisthenicsSub?: string;
  warmupSets: string;
  sets: number | string;
  repRange: string;
  rirOrRpe: string;
  rest: string;
  notes: string;
}

export interface RoutineDay {
  dayName: string;
  exercises: RoutineExercise[];
}

export interface RoutineWeek {
  weekName: string;
  notes?: string;
  days: RoutineDay[];
}

export interface UnifiedRoutineProps {
  programTitle: string;
  programSubtitle: string;
  programBadge: string;
  badgeColor: string;
  summaryText: string;
  weeks: RoutineWeek[];
}

export default function UnifiedRoutineTable({
  programTitle,
  programSubtitle,
  programBadge,
  badgeColor,
  summaryText,
  weeks
}: UnifiedRoutineProps) {
  const [selectedWeekIdx, setSelectedWeekIdx] = useState<number>(0);
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  const [activeExercise, setActiveExercise] = useState<ExerciseEntry | null>(null);

  const currentWeek = weeks[selectedWeekIdx] || weeks[0];
  const currentDay = currentWeek?.days[selectedDayIdx] || currentWeek?.days[0];

  const handleOpenExercise = (exerciseName: string) => {
    const found = findExerciseByName(exerciseName);
    if (found) {
      setActiveExercise(found);
    } else {
      setActiveExercise({
        name: exerciseName,
        category: 'Guía Técnica FitApp-Free',
        discipline: 'Fitness',
        techniquePoints: [
          'Mantener tempo controlado (3-0-3 en fase excéntrica/concéntrica).',
          'Alinear articulaciones y mantener activación de core.',
          'Respetar el rango de RIR/RPE y descanso prescrito.'
        ],
        muscles: { strength: ['Músculos Objetivos'] }
      });
    }
  };

  return (
    <ErrorBoundary>
      <div style={{
        background: 'rgba(10, 15, 20, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* HEADER SECTION */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.7rem', color: badgeColor, fontWeight: 800, letterSpacing: '0.05em' }}>
              {programBadge}
            </span>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '4px 0 0', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
              {programTitle}
            </h2>
            <p style={{ fontSize: '0.83rem', color: 'var(--color-text-secondary)', margin: '2px 0 0' }}>{programSubtitle}</p>
          </div>

          {/* WEEK SELECTOR */}
          {weeks.length > 1 && (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Semana:</span>
              <select
                value={selectedWeekIdx}
                onChange={(e) => {
                  setSelectedWeekIdx(Number(e.target.value));
                  setSelectedDayIdx(0);
                }}
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  color: badgeColor,
                  border: `1px solid ${badgeColor}`,
                  padding: '8px 14px',
                  borderRadius: '12px',
                  fontFamily: 'Azeret Mono, monospace',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                {weeks.map((w, idx) => (
                  <option key={idx} value={idx}>
                    {w.weekName}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* METADATA BANNER */}
        <div style={{
          background: `rgba(255,255,255,0.03)`,
          border: `1px solid rgba(255,255,255,0.08)`,
          padding: '12px 18px',
          borderRadius: '14px',
          fontSize: '0.82rem',
          color: '#c7c7cc',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <div>{summaryText}</div>
          {currentWeek?.notes && (
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', fontStyle: 'italic', width: '100%', marginTop: '4px' }}>
              💡 <strong>Notas de Semana:</strong> {currentWeek.notes}
            </div>
          )}
        </div>

        {/* DAY SELECTOR TABS */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {currentWeek?.days.map((day, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedDayIdx(idx)}
              style={{
                background: selectedDayIdx === idx ? badgeColor : 'rgba(255,255,255,0.06)',
                color: selectedDayIdx === idx ? '#000000' : 'var(--color-text-primary)',
                border: selectedDayIdx === idx ? 'none' : '1px solid rgba(255,255,255,0.1)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '0.82rem',
                fontWeight: selectedDayIdx === idx ? 800 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {day.dayName}
            </button>
          ))}
        </div>

        {/* CURRENT DAY TABLE */}
        {currentDay && (
          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', overflow: 'hidden' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                {currentDay.dayName}
              </h3>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: badgeColor, background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '999px' }}>
                {currentDay.exercises.length} Ejercicios Prescritos
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(0,0,0,0.5)', color: 'var(--color-text-tertiary)', borderBottom: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Azeret Mono, monospace', fontSize: '0.7rem' }}>
                    <th style={{ padding: '12px 16px', width: '25%' }}>EJERCICIO PRINCIPAL</th>
                    <th style={{ padding: '12px 16px', width: '25%' }}>OPCIONES DE SUSTITUCIÓN</th>
                    <th style={{ padding: '12px 16px', width: '8%', textAlign: 'center' }}>CAL.</th>
                    <th style={{ padding: '12px 16px', width: '10%', textAlign: 'center' }}>SERIES / REPS</th>
                    <th style={{ padding: '12px 16px', width: '10%', textAlign: 'center' }}>RIR / RPE</th>
                    <th style={{ padding: '12px 16px', width: '8%', textAlign: 'center' }}>DESCANSO</th>
                    <th style={{ padding: '12px 16px', width: '14%' }}>NOTAS Y TÉCNICA</th>
                  </tr>
                </thead>
                <tbody>
                  {currentDay.exercises.map((ex, eIdx) => (
                    <tr key={eIdx} style={{ borderBottom: eIdx === currentDay.exercises.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
                      {/* PRIMARY EXERCISE */}
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenExercise(ex.name)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-accent-primary)',
                            cursor: 'pointer',
                            textAlign: 'left',
                            padding: 0,
                            fontSize: '0.85rem',
                            textDecoration: 'underline',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span>📍 {ex.name}</span>
                        </button>
                      </td>

                      {/* SUBSTITUTIONS */}
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {ex.subOption1 && (
                            <button
                              type="button"
                              onClick={() => handleOpenExercise(ex.subOption1!)}
                              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '3px 8px', color: '#c7c7cc', cursor: 'pointer', textAlign: 'left', fontSize: '0.78rem' }}
                            >
                              🔄 {ex.subOption1}
                            </button>
                          )}
                          {ex.subOption2 && (
                            <button
                              type="button"
                              onClick={() => handleOpenExercise(ex.subOption2!)}
                              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '3px 8px', color: '#c7c7cc', cursor: 'pointer', textAlign: 'left', fontSize: '0.78rem' }}
                            >
                              🔄 {ex.subOption2}
                            </button>
                          )}
                          {!ex.subOption1 && !ex.subOption2 && <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.75rem' }}>Específico</span>}
                        </div>
                      </td>

                      {/* WARMUP SETS */}
                      <td style={{ padding: '14px 16px', textAlign: 'center', fontFamily: 'Azeret Mono, monospace', color: 'var(--color-text-tertiary)', fontSize: '0.8rem' }}>
                        {ex.warmupSets || '1-2'}
                      </td>

                      {/* SETS AND REPS */}
                      <td style={{ padding: '14px 16px', textAlign: 'center', fontFamily: 'Azeret Mono, monospace', fontWeight: 700, color: badgeColor, fontSize: '0.82rem' }}>
                        {ex.sets} × {ex.repRange}
                      </td>

                      {/* RIR / RPE */}
                      <td style={{ padding: '14px 16px', textAlign: 'center', fontFamily: 'Azeret Mono, monospace', fontWeight: 700, color: 'var(--color-accent-warning)', fontSize: '0.8rem' }}>
                        {ex.rirOrRpe}
                      </td>

                      {/* REST */}
                      <td style={{ padding: '14px 16px', textAlign: 'center', fontFamily: 'Azeret Mono, monospace', color: 'var(--color-text-secondary)', fontSize: '0.78rem' }}>
                        {ex.rest}
                      </td>

                      {/* NOTES */}
                      <td style={{ padding: '14px 16px', color: 'var(--color-text-secondary)', fontSize: '0.78rem', lineHeight: 1.4 }}>
                        {ex.notes}
                        {ex.calisthenicsSub && (
                          <div style={{ marginTop: '4px' }}>
                            <button
                              type="button"
                              onClick={() => handleOpenExercise(ex.calisthenicsSub!)}
                              style={{ background: 'rgba(48,209,88,0.12)', border: '1px solid rgba(48,209,88,0.3)', padding: '2px 6px', borderRadius: '6px', color: 'var(--color-state-done)', fontSize: '0.74rem', cursor: 'pointer' }}
                            >
                              ⚡ Calistenia: {ex.calisthenicsSub}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* EXERCISE DETAIL MODAL */}
        <ExerciseModal exercise={activeExercise} onClose={() => setActiveExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
