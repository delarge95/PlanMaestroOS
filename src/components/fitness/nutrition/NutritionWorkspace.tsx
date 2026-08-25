// src/components/fitness/nutrition/NutritionWorkspace.tsx — Módulo UI de nutrición deportiva (AG-NUTRI, Fase 1)
// Calculadora personal + targets citados + día tipo + suplementos con evidencia + disclaimer.
import React from 'react';
import { AlertTriangle, Calculator, Droplets, Flame, Pill, Sunrise } from 'lucide-react';
import { useNutritionStore, NUTRITION_STORAGE_KEY } from './nutritionStore';
import {
  buildDayType,
  computeTargets,
  postWorkoutProteinGrams,
} from '../../../data/fitness/nutrition/calculator';
import { toCitation } from '../../../data/fitness/nutrition/rules';
import type { Goal } from '../../../data/fitness/nutrition/types';
import TargetCard from './TargetCard';
import DayTypeGrid from './DayTypeGrid';
import KcalBurnPanel from './KcalBurnPanel';
import Disclosure from '../../ui/Disclosure';
import StatusBadge from '../../ui/StatusBadge';

const GOALS: Array<{ value: Goal; label: string; hint: string }> = [
  { value: 'deficit', label: 'Déficit', hint: '−500 kcal/día · perder grasa' },
  { value: 'maintenance', label: 'Mantenimiento', hint: 'kcal de equilibrio' },
  { value: 'surplus', label: 'Superávit', hint: '+500 kcal/día · ganar masa' },
];

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <h2
      style={{
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        fontSize: 'var(--font-size-title, 1.05rem)',
        fontWeight: 650,
        color: 'var(--text-primary)',
      }}
    >
      <span style={{ color: 'var(--color-accent-primary, var(--accent))' }}>{icon}</span>
      {children}
    </h2>
  );
}

