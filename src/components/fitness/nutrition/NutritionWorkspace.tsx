// src/components/fitness/nutrition/NutritionWorkspace.tsx â€” MÃ³dulo UI de nutriciÃ³n deportiva (AG-NUTRI, Fase 1)
// Calculadora personal + targets citados + dÃ­a tipo + suplementos con evidencia + disclaimer.
import React from 'react';
import { AlertTriangle, Calculator, Droplets, Flame, Pill, Sunrise, Venus } from 'lucide-react';
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
import FemaleHormonesPanel from './FemaleHormonesPanel';
import Disclosure from '../../ui/Disclosure';
import StatusBadge from '../../ui/StatusBadge';

const GOALS: Array<{ value: Goal; label: string; hint: string }> = [
  { value: 'deficit', label: 'DÃ©ficit', hint: 'âˆ’500 kcal/dÃ­a Â· perder grasa' },
  { value: 'maintenance', label: 'Mantenimiento', hint: 'kcal de equilibrio' },
  { value: 'surplus', label: 'SuperÃ¡vit', hint: '+500 kcal/dÃ­a Â· ganar masa' },
];

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <h2 className="ds-h2 ds-row" style={{ gap: 'var(--space-2)' }}>
      <span style={{ color: 'var(--accent)' }}>{icon}</span>
      {children}
    </h2>
  );
}

