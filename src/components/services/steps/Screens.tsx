import { useState } from 'react';
import type { Currency } from '../../../data/services';
import { PACKAGES, SERVICE_CATALOG } from '../../../data/services';
import { LEVEL_SHORT, formatMoney, suggestedLevelFromPieces } from '../../../lib/services/ui';
import { useQuote } from '../state/selectors';
import { useQuoteStore } from '../state/useQuoteStore';
import { DronePieces } from '../visuals/DronePieces';

export function EntryScreen() {
  const go = useQuoteStore((s) => s.go);
  return (
    <section>
      <h1>¿Qué necesitas construir en 3D?</h1>
      <p style={{ opacity: 0.8 }}>Obtén un rango orientativo en menos de 2 minutos.</p>
      <div style={{ display: 'grid', gap: 12, marginBlock: 28 }}>
        <button className="cx-card" onClick={() => { useQuoteStore.setState({ presetId: undefined }); go('presets'); }}>
          <strong>Empezar con un paquete</strong><br />
          <span style={{ opacity: 0.7 }}>Soluciones listas para necesidades comunes (recomendado)</span>
        </button>
        <button className="cx-card" onClick={() => go('wizard')}>
          <strong>Cotizar desde cero</strong><br />
          <span style={{ opacity: 0.7 }}>Define tu proyecto paso a paso</span>
        </button>
        <button className="cx-card" onClick={() => go('catalog')}>
          <strong>Ver catálogo completo</strong><br />
          <span style={{ opacity: 0.7 }}>Todos los servicios, ficha por ficha</span>
        </button>
      </div>
    </section>
  );
}

