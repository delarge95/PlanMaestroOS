import React, { useState, useRef } from 'react';
import { Settings2, ArrowLeft, ShieldAlert, BookOpen, Leaf } from 'lucide-react';
import FocusCard from './FocusCard';
import SecondBrainInspector from '../docs/SecondBrainInspector';
import FocusModeShell from './FocusModeShell';
import ErrorBoundary from '../ErrorBoundary';
import { useAppStore } from '../../store/appStore';
import Button from '../ui/Button';
import ListRow from '../ui/ListRow';
import Sheet from '../ui/Sheet';
import Menu from '../ui/Menu';
import Disclosure from '../ui/Disclosure';
import Toast from '../ui/Toast';
import ClinicalUncompletedTaskProtocol from './ClinicalUncompletedTaskProtocol';
import MorningEveningWorkflowsModal from './MorningEveningWorkflowsModal';
import styles from './HomeClinicalDashboard.module.css';

interface NextTask {
  id: string;
  title: string;
  meta: string;
  done: boolean;
}

export default function HomeClinicalDashboard() {
  const toolsButtonRef = useRef<HTMLButtonElement>(null);

  // Zustand global state
  const isFocusActive = useAppStore((state) => state.isFocusActive);
  const setIsFocusActive = useAppStore((state) => state.setFocusActive);
  const currentEnergy = useAppStore((state) => state.currentEnergy);
  const setCurrentEnergy = useAppStore((state) => state.setCurrentEnergy);
  const isSimpleMode = useAppStore((state) => state.isSimpleMode);
  const toggleSimpleMode = useAppStore((state) => state.toggleSimpleMode);

  // Local UI state
  const [showToolsSheet, setShowToolsSheet] = useState(false);
  const [sheetSubView, setSheetSubView] = useState<'main' | 'rescue' | 'second_brain'>('main');
  const [workflowMode, setWorkflowMode] = useState<'morning' | 'evening' | null>(null);
  const [deferredUntil, setDeferredUntil] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [nextTasks, setNextTasks] = useState<NextTask[]>([
    { id: 'cbt', title: 'Ensayo Sustentación CBT', meta: 'Exposición · 14:00 - 14:40', done: false },
    { id: 'german', title: 'Alemán A1 Diario', meta: '13:30 - 14:00 · 25 min', done: false }
  ]);

  const handleTaskToggle = (taskId: string) => {
    setNextTasks((prev) => prev.map((t) => {
      if (t.id === taskId) {
        const nextDone = !t.done;
        if (nextDone) setToastMessage('✓ Tarea completada sin culpa.');
        return { ...t, done: nextDone };
      }
      return t;
    }));
  };

  const handleDeferFocus = (minutes: number = 30) => {
    const reentryAt = new Date(Date.now() + minutes * 60 * 1000);
    const formatted = reentryAt.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    setDeferredUntil(formatted);
    setIsFocusActive(false);
    setToastMessage(`⏳ Tarea pospuesta ${minutes} min. Reentrada a las ${formatted}.`);
  };

  const handleCloseToolsSheet = () => {
    setShowToolsSheet(false);
    setSheetSubView('main');
    // Return focus to tools button
    setTimeout(() => {
      toolsButtonRef.current?.focus();
    }, 50);
  };

  const energyLabels: Record<string, string> = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja',
    crisis: 'Soporte / Bajar ritmo'
  };

  return (
    <ErrorBoundary>
      <FocusModeShell isActive={isFocusActive} onExit={() => setIsFocusActive(false)}>
        <div className={styles.wrapper}>

          {/* META CONTEXTUAL PEQUEÑA */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
            <div>
              <span className={styles.breadcrumb}>
                {new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short' })} · Bloque A (09:20 - 11:40)
              </span>
              <h1 style={{ fontSize: 'var(--font-size-title)', fontWeight: 700, margin: 'var(--space-1) 0 0', color: 'var(--text)' }}>
                Ahora
              </h1>
            </div>

            {/* BOTÓN HERRAMIENTAS MODERNO CON ICONO LUCIDE Settings2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <button
                ref={toolsButtonRef}
                type="button"
                onClick={() => { setSheetSubView('main'); setShowToolsSheet(true); }}
                aria-label="Abrir herramientas del día"
                style={{
                  background: 'var(--surface-elevated)',
                  border: '1px solid var(--color-border-visible)',
                  color: 'var(--text)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-label)',
                  fontWeight: 550,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  transition: 'all 150ms var(--ease-standard)',
                  outline: 'none'
                }}
                onFocus={(e) => { e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus)'; }}
                onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <Settings2 size={18} aria-hidden="true" style={{ color: 'var(--color-accent-primary)' }} />
                <span>Herramientas</span>
              </button>

              <Menu
                triggerLabel="Opciones de pantalla"
                items={[
                  {
                    id: 'simple_mode',
                    label: isSimpleMode ? 'Desactivar Modo Simple' : 'Activar Modo Simple',
                    icon: <Leaf size={16} />,
                    onClick: toggleSimpleMode
                  },
                  {
                    id: 'morning_workflow',
                    label: 'Modo Inicio (Mañana)',
                    icon: '🌅',
                    onClick: () => setWorkflowMode('morning')
                  },
                  {
                    id: 'evening_workflow',
                    label: 'Modo Cierre (Noche)',
                    icon: '🌙',
                    onClick: () => setWorkflowMode('evening')
                  }
                ]}
              />
            </div>
          </div>

          {/* BANNER APLAZAMIENTO NEUTRAL */}
          {deferredUntil && (
            <div className={styles.deferBanner}>
              ⏳ Tarea pausada sin culpa. Reentrada sugerida a las <strong>{deferredUntil}</strong>.
            </div>
          )}

          {/* 1. TAREA FOCAL (HERO) */}
          <FocusCard
            taskName="TwinSight MVP & Tesis Cierre"
            blockEndsAt="11:40"
            onStart={() => setIsFocusActive(true)}
            onDefer={() => handleDeferFocus(30)}
            deferredUntil={deferredUntil}
          />

          {/* 2. SECCIÓN "DESPUÉS" (MÁXIMO 2 ÍTEMS COMPACTOS) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <span style={{ fontSize: 'var(--font-size-label)', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Después (Siguientes 2 pasos)
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {nextTasks.slice(0, 2).map((task) => (
                <ListRow
                  key={task.id}
                  title={task.title}
                  meta={task.meta}
                  icon={task.done ? '✓' : '○'}
                  done={task.done}
                  badge={task.done ? 'Hecha' : 'Siguiente'}
                  badgeTone={task.done ? 'success' : 'default'}
                  onClick={() => handleTaskToggle(task.id)}
                />
              ))}
            </div>
          </div>

          {/* 3. RECORDATORIOS (TITULOS DE 1 LÍNEA CON DETALLE EN DISCLOSURE) */}
          {!isSimpleMode && (
            <Disclosure label="Recordatorios de regulación cognitiva" summary="3 principios">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <Disclosure label="Terminado es suficiente">
                  <p style={{ margin: 0, fontSize: 'var(--font-size-label)', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    Cierra la entrega cuando cumpla el criterio mínimo acordado, sin refinar ni sobre-analizar indefinidamente.
                  </p>
                </Disclosure>

                <Disclosure label="Descansar también cuenta">
                  <p style={{ margin: 0, fontSize: 'var(--font-size-label)', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    El descanso es un requisito fisiológico para la regulación ejecutiva y la memoria, no un premio al rendimiento.
                  </p>
                </Disclosure>

                <Disclosure label="Deja el próximo paso">
                  <p style={{ margin: 0, fontSize: 'var(--font-size-label)', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    Antes de levantarte de la mesa, deja escrita la primera acción exacta de 2 minutos para cuando retomes.
                  </p>
                </Disclosure>
              </div>
            </Disclosure>
          )}

          {/* SHEET DE HERRAMIENTAS CON NAVEGACIÓN INTERNA ANIDADA */}
          <Sheet
            isOpen={showToolsSheet}
            onClose={handleCloseToolsSheet}
            title={sheetSubView === 'main' ? 'Herramientas del Día' : sheetSubView === 'rescue' ? 'Herramientas / Rescate' : 'Herramientas / 2º Cerebro'}
            description={sheetSubView === 'main' ? 'Recursos de apoyo y regulación ejecutiva' : sheetSubView === 'rescue' ? 'Desbloqueo de inicio en 10 minutos sin compromiso' : 'Bóveda de notas e inspector de Obsidian'}
          >
            {sheetSubView === 'main' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                {/* NIVEL DE ENERGÍA SOBRIO */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                    <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                      Nivel de Energía Actual
                    </span>
                    <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)' }}>
                      Puedes volver a esto cuando quieras
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 'var(--space-2)' }}>
                    {(['high', 'medium', 'low', 'crisis'] as const).map((level) => (
                      <Button
                        key={level}
                        variant={currentEnergy === level ? 'primary' : 'secondary'}
                        size="sm"
                        onClick={() => setCurrentEnergy(level)}
                      >
                        {energyLabels[level]}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* ACCESOS A PANELES INTERNOS EN EL SHEET */}
                <div>
                  <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Herramientas de Asistencia
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <ListRow
                      title="Rescate de Inercia (10 Minutos)"
                      meta="Desbloqueo de inicio sin juicio ni compromiso"
                      icon={<ShieldAlert size={18} style={{ color: 'var(--color-accent-warning)' }} />}
                      onClick={() => setSheetSubView('rescue')}
                    />
                    <ListRow
                      title="Segundo Cerebro & Bóveda"
                      meta="Inspector de notas y contexto de Obsidian"
                      icon={<BookOpen size={18} style={{ color: 'var(--color-accent-primary)' }} />}
                      onClick={() => setSheetSubView('second_brain')}
                    />
                    <ListRow
                      title={isSimpleMode ? "Desactivar Modo Simple" : "Activar Modo Simple"}
                      meta="Reducir interfaz a 1 columna de baja estimulación"
                      icon={<Leaf size={18} style={{ color: 'var(--color-state-done)' }} />}
                      badge={isSimpleMode ? "Activo" : "Baja estimulación"}
                      badgeTone={isSimpleMode ? "success" : "default"}
                      onClick={() => { toggleSimpleMode(); handleCloseToolsSheet(); }}
                    />
                  </div>
                </div>
              </div>
            )}

            {sheetSubView === 'rescue' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSheetSubView('main')}
                  style={{ alignSelf: 'flex-start' }}
                >
                  <ArrowLeft size={16} /> Volver a Herramientas
                </Button>
                <ClinicalUncompletedTaskProtocol />
              </div>
            )}

            {sheetSubView === 'second_brain' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSheetSubView('main')}
                  style={{ alignSelf: 'flex-start' }}
                >
                  <ArrowLeft size={16} /> Volver a Herramientas
                </Button>
                <SecondBrainInspector />
              </div>
            )}
          </Sheet>

          {/* MODAL MAÑANA / NOCHE */}
          <MorningEveningWorkflowsModal
            mode={workflowMode}
            onClose={() => setWorkflowMode(null)}
            onSelectEnergy={(level) => setCurrentEnergy(level)}
          />

          {/* TOAST TRANSIENT FEEDBACK */}
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

        </div>
      </FocusModeShell>
    </ErrorBoundary>
  );
}
