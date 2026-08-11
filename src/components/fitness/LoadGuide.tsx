import React, { useState } from 'react';
import { calculatePlatesAndLoad } from '../../lib/fitness/loadCalculator';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

export default function LoadGuide() {
  const [prWeight, setPrWeight] = useState<number>(100);
  const [rpeTarget, setRpeTarget] = useState<number>(8);

  const loadResult = calculatePlatesAndLoad(prWeight, rpeTarget);

  return (
    <ErrorBoundary>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* CABECERA PRESCRIPTIVA CON COPY EXACTO */}
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Guía de cargas
          </h3>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            Cálculo de carga efectiva, RPE y distribución de discos
          </span>
        </div>

        {/* INPUTS DE PR Y RPE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              PR de Referencia (kg):
            </label>
            <input
              type="number"
              value={prWeight}
              onChange={(e) => setPrWeight(Number(e.target.value) || 0)}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '8px 12px',
                color: 'var(--text)',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              RPE Objetivo (6 – 10):
            </label>
            <select
              value={rpeTarget}
              onChange={(e) => setRpeTarget(Number(e.target.value))}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '8px 12px',
                color: 'var(--text)',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              <option value={10}>RPE 10 (Esfuerzo Máximo / 0 RIR)</option>
              <option value={9}>RPE 9 (1 RIR)</option>
              <option value={8}>RPE 8 (2 RIR)</option>
              <option value={7}>RPE 7 (3 RIR)</option>
            </select>
          </div>
        </div>

        {/* RESULTADO DE CARGA OBJETIVO Y DISCOS POR LADO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-md)', background: 'rgba(10,132,255,0.04)', border: '1px solid var(--color-accent-primary-soft)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-md)' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Carga Efectiva Sugerida
            </span>
            <strong style={{ fontSize: '1.4rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
              {loadResult.targetWeightKg} kg
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Discos por lado
            </span>
            <div style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 600, marginTop: '4px' }}>
              {loadResult.platesPerSide.length === 0 ? (
                <span>Barra sola de {loadResult.barbellWeightKg} kg</span>
              ) : (
                loadResult.platesPerSide.map((p) => (
                  <span key={p.plateKg} style={{ marginRight: '8px', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>
                    {p.countPerSide}x {p.plateKg} kg
                  </span>
                ))
              )}
            </div>
          </div>
        </div>

        {/* CALENTAMIENTO SUGERIDO */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', margin: '0 0 8px' }}>
            Calentamiento sugerido
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {loadResult.warmupSuggested.map((w) => (
              <div
                key={w.setNumber}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.82rem'
                }}
              >
                <span>Serie {w.setNumber}: {w.reps} reps @ <strong>{w.weightKg} kg</strong></span>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>{w.notes}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
