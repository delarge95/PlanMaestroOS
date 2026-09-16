import React, { useState } from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import type { EnergyLevel } from '../../../data/canonicalDomainModel';

interface Props {
  mode: 'morning' | 'evening' | null;
  onClose: () => void;
  onSelectEnergy: (level: EnergyLevel) => void;
}

export default function MorningEveningWorkflowsModal({ mode, onClose, onSelectEnergy }: Props) {
  const [selectedEnergy, setSelectedEnergy] = useState<EnergyLevel>('medium');
  const [morningStep, setMorningStep] = useState<number>(1);
  const [eveningStep, setEveningStep] = useState<number>(1);
  const [entryStepText, setEntryStepText] = useState<string>('');

  if (!mode) return null;

  const handleFinishMorning = () => {
    onSelectEnergy(selectedEnergy);
    onClose();
  };

  return (
    <ErrorBoundary>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        <div
          style={{
            background: 'rgba(28, 28, 30, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            maxWidth: '560px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
            color: 'var(--color-text-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.72rem', color: mode === 'morning' ? 'var(--color-state-done)' : 'var(--accent)', fontFamily: 'SF Mono, monospace', fontWeight: 700 }}>
                {mode === 'morning' ? 'ðŸŒ… MODO INICIO RÃPIDO (60 SEGUNDOS)' : 'ðŸŒ™ MODO CIERRE DEL DÃA (3 MINUTOS)'}
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--color-text-primary)' }}>
                {mode === 'morning' ? 'Arranque del DÃ­a Sin FricciÃ³n' : 'Balance & DesconexiÃ³n Nocturna'}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: 'var(--color-text-secondary)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: 700 }}
            >
              âœ•
            </button>
          </div>

          {/* MORNING WORKFLOW */}
          {mode === 'morning' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {morningStep === 1 && (
                <>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    <strong>Paso 1/2:</strong> Â¿CuÃ¡l es tu nivel de energÃ­a real esta maÃ±ana? El sistema adaptarÃ¡ los bloques automÃ¡ticamente.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedEnergy('high')}
                      style={{
                        background: selectedEnergy === 'high' ? 'rgba(48, 209, 88, 0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${selectedEnergy === 'high' ? 'var(--color-state-done)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '16px',
                        padding: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: 'var(--color-text-primary)'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>ðŸŸ¢</span>
                      <strong style={{ display: 'block', fontSize: '0.92rem', margin: '4px 0 2px' }}>EnergÃ­a Alta</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>SesiÃ³n completa 45m + TwinSight</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedEnergy('medium')}
                      style={{
                        background: selectedEnergy === 'medium' ? 'rgba(100, 210, 255, 0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${selectedEnergy === 'medium' ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '16px',
                        padding: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: 'var(--color-text-primary)'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>ðŸ©µ</span>
                      <strong style={{ display: 'block', fontSize: '0.92rem', margin: '4px 0 2px' }}>EnergÃ­a Normal</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Ritmo estÃ¡ndar sin forzar</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedEnergy('low')}
                      style={{
                        background: selectedEnergy === 'low' ? 'rgba(255, 159, 10, 0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${selectedEnergy === 'low' ? 'var(--warning)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '16px',
                        padding: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: 'var(--color-text-primary)'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>ðŸŸ§</span>
                      <strong style={{ display: 'block', fontSize: '0.92rem', margin: '4px 0 2px' }}>EnergÃ­a Baja</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Degrada a versiÃ³n mÃ­nima de 15m</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedEnergy('crisis')}
                      style={{
                        background: selectedEnergy === 'crisis' ? 'rgba(255, 69, 58, 0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${selectedEnergy === 'crisis' ? 'var(--color-accent-danger)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '16px',
                        padding: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: 'var(--color-text-primary)'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>ðŸš¨</span>
                      <strong style={{ display: 'block', fontSize: '0.92rem', margin: '4px 0 2px' }}>Modo Crisis / Dolor</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Solo 3 micro-acciones de rescate</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMorningStep(2)}
                    style={{ background: 'var(--color-state-done)', border: 'none', color: '#000', padding: '12px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer', marginTop: '10px' }}
                  >
                    Siguiente â†’ Confirmar Prioridades
                  </button>
                </>
              )}

              {morningStep === 2 && (
                <>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    <strong>Paso 2/2:</strong> Se ha aplicado el <strong>Reset ClÃ­nico Sin Culpa</strong>. Tu dÃ­a inicia libre de deudas anteriores.
                  </p>

                  <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(48,209,88,0.3)', padding: '14px', borderRadius: '14px', fontSize: '0.84rem', color: 'var(--color-state-done)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <strong>âœ… Tus 3 tareas elegidas para hoy:</strong>
                    <span>1. TwinSight MVP & Tesis (Bloque A)</span>
                    <span>2. HÃ¡bito 13:30 AlemÃ¡n A1 (25 min)</span>
                    <span>3. Ejercicio FitApp / Movilidad HSR</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleFinishMorning}
                    style={{ background: 'var(--color-state-done)', border: 'none', color: '#000', padding: '12px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer', marginTop: '10px' }}
                  >
                    ðŸš€ Â¡Listo! Arrancar el DÃ­a
                  </button>
                </>
              )}
            </div>
          )}

          {/* EVENING WORKFLOW */}
          {mode === 'evening' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {eveningStep === 1 && (
                <>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    <strong>Paso 1/2:</strong> Registra la primera acciÃ³n exacta de 2 minutos para maÃ±ana antes de apagar las pantallas.
                  </p>

                  <input
                    type="text"
                    placeholder="Ejemplo: Abrir archivo TwinSight.unity a las 09:20 sin mirar celular..."
                    value={entryStepText}
                    onChange={(e) => setEntryStepText(e.target.value)}
                    style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)', padding: '12px 14px', borderRadius: '12px', color: '#fff', fontSize: '0.85rem' }}
                  />

                  <button
                    type="button"
                    onClick={() => setEveningStep(2)}
                    style={{ background: 'var(--accent)', border: 'none', color: '#fff', padding: '12px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}
                  >
                    Siguiente â†’ Activar Higiene de SueÃ±o
                  </button>
                </>
              )}

              {eveningStep === 2 && (
                <>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    <strong>Paso 2/2:</strong> Activa el protocolo de desconexiÃ³n CBT-I (21:00).
                  </p>

                  <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(191,90,242,0.3)', padding: '14px', borderRadius: '14px', fontSize: '0.84rem', color: 'var(--accent)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <strong>ðŸŒ™ Checklist de DesconexiÃ³n Nocturna:</strong>
                    <span>âœ“ Pantallas apagadas / modo noche activado</span>
                    <span>âœ“ HabitaciÃ³n ventilada y fresca</span>
                    <span>âœ“ Criterio de corte: "Suficientemente Terminado"</span>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    style={{ background: 'var(--accent)', border: 'none', color: '#fff', padding: '12px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}
                  >
                    ðŸ˜´ Cerrar DÃ­a & A Descansar
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
