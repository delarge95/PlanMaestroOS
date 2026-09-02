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
      <div className="ds-stack">

        {/* NAVEGACIÓN NIVEL 2 */}        {/* CABECERA PRESCRIPTIVA DE SECCIÓN LABORAL */}
        <div className="ds-row-between" style={{ paddingBottom: 'var(--space-xs)' }}>
          <div className="ds-row" style={{ gap: '10px' }}>
            <Briefcase size={22} style={{ color: 'var(--color-accent-primary)' }} />
            <div>
              <h1 className="ds-h1" style={{ margin: 0 }}>
                Laboral
              </h1>
              <span className="ds-caption">
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
          <div className="ds-card ds-row-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span className="ds-eyebrow">
                Próxima acción · {top.companyName} · {top.roleTitle}
              </span>
              <strong className="ds-label" style={{ display: 'block', marginTop: '2px' }}>
                {top.singleNextAction}
              </strong>
              <span className="ds-micro">
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
          <div className="ds-card ds-stack-sm" style={{ borderStyle: 'dashed', borderColor: 'var(--color-accent-warning)' }}>
            <strong className="ds-label">
              Sin próxima acción definida en ninguna aplicación activa
            </strong>
            <span className="ds-caption" style={{ display: 'block', marginTop: '4px' }}>
              Regla de contrato (doc-12): cada aplicación necesita exactamente una única próxima acción. Defínela en el pipeline.
            </span>
          </div>
        )}

        {/* TABLERO SEMANAL DE EJECUCIÓN (doc-34 — mandato usuario) */}
        <WeeklyExecutionBoard />

        {/* AVISO DE CONTRATO PENDIENTE */}
        {pendingActionCount > 0 && (
          <div className="ds-card ds-caption" style={{ borderColor: 'var(--color-accent-warning)', padding: '8px 12px' }}>
            <strong style={{ color: 'var(--color-accent-warning)' }}>{pendingActionCount} aplicación(es)</strong> sin única próxima acción definida — el movimiento de columna está bloqueado hasta definirla.
          </div>
        )}

      </div>
    </ErrorBoundary>
  );
}
