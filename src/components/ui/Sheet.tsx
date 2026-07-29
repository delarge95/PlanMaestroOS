import React, { useEffect, useRef } from 'react';
import IconButton from './IconButton';

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

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
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
        padding: 'var(--space-md)',
        animation: 'fadeIn 180ms ease-out'
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        aria-describedby={description ? 'sheet-desc' : undefined}
        onClick={(e) => e.stopPropagation()}
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
            <h2 id="sheet-title" style={{ fontSize: 'var(--font-size-title)', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
              {title}
            </h2>
            {description && (
              <p id="sheet-desc" style={{ fontSize: 'var(--font-size-label)', margin: 'var(--space-xs) 0 0', color: 'var(--text-secondary)' }}>
                {description}
              </p>
            )}
          </div>

          <IconButton label="Cerrar" onClick={onClose} size="sm">
            ✕
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
