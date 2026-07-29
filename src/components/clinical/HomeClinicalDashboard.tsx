import React, { useState } from 'react';
import ClinicalCurrentBlockPanel from './ClinicalCurrentBlockPanel';
import SecondBrainInspector from '../docs/SecondBrainInspector';
import FocusModeShell from './FocusModeShell';
import ErrorBoundary from '../ErrorBoundary';
import { typo } from '../../styles/typography';

import ClinicalUncompletedTaskProtocol from './ClinicalUncompletedTaskProtocol';

import MorningEveningWorkflowsModal from './MorningEveningWorkflowsModal';
import type { EnergyLevel } from '../../data/canonicalDomainModel';

const TABS = [
  { id: 'now', label: '🎯 AHORA' },
  { id: 'rescue', label: '🛡️ Rescate' },
  { id: 'second_brain', label: '🧠 2º Cerebro' },
  { id: 'sections', label: '🗺️ Secciones' }
];

export default function HomeClinicalDashboard() {
  const [activeTab, setActiveTab] = useState<string>('now');
  const [isFocusActive, setIsFocusActive] = useState<boolean>(false);
  const [workflowMode, setWorkflowMode] = useState<'morning' | 'evening' | null>(null);
  const [currentEnergy, setCurrentEnergy] = useState<EnergyLevel>('medium');

  return (
    <ErrorBoundary>
      <FocusModeShell isActive={isFocusActive} onExit={() => setIsFocusActive(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* APPLE SEGMENTED CONTROL BAR (STICKY BELOW HEADER) */}
          <div style={{
            position: 'sticky',
            top: '68px',
            zIndex: 85,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'var(--color-surface-base)',
            backdropFilter: 'blur(30px) saturate(190%)',
            WebkitBackdropFilter: 'blur(30px) saturate(190%)',
            padding: '6px',
            borderRadius: '18px',
            border: '1px solid var(--color-border-visible)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
            overflowX: 'auto',
            maxWidth: '100%'
          }}>
            {TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    ...typo.label,
                    background: isSelected ? 'var(--color-accent-primary)' : 'transparent',
                    color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
                    border: 'none',
                    padding: '8px 18px',
                    borderRadius: '12px',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: isSelected ? '0 3px 12px rgba(10, 132, 255, 0.35)' : 'none',
                    transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* MORNING / EVENING WORKFLOW QUICK LAUNCHERS */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setWorkflowMode('morning')}
              style={{
                ...typo.label,
                background: 'rgba(10, 132, 255, 0.12)',
                border: '1px solid var(--color-border-visible)',
                color: 'var(--color-accent-primary)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              🌅 Modo Inicio (60s)
            </button>

            <button
              type="button"
              onClick={() => setWorkflowMode('evening')}
              style={{
                ...typo.label,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--color-border-subtle)',
                color: 'var(--color-text-secondary)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              🌙 Modo Cierre (3m)
            </button>

            <span style={{ ...typo.label, color: 'var(--color-text-tertiary)', alignSelf: 'center', marginLeft: 'auto' }}>
              Energía: <strong style={{ color: 'var(--color-text-primary)', textTransform: 'uppercase' }}>{currentEnergy}</strong>
            </span>
          </div>

          <MorningEveningWorkflowsModal
            mode={workflowMode}
            onClose={() => setWorkflowMode(null)}
            onSelectEnergy={(level) => setCurrentEnergy(level)}
          />
          {activeTab === 'now' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <ClinicalCurrentBlockPanel
                isFocusModeActive={isFocusActive}
                onToggleFocusMode={() => setIsFocusActive(!isFocusActive)}
              />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {/* 3 TASKS CARD */}
                <div style={{
                  background: 'var(--color-surface-base)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  <span style={{ ...typo.micro, color: 'var(--color-accent-primary)', background: 'rgba(10, 132, 255, 0.12)', padding: '4px 10px', borderRadius: '999px', width: 'fit-content' }}>
                    MÁXIMO 3 TAREAS
                  </span>
                  <h3 style={{ ...typo.display, margin: 0, color: 'var(--color-text-primary)' }}>
                    Prioridades del Día
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-accent-primary)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ ...typo.body, fontWeight: 700, color: 'var(--color-text-primary)', display: 'block' }}>1. TwinSight MVP & Tesis</strong>
                        <span style={{ ...typo.label, color: 'var(--color-accent-primary)' }}>Bloque A (09:20 - 11:40) • Versión Mala</span>
                      </div>
                      <span style={{ ...typo.micro, color: 'var(--color-state-done)', background: 'rgba(48,209,88,0.15)', padding: '2px 6px', borderRadius: '4px' }}>En curso</span>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ ...typo.body, fontWeight: 700, color: 'var(--color-text-primary)', display: 'block' }}>2. Ensayo Sustentación CBT</strong>
                        <span style={{ ...typo.label, color: 'var(--color-text-secondary)' }}>Exposición (14:00 - 14:40) • 3 Ideas</span>
                      </div>
                      <span style={{ ...typo.micro, color: 'var(--color-text-tertiary)', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>Pendiente</span>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ ...typo.body, fontWeight: 700, color: 'var(--color-text-primary)', display: 'block' }}>3. Alemán A1 Diario (v3)</strong>
                        <span style={{ ...typo.label, color: 'var(--color-accent-warning)' }}>13:30 - 14:00 • 5m Duolingo + 20m A1</span>
                      </div>
                      <span style={{ ...typo.micro, color: 'var(--color-text-tertiary)', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>Pendiente</span>
                    </div>
                  </div>
                </div>

                {/* EMOTIONAL REGULATION & CLINICAL PERMISSION CARD */}
                <div style={{
                  background: 'var(--color-surface-base)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  <span style={{ ...typo.micro, color: 'var(--color-text-secondary)', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '999px', width: 'fit-content' }}>
                    PRINCIPIOS
                  </span>
                  <h3 style={{ ...typo.display, margin: 0, color: 'var(--color-text-primary)' }}>
                    Principios Terapéuticos Activos
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', ...typo.body, color: 'var(--color-text-secondary)' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid var(--color-state-done)' }}>
                      <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>Suficientemente Terminado &gt; Ideal:</strong>
                      Cierra la tarea cuando cumpla el criterio mínimo sin seguir refinando indefinidamente.
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid var(--color-accent-primary)' }}>
                      <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>El Descanso No Se Gana:</strong>
                      El sueño y el ocio son parte de la salud mental y la función cognitiva, no un premio condicionado al rendimiento.
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid var(--color-accent-warning)' }}>
                      <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>Paso de Reentrada Escrito:</strong>
                      Antes de levantarte de la mesa, deja escrita la primera acción exacta de 2 min.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RESCUE PROTOCOL */}
          {activeTab === 'rescue' && <ClinicalUncompletedTaskProtocol />}

          {/* TAB 3: SECOND BRAIN INSPECTOR */}
          {activeTab === 'second_brain' && <SecondBrainInspector />}

          {/* TAB 3: SECTIONS MAP */}
          {activeTab === 'sections' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              <a href="/app/today" style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-accent-primary)', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>⚡</span>
                <h4 style={{ ...typo.body, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>Centro Operativo Hoy</h4>
                <p style={{ ...typo.label, color: 'var(--color-text-secondary)', margin: 0 }}>Línea temporal del día 05:30 – 21:30.</p>
              </a>

              <a href="/app/schedules" style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-accent-primary)', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>📅</span>
                <h4 style={{ ...typo.body, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>Cronograma y Matriz</h4>
                <p style={{ ...typo.label, color: 'var(--color-text-secondary)', margin: 0 }}>Matriz semanal de 19 bloques por fase.</p>
              </a>

              <a href="/app/career" style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-accent-primary)', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>🚀</span>
                <h4 style={{ ...typo.body, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>Laboral & Roadmap</h4>
                <p style={{ ...typo.label, color: 'var(--color-text-secondary)', margin: 0 }}>TwinSight, Portfolio y Roadmap 16 semanas.</p>
              </a>

              <a href="/app/fitness" style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-state-done)', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>💪</span>
                <h4 style={{ ...typo.body, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>Fitness & FitApp</h4>
                <p style={{ ...typo.label, color: 'var(--color-text-secondary)', margin: 0 }}>Tracker en vivo, Min-Max y 150+ ejercicios.</p>
              </a>

              <a href="/app/german" style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-accent-warning)', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>🇩🇪</span>
                <h4 style={{ ...typo.body, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>Alemán A1</h4>
                <p style={{ ...typo.label, color: 'var(--color-text-secondary)', margin: 0 }}>Hábito diario 13:30 – 14:00.</p>
              </a>

              <a href="/app/clinical" style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-accent-primary)', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>🧠</span>
                <h4 style={{ ...typo.body, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>Clínica Conductual</h4>
                <p style={{ ...typo.label, color: 'var(--color-text-secondary)', margin: 0 }}>TDAH, Ansiedad Social y Sueño CBT-I.</p>
              </a>
            </div>
          )}
        </div>
      </FocusModeShell>
    </ErrorBoundary>
  );
}
