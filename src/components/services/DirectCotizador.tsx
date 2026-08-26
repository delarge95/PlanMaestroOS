import { useEffect, useMemo, useRef, useState } from 'react';
import { SERVICES } from '../../data/services/catalogCore';
import type { ServiceDef } from '../../data/services/catalogCore';
import { computeQuote } from '../../data/services/formula';
import { LAUNCH_DISCOUNT } from '../../data/services/rateCard';
import type { Currency, LevelId, Subtask } from '../../data/services/types';
import {
  SERVICE_VARIABLES,
  derivarTier,
  recommendedValue,
} from '../../data/services/serviceVariables';
import type { ServiceVariable } from '../../data/services/serviceVariables';
import { groupSubtasksByPhase, PHASES } from '../../data/services/rateLabels';
import { unitToTerm } from '../../data/services/glossary';
import { GOALS, servicesForGoal, minPriceOf } from '../../data/services/goals';
import { Term } from './Term';
import { QuoteCta } from './QuoteCta';
import { ProcesoFaq } from './ProcesoFaq';
import { TierGallery } from './TierGallery';
import { PriceWhy } from './PriceWhy';
import { RefDropzone } from './RefDropzone';
import { CotizadorChat } from './chat/CotizadorChat';
import { computePriceDrivers } from '../../lib/services/priceWhy';
import { inventoryLine } from '../../lib/services/fileChecklist';
import {
  buildSummary,
  decodeShare,
  encodeShare,
  loadLocal,
  quoteId,
  saveLocal,
} from '../../lib/services/share';
import type { ShareState } from '../../lib/services/share';

// ─── Tipos locales ───
type Urgency = 'none' | '72h' | '24h';
type Val = number | string | boolean;

// ─── Estilos ───
const box: React.CSSProperties = { background: '#fff', border: '1px solid #dde0e8', borderRadius: 12, padding: 20, marginBottom: 16 };
const lbl: React.CSSProperties = { display: 'block', fontSize: 15, fontWeight: 600, marginBottom: 8, color: '#1a1d29' };
const help: React.CSSProperties = { fontSize: 12.5, color: '#5a5e6e', marginTop: 4 };

const CX_CSS = `
@media print {
  [data-noprint] { display: none !important; }
  body { background: #fff !important; }
  #cotizador-resultado { border: none !important; padding: 0 !important; }
}
.cx-term { position: relative; display: inline-flex; align-items: center; margin-left: 6px; cursor: help; color: #0a84ff; font-style: normal; font-weight: 400; }
.cx-term:focus-visible { outline: 2px solid #0a84ff; border-radius: 4px; }
.cx-term-pop {
  position: absolute; bottom: 135%; left: 50%; transform: translateX(-50%);
  width: min(270px, 74vw); background: #1a1d29; color: #fff; font-size: 12px; line-height: 1.45;
  padding: 10px 12px; border-radius: 8px; opacity: 0; pointer-events: none; transition: opacity .12s;
  z-index: 40; text-align: left; font-weight: 400;
}
.cx-term:hover .cx-term-pop, .cx-term:focus .cx-term-pop { opacity: 1; }
`;

