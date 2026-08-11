// src/components/fitness/TodayCalendar.tsx
import React from 'react';
import { Calendar, CheckCircle2, Flame, Trophy } from 'lucide-react';

export default function TodayCalendar() {
  const weekDays = [
    { day: 'Lun', label: 'Upper 1', status: 'done' },
    { day: 'Mar', label: 'Lower 1', status: 'done' },
    { day: 'Mié', label: 'Tracción', status: 'today' },
    { day: 'Jue', label: 'Descanso', status: 'pending' },
    { day: 'Vie', label: 'Upper 2', status: 'pending' },
    { day: 'Sáb', label: 'Lower 2', status: 'pending' },
    { day: 'Dom', label: 'Movilidad', status: 'pending' },
  ];

  return (
    <div
      style={{
        background: 'var(--surface-1, #0d0d0f)',
        border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
        borderRadius: 'var(--radius-m, 12px)',
        padding: 'var(--space-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={18} style={{ color: 'var(--accent, #0a84ff)' }} />
          <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Cronograma
          </h3>
        </div>
        <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
          Semana actual
        </span>
      </div>

      {/* DÍAS DE LA SEMANA */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
        {weekDays.map((w) => (
          <div
            key={w.day}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 4px',
              borderRadius: 'var(--radius-s, 8px)',
              background: w.status === 'today'
                ? 'var(--color-accent-primary-soft, rgba(10,132,255,0.12))'
                : 'rgba(255,255,255,0.02)',
              border: w.status === 'today'
                ? '1px solid var(--accent, #0a84ff)'
                : '1px solid transparent',
              gap: '4px'
            }}
          >
            <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', color: 'var(--text-secondary)' }}>{w.day}</span>
            <strong style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: w.status === 'done' ? 'var(--success)' : 'var(--text-primary)' }}>
              {w.label}
            </strong>
            {w.status === 'done' && <CheckCircle2 size={12} style={{ color: 'var(--success)' }} />}
          </div>
        ))}
      </div>

      {/* MÁXIMO 3 MÉTRICAS VISIBLES PER FIX 08 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)', paddingTop: 'var(--space-xs)' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
          <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', color: 'var(--text-secondary)', display: 'block' }}>
            Consistencia
          </span>
          <strong style={{ fontSize: '1.1rem', color: 'var(--success)', display: 'block', marginTop: '2px' }}>
            100%
          </strong>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
          <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', color: 'var(--text-secondary)', display: 'block' }}>
            Completadas
          </span>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'block', marginTop: '2px' }}>
            2 / 5
          </strong>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
          <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', color: 'var(--text-secondary)', display: 'block' }}>
            Último PR
          </span>
          <strong style={{ fontSize: '0.85rem', color: 'var(--accent)', display: 'block', marginTop: '4px' }}>
            Prensa +5 kg
          </strong>
        </div>
      </div>
    </div>
  );
}
