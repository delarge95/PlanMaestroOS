import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import MinMaxRoutineTable from './MinMaxRoutineTable';
import ExerciseModal from './ExerciseModal';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';

export default function FitAppRoutinesCatalog() {
  const [selectedProgram, setSelectedProgram] = useState<'minmax' | 'powerbuilding' | 'glute'>('minmax');
  const [modalExercise, setModalExercise] = useState<ExerciseEntry | null>(null);

  const openExerciseModal = (name: string) => {
    const found = findExerciseByName(name);
    if (found) {
      setModalExercise(found);
    } else {
      setModalExercise({
        name: name,
        category: 'FitApp-Free Routine Exercise',
        discipline: 'Fitness',
        techniquePoints: ['Ejecutar con tempo controlado 3-0-3.', 'Respetar RIR/RPE y series de calentamiento indicadas.'],
        muscles: { strength: ['Músculos objetivos de la rutina'] }
      });
    }
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#ffffff' }}>
        {/* TOP SELECTOR BAR FOR OFFICIAL FITAPP-FREE PROGRAMS */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '6px', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            type="button"
            onClick={() => setSelectedProgram('minmax')}
            style={{
              background: selectedProgram === 'minmax' ? '#30d158' : 'transparent',
              color: selectedProgram === 'minmax' ? '#000000' : '#8e8e93',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: selectedProgram === 'minmax' ? 800 : 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            📋 Jeff Nippard Min-Max Program (Principal Válida)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('powerbuilding')}
            style={{
              background: selectedProgram === 'powerbuilding' ? '#0a84ff' : 'transparent',
              color: selectedProgram === 'powerbuilding' ? '#ffffff' : '#8e8e93',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: selectedProgram === 'powerbuilding' ? 800 : 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🏋️ Powerbuilding Program (FitApp Base 4 Días)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('glute')}
            style={{
              background: selectedProgram === 'glute' ? '#bf5af2' : 'transparent',
              color: selectedProgram === 'glute' ? '#ffffff' : '#8e8e93',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: selectedProgram === 'glute' ? 800 : 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🍑 Jeff Nippard Glute Hypertrophy Program
          </button>
        </div>

        {/* PROGRAM 1: JEFF NIPPARD MIN-MAX (PRIMARY VALID ROUTINE) */}
        {selectedProgram === 'minmax' && <MinMaxRoutineTable />}

        {/* PROGRAM 2: FITAPP POWERBUILDING PROGRAM */}
        {selectedProgram === 'powerbuilding' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#0a84ff', fontWeight: 800 }}>
                RUTINA OFICIAL FITAPP-FREE • WORKOUTPROGRAM.TS
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>
                FitApp Powerbuilding Program (Full Body 4 Días)
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>Day 1: Full Body 1 (Squat, OHP)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Back Squat')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Back Squat</button>: 3 series (75-80% 1RM)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Overhead Press')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Overhead Press</button>: 3x8 (RPE 7.5)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Glute Ham Raise')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Glute Ham Raise / Nordic</button>: 3x8-10</li>
                  <li><button type="button" onClick={() => openExerciseModal('Helms Row')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Helms Row</button>: 3x12-15</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>Day 2: Full Body 2 (Deadlift, Bench)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Deadlift')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Deadlift</button>: 3x4 (80% 1RM)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Barbell Bench Press')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Barbell Bench Press</button>: Top Set + 2x10</li>
                  <li><button type="button" onClick={() => openExerciseModal('Weighted Pullup')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Weighted Pull-Up</button>: 3x5-8</li>
                  <li><button type="button" onClick={() => openExerciseModal('Floor Skull Crusher')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Floor Skull Crusher</button>: 3x10-12</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>Day 3: Full Body 3 (Squat, Dip)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Back Squat')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Back Squat</button>: 3x4 (80% 1RM)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Weighted Dip')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Weighted Dip</button>: 3x8</li>
                  <li><button type="button" onClick={() => openExerciseModal('Face Pull')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Face Pull</button>: 4x15-20</li>
                  <li><button type="button" onClick={() => openExerciseModal('Hanging Leg Raise')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Hanging Leg Raise</button>: 3x10-12</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* PROGRAM 3: JEFF NIPPARD GLUTE HYPERTROPHY */}
        {selectedProgram === 'glute' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#bf5af2', fontWeight: 800 }}>
                RUTINA OFICIAL FITAPP-FREE • JEFFNIPPARDGLUTEPROGRAM.TS
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>
                Jeff Nippard Glute Hypertrophy Program (5 Días)
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>Day 1: Lower Body (Fuerza Base)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Back Squat')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Back Squat (Postura Ancha)</button>: 3x5 (75-80%)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Barbell RDL')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Barbell RDL</button>: 3x6-8</li>
                  <li><button type="button" onClick={() => openExerciseModal('Seated Leg Curl')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Seated Leg Curl</button>: 3x12-15</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>Day 3: Lower Body (Hipertrofia Glúteo)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Barbell Hip Thrust')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Barbell Hip Thrust</button>: 3x8-10 + Dropset</li>
                  <li><button type="button" onClick={() => openExerciseModal('Cable Pullthrough')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Cable Pullthrough</button>: 3x10-12</li>
                  <li><button type="button" onClick={() => openExerciseModal('Cable Glute Kick Back')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Cable Glute Kickback</button>: 3x12-15</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>Day 5: Lower Body (Densidad)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Walking Lunge')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Walking Lunge</button>: 3x20 zancadas</li>
                  <li><button type="button" onClick={() => openExerciseModal('Lower Back Extension')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Hyperextension 45°</button>: 3x15-20</li>
                  <li><button type="button" onClick={() => openExerciseModal('Frog Pump')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Frog Pumps</button>: 2x30-50</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* EXERCISE DETAIL MODAL */}
        <ExerciseModal exercise={modalExercise} onClose={() => setModalExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
