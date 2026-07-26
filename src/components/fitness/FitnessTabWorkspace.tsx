import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import FitAppWorkoutLogger from './FitAppWorkoutLogger';
import CustomRoutineBuilder from './CustomRoutineBuilder';
import MinMaxRoutineTable from './MinMaxRoutineTable';
import ExerciseDatabaseBrowser from './ExerciseDatabaseBrowser';
import PrehabSkillView from './PrehabSkillView';
import BooksLibraryView from './BooksLibraryView';
import DomainDocAccordion from '../docs/DomainDocAccordion';

const fitnessDocsList = [
  { name: 'Overcoming Gravity 2nd Ed', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/Overcoming Gravity...', description: 'Manual técnico de calistenia y progresiones por Steven Low' },
  { name: 'Overcoming Tendonitis', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/overcoming-tendonitis...', description: 'Tratamiento de tendinopatías e isométricos HSR' },
  { name: 'The Min-Max Program', type: 'PDF', path: '_pdf_biblia/Planeacion_Integral/investigacion/The_Min-Max_Program...', description: 'Programa Nippard 12 semanas bajo volumen alta intensidad' },
  { name: 'plan_fitness.md', type: 'Markdown', path: '_pdf_biblia/Planeacion_Integral/investigacion/plan_fitness.md', description: 'Plan de calistenia híbrida y rehabilitación de Alexander' }
];

import FitAppAnalyticsDashboard from './FitAppAnalyticsDashboard';

const TABS = [
  { id: 'logger', label: '⚡ Sesión en Vivo & Tracker' },
  { id: 'analytics', label: '📊 Analítica Integrada & Progresión' },
  { id: 'custom', label: '🛠️ Creador de Rutinas' },
  { id: 'minmax', label: '📋 Programa Min-Max (Nippard)' },
  { id: 'database', label: '🏋️ Base de Datos 150+ Ejercicios' },
  { id: 'prehab', label: '🤸 Prehab & Movilidad' },
  { id: 'books', label: '📖 Libros & Fuentes PDF' }
];

export default function FitnessTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('logger');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
          {activeTab === 'logger' && <FitAppWorkoutLogger />}
          {activeTab === 'analytics' && <FitAppAnalyticsDashboard />}
          {activeTab === 'custom' && <CustomRoutineBuilder />}
          {activeTab === 'minmax' && <MinMaxRoutineTable />}
          {activeTab === 'database' && <ExerciseDatabaseBrowser />}
          {activeTab === 'prehab' && <PrehabSkillView />}
          {activeTab === 'books' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <BooksLibraryView />
              <DomainDocAccordion
                domainTitle="Fitness & Rehabilitación"
                domainColor="#30d158"
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
