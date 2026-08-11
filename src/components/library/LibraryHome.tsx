// src/components/library/LibraryHome.tsx
import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ListRow from '../ui/ListRow';
import StatusBadge from '../ui/StatusBadge';
import Button from '../ui/Button';
import { libraryDocs, type LibraryDoc } from '../../data/library/documents';
import { BookOpen, Search, FileText, FileCode, Table, ExternalLink } from 'lucide-react';

export default function LibraryHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedKind, setSelectedKind] = useState<string>('all');

  const filteredDocs = libraryDocs.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesArea = selectedArea === 'all' || doc.area === selectedArea;
    const matchesKind = selectedKind === 'all' || doc.kind === selectedKind;
    return matchesSearch && matchesArea && matchesKind;
  });

  const renderKindIcon = (kind: LibraryDoc['kind']) => {
    switch (kind) {
      case 'pdf': return <FileText size={16} style={{ color: 'var(--color-accent-danger, #ff453a)' }} />;
      case 'markdown': return <FileCode size={16} style={{ color: 'var(--accent, #0a84ff)' }} />;
      case 'sheet': return <Table size={16} style={{ color: 'var(--success, #30d158)' }} />;
    }
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        
        {/* ENCABEZADO DE BIBLIOTECA GLOBAL */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen size={22} style={{ color: 'var(--accent, #0a84ff)' }} />
          <div>
            <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Biblioteca Global
            </h1>
            <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
              Repositorio centralizado de libros, PDFs, markdowns y hojas de trabajo
            </span>
          </div>
        </div>

        {/* BUSCADOR Y FILTROS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m)', padding: 'var(--space-md)' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar documento por título o etiqueta..."
              style={{
                width: '100%',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-s)',
                padding: '8px 12px 8px 32px',
                color: 'var(--text-primary)',
                fontSize: 'var(--fs-body, 0.9375rem)'
              }}
            />
            <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }}>Área:</span>
              {['all', 'fitness', 'laboral', 'idiomas', 'clinico'].map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  style={{
                    background: selectedArea === area ? 'var(--accent)' : 'rgba(255,255,255,0.03)',
                    color: selectedArea === area ? '#000' : 'var(--text-primary)',
                    border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: 'var(--fs-eyebrow)', fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize'
                  }}
                >
                  {area === 'all' ? 'Todas' : area}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }}>Tipo:</span>
              {['all', 'pdf', 'markdown', 'sheet'].map((kind) => (
                <button
                  key={kind}
                  type="button"
                  onClick={() => setSelectedKind(kind)}
                  style={{
                    background: selectedKind === kind ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                    color: selectedKind === kind ? 'var(--text-primary)' : 'var(--text-secondary)',
                    border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: 'var(--fs-eyebrow)', fontWeight: 600, cursor: 'pointer', textTransform: 'uppercase'
                  }}
                >
                  {kind}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* LISTADO DE DOCUMENTOS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          {filteredDocs.length === 0 ? (
            <div style={{ padding: 'var(--space-md)', background: 'var(--surface-1)', borderRadius: 'var(--radius-m)', fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }}>
              No se encontraron documentos con los filtros seleccionados.
            </div>
          ) : (
            filteredDocs.map((doc) => (
              <ListRow
                key={doc.id}
                title={doc.title}
                subtitle={doc.description || `Área: ${doc.area} · Etiquetas: ${doc.tags.join(', ')}`}
                icon={renderKindIcon(doc.kind)}
                action={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <StatusBadge label={doc.area.toUpperCase()} variant="neutral" />
                    <Button variant="secondary" size="sm" onClick={() => alert(`Abriendo recurso: ${doc.title}`)}>
                      <ExternalLink size={14} />
                      <span>Abrir</span>
                    </Button>
                  </div>
                }
              />
            ))
          )}
        </div>

      </div>
    </ErrorBoundary>
  );
}
