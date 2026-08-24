// Tests de datos Cardio: integridad de citas y coherencia de METs (AG-CARDIO).
import { describe, expect, it } from 'vitest';
import { CARDIO_PRESETS, computeAvgMets, computeTotalMin, getPresetsWithMet } from '../presets';
import { APPROACHES } from '../approaches';
import { DISCIPLINES } from '../disciplines';
import { CARDIO_SOURCES } from '../sources';

function checkCitations(cites: Array<{ sourceId: string; locator: string }>, ctx: string) {
  for (const c of cites) {
    expect(c.sourceId, `${ctx}: sourceId conocido`).toBeOneOf(Object.keys(CARDIO_SOURCES));
    expect(c.locator.trim().length, `${ctx}: locator no vacío`).toBeGreaterThan(3);
  }
}

describe('cardio data integrity', () => {
  it('cada disciplina tiene METs con cita', () => {
    for (const d of DISCIPLINES) {
      expect(d.why.length).toBeGreaterThan(0);
      checkCitations(d.why, `disciplina ${d.id}`);
      checkCitations(d.typicalMets.why, `disciplina ${d.id} METs`);
    }
  });

  it('cada enfoque tiene citas', () => {
    for (const a of APPROACHES) {
      expect(a.why.length).toBeGreaterThan(0);
      checkCitations(a.why, `enfoque ${a.id}`);
    }
  });

  it('cada preset: disciplina/enfoque válidos, bloques con intensidad citada, avgMets coherente', () => {
    expect(CARDIO_PRESETS.length).toBeGreaterThanOrEqual(12);
    for (const p of CARDIO_PRESETS) {
      expect(DICIPLINE_IDS, `preset ${p.id}`).toContain(p.disciplineId);
      expect(APPROACH_IDS, `preset ${p.id}`).toContain(p.approachId);
      expect(p.why.length).toBeGreaterThan(0);
      checkCitations(p.why, `preset ${p.id}`);
      expect(p.blocks.length).toBeGreaterThanOrEqual(2);
      for (const b of p.blocks) {
        expect(b.intensity.label.length).toBeGreaterThan(0);
        checkCitations(b.intensity.why, `preset ${p.id} bloque ${b.id}`);
        if (b.intensity.mets !== undefined) {
          expect(b.intensity.mets).toBeGreaterThan(0);
        }
      }
      // avgMets declarado = recomputado exactamente (redondeo a 1 decimal)
      const recomputed = computeAvgMets(p);
      expect(Math.abs(recomputed - p.avgMets), `avgMets de ${p.id}`).toBeLessThan(0.06);
      // totalMin declarado ≈ suma real de bloques (±5 min de redondeo de diseño)
      const sumMin = computeTotalMin(p);
      expect(Math.abs(sumMin - p.totalMin), `totalMin de ${p.id}`).toBeLessThanOrEqual(5);
    }
  });

  it('getPresetsWithMet exporta contrato kcal con cita para AG-NUTRI', () => {
    const exported = getPresetsWithMet();
    expect(exported.length).toBe(CARDIO_PRESETS.length);
    for (const e of exported) {
      expect(e.avgMets).toBeGreaterThan(0);
      expect(e.citation.sourceId).toBeOneOf(Object.keys(CARDIO_SOURCES));
      expect(e.citation.locator.length).toBeGreaterThan(3);
    }
  });

  it('todos los presets son editables', () => {
    for (const p of CARDIO_PRESETS) expect(p.editable).toBe(true);
  });
});

const DICIPLINE_IDS = DISCIPLINES.map((d) => d.id);
const APPROACH_IDS = APPROACHES.map((a) => a.id);
