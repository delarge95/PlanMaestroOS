// src/components/fitness/analytics/ProgramAnalytics.tsx
import React from 'react';
import { useActiveProgramStore } from '../../../data/fitness/activeProgramStore';
import { getProgramById } from '../../../data/fitness/programs';

export default function ProgramAnalytics() {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const postponedDays = useActiveProgramStore((s) => s.postponedDays || 0);
  const program = getProgramById(activeProgramId);

  const totalDays = (program.weeks?.length || 1) * 5;
  const completedDaysEstimate = Math.max(1, (currentWeek - 1) * 5 + 2);
  const adherencePct = Math.min(100, Math.round((completedDaysEstimate / (completedDaysEstimate + postponedDays)) * 100));

  return (
    <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '0.72rem', color: 'var(--success, #30d158)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Rendimiento del Programa Activo
          </span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
            {program.title} (Semana {currentWeek} de {program.weeks?.length || 12})
          </h3>
        </div>
      </div>

      {/* TARJETAS DE ADHERENCIA Y CUMPLIMIENTO */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', borderRadius: '12px', padding: '14px' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--success, #30d158)', fontWeight: 700, textTransform: 'uppercase' }}>Adherencia Global</span>
          <strong style={{ fontSize: '1.6rem', display: 'block', margin: '4px 0', color: 'var(--text-primary)' }}>{adherencePct}%</strong>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{completedDaysEstimate} días completados</span>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', borderRadius: '12px', padding: '14px' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase' }}>Carga Planificada vs Real</span>
          <strong style={{ fontSize: '1.6rem', display: 'block', margin: '4px 0', color: 'var(--text-primary)' }}>101%</strong>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>4,850 kg ejecutados / 4,800 kg plan</span>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', borderRadius: '12px', padding: '14px' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--warning, #ff9f0a)', fontWeight: 700, textTransform: 'uppercase' }}>Días Postergados</span>
          <strong style={{ fontSize: '1.6rem', display: 'block', margin: '4px 0', color: 'var(--text-primary)' }}>{postponedDays} días</strong>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Ajuste automático de calendario</span>
        </div>
      </div>
    </div>
  );
}
