import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import type { EnergyLevel } from '../../data/canonicalDomainModel';

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
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.72rem', color: mode === 'morning' ? '#30d158' : '#bf5af2', fontFamily: 'SF Mono, monospace', fontWeight: 700 }}>
                {mode === 'morning' ? '🌅 MODO INICIO RÁPIDO (60 SEGUNDOS)' : '🌙 MODO CIERRE DEL DÍA (3 MINUTOS)'}
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '2px 0 0', color: '#ffffff' }}>
                {mode === 'morning' ? 'Arranque del Día Sin Fricción' : 'Balance & Desconexión Nocturna'}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: '#98989d', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: 700 }}
            >
              ✕
            </button>
          </div>

          {/* MORNING WORKFLOW */}
          {mode === 'morning' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {morningStep === 1 && (
                <>
                  <p style={{ fontSize: '0.88rem', color: '#98989d', margin: 0, lineHeight: 1.5 }}>
                    <strong>Paso 1/2:</strong> ¿Cuál es tu nivel de energía real esta mañana? El sistema adaptará los bloques automáticamente.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedEnergy('high')}
                      style={{
                        background: selectedEnergy === 'high' ? 'rgba(48, 209, 88, 0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${selectedEnergy === 'high' ? '#30d158' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '16px',
                        padding: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: '#ffffff'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>🟢</span>
                      <strong style={{ display: 'block', fontSize: '0.92rem', margin: '4px 0 2px' }}>Energía Alta</strong>
                      <span style={{ fontSize: '0.75rem', color: '#98989d' }}>Sesión completa 45m + TwinSight</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedEnergy('medium')}
                      style={{
                        background: selectedEnergy === 'medium' ? 'rgba(100, 210, 255, 0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${selectedEnergy === 'medium' ? '#64d2ff' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '16px',
                        padding: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: '#ffffff'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>🩵</span>
                      <strong style={{ display: 'block', fontSize: '0.92rem', margin: '4px 0 2px' }}>Energía Normal</strong>
                      <span style={{ fontSize: '0.75rem', color: '#98989d' }}>Ritmo estándar sin forzar</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedEnergy('low')}
                      style={{
                        background: selectedEnergy === 'low' ? 'rgba(255, 159, 10, 0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${selectedEnergy === 'low' ? '#ff9f0a' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '16px',
                        padding: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: '#ffffff'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>🟧</span>
                      <strong style={{ display: 'block', fontSize: '0.92rem', margin: '4px 0 2px' }}>Energía Baja</strong>
                      <span style={{ fontSize: '0.75rem', color: '#98989d' }}>Degrada a versión mínima de 15m</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedEnergy('crisis')}
                      style={{
                        background: selectedEnergy === 'crisis' ? 'rgba(255, 69, 58, 0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${selectedEnergy === 'crisis' ? '#ff453a' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '16px',
                        padding: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: '#ffffff'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>🚨</span>
                      <strong style={{ display: 'block', fontSize: '0.92rem', margin: '4px 0 2px' }}>Modo Crisis / Dolor</strong>
                      <span style={{ fontSize: '0.75rem', color: '#98989d' }}>Solo 3 micro-acciones de rescate</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMorningStep(2)}
                    style={{ background: '#30d158', border: 'none', color: '#000', padding: '12px', borderRadius: '12px', fontWeight: 800, cursor: 'pointer', marginTop: '10px' }}
                  >
                    Siguiente → Confirmar Prioridades
                  </button>
                </>
              )}

              {morningStep === 2 && (
                <>
                  <p style={{ fontSize: '0.88rem', color: '#98989d', margin: 0, lineHeight: 1.5 }}>
                    <strong>Paso 2/2:</strong> Se ha aplicado el <strong>Reset Clínico Sin Culpa</strong>. Tu día inicia libre de deudas anteriores.
                  </p>

                  <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(48,209,88,0.3)', padding: '14px', borderRadius: '14px', fontSize: '0.84rem', color: '#30d158', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <strong>✅ Tus 3 Prioridades Inviolables para Hoy:</strong>
                    <span>1. TwinSight MVP & Tesis (Bloque A)</span>
                    <span>2. Hábito 13:30 Alemán A1 (25 min)</span>
                    <span>3. Ejercicio FitApp / Movilidad HSR</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleFinishMorning}
                    style={{ background: '#30d158', border: 'none', color: '#000', padding: '12px', borderRadius: '12px', fontWeight: 800, cursor: 'pointer', marginTop: '10px' }}
                  >
                    🚀 ¡Listo! Arrancar el Día
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
                  <p style={{ fontSize: '0.88rem', color: '#98989d', margin: 0, lineHeight: 1.5 }}>
                    <strong>Paso 1/2:</strong> Registra la primera acción exacta de 2 minutos para mañana antes de apagar las pantallas.
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
                    style={{ background: '#bf5af2', border: 'none', color: '#fff', padding: '12px', borderRadius: '12px', fontWeight: 800, cursor: 'pointer' }}
                  >
                    Siguiente → Activar Higiene de Sueño
                  </button>
                </>
              )}

              {eveningStep === 2 && (
                <>
                  <p style={{ fontSize: '0.88rem', color: '#98989d', margin: 0, lineHeight: 1.5 }}>
                    <strong>Paso 2/2:</strong> Activa el protocolo de desconexión CBT-I (21:00).
                  </p>

                  <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(191,90,242,0.3)', padding: '14px', borderRadius: '14px', fontSize: '0.84rem', color: '#bf5af2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <strong>🌙 Checklist de Desconexión Nocturna:</strong>
                    <span>✓ Pantallas apagadas / modo noche activado</span>
                    <span>✓ Habitación ventilada y fresca</span>
                    <span>✓ Criterio de corte: "Suficientemente Terminado"</span>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    style={{ background: '#bf5af2', border: 'none', color: '#fff', padding: '12px', borderRadius: '12px', fontWeight: 800, cursor: 'pointer' }}
                  >
                    😴 Cerrar Día & A Descansar
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
