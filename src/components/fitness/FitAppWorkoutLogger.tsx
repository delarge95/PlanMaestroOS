import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';
import ExerciseModal from './ExerciseModal';
import { useAppStore } from '../../store/appStore';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { allPrograms, getProgramById } from '../../data/fitness/programs';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';
import type { EnergyLevel } from '../../data/canonicalDomainModel';

interface LoggedSet {
  setNum: number;
  weight: number;
  reps: number;
  rpe: number;
  completed: boolean;
}

export interface CompletedWorkout {
  id: string;
  date: string;
  programId?: string;
  week?: number;
  dayId?: string;
  routineTitle: string;
  durationMinutes: number;
  totalVolumeKg: number;
  exercises: {
    prescriptionId?: string;
    prescribedExerciseId?: string;
    performedExerciseId?: string;
    name: string;
    overrideActive?: boolean;
    completedSets: { weight: number; reps: number; rpe: number }[];
  }[];
}

const DEFAULT_ROUTINES = [
  {
    title: 'Día 1 AM: Empuje Min-Max (Pecho, Hombro, Tríceps)',
    program: 'Min-Max Nippard + Calistenia Anillas (Fase AM)',
    exercises: [
      { name: 'Pseudo Planche Pushups / Fondos en Anillas', target: '3 series × 6-10 reps • RPE 8-9', restSec: 120 },
      { name: 'Incline Dumbbell Press', target: '3 series × 6-10 reps • RPE 8-9', restSec: 120 },
      { name: 'Pike Pushups / Shoulder Press', target: '3 series × 6-8 reps • RPE 8-9', restSec: 120 },
      { name: 'Cable Lateral Raise', target: '3 series × 10-15 reps • RPE 9-10', restSec: 90 },
      { name: '1-Arm Cable Overhead Triceps Extension', target: '3 series × 10-12 reps • RPE 9', restSec: 90 }
    ]
  }
];

