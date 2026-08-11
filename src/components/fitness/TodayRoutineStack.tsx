// src/components/fitness/TodayRoutineStack.tsx
import React, { useState } from 'react';
import Disclosure from '../ui/Disclosure';
import ExerciseLink from './ExerciseLink';
import ExerciseSubstitutionDrawer from './ExerciseSubstitutionDrawer';
import { ArrowLeftRight, ChevronDown, ChevronUp } from 'lucide-react';
import { getProgramById } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';

export interface ExerciseLogState {
  warmupSets: number;
  workingSets: number;
  repRange: string;
  effort: string;
  weights: string[]; // peso para cada serie efectiva
}

export default function TodayRoutineStack() {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const program = getProgramById(activeProgramId);

  const activeWeek = program.weeks?.[Math.min(currentWeek - 1, program.weeks.length - 1)] || program.weeks?.[0];
  const activeDay = activeWeek?.days?.[0];

  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);
  const [substitutionTarget, setSubstitutionTarget] = useState<{
    prescriptionId: string;
    originalId: string;
    originalName: string;
    sourceSubs: string[];
  } | null>(null);

  // Estado editable in-situ para ejercicios del día
  const [exerciseLogs, setExerciseLogs] = useState<Record<string, ExerciseLogState>>({});
  const [editingField, setEditingField] = useState<{ exerciseId: string; field: 'warmup' | 'sets' | 'reps' | 'effort' } | null>(null);

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

  const toggleNote = (id: string) => {
    setExpandedNoteId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Rutina del día principal
        </h3>
        <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
          {program.title} · {activeDay?.name || 'Día 1'}
        </span>
      </div>

      <Disclosure
        label={`${program.title.replace(/\s*\([^)]*\)/g, '').trim()} — ${activeDay?.name || 'Upper 1'}`}
        summary={`${activeDay?.exercises?.length || 0} ejercicios prescritos · Clic para expandir/contraer tabla`}
      >
        <div style={{ overflowX: 'auto', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m)', background: 'var(--surface-1, #0d0d0f)', marginTop: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--fs-body, 0.9rem)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)', color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '10px 12px' }}>Ejercicio / Código</th>
                <th style={{ padding: '10px 12px' }}>Series Aprox</th>
                <th style={{ padding: '10px 12px' }}>Series × Reps</th>
                <th style={{ padding: '10px 12px' }}>Pesos por Serie (kg)</th>
                <th style={{ padding: '10px 12px' }}>RPE / RIR</th>
                <th style={{ padding: '10px 12px' }}>Descanso</th>
                <th style={{ padding: '10px 12px' }}>Sustitución</th>
              </tr>
            </thead>
            <tbody>
              {activeDay?.exercises?.map((prescription, pIdx) => {
                const pId = prescription.id || `p-${pIdx}`;
                const details = getExerciseDetails(prescription.exerciseId);
                const defaultReps = prescription.targetReps || prescription.repRange || '8-10';
                const defaultEffort = prescription.earlySetRpe || prescription.effort?.early || 'RIR 2';

                const warmupCount = typeof prescription.warmupSets === 'number' ? prescription.warmupSets : (parseInt(String(prescription.warmupSets), 10) || 1);
                const workingCount = typeof prescription.workingSets === 'number' ? prescription.workingSets : (parseInt(String(prescription.workingSets), 10) || 3);
                const logState = getLogState(pId, warmupCount, workingCount, defaultReps, defaultEffort);
                const isNoteExpanded = expandedNoteId === pId;

                return (
                  <tr key={pId} style={{ borderBottom: '1px solid var(--color-border-subtle)', background: pIdx % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    
                    {/* 1. EJERCICIO Y NOTAS */}
                    <td style={{ padding: '12px 14px', verticalAlign: 'top', maxWidth: '240px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <ExerciseLink exerciseId={prescription.exerciseId} displayName={prescription.displayName || details.name} />
                        {prescription.notes && (
                          <div>
                            <button
                              type="button"
                              onClick={() => toggleNote(pId)}
                              style={{
                                background: 'transparent', border: 'none', color: 'var(--accent, #0a84ff)',
                                fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '4px'
                              }}
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

                    {/* 2. SERIES APROX (EDITABLE INLINE AL CLIC) */}
                    <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                      {editingField?.exerciseId === pId && editingField?.field === 'warmup' ? (
                        <input
                          type="number"
                          value={logState.warmupSets}
                          autoFocus
                          onBlur={() => setEditingField(null)}
                          onChange={(e) => updateField(pId, 'warmupSets', Number(e.target.value), logState)}
                          style={{ width: '45px', background: '#000', color: '#fff', border: '1px solid var(--accent)', borderRadius: '4px', padding: '2px 4px', fontSize: '0.82rem' }}
                        />
                      ) : (
                        <span
                          onClick={() => setEditingField({ exerciseId: pId, field: 'warmup' })}
                          title="Clic para editar series de calentamiento"
                          style={{ cursor: 'pointer', borderBottom: '1px dashed var(--text-secondary)', color: 'var(--text-secondary)' }}
                        >
                          {logState.warmupSets} series
                        </span>
                      )}
                    </td>

                    {/* 3. SERIES X REPS (EDITABLE INLINE AL CLIC) */}
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

                    {/* 4. RECUADROS PARA INGRESAR PESO POR SERIE EFECTIVA (ÚNICO DATO A INGRESAR) */}
                    <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
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

                    {/* 5. RPE / RIR (EDITABLE INLINE AL CLIC) */}
                    <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                      <span
                        onClick={() => {
                          const newEffort = prompt('RPE / RIR objetivo:', logState.effort);
                          if (newEffort) updateField(pId, 'effort', newEffort, logState);
                        }}
                        title="Clic para editar RPE/RIR"
                        style={{
                          cursor: 'pointer',
                          background: 'var(--surface-elevated, rgba(255,255,255,0.05))',
                          border: '1px solid var(--color-border-visible)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '0.78rem',
                          fontWeight: 600
                        }}
                      >
                        {logState.effort}
                      </span>
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
                          originalName: prescription.displayName || details.name,
                          sourceSubs: prescription.substituteOptions || []
                        })}
                        style={{
                          background: 'transparent',
                          border: '1px solid var(--color-border-subtle)',
                          color: 'var(--text-primary)',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
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
      </Disclosure>

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
