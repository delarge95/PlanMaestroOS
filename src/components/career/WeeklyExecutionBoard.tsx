import React, { useMemo } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { useCareerStore } from '../../data/career/careerStore';
import { validateSingleNextAction, type JobApplication, type WeeklyPlanWeek } from '../../data/career/applications';

/**
 * WeeklyExecutionBoard — Tablero semanal de ejecución (AG-CAREER T6).
 * Mandato usuario (TAREAS_USUARIO.md, fila AG-CAREER): cadencia semanal de
 * aplicaciones/follow-ups/tracker según el doc-34, visible en la vista Hoy.
 *
 * Fuentes (trazabilidad):
 *   - doc-34 §2.1 regla principal · §2.2 weekly loop · §3.1-3.3 objetivo y modo
 *   - doc-34 §4.1-4.5 agenda semanal · §4.4 follow-ups 3-8 (apps >5-7 días hábiles)
 *   - doc-34 §6.2 umbral de acción (scoring)
 * Datos REALES: store career-state-v1 (aplicaciones + plan de 16 semanas del tracker).
 */

const DAY_PLAN = [
  { day: 'Lun', goal: 'Buscar y puntuar', detail: '10–20 postings → puntuar → seleccionar 5–12', ref: 'doc-34 §4.1' },
  { day: 'Mar', goal: 'Producción de material', detail: 'Portfolio / GitHub / assets', ref: 'doc-34 §4.2' },
  { day: 'Mié', goal: 'Aplicaciones a medida', detail: 'Envío con CV variante + links', ref: 'doc-34 §4.3' },
  { day: 'Jue', goal: 'Follow-ups y recruiters', detail: 'Apps >5–7 días hábiles · 3–8 follow-ups', ref: 'doc-34 §4.4' },
  { day: 'Vie', goal: 'Búsqueda nicho y review', detail: 'Roles nicho + aprendizaje de mercado', ref: 'doc-34 §4.5' }
] as const;

/** Semana ISO actual (lunes como inicio). */
function currentWeekStart(today = new Date()): Date {
  const d = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
  const dow = d.getUTCDay() === 0 ? 7 : d.getUTCDay();
  d.setUTCDate(d.getUTCDate() - (dow - 1));
  return d;
}

const isoOf = (d: Date): string => d.toISOString().slice(0, 10);
const daysBetween = (aIso: string, bIso: string): number =>
  Math.round((Date.parse(bIso) - Date.parse(aIso)) / 86400000);

export interface WeeklyExecutionBoardProps {
  today?: Date;
}

