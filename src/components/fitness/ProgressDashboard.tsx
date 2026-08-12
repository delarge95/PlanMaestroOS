import React, { useState, useEffect, useMemo } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { calculateMuscleVolumeFromLogs, type SessionLog } from '../../lib/fitness/volumeStats';
import { type FlatLogEntry } from '../../lib/fitness/analyticsUtils';
import AnalyticsChart from './analytics/AnalyticsChart';
import ProgramAnalytics from './analytics/ProgramAnalytics';
import LoadingCharts from './analytics/LoadingCharts';
import ExerciseGuide from './analytics/ExerciseGuide';
import { History, BarChart2, Dumbbell, Target, BookOpen, CheckCircle2, TrendingUp, Award, Zap } from 'lucide-react';
import SectionNav from '../ui/SectionNav';

export interface ProgressDashboardProps {
  currentPath?: string;
}

export default function ProgressDashboard({ currentPath = '/app/fitness/progress' }: ProgressDashboardProps) {
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

  // Transformar sesiones guardadas en un FlatLogEntry[] plano para alimentarlo en AnalyticsChart
  const flatLog: FlatLogEntry[] = useMemo(() => {
    const list: FlatLogEntry[] = [];
    sessions.forEach((s: any, sIdx: number) => {
      const weekId = `Semana ${Math.floor(sIdx / 5) + 1}`;
      const dayId = `Día ${(sIdx % 5) + 1}`;

      if (Array.isArray(s.exercises)) {
        s.exercises.forEach((ex: any) => {
          const exName = ex.name || 'Ejercicio';
          const weights = Array.isArray(ex.weights) ? ex.weights : [60, 60, 60];
          weights.forEach((w: any) => {
            const wNum = Number(w) || 0;
            if (wNum > 0) {
              list.push({
                weekId,
                dayId,
                exName,
                timestamp: s.dateIso,
                weight: wNum,
                reps: 8
              });
            }
          });
        });
      }
    });
    return list;
  }, [sessions]);

  const totalSessions = sessions.length;
  const totalVolumeKg = useMemo(() => {
    return sessions.reduce((acc, s: any) => acc + (s.totalVolumeKg || 0), 0);
  }, [sessions]);

  const muscleVolume = calculateMuscleVolumeFromLogs(sessions);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--text-primary)' }}>
        
        {/* NAVEGACIÓN NIVEL 2 (SUBMENÚ 1: STICKY 62px) */}
        <SectionNav sectionKey="fitness" currentPath={currentPath} level={2} />

        {/* TÍTULO PRINCIPAL (DESAPARECE AL SCROLLEAR) */}
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '4px 0 12px 0', color: '#ffffff', letterSpacing: '-0.02em' }}>
          Progreso & Analítica de Cargas
        </h1>

        {/* BARRA DESTACADA DE OVERALL PERFORMANCE & PROGRESS */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(10,132,255,0.12), rgba(48,209,88,0.12))',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
          borderRadius: '16px',
          padding: '18px 22px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(10,132,255,0.2)', display: 'grid', placeItems: 'center', color: 'var(--accent, #0a84ff)' }}>
              <TrendingUp size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Overall Progress</span>
              <strong style={{ fontSize: '1.4rem', display: 'block', color: 'var(--text-primary)' }}>
                {totalSessions > 0 ? `${totalSessions} Sesiones Registradas` : 'Listo para iniciar'}
              </strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(48,209,88,0.2)', display: 'grid', placeItems: 'center', color: 'var(--success, #30d158)' }}>
              <Award size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Volumen Total Acumulado</span>
              <strong style={{ fontSize: '1.4rem', display: 'block', color: 'var(--text-primary)' }}>
                {totalVolumeKg > 0 ? `${totalVolumeKg.toLocaleString()} kg` : '0 kg'}
              </strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,159,10,0.2)', display: 'grid', placeItems: 'center', color: '#ff9f0a' }}>
              <Zap size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Adherencia de Trabajo</span>
              <strong style={{ fontSize: '1.4rem', display: 'block', color: 'var(--text-primary)' }}>
                {totalSessions > 0 ? `${Math.min(100, Math.round((totalSessions / (totalSessions + 1)) * 100))}%` : '100%'}
              </strong>
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN NIVEL 3 (SUBMENÚ 2: STICKY 116px - SUB-PESTAÑAS DE PROGRESO) */}
        <div style={{
          position: 'sticky',
          top: '116px',
          zIndex: 90,
          background: 'rgba(13, 14, 18, 0.92)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          borderRadius: '12px',
          padding: '6px',
          display: 'flex',
          gap: '4px',
          flexWrap: 'wrap',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
        }}>
          <button
            type="button"
            onClick={() => setActiveTab('analytics')}
            style={{
              background: activeTab === 'analytics' ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: activeTab === 'analytics' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'analytics' ? '1px solid rgba(255,255,255,0.16)' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: activeTab === 'analytics' ? 700 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms ease'
            }}
          >
            <BarChart2 size={14} />
            <span>Rendimiento Global</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('program')}
            style={{
              background: activeTab === 'program' ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: activeTab === 'program' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'program' ? '1px solid rgba(255,255,255,0.16)' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: activeTab === 'program' ? 700 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms ease'
            }}
          >
            <Target size={14} />
            <span>Programa Activo</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('loading')}
            style={{
              background: activeTab === 'loading' ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: activeTab === 'loading' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'loading' ? '1px solid rgba(255,255,255,0.16)' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: activeTab === 'loading' ? 700 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms ease'
            }}
          >
            <Dumbbell size={14} />
            <span>Tabla Universal Cargas</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            style={{
              background: activeTab === 'guide' ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: activeTab === 'guide' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'guide' ? '1px solid rgba(255,255,255,0.16)' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: activeTab === 'guide' ? 700 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms ease'
            }}
          >
            <BookOpen size={14} />
            <span>Guía por Ejercicio</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('history')}
            style={{
              background: activeTab === 'history' ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: activeTab === 'history' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'history' ? '1px solid rgba(255,255,255,0.16)' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: activeTab === 'history' ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 150ms ease'
            }}
          >
            <History size={14} />
            <span>Historial ({totalSessions})</span>
          </button>
        </div>

        {/* 1. SUB-PESTAÑA: RENDIMIENTO GLOBAL & TENDENCIAS SVG */}
        {activeTab === 'analytics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <AnalyticsChart flatLog={flatLog} />

            {/* RESUMEN DE VOLUMEN ACUMULADO POR GRUPO MUSCULAR */}
            <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                Volumen Acumulado por Grupo Muscular (Histórico)
              </span>

              {muscleVolume.length === 0 ? (
                <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
                  Completa tus primeras sesiones en la pestaña Hoy para visualizar el desglose por grupo muscular.
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
                <History size={24} style={{ color: 'var(--text-tertiary)', marginBottom: '8px' }} />
                <h4 style={{ margin: '0 0 4px', color: 'var(--text-primary)' }}>Sin sesiones registradas aún</h4>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>Las rutinas completadas en Hoy se guardarán automáticamente aquí.</p>
              </div>
            ) : (
              sessions.map((s: any, idx: number) => (
                <div
                  key={s.sessionId || idx}
                  style={{
                    background: 'var(--surface-1, #0d0d0f)',
                    border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
                    borderRadius: 'var(--radius-m, 12px)',
                    padding: '14px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.94rem', color: 'var(--text-primary)', display: 'block' }}>
                      {s.routineTitle || 'Sesión de Entrenamiento'}
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px', display: 'block' }}>
                      {s.dateIso ? new Date(s.dateIso).toLocaleDateString('es-ES', { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) : 'Fecha reciente'} · Duración: {s.durationMinutes || 45} min
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--accent, #0a84ff)' }}>
                      {s.totalVolumeKg ? `${s.totalVolumeKg} kg` : ''}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--success, #30d158)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={14} /> Completada
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
