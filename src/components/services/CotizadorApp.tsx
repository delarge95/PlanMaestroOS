import { CurrencyToggle } from './steps/PresetConfig';
import { CatalogStep, EntryScreen, PresetConfig, PresetGallery, SummaryStep } from './steps/Screens';
import { useQuoteResult } from './state/selectors';
import { useQuoteStore } from './state/useQuoteStore';
import { formatMoney } from '../../lib/services/ui';

const screenMap = {
  entry: EntryScreen,
  presets: PresetGallery,
  'preset-config': PresetConfig,
  summary: SummaryStep,
  catalog: CatalogStep,
} as const;

export function CotizadorApp() {
  const screen = useQuoteStore((s) => s.screen);
  const currency = useQuoteStore((s) => s.currency);
  const launch = useQuoteStore((s) => s.modifiers.firstClientLaunch);
  const result = useQuoteResult();
  const Screen = screenMap[screen as keyof typeof screenMap] ?? EntryScreen;

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 20px 140px', fontFamily: 'inherit' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <strong>AG-SERV · Cotizador</strong>
        <CurrencyToggle />
      </header>

      {launch && (
        <p style={{ background: 'var(--accent-soft,#eef4ff)', color: 'var(--accent,#0a84ff)', padding: '8px 14px', borderRadius: 8, fontSize: 13 }}>
          −25 % · Lanzamiento primeros clientes
        </p>
      )}

      <Screen />

      {result && screen !== 'summary' && (
        <div style={{ position: 'fixed', insetInline: 0, bottom: 0, background: '#fff', borderTop: '1px solid #e5e5ea', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 -2px 10px rgba(0,0,0,.06)' }}>
          <span>
            <strong>{formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}</strong>
            <span style={{ opacity: 0.6 }}> · estimado</span>
          </span>
          <button onClick={() => useQuoteStore.getState().go('summary')} style={{ padding: '10px 16px', borderRadius: 8, border: 'none', background: 'var(--accent,#0a84ff)', color: '#fff', cursor: 'pointer', font: 'inherit' }}>
            Ver desglose →
          </button>
        </div>
      )}
    </div>
  );
}
