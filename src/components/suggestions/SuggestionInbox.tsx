/**
 * SuggestionInbox.tsx — Superficie del sistema de sugerencias (corte vertical Fase 3).
 *
 * Pipeline real en cada montaje: stores (logger + bio-feedback clínico) →
 * buildUserState → deriveWeekAggregates → evaluateRules(fitness seed) →
 * fromRuleEvaluations → SuggestionEngine (máx 3, cooldowns, snooze) → UI.
 *
 * Cada tarjeta lleva su "¿por qué?" con cita (regla + fuente). El estado del
 * motor persiste en localStorage 'suggestions-engine-v1'.
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
  } catch {
    /* estado corrupto → motor nuevo */
  }
  return engine;
}

function persistEngine(engine: SuggestionEngine): void {
  try {
    localStorage.setItem(ENGINE_KEY, JSON.stringify(engine.snapshot()));
  } catch {
    /* sin storage: la cola vive en memoria */
  }
}

interface InboxState {
  active: Suggestion[];
  evaluatedCount: number;
}

export default function SuggestionInbox() {
  const [state, setState] = useState<InboxState>({ active: [], evaluatedCount: 0 });
  const [engine] = useState(loadEngine);

  useEffect(() => {
    const now = new Date();
    const nowIso = now.toISOString();
    const today = nowIso.slice(0, 10);

    // 1-2. stores reales → UserState
    const sources = readRealUserStateSources();
    const userState = buildUserState({
      workoutHistory: sources?.workoutHistory ?? [],
      biofeedback: sources?.biofeedback ?? [],
      nowIso,
    });

    // 3. agregados de esta semana y la anterior
    const thisWeek = getWeekStartIso(today);
    const prevWeek = getWeekStartIso(addDaysIso(today, -7));
    const context: RuleContext = {
      userState,
      week: deriveWeekAggregates(userState, thisWeek),
      previousWeek: deriveWeekAggregates(userState, prevWeek),
      todayIso: today,
      domain: { energyToday: sources?.biofeedback?.[0]?.energy },
    };

    // 4-6. reglas → evaluaciones → candidatos → motor
    const evaluations = evaluateRules(FITNESS_SEED_RULES, context);
    const weekKey = thisWeek;
    for (const candidate of fromRuleEvaluations(evaluations, weekKey)) {
      engine.propose(candidate, nowIso);
    }
    engine.expireDue(nowIso);

    const active = engine.active(nowIso);
    for (const s of active) engine.markShown(s.id, nowIso);
    persistEngine(engine);
    setState({ active: engine.active(nowIso), evaluatedCount: evaluations.length });
  }, [engine]);

  const decide = (id: string, reason: 'not-now' | 'not-interested') => {
    const nowIso = new Date().toISOString();
    engine.dismiss(id, reason, nowIso);
    persistEngine(engine);
    setState((s) => ({ ...s, active: engine.active(nowIso) }));
  };

  if (!state.active.length) return null;

  return (
    <section
      aria-label="Sugerencias del sistema"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm, 8px)',
        background: 'var(--surface-1, #0d0d0f)',
        border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
        borderRadius: 'var(--radius-m, 12px)',
        padding: 'var(--space-md, 14px)',
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: var(--accent),
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Sugerencias del sistema ({state.evaluatedCount} reglas evaluadas)
      </span>
      {state.active.slice(0, 3).map((s) => (
        <article
          key={s.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            padding: '10px 12px',
            borderRadius: 10,
            background: s.priority >= 8 ? 'rgba(255,159,10,0.08)' : 'rgba(255,255,255,0.03)',
            border: `1px solid ${s.priority >= 8 ? 'rgba(255,159,10,0.35)' : 'var(--color-border-subtle)'}`,
          }}
        >
          <strong style={{ fontSize: '0.86rem', color: var(--text-primary) }}>{s.title}</strong>
          <span style={{ fontSize: '0.78rem', color: var(--text-secondary), lineHeight: 1.45 }}>{s.body}</span>
          <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
            <button
              type="button"
              onClick={() => decide(s.id, 'not-now')}
              style={{ background: 'transparent', border: '1px solid var(--color-border-subtle)', color: var(--text-secondary), borderRadius: 6, padding: '3px 8px', fontSize: '0.72rem', cursor: 'pointer' }}
            >
              Ahora no
            </button>
            <button
              type="button"
              onClick={() => decide(s.id, 'not-interested')}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary, rgba(255,255,255,0.4))', borderRadius: 6, padding: '3px 8px', fontSize: '0.72rem', cursor: 'pointer' }}
            >
              No me interesa
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}
