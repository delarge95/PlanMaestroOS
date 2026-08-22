import React, { useEffect, useState } from 'react';
import { Dumbbell, BookOpen, BarChart3, LibraryBig, Target, Database, Wrench, ShieldAlert } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';
import FitAppWorkoutLogger from './FitAppWorkoutLogger';
import FitAppRoutinesCatalog from './FitAppRoutinesCatalog';
import SkillsWorkspace from './skills/SkillsWorkspace';
import ExerciseDatabaseBrowser from './ExerciseDatabaseBrowser';
import CustomRoutineBuilder from './CustomRoutineBuilder';
import FitAppAnalyticsDashboard from './FitAppAnalyticsDashboard';
import TendonLoadMonitor from './TendonLoadMonitor';
import TodayCalendar from './TodayCalendar';
import ActiveProgressionsTodayCard from './skills/ActiveProgressionsTodayCard';
import LibraryHome from '../library/LibraryHome';
import styles from './FitnessTabWorkspace.module.css';
import useIsMobile from '../ui/useIsMobile';
import { usePrehabStateStore, getActivePrehabProtocols, isBannerDismissedToday } from '../../data/fitness/prehabStateStore';

export type FitnessMainTab = 'today' | 'routines' | 'progress' | 'library';

export interface FitnessTabWorkspaceProps {
  initialTab?: FitnessMainTab;
}

const VALID_TABS: FitnessMainTab[] = ['today', 'routines', 'progress', 'library'];

function resolveInitialTab(fallback: FitnessMainTab): FitnessMainTab {
  if (typeof window === 'undefined') return fallback;
  const param = new URLSearchParams(window.location.search).get('tab');
  return VALID_TABS.includes(param as FitnessMainTab) ? (param as FitnessMainTab) : fallback;
}

