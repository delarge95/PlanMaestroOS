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
    const now = new Date();
    const nowIso = now.toISOString();
    const today = nowIso.slice(0, 10);

    const sources = readRealUserStateSources();
    const userState = buildUserState({
      workoutHistory: sources?.workoutHistory ?? [],
      biofeedback: sources?.biofeedback ?? [],
      nowIso,
    });

    const thisWeek = getWeekStartIso(today);
    const prevWeek = getWeekStartIso(addDaysIso(today, -7));
    const context: RuleContext = {
      userState,
      week: deriveWeekAggregates(userState, thisWeek),
      previousWeek: deriveWeekAggregates(userState, prevWeek),
      todayIso: today,
      domain: { energyToday: sources?.biofeedback?.[0]?.energy },
    };

    const evaluations = evaluateRules(FITNESS_SEED_RULES, context);
    const weekKey = thisWeek;
    for (const candidate of fromRuleEvaluations(evaluations, weekKey)) {
      engine.propose(candidate, nowIso);
    }
    engine.expireDue(nowIso);
    const activeNow = engine.active(nowIso);
    for (const s of activeNow) engine.markShown(s.id, nowIso);
    persistEngine(engine);
    setActive(engine.active(nowIso));
    setEvaluatedCount(evaluations.length);
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
