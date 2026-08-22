import { describe, it, expect } from 'vitest';
import { createSuggestionEngine, SuggestionEngine } from '../index';
import type { SuggestionCandidate } from '../index';

// Reloj simulado: base 2026-08-22T10:00Z + horas.
const BASE = Date.parse('2026-08-22T10:00:00.000Z');
const at = (hours: number): string => new Date(BASE + hours * 3_600_000).toISOString();

function candidate(overrides: Partial<SuggestionCandidate> = {}): SuggestionCandidate {
  return {
    id: 'fit:test-1',
    domain: 'fitness',
    type: 'volume-adjust',
    priority: 0,
    title: 'Ajusta tu volumen',
    body: '24 series vs óptimo 10–20 (regla fit:volume-10-20, OG2 cap. 12 p. 148).',
    ruleId: 'fit:volume-10-20',
    sourceRef: { docId: 'overcoming-gravity-2', chapter: 12, page: 148 },
    ...overrides,
  };
}

describe('propose — capacidad y dedup', () => {
  it('almacena la propuesta con TTL y trazabilidad', () => {
    const engine = createSuggestionEngine();
    const s = engine.propose(candidate(), at(0));
    expect(s).not.toBeNull();
    expect(s!.status).toBe('proposed');
    expect(s!.expiresAtIso).toBe(at(72)); // defaultTtlHours 72
    expect(s!.ruleId).toBe('fit:volume-10-20');
    expect(engine.active(at(0)).map((x) => x.id)).toEqual(['fit:test-1']);
  });

  it('rechaza duplicados mientras la sugerencia está viva', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate(), at(0));
    expect(engine.propose(candidate(), at(1))).toBeNull();
  });

  it('respeta el máximo de activas (default 3)', () => {
    const engine = createSuggestionEngine();
    expect(engine.propose(candidate({ id: 'a', type: 'ta' }), at(0))).not.toBeNull();
    expect(engine.propose(candidate({ id: 'b', type: 'tb' }), at(0))).not.toBeNull();
    expect(engine.propose(candidate({ id: 'c', type: 'tc' }), at(0))).not.toBeNull();
    // Cola llena: rechazada.
    expect(engine.propose(candidate({ id: 'd', type: 'td' }), at(0))).toBeNull();
    // Liberar una plaza (accept saca de la cola) permite la siguiente.
    engine.accept('a', at(1));
    expect(engine.propose(candidate({ id: 'd', type: 'td' }), at(1))).not.toBeNull();
    expect(engine.active(at(1))).toHaveLength(3);
  });

  it('ordena la cola activa por prioridad desc y luego FIFO', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate({ id: 'low', type: 't1', priority: 1 }), at(0));
    engine.propose(candidate({ id: 'high', type: 't2', priority: 9 }), at(0));
    engine.propose(candidate({ id: 'mid', type: 't3', priority: 5 }), at(0));
    expect(engine.active(at(0)).map((s) => s.id)).toEqual(['high', 'mid', 'low']);
  });
});

describe('ciclo de vida propuesto → shown → accepted → applied → outcome', () => {
  it('recorre el ciclo completo', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate(), at(0));

    expect(engine.markShown('fit:test-1', at(1))).toBe(true);
    expect(engine.get('fit:test-1')!.status).toBe('shown');
    expect(engine.get('fit:test-1')!.shownAtIso).toBe(at(1));

    expect(engine.accept('fit:test-1', at(2))).toBe(true);
    expect(engine.get('fit:test-1')!.status).toBe('accepted');
    // Aceptada deja de estar en la cola activa.
    expect(engine.active(at(2))).toHaveLength(0);

    expect(engine.apply('fit:test-1', at(3))).toBe(true);
    expect(engine.get('fit:test-1')!.status).toBe('applied');
    expect(engine.get('fit:test-1')!.appliedAtIso).toBe(at(3));

    expect(engine.recordOutcome('fit:test-1', 'completed', at(24), true)).toBe(true);
    expect(engine.get('fit:test-1')!.outcome).toEqual({
      recordedAtIso: at(24),
      label: 'completed',
      positive: true,
    });
  });

  it('apply solo desde accepted (no desde proposed/shown)', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate(), at(0));
    expect(engine.apply('fit:test-1', at(1))).toBe(false);
    engine.markShown('fit:test-1', at(1));
    expect(engine.apply('fit:test-1', at(2))).toBe(false);
    expect(engine.get('fit:test-1')!.status).toBe('shown');
  });

  it('transiciones inválidas devuelven false sin mutar', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate(), at(0));
    expect(engine.markShown('inexistente', at(1))).toBe(false);
    expect(engine.recordOutcome('fit:test-1', 'x', at(1))).toBe(false);
    expect(engine.get('fit:test-1')!.status).toBe('proposed');
  });
});

