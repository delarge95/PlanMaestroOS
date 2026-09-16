/**
 * ContextAssistant.tsx — Asistente contextual anti-alucinación (AG-INTE).
 *
 * Botón flotante presente en toda /app (montado UNA vez desde
 * PlanMaestroLayout). Responde SOLO con chunks RAG citados + estado vivo de
 * la app; sin evidencia lo dice — nunca inventa. Historial en estado local.
 * z-index 2500: por encima del contenido, por DEBAJO de los modales.
 */

import { useEffect, useRef, useState } from 'react';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { askWithContext, type ContextAnswer } from '../../lib/ai/contextQA';

interface HistoryEntry {
  id: number;
  question: string;
  /** null mientras se resuelve (feedback de carga inmediato). */
  answer: ContextAnswer | null;
}

const CONFIDENCE_LABEL: Record<ContextAnswer['confidence'], { label: string; color: string }> = {
  grounded: { label: 'Con evidencia', color: 'var(--color-state-done)' },
  partial: { label: 'Evidencia parcial', color: 'var(--color-accent-warning)' },
  insufficient: { label: 'Sin evidencia', color: 'var(--color-text-tertiary)' },
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function ContextAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Foco al abrir + auto-scroll del historial al último mensaje.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [history]);

  const ask = async () => {
    const question = input.trim();
    if (!question || busy) return;
    setBusy(true);
    setInput('');
    const id = Date.now();
    setHistory((h) => [...h, { id, question, answer: null }]);
    try {
      // Feedback de carga perceptible (≤300 ms) sin inventar latencia extra.
      const [answer] = await Promise.all([askWithContext(question), sleep(160)]);
      setHistory((h) => h.map((e) => (e.id === id ? { ...e, answer } : e)));
    } catch {
      setHistory((h) =>
        h.map((e) =>
          e.id === id
            ? {
                ...e,
                answer: {
                  answer: 'No pude completar la consulta. Inténtalo de nuevo.',
                  citations: [],
                  stateFacts: [],
                  confidence: 'insufficient',
                },
              }
            : e,
        ),
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {/* Keyframes local del spinner (no existe un `spin` global en el CSS). */}
      <style>{'@keyframes pm-ca-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
      <button
        type="button"
        aria-label={open ? 'Cerrar asistente contextual' : 'Abrir asistente contextual'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--surface-2)',
          color: 'var(--text-primary)',
          border: '1px solid var(--color-border-visible)',
          borderRadius: 'var(--radius-pill)',
          cursor: 'pointer',
          zIndex: 2500,
          boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
        }}
      >
        {open ? <X size={20} /> : <Sparkles size={20} style={{ color: 'var(--color-accent-warning)' }} />}
      </button>

      {open && (
        <section
          aria-label="Asistente contextual"
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: 'min(400px, calc(100vw - 32px))',
            maxHeight: 'min(560px, 70vh)',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--surface-1)',
            border: '1px solid var(--color-border-visible)',
            borderRadius: 'var(--radius-m)',
            zIndex: 2500,
            boxShadow: '0 28px 120px rgba(0,0,0,0.65)',
            overflow: 'hidden',
          }}
        >
          <header
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-4)',
              borderBottom: '1px solid var(--color-border-subtle)',
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--color-accent-warning)' }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: '600 var(--fs-body) var(--font-family-system)', color: 'var(--text-primary)' }}>
                Asistente contextual
              </div>
              <div style={{ font: '400 var(--fs-meta) var(--font-family-system)', color: 'var(--text-tertiary)' }}>
                Solo tu base RAG + estado de la app, con citas
              </div>
            </div>
          </header>

          <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-3) var(--space-4)' }}>
            {history.length === 0 && (
              <p style={{ font: '400 var(--fs-meta) var(--font-family-system)', color: 'var(--text-tertiary)', margin: 0 }}>
                Pregunta algo de fitness, carrera, idiomas, nutrición o diseño. Si no hay evidencia en tu base, te lo dirá.
              </p>
            )}
            {history.map((entry) => (
              <article key={entry.id} style={{ marginBottom: 'var(--space-4)' }}>
                <div
                  style={{
                    font: '600 var(--fs-meta) var(--font-family-system)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-1)',
                  }}
                >
                  {entry.question}
                </div>
                {!entry.answer ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      font: '400 var(--fs-meta) var(--font-family-system)',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    <Loader2 size={13} style={{ animation: 'pm-ca-spin 1s linear infinite' }} />
                    Consultando tu base de conocimiento…
                  </div>
                ) : (
                  <>
                    <div
                      style={{
                        font: '400 var(--fs-meta) var(--font-family-system)',
                        color: 'var(--text-primary)',
                        lineHeight: 1.5,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {entry.answer.answer}
                    </div>

                    {entry.answer.citations.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'var(--space-2)' }}>
                        {entry.answer.citations.map((c) => (
                          <span
                            key={c.chunkId}
                            title={`${c.sourceId} ${c.locator}`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              border: '1px solid var(--color-border-subtle)',
                              borderRadius: 'var(--radius-pill)',
                              padding: '2px var(--space-2)',
                              font: '500 0.68rem var(--font-family-system)',
                              color: 'var(--text-secondary)',
                              background: 'var(--surface-2)',
                              maxWidth: '100%',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {c.chunkId}
                          </span>
                        ))}
                      </div>
                    )}

                    {entry.answer.stateFacts.length > 0 && (
                      <div style={{ marginTop: 'var(--space-2)' }}>
                        <span
                          style={{
                            font: '600 0.64rem var(--font-family-system)',
                            color: 'var(--text-tertiary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                          }}
                        >
                          estado de tu app
                        </span>
                        {entry.answer.stateFacts.map((fact) => (
                          <div
                            key={fact}
                            style={{
                              font: '400 0.72rem var(--font-family-system)',
                              color: 'var(--text-secondary)',
                              background: 'var(--surface-2)',
                              border: '1px solid var(--color-border-subtle)',
                              borderRadius: 'var(--radius-s)',
                              padding: '2px var(--space-2)',
                              marginTop: 4,
                            }}
                          >
                            {fact}
                          </div>
                        ))}
                      </div>
                    )}

                    <div
                      style={{
                        marginTop: 'var(--space-2)',
                        font: '600 0.64rem var(--font-family-system)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: CONFIDENCE_LABEL[entry.answer.confidence].color,
                      }}
                    >
                      {CONFIDENCE_LABEL[entry.answer.confidence].label}
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void ask();
            }}
            style={{
              display: 'flex',
              gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-4)',
              borderTop: '1px solid var(--color-border-subtle)',
              background: 'var(--surface-1)',
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setOpen(false);
              }}
              placeholder="Pregunta con evidencia…"
              aria-label="Pregunta para el asistente contextual"
              style={{
                flex: 1,
                minWidth: 0,
                background: 'var(--surface-2)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-s)',
                padding: '8px var(--space-3)',
                font: '400 var(--fs-meta) var(--font-family-system)',
                color: 'var(--text-primary)',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={busy || input.trim().length === 0}
              aria-label="Enviar pregunta"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                border: '1px solid var(--color-border-subtle)',
                background: 'var(--surface-2)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-s)',
                cursor: busy ? 'default' : 'pointer',
                opacity: busy || input.trim().length === 0 ? 0.5 : 1,
              }}
            >
              <Send size={14} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}
