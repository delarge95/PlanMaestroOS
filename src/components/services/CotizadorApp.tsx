import { CurrencyToggle } from './steps/PresetConfig';
import { CatalogStep, EntryScreen, PresetConfig, PresetGallery, SummaryStep } from './steps/Screens';
import { WizardFlow } from './steps/wizard/WizardFlow';
import { QuotePanel } from './panels/QuotePanel';
import { ChatWidget } from './chat/ChatWidget';
import { useQuoteResult } from './state/selectors';
import { useQuoteStore } from './state/useQuoteStore';
import { formatMoney } from '../../lib/services/ui';
import './cotizador.css';

const screenMap = {
  entry: EntryScreen,
  presets: PresetGallery,
  'preset-config': PresetConfig,
  summary: SummaryStep,
  catalog: CatalogStep,
  wizard: WizardFlow,
} as const;

export function CotizadorApp() {
  const screen = useQuoteStore((s) => s.screen);
  const currency = useQuoteStore((s) => s.currency);
  const launch = useQuoteStore((s) => s.modifiers.firstClientLaunch);
  const result = useQuoteResult();
  const Screen = screenMap[screen as keyof typeof screenMap] ?? EntryScreen;

  return (
    <div className="cotizador-root" style={{ minHeight: '100vh', paddingBottom: result ? 180 : 40 }}>
      <header className="cx-header">
        <span className="cx-brand">AG-SERV · Cotizador</span>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {launch && <span className="cx-launch">✨ −25 % Lanzamiento</span>}
          <CurrencyToggle />
        </div>
      </header>

      <main style={{ maxWidth: 680, margin: '0 auto', padding: '32px 20px' }}>
        <Screen />
      </main>

      {result && screen !== 'summary' && (
        <div className="cx-quote-bar">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <QuotePanel result={result} currency={currency} />
            <button
              className="cx-btn-primary"
              onClick={() => useQuoteStore.getState().go('summary')}
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Ver desglose →
            </button>
          </div>
        </div>
      )}

      <ChatWidget
        onQuote={({ id }) => {
          useQuoteStore.setState({ presetId: id, screen: 'preset-config' });
        }}
      />
    </div>
  );
}
