import { describe, expect, it } from 'vitest';
import { planFromTreeAnswers } from '../../../data/services/treeToQuote';
import { SERVICES } from '../../../data/services/catalogCore';
import { SERVICE_VARIABLES, derivarTier } from '../../../data/services/serviceVariables';
import { computeQuote } from '../../../data/services/formula';

describe('treeToQuote: ver-modelo', () => {
  it('modelo web-ready (glTF) → solo el visor WEB-01', () => {
    const plan = planFromTreeAnswers('web-3d', 'ver-modelo', {
      'modelo-existente': 'si-tengo',
      'formato-archivo': 'gltf',
      'nivel-detalle': 3,
      'cantidad-piezas': 10,
    });
    expect(plan.picks).toHaveLength(1);
    expect(plan.picks[0].serviceId).toBe('WEB-01');
    expect(plan.picks[0].vals['numHotspots']).toBe(0);
  });

  it('modelo CAD existente → visor + conversión CAD-01 con piezas mapeadas', () => {
    const plan = planFromTreeAnswers('web-3d', 'ver-modelo', {
      'modelo-existente': 'si-tengo',
      'formato-archivo': 'step',
      'cantidad-piezas': 20,
      'materiales-acabado': 'variado',
    });
    expect(plan.picks.map(p => p.serviceId)).toEqual(['WEB-01', 'CAD-01']);
    expect(plan.picks[1].vals['numPiezas']).toBe(20);
    expect(plan.picks[1].vals['complejidad']).toContain('Freeform');
  });

  it('sin modelo → visor + RTA-01 con poligonos según nivel de detalle', () => {
    const plan = planFromTreeAnswers('web-3d', 'ver-modelo', {
      'modelo-existente': 'no-crear',
      'nivel-detalle': 3,
      'cantidad-piezas': 12,
      'materiales-acabado': 'detallado',
    });
    expect(plan.picks.map(p => p.serviceId)).toEqual(['WEB-01', 'RTA-01']);
    expect(plan.picks[1].vals['polyCount']).toBe(40000);
    expect(plan.picks[1].vals['numPiezas']).toBe(12);
    expect(plan.picks[1].vals['numTexturas']).toBe(6);
  });

  it('hotspots en interfaz avanzada → numHotspots 8 en el visor', () => {
    const plan = planFromTreeAnswers('web-3d', 'ver-modelo', {
      'modelo-existente': 'si-tengo',
      'formato-archivo': 'gltf',
      'interfaz': 'hotspots',
    });
    expect(plan.picks[0].vals['numHotspots']).toBe(8);
  });
});

describe('treeToQuote: interactivo', () => {
  it('configurar producto → WEB-04 (aplicación con reglas)', () => {
    const plan = planFromTreeAnswers('web-3d', 'interactivo', { 'tipo-interactividad': 'configurar' });
    expect(plan.picks[0].serviceId).toBe('WEB-04');
    expect(plan.picks[0].vals['numVariantes']).toBe(10);
  });

  it('plataforma app fuerza WEB-04 aunque la interacción sea rotar', () => {
    const plan = planFromTreeAnswers('web-3d', 'interactivo', { 'tipo-interactividad': 'rotar', 'plataforma': 'app' });
    expect(plan.picks[0].serviceId).toBe('WEB-04');
  });

  it('hotspots → WEB-01 con 8 hotspots', () => {
    const plan = planFromTreeAnswers('web-3d', 'interactivo', { 'tipo-interactividad': 'hotspots', 'plataforma': 'mi-web' });
    expect(plan.picks[0].serviceId).toBe('WEB-01');
    expect(plan.picks[0].vals['numHotspots']).toBe(8);
  });
});

describe('treeToQuote: scrollytelling', () => {
  it('escenas del slider → numSecciones de WEB-05', () => {
    const plan = planFromTreeAnswers('web-3d', 'scrollytelling', { 'escenas': 7, 'modelo-para-scroll': 'si' });
    expect(plan.picks).toHaveLength(1);
    expect(plan.picks[0].serviceId).toBe('WEB-05');
    expect(plan.picks[0].vals['numSecciones']).toBe(7);
  });

  it('sin modelo → suma RTA-01 con defaults documentados', () => {
    const plan = planFromTreeAnswers('web-3d', 'scrollytelling', { 'escenas': 4, 'modelo-para-scroll': 'no' });
    expect(plan.picks.map(p => p.serviceId)).toEqual(['WEB-05', 'RTA-01']);
    expect(plan.picks[1].vals['polyCount']).toBe(40000);
  });
});

describe('treeToQuote: web-app', () => {
  it('configurador → WEB-04 · catalogo → WEB-07 · juego → WEB-06', () => {
    expect(planFromTreeAnswers('web-3d', 'web-app', { 'tipo-app': 'configurador' }).picks[0].serviceId).toBe('WEB-04');
    expect(planFromTreeAnswers('web-3d', 'web-app', { 'tipo-app': 'catalogo' }).picks[0].serviceId).toBe('WEB-07');
    expect(planFromTreeAnswers('web-3d', 'web-app', { 'tipo-app': 'juego' }).picks[0].serviceId).toBe('WEB-06');
  });
});

describe('treeToQuote: consistencia con el motor de cotización', () => {
  const escenarios: Array<[string, string, Record<string, string | number | boolean>]> = [
    ['ver-modelo', 'ver-modelo', { 'modelo-existente': 'si-tengo', 'formato-archivo': 'step', 'cantidad-piezas': 25, 'interfaz': 'hotspots', 'donde-mostrar': 'feria' }],
    ['ver-modelo sin modelo', 'ver-modelo', { 'modelo-existente': 'no-crear', 'nivel-detalle': 4, 'cantidad-piezas': 30, 'materiales-acabado': 'detallado' }],
    ['interactivo app', 'interactivo', { 'tipo-interactividad': 'configurar', 'modelo-existente': 'no-crear', 'nivel-detalle': 2 }],
    ['scrollytelling', 'scrollytelling', { 'escenas': 9, 'modelo-para-scroll': 'no' }],
    ['web-app catalogo', 'web-app', { 'tipo-app': 'catalogo' }],
  ];

  for (const [nombre, sub, answers] of escenarios) {
    it(`"${nombre}": todo pick cotiza sin error y cada variable existe en SERVICE_VARIABLES`, () => {
      const plan = planFromTreeAnswers('web-3d', sub, answers);
      expect(plan.picks.length).toBeGreaterThan(0);
      for (const p of plan.picks) {
        expect(SERVICES.some(s => s.id === p.serviceId), `${p.serviceId} existe en catálogo`).toBe(true);
        const vars = SERVICE_VARIABLES[p.serviceId]?.variables ?? [];
        for (const [k] of Object.entries(p.vals)) {
          expect(vars.some(v => v.id === k), `${k} es variable de ${p.serviceId}`).toBe(true);
        }
        const tier = derivarTier(p.serviceId, p.vals);
        const q = computeQuote(p.serviceId, tier, 'USD', { firstClientLaunch: true });
        expect(q).not.toBeNull();
        expect(q!.totalMin).toBeGreaterThan(0);
      }
      // principal primero
      expect(plan.picks[0].role).toBe('principal');
    });
  }
});
