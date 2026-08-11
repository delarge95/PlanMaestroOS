import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

export interface ScheduleItem {
  id: string;
  daySection: 'Hoy' | 'Mañana' | 'Pasado mañana' | 'Próximos días';
  company: string;
  actionType: 'Enviar correo en frío' | 'Aplicar' | 'Hacer seguimiento';
  detail: string;
}

const sampleSchedule: ScheduleItem[] = [
  { id: 's1', daySection: 'Hoy', company: 'Epic Games', actionType: 'Hacer seguimiento', detail: 'Confirmación entrevista técnica' },
  { id: 's2', daySection: 'Mañana', company: 'Ubisoft', actionType: 'Hacer seguimiento', detail: 'Enviar correo al recruiter' },
  { id: 's3', daySection: 'Pasado mañana', company: 'Riot Games', actionType: 'Enviar correo en frío', detail: 'Mensaje directo con reel' },
  { id: 's4', daySection: 'Próximos días', company: 'Crytek', actionType: 'Aplicar', detail: 'Enviar solicitud oficial via portal' }
];

export default function JobsSchedule() {
  const sections: ('Hoy' | 'Mañana' | 'Pasado mañana' | 'Próximos días')[] = ['Hoy', 'Mañana', 'Pasado mañana', 'Próximos días'];

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
          Cronograma de acciones
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-sm)' }}>
          {sections.map((sec) => {
            const items = sampleSchedule.filter((i) => i.daySection === sec);

            return (
              <div key={sec} style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
                  {sec}
                </span>

                {items.length === 0 ? (
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Sin acciones programadas</span>
                ) : (
                  items.map((i) => (
                    <div key={i.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{i.company}</strong>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-warning)', fontWeight: 600 }}>{i.actionType}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>{i.detail}</span>
                    </div>
                  ))
                )}
              </div>
            );
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
}
