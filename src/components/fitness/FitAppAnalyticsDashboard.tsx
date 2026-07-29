import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';

export default function FitAppAnalyticsDashboard() {
  const [selectedRange, setSelectedRange] = useState<'week' | 'month' | 'quarter'>('week');

  const VOLUME_DATA = [
    { label: 'Sem 1', planned: 4200, executed: 3800, painScore: 1 },
    { label: 'Sem 2', planned: 4500, executed: 4400, painScore: 2 },
    { label: 'Sem 3', planned: 4800, executed: 4850, painScore: 1 },
    { label: 'Sem 4', planned: 5000, executed: 4900, painScore: 0 }
  ];

  const SKILL_PROGRESSION = [
    { skill: 'Handstand Libre (Pared / Libre)', level: 'Intermedio A1', progress: 75, color: 'var(--color-state-done)' },
    { skill: 'Planche (Tuck Planche Leans)', level: 'Base Calistenia', progress: 60, color: 'var(--color-accent-primary)' },
    { skill: 'Dominadas Lastradas (Empuje/Tirón)', level: 'Fuerza Relativa', progress: 85, color: 'var(--color-accent-primary)' },
    { skill: 'Movilidad Cadera & Isquios (David Thurin)', level: 'Rehabilitación', progress: 70, color: 'var(--color-accent-warning)' },
    { skill: 'Cardio LISS (30-45 min Bici/Caminata)', level: 'Regulación Estrés', progress: 90, color: 'var(--color-accent-primary)' }
  ];

  return (
    <ErrorBoundary>
      <div
        style={{
          background: 'rgba(28, 28, 30, 0.75)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255,255,255,0.08) inset',
          color: 'var(--color-text-primary)'
        }}
      >
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: 'var(--color-state-done)', fontWeight: 800, textTransform: 'uppercase' }}>
              PANEL DE ANALÍTICA INTEGRADA FITAPP-FREE & SALUD ARTICULAR
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--color-text-primary)' }}>
              Evolución de Volumen, Dolor Articular & Adherencia
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.06)', padding: '4px', borderRadius: '12px' }}>
            <button
              type="button"
              onClick={() => setSelectedRange('week')}
              style={{ background: selectedRange === 'week' ? 'var(--color-state-done)' : 'transparent', color: selectedRange === 'week' ? '#000' : 'var(--color-text-secondary)', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Semana
            </button>
            <button
              type="button"
              onClick={() => setSelectedRange('month')}
              style={{ background: selectedRange === 'month' ? 'var(--color-state-done)' : 'transparent', color: selectedRange === 'month' ? '#000' : 'var(--color-text-secondary)', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Mes
            </button>
          </div>
        </div>

        {/* METRICS ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 700, textTransform: 'uppercase' }}>ADHERENCIA AM / PM</span>
            <strong style={{ fontSize: '1.8rem', display: 'block', margin: '4px 0', color: '#fff' }}>94%</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>15 de 16 bloques cumplidos</span>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>RATIO CARGA PLAN VS REAL</span>
            <strong style={{ fontSize: '1.8rem', display: 'block', margin: '4px 0', color: '#fff' }}>101%</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>4,850 kg ejec / 4,800 kg plan</span>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-warning)', fontWeight: 700, textTransform: 'uppercase' }}>TENDENCIA DOLOR ARTICULAR</span>
            <strong style={{ fontSize: '1.8rem', display: 'block', margin: '4px 0', color: '#fff' }}>1.0 / 10</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-state-done)' }}>🟢 Zona Segura (Hombro & Rodilla OK)</span>
          </div>
        </div>

        {/* VISUAL CHART 1: CARGA PLANIFICADA VS EJECUTADA & DOLOR */}
        <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--color-text-primary)', fontWeight: 700 }}>
            📊 Comparativa de Volumen Semanal (kg) & Registro de Molestia
          </h4>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', height: '180px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            {VOLUME_DATA.map((d, idx) => {
              const heightPct = Math.round((d.executed / 5000) * 100);
              return (
                <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '8px' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 700 }}>{d.executed} kg</span>
                  <div style={{ width: '36px', height: `${heightPct}%`, background: 'linear-gradient(180deg, #30d158, #059669)', borderRadius: '8px' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'SF Mono, monospace' }}>{d.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SKILL PROGRESSION RINGS / BARS */}
        <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--color-text-primary)', fontWeight: 700 }}>
            🤸 Progreso por Habilidades Calisténicas & Rehabilitación
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SKILL_PROGRESSION.map((sk, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#fff' }}>{sk.skill}</strong>
                  <span style={{ color: sk.color, fontWeight: 700 }}>{sk.level} ({sk.progress}%)</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', height: '6px', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: `${sk.progress}%`, height: '100%', background: sk.color, borderRadius: '999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
