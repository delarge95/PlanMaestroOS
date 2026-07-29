import React, { useState } from 'react';
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
  // Zustand global state
  const isFocusActive = useAppStore((state) => state.isFocusActive);
  const setIsFocusActive = useAppStore((state) => state.setFocusActive);
  const currentEnergy = useAppStore((state) => state.currentEnergy);
  const setCurrentEnergy = useAppStore((state) => state.setCurrentEnergy);
  const isSimpleMode = useAppStore((state) => state.isSimpleMode);
  const toggleSimpleMode = useAppStore((state) => state.toggleSimpleMode);

  // Local UI state
  const [showToolsSheet, setShowToolsSheet] = useState(false);
  const [activeToolPanel, setActiveToolPanel] = useState<'none' | 'rescue' | 'second_brain'>('none');
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowToolsSheet(true)}
                aria-label="Abrir herramientas del día"
              >
                ⚙️ Herramientas
              </Button>

              <Menu
                triggerLabel="Opciones de pantalla"
                items={[
                  {
                    id: 'simple_mode',
                    label: isSimpleMode ? 'Desactivar Modo Simple' : 'Activar Modo Simple',
                    icon: '🌱',
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

          {/* 3. RECORDATORIOS Y PRINCIPIOS TERAPÉUTICOS (SOLO BAJO DEMANDA) */}
          {!isSimpleMode && (
            <Disclosure label="Recordatorios de regulación cognitiva" summary="3 principios">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: 'var(--font-size-label)', color: 'var(--text-secondary)' }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-state-done)' }}>
                  <strong style={{ color: 'var(--text)', display: 'block' }}>Suficientemente terminado &gt; Ideal:</strong>
                  Cierra la entrega cuando cumpla el criterio mínimo, sin refinar indefinidamente.
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-accent-primary)' }}>
                  <strong style={{ color: 'var(--text)', display: 'block' }}>El descanso no se gana:</strong>
                  El descanso es un requisito fisiológico para la regulación ejecutiva, no un premio.
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-accent-warning)' }}>
                  <strong style={{ color: 'var(--text)', display: 'block' }}>Paso de reentrada escrito:</strong>
                  Antes de levantarte de la mesa, deja escrita la primera acción exacta de 2 min.
                </div>
              </div>
            </Disclosure>
          )}

          {/* SHEET DE HERRAMIENTAS DEL DÍA */}
          <Sheet
            isOpen={showToolsSheet}
            onClose={() => setShowToolsSheet(false)}
            title="Herramientas del Día"
            description="Recursos de apoyo y regulación ejecutiva"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              {/* Nivel de Energía */}
              <div>
                <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
                  Percepción de Energía Actual
                </span>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {(['high', 'medium', 'low', 'crisis'] as const).map((level) => (
                    <Button
                      key={level}
                      variant={currentEnergy === level ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setCurrentEnergy(level)}
                    >
                      {level === 'high' ? '⚡ Alta' : level === 'medium' ? '○ Media' : level === 'low' ? '▽ Baja' : '⚠ Crisis'}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Acceso a Rescate & 2º Cerebro */}
              <div>
                <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
                  Herramientas de Asistencia
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <ListRow
                    title="Rescate de Inercia (10 Minutos)"
                    meta="Desbloqueo de inicio sin juicio ni compromiso"
                    icon="🛡️"
                    onClick={() => { setActiveToolPanel('rescue'); setShowToolsSheet(false); }}
                  />
                  <ListRow
                    title="Segundo Cerebro & Notas"
                    meta="Inspector de notas y bóveda de Obsidian"
                    icon="🧠"
                    onClick={() => { setActiveToolPanel('second_brain'); setShowToolsSheet(false); }}
                  />
                  <ListRow
                    title={isSimpleMode ? "Desactivar Modo Simple" : "Activar Modo Simple"}
                    meta="Reducir interfaz a 1 columna de baja estimulación"
                    icon="🌱"
                    badge={isSimpleMode ? "Activo" : "Baja estimulación"}
                    badgeTone={isSimpleMode ? "success" : "default"}
                    onClick={() => { toggleSimpleMode(); setShowToolsSheet(false); }}
                  />
                </div>
              </div>
            </div>
          </Sheet>

          {/* VISTAS DE HERRAMIENTAS ACTIVAS (Bajo demanda) */}
          {activeToolPanel === 'rescue' && (
            <div style={{ marginTop: 'var(--space-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 600, color: 'var(--text-secondary)' }}>Herramienta: Rescate de Inercia</span>
                <Button variant="ghost" size="sm" onClick={() => setActiveToolPanel('none')}>Cerrar panel</Button>
              </div>
              <ClinicalUncompletedTaskProtocol />
            </div>
          )}

          {activeToolPanel === 'second_brain' && (
            <div style={{ marginTop: 'var(--space-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 600, color: 'var(--text-secondary)' }}>Herramienta: Inspector 2º Cerebro</span>
                <Button variant="ghost" size="sm" onClick={() => setActiveToolPanel('none')}>Cerrar panel</Button>
              </div>
              <SecondBrainInspector />
            </div>
          )}

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