function SupplementPanel() {
  const creatine = toCitation('nutri-nsca-creatine-protocol');
  const caffeine = toCitation('nutri-nsca-caffeine-protocol');
  const caffeineRisk = toCitation('nutri-nsca-caffeine-risk');
  return (
    <div className="ds-stack-sm">
      <div className="ds-grid">
        <div className="ds-card ds-stack-sm">
          <StatusBadge label="Evidencia sólida (NSCA + IOC)" variant="success" />
          <p className="ds-caption" style={{ lineHeight: 1.55 }}>
            <strong>Monohidrato de creatina</strong>: carga 20–25 g/día × 5 días (o 0.3 g/kg), luego 2 g/día. +0.5–2 kg de masa magra esperables.
          </p>
          <p className="ds-micro">
            {creatine.source} · {creatine.locator} · <code>nutri-nsca-creatine-protocol</code>
          </p>
        </div>
        <div className="ds-card ds-stack-sm">
          <StatusBadge label="Evidencia sólida (NSCA + IOC)" variant="success" />
          <p className="ds-caption" style={{ lineHeight: 1.55 }}>
            <strong>Cafeína</strong>: 3–9 mg/kg ~60 min antes del ejercicio. Sin beneficio extra ≥9 mg/kg y más efectos adversos (ansiedad, insomnio, GI).
          </p>
          <p className="ds-micro">
            {caffeine.source} · {caffeine.locator} · <code>nutri-nsca-caffeine-protocol</code> · riesgo: {caffeineRisk.locator}
          </p>
        </div>
      </div>
      <p className="ds-micro">
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
    background: 'var(--surface-1)',
    border: '1px solid var(--color-border-subtle)',
    borderRadius: 'var(--radius-s)',
    padding: '10px 12px',
    color: 'var(--text-primary)',
    fontSize: 'var(--fs-body)',
    boxSizing: 'border-box',
  };

  return (
    <div className="ds-stack-lg" style={{ maxWidth: 920, margin: '0 auto', width: '100%' }}>
      {/* Disclaimer visible */}
      <div
        role="note"
        className="ds-row"
        style={{
          padding: 'var(--space-2) var(--space-3)',
          background: 'var(--warning-soft)',
          border: '1px solid var(--warning)',
          borderRadius: 'var(--radius-m)',
          fontSize: 'var(--fs-meta)',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          alignItems: 'flex-start',
        }}
      >
        <AlertTriangle size={16} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2, color: 'var(--warning)' }} />
        <span>
          <strong>Información educativa</strong> basada en fuentes citadas (NSCA 2016, IOC/Maughan 2000). No es consejo médico ni dietas terapéuticas.
          Embarazo, diabetes, TCA, enfermedad renal u otra condición → consulta a un profesional sanitario antes de cambiar tu dieta o tomar suplementos.
        </span>
      </div>

      {/* Calculadora */}
      <section className="ds-stack-sm">
        <SectionTitle icon={<Calculator size={16} />}>Calculadora personal</SectionTitle>
        <div
          className="ds-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: 'var(--space-3)',
          }}
        >
          <label className="ds-stack-sm ds-label-sm">
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
          <label className="ds-stack-sm ds-label-sm">
            Sexo (tabla kcal/kg)
            <select value={sex} onChange={(e) => setInputs({ sex: e.target.value as 'male' | 'female' })} style={inputStyle}>
              <option value="male">Varón</option>
              <option value="female">Mujer</option>
            </select>
          </label>
          <label className="ds-stack-sm ds-label-sm">
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
          <label className="ds-stack-sm ds-label-sm">
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
          <fieldset className="ds-stack-sm ds-label-sm" style={{ border: 'none', margin: 0, padding: 0 }}>
            Objetivo
            <div className="ds-row-wrap" style={{ gap: 'var(--space-1)' }}>
              {GOALS.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => setInputs({ goal: g.value })}
                  title={g.hint}
                  className="ds-chip"
                  data-active={goal === g.value}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="ds-row-between ds-micro" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <span>
            Inputs persistidos localmente (localStorage <code>{NUTRITION_STORAGE_KEY}</code>). TODO: migrar a UserState de CORE.
          </span>
          <button type="button" onClick={reset} className="ds-btn ds-btn-ghost ds-btn-sm" style={{ textDecoration: 'underline', padding: 0 }}>
            Restablecer
          </button>
        </div>
      </section>

      {/* Targets diarios */}
      <section className="ds-stack-sm">
        <SectionTitle icon={<Sunrise size={16} />}>Targets del día</SectionTitle>
        <div className="ds-grid">
          {targets.map((t) => (
            <TargetCard key={t.label} target={t} />
          ))}
        </div>
        <p className="ds-micro">
          Cada target muestra su "¿por qué?" con la regla y la cita (libro · capítulo · página) que lo sustenta.
        </p>
      </section>

      {/* Quemado estimado hoy vs objetivo (ciclo 2) */}
      <section className="ds-stack-sm">
        <SectionTitle icon={<Flame size={16} />}>Quemado estimado hoy vs objetivo</SectionTitle>
        <KcalBurnPanel />
      </section>

      {/* Día tipo */}
      <section className="ds-stack-sm">
        <SectionTitle icon={<Droplets size={16} />}>Día tipo (franjas, sin recetas)</SectionTitle>
        <DayTypeGrid slots={daySlots} />
        <p className="ds-micro">
          Franjas alineadas al grid semanal. Los alimentos concretos y recetas pertenecen al módulo de gastronomía (puente por contrato de macros).
        </p>
      </section>

      {/* Suplementos */}
      <section className="ds-stack-sm">
        <SectionTitle icon={<Pill size={16} />}>Suplementos con evidencia</SectionTitle>
        <SupplementPanel />
      </section>

      {/* Perfil hormonal femenino (opcional, ciclo 2) */}
      <section className="ds-stack-sm">
        <SectionTitle icon={<Venus size={16} />}>Perfil hormonal femenino (ajustes opcionales citados)</SectionTitle>
        <FemaleHormonesPanel />
      </section>

      {/* Detalle de proteína post-entreno según edad */}
      <Disclosure label={`Dosis de proteína post-entreno: ${post.grams}`} summary={ageYears ? `${ageYears} años` : 'edad no informada (pauta general)'}>
        <p className="ds-caption" style={{ lineHeight: 1.55 }}>
          {toCitation(post.ruleId).statement}
          <br />
          <span className="ds-micro">
            {toCitation(post.ruleId).source} · {toCitation(post.ruleId).locator} · <code>{post.ruleId}</code>
          </span>
        </p>
      </Disclosure>
    </div>
  );
}

export default NutritionWorkspace;
