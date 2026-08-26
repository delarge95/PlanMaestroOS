import { useMemo, useState } from 'react';
import { SERVICES } from '../../data/services/catalogCore';
import type { ServiceDef } from '../../data/services/catalogCore';
import { computeQuote } from '../../data/services/formula';
import { getRateCard, LAUNCH_DISCOUNT } from '../../data/services/rateCard';
import type { Currency, LevelId, Subtask } from '../../data/services/types';
import { SERVICE_VARIABLES, derivarTier } from '../../data/services/serviceVariables';
import type { ServiceVariable } from '../../data/services/serviceVariables';

// ─── Tipos locales ───
type Detail = 0 | 1 | 2;
type Urgency = 'none' | '72h' | '24h';
type Val = number | string | boolean;

interface VarState {
  values: Record<string, Val>;
  set: (id: string, v: Val) => void;
}

// ─── Estilos ───
const box: React.CSSProperties = { background: '#fff', border: '1px solid #dde0e8', borderRadius: 12, padding: 20, marginBottom: 16 };
const lbl: React.CSSProperties = { display: 'block', fontSize: 15, fontWeight: 600, marginBottom: 8, color: '#1a1d29' };
const help: React.CSSProperties = { fontSize: 12.5, color: '#5a5e6e', marginTop: 4 };
const btnPri: React.CSSProperties = { padding: '12px 22px', borderRadius: 10, border: 'none', cursor: 'pointer', background: '#0a84ff', color: '#fff', font: 'inherit', fontWeight: 600, fontSize: 15 };
const btnSec: React.CSSProperties = { padding: '12px 18px', borderRadius: 10, border: '1px solid #dde0e8', background: '#fff', cursor: 'pointer', font: 'inherit', fontSize: 14, color: '#1a1d29' };

