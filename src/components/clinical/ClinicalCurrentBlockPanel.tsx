import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InertiaRescueModal from './InertiaRescueModal';
import Button from '../ui/Button';

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
        border: '1px solid var(--color-border-visible)',
        borderRadius: '24px',
        padding: 'var(--space-lg)',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
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
              boxShadow: '0 0 12px var(--color-state-done-glow)',
              display: 'inline-block'
            }} />
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              AHORA EN EJECUCIÓN • {activeBlock.time} (Hora Local: {currentHour || '18:57'})
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {/* RESCUE BUTTON (DANGER VARIANT) */}
            <Button
              variant="danger"
              size="sm"
              onClick={() => setIsRescueModalOpen(true)}
            >
              🚨 No puedo empezar
            </Button>

            {/* FOCUS MODE TOGGLE (PRIMARY CTA OF THE VIEW) */}
            {onToggleFocusMode && (
              <Button
                variant={isFocusModeActive ? 'secondary' : 'primary'}
                size="sm"
                onClick={onToggleFocusMode}
              >
                {isFocusModeActive ? '✓ Modo Foco Activo' : '⚡ Activar Modo Foco Zen'}
              </Button>
            )}
          </div>
        </div>

        {/* ACTIVE ACTIVITY TITLE */}
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
            {activeBlock.activity}
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--color-accent-primary)' }}>Acción de Inicio (10 Min):</strong> {activeBlock.startAction}
          </p>
        </div>

        {/* CLINICAL RULE CARD */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid var(--color-border-subtle)',
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
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-warning)', textTransform: 'uppercase', fontWeight: 700 }}>
              Mínimo Viable de Entrada
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
              {activeBlock.rescueTip}
            </p>
          </div>
        </div>

        {/* CONTEXTUAL CLINICAL BANNER */}
        <div style={{
          background: 'var(--color-accent-primary-soft)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: '14px',
          padding: '12px 16px',
          fontSize: '0.82rem',
          color: 'var(--color-accent-primary)',
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
              background: 'var(--color-state-done-soft)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-state-done)',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 600,
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
              background: 'var(--color-accent-warning-soft)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-accent-warning)',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 600,
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
              background: 'var(--color-accent-primary-soft)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-accent-primary)',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 600,
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
              background: 'var(--color-accent-primary-soft)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-accent-primary)',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 600,
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
