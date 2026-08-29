import { useState } from 'react';
import { CONTACT_EMAIL } from '../../lib/services/share';

/**
 * S1+S5: CTA post-presupuesto sin dead-end.
 * WhatsApp/email con resumen prellenado · copiar enlace compartible · imprimir/PDF.
 */
export function QuoteCta({ summary, url }: { summary: string; url: string }) {
  const [feedback, setFeedback] = useState('');

  const copy = async (text: string, msg: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setFeedback(msg);
    } catch {
      setFeedback('No se pudo copiar automáticamente; selecciona el texto manualmente.');
    }
    setTimeout(() => setFeedback(''), 3500);
  };

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Cotización de proyecto 3D`)}&body=${encodeURIComponent(summary)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(summary)}`;

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <a href={whatsapp} target="_blank" rel="noreferrer"
          style={{
            padding: '12px 20px', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14,
            background: '#128c4b', color: '#fff', border: 'none', cursor: 'pointer',
          }}>
          Enviar por WhatsApp
        </a>
        <a href={mailto}
          style={{
            padding: '12px 20px', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14,
            background: '#fff', color: '#1a1d29', border: '1px solid #dde0e8', cursor: 'pointer',
          }}>
          Enviar por email
        </a>
        <button onClick={() => copy(url, '✓ Enlace copiado: puedes pegarlo para compartir esta cotización exacta.')}
          style={{
            padding: '12px 20px', borderRadius: 10, font: 'inherit', fontSize: 14,
            background: '#fff', color: '#1a1d29', border: '1px solid #dde0e8', cursor: 'pointer',
          }}>
          Copiar enlace
        </button>
        <button onClick={() => window.print()}
          style={{
            padding: '12px 20px', borderRadius: 10, font: 'inherit', fontSize: 14,
            background: '#fff', color: '#1a1d29', border: '1px solid #dde0e8', cursor: 'pointer',
          }}>
          Imprimir / PDF
        </button>
      </div>
      <p aria-live="polite" style={{ minHeight: 18, margin: '8px 0 0', fontSize: 12.5, color: '#166534' }}>{feedback}</p>
      <p style={{ margin: 0, fontSize: 12, color: '#5a5e6e' }}>
        Respuesta en menos de 24 h · Sin compromiso · Tus referencias/archivos los envías después si quieres.
      </p>
    </div>
  );
}
