import React, { useState } from 'react';
import { TIME_BLOCKS, DAYS_LIST, masterScheduleByPhase, type GridCell } from '../../data/schedules/scheduleData';
import DrawerMiniFitnessViewer from '../fitness/DrawerMiniFitnessViewer';
import ExerciseModal from '../fitness/ExerciseModal';
import { type ExerciseEntry } from '../../data/exercises';
import ErrorBoundary from '../ErrorBoundary';

export default function WeeklyGridPlanner() {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);
  const [selectedCell, setSelectedCell] = useState<GridCell | null>(null);
  const [activeExerciseModal, setActiveExerciseModal] = useState<ExerciseEntry | null>(null);

  const currentGrid = masterScheduleByPhase[selectedPhase] || masterScheduleByPhase[1];

  const getDomainBadgeColor = (domain: string) => {
    switch (domain) {
      case 'clinical': return { bg: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: 'rgba(168, 85, 247, 0.3)' };
      case 'fitness': return { bg: 'rgba(16, 185, 129, 0.15)', color: '#6ee7b7', border: 'rgba(16, 185, 129, 0.3)' };
      case 'career': return { bg: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: 'rgba(59, 130, 246, 0.3)' };
      case 'german': return { bg: 'rgba(245, 158, 11, 0.15)', color: '#fcd34d', border: 'rgba(245, 158, 11, 0.3)' };
      default: return { bg: 'rgba(255, 255, 255, 0.05)', color: '#a8b9b2', border: 'rgba(255, 255, 255, 0.1)' };
    }
  };

  return (
    <ErrorBoundary>
      <div style={{
        background: 'rgba(10, 15, 20, 0.65)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* HEADER & PHASE SELECTOR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#77e7ff', fontWeight: 800, letterSpacing: '0.05em' }}>
              MATRIZ OPERATIVA INTEGRADA V3
            </span>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '2px 0 0', color: '#ffffff', letterSpacing: '-0.02em' }}>
              Cronograma Semanal Integrado • 7 Días / 19 Bloques Horarios
            </h2>
          </div>

          {/* PHASE SELECTOR */}
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(0, 0, 0, 0.4)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setSelectedPhase(1); }}
              style={{
                background: selectedPhase === 1 ? 'rgba(119, 231, 255, 0.2)' : 'transparent',
                border: selectedPhase === 1 ? '1px solid #77e7ff' : 'none',
                color: selectedPhase === 1 ? '#77e7ff' : '#a8b9b2',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
            >
              Fase 1 (Sem 1-4)
            </button>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setSelectedPhase(2); }}
              style={{
                background: selectedPhase === 2 ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                border: selectedPhase === 2 ? '1px solid #10b981' : 'none',
                color: selectedPhase === 2 ? '#10b981' : '#a8b9b2',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
            >
              Fase 2 (Sem 5-8)
            </button>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setSelectedPhase(3); }}
              style={{
                background: selectedPhase === 3 ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
                border: selectedPhase === 3 ? '1px solid #c084fc' : 'none',
                color: selectedPhase === 3 ? '#c084fc' : '#a8b9b2',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
            >
              Fase 3 (Sem 9-16)
            </button>
          </div>
        </div>

        {/* PHASE METADATA SUMMARY */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '12px 18px',
          fontSize: '0.82rem',
          color: '#a8b9b2',
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <div><strong style={{ color: '#ffffff' }}>Fase Activa:</strong> {selectedPhase === 1 ? 'Fase 1 (Reaclimatación & Tesis)' : selectedPhase === 2 ? 'Fase 2 (Exposición & Materiales)' : 'Fase 3 (Soft Launch & Entrevistas)'}</div>
          <div><strong style={{ color: '#77e7ff' }}>Alemán:</strong> 13:30 – 14:00 (7 días)</div>
          <div><strong style={{ color: '#10b981' }}>Fitness:</strong> Prehab AM 06:20 + Min-Max 06:55 + PM Movilidad 17:15</div>
          <div><strong style={{ color: '#c084fc' }}>CBT:</strong> Sustentación & Exposición 14:00 – 14:40</div>
        </div>

        {/* MAIN GRID TABLE */}
        <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '900px' }}>
            <thead>
              <tr style={{ background: 'rgba(0, 0, 0, 0.5)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontFamily: 'Azeret Mono, monospace', fontSize: '0.7rem', color: '#77e7ff' }}>
                <th style={{ padding: '12px 14px', width: '14%' }}>BLOQUE DE HORA</th>
                {DAYS_LIST.map(d => (
                  <th key={d} style={{ padding: '12px 14px', width: '12.2%' }}>{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIME_BLOCKS.map((time, tIdx) => (
                <tr key={time} style={{ borderBottom: tIdx === TIME_BLOCKS.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '12px 14px', fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: '#77e7ff', fontWeight: 700, background: 'rgba(0, 0, 0, 0.3)' }}>
                    {time}
                  </td>
                  {DAYS_LIST.map(day => {
                    const cell = currentGrid[time]?.[day] || {
                      id: `fallback-${time}-${day}`,
                      time,
                      activity: 'Bloque Libre',
                      domain: 'general',
                      module: 'Libre',
                      rule: 'Libre',
                      sourceRef: '',
                      microActions: []
                    };

                    const isSelected = selectedCell?.id === cell.id;
                    const badge = getDomainBadgeColor(cell.domain);

                    return (
                      <td key={day} style={{ padding: '6px' }}>
                        <button
                          type="button"
                          onClick={(e) => { e.preventDefault(); setSelectedCell(cell); }}
                          style={{
                            width: '100%',
                            minHeight: '62px',
                            background: isSelected ? badge.bg : 'rgba(0, 0, 0, 0.3)',
                            border: `1px solid ${isSelected ? badge.color : 'rgba(255, 255, 255, 0.06)'}`,
                            borderRadius: '10px',
                            padding: '8px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'all 150ms ease'
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.borderColor = badge.border;
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
                            }
                          }}
                        >
                          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: isSelected ? badge.color : '#effff6', lineHeight: 1.25 }}>
                            {cell.activity}
                          </span>
                          <span style={{ fontSize: '0.65rem', color: badge.color, opacity: 0.8, fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                            {cell.domain}
                          </span>
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SIDE DRAWER FOR SELECTED BLOCK DETAILS & MINI FITNESS VIEWER */}
        {selectedCell && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '460px',
              background: 'rgba(10, 14, 20, 0.92)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '-20px 0 50px rgba(0, 0, 0, 0.6)',
              zIndex: 9990,
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              overflowY: 'auto',
              color: '#effff6'
            }}
          >
            {/* DRAWER HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#77e7ff', fontWeight: 800 }}>
                  {selectedCell.time} • DETALLE OPERATIVO
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '4px 0 0', color: '#ffffff' }}>
                  {selectedCell.activity}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCell(null)}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#a8b9b2',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  display: 'grid',
                  placeItems: 'center'
                }}
              >
                ✕
              </button>
            </div>

            {/* MODULE & RULE */}
            <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                <strong style={{ fontSize: '0.72rem', color: '#77e7ff', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                  Módulo Aplicado:
                </strong>
                <span style={{ fontSize: '0.85rem', color: '#ffffff', display: 'block', fontWeight: 600 }}>
                  {selectedCell.module}
                </span>
              </div>
              <div>
                <strong style={{ fontSize: '0.72rem', color: '#10b981', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                  Regla Operativa Inviolable:
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#a8b9b2', margin: '2px 0 0', lineHeight: 1.4 }}>
                  {selectedCell.rule}
                </p>
              </div>
            </div>

            {/* MICRO ACTIONS */}
            <div>
              <strong style={{ fontSize: '0.75rem', color: '#c084fc', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                Micro-Acciones de Ejecución:
              </strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {selectedCell.microActions.map((ma, idx) => (
                  <li key={idx} style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.4 }}>
                    {ma}
                  </li>
                ))}
              </ul>
            </div>

            {/* CLINICAL RESCUE SECTION — ¿QUÉ HACER SI HOY NO SALE? */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.07)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '14px',
              padding: '14px'
            }}>
              <strong style={{ fontSize: '0.72rem', color: '#f87171', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                🚨 ¿Qué hacer si hoy no sale este bloque?
              </strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem', color: '#a8b9b2', lineHeight: 1.4 }}>
                <span>1. <strong style={{ color: '#effff6' }}>Mínimo Vital:</strong> Haz solo 10 minutos de entrada sin objetivo de terminar.</span>
                <span>2. <strong style={{ color: '#effff6' }}>Versión Mala:</strong> Produce algo imperfecto. Borrador de 3 bullets caóticos cuenta.</span>
                <span>3. <strong style={{ color: '#effff6' }}>Criterio de Corte:</strong> "Suficientemente terminado" es el único estándar requerido.</span>
                <span>4. <strong style={{ color: '#effff6' }}>Sin Culpa:</strong> Si el bloque falla, el descanso post-bloque es parte del sistema, no un fracaso.</span>
              </div>
            </div>

            {/* REENTRY STEP — PASO OBLIGATORIO AL CERRAR EL BLOQUE */}
            <div style={{
              background: 'rgba(168, 85, 247, 0.07)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '14px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <strong style={{ fontSize: '0.72rem', color: '#c084fc', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                📌 Paso de Reentrada Escrito (Obligatorio al Cerrar):
              </strong>
              <input
                type="text"
                placeholder="Escribe el primer paso exacto de 2 min antes de levantarte..."
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>

            {/* MINI FITNESS VIEWER IF FITNESS DOMAIN */}
            {selectedCell.domain === 'fitness' && (
              <DrawerMiniFitnessViewer
                dayName={selectedCell.id.split('-').pop() || 'Lunes'}
                workoutDayIndex={selectedCell.workoutDayIndex}
                onOpenExerciseModal={(ex) => setActiveExerciseModal(ex)}
              />
            )}
          </div>
        )}

        {/* EXERCISE MODAL FOR FITAPP VIDEOS & CUES */}
        <ExerciseModal exercise={activeExerciseModal} onClose={() => setActiveExerciseModal(null)} />
      </div>
    </ErrorBoundary>
  );
}
