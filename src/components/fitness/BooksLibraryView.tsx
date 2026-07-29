import React from 'react';
import { fitnessLibraryDocuments } from '../../data/library/documents';
import LibraryList from '../library/LibraryList';
import LibraryDocumentSheet from '../library/LibraryDocumentSheet';
import type { LibraryDocument } from '../../data/library/types';

export default function BooksLibraryView() {
  const [selectedDoc, setSelectedDoc] = React.useState<LibraryDocument | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
      <div>
        <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
          BIBLIOTECA · FUENTES DE REFERENCIA
        </span>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '4px 0 0', color: 'var(--text)' }}>
          Fuentes Técnicas & Manuales de Fitness
        </h2>
      </div>

      {/* LISTA RESPONSIVA EN UNA SOLA COLUMNA CON ACCIÓN DE APERTURA REAL */}
      <LibraryList
        documents={fitnessLibraryDocuments}
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
  );
}
