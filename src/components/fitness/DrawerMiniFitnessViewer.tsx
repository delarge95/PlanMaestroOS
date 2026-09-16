// src/components/fitness/DrawerMiniFitnessViewer.tsx
// A3 (AG-FIT): consume la fuente única src/data/exercises/fitappRoutineDataset.ts.
//
// DESVIACIONES DOCUMENTADAS entre las copias históricas de la rutina Min-Max:
// 1. ESTE archivo tenía una copia embebida (`workoutRoutines`) con 3-5 ejercicios
//    por día y "reason" corto — copia editorial antigua, YA NO CANÓNICA. Eliminada.
// 2. src/data/fitness/programs/minMax.ts es la copia de TRACKER (prescripciones
//    con id, sustituciones y validadores). Se mantiene: alimenta activeProgramStore
//    y el logger. Diferencia menor vs dataset: nombres exactos de ejercicio y
//    desglose de sustituciones (substitutionOption1/2) en vez de (subOption1/2).
// 3. CANÓNICA para visualización compacta: fitappRoutineDataset.ts (week 1
//    PDF-accurate, 12 semanas generadas con bloques/deloads).
//    - El "reason" de la copia vieja se reemplaza por las `notes` del dataset.
//    - El ejercicio mostrado como principal es la sustitución calisténica
//      (calisthenicsSub) cuando existe; el original queda como subtítulo.
import React, { useState, useEffect } from 'react';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';
import { minMaxWeeks } from '../../data/exercises/fitappRoutineDataset';

interface Props {
  dayName: string;
  workoutDayIndex?: number;
  onOpenExerciseModal: (exercise: ExerciseEntry) => void;
}

export default function DrawerMiniFitnessViewer({ dayName, workoutDayIndex, onOpenExerciseModal }: Props) {
  const routineIndex = workoutDayIndex ?? (dayName === 'Lunes' ? 1 : dayName === 'Martes' ? 2 : dayName === 'Miércoles' ? 3 : dayName === 'Jueves' ? 4 : dayName === 'Viernes' ? 5 : 1);

  // Semana 1 del dataset (12 semanas comparten estructura; la mini-ventana
  // muestra la plantilla base — la semana específica vive en el tracker).
  const currentRoutine = minMaxWeeks[0]?.days[routineIndex - 1] ?? minMaxWeeks[0]?.days[0];

  const fallbackExercise: ExerciseEntry = {
    name: 'Ejercicio',
    category: 'Calisthenics',
    discipline: 'Calisthenics',
    techniquePoints: ['Mantener la técnica controlada con tempo 3-0-3.', 'Respiración diafragmática constante.'],
    muscles: { strength: ['Músculos Objetivos'] }
  };

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

  if (!currentRoutine) return null;

  const exerciseList = currentRoutine.exercises.map((ex) => ({
    name: ex.name,
    primary: ex.calisthenicsSub || ex.name,
    reason: ex.notes,
    sets: typeof ex.sets === 'number' ? ex.sets : parseInt(String(ex.sets), 10) || 2,
    rir: ex.rirOrRpe
  }));

  const totalSets = exerciseList.reduce((acc, curr) => acc + curr.sets, 0);
  const doneSetsCount = Object.values(completedSets).filter(Boolean).length;
  const progressPct = totalSets > 0 ? Math.round((doneSetsCount / totalSets) * 100) : 0;

  const handleExerciseClick = (exName: string) => {
    const found = findExerciseByName(exName.split('/')[0].trim());
    onOpenExerciseModal(found ?? { ...fallbackExercise, name: exName });
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
          <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
            Progreso: {doneSetsCount}/{totalSets} series ({progressPct}%)
          </span>
        </div>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 8px', color: 'var(--color-text-primary)' }}>
          {currentRoutine.dayName}
        </h4>
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #10b981, #77e7ff)',
              transformOrigin: 'left center',
              transform: `scaleX(${Math.max(0, Math.min(1, progressPct / 100))})`,
              transition: 'transform 250ms ease'
            }}
          />
        </div>
      </div>

      {/* EXERCISE LIST WITH TRACKER */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {exerciseList.map((ex, exIdx) => (
          <div
            key={`${ex.name}-${exIdx}`}
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
                  onClick={() => handleExerciseClick(ex.primary)}
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
                  <span>⚡ {ex.primary}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-accent-danger)', background: 'rgba(239,68,68,0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                    ▶ FitApp Video
                  </span>
                </button>
                {ex.primary !== ex.name && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', marginTop: '2px' }}>
                    Original: {ex.name}
                  </span>
                )}
              </div>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--accent)', background: 'rgba(119,231,255,0.1)', padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                {ex.rir}
              </span>
            </div>

            {/* REASON CUE (dataset notes) */}
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', lineHeight: 1.35 }}>
              💡 {ex.reason}
            </span>

            {/* SETS CHECKBOXES (FITAPP STYLE) */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px', flexWrap: 'wrap' }}>
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
