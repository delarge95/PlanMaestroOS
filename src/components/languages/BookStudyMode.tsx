// src/components/languages/BookStudyMode.tsx — Traslado del libro a la app:
// estudia la unidad en el VISOR (PDF real) y registra progreso + minutos.
// El registro alimenta racha, histórico y el panel de progreso por libro.

import React, { useEffect, useMemo, useState } from 'react';
import { booksWithProgress, logBookStudy } from '../../lib/languages/bookProgress';
import { getBook } from '../../data/languages/books';
import BookPdfViewer from './BookPdfViewer';
import Button from '../ui/Button';
import { BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

export interface BookStudyModeProps {
  language?: 'de' | 'en';
}

export default function BookStudyMode({ language }: BookStudyModeProps) {
  const [books, setBooks] = useState(() => booksWithProgress(language));
  const [bookIdx, setBookIdx] = useState(0);
  const [unit, setUnit] = useState('');
  const [minutes, setMinutes] = useState(20);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  // SSR-safe: recargar progreso tras montar.
  useEffect(() => { setBooks(booksWithProgress(language)); }, [language]);

  const current = books[bookIdx] ?? books[0];
  const totalUnits = useMemo(() => books.reduce((n, b) => n + (b.progress?.unitsCovered.length ?? 0), 0), [books]);

  if (books.length === 0) return null;

  const handleSave = () => {
    const label = unit.trim();
    if (!current || !label) return;
    logBookStudy({ bookId: current.book.id, unitLabel: label, minutes });
    setBooks(booksWithProgress(language));
    setUnit('');
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="ds-card ds-stack-sm" style={{ padding: 'var(--space-3)' }}>
      <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: 'var(--space-1)' }}>
        <span className="ds-row" style={{ gap: '8px', alignItems: 'center', fontSize: '0.84rem', fontWeight: 700 }}>
          <BookOpen size={15} style={{ color: 'var(--accent)' }} />
          Estudio con libro {totalUnits > 0 && <span className="ds-chip" style={{ border: '1px solid var(--color-border-subtle)', fontSize: 'var(--fs-eyebrow)' }}>{totalUnits} unidades registradas</span>}
        </span>
        {current && (
          <Button variant="ghost" size="sm" onClick={() => setViewerOpen(true)}>
            Abrir «{current.book.title.split('—')[0].trim()}» <ChevronRight size={12} />
          </Button>
        )}
      </div>

      <div className="ds-row-wrap" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
        <select
          value={bookIdx}
          onChange={(e) => setBookIdx(Number(e.target.value))}
          aria-label="Libro de estudio"
          style={{ background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)', padding: '5px 8px', fontSize: '0.78rem', maxWidth: '320px' }}
        >
          {books.map((b, i) => (
            <option key={b.book.id} value={i}>
              {b.book.title} ({b.progress?.unitsCovered.length ?? 0} un.)
            </option>
          ))}
        </select>
        <input
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          placeholder="Unidad o páginas (p.ej. Unidad 12)"
          aria-label="Unidad estudiada"
          style={{ background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)', padding: '5px 8px', fontSize: '0.78rem', flex: 1, minWidth: '160px' }}
        />
        <label className="ds-row" style={{ gap: '6px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          Min:
          <input type="number" min={1} max={240} value={minutes} onChange={(e) => setMinutes(Number(e.target.value) || 1)} style={{ width: '56px', background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)', padding: '5px 6px', fontSize: '0.78rem' }} />
        </label>
        <Button variant="primary" size="sm" onClick={handleSave} disabled={!unit.trim()}>
          {saved ? <CheckCircle2 size={14} /> : undefined} {saved ? 'Registrado' : 'Registrar estudio'}
        </Button>
      </div>

      {current?.progress && (
        <span style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--text-tertiary)' }}>
          Último: {current.progress.lastUnit} ({current.progress.lastStudiedIso}) — {current.progress.unitsCovered.length} unidades de «{current.book.title}»
        </span>
      )}

      {viewerOpen && current && (
        <BookPdfViewer
          bookId={current.book.id}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </div>
  );
}