export default function WeeklyExecutionBoard({ today = new Date() }: WeeklyExecutionBoardProps) {
  const applications = useCareerStore((s) => s.applications);
  const weeklyPlan = useCareerStore((s) => s.weeklyPlan);

  const weekStart = currentWeekStart(today);
  const weekStartIso = isoOf(weekStart);
  const weekEndIso = isoOf(new Date(weekStart.getTime() + 6 * 86400000));
  const todayIso = isoOf(today);

  /** Métricas REALES de la semana corriente. */
  const stats = useMemo(() => {
    const active = applications.filter((a) => a.stage !== 'Cerrado');
    const touchedThisWeek = applications.filter((a) => a.updatedAtIso >= weekStartIso && a.updatedAtIso <= weekEndIso);
    const appliedThisWeek = applications.filter(
      (a) => a.updatedAtIso >= weekStartIso && a.updatedAtIso <= weekEndIso && (a.trackerStatus === 'Applied' || a.stage === 'Aplicado')
    );
    const followUpsDue = active
      .filter((a) => a.followUpDateIso && a.followUpDateIso <= todayIso)
      .sort((a, b) => a.followUpDateIso.localeCompare(b.followUpDateIso));
    const stale = active.filter(
      (a) => a.updatedAtIso && daysBetween(a.updatedAtIso, todayIso) >= 7 && a.stage !== 'Entrevista'
    );
    const pendingAction = active.filter((a) => !validateSingleNextAction(a));
    return { touchedThisWeek, appliedThisWeek, followUpsDue, stale, pendingAction };
  }, [applications, weekStartIso, weekEndIso, todayIso]);

  /** Semana del plan de 16 semanas del tracker que corresponde a hoy. */
  const trackerWeek: WeeklyPlanWeek | undefined = useMemo(() => {
    const past = weeklyPlan.filter((w) => w.startIso <= todayIso);
    return past.at(-1) ?? weeklyPlan[0];
  }, [weeklyPlan, todayIso]);

  const followUpTarget = { min: 3, max: 8 }; // doc-34 §4.4
  const appliedTarget = { min: 5, max: 8 }; // doc-34 §3.3 modo selectivo

  return (
    <ErrorBoundary>
      <div className="ds-card ds-stack">

        <div className="ds-row-between" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div>
            <h3 className="ds-h3">
              Tablero semanal de ejecución
            </h3>
            <span className="ds-caption" style={{ color: 'var(--text-tertiary)' }}>
              Semana {weekStartIso} → {weekEndIso} · doc-34 §2–§4 · regla: calidad de prueba primero, volumen después
            </span>
          </div>
          {trackerWeek && (
            <span className="ds-badge ds-badge-accent">
              Tracker · Semana {trackerWeek.week}: {trackerWeek.phase} — {trackerWeek.primaryGoal}
            </span>
          )}
        </div>

        {/* MÉTRICAS DE CADENCIA (real vs objetivo doc-34) */}
        <div className="ds-grid">
          <CadenceMetric
            label="Aplicaciones esta semana"
            value={stats.appliedThisWeek.length}
            target={`${appliedTarget.min}–${appliedTarget.max} (modo selectivo)`}
            ok={stats.appliedThisWeek.length >= appliedTarget.min}
            ref_="doc-34 §3.3"
          />
          <CadenceMetric
            label="Follow-ups vencidos"
            value={stats.followUpsDue.length}
            target={`${followUpTarget.min}–${followUpTarget.max} follow-ups/jueves`}
            ok={stats.followUpsDue.length === 0}
            warn={stats.followUpsDue.length > 0}
            ref_="doc-34 §4.4"
          />
          <CadenceMetric
            label="Apps >7 días sin movimiento"
            value={stats.stale.length}
            target="0 (hipótesis de bloqueo)"
            ok={stats.stale.length === 0}
            warn={stats.stale.length > 0}
            ref_="doc-14 §7 · jobs stuck-tasks"
          />
          <CadenceMetric
            label="Sin próxima acción"
            value={stats.pendingAction.length}
            target="0 (regla de contrato)"
            ok={stats.pendingAction.length === 0}
            warn={stats.pendingAction.length > 0}
            ref_="doc-12 §contrato"
          />
        </div>

        {/* FOLLOW-UPS VENCIDOS (reales del store) */}
        {stats.followUpsDue.length > 0 && (
          <div className="ds-stack-sm" style={{ gap: '4px' }}>
            <span className="ds-eyebrow">
              Seguimientos pendientes ({stats.followUpsDue.length})
            </span>
            {stats.followUpsDue.slice(0, 5).map((f) => (
              <div key={f.id} className="ds-card ds-row-between ds-caption" style={{ padding: '4px var(--space-2)' }}>
                <strong style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {f.companyName} · {f.roleTitle}
                </strong>
                <span className="ds-badge ds-badge-warning" style={{ flexShrink: 0 }}>
                  {f.followUpDateIso === todayIso ? 'Hoy' : f.followUpDateIso}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* AGENDA SEMANAL doc-34 §4 */}
        <div className="ds-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '6px' }}>
          {DAY_PLAN.map((d) => {
            const isToday = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'][((today.getDay() + 6) % 7)] === d.day;
            return (
              <div
                key={d.day}
                className="ds-card ds-stack-sm"
                style={{
                  background: isToday ? 'var(--color-accent-primary-soft)' : undefined,
                  borderColor: isToday ? 'var(--accent)' : undefined,
                  padding: 'var(--space-2)',
                  gap: '3px'
                }}
              >
                <span className="ds-eyebrow" style={{ color: isToday ? 'var(--accent)' : undefined }}>
                  {d.day}{isToday ? ' · hoy' : ''}
                </span>
                <span className="ds-label">{d.goal}</span>
                <span className="ds-caption" style={{ color: 'var(--text-tertiary)' }}>{d.detail}</span>
                <span className="ds-micro" style={{ fontStyle: 'italic' }}>{d.ref}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
}

function CadenceMetric({ label, value, target, ok, warn, ref_ }: {
  label: string;
  value: number;
  target: string;
  ok: boolean;
  warn?: boolean;
  ref_: string;
}) {
  const color = ok ? 'var(--accent)' : warn ? 'var(--warning)' : 'var(--text-secondary)';
  return (
    <div className="ds-card ds-stack-sm" style={{ padding: 'var(--space-2) 10px' }}>
      <span className="ds-eyebrow">{label}</span>
      <strong className="ds-h1" style={{ color, lineHeight: 1.2 }}>{value}</strong>
      <span className="ds-micro">objetivo: {target} · {ref_}</span>
    </div>
  );
}
