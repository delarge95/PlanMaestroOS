// src/components/fitness/nutrition/KcalBurnPanel.tsx — Quemado estimado hoy vs objetivo (AG-NUTRI ciclo 2)
// Presets cardio vía getPresetsWithMet() (READ por contrato de AG-CARDIO); fuerza por trabajo mecánico + EPOC citado.
import React, { useMemo, useState } from 'react';
import { Flame, Trash2 } from 'lucide-react';
import { useNutritionStore, todayLocalIso } from './nutritionStore';
import {
  dailyBalance,
  estimateDayBurn,
  type BurnedActivityInput,
} from '../../../data/fitness/nutrition/kcalEstimator';
import { computeTargets } from '../../../data/fitness/nutrition/calculator';
import { getPresetsWithMet } from '../../../data/fitness/cardio/presets';
import StatusBadge from '../../ui/StatusBadge';

const inputStyle: React.CSSProperties = {
  background: 'var(--surface-elevated, transparent)',
  border: '1px solid var(--color-border-subtle)',
  borderRadius: 'var(--radius-sm)',
  padding: '6px 8px',
  color: 'var(--text-primary)',
  fontSize: 'var(--font-size-meta)',
};

function AddRow({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}>{children}</div>;
}

export default function KcalBurnPanel() {
  const weightKg = useNutritionStore((s) => s.weightKg);
  const goal = useNutritionStore((s) => s.goal);
  const trainingHoursPerWeek = useNutritionStore((s) => s.trainingHoursPerWeek);
  const sex = useNutritionStore((s) => s.sex);
  const activities = useNutritionStore((s) => s.activities);
  const addActivity = useNutritionStore((s) => s.addActivity);
  const removeActivity = useNutritionStore((s) => s.removeActivity);

  const presets = useMemo(() => getPresetsWithMet(), []);
  const today = todayLocalIso();
  const todaysEntries: BurnedActivityInput[] = useMemo(
    () => activities.filter((a) => a.dateIso === today).map((a) => a.entry),
    [activities, today]
  );

  const [presetId, setPresetId] = useState<string>('');
  const [manualLabel, setManualLabel] = useState('');
  const [manualMets, setManualMets] = useState(5);
  const [manualMin, setManualMin] = useState(30);
  const [series, setSeries] = useState(3);
  const [reps, setReps] = useState(10);
  const [load, setLoad] = useState(60);

  const burn = useMemo(() => estimateDayBurn(todaysEntries, weightKg), [todaysEntries, weightKg]);
  const objetivoKcal = useMemo(
    () => computeTargets({ weightKg, sex, goal, trainingHoursPerWeek })[0]?.value ?? 0,
    [weightKg, sex, goal, trainingHoursPerWeek]
  );
  const balance = useMemo(() => dailyBalance(objetivoKcal, burn), [objetivoKcal, burn]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <AddRow>
        <select
          value={presetId}
          onChange={(e) => setPresetId(e.target.value)}
          style={{ ...inputStyle, minWidth: 220 }}
          aria-label="Preset cardiosaludable"
        >
          <option value="">+ Preset cardiosaludable…</option>
          {presets.map((p) => (
            <option key={p.presetId} value={p.presetId}>
              {p.name} ({p.totalMin} min · ~{p.avgMets} METs)
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={!presetId}
          onClick={() => {
            const p = presets.find((x) => x.presetId === presetId);
            if (!p) return;
            addActivity({
              kind: 'met',
              label: `${p.name} (${p.totalMin} min)`,
              mets: p.avgMets,
              minutes: p.totalMin,
              citation: { source: p.citation.sourceId, locator: p.citation.locator },
            });
            setPresetId('');
          }}
          style={{ ...inputStyle, cursor: presetId ? 'pointer' : 'not-allowed' }}
        >
          Añadir
        </button>

        <input value={manualLabel} onChange={(e) => setManualLabel(e.target.value)} placeholder="Actividad manual" style={{ ...inputStyle, width: 140 }} />
        <input type="number" min={1} max={20} step={0.1} value={manualMets} onChange={(e) => setManualMets(Number(e.target.value))} title="METs" style={{ ...inputStyle, width: 70 }} />
        <input type="number" min={5} max={300} step={5} value={manualMin} onChange={(e) => setManualMin(Number(e.target.value))} title="minutos" style={{ ...inputStyle, width: 70 }} />
        <button
          type="button"
          onClick={() => {
            addActivity({
              kind: 'met',
              label: manualLabel.trim() || 'Actividad manual',
              mets: manualMets,
              minutes: manualMin,
            });
          }}
          style={{ ...inputStyle, cursor: 'pointer' }}
          title="Sin cita de fuente: se marca como orientativa (qualitative)"
        >
          + Manual (sin fuente)
        </button>

        <span style={{ color: 'var(--text-tertiary)', fontSize: 'var(--font-size-micro)' }}>Fuerza:</span>
        <input type="number" min={1} max={20} value={series} onChange={(e) => setSeries(Number(e.target.value))} title="series" style={{ ...inputStyle, width: 56 }} />
        <span style={{ color: 'var(--text-tertiary)', fontSize: 'var(--font-size-micro)' }}>×</span>
        <input type="number" min={1} max={50} value={reps} onChange={(e) => setReps(Number(e.target.value))} title="reps" style={{ ...inputStyle, width: 56 }} />
        <input type="number" min={0} max={500} value={load} onChange={(e) => setLoad(Number(e.target.value))} title="kg" style={{ ...inputStyle, width: 70 }} />
        <button
          type="button"
          onClick={() => addActivity({ kind: 'strength', label: `Fuerza ${series}×${reps}@${load}kg`, series, repsPerSeries: reps, loadKg: load })}
          style={{ ...inputStyle, cursor: 'pointer' }}
          title="Trabajo mecánico (cota inferior) + EPOC +5–15% citado"
        >
          + Sesión
        </button>
      </AddRow>

      {burn.items.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          {burn.items.map((item, i) => {
            const logged = activities.filter((a) => a.dateIso === today)[i];
            return (
              <div key={`${item.label}-${i}`} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-2)', alignItems: 'center', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: '6px 10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <strong style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-primary)' }}>{item.label}</strong>
                  <span style={{ fontSize: 'var(--font-size-micro)', color: 'var(--text-tertiary)' }}>
                    {item.why.length > 0 ? item.why.map((w) => `${w.source} · ${w.locator}`).join(' | ') : '⚠️ sin fuente'}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <StatusBadge
                    label={item.confidence === 'inferred' ? 'inferred' : 'qualitative'}
                    variant={item.confidence === 'inferred' ? 'neutral' : 'warning'}
                  />
                  <strong style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-primary)' }}>~{item.kcal} kcal</strong>
                  {logged && (
                    <button type="button" onClick={() => removeActivity(logged.id)} aria-label="Quitar" style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer' }}>
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md, 16px)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
        <Flame size={18} style={{ color: 'var(--color-accent-danger, var(--accent))' }} />
        <div>
          <div style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
            Quemado estimado hoy: <strong style={{ color: 'var(--text-primary)' }}>{burn.hasUnsourcedEntries ? '~' : ''}{burn.totalKcal} kcal</strong> (rango {burn.minKcal}–{burn.maxKcal})
          </div>
          <div style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
            Objetivo del día: <strong style={{ color: 'var(--text-primary)' }}>{balance.targetKcal} kcal</strong> → restan{' '}
            <strong style={{ color: balance.remainingKcal >= 0 ? 'var(--text-primary)' : 'var(--color-accent-danger, var(--accent))' }}>
              {balance.remainingKcal} kcal
            </strong>
          </div>
        </div>
      </div>

      <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
        {balance.detail} Fuerza = cota inferior por trabajo mecánico + EPOC +5–15% (Maughan, <code>nutri-mau-epoc</code>, inferred).
        Cuando AG-FIT exponga el logger real de sesiones, este panel consumirá ese contrato en lugar del registro manual.
      </p>
    </div>
  );
}