describe('"ahora no" ≠ "nunca"', () => {
  it('not-now: snooze oculta y permite re-proponer tras la ventana', () => {
    const engine = createSuggestionEngine(); // snoozeHours 48
    engine.propose(candidate(), at(0));
    engine.markShown('fit:test-1', at(1));

    expect(engine.dismiss('fit:test-1', 'not-now', at(2))).toBe(true);
    const rec = engine.get('fit:test-1')!;
    expect(rec.status).toBe('dismissed');
    expect(rec.dismissReason).toBe('not-now');
    expect(rec.snoozeUntilIso).toBe(at(50)); // 2 + 48h

    // Durante el snooze: ni visible ni re-propuesta.
    expect(engine.active(at(49))).toHaveLength(0);
    expect(engine.propose(candidate(), at(49))).toBeNull();

    // Tras el snooze: el MISMO id vuelve a la cola ("ahora no" no es "nunca").
    const reactivated = engine.propose(candidate(), at(50));
    expect(reactivated).not.toBeNull();
    expect(reactivated!.status).toBe('proposed');
    expect(engine.active(at(50)).map((s) => s.id)).toEqual(['fit:test-1']);
    expect(engine.get('fit:test-1')!.snoozeUntilIso).toBeUndefined();
  });

  it('not-interested: el id queda bloqueado para siempre', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate(), at(0));
    expect(engine.dismiss('fit:test-1', 'not-interested', at(1))).toBe(true);

    // Aunque pasen semanas, ese id no vuelve.
    expect(engine.propose(candidate(), at(24 * 30))).toBeNull();
    expect(engine.get('fit:test-1')!.dismissReason).toBe('not-interested');
  });

  it('irrelevant también es permanente', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate(), at(0));
    engine.dismiss('fit:test-1', 'irrelevant', at(1));
    expect(engine.propose(candidate(), at(24 * 60))).toBeNull();
  });
});

describe('cooldowns por tipo', () => {
  it('tras decidir una sugerencia, OTRA del mismo tipo espera el cooldown', () => {
    const engine = createSuggestionEngine({
      cooldownsByType: { 'volume-adjust': 72 },
      defaultCooldownHours: 6,
    });
    engine.propose(candidate({ id: 'one', type: 'volume-adjust' }), at(0));
    engine.accept('one', at(1)); // decisión → cooldown 72h para el tipo

    // Otro id, mismo tipo: bloqueado durante 72h (aplicado también registra decisión).
    expect(engine.propose(candidate({ id: 'two', type: 'volume-adjust' }), at(10))).toBeNull();
    expect(engine.propose(candidate({ id: 'two', type: 'volume-adjust' }), at(73))).not.toBeNull();

    // Tipo distinto sin entrada explícita: usa defaultCooldownHours 6.
    engine.propose(candidate({ id: 'three', type: 'review-cards' }), at(0));
    engine.accept('three', at(1));
    expect(engine.propose(candidate({ id: 'four', type: 'review-cards' }), at(5))).toBeNull();
    expect(engine.propose(candidate({ id: 'four', type: 'review-cards' }), at(7))).not.toBeNull();
  });

  it('dismiss not-now aplica el cooldown estándar del tipo (24h default)', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate({ id: 'a', type: 'volume-adjust' }), at(0));
    engine.dismiss('a', 'not-now', at(1));
    // Mismo id: bloqueado por snooze (48h) aunque el cooldown del tipo (24h) haya pasado.
    expect(engine.propose(candidate({ id: 'a', type: 'volume-adjust' }), at(30))).toBeNull();
    // Otro id del mismo tipo: solo el cooldown de tipo (24h) aplica.
    expect(engine.propose(candidate({ id: 'b', type: 'volume-adjust' }), at(20))).toBeNull();
    expect(engine.propose(candidate({ id: 'b', type: 'volume-adjust' }), at(26))).not.toBeNull();
  });
});

