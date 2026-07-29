import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import type { CanonicalEntity } from '../../data/canonicalDomainModel';

interface Props {
  entity: CanonicalEntity | null;
  onClose: () => void;
}

export default function EntityInspectorDrawer({ entity, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'what' | 'how' | 'why' | 'source' | 'adaptation'>('what');

  if (!entity) return null;

  return (
    <ErrorBoundary>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <div
          style={{
            background: 'var(--color-surface-base)',
            borderLeft: '1px solid var(--color-border-visible)',
            maxWidth: '520px',
            width: '100%',
            height: '100%',
            padding: '24px',
            boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.8)',
            color: 'var(--color-text-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            overflowY: 'auto'
          }}
        >
          {/* HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.68rem', fontFamily: 'SF Mono, monospace', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                INSPECTOR DE ENTIDAD CANÓNICA • {entity.domain.toUpperCase()}
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '4px 0 0', color: 'var(--color-text-primary)' }}>
                {entity.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              style={{ background: 'var(--color-border-subtle)', border: 'none', color: 'var(--color-text-secondary)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: 700 }}
            >
              ✕
            </button>
          </div>

          {/* SUBSECTION TABS (PROGRESSIVE DISCLOSURE) */}
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.06)', padding: '4px', borderRadius: '12px', overflowX: 'auto' }}>
            <button
              type="button"
              onClick={() => setActiveTab('what')}
              style={{ background: activeTab === 'what' ? 'var(--color-accent-primary)' : 'transparent', color: activeTab === 'what' ? '#ffffff' : 'var(--color-text-secondary)', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              📌 Qué es
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('how')}
              style={{ background: activeTab === 'how' ? 'var(--color-state-done)' : 'transparent', color: activeTab === 'how' ? '#ffffff' : 'var(--color-text-secondary)', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              ⚙️ Cómo hacerlo
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('why')}
              style={{ background: activeTab === 'why' ? 'var(--color-accent-warning)' : 'transparent', color: activeTab === 'why' ? '#ffffff' : 'var(--color-text-secondary)', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              💡 Por qué existe
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('source')}
              style={{ background: activeTab === 'source' ? 'var(--color-accent-primary)' : 'transparent', color: activeTab === 'source' ? '#ffffff' : 'var(--color-text-secondary)', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              📄 Fuente
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('adaptation')}
              style={{ background: activeTab === 'adaptation' ? 'var(--color-accent-danger)' : 'transparent', color: activeTab === 'adaptation' ? '#ffffff' : 'var(--color-text-secondary)', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              🧠 Adaptación
            </button>
          </div>

          {/* TAB CONTENTS */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {activeTab === 'what' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px', border: '1px solid var(--color-border-subtle)' }}>
                  <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>Fase y Estado:</strong>
                  <span>Fase Activa: {entity.phase} • Duración: {entity.durationMinutes} min • Energía: {entity.energyRequired.toUpperCase()}</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px', border: '1px solid var(--color-border-subtle)' }}>
                  <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>Etiquetas & Taxonomía:</strong>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                    {entity.tags.map((t, idx) => (
                      <span key={idx} style={{ background: 'var(--color-accent-primary-soft)', color: 'var(--color-accent-primary)', padding: '2px 8px', borderRadius: '6px', fontSize: '0.72rem', fontFamily: 'SF Mono, monospace' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'how' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                <div style={{ background: 'var(--color-state-done-soft)', border: '1px solid var(--color-state-done-glow)', padding: '14px', borderRadius: '12px', color: 'var(--color-state-done)' }}>
                  <strong>🟢 Versión Mínima Viable (Para Días de Baja Energía):</strong>
                  <p style={{ margin: '4px 0 0', color: 'var(--color-text-primary)' }}>{entity.minViableVersion}</p>
                </div>

                <div style={{ background: 'var(--color-accent-primary-soft)', border: '1px solid var(--color-accent-primary-glow)', padding: '14px', borderRadius: '12px', color: 'var(--color-accent-primary)' }}>
                  <strong>🩵 Versión Normal Estándar:</strong>
                  <p style={{ margin: '4px 0 0', color: 'var(--color-text-primary)' }}>{entity.normalVersion}</p>
                </div>

                <div style={{ background: 'var(--color-accent-primary-soft)', border: '1px solid var(--color-accent-primary-glow)', padding: '14px', borderRadius: '12px', color: 'var(--color-accent-primary)' }}>
                  <strong>⚡ Versión Extendida / Máxima Carga:</strong>
                  <p style={{ margin: '4px 0 0', color: 'var(--color-text-primary)' }}>{entity.extendedVersion}</p>
                </div>
              </div>
            )}

            {activeTab === 'why' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px', borderLeft: '3px solid var(--color-accent-warning)' }}>
                  <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>Racional & Justificación:</strong>
                  <p style={{ margin: '4px 0 0' }}>{entity.rationale}</p>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px', borderLeft: '3px solid var(--color-accent-primary)' }}>
                  <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>¿Por Qué Existe Esto en el Plan Maestro?</strong>
                  <p style={{ margin: '4px 0 0' }}>{entity.whyThisExists}</p>
                </div>
              </div>
            )}

            {activeTab === 'source' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>📄 Documentos Fuente Vinculados ({entity.originDocuments.length}):</strong>
                {entity.originDocuments.map((doc, idx) => (
                  <div key={idx} style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--color-border-subtle)', padding: '12px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: 'var(--color-text-primary)', display: 'block', fontSize: '0.88rem' }}>{doc.title}</strong>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontFamily: 'SF Mono, monospace' }}>{doc.filename}</span>
                    </div>
                    <a href={`/api/doc/${doc.filename.replace('.md', '')}.json`} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', textDecoration: 'none', fontWeight: 700 }}>
                      ↗ Ver JSON
                    </a>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'adaptation' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                <div style={{ background: 'var(--color-accent-danger-soft)', border: '1px solid var(--color-accent-danger-glow)', padding: '14px', borderRadius: '12px', color: 'var(--color-accent-danger)' }}>
                  <strong>🧠 Restricciones Clínicas & Lesiones Aplicadas:</strong>
                  <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: 'var(--color-text-primary)', lineHeight: 1.5 }}>
                    {entity.clinicalConstraints.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
