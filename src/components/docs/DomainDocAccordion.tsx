import React, { useState } from 'react';
import InteractiveDocViewer from './InteractiveDocViewer';
import ErrorBoundary from '../ErrorBoundary';

interface Props {
  domainTitle: string;
  domainColor: string;
  categoryFilter?: 'all' | 'career' | 'fitness' | 'clinical' | 'german';
  sourceDocsList: { name: string; type: string; path: string; description: string }[];
}

export default function DomainDocAccordion({ domainTitle, domainColor, categoryFilter = 'all', sourceDocsList }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div style={{ marginTop: '32px', background: '#080c0e', border: `1px solid ${domainColor}44`, borderRadius: '12px', overflow: 'hidden' }}>
        {/* ACCORDION HEADER BUTTON WITH STOP PROPAGATION */}
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }}
          style={{
            width: '100%',
            background: isOpen ? `${domainColor}15` : 'rgba(0,0,0,0.3)',
            border: 'none',
            padding: '18px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }}
        >
          <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '1.4rem' }}>📄</span>
            <div>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: domainColor, fontWeight: 700 }}>
                CONSULTA DE FUENTES ORIGINALES COMPLETAS
              </span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--color-text-primary)' }}>
                Ver Documentos e Investigación Completa de {domainTitle}
              </h3>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.75rem', color: 'var(--color-text-tertiary)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '6px' }}>
              {sourceDocsList.length} Documentos Incluidos
            </span>
            <span style={{ fontSize: '1.2rem', color: domainColor, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}>
              ▼
            </span>
          </div>
        </button>

        {/* EXPANDABLE BODY */}
        {isOpen && (
          <div style={{ padding: '24px', borderTop: `1px solid ${domainColor}22`, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* SOURCE DOCS SUMMARY CHIPS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              {sourceDocsList.map((doc, idx) => (
                <div key={idx} style={{ background: 'rgba(0,0,0,0.4)', padding: '12px 14px', borderRadius: '8px', border: '1px solid rgba(174,255,224,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>{doc.name}</strong>
                    <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.65rem', color: domainColor }}>
                      {doc.type}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.3 }}>
                    {doc.description}
                  </p>
                </div>
              ))}
            </div>

            {/* INTERACTIVE MARKDOWN & RAG EXPLORER */}
            <InteractiveDocViewer categoryFilter={categoryFilter} />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
