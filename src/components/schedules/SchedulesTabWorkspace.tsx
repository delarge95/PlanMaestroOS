import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WeeklyGridPlanner from './WeeklyGridPlanner';

const TABS = [
  { id: 'grid', label: '📅 Matriz Semanal Grid (Fases 1, 2, 3)' },
  { id: 'rules', label: '📌 Reglas Operativas & Pasos de Reentrada' }
];

export default function SchedulesTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('grid');

  return (
    <ErrorBoundary>
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
                  background: isSelected ? 'var(--color-accent-primary)' : 'transparent',
                  color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  fontFamily: '-apple-system, SF Pro Text, system-ui, sans-serif',
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

        {/* SUBSECTION CONTENT */}
        <div style={{ minHeight: '500px' }}>
          {activeTab === 'grid' && <WeeklyGridPlanner />}
          {activeTab === 'rules' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-accent-primary)', borderRadius: '18px', padding: '20px', backdropFilter: 'blur(40px)' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', margin: '0 0 10px' }}>⚡ Regla de Reentrada Inmediata</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Si un bloque se interrumpe o descarrila por ansiedad o distracción TDAH, no intentes recuperar el tiempo perdido. Salta directamente al bloque correspondiente al horario actual y abre la mini ventana de rescate.
                </p>
              </div>

              <div style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-accent-warning)', borderRadius: '18px', padding: '20px', backdropFilter: 'blur(40px)' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', margin: '0 0 10px' }}>🇩🇪 Alineación Hábito 13:30</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  El bloque de 13:30 a 14:00 es intocable de Lunes a Domingo. Si estabas en trabajo profundo, cierra a las 13:28 sin disculpas.
                </p>
              </div>

              <div style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderTop: '3px solid var(--color-state-done)', borderRadius: '18px', padding: '20px', backdropFilter: 'blur(40px)' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', margin: '0 0 10px' }}>💪 Sincronización FitApp</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Los bloques de Gimnasio / Calistenia (16:30 - 18:30) abren automáticamente en el drawer lateral la rutina del día con el temporizador de descanso.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
