import { CurrencyToggle } from './steps/Screens';
import { CatalogStep, EntryScreen, PresetConfig, PresetGallery, SummaryStep } from './steps/Screens';
import { WizardFlow } from './steps/wizard/WizardFlow';
import { QuotePanel } from './panels/QuotePanel';
import { ChatWidget } from './chat/ChatWidget';
import { useQuote } from './state/selectors';
import { useQuoteStore } from './state/useQuoteStore';
import type { ReactElement } from 'react';
import './cotizador.css';

const screens: Record<string, () => React.ReactElement> = {
  entry: EntryScreen,
  presets: PresetGallery,
  'preset-config': PresetConfig,
  wizard: WizardFlow,
  summary: SummaryStep,
  catalog: CatalogStep,
};

export function CotizadorApp() {
  const screen = useQuoteStore((s) => s.screen);
  const currency = useQuoteStore((s) => s.currency);
  const launch = useQuoteStore((s) => s.firstClientLaunch);
  const result = useQuote();
  const Screen = screens[screen] ?? EntryScreen;

  return (
    <div className="cotizador-root" style={{ minHeight: '100vh', paddingBottom: result ? 200 : 40 }}>
      <header className="cx-header">
        <span className="cx-brand">AG-SERV · Cotizador</span>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {launch && <span className="cx-launch">✨ −25 % Lanzamiento</span>}
          <CurrencyToggle />
        </div>
      </header>

      <main style={{ maxWidth: 680, margin: '0 auto', padding: '28px 20px' }}>
        <Screen />
      </main>

      {result && screen !== 'summary' && (
        <div className="cx-quote-bar">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <QuotePanel result={result} currency={currency} />
            <button className="cx-btn-primary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              onClick={() => useQuoteStore.getState().go('summary')}>
              Ver desglose →
            </button>
          </div>
        </div>
      )}

      <ChatWidget />
    </div>
  );
}
