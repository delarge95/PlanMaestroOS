import { useMemo, useState } from 'react';
import { SERVICE_CATALOG } from '../../data/services';
import type { LevelId, Currency } from '../../data/services';
import { LEVEL_SHORT, formatMoney, suggestedLevelFromPieces, suggestedLevelFromSeconds } from '../../lib/services/ui';
import { getUxSpec, PREGUNTAS_RUBRICA, DISCLAIMER_ESTIMACION } from '../../lib/services/ux';
import { computeQuote, getServiceById } from '../../data/services';
import { DronePieces } from './visuals/DronePieces';
import { PolyDetail } from './visuals/VisualAids';

type Detail = 0 | 1 | 2;
type Urgency = 'none' | '72h' | '24h';

interface UrgencyOption {
  id: Urgency;
  label: string;
  desc: string;
  disabled?: boolean;
}

const FAMILIAS: Array<{ id: string; label: string }> = [
  { id: 'render', label: 'Render 3D' },
  { id: 'asset-rt', label: 'Assets Realtime' },
  { id: 'web-3d', label: 'Web 3D' },
  { id: 'vfx', label: 'VFX / Footage' },
  { id: 'ia', label: 'IA' },
  { id: 'datos', label: 'CAD / Datos' },
  { id: 'soporte', label: 'Soporte' },
];

const NIVELES: Array<{ id: LevelId; label: string; desc: string }> = [
  { id: 'XS', label: 'XS', desc: 'Micro 2-3s' },
  { id: 'N1', label: 'S', desc: 'Simple' },
  { id: 'N2', label: 'M', desc: 'Estándar' },
  { id: 'N3', label: 'L', desc: 'Complejo' },
  { id: 'N4', label: 'XL', desc: 'Crítico' },
];

const secBox: React.CSSProperties = {
  background: '#fff', border: '1px solid #dde0e8', borderRadius: 12, padding: 20, marginBottom: 16,
};
const lblStyle: React.CSSProperties = {
  display: 'block', fontSize: 15, fontWeight: 600, marginBottom: 8, color: '#1a1d29',
};
const helpStyle: React.CSSProperties = { fontSize: 12.5, color: '#5a5e6e', marginTop: 4 };

