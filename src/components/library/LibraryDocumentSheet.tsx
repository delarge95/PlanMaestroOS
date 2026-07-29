import React from 'react';
import { ExternalLink, BookOpen, FileText, File } from 'lucide-react';
import type { LibraryDocument } from '../../data/library/types';
import Sheet from '../ui/Sheet';
import Button from '../ui/Button';
import { libraryAssetUrl } from '../../lib/library/openDocument';

export interface LibraryDocumentSheetProps {
  document: LibraryDocument | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LibraryDocumentSheet({ document, isOpen, onClose }: LibraryDocumentSheetProps) {
  if (!document) return null;

  const Icon =
    document.category === 'source'
      ? BookOpen
      : document.category === 'plan'
      ? FileText
      : File;

  const categoryLabel =
    document.category === 'source'
      ? 'Fuente de Referencia'
      : document.category === 'plan'
      ? 'Plan Personal'
      : 'Documento Operativo';

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={document.title}
      description={categoryLabel}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {/* ENCABEZADO Y TIPO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', background: 'var(--surface-elevated)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)' }}>
          <Icon size={24} style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true" />
          <div>
            <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--text)' }}>
              {document.title}
            </strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
              {document.author ? `${document.author} · ` : ''}{document.year || 'Documento Oficial'}
            </span>
          </div>
        </div>

        {/* DESCRIPCIÓN CORTA */}
        {document.description && (
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Resumen
            </span>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
              {document.description}
            </p>
          </div>
        )}

        {/* ETIQUETAS */}
        {document.tags && document.tags.length > 0 && (
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              Etiquetas
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {document.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--color-border-subtle)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* BOTÓN PRIMARIO ABRIR DOCUMENTO (FULL WIDTH, MIN 44PX) */}
        <div style={{ marginTop: 'var(--space-sm)' }}>
          {document.isOpenable && document.openUrl ? (
            <a
              href={libraryAssetUrl(document.openUrl)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <Button
                variant="primary"
                size="lg"
                style={{ width: '100%', minHeight: '44px', justifyContent: 'center' }}
              >
                <ExternalLink size={18} aria-hidden="true" />
                <span>Abrir documento</span>
              </Button>
            </a>
          ) : (
            <Button
              variant="secondary"
              size="lg"
              disabled
              style={{ width: '100%', minHeight: '44px', justifyContent: 'center' }}
            >
              <span>No disponible todavía</span>
            </Button>
          )}
        </div>
      </div>
    </Sheet>
  );
}

export default LibraryDocumentSheet;
