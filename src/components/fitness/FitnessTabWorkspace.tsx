import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import FitAppWorkoutLogger from './FitAppWorkoutLogger';
import FitAppAnalyticsDashboard from './FitAppAnalyticsDashboard';
import CustomRoutineBuilder from './CustomRoutineBuilder';
import FitAppRoutinesCatalog from './FitAppRoutinesCatalog';
import ExerciseDatabaseBrowser from './ExerciseDatabaseBrowser';
import PrehabSkillView from './PrehabSkillView';
import BooksLibraryView from './BooksLibraryView';
import DomainDocAccordion from '../docs/DomainDocAccordion';
import { typo } from '../../styles/typography';

const fitnessDocsList = [
  { name: 'Overcoming Gravity 2nd Ed', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/Overcoming Gravity...', description: 'Manual técnico de calistenia y progresiones por Steven Low' },
  { name: 'Overcoming Tendonitis', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/overcoming-tendonitis...', description: 'Tratamiento de tendinopatías e isométricos HSR' },
  { name: 'The Min-Max Program', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/The_Min-Max_Program...', description: 'Programa Nippard 12 semanas bajo volumen alta intensidad' },
  { name: 'plan_fitness.md', type: 'Markdown', path: '_pdf_biblia/Planeacion_Integral/investigacion/plan_fitness.md', description: 'Plan de calistenia híbrida y rehabilitación de Alexander' }
];

const TABS = [
  { id: 'logger', label: '⚡ Tracker' },
  { id: 'analytics', label: '📊 Analítica' },
  { id: 'custom', label: '🛠️ Creador' },
  { id: 'routines', label: '📋 Rutinas' },
  { id: 'database', label: '🏋️ Ejercicios' },
  { id: 'prehab', label: '🤸 Prehab' },
  { id: 'books', label: '📖 Libros' }
];

export default function FitnessTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('logger');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* APPLE SEGMENTED CONTROL BAR (STICKY BELOW HEADER) */}
        <div style={{
          position: 'sticky',
          top: '68px',
          zIndex: 85,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
          background: 'var(--color-surface-base)',
          backdropFilter: 'blur(30px) saturate(190%)',
          WebkitBackdropFilter: 'blur(30px) saturate(190%)',
          padding: '6px',
          borderRadius: '18px',
          border: '1px solid var(--color-border-visible)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
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
                  ...typo.label,
                  background: isSelected ? 'var(--color-state-done)' : 'transparent',
                  color: isSelected ? '#ffffff' : 'var(--color-text-tertiary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 3px 12px var(--color-state-done-soft)' : 'none',
                  transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* SUBSECTION CONTENT WITH SMOOTH FADE-IN */}
        <div key={activeTab} style={{ minHeight: '500px', animation: 'fadeIn 180ms ease-out' }}>
          {activeTab === 'logger' && <FitAppWorkoutLogger />}
          {activeTab === 'analytics' && <FitAppAnalyticsDashboard />}
          {activeTab === 'custom' && <CustomRoutineBuilder />}
          {activeTab === 'routines' && <FitAppRoutinesCatalog />}
          {activeTab === 'database' && <ExerciseDatabaseBrowser />}
          {activeTab === 'prehab' && <PrehabSkillView />}
          {activeTab === 'books' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <BooksLibraryView />
              <DomainDocAccordion
                domainTitle="Fitness & Rehabilitación"
                domainColor="var(--color-state-done)"
                categoryFilter="fitness"
                sourceDocsList={fitnessDocsList}
              />
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
