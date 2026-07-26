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
    title: 'Día 1: Empuje Min-Max (Chest, Shoulders, Triceps)',
    exercises: [
      { name: 'Incline Dumbbell Press', target: '3 series × 6-10 reps • RPE 8-9', restSec: 120 },
      { name: 'Standing Overhead Barbell Press', target: '3 series × 6-8 reps • RPE 8-9', restSec: 120 },
      { name: 'Cable Lateral Raise', target: '3 series × 10-15 reps • RPE 9-10', restSec: 90 },
      { name: 'Dips / Fondos en Paralelas o Anillas', target: '3 series × 8-12 reps • RPE 8-9', restSec: 90 },
      { name: 'Triceps Rope Pushdown', target: '3 series × 10-12 reps • RPE 9', restSec: 90 }
    ]
  },
  {
    title: 'Día 2: Tracción Min-Max (Back, Rear Delts, Biceps)',
    exercises: [
      { name: 'Barbell Bent Over Row', target: '3 series × 6-10 reps • RPE 8-9', restSec: 120 },
      { name: 'Lat Pulldown (Polea Alta)', target: '3 series × 8-10 reps • RPE 8-9', restSec: 120 },
      { name: 'Face Pull (Polea con Cuerda)', target: '3 series × 12-15 reps • RPE 9', restSec: 90 },
      { name: 'Incline Dumbbell Biceps Curl', target: '3 series × 10-12 reps • RPE 9', restSec: 90 },
      { name: 'Hammer Curl (Mancuernas Neutrales)', target: '3 series × 10-12 reps • RPE 9', restSec: 90 }
    ]
  },
  {
    title: 'Día 3: Pierna & Core Min-Max (Quads, Hams, Calves)',
    exercises: [
      { name: 'Barbell Back Squat (Sentadilla Trasera)', target: '3 series × 6-8 reps • RPE 8', restSec: 180 },
      { name: 'Romanian Deadlift (Peso Muerto Rumano)', target: '3 series × 8-10 reps • RPE 8', restSec: 120 },
      { name: 'Leg Extension (Prensa de Cuádriceps)', target: '3 series × 10-12 reps • RPE 9', restSec: 90 },
      { name: 'Seated Leg Curl (Isquiotibiales)', target: '3 series × 10-12 reps • RPE 9', restSec: 90 },
      { name: 'Standing Calf Raise', target: '4 series × 12-15 reps • RPE 9-10', restSec: 60 }
    ]
  }
];

