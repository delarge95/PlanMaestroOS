import { useState } from 'react';
import { PACKAGES, SERVICE_CATALOG } from '../../../data/services';
import type { Currency } from '../../../data/services';
import { LEVEL_SHORT, formatMoney } from '../../../lib/services/ui';
import { useQuote } from '../state/selectors';
import { useQuoteStore } from '../state/useQuoteStore';
import { DronePieces } from '../visuals/DronePieces';

const h2 = { fontSize: 22, fontWeight: 700 as const, margin: '0 0 8px', color: '#1a1d29' };
const sub = { fontSize: 14, color: '#5a5e6e', marginBottom: 16 };
const section = { maxWidth: 720, margin: '0 auto', padding: '28px 20px' };

export function EntryScreen() {
  const go = useQuoteStore((s) => s.go);
  return (
    <section style={section}>
      <h1 style={h2}>¿Qué necesitas construir en 3D?</h1>
      <p style={sub}>
        Convertimos tus ideas, archivos técnicos y productos en experiencias 3D web interactivas.
        Obtén un rango orientativo de costo y tiempo en menos de 2 minutos.
      </p>

      <div style={{ display: 'grid', gap: 12, marginBlock: 24 }}>
        <button className="cx-card" onClick={() => { useQuoteStore.setState({ presetId: undefined }); go('presets'); }}>
          <div className="cx-card-title">🚀 Empezar con un paquete</div>
          <div className="cx-card-sub">Soluciones predefinidas para necesidades comunes. Recomendado si es tu primer proyecto con nosotros.</div>
        </button>
        <button className="cx-card" onClick={() => go('wizard')}>
          <div className="cx-card-title">🔧 Cotizar desde cero</div>
          <div className="cx-card-sub">Define tu proyecto paso a paso eligiendo servicio y configuración.</div>
        </button>
        <button className="cx-card" onClick={() => go('catalog')}>
          <div className="cx-card-title">📋 Ver catálogo completo</div>
          <div className="cx-card-sub">Explora todos los servicios disponibles con detalles técnicos.</div>
        </button>
      </div>

      <div style={{ marginTop: 32, padding: 16, background: '#f0f4ff', borderRadius: 12 }}>
        <strong style={{ fontSize: 14 }}>¿Por qué AG-SERV?</strong>
        <ul style={{ fontSize: 13, paddingLeft: 18, marginTop: 8, lineHeight: 1.7 }}>
          <li>Especialistas en 3D para industria y ingeniería (CAD→WebGL es nuestro servicio insignia)</li>
          <li>Precios transparentes: ves el rango antes de comprometerte</li>
          <li>Dual moneda: USD para internacional, COP con tarifas locales para Colombia</li>
          <li><strong>−25 % lanzamiento</strong> para primeros clientes mientras construimos portafolio</li>
        </ul>
      </div>
    </section>
  );
}

