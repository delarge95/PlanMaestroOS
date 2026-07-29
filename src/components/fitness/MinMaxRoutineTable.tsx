import React, { useState } from 'react';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';
import ExerciseModal from './ExerciseModal';
import ErrorBoundary from '../ErrorBoundary';

interface Exercise {
  name: string;
  calisthenics_substitution: string;
  reason: string;
  sets: number;
  rir: string;
}

interface DayWorkout {
  day_name: string;
  exercises: Exercise[];
}

const minMaxRoutineData: Record<number, DayWorkout[]> = {
  1: [
    {
      day_name: "Day 1: Upper 1 (Empuje & Pecho)",
      exercises: [
        {
          name: "Barbell Bench Press / DB Incline Press",
          calisthenics_substitution: "Pseudo Planche Pushups",
          reason: "Permite abducción y rotación natural de escápula/hombro izquierdo evitando pinzamiento.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Cable Flye",
          calisthenics_substitution: "Archer Ring Rows",
          reason: "Tensión constante en pectoral mayor con carga de peso corporal autorregulada.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Machine Lateral Raise",
          calisthenics_substitution: "Ring Lateral Leans",
          reason: "Aislamiento de deltoides lateral sin carga axial en columna.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "1-Arm Cable Overhead Triceps Extension",
          calisthenics_substitution: "Bench Dip",
          reason: "Enfoque en cabeza larga del tríceps protegiendo la inserción del codo.",
          sets: 2,
          rir: "1-2"
        }
      ]
    },
    {
      day_name: "Day 2: Lower 1 (Cuádriceps & Tendón Rotuliano)",
      exercises: [
        {
          name: "Nordic Ham Curl / Lying Leg Curl",
          calisthenics_substitution: "Asian squat",
          reason: "Fuerza excéntrica pura en isquiotibiales para estabilidad posterior de rodilla.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Leg Press / Barbell Lunge",
          calisthenics_substitution: "Box pistol",
          reason: "Fuerza unilateral de cuádriceps sin compresión lumbar.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Leg Extension",
          calisthenics_substitution: "Bodyweight Squat",
          reason: "Anestesia tendinosa rotuliana e hipertrofia aislada con tempo 3-0-3.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Donkey Calf Raise / Seated Calf Raise",
          calisthenics_substitution: "Bodyweight Hip Thrust",
          reason: "Fortalecimiento de complejo gemelo-sóleo con rango completo.",
          sets: 2,
          rir: "1-2"
        }
      ]
    },
    {
      day_name: "Day 3: Upper 2 (Tracción & Espalda)",
      exercises: [
        {
          name: "Lat Pulldown / 1-Arm Cable Pulldown",
          calisthenics_substitution: "Chin-Up",
          reason: "Tirón vertical de máxima sobrecarga para dorsal ancho y estabilidad escapular.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Seated Cable Row / T-Bar Row",
          calisthenics_substitution: "Archer Ring Rows",
          reason: "Tirón horizontal unilateral con fuerte trabajo de romboides y deltoides posterior.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Cable Shrug-In",
          calisthenics_substitution: "Compression Work",
          reason: "Estabilidad del trapecio superior y postura de cabeza/cuello.",
          sets: 2,
          rir: "1-2"
        }
      ]
    },
    {
      day_name: "Day 4: Lower 2 (Cadena Posterior & Bisagra)",
      exercises: [
        {
          name: "Hack Squat / Leg Extension",
          calisthenics_substitution: "Bodyweight Squat",
          reason: "Rehabilitación de tendinopatía HSR (Heavy Slow Resistance).",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Romanian Deadlift / Cable Deadlift",
          calisthenics_substitution: "Bodyweight Round-Back 45° Hyperextension",
          reason: "Trabajo unipedal de glúteos e isquios en bisagra pura de cadera.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "45° Hyperextension",
          calisthenics_substitution: "Back Extension",
          reason: "Flexibilidad activa y descompresión de discos lumbares.",
          sets: 2,
          rir: "1-2"
        }
      ]
    },
    {
      day_name: "Day 5: Arms + Delts (Brazo & Hombro)",
      exercises: [
        {
          name: "Standing DB Curl / Incline DB Curl",
          calisthenics_substitution: "Chin-Up",
          reason: "Flexión de codo con estiramiento del bíceps en extensión de hombro.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Skull Crusher / Triceps Cable Pushdown",
          calisthenics_substitution: "Close-Grip Pushup",
          reason: "Sobrecarga en tríceps con alineación de muñecas en paralelas.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Preacher Hammer Curl",
          calisthenics_substitution: "Chin-Up",
          reason: "Aislamiento del braquial anterior reduciendo tensión en muñecas.",
          sets: 2,
          rir: "1-2"
        },
        {
          name: "Close Grip Dip",
          calisthenics_substitution: "Assisted Floor Dip",
          reason: "Empuje vertical en suspensión desarrollando manguito rotador y codo.",
          sets: 2,
          rir: "1-2"
        }
      ]
    }
  ]
};

