import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import MinMaxRoutineTable from './MinMaxRoutineTable';
import ExerciseModal from './ExerciseModal';
import { findExerciseByName, type ExerciseEntry } from '../../data/exercises';

export default function FitAppRoutinesCatalog() {
  const [selectedProgram, setSelectedProgram] = useState<'alexander' | 'minmax' | 'gravity' | 'tendonitis' | 'hypertrophy'>('alexander');
  const [selectedPhase, setSelectedPhase] = useState<'fase1' | 'fase2' | 'fase3'>('fase1');
  const [modalExercise, setModalExercise] = useState<ExerciseEntry | null>(null);

  const openExerciseModal = (name: string) => {
    const found = findExerciseByName(name);
    if (found) setModalExercise(found);
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#ffffff' }}>
        {/* TOP SELECTOR BAR FOR ALL PROGRAMS */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '6px', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            type="button"
            onClick={() => setSelectedProgram('alexander')}
            style={{
              background: selectedProgram === 'alexander' ? '#30d158' : 'transparent',
              color: selectedProgram === 'alexander' ? '#000000' : '#8e8e93',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: selectedProgram === 'alexander' ? 800 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            ⭐ Plan Híbrido Alexander (Fase 1 / 2 / 3)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('minmax')}
            style={{
              background: selectedProgram === 'minmax' ? '#64d2ff' : 'transparent',
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
            onClick={() => setSelectedProgram('gravity')}
            style={{
              background: selectedProgram === 'gravity' ? '#0a84ff' : 'transparent',
              color: selectedProgram === 'gravity' ? '#ffffff' : '#8e8e93',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: selectedProgram === 'gravity' ? 800 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🤸 Overcoming Gravity 2nd Ed (Skills & Anillas)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('tendonitis')}
            style={{
              background: selectedProgram === 'tendonitis' ? '#ff9f0a' : 'transparent',
              color: selectedProgram === 'tendonitis' ? '#000000' : '#8e8e93',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: selectedProgram === 'tendonitis' ? 800 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🦵 Overcoming Tendonitis (Protocolo HSR)
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
            💪 FitApp Standard (Push / Pull / Legs)
          </button>
        </div>

        {/* PROGRAM 1: ALEXANDER PERSONAL HYBRID PLAN */}
        {selectedProgram === 'alexander' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#30d158', fontWeight: 800 }}>
                    PLAN FITNESS ALEXANDER • CALISTENIA HÍBRIDA + MIN-MAX + REHABILITACIÓN
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>
                    Estructura Multidisciplinar Adaptada por Fases
                  </h3>
                </div>

                {/* PHASE SELECTOR BUTTONS */}
                <div style={{ display: 'flex', gap: '6px', background: 'rgba(0,0,0,0.3)', padding: '4px', borderRadius: '12px' }}>
                  <button
                    type="button"
                    onClick={() => setSelectedPhase('fase1')}
                    style={{ background: selectedPhase === 'fase1' ? '#30d158' : 'transparent', color: selectedPhase === 'fase1' ? '#000' : '#98989d', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                  >
                    Fase 1: Reaclimatación (Sem 1-4)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPhase('fase2')}
                    style={{ background: selectedPhase === 'fase2' ? '#30d158' : 'transparent', color: selectedPhase === 'fase2' ? '#000' : '#98989d', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                  >
                    Fase 2: Base & HSR (Sem 5-8)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPhase('fase3')}
                    style={{ background: selectedPhase === 'fase3' ? '#30d158' : 'transparent', color: selectedPhase === 'fase3' ? '#000' : '#98989d', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                  >
                    Fase 3: Integración Total (Sem 9+)
                  </button>
                </div>
              </div>

              {/* FASE 1 CONTENT */}
              {selectedPhase === 'fase1' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ background: 'rgba(48,209,88,0.1)', border: '1px solid rgba(48,209,88,0.3)', borderRadius: '14px', padding: '14px', fontSize: '0.84rem', color: '#30d158' }}>
                    <strong>🟢 Objetivo Fase 1:</strong> Reaclimatar tendones, codo y rodillas sin picos bruscos. 1 serie efectiva RPE 6-7 sin buscar el fallo.
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                    {/* AM BLOCK */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <strong style={{ color: '#64d2ff', fontSize: '1rem' }}>☀️ Bloque AM (06:20 – 08:00 Gym / Casa)</strong>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85rem', color: '#fff', lineHeight: 1.6 }}>
                        <li><strong>Prehab 06:20:</strong> Muñecas, Nerve Glides & <button type="button" onClick={() => openExerciseModal('Spanish Squats')} style={{ background: 'none', border: 'none', color: '#30d158', textDecoration: 'underline', cursor: 'pointer' }}>Spanish Squats</button> (3-5x45s)</li>
                        <li><strong>Skill 06:40:</strong> <button type="button" onClick={() => openExerciseModal('Wall Handstand')} style={{ background: 'none', border: 'none', color: '#30d158', textDecoration: 'underline', cursor: 'pointer' }}>Wall Handstand</button> (30-45s) & <button type="button" onClick={() => openExerciseModal('Ring Support Hold')} style={{ background: 'none', border: 'none', color: '#30d158', textDecoration: 'underline', cursor: 'pointer' }}>Support Hold Anillas</button> (30s)</li>
                        <li><strong>Min-Max 06:55:</strong> 1 sola serie efectiva RPE 6-7 por ejercicio. Tempo 3-0-3.</li>
                      </ul>
                    </div>

                    {/* PM BLOCK */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>🌙 Bloque PM (17:15 Movilidad & LISS)</strong>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85rem', color: '#fff', lineHeight: 1.6 }}>
                        <li><strong>Lun / Mié / Vie:</strong> <button type="button" onClick={() => openExerciseModal('Elephant Walks')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Elephant Walks</button> (3x30) + <button type="button" onClick={() => openExerciseModal('90/90 Hip Switches')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>90/90 Switches</button></li>
                        <li><strong>Mar / Jue / Sáb:</strong> Caminata rápida LISS 30 min (BPM 110-130)</li>
                        <li><strong>Domingo:</strong> Descanso total intocable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* FASE 2 CONTENT */}
              {selectedPhase === 'fase2' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ background: 'rgba(100,210,255,0.1)', border: '1px solid rgba(100,210,255,0.3)', borderRadius: '14px', padding: '14px', fontSize: '0.84rem', color: '#64d2ff' }}>
                    <strong>🩵 Objetivo Fase 2:</strong> Construcción de base y movilidad HSR. 2 series efectivas RPE 8 con tempo 3-0-3 en empujes y piernas.
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <strong style={{ color: '#64d2ff', fontSize: '1rem' }}>☀️ Bloque AM (06:20 – 08:00 Gym)</strong>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85rem', color: '#fff', lineHeight: 1.6 }}>
                        <li><strong>Skill 06:40:</strong> Tuck Planche Leans & Compression Work</li>
                        <li><strong>Min-Max 06:55:</strong> 2 series efectivas a RPE 8. <button type="button" onClick={() => openExerciseModal('Pseudo Planche Pushups')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Pseudo Planche Pushups</button> / <button type="button" onClick={() => openExerciseModal('Box Pistol')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Box Pistol</button></li>
                      </ul>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>🌙 Bloque PM (17:15 Negativas & Thurin)</strong>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85rem', color: '#fff', lineHeight: 1.6 }}>
                        <li><strong>Mar / Sáb Gym:</strong> Negativas de Muscle-Up en gym (10s de bajada)</li>
                        <li><strong>Mié / Vie:</strong> Rutina David Thurin FS-Hamstring</li>
                        <li><strong>LISS:</strong> 4 veces por semana 30 min</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* FASE 3 CONTENT */}
              {selectedPhase === 'fase3' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ background: 'rgba(191,90,242,0.1)', border: '1px solid rgba(191,90,242,0.3)', borderRadius: '14px', padding: '14px', fontSize: '0.84rem', color: '#bf5af2' }}>
                    <strong>🟣 Objetivo Fase 3:</strong> Integración total e intensidad máxima RIR 0-1. Drop sets y myo-reps en última serie.
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <strong style={{ color: '#64d2ff', fontSize: '1rem' }}>☀️ Bloque AM (06:20 – 08:00 Gym)</strong>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85rem', color: '#fff', lineHeight: 1.6 }}>
                        <li><strong>Skill:</strong> Handstand Libre & Planche Holds con banda</li>
                        <li><strong>Min-Max:</strong> 2-3 series RIR 0-1. Drop sets en última serie.</li>
                      </ul>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <strong style={{ color: '#bf5af2', fontSize: '1rem' }}>🌙 Bloque PM (17:15 HIIT & Jefferson Curls)</strong>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85rem', color: '#fff', lineHeight: 1.6 }}>
                        <li><strong>Jueves:</strong> HIIT / Sprints 10-15 min</li>
                        <li><strong>Lunes / Viernes:</strong> Caminata larga o Danza + <button type="button" onClick={() => openExerciseModal('Jefferson Curl')} style={{ background: 'none', border: 'none', color: '#bf5af2', textDecoration: 'underline', cursor: 'pointer' }}>Jefferson Curls</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PROGRAM 2: NIPPARD MIN-MAX */}
        {selectedProgram === 'minmax' && <MinMaxRoutineTable />}

        {/* PROGRAM 3: OVERCOMING GRAVITY */}
        {selectedProgram === 'gravity' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#0a84ff', fontWeight: 800 }}>
                OVERCOMING GRAVITY 2ND ED • STEVEN LOW
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>
                Skills de Calistenia Avanzada & Anillas de Gimnasia
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>🤸 Handstand & Balance Vertical</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Wall Handstand')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Chest-to-Wall Handstand</button>: 3x45s</li>
                  <li><button type="button" onClick={() => openExerciseModal('Freestanding Handstand')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Handstand Libre</button>: 5 intentos</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>💪 Progresión de Planche & Anillas</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Tuck Planche')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Tuck Planche Hold</button>: 4x10s</li>
                  <li><button type="button" onClick={() => openExerciseModal('Ring Dips')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Fondos en Anillas</button>: 3x8-10 reps</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#0a84ff', fontSize: '1rem' }}>🧗 Muscle-Up & Front Lever</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Ring Muscle Up')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Negativas de Muscle-Up</button>: 3x5 reps (10s bajada)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Tuck Front Lever')} style={{ background: 'none', border: 'none', color: '#64d2ff', textDecoration: 'underline', cursor: 'pointer' }}>Tuck Front Lever Hold</button>: 4x12s</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* PROGRAM 4: OVERCOMING TENDONITIS */}
        {selectedProgram === 'tendonitis' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#ff9f0a', fontWeight: 800 }}>
                OVERCOMING TENDONITIS • STEVEN LOW
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>
                Heavy Slow Resistance (HSR) Rodilla & Hombro
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#ff9f0a', fontSize: '1rem' }}>🟢 Isométricos Analgésicos (Fase Aguda)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Spanish Squats')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Spanish Squats Isométrico</button>: 5x45s sostén</li>
                  <li><button type="button" onClick={() => openExerciseModal('Ring Support Hold')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Support Hold Hombro</button>: 3x30s</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#ff9f0a', fontSize: '1rem' }}>🩵 Carga Isotónica Lenta HSR (Tempo 3-0-3)</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Box Pistol')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Box Pistol Squat</button>: 3x8 reps (Tempo 3-0-3)</li>
                  <li><button type="button" onClick={() => openExerciseModal('Leg Press')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Leg Press Lento</button>: 3x12 reps</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ color: '#ff9f0a', fontSize: '1rem' }}>🟧 Excéntrico & Remodelado de Tendón</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#fff', lineHeight: 1.6 }}>
                  <li><button type="button" onClick={() => openExerciseModal('Nordic Ham Curl')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Nordic Hamstrings</button>: 3x6 reps lentas</li>
                  <li><button type="button" onClick={() => openExerciseModal('Jefferson Curl')} style={{ background: 'none', border: 'none', color: '#ff9f0a', textDecoration: 'underline', cursor: 'pointer' }}>Jefferson Curls</button>: 3x10 reps</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* PROGRAM 5: FITAPP HYPERTROPHY */}
        {selectedProgram === 'hypertrophy' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#bf5af2', fontWeight: 800 }}>
                RUTINA HIPERTROFIA ESTÁNDAR FITAPP-FREE (PULL / PUSH / LEGS)
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

        {/* MODAL VIEW */}
        <ExerciseModal exercise={modalExercise} onClose={() => setModalExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
