// src/data/career/__tests__/careerStore.test.ts — Store laboral persistido (AG-CAREER T1).
import { describe, it, expect, beforeEach } from 'vitest';
import { useCareerStore } from '../careerStore';
import { applicationsSeed } from '../applicationsSeed';
import { companiesSeed } from '../companiesSeed';
import { validateSingleNextAction, TRACKER_STATUS_TO_STAGE } from '../applications';

describe('careerStore (career-state-v1)', () => {
  beforeEach(() => {
    // Reset determinista al seed del tracker antes de cada caso.
    useCareerStore.setState({
      applications: applicationsSeed.map((a) => ({ ...a })),
      companies: companiesSeed.map((c) => ({ ...c, timeline: [...c.timeline] }))
    });
  });

  it('arranca con las aplicaciones REALES del tracker (sin mocks Epic/Ubisoft/Riot)', () => {
    const apps = useCareerStore.getState().applications;
    expect(apps.length).toBeGreaterThanOrEqual(3);
    expect(apps.every((a) => a.source === 'tracker-xlsx')).toBe(true);
    expect(apps.map((a) => a.companyName)).not.toContain('Epic Games');
    expect(apps.map((a) => a.companyName)).not.toContain('Ubisoft');
    expect(apps.map((a) => a.companyName)).not.toContain('Riot Games');
  });

  it('cada aplicación importada cumple la regla de única próxima acción', () => {
    for (const app of useCareerStore.getState().applications) {
      expect(validateSingleNextAction(app)).toBe(true);
    }
  });

  it('moveStage mueve de columna y sincroniza trackerStatus', () => {
    const first = useCareerStore.getState().applications[0];
    const ok = useCareerStore.getState().moveStage(first.id, 'Aplicado');
    expect(ok).toBe(true);
    const moved = useCareerStore.getState().applications.find((a) => a.id === first.id);
    expect(moved?.stage).toBe('Aplicado');
    expect(moved?.trackerStatus).toBe('Applied');
  });

  it('moveStage RECHAZA avanzar sin única próxima acción (regla de contrato)', () => {
    useCareerStore.getState().updateApplication(useCareerStore.getState().applications[0].id, {
      singleNextAction: '   '
    });
    const blocked = useCareerStore.getState().applications[0];
    expect(validateSingleNextAction(blocked)).toBe(false);
    expect(useCareerStore.getState().moveStage(blocked.id, 'Tibio')).toBe(false);
  });

  it('setNextAction fija la acción y la fecha de seguimiento', () => {
    const id = useCareerStore.getState().applications[0].id;
    useCareerStore.getState().setNextAction(id, 'Enviar email de seguimiento', '2026-09-01');
    const app = useCareerStore.getState().applications.find((a) => a.id === id);
    expect(app?.singleNextAction).toBe('Enviar email de seguimiento');
    expect(app?.followUpDateIso).toBe('2026-09-01');
  });

  it('setNextAction ignora acciones vacías (la acción única jamás queda vacía)', () => {
    const id = useCareerStore.getState().applications[0].id;
    const before = useCareerStore.getState().applications.find((a) => a.id === id)?.singleNextAction;
    useCareerStore.getState().setNextAction(id, '   ');
    const after = useCareerStore.getState().applications.find((a) => a.id === id)?.singleNextAction;
    expect(after).toBe(before);
  });

  it('addApplication crea con estado de tracker coherente con la columna', () => {
    useCareerStore.getState().addApplication({
      companyName: 'Nueva Empresa',
      roleTitle: 'Unity Technical Artist',
      stage: 'Tibio',
      singleNextAction: 'Investigar recruiter en LinkedIn',
      followUpDateIso: '2026-09-05'
    });
    const added = useCareerStore
      .getState()
      .applications.find((a) => a.companyName === 'Nueva Empresa');
    expect(added).toBeDefined();
    expect(added?.trackerStatus).toBe('Contacted');
    expect(added?.source).toBe('manual');
  });

  it('addTimelineEvent registra eventos inmutables en la empresa', () => {
    useCareerStore.getState().addTimelineEvent('Treeview Studio', {
      dateIso: '2026-08-23',
      type: 'cv_sent',
      note: 'CV enviado vía formulario'
    });
    const company = useCareerStore.getState().companies.find((c) => c.name === 'Treeview Studio');
    expect(company?.timeline.length).toBe(2);
    expect(company?.timeline.at(-1)?.note).toBe('CV enviado vía formulario');
  });

  it('resetToSeed restaura los datos del tracker', () => {
    const id = useCareerStore.getState().applications[0].id;
    useCareerStore.getState().updateApplication(id, { companyName: 'Cambiada' });
    useCareerStore.getState().resetToSeed();
    expect(useCareerStore.getState().applications.find((a) => a.id === id)?.companyName).toBe(
      applicationsSeed[0].companyName
    );
  });
});

describe('mapping tracker→pipeline', () => {
  it('los 3 estados reales importados caen en columna Frío (Saved)', () => {
    expect(TRACKER_STATUS_TO_STAGE.Saved).toBe('Frío');
    expect(TRACKER_STATUS_TO_STAGE.Offer).toBe('Caliente');
    expect(TRACKER_STATUS_TO_STAGE['No Fit']).toBe('Cerrado');
  });
});