// ─── Componente principal ───
export function DirectCotizador() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [goal, setGoalRaw] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [familyFilter, setFamilyFilter] = useState('');
  const [vals, setVals] = useState<Record<string, Val>>({});
  const [unsure, setUnsure] = useState<Record<string, boolean>>({});
  const [firstClient, setFirstClient] = useState(true);
  const [urgency, setUrgency] = useState<Urgency>('none');
  const [quantity, setQuantity] = useState(1);
  const [adjuntos, setAdjuntos] = useState<string[]>([]);
  const hydratedRef = useRef(false);

  useEffect(() => {
    const shared = decodeShare(window.location.search);
    const local = shared ?? loadLocal();
    if (local) {
      setServiceId(local.serviceId);
      setVals(local.vals ?? {});
      setCurrency(local.currency === 'COP' ? 'COP' : 'USD');
      setFirstClient(local.firstClient !== false);
      if (['none', '72h', '24h'].includes(String(local.urgency))) setUrgency(local.urgency as Urgency);
      setQuantity(Math.max(1, Number(local.quantity) || 1));
    }
    hydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (!hydratedRef.current) return;
    saveLocal({ serviceId, vals, currency, firstClient, urgency, quantity });
  }, [serviceId, vals, currency, firstClient, urgency, quantity]);

  const setGoal = (g: string) => { setGoalRaw(g); setUnsure({}); };

  const svc: ServiceDef | undefined = serviceId ? SERVICES.find((s) => s.id === serviceId) : undefined;
  const variables: ServiceVariable[] = serviceId ? (SERVICE_VARIABLES[serviceId]?.variables ?? []) : [];
  const goalLabel = GOALS.find((g) => g.id === goal)?.labelEs ?? '';

  const tier = useMemo(() => {
    if (!serviceId) return null;
    return derivarTier(serviceId, vals);
  }, [serviceId, vals]);

  const urgencyPct = urgency === '72h' ? 25 : urgency === '24h' ? 50 : 0;

  const quoteOpts = useMemo(() => ({
    firstClientLaunch: firstClient,
    batchUnits: quantity > 1 ? quantity : undefined,
    urgencyPct,
  }), [firstClient, quantity, urgencyPct]);

  const quote = useMemo(() => {
    if (!svc || !tier) return null;
    try {
      return computeQuote(svc.id, tier, currency, quoteOpts);
    } catch { return null; }
  }, [svc, tier, currency, quoteOpts]);

  const phaseGroups = useMemo(() => {
    if (!svc || !tier) return [];
    return groupSubtasksByPhase(svc.subtasks as Subtask[], tier);
  }, [svc, tier]);

  // S6: lista por objetivo; chips de familia siguen funcionando dentro.
  const priceMap = useMemo(() => {
    const base = goal ? servicesForGoal(goal) : SERVICES;
    const list = familyFilter ? base.filter((s) => s.family === familyFilter) : base;
    const m = new Map<string, number | null>();
    for (const s of list) m.set(s.id, minPriceOf(s.id, currency));
    return { list, m };
  }, [goal, familyFilter, currency]);
  const filtered = priceMap.list;

  // S10: drivers de precio
  const drivers = useMemo(() => {
    if (!svc || variables.length === 0) return [];
    try { return computePriceDrivers(svc.id, currency, quoteOpts, variables, vals); }
    catch { return []; }
  }, [svc, variables, currency, quoteOpts, vals]);

  const conditions = useMemo(() => {
    const c: string[] = [];
    if (firstClient && LAUNCH_DISCOUNT.activo) c.push(`Lanzamiento −${LAUNCH_DISCOUNT.defaultPct}%`);
    if (urgencyPct > 0) c.push(`Urgencia +${urgencyPct}%`);
    if (quantity > 1) c.push(`Lote ×${quantity} −15%`);
    return c;
  }, [firstClient, urgencyPct, quantity]);

  const shareState: ShareState | null = svc && tier
    ? { serviceId: svc.id, vals, currency, firstClient, urgency, quantity }
    : null;
  const shareUrl = shareState && typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?${encodeShare(shareState)}`
    : '';
  const qid = shareState ? quoteId(shareState) : '';

  const summary = shareState && quote && tier
    ? buildSummary({
        id: qid,
        serviceName: svc!.nameEs,
        serviceCode: svc!.id,
        tier,
        currency,
        totalRange: `${fmt(currency, quote.totalMin)} – ${fmt(currency, quote.totalMax)}`,
        hoursRange: `${quote.hoursMin}–${quote.hoursMax} h`,
        entrega: svc!.entregaDiasEs ? `${svc!.entregaDiasEs[0]}–${svc!.entregaDiasEs[1]} días hábiles` : undefined,
        entregables: quote.entregables,
        noIncluye: quote.noIncluye,
        url: shareUrl,
        adjuntos: inventoryLine(adjuntos),
      })
    : '';

  const chatSection = !serviceId ? 'inicio' : !quote ? 'variables' : 'resultado';

  const toggleUnsure = (v: ServiceVariable) => {
    setUnsure((p) => {
      const next = { ...p };
      if (next[v.id]) { delete next[v.id]; return next; }
      const rec = recommendedValue(v, goal);
      if (rec !== null) setVals((pv) => ({ ...pv, [v.id]: rec }));
      next[v.id] = true;
      return next;
    });
  };

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 16px 60px' }}>
      <style dangerouslySetInnerHTML={{ __html: CX_CSS }} />

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <strong style={{ fontSize: 16, color: '#1a1d29' }}>AG-SERV · Cotizador</strong>
        <span data-noprint><CurrencyToggle currency={currency} onChange={setCurrency} /></span>
      </header>
      <p style={{ margin: '0 0 18px', fontSize: 12, color: '#5a5e6e' }}>
        Precios en {currency === 'USD' ? 'dólares (tarifa internacional)' : 'pesos colombianos (mercado local)'}
        <Term id="moneda" />
      </p>

      {/* 0+1: Objetivo y servicio */}
      <div style={box} data-noprint>
        <span style={lbl}>¿Qué quieres lograr?</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', gap: 8, marginBottom: 14 }}>
          {GOALS.map((g) => (
            <button key={g.id} onClick={() => setGoal(goal === g.id ? '' : g.id)}
              title={g.descEs}
              style={{
                textAlign: 'left', padding: '10px 12px', borderRadius: 10, font: 'inherit',
                border: goal === g.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                background: goal === g.id ? '#e8f0fe' : '#fff', cursor: 'pointer',
              }}>
              <span style={{ fontSize: 17 }}>{g.icon}</span>
              <span style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: '#1a1d29', marginTop: 2 }}>{g.labelEs}</span>
              <span style={{ display: 'block', fontSize: 10.5, color: '#5a5e6e' }}>{g.descEs}</span>
            </button>
          ))}
        </div>

        <span style={lbl}>Selecciona el servicio {goal && goal !== 'no-se' ? `(para ${goalLabel.toLowerCase()})` : ''}</span>
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
        <div style={{ display: 'grid', gap: 6, maxHeight: 300, overflowY: 'auto' }}>
          {filtered.length === 0 && (
            <p style={{ ...help, margin: 0 }}>Ningún servicio de este objetivo en esta familia. Prueba con “Todos”.</p>
          )}
          {filtered.map((s) => {
            const desde = priceMap.m.get(s.id);
            return (
              <button key={s.id} onClick={() => { setServiceId(s.id); setVals({}); setUnsure({}); }}
                style={{
                  padding: 12, borderRadius: 10, cursor: 'pointer', font: 'inherit', textAlign: 'left',
                  border: serviceId === s.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                  background: serviceId === s.id ? '#e8f0fe' : '#fff', color: '#1a1d29',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
                }}>
                <span>
                  <span style={{ display: 'block', fontWeight: 600, fontSize: 14 }}>{s.nameEs}</span>
                  <span style={{ display: 'block', fontSize: 12, opacity: 0.6 }}>{s.unitEs}</span>
                </span>
                {desde != null && (
                  <span style={{ flexShrink: 0, fontSize: 11.5, fontWeight: 700, color: '#166534', whiteSpace: 'nowrap' }}>
                    desde {fmt(currency, desde)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2: Variables */}
      {svc && variables.length > 0 && (
        <div style={box} data-noprint>
          <span style={lbl}>2 · Configura lo que sabes</span>
          <p style={{ ...help, marginTop: 0, marginBottom: 12 }}>
            ¿No sabes qué poner? Usa <strong>“No sé”</strong> en cada pregunta y ponemos un valor típico por ti.
          </p>
          {variables.map((v) => (
            <VariableControl key={v.id}
              v={v}
              value={vals[v.id]}
              unsure={!!unsure[v.id]}
              recReason={goalLabel ? `recomendado para “${goalLabel}”` : 'valor típico'}
              onChange={(nv) => {
                setVals((p) => ({ ...p, [v.id]: nv }));
                setUnsure((p) => { const n = { ...p }; delete n[v.id]; return n; });
              }}
              onToggleUnsure={() => toggleUnsure(v)}
            />
          ))}
        </div>
      )}

      {/* 3: Nivel derivado */}
      {tier && (
        <div style={box} data-noprint>
          <span style={lbl}>3 · Nivel calculado automáticamente</span>
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
          <p style={help}>Tú nunca eliges el nivel: se deriva de tus respuestas de arriba.</p>
        </div>
      )}

      {/* 4: Condiciones */}
      {svc && (
        <div style={box} data-noprint>
          <span style={lbl}>4 · Condiciones</span>
          <div style={{ marginBottom: 14 }}>
            <span style={{ ...lbl, fontSize: 14 }}>Urgencia</span>
            <div style={{ display: 'flex', gap: 8 }}>
              {([
                { id: 'none' as Urgency, label: 'Sin apuro', desc: 'Cola normal' },
                { id: '72h' as Urgency, label: 'Pronto', desc: '+25%' },
                { id: '24h' as Urgency, label: 'Crítico', desc: '+50% · según disponibilidad' },
              ]).map((o) => (
                <button key={o.id} onClick={() => setUrgency(o.id)}
                  style={{
                    flex: 1, padding: '10px 12px', borderRadius: 10,
                    cursor: 'pointer', font: 'inherit', textAlign: 'left',
                    border: urgency === o.id ? '2px solid #0a84ff' : '1px solid #dde0e8',
                    background: urgency === o.id ? '#e8f0fe' : '#fff',
                    color: '#1a1d29',
                  }}>
                  <strong style={{ fontSize: 13.5 }}>{o.label}</strong>
                  <div style={{ fontSize: 11, opacity: 0.65 }}>{o.desc}</div>
                </button>
              ))}
            </div>
            <p style={{ ...help, marginTop: 6 }}>Los plazos urgentes se confirman por chat antes de iniciar.</p>
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
        <div id="cotizador-resultado" style={{ background: '#f8f9fb', border: '1px solid #dde0e8', borderRadius: 12, padding: 20 }}>
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

          {svc.entregaDiasEs && svc.entregaDiasEs[1] > 0 && (
            <p style={{ fontSize: 13, color: '#5a5e6e', marginBottom: 8 }}>
              ⏱ Entrega: {svc.entregaDiasEs[0]}–{svc.entregaDiasEs[1]} días hábiles
            </p>
          )}

          {/* S7: comparador de niveles */}
          <TierGallery svc={svc} tier={tier} currency={currency} quoteOpts={quoteOpts} />

          {/* S10: transparencia del precio */}
          <PriceWhy drivers={drivers} conditions={conditions}
            onLower={(varId, minValue) => setVals((p) => ({ ...p, [varId]: minValue }))} />

          {/* S2: desglose por fases */}
          <details style={{ marginTop: 8 }} open>
            <summary style={{ cursor: 'pointer', fontSize: 13, color: '#0a84ff' }}>¿Cómo se calcula? ({variables.length} variables)</summary>
            <div style={{ fontSize: 12.5, marginTop: 8, color: '#1a1d29' }}>
              {PHASES.map(({ id, label, icon }) => {
                const g = phaseGroups.find((gr) => gr.phase === id);
                if (!g) return null;
                return (
                  <div key={id} style={{ marginBottom: 10 }}>
                    <strong style={{ fontSize: 13 }}>{icon} {label}</strong>
                    <span style={{ opacity: 0.65, marginLeft: 6, fontSize: 12 }}>{g.hoursLabel}</span>
                    <ul style={{ paddingLeft: 18, margin: '4px 0 0' }}>
                      {g.items.map((it) => (
                        <li key={it.id} style={{ marginBottom: 2 }}>
                          {it.nameEs} · <span style={{ opacity: 0.7 }}>{it.hoursLabel}</span>
                          {' '}
                          <span style={{ opacity: 0.55, fontSize: 11.5 }}>({it.classLabel})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <p style={{ marginTop: 6, opacity: 0.65 }}>{quote.notesEs?.join(' ')}</p>
            </div>
          </details>

          {/* S9: referencias/archivos con checklist local */}
          <RefDropzone onInventory={setAdjuntos} />

          <QuoteCta summary={summary} url={shareUrl} />

          <p style={{ fontWeight: 600, fontSize: 13, marginTop: 12, color: '#1a1d29' }}>
            ⚠️ Rango orientativo, no cotización.
          </p>
        </div>
      )}

      <ProcesoFaq />

      {/* S12: asistente contextual */}
      <span data-noprint>
        <CotizadorChat
          section={chatSection}
          serviceName={svc?.nameEs}
          tier={tier ?? undefined}
          totalRange={quote && svc ? `${fmt(currency, quote.totalMin)} – ${fmt(currency, quote.totalMax)}` : undefined}
          entrega={svc?.entregaDiasEs ? `${svc.entregaDiasEs[0]}–${svc.entregaDiasEs[1]} días hábiles` : undefined}
          contactEmail="contacto@ag-serv.com"
        />
      </span>
    </div>
  );
}

// ─── Sub-componentes ───

function VariableControl({ v, value, unsure, recReason, onChange, onToggleUnsure }: {
  v: ServiceVariable;
  value: Val | undefined;
  unsure: boolean;
  recReason: string;
  onChange: (nv: Val) => void;
  onToggleUnsure: () => void;
}) {
  const head = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
      <span>{v.preguntaEs}{v.type === 'number' && unitToTerm(v.unidadEs) && <Term id={unitToTerm(v.unidadEs)!} />}</span>
      <button onClick={onToggleUnsure} aria-pressed={unsure}
        style={{
          flexShrink: 0, font: 'inherit', fontSize: 11.5, cursor: 'pointer',
          border: unsure ? '1px solid #0a84ff' : '1px solid #dde0e8', borderRadius: 999,
          padding: '2px 10px', background: unsure ? '#e8f0fe' : '#fff', color: unsure ? '#0a84ff' : '#5a5e6e',
        }}>
        {unsure ? '✓ Usando recomendado' : 'No sé'}
      </button>
    </div>
  );

  if (v.type === 'number') {
    const current = typeof value === 'number' ? value : v.min ?? 0;
    return (
      <div style={{ marginBottom: 18, opacity: unsure ? 0.72 : 1 }}>
        <label style={{ ...lbl, fontSize: 15 }}>{head}</label>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
          <strong style={{ fontSize: 22, color: '#0a84ff' }}>{current} {v.unidadEs}</strong>
        </div>
        <input type="range" min={v.min} max={v.max} step={v.step ?? 1} value={current}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#0a84ff', height: 28 }} />
        {unsure && <p style={help}>✔ {recReason}. Mueve el control para ajustarlo tú.</p>}
        {!unsure && v.tierMap && (
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
      <div style={{ marginBottom: 16, opacity: unsure ? 0.72 : 1 }}>
        <label style={{ display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
          <input type="checkbox" checked={active} onChange={(e) => onChange(e.target.checked)} />
          <span style={{ fontSize: 14.5, color: '#1a1d29', flex: 1 }}>{head}</span>
          {v.tierSiActivo && active && <span className="cx-chip" style={{ fontSize: 11 }}>→ {v.tierSiActivo}</span>}
        </label>
        {unsure && <p style={help}>✔ {recReason}.</p>}
      </div>
    );
  }

  if (v.type === 'select' && v.opciones) {
    return (
      <div style={{ marginBottom: 16, opacity: unsure ? 0.72 : 1 }}>
        <span style={lbl}>{head}</span>
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
        {unsure && <p style={help}>✔ {recReason}.</p>}
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
