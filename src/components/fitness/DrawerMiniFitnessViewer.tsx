import React, { useState, useEffect } from 'react';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';

interface Props {
  dayName: string;
  workoutDayIndex?: number;
  onOpenExerciseModal: (exercise: ExerciseEntry) => void;
}

interface RoutineItem {
  name: string;
  calisthenics_substitution: string;
  reason: string;
  sets: number;
  rir: string;
}

const workoutRoutines: Record<number, { dayTitle: string; exercises: RoutineItem[] }> = {
  1: {
    dayTitle: "Day 1: Upper 1 (Empuje & Pecho)",
    exercises: [
      { name: "Barbell Bench Press / DB Incline Press", calisthenics_substitution: "Pseudo Planche Pushups", reason: "Abducción y rotación natural de escápula/hombro izq.", sets: 2, rir: "1-2" },
      { name: "Cable Flye", calisthenics_substitution: "Ring Chest Flyes", reason: "Tensión constante en pectoral mayor con peso corporal.", sets: 2, rir: "1-2" },
      { name: "Machine Lateral Raise", calisthenics_substitution: "Ring Lateral Leans", reason: "Aislamiento de deltoides lateral sin carga axial.", sets: 2, rir: "1-2" },
      { name: "1-Arm Cable Overhead Triceps Extension", calisthenics_substitution: "Bench Dip", reason: "Cabeza larga del tríceps protegiendo el codo.", sets: 2, rir: "1-2" }
    ]
  },
  2: {
    dayTitle: "Day 2: Lower 1 (Cuádriceps & Tendón Rotuliano)",
    exercises: [
      { name: "Nordic Ham Curl / Lying Leg Curl", calisthenics_substitution: "Asian squat", reason: "Fuerza excéntrica en isquiotibiales.", sets: 2, rir: "1-2" },
      { name: "Leg Press / Barbell Lunge", calisthenics_substitution: "Box pistol", reason: "Fuerza unilateral sin compresión lumbar.", sets: 2, rir: "1-2" },
      { name: "Leg Extension", calisthenics_substitution: "Bodyweight Squat", reason: "Anestesia tendinosa rotuliana HSR (3-0-3).", sets: 2, rir: "1-2" },
      { name: "Donkey Calf Raise / Seated Calf Raise", calisthenics_substitution: "Bodyweight Hip Thrust", reason: "Complejo gemelo-sóleo rango completo.", sets: 2, rir: "1-2" }
    ]
  },
  3: {
    dayTitle: "Day 3: Upper 2 (Tracción & Espalda)",
    exercises: [
      { name: "Lat Pulldown / 1-Arm Cable Pulldown", calisthenics_substitution: "Chin-Up", reason: "Tirón vertical de máxima sobrecarga.", sets: 2, rir: "1-2" },
      { name: "Seated Cable Row / T-Bar Row", calisthenics_substitution: "Archer Ring Rows", reason: "Tirón horizontal unilateral romboides/deltoides pos.", sets: 2, rir: "1-2" },
      { name: "Cable Shrug-In", calisthenics_substitution: "Compression Work", reason: "Estabilidad trapecio superior y cuello.", sets: 2, rir: "1-2" }
    ]
  },
  4: {
    dayTitle: "Day 4: Lower 2 (Cadena Posterior & Bisagra)",
    exercises: [
      { name: "Hack Squat / Leg Extension", calisthenics_substitution: "Bodyweight Squat", reason: "Rehabilitación tendinopatía HSR.", sets: 2, rir: "1-2" },
      { name: "Romanian Deadlift / Cable Deadlift", calisthenics_substitution: "Bodyweight Round-Back 45° Hyperextension", reason: "Bisagra pura unipedal glúteos e isquios.", sets: 2, rir: "1-2" },
      { name: "45° Hyperextension", calisthenics_substitution: "Back Extension", reason: "Flexibilidad activa y descompresión lumbar.", sets: 2, rir: "1-2" }
    ]
  },
  5: {
    dayTitle: "Day 5: Arms + Delts (Brazo & Hombro)",
    exercises: [
      { name: "Standing DB Curl / Incline DB Curl", calisthenics_substitution: "Chin-Up", reason: "Flexión de codo con estiramiento en bíceps.", sets: 2, rir: "1-2" },
      { name: "Skull Crusher / Triceps Cable Pushdown", calisthenics_substitution: "Close-Grip Pushup", reason: "Sobrecarga en tríceps con alineación neutra.", sets: 2, rir: "1-2" },
      { name: "Preacher Hammer Curl", calisthenics_substitution: "Chin-Up", reason: "Aislamiento braquial anterior.", sets: 2, rir: "1-2" },
      { name: "Close Grip Dip", calisthenics_substitution: "Assisted Floor Dip", reason: "Empuje vertical en suspensión para manguito.", sets: 2, rir: "1-2" }
    ]
  }
};