describe('expiración', () => {
  it('ttlHours vencido → expireDue la marca y sale de la cola', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate({ id: 'short', type: 'ta', ttlHours: 5 }), at(0));
    engine.markShown('short', at(1));

    expect(engine.active(at(4))).toHaveLength(1); // aún viva
    const expired = engine.expireDue(at(6));
    expect(expired).toEqual(['short']);
    expect(engine.get('short')!.status).toBe('expired');
    expect(engine.active(at(6))).toHaveLength(0);

    // Una vez expirada, el dominio puede re-proponer el mismo id.
    const revived = engine.propose(candidate({ id: 'short', type: 'ta' }), at(7));
    expect(revived).not.toBeNull();
    expect(revived!.status).toBe('proposed');
  });

  it('active() oculta caducadas aunque expireDue no se haya llamado', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate({ id: 'x', type: 'ta', ttlHours: 2 }), at(0));
    expect(engine.active(at(3))).toHaveLength(0); // TTL vencido: invisible
    expect(engine.get('x')!.status).toBe('proposed'); // sin transición aún
  });
});

describe('snapshot / restore', () => {
  it('roundtrip conserva sugerencias y cooldowns', () => {
    const engine = createSuggestionEngine({ cooldownsByType: { ta: 48 } });
    engine.propose(candidate({ id: 'a', type: 'ta' }), at(0));
    engine.propose(candidate({ id: 'b', type: 'tb' }), at(1));
    engine.markShown('a', at(2));
    engine.dismiss('b', 'not-now', at(3));
    engine.propose(candidate({ id: 'c', type: 'ta' }), at(0)); // dummy otro tipo

    const snapshot = engine.snapshot();
    const restored = SuggestionEngine.restore(snapshot, { cooldownsByType: { ta: 48 } });

    expect(restored.get('a')!.status).toBe('shown');
    expect(restored.get('b')!.snoozeUntilIso).toBe(at(51));
    expect(restored.active(at(5)).map((s) => s.id)).toEqual(['a', 'c']);
    // Cooldowns restaurados: tipo ta decidido en at(3)+? — b era tb; usar dismiss de a:
    const e2 = createSuggestionEngine({ cooldownsByType: { ta: 48 } });
    e2.propose(candidate({ id: 'a', type: 'ta' }), at(0));
    e2.dismiss('a', 'not-interested', at(1));
    const r2 = SuggestionEngine.restore(e2.snapshot(), { cooldownsByType: { ta: 48 } });
    expect(r2.propose(candidate({ id: 'zz', type: 'ta' }), at(10))).toBeNull(); // cooldown 48h vigente
    expect(r2.propose(candidate({ id: 'zz', type: 'ta' }), at(49))).not.toBeNull();
  });

  it('los snapshots de dos motores no comparten estado (copias defensivas)', () => {
    const engine = createSuggestionEngine();
    engine.propose(candidate(), at(0));
    const snap = engine.snapshot();
    snap.suggestions[0].title = 'mutado';
    expect(engine.get('fit:test-1')!.title).toBe('Ajusta tu volumen');
  });
});
