import React, { useState } from 'react';
import { Dumbbell, BookOpen, BarChart3, LibraryBig, Target, Database, Wrench, ShieldAlert } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';
import FitAppWorkoutLogger from './FitAppWorkoutLogger';
import FitAppRoutinesCatalog from './FitAppRoutinesCatalog';
import SkillsWorkspace from './skills/SkillsWorkspace';
import ExerciseDatabaseBrowser from './ExerciseDatabaseBrowser';
import CustomRoutineBuilder from './CustomRoutineBuilder';
import FitAppAnalyticsDashboard from './FitAppAnalyticsDashboard';
import TendonLoadMonitor from './TendonLoadMonitor';
import LibraryHome from '../library/LibraryHome';
import styles from './FitnessTabWorkspace.module.css';

export interface FitnessTabWorkspaceProps {
  initialTab?: 'today' | 'routines' | 'progress' | 'library';
}

export default function FitnessTabWorkspace({ initialTab = 'today' }: FitnessTabWorkspaceProps) {
  const [activeMainTab, setActiveMainTab] = useState<'today' | 'routines' | 'progress' | 'library'>(initialTab);
  const [routinesSubTab, setRoutinesSubTab] = useState<'catalog' | 'skills' | 'database' | 'custom'>('catalog');
  const [showPrehabAlert, setShowPrehabAlert] = useState(true);

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        
        {/* PREHAB CONDICIONAL (SI HAY MOLESTIA/ZONA AFECTADA REGISTRADA, APARECE PRIMERO PER D1) */}
        {showPrehabAlert && activeMainTab === 'today' && (
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--color-accent-warning)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-sm) var(--space-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
              <ShieldAlert size={18} style={{ color: 'var(--color-accent-warning)' }} />
              <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)', fontWeight: 600 }}>
                Prehab Activo: Protocolo Isométricos Spanish Squats (Rodillas) antes de la sesión.
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowPrehabAlert(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-tertiary)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-meta)',
                fontWeight: 600
              }}
            >
              Entendido ✕
            </button>
          </div>
        )}

        {/* NAVEGACIÓN PRINCIPAL (HOY | RUTINAS | PROGRESO | BIBLIOTECA) */}
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
          {activeMainTab === 'today' && <FitAppWorkoutLogger />}

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
                  className={`${styles.subSectionButton} ${routinesSubTab === 'skills' ? styles.subSectionButtonActive : ''}`}
                  onClick={() => setRoutinesSubTab('skills')}
                >
                  <Target size={15} /> Habilidades
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
              {routinesSubTab === 'skills' && <SkillsWorkspace />}
              {routinesSubTab === 'database' && <ExerciseDatabaseBrowser />}
              {routinesSubTab === 'custom' && <CustomRoutineBuilder />}
            </div>
          )}

          {activeMainTab === 'progress' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <TendonLoadMonitor />
              <FitAppAnalyticsDashboard />
            </div>
          )}

          {activeMainTab === 'library' && <LibraryHome />}
        </div>
      </div>
    </ErrorBoundary>
  );
}
