/**
 * SuggestionInbox.tsx — Superficie del sistema de sugerencias.
 * Pipeline: stores → UserState → evaluateRules → SuggestionEngine → UI.
 * Persistencia: localStorage 'suggestions-engine-v1'.
 */

import { useEffect, useState } from 'react';
import {
  buildUserState,
  readRealUserStateSources,
} from '../../lib/rules/userStateFeed';
import { deriveWeekAggregates, getWeekStartIso, addDaysIso } from '../../data/contracts/userState';
import { evaluateRules } from '../../lib/rules';
import type { RuleContext } from '../../lib/rules';
import { FITNESS_SEED_RULES } from '../../data/fitness/rules/fitnessRules';
import { createSuggestionEngine, SuggestionEngine } from '../../lib/suggestions';
import { fromRuleEvaluations, RULE_SUGGESTION_COOLDOWNS } from '../../lib/suggestions/fromRuleEvaluations';
import type { Suggestion } from '../../lib/suggestions';

const ENGINE_KEY = 'suggestions-engine-v1';

function loadEngine(): SuggestionEngine {
  const engine = createSuggestionEngine({ cooldownsByType: RULE_SUGGESTION_COOLDOWNS });
  try {
    const raw = localStorage.getItem(ENGINE_KEY);
    if (raw) engine.restore(JSON.parse(raw));
  } catch { /* corrupto → nuevo */ }
  return engine;
}

function persistEngine(engine: SuggestionEngine): void {
  try { localStorage.setItem(ENGINE_KEY, JSON.stringify(engine.snapshot())); } catch { /* SSR */ }
}