export default function FitAppWorkoutLogger() {
  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

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
      // Play subtle chime sound if supported
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.value = 587.33; // D5 note
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } catch (e) {
        // ignore audio errors
      }
    }
    return () => clearInterval(timerInterval);
  }, [timerActive, timerSeconds]);

  const activeRoutine = DEFAULT_ROUTINES[selectedRoutineIndex];

  // Start active workout
  const handleStartWorkout = () => {
    setIsSessionActive(true);
    setSessionStartTime(Date.now());
    // Init exercise logs structure
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

  // Toggle set completed & trigger rest timer
  const handleToggleSet = (exName: string, setIdx: number, defaultRestSec: number) => {
    setExerciseLogs((prev) => {
      const currentSets = [...(prev[exName] || [])];
      const isNowCompleted = !currentSets[setIdx].completed;
      currentSets[setIdx] = { ...currentSets[setIdx], completed: isNowCompleted };

      if (isNowCompleted) {
        // Trigger rest timer
        startRestTimer(defaultRestSec);
      }

      return { ...prev, [exName]: currentSets };
    });
  };

  const handleUpdateSetField = (exName: string, setIdx: number, field: keyof LoggedSet, value: any) => {
    setExerciseLogs((prev) => {
      const currentSets = [...(prev[exName] || [])];
      currentSets[setIdx] = { ...currentSets[setIdx], [field]: value };
      return { ...prev, [exName]: currentSets };
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

  // Finish workout & save history
  const handleFinishWorkout = () => {
    let totalVolume = 0;
    const completedExercises: any[] = [];

    Object.entries(exerciseLogs).forEach(([name, sets]) => {
      const doneSets = sets.filter((s) => s.completed);
      if (doneSets.length > 0) {
        doneSets.forEach((s) => {
          totalVolume += s.weight * s.reps;
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

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ErrorBoundary>
      <div
        style={{
          background: 'rgba(10, 15, 20, 0.75)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          color: '#effff6'
        }}
      >
        {/* HEADER & CONTROLS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#10b981', fontWeight: 800, letterSpacing: '0.05em' }}>
              FITAPP WORKOUT LOGGER & TRACKER EN VIVO
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '2px 0 0', color: '#ffffff' }}>
              Registro Interactivo de Sesión & Temporizador de Descanso
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {isSessionActive ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '6px 14px', borderRadius: '12px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.68rem', color: '#10b981', display: 'block', fontWeight: 700 }}>TIEMPO TRANSCURRIDO</span>
                  <strong style={{ fontSize: '1.1rem', fontFamily: 'Azeret Mono, monospace', color: '#ffffff' }}>{formatTime(elapsedSeconds)}</strong>
                </div>
                <button
                  type="button"
                  onClick={handleFinishWorkout}
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    padding: '10px 20px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
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
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  padding: '10px 22px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
                }}
              >
                ▶ Iniciar Sesión de Hoy
              </button>
            )}
          </div>
        </div>

        {/* ROUTINE SELECTOR TABS */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {DEFAULT_ROUTINES.map((rt, idx) => {
            const isSelected = selectedRoutineIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                disabled={isSessionActive}
                onClick={() => setSelectedRoutineIndex(idx)}
                style={{
                  background: isSelected ? 'rgba(16, 185, 129, 0.18)' : 'rgba(0, 0, 0, 0.3)',
                  border: `1px solid ${isSelected ? 'rgba(16, 185, 129, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: isSelected ? '#10b981' : '#a8b9b2',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '0.82rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: isSessionActive ? 'not-allowed' : 'pointer',
                  opacity: isSessionActive && !isSelected ? 0.5 : 1,
                  whiteSpace: 'nowrap',
                  transition: 'all 150ms ease'
                }}
              >
                {rt.title}
              </button>
            );
          })}
        </div>

        {/* REST TIMER FLOATING / TOP BANNER */}
        {timerSeconds !== null && (
          <div
            style={{
              background: timerSeconds === 0 ? 'rgba(16, 185, 129, 0.25)' : 'rgba(10, 14, 20, 0.9)',
              border: `1px solid ${timerSeconds === 0 ? '#10b981' : 'rgba(120, 230, 255, 0.3)'}`,
              borderRadius: '16px',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '1.6rem' }}>⏱️</span>
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'Azeret Mono, monospace', color: timerSeconds === 0 ? '#10b981' : '#77e7ff', fontWeight: 800 }}>
                  {timerSeconds === 0 ? '¡DESCANSO COMPLETADO!' : 'TEMPORIZADOR DE DESCANSO EN CURSO'}
                </span>
                <h4 style={{ margin: '2px 0 0', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
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
                  style={{
                    background: initialTimerSec === s ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#effff6',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  {s}s
                </button>
              ))}
              <button
                type="button"
                onClick={() => { setTimerActive(false); setTimerSeconds(null); }}
                style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.4)', color: '#f87171', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', cursor: 'pointer' }}
              >
                ✕ Cerrar
              </button>
            </div>
          </div>
        )}

        {/* EXERCISES LIST & SET LOGGERS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {activeRoutine.exercises.map((exItem, exIdx) => {
            const exData = findExerciseByName(exItem.name);
            const currentSets = exerciseLogs[exItem.name] || [
              { setNum: 1, weight: 0, reps: 10, rpe: 8, completed: false },
              { setNum: 2, weight: 0, reps: 10, rpe: 8, completed: false },
              { setNum: 3, weight: 0, reps: 10, rpe: 8, completed: false }
            ];

            return (
              <div
                key={exIdx}
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >
                {/* EXERCISE TITLE & FITAPP DATA LINK */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#10b981', fontWeight: 800 }}>
                        EJERCICIO #{exIdx + 1}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#a8b9b2', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '6px' }}>
                        {exItem.target}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '4px 0 0', color: '#ffffff' }}>
                      {exItem.name}
                    </h4>
                  </div>

                  {exData && (
                    <button
                      type="button"
                      onClick={() => setModalExercise(exData)}
                      style={{
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#10b981',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      ▶ Ver Guía FitApp & Video
                    </button>
                  )}
                </div>

                {/* SETS LOGGING TABLE */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                    <thead>
                      <tr style={{ color: '#65756f', borderBottom: '1px solid rgba(255,255,255,0.08)', textTransform: 'uppercase', fontFamily: 'Azeret Mono, monospace', fontSize: '0.65rem' }}>
                        <th style={{ padding: '6px', textAlign: 'center', width: '50px' }}>Serie</th>
                        <th style={{ padding: '6px', textAlign: 'center' }}>Peso (kg)</th>
                        <th style={{ padding: '6px', textAlign: 'center' }}>Reps</th>
                        <th style={{ padding: '6px', textAlign: 'center' }}>RPE</th>
                        <th style={{ padding: '6px', textAlign: 'center', width: '80px' }}>Listo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSets.map((s, sIdx) => (
                        <tr key={sIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: s.completed ? 'rgba(16, 185, 129, 0.06)' : 'transparent' }}>
                          <td style={{ padding: '8px', textAlign: 'center', fontWeight: 700, color: s.completed ? '#10b981' : '#a8b9b2' }}>
                            #{s.setNum}
                          </td>
                          <td style={{ padding: '8px', textAlign: 'center' }}>
                            <input
                              type="number"
                              step="0.5"
                              value={s.weight || ''}
                              placeholder="0"
                              onChange={(e) => handleUpdateSetField(exItem.name, sIdx, 'weight', parseFloat(e.target.value) || 0)}
                              style={{
                                width: '70px',
                                background: 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '6px',
                                padding: '4px 6px',
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: '0.82rem',
                                outline: 'none'
                              }}
                            />
                          </td>
                          <td style={{ padding: '8px', textAlign: 'center' }}>
                            <input
                              type="number"
                              value={s.reps || ''}
                              placeholder="10"
                              onChange={(e) => handleUpdateSetField(exItem.name, sIdx, 'reps', parseInt(e.target.value) || 0)}
                              style={{
                                width: '60px',
                                background: 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '6px',
                                padding: '4px 6px',
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: '0.82rem',
                                outline: 'none'
                              }}
                            />
                          </td>
                          <td style={{ padding: '8px', textAlign: 'center' }}>
                            <input
                              type="number"
                              step="0.5"
                              max="10"
                              min="6"
                              value={s.rpe || ''}
                              placeholder="8"
                              onChange={(e) => handleUpdateSetField(exItem.name, sIdx, 'rpe', parseFloat(e.target.value) || 8)}
                              style={{
                                width: '50px',
                                background: 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '6px',
                                padding: '4px 6px',
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: '0.82rem',
                                outline: 'none'
                              }}
                            />
                          </td>
                          <td style={{ padding: '8px', textAlign: 'center' }}>
                            <button
                              type="button"
                              onClick={() => handleToggleSet(exItem.name, sIdx, exItem.restSec)}
                              style={{
                                background: s.completed ? '#10b981' : 'rgba(255,255,255,0.06)',
                                border: `1px solid ${s.completed ? '#10b981' : 'rgba(255,255,255,0.15)'}`,
                                color: s.completed ? '#040608' : '#a8b9b2',
                                width: '28px',
                                height: '28px',
                                borderRadius: '6px',
                                fontWeight: 800,
                                cursor: 'pointer',
                                transition: 'all 150ms ease'
                              }}
                            >
                              {s.completed ? '✓' : ''}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={() => handleAddSet(exItem.name)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#10b981',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    + Agregar otra serie
                  </button>

                  <button
                    type="button"
                    onClick={() => startRestTimer(exItem.restSec)}
                    style={{
                      background: 'rgba(119, 231, 255, 0.1)',
                      border: '1px solid rgba(119, 231, 255, 0.25)',
                      color: '#77e7ff',
                      fontSize: '0.72rem',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      cursor: 'pointer'
                    }}
                  >
                    ⏱️ Iniciar Descanso ({exItem.restSec}s)
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* WORKOUT HISTORY LOG SUMMARY */}
        {history.length > 0 && (
          <div style={{ marginTop: '12px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 12px', color: '#ffffff' }}>
              📜 Historial Reciente de Sesiones Guardadas ({history.length})
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
              {history.slice(0, 4).map((h) => (
                <div key={h.id} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#10b981', fontFamily: 'Azeret Mono, monospace' }}>
                    <span>{h.date}</span>
                    <span>{h.durationMinutes} min</span>
                  </div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', margin: '4px 0' }}>
                    {h.routineTitle}
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: '#a8b9b2' }}>
                    Volumen Total: <strong>{h.totalVolumeKg} kg</strong> • {h.exercises.length} ejercicios registrados
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXERCISE MODAL */}
        <ExerciseModal exercise={modalExercise} onClose={() => setModalExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
