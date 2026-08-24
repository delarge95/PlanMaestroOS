import React, { useMemo } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SectionNav from '../ui/SectionNav';
import Button from '../ui/Button';
import { Briefcase, ArrowRight } from 'lucide-react';
import { useCareerStore } from '../../data/career/careerStore';
import { validateSingleNextAction, type JobApplication } from '../../data/career/applications';
import WeeklyExecutionBoard from './WeeklyExecutionBoard';

export interface CareerTodayProps {
  currentPath?: string;
}

/** Siguiente acción laboral: la aplicación activa con follow-up más próximo (determinista). */
function pickTopApplication(applications: JobApplication[], todayIso: string): JobApplication | undefined {
  return applications
    .filter((a) => a.stage !== 'Cerrado' && validateSingleNextAction(a) && a.followUpDateIso)
    .sort((a, b) => a.followUpDateIso.localeCompare(b.followUpDateIso))[0];
}

export default function CareerToday({ currentPath = '/app/career' }: CareerTodayProps) {
  const applications = useCareerStore((s) => s.applications);

  const todayIso = new Date().toISOString().slice(0, 10);
  const top = useMemo(() => pickTopApplication(applications, todayIso), [applications, todayIso]);
  const pendingActionCount = useMemo(
    () => applications.filter((a) => a.stage !== 'Cerrado' && !validateSingleNextAction(a)).length,
    [applications]
  );
  const activeCount = useMemo(() => applications.filter((a) => a.stage !== 'Cerrado').length, [applications]);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>

        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="career" currentPath={currentPath} level={2} />

        {/* CABECERA PRESCRIPTIVA DE SECCIÓN LABORAL */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 'var(--space-xs)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Briefcase size={22} style={{ color: 'var(--color-accent-primary)' }} />
            <div>
              <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Laboral
              </h1>
              <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
                Gestión de carrera, portafolio & pipeline de empleo · {activeCount} aplicaciones activas (tracker real)
              </span>
            </div>
          </div>

          <a href="/app/career/jobs" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">
              <ArrowRight size={15} /> Abrir pipeline
            </Button>
          </a>
        </div>

        {/* PRÓXIMA ACCIÓN LABORAL (UNA SOLA — real, del store) */}
        {top ? (
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--color-accent-primary-soft)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                Próxima acción · {top.companyName} · {top.roleTitle}
              </span>
              <strong style={{ fontSize: '1rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
                {top.singleNextAction}
              </strong>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                seguimiento: {top.followUpDateIso} · fuente: tracker xlsx (doc-12)
              </span>
            </div>

            <a href="/app/career/jobs" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm">
                Empezar 10 min
              </Button>
            </a>
          </div>
        ) : (
          <div style={{
            background: 'var(--surface)',
            border: '1px dashed var(--color-accent-warning)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-md)'
          }}>
            <strong style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
              Sin próxima acción definida en ninguna aplicación activa
            </strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginTop: '4px' }}>
              Regla de contrato (doc-12): cada aplicación necesita exactamente una única próxima acción. Defínela en el pipeline.
            </span>
          </div>
        )}

        {/* TABLERO SEMANAL DE EJECUCIÓN (doc-34 — mandato usuario) */}
        <WeeklyExecutionBoard />

        {/* AVISO DE CONTRATO PENDIENTE */}
        {pendingActionCount > 0 && (
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--color-accent-warning)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px 12px',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)'
          }}>
            <strong style={{ color: 'var(--color-accent-warning)' }}>{pendingActionCount} aplicación(es)</strong> sin única próxima acción definida — el movimiento de columna está bloqueado hasta definirla.
          </div>
        )}

      </div>
    </ErrorBoundary>
  );
}
