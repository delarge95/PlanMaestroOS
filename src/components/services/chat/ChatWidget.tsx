import { useState } from 'react';
import { matchIntent, generarRespuestaBot } from '../../../lib/services/intentMatcher';
import { getServiceById } from '../../../data/services';
import { useQuoteStore } from '../state/useQuoteStore';

interface ChatMsg {
  role: 'bot' | 'user';
  texto: string;
  sugerencias?: string[];
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    {
      role: 'bot',
      texto:
        'Hola 👋 Cuéntame tu proyecto en tus propias palabras:\n' +
        '• "Tengo archivos CAD de una máquina y quiero mostrarlos en la web"\n' +
        '• "Necesito renders de mi producto"\n' +
        '• "Busco un configurador para mis clientes"',
      sugerencias: [
        'Quiero convertir archivos CAD a 3D web',
        'Necesito renders de producto',
        'Busco un configurador web 3D',
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const s = useQuoteStore.getState();

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: 'user', texto: text.trim() }]);
    setInput('');

    setTimeout(() => {
      const intent = matchIntent(text);
      const resp = generarRespuestaBot(intent);
      const botMsg: ChatMsg = {
        role: 'bot',
        texto: resp.texto,
        sugerencias: [
          ...(resp.sugerencias ?? []),
          // Si hay match fuerte, ofrecer navegar
          ...(intent.packageId ? ['Ver este paquete en el cotizador →'] : []),
          ...(intent.serviceIds.length === 1 ? ['Ver estimación en el cotizador →'] : []),
        ],
      };
      setMsgs((m) => [...m, botMsg]);

      // Pre-cargar en el store para navegación instantánea
      const st = useQuoteStore.getState();
      if (intent.packageId) st.selectPreset(intent.packageId);
      else if (intent.serviceIds.length === 1) {
        const svc = getServiceById(intent.serviceIds[0]);
        if (svc) st.setService(svc.id, intent.nivelSugerido ?? 'N2');
      }
    }, 350);
  };

  const handleSuggestion = (sug: string) => {
    if (sug.includes('cotizador') || sug.includes('Ver')) {
      useQuoteStore.getState().go('summary');
      setOpen(false);
    } else {
      send(sug);
    }
  };

  return (
    <>
      {!open && (
        <button className="cx-chat-toggle" onClick={() => setOpen(true)} aria-label="Abrir chat con asistente">
          💬
        </button>
      )}
      {open && (
        <div className="cx-chat-panel">
          <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--c-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ fontSize: 14 }}>Asistente AG-SERV</strong>
            <button onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'var(--c-text-soft)', fontSize: 18 }}
              aria-label="Cerrar chat">×</button>
          </div>
          <div className="cx-chat-messages">
            {msgs.map((m, i) => (
              <div key={i}>
                <div className={`cx-msg cx-msg-${m.role}`}>{m.texto}</div>
                {m.sugerencias && m.role === 'bot' && i === msgs.length - 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6 }}>
                    {m.sugerencias.map((sug) => (
                      <button key={sug} className="cx-suggestion" onClick={() => handleSuggestion(sug)}>
                        {sug.includes('→') ? sug : '💡 ' + sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <form className="cx-chat-input" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Describe tu proyecto..." aria-label="Escribe tu mensaje" />
            <button type="submit">→</button>
          </form>
        </div>
      )}
    </>
  );
}