// ─── Componente principal ───
export function DirectCotizador() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [serviceId, setServiceId] = useState('');
  const [familyFilter, setFamilyFilter] = useState('');
  const [vals, setVals] = useState<Record<string, Val>>({});
  const [firstClient, setFirstClient] = useState(true);
  const [urgency, setUrgency] = useState<Urgency>('none');
  const [quantity, setQuantity] = useState(1);

  const svc = serviceId ? SERVICES.find((s) => s.id === serviceId) : undefined;
  const variables = serviceId ? (SERVICE_VARIABLES[serviceId]?.variables ?? []) : [];

  const tier = useMemo(() => {
    if (!serviceId) return null;
    return derivarTier(serviceId, vals);
  }, [serviceId, vals]);

  const quote = useMemo(() => {
    if (!svc || !tier) return null;
    try {
      return computeQuote(svc.id, tier, currency, {
        firstClientLaunch: firstClient,
        batchUnits: quantity > 1 ? quantity : undefined,
      });
    } catch { return null; }
  }, [svc, tier, currency, firstClient, urgency, quantity]);

  const filtered = familyFilter ? SERVICES.filter((s) => s.family === familyFilter) : SERVICES;

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 16px 60px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <strong style={{ fontSize: 16, color: '#1a1d29' }}>AG-SERV · Cotizador</strong>
        <CurrencyToggle currency={currency} onChange={setCurrency} />
      </header>

      {/* 1: Seleccionar servicio */}
      <div style={box}>
        <span style={lbl}>1 · Selecciona el servicio</span>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
          <FilterChip active={familyFilter === ''} onClick={() => setFamilyFilter('')} label="Todos" />
          {[
            { id: 'render', label: 'Render 3D' },
            { id: 'asset-rt', label: 'Assets RT' },
            { id: 'web-3d', label: 'Web 3D' },
            { id: 'vfx', label: 'VFX' },
            { id: 'ia', label: 'IA' },
            { id: 'datos', label: 'CAD/Datos' },
            { id: 'soporte', label: 'Soporte' },
          ].map((f) => (
            <FilterChip key={f.id} active={familyFilter === f.id} onClick={() => setFamilyFilter(f.id)} label={f.label} />
          ))}
        </div>
        <div style={{ display: 'grid', gap: 6, maxHeight: 280, overflowY: 'auto' }}>
          {filtered.map((s) => (
            <button key={s.id} onClick={() => { setServiceId(s.id); setVals({}); }}
              style={{
                padding: 12, borderRadius: 10, cursor: 'pointer', font: 'inherit', textAlign: 'left',
                border: serviceId === s.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                background: serviceId === s.id ? '#e8f0fe' : '#fff', color: '#1a1d29',
              }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{s.nameEs}</div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>{s.unitEs}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 2: Variables del servicio */}
      {svc && variables.length > 0 && (
        <div style={box}>
          <span style={lbl}>2 · Configura las variables</span>
          <p style={{ ...help, marginTop: 0, marginBottom: 12 }}>
            Estas variables determinan el nivel de complejidad y por tanto el precio.
          </p>
          {variables.map((v: ServiceVariable) => (
            <VariableControl key={v.id} v={v} value={vals[v.id]} onChange={(nv) => setVals((p) => ({ ...p, [v.id]: nv }))} />
          ))}
        </div>
      )}

      {/* 3: Nivel derivado */}
      {tier && (
        <div style={box}>
          <span style={lbl}>3 · Nivel derivado</span>
          <div style={{ display: 'flex', gap: 6 }}>
            {(['XS', 'S', 'M', 'L', 'XL'] as LevelId[]).map((l) => (
              <div key={l} style={{
                flex: 1, padding: '10px 4px', borderRadius: 10, textAlign: 'center',
                border: tier === l ? '2px solid #0a84ff' : '1px solid #dde0e8',
                background: tier === l ? '#e8f0fe' : '#fff',
              }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: tier === l ? '#0a84ff' : '#5a5e6e' }}>{l}</div>
              </div>
            ))}
          </div>
          <p style={help}>El nivel se calcula automáticamente de tus respuestas arriba.</p>
        </div>
      )}

      {/* 4: Condiciones */}
      {svc && (
        <div style={box}>
          <span style={lbl}>4 · Condiciones</span>
          <div style={{ marginBottom: 14 }}>
            <span style={{ ...lbl, fontSize: 14 }}>Urgencia</span>
            <div style={{ display: 'flex', gap: 8 }}>
              {([
                { id: 'none' as Urgency, label: 'Sin apuro', desc: '' },
                { id: '72h' as Urgency, label: 'Pronto', desc: '+25%' },
                { id: '24h' as Urgency, label: 'Crítico', desc: '+50%', disabled: true },
              ]).map((o: { id: Urgency; label: string; desc: string; disabled?: boolean }) => (
                <button key={o.id} onClick={() => !o.disabled && setUrgency(o.id)} disabled={o.disabled}
                  style={{
                    flex: 1, padding: '10px 12px', borderRadius: 10,
                    cursor: o.disabled ? 'not-allowed' : 'pointer', font: 'inherit', textAlign: 'left',
                    border: urgency === o.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                    background: urgency === o.id ? '#e8f0fe' : '#fff',
                    color: '#1a1d29', opacity: o.disabled ? 0.45 : 1,
                  }}>
                  <strong style={{ fontSize: 13.5 }}>{o.label}</strong>
                  {o.desc && <div style={{ fontSize: 11, opacity: 0.65 }}>{o.desc}</div>}
                </button>
              ))}
            </div>
          </div>
          <label style={{ display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
            <input type="checkbox" checked={firstClient} onChange={(e) => setFirstClient(e.target.checked)} />
            <span style={{ fontSize: 14, color: '#1a1d29' }}>
              Descuento Lanzamiento (<strong>−{LAUNCH_DISCOUNT.defaultPct}%</strong>)
            </span>
          </label>
        </div>
      )}

      {/* 5: Resultado */}
      {svc && tier && quote && (
        <div style={{ background: '#f8f9fb', border: '1px solid #dde0e8', borderRadius: 12, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <strong style={{ fontSize: 16, color: '#1a1d29' }}>{svc.nameEs}</strong>
            <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: 8, fontSize: 16, fontWeight: 800, fontFamily: 'monospace' }}>
              {tier}
            </span>
          </div>

          {svc.entregablesEs.length > 0 && (
            <div style={{ background: '#f0faf4', border: '1px solid #c3e6cb', borderRadius: 10, padding: 14, marginBottom: 12 }}>
              <strong style={{ fontSize: 13, color: '#1b8a5a' }}>📦 Recibes:</strong>
              <ul style={{ fontSize: 13, paddingLeft: 16, marginTop: 6, color: '#1a1d29' }}>
                {quote.entregables.map((e: string) => <li key={e}>✓ {e}</li>)}
              </ul>
            </div>
          )}

          {quote.noIncluye.length > 0 && (
            <div style={{ background: '#fff8f0', border: '1px solid #f0d0a0', borderRadius: 10, padding: 14, marginBottom: 12 }}>
              <strong style={{ fontSize: 13, color: '#8a6d00' }}>⚠️ NO incluido:</strong>
              <ul style={{ fontSize: 13, paddingLeft: 16, marginTop: 6, color: '#1a1d29' }}>
                {quote.noIncluye.map((e: string) => <li key={e}>✗ {e}</li>)}
              </ul>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBlock: 14 }}>
            <StatBox label="Horas" value={`${quote.hoursMin}–${quote.hoursMax} h`} />
            <StatBox label="Nivel" value={tier} />
            <StatBox label="Total" value={`${fmt(currency, quote.totalMin)}–${fmt(currency, quote.totalMax)}`} highlight />
          </div>

          {quote.entregaDias && quote.entregaDias[1] > 0 && (
            <p style={{ fontSize: 13, color: '#5a5e6e', marginBottom: 8 }}>
              ⏱ Entrega: {quote.entregaDias[0]}–{quote.entregaDias[1]} días hábiles
            </p>
          )}

          <details style={{ marginTop: 8 }}>
            <summary style={{ cursor: 'pointer', fontSize: 13, color: '#0a84ff' }}>¿Cómo se calcula?</summary>
            <div style={{ fontSize: 12.5, marginTop: 6, color: '#1a1d29' }}>
              <p>Tier: <strong>{tier}</strong> (derivado de {variables.length} variables)</p>
              <ul style={{ paddingLeft: 16 }}>
                {svc.subtasks.filter((st: Subtask) => !st.optional).map((st: Subtask) => {
                  const range = st.hours[tier];
                  if (!range) return null;
                  return <li key={st.id}>{st.nameEs}: {range.min}–{range.max} h ({st.rateClass})</li>;
                })}
              </ul>
              <p style={{ marginTop: 6, opacity: 0.65 }}>{quote.notesEs?.join(' ')}</p>
            </div>
          </details>

          <p style={{ fontWeight: 600, fontSize: 13, marginTop: 12, color: '#1a1d29' }}>
            ⚠️ Rango orientativo, no cotización.
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Sub-componentes ───

function VariableControl({ v, value, onChange }: { v: ServiceVariable; value: Val | undefined; onChange: (v: Val) => void }) {
  if (v.type === 'number') {
    const current = typeof value === 'number' ? value : v.min ?? 0;
    return (
      <div style={{ marginBottom: 18 }}>
        <label style={{ ...lbl, fontSize: 15 }}>{v.preguntaEs}</label>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
          <strong style={{ fontSize: 22, color: '#0a84ff' }}>{current} {v.unidadEs}</strong>
        </div>
        <input type="range" min={v.min} max={v.max} step={v.step ?? 1} value={current}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#0a84ff', height: 28 }} />
        {v.tierMap && (
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, opacity: 0.55, marginTop: 2, color: '#5a5e6e' }}>
            {v.tierMap.map((tm: { maxVal: number; tier: LevelId }) => <span key={tm.tier}>≤{tm.maxVal}={tm.tier}</span>)}
          </div>
        )}
      </div>
    );
  }

  if (v.type === 'toggle') {
    const active = value === true;
    return (
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
          <input type="checkbox" checked={active} onChange={(e) => onChange(e.target.checked)} />
          <span style={{ fontSize: 14.5, color: '#1a1d29' }}>{v.preguntaEs}</span>
          {v.tierSiActivo && active && <span className="cx-chip" style={{ fontSize: 11 }}>→ {v.tierSiActivo}</span>}
        </label>
      </div>
    );
  }

  if (v.type === 'select' && v.opciones) {
    return (
      <div style={{ marginBottom: 16 }}>
        <span style={lbl}>{v.preguntaEs}</span>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {v.opciones.map((o: { valorEs: string; tierHint?: LevelId }) => {
            const active = value === o.valorEs;
            return (
              <button key={o.valorEs}
                onClick={() => onChange(o.valorEs)}
                style={{
                  padding: '10px 16px', borderRadius: 10, cursor: 'pointer', font: 'inherit', fontSize: 13.5,
                  border: active ? '2px solid #0a84ff' : '1px solid #dde0e8',
                  background: active ? '#e8f0fe' : '#fff', color: '#1a1d29',
                  fontWeight: active ? 600 : 400,
                }}>
                {o.valorEs}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} style={{
      padding: '5px 12px', borderRadius: 999, cursor: 'pointer', font: 'inherit', fontSize: 12.5,
      border: active ? '2px solid #0a84ff' : '1px solid #dde0e8',
      background: active ? '#e8f0fe' : '#fff', color: '#1a1d29', fontWeight: active ? 600 : 400,
    }}>{label}</button>
  );
}

function StatBox({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{
      background: highlight ? '#e8f0fe' : '#f0f4ff',
      border: highlight ? '1px solid #0a84ff' : '1px solid #c7d7fe',
      borderRadius: 10, padding: 12, textAlign: 'center',
    }}>
      <div style={{ fontSize: 11, opacity: 0.65, color: '#5a5e6e' }}>{label}</div>
      <div style={{ fontSize: highlight ? 16 : 14, fontWeight: highlight ? 800 : 700, color: highlight ? '#0a6cf5' : '#1a1d29' }}>{value}</div>
    </div>
  );
}

function fmt(currency: Currency, v: number): string {
  return new Intl.NumberFormat(currency === 'COP' ? 'es-CO' : 'en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(v);
}

function CurrencyToggle({ currency, onChange }: { currency: Currency; onChange: (c: Currency) => void }) {
  return (
    <div role="group" aria-label="Moneda" style={{ display: 'inline-flex', border: '1px solid var(--c-border,#dde0e8)', borderRadius: 999, overflow: 'hidden' }}>
      {(['USD', 'COP'] as Currency[]).map((c) => (
        <button key={c}
          style={{
            padding: '6px 14px', border: 'none', cursor: 'pointer', font: 'inherit',
            fontWeight: currency === c ? 700 : 400,
            background: currency === c ? 'var(--c-accent,#0a84ff)' : 'transparent',
            color: currency === c ? '#fff' : 'inherit',
          }}
          onClick={() => onChange(c)}>
          {c === 'USD' ? '$ USD' : '$ COP'}
        </button>
      ))}
    </div>
  );
}

// DronePieces inline (autocontenido, sin imports externos)
function DronePieces({ pieces }: { pieces: number }) {
  const groups: Array<{ min: number; nodes: React.ReactNode[] }> = [
    { min: 1, nodes: [<rect key="f" x="70" y="60" width="100" height="40" rx="10" />, <circle key="m1" cx="50" cy="55" r="12" />, <circle key="m2" cx="190" cy="55" r="12" />] },
    { min: 8, nodes: [<rect key="p1" x="28" y="52" width="44" height="6" rx="3" />, <rect key="p2" x="168" y="52" width="44" height="6" rx="3" />] },
    { min: 20, nodes: [<circle key="g" cx="120" cy="118" r="9" />] },
    { min: 40, nodes: [<line key="an" x1="180" y1="60" x2="196" y2="34" />, <circle key="s" cx="154" cy="92" r="3" />] },
    { min: 90, nodes: [<path key="w" d="M78 70 q42 30 84 0" fill="none" />] },
  ];
  const vis = groups.filter((g) => pieces >= g.min);
  return (
    <figure style={{ margin: '12px 0' }}>
      <svg viewBox="0 0 240 160" width="240" height="160">
        {vis.flatMap((g) => g.nodes.map((n, i) => <g key={g.min + i} fill="#5b5bd6" stroke="#5b5bd6" strokeWidth={2}>{n}</g>))}
      </svg>
      <figcaption style={{ fontSize: 13, opacity: 0.7, color: '#5a5e6e' }}>{pieces} piezas</figcaption>
    </figure>
  );
}
