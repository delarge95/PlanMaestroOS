import { useMemo, useState } from 'react';
import { SERVICES } from '../../data/services/catalogCore';
import { computeQuote } from '../../data/services/formula';
import { getRateCard } from '../../data/services/rateCard';
import type { Currency, LevelId } from '../../data/services/types';

type Detail = 0 | 1 | 2;
type Urgency = 'none' | '72h' | '24h';

const LEVELS: Array<{ id: LevelId; label: string; desc: string }> = [
  { id: 'XS', label: 'XS', desc: 'Micro 2-3s' },
  { id: 'S', label: 'S', desc: 'Simple' },
  { id: 'M', label: 'M', desc: 'Estandar' },
  { id: 'L', label: 'L', desc: 'Complejo' },
  { id: 'XL', label: 'XL', desc: 'Critico' },
];

const FAMILIAS = [
  { id: 'render', label: 'Render 3D' },
  { id: 'asset-rt', label: 'Assets RT' },
  { id: 'web-3d', label: 'Web 3D' },
  { id: 'vfx', label: 'VFX' },
  { id: 'ia', label: 'IA' },
  { id: 'datos', label: 'CAD/Datos' },
  { id: 'soporte', label: 'Soporte' },
];

const box: React.CSSProperties = { background: '#fff', border: '1px solid #dde0e8', borderRadius: 12, padding: 20, marginBottom: 16 };
const helpTxt: React.CSSProperties = { fontSize: 12.5, color: '#5a5e6e', marginTop: 4 };
const lbl: React.CSSProperties = { display: 'block', fontSize: 15, fontWeight: 600, marginBottom: 8, color: '#1a1d29' };