export default function DrawerMiniFitnessViewer({ dayName, workoutDayIndex, onOpenExerciseModal }: Props) {
  const routineIndex = workoutDayIndex || (dayName === 'Lunes' ? 1 : dayName === 'Martes' ? 2 : dayName === 'Miércoles' ? 3 : dayName === 'Jueves' ? 4 : dayName === 'Viernes' ? 5 : 1);
  const currentRoutine = workoutRoutines[routineIndex] || workoutRoutines[1];

  // Tracker state saved in localStorage
  const storageKey = `fitapp_log_day_${routineIndex}`;
  const [completedSets, setCompletedSets] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCompletedSets(JSON.parse(saved));
      } else {
        setCompletedSets({});
      }
    } catch (e) {
      console.error(e);
    }
  }, [routineIndex]);

  const toggleSet = (exerciseIndex: number, setIndex: number) => {
    const key = `${exerciseIndex}-${setIndex}`;
    const nextState = { ...completedSets, [key]: !completedSets[key] };
    setCompletedSets(nextState);
    try {
      localStorage.setItem(storageKey, JSON.stringify(nextState));
    } catch (e) {
      console.error(e);
    }
  };

  const totalSets = currentRoutine.exercises.reduce((acc, curr) => acc + curr.sets, 0);
  const doneSetsCount = Object.values(completedSets).filter(Boolean).length;
  const progressPct = totalSets > 0 ? Math.round((doneSetsCount / totalSets) * 100) : 0;

  const handleExerciseClick = (exName: string) => {
    const found = findExerciseByName(exName);
    if (found) {
      onOpenExerciseModal(found);
    } else {
      onOpenExerciseModal({
        name: exName,
        category: 'Calisthenics',
        discipline: 'Calisthenics',
        techniquePoints: ['Mantener la técnica controlada con tempo 3-0-3.', 'Respiración diafragmática constante.'],
        muscles: { strength: ['Músculos Objetivos'] }
      });
    }
  };

  return (
    <div style={{
      background: 'rgba(5, 8, 12, 0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(16, 185, 129, 0.25)',
      borderRadius: '20px',
      padding: '18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: '12px'
    }}>
      {/* HEADER & PROGRESS BAR */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-state-done)', fontWeight: 700 }}>
            MINI-VENTANA FITNESS FITAPP
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
            Progreso: {doneSetsCount}/{totalSets} series ({progressPct}%)
          </span>
        </div>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 8px', color: 'var(--color-text-primary)' }}>
          {currentRoutine.dayTitle}
        </h4>
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
          <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(90deg, #10b981, #77e7ff)', transition: 'width 250ms ease' }} />
        </div>
      </div>

      {/* EXERCISE LIST WITH TRACKER */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {currentRoutine.exercises.map((ex, exIdx) => (
          <div
            key={exIdx}
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {/* EXERCISE HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
              <div>
                <button
                  type="button"
                  onClick={() => handleExerciseClick(ex.calisthenics_substitution)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--color-state-done)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>⚡ {ex.calisthenics_substitution}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-accent-danger)', background: 'rgba(239,68,68,0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                    ▶ FitApp Video
                  </span>
                </button>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', marginTop: '2px' }}>
                  Original: {ex.name}
                </span>
              </div>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-accent-primary)', background: 'rgba(119,231,255,0.1)', padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                RIR {ex.rir}
              </span>
            </div>

            {/* REASON CUE */}
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', lineHeight: 1.35 }}>
              💡 {ex.reason}
            </span>

            {/* SETS CHECKBOXES (FITAPP STYLE) */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Series:</span>
              {Array.from({ length: ex.sets }).map((_, setIdx) => {
                const isChecked = !!completedSets[`${exIdx}-${setIdx}`];
                return (
                  <button
                    key={setIdx}
                    type="button"
                    onClick={() => toggleSet(exIdx, setIdx)}
                    style={{
                      background: isChecked ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${isChecked ? 'var(--color-state-done)' : 'rgba(255, 255, 255, 0.15)'}`,
                      color: isChecked ? 'var(--color-state-done)' : 'var(--color-text-secondary)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all 150ms ease'
                    }}
                  >
                    <span>{isChecked ? '✓' : '○'}</span>
                    <span>Set {setIdx + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
