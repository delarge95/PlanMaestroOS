import { describe, it, expect } from 'vitest';
import { createEventBus, categoryOf } from '../index';
import type { AppEvent } from '../index';

const NOW = '2026-08-22T10:00:00.000Z';

describe('categoryOf', () => {
  it('deriva la categoría del prefijo del tipo', () => {
    expect(categoryOf('time:day-start')).toBe('time');
    expect(categoryOf('cycle:weekly-review')).toBe('cycle');
    expect(categoryOf('session:completed')).toBe('session');
    expect(categoryOf('anomaly:pain-spike')).toBe('anomaly');
  });
});

describe('EventBus — despacho', () => {
  it('entrega el envelope completo y tipado al handler', () => {
    const bus = createEventBus();
    let received: AppEvent | undefined;
    bus.on('session:pain-reported', (e) => {
      received = e;
    });
    bus.emit('session:pain-reported', NOW, { bodyZone: 'shoulder', severity: 7, timing: 'during' }, { domain: 'fitness' });

    expect(received).toBeDefined();
    expect(received!.type).toBe('session:pain-reported');
    expect(received!.category).toBe('session');
    expect(received!.domain).toBe('fitness');
    expect(received!.occurredAtIso).toBe(NOW);
    expect(received!.payload).toEqual({ bodyZone: 'shoulder', severity: 7, timing: 'during' });
    expect(received!.id).toContain('session:pain-reported');
  });

  it('invoca los handlers en orden de registro (determinista)', () => {
    const bus = createEventBus();
    const calls: string[] = [];
    bus.on('time:day-start', () => calls.push('first'));
    bus.on('time:day-start', () => calls.push('second'));
    bus.on('time:day-start', () => calls.push('third'));
    bus.emit('time:day-start', NOW, { dateIso: '2026-08-22' });
    expect(calls).toEqual(['first', 'second', 'third']);
  });

  it('un handler defectuoso no rompe la cadena y queda registrado', () => {
    const bus = createEventBus();
    const calls: string[] = [];
    bus.on('anomaly:streak-broken', () => {
      throw new Error('boom');
    });
    bus.on('anomaly:streak-broken', () => calls.push('still-called'));
    expect(() =>
      bus.emit('anomaly:streak-broken', NOW, { domain: 'german', streakDays: 12 }),
    ).not.toThrow();
    expect(calls).toEqual(['still-called']);
    expect(bus.handlerErrors()).toHaveLength(1);
    expect(bus.handlerErrors()[0].message).toBe('boom');
  });

  it('on devuelve una desuscripción idempotente', () => {
    const bus = createEventBus();
    let count = 0;
    const off = bus.on('session:started', () => { count += 1; });
    bus.emit('session:started', NOW, { sessionId: 's1', domain: 'fitness' });
    off();
    off(); // segunda llamada inofensiva
    bus.emit('session:started', NOW, { sessionId: 's2', domain: 'fitness' });
    expect(count).toBe(1);
    expect(bus.listenerCount()).toBe(0);
  });

  it('once se desuscribe tras la primera invocación', () => {
    const bus = createEventBus();
    let count = 0;
    bus.once('time:evening', () => { count += 1; });
    bus.emit('time:evening', NOW, { dateIso: '2026-08-22' });
    bus.emit('time:evening', NOW, { dateIso: '2026-08-23' });
    expect(count).toBe(1);
  });

  it('onAny recibe todos los eventos y se puede filtrar', () => {
    const bus = createEventBus();
    const seen: string[] = [];
    bus.onAny((e) => seen.push(e.type));
    bus.emit('time:day-start', NOW, { dateIso: '2026-08-22' });
    bus.emit('session:completed', NOW, { sessionId: 's1', domain: 'fitness', durationMin: 50 });
    expect(seen).toEqual(['time:day-start', 'session:completed']);
  });
});

describe('EventBus — historial', () => {
  it('mantiene historial acotado (ring buffer)', () => {
    const bus = createEventBus({ historyLimit: 5 });
    for (let i = 0; i < 8; i += 1) {
      bus.emit('time:day-start', `2026-08-1${i}T06:00:00.000Z`, { dateIso: `2026-08-1${i}` });
    }
    expect(bus.history()).toHaveLength(5);
    // Se retienen los MÁS RECIENTES.
    expect(bus.history()[0].payload).toEqual({ dateIso: '2026-08-13' });
  });

  it('history(type) filtra por tipo y last(type) devuelve el más reciente', () => {
    const bus = createEventBus();
    bus.emit('time:week-start', NOW, { weekStartIso: '2026-08-17' });
    bus.emit('cycle:weekly-review', NOW, { weekStartIso: '2026-08-17' });
    bus.emit('time:week-start', '2026-08-24T06:00:00.000Z', { weekStartIso: '2026-08-24' });
    expect(bus.history('time:week-start')).toHaveLength(2);
    expect(bus.last('time:week-start')?.payload).toEqual({ weekStartIso: '2026-08-24' });
    expect(bus.last('anomaly:task-stuck')).toBeUndefined();
  });

  it('clear resetea suscripciones, historial y errores', () => {
    const bus = createEventBus();
    bus.on('time:day-start', () => {});
    bus.onAny(() => {});
    bus.emit('time:day-start', NOW, { dateIso: '2026-08-22' });
    bus.clear();
    expect(bus.listenerCount()).toBe(0);
    expect(bus.history()).toHaveLength(0);
    expect(bus.handlerErrors()).toHaveLength(0);
  });
});

describe('EventBus — integración con el flujo del sistema', () => {
  it('emite anomaly:rule-violation con payload del motor de reglas', () => {
    const bus = createEventBus();
    const violations: Array<{ ruleId: string; value?: number }> = [];
    bus.on('anomaly:rule-violation', (e) => {
      violations.push({ ruleId: e.payload.ruleId, value: e.payload.value });
    });
    bus.emit('anomaly:rule-violation', NOW, { ruleId: 'fit:volume-10-20', domain: 'fitness', value: 24 });
    expect(violations).toEqual([{ ruleId: 'fit:volume-10-20', value: 24 }]);
  });

  it('los ids de eventos son únicos por instancia aunque coincida timestamp', () => {
    const bus = createEventBus();
    const a = bus.emit('time:day-start', NOW, { dateIso: '2026-08-22' });
    const b = bus.emit('time:day-start', NOW, { dateIso: '2026-08-22' });
    expect(a.id).not.toBe(b.id);
  });
});