function SupplementPanel() {
  const creatine = toCitation('nutri-nsca-creatine-protocol');
  const caffeine = toCitation('nutri-nsca-caffeine-protocol');
  const caffeineRisk = toCitation('nutri-nsca-caffeine-risk');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-2)' }}>
        <div style={{ background: 'var(--surface-elevated, var(--color-surface-raised))', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md, 16px)' }}>
          <StatusBadge label="Evidencia sólida (NSCA + IOC)" variant="success" />
          <p style={{ margin: 'var(--space-2) 0 0', fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            <strong>Monohidrato de creatina</strong>: carga 20–25 g/día × 5 días (o 0.3 g/kg), luego 2 g/día. +0.5–2 kg de masa magra esperables.
          </p>
          <p style={{ margin: 'var(--space-1) 0 0', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>
            {creatine.source} · {creatine.locator} · <code>nutri-nsca-creatine-protocol</code>
          </p>
        </div>
        <div style={{ background: 'var(--surface-elevated, var(--color-surface-raised))', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md, 16px)' }}>
          <StatusBadge label="Evidencia sólida (NSCA + IOC)" variant="success" />
          <p style={{ margin: 'var(--space-2) 0 0', fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            <strong>Cafeína</strong>: 3–9 mg/kg ~60 min antes del ejercicio. Sin beneficio extra ≥9 mg/kg y más efectos adversos (ansiedad, insomnio, GI).
          </p>
          <p style={{ margin: 'var(--space-1) 0 0', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>
            {caffeine.source} · {caffeine.locator} · <code>nutri-nsca-caffeine-protocol</code> · riesgo: {caffeineRisk.locator}
          </p>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>
        Solo se listan suplementos con evidencia documentada en las fuentes del RAG (ver rag/nutrition.json, tema "supplements"). Nada de consejos médicos.
      </p>
    </div>
  );
}

export function NutritionWorkspace() {
  const { weightKg, sex, goal, trainingHoursPerWeek, ageYears, setInputs, reset } = useNutritionStore();
  const inputs = { weightKg, sex, goal, trainingHoursPerWeek, ageYears };
  const targets = computeTargets(inputs);
  const daySlots = buildDayType(inputs);
  const post = postWorkoutProteinGrams(ageYears);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--surface, var(--color-surface-base))',
    border: '1px solid var(--color-border-subtle)',
    borderRadius: 'var(--radius-sm)',
    padding: '10px 12px',
    color: 'var(--text-primary)',
    fontSize: 'var(--font-size-body)',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg, 24px)', maxWidth: 920, margin: '0 auto', width: '100%' }}>
      {/* Disclaimer visible */}
      <div
        role="note"
        style={{
          display: 'flex',
          gap: 'var(--space-2)',
          padding: 'var(--space-2) var(--space-3)',
          background: 'var(--color-accent-warning-soft, var(--warning-soft))',
          border: '1px solid var(--color-accent-warning, var(--warning))',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--font-size-meta)',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
        }}
      >
        <AlertTriangle size={16} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2, color: 'var(--color-accent-warning, var(--warning))' }} />
        <span>
          <strong>Información educativa</strong> basada en fuentes citadas (NSCA 2016, IOC/Maughan 2000). No es consejo médico ni dietas terapéuticas.
          Embarazo, diabetes, TCA, enfermedad renal u otra condición → consulta a un profesional sanitario antes de cambiar tu dieta o tomar suplementos.
        </span>
      </div>

      {/* Calculadora */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <SectionTitle icon={<Calculator size={16} />}>Calculadora personal</SectionTitle>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: 'var(--space-3)',
            background: 'var(--surface-elevated, var(--color-surface-raised))',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-md, 16px)',
          }}
        >
          <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
            Peso (kg)
            <input
              type="number"
              min={30}
              max={250}
              step={0.5}
              value={weightKg}
              onChange={(e) => setInputs({ weightKg: Number(e.target.value) })}
              style={inputStyle}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
            Sexo (tabla kcal/kg)
            <select value={sex} onChange={(e) => setInputs({ sex: e.target.value as 'male' | 'female' })} style={inputStyle}>
              <option value="male">Varón</option>
              <option value="female">Mujer</option>
            </select>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
            Entrenamiento (h/semana)
            <input
              type="number"
              min={0}
              max={40}
              step={0.5}
              value={trainingHoursPerWeek}
              onChange={(e) => setInputs({ trainingHoursPerWeek: Number(e.target.value) })}
              style={inputStyle}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
            Edad (opcional)
            <input
              type="number"
              min={14}
              max={100}
              value={ageYears ?? ''}
              onChange={(e) => setInputs({ ageYears: e.target.value === '' ? undefined : Number(e.target.value) })}
              placeholder="afecta dosis post-entreno"
              style={inputStyle}
            />
          </label>
          <fieldset style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', border: 'none', margin: 0, padding: 0, fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
            Objetivo
            <div style={{ display: 'flex', gap: 'var(--space-1)', flexWrap: 'wrap' }}>
              {GOALS.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => setInputs({ goal: g.value })}
                  title={g.hint}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-pill)',
                    border: `1px solid ${goal === g.value ? 'var(--color-accent-primary, var(--accent))' : 'var(--color-border-subtle)'}`,
                    background: goal === g.value ? 'var(--color-accent-primary-soft, var(--accent-soft))' : 'transparent',
                    color: goal === g.value ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontSize: 'var(--font-size-meta)',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <span>
            Inputs persistidos localmente (localStorage <code>{NUTRITION_STORAGE_KEY}</code>). TODO: migrar a UserState de CORE.
          </span>
          <button type="button" onClick={reset} style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: 'inherit', textDecoration: 'underline' }}>
            Restablecer
          </button>
        </div>
      </section>

      {/* Targets diarios */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <SectionTitle icon={<Sunrise size={16} />}>Targets del día</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-2)' }}>
          {targets.map((t) => (
            <TargetCard key={t.label} target={t} />
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>
          Cada target muestra su "¿por qué?" con la regla y la cita (libro · capítulo · página) que lo sustenta.
        </p>
      </section>

      {/* Quemado estimado hoy vs objetivo (ciclo 2) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <SectionTitle icon={<Flame size={16} />}>Quemado estimado hoy vs objetivo</SectionTitle>
        <KcalBurnPanel />
      </section>

      {/* Día tipo */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <SectionTitle icon={<Droplets size={16} />}>Día tipo (franjas, sin recetas)</SectionTitle>
        <DayTypeGrid slots={daySlots} />
        <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>
          Franjas alineadas al grid semanal. Los alimentos concretos y recetas pertenecen al módulo de gastronomía (puente por contrato de macros).
        </p>
      </section>

      {/* Suplementos */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <SectionTitle icon={<Pill size={16} />}>Suplementos con evidencia</SectionTitle>
        <SupplementPanel />
      </section>

      {/* Detalle de proteína post-entreno según edad */}
      <Disclosure label={`Dosis de proteína post-entreno: ${post.grams}`} summary={ageYears ? `${ageYears} años` : 'edad no informada (pauta general)'}>
        <p style={{ margin: 0, fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
          {toCitation(post.ruleId).statement}
          <br />
          <span style={{ color: 'var(--text-tertiary)' }}>
            {toCitation(post.ruleId).source} · {toCitation(post.ruleId).locator} · <code>{post.ruleId}</code>
          </span>
        </p>
      </Disclosure>
    </div>
  );
}

export default NutritionWorkspace;
