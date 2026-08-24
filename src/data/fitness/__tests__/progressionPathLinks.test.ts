import { describe, it, expect } from 'vitest';
import { progressionGroupToRoutine, routineCatalogUrl, isThenxMasterRoutineId } from '../progressionPathLinks';
import { thenxMasterRoutines } from '../programs/thenxMasterRoutines';
import { calisthenicsProgressions } from '../progressionsData';

// B7: integridad del puente progresiones ↔ rutinas tg-master del catálogo.
describe('progressionPathLinks (B7 progresión ↔ rutina)', () => {
  it('cada rutina mapeada existe en thenxMasterRoutines (sin enlaces muertos)', () => {
    const routineIds = new Set(thenxMasterRoutines.map((r) => r.id));
    const groupIds = new Set(calisthenicsProgressions.map((g) => g.id));

    for (const group of calisthenicsProgressions) {
      const link = progressionGroupToRoutine(group.id, group.title);
      if (!link) continue; // grupo sin rutina asociada (válido)
      expect(routineIds.has(link.routineId)).toBe(true);
      expect(link.label.length).toBeGreaterThan(0);
      expect(groupIds.has(group.id)).toBe(true);
    }
  });

  it('los grupos con masterWorkout THENX tienen rutina asociada', () => {
    const withMaster = calisthenicsProgressions.filter((g: any) => g.masterWorkout?.routineId);
    expect(withMaster.length).toBeGreaterThanOrEqual(11);
    for (const group of withMaster) {
      expect(progressionGroupToRoutine(group.id, group.title)).not.toBeNull();
    }
  });

  it('grupos sin rutina master devuelven null (back-lever, core-compression, pistol-squat)', () => {
    expect(progressionGroupToRoutine('back-lever', 'Back Lever Progression')).toBeNull();
    expect(progressionGroupToRoutine('core-compression', 'Core & Compression')).toBeNull();
    expect(progressionGroupToRoutine('pistol-squat', 'Pistol Squat Progression')).toBeNull();
  });

  it('el fallback por título resuelve rutas y URL de catálogo', () => {
    const link = progressionGroupToRoutine('grupo-nuevo', 'How To Dragon Flag');
    expect(link?.routineId).toBe('tg-master-97');
    expect(routineCatalogUrl('tg-master-97')).toBe('/app/fitness?tab=routines&routine=tg-master-97');
    expect(isThenxMasterRoutineId('tg-master-97')).toBe(true);
    expect(isThenxMasterRoutineId('min-max')).toBe(false);
  });
});
