// src/components/fitness/analytics/RealProgressSections.tsx
// B8 (AG-FIT): progreso REAL del usuario. Regla dura del bloque:
// ningún número sin fuente — lo que no tiene datos reales detrás se pinta
// como tarjeta "Pendiente: logger" en tono apagado.
//
// Fuentes REALES leídas (READ-only):
// - activeProgramStore (fitapp-active-program-v1): programas activos,
//   startedAt, postponedDays -> semana derivada via programCalendar (B1).
// - localStorage fitapp_workout_history: sesiones completadas del logger
//   (CompletedWorkout con completedSets reales).
// - localStorage fitapp_log_day_1..5: series marcadas en el tracker de Hoy
//   (min-max).
// - volumeStats (adaptadores B8) y loadCalculator (carga objetivo desde PR).
import React, { useEffect, useMemo, useState } from 'react';
import {
  useActiveProgramStore
} from '../../../data/fitness/activeProgramStore';
import { getProgramById } from '../../../data/fitness/programs';
import { findExerciseMatches } from '../../../data/exercises';
import {
  buildProgramCalendar,
  DAY_SHORT,
  formatDateShort,
  parseEsShortDate,
  workoutDayLabel
} from '../../../lib/fitness/programCalendar';
import {
  calculateMuscleVolumeFromLogs,
  loggedWorkoutToSessionLog,
  exerciseRecordsFromLogs,
  type LoggedWorkout,
  type SessionLog
} from '../../../lib/fitness/volumeStats';
import { calculatePlatesAndLoad } from '../../../lib/fitness/loadCalculator';
import { CalendarCheck, ClipboardList, Hourglass, Trophy, Dumbbell } from 'lucide-react';

const HISTORY_KEY = 'fitapp_workout_history';

/** Grupo muscular real del ejercicio desde la base de datos (o 'General'). */
function resolveMuscleGroup(exerciseName: string): string | undefined {
  const matches = findExerciseMatches(exerciseName, 1);
  const entry = matches[0];
  const muscle = entry?.muscles?.strength?.[0];
  return muscle || undefined;
}

function PendingLoggerCard({ label }: { label: string }) {
  return (
    <div
      className="ds-row"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px dashed var(--color-border-visible)',
        borderRadius: 'var(--radius-m)',
        padding: '14px var(--space-4)',
        gap: '10px',
        opacity: 0.75
      }}
    >
      <Hourglass size={18} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
      <div>
        <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block' }}>
          Pendiente: logger
        </span>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
          {label}
        </span>
      </div>
    </div>
  );
}

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '0.78rem',
  fontWeight: 700,
  color: 'var(--text-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.4px',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-2)'
};

