import React, { useState, useEffect } from 'react';
import { HelpCircle, Scissors, Timer, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

export interface UnblockPanelProps {
  currentTaskTitle?: string;
  onSubtasksCreated?: (subtasks: string[]) => void;
  onMoveToTomorrow?: () => void;
}

export default function UnblockPanel({
  currentTaskTitle = 'Tarea en curso',
  onSubtasksCreated,
  onMoveToTomorrow
}: UnblockPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<'split' | 'timer' | 'moved' | null>(null);
  
  // Dividir en 3 pasos state
  const [sub1, setSub1] = useState('Inicio: Abrir documento y preparar entorno 2 min');
  const [sub2, setSub2] = useState('Desarrollo: Escribir primer borrador de 1 párrafo 5 min');
  const [sub3, setSub3] = useState('Cierre: Guardar cambios y registrar avance 3 min');
  const [splitDone, setSplitDone] = useState(false);

  // Timer 10 min state
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(600);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning && timeLeftSeconds > 0) {
      interval = setInterval(() => {
        setTimeLeftSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timeLeftSeconds === 0 && timerRunning) {
      setTimerRunning(false);
      setTimerFinished(true);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeftSeconds]);

  const handleStartTimer = () => {
    setActiveAction('timer');
    setTimeLeftSeconds(600);
    setTimerRunning(true);
    setTimerFinished(false);
  };

  const handleConfirmSplit = () => {
    setSplitDone(true);
    if (onSubtasksCreated) {
      onSubtasksCreated([sub1, sub2, sub3]);
    }
  };

  const handleMoveTomorrow = () => {
    setActiveAction('moved');
    if (onMoveToTomorrow) {
      onMoveToTomorrow();
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="ds-card ds-stack-sm">
      {/* HEADER PRESCRIPTIVO ¿Bloqueado? */}
      <div className="ds-row-between">
        <div className="ds-row" style={{ gap: '8px' }}>
          <HelpCircle size={18} style={{ color: 'var(--warning)' }} />
          <strong className="ds-label">
            ¿Bloqueado?
          </strong>
        </div>

        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Ocultar' : 'Desplegar opciones'}
        </Button>
      </div>

      {isOpen && (
        <div className="ds-stack" style={{ paddingTop: 'var(--space-xs)' }}>
          {/* BOTONES DE LAS 3 OPCIONES PRINCIPALES */}
          <div className="ds-grid">
            <Button
              variant={activeAction === 'split' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setActiveAction('split')}
            >
              <Scissors size={15} /> Dividir en 3 pasos
            </Button>

            <Button
              variant={activeAction === 'timer' ? 'primary' : 'secondary'}
              size="sm"
              onClick={handleStartTimer}
            >
              <Timer size={15} /> Empezar 10 min
            </Button>

            <Button
              variant={activeAction === 'moved' ? 'primary' : 'secondary'}
              size="sm"
              onClick={handleMoveTomorrow}
            >
              <ArrowRight size={15} /> Cambiar de bloque por ahora
            </Button>
          </div>

          {/* OPCIÓN 1: DIVIDIR EN 3 PASOS */}
          {activeAction === 'split' && (
            <div className="ds-card ds-stack-sm" style={{ padding: 'var(--space-sm)' }}>
              <span className="ds-caption" style={{ fontWeight: 600 }}>
                Desglose micro-accionable para: "{currentTaskTitle}"
              </span>

              <input
                type="text"
                value={sub1}
                onChange={(e) => setSub1(e.target.value)}
                style={{ padding: '6px 10px', borderRadius: '4px', fontSize: '0.8rem' }}
              />
              <input
                type="text"
                value={sub2}
                onChange={(e) => setSub2(e.target.value)}
                style={{ padding: '6px 10px', borderRadius: '4px', fontSize: '0.8rem' }}
              />
              <input
                type="text"
                value={sub3}
                onChange={(e) => setSub3(e.target.value)}
                style={{ padding: '6px 10px', borderRadius: '4px', fontSize: '0.8rem' }}
              />

              <div className="ds-row" style={{ justifyContent: 'flex-end', paddingTop: '4px' }}>
                <Button variant="primary" size="sm" onClick={handleConfirmSplit}>
                  {splitDone ? '✓ Subtareas añadidas' : 'Confirmar deslose'}
                </Button>
              </div>
            </div>
          )}

          {/* OPCIÓN 2: TIMER 10 MIN Y AL FINALIZAR "¿Seguir o soltar?" */}
          {activeAction === 'timer' && (
            <div className="ds-card ds-stack-sm" style={{ alignItems: 'center', borderColor: 'var(--color-accent-primary-soft)' }}>
              <span className="ds-eyebrow">
                Foco 10 Minutos
              </span>

              <strong className="ds-h1" style={{ fontFamily: 'monospace' }}>
                {formatTimer(timeLeftSeconds)}
              </strong>

              {timerFinished ? (
                <div className="ds-stack-sm" style={{ alignItems: 'center', width: '100%' }}>
                  <strong className="ds-label">
                    ¿Seguir o soltar?
                  </strong>
                  <div className="ds-row" style={{ gap: '8px' }}>
                    <Button variant="primary" size="sm" onClick={() => handleStartTimer()}>
                      Seguir 10 min más
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleMoveTomorrow()}>
                      Soltar por hoy
                    </Button>
                  </div>
                </div>
              ) : (
                <Button variant="secondary" size="sm" onClick={() => setTimerRunning(!timerRunning)}>
                  {timerRunning ? 'Pausar' : 'Reanudar'}
                </Button>
              )}
            </div>
          )}

          {/* OPCIÓN 3: CAMBIAR DE BLOQUE POR AHORA */}
          {activeAction === 'moved' && (
            <div className="ds-card ds-row" style={{ gap: '10px', borderColor: 'var(--color-state-done-soft)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--color-state-done)' }} />
              <span className="ds-caption">
                La tarea se movió a mañana sin ninguna penalización. Mantén el ritmo en tu bloque actual.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
