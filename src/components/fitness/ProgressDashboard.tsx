import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { calculateMuscleVolumeFromLogs, type SessionLog } from '../../lib/fitness/volumeStats';
import LoadGuide from './LoadGuide';
import Button from '../ui/Button';
import { ChevronDown, ChevronUp, Filter, BarChart2 } from 'lucide-react';

export default function ProgressDashboard() {
  const [activeTab, setActiveTab] = useState<'history' | 'prs' | 'load'>('history');
  const [showDetailedStats, setShowDetailedStats] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sessions, setSessions] = useState<SessionLog[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fitapp_workout_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setSessions(parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const totalSessions = sessions.length;
  const muscleVolume = calculateMuscleVolumeFromLogs(sessions);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--text)' }}>
        
        {/* NAVEGACIÓN PROGRESO | HISTORIAL | PRS | CARGAS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
            Progreso
          </h2>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('history')}
              style={{
                background: activeTab === 'history' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'history' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'history' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Historial
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('prs')}
              style={{
                background: activeTab === 'prs' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'prs' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'prs' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              PRs
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('load')}
              style={{
                background: activeTab === 'load' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'load' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'load' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Guía de cargas
            </button>
          </div>
        </div>

        {/* MAXIMUM 4 KPIS SUMMARY */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 'var(--space-sm)' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Sesiones registradas</span>
            <strong style={{ fontSize: '1.3rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
              {totalSessions}
            </strong>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Adherencia semanal</span>
            <strong style={{ fontSize: '1.3rem', color: 'var(--color-state-done)', display: 'block', marginTop: '2px' }}>
              {totalSessions > 0 ? '100%' : '0%'}
            </strong>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Último PR</span>
            <strong style={{ fontSize: '0.9rem', color: 'var(--color-accent-primary)', display: 'block', marginTop: '2px' }}>
              Prensa +5 kg
            </strong>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Programa activo</span>
            <strong style={{ fontSize: '0.9rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
              MinMax
            </strong>
          </div>
        </div>

        {/* PANEL DE FILTROS COLAPSABLE */}
        <div>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.78rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Filter size={14} />
            <span>Filtros</span>
            {showFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showFilters && (
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-sm)', marginTop: '6px', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
              Filtro por variante (Barra, Mancuerna, Máquina, Anillas) y rango de fechas.
            </div>
          )}
        </div>

        {/* PESTAÑA: HISTORIAL */}
        {activeTab === 'history' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {totalSessions === 0 ? (
              <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                Sin sesiones registradas aún.
              </div>
            ) : (
              sessions.map((s, idx) => (
                <div
                  key={s.sessionId || idx}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                      {s.routineTitle || 'Sesión de Entrenamiento'}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', marginTop: '2px' }}>
                      {s.dateIso || 'Hoy'} · Duración: {s.durationMinutes || 45} min
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 700 }}>
                    ✓ Completada
                  </span>
                </div>
              ))
            )}
          </div>
        )}

        {/* PESTAÑA: PRS */}
        {activeTab === 'prs' && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
              Récords Personales (PRs) por variante
            </span>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              - Prensa Inclinada (Máquina): <strong>140 kg x 8 reps</strong>
              <br />
              - Handstand Hold (Pared): <strong>45 seg</strong>
              <br />
              - Dominada Estricta (Barra): <strong>10 reps</strong>
            </div>
          </div>
        )}

        {/* PESTAÑA: GUÍA DE CARGAS */}
        {activeTab === 'load' && <LoadGuide />}

        {/* BOTÓN VER ESTADÍSTICAS DETALLADAS (NO MOSTRAR GRÁFICOS SI MENOS DE 4 SESIONES) */}
        <div style={{ paddingTop: 'var(--space-xs)' }}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowDetailedStats(!showDetailedStats)}
          >
            <BarChart2 size={15} />
            <span>Ver estadísticas detalladas</span>
          </Button>

          {showDetailedStats && (
            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', marginTop: 'var(--space-sm)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                Volumen acumulado por grupo muscular
              </span>

              {totalSessions < 4 ? (
                <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                  Las gráficas de tendencias requieren un mínimo de 4 sesiones registradas.
                </span>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {muscleVolume.map((mv) => (
                    <div key={mv.muscleGroup} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span>{mv.muscleGroup}</span>
                      <strong>{mv.totalSets} series ({mv.totalVolumeKg} kg)</strong>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
