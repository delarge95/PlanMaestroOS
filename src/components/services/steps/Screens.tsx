import { useState } from 'react';
import { PACKAGES, SERVICE_CATALOG } from '../../../data/services';
import { LEVEL_SHORT, formatMoney, suggestedLevelFromPieces } from '../../../lib/services/ui';
import { useQuoteResult } from '../state/selectors';
import { useQuoteStore } from '../state/useQuoteStore';
import { DronePieces } from '../visuals/DronePieces';

const btn = { padding: '12px 18px', borderRadius: 10, border: '1px solid #d8d8de', background: '#fff', cursor: 'pointer', font: 'inherit' } as const;
const card = { ...btn, textAlign: 'left', width: '100%' } as const;

export function EntryScreen() {
  const go = useQuoteStore((s) => s.go);
  return (
    <section>
      <h1>¿Qué necesitas construir en 3D?</h1>
      <p style={{ opacity: 0.8 }}>Obtén un rango orientativo en menos de 2 minutos.</p>
      <div style={{ display: 'grid', gap: 12, marginBlock: 28 }}>
        <button style={card} onClick={() => { useQuoteStore.setState({ presetId: undefined }); go('presets'); }}>
          <strong>Empezar con un paquete</strong><br />
          <span style={{ opacity: 0.7 }}>Soluciones listas para necesidades comunes (recomendado)</span>
        </button>
        <button style={card} onClick={() => go('wizard')}>
          <strong>Cotizar un servicio</strong><br />
          <span style={{ opacity: 0.7 }}>Configura pieza por pieza (CAD→WebGL para empezar)</span>
        </button>
        <button style={card} onClick={() => go('catalog')}>
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
          <button key={p.id} style={card}
            onClick={() => { selectPreset(p.id); go('preset-config'); }}>
            <strong>{p.nombreEs}</strong><br />
            <span style={{ opacity: 0.7 }}>{p.clienteObjetivoEs}</span><br />
            <span style={{ opacity: 0.55 }}>{p.componentes.length} componentes · incluye discovery con crédito del 50 %</span>
          </button>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <button style={btn} onClick={() => go('entry')}>← Inicio</button>
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
  const result = useQuoteResult();
  const isCad = presetId === 'PK-CAD-WEBGL' || presetId === 'PK-CAD-TWIN';

  return (
    <section>
      <h2>Configura tu paquete</h2>
      {isCad && (
        <>
          <label htmlFor="piezas">
            ¿Cuántos modelos necesitas convertir? <strong>≈ {pieces}</strong> · nivel {LEVEL_SHORT[suggestedLevelFromPieces(pieces)]}
          </label>
          <input id="piezas" type="range" min={1} max={20} value={Math.min(20, Math.max(1, pieces))}
            onChange={(e) => setPieces(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent,#0a84ff)', marginBlock: 10 }} />
          <DronePieces pieces={pieces} />
        </>
      )}
      {!isCad && <p>Este paquete ya incluye una configuración equilibrada.</p>}
      {result && (
        <p style={{ fontSize: 14, opacity: 0.85 }}>
          Estimación actual: <strong>{formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}</strong> · {result.hoursMin}–{result.hoursMax} h
        </p>
      )}
      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button style={btn} onClick={() => go('presets')}>← Paquetes</button>
        <button style={{ ...btn, background: 'var(--accent,#0a84ff)', color: '#fff', border: 'none' }} onClick={() => go('summary')}>Ver desglose →</button>
      </div>
    </section>
  );
}

export function SummaryStep() {
  const currency = useQuoteStore((s) => s.currency);
  const reset = useQuoteStore((s) => s.reset);
  const go = useQuoteStore((s) => s.go);
  const [open, setOpen] = useState(false);
  const result = useQuoteResult();

  if (!result) {
    return (
      <section>
        <h2>Resumen estimado</h2>
        <p>Elige primero qué necesitas.</p>
        <button style={btn} onClick={() => go('entry')}>← Inicio</button>
      </section>
    );
  }

  const mailto = `mailto:hola@example.com?subject=${encodeURIComponent('Solicitud de cotización firme — AG-SERV')}&body=${encodeURIComponent(`Hola, quiero avanzar con este alcance estimado:\nHoras: ${result.hoursMin}–${result.hoursMax}\nRango: ${formatMoney(currency, result.totalMin)} – ${formatMoney(currency, result.totalMax)} (${currency})`)}`;

  return (
    <section>
      <h2>Resumen estimado</h2>
      <p style={{ fontSize: 14, opacity: 0.75 }}>{result.hoursMin}–{result.hoursMax} horas de trabajo estimado</p>
      {result.discountPctApplied !== 0 && (
        <p style={{ color: 'var(--accent,#0a84ff)', fontWeight: 600 }}>
          Modificadores: {result.discountPctApplied > 0 ? '+' : ''}{result.discountPctApplied} %
        </p>
      )}
      <p style={{ fontSize: 34, fontWeight: 700, marginBlock: 12 }}>
        {formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}
      </p>
      <button style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer', font: 'inherit' }} onClick={() => setOpen(!open)}>
        ¿Cómo se calcula?
      </button>
      {open && (
        <ul style={{ fontSize: 13, lineHeight: 1.6, maxHeight: 220, overflow: 'auto' }}>
          {result.lines.map((l, i) => (
            <li key={i}>{l.labelEs}: {l.hoursMin}–{l.hoursMax} h → {formatMoney(currency, l.costMin)}–{formatMoney(currency, l.costMax)}</li>
          ))}
        </ul>
      )}
      <p><em>{result.notesEs.join(' ')}</em></p>
      <p style={{ fontWeight: 600 }}>Rango orientativo, no cotización. La cifra firme se cierra en un SOW.</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
        <a href={mailto}><button style={{ ...btn, background: 'var(--accent,#0a84ff)', color: '#fff', border: 'none' }}>Solicitar cotización firme</button></a>
        <button style={btn} onClick={reset}>Empezar de nuevo</button>
      </div>
    </section>
  );
}

export function CatalogStep() {
  return (
    <section>
      <h2>Catálogo completo</h2>
      <ul>
        {SERVICE_CATALOG.map((s) => <li key={s.id}><strong>{s.id}</strong> — {s.nameEs}</li>)}
      </ul>
      <button style={btn} onClick={() => useQuoteStore.getState().go('entry')}>← Inicio</button>
    </section>
  );
}