export function DirectCotizador({ currency, onLaunch }: { currency: Currency; onLaunch: boolean }) {
  const [serviceId, setServiceId] = useState<string>('');
  const [level, setLevel] = useState<LevelId>('N2');
  const [quantity, setQuantity] = useState<number>(1);
  const [pieces, setPieces] = useState<number>(10);
  const [seconds, setSeconds] = useState<number>(15);
  const [detail, setDetail] = useState<Detail>(1);
  const [qualitative, setQualitative] = useState<Record<string, -1 | 0 | 1>>({});
  const [addons, setAddons] = useState<string[]>([]);
  const [firstClient, setFirstClient] = useState<boolean>(true);
  const [urgency, setUrgency] = useState<Urgency>('none');
  const [familyFilter, setFamilyFilter] = useState<string>('');

  const selectedSvc = serviceId ? getServiceById(serviceId) : undefined;
  const uxSpec = serviceId ? getUxSpec(serviceId) : undefined;

  const finalLevel = useMemo((): LevelId => {
    const order: LevelId[] = ['XS', 'N1', 'N2', 'N3', 'N4'];
    const deltas = Object.values(qualitative);
    const total = deltas.reduce((a: number, b: number) => a + b, 0);
    if (total === 0) return level;
    const idx = order.indexOf(level);
    return order[Math.min(order.length - 1, Math.max(0, idx + total))];
  }, [level, qualitative]);

  const quote = useMemo(() => {
    if (!serviceId) return null;
    try {
      const modifiers: Record<string, unknown> = { firstClientLaunch: onLaunch && firstClient };
      if (urgency === '72h') modifiers.urgent72h = true;
      if (urgency === '24h') modifiers.critical24h = true;
      if (quantity > 1) modifiers.batchUnits = quantity;
      return computeQuote(
        { kind: 'service', serviceId, level: finalLevel, currency, modifiers, quantity },
        { getService: (id: string) => getServiceById(id) },
      );
    } catch { return null; }
  }, [serviceId, finalLevel, currency, quantity, onLaunch, firstClient, urgency]);

  const filtered = familyFilter
    ? SERVICE_CATALOG.filter((s: { family: string }) => s.family === familyFilter)
    : SERVICE_CATALOG;

  const urgencyOptions: UrgencyOption[] = [
    { id: 'none', label: 'Sin apuro', desc: '' },
    { id: '72h', label: 'Pronto', desc: '+25 % · arranque <72h' },
    { id: '24h', label: 'Crítico', desc: '+50 % · <24h', disabled: true },
  ];

  return (
    <div>
      {/* 1: Servicio */}
      <div style={secBox}>
        <h3 style={lblStyle}>1 · Selecciona el servicio</h3>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
          <FilterChip active={familyFilter === ''} onClick={() => setFamilyFilter('')} label="Todos" />
          {FAMILIAS.map((f) => (
            <FilterChip key={f.id} active={familyFilter === f.id} onClick={() => setFamilyFilter(f.id)} label={f.label} />
          ))}
        </div>
        <div style={{ display: 'grid', gap: 6, maxHeight: 300, overflowY: 'auto' }}>
          {filtered.map((s: { id: string; nameEs: string; unitEs: string; family: string; entregablesEs?: string[] }) => (
            <ServiceRow key={s.id} id={s.id} name={s.nameEs} unit={s.unitEs}
              selected={serviceId === s.id} onClick={() => setServiceId(s.id)}
              entregables={s.entregablesEs} />
          ))}
        </div>
      </div>

      {selectedSvc && (
        <>
          {/* 2: Nivel */}
          <div style={secBox}>
            <h3 style={lblStyle}>2 · Nivel de complejidad</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {NIVELES.map((n) => (
                <button key={n.id}
                  onClick={() => setLevel(n.id)}
                  style={{
                    flex: 1, minWidth: 72, padding: '10px 6px', borderRadius: 10,
                    cursor: 'pointer', font: 'inherit', textAlign: 'center',
                    border: level === n.id ? '2px solid #0a6cf5' : '1px solid #dde0e8',
                    background: level === n.id ? '#e8f0fe' : '#fff', color: '#1a1d29',
                  }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: level === n.id ? '#0a6cf5' : '#5a5e6e' }}>{n.label}</div>
                  <div style={{ fontSize: 10, opacity: 0.65 }}>{n.desc}</div>
                </button>
              ))}
            </div>
            <p style={{ fontSize: 13, marginTop: 8, color: '#1a1d29' }}>
              <strong>Nivel seleccionado: {level}</strong> — {NIVELES.find((n) => n.id === level)?.desc}
            </p>
          </div>

          {/* 3: Config */}
          {uxSpec && uxSpec.controles.length > 0 && (
            <div style={secBox}>
              <h3 style={lblStyle}>3 · Configura los detalles</h3>
              {uxSpec.controles.map((c: import('../../lib/services/ux').ControlSpec) => {
                if (c.kind === 'slider-piezas') {
                  const sug = suggestedLevelFromPieces(pieces);
                  return (
                    <div key={c.kind}>
                      <SliderUI spec={c} value={pieces} onChange={setPieces} />
                      <DronePieces pieces={pieces} />
                      <p style={helpStyle}>Nivel sugerido: <strong>{LEVEL_SHORT[sug]}</strong></p>
                    </div>
                  );
                }
                if (c.kind === 'slider-detalle') {
                  return <PolyDetail key="pd" estado={detail} onEstado={(e) => setDetail(e)} />;
                }
                if (c.kind === 'slider-segundos') {
                  const sug = suggestedLevelFromSeconds(seconds);
                  return (
                    <div key={c.kind}>
                      <SliderUI spec={c} value={seconds} onChange={setSeconds} />
                      <p style={helpStyle}>Nivel sugerido: <strong>{LEVEL_SHORT[sug]}</strong></p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}

          {/* 4: Rúbrica */}
          {uxSpec && uxSpec.preguntasRubrica.length > 0 && (
            <div style={secBox}>
              <h3 style={lblStyle}>4 · Afina con estas preguntas</h3>
              {uxSpec.preguntasRubrica.map((dimId: string) => {
                const q = PREGUNTAS_RUBRICA[dimId];
                if (!q) return null;
                const actual = qualitative[dimId] ?? 0;
                return (
                  <div key={dimId} style={{ marginBottom: 16 }}>
                    <span style={lblStyle}>{q.preguntaEs}</span>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {q.opciones.map((o: { valorEs: string; delta: -1 | 0 | 1; ayudaEs?: string }) => (
                        <button key={o.valorEs}
                          onClick={() => setQualitative((prev) => ({ ...prev, [dimId]: o.delta }))}
                          style={{
                            padding: '10px 14px', borderRadius: 10, cursor: 'pointer', font: 'inherit',
                            border: actual === o.delta ? '2px solid #0a6cf5' : '1px solid #dde0e8',
                            background: actual === o.delta ? '#e8f0fe' : '#fff', color: '#1a1d29',
                            textAlign: 'left', flex: '1 1 160px',
                          }}>
                          <div style={{ fontWeight: actual === o.delta ? 700 : 400 }}>{o.valorEs}</div>
                          {o.ayudaEs && <div style={{ fontSize: 11, opacity: 0.6 }}>{o.ayudaEs}</div>}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* 5: Add-ons */}
          {selectedSvc.cotizador && selectedSvc.cotizador.addOns.length > 0 && (
            <div style={secBox}>
              <h3 style={lblStyle}>5 · Extras opcionales</h3>
              {selectedSvc.cotizador.addOns.map((a: { id: string; delta?: string }) => (
                <label key={a.id} style={{ display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer', padding: '6px 0' }}>
                  <input type="checkbox" checked={addons.includes(a.id)}
                    onChange={() => setAddons((prev) => prev.includes(a.id) ? prev.filter((x) => x !== a.id) : [...prev, a.id])} />
                  <span style={{ fontSize: 14 }}>
                    {a.id} {a.delta && <span style={{ opacity: 0.6, fontSize: 12 }}>({a.delta})</span>}
                  </span>
                </label>
              ))}
            </div>
          )}

          {/* 6: Cantidad + modificadores */}
          <div style={secBox}>
            <h3 style={lblStyle}>6 · Cantidad y condiciones</h3>
            <div style={{ marginBottom: 14 }}>
              <span style={lblStyle}>¿Cuántas unidades?</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: 40, height: 40, borderRadius: 8, border: '1px solid #dde0e8', background: '#fff', cursor: 'pointer', font: 'inherit', fontSize: 18, color: '#1a1d29' }}>−</button>
                <strong style={{ fontSize: 24, minWidth: 40, textAlign: 'center', color: '#1a1d29' }}>{quantity}</strong>
                <button onClick={() => setQuantity(quantity + 1)}
                  style={{ width: 40, height: 40, borderRadius: 8, border: '1px solid #dde0e8', background: '#fff', cursor: 'pointer', font: 'inherit', fontSize: 18, color: '#1a1d29' }}>+</button>
                {quantity > 1 && <span style={{ fontSize: 12.5, color: '#1b8a5a' }}>Lote: descuento aplicado</span>}
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <span style={lblStyle}>Urgencia</span>
              <div style={{ display: 'flex', gap: 8 }}>
                {urgencyOptions.map((o) => (
                  <button key={o.id}
                    onClick={() => !o.disabled && setUrgency(o.id)}
                    disabled={o.disabled}
                    style={{
                      flex: 1, padding: '10px 12px', borderRadius: 10,
                      cursor: o.disabled ? 'not-allowed' : 'pointer', font: 'inherit', textAlign: 'left',
                      border: urgency === o.id ? '2px solid #0a6cf5' : '1px solid #dde0e8',
                      background: urgency === o.id ? '#e8f0fe' : '#fff', color: '#1a1d29',
                      opacity: o.disabled ? 0.45 : 1,
                    }}>
                    <div style={{ fontWeight: 600, fontSize: 13.5 }}>{o.label}</div>
                    {o.desc && <div style={{ fontSize: 11, opacity: 0.65 }}>{o.desc}</div>}
                    {o.disabled && <div style={{ fontSize: 11, opacity: 0.5 }}>Requiere discovery previo</div>}
                  </button>
                ))}
              </div>
            </div>

            <label style={{ display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
              <input type="checkbox" checked={firstClient} onChange={(e) => setFirstClient(e.target.checked)} />
              <span style={{ fontSize: 14, color: '#1a1d29' }}>Descuento Lanzamiento (−25 % primeros clientes)</span>
            </label>
          </div>

          {/* Resultado */}
          {quote && (
            <div style={{ background: '#f8f9fb', border: '1px solid #dde0e8', borderRadius: 12, padding: 20 }}>
              {selectedSvc.entregablesEs && (
                <div style={{ background: '#f0faf4', border: '1px solid #c3e6cb', borderRadius: 10, padding: 14, marginBottom: 12 }}>
                  <strong style={{ fontSize: 13, color: '#1b8a5a' }}>📦 Recibes:</strong>
                  <ul style={{ fontSize: 13, paddingLeft: 16, marginTop: 6, color: '#1a1d29' }}>
                    {selectedSvc.entregablesEs.map((e: string) => <li key={e}>✓ {e}</li>)}
                  </ul>
                </div>
              )}
              {selectedSvc.noIncluyeEs && (
                <div style={{ background: '#fff8f0', border: '1px solid #f0d0a0', borderRadius: 10, padding: 14, marginBottom: 12 }}>
                  <strong style={{ fontSize: 13, color: '#8a6d00' }}>⚠️ NO incluido:</strong>
                  <ul style={{ fontSize: 13, paddingLeft: 16, marginTop: 6, color: '#1a1d29' }}>
                    {selectedSvc.noIncluyeEs.map((e: string) => <li key={e}>✗ {e}</li>)}
                  </ul>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBlock: 12 }}>
                <Stat label="Horas" value={`${quote.hoursMin}–${quote.hoursMax} h`} />
                <Stat label="Subtotal" value={`${formatMoney(currency, quote.subtotalMin)}–${formatMoney(currency, quote.subtotalMax)}`} />
                <Stat label="Total" value={`${formatMoney(currency, quote.totalMin)}–${formatMoney(currency, quote.totalMax)}`} highlight />
              </div>

              {selectedSvc.entregaDiasEs && selectedSvc.entregaDiasEs[1] > 0 && (
                <p style={{ fontSize: 13, color: '#5a5e6e' }}>
                  ⏱ Entrega: {selectedSvc.entregaDiasEs[0]}–{selectedSvc.entregaDiasEs[1]} días hábiles
                </p>
              )}

              <details style={{ marginTop: 10 }}>
                <summary style={{ cursor: 'pointer', fontSize: 13, color: '#0a6cf5' }}>¿Cómo se calcula?</summary>
                <ul style={{ fontSize: 12.5, paddingLeft: 16, marginTop: 6, color: '#1a1d29' }}>
                  {quote.lines.map((l: { labelEs: string; hoursMin: number; hoursMax: number; costMin: number; costMax: number }, i: number) => (
                    <li key={i}>{l.labelEs}: {l.hoursMin}–{l.hoursMax} h → {formatMoney(currency, l.costMin)}–{formatMoney(currency, l.costMax)}</li>
                  ))}
                </ul>
                <p style={{ fontSize: 12, opacity: 0.65, marginTop: 6, color: '#5a5e6e' }}>{quote.notesEs.join(' ')}</p>
              </details>

              <p style={{ fontWeight: 600, fontSize: 13, marginTop: 14, color: '#1a1d29' }}>
                ⚠️ {DISCLAIMER_ESTIMACION}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{
      background: highlight ? '#e8f0fe' : '#f8f9fb',
      border: highlight ? '1px solid #0a84ff' : '1px solid #dde0e8',
      borderRadius: 10, padding: 14, textAlign: 'center',
    }}>
      <div style={{ fontSize: 12, opacity: 0.65, color: '#5a5e6e' }}>{label}</div>
      <div style={{ fontSize: highlight ? 18 : 15, fontWeight: highlight ? 800 : 600, color: highlight ? '#0a6cf5' : '#1a1d29' }}>{value}</div>
    </div>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} style={{
      padding: '5px 12px', borderRadius: 999, cursor: 'pointer', font: 'inherit', fontSize: 12.5,
      border: active ? '2px solid #0a6cf5' : '1px solid #dde0e8',
      background: active ? '#e8f0fe' : '#fff', color: '#1a1d29', fontWeight: active ? 600 : 400,
    }}>{label}</button>
  );
}

function ServiceRow({ id, name, unit, selected, onClick, entregables }: {
  id: string; name: string; unit: string; selected: boolean;
  onClick: () => void; entregables?: string[];
}) {
  return (
    <button onClick={onClick} style={{
      padding: 12, borderRadius: 10, cursor: 'pointer', font: 'inherit', textAlign: 'left',
      border: selected ? '2px solid #0a6cf5' : '1px solid #dde0e8',
      background: selected ? '#e8f0fe' : '#fff', color: '#1a1d29',
    }}>
      <div style={{ fontWeight: 600, fontSize: 14 }}>{name}</div>
      <div style={{ fontSize: 12, opacity: 0.6 }}>{unit}</div>
      {selected && entregables && (
        <ul style={{ fontSize: 12, paddingLeft: 14, marginTop: 6, color: '#1a1d29' }}>
          {entregables.slice(0, 3).map((e: string) => <li key={e}>✓ {e}</li>)}
        </ul>
      )}
    </button>
  );
}

interface SliderSpecLite {
  preguntaEs: string;
  min: number;
  max: number;
  step: number;
  unidadEs: (v: number) => string;
  umbrales?: Array<{ hasta: number; nivel: string; etiquetaEs: string }>;
}

function SliderUI({ spec, value, onChange }: {
  spec: SliderSpecLite; value: number; onChange: (v: number) => void;
}) {
  return (
    <div style={{ marginBlock: 14 }}>
      <label style={{ ...lblStyle, fontSize: 16 }}>{spec.preguntaEs}</label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <strong style={{ fontSize: 22, color: '#0a6cf5' }}>{spec.unidadEs(value)}</strong>
      </div>
      <input type="range" min={spec.min} max={spec.max} step={spec.step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={spec.unidadEs(value)}
        style={{ width: '100%', accentColor: '#0a6cf5', height: 28 }} />
      {spec.umbrales && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, opacity: 0.55, marginTop: 2, color: '#5a5e6e' }}>
          {spec.umbrales.map((u: { hasta: number; nivel: string; etiquetaEs: string }) => <span key={u.nivel}>▾ {u.etiquetaEs}</span>)}
        </div>
      )}
    </div>
  );
}
