// src/components/fitness/TodayRoutineStack.tsx
import React, { useState } from 'react';
import Disclosure from '../ui/Disclosure';
import ExerciseLink from './ExerciseLink';
import ExerciseSubstitutionDrawer from './ExerciseSubstitutionDrawer';
import { ArrowLeftRight, ChevronDown, ChevronUp, RotateCcw, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';
import { getProgramById } from '../../data/fitness/programs';
import { pushFitnessSessionToWorker } from '../../lib/ai/workerClient';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';

export interface ExerciseLogState {
  warmupSets: number;
  workingSets: number;
  repRange: string;
  effort: string;
  weights: string[];
}

export interface TodayRoutineStackProps {
  selectedDayIndex?: number;
}

export default function TodayRoutineStack({ selectedDayIndex = 1 }: TodayRoutineStackProps) {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const overrides = useActiveProgramStore((s) => s.selectedExerciseOverrides);
  const clearOverride = useActiveProgramStore((s) => s.clearExerciseOverride);
  const postponeDay = useActiveProgramStore((s) => s.postponeDay);
  const postponedDays = useActiveProgramStore((s) => s.postponedDays || 0);
  const resetPostponedDays = useActiveProgramStore((s) => s.resetPostponedDays);

  const program = getProgramById(activeProgramId);
  const safeWeekIndex = Math.min(Math.max(currentWeek - 1, 0), (program.weeks?.length || 1) - 1);
  const activeWeek = program.weeks?.[safeWeekIndex] || program.weeks?.[0];

  const safeDayIndex = Math.min(Math.max(selectedDayIndex, 0), Math.max((activeWeek?.days?.length || 1) - 1, 0));
  const activeDay = activeWeek?.days?.[safeDayIndex] || activeWeek?.days?.[0];

  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);
  // Confirmación inline de sesión guardada (reemplaza al alert nativo).
  const [sessionSavedAt, setSessionSavedAt] = useState<number | null>(null);
  const [effortMode, setEffortMode] = useState<'RIR' | 'RPE'>('RIR');
  const [substitutionTarget, setSubstitutionTarget] = useState<{
    prescriptionId: string;
    originalId: string;
    originalName: string;
    sourceSubs: string[];
  } | null>(null);

  // Estado editable in-situ para ejercicios del día
  const [exerciseLogs, setExerciseLogs] = useState<Record<string, ExerciseLogState>>({});

  const getLogState = (exId: string, defaultWarmup: number, defaultSets: number, defaultReps: string, defaultEffort: string): ExerciseLogState => {
    if (exerciseLogs[exId]) return exerciseLogs[exId];
    return {
      warmupSets: defaultWarmup || 1,
      workingSets: defaultSets || 3,
      repRange: defaultReps || '8-10',
      effort: defaultEffort || 'RIR 2',
      weights: Array(defaultSets || 3).fill('')
    };
  };

  const updateWeight = (exId: string, setIdx: number, val: string, defaultState: ExerciseLogState) => {
    const current = exerciseLogs[exId] || defaultState;
    const nextWeights = [...current.weights];
    nextWeights[setIdx] = val;
    setExerciseLogs((prev) => ({
      ...prev,
      [exId]: { ...current, weights: nextWeights }
    }));
  };

  const updateField = (exId: string, field: keyof ExerciseLogState, value: any, defaultState: ExerciseLogState) => {
    const current = exerciseLogs[exId] || defaultState;
    setExerciseLogs((prev) => ({
      ...prev,
      [exId]: { ...current, [field]: value }
    }));
  };

  // Reestablecer un solo ejercicio preservando pesos
  const handleResetSingleExercise = (pId: string, defaultWarmup: number, defaultSets: number, defaultReps: string, defaultEffort: string) => {
    if (overrides[pId]) {
      clearOverride(pId);
    }
    setExerciseLogs((prev) => {
      const existing = prev[pId];
      return {
        ...prev,
        [pId]: {
          warmupSets: defaultWarmup,
          workingSets: defaultSets,
          repRange: defaultReps,
          effort: defaultEffort,
          weights: existing ? existing.weights : Array(defaultSets).fill('')
        }
      };
    });
  };

  const toggleNote = (id: string) => {
    setExpandedNoteId((prev) => (prev === id ? null : id));
  };

  const isRestDay = selectedDayIndex >= 5;

  return (
    <div className="ds-stack">
      {isRestDay ? (
        <div className="ds-card ds-stack-sm" style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
          <h4 className="ds-h3">🌿 Día de Descanso Programado</h4>
          <p className="ds-caption" style={{ fontSize: 'var(--fs-body)' }}>Aprovecha para hidratación, caminata ligera, movilidad y recuperación neuromuscular.</p>
        </div>
      ) : (
        <Disclosure
          label={`Rutina Principal: ${program.title.replace(/\s*\([^)]*\)/g, '').trim()} — ${activeDay?.name || `Día ${safeDayIndex + 1}`}`}
          summary={`${activeDay?.exercises?.length || 0} ejercicios`}
          actions={
            <div className="ds-row" style={{ gap: '6px' }}>
              {/* DESHACER POSTERGACIÓN SI EXISTEN DÍAS POSTERGADOS */}
              {postponedDays > 0 && (
                <button
                  type="button"
                  onClick={resetPostponedDays}
                  title={`Restablecer días postergados (${postponedDays})`}
                  className="ds-btn ds-btn-danger ds-btn-sm"
                  style={{ padding: '4px' }}
                >
                  <RotateCcw size={14} />
                </button>
              )}

              {/* POSTERGAR DÍA */}
              <button
                type="button"
                onClick={postponeDay}
                title="Postergar día de entrenamiento (+1 día)"
                className="ds-btn ds-btn-secondary ds-btn-sm"
                style={{ padding: '4px' }}
              >
                <Clock size={14} />
              </button>

              {/* LINK DIRECTO A LA BASE DE DATOS DE RUTINAS */}
              <a
                href={`/app/fitness/library/catalog?routine=${encodeURIComponent(program.id)}`}
                title="Ver rutina en Base de Datos"
                className="ds-btn ds-btn-secondary ds-btn-sm"
                style={{ padding: '4px', color: 'var(--accent)' }}
              >
                <ExternalLink size={14} />
              </a>
            </div>
          }
        >
          <div className="ds-card" style={{ overflowX: 'auto', padding: 0 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--fs-body, 0.9rem)' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)', color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px 12px' }}>Ejercicio / Código</th>
                  <th style={{ padding: '10px 12px' }}>Series Aprox</th>
                  <th style={{ padding: '10px 12px' }}>Series × Reps</th>
                  <th style={{ padding: '10px 12px' }}>Pesos por Serie (kg)</th>
                  
                  {/* CABECERA MINIMALISTA RIR / RPE CON CONMUTADOR */}
                  <th style={{ padding: '10px 12px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(0,0,0,0.4)', padding: '2px', borderRadius: '6px', border: '1px solid var(--color-border-subtle)' }}>
                      <button
                        type="button"
                        onClick={() => setEffortMode('RIR')}
                        style={{
                          background: effortMode === 'RIR' ? 'var(--accent)' : 'transparent',
                          color: effortMode === 'RIR' ? '#ffffff' : 'var(--text-secondary)',
                          border: 'none',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        RIR
                      </button>
                      <button
                        type="button"
                        onClick={() => setEffortMode('RPE')}
                        style={{
                          background: effortMode === 'RPE' ? 'var(--accent)' : 'transparent',
                          color: effortMode === 'RPE' ? '#ffffff' : 'var(--text-secondary)',
                          border: 'none',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        RPE
                      </button>
                    </div>
                  </th>

                  <th style={{ padding: '10px 12px' }}>Descanso</th>
                  <th style={{ padding: '10px 12px' }}>Sustitución</th>
                </tr>
              </thead>
              <tbody>
                {activeDay?.exercises?.map((prescription, pIdx) => {
                  const pId = prescription.id || `p-${pIdx}`;
                  const overrideId = overrides[pId];
                  const effectiveExerciseId = overrideId || prescription.exerciseId;
                  const effectiveDetails = getExerciseDetails(effectiveExerciseId);

                  const defaultReps = prescription.targetReps || prescription.repRange || '8-10';
                  const defaultEffort = prescription.earlySetRpe || prescription.effort?.early || 'RIR 2';

                  const warmupCount = typeof prescription.warmupSets === 'number' ? prescription.warmupSets : (parseInt(String(prescription.warmupSets), 10) || 1);
                  const workingCount = typeof prescription.workingSets === 'number' ? prescription.workingSets : (parseInt(String(prescription.workingSets), 10) || 3);

                  const logState = getLogState(pId, warmupCount, workingCount, defaultReps, defaultEffort);
                  const isNoteExpanded = expandedNoteId === pId;

                  const isModified = Boolean(
                    overrideId ||
                    logState.warmupSets !== warmupCount ||
                    logState.workingSets !== workingCount ||
                    logState.repRange !== defaultReps ||
                    logState.effort !== defaultEffort
                  );

                  // Formatear RIR o RPE por cada serie en formato minimalista (solo número)
                  const rirPerSet = prescription.rirPerSet || [];

                  return (
                    <tr key={pId} style={{ borderBottom: '1px solid var(--color-border-subtle)', background: pIdx % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                      
                      {/* 1. EJERCICIO Y NOTAS CON BOTÓN REESTABLECER SI FUE MODIFICADO */}
                      <td style={{ padding: '12px 14px', verticalAlign: 'top', maxWidth: '240px' }}>
                        <div className="ds-stack-sm" style={{ gap: 'var(--space-1)' }}>
                          <div className="ds-row" style={{ gap: '6px' }}>
                            <ExerciseLink
                              exerciseId={effectiveExerciseId}
                              displayName={overrideId ? effectiveDetails.name : (prescription.displayName || effectiveDetails.name)}
                            />

                            {isModified && (
                              <button
                                type="button"
                                onClick={() => handleResetSingleExercise(pId, warmupCount, workingCount, defaultReps, defaultEffort)}
                                title="Reestablecer este ejercicio a su prescripción original"
                                aria-label="Reestablecer este ejercicio a su prescripción original"
                                className="ds-btn ds-btn-ghost ds-btn-sm"
                                style={{ padding: '2px' }}
                              >
                                <RotateCcw size={13} />
                              </button>
                            )}
                          </div>

                          {overrideId && (
                            <span style={{ fontSize: '0.72rem', color: 'var(--success)', fontWeight: 700 }}>
                              ✓ Sustituido por {effectiveDetails.name}
                            </span>
                          )}

                          {prescription.notes && (
                            <div>
                              <button
                                type="button"
                                onClick={() => toggleNote(pId)}
                                className="ds-btn ds-btn-ghost ds-btn-sm"
                                style={{ padding: 0, gap: '4px', fontSize: '0.74rem' }}
                              >
                                <span>Nota</span>
                                {isNoteExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                              </button>
                              {isNoteExpanded && (
                                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '4px 0 0', lineHeight: 1.4, background: 'rgba(255,255,255,0.03)', padding: '6px 8px', borderRadius: '4px', borderLeft: '2px solid var(--accent)' }}>
                                  {prescription.notes}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* 2. SERIES APROX */}
                      <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                        <span
                          onClick={() => {
                            const newWarmup = prompt('Series de calentamiento:', String(logState.warmupSets));
                            if (newWarmup) updateField(pId, 'warmupSets', Number(newWarmup), logState);
                          }}
                          title="Clic para editar series de calentamiento"
                          style={{ cursor: 'pointer', borderBottom: '1px dashed var(--text-secondary)', color: 'var(--text-secondary)' }}
                        >
                          {logState.warmupSets} series
                        </span>
                      </td>

                      {/* 3. SERIES X REPS */}
                      <td style={{ padding: '12px 14px', verticalAlign: 'top', fontWeight: 700 }}>
                        <span
                          onClick={() => {
                            const newSets = prompt('Número de series efectivas:', String(logState.workingSets));
                            if (newSets) updateField(pId, 'workingSets', Number(newSets), logState);
                          }}
                          title="Clic para editar número de series"
                          style={{ cursor: 'pointer', borderBottom: '1px dashed var(--text-primary)' }}
                        >
                          {logState.workingSets}
                        </span>
                        {' × '}
                        <span
                          onClick={() => {
                            const newReps = prompt('Rango de repeticiones:', logState.repRange);
                            if (newReps) updateField(pId, 'repRange', newReps, logState);
                          }}
                          title="Clic para editar repeticiones"
                          style={{ cursor: 'pointer', borderBottom: '1px dashed var(--text-primary)' }}
                        >
                          {logState.repRange}
                        </span>
                      </td>

                      {/* 4. RECUADROS PARA INGRESAR PESO POR SERIE EFECTIVA */}
                      <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                        <div className="ds-row-wrap" style={{ gap: 'var(--space-1)' }}>
                          {Array.from({ length: logState.workingSets }).map((_, sIdx) => (
                            <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>S{sIdx + 1}</span>
                              <input
                                type="number"
                                step="0.5"
                                placeholder="kg"
                                value={logState.weights[sIdx] || ''}
                                onChange={(e) => updateWeight(pId, sIdx, e.target.value, logState)}
                                style={{
                                  width: '52px',
                                  background: 'rgba(0,0,0,0.5)',
                                  color: 'var(--text-primary)',
                                  border: '1px solid var(--color-border-subtle)',
                                  borderRadius: '4px',
                                  padding: '3px 5px',
                                  fontSize: '0.78rem',
                                  outline: 'none'
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </td>

                      {/* 5. VALORES MINIMALISTAS RIR / RPE POR SERIE */}
                      <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                        <div className="ds-row-wrap" style={{ gap: 'var(--space-1)' }}>
                          {Array.from({ length: logState.workingSets }).map((_, sIdx) => {
                            const rawVal = rirPerSet[sIdx] || logState.effort;
                            const numOnly = rawVal.replace(/^RIR\s*/i, '').replace(/^RPE\s*/i, '').trim();

                            let displayVal = numOnly;
                            if (effortMode === 'RPE' && !isNaN(Number(numOnly))) {
                              displayVal = String(10 - Number(numOnly));
                            }

                            return (
                              <span
                                key={sIdx}
                                title={`S${sIdx + 1}: ${effortMode} ${displayVal}`}
                                style={{
                                  background: 'rgba(255,255,255,0.04)',
                                  border: '1px solid var(--color-border-subtle)',
                                  borderRadius: '4px',
                                  padding: '2px 6px',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  color: 'var(--text-primary)',
                                  fontFamily: 'SF Mono, monospace'
                                }}
                              >
                                S{sIdx + 1}: {displayVal}
                              </span>
                            );
                          })}
                        </div>
                      </td>

                      {/* 6. DESCANSO */}
                      <td style={{ padding: '12px 14px', verticalAlign: 'top', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                        {prescription.restPeriod || prescription.rest || '1-2 min'}
                      </td>

                      {/* 7. SUSTITUIR */}
                      <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                        <button
                          type="button"
                          onClick={() => setSubstitutionTarget({
                            prescriptionId: pId,
                            originalId: prescription.exerciseId,
                            originalName: prescription.displayName || effectiveDetails.name,
                            sourceSubs: [
                              ...(prescription.substitutionOption1 ? [prescription.substitutionOption1] : []),
                              ...(prescription.substitutionOption2 ? [prescription.substitutionOption2] : []),
                              ...(prescription.substituteOptions || [])
                            ]
                          })}
                          className="ds-btn ds-btn-secondary ds-btn-sm"
                          style={{ gap: '4px' }}
                        >
                          <ArrowLeftRight size={12} /> Sustituir
                        </button>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* CONFIRMACIÓN INLINE DE SESIÓN GUARDADA */}
          {sessionSavedAt && (
            <div className="ds-row" role="status" style={{ gap: '8px', alignItems: 'center', background: 'rgba(48,209,88,0.08)', border: '1px solid var(--success, #30d158)', borderRadius: 'var(--radius-m)', padding: '10px 14px' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--success, #30d158)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                Sesión guardada en Progreso{typeof window !== 'undefined' && !window.localStorage.getItem('PUBLIC_WORKER_ON') ? ' · pendiente de sincronizar con Notion' : ''}.
              </span>
              <button type="button" onClick={() => setSessionSavedAt(null)} className="ds-btn ds-btn-ghost ds-btn-sm" style={{ marginLeft: 'auto' }}>✕</button>
            </div>
          )}

          {/* BOTÓN PROMINENTE DE FINALIZACIÓN DE SESIÓN */}
          <div className="ds-row" style={{ marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => {
                try {
                  const now = new Date();
                  // C2: shape canónico de `fitapp_workout_history`, idéntico al que
                  // escribe completedWorkoutFromState (guidedSessionEngine.ts).
                  // El shape anterior ({sessionId, dateIso, sets, weights}) era
                  // invisible para Progreso, el calendario real y el motor de reglas.
                  let totalVolKg = 0;
                  const exercisesLogged = (activeDay?.exercises || [])
                    .map((pres: any) => {
                      const pId = pres.id || pres.exerciseId;
                      const logSt = exerciseLogs[pId];
                      const exName = pres.displayName || pres.name || pres.exerciseId;
                      const wList = (logSt?.weights || []).filter((w: string) => (Number(w) || 0) > 0);
                      const reps = Number(logSt?.repRange?.split('-')[0]) || 8;
                      const effortNum = Number(logSt?.effort);
                      const rpe = Number.isFinite(effortNum) && effortNum > 0
                        ? (effortMode === 'RPE' ? effortNum : 10 - effortNum)
                        : undefined;

                      const completedSets = wList.map((w: string) => {
                        const weight = Number(w) || 0;
                        totalVolKg += weight * reps;
                        return { weight, reps, ...(rpe !== undefined ? { rpe } : {}) };
                      });
                      if (completedSets.length === 0) return null;

                      return {
                        performedExerciseId: pres.exerciseId || pId,
                        name: exName,
                        completedSets
                      };
                    })
                    .filter(Boolean);

                  const newSession = {
                    id: `w_${Date.now()}`,
                    date: now.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }),
                    programId: program.id,
                    week: currentWeek,
                    dayId: activeDay?.id || `day-${safeDayIndex}`,
                    routineTitle: `${program.title} — ${activeDay?.name || activeDay?.title || 'Sesión del Día'}`,
                    durationMinutes: 45,
                    totalVolumeKg: Math.round(totalVolKg),
                    exercises: exercisesLogged
                  };

                  const existingHist = JSON.parse(localStorage.getItem('fitapp_workout_history') || '[]');
                  const updatedHist = [newSession, ...existingHist];
                  localStorage.setItem('fitapp_workout_history', JSON.stringify(updatedHist));

                  // Push a Notion (Fitness Sessions) via Worker IA - fire-and-forget:
                  // la app sigue 100% funcional offline (seccion 0.5).
                  void pushFitnessSessionToWorker({
                    sessionId: newSession.id,
                    programId: program.id,
                    programTitle: program.title,
                    week: currentWeek,
                    dayId: newSession.dayId,
                    dayTitle: activeDay?.name || activeDay?.title || 'Sesion',
                    dateIso: now.toISOString().slice(0, 10),
                    durationMinutes: newSession.durationMinutes,
                    totalVolumeKg: newSession.totalVolumeKg,
                  });

                  setSessionSavedAt(Date.now());
                } catch (e) {
                  console.error(e);
                }
              }}
              className="ds-btn ds-btn-lg"
              style={{
                background: 'linear-gradient(135deg, var(--success), #28a745)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '12px 24px',
                fontWeight: 800,
                boxShadow: '0 4px 14px rgba(48,209,88,0.3)',
              }}
            >
              🎉 Finalizar & Guardar Sesión en Progreso
            </button>
          </div>
        </Disclosure>
      )}

      {/* DRAWER DE SUSTITUCIÓN DE EJERCICIOS */}
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