export default function RealProgressSections() {
  // READ del store persistido (no se muta nada aquí)
  const activeProgramIds = useActiveProgramStore((s) => s.activeProgramIds);
  const inspectedProgramId = useActiveProgramStore((s) => s.programId);
  const startedAt = useActiveProgramStore((s) => s.startedAt);
  const postponedDays = useActiveProgramStore((s) => s.postponedDays);

  const [history, setHistory] = useState<LoggedWorkout[] | null>(null);
  const [dayTrackerSets, setDayTrackerSets] = useState<number[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setHistory(Array.isArray(parsed) ? parsed : []);
    } catch {
      setHistory([]);
    }
    // Series marcadas en los trackers de Hoy (fitapp_log_day_1..5, min-max)
    const donePerDay: number[] = [];
    for (let dayIdx = 1; dayIdx <= 5; dayIdx++) {
      try {
        const raw = localStorage.getItem(`fitapp_log_day_${dayIdx}`);
        const parsed = raw ? JSON.parse(raw) : {};
        donePerDay.push(
          Object.values(parsed).filter(Boolean).length
        );
      } catch {
        donePerDay.push(0);
      }
    }
    setDayTrackerSets(donePerDay);
  }, []);

  // --- Calendario real del programa inspeccionado (B1: startedAt + postergaciones)
  const calendarProgram = getProgramById(inspectedProgramId);
  const calendar = useMemo(
    () =>
      buildProgramCalendar(
        { startedAt, postponedDays },
        calendarProgram?.durationWeeks || 12
      ),
    [startedAt, postponedDays, calendarProgram?.durationWeeks]
  );

  // --- Sesiones de la semana real actual (fechas del logger parseadas, sin inventar)
  const sessionsThisWeek = useMemo(() => {
    if (!history) return [];
    return history.filter((w) => {
      const parsed = parseEsShortDate(w.date);
      if (!parsed) return false;
      return calendar.weekDays.some(
        (d) => d.date.getDate() === parsed.day && d.date.getMonth() === parsed.monthIdx
      );
    });
  }, [history, calendar.weekDays]);

  const trackerSetsTotal = dayTrackerSets.reduce((a, b) => a + b, 0);

  // --- Histórico y stats reales (volumeStats B8)
  const sessionLogs: SessionLog[] = useMemo(
    () => (history || []).map((w) => loggedWorkoutToSessionLog(w, resolveMuscleGroup)),
    [history]
  );
  const totalSessions = history?.length ?? 0;
  const totalVolumeKg = useMemo(
    () => (history || []).reduce((acc, w) => acc + (Number(w.totalVolumeKg) || 0), 0),
    [history]
  );
  const avgDuration = totalSessions > 0
    ? Math.round((history || []).reduce((a, w) => a + (w.durationMinutes || 0), 0) / totalSessions)
    : 0;
  const muscleVolume = useMemo(() => calculateMuscleVolumeFromLogs(sessionLogs), [sessionLogs]);

  // --- Récords reales + carga objetivo del mejor levantamiento (loadCalculator)
  const records = useMemo(() => exerciseRecordsFromLogs(sessionLogs), [sessionLogs]);
  const topRecord = records[0];
  const suggestedLoad = topRecord
    ? calculatePlatesAndLoad(topRecord.bestE1rmKg, 8, 20)
    : null;

  const hasHistory = totalSessions > 0;
  const dataLoaded = history !== null;

  return (
    <div className="ds-stack">
      {/* ===================== PROGRAMAS ACTIVOS ===================== */}
      <section className="ds-card ds-stack-sm" style={{ gap: 'var(--space-3)' }}>
        <span style={sectionTitleStyle}>
          <Dumbbell size={14} /> Programas activos ({activeProgramIds.length})
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '10px' }}>
          {activeProgramIds.map((pid) => {
            const program = getProgramById(pid);
            const title = (program.title || program.name || pid).replace(/\s*\([^)]*\)/g, '').trim();
            const isInspected = pid === inspectedProgramId;
            return (
              <div
                key={pid}
                style={{
                  background: isInspected ? 'var(--accent-soft)' : 'rgba(255,255,255,0.02)',
                  border: isInspected ? '1px solid var(--accent-border)' : '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-m)',
                  padding: '10px var(--space-3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <strong style={{ fontSize: '0.86rem', color: 'var(--text-primary)' }}>{title}</strong>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  {program.durationWeeks} sem · {program.discipline}
                </span>
              </div>
            );
          })}
        </div>
        <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>
          Arranque {calendar.programStartMonday.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })} · Semana derivada {calendar.derivedWeek} (postergaciones: {postponedDays})
        </span>
      </section>

      {/* ===================== SEMANA ACTUAL ===================== */}
      <section className="ds-card ds-stack-sm" style={{ gap: 'var(--space-3)' }}>
        <span style={sectionTitleStyle}>
          <CalendarCheck size={14} /> Semana actual (calendario real)
        </span>

        {/* Grid L-D con fechas reales y estado de hoy */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
          {calendar.weekDays.map((d, idx) => {
            const isToday = d.date.toDateString() === calendar.today.toDateString();
            const doneToday =
              isToday &&
              sessionsThisWeek.some((w) => {
                const p = parseEsShortDate(w.date);
                return p && p.day === d.date.getDate() && p.monthIdx === d.date.getMonth();
              });
            return (
              <div
                key={idx}
                style={{
                  background: doneToday
                    ? 'var(--success-soft)'
                    : isToday
                      ? 'var(--accent-soft)'
                      : 'rgba(255,255,255,0.02)',
                  border: isToday
                    ? '1px solid var(--accent-border)'
                    : '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-s)',
                  padding: 'var(--space-2) 4px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px',
                  minHeight: '58px'
                }}
              >
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  {DAY_SHORT[idx]}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                  {formatDateShort(d.date)}
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    color: doneToday
                      ? 'var(--success)'
                      : d.isTrainingDay
                        ? 'var(--text-tertiary)'
                        : 'var(--text-tertiary)',
                    opacity: d.isTrainingDay ? 0.9 : 0.55
                  }}
                >
                  {doneToday ? 'Hecho' : d.isTrainingDay ? workoutDayLabel(d.workoutDayIndex) : 'Descanso'}
                </span>
              </div>
            );
          })}
        </div>

        {dataLoaded ? (
          hasHistory ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Sesiones completadas esta semana:{' '}
                <strong style={{ color: 'var(--text-primary)' }}>{sessionsThisWeek.length}</strong>
                {sessionsThisWeek.map((w) => w.routineTitle || 'Sesión').length > 0 && (
                  <span style={{ color: 'var(--text-tertiary)' }}>
                    {' '}({sessionsThisWeek.map((w) => w.routineTitle || 'Sesión').join(' · ')})
                  </span>
                )}
              </span>
              {trackerSetsTotal > 0 && (
                <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                  Tracker de Hoy (min-max): {trackerSetsTotal} series marcadas en total.
                </span>
              )}
            </div>
          ) : (
            <PendingLoggerCard label="Completa una sesión en Hoy para registrar días completados y adherencia real." />
          )
        ) : (
          <PendingLoggerCard label="Leyendo historial local…" />
        )}
      </section>

      {/* ===================== HISTÓRICO ===================== */}
      <section className="ds-card ds-stack-sm" style={{ gap: 'var(--space-3)' }}>
        <span style={sectionTitleStyle}>
          <ClipboardList size={14} /> Histórico (sesiones del logger)
        </span>
        {dataLoaded && hasHistory ? (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
              <div className="ds-stat">
                <span className="ds-stat-label">Sesiones</span>
                <strong className="ds-stat-value" style={{ fontSize: '1.3rem', display: 'block' }}>{totalSessions}</strong>
              </div>
              <div className="ds-stat">
                <span className="ds-stat-label">Volumen total</span>
                <strong className="ds-stat-value" style={{ fontSize: '1.3rem', display: 'block' }}>{totalVolumeKg.toLocaleString('es-ES')} kg</strong>
              </div>
              <div className="ds-stat">
                <span className="ds-stat-label">Duración media</span>
                <strong className="ds-stat-value" style={{ fontSize: '1.3rem', display: 'block' }}>{avgDuration} min</strong>
              </div>
            </div>

            {muscleVolume.length > 0 && (
              <div className="ds-row-wrap" style={{ gap: '6px' }}>
                {muscleVolume.map((mv) => (
                  <span
                    key={mv.muscleGroup}
                    className="ds-badge ds-badge-accent"
                  >
                    {mv.muscleGroup}: {mv.totalSets} series · {Math.round(mv.totalVolumeKg).toLocaleString('es-ES')} kg
                  </span>
                ))}
              </div>
            )}
          </>
        ) : dataLoaded ? (
          <PendingLoggerCard label="El histórico (volumen, duración, músculos) se construye con sesiones reales completadas en Hoy." />
        ) : (
          <PendingLoggerCard label="Leyendo historial local…" />
        )}
      </section>

      {/* ===================== RÉCORDS ===================== */}
      <section className="ds-card ds-stack-sm" style={{ gap: 'var(--space-3)' }}>
        <span style={sectionTitleStyle}>
          <Trophy size={14} /> Récords (PRs reales por ejercicio)
        </span>
        {dataLoaded && records.length > 0 ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {records.slice(0, 5).map((r, idx) => (
                <div
                  key={r.exerciseName}
                  className="ds-row-between"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-s)',
                    padding: 'var(--space-2) var(--space-3)'
                  }}
                >
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: idx === 0 ? 700 : 500 }}>
                    {idx === 0 && '🥇 '}{r.exerciseName}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    PR <strong style={{ color: 'var(--accent)' }}>{r.maxWeightKg} kg</strong> · mejor serie {r.bestSet.weightKg} kg × {r.bestSet.reps} · e1RM ≈ {Math.round(r.bestE1rmKg)} kg
                  </span>
                </div>
              ))}
            </div>

            {suggestedLoad && topRecord && (
              <div
                style={{
                  background: 'var(--accent-soft)',
                  border: '1px solid var(--accent-border)',
                  borderRadius: 'var(--radius-m)',
                  padding: '10px var(--space-3)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <strong style={{ color: 'var(--accent)' }}>{topRecord.exerciseName}</strong> — carga objetivo RPE 8 desde tu e1RM:{' '}
                <strong style={{ color: 'var(--text-primary)' }}>{suggestedLoad.targetWeightKg} kg</strong>
                {suggestedLoad.platesPerSide.length > 0 && (
                  <span>
                    {' '}({suggestedLoad.platesPerSide.map((p) => `${p.countPerSide}×${p.plateKg}kg`).join(' + ')} por lado)
                  </span>
                )}
              </div>
            )}
          </>
        ) : dataLoaded ? (
          <PendingLoggerCard label="Los PRs y la carga objetivo (loadCalculator) necesitan series con carga registrada en el logger." />
        ) : (
          <PendingLoggerCard label="Leyendo historial local…" />
        )}
      </section>
    </div>
  );
}
