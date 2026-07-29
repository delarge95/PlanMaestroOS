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
  { id: 'second_brain', label: '🧠 2º Cerebro' }
];

export default function HomeClinicalDashboard() {
  const [activeTab, setActiveTab] = useState<string>('now');
  const [isFocusActive, setIsFocusActive] = useState<boolean>(false);
  const [workflowMode, setWorkflowMode] = useState<'morning' | 'evening' | null>(null);
  const [showToolsDrawer, setShowToolsDrawer] = useState<boolean>(false);
  const [showPrinciples, setShowPrinciples] = useState<boolean>(false);
  const [currentEnergy, setCurrentEnergy] = useState<EnergyLevel>('medium');

  return (
    <ErrorBoundary>
      <FocusModeShell isActive={isFocusActive} onExit={() => setIsFocusActive(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          {/* APPLE SEGMENTED CONTROL BAR (STICKY BELOW HEADER) */}
          <div style={{
            position: 'sticky',
            top: '68px',
            zIndex: 85,
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
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

          {/* COMPACT TOOLS BAR (PASO 1: SINGLE DISCREET ACTIVATOR) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
            <button
              type="button"
              onClick={() => setShowToolsDrawer(!showToolsDrawer)}
              style={{
                ...typo.label,
                background: 'transparent',
                border: '1px solid var(--color-border-visible)',
                color: 'var(--color-text-secondary)',
                padding: '6px 14px',
                borderRadius: '10px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-xs)'
              }}
            >
              ⚙️ Herramientas del día {showToolsDrawer ? '▲' : '▼'}
            </button>

            <span style={{ ...typo.label, color: 'var(--color-text-tertiary)' }}>
              Energía: <strong style={{ color: 'var(--color-text-primary)', textTransform: 'uppercase' }}>{currentEnergy}</strong>
            </span>
          </div>

          {/* EXPANDABLE TOOLS & WORKFLOW LAUNCHERS DRAWER */}
          {showToolsDrawer && (
            <div style={{
              background: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-visible)',
              borderRadius: '16px',
              padding: 'var(--space-md)',
              display: 'flex',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <button
                type="button"
                onClick={() => { setWorkflowMode('morning'); setShowToolsDrawer(false); }}
                style={{
                  ...typo.label,
                  background: 'var(--color-accent-primary-soft)',
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
                onClick={() => { setWorkflowMode('evening'); setShowToolsDrawer(false); }}
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
            </div>
          )}

          <MorningEveningWorkflowsModal
            mode={workflowMode}
            onClose={() => setWorkflowMode(null)}
            onSelectEnergy={(level) => setCurrentEnergy(level)}
          />

          {/* TAB "AHORA" - FOCO UNIFICADO COLUMNA ÚNICA (PASO 3) */}
          {/* TAB 1: AHORA */}
          {activeTab === 'now' && (
            <div key="now" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', animation: 'fadeIn 180ms ease-out' }}>
              {/* HERO: BLOQUE ACTUAL (60% ATENCIÓN) */}
              <ClinicalCurrentBlockPanel
                isFocusModeActive={isFocusActive}
                onToggleFocusMode={() => setIsFocusActive(!isFocusActive)}
              />

              {/* COLUMNA ÚNICA: PRIORIDADES DEL DÍA (COMPACTO) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {/* 3 TASKS CARD */}
                <div style={{
                  background: 'var(--color-surface-base)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '20px',
                  padding: 'var(--space-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-md)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ ...typo.display, margin: 0, color: 'var(--color-text-primary)' }}>
                      Prioridades del Día
                    </h3>
                    <span style={{ ...typo.micro, color: 'var(--color-accent-primary)', background: 'var(--color-accent-primary-soft)', padding: '4px 10px', borderRadius: '999px' }}>
                      MÁXIMO 3 TAREAS
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-accent-primary)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ ...typo.body, fontWeight: 700, color: 'var(--color-text-primary)', display: 'block' }}>1. TwinSight MVP & Tesis</strong>
                        <span style={{ ...typo.label, color: 'var(--color-accent-primary)' }}>Bloque A (09:20 - 11:40) • Versión Mala</span>
                      </div>
                      <span style={{ ...typo.micro, color: 'var(--color-state-done)', background: 'var(--color-state-done-soft)', padding: '2px 6px', borderRadius: '4px' }}>En curso</span>
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

                {/* PASO 2: PRINCIPIOS TERAPÉUTICOS COLAPSABLES */}
                <button
                  type="button"
                  onClick={() => setShowPrinciples(p => !p)}
                  style={{
                    width: '100%',
                    background: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: '14px',
                    padding: '12px 18px',
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--font-size-label)',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 150ms ease'
                  }}
                >
                  <span>🧠 Principios Terapéuticos Activos</span>
                  <span>{showPrinciples ? '▲' : '▼'}</span>
                </button>

                {showPrinciples && (
                  <div style={{
                    background: 'var(--color-surface-base)',
                    backdropFilter: 'blur(40px)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: '16px',
                    padding: 'var(--space-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-sm)'
                  }}>
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
                )}
              </div>
            </div>
          )}

          {/* TAB 2: RESCUE PROTOCOL */}
          {activeTab === 'rescue' && (
            <div key="rescue" style={{ animation: 'fadeIn 180ms ease-out' }}>
              <ClinicalUncompletedTaskProtocol />
            </div>
          )}

          {/* TAB 3: SECOND BRAIN INSPECTOR */}
          {activeTab === 'second_brain' && (
            <div key="second_brain" style={{ animation: 'fadeIn 180ms ease-out' }}>
              <SecondBrainInspector />
            </div>
          )}
        </div>
      </FocusModeShell>
    </ErrorBoundary>
  );
}
