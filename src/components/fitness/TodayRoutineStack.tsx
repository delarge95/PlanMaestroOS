// src/components/fitness/TodayRoutineStack.tsx
import React from 'react';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import { Dumbbell, ArrowRight, Play } from 'lucide-react';

export interface ActivePlan {
  id: string;
  title: string;
  type: string;
  targetFocus: string;
  detailsHref: string;
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
    detailsHref: '/app/fitness/library/catalog'
  },
  {
    id: 'calisthenics-pull',
    title: 'Calistenia — Tracción & Anillas',
    type: 'Calistenia',
    targetFocus: 'Dominadas estrictas & Muscle-up',
    detailsHref: '/app/fitness/library/skills'
  },
  {
    id: 'prehab-shoulder',
    title: 'Prehab & Salud Articular — Hombro',
    type: 'Movilidad',
    targetFocus: 'Manguito rotador & Movilidad torácica',
    detailsHref: '/app/fitness/library/catalog'
  }
];

export default function TodayRoutineStack({ plans = DEFAULT_PLANS, onStartSession }: TodayRoutineStackProps) {
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
          <div
            key={plan.id}
            style={{
              background: 'var(--surface-1, #0d0d0f)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
              borderRadius: 'var(--radius-m, 12px)',
              padding: 'var(--space-md)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-sm)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <StatusBadge label={plan.type} variant="active" icon={<Dumbbell size={12} />} />
                <strong style={{ fontSize: 'var(--fs-body, 0.9375rem)', color: 'var(--text-primary)' }}>
                  {plan.title}
                </strong>
              </div>
              <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
                {plan.targetFocus}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => { window.location.href = plan.detailsHref; }}
              >
                <span>Ver detalles</span>
                <ArrowRight size={14} />
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={() => onStartSession?.(plan.id)}
              >
                <Play size={14} />
                <span>Empezar sesión</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
