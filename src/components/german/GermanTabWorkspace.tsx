import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import GermanLearningHub from './GermanLearningHub';
import DomainDocAccordion from '../docs/DomainDocAccordion';

const germanDocsList = [
  { name: 'plan_maestro_v3.md#modulo-aleman', type: 'Markdown', path: 'plan_maestro_v3.md', description: 'Definición formal del hábito de Alemán diario' },
  { name: '05_language_strategy_and_roi.md', type: 'Markdown', path: '05_language_strategy_and_roi.md', description: 'Estrategia de idiomas (Alemán e Inglés) y ROI laboral en la UE' }
];

const TABS = [
  { id: 'habit', label: '🇩🇪 Hábito Diario 25 min & Flashcards' },
  { id: 'plan', label: '📚 Plan de Estudio A1-A2 & Recursos' },
  { id: 'docs', label: '📄 Documentos Fuente & ROI UE' }
];

export default function GermanTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('habit');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* APPLE SEGMENTED CONTROL BAR (STICKY) */}
        <div style={{
          position: 'sticky',
          top: '12px',
          zIndex: 90,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(28, 28, 30, 0.85)',
          backdropFilter: 'blur(30px) saturate(190%)',
          WebkitBackdropFilter: 'blur(30px) saturate(190%)',
          padding: '6px',
          borderRadius: '18px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255,255,255,0.1) inset',
          overflowX: 'auto',
          maxWidth: '100%'
        }}>
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: isSelected ? '#ffffff' : 'transparent',
                  color: isSelected ? '#000000' : '#8e8e93',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  fontFamily: '-apple-system, SF Pro Text, system-ui, sans-serif',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 3px 12px rgba(0, 0, 0, 0.35), 0 0 1px rgba(0,0,0,0.2)' : 'none',
                  transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* SUBSECTION CONTENT */}
        <div style={{ minHeight: '500px' }}>
          {activeTab === 'habit' && <GermanLearningHub />}
          {activeTab === 'plan' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #ff9f0a', borderRadius: '18px', padding: '20px', backdropFilter: 'blur(40px)' }}>
                <span style={{ fontSize: '1.8rem' }}>📱</span>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '8px 0 4px' }}>1. Duolingo (5 min)</h3>
                <p style={{ fontSize: '0.84rem', color: '#98989d', margin: 0, lineHeight: 1.5 }}>
                  Mantenimiento de racha diaria, vocabulario rápido y fijación de palabras básicas.
                </p>
              </div>

              <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #ff9f0a', borderRadius: '18px', padding: '20px', backdropFilter: 'blur(40px)' }}>
                <span style={{ fontSize: '1.8rem' }}>📚</span>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '8px 0 4px' }}>2. Libros A1 + Audios (15-20 min)</h3>
                <p style={{ fontSize: '0.84rem', color: '#98989d', margin: 0, lineHeight: 1.5 }}>
                  Set de libros descargados (Menschen A1 / Grammatik aktiv) siguiendo audios oficiales nativos.
                </p>
              </div>

              <div style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #ff9f0a', borderRadius: '18px', padding: '20px', backdropFilter: 'blur(40px)' }}>
                <span style={{ fontSize: '1.8rem' }}>🤖</span>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '8px 0 4px' }}>3. IA Conversacional (5-10 min)</h3>
                <p style={{ fontSize: '0.84rem', color: '#98989d', margin: 0, lineHeight: 1.5 }}>
                  Micro-prácticas con ChatGPT / IA de voz en alemán básico A1 con corrección gramatical inmediata.
                </p>
              </div>
            </div>
          )}
          {activeTab === 'docs' && (
            <DomainDocAccordion
              domainTitle="Alemán & Estrategia Lingüística"
              domainColor="#ff9f0a"
              categoryFilter="german"
              sourceDocsList={germanDocsList}
            />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
