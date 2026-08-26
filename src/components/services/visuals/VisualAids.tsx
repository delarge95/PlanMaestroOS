import type { ReactNode } from 'react';

export type DetalleEstado = 0 | 1 | 2;

interface Props {
  estado: DetalleEstado;
  onEstado: (e: DetalleEstado) => void;
}

const ETIQUETAS = ['Low poly', 'Detalle medio', 'High poly'] as const;

function Triangulos({ densidad }: { densidad: number }) {
  const pts: string[] = [];
  const cols = 6;
  const rows = 5;
  const w = 160 / cols;
  const hgt = 110 / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (densidad === 0 && (r + c) % 2 !== 0) continue;
      const x = c * w;
      const y = r * hgt;
      pts.push(`M${x},${y} L${x + w},${y} L${x + w / 2},${y + hgt} Z`);
      if (densidad >= 2 && (r + c) % 3 === 0) pts.push(`M${x},${y} L${x + w / 2},${y + hgt} L${x - w * 0.25},${y + hgt} Z`);
    }
  }
  return <path d={pts.join(' ')} fill="#5b5bd6" opacity={0.85} />;
}

export function PolyDetail({ estado, onEstado }: Props) {
  return (
    <div style={{ marginBlock: 22 }}>
      <span style={{ display: 'block', fontSize: 18, marginBottom: 10 }}>
        ¿Cuánto detalle debe verse al acercarte?
      </span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        {([0, 1, 2] as DetalleEstado[]).map((e) => {
          const active = e === estado;
          return (
            <button
              key={e}
              type="button"
              aria-pressed={active}
              onClick={() => onEstado(e)}
              style={{
                cursor: 'pointer',
                font: 'inherit',
                padding: 8,
                borderRadius: 12,
                border: active ? '2px solid var(--accent,#0a84ff)' : '1px solid #d8d8de',
                background: active ? 'var(--accent-soft,#eef4ff)' : '#fff',
              }}
            >
              <svg viewBox="0 0 160 110" width="100%" role="img" aria-label={ETIQUETAS[e]}>
                <Triangulos densidad={e === 0 ? 0 : e === 1 ? 1 : 2} />
                {e === 2 && (
                  <path
                    d="M20,20 L140,20 L80,95 Z"
                    fill="none"
                    stroke="#0a84ff"
                    strokeWidth={1}
                    opacity={0.7}
                  />
                )}
              </svg>
              <div style={{ fontSize: 13, marginTop: 4, fontWeight: active ? 700 : 400 }}>{ETIQUETAS[e]}</div>
            </button>
          );
        })}
      </div>
      <p style={{ fontSize: 12.5, opacity: 0.65, marginBlock: 4 }}>
        Más detalle = más horas de modelado y texturizado.
      </p>
    </div>
  );
}

export function ImageSequence({
  frames,
  value,
  max,
}: {
  frames: ReactNode[];
  value: number;
  max: number;
}) {
  const idx = Math.min(frames.length - 1, Math.floor((value / Math.max(1, max)) * frames.length));
  return (
    <div style={{ position: 'relative', height: 120, marginBlock: 14 }} aria-hidden>
      {frames.map((f, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: i === idx ? 1 : 0,
            transition: 'opacity 200ms',
          }}
        >
          {f}
        </div>
      ))}
    </div>
  );
}

export function Model3DFrame({ assetId, children }: { assetId: string; children?: ReactNode }) {
  return (
    <figure
      style={{
        border: '1px dashed #b9b9c4',
        borderRadius: 12,
        padding: 18,
        textAlign: 'center',
        background: 'repeating-linear-gradient(45deg,#fafafa,#fafafa 12px,#f2f2f5 12px,#f2f2f5 24px)',
      }}
    >
      <div style={{ fontSize: 30 }}>🧊</div>
      <div style={{ fontWeight: 600, marginTop: 4 }}>Demo 3D por producir — fase visual</div>
      <div style={{ fontSize: 12.5, opacity: 0.65 }}>assetId: {assetId}</div>
      {children}
    </figure>
  );
}
