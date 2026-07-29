import React from 'react';
import type { LibraryDocument } from '../../data/library/types';
import LibraryRow from './LibraryRow';
import EmptyState from '../ui/EmptyState';

export interface LibraryListProps {
  documents: LibraryDocument[];
  onSelectDocument: (doc: LibraryDocument) => void;
}

export function LibraryList({ documents, onSelectDocument }: LibraryListProps) {
  if (documents.length === 0) {
    return (
      <EmptyState
        title="Aún no hay documentos aquí"
        description="No se encontraron fuentes o documentos que coincidan con la búsqueda o filtro seleccionado."
      />
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {documents.map((doc) => (
        <LibraryRow key={doc.id} document={doc} onSelect={onSelectDocument} />
      ))}
    </div>
  );
}

export default LibraryList;
