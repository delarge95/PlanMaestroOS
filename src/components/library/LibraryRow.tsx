import React from 'react';
import { BookOpen, FileText, File, ExternalLink, ChevronRight } from 'lucide-react';
import type { LibraryDocument } from '../../data/library/types';
import { libraryAssetUrl } from '../../lib/library/openDocument';

export interface LibraryRowProps {
  document: LibraryDocument;
  onSelect: (doc: LibraryDocument) => void;
}

export function LibraryRow({ document, onSelect }: LibraryRowProps) {
  const Icon =
    document.category === 'source'
      ? BookOpen
      : document.category === 'plan'
      ? FileText
      : File;

  const categoryLabel =
    document.category === 'source'
      ? 'Fuente'
      : document.category === 'plan'
      ? 'Plan'
      : 'Documento';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-3) var(--space-4)',
        gap: 'var(--space-md)',
        transition: 'background 120ms ease, border-color 120ms ease'
      }}
    >
      {/* INFORMACIÓN PRINCIPAL */}
      <div
        onClick={() => onSelect(document)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          flex: 1,
          cursor: 'pointer',
          minWidth: 0
        }}
      >
        <div
          style={{
            background: 'var(--surface-elevated)',
            border: '1px solid var(--color-border-visible)',
            borderRadius: 'var(--radius-sm)',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <Icon size={18} style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true" />
        </div>

        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              {categoryLabel} {document.author ? `· ${document.author}` : ''}
            </span>
          </div>

          <strong
            style={{
              display: 'block',
              fontSize: '0.94rem',
              color: 'var(--text)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {document.title}
          </strong>

          {document.description && (
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                margin: '2px 0 0',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {document.description}
            </p>
          )}
        </div>
      </div>

      {/* ACCIÓN EXPLÍCITA ABRIR / DETALLE */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexShrink: 0 }}>
        {document.isOpenable && document.openUrl ? (
          <a
            href={libraryAssetUrl(document.openUrl)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${document.title} en nueva pestaña`}
            style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--color-border-visible)',
              color: 'var(--text)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              minHeight: '36px'
            }}
          >
            <span>Abrir</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onSelect(document)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-tertiary)',
              padding: '6px',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

export default LibraryRow;
