import React, { useState, useMemo } from 'react';
import { Search, LibraryBig } from 'lucide-react';
import type { LibraryDocument, LibraryCategory } from '../../data/library/types';
import { allLibraryDocuments } from '../../data/library/documents';
import LibraryList from './LibraryList';
import LibraryDocumentSheet from './LibraryDocumentSheet';
import ErrorBoundary from '../ErrorBoundary';

export interface LibraryPageProps {
  initialDomain?: string;
}

export function LibraryPage({ initialDomain }: LibraryPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | LibraryCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<LibraryDocument | null>(null);

  const filteredDocs = useMemo(() => {
    return allLibraryDocuments.filter((doc) => {
      // Domain filter if provided
      if (initialDomain && doc.domain && doc.domain !== initialDomain) {
        return false;
      }

      // Category filter
      if (activeCategory !== 'all' && doc.category !== activeCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = doc.title.toLowerCase().includes(q);
        const matchesDesc = doc.description?.toLowerCase().includes(q) || false;
        const matchesTags = doc.tags?.some((t) => t.toLowerCase().includes(q)) || false;
        return matchesTitle || matchesDesc || matchesTags;
      }

      return true;
    });
  }, [activeCategory, searchQuery, initialDomain]);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        {/* HEADER COMPACTO CON TÍTULO HUMANIZADO "BIBLIOTECA" */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
              MÁS / BIBLIOTECA
            </span>
            <h1 style={{ fontSize: 'var(--font-size-title)', fontWeight: 700, margin: 'var(--space-1) 0 0', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <LibraryBig size={24} style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true" />
              <span>Biblioteca</span>
            </h1>
          </div>

          {/* BÚSQUEDA HUMANIZADA */}
          <div style={{ position: 'relative', minWidth: '220px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en Biblioteca..."
              aria-label="Buscar en Biblioteca"
              style={{
                width: '100%',
                background: 'var(--surface)',
                border: '1px solid var(--color-border-visible)',
                color: 'var(--text)',
                padding: '8px 12px 8px 36px',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-body)',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* NAVEGACIÓN LOCAL: SEGMENTED CONTROL CORTO (TODO, FUENTES, PLAN, DOCUMENTOS) */}
        <div
          role="tablist"
          aria-label="Filtros de biblioteca"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'var(--surface)',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border-subtle)',
            overflowX: 'auto'
          }}
        >
          {(
            [
              { id: 'all', label: 'Todo' },
              { id: 'source', label: 'Fuentes' },
              { id: 'plan', label: 'Plan' },
              { id: 'document', label: 'Documentos' }
            ] as const
          ).map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: isSelected ? 'var(--color-accent-primary)' : 'transparent',
                  color: isSelected ? '#ffffff' : 'var(--text-tertiary)',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--font-size-label)',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 120ms ease, color 120ms ease'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* LISTA RESPONSIVA EN UNA SOLA COLUMNA */}
        <LibraryList
          documents={filteredDocs}
          onSelectDocument={(doc) => setSelectedDoc(doc)}
        />

        {/* SHEET DE DETALLE */}
        {selectedDoc && (
          <LibraryDocumentSheet
            isOpen={Boolean(selectedDoc)}
            onClose={() => setSelectedDoc(null)}
            document={selectedDoc}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default LibraryPage;
