import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import MinMaxRoutineTable from './MinMaxRoutineTable';
import ExerciseModal from './ExerciseModal';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';

export default function FitAppRoutinesCatalog() {
  const [selectedProgram, setSelectedProgram] = useState<'minmax' | 'calisthenics' | 'knee_hsr' | 'hypertrophy'>('minmax');
  const [modalExercise, setModalExercise] = useState<ExerciseEntry | null>(null);

  const openExerciseModal = (name: string) => {
    const found = findExerciseByName(name);
    if (found) setModalExercise(found);
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#ffffff' }}>
        {/* PROGRAM SELECTOR BAR */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '6px', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            type="button"
            onClick={() => setSelectedProgram('minmax')}
            style={{
              background: selectedProgram === 'minmax' ? '#30d158' : 'transparent',
              color: selectedProgram === 'minmax' ? '#000000' : '#8e8e93',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: selectedProgram === 'minmax' ? 800 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            📋 Min-Max Program (Jeff Nippard 12 Semanas)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('calisthenics')}
            style={{
              background: selectedProgram === 'calisthenics' ? '#0a84ff' : 'transparent',
              color: selectedProgram === 'calisthenics' ? '#ffffff' : '#8e8e93',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: selectedProgram === 'calisthenics' ? 800 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🤸 Calistenia Híbrida Anillas & Skills (Overcoming Gravity)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('knee_hsr')}
            style={{
              background: selectedProgram === 'knee_hsr' ? '#ff9f0a' : 'transparent',
              color: selectedProgram === 'knee_hsr' ? '#000000' : '#8e8e93',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: selectedProgram === 'knee_hsr' ? 800 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🦵 Rehabilitación HSR Rodilla & Hombro (Tendonitis)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('hypertrophy')}
            style={{
              background: selectedProgram === 'hypertrophy' ? '#bf5af2' : 'transparent',
              color: selectedProgram === 'hypertrophy' ? '#ffffff' : '#8e8e93',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: selectedProgram === 'hypertrophy' ? 800 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            💪 Hipertrofia & Fuerza FitApp-Free Standard
          </button>
        </div>

        {/* PROGRAM CONTENT */}
        {selectedProgram === 'minmax' && <MinMaxRoutineTable />}

        {selectedProgram === 'calisthenics' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#0a84ff', fontWeight: 800 }}>
                PROGRAMA DE PROGRESIONES CALISTÉNICAS FITAPP-FREE
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>
                Anillas de Gimnasia & Skills de Fuerza Corporal
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>🤸 Handstand & Support Hold (Skill AM)</strong>
                <span style={{ fontSize: '0.78rem', color: '#98989d' }}>Foco en alineación neutra y protracción escapular</span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Wall Handstand')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Wall Handstand</button>: 3x45s</li>
                  <li><button type="button" onClick={() => openExerciseModal('Ring Support Hold')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Support Hold en Anillas</button>: 3x30s</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>💪 Empuje en Anillas & Tuck Planche</strong>
                <span style={{ fontSize: '0.78rem', color: '#98989d' }}>Fuerza avanzada de torso en superficie inestable</span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Ring Dips')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Fondos en Anillas</button>: 3x8-10 reps</li>
                  <li><button type="button" onClick={() => openExerciseModal('Pseudo Planche Pushups')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Pseudo Planche Pushups</button>: 3x10 reps</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>🧗 Tracción Calisténica Lastrada</strong>
                <span style={{ fontSize: '0.78rem', color: '#98989d' }}>Desarrollo de dorsal y bíceps en anillas</span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Weighted Pullup')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Dominadas Lastradas</button>: 3x6-8 reps (+15kg)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Archer Rows')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Archer Ring Rows</button>: 3x8 reps/lado</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedProgram === 'knee_hsr' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#ff9f0a', fontWeight: 800 }}>
                PROTOCOLO DE REHABILITACIÓN DE TENDINOPATÍA (OVERCOMING TENDONITIS)
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>
                Heavy Slow Resistance (HSR) Rodilla & Hombro
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#ff9f0a', fontSize: '1rem' }}>🟢 Fase 1: Isométricos Analgésicos Rodilla</strong>
                <span style={{ fontSize: '0.78rem', color: '#98989d' }}>Reducción inmediata del dolor de tendón rotuliano</span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Spanish Squats')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Spanish Squats</button>: 5x45s sostén</li>
                  <li><button type="button" onClick={() => openExerciseModal('Leg Extension')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Leg Extension Isométrico</button>: 3x45s</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#ff9f0a', fontSize: '1rem' }}>🩵 Fase 2: Carga Isotónica Lenta HSR (Tempo 3-0-3)</strong>
                <span style={{ fontSize: '0.78rem', color: '#98989d' }}>Remodelación de colágeno en tendón</span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Box Pistol')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Box Pistol Squat</button>: 3x8 reps (Tempo 3-0-3)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Leg Press')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Leg Press Lento</button>: 3x12 reps</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#ff9f0a', fontSize: '1rem' }}>🟧 Prehab Hombro & Manguito Rotador</strong>
                <span style={{ fontSize: '0.78rem', color: '#98989d' }}>Estabilidad de escápula y articulación glenohumeral</span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Face Pull')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Face Pulls con Polea</button>: 3x15 reps</li>
                  <li><button type="button" onClick={() => openExerciseModal('External Rotation')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Rotaciones Externas con Banda</button>: 3x15 reps</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedProgram === 'hypertrophy' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#bf5af2', fontWeight: 800 }}>
                RUTINA ESTÁNDAR HIPERTROFIA FITAPP-FREE (PULL/PUSH/LEGS)
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>
                División Estándar 3 Días Frecuencia 2
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>💪 Día Push (Pecho, Hombro, Tríceps)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Incline Dumbbell Press')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Press Inclinado Mancuernas</button>: 3x8-10</li>
                  <li><button type="button" onClick={() => openExerciseModal('Cable Lateral Raise')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Elevaciones Laterales Polea</button>: 3x12-15</li>
                  <li><button type="button" onClick={() => openExerciseModal('Overhead Triceps Extension')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Tríceps Copete Polea</button>: 3x10-12</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>🧗 Día Pull (Espalda, Bíceps, Posterior)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Lat Pulldown')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Jalón al Pecho / Dominadas</button>: 3x8-10</li>
                  <li><button type="button" onClick={() => openExerciseModal('Seated Cable Row')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Remo Giro Polea / T-Bar</button>: 3x8-10</li>
                  <li><button type="button" onClick={() => openExerciseModal('Incline Dumbbell Biceps Curl')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Curl Bíceps Banco Inclinado</button>: 3x10-12</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>🦵 Día Legs (Cuádriceps, Isquios, Glúteo)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Barbell RDL')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Peso Muerto Rumano</button>: 3x8-10</li>
                  <li><button type="button" onClick={() => openExerciseModal('Leg Press')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Prensa 45° / Sentadilla</button>: 3x10-12</li>
                  <li><button type="button" onClick={() => openExerciseModal('Standing Calf Raise')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Gemelo de Pie</button>: 4x12-15</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <ExerciseModal exercise={modalExercise} onClose={() => setModalExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
