import React, { useState } from 'react';
import { Dumbbell, BookOpen, BarChart3, LibraryBig, Activity, Database, Wrench } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';
import FitAppWorkoutLogger from './FitAppWorkoutLogger';
import FitAppRoutinesCatalog from './FitAppRoutinesCatalog';
import CalisthenicsLearningHub from './CalisthenicsLearningHub';
import ExerciseDatabaseBrowser from './ExerciseDatabaseBrowser';
import CustomRoutineBuilder from './CustomRoutineBuilder';
import FitAppAnalyticsDashboard from './FitAppAnalyticsDashboard';
import TendonLoadMonitor from './TendonLoadMonitor';
import LibraryPage from '../library/LibraryPage';
import styles from './FitnessTabWorkspace.module.css';

export default function FitnessTabWorkspace() {
  const [activeMainTab, setActiveMainTab] = useState<'today' | 'routines' | 'progress' | 'library'>('today');
  const [routinesSubTab, setRoutinesSubTab] = useState<'catalog' | 'calisthenics' | 'database' | 'custom'>('catalog');

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        {/* NAVEGACIÓN PRINCIPAL DE 4 DESTINOS (HOY | RUTINAS | PROGRESO | BIBLIOTECA) */}
        <div className={styles.tabList} role="tablist" aria-label="Secciones de Fitness">
          <button
            type="button"
            role="tab"
            aria-selected={activeMainTab === 'today'}
            className={`${styles.tabButton} ${activeMainTab === 'today' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveMainTab('today')}
          >
            <Dumbbell size={18} aria-hidden="true" />
            <span>Hoy</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeMainTab === 'routines'}
            className={`${styles.tabButton} ${activeMainTab === 'routines' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveMainTab('routines')}
          >
            <BookOpen size={18} aria-hidden="true" />
            <span>Rutinas</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeMainTab === 'progress'}
            className={`${styles.tabButton} ${activeMainTab === 'progress' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveMainTab('progress')}
          >
            <BarChart3 size={18} aria-hidden="true" />
            <span>Progreso</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeMainTab === 'library'}
            className={`${styles.tabButton} ${activeMainTab === 'library' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveMainTab('library')}
          >
            <LibraryBig size={18} aria-hidden="true" />
            <span>Biblioteca</span>
          </button>
        </div>

        {/* CONTENIDO DE LOS DESTINOS */}
        <div className={styles.tabPanel}>
          {/* HOY -> TRACKER ACTIVO EN VIVO */}
          {activeMainTab === 'today' && <FitAppWorkoutLogger />}

          {/* RUTINAS -> CATÁLOGO + SUB-VISTAS SECUNDARIAS */}
          {activeMainTab === 'routines' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div className={styles.subSectionNav}>
                <button
                  type="button"
                  className={`${styles.subSectionButton} ${routinesSubTab === 'catalog' ? styles.subSectionButtonActive : ''}`}
                  onClick={() => setRoutinesSubTab('catalog')}
                >
                  <BookOpen size={15} /> Catálogo Oficial
                </button>
                <button
                  type="button"
                  className={`${styles.subSectionButton} ${routinesSubTab === 'calisthenics' ? styles.subSectionButtonActive : ''}`}
                  onClick={() => setRoutinesSubTab('calisthenics')}
                >
                  <Activity size={15} /> Calistenia & Progresiones
                </button>
                <button
                  type="button"
                  className={`${styles.subSectionButton} ${routinesSubTab === 'database' ? styles.subSectionButtonActive : ''}`}
                  onClick={() => setRoutinesSubTab('database')}
                >
                  <Database size={15} /> Base de Ejercicios
                </button>
                <button
                  type="button"
                  className={`${styles.subSectionButton} ${routinesSubTab === 'custom' ? styles.subSectionButtonActive : ''}`}
                  onClick={() => setRoutinesSubTab('custom')}
                >
                  <Wrench size={15} /> Creador
                </button>
              </div>

              {routinesSubTab === 'catalog' && <FitAppRoutinesCatalog />}
              {routinesSubTab === 'calisthenics' && <CalisthenicsLearningHub />}
              {routinesSubTab === 'database' && <ExerciseDatabaseBrowser />}
              {routinesSubTab === 'custom' && <CustomRoutineBuilder />}
            </div>
          )}

          {/* PROGRESO -> ANALÍTICA + MONITOR DE CARGA ARTICULAR */}
          {activeMainTab === 'progress' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <TendonLoadMonitor />
              <FitAppAnalyticsDashboard />
            </div>
          )}

          {/* BIBLIOTECA -> VISOR DE BIBLIOTECA FILTRADO A FITNESS */}
          {activeMainTab === 'library' && <LibraryPage initialDomain="fitness" />}
        </div>
      </div>
    </ErrorBoundary>
  );
}
