// src/components/fitness/ProgressDashboard.tsx
import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { calculateMuscleVolumeFromLogs, type SessionLog } from '../../lib/fitness/volumeStats';
import AnalyticsChart from './analytics/AnalyticsChart';
import ProgramAnalytics from './analytics/ProgramAnalytics';
import LoadingCharts from './analytics/LoadingCharts';
import ExerciseGuide from './analytics/ExerciseGuide';
import { History, BarChart2, Dumbbell, Calendar, CheckCircle2, Target, BookOpen } from 'lucide-react';

export default function ProgressDashboard() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'program' | 'loading' | 'guide' | 'history'>('analytics');
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--text-primary)' }}>
        
        {/* NAVEGACIÓN NIVEL 3: RIVAL FITAPP-FREE COMPLETO */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Módulo de Analítica & Rendimiento Integrado
            </span>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
              Progreso & Cargas de Entrenamiento
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '4px', borderRadius: '10px', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setActiveTab('analytics')}
              style={{
                background: activeTab === 'analytics' ? 'var(--accent, #0a84ff)' : 'transparent',
                color: activeTab === 'analytics' ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'analytics' ? 700 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <BarChart2 size={14} />
              <span>Rendimiento Global</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('program')}
              style={{
                background: activeTab === 'program' ? 'var(--accent, #0a84ff)' : 'transparent',
                color: activeTab === 'program' ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'program' ? 700 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Target size={14} />
              <span>Programa Activo</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('loading')}
              style={{
                background: activeTab === 'loading' ? 'var(--accent, #0a84ff)' : 'transparent',
                color: activeTab === 'loading' ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'loading' ? 700 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Dumbbell size={14} />
              <span>Tabla Universal Cargas</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('guide')}
              style={{
                background: activeTab === 'guide' ? 'var(--accent, #0a84ff)' : 'transparent',
                color: activeTab === 'guide' ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'guide' ? 700 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <BookOpen size={14} />
              <span>Guía por Ejercicio</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('history')}
              style={{
                background: activeTab === 'history' ? 'var(--accent, #0a84ff)' : 'transparent',
                color: activeTab === 'history' ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'history' ? 700 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <History size={14} />
              <span>Historial</span>
            </button>
          </div>
        </div>

        {/* 1. SUB-PESTAÑA: RENDIMIENTO GLOBAL & TENDENCIAS SVG */}
        {activeTab === 'analytics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <AnalyticsChart />

            {/* RESUMEN DE VOLUMEN ACUMULADO POR GRUPO MUSCULAR */}
            <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                Volumen Acumulado por Grupo Muscular (Histórico)
              </span>

              {muscleVolume.length === 0 ? (
                <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
                  Completa tus primeras sesiones para visualizar el desglose automático por grupo muscular.
                </span>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
                  {muscleVolume.map((mv) => (
                    <div key={mv.muscleGroup} style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.06))', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>{mv.muscleGroup}</span>
                      <strong style={{ fontSize: '0.88rem', color: 'var(--accent, #0a84ff)' }}>{mv.totalSets} series ({mv.totalVolumeKg} kg)</strong>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. SUB-PESTAÑA: ANALÍTICA DEL PROGRAMA ACTIVO */}
        {activeTab === 'program' && <ProgramAnalytics />}

        {/* 3. SUB-PESTAÑA: TABLA UNIVERSAL DE CARGAS */}
        {activeTab === 'loading' && <LoadingCharts />}

        {/* 4. SUB-PESTAÑA: GUÍA POR EJERCICIO Y ZONAS 1RM */}
        {activeTab === 'guide' && <ExerciseGuide />}

        {/* 5. SUB-PESTAÑA: HISTORIAL COMPLETO */}
        {activeTab === 'history' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {totalSessions === 0 ? (
              <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-lg)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <Calendar size={24} style={{ color: 'var(--text-tertiary)', marginBottom: '8px' }} />
                <h4 style={{ margin: '0 0 4px', color: 'var(--text-primary)' }}>Sin sesiones registradas aún</h4>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>Las rutinas completadas en el Logger de Hoy se guardarán automáticamente aquí.</p>
              </div>
            ) : (
              sessions.map((s, idx) => (
                <div
                  key={s.sessionId || idx}
                  style={{
                    background: 'var(--surface-1, #0d0d0f)',
                    border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
                    borderRadius: 'var(--radius-m, 12px)',
                    padding: '14px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                      {s.routineTitle || 'Sesión de Entrenamiento'}
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginTop: '2px' }}>
                      {s.dateIso || 'Fecha reciente'} · Duración: {s.durationMinutes || 45} min
                    </span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--success, #30d158)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={14} /> Completada
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
