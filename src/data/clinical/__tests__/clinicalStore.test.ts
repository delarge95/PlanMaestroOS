import { describe, it, expect, beforeEach, vi } from 'vitest';

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

const { useClinicalStore, migrateLegacyLocalStorage, clampScore, todayLocalIso, MAX_BIOFEEDBACK_ENTRIES } =
  await import('../clinicalStore');

function resetStore() {
  useClinicalStore.setState({ biofeedback: [], exposures: [] });
}

describe('clinicalStore (clinical-state-v1)', () => {
  beforeEach(() => {
    resetStore();
    storage.clear();
    const seed = [
      { id: 'exp_1', title: 'A', hierarchyLevel: 'Baja', description: '', preAnxiety: 5, postAnxiety: 3, completed: false, notes: '' },
      { id: 'exp_2', title: 'B', hierarchyLevel: 'Media', description: '', preAnxiety: 7, postAnxiety: 4, completed: false, notes: '' },
      { id: 'exp_3', title: 'C', hierarchyLevel: 'Alta', description: '', preAnxiety: 8, postAnxiety: 5, completed: false, notes: '' }
    ];
    useClinicalStore.setState({ exposures: seed });
  });

  it('arranca con semilla de 3 exposiciones y bio-feedback vacío', () => {
    const s = useClinicalStore.getState();
    expect(s.exposures).toHaveLength(3);
    expect(s.biofeedback).toHaveLength(0);
  });

  it('saveBioFeedback inserta y hace upsert por dateIso con clamping de rangos', () => {
    const s1 = useClinicalStore.getState();
    s1.saveBioFeedback({ energy: 99, anxiety: -3, pain: 2, sleepHours: 7 }, '2026-08-25');
    let s = useClinicalStore.getState();
    expect(s.biofeedback).toHaveLength(1);
    expect(s.biofeedback[0]).toMatchObject({ dateIso: '2026-08-25', energy: 10, anxiety: 0, pain: 2, sleepHours: 7 });

    s.saveBioFeedback({ energy: 4, anxiety: 6, pain: 1, sleepHours: 8 }, '2026-08-25');
    s = useClinicalStore.getState();
    expect(s.biofeedback).toHaveLength(1);
    expect(s.biofeedback[0].energy).toBe(4);
  });

  it('mantiene máximo MAX_BIOFEEDBACK_ENTRIES ordenado descendente', () => {
    const s = useClinicalStore.getState();
    for (let i = 0; i < MAX_BIOFEEDBACK_ENTRIES + 5; i += 1) {
      const iso = `2026-07-${String(1 + (i % 28)).padStart(2, '0')}`;
      s.saveBioFeedback({ energy: 5, anxiety: 5, pain: 0, sleepHours: 7 }, iso);
    }
    const list = useClinicalStore.getState().biofeedback;
    expect(list.length).toBeLessThanOrEqual(MAX_BIOFEEDBACK_ENTRIES);
    for (let i = 1; i < list.length; i += 1) {
      expect(list[i - 1].dateIso >= list[i].dateIso).toBe(true);
    }
  });

  it('toggleExposureCompleted alterna y devuelve el nuevo estado', () => {
    const s = useClinicalStore.getState();
    expect(s.toggleExposureCompleted('exp_2')).toBe(true);
    expect(useClinicalStore.getState().exposures.find((e) => e.id === 'exp_2')?.completed).toBe(true);
    expect(useClinicalStore.getState().toggleExposureCompleted('exp_2')).toBe(false);
  });

  it('updateExposureField actualiza pre/post ansiedad', () => {
    const s = useClinicalStore.getState();
    s.updateExposureField('exp_1', 'preAnxiety', 9);
    s.updateExposureField('exp_1', 'postAnxiety', 2);
    const exp = useClinicalStore.getState().exposures.find((e) => e.id === 'exp_1');
    expect(exp?.preAnxiety).toBe(9);
    expect(exp?.postAnxiety).toBe(2);
  });

  it('addExposure añade con id generado y evita duplicados', () => {
    const id = useClinicalStore.getState().addExposure({
      title: 'Nueva exposición', hierarchyLevel: 'Media', description: '',
      preAnxiety: 4, postAnxiety: 2, completed: false, notes: ''
    });
    expect(useClinicalStore.getState().exposures).toHaveLength(4);
    const dup = useClinicalStore.getState().addExposure({
      id, title: 'Duplicada', hierarchyLevel: 'Baja', description: '',
      preAnxiety: 1, postAnxiety: 1, completed: false, notes: ''
    });
    expect(dup).toBe(id);
    expect(useClinicalStore.getState().exposures).toHaveLength(4);
  });

  it('persiste en la clave clinical-state-v1 tras cada acción', async () => {
    useClinicalStore.getState().saveBioFeedback(
      { energy: 6, anxiety: 3, pain: 1, sleepHours: 7.5 },
      todayLocalIso()
    );
    const raw = storage.getItem('clinical-state-v1');
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!) as { state: { biofeedback: unknown[] } };
    expect(parsed.state.biofeedback).toHaveLength(1);
  });

  it('migrateLegacyLocalStorage importa claves legacy sin sobreescribir y marca flag', () => {
    useClinicalStore.setState({ biofeedback: [], exposures: [] });
    storage.setItem(
      'clinical_biofeedback_logs',
      JSON.stringify([
        { date: 'lun., 24 ago.', energy: 6, anxiety: 4, pain: 2, sleepHours: 7 },
        { date: 'fecha-ilegible', energy: 9, anxiety: 9, pain: 9, sleepHours: 9 }
      ])
    );
    storage.setItem(
      'clinical_exposures',
      JSON.stringify([{ id: 'legacy_1', title: 'Legacy', hierarchyLevel: 'Media', description: 'd', preAnxiety: 3, postAnxiety: 1, completed: true, notes: '' }])
    );
    const result = migrateLegacyLocalStorage();
    expect(result.biofeedbackMigrated).toBe(1);
    expect(result.biofeedbackSkipped).toBe(1);
    expect(result.exposuresMigrated).toBe(1);

    const s = useClinicalStore.getState();
    expect(s.biofeedback[0]).toMatchObject({ dateIso: `${new Date().getFullYear()}-08-24`, energy: 6 });
    expect(s.exposures.some((e) => e.id === 'legacy_1')).toBe(true);
    expect(storage.getItem('clinical_legacy_migrated_v1')).toBe('1');

    const second = migrateLegacyLocalStorage();
    expect(second.biofeedbackMigrated).toBe(0);
    expect(second.exposuresMigrated).toBe(0);
  });  it('helpers: clampScore respeta rangos y todayLocalIso devuelve YYYY-MM-DD local', () => {
    expect(clampScore(11, 1, 10)).toBe(10);
    expect(clampScore(-1, 0, 10)).toBe(0);
    expect(clampScore(Number.NaN, 1, 10)).toBe(1);
    expect(todayLocalIso(new Date(2026, 7, 25, 23, 59))).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
