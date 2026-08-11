import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import GermanLearningHub from './GermanLearningHub';
import DomainDocAccordion from '../docs/DomainDocAccordion';
import ContextualAIActionButton from '../shared/ContextualAIActionButton';
import { evaluateModuleReadiness } from '../../data/contracts/expansionGate';
import type { VocabularyItem } from '../../data/contracts/expansionContracts';
import { Languages, BookOpen, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';

const SAMPLE_A1_VOCAB: VocabularyItem[] = [
  {
    id: 'v1',
    language: 'de',
    cefrLevel: 'A1',
    term: 'Der Entwickler',
    translationEs: 'El desarrollador',
    exampleSentence: 'Der Entwickler optimiert den 3D-Code.',
    grammarCategory: 'Nomen',
    licenseSource: 'Alemán Técnico Personal'
  },
  {
    id: 'v2',
    language: 'de',
    cefrLevel: 'A1',
    term: 'Arbeiten',
    translationEs: 'Trabajar',
    exampleSentence: 'Ich arbeite als Technical Artist.',
    grammarCategory: 'Verb',
    licenseSource: 'Alemán A1 Base'
  }
];

const germanDocsList = [
  { name: 'plan_maestro_v3.md#modulo-aleman', type: 'Markdown', path: 'plan_maestro_v3.md', description: 'Definición formal del hábito de Alemán diario' },
  { name: '05_language_strategy_and_roi.md', type: 'Markdown', path: '05_language_strategy_and_roi.md', description: 'Estrategia de idiomas (Alemán e Inglés) y ROI laboral en la UE' }
];

const TABS = [
  { id: 'habit', label: '🇩🇪 Práctica Alemán A1' },
  { id: 'vocab', label: '🎴 Vocabulario A1 & Repaso' },
  { id: 'tutor', label: '🤖 Tutor Conversacional IA' },
  { id: 'docs', label: '📚 Fuentes Documentales' }
];

export default function GermanTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('habit');
  const [vocabList] = useState<VocabularyItem[]>(SAMPLE_A1_VOCAB);
  const [practiceAttempt, setPracticeAttempt] = useState('');
  const [tutorFeedback, setTutorFeedback] = useState<string | null>(null);

  const gateResult = evaluateModuleReadiness('languages');

  const handleSimulatePractice = () => {
    if (!practiceAttempt.trim()) return;
    setTutorFeedback(`Gut gemacht! Tu frase "${practiceAttempt}" es comprensible a nivel A1. Corrección: Recuerda que los sustantivos como "Entwickler" siempre van con mayúscula inicial.`);
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

        {/* APPLE SEGMENTED CONTROL BAR (STICKY BELOW HEADER) */}
        <div style={{
          position: 'sticky',
          top: '68px',
          zIndex: 85,
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
                  background: isSelected ? 'var(--color-text-primary)' : 'transparent',
                  color: isSelected ? '#000000' : 'var(--color-text-tertiary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  fontFamily: 'var(--font-family-system)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 3px 12px rgba(0, 0, 0, 0.35)' : 'none',
                  transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* CUMPLIMIENTO DE CRITERIOS DE MADUREZ (EXPANSION GATE 07) */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <ShieldCheck size={18} style={{ color: 'var(--color-state-done)' }} />
            <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)', fontWeight: 600 }}>
              Módulo de Idiomas: {gateResult.isReadyForFullBuild ? 'Criterios de Madurez Verificados (5/5)' : 'En evaluación'}
            </span>
          </div>
          <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)' }}>
            Enfoque: Alemán A1 & Inglés Técnico Laboral
          </span>
        </div>

        {activeTab === 'habit' && <GermanLearningHub />}

        {/* TAB 2: VOCABULARIO Y REPASO ESPACIADO */}
        {activeTab === 'vocab' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
              Tarjetas de Vocabulario Alemán A1 (Recuperación Espaciada)
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
              {vocabList.map((item) => (
                <div key={item.id} style={{ background: 'var(--surface)', border: '1px solid var(--color-border-visible)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ background: 'var(--color-accent-primary-soft)', color: 'var(--color-accent-primary)', padding: '2px 6px', borderRadius: '4px', fontSize: 'var(--font-size-meta)', fontWeight: 700 }}>
                      {item.grammarCategory} · {item.cefrLevel}
                    </span>
                    <Languages size={16} style={{ color: 'var(--text-tertiary)' }} />
                  </div>
                  <strong style={{ fontSize: '1.2rem', color: 'var(--text)' }}>
                    {item.term}
                  </strong>
                  <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-accent-warning)' }}>
                    Traducción: {item.translationEs}
                  </span>
                  <p style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)', fontStyle: 'italic', margin: '4px 0 0' }}>
                    "{item.exampleSentence}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TUTOR CONVERSACIONAL IA */}
        {activeTab === 'tutor' && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-visible)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div>
              <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                PRÁCTICA Y FEEDBACK GRAMATICAL A1
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text)' }}>
                Tutor Conversacional (Alemán A1)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <label style={{ fontSize: 'var(--font-size-label)', color: 'var(--text)', fontWeight: 600 }}>
                Escribe una oración corta en alemán para corrección:
              </label>
              <input
                type="text"
                value={practiceAttempt}
                onChange={(e) => setPracticeAttempt(e.target.value)}
                placeholder="Ejemplo: Ich arbeite heute als entwickler..."
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  color: 'var(--text)',
                  border: '1px solid var(--color-border-visible)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'var(--space-sm)',
                  fontSize: 'var(--font-size-body)',
                  fontFamily: 'var(--font-family-system)'
                }}
              />

              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <Button variant="primary" size="sm" onClick={handleSimulatePractice}>
                  <BookOpen size={16} /> Enviar Frase para Feedback
                </Button>
                <ContextualAIActionButton
                  label="Explicar progreso"
                  actionType="explain_progress"
                  contextData={{ lang: 'de', level: 'A1' }}
                  sources={['German Learning Hub', 'Vocab Cards']}
                />
              </div>

              {tutorFeedback && (
                <div style={{ background: 'var(--color-accent-primary-soft)', border: '1px solid var(--color-accent-primary)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)', color: 'var(--text)', fontSize: 'var(--font-size-body)', marginTop: 'var(--space-xs)' }}>
                  {tutorFeedback}
                </div>
              )}
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
    </ErrorBoundary>
  );
}
