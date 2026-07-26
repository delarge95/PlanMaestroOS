import React, { useState } from 'react';
import ClinicalCurrentBlockPanel from './ClinicalCurrentBlockPanel';
import FocusModeShell from './FocusModeShell';
import ErrorBoundary from '../ErrorBoundary';

export default function HomeClinicalDashboard() {
  const [isFocusActive, setIsFocusActive] = useState<boolean>(false);

  return (
    <ErrorBoundary>
      <FocusModeShell isActive={isFocusActive} onExit={() => setIsFocusActive(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* CENTRAL CLINICAL PANEL "AHORA" */}
          <ClinicalCurrentBlockPanel
            isFocusModeActive={isFocusActive}
            onToggleFocusMode={() => setIsFocusActive(!isFocusActive)}
          />

          {/* 3 DAILY PRIORITIES & CLINICAL SCAFFOLDING */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {/* 3 TASKS CARD */}
            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.12)', padding: '4px 10px', borderRadius: '999px', fontWeight: 800, width: 'fit-content' }}>
                REGLA TDAH: MÁXIMO 3 TAREAS HOY
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                Prioridades Inviolables del Día
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(119,231,255,0.2)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.88rem', color: '#ffffff', display: 'block' }}>1. TwinSight MVP & Tesis</strong>
                    <span style={{ fontSize: '0.75rem', color: '#77e7ff' }}>Bloque A (09:20 - 11:40) • Versión Mala</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#10b981', background: 'rgba(16,185,129,0.15)', padding: '2px 6px', borderRadius: '4px' }}>En curso</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.88rem', color: '#ffffff', display: 'block' }}>2. Ensayo Sustentación CBT</strong>
                    <span style={{ fontSize: '0.75rem', color: '#c084fc' }}>Exposición (14:00 - 14:40) • 3 Ideas</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#a8b9b2', background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>Pendiente</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', padding: '12px 14px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.88rem', color: '#ffffff', display: 'block' }}>3. Alemán A1 Diario (v3)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#fcd34d' }}>13:30 - 14:00 • 5m Duolingo + 20m A1</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#a8b9b2', background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>Pendiente</span>
                </div>
              </div>
            </div>

            {/* EMOTIONAL REGULATION & CLINICAL PERMISSION CARD */}
            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#c084fc', background: 'rgba(168, 85, 247, 0.12)', padding: '4px 10px', borderRadius: '999px', fontWeight: 800, width: 'fit-content' }}>
                REGULACIÓN EMOCIONAL & PERMISO
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                Principios Terapéuticos Activos
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem', color: '#a8b9b2', lineHeight: 1.45 }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid #10b981' }}>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Suficientemente Terminado &gt; Ideal:</strong>
                  Cierra la tarea cuando cumpla el criterio mínimo sin seguir refinando indefinidamente.
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid #c084fc' }}>
                  <strong style={{ color: '#ffffff', display: 'block' }}>El Descanso No Se Gana:</strong>
                  El sueño y el ocio son parte de la salud mental y la función cognitiva, no un premio condicionado al rendimiento.
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 12px', borderRadius: '10px', borderLeft: '3px solid #77e7ff' }}>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Paso de Reentrada Escrito:</strong>
                  Antes de levantarte de la mesa, deja escrita la primera acción exacta de 2 min.
                </div>
              </div>
            </div>
          </div>
        </div>
      </FocusModeShell>
    </ErrorBoundary>
  );
}
