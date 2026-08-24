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
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '12px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
              Tablero semanal de ejecución
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
              Semana {weekStartIso} → {weekEndIso} · doc-34 §2–§4 · regla: calidad de prueba primero, volumen después
            </span>
          </div>
          {trackerWeek && (
            <span style={{ fontSize: '0.7rem', color: 'var(--color-accent-primary)', background: 'var(--color-accent-primary-soft)', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
              Tracker · Semana {trackerWeek.week}: {trackerWeek.phase} — {trackerWeek.primaryGoal}
            </span>
          )}
        </div>

        {/* MÉTRICAS DE CADENCIA (real vs objetivo doc-34) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px' }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Seguimientos pendientes ({stats.followUpsDue.length})
            </span>
            {stats.followUpsDue.slice(0, 5).map((f) => (
              <div key={f.id} style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: '0.78rem', background: 'rgba(255,255,255,0.02)', padding: '4px 8px', borderRadius: '4px' }}>
                <strong style={{ color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {f.companyName} · {f.roleTitle}
                </strong>
                <span style={{ color: 'var(--color-accent-warning)', fontWeight: 600, flexShrink: 0 }}>
                  {f.followUpDateIso === todayIso ? 'Hoy' : f.followUpDateIso}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* AGENDA SEMANAL doc-34 §4 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '6px' }}>
          {DAY_PLAN.map((d) => {
            const isToday = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'][((today.getDay() + 6) % 7)] === d.day;
            return (
              <div
                key={d.day}
                style={{
                  background: isToday ? 'var(--color-accent-primary-soft)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${isToday ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
                  borderRadius: '6px',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px'
                }}
              >
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: isToday ? 'var(--color-accent-primary)' : 'var(--text-secondary)' }}>
                  {d.day}{isToday ? ' · hoy' : ''}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text)', fontWeight: 600 }}>{d.goal}</span>
                <span style={{ fontSize: '0.64rem', color: 'var(--text-tertiary)' }}>{d.detail}</span>
                <span style={{ fontSize: '0.58rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>{d.ref}</span>
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
  const color = ok ? 'var(--color-accent-primary)' : warn ? 'var(--color-accent-warning)' : 'var(--text-secondary)';
  return (
    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '8px 10px' }}>
      <span style={{ fontSize: '0.66rem', color: 'var(--text-tertiary)', fontWeight: 600, display: 'block' }}>{label}</span>
      <strong style={{ fontSize: '1.5rem', color, display: 'block', lineHeight: 1.2 }}>{value}</strong>
      <span style={{ fontSize: '0.62rem', color: 'var(--text-tertiary)' }}>objetivo: {target} · {ref_}</span>
    </div>
  );
}
