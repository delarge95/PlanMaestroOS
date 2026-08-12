import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { TrainingProgram } from '../../data/fitness/programs/types';
import ExerciseLink from './ExerciseLink';
import ExerciseSubstitutionDrawer from './ExerciseSubstitutionDrawer';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';
import { libraryAssetUrl } from '../../lib/library/openDocument';

export interface WorkoutPrescriptionTableProps {
  program: TrainingProgram;
  onOpenExerciseModal?: (exerciseId: string) => void;
  hideHeaderPdf?: boolean;
}

export function WorkoutPrescriptionTable({
  program,
  onOpenExerciseModal,
  hideHeaderPdf = false
}: WorkoutPrescriptionTableProps) {
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const setWeek = useActiveProgramStore((s) => s.setWeek);
  const overrides = useActiveProgramStore((s) => s.selectedExerciseOverrides);
  const clearOverride = useActiveProgramStore((s) => s.clearExerciseOverride);

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
  const rawDayTitle = activeDay?.name || activeDay?.title || `Día ${selectedDayIndex + 1}`;
  const cleanDayFocus = rawDayTitle.replace(/^Día\s*\d+[\s:\-–]*/i, '').trim();
  const dayDisplayTitle = `Día ${selectedDayIndex + 1}${cleanDayFocus ? `: ${cleanDayFocus}` : ''}`;

  const toggleNote = (id: string) => {
    setExpandedNoteId((prev) => (prev === id ? null : id));
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* BOTÓN APERTURA PDF FUENTE OFICIAL */}
      {!hideHeaderPdf && program.pdfUrl && (
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
              borderRadius: 'var(--radius-md)',
              fontSize: '0.84rem',
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

      {/* SELECTORES DE SEMANA Y DÍA (BOTONES EN PC, SELECT EN MÓVIL) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* SEMANA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: isMobile ? '100%' : 'auto', justifyContent: isMobile ? 'space-between' : 'flex-start' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Semana
          </span>

          {isMobile ? (
            <select
              value={currentWeek}
              onChange={(e) => setWeek(Number(e.target.value))}
              aria-label="Seleccionar semana"
              style={{
                background: 'var(--surface-elevated, #16181d)',
                color: 'var(--text-primary)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-s)',
                padding: '6px 10px',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              {program.weeks.map((w, idx) => {
                const wNum = w.weekNumber || w.week || (idx + 1);
                return (
                  <option key={wNum} value={wNum}>
                    Semana {wNum} {w.isDeload ? '(Descarga)' : ''}
                  </option>
                );
              })}
            </select>
          ) : (
            <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '4px', background: 'var(--surface-elevated, #16181d)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              {program.weeks.map((w, idx) => {
                const wNum = w.weekNumber || w.week || (idx + 1);
                const isSelected = currentWeek === wNum;
                return (
                  <button
                    key={`${wNum}-${idx}`}
                    type="button"
                    onClick={() => setWeek(wNum)}
                    style={{
                      background: isSelected ? 'var(--color-accent-primary, #0a84ff)' : 'transparent',
                      color: isSelected ? '#ffffff' : 'var(--text-secondary)',
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
          )}
        </div>

        {/* DÍA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: isMobile ? '100%' : 'auto', justifyContent: isMobile ? 'space-between' : 'flex-start' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Día
          </span>

          {isMobile ? (
            <select
              value={selectedDayIndex}
              onChange={(e) => setSelectedDayIndex(Number(e.target.value))}
              aria-label="Seleccionar día de rutina"
              style={{
                background: 'var(--surface-elevated, #16181d)',
                color: 'var(--text-primary)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-s)',
                padding: '6px 10px',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              {activeWeek?.days?.map((day, idx) => {
                const rawName = day.name || day.title || `Día ${idx + 1}`;
                const focus = rawName.replace(/^Día\s*\d+[\s:\-–]*/i, '').trim();
                const optLabel = focus ? `Día ${idx + 1}: ${focus}` : `Día ${idx + 1}`;
                return (
                  <option key={day.id || idx} value={idx}>
                    {optLabel}
                  </option>
                );
              })}
            </select>
          ) : (
            <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '4px', background: 'var(--surface-elevated, #16181d)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              {activeWeek?.days?.map((day, idx) => {
                const rawName = day.name || day.title || `Día ${idx + 1}`;
                const focus = rawName.replace(/^Día\s*\d+[\s:\-–]*/i, '').trim();
                const isSelected = selectedDayIndex === idx;

                return (
                  <button
                    key={day.id || idx}
                    type="button"
                    onClick={() => setSelectedDayIndex(idx)}
                    title={`Día ${idx + 1}${focus ? ': ' + focus : ''}`}
                    style={{
                      background: isSelected ? 'var(--color-accent-primary, #0a84ff)' : 'transparent',
                      color: isSelected ? '#ffffff' : 'var(--text-secondary)',
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
          )}
        </div>
      </div>

      <div style={{ margin: '4px 0 2px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', lineHeight: 1.25 }}>
          {activeWeek?.title || activeWeek?.block || `Semana ${weekNum}`} · {dayDisplayTitle}
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
              <th style={{ padding: 'var(--space-2)' }}>Series Aprox</th>
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
                      {/* When overrideId exists, show the substituted exercise name, not the original */}
                      <ExerciseLink
                        exerciseId={effectiveExerciseId}
                        displayName={overrideId ? effectiveDetails.name : (prescription.displayName || effectiveDetails.name)}
                        onClickModal={onOpenExerciseModal}
                      />
                      {overrideId && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 600 }}>
                            ✓ Sustituido
                          </span>
                          <button
                            type="button"
                            onClick={() => clearOverride(pId)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: 'var(--text-tertiary)',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              padding: '1px 6px',
                              borderRadius: '4px',
                              textDecoration: 'underline',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '3px'
                            }}
                            title={`Volver a ${prescription.displayName || 'ejercicio original'}`}
                          >
                            ↺ Revertir ({prescription.displayName})
                          </button>
                        </div>
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

                  {/* SERIES APROX (CALENTAMIENTO) PER FEEDBACK */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                    {prescription.warmupSets || 0} series
                  </td>

                  {/* SERIES X REPS */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    {prescription.workingSets} × {reps}
                  </td>

                  {/* ESFUERZO INDIVIDUAL POR SERIE (RIR / RPE) */}
                  <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {rirSets.length > 0 ? (
                        rirSets.map((rirVal, rIdx) => {
                          const cleanRir = String(rirVal).replace(/^RIR\s*/i, '').trim();
                          return (
                            <span
                              key={rIdx}
                              style={{
                                background: 'var(--surface-elevated)',
                                border: '1px solid var(--color-border-visible)',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                fontSize: '0.76rem',
                                fontWeight: 600,
                                color: cleanRir === '0' || cleanRir.includes('Fallo') ? '#ff453a' : 'var(--text)'
                              }}
                            >
                              S{rIdx + 1}: RIR {cleanRir}
                            </span>
                          );
                        })
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
