import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';

interface Props {
  isActive: boolean;
  onExit: () => void;
  children: React.ReactNode;
}

export default function FocusModeShell({ isActive, onExit, children }: Props) {
  const [tasks, setTasks] = useState<{ id: string; text: string; done: boolean }[]>([
    { id: 't1', text: 'Tarea 1: TwinSight MVP - Escribir 3 párrafos del Case Study', done: false },
    { id: 't2', text: 'Tarea 2: Sustentación CBT - Ensayar 3 ideas en voz alta', done: false },
    { id: 't3', text: 'Tarea 3: Alemán A1 - 5m Duolingo + 20m Lectura A1', done: false }
  ]);
  const [reentryNote, setReentryNote] = useState<string>('');

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem('focus_mode_tasks');
      if (savedTasks) setTasks(JSON.parse(savedTasks));
      const savedNote = localStorage.getItem('focus_mode_reentry');
      if (savedNote) setReentryNote(savedNote);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleTask = (id: string) => {
    const updated = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
    setTasks(updated);
    try {
      localStorage.setItem('focus_mode_tasks', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleNoteChange = (val: string) => {
    setReentryNote(val);
    try {
      localStorage.setItem('focus_mode_reentry', val);
    } catch (e) {
      console.error(e);
    }
  };

  if (!isActive) {
    return <>{children}</>;
  }

  return (
    <ErrorBoundary>
      <div style={{
        position: 'fixed',
        inset: 0,
        background: '#040608',
        zIndex: 99999,
        padding: '36px 20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#effff6'
      }}>
        {/* ZEN FOCUS CONTAINER */}
        <div style={{
          maxWidth: '720px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px'
        }}>
          {/* HEADER BAR */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.75rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.12)', padding: '4px 12px', borderRadius: '999px', fontWeight: 800 }}>
              ⚡ MODO FOCO ZEN ACTIVO • CERO DISTRACCIONES
            </span>
            <button
              type="button"
              onClick={onExit}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#effff6',
                padding: '8px 16px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              ✕ Salir del Modo Foco
            </button>
          </div>

          {/* ACTIVE BLOCK FOCUS CARD */}
          <div style={{
            background: 'rgba(12, 16, 22, 0.85)',
            backdropFilter: 'blur(28px)',
            border: '1px solid rgba(119, 231, 255, 0.2)',
            borderRadius: '24px',
            padding: '28px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)'
          }}>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#77e7ff', textTransform: 'uppercase', fontWeight: 800 }}>
              BLOQUE A EN EJECUCIÓN (09:20 – 11:40)
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '6px 0 12px', color: '#ffffff' }}>
              Trabajo Profundo: TwinSight MVP & Tesis
            </h2>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '12px 16px', borderRadius: '12px', fontSize: '0.85rem', color: '#6ee7b7' }}>
              💡 <strong>Regla Activa:</strong> Produce una Versión Mala en los primeros 10 minutos. No juzgues ni borres nada.
            </div>
          </div>

          {/* MAX 3 TASKS CHECKLIST */}
          <div style={{
            background: 'rgba(12, 16, 22, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: '#a8b9b2', textTransform: 'uppercase', fontWeight: 700 }}>
              Las 3 Prioridades Inviolables del Día
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {tasks.map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => toggleTask(t.id)}
                  style={{
                    background: t.done ? 'rgba(16, 185, 129, 0.12)' : 'rgba(0, 0, 0, 0.35)',
                    border: `1px solid ${t.done ? '#10b981' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '14px',
                    padding: '14px 18px',
                    textAlign: 'left',
                    color: t.done ? '#6ee7b7' : '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: t.done ? 'line-through' : 'none',
                    transition: 'all 150ms ease'
                  }}
                >
                  <span style={{ fontSize: '1rem', color: t.done ? '#10b981' : '#a8b9b2' }}>
                    {t.done ? '✓' : '○'}
                  </span>
                  <span>{t.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RE-ENTRY NOTE BEFORE LEAVING */}
          <div style={{
            background: 'rgba(12, 16, 22, 0.85)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: '24px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: '#c084fc', textTransform: 'uppercase', fontWeight: 800 }}>
              📌 Paso de Reentrada Escrito (Al Cierre)
            </span>
            <p style={{ fontSize: '0.82rem', color: '#a8b9b2', margin: 0 }}>
              Antes de cerrar la sesión, escribe la micro-acción exacta de 2 minutos para cuando retomes:
            </p>
            <input
              type="text"
              value={reentryNote}
              onChange={(e) => handleNoteChange(e.target.value)}
              placeholder="Ejemplo: Escribir el segundo párrafo de la solución técnica en TwinSight..."
              style={{
                width: '100%',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '12px 14px',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
