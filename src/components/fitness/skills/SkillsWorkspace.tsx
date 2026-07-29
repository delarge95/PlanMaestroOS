import React, { useState } from 'react';
import { Target, Compass, History, ShieldAlert } from 'lucide-react';
import MyPracticeView from './MyPracticeView';
import ExplorePathsView from './ExplorePathsView';
import SkillHistoryView from './SkillHistoryView';
import SkillDetailSheet from './SkillDetailSheet';
import PracticeSessionModal from './PracticeSessionModal';

export function SkillsWorkspace() {
  const [activeTab, setActiveTab] = useState<'practice' | 'paths' | 'history'>('practice');
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);
  const [practiceModalStepId, setPracticeModalStepId] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {/* NAVEGACIÓN PRINCIPAL: SEGMENTED CONTROL (MÁXIMO 3 OPCIONES) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4px',
          background: 'var(--surface)',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)'
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab('practice')}
          style={{
            background: activeTab === 'practice' ? 'var(--color-accent-primary)' : 'transparent',
            color: activeTab === 'practice' ? '#ffffff' : 'var(--text-tertiary)',
            border: 'none',
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.86rem',
            fontWeight: activeTab === 'practice' ? 700 : 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            minHeight: '44px'
          }}
        >
          <Target size={16} />
          <span>Mi práctica</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('paths')}
          style={{
            background: activeTab === 'paths' ? 'var(--color-accent-primary)' : 'transparent',
            color: activeTab === 'paths' ? '#ffffff' : 'var(--text-tertiary)',
            border: 'none',
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.86rem',
            fontWeight: activeTab === 'paths' ? 700 : 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            minHeight: '44px'
          }}
        >
          <Compass size={16} />
          <span>Rutas</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('history')}
          style={{
            background: activeTab === 'history' ? 'var(--color-accent-primary)' : 'transparent',
            color: activeTab === 'history' ? '#ffffff' : 'var(--text-tertiary)',
            border: 'none',
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.86rem',
            fontWeight: activeTab === 'history' ? 700 : 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            minHeight: '44px'
          }}
        >
          <History size={16} />
          <span>Registro</span>
        </button>
      </div>

      {/* AVISO DE TOLERANCIA Y GUARDRAIL DISCRETO */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--color-border-subtle)',
          padding: '8px 12px',
          borderRadius: 'var(--radius-md)',
          fontSize: '0.76rem',
          color: 'var(--text-tertiary)'
        }}
      >
        <ShieldAlert size={14} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
        <span>Detén la práctica ante dolor agudo, lesión o pérdida de fuerza. Consulta atención profesional si persiste.</span>
      </div>

      {/* VISTAS DE PESTAÑAS */}
      {activeTab === 'practice' && (
        <MyPracticeView
          onOpenDetail={(stepId) => setSelectedStepId(stepId)}
          onStartPractice={(stepId) => setPracticeModalStepId(stepId)}
          onOpenPaths={() => setActiveTab('paths')}
        />
      )}

      {activeTab === 'paths' && (
        <ExplorePathsView
          onOpenDetail={(stepId) => setSelectedStepId(stepId)}
        />
      )}

      {activeTab === 'history' && (
        <SkillHistoryView />
      )}

      {/* SHEET DE DETALLE DE HABILIDAD */}
      {selectedStepId && (
        <SkillDetailSheet
          isOpen={Boolean(selectedStepId)}
          onClose={() => setSelectedStepId(null)}
          stepId={selectedStepId}
          onStartPractice={(stepId) => {
            setSelectedStepId(null);
            setPracticeModalStepId(stepId);
          }}
        />
      )}

      {/* MODAL / SHEET DE REGISTRO DE PRÁCTICA HOY */}
      {practiceModalStepId && (
        <PracticeSessionModal
          isOpen={Boolean(practiceModalStepId)}
          onClose={() => setPracticeModalStepId(null)}
          stepId={practiceModalStepId}
        />
      )}
    </div>
  );
}

export default SkillsWorkspace;
