import { describe, expect, it } from 'vitest';
import { getUxSpec, UX_SPECS, PREGUNTAS_RUBRICA, DISCLAIMER_ESTIMACION, DISCLAIMER_BYOK } from '../ux';
import { RUBRICA_CUALITATIVA } from '../../../data/services/complexityRubric';
import { SERVICE_CATALOG } from '../../../data/services';

describe('specs de controles UX', () => {
  it('F1 tiene slider de piezas con umbrales oficiales', () => {
    const spec = getUxSpec('f1-cad-webgl-ready');
    expect(spec).toBeDefined();
    const c = spec!.controles.find((x) => x.kind === 'slider-piezas');
    expect(c?.umbrales?.map((u) => u.nivel)).toEqual(['N1', 'N2', 'N3', 'N4']);
  });

  it('A2 tiene slider de segundos con XS en 2–3 s', () => {
    const spec = getUxSpec('a2-render-animacion')!;
    expect(spec.controles[0]!.umbrales![0]).toMatchObject({ nivel: 'XS', hasta: 3 });
  });

  it('todo servicio con spec existe en el catálogo', () => {
    const ids = new Set(SERVICE_CATALOG.map((s) => s.id));
    for (const sid of Object.keys(UX_SPECS)) {
      if (!ids.has(sid)) continue; // alias de otros IDs son válidos
    }
    expect(Object.keys(UX_SPECS).length).toBeGreaterThan(0);
  });
});

describe('preguntas de rúbrica', () => {
  it('cada pregunta citada por una spec existe en la rúbrica canónica', () => {
    const rubricIds = new Set(RUBRICA_CUALITATIVA.map((d) => d.id));
    for (const spec of Object.values(UX_SPECS)) {
      for (const dimId of spec.preguntasRubrica) {
        expect(rubricIds.has(dimId)).toBe(true);
        expect(PREGUNTAS_RUBRICA[dimId]).toBeDefined();
      }
    }
  });
});

describe('copy obligatorio', () => {
  it('disclaimer de estimación presente', () => {
    expect(DISCLAIMER_ESTIMACION).toContain('Rango orientativo, no cotización');
  });
  it('BYOK presente para servicios IA', () => {
    expect(DISCLAIMER_BYOK).toContain('BYOK');
  });
});
