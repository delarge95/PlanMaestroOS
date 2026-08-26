import { useState } from 'react';
import { matchIntent, generarRespuestaBot } from '../../../lib/services/intentMatcher';

interface ChatMsg { role: 'bot' | 'user'; texto: string; sugerencias?: string[] }

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    { role: 'bot', texto: 'Hola. Cuentame tu proyecto. Por ejemplo:\n- "Tengo archivos CAD y quiero mostrarlos en la web"\n- "Necesito renders de mi producto"', sugerencias: ['Quiero convertir archivos CAD a 3D web', 'Necesito renders de producto'] },
  ]);
  const [input, setInput] = useState('');
  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: 'user', texto: text.trim() }]);
    setInput('');
    setTimeout(() => {
      const intent = matchIntent(text);
      const resp = generarRespuestaBot(intent);
      setMsgs((m) => [...m, { role: 'bot', texto: resp.texto, sugerencias: resp.sugerencias }]);
    }, 350);
  };
  if (!open) return (
    <button className="cx-chat-toggle" onClick={() => setOpen(true)} aria-label="Abrir chat">💬</button>
  );
  return (
    <div className="cx-chat-panel">
      <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--c-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: 14 }}>Asistente AG-SERV</strong>
        <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'var(--c-text-soft)', fontSize: 18 }} aria-label="Cerrar">×</button>
      </div>
      <div className="cx-chat-messages">
        {msgs.map((m, i) => (
          <div key={i}>
            <div className={`cx-msg cx-msg-${m.role}`}>{m.texto}</div>
            {m.sugerencias && m.role === 'bot' && i === msgs.length - 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6 }}>
                {m.sugerencias.map((s) => (
                  <button key={s} className="cx-suggestion" onClick={() => send(s)}>{s}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <form className="cx-chat-input" onSubmit={(e) => { e.preventDefault(); send(input); }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Describe tu proyecto..." aria-label="Mensaje" />
        <button type="submit">→</button>
      </form>
    </div>
  );
}