export function PresetGallery() {
  const selectPreset = useQuoteStore((s) => s.selectPreset);
  const go = useQuoteStore((s) => s.go);
  return (
    <section>
      <h2>Paquetes</h2>
      <div style={{ display: 'grid', gap: 14 }}>
        {PACKAGES.map((p) => (
          <button key={p.id} className="cx-card"
            onClick={() => { selectPreset(p.id); go('preset-config'); }}>
            <strong>{p.nombreEs}</strong><br />
            <span style={{ opacity: 0.7 }}>{p.clienteObjetivoEs}</span><br />
            <span style={{ opacity: 0.55 }}>{p.componentes.length} componentes · incluye discovery con crédito del 50 %</span>
          </button>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <button className="cx-btn-secondary" onClick={() => go('entry')}>← Inicio</button>
      </div>
    </section>
  );
}

export function PresetConfig() {
  const presetId = useQuoteStore((s) => s.presetId)!;
  const currency = useQuoteStore((s) => s.currency);
  const pieces = useQuoteStore((s) => s.pieces);
  const setPieces = useQuoteStore((s) => s.setPieces);
  const go = useQuoteStore((s) => s.go);
  const result = useQuote();
  const isCad = presetId === 'PK-CAD-WEBGL' || presetId === 'PK-CAD-TWIN';

  return (
    <section>
      <h2>Configura tu paquete</h2>
      {isCad && (
        <>
          <label htmlFor="piezas" style={{ fontSize: 16 }}>
            ¿Cuántos modelos necesitas convertir?{' '}
            <strong>≈ {pieces}</strong> · nivel{' '}
            <span className="cx-chip">{LEVEL_SHORT[suggestedLevelFromPieces(pieces)]}</span>
          </label>
          <input id="piezas" type="range" min={1} max={20} value={Math.min(20, Math.max(1, pieces))}
            onChange={(e) => setPieces(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--c-accent,#0a84ff)', marginBlock: 10 }} />
          <DronePieces pieces={pieces} />
        </>
      )}
      {!isCad && <p>Este paquete ya incluye una configuración equilibrada.</p>}
      {result && (
        <p style={{ fontSize: 14, opacity: 0.85 }}>
          Estimación actual: <strong>{formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}</strong>
          {' · '}{result.hoursMin}–{result.hoursMax} h
        </p>
      )}
      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button className="cx-btn-secondary" onClick={() => go('presets')}>← Paquetes</button>
        <button className="cx-btn-primary" onClick={() => go('summary')}>Ver desglose →</button>
      </div>
    </section>
  );
}

export function SummaryStep() {
  const s = useQuoteStore();
  const currency = s.currency;
  const [open, setOpen] = useState(false);
  const result = useQuote();
  const serviceName = s.serviceId ? getServiceName(s.serviceId) : s.presetId ?? '';

  if (!result) {
    return (
      <section>
        <h2>Resumen estimado</h2>
        <p>Elige primero qué necesitas.</p>
        <button className="cx-btn-secondary" onClick={() => s.go('entry')}>← Inicio</button>
      </section>
    );
  }

  const mailto = `mailto:hola@example.com?subject=${encodeURIComponent(
    'Solicitud de cotización firme — AG-SERV',
  )}&body=${encodeURIComponent(
    `Hola, quiero avanzar con este alcance estimado:\n` +
    `Servicio: ${serviceName}\n` +
    `Horas estimadas: ${result.hoursMin}–${result.hoursMax}\n` +
    `Rango orientativo: ${formatMoney(currency, result.totalMin)} – ${formatMoney(currency, result.totalMax)}\n` +
    `(Detalle completo disponible en el cotizador web)`,
  )}`;

  return (
    <section>
      <h2>{serviceName}</h2>

      <div style={{ background: 'var(--c-bg)', borderRadius: 12, padding: 18, marginBlock: 14 }}>
        <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>Horas estimadas</p>
        <p style={{ fontSize: 22, fontWeight: 700, margin: '4px 0' }}>{result.hoursMin}–{result.hoursMax} h</p>

        {result.discountPctApplied !== 0 && (
          <p style={{ color: 'var(--c-success,#1b8a5a)', fontWeight: 600, margin: '4px 0' }}>
            Descuento aplicado: {result.discountPctApplied > 0 ? '+' : ''}{result.discountPctApplied} %
          </p>
        )}

        <p style={{ margin: '12px 0 4px', opacity: 0.7, fontSize: 13 }}>Rango total (USD/COP según moneda)</p>
        <p className="cx-total" style={{ margin: 0 }}>{formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}</p>

        <button
          style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer', font: 'inherit', color: 'var(--c-text-soft)', marginTop: 12 }}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? 'Ocultar' : '¿Cómo se calcula?'}
        </button>
        {open && (
          <div style={{ marginTop: 8, fontSize: 13 }}>
            {[...new Set(result.lines.map((l) => l.refId.split('#')[0]))].map((key) => {
              const svcLines = result.lines.filter((l) => l.refId.startsWith(key));
              return (
                <details key={key} style={{ marginBlock: 4 }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{getServiceName(key)}</summary>
                  <ul style={{ paddingLeft: 16, marginBlock: 4 }}>
                    {svcLines.map((l, i) => (
                      <li key={i}>
                        {l.labelEs}: {l.hoursMin}–{l.hoursMax} h → {formatMoney(currency, l.costMin)}–{formatMoney(currency, l.costMax)}
                      </li>
                    ))}
                  </ul>
                </details>
              );
            })}
            <p style={{ opacity: 0.65, marginTop: 8 }}>{result.notesEs.join(' ')}</p>
          </div>
        )}
      </div>

      <p style={{ fontWeight: 600 }}>
        Rango orientativo, no cotización. La cifra firme se cierra en un SOW.
      </p>

      <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
        <a href={mailto}>
          <button className="cx-btn-primary">Solicitar cotización firme →</button>
        </a>
        <button className="cx-btn-secondary" onClick={() => useQuoteStore.getState().reset()}>Empezar de nuevo</button>
      </div>
    </section>
  );
}

function getServiceName(id: string): string { return id; }

export function CatalogStep() {
  return (
    <section>
      <h2>Catálogo completo</h2>
      <ul style={{ lineHeight: 2 }}>
        {SERVICE_CATALOG.map((s) => (
          <li key={s.id}>
            <strong>{s.nameEs}</strong>
            <span style={{ opacity: 0.6, fontSize: 13 }}> — unidad: {s.unitEs}</span>
          </li>
        ))}
      </ul>
      <button className="cx-btn-secondary" onClick={() => useQuoteStore.getState().go('entry')}>← Inicio</button>
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
          {c === 'USD' ? 'USD $' : 'COP $'}
        </button>
      ))}
    </div>
  );
}
