import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';
import ExerciseModal from './ExerciseModal';

interface LoggedSet {
  setNum: number;
  weight: number;
  reps: number;
  rpe: number;
  completed: boolean;
}

interface CompletedWorkout {
  id: string;
  date: string;
  routineTitle: string;
  durationMinutes: number;
  totalVolumeKg: number;
  exercises: {
    name: string;
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
  },
  {
    title: 'Día 1 PM: Movilidad Hombro & Anillas (Tarde)',
    program: 'Calistenia Híbrida Alexander PM (Prehab & Estabilidad)',
    exercises: [
      { name: 'Support Hold en Anillas', target: '3 series × 30s sostén • Calidad Técnica', restSec: 60 },
      { name: 'Scapular Pullups / Dip Shrugs', target: '3 series × 12 reps lentas', restSec: 60 },
      { name: 'Band Face Pulls / External Rotations', target: '3 series × 15 reps • Prehab', restSec: 60 }
    ]
  },
  {
    title: 'Día 2 AM: Pierna HSR & Cuádriceps (Rehabilitación Rodilla)',
    program: 'Protocolo HSR Tempo 3-0-3 & Spanish Squats',
    exercises: [
      { name: 'Spanish Squats (Isométrico Rotuliano)', target: '3-5 series × 45s sostén • Sin Dolor', restSec: 90 },
      { name: 'Box Pistol / Progresión Pistol Squat', target: '3 series × 6-8 reps • Tempo 3-0-3', restSec: 120 },
      { name: 'Leg Extension (Prensa Cuádriceps)', target: '3 series × 10-12 reps • RPE 8', restSec: 90 },
      { name: 'Nordic Ham Curl / Lying Leg Curl', target: '3 series × 8-10 reps • RPE 8', restSec: 120 },
      { name: 'Standing Calf Raise', target: '4 series × 12-15 reps • RPE 9', restSec: 60 }
    ]
  },
  {
    title: 'Día 2 PM: Movilidad Cadera & Elephant Walks (Tarde)',
    program: 'Protocolo Movilidad PM (David Thurin & Reeducación Cadera)',
    exercises: [
      { name: 'Elephant Walks (Cadena Posterior)', target: '3 series × 30 reps • Alternando', restSec: 60 },
      { name: '90/90 Hip Switches (Movilidad Cadera)', target: '3 series × 12 reps por lado', restSec: 60 },
      { name: 'Jefferson Curls (Descompresión Lumbar)', target: '3 series × 10 reps lentas (Peso Ligero)', restSec: 90 },
      { name: 'Spanish Squats (Regulación Rodilla)', target: '3 series × 45s sostén', restSec: 60 }
    ]
  },
  {
    title: 'Día 3 AM: Tracción Min-Max & Dorsal (Espalda, Bíceps)',
    program: 'Min-Max Nippard + Dominadas Lastradas & Archer Rows',
    exercises: [
      { name: 'Dominadas Lastradas / Lat Pulldown', target: '3 series × 6-8 reps • RPE 8-9', restSec: 120 },
      { name: 'Archer Ring Rows / Seated Cable Row', target: '3 series × 8-10 reps • RPE 8-9', restSec: 120 },
      { name: 'Face Pull (Polea con Cuerda)', target: '3 series × 12-15 reps • RPE 9', restSec: 90 },
      { name: 'Incline Dumbbell Biceps Curl', target: '3 series × 10-12 reps • RPE 9', restSec: 90 },
      { name: 'Preacher Hammer Curl', target: '3 series × 10-12 reps • RPE 9', restSec: 90 }
    ]
  },
  {
    title: 'Día 3 PM: Prehab Muñeca & Codo (Tarde)',
    program: 'Rehabilitación & Prevención de Epicondilitis FitApp',
    exercises: [
      { name: 'Wrist Circles & Finger Extensions', target: '3 series × 20 reps', restSec: 45 },
      { name: 'Pronador / Supinador con Mancuerna Ligera', target: '3 series × 15 reps', restSec: 60 },
      { name: 'Nerve Glides (Deslizamiento Nervioso)', target: '3 series × 10 reps suave', restSec: 60 }
    ]
  },
  {
    title: 'Día 4 AM/PM: Cardio LISS 45m & Estiramientos',
    program: 'Regulación de Estrés & Capacidad Aeróbica LISS',
    exercises: [
      { name: 'Caminata en Inclinación / Bicicleta LISS', target: '35-45 min • Pulsaciones 110-130 BPM', restSec: 0 },
      { name: 'Estiramientos Estáticos Activos', target: '15 min • Isquios, Psoas, Pectoral', restSec: 30 }
    ]
  }
];

