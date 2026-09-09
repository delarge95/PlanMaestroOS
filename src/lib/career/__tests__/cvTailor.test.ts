// src/lib/career/__tests__/cvTailor.test.ts — Personalización automática por aplicación.

import { describe, expect, it } from 'vitest';
import {
  applyTailoring,
  autoTailorFromResearch,
  createDraftKit,
  extractTechKeywords,
  suggestVariant,
  type ApplicationKit,
} from '../cvTailor';
import { getCvVariant } from '../../../data/career/cv/cvVariants';
import type { CompanyResearch } from '../../../data/career/careerContracts';

const research = (over: Partial<CompanyResearch> = {}): CompanyResearch => ({
  companyName: 'TestCorp',
  status: 'completa',
  products: 'Digital twin platform for industrial assembly',
  stack: 'Unity, Three.js, WebGL, C#, Blender',
  size: '',
  hiringProcess: '',
  contacts: '',
  tailoringNotes: 'Enfatizar optimización CAD y visualización de ensamblaje',
  sources: [],
  updatedAtIso: '2026-09-09',
  ...over,
});

describe('extractTechKeywords', () => {
  it('encuentra términos con límites de palabra y no dentro de otras palabras', () => {
    const kws = extractTechKeywords('Experiencia con Unity, C# y WebGL; urp pipeline y Python');
    expect(kws).toContain('unity');
    expect(kws).toContain('c#');
    expect(kws).toContain('webgl');
    expect(kws).toContain('urp');
    expect(kws).toContain('python');
  });

  it('devuelve vacío sin inventar nada', () => {
    expect(extractTechKeywords('empresa de marketing digital')).toEqual([]);
  });
});

describe('suggestVariant', () => {
  it('match explícito por targetRole', () => {
    expect(suggestVariant('Senior Unity Technical Artist').variantId).toBe('unity-ta');
    expect(suggestVariant('Unity WebGL Developer').variantId).toBe('unity-webgl');
    expect(suggestVariant('Digital Twin Visualization Developer').variantId).toBe('techvis-digitaltwin');
  });

  it('match parcial por keywords compartidas', () => {
    const s = suggestVariant('3D Web Engineer — WebGL focus');
    expect(s.confidence).toBe('partial');
    expect(s.variantId).toBe('unity-webgl');
  });

  it('fallback determinista a la variante principal', () => {
    const s = suggestVariant('Chef de cocina');
    expect(s.confidence).toBe('fallback');
    expect(s.variantId).toBe('realtime-unity');
  });
});

describe('autoTailorFromResearch', () => {
  it('deriva énfasis del stack y keywords del conjunto', () => {
    const { emphasisExtra, extraKeywords } = autoTailorFromResearch(research());
    expect(emphasisExtra).toContain('unity');
    expect(emphasisExtra).toContain('three.js');
    expect(extraKeywords).toContain('webgl');
    expect(extraKeywords).toContain('digital twin');
  });

  it('sin research no inventa nada', () => {
    expect(autoTailorFromResearch(undefined)).toEqual({ extraKeywords: [], emphasisExtra: [] });
  });
});

describe('applyTailoring', () => {
  const base = getCvVariant('realtime-unity')!;

  it('fusiona keywords/énfasis del kit y del research sin duplicar', () => {
    const kit: ApplicationKit = {
      applicationId: 'a1', variantId: 'realtime-unity', variantConfidence: 'explicit',
      extraKeywords: ['webgl', 'digital twin'], emphasisExtra: [],
      briefAngles: {}, updatedAtIso: '2026-09-09',
    };
    const out = applyTailoring(base, kit, research());
    expect(out.keywords).toContain('digital twin');
    expect(out.keywords.filter((k) => k === 'webgl').length).toBe(1);
    expect(out.summary).toBe(base.summary); // sin override, se conserva
  });

  it('summaryOverride sustituye el resumen y leadProjectId reordena', () => {
    const kit: ApplicationKit = {
      applicationId: 'a1', variantId: 'realtime-unity', variantConfidence: 'explicit',
      summaryOverride: 'Resumen a medida para TestCorp.',
      extraKeywords: [], emphasisExtra: [], leadProjectId: 'ara-framework',
      briefAngles: {}, updatedAtIso: '2026-09-09',
    };
    const out = applyTailoring(base, kit);
    expect(out.summary).toBe('Resumen a medida para TestCorp.');
    expect(out.projectOrder![0]).toBe('ara-framework');
    expect(out.projectOrder![1]).toBe('twinsight-x500');
  });

  it('sin kit ni research devuelve la variante intacta', () => {
    expect(applyTailoring(base, undefined, undefined)).toEqual(base);
  });
});

describe('createDraftKit', () => {
  it('sugiere variante y pre-rellena desde la investigación', () => {
    const kit = createDraftKit('app-1', 'Unity Technical Artist', research());
    expect(kit.variantId).toBe('unity-ta');
    expect(kit.variantConfidence).toBe('explicit');
    expect(kit.emphasisExtra.length).toBeGreaterThan(0);
    expect(kit.briefAngles).toEqual({});
  });
});
