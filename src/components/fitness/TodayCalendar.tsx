// src/components/fitness/TodayCalendar.tsx
import React, { useState } from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function TodayCalendar() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(2); // Miércoles es Hoy (índice 2)

  const weekDays = [
    { day: 'Lun', label: 'Upper 1', details: 'Press Inclinado 3x6-8, Remo 3x8-10, Elevaciones 4x12-15', status: 'done', isToday: false },
    { day: 'Mar', label: 'Lower 1', details: 'Sentadilla 3x6-8, Peso Muerto Rumano 3x8-10, Zancadas 3x10-12', status: 'done', isToday: false },
    { day: 'Mié', label: 'Tracción & Anillas', details: 'Dominadas Estrictas 4x6-8, Fondos en Anillas 3x8-10, Prehab Hombro', status: 'today', isToday: true },
    { day: 'Jue', label: 'Descanso / Movilidad', details: 'Caminata 30 min + Estiramientos de cadera y tobillo', status: 'pending', isToday: false },
    { day: 'Vie', label: 'Upper 2', details: 'Press Militar 3x6-8, Jalón al Pecho 3x8-10, Fondos 3x8-10', status: 'pending', isToday: false },
    { day: 'Sáb', label: 'Lower 2', details: 'Prensa 4x8-10, Curl Femoral 3x10-12, Gemelos 4x12-15', status: 'pending', isToday: false },
    { day: 'Dom', label: 'Recuperación Activa', details: 'Movilidad Torácica & Isométricos de rodilla', status: 'pending', isToday: false },
  ];

  const selectedDay = weekDays[selectedDayIndex];

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
            Cronograma Interactivo de la Semana
          </h3>
        </div>
        <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
          Clic en cualquier día para inspeccionar
        </span>
      </div>

      {/* DÍAS DE LA SEMANA SELECCIONABLES */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
        {weekDays.map((w, idx) => {
          const isSelected = selectedDayIndex === idx;

          return (
            <button
              key={w.day}
              type="button"
              onClick={() => setSelectedDayIndex(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '8px 4px',
                borderRadius: 'var(--radius-s, 8px)',
                background: isSelected
                  ? 'var(--accent, #0a84ff)'
                  : w.isToday
                  ? 'rgba(48,209,88,0.15)'
                  : 'rgba(255,255,255,0.02)',
                border: isSelected
                  ? '1px solid var(--accent, #0a84ff)'
                  : w.isToday
                  ? '1px solid var(--success, #30d158)'
                  : '1px solid transparent',
                color: isSelected ? '#ffffff' : 'var(--text-primary)',
                gap: '4px',
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 150ms ease'
              }}
            >
              <span style={{ fontSize: 'var(--fs-eyebrow, 0.72rem)', opacity: isSelected ? 0.9 : 0.7 }}>
                {w.day} {w.isToday ? '• HOY' : ''}
              </span>
              <strong style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: isSelected ? '#ffffff' : w.status === 'done' ? 'var(--success)' : 'var(--text-primary)' }}>
                {w.label}
              </strong>
              {w.status === 'done' && <CheckCircle2 size={12} style={{ color: isSelected ? '#ffffff' : 'var(--success)' }} />}
            </button>
          );
        })}
      </div>

      {/* DETALLE DEL DÍA SELECCIONADO */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
        borderRadius: 'var(--radius-s, 8px)',
        padding: '10px 14px',
        fontSize: 'var(--fs-meta, 0.84rem)',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <strong style={{ color: 'var(--text-primary)' }}>
            Sesión del {selectedDay.day}: {selectedDay.label} {selectedDay.isToday ? '(Día Actual)' : ''}
          </strong>
          {selectedDay.status === 'done' && (
            <span style={{ fontSize: '0.72rem', color: 'var(--success)', fontWeight: 700 }}>✓ Completado</span>
          )}
        </div>
        <span>{selectedDay.details}</span>
      </div>

      {/* MÉTRICAS DE ADHERENCIA */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)' }}>
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