export default function FitAppWorkoutLogger() {
  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [activeTab, setActiveTab] = useState<'logger' | 'history' | 'calendar' | 'stats'>('logger');

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

  const activeRoutine = DEFAULT_ROUTINES[selectedRoutineIndex];

  // Start active workout
  const handleStartWorkout = () => {
    setIsSessionActive(true);
    setSessionStartTime(Date.now());
    const initialLogs: Record<string, LoggedSet[]> = {};
    activeRoutine.exercises.forEach((ex) => {
      initialLogs[ex.name] = [
        { setNum: 1, weight: 0, reps: 10, rpe: 8, completed: false },
        { setNum: 2, weight: 0, reps: 10, rpe: 8, completed: false },
        { setNum: 3, weight: 0, reps: 10, rpe: 8, completed: false }
      ];
    });
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
        completedExercises.push({
          name,
          completedSets: doneSets.map((s) => ({ weight: s.weight, reps: s.reps, rpe: s.rpe }))
        });
      }
    });

    const newWorkout: CompletedWorkout = {
      id: 'w_' + Date.now(),
      date: new Date().toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }),
      routineTitle: activeRoutine.title,
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
        {/* TOP PROGRAM IDENTIFIER BANNER */}
        <div style={{ background: 'rgba(48, 209, 88, 0.12)', border: '1px solid rgba(48, 209, 88, 0.3)', borderRadius: '16px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span style={{ fontSize: '0.68rem', fontFamily: '-apple-system, SF Pro Text, sans-serif', color: 'var(--color-state-done)', fontWeight: 700, textTransform: 'uppercase' }}>
              PROGRAMA ACTIVO DE ENTRENAMIENTO & REHABILITACIÓN
            </span>
            <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-text-primary)' }}>
              {activeRoutine.program}
            </strong>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('logger')}
              style={{ background: activeTab === 'logger' ? 'var(--color-state-done)' : 'transparent', color: activeTab === 'logger' ? '#000' : 'var(--color-text-secondary)', border: 'none', padding: '6px 14px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
            >
              ⚡ Tracker en Vivo
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('history')}
              style={{ background: activeTab === 'history' ? 'var(--color-accent-primary)' : 'transparent', color: activeTab === 'history' ? '#fff' : 'var(--color-text-secondary)', border: 'none', padding: '6px 14px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
            >
              📜 Historial ({history.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('calendar')}
              style={{ background: activeTab === 'calendar' ? 'var(--color-accent-primary)' : 'transparent', color: activeTab === 'calendar' ? '#fff' : 'var(--color-text-secondary)', border: 'none', padding: '6px 14px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
            >
              📅 Calendario Mensual
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('stats')}
              style={{ background: activeTab === 'stats' ? 'var(--color-accent-warning)' : 'transparent', color: activeTab === 'stats' ? '#000' : 'var(--color-text-secondary)', border: 'none', padding: '6px 14px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
            >
              📊 Estadísticas
            </button>
          </div>
        </div>

        {/* TAB 1: LOGGER EN VIVO */}
        {activeTab === 'logger' && (
          <>
            {/* CONTROLS */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  {activeRoutine.title}
                </h3>
              </div>

              <div>
                {isSessionActive ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: 'rgba(48, 209, 88, 0.15)', border: '1px solid rgba(48, 209, 88, 0.3)', padding: '6px 14px', borderRadius: '12px', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.68rem', color: 'var(--color-state-done)', display: 'block', fontWeight: 700 }}>TIEMPO TRANSCURRIDO</span>
                      <strong style={{ fontSize: '1.1rem', fontFamily: 'SF Mono, monospace', color: 'var(--color-text-primary)' }}>{formatTime(elapsedSeconds)}</strong>
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
                    style={{
                      background: 'var(--color-state-done)',
                      border: 'none',
                      color: '#000000',
                      fontWeight: 700,
                      padding: '10px 22px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    ▶ Iniciar Sesión de Hoy
                  </button>
                )}
              </div>
            </div>

            {/* ROUTINES SELECTOR */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
              {DEFAULT_ROUTINES.map((rt, idx) => {
                const isSelected = selectedRoutineIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isSessionActive}
                    onClick={() => setSelectedRoutineIndex(idx)}
                    style={{
                      background: isSelected ? 'rgba(48, 209, 88, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${isSelected ? 'rgba(48, 209, 88, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: isSelected ? 'var(--color-state-done)' : 'var(--color-text-secondary)',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      fontSize: '0.82rem',
                      fontWeight: isSelected ? 700 : 500,
                      cursor: isSessionActive ? 'not-allowed' : 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {rt.title}
                  </button>
                );
              })}
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
              {activeRoutine.exercises.map((exItem, exIdx) => {
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

        {/* TAB 2: HISTORIAL DE SESIONES */}
        {activeTab === 'history' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
              📜 Historial Completo de Entrenamientos Guardados ({history.length})
            </h4>

            {history.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Aún no has completado ninguna sesión registrada.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '14px' }}>
                {history.map((h) => (
                  <div key={h.id} style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontFamily: 'SF Mono, monospace', fontWeight: 700 }}>
                        {h.date} • {h.durationMinutes} min
                      </span>
                      <button type="button" onClick={() => handleDeleteHistoryItem(h.id)} style={{ background: 'transparent', border: 'none', color: 'var(--color-accent-danger)', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 700 }}>
                        ✕ Quitar
                      </button>
                    </div>

                    <strong style={{ fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>{h.routineTitle}</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>Volumen: <strong>{h.totalVolumeKg} kg</strong> • {h.exercises.length} ejercicios realizados</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: CALENDARIO MENSUAL COMPLETO */}
        {activeTab === 'calendar' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                📅 Calendario Mensual de Adherencia & Entrenamientos
              </h4>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-primary)', fontFamily: 'SF Mono, monospace' }}>
                Julio 2026 • {history.length} Días Completados
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)' }}>
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((dayName, dIdx) => (
                <div key={dIdx} style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 700, fontFamily: 'SF Mono, monospace', paddingBottom: '6px' }}>
                  {dayName}
                </div>
              ))}

              {Array.from({ length: 31 }, (_, i) => i + 1).map((dayNum) => {
                return (
                  <div
                    key={dayNum}
                    style={{
                      background: dayNum === 26 ? 'rgba(48, 209, 88, 0.25)' : dayNum < 26 ? 'rgba(10, 132, 255, 0.12)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${dayNum === 26 ? 'var(--color-state-done)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '10px',
                      padding: '10px 6px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      minHeight: '60px'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: dayNum === 26 ? 'var(--color-state-done)' : 'var(--color-text-primary)' }}>
                      {dayNum}
                    </span>
                    {dayNum <= 26 && (
                      <span style={{ fontSize: '0.65rem', color: 'var(--color-state-done)', fontWeight: 700 }}>
                        ✓ {dayNum % 2 === 1 ? 'AM+PM' : 'AM'}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: ESTADÍSTICAS FITAPP */}
        {activeTab === 'stats' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 700, textTransform: 'uppercase' }}>VOLUMEN TOTAL ACUMULADO</span>
              <strong style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{totalVolumeAllTime.toLocaleString()} kg</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Suma de peso × repeticiones registradas</span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>SESIONES COMPLETADAS</span>
              <strong style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{totalWorkoutsCount}</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Entrenamientos registrados en FitApp</span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-warning)', fontWeight: 700, textTransform: 'uppercase' }}>TIEMPO EN GIMNASIO</span>
              <strong style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{totalMinutesAllTime} min</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Horas de estímulo muscular efectivo</span>
            </div>
          </div>
        )}

        {/* EXERCISE MODAL */}
        <ExerciseModal exercise={modalExercise} onClose={() => setModalExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
