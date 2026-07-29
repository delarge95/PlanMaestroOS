import React, { useState, useEffect } from 'react';
import ragIndex from '../../data/rag_index.json';
import ErrorBoundary from '../ErrorBoundary';
import { searchRAG, type RAGSearchResult } from '../../data/ragEngine';

interface Props {
  categoryFilter?: 'all' | 'career' | 'fitness' | 'clinical' | 'german';
}

export default function InteractiveDocViewer({ categoryFilter = 'all' }: Props) {
  const docs = ragIndex.career_docs;

  const [selectedDocId, setSelectedDocId] = useState<string>(docs[0]?.id || '');
  const [docContent, setDocContent] = useState<string>('');
  const [loadingDoc, setLoadingDoc] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [ragQuery, setRagQuery] = useState<string>('');
  const [ragResults, setRagResults] = useState<RAGSearchResult[]>([]);

  const currentDoc = docs.find((d) => d.id === selectedDocId) || docs[0];

  // Fetch full doc content when selectedDocId changes
  useEffect(() => {
    if (!selectedDocId) return;
    let isCurrent = true;
    setLoadingDoc(true);

    fetch(`/api/doc/${selectedDocId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Doc not found');
        return res.json();
      })
      .then((data) => {
        if (isCurrent) {
          setDocContent(data.content || data.excerpt || '');
          setLoadingDoc(false);
        }
      })
      .catch(() => {
        if (isCurrent) {
          setDocContent(currentDoc?.excerpt || 'Contenido del documento fuente disponible en el repositorio.');
          setLoadingDoc(false);
        }
      });

    return () => { isCurrent = false; };
  }, [selectedDocId]);

  const handleRagSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!ragQuery.trim()) return;
    const res = searchRAG(ragQuery);
    setRagResults(res);
  };

  const filteredDocs = docs.filter(
    (d) =>
      d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ErrorBoundary>
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '24px', minHeight: '600px' }}>
        {/* LEFT SIDEBAR: DOCS TREE & SEARCH */}
        <div style={{ background: '#080c0e', border: '1px solid rgba(174,255,224,0.12)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#ec4899', fontWeight: 700 }}>
              DOCUMENTOS FUENTE #{categoryFilter.toUpperCase()}
            </span>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '4px 0 12px', color: 'var(--color-text-primary)' }}>
              Explorador de Archivos
            </h3>
          <input
            type="text"
            placeholder="Filtrar por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              background: '#040608',
              border: '1px solid rgba(174,255,224,0.15)',
              borderRadius: '6px',
              padding: '8px 12px',
              color: 'var(--color-text-primary)',
              fontSize: '0.8rem',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px', maxHeight: '480px' }}>
          {filteredDocs.map((doc) => (
            <button
              key={doc.id}
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedDocId(doc.id); }}
              style={{
                textAlign: 'left',
                background: selectedDocId === doc.id ? 'rgba(236,72,153,0.15)' : 'transparent',
                border: selectedDocId === doc.id ? '1px solid #ec4899' : '1px solid transparent',
                borderRadius: '6px',
                padding: '8px 10px',
                color: selectedDocId === doc.id ? '#ec4899' : 'var(--color-text-secondary)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
            >
              <div style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-text-tertiary)' }}>
                {doc.filename}
              </div>
              <div style={{ fontWeight: selectedDocId === doc.id ? 700 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {doc.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT MAIN PANE: RAG SEARCH & DOCUMENT READER */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* RAG SEARCH BAR PANEL */}
        <div style={{ background: '#080c0e', border: '1px solid rgba(119,231,255,0.2)', borderRadius: '12px', padding: '16px' }}>
          <form onSubmit={handleRagSearch} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Consultar RAG (ej. TwinSight, RIR, Spanish Squats, Duolingo)..."
              value={ragQuery}
              onChange={(e) => setRagQuery(e.target.value)}
              style={{
                flex: 1,
                background: '#040608',
                border: '1px solid #77e7ff',
                borderRadius: '8px',
                padding: '10px 14px',
                color: 'var(--color-text-primary)',
                fontSize: '0.88rem'
              }}
            />
            <button
              type="submit"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--color-accent-primary)',
                color: '#040608',
                border: 'none',
                padding: '0 20px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Buscar
            </button>
          </form>

          {/* RAG RESULTS LIST */}
          {ragResults.length > 0 && (
            <div style={{ marginTop: '16px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px', padding: '14px', border: '1px solid rgba(119,231,255,0.2)' }}>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.7rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                {ragResults.length} RESULTADOS ENCONTRADOS:
              </span>
              <div style={{ display: 'grid', gap: '10px', marginTop: '10px' }}>
                {ragResults.map((res, rIdx) => (
                  <div key={rIdx} style={{ background: '#040608', padding: '10px', borderRadius: '6px', borderLeft: '3px solid #77e7ff' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>{res.title}</strong>
                      <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-text-tertiary)' }}>
                        Source: {res.source}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.4 }}>
                      "{res.content}..."
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* DOCUMENT READER PANE */}
        {currentDoc ? (
          <div style={{ background: '#080c0e', border: '1px solid rgba(174,255,224,0.12)', borderRadius: '12px', padding: '24px', flex: 1 }}>
            <div style={{ borderBottom: '1px solid rgba(174,255,224,0.1)', paddingBottom: '16px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.7rem', color: '#ec4899', fontWeight: 700 }}>
                  DOCUMENTO FUENTE #{currentDoc.filename.slice(0, 2)}
                </span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '4px 0 0', color: 'var(--color-text-primary)' }}>
                  {currentDoc.title}
                </h2>
              </div>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-text-tertiary)', background: 'rgba(255,255,255,0.04)', padding: '4px 8px', borderRadius: '4px' }}>
                {(currentDoc.size_bytes / 1024).toFixed(1)} KB
              </span>
            </div>

            {/* CONTENT VIEWER */}
            {loadingDoc ? (
              <div style={{ padding: '40px 0', color: '#ec4899', fontFamily: 'Azeret Mono, monospace', fontSize: '0.85rem' }}>
                Cargando contenido completo del documento...
              </div>
            ) : (
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, whiteSpace: 'pre-wrap', fontFamily: 'Space Grotesk, sans-serif', maxHeight: '480px', overflowY: 'auto' }}>
                {docContent}
              </div>
            )}
          </div>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
            Selecciona un documento para visualizar su contenido.
          </div>
        )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
