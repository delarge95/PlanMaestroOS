import { CurrencyToggle } from './steps/Screens';
import { DirectCotizador } from './DirectCotizador';
import { ChatWidget } from './chat/ChatWidget';
import { useQuoteStore } from './state/useQuoteStore';
import './cotizador.css';

export function CotizadorApp() {
  const currency = useQuoteStore((s) => s.currency);
  const launch = useQuoteStore((s) => s.firstClientLaunch);

  return (
    <div className="cotizador-root" style={{ minHeight: '100vh' }}>
      <header className="cx-header">
        <span className="cx-brand">AG-SERV · Cotizador</span>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {launch && <span className="cx-launch">✨ −25 % Lanzamiento</span>}
          <CurrencyToggle />
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '28px 20px 80px' }}>
        <DirectCotizador currency={currency} onLaunch={launch} />
      </main>

      <ChatWidget />
    </div>
  );
}
