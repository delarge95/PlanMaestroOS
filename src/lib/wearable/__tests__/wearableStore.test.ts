/**
 * Tests de la cadena wearable (ENCARGO-WEARABLE, F2/F3 recortadas):
 * - wearableStore: ingestDaily (valida + persiste), getHrvTrend (media y
 *   z-score), FIFO >90 días, getLatest/getForDate, isFresh, parseWearableExport.
 * - UserState feed: con wearable data usa sleepHours del wearable (medido
 *   preferente); sin wearable cae al self-report del clinicalStore; el
 *   fragmento context.domain alimenta las reglas fit:hrv-depressed y
 *   fit:rhr-elevated (accesorio, no dependencia).
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { WearableDailyEntry } from '../wearableStore';

class MemoryStorage {
  private map = new Map<string, string>();
  getItem(key: string): string | null {
    return this.map.get(key) ?? null;
  }
  setItem(key: string, value: string): void {
    this.map.set(key, String(value));
  }
  removeItem(key: string): void {
    this.map.delete(key);
  }
  clear(): void {
    this.map.clear();
  }
}

const storage = new MemoryStorage();
vi.stubGlobal('localStorage', storage);
vi.stubGlobal('window', { localStorage: storage });

const {
  useWearableStore,
  validateWearableEntry,
  getLatestEntry,
  getEntryForDate,
  getHrvTrend,
  isFreshData,
  parseWearableExport,
  localTodayIso,
  MAX_DAILY_ENTRIES,
  WEARABLE_STORAGE_KEY,
} = await import('../wearableStore');

// userStateFeed importa helpers puros de wearableStore → cargar tras los stubs
const { buildUserState, biofeedbackToDailyLogs, buildWearableDomainContext } = await import(
  '../../rules/userStateFeed'
);
const { FITNESS_EXTENDED_RULES } = await import('../../../data/fitness/rules/fitnessRulesExtended');
const { evaluateRules } = await import('../../rules');
const { createEmptyUserState, deriveWeekAggregates } = await import(
  '../../../data/contracts/userState'
);
import type { RuleContext } from '../../rules/types';

const TODAY = '2026-09-16';

function entry(dateIso: string, over: Partial<WearableDailyEntry> = {}): WearableDailyEntry {
  return { dateIso, source: 'openstrap-edge', ...over };
}

function resetStore() {
  useWearableStore.setState({ daily: {} });
}

describe('wearableStore (wearable-daily-v1)', () => {
  beforeEach(() => {
    resetStore();
    storage.clear();
  });

  it('ingestDaily valida: fecha, source y rangos plausibles', () => {
    expect(validateWearableEntry(entry('2026-9-16')).ok).toBe(false); // formato no ISO
    expect(validateWearableEntry({ dateIso: '2026-09-16' }).ok).toBe(false); // sin source
    expect(validateWearableEntry(entry('2026-09-16', { hrvRmssdMs: 9999 })).ok).toBe(false);
    expect(validateWearableEntry(entry('2026-09-16', { strain: 25 })).ok).toBe(false);
    expect(validateWearableEntry(entry('2026-09-16', { restingHr: 48 })).ok).toBe(true);

    const store = useWearableStore.getState();
    expect(store.ingestDaily(entry('2026-13-45')).ok).toBe(false); // mes/día imposible
    expect(store.ingestDaily(entry('2026-09-16', { sleepHours: 7.2 })).ok).toBe(true);
    expect(useWearableStore.getState().daily['2026-09-16']).toMatchObject({
      dateIso: '2026-09-16',
      sleepHours: 7.2,
      source: 'openstrap-edge',
    });
    expect(useWearableStore.getState().daily['2026-09-16']?.ingestedAtIso).toMatch(
      /^\d{4}-\d{2}-\d{2}T/,
    );
  });

  it('ingestDaily persiste bajo la clave wearable-daily-v1 (shape del persist)', () => {
    useWearableStore.getState().ingestDaily(entry('2026-09-16', { hrvRmssdMs: 42, restingHr: 52 }));
    const raw = storage.getItem(WEARABLE_STORAGE_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!) as { state?: { daily?: Record<string, WearableDailyEntry> } };
    expect(parsed.state?.daily?.['2026-09-16']).toMatchObject({ hrvRmssdMs: 42, restingHr: 52 });
  });

  it('ingestDaily hace upsert por dateIso (re-ingest actualiza, no duplica)', () => {
    const store = useWearableStore.getState();
    store.ingestDaily(entry('2026-09-16', { batteryPct: 80 }));
    store.ingestDaily(entry('2026-09-16', { batteryPct: 95 }));
    const daily = useWearableStore.getState().daily;
    expect(Object.keys(daily)).toHaveLength(1);
    expect(daily['2026-09-16']?.batteryPct).toBe(95);
  });

  it('FIFO: más de 90 días → borra el más viejo y conserva 90', () => {
    const store = useWearableStore.getState();
    // 92 días consecutivos desde 2026-01-01 (i=0 … 91)
    for (let i = 0; i < MAX_DAILY_ENTRIES + 2; i += 1) {
      const t = new Date(Date.UTC(2026, 0, 1 + i));
      const iso = `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`;
      store.ingestDaily(entry(iso, { hrvRmssdMs: 40 }));
    }
    const daily = useWearableStore.getState().daily;
    const keys = Object.keys(daily).sort();
    expect(keys).toHaveLength(MAX_DAILY_ENTRIES);
    expect(keys[0]).toBe('2026-01-03'); // los 2 más viejos fuera
    expect(daily['2026-01-01']).toBeUndefined();
    expect(daily['2026-01-02']).toBeUndefined();
    expect(daily[keys[keys.length - 1]!]).toBeDefined();
  });

  it('getLatestEntry y getEntryForDate resuelven por fecha', () => {
    const daily: Record<string, WearableDailyEntry> = {
      '2026-09-10': entry('2026-09-10', { hrvRmssdMs: 50 }),
      '2026-09-16': entry('2026-09-16', { hrvRmssdMs: 42 }),
      '2026-09-12': entry('2026-09-12', { hrvRmssdMs: 55 }),
    };
    expect(getLatestEntry(daily)?.dateIso).toBe('2026-09-16');
    expect(getEntryForDate(daily, '2026-09-12')?.hrvRmssdMs).toBe(55);
    expect(getEntryForDate(daily, '2026-09-01')).toBeUndefined();
    expect(getLatestEntry({})).toBeUndefined();
  });

  it('getHrvTrend calcula promedio, desviación muestral y z-score (ventana 7d)', () => {
    // 7 días con HRV [40,50,60,50,40,50,60] → media 50, std 8.165, z(60)=1.22
    const vals = [40, 50, 60, 50, 40, 50, 60];
    const daily: Record<string, WearableDailyEntry> = {};
    vals.forEach((ms, i) => {
      const t = new Date(Date.UTC(2026, 8, 10 + i)); // 2026-09-10 … 16
      const iso = `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`;
      daily[iso] = entry(iso, { hrvRmssdMs: ms });
    });
    const trend = getHrvTrend(daily, 7, TODAY);
    expect(trend.sampleCount).toBe(7);
    expect(trend.mean).toBe(50);
    expect(trend.stdDev).toBeCloseTo(8.17, 1);
    expect(trend.latestMs).toBe(60);
    expect(trend.zScore).toBeCloseTo(1.22, 1);

    // Fuera de la ventana no cuenta (día antiguo excluido)
    daily['2026-08-01'] = entry('2026-08-01', { hrvRmssdMs: 200 });
    expect(getHrvTrend(daily, 7, TODAY).sampleCount).toBe(7);

    // 1 sola muestra → sin z-score (no se inventa baseline)
    const single = getHrvTrend({ '2026-09-16': entry('2026-09-16', { hrvRmssdMs: 42 }) }, 7, TODAY);
    expect(single.sampleCount).toBe(1);
    expect(single.stdDev).toBe(0);
    expect(single.zScore).toBeUndefined();

    // Vacío → cero muestras
    expect(getHrvTrend({}, 7, TODAY).sampleCount).toBe(0);
  });

  it('isFreshData: true con entry de hoy o de ayer; false con más viejo o vacío', () => {
    expect(isFreshData({ [TODAY]: entry(TODAY) }, TODAY)).toBe(true);
    expect(isFreshData({ '2026-09-15': entry('2026-09-15') }, TODAY)).toBe(true);
    expect(isFreshData({ '2026-09-14': entry('2026-09-14') }, TODAY)).toBe(false);
    expect(isFreshData({}, TODAY)).toBe(false);
    // Sin referenceIso usa hoy local (smoke del default)
    expect(isFreshData({ [localTodayIso()]: entry(localTodayIso()) })).toBe(true);
  });

  it('parseWearableExport acepta entrada única, array y {entries}, filtrando inválidos', () => {
    const valid = { dateIso: '2026-09-16', sleepHours: 7.2, hrvRmssdMs: 42, restingHr: 52 };
    const invalid = { dateIso: 'no-fecha', sleepHours: 5 };

    expect(parseWearableExport(valid)).toHaveLength(1);
    expect(parseWearableExport([valid, invalid])).toHaveLength(1);
    expect(parseWearableExport({ entries: [valid] })[0]?.source).toBe('openstrap-edge'); // default
    expect(parseWearableExport({ daily: [valid] })).toHaveLength(1);
    expect(parseWearableExport('basura')).toHaveLength(0);
    expect(parseWearableExport([invalid])).toHaveLength(0);
  });

  it('ingestMany devuelve resumen ingested/skipped sin romper el lote', () => {
    const result = useWearableStore.getState().ingestMany([
      entry('2026-09-15', { hrvRmssdMs: 50 }),
      entry('fecha-mala'),
      entry('2026-09-16', { hrvRmssdMs: 42 }),
    ]);
    expect(result.ingested).toBe(2);
    expect(result.skipped).toBe(1);
    expect(Object.keys(useWearableStore.getState().daily).sort()).toEqual(['2026-09-15', '2026-09-16']);
  });
});

describe('UserState feed — wearable como INPUT OPCIONAL', () => {
  it('con wearable: sleepHours MEDIDO preferente; el self-report queda de fallback', () => {
    const bio = [{ dateIso: TODAY, energy: 5, anxiety: 3, pain: 0, sleepHours: 6 }];
    const wearable = [entry(TODAY, { sleepHours: 7.2, hrvRmssdMs: 42 })];

    const logs = biofeedbackToDailyLogs(bio, wearable);
    expect(logs[0]?.sleepHours).toBe(7.2); // medido gana

    const sinWearable = biofeedbackToDailyLogs(bio);
    expect(sinWearable[0]?.sleepHours).toBe(6); // fallback clinicalStore
  });

  it('buildUserState integra el wearable en dailyLogs (fechas solo-wearable incluidas)', () => {
    const state = buildUserState({
      workoutHistory: [],
      biofeedback: [{ dateIso: '2026-09-15', energy: 5, anxiety: 3, pain: 0, sleepHours: 6 }],
      wearableDaily: [
        entry('2026-09-15', { sleepHours: 7.5 }),
        entry(TODAY, { sleepHours: 8 }), // sin bio-report → DailyLog nuevo
      ],
      nowIso: `${TODAY}T10:00:00.000Z`,
    });
    const byDate = new Map(state.dailyLogs.map((l) => [l.date, l]));
    expect(byDate.get('2026-09-15')?.sleepHours).toBe(7.5);
    expect(byDate.get(TODAY)?.sleepHours).toBe(8);
  });

  it('sin wearable: buildUserState funciona idéntico (accesorio, no dependencia)', () => {
    const state = buildUserState({
      workoutHistory: [],
      biofeedback: [{ dateIso: TODAY, energy: 5, anxiety: 3, pain: 0, sleepHours: 6.5 }],
      nowIso: `${TODAY}T10:00:00.000Z`,
    });
    expect(state.dailyLogs).toHaveLength(1);
    expect(state.dailyLogs[0]?.sleepHours).toBe(6.5);
  });

  it('buildWearableDomainContext: hrvZScore vs baseline 7d (hoy excluido) + RHR baseline', () => {
    // Baseline previo (7 días, terminando ayer): HRV [40,45,50,55,60,50,50] → media 50, std 6.455
    // Hoy: HRV 37 → z = (37−50)/6.45 ≈ −2.02 (std redondeado a 2 dec); RHR hoy 62 vs baseline 50 → delta 12
    const hrv = [40, 45, 50, 55, 60, 50, 50];
    const wearable: WearableDailyEntry[] = hrv.map((ms, i) => {
      const t = new Date(Date.UTC(2026, 8, 9 + i)); // 2026-09-09 … 15 (ayer termina)
      const iso = `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`;
      return entry(iso, { hrvRmssdMs: ms, restingHr: 50 });
    });
    wearable.push(entry(TODAY, { hrvRmssdMs: 37, restingHr: 62, sleepHours: 6 }));

    const fragment = buildWearableDomainContext(wearable, TODAY);
    expect(fragment.hrvRmssdMs).toBe(37);
    expect(fragment.restingHr).toBe(62);
    expect(fragment.hrvZScore).toBeCloseTo(-2.02, 2); // (37−50)/6.45 con std redondeado
    expect(fragment.restingHrBaseline7d).toBe(50);
    expect(fragment.wearableSleepHours).toBe(6);

    // Sin entry de HOY → fragmento vacío (cero cambios visibles)
    expect(buildWearableDomainContext(wearable.slice(0, 7), TODAY)).toEqual({});
    expect(buildWearableDomainContext(undefined, TODAY)).toEqual({});
  });

  it('reglas wearable-aware: warning con HRV deprimido / RHR elevado; not-applicable sin banda', () => {
    function contextWith(domain: Record<string, unknown>): RuleContext {
      const userState = createEmptyUserState(`${TODAY}T10:00:00.000Z`);
      return {
        userState,
        week: deriveWeekAggregates(userState, '2026-09-14'), // lunes de esa semana
        todayIso: TODAY,
        domain,
      };
    }

    // Hoy deprimido: HRV z −2.01 y RHR +12 bpm sobre baseline
    const hrv = [40, 45, 50, 55, 60, 50, 50];
    const wearable: WearableDailyEntry[] = hrv.map((ms, i) => {
      const t = new Date(Date.UTC(2026, 8, 9 + i));
      const iso = `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`;
      return entry(iso, { hrvRmssdMs: ms, restingHr: 50 });
    });
    wearable.push(entry(TODAY, { hrvRmssdMs: 37, restingHr: 62 }));
    const fragment = buildWearableDomainContext(wearable, TODAY);

    const withBand = evaluateRules(FITNESS_EXTENDED_RULES, contextWith(fragment));
    const hrvEv = withBand.find((e) => e.ruleId === 'fit:hrv-depressed');
    const rhrEv = withBand.find((e) => e.ruleId === 'fit:rhr-elevated');
    expect(hrvEv?.status).toBe('warning');
    expect(hrvEv?.value).toBeCloseTo(-2.02, 2);
    expect(hrvEv?.sourceRef).toMatchObject({ docId: 'whoop-ble', chapter: 'Metrics' });
    expect(rhrEv?.status).toBe('warning');
    expect(rhrEv?.value).toBeCloseTo(12, 1); // 62 − 50

    // Sin banda → not-applicable (nunca ok fabricado, nunca ruido)
    const noBand = evaluateRules(FITNESS_EXTENDED_RULES, contextWith({}));
    expect(noBand.find((e) => e.ruleId === 'fit:hrv-depressed')?.status).toBe('not-applicable');
    expect(noBand.find((e) => e.ruleId === 'fit:rhr-elevated')?.status).toBe('not-applicable');

    // Día bueno: z dentro de [−1, ∞) y delta RHR ≤ 10 → ok
    const good = [...wearable.slice(0, 7), entry(TODAY, { hrvRmssdMs: 52, restingHr: 51 })];
    const goodEv = evaluateRules(FITNESS_EXTENDED_RULES, contextWith(buildWearableDomainContext(good, TODAY)));
    expect(goodEv.find((e) => e.ruleId === 'fit:hrv-depressed')?.status).toBe('ok');
    expect(goodEv.find((e) => e.ruleId === 'fit:rhr-elevated')?.status).toBe('ok');
  });
});
