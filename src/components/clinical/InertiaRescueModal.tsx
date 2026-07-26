import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentTaskName?: string;
}

export default function InertiaRescueModal({ isOpen, onClose, currentTaskName = "Tarea Activa" }: Props) {
  const [step, setStep] = useState<number>(1);
  const [timerSeconds, setTimerSeconds] = useState<number>(600); // 10 minutes
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [badVersionText, setBadVersionText] = useState<string>('');
  const [reentryStep, setReentryStep] = useState<string>('');

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  if (!isOpen) return null;

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ErrorBoundary>
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(4, 6, 8, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        zIndex: 9999,
        display: 'grid',
        placeItems: 'center',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(12, 16, 22, 0.95)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '24px',
          maxWidth: '540px',
          width: '100%',
          padding: '28px',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 50px rgba(239, 68, 68, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          color: '#effff6'
        }}>
          {/* MODAL HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#f87171', background: 'rgba(239, 68, 68, 0.15)', padding: '4px 10px', borderRadius: '999px', fontWeight: 800 }}>
                PROTOCOLO DE RESCATE TDAH • PASO {step} DE 3
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '6px 0 0', color: '#ffffff' }}>
                Desbloqueo de Inercia: {currentTaskName}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#a8b9b2',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'grid',
                placeItems: 'center'
              }}
            >
              ✕
            </button>
          </div>

          {/* STEP 1: REGLA DE 10 MINUTOS & TIMER */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '14px', borderRadius: '16px' }}>
                <strong style={{ fontSize: '0.88rem', color: '#f87171', display: 'block', marginBottom: '4px' }}>
                  💡 Regla Inviolable de Inicio (10 Minutos):
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#a8b9b2', margin: 0, lineHeight: 1.45 }}>
                  No tienes que terminar la tarea ni hacerla bien. Solo debes estar presente 10 minutos. Si a los 10 minutos quieres parar, estás clínicamente autorizado a hacerlo sin culpa.
                </p>
              </div>

              {/* TIMER DISPLAY */}
              <div style={{ textAlign: 'center', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px', borderRadius: '20px' }}>
                <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '3.5rem', fontWeight: 800, color: '#77e7ff', letterSpacing: '0.05em' }}>
                  {formatTime(timerSeconds)}
                </span>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '14px' }}>
                  <button
                    type="button"
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    style={{
                      background: isTimerRunning ? 'rgba(239, 68, 68, 0.25)' : 'rgba(16, 185, 129, 0.25)',
                      border: `1px solid ${isTimerRunning ? '#f87171' : '#10b981'}`,
                      color: isTimerRunning ? '#f87171' : '#10b981',
                      padding: '8px 20px',
                      borderRadius: '10px',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    {isTimerRunning ? 'Pausar Timer' : 'Iniciar 10 Minutos'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setTimerSeconds(600); setIsTimerRunning(false); }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#a8b9b2',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    Reiniciar
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #77e7ff)',
                  border: 'none',
                  color: '#040608',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  marginTop: '8px'
                }}
              >
                Siguiente: Producir Versión Mala →
              </button>
            </div>
          )}

          {/* STEP 2: VERSIÓN MALA INICIAL */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'rgba(119, 231, 255, 0.08)', border: '1px solid rgba(119, 231, 255, 0.2)', padding: '14px', borderRadius: '16px' }}>
                <strong style={{ fontSize: '0.88rem', color: '#77e7ff', display: 'block', marginBottom: '4px' }}>
                  ✍️ Escribe la Peor Versión Posible:
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#a8b9b2', margin: 0, lineHeight: 1.45 }}>
                  Prohibido buscar elegancia. Escribe 3 frases feas, incompletas o en viñetas. Romper el lienzo en blanco es la única victoria requerida.
                </p>
              </div>

              <textarea
                value={badVersionText}
                onChange={(e) => setBadVersionText(e.target.value)}
                placeholder="Escribe aquí tu versión feísima e imperfecta sin juzgar..."
                rows={4}
                style={{
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '14px',
                  padding: '14px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#a8b9b2',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  ← Volver a Timer
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(90deg, #10b981, #77e7ff)',
                    border: 'none',
                    color: '#040608',
                    padding: '12px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  Siguiente: Fijar Reentrada →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: FRASE DE REENTRADA ESCRITA */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '14px', borderRadius: '16px' }}>
                <strong style={{ fontSize: '0.88rem', color: '#c084fc', display: 'block', marginBottom: '4px' }}>
                  📌 Paso de Reentrada Obligatorio:
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#a8b9b2', margin: 0, lineHeight: 1.45 }}>
                  Escribe el próximo paso exacto de 2 minutos para cuando retomes esta tarea (ej. "Abrir archivo X y editar línea 14").
                </p>
              </div>

              <input
                type="text"
                value={reentryStep}
                onChange={(e) => setReentryStep(e.target.value)}
                placeholder="Ejemplo: Escribir el bullet 2 del apartado de metodología..."
                style={{
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '14px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#a8b9b2',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  ← Volver
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    setStep(1);
                  }}
                  style={{
                    flex: 1,
                    background: '#10b981',
                    border: 'none',
                    color: '#040608',
                    padding: '12px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  ✓ Desbloqueo Completado — Iniciar Tarea
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
