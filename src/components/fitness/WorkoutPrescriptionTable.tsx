import React, { useState } from 'react';
import { ArrowLeftRight, Info, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { TrainingProgram } from '../../data/fitness/programs/types';
import ExerciseLink from './ExerciseLink';
import ExerciseSubstitutionDrawer from './ExerciseSubstitutionDrawer';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';
import { libraryAssetUrl } from '../../lib/library/openDocument';

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
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  // Active drawer state
  const [substitutionTarget, setSubstitutionTarget] = useState<{
    prescriptionId: string;
    originalId: string;
    originalName: string;
    sourceSubs: string[];
    opt1?: string;
    opt2?: string;
  } | null>(null);

  const safeWeekIndex = Math.min(Math.max(currentWeek - 1, 0), (program.weeks?.length || 1) - 1);
  const activeWeek = program.weeks?.[safeWeekIndex] || program.weeks?.[0];
  const weekNum = activeWeek?.weekNumber || activeWeek?.week || 1;
  const activeDay = activeWeek?.days?.[selectedDayIndex] || activeWeek?.days?.[0];
  const dayTitle = activeDay?.name || activeDay?.title || 'Día 1';

  const toggleNote = (id: string) => {
    setExpandedNoteId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* BOTÓN APERTURA PDF FUENTE OFICIAL */}
      {program.pdfUrl && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <a
            href={libraryAssetUrl(program.pdfUrl)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--color-border-visible)',
              color: 'var(--text)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Ver PDF</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Semana
          </span>
          <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '4px', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
            {program.weeks.map((w) => {
              const wNum = w.weekNumber || w.week || 1;
              const isSelected = currentWeek === wNum;
              const tooltip = w.title || w.block ? `Semana ${wNum}: ${w.title || w.block}` : `Semana ${wNum}`;

              return (
                <button
                  key={wNum}
                  type="button"
                  title={tooltip}
                  onClick={() => setWeek(wNum)}
                  style={{
                    background: isSelected ? 'var(--color-accent-primary)' : 'transparent',
                    color: isSelected ? '#ffffff' : 'var(--text-tertiary)',
                    border: 'none',
                    padding: '6px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {wNum}{w.isDeload ? ' (D)' : ''}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Día
          </span>
          <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '4px', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
            {activeWeek?.days?.map((day, idx) => {
              const dTitle = day.name || day.title || `Día ${idx + 1}`;
              const isSelected = selectedDayIndex === idx;

              return (
                <button
                  key={day.id}
                  type="button"
                  title={`Día ${idx + 1}: ${dTitle}`}
                  onClick={() => setSelectedDayIndex(idx)}
                  style={{
                    background: isSelected ? 'var(--color-accent-primary)' : 'transparent',
                    color: isSelected ? '#ffffff' : 'var(--text-tertiary)',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ margin: '4px 0 2px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text)', lineHeight: 1.25 }}>
          {activeWeek?.title || activeWeek?.block || `Semana ${weekNum}`} · {dayTitle}
        </h3>
        {activeWeek?.isDeload && (
          <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-warning)', fontWeight: 600, marginTop: '2px', display: 'inline-block' }}>
            ⚡ Semana de descarga estratégica (Reducir carga y mantener margen)
          </span>
        )}
      </div>

      <div style={{ overflowX: 'auto', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', background: 'var(--surface)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--font-size-body)' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-subtle)', color: 'var(--text-tertiary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
              <th style={{ padding: 'var(--space-2)' }}>Ejercicio / Código</th>
              <th style={{ padding: 'var(--space-2)' }}>Series × Reps</th>
              <th style={{ padding: 'var(--space-2)' }}>RPE / RIR</th>
              <th style={{ padding: 'var(--space-2)' }}>Descanso</th>
              <th style={{ padding: 'var(--space-2)' }}>Sustitución</th>
            </tr>
          </thead>
          <tbody>
            {activeDay?.exercises?.map((prescription, pIdx) => {
              const pId = prescription.id || `p-${pIdx}`;
              const overrideId = overrides[pId];
              const effectiveExerciseId = overrideId || prescription.exerciseId;
              const effectiveDetails = getExerciseDetails(effectiveExerciseId);
              const reps = prescription.targetReps || prescription.repRange || '6-8';
              const rest = prescription.restPeriod || prescription.rest || '1-2 min';

              // Effort per set formatting
              const rirSets = prescription.rirPerSet || [];
              const earlyEffort = prescription.earlySetRpe || prescription.effort?.early || 'RIR 1';
              const lastEffort = prescription.lastSetRpe || prescription.effort?.last || 'RIR 0';

              const sourceSubs = [
                ...(prescription.substitutionOption1 ? [prescription.substitutionOption1] : []),
                ...(prescription.substitutionOption2 ? [prescription.substitutionOption2] : []),
                ...(prescription.substituteOptions || []),
                ...(prescription.substituteExerciseIds || [])
              ];

              const isNoteExpanded = expandedNoteId === pId;

              return (
                <tr key={pId} style={{ borderBottom: '1px solid var(--color-border-subtle)', background: pIdx % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  {/* EJERCICIO Y NOTAS COMPLETAS */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top', maxWidth: '280px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <ExerciseLink
                        exerciseId={effectiveExerciseId}
                        displayName={prescription.displayName || effectiveDetails.name}
                        onClickModal={onOpenExerciseModal}
                      />
                      {overrideId && (
                        <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 600 }}>
                          ✓ Sustituido (Original: {prescription.displayName})
                        </span>
                      )}

                      {/* NOTA OPERATIVA DEL ENTRENADOR (DESPLEGABLE / VISIBLE) */}
                      {prescription.notes && (
                        <div style={{ marginTop: '2px' }}>
                          <button
                            type="button"
                            onClick={() => toggleNote(pId)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: 'var(--color-accent-primary)',
                              fontSize: '0.74rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              padding: 0,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <span>Nota</span>
                            {isNoteExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                          </button>

                          {isNoteExpanded && (
                            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '4px 0 0', lineHeight: 1.45, background: 'rgba(255,255,255,0.03)', padding: '6px 8px', borderRadius: '4px', borderLeft: '2px solid var(--color-accent-primary)' }}>
                              {prescription.notes}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* CALENTAMIENTO */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                    {prescription.warmupSets} series
                  </td>

                  {/* SERIES X REPS */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    {prescription.workingSets} × {reps}
                  </td>

                  {/* ESFUERZO INDIVIDUAL POR SERIE (RIR / RPE) */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {rirSets.length > 0 ? (
                        rirSets.map((rirVal, rIdx) => (
                          <span
                            key={rIdx}
                            style={{
                              background: 'var(--surface-elevated)',
                              border: '1px solid var(--color-border-visible)',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontSize: '0.76rem',
                              fontWeight: 600,
                              color: rirVal === '0' || rirVal.includes('Fallo') ? '#ff453a' : 'var(--text)'
                            }}
                          >
                            S{rIdx + 1}: RIR {rirVal}
                          </span>
                        ))
                      ) : (
                        <span style={{ background: 'var(--surface-elevated)', border: '1px solid var(--color-border-visible)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.76rem', fontWeight: 600 }}>
                          S1: {earlyEffort} / S2+: {lastEffort}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* DESCANSO */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                    {rest}
                  </td>

                  {/* ACCIÓN SUSTITUIR */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                    <button
                      type="button"
                      onClick={() => setSubstitutionTarget({
                        prescriptionId: pId,
                        originalId: prescription.exerciseId,
                        originalName: prescription.displayName,
                        sourceSubs,
                        opt1: prescription.substitutionOption1,
                        opt2: prescription.substitutionOption2
                      })}
                      style={{
                        background: 'var(--surface-elevated)',
                        border: '1px solid var(--color-border-visible)',
                        color: 'var(--text)',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        width: 'fit-content'
                      }}
                    >
                      <ArrowLeftRight size={14} /> Sustituir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* DRAWER DE SUSTITUCCIÓN DESTACANDO OPCIONES DEL PDF */}
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