export function DirectCotizador({ currency, launchActive }: { currency: Currency; launchActive: boolean }) {
  const [serviceId, setServiceId] = useState('');
  const [level, setLevel] = useState<LevelId>('M');
  const [quantity, setQuantity] = useState(1);
  const [pieces, setPieces] = useState(10);
  const [seconds, setSeconds] = useState(15);
  const [detail, setDetail] = useState<Detail>(1);
  const [firstClient, setFirstClient] = useState(true);
  const [urgency, setUrgency] = useState<Urgency>('none');
  const [familyFilter, setFamilyFilter] = useState('');

  const svc = serviceId ? SERVICES.find((s) => s.id === serviceId) : undefined;

  const quote = useMemo(() => {
    if (!svc) return null;
    try {
      return computeQuote(svc.id, level, currency, {
        firstClientLaunch: launchActive && firstClient,
        batchUnits: quantity > 1 ? quantity : undefined,
      });
    } catch { return null; }
  }, [svc, level, currency, quantity, firstClient, launchActive]);

  const filtered = familyFilter ? SERVICES.filter((s) => s.family === familyFilter) : SERVICES;

  const urgencies: Array<{ id: Urgency; label: string; desc: string; disabled?: boolean }> = [
    { id: 'none', label: 'Sin apuro', desc: '' },
    { id: '72h', label: '<72h (+25%)', desc: '' },
    { id: '24h', label: '<24h (+50%)', desc: '', disabled: true },
  ];

  return (
    <div>
      <div style={box}>
        <span style={lbl}>Selecciona el servicio</span>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
          {FAMILIAS.map((f) => (
            <button key={f.id} onClick={() => setFamilyFilter(f.id)}
              style={{ padding: '5px 12px', borderRadius: 999, cursor: 'pointer', font: 'inherit', fontSize: 12.5,
                border: familyFilter === f.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                background: familyFilter === f.id ? '#e8f0fe' : '#fff', color: '#1a1d29', fontWeight: familyFilter === f.id ? 600 : 400 }}>
              {f.label}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gap: 6, maxHeight: 280, overflowY: 'auto' }}>
          {filtered.map((s) => (
            <button key={s.id} onClick={() => setServiceId(s.id)}
              style={{ padding: 12, borderRadius: 10, cursor: 'pointer', font: 'inherit', textAlign: 'left',
                border: serviceId === s.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                background: serviceId === s.id ? '#e8f0fe' : '#fff', color: '#1a1d29' }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{s.nameEs}</div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>{s.unitEs}</div>
            </button>
          ))}
        </div>
      </div>

      {svc && (
        <>
          <div style={box}>
            <span style={lbl}>Nivel de complejidad (derivado automaticamente)</span>
            <div style={{ display: 'flex', gap: 6 }}>
              {LEVELS.map((n) => (
                <div key={n.id} style={{ flex: 1, padding: '10px 6px', borderRadius: 10, textAlign: 'center',
                  border: level === n.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                  background: level === n.id ? '#e8f0fe' : '#fff' }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: level === n.id ? '#0a84ff' : '#5a5e6e' }}>{n.label}</div>
                  <div style={{ fontSize: 10, opacity: 0.6 }}>{n.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, marginTop: 8, color: '#1a1d29' }}>
              <strong>Nivel: {level}</strong> — se calcula segun los parametros que configures abajo
            </p>
          </div>

          <div style={box}>
            <span style={lbl}>Configura los detalles</span>
            {(svc.id === 'CAD-01' || svc.id === 'RTA-06') && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 15, fontWeight: 600, color: '#0a84ff' }}>{pieces} piezas</label>
                <input type="range" min={1} max={200} value={Math.min(200, pieces)}
                  onChange={(e) => { const v = Number(e.target.value); setPieces(v); autoLevel(v); }}
                  style={{ width: '100%', accentColor: '#0a84ff', height: 28 }} />
                <DronePiecesInline pieces={pieces} />
                <p style={helpTxt}>Mas piezas = mas horas de conversion</p>
              </div>
            )}
            {svc.family === 'asset-rt' && (
              <div style={{ marginBottom: 16 }}>
                <span style={{ ...lbl, marginBottom: 6 }}>Detalle</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                  {(['Low poly', 'Medio', 'High poly'] as const).map((l, i) => (
                    <button key={l} onClick={() => setDetail(i as Detail)}
                      style={{ padding: 8, borderRadius: 10, cursor: 'pointer', font: 'inherit', textAlign: 'center',
                        border: detail === i ? '2px solid #0a84ff' : '1px solid #dde0e8',
                        background: detail === i ? '#e8f0fe' : '#fff', color: '#1a1d29' }}>
                      <svg viewBox="0 0 100 70" width="100%">
                        <polygon points="50,5 95,35 50,65 5,35" fill="#5b5bd6" opacity={i === 0 ? 0.4 : i === 1 ? 0.7 : 0.9} />
                        {i >= 1 && <line x1="50" y1="5" x2="50" y2="65" stroke="#fff" strokeWidth={i === 2 ? 1.5 : 0.5} />}
                        {i === 2 && <line x1="5" y1="35" x2="95" y2="35" stroke="#fff" strokeWidth={1.5} />}
                      </svg>
                      <div style={{ fontSize: 12, fontWeight: detail === i ? 700 : 400 }}>{l}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {(svc.id === 'RND-02' || svc.family === 'render') && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 15, fontWeight: 600, color: '#0a84ff' }}>{seconds} segundos</label>
                <input type="range" min={2} max={90} value={seconds}
                  onChange={(e) => setSeconds(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#0a84ff', height: 28 }} />
                <p style={helpTxt}>Mas segundos = mas horas de animacion y render</p>
              </div>
            )}
          </div>

          {svc.noIncluyeEs && svc.noIncluyeEs.length > 0 && (
            <div style={box}>
              <span style={lbl}>NO incluido (se cotiza aparte)</span>
              {svc.noIncluyeEs.map((n) => <p key={n} style={{ fontSize: 13, color: '#b45309', margin: '2px 0' }}>- {n}</p>)}
            </div>
          )}

          <div style={box}>
            <span style={lbl}>Cantidad y condiciones</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: 40, height: 40, borderRadius: 8, border: '1px solid #dde0e8', background: '#fff', cursor: 'pointer', font: 'inherit', fontSize: 18, color: '#1a1d29' }}>-</button>
              <strong style={{ fontSize: 24, minWidth: 36, textAlign: 'center', color: '#1a1d29' }}>{quantity}</strong>
              <button onClick={() => setQuantity(quantity + 1)} style={{ width: 40, height: 40, borderRadius: 8, border: '1px solid #dde0e8', background: '#fff', cursor: 'pointer', font: 'inherit', fontSize: 18, color: '#1a1d29' }}>+</button>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {urgencies.map((o) => (
                <button key={o.id} onClick={() => !o.disabled && setUrgency(o.id)} disabled={o.disabled}
                  style={{ flex: 1, padding: '10px 12px', borderRadius: 10, cursor: o.disabled ? 'not-allowed' : 'pointer',
                    font: 'inherit', textAlign: 'left', border: urgency === o.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                    background: urgency === o.id ? '#e8f0fe' : '#fff', color: '#1a1d29', opacity: o.disabled ? 0.45 : 1 }}>
                  <strong style={{ fontSize: 13.5 }}>{o.label}</strong>
                </button>
              ))}
            </div>
            <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12, cursor: 'pointer' }}>
              <input type="checkbox" checked={firstClient} onChange={(e) => setFirstClient(e.target.checked)} />
              <span style={{ fontSize: 14, color: '#1a1d29' }}>Descuento Lanzamiento (-25%)</span>
            </label>
          </div>

          {quote && (
            <div style={{ background: '#f8f9fb', border: '1px solid #dde0e8', borderRadius: 12, padding: 20 }}>
              {svc.entregablesEs.length > 0 && (
                <div style={{ background: '#f0faf4', border: '1px solid #c3e6cb', borderRadius: 10, padding: 14, marginBottom: 12 }}>
                  <strong style={{ fontSize: 13, color: '#1b8a5a' }}>Recibes:</strong>
                  <ul style={{ fontSize: 13, paddingLeft: 16, marginTop: 6, color: '#1a1d29' }}>
                    {svc.entregablesEs.map((e) => <li key={e}>+ {e}</li>)}
                  </ul>
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBlock: 12 }}>
                <StatBox label="Horas" value={`${quote.hoursMin}-${quote.hoursMax} h`} />
                <StatBox label="Subtotal" value={`${formatMoney(currency, quote.subtotalMin)}-${formatMoney(currency, quote.subtotalMax)}`} />
                <StatBox label="Total" value={`${formatMoney(currency, quote.totalMin)}-${formatMoney(currency, quote.totalMax)}`} highlight />
              </div>
              {svc.entregaDiasEs && svc.entregaDiasEs[1] > 0 && (
                <p style={{ fontSize: 13, color: '#5a5e6e' }}>Entrega: {svc.entregaDiasEs[0]}-{svc.entregaDiasEs[1]} dias habiles</p>
              )}
              <p style={{ fontWeight: 600, fontSize: 13, marginTop: 12, color: '#1a1d29' }}>Rango orientativo, no cotizacion.</p>
            </div>
          )}
        </>
      )}
    </div>
  );

  function autoLevel(p: number): void {
    if (p <= 15) setLevel('S');
    else if (p <= 60) setLevel('M');
    else if (p <= 150) setLevel('L');
    else setLevel('XL');
  }
}

