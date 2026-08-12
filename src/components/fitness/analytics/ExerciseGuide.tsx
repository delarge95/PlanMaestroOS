// src/components/fitness/analytics/ExerciseGuide.tsx
import React, { useState } from 'react';
import { exerciseDatabase } from '../../../data/exercises';
import { calculateE1RM } from '../../../lib/fitness/analyticsUtils';

export default function ExerciseGuide() {
  const [selectedExerciseName, setSelectedExerciseName] = useState<string>('Barbell Bench Press');
  const [enteredWeight, setEnteredWeight] = useState<number>(100);
  const [enteredReps, setEnteredReps] = useState<number>(5);

  const e1rm = calculateE1RM(enteredWeight, enteredReps);

  const PERCENTAGES = [
    { pct: 100, reps: '1 rep', rpe: 'RPE 10 / RIR 0', goal: 'Fuerza Máxima (PR Test)' },
    { pct: 95, reps: '1-2 reps', rpe: 'RPE 9.5 / RIR 0-1', goal: 'Pico de Fuerza Neural' },
    { pct: 90, reps: '2-3 reps', rpe: 'RPE 9 / RIR 1', goal: 'Fuerza Pesada (Top Set)' },
    { pct: 85, reps: '4-5 reps', rpe: 'RPE 8.5 / RIR 1-2', goal: 'Hipertrofia Muestra Pesada' },
    { pct: 80, reps: '6-8 reps', rpe: 'RPE 8 / RIR 2', goal: 'Hipertrofia Principal (Working Sets)' },
    { pct: 75, reps: '8-10 reps', rpe: 'RPE 7.5 / RIR 2-3', goal: 'Volumen Acumulado' },
    { pct: 70, reps: '10-12 reps', rpe: 'RPE 7 / RIR 3', goal: 'Metabólico & Resistencia Muscular' },
    { pct: 65, reps: '12-15 reps', rpe: 'RPE 6 / RIR 4', goal: 'Técnica & Descarga' }
  ];

  return (
    <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* CABECERA */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Guía de Cargas por Ejercicio & Porcentajes 1RM
          </span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
            Calculadora de Zonas Intensidad RPE / RIR
          </h3>
        </div>
      </div>

      {/* FORMULARIO DE INGRESO DE SERIE CLAVE */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
        <div>
          <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
            Ejercicio Objetivo:
          </label>
          <select
            value={selectedExerciseName}
            onChange={(e) => setSelectedExerciseName(e.target.value)}
            style={{ width: '100%', background: 'rgba(0,0,0,0.5)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '6px 10px', fontSize: '0.82rem', outline: 'none' }}
          >
            {Object.keys(exerciseDatabase).map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
            Carga Reciente (kg):
          </label>
          <input
            type="number"
            value={enteredWeight}
            onChange={(e) => setEnteredWeight(Number(e.target.value))}
            style={{ width: '100%', background: 'rgba(0,0,0,0.5)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '6px 10px', fontSize: '0.82rem', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
            Repeticiones Completadas:
          </label>
          <input
            type="number"
            value={enteredReps}
            onChange={(e) => setEnteredReps(Number(e.target.value))}
            style={{ width: '100%', background: 'rgba(0,0,0,0.5)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '6px 10px', fontSize: '0.82rem', outline: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(10,132,255,0.08)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(10,132,255,0.2)' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase' }}>
            1RM Estimado Resultante:
          </span>
          <strong style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
            {e1rm} kg
          </strong>
        </div>
      </div>

      {/* TABLA DE DESGLOSE PORCENTUAL */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--color-border-subtle)', borderRadius: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
          <thead style={{ background: '#141820', borderBottom: '1px solid var(--color-border-subtle)', textTransform: 'uppercase', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
            <tr>
              <th style={{ padding: '10px 14px' }}>% 1RM</th>
              <th style={{ padding: '10px 14px' }}>Carga Calculada (kg)</th>
              <th style={{ padding: '10px 14px' }}>Rango Reps Sostenible</th>
              <th style={{ padding: '10px 14px' }}>Esfuerzo Objetivo (RPE / RIR)</th>
              <th style={{ padding: '10px 14px' }}>Aplicación Metodológica</th>
            </tr>
          </thead>
          <tbody>
            {PERCENTAGES.map((p) => {
              const calculatedKg = Math.round((e1rm * (p.pct / 100)) * 2) / 2;
              return (
                <tr key={p.pct} style={{ borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.05))' }}>
                  <td style={{ padding: '8px 14px', fontWeight: 800, color: 'var(--accent, #0a84ff)' }}>{p.pct}%</td>
                  <td style={{ padding: '8px 14px', fontWeight: 700, color: 'var(--text-primary)' }}>{calculatedKg} kg</td>
                  <td style={{ padding: '8px 14px', color: 'var(--text-secondary)' }}>{p.reps}</td>
                  <td style={{ padding: '8px 14px', color: 'var(--text-secondary)', fontFamily: 'SF Mono, monospace' }}>{p.rpe}</td>
                  <td style={{ padding: '8px 14px', color: 'var(--text-tertiary)' }}>{p.goal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