export default function FitnessTabWorkspace({ initialTab = 'today' }: FitnessTabWorkspaceProps) {
  const isMobile = useIsMobile();
  const [activeMainTab, setActiveMainTab] = useState<FitnessMainTab>(() => resolveInitialTab(initialTab));
  const [routinesSubTab, setRoutinesSubTab] = useState<'catalog' | 'skills' | 'database' | 'custom'>('catalog');

  // A5: banner de prehab DERIVADO de estado persistido (fitapp-prehab-state-v1),
  // copy desde prehabProtocols; cierre persistido por día (no flag local).
  const prehabZones = usePrehabStateStore((s2) => s2.activeZoneIds);
  const prehabDismissedOn = usePrehabStateStore((s2) => s2.bannerDismissedOn);
  const dismissPrehabBanner = usePrehabStateStore((s2) => s2.dismissBannerToday);
  const activePrehabProtocols = getActivePrehabProtocols(prehabZones);
  const showPrehabAlert = activePrehabProtocols.length > 0 && !isBannerDismissedToday(prehabDismissedOn);

  // Sincroniza el tab cuando cambia el parámetro ?tab= de la URL (redirecciones / links)
  useEffect(() => {
    const onPopState = () => setActiveMainTab(resolveInitialTab(initialTab));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [initialTab]);

  const goToTab = (tab: FitnessMainTab) => {
    setActiveMainTab(tab);
    if (typeof window !== 'undefined' && window.history?.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tab);
      window.history.replaceState({}, '', url.toString());
    }
  };

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
                {activePrehabProtocols.length === 1
                  ? `Prehab activo (${activePrehabProtocols[0].zoneTitle}): ${activePrehabProtocols[0].protocolTitle} antes de la sesión — ${activePrehabProtocols[0].recommendedDose}.`
                  : `Prehab activo: ${activePrehabProtocols.map((pr) => `${pr.zoneTitle} → ${pr.protocolTitle}`).join(' · ')}`}
              </span>
            </div>

            <button
              type="button"
              onClick={dismissPrehabBanner}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-tertiary)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-meta)',
                fontWeight: 600
              }}
            >
              Cerrar
            </button>
          </div>
        )}

        {/* NAVEGACIÓN PRINCIPAL: desktop botones, móvil desplegable */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="fitness-main-tab" style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }}>
              Sección
            </label>
            <select
              id="fitness-main-tab"
              value={activeMainTab}
              onChange={(e) => goToTab(e.target.value as FitnessMainTab)}
              style={{
                minHeight: '44px',
                borderRadius: 'var(--radius-m)',
                border: '1px solid var(--color-border-visible)',
                background: 'var(--surface-1)',
                color: 'var(--text-primary)',
                padding: '10px 12px',
                fontSize: 'var(--fs-body)'
              }}
            >
              <option value="today">Hoy</option>
              <option value="routines">Rutinas</option>
              <option value="progress">Progreso</option>
              <option value="library">Biblioteca</option>
            </select>
          </div>
        ) : (
          <div className={styles.tabList} role="tablist" aria-label="Secciones de Fitness">
            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'today'}
              className={`${styles.tabButton} ${activeMainTab === 'today' ? styles.tabButtonActive : ''}`}
              onClick={() => goToTab('today')}
            >
              <Dumbbell size={18} aria-hidden="true" />
              <span>Hoy</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'routines'}
              className={`${styles.tabButton} ${activeMainTab === 'routines' ? styles.tabButtonActive : ''}`}
              onClick={() => goToTab('routines')}
            >
              <BookOpen size={18} aria-hidden="true" />
              <span>Rutinas</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'progress'}
              className={`${styles.tabButton} ${activeMainTab === 'progress' ? styles.tabButtonActive : ''}`}
              onClick={() => goToTab('progress')}
            >
              <BarChart3 size={18} aria-hidden="true" />
              <span>Progreso</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'library'}
              className={`${styles.tabButton} ${activeMainTab === 'library' ? styles.tabButtonActive : ''}`}
              onClick={() => goToTab('library')}
            >
              <LibraryBig size={18} aria-hidden="true" />
              <span>Biblioteca</span>
            </button>
          </div>
        )}

        {/* CONTENIDO DE LOS DESTINOS */}
        <div className={styles.tabPanel}>
          {activeMainTab === 'today' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {/* CRONOGRAMA SEMANAL (fecha real del sistema, sincronizado con el programa activo) */}
              <TodayCalendar selectedDayIndex={undefined} onSelectDayIndex={undefined} />
              {/* PROGRESIÓN ACTIVA EN TRABAJO */}
              <ActiveProgressionsTodayCard />
              <FitAppWorkoutLogger />
            </div>
          )}

          {activeMainTab === 'routines' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {isMobile ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="fitness-routines-tab" style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }}>
                    Vista
                  </label>
                  <select
                    id="fitness-routines-tab"
                    value={routinesSubTab}
                    onChange={(e) => setRoutinesSubTab(e.target.value as 'catalog' | 'skills' | 'database' | 'custom')}
                    style={{
                      minHeight: '44px',
                      borderRadius: 'var(--radius-m)',
                      border: '1px solid var(--color-border-visible)',
                      background: 'var(--surface-1)',
                      color: 'var(--text-primary)',
                      padding: '10px 12px',
                      fontSize: 'var(--fs-body)'
                    }}
                  >
                    <option value="catalog">Catálogo</option>
                    <option value="skills">Habilidades</option>
                    <option value="database">Ejercicios</option>
                    <option value="custom">Creador</option>
                  </select>
                </div>
              ) : (
                <div className={styles.subSectionNav}>
                  <button
                    type="button"
                    className={`${styles.subSectionButton} ${routinesSubTab === 'catalog' ? styles.subSectionButtonActive : ''}`}
                    onClick={() => setRoutinesSubTab('catalog')}
                  >
                    <BookOpen size={15} /> Catálogo
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
                    <Database size={15} /> Ejercicios
                  </button>
                  <button
                    type="button"
                    className={`${styles.subSectionButton} ${routinesSubTab === 'custom' ? styles.subSectionButtonActive : ''}`}
                    onClick={() => setRoutinesSubTab('custom')}
                  >
                    <Wrench size={15} /> Creador
                  </button>
                </div>
              )}

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