function DronePiecesInline({ pieces }: { pieces: number }) {
  const groups = [
    { min: 1, label: 'base', nodes: [<rect key="f" x="70" y="60" width="100" height="40" rx="10" />, <circle key="m1" cx="50" cy="55" r="12" />, <circle key="m2" cx="190" cy="55" r="12" />] },
    { min: 8, label: 'helices', nodes: [<rect key="p1" x="28" y="52" width="44" height="6" rx="3" />, <rect key="p2" x="168" y="52" width="44" height="6" rx="3" />] },
    { min: 20, label: 'gimbal', nodes: [<circle key="g" cx="120" cy="118" r="9" />] },
    { min: 40, label: 'sensores', nodes: [<line key="an" x1="180" y1="60" x2="196" y2="34" />, <circle key="s" cx="154" cy="92" r="3" />] },
    { min: 90, label: 'arneses', nodes: [<path key="w" d="M78 70 q42 30 84 0" fill="none" />] },
  ];
  const vis = groups.filter((g) => pieces >= g.min);
  return (
    <figure style={{ margin: '12px 0' }}>
      <svg viewBox="0 0 240 160" width="240" height="160" role="img" aria-label={'Drone con ' + pieces + ' piezas'}>
        {vis.flatMap((g) => g.nodes.map((n, i) => <g key={g.label + i} fill="#5b5bd6" stroke="#5b5bd6" strokeWidth={2}>{n}</g>))}
      </svg>
      <figcaption style={{ fontSize: 13, opacity: 0.7, color: '#5a5e6e' }}>{pieces} piezas</figcaption>
    </figure>
  );
}

function StatBox({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ background: highlight ? '#e8f0fe' : '#f8f9fb', border: highlight ? '1px solid #0a84ff' : '1px solid #dde0e8', borderRadius: 10, padding: 14, textAlign: 'center' }}>
      <div style={{ fontSize: 12, opacity: 0.65, color: '#5a5e6e' }}>{label}</div>
      <div style={{ fontSize: highlight ? 18 : 15, fontWeight: highlight ? 800 : 600, color: highlight ? '#0a6cf5' : '#1a1d29' }}>{value}</div>
    </div>
  );
}

function formatMoney(currency: Currency, v: number): string {
  return new Intl.NumberFormat(currency === 'COP' ? 'es-CO' : 'en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(v);
}