import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import MinMaxRoutineTable from './MinMaxRoutineTable';

export default function FitAppRoutinesCatalog() {
  const [selectedProgram, setSelectedProgram] = useState<'minmax' | 'calisthenics' | 'knee_hsr' | 'hypertrophy'>('minmax');

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
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#0a84ff', fontWeight: 800 }}>
              PROGRAMA DE PROGRESIONES CALISTÉNICAS FITAPP-FREE
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
              Anillas de Gimnasia & Skills de Fuerza Corporal
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#0a84ff', display: 'block', fontSize: '0.95rem' }}>Nivel 1: Pushups en Anillas → Pseudo Planche</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>3 series × 8-12 reps • Enfoque en inclinación escapular y rotación externa.</p>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#0a84ff', display: 'block', fontSize: '0.95rem' }}>Nivel 2: Fondos Asistidos → Fondos en Anillas</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>3 series × 6-10 reps • Bloqueo en soporte superior obligatorio.</p>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#0a84ff', display: 'block', fontSize: '0.95rem' }}>Nivel 3: Archer Ring Rows → Dominada Lastrada</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>3 series × 8-10 reps • Control excéntrico de 3 segundos.</p>
              </div>
            </div>
          </div>
        )}

        {selectedProgram === 'knee_hsr' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#ff9f0a', fontWeight: 800 }}>
              PROTOCOLO DE REHABILITACIÓN DE TENDINOPATÍA (OVERCOMING TENDONITIS)
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
              Heavy Slow Resistance (HSR) Rodilla & Hombro
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#ff9f0a', display: 'block', fontSize: '0.95rem' }}>Fase 1: Isométricos Analgésicos (Spanish Squats)</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>5 series × 45s sostén a 60° de flexión • Sin molestia posterior.</p>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#ff9f0a', display: 'block', fontSize: '0.95rem' }}>Fase 2: Carga Isotónica Lenta HSR (Tempo 3-0-3)</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>3 series × 12 reps con 3s de bajada y 3s de subida en Prensa/Leg Extension.</p>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#ff9f0a', display: 'block', fontSize: '0.95rem' }}>Fase 3: Reintroducción de Carga Excéntrica (Nordics)</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>3 series × 6-8 reps lentas de Nordic Hamstrings & Elephant Walks.</p>
              </div>
            </div>
          </div>
        )}

        {selectedProgram === 'hypertrophy' && (
          <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'SF Mono, monospace', color: '#bf5af2', fontWeight: 800 }}>
              RUTINA ESTÁNDAR HIPERTROFIA FITAPP-FREE (PULL/PUSH/LEGS)
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
              División Estándar 3 Días Frecuencia 2
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#bf5af2', display: 'block', fontSize: '0.95rem' }}>Día Push: Pecho / Hombro / Tríceps</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>Press Plano, Press Inclinado, Elevaciones Laterales, Extensiones Tríceps.</p>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#bf5af2', display: 'block', fontSize: '0.95rem' }}>Día Pull: Espalda / Bíceps / Deltoides Posterior</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>Dominadas, Remo con Barra, Face Pulls, Curl Inclinado.</p>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px' }}>
                <strong style={{ color: '#bf5af2', display: 'block', fontSize: '0.95rem' }}>Día Legs: Cuádriceps / Isquios / Gemelos</strong>
                <p style={{ fontSize: '0.8rem', color: '#98989d', margin: '4px 0 0' }}>Sentadilla Búlgara, Prensa, PM Rumano, Gemelos de Pie.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
