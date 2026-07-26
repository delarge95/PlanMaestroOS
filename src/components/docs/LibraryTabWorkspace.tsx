import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InteractiveDocViewer from './InteractiveDocViewer';
import SecondBrainInspector from './SecondBrainInspector';
import NotionObsidianIntegrationHub from './NotionObsidianIntegrationHub';

const TABS = [
  { id: 'rag', label: '🔍 Buscador RAG Semántico & Documentos' },
  { id: 'second_brain', label: '🧠 Inspección Segundo Cerebro (Notion/Obsidian)' },
  { id: 'hub', label: '🔌 Hub de Conexiones & Exportador YAML' }
];

export default function LibraryTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('rag');

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
          {activeTab === 'rag' && <InteractiveDocViewer />}
          {activeTab === 'second_brain' && <SecondBrainInspector />}
          {activeTab === 'hub' && <NotionObsidianIntegrationHub />}
        </div>
      </div>
    </ErrorBoundary>
  );
}
