/**
 * CotizadorRedesign.tsx — Rediseño completo Awwwards-level.
 * Solo servicios Web 3D. Full-width desktop. WebGL background.
 * Dos modos: guiado + catálogo. Mínimo texto, máximo impacto visual.
 */

import { useState, useMemo, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SERVICES } from '../../data/services/catalogCore';
import { computeQuote } from '../../data/services/formula';
import { LAUNCH_DISCOUNT } from '../../data/services/rateCard';
import { SERVICE_VARIABLES, derivarTier, recommendedValue } from '../../data/services/serviceVariables';
import type { ServiceVariable } from '../../data/services/serviceVariables';
import { BRAND } from '../../data/services/branding';
import type { Currency, LevelId } from '../../data/services/types';
import { QuoteCta } from './QuoteCta';
import { GuidedWizard } from './GuidedWizard';
import { RefDropzone } from './RefDropzone';

type Val = number | string | boolean;
type Urgency = 'none' | '72h' | '24h';

/** Solo Web 3D — el enfoque del negocio. */
const WEB3D_IDS = [
  'RTA-04', 'RTA-05', 'WEB-01', 'WEB-02', 'WEB-03', 'WEB-04', 'WEB-05', 'WEB-06',
].filter(id => SERVICES.some(s => s.id === id));

const WEB3D = SERVICES.filter(s => WEB3D_IDS.includes(s.id));

const fmt = (cur: Currency, v: number) =>
  new Intl.NumberFormat(cur === 'COP' ? 'es-CO' : 'en-US', { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(v);

// ═══════════════════════════════════════════════════════════════
// FONDO WEBGL — campo geométrico sutil que responde al mouse
// ═══════════════════════════════════════════════════════════════
function WebGLBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = ref.current;
    if (!mount) return;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    cam.position.z = 8;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Grid de cubos flotantes — minimal, elegante
    const group = new THREE.Group();
    const geo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const mat = new THREE.MeshBasicMaterial({ color: 0x0071e3, transparent: true, opacity: 0.06 });
    const nodes: THREE.Mesh[] = [];
    const N = 14;
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) {
      if (Math.random() > 0.12) continue;
      const m = new THREE.Mesh(geo, mat);
      m.position.set((x - N / 2) * 0.8 + (Math.random() - 0.5) * 0.4, (y - N / 2) * 0.8 + (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 2);
      group.add(m);
      nodes.push(m);
    }
    scene.add(group);

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => { mx = (e.clientX / window.innerWidth - 0.5) * 2; my = (e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener('mousemove', onMouse);

    let raf = 0;
    const loop = (t: number) => {
      group.rotation.y = mx * 0.08;
      group.rotation.x = my * 0.06;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.rotation.x = t * 0.0002 + i;
        n.rotation.y = t * 0.00015 + i * 0.5;
        n.scale.setScalar(1 + Math.sin(t * 0.001 + i * 0.3) * 0.3);
      }
      renderer.render(scene, cam);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMouse); renderer.dispose(); mount.replaceChildren(); };
  }, []);
  return <div ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} aria-hidden="true" />;
}

