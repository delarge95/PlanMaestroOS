// src/components/fitness/TodayRoutineStack.tsx
import React, { useState } from 'react';
import Button from '../ui/Button';
import Disclosure from '../ui/Disclosure';
import { ArrowRight, Play, Check } from 'lucide-react';

export interface ActivePlan {
  id: string;
  title: string;
  type: string;
  targetFocus: string;
  detailsHref: string;
  exercises: { name: string; setsReps: string; targetRpe: string }[];
}

export interface TodayRoutineStackProps {
  plans?: ActivePlan[];
  onStartSession?: (planId: string) => void;
}

const DEFAULT_PLANS: ActivePlan[] = [
  {
    id: 'min-max-upper1',
    title: 'Min-Max — Upper 1',
    type: 'Gym',
    targetFocus: 'Pecho, Espalda & Hombro',
    detailsHref: '/app/fitness/library/catalog',
    exercises: [
      { name: 'Press Inclinado con Barra', setsReps: '3 × 6–8', targetRpe: 'RPE 8' },
      { name: 'Remo con Mancuerna Asistido', setsReps: '3 × 8–10', targetRpe: 'RPE 8' },
      { name: 'Elevaciones Laterales en Polea', setsReps: '4 × 12–15', targetRpe: 'RPE 9' }
    ]
  },
  {
    id: 'calisthenics-pull',
    title: 'Calistenia — Tracción & Anillas',
    type: 'Calistenia',
    targetFocus: 'Dominadas estrictas & Muscle-up',
    detailsHref: '/app/fitness/library/skills',
    exercises: [
      { name: 'Dominada Estricta Neutra', setsReps: '4 × 6–8', targetRpe: 'RIR 2' },
      { name: 'Fondos en Anillas', setsReps: '3 × 8–10', targetRpe: 'RIR 2' }
    ]
  }
];

export default function TodayRoutineStack({ plans = DEFAULT_PLANS, onStartSession }: TodayRoutineStackProps) {
  const [loggedSets, setLoggedSets] = useState<Record<string, boolean>>({});

  const toggleSet = (key: string) => {
    setLoggedSets((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Rutina del día
        </h3>
        <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
          {plans.length} planes activos
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {plans.map((plan) => (
          <Disclosure
            key={plan.id}
            label={`${plan.title} (${plan.type})`}
            summary={plan.targetFocus}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', paddingTop: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Prescripción de la sesión
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { window.location.href = plan.detailsHref; }}
                >
                  <span>Ver programa completo</span>
                  <ArrowRight size={14} />
                </Button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {plan.exercises.map((ex, idx) => {
                  const setKey = `${plan.id}-${idx}`;
                  const isDone = !!loggedSets[setKey];
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: '6px',
                        padding: '8px 12px'
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: 'var(--fs-body, 0.9375rem)', color: 'var(--text-primary)' }}>
                          {ex.name}
                        </strong>
                        <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)', display: 'block' }}>
                          Prescripción: {ex.setsReps} · {ex.targetRpe}
                        </span>
                      </div>

                      <Button
                        variant={isDone ? 'ghost' : 'secondary'}
                        size="sm"
                        onClick={() => toggleSet(setKey)}
                      >
                        <Check size={14} style={{ color: isDone ? 'var(--success)' : 'inherit' }} />
                        <span>{isDone ? 'Completado' : 'Marcar'}</span>
                      </Button>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
                <Button variant="primary" size="sm" onClick={() => onStartSession?.(plan.id)}>
                  <Play size={14} />
                  <span>Empezar sesión</span>
                </Button>
              </div>
            </div>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