export default function MinMaxRoutineTable() {
  const [selectedBlock, setSelectedBlock] = useState<number>(1);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [activeExercise, setActiveExercise] = useState<ExerciseEntry | null>(null);

  const currentWorkouts = minMaxRoutineData[1];

  const handleOpenExercise = (exerciseName: string) => {
    const found = findExerciseByName(exerciseName);
    if (found) {
      setActiveExercise(found);
    } else {
      // Fallback object if not in FitApp dataset
      setActiveExercise({
        name: exerciseName,
        category: 'Rutina Personalizada',
        discipline: 'Calisthenics',
        techniquePoints: ['Realizar movimiento controlado con tempo 3-0-3.', 'Mantener el core activado y respiración constante.'],
        muscles: { strength: ['Músculos Objetivos del Programa'] }
      });
    }
  };

  return (
    <ErrorBoundary>
      <div style={{ 
        background: 'rgba(10, 15, 20, 0.65)', 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '24px', 
        padding: '24px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
      }}>
        {/* HEADER SECTION */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-state-done)', fontWeight: 700, letterSpacing: '0.05em' }}>
              ROUTINES & CALISTHENICS SUBSTITUTIONS • CONECTADO A FITAPP
            </span>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '4px 0 0', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
              The Min-Max Program (Jeff Nippard & Overcoming Gravity)
            </h2>
          </div>

          {/* BLOCK & WEEK SELECTOR WITH TYPE BUTTON */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px', borderRadius: '10px', display: 'flex', gap: '4px' }}>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); setSelectedBlock(1); setSelectedWeek(1); }}
                style={{
                  background: selectedBlock === 1 ? 'var(--color-state-done)' : 'transparent',
                  color: selectedBlock === 1 ? '#040608' : 'var(--color-text-secondary)',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                Bloque 1 (Sem 1-6)
              </button>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); setSelectedBlock(2); setSelectedWeek(7); }}
                style={{
                  background: selectedBlock === 2 ? 'var(--color-state-done)' : 'transparent',
                  color: selectedBlock === 2 ? '#040608' : 'var(--color-text-secondary)',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                Bloque 2 (Sem 7-12)
              </button>
            </div>

            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(Number(e.target.value))}
              style={{
                background: 'rgba(0,0,0,0.5)',
                color: 'var(--color-state-done)',
                border: '1px solid #10b981',
                padding: '6px 12px',
                borderRadius: '10px',
                fontFamily: 'Azeret Mono, monospace',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((w) => (
                <option key={w} value={w}>Semana {w} {w === selectedWeek ? ' (Activa)' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        {/* METADATA BANNER */}
        <div style={{ 
          background: 'rgba(16, 185, 129, 0.08)', 
          border: '1px solid rgba(16, 185, 129, 0.2)', 
          padding: '14px 18px', 
          borderRadius: '16px', 
          marginBottom: '24px', 
          fontSize: '0.85rem', 
          color: 'var(--color-text-secondary)', 
          display: 'flex', 
          gap: '20px', 
          flexWrap: 'wrap' 
        }}>
          <div><strong style={{ color: 'var(--color-state-done)' }}>Estructura:</strong> 5 días/sem (45 min) • RIR {selectedBlock === 1 ? '1-2' : '0-1'}</div>
          <div><strong style={{ color: 'var(--color-accent-primary)' }}>Regla HSR Tempo:</strong> 3-0-3 en empujes y piernas</div>
          <div><strong style={{ color: 'var(--color-accent-warning)' }}>Tip:</strong> Haz clic en cualquier ejercicio para ver video de FitApp y guía técnica.</div>
        </div>

        {/* WORKOUT DAYS GRID */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {currentWorkouts.map((day, idx) => (
            <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>{day.day_name}</h3>
                <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-state-done)', background: 'rgba(16,185,129,0.12)', padding: '4px 10px', borderRadius: '999px' }}>
                  {day.exercises.length} Ejercicios
                </span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: 'rgba(0,0,0,0.4)', color: 'var(--color-text-tertiary)', borderBottom: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Azeret Mono, monospace', fontSize: '0.7rem' }}>
                      <th style={{ padding: '12px 18px', width: '28%' }}>EJERCICIO BASE NIPPARD</th>
                      <th style={{ padding: '12px 18px', width: '38%' }}>VARIACIÓN CALISTENIA FITAPP</th>
                      <th style={{ padding: '12px 18px', width: '24%' }}>JUSTIFICACIÓN CLÍNICA</th>
                      <th style={{ padding: '12px 18px', width: '10%', textAlign: 'center' }}>SERIES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.exercises.map((ex, eIdx) => (
                      <tr key={eIdx} style={{ borderBottom: eIdx === day.exercises.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '14px 18px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                          {ex.name.includes('/') || ex.name.toLowerCase().includes(' or ') ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {ex.name.split(/\s*[/]\s*|\s+or\s+/i).map((part, pIdx) => (
                                <button
                                  key={pIdx}
                                  type="button"
                                  onClick={() => handleOpenExercise(part.trim())}
                                  style={{
                                    background: 'rgba(10, 132, 255, 0.12)',
                                    border: '1px solid rgba(10, 132, 255, 0.3)',
                                    borderRadius: '8px',
                                    padding: '5px 10px',
                                    color: 'var(--color-accent-primary)',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                  }}
                                >
                                  <span>📍 {part.trim()}</span>
                                </button>
                              ))}
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleOpenExercise(ex.name)}
                              style={{ background: 'none', border: 'none', color: 'var(--color-text-primary)', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '0.85rem', textDecoration: 'underline', fontWeight: 700 }}
                            >
                              {ex.name}
                            </button>
                          )}
                        </td>
                        <td style={{ padding: '14px 18px' }}>
                          <button
                            type="button"
                            onClick={() => handleOpenExercise(ex.calisthenics_substitution)}
                            style={{
                              background: 'rgba(16,185,129,0.12)',
                              border: '1px solid rgba(16,185,129,0.3)',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              color: 'var(--color-state-done)',
                              fontWeight: 700,
                              fontSize: '0.82rem',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 150ms ease'
                            }}
                          >
                            <span>⚡ {ex.calisthenics_substitution}</span>
                            <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>▶ Info</span>
                          </button>
                        </td>
                        <td style={{ padding: '14px 18px', color: 'var(--color-text-secondary)', fontSize: '0.82rem', lineHeight: 1.4 }}>
                          {ex.reason}
                        </td>
                        <td style={{ padding: '14px 18px', textAlign: 'center', fontFamily: 'Azeret Mono, monospace', fontWeight: 700, color: 'var(--color-accent-primary)' }}>
                          {ex.sets} × RIR {ex.rir}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL FOR CLICKED EXERCISES */}
        <ExerciseModal exercise={activeExercise} onClose={() => setActiveExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
