import React, { useState } from 'react';
import ClinicalCurrentBlockPanel from './ClinicalCurrentBlockPanel';
import SecondBrainInspector from '../docs/SecondBrainInspector';
import FocusModeShell from './FocusModeShell';
import ErrorBoundary from '../ErrorBoundary';

const TABS = [
  { id: 'now', label: '🎯 Bloque AHORA & Prioridades TDAH' },
  { id: 'second_brain', label: '🧠 Inspección Segundo Cerebro (Notion/Obsidian)' },
  { id: 'sections', label: '🗺️ Navegación de Secciones OS' }
];

export default function HomeClinicalDashboard() {
  const [activeTab, setActiveTab] = useState<string>('now');
  const [isFocusActive, setIsFocusActive] = useState<boolean>(false);

  return (
    <ErrorBoundary>
      <FocusModeShell isActive={isFocusActive} onExit={() => setIsFocusActive(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* APPLE SEGMENTED CONTROL BAR */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(118, 118, 128, 0.24)',
            backdropFilter: 'blur(30px) saturate(190%)',
            WebkitBackdropFilter: 'blur(30px) saturate(190%)',
            padding: '4px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
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
                    background: isSelected ? '#ffffff' : 'transparent',
                    color: isSelected ? '#000000' : '#8e8e93',
                    border: 'none',
                    padding: '8px 18px',
                    borderRadius: '12px',
                    fontSize: '0.84rem',
                    fontWeight: isSelected ? 700 : 500,
                    fontFamily: '-apple-system, SF Pro Text, system-ui, sans-serif',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: isSelected ? '0 3px 12px rgba(0, 0, 0, 0.35), 0 0 1px rgba(0,0,0,0.2)' : 'none',
                    transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB 1: NOW & PRIORITIES */}
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
                  background: 'rgba(28, 28, 30, 0.75)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  <span style={{ fontFamily: '-apple-system, SF Pro Text, sans-serif', fontSize: '0.68rem', color: '#30d158', background: 'rgba(48, 209, 88, 0.15)', padding: '4px 10px', borderRadius: '999px', fontWeight: 700, width: 'fit-content' }}>
                    REGLA TDAH: MÁXIMO 3 TAREAS HOY
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                    Prioridades Inviolables del Día
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(10,132,255,0.3)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ fontSize: '0.88rem', color: '#ffffff', display: 'block' }}>1. TwinSight MVP & Tesis</strong>
                        <span style={{ fontSize: '0.75rem', color: '#0a84ff' }}>Bloque A (09:20 - 11:40) • Versión Mala</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#30d158', background: 'rgba(48,209,88,0.15)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>En curso</span>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ fontSize: '0.88rem', color: '#ffffff', display: 'block' }}>2. Ensayo Sustentación CBT</strong>
                        <span style={{ fontSize: '0.75rem', color: '#bf5af2' }}>Exposición (14:00 - 14:40) • 3 Ideas</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#98989d', background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>Pendiente</span>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ fontSize: '0.88rem', color: '#ffffff', display: 'block' }}>3. Alemán A1 Diario (v3)</strong>
                        <span style={{ fontSize: '0.75rem', color: '#ff9f0a' }}>13:30 - 14:00 • 5m Duolingo + 20m A1</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#98989d', background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>Pendiente</span>
                    </div>
                  </div>
                </div>

                {/* EMOTIONAL REGULATION & CLINICAL PERMISSION CARD */}
                <div style={{
                  background: 'rgba(28, 28, 30, 0.75)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255, 55, 95, 0.25)',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  <span style={{ fontFamily: '-apple-system, SF Pro Text, sans-serif', fontSize: '0.68rem', color: '#ff375f', background: 'rgba(255, 55, 95, 0.15)', padding: '4px 10px', borderRadius: '999px', fontWeight: 700, width: 'fit-content' }}>
                    REGULACIÓN EMOCIONAL & PERMISO
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                    Principios Terapéuticos Activos
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem', color: '#98989d', lineHeight: 1.45 }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid #30d158' }}>
                      <strong style={{ color: '#ffffff', display: 'block' }}>Suficientemente Terminado &gt; Ideal:</strong>
                      Cierra la tarea cuando cumpla el criterio mínimo sin seguir refinando indefinidamente.
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid #bf5af2' }}>
                      <strong style={{ color: '#ffffff', display: 'block' }}>El Descanso No Se Gana:</strong>
                      El sueño y el ocio son parte de la salud mental y la función cognitiva, no un premio condicionado al rendimiento.
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid #64d2ff' }}>
                      <strong style={{ color: '#ffffff', display: 'block' }}>Paso de Reentrada Escrito:</strong>
                      Antes de levantarte de la mesa, deja escrita la primera acción exacta de 2 min.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SECOND BRAIN INSPECTOR */}
          {activeTab === 'second_brain' && <SecondBrainInspector />}

          {/* TAB 3: SECTIONS MAP */}
          {activeTab === 'sections' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              <a href="/app/today" style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #64d2ff', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>⚡</span>
                <h4 style={{ fontSize: '1rem', margin: 0, fontWeight: 700 }}>Centro Operativo Hoy</h4>
                <p style={{ fontSize: '0.78rem', color: '#98989d', margin: 0 }}>Línea temporal del día 05:30 – 21:30.</p>
              </a>

              <a href="/app/schedules" style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #bf5af2', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>📅</span>
                <h4 style={{ fontSize: '1rem', margin: 0, fontWeight: 700 }}>Cronograma y Matriz</h4>
                <p style={{ fontSize: '0.78rem', color: '#98989d', margin: 0 }}>Matriz semanal de 19 bloques por fase.</p>
              </a>

              <a href="/app/career" style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #0a84ff', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>🚀</span>
                <h4 style={{ fontSize: '1rem', margin: 0, fontWeight: 700 }}>Laboral & Roadmap</h4>
                <p style={{ fontSize: '0.78rem', color: '#98989d', margin: 0 }}>TwinSight, Portfolio y Roadmap 16 semanas.</p>
              </a>

              <a href="/app/fitness" style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #30d158', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>💪</span>
                <h4 style={{ fontSize: '1rem', margin: 0, fontWeight: 700 }}>Fitness & FitApp</h4>
                <p style={{ fontSize: '0.78rem', color: '#98989d', margin: 0 }}>Tracker en vivo, Min-Max y 150+ ejercicios.</p>
              </a>

              <a href="/app/german" style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #ff9f0a', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>🇩🇪</span>
                <h4 style={{ fontSize: '1rem', margin: 0, fontWeight: 700 }}>Alemán A1</h4>
                <p style={{ fontSize: '0.78rem', color: '#98989d', margin: 0 }}>Hábito diario 13:30 – 14:00.</p>
              </a>

              <a href="/app/clinical" style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #ff375f', borderRadius: '18px', padding: '18px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '1.4rem' }}>🧠</span>
                <h4 style={{ fontSize: '1rem', margin: 0, fontWeight: 700 }}>Clínica Conductual</h4>
                <p style={{ fontSize: '0.78rem', color: '#98989d', margin: 0 }}>TDAH, Ansiedad Social y Sueño CBT-I.</p>
              </a>
            </div>
          )}
        </div>
      </FocusModeShell>
    </ErrorBoundary>
  );
}
