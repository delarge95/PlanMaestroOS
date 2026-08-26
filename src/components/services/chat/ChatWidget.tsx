import { useRef, useState } from 'react';
import { matchIntent, generarRespuestaBot } from '../../../lib/services/intentMatcher';

interface ChatMsg {
  role: 'bot' | 'user';
  texto: string;
  sugerencias?: string[];
}

interface Props {
  onQuote: (input: { kind: 'service' | 'package'; id: string }) => void;
}

export function ChatWidget({ onQuote }: Props) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    {
      role: 'bot',
      texto:
        'Hola 👋 Soy el asistente de AG-SERV. Cuéntame qué necesitas — por ejemplo "quiero convertir mis archivos CAD a 3D web" o "necesito renders de mi producto". También puedes usar los presets del cotizador.',
      sugerencias: ['Quiero convertir archivos CAD a 3D web', 'Necesito renders de mi producto', 'Busco un configurador web 3D'],
    },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMsg = { role: 'user', texto: text.trim() };
    setMsgs((m) => [...m, userMsg]);
    setInput('');

    setTimeout(() => {
      const intent = matchIntent(text);
      const resp = generarRespuestaBot(intent);
      const botMsg: ChatMsg = { role: 'bot', texto: resp.texto, sugerencias: resp.sugerencias };
      setMsgs((m) => [...m, botMsg]);

      if (resp.quoteInput) {
        const qi = resp.quoteInput;
        if (qi.kind === 'package') onQuote({ kind: 'package', id: qi.packageId });
        else if ('serviceId' in qi) onQuote({ kind: 'service', id: qi.serviceId });
      }
    }, 400);
  };

  if (!open) {
    return (
      <button
        className="cx-chat-toggle"
        onClick={() => setOpen(true)}
        aria-label="Abrir chat con asistente"
      >
        💬
      </button>
    );
  }

  return (
    <div className="cx-chat-panel">
      <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--c-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: 14 }}>Asistente AG-SERV</strong>
        <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'var(--c-text-soft)', fontSize: 18 }} aria-label="Cerrar chat">×</button>
      </div>
      <div className="cx-chat-messages" ref={(el) => { if (el) el.scrollTop = el.scrollHeight; }}>
        {msgs.map((m, i) => (
          <div key={i}>
            <div className={`cx-msg cx-msg-${m.role}`}>{m.texto}</div>
            {m.sugerencias && m.role === 'bot' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6 }}>
                {m.sugerencias.map((s) => (
                  <button key={s} className="cx-suggestion" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <form
        className="cx-chat-input"
        onSubmit={(e) => { e.preventDefault(); send(input); }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe tu proyecto..."
          aria-label="Escribe tu mensaje"
        />
        <button type="submit">→</button>
      </form>
    </div>
  );
}
