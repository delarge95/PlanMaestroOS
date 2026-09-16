import React, { useEffect, useRef, useState } from 'react';
import IconButton from './IconButton';
import { X } from 'lucide-react';

export interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export function Sheet({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = '720px'
}: SheetProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = useState(false);
  const wasOpenRef = useRef(false);

  // M1 — salida animada: al cerrar, el Sheet permanece montado 220ms mientras
  // corre el fade-out/sheet-down, y recién entonces se desmonta. Con
  // prefers-reduced-motion se salta el timeout y desmonta directo.
  // [mot-duracion-easing] [mot-disney-purpose]
  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      setExiting(false);
      return;
    }
    // Solo anima la salida si estuvo abierto (evita render fantasma al montar cerrado)
    if (!wasOpenRef.current) return;
    wasOpenRef.current = false;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return; // desmonta directo, sin animación de salida

    setExiting(true);
    const timer = setTimeout(() => setExiting(false), 220);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Close on Escape key & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !exiting) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className={exiting ? 'sheet-overlay sheet-overlay-exiting' : 'sheet-overlay'}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 'var(--space-md)'
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        aria-describedby={description ? 'sheet-desc' : undefined}
        onClick={(e) => e.stopPropagation()}
        className={exiting ? 'sheet-panel sheet-exiting' : 'sheet-panel'}
        style={{
          width: `min(${maxWidth}, 100%)`,
          maxHeight: '85vh',
          background: 'var(--surface)',
          border: '1px solid var(--color-border-visible)',
          borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
          padding: 'var(--space-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-md)',
          boxShadow: 'var(--shadow-float)',
          overflowY: 'auto',
          color: 'var(--text)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-md)' }}>
          <div>
            <h2 id="sheet-title" style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
              {title}
            </h2>
            {description && (
              <p id="sheet-desc" style={{ fontSize: 'var(--font-size-label)', margin: 'var(--space-xs) 0 0', color: 'var(--text-secondary)' }}>
                {description}
              </p>
            )}
          </div>

          <IconButton label="Cerrar" onClick={onClose} size="sm">
            <X size={16} aria-hidden="true" />
          </IconButton>
        </div>

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Sheet;
