// src/lib/career/__tests__/cvRender.test.ts — Render de CV: pureza y fidelitud doc-17.

import { describe, expect, it } from 'vitest';
import { renderCvMarkdown } from '../cvRender';
import { cvBase } from '../../../data/career/cv/cvData';
import { cvVariants, getCvVariant } from '../../../data/career/cv/cvVariants';

describe('renderCvMarkdown', () => {
  it('usa el headerTitle y summary de la variante, no los base', () => {
    const v = cvVariants[0];
    const md = renderCvMarkdown(cvBase, v);
    expect(md).toContain(v.headerTitle);
    expect(md).toContain(v.summary);
    expect(md).not.toContain(`## ${cvBase.profile.baseTitle}`);
  });

  it('los bullets de proyecto vienen de la variante cuando existen', () => {
    const ta = getCvVariant('unity-ta');
    expect(ta).toBeDefined();
    const md = renderCvMarkdown(cvBase, ta!);
    expect(md).toContain('Built technical art workflows connecting CAD-derived geometry');
    // El bullet base de TwinSight NO debe aparecer (la variante lo reemplaza).
    expect(md).not.toContain('Built TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection, including component selection');
  });

  it('respeta el orden de proyectos de la variante', () => {
    const tools = getCvVariant('tools-python')!;
    const md = renderCvMarkdown(cvBase, tools);
    const araIdx = md.indexOf('### ARA Framework');
    const twinsightIdx = md.indexOf('### TwinSight X500');
    expect(araIdx).toBeGreaterThan(-1);
    expect(twinsightIdx).toBeGreaterThan(-1);
    expect(araIdx).toBeLessThan(twinsightIdx); // ARA primero en la ruta tools
  });

  it('excluye proyectos opcionales por defecto y los incluye con la opción', () => {
    const v = cvVariants[0];
    const sinOpcional = renderCvMarkdown(cvBase, v);
    expect(sinOpcional).not.toContain('ai-news-aggregator');
    const conOpcional = renderCvMarkdown(cvBase, v, { includeOptionalProjects: true });
    expect(conOpcional).toContain('ai-news-aggregator');
  });

  it('omite links placeholder sin URL (§0.1: no inventar contactos)', () => {
    const md = renderCvMarkdown(cvBase, cvVariants[0]);
    expect(md).toContain('LinkedIn');
    expect(md).not.toMatch(/Email: $/m);
    expect(md).not.toMatch(/Portfolio: $/m);
  });

  it('la keywords line y el training van solo si se piden', () => {
    const v = cvVariants[0];
    expect(renderCvMarkdown(cvBase, v)).not.toContain('Keywords:');
    expect(renderCvMarkdown(cvBase, v)).not.toContain('Courses and Training');
    expect(renderCvMarkdown(cvBase, v, { includeKeywords: true, includeTraining: true })).toContain('Keywords:');
    expect(renderCvMarkdown(cvBase, v, { includeTraining: true })).toContain('Non-certified training used for skill development');
  });

  it('las 5 variantes renderizan sin explotar y traen sus target roles coherentes', () => {
    for (const v of cvVariants) {
      const md = renderCvMarkdown(cvBase, v, { includeKeywords: true });
      expect(md).toContain(v.headerTitle);
      expect(md).toContain('## Professional Summary');
      expect(md).toContain('## Experience');
      expect(v.targetRoles.length).toBeGreaterThan(0);
    }
  });

  it('el CV exportado NUNCA contiene notas editoriales del doc-17', () => {
    for (const v of cvVariants) {
      const md = renderCvMarkdown(cvBase, v, { includeTraining: true, includeOptionalProjects: true });
      expect(md).not.toMatch(/\[verify/i);
      expect(md).not.toMatch(/\[include only/i);
      expect(md).not.toMatch(/\[adjust/i);
      expect(md).not.toMatch(/\[date\]/i);
    }
  });

  it('«Expected [date]» se limpia a «Expected graduation» sin inventar fecha', () => {
    const md = renderCvMarkdown(cvBase, cvVariants[0]);
    expect(md).toContain('Expected graduation');
    expect(md).not.toContain('[date]');
    // El claim sospechoso sigue presente pero SIN la nota editorial (variante techvis).
    const mdTechvis = renderCvMarkdown(cvBase, getCvVariant('techvis-digitaltwin')!);
    expect(mdTechvis).toContain('perceived workload.');
    expect(mdTechvis).not.toContain('[verify');
  });
});
