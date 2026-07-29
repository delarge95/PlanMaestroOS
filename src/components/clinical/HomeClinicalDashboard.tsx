import React, { useState } from 'react';
import ClinicalCurrentBlockPanel from './ClinicalCurrentBlockPanel';
import FocusCard from './FocusCard';
import SecondBrainInspector from '../docs/SecondBrainInspector';
import FocusModeShell from './FocusModeShell';
import ErrorBoundary from '../ErrorBoundary';
import { typo } from '../../styles/typography';
import { useAppStore } from '../../store/appStore';
import Button from '../ui/Button';
import styles from './HomeClinicalDashboard.module.css';

import ClinicalUncompletedTaskProtocol from './ClinicalUncompletedTaskProtocol';
import MorningEveningWorkflowsModal from './MorningEveningWorkflowsModal';

const TABS = [
  { id: 'now', label: '🎯 Ahora' },
  { id: 'rescue', label: '🛡️ Rescate' },
  { id: 'second_brain', label: '🧠 2º Cerebro' }
];

interface DailyTask {
  id: string;
  title: string;
  meta: string;
  status: 'active' | 'pending';
  done: boolean;
}

export default function HomeClinicalDashboard() {
  // AUDIT-08: Estado global persistente via Zustand
  const activeTab = useAppStore((state) => state.clinicalActiveTab);
  const setActiveTab = useAppStore((state) => state.setClinicalActiveTab);
  const isFocusActive = useAppStore((state) => state.isFocusActive);
  const setIsFocusActive = useAppStore((state) => state.setFocusActive);
  const currentEnergy = useAppStore((state) => state.currentEnergy);
  const setCurrentEnergy = useAppStore((state) => state.setCurrentEnergy);

  // UI-only states: no necesitan persistir entre sesiones
  const [workflowMode, setWorkflowMode] = useState<'morning' | 'evening' | null>(null);
  const [showToolsDrawer, setShowToolsDrawer] = useState(false);
  const [showPrinciples, setShowPrinciples] = useState(false);
  const [deferredUntil, setDeferredUntil] = useState<string | null>(null);
  const [completionFlash, setCompletionFlash] = useState(false);
  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>([
    { id: 'twinsight', title: 'TwinSight MVP & Tesis', meta: 'Bloque A · 09:20 - 11:40', status: 'active', done: false },
    { id: 'cbt', title: 'Ensayo Sustentación CBT', meta: 'Exposición · 14:00 - 14:40', status: 'pending', done: false },
    { id: 'german', title: 'Alemán A1 Diario', meta: '13:30 - 14:00 · 25 min', status: 'pending', done: false }
  ]);

  const handleTaskToggle = (taskId: string) => {
    setDailyTasks((previousTasks) => {
      const targetTask = previousTasks.find((task) => task.id === taskId);
      const nextTasks = previousTasks.map((task) => (
        task.id === taskId ? { ...task, done: !task.done } : task
      ));
      if (targetTask && !targetTask.done) {
        setCompletionFlash(true);
        window.setTimeout(() => setCompletionFlash(false), 1200);
      }
      return nextTasks;
    });
  };

  // AUDIT-07: Defer action stores reentry time
  const handleDeferFocus = () => {
    const reentryAt = new Date(Date.now() + 30 * 60 * 1000);
    setDeferredUntil(reentryAt.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
    setIsFocusActive(false);
  };

  return (
    <ErrorBoundary>
      <FocusModeShell isActive={isFocusActive} onExit={() => setIsFocusActive(false)}>
        <div className={styles.wrapper}>

          {/* AUDIT-04: Breadcrumb contextual */}
          <p className={styles.breadcrumb}>Plan Maestro → Clínica</p>

          {/* AUDIT-04: Tab bar with key transitions */}
          <div className={styles.tabBar}>
            {TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tabBtn} ${isSelected ? styles.tabBtnActive : ''}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Toolbar: Herramientas + nivel de energía */}
          <div className={styles.toolbarRow}>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setShowToolsDrawer((previous) => !previous)}
              aria-label="Abrir herramientas del día"
            >
              ⚙️ Herramientas {showToolsDrawer ? '▲' : '▼'}
            </Button>

            <span style={{ ...typo.label, color: 'var(--color-text-tertiary)' }}>
              Energía: <strong style={{ color: 'var(--color-text-primary)', textTransform: 'capitalize' }}>{currentEnergy}</strong>
            </span>
          </div>

          {/* AUDIT-07: Defer banner con tiempo de reentrada */}
          {deferredUntil && (
            <div className={styles.deferBanner}>
              ⏳ Reentrada sugerida a las <strong>{deferredUntil}</strong>. Escribe la primera acción de 2 minutos antes de volver.
            </div>
          )}

          {/* AUDIT-08: Herramientas como drawer/modal accesible */}
          {showToolsDrawer && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Herramientas del día"
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 200,
                background: 'rgba(0, 0, 0, 0.58)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                padding: 'var(--space-lg)'
              }}
              onClick={() => setShowToolsDrawer(false)}
            >
              <div
                style={{
                  width: 'min(760px, 100%)',
                  background: 'var(--color-surface-base)',
                  border: '1px solid var(--color-border-visible)',
                  borderRadius: '20px',
                  padding: 'var(--space-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-md)',
                  boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6)'
                }}
                onClick={(event) => event.stopPropagation()}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-md)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ ...typo.display, margin: 0, color: 'var(--color-text-primary)' }}>Herramientas del día</h3>
                    <p style={{ ...typo.label, marginTop: 'var(--space-xs)', color: 'var(--color-text-secondary)' }}>
                      Workflow, energía y salida rápida.
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowToolsDrawer(false)} aria-label="Cerrar herramientas">Cerrar</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <span style={{ ...typo.label, color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>Nivel de energía</span>
                  <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                    {(['high', 'medium', 'low', 'crisis'] as const).map((level) => (
                      <Button key={level} variant={currentEnergy === level ? 'primary' : 'secondary'} size="sm" onClick={() => setCurrentEnergy(level)}>
                        {level === 'crisis' ? '⚠ Crisis' : level === 'high' ? '⚡ Alta' : level === 'medium' ? '○ Media' : '▽ Baja'}
                      </Button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                  <Button variant="secondary" size="md" onClick={() => { setWorkflowMode('morning'); setShowToolsDrawer(false); }}>
                    🌅 Modo Inicio
                  </Button>
                  <Button variant="ghost" size="md" onClick={() => { setWorkflowMode('evening'); setShowToolsDrawer(false); }}>
                    🌙 Modo Cierre
                  </Button>
                </div>
              </div>
            </div>
          )}

          <MorningEveningWorkflowsModal
            mode={workflowMode}
            onClose={() => setWorkflowMode(null)}
            onSelectEnergy={(level) => setCurrentEnergy(level)}
          />

          {/* AUDIT-07: Completion flash overlay */}
          {completionFlash && <div className="task-complete-feedback">✓</div>}

          {/* AUDIT-04: Tab content with key for fade transition */}
          {activeTab === 'now' && (
            <div key="now" className={styles.tabContent}>
              {/* AUDIT-07 Paso 1: FocusCard hero */}
              <FocusCard
                taskName="TwinSight MVP & Tesis Cierre"
                blockEndsAt="11:40"
                onStart={() => setIsFocusActive(true)}
                onDefer={handleDeferFocus}
                deferredUntil={deferredUntil}
              />

              <ClinicalCurrentBlockPanel
                isFocusModeActive={isFocusActive}
                onToggleFocusMode={() => setIsFocusActive(!isFocusActive)}
              />

              {/* Tareas del día */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div className={styles.taskCard}>
                  <div className={styles.taskCardHeader}>
                    <h3 style={{ ...typo.display, margin: 0, color: 'var(--color-text-primary)' }}>Tareas del día</h3>
                    <span style={{ ...typo.micro, color: 'var(--color-accent-primary)', background: 'var(--color-accent-primary-soft)', padding: 'var(--space-xs) var(--space-sm)', borderRadius: '999px' }}>
                      Hoy: 3 tareas
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    {dailyTasks.map((task, index) => (
                      <button
                        key={task.id}
                        type="button"
                        onClick={() => handleTaskToggle(task.id)}
                        className={`${styles.taskItem} ${task.status === 'active' && !task.done ? styles.taskItemActive : ''} ${task.done ? styles.taskItemDone : ''}`}
                      >
                        <div>
                          <strong style={{ ...typo.body, fontWeight: 600, color: 'var(--color-text-primary)', display: 'block' }}>
                            {index + 1}. {task.title}
                          </strong>
                          <span style={{ ...typo.label, color: task.status === 'active' && !task.done ? 'var(--color-accent-primary)' : 'var(--color-text-secondary)' }}>
                            {task.meta}
                          </span>
                        </div>
                        <span style={{
                          ...typo.micro,
                          color: task.done ? 'var(--color-state-done)' : task.status === 'active' ? 'var(--color-accent-primary)' : 'var(--color-text-tertiary)',
                          background: task.done ? 'var(--color-state-done-soft)' : task.status === 'active' ? 'var(--color-accent-primary-soft)' : 'rgba(255,255,255,0.06)',
                          padding: 'var(--space-xs) var(--space-sm)',
                          borderRadius: '999px'
                        }}>
                          {task.done ? 'Hecha' : task.status === 'active' ? 'Activa' : 'Pendiente'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recordatorios colapsables */}
                <button
                  type="button"
                  onClick={() => setShowPrinciples((previous) => !previous)}
                  className={styles.collapseBtn}
                >
                  <span>🧠 Recordatorios</span>
                  <span>{showPrinciples ? '▲' : '▼'}</span>
                </button>

                {showPrinciples && (
                  <div className={styles.principlesPanel}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', ...typo.body, color: 'var(--color-text-secondary)' }}>
                      <div className={styles.principleItem} style={{ borderLeft: '3px solid var(--color-state-done)' }}>
                        <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>Suficientemente terminado &gt; Ideal:</strong>
                        Cierra cuando cumpla el criterio mínimo, sin refinar indefinidamente.
                      </div>
                      <div className={styles.principleItem} style={{ borderLeft: '3px solid var(--color-accent-primary)' }}>
                        <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>El descanso no se gana:</strong>
                        El sueño y el ocio son parte de la salud mental, no un premio al rendimiento.
                      </div>
                      <div className={styles.principleItem} style={{ borderLeft: '3px solid var(--color-accent-warning)' }}>
                        <strong style={{ color: 'var(--color-text-primary)', display: 'block' }}>Paso de reentrada escrito:</strong>
                        Antes de levantarte, deja escrita la primera acción exacta de 2 min.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'rescue' && (
            <div key="rescue" className={styles.tabContent}>
              <ClinicalUncompletedTaskProtocol />
            </div>
          )}

          {activeTab === 'second_brain' && (
            <div key="second_brain" className={styles.tabContent}>
              <SecondBrainInspector />
            </div>
          )}

        </div>
      </FocusModeShell>
    </ErrorBoundary>
  );
}
