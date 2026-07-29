import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';

export default function ClinicalUncompletedTaskProtocol() {
  const [resetMessage, setResetMessage] = useState<string | null>(null);
  const [frozenTasks, setFrozenTasks] = useState<string[]>([
    'Revisión detallada de entregable TwinSight MVP',
    'Sesión completa de 45 min en Gimnasio (reemplazada por 1 serie de rescate)',
    'Lectura de 30 páginas de libro técnico'
  ]);

  const handleResetDay = () => {
    setResetMessage('🟢 Día restablecido a CERO DEUDA. Las tareas no completadas se perdonaron automáticamente y no se acumularán.');
    setTimeout(() => setResetMessage(null), 8000);
  };

  const handleClearTask = (index: number) => {
    setFrozenTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ErrorBoundary>
      <div
        style={{
          background: 'var(--color-surface-base)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid var(--color-accent-danger-glow)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          color: 'var(--color-text-primary)'
        }}
      >
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span style={{ fontFamily: '-apple-system, SF Pro Text, sans-serif', fontSize: '0.72rem', color: 'var(--color-accent-danger)', background: 'var(--color-accent-danger-soft)', padding: '4px 10px', borderRadius: '999px', fontWeight: 700 }}>
              SISTEMA ANTI-FRUSTRACIÓN & PERDÓN EMOCIONAL TDAH
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '6px 0 0', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
              Protocolo de Rescate cuando una Tarea Falla o No Se Cumple
            </h3>
          </div>

          <button
            type="button"
            onClick={handleResetDay}
            style={{
              background: 'var(--color-state-done)',
              border: 'none',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 14px var(--color-state-done-glow)'
            }}
          >
            🛡️ Reset Clínico Sin Culpa (Cero Deuda)
          </button>
        </div>

        {resetMessage && (
          <div style={{ background: 'var(--color-state-done-soft)', border: '1px solid var(--color-state-done-glow)', borderRadius: '12px', padding: '12px 16px', fontSize: '0.84rem', color: 'var(--color-state-done)', fontWeight: 600 }}>
            {resetMessage}
          </div>
        )}

        {/* CLINICAL PRINCIPLE CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', borderRadius: '14px', padding: '14px', borderLeft: '3px solid var(--color-accent-danger)' }}>
            <strong style={{ color: 'var(--color-text-primary)', fontSize: '0.88rem', display: 'block', marginBottom: '4px' }}>
              1. Cero Acumulación de Deuda
            </strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
              Lo que no se hizo ayer NUNCA se suma como obligación a hoy. El TDAH colapsa ante listas crecientes. Mañana arranca limpio.
            </span>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', borderRadius: '14px', padding: '14px', borderLeft: '3px solid var(--color-accent-warning)' }}>
            <strong style={{ color: 'var(--color-text-primary)', fontSize: '0.88rem', display: 'block', marginBottom: '4px' }}>
              2. Entrada Mínima de 2 Minutos
            </strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
              Si estás bloqueado por parálisis o culpa, ejecuta solo el micro-criterio de 2 min ("1 serie en anillas", "Escribir 1 párrafo feo").
            </span>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', borderRadius: '14px', padding: '14px', borderLeft: '3px solid var(--color-state-done)' }}>
            <strong style={{ color: 'var(--color-text-primary)', fontSize: '0.88rem', display: 'block', marginBottom: '4px' }}>
              3. Ejecución Parcial = Éxito Total
            </strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
              10 minutos de entrenamiento valen un 100% clínicamente frente a 0. Elimina la trampa del "todo o nada".
            </span>
          </div>
        </div>

        {/* TASK FREEZER (CONGELADOR DE TAREAS) */}
        <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--color-border-subtle)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
              ❄️ CONGELADOR DE TAREAS PENDIENTES (SIN CULPA NI PRESIÓN)
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>{frozenTasks.length} archivadas</span>
          </div>

          {frozenTasks.length === 0 ? (
            <span style={{ fontSize: '0.8rem', color: 'var(--color-state-done)' }}>🎉 ¡No hay tareas pendientes en el congelador!</span>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {frozenTasks.map((t, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-border-subtle)', padding: '8px 12px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                  <span>{t}</span>
                  <button
                    type="button"
                    onClick={() => handleClearTask(idx)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--color-accent-danger)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700 }}
                  >
                    ✕ Eliminar sin culpa
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