export function PresetGallery() {
  const selectPreset = useQuoteStore((s) => s.selectPreset);
  const go = useQuoteStore((s) => s.go);
  return (
    <section style={section}>
      <h2 style={h2}>Elige un paquete</h2>
      <p style={sub}>Cada paquete incluye todo lo necesario para ese objetivo. Puedes ajustarlo después.</p>
      <div style={{ display: 'grid', gap: 16 }}>
        {PACKAGES.map((p) => (
          <button key={p.id} className="cx-card" style={{ padding: 20 }}
            onClick={() => { selectPreset(p.id); go('preset-config'); }}>
            <div className="cx-card-title">{p.nombreEs}</div>
            <div className="cx-card-sub">{p.descripcionEs}</div>
            {p.entregablesEs && (
              <ul style={{ fontSize: 12.5, paddingLeft: 16, marginTop: 10, lineHeight: 1.7 }}>
                {p.entregablesEs.slice(0, 3).map((e) => <li key={e}>✓ {e}</li>)}
              </ul>
            )}
            <div style={{ fontSize: 11.5, color: '#5a5e6e', marginTop: 10 }}>
              Para: {p.clienteObjetivoEs} · {p.componentes.length} componentes
            </div>
          </button>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <button className="cx-btn-secondary" onClick={() => go('entry')}>← Inicio</button>
      </div>
    </section>
  );
}

export function PresetConfig() {
  const presetId = useQuoteStore((s) => s.presetId)!;
  const pkg = PACKAGES.find((p) => p.id === presetId);
  const currency = useQuoteStore((s) => s.currency);
  const pieces = useQuoteStore((s) => s.pieces);
  const setPieces = useQuoteStore((s) => s.setPieces);
  const go = useQuoteStore((s) => s.go);
  const result = useQuote();
  const isCad = presetId === 'PK-CAD-WEBGL' || presetId === 'PK-CAD-TWIN';

  return (
    <section style={section}>
      <h2 style={h2}>{pkg?.nombreEs}</h2>
      <p style={sub}>{pkg?.descripcionEs}</p>

      {pkg?.entregablesEs && (
        <div style={{ background: '#f0f4ff', borderRadius: 10, padding: 14, marginBlock: 16 }}>
          <strong style={{ fontSize: 13 }}>Recibes:</strong>
          <ul style={{ fontSize: 13, paddingLeft: 16, marginTop: 6, lineHeight: 1.7 }}>
            {pkg.entregablesEs.map((e) => <li key={e}>✓ {e}</li>)}
          </ul>
        </div>
      )}

      {isCad && (
        <div style={{ marginBlock: 20 }}>
          <label htmlFor="piezas" style={{ fontSize: 16, fontWeight: 600 }}>
            ¿Cuántos modelos necesitas convertir?
          </label>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#0a84ff', marginBlock: 4 }}>≈ {pieces}</div>
          <input id="piezas" type="range" min={1} max={20} value={Math.min(20, Math.max(1, pieces))}
            onChange={(e) => setPieces(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#0a84ff', height: 28 }} />
          <DronePieces pieces={pieces} />
        </div>
      )}
      {!isCad && <p style={{ opacity: 0.7 }}>Este paquete ya incluye una configuración equilibrada.</p>}

      {result && (
        <div style={{ background: '#f0f4ff', borderRadius: 10, padding: 16, marginBlock: 16 }}>
          <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>Estimación actual</p>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#0a84ff', margin: '4px 0' }}>
            {formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}
          </p>
          <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>{result.hoursMin}–{result.hoursMax} horas de trabajo</p>
        </div>
      )}

      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button className="cx-btn-secondary" onClick={() => go('presets')}>← Paquetes</button>
        <button className="cx-btn-primary" onClick={() => go('summary')}>Ver desglose completo →</button>
      </div>
    </section>
  );
}

export function SummaryStep() {
  const s = useQuoteStore();
  const currency = s.currency;
  const [open, setOpen] = useState(false);
  const result = useQuote();

  if (!result || !s.serviceId) {
    return (
      <section style={section}>
        <h2 style={h2}>Resumen</h2>
        <p style={sub}>Configura primero qué necesitas.</p>
        <button className="cx-btn-secondary" onClick={() => s.go('entry')}>← Inicio</button>
      </section>
    );
  }

  const svc = SERVICE_CATALOG.find((x) => x.id === s.serviceId);

  const mailto = `mailto:hola@example.com?subject=${encodeURIComponent(
    'Solicitud de cotización firme — AG-SERV',
  )}&body=${encodeURIComponent(
    `Hola,\n\nQuiero avanzar con este alcance:\n\n` +
    `Servicio: ${serviceName(s.serviceId)}\n` +
    `Horas estimadas: ${result.hoursMin}–${result.hoursMax}\n` +
    `Rango orientativo: ${formatMoney(currency, result.totalMin)} – ${formatMoney(currency, result.totalMax)}\n\n` +
    `Quedo atento para agendar una llamada y cerrar el SOW.`,
  )}`;

  return (
    <section style={section}>
      <h2 style={h2}>Resumen estimado</h2>
      <p style={sub}>{serviceName(s.serviceId)}</p>

      {svc?.entregablesEs && (
        <div style={{ background: '#f0faf4', border: '1px solid #c3e6cb', borderRadius: 10, padding: 16, marginBlock: 14 }}>
          <strong style={{ fontSize: 13, color: '#1b8a5a' }}>📦 Qué recibes:</strong>
          <ul style={{ fontSize: 13, paddingLeft: 16, marginTop: 6, lineHeight: 1.7 }}>
            {svc.entregablesEs.map((e) => <li key={e}>✓ {e}</li>)}
          </ul>
        </div>
      )}

      {svc?.noIncluyeEs && (
        <div style={{ background: '#fff8f0', border: '1px solid #f0d0a0', borderRadius: 10, padding: 14, marginBlock: 10 }}>
          <strong style={{ fontSize: 13, color: '#8a6d00' }}>⚠️ NO incluido (se cotiza aparte):</strong>
          <ul style={{ fontSize: 13, paddingLeft: 16, marginTop: 6 }}>
            {svc.noIncluyeEs.map((e) => <li key={e}>✗ {e}</li>)}
          </ul>
        </div>
      )}

      <div style={{ background: '#f0f4ff', borderRadius: 12, padding: 20, marginBlock: 16 }}>
        <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>Horas estimadas de trabajo</p>
        <p style={{ fontSize: 22, fontWeight: 700, margin: '4px 0' }}>{result.hoursMin}–{result.hoursMax} h</p>

        {result.discountPctApplied !== 0 && (
          <p style={{ color: '#0a84ff', fontWeight: 600, margin: '4px 0' }}>
            Modificadores: {result.discountPctApplied > 0 ? '+' : ''}{result.discountPctApplied} %
          </p>
        )}

        <p style={{ margin: '12px 0 4px', opacity: 0.7, fontSize: 13 }}>Rango total ({currency})</p>
        <p className="cx-total" style={{ margin: 0 }}>{formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}</p>

        {svc?.entregaDiasEs && svc.entregaDiasEs[1] > 0 && (
          <p style={{ margin: '10px 0 0', fontSize: 13, opacity: 0.75 }}>
            ⏱ Tiempo estimado de entrega: {svc.entregaDiasEs[0]}–{svc.entregaDiasEs[1]} días hábiles
          </p>
        )}
      </div>

      <button style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer', font: 'inherit', color: '#5a5e6e' }}
        onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? 'Ocultar' : '¿Cómo se calcula este rango?'}
      </button>
      {open && (
        <div style={{ marginTop: 8, fontSize: 13 }}>
          {[...new Set(result.lines.map((l) => l.refId.split('#')[0]))].map((key) => {
            const svcLines = result.lines.filter((l) => l.refId.startsWith(key));
            return (
              <details key={key} style={{ marginBlock: 4 }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{key}</summary>
                <ul style={{ paddingLeft: 16, marginBlock: 4 }}>
                  {svcLines.map((l, i) => (
                    <li key={i}>{l.labelEs}: {l.hoursMin}–{l.hoursMax} h → {formatMoney(currency, l.costMin)}–{formatMoney(currency, l.costMax)}</li>
                  ))}
                </ul>
              </details>
            );
          })}
          <p style={{ opacity: 0.65, marginTop: 8 }}>{result.notesEs.join(' ')}</p>
        </div>
      )}

      <p style={{ fontWeight: 600, marginBlock: 16 }}>
        ⚠️ Rango orientativo, no cotización. La cifra firme se cierra en un SOW.
      </p>

      <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
        <a href={mailto}><button className="cx-btn-primary">Solicitar cotización firme →</button></a>
        <button className="cx-btn-secondary" onClick={() => s.go('wizard')}>← Ajustar configuración</button>
        <button className="cx-btn-secondary" onClick={() => s.reset()}>Empezar de nuevo</button>
      </div>
    </section>
  );
}

function serviceName(id: string): string {
  const svc = SERVICE_CATALOG.find((x) => x.id === id);
  return svc?.nameEs ?? id;
}

export function CatalogStep() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section style={section}>
      <h2 style={h2}>Catálogo completo de servicios</h2>
      <p style={sub}>Todos los precios son rangos orientativos. Se agrupan por familia.</p>
      {SERVICE_CATALOG.map((svcItem) => {
        const isOpen = expanded === svcItem.id;
        return (
          <div key={svcItem.id} style={{ borderBottom: '1px solid #dde0e8', paddingBlock: 12 }}>
            <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', textAlign: 'left', width: '100%' }}
              onClick={() => setExpanded(isOpen ? null : svcItem.id)}
              aria-expanded={isOpen}>
              <span style={{ fontWeight: 600, fontSize: 15 }}>{svcItem.nameEs}</span>
              <span style={{ float: 'right', opacity: 0.5 }}>{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
              <div style={{ paddingTop: 10 }}>
                <p style={{ fontSize: 13, opacity: 0.75, margin: '0 0 8px' }}>
                  Unidad: {svcItem.unitEs} · Confidence: {svcItem.confidence}
                </p>
                {svcItem.driversEs.length > 0 && (
                  <p style={{ fontSize: 12.5, margin: '0 0 8px' }}>
                    <strong>Variables:</strong> {svcItem.driversEs.join(' · ')}
                  </p>
                )}
                {(svcItem as { entregablesEs?: string[] }).entregablesEs && (
                  <>
                    <strong style={{ fontSize: 12 }}>Recibes:</strong>
                    <ul style={{ fontSize: 12.5, paddingLeft: 16 }}>
                      {(svcItem as { entregablesEs?: string[] }).entregablesEs!.map((e) => <li key={e}>✓ {e}</li>)}
                    </ul>
                  </>
                )}
                {(svcItem as { noIncluyeEs?: string[] }).noIncluyeEs && (
                  <p style={{ fontSize: 12, opacity: 0.65 }}>
                    <strong>NO incluye:</strong> {(svcItem as { noIncluyeEs?: string[] }).noIncluyeEs!.join('; ')}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>
        <button className="cx-btn-secondary" onClick={() => useQuoteStore.getState().go('entry')}>← Inicio</button>
      </div>
    </section>
  );
}

export function CurrencyToggle() {
  const currency = useQuoteStore((s) => s.currency);
  const setCurrency = useQuoteStore((s) => s.setCurrency);
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
          onClick={() => setCurrency(c)}>
          {c === 'USD' ? '$ USD' : '$ COP'}
        </button>
      ))}
    </div>
  );
}
