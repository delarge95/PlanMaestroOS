// src/data/languages/english/__tests__/englishScenariosAndPrecision.test.ts
import { describe, it, expect } from 'vitest';
import { businessVocabulary, englishScenarios, englishStarAnswers } from '../scenarios';
import { technicalCollocations, workplacePhrasalVerbs, formalVsInformalPairs, falseFriendsTechESEN } from '../precision';

describe('English Scenarios Dataset (AG-EN Tarea 2)', () => {
  it('contiene 8 términos de vocabulario de negocio', () => {
    expect(businessVocabulary.length).toBe(8);
    for (const item of businessVocabulary) {
      expect(item.term.length).toBeGreaterThan(0);
      expect(item.definition.length).toBeGreaterThan(0);
      expect(item.example.length).toBeGreaterThan(0);
      expect(item.typicalMistakeES.length).toBeGreaterThan(0);
    }
  });

  it('contiene 8 escenarios profesionales con diálogo, keyPhrases y typicalMistakesES', () => {
    expect(englishScenarios.length).toBe(8);
    for (const sc of englishScenarios) {
      expect(sc.id).toMatch(/^scenario-\d+$/);
      expect(sc.title.length).toBeGreaterThan(0);
      expect(sc.objective.length).toBeGreaterThan(0);
      expect(sc.dialog.length).toBeGreaterThanOrEqual(6);
      expect(sc.keyPhrases.length).toBeGreaterThanOrEqual(3);
      expect(sc.typicalMistakesES.length).toBeGreaterThan(0);
    }
  });

  it('contiene 3 respuestas STAR con situación, tarea, acción, resultado y fuente doc-23', () => {
    expect(englishStarAnswers.length).toBe(3);
    for (const star of englishStarAnswers) {
      expect(star.id).toMatch(/^star-\d+$/);
      expect(star.sourceCitation).toContain('doc-23');
      expect(star.situation.length).toBeGreaterThan(50);
      expect(star.task.length).toBeGreaterThan(30);
      expect(star.action.length).toBeGreaterThan(50);
      expect(star.result.length).toBeGreaterThan(50);
    }
  });
});

describe('English Precision C1 Dataset (AG-EN Tarea 2)', () => {
  it('contiene collocations técnicas con ejemplos', () => {
    expect(technicalCollocations.length).toBeGreaterThanOrEqual(10);
    for (const item of technicalCollocations) {
      expect(item.collocation.length).toBeGreaterThan(0);
      expect(item.meaning.length).toBeGreaterThan(0);
      expect(item.example.length).toBeGreaterThan(0);
    }
  });

  it('contiene phrasal verbs con ejemplo y registro', () => {
    expect(workplacePhrasalVerbs.length).toBeGreaterThanOrEqual(10);
    for (const item of workplacePhrasalVerbs) {
      expect(item.verb.length).toBeGreaterThan(0);
      expect(item.meaning.length).toBeGreaterThan(0);
      expect(item.example.length).toBeGreaterThan(0);
    }
  });

  it('contiene pares de registro formal vs informal', () => {
    expect(formalVsInformalPairs.length).toBeGreaterThanOrEqual(8);
    for (const item of formalVsInformalPairs) {
      expect(item.formal.length).toBeGreaterThan(0);
      expect(item.informal.length).toBeGreaterThan(0);
      expect(item.context.length).toBeGreaterThan(0);
    }
  });

  it('contiene falsos amigos técnicos con advertencias en español', () => {
    expect(falseFriendsTechESEN.length).toBeGreaterThanOrEqual(8);
    for (const item of falseFriendsTechESEN) {
      expect(item.englishWord.length).toBeGreaterThan(0);
      expect(item.trueEnglishMeaning.length).toBeGreaterThan(0);
      expect(item.falseSpanishCognate.length).toBeGreaterThan(0);
      expect(item.correctUsage.length).toBeGreaterThan(0);
    }
  });
});
