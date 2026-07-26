import React from 'react';

export default function PrehabSkillView() {
  return (
    <div style={{ display: 'grid', gap: '20px', marginTop: '24px' }}>
      {/* PREHAB OBLIGATORIO MATUTINO */}
      <div style={{ background: '#080c0e', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ fontSize: '1.2rem' }}>🧘‍♂️</span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#10b981', margin: 0 }}>
            Prehab Obligatorio Matutino (06:20 – 06:40)
          </h3>
        </div>
        <p style={{ color: '#a8b9b2', fontSize: '0.85rem', marginBottom: '16px' }}>
          Protocolo preventivo indispensable antes de cargar pesos o realizar empujes en anillas:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(174,255,224,0.1)' }}>
            <strong style={{ color: '#effff6', display: 'block', marginBottom: '4px' }}>1. Muñecas y Antebrazos</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>Estiramiento en 4 puntos de flexores y extensores (2 min). Previene fricción por teclado y soporte de handstand.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(174,255,224,0.1)' }}>
            <strong style={{ color: '#effff6', display: 'block', marginBottom: '4px' }}>2. Nerve Glides (Brazo Izquierdo)</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>Deslizamientos neurodinámicos del nervio mediano/cubital. Elimina parestesias y atrapamiento nervioso.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(16,185,129,0.3)' }}>
            <strong style={{ color: '#10b981', display: 'block', marginBottom: '4px' }}>3. Spanish Squats Isométricos</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}><strong>3 a 5 series × 45 segundos</strong> sosteniendo sentadilla a 90° con banda. Anestesia el tendón rotuliano.</span>
          </div>
        </div>
      </div>

      {/* SKILL WORK TÉCNICO */}
      <div style={{ background: '#080c0e', border: '1px solid rgba(119,231,255,0.2)', borderRadius: '12px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ fontSize: '1.2rem' }}>🤸‍♂️</span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#77e7ff', margin: 0 }}>
            Skill Work Técnico (06:40 – 06:55)
          </h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(119,231,255,0.1)' }}>
            <strong style={{ color: '#77e7ff', display: 'block' }}>Wall Handstand Hold</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>30-45s de sostén contra pared con alineación recta.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(119,231,255,0.1)' }}>
            <strong style={{ color: '#77e7ff', display: 'block' }}>Support Hold en Anillas</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>30s brazos extendidos sobre anillas (Estabilidad manguito).</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(119,231,255,0.1)' }}>
            <strong style={{ color: '#77e7ff', display: 'block' }}>Tuck Planche Leans</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>Inclinación isométrica en paralelas con protracción escapular.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(119,231,255,0.1)' }}>
            <strong style={{ color: '#77e7ff', display: 'block' }}>Negativas de Muscle-up (Mar PM)</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>5 series × 10 segundos de bajada hiper-controlada.</span>
          </div>
        </div>
      </div>

      {/* PM MOVILIDAD & CADENA POSTERIOR */}
      <div style={{ background: '#080c0e', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ fontSize: '1.2rem' }}>🦵</span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#a78bfa', margin: 0 }}>
            Movilidad PM & Cadena Posterior (17:15 – 18:30)
          </h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(139,92,246,0.1)' }}>
            <strong style={{ color: '#a78bfa', display: 'block' }}>Elephant Walks (3 × 20 reps)</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>Flexión de cadera alternando extensión de rodilla para isquiotibiales.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(139,92,246,0.1)' }}>
            <strong style={{ color: '#a78bfa', display: 'block' }}>90/90 Switches</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>Rotación interna/externa de cadera para soltar articulación coxofemoral.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(139,92,246,0.1)' }}>
            <strong style={{ color: '#a78bfa', display: 'block' }}>Rutina David Thurin FS-Hamstring</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>Flexibilidad activa enfocada en conseguir split e inclinación pélvica.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(139,92,246,0.1)' }}>
            <strong style={{ color: '#a78bfa', display: 'block' }}>Jefferson Curls Ligeros (Fase 3)</strong>
            <span style={{ fontSize: '0.8rem', color: '#a8b9b2' }}>Flexión articulada barra por barra para resiliencia de ligamentos espinales.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
