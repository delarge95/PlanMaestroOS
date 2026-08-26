import type { ReactNode } from 'react';

interface Opcion<T extends string | number> {
  valor: T;
  etiquetaEs: string;
  ayudaEs?: string;
  icono?: ReactNode;
}

interface Props<T extends string | number> {
  preguntaEs: string;
  opciones: Opcion<T>[];
  value: T;
  onChange: (v: T) => void;
  deshabilitarValores?: T[];
  razonDeshabilitado?: string;
}

export function Segmented<T extends string | number>({
  preguntaEs,
  opciones,
  value,
  onChange,
  deshabilitarValores = [],
  razonDeshabilitado,
}: Props<T>) {
  return (
    <div style={{ marginBlock: 22 }}>
      <span style={{ display: 'block', fontSize: 18, marginBottom: 10 }}>{preguntaEs}</span>
      <div role="radiogroup" aria-label={preguntaEs} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {opciones.map((o) => {
          const disabled = deshabilitarValores.includes(o.valor);
          const active = o.valor === value;
          return (
            <button
              key={String(o.valor)}
              type="button"
              role="radio"
              aria-checked={active}
              disabled={disabled}
              title={disabled ? razonDeshabilitado : o.ayudaEs}
              onClick={() => onChange(o.valor)}
              style={{
                padding: '10px 16px',
                borderRadius: 10,
                cursor: disabled ? 'not-allowed' : 'pointer',
                font: 'inherit',
                border: active ? '2px solid var(--accent,#0a84ff)' : '1px solid #d8d8de',
                background: active ? 'var(--accent-soft,#eef4ff)' : '#fff',
                opacity: disabled ? 0.45 : 1,
                textAlign: 'left',
              }}
            >
              {o.icono}
              <div style={{ fontWeight: active ? 700 : 400 }}>{o.etiquetaEs}</div>
              {o.ayudaEs && !disabled && (
                <div style={{ fontSize: 11.5, opacity: 0.65, marginTop: 2 }}>{o.ayudaEs}</div>
              )}
              {disabled && razonDeshabilitado && (
                <div style={{ fontSize: 11.5, opacity: 0.65, marginTop: 2 }}>{razonDeshabilitado}</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface CardOpcion {
  valor: -1 | 0 | 1;
  etiquetaEs: string;
  pictograma?: ReactNode;
  ayudaEs?: string;
}

export function ChoiceCards({
  preguntaEs,
  opciones,
  value,
  onChange,
}: {
  preguntaEs: string;
  opciones: CardOpcion[];
  value: -1 | 0 | 1;
  onChange: (v: -1 | 0 | 1) => void;
}) {
  return (
    <div style={{ marginBlock: 22 }}>
      <span style={{ display: 'block', fontSize: 18, marginBottom: 10 }}>{preguntaEs}</span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 10 }}>
        {opciones.map((o) => {
          const active = o.valor === value;
          return (
            <button
              key={o.etiquetaEs}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.valor)}
              style={{
                padding: 14,
                borderRadius: 12,
                cursor: 'pointer',
                font: 'inherit',
                textAlign: 'left',
                border: active ? '2px solid var(--accent,#0a84ff)' : '1px solid #d8d8de',
                background: active ? 'var(--accent-soft,#eef4ff)' : '#fff',
              }}
            >
              {o.pictograma}
              <div style={{ fontWeight: active ? 700 : 400, marginTop: 6 }}>{o.etiquetaEs}</div>
              {o.ayudaEs && <div style={{ fontSize: 11.5, opacity: 0.65, marginTop: 4 }}>{o.ayudaEs}</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
