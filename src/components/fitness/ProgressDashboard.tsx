import React, { useState, useEffect, useMemo } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import {
  calculateMuscleVolumeFromLogs,
  loggedWorkoutToSessionLog,
  type SessionLog,
  type LoggedWorkout
} from '../../lib/fitness/volumeStats';
import { type FlatLogEntry } from '../../lib/fitness/analyticsUtils';
import { startOfWeek, parseEsShortDate } from '../../lib/fitness/programCalendar';
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
  const [sessions, setSessions] = useState<LoggedWorkout[]>([]);

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

  // B8: flatLog SOLO desde series reales loggeadas (exercises[].completedSets).
  // Antes se fabricaban pesos por defecto (60kg × 8 reps) — eliminado.
  const flatLog: FlatLogEntry[] = useMemo(() => {
    const list: FlatLogEntry[] = [];
    sessions.forEach((s: any) => {
      if (Array.isArray(s.exercises)) {
        s.exercises.forEach((ex: any) => {
          const sets = Array.isArray(ex.completedSets) ? ex.completedSets : [];
          sets.forEach((set: any) => {
            const weight = Number(set?.weight) || 0;
            const reps = Number(set?.reps) || 0;
            if (weight > 0 && reps > 0) {
              list.push({
                // La fecha display del logger ("vie 22 ago") es la etiqueta real
                // de sesión; sirve de bucket honesto para el gráfico.
                weekId: s.date || 'Sesión',
                dayId: s.date || 'Sesión',
                exName: ex.name || 'Ejercicio',
                timestamp: s.date || '',
                weight,
                reps
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

  // B8: volumen muscular desde el historial real vía adaptador (sin inventar grupos)
  const muscleVolume = useMemo(
    () => calculateMuscleVolumeFromLogs(sessions.map((w) => loggedWorkoutToSessionLog(w))),
    [sessions]
  );

  // B8: adherencia REAL = sesiones completadas esta semana real / 5 días de entreno.
  // El logger guarda fecha display es-ES ("vie 22 ago"): se parsea y se casa con
  // los 7 días de la semana real actual. Lo que no se puede datar NO cuenta
  // (antes aquí había un % decorativo inventado).
  const sessionsThisWeek = useMemo(() => {
    const monday = startOfWeek(new Date());
    const weekDates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(d.getDate() + i);
      return { day: d.getDate(), month: d.getMonth() };
    });
    return sessions.filter((s: any) => {
      const parsed = parseEsShortDate(s.date);
      if (!parsed) return false;
      return weekDates.some((wd) => wd.day === parsed.day && wd.month === parsed.monthIdx);
    }).length;
  }, [sessions]);
  const adherenceReal = `${sessionsThisWeek}/5`;

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--text-primary)' }}>
        
        {/* NAVEGACIÓN NIVEL 2 (SUBMENÚ 1: STICKY 62px) */}        {/* TÍTULO PRINCIPAL (DESAPARECE AL SCROLLEAR) */}
        {/* NAVEGACIÓN NIVEL 3: SUB-PESTAÑAS DE PROGRESO (APPLE CLEAN TAB BAR) */}
        <div style={{
          display: 'flex',
          gap: '6px',
          paddingBottom: '6px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          <button
            type="button"
            onClick={() => setActiveTab('analytics')}
            style={{
              background: activeTab === 'analytics' ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: activeTab === 'analytics' ? '#ffffff' : 'rgba(255,255,255,0.55)',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.84rem',
              fontWeight: activeTab === 'analytics' ? 600 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)'
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
              color: activeTab === 'program' ? '#ffffff' : 'rgba(255,255,255,0.55)',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.84rem',
              fontWeight: activeTab === 'program' ? 600 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)'
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
              color: activeTab === 'loading' ? '#ffffff' : 'rgba(255,255,255,0.55)',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.84rem',
              fontWeight: activeTab === 'loading' ? 600 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)'
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
              color: activeTab === 'guide' ? '#ffffff' : 'rgba(255,255,255,0.55)',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.84rem',
              fontWeight: activeTab === 'guide' ? 600 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)'
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
              color: activeTab === 'history' ? '#ffffff' : 'rgba(255,255,255,0.55)',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.84rem',
              fontWeight: activeTab === 'history' ? 600 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <History size={14} />
            <span>Historial ({totalSessions})</span>
          </button>
        </div>

        {/* 1. SUB-PESTAÑA: RENDIMIENTO GLOBAL & TENDENCIAS SVG */}
        {activeTab === 'analytics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {/* BARRA DESTACADA DE OVERALL PERFORMANCE & PROGRESS */}
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-soft), var(--success-soft))',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
              borderRadius: '16px',
              padding: '18px 22px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(10,132,255,0.2)', display: 'grid', placeItems: 'center', color: 'var(--accent)' }}>
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
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(48,209,88,0.2)', display: 'grid', placeItems: 'center', color: 'var(--success)' }}>
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
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,159,10,0.2)', display: 'grid', placeItems: 'center', color: 'var(--warning)' }}>
                  <Zap size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Adherencia Semanal (real)</span>
                  <strong style={{ fontSize: '1.4rem', display: 'block', color: 'var(--text-primary)' }}>
                    {totalSessions > 0 ? `${adherenceReal} sesiones` : 'Pendiente: logger'}
                  </strong>
                </div>
              </div>
            </div>

            <AnalyticsChart flatLog={flatLog} />

            {/* RESUMEN DE VOLUMEN ACUMULADO POR GRUPO MUSCULAR */}
            <div style={{ background: 'var(--surface-1)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                      <strong style={{ fontSize: '0.88rem', color: 'var(--accent)' }}>{mv.totalSets} series ({mv.totalVolumeKg} kg)</strong>
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
              <div style={{ background: 'var(--surface-1)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-lg)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <History size={24} style={{ color: 'var(--text-tertiary)', marginBottom: '8px' }} />
                <h4 style={{ margin: '0 0 4px', color: 'var(--text-primary)' }}>Sin sesiones registradas aún</h4>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>Las rutinas completadas en Hoy se guardarán automáticamente aquí.</p>
              </div>
            ) : (
              sessions.map((s: any, idx: number) => (
                <div
                  key={s.sessionId || idx}
                  style={{
                    background: 'var(--surface-1)',
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
                    <span style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--accent)' }}>
                      {s.totalVolumeKg ? `${s.totalVolumeKg} kg` : ''}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--success)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
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
