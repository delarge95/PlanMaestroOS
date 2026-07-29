import React from 'react';

export default function PrehabSkillView() {
  return (
    <div style={{ display: 'grid', gap: '20px', marginTop: '24px' }}>
      {/* PREHAB OBLIGATORIO MATUTINO */}
      <div style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderRadius: '12px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ fontSize: '1.2rem' }}>🧘‍♂️</span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-state-done)', margin: 0 }}>
            Prehab Matutino (06:20 – 06:40)
          </h3>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
          Protocolo preventivo indispensable antes de cargar pesos o realizar empujes en anillas:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-primary)', display: 'block', marginBottom: '4px' }}>1. Muñecas y Antebrazos</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Estiramiento en 4 puntos de flexores y extensores (2 min). Previene fricción por teclado y soporte de handstand.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-primary)', display: 'block', marginBottom: '4px' }}>2. Nerve Glides (Brazo Izquierdo)</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Deslizamientos neurodinámicos del nervio mediano/cubital. Elimina parestesias y atrapamiento nervioso.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-visible)' }}>
            <strong style={{ color: 'var(--color-state-done)', display: 'block', marginBottom: '4px' }}>3. Spanish Squats Isométricos</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}><strong>3 a 5 series × 45 segundos</strong> sosteniendo sentadilla a 90° con banda. Anestesia el tendón rotuliano.</span>
          </div>
        </div>
      </div>

      {/* SKILL WORK TÉCNICO */}
      <div style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderRadius: '12px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ fontSize: '1.2rem' }}>🤸‍♂️</span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-accent-primary)', margin: 0 }}>
            Skill Work Técnico (06:40 – 06:55)
          </h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-accent-primary)', display: 'block' }}>Wall Handstand Hold</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>30-45s de sostén contra pared con alineación recta.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-accent-primary)', display: 'block' }}>Support Hold en Anillas</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>30s brazos extendidos sobre anillas (Estabilidad manguito).</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-accent-primary)', display: 'block' }}>Tuck Planche Leans</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Inclinación isométrica en paralelas con protracción escapular.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-accent-primary)', display: 'block' }}>Negativas de Muscle-up (Mar PM)</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>5 series × 10 segundos de bajada hiper-controlada.</span>
          </div>
        </div>
      </div>

      {/* PM MOVILIDAD & CADENA POSTERIOR */}
      <div style={{ background: 'var(--color-surface-base)', border: '1px solid var(--color-border-subtle)', borderRadius: '12px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ fontSize: '1.2rem' }}>🦵</span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-accent-primary)', margin: 0 }}>
            Movilidad PM & Cadena Posterior (17:15 – 18:30)
          </h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-accent-primary)', display: 'block' }}>Elephant Walks (3 × 20 reps)</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Flexión de cadera alternando extensión de rodilla para isquiotibiales.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-accent-primary)', display: 'block' }}>90/90 Switches</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Rotación interna/externa de cadera para soltar articulación coxofemoral.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-accent-primary)', display: 'block' }}>Rutina David Thurin FS-Hamstring</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Flexibilidad activa enfocada en conseguir split e inclinación pélvica.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-accent-primary)', display: 'block' }}>Jefferson Curls Ligeros (Fase 3)</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Flexión articulada barra por barra para resiliencia de ligamentos espinales.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
