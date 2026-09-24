// src/components/fitness/PredictionPanel.tsx — Panel de predicciones para Hoy.
//
// Dos secciones: badge de riesgo de lesión (M3) + banner de 1RM destacado (M1).
// Los motores son puros; este componente solo los alimenta desde los stores
// y muestra el resultado con honestidad ("insuficiente data" si no hay).

import React, { useEffect, useMemo, useState } from 'react';
import { calculateInjuryRisk, type DailyLoad, type InjuryRiskResult } from '../../lib/prediction/injuryRisk';
import { predictOneRmFromHistory, type OneRmResult } from '../../lib/prediction/oneRm';
import { useVocabularyStore } from '../../lib/languages/vocabularyStore';
import { getHrvTrendLive } from '../../lib/wearable/wearableStore';
import { ShieldAlert, ShieldCheck, AlertTriangle, Dumbbell, TrendingUp } from 'lucide-react';

const HISTORY_KEY = 'fitapp_workout_history';
const CARDIO_KEY = 'cardio_session_history';

interface RawWorkout { date?: string; durationMinutes?: number; totalVolumeKg?: number }

function isBrowser() { return typeof window !== 'undefined'; }

/** Carga diaria = RPE aproximado × minutos (Foster sRPE simplificado: usamos
 *  volumen como proxy cuando no hay RPE de sesión, o RPE × dur cuando hay). */
function extractDailyLoads(): DailyLoad[] {
  if (!isBrowser()) return [];
  const loads = new Map<string, number>();
  try {
    const workouts = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]') as RawWorkout[];
    for (const w of workouts) {
      const iso = w.date ? parseEsDate(w.date) : null;
      if (!iso) continue;
      const load = w.totalVolumeKg ?? (w.durationMinutes ? w.durationMinutes * 5 : 0);
      loads.set(iso, (loads.get(iso) ?? 0) + load);
    }
    const cardio = JSON.parse(localStorage.getItem(CARDIO_KEY) || '[]') as Array<{ dateIso: string; durationMinutes?: number }>;
    for (const c of cardio) {
      if (!c.dateIso) continue;
      const load = (c.durationMinutes ?? 20) * 4; // cardio ligero ~RPE 4
      loads.set(c.dateIso, (loads.get(c.dateIso) ?? 0) + load);
    }
  } catch { /* sin datos */ }
  return [...loads.entries()].map(([dateIso, load]) => ({ dateIso, load }));
}

function parseEsDate(display: string): string | null {
  const now = new Date();
  const m = /(\d{1,2})\s+(\w+)/.exec(display);
  if (!m) return null;
  const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const idx = months.findIndex((mo) => m[2].toLowerCase().startsWith(mo.slice(0, 3)));
  if (idx < 0) return null;
  return `${now.getFullYear()}-${String(idx + 1).padStart(2, '0')}-${String(m[1]).padStart(2, '0')}`;
}

export default function PredictionPanel() {
  const [risk, setRisk] = useState<InjuryRiskResult | null>(null);
  const [oneRms, setOneRms] = useState<Array<{ name: string; result: OneRmResult }>>([]);

  // SSR-safe: calcular tras montar
  useEffect(() => {
    const loads = extractDailyLoads();
    const hrvTrend = getHrvTrendLive(7);
    const riskResult = calculateInjuryRisk({
      dailyLoads: loads,
      hrvZScore: hrvTrend?.zScore,
    });
    setRisk(riskResult);

    try {
      const workouts = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      const rms = predictOneRmFromHistory(workouts);
      setOneRms(rms.slice(0, 3)); // top 3 en Hoy
    } catch { /* sin historial */ }
  }, []);

  const levelColor = risk?.level === 'alto' ? 'var(--danger, #ff453a)'
    : risk?.level === 'moderado' ? 'var(--warning, #ff9f0a)'
    : risk?.level === 'bajo' ? 'var(--success, #30d158)'
    : 'var(--text-tertiary)';

  const levelIcon = risk?.level === 'alto' ? <ShieldAlert size={14} />
    : risk?.level === 'moderado' ? <AlertTriangle size={14} />
    : <ShieldCheck size={14} />;

  if (!risk) return null;

  return (
    <div className="ds-stack-sm">
      {/* Badge de riesgo de lesión (M3) */}
      <div
        className="ds-card ds-row-between"
        style={{ padding: '10px 14px', borderLeft: `3px solid ${levelColor}` }}
        role="status"
        aria-label={`Riesgo de lesión: ${risk.level}`}
      >
        <span className="ds-row" style={{ gap: '8px', alignItems: 'center', fontSize: '0.8rem' }}>
          <span style={{ color: levelColor }}>{levelIcon}</span>
          <strong>Riesgo de lesión: {risk.level.toUpperCase()}</strong>
          {risk.acwr !== null && <span style={{ color: 'var(--text-tertiary)' }}>· ACWR {risk.acwr.toFixed(2)}</span>}
          {risk.monotonía !== null && <span style={{ color: 'var(--text-tertiary)' }}>· Monotonía {risk.monotonía.toFixed(1)}</span>}
        </span>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
          {risk.score}/100
        </span>
      </div>

      {/* Detalle de banderas (colapsable) */}
      {risk.flags.length > 0 && (
        <details style={{ fontSize: '0.72rem' }}>
          <summary style={{ cursor: 'pointer', color: 'var(--text-tertiary)' }}>Detalle de factores</summary>
          <ul style={{ margin: '4px 0 0 14px', padding: 0, color: 'var(--text-secondary)' }}>
            {risk.flags.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <span style={{ display: 'block', marginTop: '4px', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>{risk.basis}</span>
        </details>
      )}

      {/* 1RM destacados (M1) — solo si hay estimados */}
      {oneRms.length > 0 && (
        <div className="ds-card ds-stack-sm" style={{ padding: '10px 14px' }}>
          <span className="ds-row" style={{ gap: '6px', fontSize: '0.78rem', fontWeight: 700 }}>
            <Dumbbell size={13} style={{ color: 'var(--color-accent-primary)' }} />
            1RM estimados (top {oneRms.length})
          </span>
          {oneRms.map(({ name, result }) => (
            <div key={name} className="ds-row-between" style={{ fontSize: '0.76rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>{name}</span>
              <span className="ds-row" style={{ gap: '6px' }}>
                <strong>{result.estimatedKg} kg</strong>
                <span
                  className="ds-chip"
                  style={{
                    fontSize: '0.6rem',
                    border: '1px solid var(--color-border-subtle)',
                    color: result.confidence === 'alta' ? 'var(--success, #30d158)' : result.confidence === 'media' ? 'var(--warning)' : 'var(--text-tertiary)',
                  }}
                >
                  {result.confidence}
                </span>
              </span>
            </div>
          ))}
          <span style={{ fontSize: '0.66rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
            {oneRms[0].result.basis}
          </span>
        </div>
      )}
    </div>
  );
}
