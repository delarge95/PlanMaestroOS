// src/components/languages/ErrorReviewSession.tsx — Refuerzo inteligente:
// repasa los ERRORES vencidos (SM-2 simplificado). Acertar espacia;
// fallar re-programa a mañana.

import React, { useMemo, useState } from 'react';
import { useErrorReviewStore, getDueErrors, type ErrorItem } from '../../lib/languages/errorStore';
import Button from '../ui/Button';
import { Brain, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

export interface ErrorReviewSessionProps {
  language?: 'de' | 'en';
}

function answersMatch(user: string, correct: string): boolean {
  const norm = (x: string) => x.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.,!?;:]/g, '');
  return norm(user) === norm(correct);
}

export default function ErrorReviewSession({ language }: ErrorReviewSessionProps) {
  const [open, setOpen] = useState(false);
  const [queue, setQueue] = useState<ErrorItem[]>([]);
  const [answer, setAnswer] = useState('');
  const [checked, setChecked] = useState<null | boolean>(null);
  const [sessionStats, setSessionStats] = useState({ right: 0, wrong: 0 });
  const reviewResult = useErrorReviewStore((s) => s.reviewResult);

  const dueCount = useMemo(() => getDueErrors(language).length, [language, open, sessionStats]);

  const start = () => {
    setQueue(getDueErrors(language).slice(0, 15));
    setSessionStats({ right: 0, wrong: 0 });
    setAnswer('');
    setChecked(null);
    setOpen(true);
  };

  const current = queue[0];

  const check = () => {
    if (!current || checked !== null) return;
    const ok = answersMatch(answer, current.correctAnswer);
    setChecked(ok);
    reviewResult(current.id, ok);
    setSessionStats((s) => ({ right: s.right + (ok ? 1 : 0), wrong: s.wrong + (ok ? 0 : 1) }));
  };

  const next = () => {
    setQueue((q) => q.slice(1));
    setAnswer('');
    setChecked(null);
  };

  if (dueCount === 0 && !open) return null;

  return (
    <div className="ds-card ds-stack-sm" style={{ padding: 'var(--space-3)' }}>
      <div className="ds-row-between">
        <span className="ds-row" style={{ gap: '8px', alignItems: 'center', fontSize: '0.84rem', fontWeight: 700 }}>
          <Brain size={15} style={{ color: 'var(--warning)' }} />
          Refuerzo de errores {dueCount > 0 && <span className="ds-chip" style={{ border: '1px solid var(--warning)', fontSize: '0.66rem' }}>{dueCount} vencidos</span>}
        </span>
        {dueCount > 0 && !open && (
          <Button variant="primary" size="sm" onClick={start}>Repasar</Button>
        )}
      </div>

      {open && (
        current ? (
          <div className="ds-stack-sm">
            <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
              {current.language === 'en' ? 'Inglés' : 'Alemán'} · fallado {current.timesWrong}× · intervalo {current.intervalDays}d
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{current.prompt}</span>
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (checked === null ? check() : next())}
              placeholder="Tu respuesta…"
              style={{ background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)', padding: '8px 12px', fontSize: '0.9rem' }}
            />
            {checked === null ? (
              <Button variant="primary" size="sm" onClick={check}>Comprobar</Button>
            ) : (
              <div className="ds-stack-sm" style={{ gap: '4px' }}>
                <span className="ds-row" style={{ gap: '6px', fontSize: '0.82rem', fontWeight: 700, color: checked ? 'var(--success, #30d158)' : 'var(--danger, #ff453a)' }}>
                  {checked ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                  {checked ? 'Correcto — intervalo ampliado' : `Otra vez: ${current.correctAnswer} — repites mañana`}
                </span>
                <div className="ds-row" style={{ gap: 'var(--space-1)' }}>
                  <Button variant="secondary" size="sm" onClick={next}>Siguiente</Button>
                  <Button variant="ghost" size="sm" onClick={() => { setOpen(false); setQueue([]); }}>
                    <RotateCcw size={13} /> Cerrar ({sessionStats.right}✓ / {sessionStats.wrong}✗)
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="ds-row" style={{ gap: '8px', fontSize: '0.82rem' }}>
            <CheckCircle2 size={14} style={{ color: 'var(--success, #30d158)' }} />
            Cola vacía: {sessionStats.right} aciertos · {sessionStats.wrong} fallos esta sesión.
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cerrar</Button>
          </div>
        )
      )}
    </div>
  );
}
