import React, { useState } from 'react';
import { Dumbbell, BarChart3, Wrench, BookOpen, Database, Activity, LibraryBig } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';
import FitAppWorkoutLogger from './FitAppWorkoutLogger';
import FitAppAnalyticsDashboard from './FitAppAnalyticsDashboard';
import CustomRoutineBuilder from './CustomRoutineBuilder';
import FitAppRoutinesCatalog from './FitAppRoutinesCatalog';
import ExerciseDatabaseBrowser from './ExerciseDatabaseBrowser';
import CalisthenicsLearningHub from './CalisthenicsLearningHub';
import TendonLoadMonitor from './TendonLoadMonitor';
import BooksLibraryView from './BooksLibraryView';
import DomainDocAccordion from '../docs/DomainDocAccordion';

const fitnessDocsList = [
  { name: 'Overcoming Gravity 2nd Ed', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/Overcoming Gravity...', description: 'Manual técnico de calistenia y progresiones por Steven Low' },
  { name: 'Overcoming Tendonitis', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/overcoming-tendonitis...', description: 'Tratamiento de tendinopatías e isométricos HSR' },
  { name: 'The Min-Max Program', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/The_Min-Max_Program...', description: 'Programa Nippard 12 semanas bajo volumen alta intensidad' },
  { name: 'plan_fitness.md', type: 'Markdown', path: '_pdf_biblia/Planeacion_Integral/investigacion/plan_fitness.md', description: 'Plan de calistenia híbrida y rehabilitación de Alexander' }
];

const TABS = [
  { id: 'logger', label: 'Tracker Activo', icon: Dumbbell },
  { id: 'routines', label: 'Catálogo de Rutinas', icon: BookOpen },
  { id: 'calisthenics', label: 'Calistenia & Prehab', icon: Activity },
  { id: 'analytics', label: 'Analítica', icon: BarChart3 },
  { id: 'database', label: 'Base de Ejercicios', icon: Database },
  { id: 'custom', label: 'Creador', icon: Wrench },
  { id: 'books', label: 'Fuentes & Libros', icon: LibraryBig }
];

export default function FitnessTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('logger');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* CONTROL BAR STICKY ESTILO APPLE CON ICONOS LUCIDE */}
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
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-visible)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
          overflowX: 'auto',
          maxWidth: '100%'
        }}>
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: isSelected ? 'var(--color-accent-primary)' : 'transparent',
                  color: isSelected ? '#ffffff' : 'var(--text-tertiary)',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 150ms ease'
                }}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* SUBSECTION CONTENT */}
        <div key={activeTab} style={{ minHeight: '500px' }}>
          {activeTab === 'logger' && <FitAppWorkoutLogger />}
          {activeTab === 'routines' && <FitAppRoutinesCatalog />}
          {activeTab === 'calisthenics' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <TendonLoadMonitor />
              <CalisthenicsLearningHub />
            </div>
          )}
          {activeTab === 'analytics' && <FitAppAnalyticsDashboard />}
          {activeTab === 'database' && <ExerciseDatabaseBrowser />}
          {activeTab === 'custom' && <CustomRoutineBuilder />}
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