export default function SuggestionInbox() {
  const [active, setActive] = useState<Suggestion[]>([]);
  const [evaluatedCount, setEvaluatedCount] = useState(0);
  const [engine] = useState(loadEngine);

  useEffect(() => {
    const run = async () => {
    const now = new Date();
    const nowIso = now.toISOString();
    const today = nowIso.slice(0, 10);

    const sources = readRealUserStateSources();
    const userState = buildUserState({
      workoutHistory: sources?.workoutHistory ?? [],
      biofeedback: sources?.biofeedback ?? [],
      cardioSessions: sources?.cardioSessions ?? [],
      nowIso,
    });

    const thisWeek = getWeekStartIso(today);
    const prevWeek = getWeekStartIso(addDaysIso(today, -7));
    const context: RuleContext = {
      userState,
      week: deriveWeekAggregates(userState, thisWeek),
      previousWeek: deriveWeekAggregates(userState, prevWeek),
      todayIso: today,
      domain: {
        energyToday: sources?.biofeedback?.[0]?.energy,
        vocabDueCount: sources?.vocabDue?.count ?? 0,
      },
    };

    const evaluations = evaluateRules(FITNESS_SEED_RULES, context);
    const weekKey = thisWeek;
    for (const candidate of fromRuleEvaluations(evaluations, weekKey)) {
      engine.propose(candidate, nowIso);
    }

    // Sugerencia de repaso de vocabulario (tarjetas SR vencidas)
    const vocabDue = (context.domain?.vocabDueCount as number) ?? 0;
    if (vocabDue > 5) {
      engine.propose({
        id: `lang:vocab-due--${today}`,
        domain: 'languages',
        type: 'review-cards',
        priority: 4,
        title: `${vocabDue} tarjetas de alemán vencidas`,
        body: `Tienes ${vocabDue} tarjetas de repaso esperando. 5 minutos ahora evita que se acumulen.`,
        ttlHours: 12,
      }, nowIso);
    }

    // Sugerencias de CARRERA (pipeline laboral ↔ Hoy — interconexión por
    // razonamiento, no solo visual): seguimientos vencidos y aplicaciones
    // activas sin única próxima acción (regla de contrato doc-01/doc-12).
    try {
      const { useCareerStore } = await import('../../data/career/careerStore');
      const apps = useCareerStore.getState().applications.filter((a) => a.stage !== 'Cerrado');
      const overdue = apps.filter((a) => a.followUpDateIso && a.followUpDateIso <= today);
      if (overdue.length > 0) {
        engine.propose({
          id: `career:followup-overdue--${today}`,
          domain: 'career',
          type: 'follow-up',
          priority: 5,
          title: `${overdue.length} seguimiento${overdue.length > 1 ? 's' : ''} vencido${overdue.length > 1 ? 's' : ''}`,
          body: overdue
            .slice(0, 3)
            .map((a) => `${a.companyName}: ${a.singleNextAction || 'definir acción'} (${a.followUpDateIso})`)
            .join(' · '),
          ttlHours: 24,
        }, nowIso);
      }
      const noAction = apps.filter((a) => !a.singleNextAction || a.singleNextAction.trim() === '');
      if (noAction.length > 0) {
        engine.propose({
          id: `career:missing-next-action--${today}`,
          domain: 'career',
          type: 'next-action',
          priority: 3,
          title: `${noAction.length} aplicación${noAction.length > 1 ? 'es' : ''} sin próxima acción`,
          body: 'La regla de contrato exige UNA única próxima acción por aplicación antes de avanzar de columna. Defínela en Empleo → Pipeline.',
          ttlHours: 48,
        }, nowIso);
      }

      // Objetivo semanal de aplicaciones (doc-34 §3.3: 5–8/semana): aviso
      // proactivo a partir del miércoles si el ritmo va corto.
      // Stages de avance ('Aplicado' en adelante) con movimiento en los últimos 7 días.
      const appliedThisWeek = apps.filter(
        (a) =>
          (a.stage === 'Aplicado' || a.stage === 'Seguimiento' || a.stage === 'Entrevista') &&
          new Date(a.updatedAtIso).getTime() >= Date.now() - 7 * 86400000,
      ).length;
      if (appliedThisWeek < 5 && new Date().getDay() >= 3) {
        engine.propose({
          id: `career:weekly-target--${today}`,
          domain: 'career',
          type: 'weekly-target',
          priority: 4,
          title: `${appliedThisWeek}/5 aplicaciones esta semana`,
          body: 'Objetivo doc-34 §3.3: 5–8 aplicaciones semanales en modo selectivo. Retoma la onda A1 de la Base de datos (fit ≥10) y genera el CV por aplicación.',
          ttlHours: 36,
        }, nowIso);
      }
    } catch { /* store no disponible en este entorno → sin sugerencias de carrera */ }

    // Dolor reportado en biofeedback (clinical) ≥4/10 → asistente de salud.
    const latestPain = sources?.biofeedback?.[0]?.pain ?? 0;
    if (latestPain >= 4) {
      engine.propose({
        id: `fit:health-advisory--${today}`,
        domain: 'fitness',
        type: 'biofeedback',
        priority: 6,
        title: `Dolor ${latestPain}/10 registrado`,
        body: 'Abre Fitness → ¿Dolor o molestia? para el advisory completo: estructuras afectadas, sustituciones de la sesión de hoy, prehab y guardas de volumen (reglas fit:pain-*).',
        ttlHours: 20,
      }, nowIso);
    }

    engine.expireDue(nowIso);
    const activeNow = engine.active(nowIso);
    for (const s of activeNow) engine.markShown(s.id, nowIso);
    persistEngine(engine);
    setActive(engine.active(nowIso));
    setEvaluatedCount(evaluations.length);
    };
    void run();
  }, [engine]);

  const dismiss = (id: string, reason: 'not-now' | 'not-interested') => {
    const nowIso = new Date().toISOString();
    engine.dismiss(id, reason, nowIso);
    persistEngine(engine);
    setActive(engine.active(nowIso));
  };

  if (!active.length) return null;

  return (
    <section aria-label="Sugerencias del sistema" data-noprint
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
        background: 'var(--surface-1)', border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-m)', padding: 'var(--space-4)',
      }}>
      <span className="ds-eyebrow">Sugerencias del sistema ({evaluatedCount} reglas)</span>
      {active.slice(0, 3).map(s => (
        <article key={s.id}
          style={{
            padding: '10px 12px', borderRadius: 'var(--radius-s)',
            background: s.priority >= 8 ? 'var(--warning-soft)' : 'var(--surface-2)',
            border: `1px solid ${s.priority >= 8 ? 'var(--warning-soft)' : 'var(--color-border-subtle)'}`,
          }}>
          <div style={{ fontWeight: 600, fontSize: 'var(--fs-body)', color: 'var(--text-primary)', marginBottom: 2 }}>{s.title}</div>
          <div style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{s.body}</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
            <button type="button" onClick={() => dismiss(s.id, 'not-now')}
              style={{ background: 'transparent', border: '1px solid var(--color-border-subtle)', color: 'var(--text-secondary)', borderRadius: 6, padding: '3px 8px', fontSize: '0.72rem', cursor: 'pointer', font: 'inherit' }}>
              Ahora no
            </button>
            <button type="button" onClick={() => dismiss(s.id, 'not-interested')}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', borderRadius: 6, padding: '3px 8px', fontSize: '0.72rem', cursor: 'pointer', font: 'inherit' }}>
              No me interesa
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}