// ═══════════════════════════════════════════════════════════════
// CARD 3D INTERACTIVA — tilt al hover con WebGL lighting
// ═══════════════════════════════════════════════════════════════
function ServiceCard({ svc, currency, onPick, index }: {
  svc: typeof SERVICES[0]; currency: Currency; onPick: () => void; index: number;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const desde = useMemo(() => {
    const t = derivarTier(svc.id, {});
    if (!t) return null;
    try { const q = computeQuote(svc.id, t, currency, {}); return q ? q.totalMin : null; } catch { return null; }
  }, [svc, currency]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    el.style.setProperty('--glare-x', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--glare-y', `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = ''; };

  return (
    <button
      ref={ref}
      onClick={onPick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: 'relative', display: 'flex', flexDirection: 'column', gap: 6,
        padding: '22px 20px 18px', textAlign: 'left', font: 'inherit',
        background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0,0,0,0.04)', borderRadius: 20,
        cursor: 'pointer', overflow: 'hidden',
        transition: 'transform 0.3s cubic-bezier(0.25,0.8,0.4,1), box-shadow 0.3s',
        boxShadow: '0 2px 16px rgba(0,0,0,0.03)',
        animation: `cardIn 0.5s ${index * 0.05}s cubic-bezier(0.25,0.8,0.4,1) both`,
      }}
    >
      {/* Glare effect */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at var(--glare-x,50%) var(--glare-y,50%), rgba(0,113,227,0.08) 0%, transparent 60%)',
        opacity: 0, transition: 'opacity 0.3s',
      }} className="card-glare" />
      <span style={{ fontSize: 11, fontWeight: 600, color: '#0071e3', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {svc.family === 'web-3d' ? 'Web 3D' : svc.family}
      </span>
      <strong style={{ fontSize: 17, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{svc.nameEs}</strong>
      <span style={{ fontSize: 13, color: '#86868b', lineHeight: 1.4 }}>{svc.unitEs}</span>
      {desde != null && (
        <span style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', marginTop: 6 }}>
          desde <strong style={{ fontSize: 18, color: '#0071e3', letterSpacing: '-0.02em' }}>{fmt(currency, desde)}</strong>
        </span>
      )}
      <style>{`
        button:hover .card-glare { opacity: 1; }
        @keyframes cardIn { from { opacity: 0; transform: translateY(24px) scale(0.96); } to { opacity: 1; transform: none; } }
      `}</style>
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════
// SLIDER LUXE — segmentos con relleno animado
// ═══════════════════════════════════════════════════════════════
function LuxeSlider({ v, value, onChange }: { v: ServiceVariable; value: number; onChange: (n: number) => void }) {
  const pct = v.max != null && v.min != null && v.max !== v.min ? ((value - v.min) / (v.max - v.min)) * 100 : 50;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#1d1d1f' }}>{v.preguntaEs}</span>
        <strong style={{ fontSize: 22, fontWeight: 700, color: '#0071e3', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
          {value}<span style={{ fontSize: 13, color: '#86868b', fontWeight: 400, marginLeft: 4 }}>{v.unidadEs}</span>
        </strong>
      </div>
      <div style={{ position: 'relative', height: 6, borderRadius: 3, background: 'rgba(0,0,0,0.06)', cursor: 'pointer' }}
        onClick={(e) => {
          const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const pct2 = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
          onChange(Math.round((v.min ?? 0) + pct2 * ((v.max ?? 1) - (v.min ?? 0))));
        }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, height: '100%', borderRadius: 3,
          width: `${pct}%`, background: 'linear-gradient(90deg, #0071e3 0%, #5ac8fa 100%)',
          transition: 'width 0.25s cubic-bezier(0.25,0.8,0.4,1)',
        }} />
        <div style={{
          position: 'absolute', top: -8, left: `calc(${pct}% - 11px)`, width: 22, height: 22,
          borderRadius: '50%', background: '#fff', border: '0.5px solid rgba(0,0,0,0.04)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)', transition: 'left 0.25s cubic-bezier(0.25,0.8,0.4,1)',
        }} />
      </div>
      {v.tierMap && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#aeaeb2', marginTop: 2 }}>
          {v.tierMap.map((tm: { maxVal: number; tier: LevelId }) => <span key={tm.tier}>≤{tm.maxVal} → {tm.tier}</span>)}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN — Rediseño completo
// ═══════════════════════════════════════════════════════════════
export function CotizadorRedesign() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [serviceId, setServiceId] = useState('');
  const [vals, setVals] = useState<Record<string, Val>>({});
  const [unsure, setUnsure] = useState<Record<string, boolean>>({});
  const [firstClient, setFirstClient] = useState(true);
  const [urgency, setUrgency] = useState<Urgency>('none');
  const [quantity, setQuantity] = useState(1);
  const [adjuntos, setAdjuntos] = useState<string[]>([]);
  const [mode, setMode] = useState<'guided' | 'catalog'>('guided');

  const svc = WEB3D.find(s => s.id === serviceId);
  const variables: ServiceVariable[] = serviceId ? (SERVICE_VARIABLES[serviceId]?.variables ?? []) : [];
  const tier = useMemo(() => serviceId ? derivarTier(serviceId, vals) : null, [serviceId, vals]);
  const urgencyPct = urgency === '72h' ? 25 : urgency === '24h' ? 50 : 0;
  const quoteOpts = useMemo(() => ({
    firstClientLaunch: firstClient, batchUnits: quantity > 1 ? quantity : undefined, urgencyPct,
  }), [firstClient, quantity, urgencyPct]);
  const quote = useMemo(() => {
    if (!svc || !tier) return null;
    try { return computeQuote(svc.id, tier, currency, quoteOpts); } catch { return null; }
  }, [svc, tier, currency, quoteOpts]);

  const summary = svc && quote ? `${svc.nameEs} — ${fmt(currency, quote.totalMin)}–${fmt(currency, quote.totalMax)} (${tier})` : '';

  return (
    <div style={{ minHeight: '100vh', background: '#fbfbfd', position: 'relative' }}>
      <WebGLBackground />
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Inter, system-ui, sans-serif; }
        @media (max-width: 768px) { .cx-desktop-only { display: none !important; } }
        @media (min-width: 769px) { .cx-grid { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)) !important; max-width: 1200px !important; } }
        @media print { [data-noprint] { display: none !important; } body { background: #fff !important; } }
        .cx-content { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
      `}</style>

      {/* NAV minimal */}
      <nav data-noprint style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 32px', position: 'relative', zIndex: 2,
        borderBottom: '1px solid rgba(0,0,0,0.03)',
      }}>
        <strong style={{ fontSize: 16, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em' }}>{BRAND.name}</strong>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <button onClick={() => { setMode('guided'); setServiceId(''); }}
            style={{ font: '600 14px inherit', color: mode === 'guided' ? '#0071e3' : '#86868b', background: 'none', border: 'none', cursor: 'pointer' }}>
            Cotizar
          </button>
          <button onClick={() => setMode('catalog')}
            style={{ font: '600 14px inherit', color: mode === 'catalog' ? '#0071e3' : '#86868b', background: 'none', border: 'none', cursor: 'pointer' }}>
            Catálogo
          </button>
          <div style={{ display: 'inline-flex', borderRadius: 999, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
            {(['USD', 'COP'] as Currency[]).map(c => (
              <button key={c} onClick={() => setCurrency(c)}
                style={{
                  padding: '6px 14px', font: `600 13px inherit`, border: 'none', cursor: 'pointer',
                  background: currency === c ? '#0071e3' : 'transparent',
                  color: currency === c ? '#fff' : '#86868b',
                }}>{c}</button>
            ))}
          </div>
        </div>
      </nav>

      <div className="cx-content">
        {/* ═══ MODO GUIADO ═══ */}
        {mode === 'guided' && !svc && <GuidedWizard />}

        {/* ═══ CONFIGURACIÓN (cuando hay servicio) ═══ */}
        {svc && (
          <section style={{ paddingTop: 40, paddingBottom: 60, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(280px,380px)', gap: 32, alignItems: 'start' }} className="cx-desktop-only">
            {/* Panel izquierdo: configuración */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <button onClick={() => setServiceId('')} data-noprint
                style={{ alignSelf: 'flex-start', font: '600 14px inherit', color: '#0071e3', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 8 }}>
                ← Cambiar servicio
              </button>
              <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: 0 }}>{svc.nameEs}</h2>

              {variables.length > 0 && (
                <div style={{
                  background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,0,0,0.04)', borderRadius: 20, padding: 28,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {variables.map(v => {
                    const val = vals[v.id] ?? (v.type === 'number' ? (v.min ?? 0) : undefined);
                    return (
                      <div key={v.id}>
                        {v.type === 'number' && (
                          <LuxeSlider v={v} value={typeof val === 'number' ? val : v.min ?? 0}
                            onChange={(n) => { setVals(p => ({ ...p, [v.id]: n })); setUnsure(p => { const q = { ...p }; delete q[v.id]; return q; }); }} />
                        )}
                        {v.type === 'select' && v.opciones && (
                          <div>
                            <span style={{ fontSize: 15, fontWeight: 600, color: '#1d1d1f', display: 'block', marginBottom: 10 }}>{v.preguntaEs}</span>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                              {v.opciones.map((o: { valorEs: string }) => (
                                <button key={o.valorEs} onClick={() => setVals(p => ({ ...p, [v.id]: o.valorEs }))}
                                  style={{
                                    padding: '10px 18px', borderRadius: 999, font: `500 14px inherit`, cursor: 'pointer',
                                    border: vals[v.id] === o.valorEs ? '2px solid #0071e3' : '1px solid rgba(0,0,0,0.08)',
                                    background: vals[v.id] === o.valorEs ? '#e8f0fe' : '#fff', color: '#1d1d1f',
                                  }}>{o.valorEs}</button>
                              ))}
                            </div>
                          </div>
                        )}
                        {v.type === 'toggle' && (
                          <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
                            <div onClick={() => setVals(p => ({ ...p, [v.id]: !vals[v.id] }))}
                              style={{ width: 44, height: 26, borderRadius: 13, background: vals[v.id] ? '#30d158' : 'rgba(0,0,0,0.08)', position: 'relative', transition: 'background 0.25s', flexShrink: 0 }}>
                              <div style={{ position: 'absolute', top: 2, left: vals[v.id] ? 20 : 2, width: 22, height: 22, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'left 0.25s cubic-bezier(0.3,0.9,0.4,1)' }} />
                            </div>
                            <span style={{ fontSize: 15, color: '#1d1d1f' }}>{v.preguntaEs}</span>
                          </label>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Urgencia + descuento */}
              <div style={{
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,0,0,0.04)', borderRadius: 20, padding: 24,
              }}>
                <div style={{ display: 'flex', gap: 10 }}>
                  {([['none', 'Normal'], ['72h', 'Pronto +25%'], ['24h', 'Crítico +50%']] as const).map(([id, label]) => (
                    <button key={id} onClick={() => setUrgency(id as Urgency)}
                      style={{
                        flex: 1, padding: '12px 16px', borderRadius: 14, font: `600 13px inherit`, cursor: 'pointer',
                        border: urgency === id ? '2px solid #0071e3' : '1px solid rgba(0,0,0,0.08)',
                        background: urgency === id ? '#e8f0fe' : '#fff', color: '#1d1d1f',
                      }}>{label}</button>
                  ))}
                </div>
                <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 16, cursor: 'pointer' }}>
                  <div onClick={() => setFirstClient(!firstClient)}
                    style={{ width: 44, height: 26, borderRadius: 13, background: firstClient ? '#30d158' : 'rgba(0,0,0,0.08)', position: 'relative', flexShrink: 0 }}>
                    <div style={{ position: 'absolute', top: 2, left: firstClient ? 20 : 2, width: 22, height: 22, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'left 0.25s' }} />
                  </div>
                  <span style={{ fontSize: 14, color: '#86868b' }}>Descuento lanzamiento −{LAUNCH_DISCOUNT.defaultPct}%</span>
                </label>
              </div>
            </div>

            {/* Panel derecho: resultado STICKY */}
            <aside style={{
              position: 'sticky', top: 24,
              background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)',
              border: '1px solid rgba(0,0,0,0.04)', borderRadius: 24, padding: 32,
              boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            }}>
              {quote && tier ? (
                <>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0071e3', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                    {tier} · Nivel {tier === 'XS' ? 'esencial' : tier === 'S' ? 'estándar' : tier === 'M' ? 'profesional' : tier === 'L' ? 'premium' : 'máximo'}
                  </div>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#1d1d1f', lineHeight: 1 }}>
                    {fmt(currency, quote.totalMin)}
                  </div>
                  <div style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 500, color: '#86868b', marginTop: 4 }}>
                    a {fmt(currency, quote.totalMax)}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 24 }}>
                    <div style={{ padding: 14, borderRadius: 14, background: '#fafafa' }}>
                      <div style={{ fontSize: 11, fontWeight: 500, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Horas</div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: '#1d1d1f', marginTop: 2 }}>{quote.hoursMin}–{quote.hoursMax}h</div>
                    </div>
                    <div style={{ padding: 14, borderRadius: 14, background: '#fafafa' }}>
                      <div style={{ fontSize: 11, fontWeight: 500, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Entrega</div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: '#1d1d1f', marginTop: 2 }}>
                        {svc.entregaDiasEs ? `${svc.entregaDiasEs[0]}–${svc.entregaDiasEs[1]}d` : '—'}
                      </div>
                    </div>
                  </div>
                  {quote.entregables.length > 0 && (
                    <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#86868b', marginBottom: 8 }}>Incluye</div>
                      {quote.entregables.slice(0, 4).map((e: string) => (
                        <div key={e} style={{ fontSize: 14, color: '#1d1d1f', padding: '4px 0', display: 'flex', gap: 6 }}>
                          <span style={{ color: '#30d158' }}>✓</span> {e}
                        </div>
                      ))}
                    </div>
                  )}
                  <div data-noprint style={{ marginTop: 24 }}>
                    <QuoteCta summary={summary} url={typeof window !== 'undefined' ? window.location.href : ''} />
                  </div>
                  <p style={{ fontSize: 11, color: '#aeaeb2', marginTop: 16, textAlign: 'center' }}>Rango orientativo · válida 15 días</p>
                </>
              ) : (
                <p style={{ color: '#86868b', fontSize: 15, textAlign: 'center', padding: 20 }}>Configura las variables para ver el precio</p>
              )}
            </aside>
          </section>
        )}

        {/* ═══ MODO CATÁLOGO ═══ */}
        {mode === 'catalog' && (
          <section style={{ paddingTop: 60, paddingBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: '0 0 8px' }}>
              Todos los servicios
            </h2>
            <p style={{ fontSize: 16, color: '#86868b', margin: '0 0 40px' }}>Web 3D, visores, configuradores, herramientas.</p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 16,
            }}>
              {SERVICES.map((s, i) => (
                <ServiceCard key={s.id} svc={s} currency={currency} index={i}
                  onPick={() => { setMode('guided'); setServiceId(s.id); setVals({}); }} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
