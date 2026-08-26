import type { Currency } from '../../../data/services';
import { LEVEL_SHORT, GOALS, formatMoney, suggestedLevelFromPieces, suggestedLevelFromSeconds } from '../../../lib/services/ui';
import { useQuoteResult } from '../state/selectors';
import { useQuoteStore } from '../state/useQuoteStore';
import { DronePieces } from '../visuals/DronePieces';

const btn: React.CSSProperties = {
  padding: '12px 18px',
  borderRadius: 10,
  border: '1px solid var(--border, #d8d8de)',
  background: 'var(--surface, #fff)',
  cursor: 'pointer',
  font: 'inherit',
};

export function PresetConfig() {
  const presetId = useQuoteStore((s) => s.presetId)!;
  const currency = useQuoteStore((s) => s.currency);
  const pieces = useQuoteStore((s) => s.pieces);
  const setPieces = useQuoteStore((s) => s.setPieces);
  const setQuantity = useQuoteStore((s) => s.setQuantity);
  const go = useQuoteStore((s) => s.go);
  const result = useQuoteResult();

  const isCad = presetId === 'PK-CAD-WEBGL' || presetId === 'PK-CAD-TWIN';
  const isMicro = presetId === 'PK-MICRO-LOOP';
  const nivelPiezas = suggestedLevelFromPieces(pieces);

  return (
    <section>
      <h2>Configura tu paquete</h2>
      {isCad && (
        <div style={{ marginBlock: 24 }}>
          <label htmlFor="piezas">
            ¿Cuántos modelos necesitas convertir? <strong>≈ {pieces}</strong>
          </label>
          <input
            id="piezas"
            type="range"
            min={1}
            max={20}
            value={Math.min(20, Math.max(1, pieces))}
            onChange={(e) => setPieces(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent, #0a84ff)' }}
          />
          <DronePieces pieces={pieces} />
          <p style={{ opacity: 0.75 }}>
            Complejidad estimada: nivel <strong>{LEVEL_SHORT[suggestedLevelFromPieces(pieces)]}</strong>
          </p>
        </div>
      )}
      {isMicro && (
        <div style={{ marginBlock: 24 }}>
          <label htmlFor="qty">¿Cuántos micro-loops? <strong>×{useQuoteStore.getState().quantity || 4}</strong></label>
          <input
            id="qty"
            type="range"
            min={4}
            max={12}
            defaultValue={4}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent, #0a84ff)' }}
          />
        </div>
      )}
      {!isCad && !isMicro && (
        <p>Este paquete ya incluye una configuración equilibrada. Puedes ajustar detalles en el resumen.</p>
      )}
      {result && (
        <p style={{ fontSize: 14, opacity: 0.8 }}>
          Estimación actual: {formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}
          {' · '}
          {result.hoursMin}–{result.hoursMax} h
        </p>
      )}
      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button style={btn} onClick={() => go('presets')}>← Paquetes</button>
        <button style={{ ...btn, background: 'var(--accent, #0a84ff)', color: '#fff', border: 'none' }} onClick={() => go('summary')}>
          Ver desglose →
        </button>
      </div>
    </section>
  );
}

export function EntryScreen() {
  const go = useQuoteStore((s) => s.go);
  const selectPreset = useQuoteStore((s) => s.selectPreset);
  return (
    <section>
      <h1>¿Qué necesitas construir en 3D?</h1>
      <p style={{ opacity: 0.8 }}>Obtén un rango orientativo en menos de 2 minutos.</p>
      <div style={{ display: 'grid', gap: 12, marginBlock: 28 }}>
        <button style={{ ...btn, textAlign: 'left' }} onClick={() => { selectPreset(undefined); go('presets'); }}>
          <strong>Empezar con un paquete</strong>
          <br /><span style={{ opacity: 0.7 }}>Soluciones listas para necesidades comunes (recomendado)</span>
        </button>
        <button style={{ ...btn, textAlign: 'left' }} onClick={() => go('wizard')}>
          <strong>Cotizar desde cero</strong>
          <br /><span style={{ opacity: 0.7 }}>Define tu proyecto paso a paso</span>
        </button>
        <button style={{ ...btn, textAlign: 'left' }} onClick={() => go('catalog')}>
          <strong>Ver catálogo completo</strong>
          <br /><span style={{ opacity: 0.7 }}>Todos los servicios, ficha por ficha</span>
        </button>
      </div>
    </section>
  );
}

export function CurrencyToggle() {
  const currency = useQuoteStore((s) => s.currency);
  const setCurrency = useQuoteStore((s) => s.setCurrency);
  const opts: Currency[] = ['USD', 'COP'];
  return (
    <div role="group" aria-label="Moneda" style={{ display: 'inline-flex', border: '1px solid var(--border,#d8d8de)', borderRadius: 999, overflow: 'hidden' }}>
      {opts.map((c) => (
        <button key={c} onClick={() => setCurrency(c)}
          style={{ padding: '6px 14px', border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: currency === c ? 700 : 400, background: currency === c ? 'var(--accent,#0a84ff)' : 'transparent', color: currency === c ? '#fff' : 'inherit' }}>
          {c}
        </button>
      ))}
    </div>
  );
}

export { LEVEL_SHORT, GOALS, formatMoney, suggestedLevelFromSeconds };
