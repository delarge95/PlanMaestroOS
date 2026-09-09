import React, { useEffect, useState } from 'react';
import { getBook, bookPdfPath } from '../../data/languages/books';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { X, ChevronLeft, ChevronRight, BookOpen, FileText } from 'lucide-react';

export interface BookPdfViewerProps {
  bookId: string;
  /** Página exacta verificada contra el PDF (ancla el iframe con #page=N). */
  page?: number;
  /** Rango verificado de páginas; la navegación se limita a él. */
  pageRange?: [number, number];
  /** Capítulo/tema citado por la lección (orientativo, sin página inventada). */
  section?: string;
  onClose: () => void;
}

type Availability = 'checking' | 'available' | 'missing';

/**
 * Visor de libros académicos de idiomas (PDF por página).
 * Si el PDF existe en public/library/languages/ lo embebe con #page=N;
 * si no, muestra la guía de instalación (nada inventado, regla §0.1).
 */
export default function BookPdfViewer({ bookId, page, pageRange, section, onClose }: BookPdfViewerProps) {
  const book = getBook(bookId);

  // Página inicial: exacta > primera del rango > null (portada, «por verificar»).
  const initialPage = page ?? pageRange?.[0] ?? null;
  const [current, setCurrent] = useState<number | null>(initialPage);
  const [availability, setAvailability] = useState<Availability>('checking');

  // Límites de navegación: dentro del rango cuando existe; tope inferior 1 siempre.
  const minPage = pageRange ? pageRange[0] : 1;
  const maxPage = pageRange ? pageRange[1] : null; // null = sin tope conocido

  // Comprobación de disponibilidad con HEAD (el PDF puede no estar aún en el repo).
  useEffect(() => {
    if (!book) return;
    let cancelled = false;
    fetch(bookPdfPath(book), { method: 'HEAD' })
      .then((res) => {
        if (!cancelled) setAvailability(res.ok ? 'available' : 'missing');
      })
      .catch(() => {
        if (!cancelled) setAvailability('missing');
      });
    return () => {
      cancelled = true;
    };
  }, [book]);

  // Escape cierra + bloqueo de scroll (patrón de Sheet/InertiaRescueModal).
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!book) {
    // bookId sin registro: no hay nada fiable que mostrar.
    return (
      <ErrorBoundary>
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(4, 6, 8, 0.85)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', display: 'grid', placeItems: 'center', padding: 'var(--space-lg, 24px)' }}>
          <div style={{ background: 'var(--surface, #12161c)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-l, 16px)', padding: 'var(--space-lg, 24px)', maxWidth: '420px', color: 'var(--text-primary)' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Libro no registrado: <code>{bookId}</code>
            </p>
            <div style={{ marginTop: '16px', textAlign: 'right' }}>
              <Button variant="secondary" size="sm" onClick={onClose}>Cerrar</Button>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  const pdfPath = bookPdfPath(book);
  // Con página anclada usamos el fragmento #page=N&view=FitH; sin ella, portada.
  const iframeSrc = current != null ? `${pdfPath}#page=${current}&view=FitH` : pdfPath;

  const canPrev = current != null && current > minPage;
  const canNext = current == null ? true : maxPage == null || current < maxPage;

  const goPrev = () => {
    if (current == null) return;
    setCurrent(Math.max(minPage, current - 1));
  };
  const goNext = () => {
    // Desde la portada (por verificar) el siguiente destino es la pág. 2.
    setCurrent(current == null ? 2 : maxPage == null ? current + 1 : Math.min(maxPage, current + 1));
  };

  // Etiqueta honesta: «pág. N de X» con rango · «pág. N» con página · «pág. por verificar».
  const pageLabel =
    pageRange && current != null
      ? `pág. ${current} de ${pageRange[1]}`
      : current != null
        ? `pág. ${current}`
        : 'pág. por verificar';

  return (
    <ErrorBoundary>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Visor del libro ${book.title}`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          background: 'rgba(4, 6, 8, 0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--space-md, 18px)',
          gap: 'var(--space-2, 10px)',
          animation: 'fadeIn 180ms ease-out'
        }}
      >
        {/* CABECERA: título del libro, sección citada y cierre */}
        <div className="ds-row-between" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <div style={{ minWidth: 0 }}>
            <span className="ds-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <BookOpen size={13} /> {book.publisher} · {book.level}
            </span>
            <h3 style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: '2px 0 0', color: 'var(--text-primary)' }}>
              {book.title}
            </h3>
            {section && (
              <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                Capítulo/tema: {section}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar visor"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--text-secondary)',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* CUERPO: iframe del PDF o guía de instalación si falta el archivo */}
        <div style={{ flex: 1, minHeight: 0, borderRadius: 'var(--radius-l, 14px)', overflow: 'hidden', border: '1px solid var(--color-border-subtle)', background: 'rgba(0,0,0,0.35)' }}>
          {availability === 'available' && (
            /* key por página: fuerza recarga del iframe al cambiar el fragmento #page */
            <iframe
              key={`pdf-page-${current ?? 'cover'}`}
              src={iframeSrc}
              title={`PDF de ${book.title}`}
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          )}

          {availability === 'checking' && (
            <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Comprobando el PDF…
            </div>
          )}

          {availability === 'missing' && (
            <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', padding: 'var(--space-3)' }}>
              <div className="ds-stack-sm" style={{ maxWidth: '480px', textAlign: 'center', justifyContent: 'center' }}>
                <FileText size={28} style={{ color: 'var(--color-accent-primary)', margin: '0 auto' }} />
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{book.title}</p>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  El PDF aún no está en el repo. Colócalo en{' '}
                  <code style={{ color: 'var(--color-accent-primary)' }}>public/library/languages/{book.fileName}</code>{' '}
                  y se abrirá aquí automáticamente.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 'var(--space-1)' }}>
                  <Button variant="secondary" size="sm" onClick={onClose}>Cerrar</Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CONTROLES DE PÁGINA */}
        <div className="ds-row-between" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            {pdfPath}
          </span>
          <div className="ds-row" style={{ gap: 'var(--space-2)' }}>
            <Button variant="secondary" size="sm" onClick={goPrev} disabled={!canPrev} aria-label="Página anterior">
              <ChevronLeft size={14} />
            </Button>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: current == null ? 'var(--color-accent-warning)' : 'var(--text-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 6px',
                minWidth: '90px',
                justifyContent: 'center'
              }}
            >
              {pageLabel}
            </span>
            <Button variant="secondary" size="sm" onClick={goNext} disabled={!canNext} aria-label="Página siguiente">
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
