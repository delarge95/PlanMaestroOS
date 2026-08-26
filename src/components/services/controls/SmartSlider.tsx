import { useMemo } from 'react';
import type { ControlSpec } from '../../../lib/services/ux';

interface Props {
  spec: ControlSpec;
  value: number;
  onChange: (v: number) => void;
  nivelSugerido?: string;
}

export function SmartSlider({ spec, value, onChange, nivelSugerido }: Props) {
  const ticks = useMemo(
    () =>
      (spec.umbrales ?? [])
        .filter((u) => u.hasta >= spec.min && u.hasta <= spec.max)
        .map((u) => ({ ...u, pct: ((u.hasta - spec.min) / (spec.max - spec.min)) * 100 })),
    [spec],
  );

  return (
    <div style={{ marginBlock: 22 }}>
      <label htmlFor={`ctl-${spec.kind}`} style={{ display: 'block', fontSize: 18, marginBottom: 6 }}>
        {spec.preguntaEs}
      </label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
        <strong style={{ fontSize: 22 }}>{spec.unidadEs(value)}</strong>
        {nivelSugerido && (
          <span
            style={{
              background: 'var(--accent-soft,#eef4ff)',
              color: 'var(--accent,#0a84ff)',
              padding: '2px 10px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Nivel {nivelSugerido}
          </span>
        )}
      </div>
      <input
        id={`ctl-${spec.kind}`}
        type="range"
        min={spec.min}
        max={spec.max}
        step={spec.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={spec.unidadEs(value)}
        style={{ width: '100%', accentColor: 'var(--accent,#0a84ff)', height: 28 }}
      />
      {ticks.length > 0 && (
        <div style={{ position: 'relative', height: 16, fontSize: 11, opacity: 0.65 }}>
          {ticks.map((t) => (
            <span key={t.nivel} style={{ position: 'absolute', left: `${t.pct}%`, transform: 'translateX(-50%)' }}>
              ▾ {t.etiquetaEs}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
