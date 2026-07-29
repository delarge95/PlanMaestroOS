import React from 'react';
import { Calendar, Activity, CheckCircle } from 'lucide-react';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';
import { skillSteps } from '../../../data/fitness/skills/skillSteps';
import ListRow from '../../ui/ListRow';

export function SkillHistoryView() {
  const sessions = useSkillStateStore((s) => s.practiceSessions);

  if (!sessions || sessions.length === 0) {
    return (
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <Calendar size={32} style={{ color: 'var(--text-tertiary)', marginBottom: '8px' }} />
        <h4 style={{ margin: '0 0 4px', color: 'var(--text)' }}>Aún no hay prácticas registradas</h4>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
          Pulsa "Practicar hoy" en la pestaña de Mi práctica para comenzar a registrar tu evolución.
        </p>
      </div>
    );
  }

  const totalSets = sessions.reduce((acc, s) => acc + (s.setsCompleted || 0), 0);
  const avgDiscomfort = (sessions.reduce((acc, s) => acc + (s.discomfortLevel || 0), 0) / sessions.length).toFixed(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* RESUMEN ACUMULADO */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-sm)' }}>
        <div style={{ background: 'var(--surface-elevated)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>SESIONES & SERIES</span>
          <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text)', marginTop: '2px' }}>
            {sessions.length} sesiones ({totalSets} series)
          </strong>
        </div>
        <div style={{ background: 'var(--surface-elevated)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>MOLESTIA PROMEDIO</span>
          <strong style={{ display: 'block', fontSize: '1.1rem', color: Number(avgDiscomfort) >= 3 ? '#ff453a' : 'var(--color-state-done)', marginTop: '2px' }}>
            {avgDiscomfort} / 10
          </strong>
        </div>
      </div>

      {/* HISTORIAL DETALLADO */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
          Registro de Sesiones Recientes
        </span>
        {sessions.map((sess) => {
          const step = skillSteps.find((s) => s.id === sess.stepId);
          const dateStr = new Date(sess.timestamp).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
          });

          return (
            <ListRow
              key={sess.id}
              title={step?.title || 'Práctica de Habilidad'}
              meta={`${dateStr} · ${sess.setsCompleted} series · Calidad: ${sess.qualityScore}`}
              icon={<CheckCircle size={16} style={{ color: 'var(--color-state-done)' }} />}
              badge={sess.discomfortLevel > 0 ? `Molestia ${sess.discomfortLevel}/10` : 'Sin molestia'}
              badgeTone={sess.discomfortLevel >= 4 ? 'warning' : 'success'}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SkillHistoryView;