export default function FitAppWorkoutLogger() {
  const setCurrentEnergy = useAppStore((s) => s.setCurrentEnergy);

  // Active program store
  const activeProgramIds = useActiveProgramStore((s) => s.activeProgramIds || [s.programId]);
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const currentDayId = useActiveProgramStore((s) => s.currentDayId);
  const overrides = useActiveProgramStore((s) => s.selectedExerciseOverrides);
  const setWeek = useActiveProgramStore((s) => s.setWeek);
  const setDay = useActiveProgramStore((s) => s.setDay);

  // Programs currently active in tracker
  const activeTrackerPrograms = allPrograms.filter((p) => activeProgramIds.includes(p.id));
  const explorerPrograms = activeTrackerPrograms;

  // For the live logger tab, user can pick which active program to train
  const [activeLoggerProgramId, setActiveLoggerProgramId] = useState<string>(() => activeProgramIds[0] || 'min-max');
  // Keep it in sync if activeProgramIds changes
  React.useEffect(() => {
    if (!activeProgramIds.includes(activeLoggerProgramId)) {
      setActiveLoggerProgramId(activeProgramIds[0] || 'min-max');
    }
  }, [activeProgramIds.join(',')]);

  const officialProgram = getProgramById(activeLoggerProgramId);
  const safeWeekIdx = Math.min(Math.max(currentWeek - 1, 0), (officialProgram.weeks?.length || 1) - 1);
  const activeWeek = officialProgram.weeks?.[safeWeekIdx] || officialProgram.weeks?.[0];
  const activeDay = activeWeek?.days?.find((d) => d.id === currentDayId) || activeWeek?.days?.[0];

  const [useCustomRoutine] = useState(false);
  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [activeTab, setActiveTab] = useState<'logger' | 'explorer' | 'historial'>('logger');
  const [perceivedEnergy, setPerceivedEnergy] = useState<EnergyLevel>('medium');

  // Active workout logs per exercise
  const [exerciseLogs, setExerciseLogs] = useState<Record<string, LoggedSet[]>>({});

  // Rest Timer state
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [initialTimerSec, setInitialTimerSec] = useState(90);

  // Modal exercise view
  const [modalExercise, setModalExercise] = useState<ExerciseEntry | null>(null);

  // History log
  const [history, setHistory] = useState<CompletedWorkout[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('fitapp_workout_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Timer loop for active session duration
  useEffect(() => {
    let interval: any = null;
    if (isSessionActive && sessionStartTime) {
      interval = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - sessionStartTime) / 1000));
      }, 1000);
    } else {
      setElapsedSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isSessionActive, sessionStartTime]);

  // Timer loop for Rest Timer
  useEffect(() => {
    let timerInterval: any = null;
    if (timerActive && timerSeconds !== null && timerSeconds > 0) {
      timerInterval = setInterval(() => {
        setTimerSeconds((prev) => (prev !== null && prev > 1 ? prev - 1 : 0));
      }, 1000);
    } else if (timerSeconds === 0 && timerActive) {
      setTimerActive(false);
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.value = 587.33;
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } catch (e) {
        // ignore
      }
    }
    return () => clearInterval(timerInterval);
  }, [timerActive, timerSeconds]);

  // Start active workout from official program or custom routine
  const handleStartWorkout = () => {
    setIsSessionActive(true);
    setSessionStartTime(Date.now());
    const initialLogs: Record<string, LoggedSet[]> = {};

    if (!useCustomRoutine && activeDay) {
      activeDay.exercises.forEach((prescription) => {
        const pId = prescription.id;
        const overrideId = pId ? overrides[pId] : undefined;
        const effectiveId = overrideId || prescription.exerciseId;
        const details = getExerciseDetails(effectiveId);
        const setNumCount = typeof prescription.workingSets === 'number' ? prescription.workingSets : 3;

        initialLogs[details.name] = Array.from({ length: setNumCount }, (_, idx) => ({
          setNum: idx + 1,
          weight: 0,
          reps: 10,
          rpe: 8,
          completed: false
        }));
      });
    } else {
      const activeRoutine = DEFAULT_ROUTINES[selectedRoutineIndex];
      activeRoutine?.exercises.forEach((ex) => {
        initialLogs[ex.name] = [
          { setNum: 1, weight: 0, reps: 10, rpe: 8, completed: false },
          { setNum: 2, weight: 0, reps: 10, rpe: 8, completed: false },
          { setNum: 3, weight: 0, reps: 10, rpe: 8, completed: false }
        ];
      });
    }
    setExerciseLogs(initialLogs);
  };

  const handleToggleSet = (exName: string, setIdx: number, defaultRestSec: number) => {
    setExerciseLogs((prev) => {
      const existingSets = prev[exName] ? [...prev[exName]] : [
        { setNum: 1, weight: 0, reps: 10, rpe: 8, completed: false },
        { setNum: 2, weight: 0, reps: 10, rpe: 8, completed: false },
        { setNum: 3, weight: 0, reps: 10, rpe: 8, completed: false }
      ];
      if (!existingSets[setIdx]) {
        existingSets[setIdx] = { setNum: setIdx + 1, weight: 0, reps: 10, rpe: 8, completed: false };
      }
      const isNowCompleted = !existingSets[setIdx].completed;
      existingSets[setIdx] = { ...existingSets[setIdx], completed: isNowCompleted };

      if (isNowCompleted) {
        startRestTimer(defaultRestSec);
      }

      return { ...prev, [exName]: existingSets };
    });
  };

  const handleUpdateSetField = (exName: string, setIdx: number, field: keyof LoggedSet, value: any) => {
    setExerciseLogs((prev) => {
      const existingSets = prev[exName] ? [...prev[exName]] : [
        { setNum: 1, weight: 0, reps: 10, rpe: 8, completed: false },
        { setNum: 2, weight: 0, reps: 10, rpe: 8, completed: false },
        { setNum: 3, weight: 0, reps: 10, rpe: 8, completed: false }
      ];
      if (!existingSets[setIdx]) {
        existingSets[setIdx] = { setNum: setIdx + 1, weight: 0, reps: 10, rpe: 8, completed: false };
      }
      existingSets[setIdx] = { ...existingSets[setIdx], [field]: value };
      return { ...prev, [exName]: existingSets };
    });
  };

  const handleAddSet = (exName: string) => {
    setExerciseLogs((prev) => {
      const currentSets = [...(prev[exName] || [])];
      const nextNum = currentSets.length + 1;
      const lastSet = currentSets[currentSets.length - 1] || { weight: 0, reps: 10, rpe: 8 };
      currentSets.push({
        setNum: nextNum,
        weight: lastSet.weight,
        reps: lastSet.reps,
        rpe: lastSet.rpe,
        completed: false
      });
      return { ...prev, [exName]: currentSets };
    });
  };

  const startRestTimer = (seconds: number) => {
    setInitialTimerSec(seconds);
    setTimerSeconds(seconds);
    setTimerActive(true);
  };

  const handleFinishWorkout = () => {
    let totalVolume = 0;
    const completedExercises: any[] = [];

    Object.entries(exerciseLogs).forEach(([name, sets]) => {
      const doneSets = sets.filter((s) => s.completed);
      if (doneSets.length > 0) {
        doneSets.forEach((s) => {
          totalVolume += (s.weight || 0) * (s.reps || 0);
        });

        // Find prescription if coming from official program
        const matchingPrescription = activeDay?.exercises.find((p) => {
          const pId = p.id;
          const overrideId = pId ? overrides[pId] : undefined;
          const effectiveId = overrideId || p.exerciseId;
          return getExerciseDetails(effectiveId).name === name;
        });

        const effectiveDetails = findExerciseByName(name);
        const matchPId = matchingPrescription?.id;
        const performedId = matchPId ? (overrides[matchPId] || matchingPrescription.exerciseId) : (effectiveDetails?.name || name);

        completedExercises.push({
          prescriptionId: matchPId,
          prescribedExerciseId: matchingPrescription?.exerciseId || effectiveDetails?.name || name,
          performedExerciseId: performedId,
          name,
          overrideActive: matchPId ? Boolean(overrides[matchPId]) : false,
          completedSets: doneSets.map((s) => ({ weight: s.weight, reps: s.reps, rpe: s.rpe }))
        });
      }
    });

    const activeTitle = !useCustomRoutine && activeDay
      ? `${officialProgram.title} — ${activeDay.name || activeDay.title} (Sem ${currentWeek})`
      : DEFAULT_ROUTINES[selectedRoutineIndex]?.title || 'Sesión de Entrenamiento';

    const newWorkout: CompletedWorkout = {
      id: 'w_' + Date.now(),
      date: new Date().toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }),
      programId: !useCustomRoutine ? officialProgram.id : undefined,
      week: !useCustomRoutine ? currentWeek : undefined,
      dayId: !useCustomRoutine ? activeDay?.id : undefined,
      routineTitle: activeTitle,
      durationMinutes: Math.max(1, Math.round(elapsedSeconds / 60)),
      totalVolumeKg: totalVolume,
      exercises: completedExercises
    };

    const updatedHistory = [newWorkout, ...history];
    setHistory(updatedHistory);
    try {
      localStorage.setItem('fitapp_workout_history', JSON.stringify(updatedHistory));
    } catch (e) {
      console.error(e);
    }

    // AUDIT-06: Sync perceived post-workout energy to global store
    setCurrentEnergy(perceivedEnergy);

    setIsSessionActive(false);
    setSessionStartTime(null);
  };

  const handleDeleteHistoryItem = (id: string) => {
    const updated = history.filter((h) => h.id !== id);
    setHistory(updated);
    try {
      localStorage.setItem('fitapp_workout_history', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Stats calculation
  const totalVolumeAllTime = history.reduce((acc, h) => acc + h.totalVolumeKg, 0);
  const totalWorkoutsCount = history.length;
  const totalMinutesAllTime = history.reduce((acc, h) => acc + h.durationMinutes, 0);

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
          gap: '20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255,255,255,0.08) inset',
          color: 'var(--color-text-primary)'
        }}
      >
        {/* DARK PILL TAB BAR - same style as Rutinas section */}
        <div style={{ display: 'flex', gap: '4px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '4px', width: 'fit-content' }}>
          {([
            { key: 'logger', label: '⚡ Tracker en Vivo' },
            { key: 'explorer', label: '📆 Explorar Programa' },
            { key: 'historial', label: `📊 Historial & Stats (${history.length})` }
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              style={{
                background: activeTab === key ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: activeTab === key ? 'var(--color-text-primary, #fff)' : 'rgba(255,255,255,0.45)',
                border: activeTab === key ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                padding: '7px 16px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: activeTab === key ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* TAB 1: LOGGER EN VIVO */}
        {activeTab === 'logger' && (
          <>
            {/* HEADER — programa activo + semana + día */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

              {/* Si no hay programas activos */}
              {activeTrackerPrograms.length === 0 && (
                <div style={{ background: 'rgba(255,159,10,0.12)', border: '1px solid rgba(255,159,10,0.3)', borderRadius: '12px', padding: '14px 18px' }}>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#ff9f0a', fontWeight: 600 }}>
                    ⚠️ No tienes ningún programa activo en el Tracker. Ve a <strong>Rutinas → Catálogo Oficial</strong> y activa un programa con el botón <strong>"+"</strong>.
                  </p>
                </div>
              )}

              {/* Selector de programa activo (si hay más de uno) */}
              {activeTrackerPrograms.length > 1 && (
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {activeTrackerPrograms.map((prog) => {
                    const isSelected = activeLoggerProgramId === prog.id;
                    const cleanTitle = prog.title.replace(/\s*\([^)]*\)/g, '').trim();
                    return (
                      <button
                        key={prog.id}
                        type="button"
                        onClick={() => setActiveLoggerProgramId(prog.id)}
                        style={{
                          background: isSelected ? 'rgba(48,209,88,0.2)' : 'rgba(255,255,255,0.05)',
                          border: `1px solid ${isSelected ? 'rgba(48,209,88,0.5)' : 'rgba(255,255,255,0.1)'}`,
                          color: isSelected ? '#30d158' : 'rgba(255,255,255,0.55)',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {cleanTitle}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Semana + Día del programa seleccionado */}
              {officialProgram.weeks && officialProgram.weeks.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                  {/* Selector de semana */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase' }}>Semana</span>
                    <div style={{ display: 'flex', gap: '3px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '3px' }}>
                      {officialProgram.weeks.map((w) => {
                        const wNum = w.weekNumber || w.week || 1;
                        const isSelected = currentWeek === wNum;
                        const tooltip = w.title || w.block || `Semana ${wNum}`;
                        return (
                          <button
                            key={wNum}
                            type="button"
                            title={tooltip}
                            onClick={() => setWeek(wNum)}
                            style={{
                              background: isSelected ? '#30d158' : 'transparent',
                              color: isSelected ? '#000' : 'rgba(255,255,255,0.4)',
                              border: 'none',
                              padding: '4px 9px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: isSelected ? 700 : 500,
                              cursor: 'pointer',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {wNum}{w.isDeload ? 'D' : ''}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selector de día */}
                  {activeWeek?.days && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase' }}>Día</span>
                      <div style={{ display: 'flex', gap: '3px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '3px' }}>
                        {activeWeek.days.map((day, dIdx) => {
                          const isSelected = (currentDayId === day.id) || (!currentDayId && dIdx === 0);
                          const dTitle = day.name || day.title || `Día ${dIdx + 1}`;
                          return (
                            <button
                              key={day.id}
                              type="button"
                              title={`Día ${dIdx + 1}: ${dTitle}`}
                              onClick={() => setDay(day.id)}
                              style={{
                                background: isSelected ? 'rgba(255,255,255,0.18)' : 'transparent',
                                color: isSelected ? '#fff' : 'rgba(255,255,255,0.4)',
                                border: isSelected ? '1px solid rgba(255,255,255,0.25)' : '1px solid transparent',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                fontSize: '0.78rem',
                                fontWeight: isSelected ? 700 : 500,
                                cursor: 'pointer',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {dIdx + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Título del día + controles de sesión */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
                    {officialProgram.title.replace(/\s*\([^)]*\)/g, '').trim()} · Semana {currentWeek}
                    {activeWeek?.isDeload ? ' · 🔄 Descarga' : ''}
                    {activeWeek?.title || activeWeek?.block ? ` · ${activeWeek.title || activeWeek.block}` : ''}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#fff' }}>
                    {activeDay?.name || activeDay?.title || 'Sin día activo'}
                  </h3>
                </div>

                <div>
                  {isSessionActive ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <div style={{ background: 'rgba(48, 209, 88, 0.15)', border: '1px solid rgba(48, 209, 88, 0.3)', padding: '6px 14px', borderRadius: '12px', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.68rem', color: 'var(--color-state-done)', display: 'block', fontWeight: 700 }}>TIEMPO TRANSCURRIDO</span>
                        <strong style={{ fontSize: '1.1rem', fontFamily: 'SF Mono, monospace', color: 'var(--color-text-primary)' }}>{formatTime(elapsedSeconds)}</strong>
                      </div>

                      {/* AUDIT-06: Energía percibida post-entrenamiento */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ fontSize: '0.65rem', color: 'var(--color-text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>Energía al terminar</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {(['high', 'medium', 'low', 'crisis'] as const).map((level) => (
                            <button
                              key={level}
                              type="button"
                              onClick={() => setPerceivedEnergy(level)}
                              style={{
                                background: perceivedEnergy === level ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.06)',
                                border: `1px solid ${perceivedEnergy === level ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.12)'}`,
                                color: perceivedEnergy === level ? '#fff' : 'var(--color-text-secondary)',
                                padding: '4px 10px',
                                borderRadius: '8px',
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                cursor: 'pointer'
                              }}
                            >
                              {level === 'high' ? 'Alta' : level === 'medium' ? 'Media' : level === 'low' ? 'Baja' : 'Soporte / Bajar ritmo'}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleFinishWorkout}
                        style={{
                          background: 'var(--color-state-done)',
                          border: 'none',
                          color: '#000000',
                          fontWeight: 700,
                          padding: '10px 20px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          fontSize: '0.88rem'
                        }}
                      >
                        ✓ Finalizar & Guardar Sesión
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleStartWorkout}
                      disabled={activeTrackerPrograms.length === 0}
                      style={{
                        background: activeTrackerPrograms.length === 0 ? 'rgba(255,255,255,0.1)' : 'var(--color-state-done)',
                        border: 'none',
                        color: activeTrackerPrograms.length === 0 ? 'rgba(255,255,255,0.3)' : '#000000',
                        fontWeight: 700,
                        padding: '10px 22px',
                        borderRadius: '12px',
                        cursor: activeTrackerPrograms.length === 0 ? 'not-allowed' : 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      ▶ Iniciar Sesión de Hoy
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* REST TIMER BANNER */}
            {timerSeconds !== null && (
              <div style={{ background: timerSeconds === 0 ? 'rgba(48, 209, 88, 0.25)' : 'rgba(10, 14, 20, 0.9)', border: `1px solid ${timerSeconds === 0 ? 'var(--color-state-done)' : 'rgba(100, 210, 255, 0.3)'}`, borderRadius: '16px', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontSize: '1.6rem' }}>⏱️</span>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'SF Mono, monospace', color: timerSeconds === 0 ? 'var(--color-state-done)' : 'var(--color-accent-primary)', fontWeight: 700 }}>
                      {timerSeconds === 0 ? '¡DESCANSO COMPLETADO!' : 'TEMPORIZADOR DE DESCANSO EN CURSO'}
                    </span>
                    <h4 style={{ margin: '2px 0 0', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {timerSeconds === 0 ? '¡Siguiente Serie Lista! A Entrenar 💪' : `Tiempo restante: ${formatTime(timerSeconds)}`}
                    </h4>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {[30, 60, 90, 120, 180].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => startRestTimer(s)}
                      style={{ background: initialTimerSec === s ? 'rgba(48, 209, 88, 0.3)' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-primary)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', cursor: 'pointer' }}
                    >
                      {s}s
                    </button>
                  ))}
                  <button type="button" onClick={() => { setTimerActive(false); setTimerSeconds(null); }} style={{ background: 'rgba(255,69,58,0.2)', border: '1px solid rgba(255,69,58,0.4)', color: 'var(--color-accent-danger)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', cursor: 'pointer' }}>
                    ✕ Cerrar
                  </button>
                </div>
              </div>
            )}

            {/* EXERCISES LIST */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {(!useCustomRoutine && activeDay
                ? activeDay.exercises.map((p) => {
                    const pId = p.id;
                    const overrideId = pId ? overrides[pId] : undefined;
                    const effectiveId = overrideId || p.exerciseId;
                    const details = getExerciseDetails(effectiveId);
                    const reps = p.targetReps || p.repRange || '6-8';
                    const restSec = parseInt(p.restPeriod || p.rest || '90', 10) || 90;
                    return {
                      name: details.name,
                      target: `${p.workingSets} series × ${reps} • ${p.rirPerSet?.join(', ') || p.earlySetRpe || 'RIR 1-2'}`,
                      restSec,
                      exerciseId: effectiveId
                    };
                  })
                : (DEFAULT_ROUTINES[selectedRoutineIndex]?.exercises || []).map((ex) => ({
                    name: ex.name,
                    target: ex.target,
                    restSec: ex.restSec,
                    exerciseId: findExerciseByName(ex.name.split('/')[0].trim())?.name || ''
                  }))
              ).map((exItem, exIdx) => {
                const exData = findExerciseByName(exItem.name.split('/')[0].trim());
                const currentSets = exerciseLogs[exItem.name] || [
                  { setNum: 1, weight: 0, reps: 10, rpe: 8, completed: false },
                  { setNum: 2, weight: 0, reps: 10, rpe: 8, completed: false },
                  { setNum: 3, weight: 0, reps: 10, rpe: 8, completed: false }
                ];

                return (
                  <div key={exIdx} style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontFamily: 'SF Mono, monospace', fontSize: '0.68rem', color: 'var(--color-state-done)', fontWeight: 700 }}>
                            EJERCICIO #{exIdx + 1}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '6px' }}>
                            {exItem.target}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '4px 0 0', color: 'var(--color-text-primary)' }}>
                          {exItem.name}
                        </h4>
                      </div>

                      {exData && (
                        <button type="button" onClick={() => setModalExercise(exData)} style={{ background: 'rgba(48, 209, 88, 0.12)', border: '1px solid rgba(48, 209, 88, 0.3)', color: 'var(--color-state-done)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>
                          ▶ Ver Guía FitApp & Video
                        </button>
                      )}
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                        <thead>
                          <tr style={{ color: 'var(--color-text-tertiary)', borderBottom: '1px solid rgba(255,255,255,0.08)', textTransform: 'uppercase', fontFamily: 'SF Mono, monospace', fontSize: '0.65rem' }}>
                            <th style={{ padding: '6px', textAlign: 'center', width: '50px' }}>Serie</th>
                            <th style={{ padding: '6px', textAlign: 'center' }}>Peso (kg)</th>
                            <th style={{ padding: '6px', textAlign: 'center' }}>Reps</th>
                            <th style={{ padding: '6px', textAlign: 'center' }}>RPE</th>
                            <th style={{ padding: '6px', textAlign: 'center', width: '80px' }}>Listo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentSets.map((s, sIdx) => (
                            <tr key={sIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: s.completed ? 'rgba(48, 209, 88, 0.08)' : 'transparent' }}>
                              <td style={{ padding: '8px', textAlign: 'center', fontWeight: 700, color: s.completed ? 'var(--color-state-done)' : 'var(--color-text-secondary)' }}>#{s.setNum}</td>
                              <td style={{ padding: '8px', textAlign: 'center' }}>
                                <input type="number" step="0.5" value={s.weight || ''} placeholder="0" onChange={(e) => handleUpdateSetField(exItem.name, sIdx, 'weight', parseFloat(e.target.value) || 0)} style={{ width: '70px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', padding: '4px 6px', color: 'var(--color-text-primary)', textAlign: 'center', fontSize: '0.82rem', outline: 'none' }} />
                              </td>
                              <td style={{ padding: '8px', textAlign: 'center' }}>
                                <input type="number" value={s.reps || ''} placeholder="10" onChange={(e) => handleUpdateSetField(exItem.name, sIdx, 'reps', parseInt(e.target.value) || 0)} style={{ width: '60px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', padding: '4px 6px', color: 'var(--color-text-primary)', textAlign: 'center', fontSize: '0.82rem', outline: 'none' }} />
                              </td>
                              <td style={{ padding: '8px', textAlign: 'center' }}>
                                <input type="number" step="0.5" max="10" min="6" value={s.rpe || ''} placeholder="8" onChange={(e) => handleUpdateSetField(exItem.name, sIdx, 'rpe', parseFloat(e.target.value) || 8)} style={{ width: '50px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', padding: '4px 6px', color: 'var(--color-text-primary)', textAlign: 'center', fontSize: '0.82rem', outline: 'none' }} />
                              </td>
                              <td style={{ padding: '8px', textAlign: 'center' }}>
                                <button type="button" onClick={() => handleToggleSet(exItem.name, sIdx, exItem.restSec)} style={{ background: s.completed ? 'var(--color-state-done)' : 'rgba(255,255,255,0.06)', border: `1px solid ${s.completed ? 'var(--color-state-done)' : 'rgba(255,255,255,0.15)'}`, color: s.completed ? '#000000' : 'var(--color-text-secondary)', width: '28px', height: '28px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}>
                                  {s.completed ? '✓' : ''}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button type="button" onClick={() => handleAddSet(exItem.name)} style={{ background: 'transparent', border: 'none', color: 'var(--color-state-done)', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>
                        + Agregar otra serie
                      </button>
                      <button type="button" onClick={() => startRestTimer(exItem.restSec)} style={{ background: 'rgba(100, 210, 255, 0.1)', border: '1px solid rgba(100, 210, 255, 0.25)', color: 'var(--color-accent-primary)', fontSize: '0.72rem', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer' }}>
                        ⏱️ Iniciar Descanso ({exItem.restSec}s)
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* TAB 2: EXPLORAR PROGRAMA — semanas y días completos de todos los programas activos */}
        {activeTab === 'explorer' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {explorerPrograms.length === 0 && (
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem' }}>
                No tienes ningún programa activo. Ve al Catálogo de Rutinas y activa un programa.
              </p>
            )}
            {explorerPrograms.map((prog) => (
              <div key={prog.id} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 2px', color: '#fff' }}>
                    {prog.title.replace(/\s*\([^)]*\)/g, '').trim()}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
                    {prog.durationWeeks} semanas · {prog.split.length} días/sem
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {prog.weeks.map((week) => {
                    const wNum = week.weekNumber || week.week || 1;
                    const wLabel = week.title || week.block || `Semana ${wNum}`;
                    return (
                      <details key={wNum} style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                        <summary style={{ padding: '12px 16px', cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>Semana {wNum}{week.isDeload ? ' 🔄 Descarga' : ''} — {wLabel}</span>
                          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{week.days?.length || 0} días ▸</span>
                        </summary>

                        <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {week.days?.map((day, dIdx) => {
                            const dTitle = day.name || day.title || `Día ${dIdx + 1}`;
                            const historyEntry = history.find((h) => h.programId === prog.id && h.week === wNum && h.dayId === day.id);

                            return (
                              <details key={day.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px' }}>
                                <summary style={{ padding: '10px 14px', cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <span>Día {dIdx + 1} · {dTitle}</span>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {historyEntry && (
                                      <span style={{ fontSize: '0.68rem', background: 'rgba(48,209,88,0.2)', color: '#30d158', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>
                                        ✓ Completado · {historyEntry.totalVolumeKg}kg
                                      </span>
                                    )}
                                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>{day.exercises?.length || 0} ej. ▸</span>
                                  </div>
                                </summary>

                                <div style={{ padding: '0 14px 14px' }}>
                                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
                                    <thead>
                                      <tr style={{ color: 'rgba(255,255,255,0.35)', borderBottom: '1px solid rgba(255,255,255,0.06)', textTransform: 'uppercase', fontSize: '0.66rem' }}>
                                        <th style={{ padding: '6px 8px', textAlign: 'left' }}>Ejercicio</th>
                                        <th style={{ padding: '6px 8px', textAlign: 'left' }}>Series × Reps</th>
                                        <th style={{ padding: '6px 8px', textAlign: 'left' }}>RPE/RIR</th>
                                        <th style={{ padding: '6px 8px', textAlign: 'left' }}>Descanso</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {day.exercises?.map((ex, eIdx) => {
                                        const exDetails = getExerciseDetails(ex.exerciseId);
                                        return (
                                          <tr key={eIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                            <td style={{ padding: '8px 8px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                                              {ex.displayName || exDetails.name}
                                            </td>
                                            <td style={{ padding: '8px 8px', color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>
                                              {ex.workingSets}×{ex.targetReps || ex.repRange || '—'}
                                            </td>
                                            <td style={{ padding: '8px 8px', color: 'rgba(255,255,255,0.5)' }}>
                                              {ex.earlySetRpe || ex.effort?.early || 'RIR 1'} / {ex.lastSetRpe || ex.effort?.last || 'RIR 0'}
                                            </td>
                                            <td style={{ padding: '8px 8px', color: 'rgba(255,255,255,0.4)' }}>
                                              {ex.restPeriod || ex.rest || '1-2 min'}
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              </details>
                            );
                          })}
                        </div>
                      </details>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: HISTORIAL + ESTADÍSTICAS UNIFICADAS */}
        {activeTab === 'historial' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* STATS SUMMARY */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.68rem', color: '#30d158', fontWeight: 700, textTransform: 'uppercase' }}>Volumen Total</span>
                <strong style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{totalVolumeAllTime.toLocaleString()} kg</strong>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>Peso × reps registrados</span>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Sesiones</span>
                <strong style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{totalWorkoutsCount}</strong>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>Entrenamientos completados</span>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.68rem', color: '#ffd60a', fontWeight: 700, textTransform: 'uppercase' }}>Tiempo Total</span>
                <strong style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{totalMinutesAllTime} min</strong>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>Horas de estímulo efectivo</span>
              </div>
            </div>

            {/* HISTORIAL LIST */}
            <div>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, margin: '0 0 12px', color: 'rgba(255,255,255,0.7)' }}>
                Sesiones Registradas ({history.length})
              </h4>
              {history.length === 0 ? (
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>Aún no has completado ninguna sesión registrada. Inicia tu primera sesión en el Tracker.</p>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '12px' }}>
                  {history.map((h) => (
                    <div key={h.id} style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.7rem', color: '#30d158', fontFamily: 'SF Mono, monospace', fontWeight: 700 }}>
                          {h.date} · {h.durationMinutes} min
                        </span>
                        <button type="button" onClick={() => handleDeleteHistoryItem(h.id)} style={{ background: 'transparent', border: 'none', color: '#ff453a', fontSize: '0.72rem', cursor: 'pointer', fontWeight: 700 }}>
                          ✕ Quitar
                        </button>
                      </div>
                      <strong style={{ fontSize: '0.88rem', color: '#fff' }}>{h.routineTitle}</strong>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                        Volumen: <strong style={{ color: '#fff' }}>{h.totalVolumeKg} kg</strong> · {h.exercises.length} ejercicios
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* EXERCISE MODAL */}
        <ExerciseModal exercise={modalExercise} onClose={() => setModalExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
