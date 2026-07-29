import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InertiaRescueModal from './InertiaRescueModal';

interface Props {
  onToggleFocusMode?: () => void;
  isFocusModeActive?: boolean;
}

export default function ClinicalCurrentBlockPanel({ onToggleFocusMode, isFocusModeActive = false }: Props) {
  const [isRescueModalOpen, setIsRescueModalOpen] = useState<boolean>(false);
  const [currentHour, setCurrentHour] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    const hrs = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    setCurrentHour(`${hrs}:${mins}`);
  }, []);

  // Determine current active block details
  const getActiveBlockInfo = () => {
    return {
      time: "09:20 – 11:40",
      activity: "BLOQUE A: Trabajo Profundo (TwinSight MVP & Tesis)",
      domain: "career",
      startAction: "Abrir el archivo exacto y escribir 3 líneas de borrador imperfecto en 10 minutos.",
      clinicalRule: "Versión Mala > Perfección. Celular fuera del alcance. 3 tareas máximas hoy.",
      contextualBanner: "🧠 Trabajo Profundo TDAH: Si sientes parálisis, activa la Regla de los 10 Minutos. Estás autorizado a parar tras 10 min.",
      rescueTip: "Si estás atascado en perfeccionismo, escribe sólo en formato de viñetas desordenadas."
    };
  };

  const activeBlock = getActiveBlockInfo();

  return (
    <ErrorBoundary>
      <div style={{
        background: 'rgba(10, 15, 22, 0.75)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(119, 231, 255, 0.25)',
        borderRadius: '24px',
        padding: '28px',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(119, 231, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        color: 'var(--color-text-primary)'
      }}>
        {/* PANEL TOP BAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--color-state-done)',
              boxShadow: '0 0 12px #10b981',
              display: 'inline-block'
            }} />
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              AHORA EN EJECUCIÓN • {activeBlock.time} (Hora Local: {currentHour || '18:57'})
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            {/* RESCUE BUTTON */}
            <button
              type="button"
              onClick={() => setIsRescueModalOpen(true)}
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: 'var(--color-accent-danger)',
                padding: '6px 14px',
                borderRadius: '10px',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 150ms ease'
              }}
            >
              <span>🚨 No puedo empezar</span>
            </button>

            {/* FOCUS MODE TOGGLE */}
            {onToggleFocusMode && (
              <button
                type="button"
                onClick={onToggleFocusMode}
                style={{
                  background: isFocusModeActive ? 'rgba(16, 185, 129, 0.25)' : 'rgba(119, 231, 255, 0.15)',
                  border: `1px solid ${isFocusModeActive ? 'var(--color-state-done)' : 'var(--color-accent-primary)'}`,
                  color: isFocusModeActive ? 'var(--color-state-done)' : 'var(--color-accent-primary)',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 150ms ease'
                }}
              >
                <span>{isFocusModeActive ? '✓ Modo Foco Activo' : '⚡ Activar Modo Foco Zen'}</span>
              </button>
            )}
          </div>
        </div>

        {/* ACTIVE ACTIVITY TITLE */}
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 6px', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
            {activeBlock.activity}
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--color-accent-primary)' }}>Acción de Inicio (10 Min):</strong> {activeBlock.startAction}
          </p>
        </div>

        {/* CLINICAL RULE CARD */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '14px'
        }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-primary)', textTransform: 'uppercase', fontWeight: 700 }}>
              Regla Clínica Vigente
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)', margin: '4px 0 0', fontWeight: 600 }}>
              {activeBlock.clinicalRule}
            </p>
          </div>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#fcd34d', textTransform: 'uppercase', fontWeight: 700 }}>
              Mínimo Viable de Entrada
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
              {activeBlock.rescueTip}
            </p>
          </div>
        </div>

        {/* CONTEXTUAL CLINICAL BANNER */}
        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: '14px',
          padding: '12px 16px',
          fontSize: '0.82rem',
          color: '#6ee7b7',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span>{activeBlock.contextualBanner}</span>
        </div>

        {/* 1-CLICK MULTI-DOMAIN QUICK ACTION LAUNCHERS */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingTop: '4px' }}>
          <a
            href="/app/fitness"
            style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              color: 'var(--color-state-done)',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            💪 Iniciar Entrenar en FitApp
          </a>

          <a
            href="/app/german"
            style={{
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: 'var(--color-accent-warning)',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🇩🇪 Hábito 13:30 Alemán
          </a>

          <a
            href="/app/clinical"
            style={{
              background: 'rgba(217, 70, 239, 0.15)',
              border: '1px solid rgba(217, 70, 239, 0.35)',
              color: '#d946ef',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🧠 Tareas Clínicas & Ansiedad
          </a>

          <a
            href="/app/career"
            style={{
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.35)',
              color: '#3b82f6',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🚀 Entregable TwinSight MVP
          </a>
        </div>

        {/* RESCUE MODAL INTERACTION */}
        <InertiaRescueModal
          isOpen={isRescueModalOpen}
          onClose={() => setIsRescueModalOpen(false)}
          currentTaskName={activeBlock.activity}
        />
      </div>
    </ErrorBoundary>
  );
}
