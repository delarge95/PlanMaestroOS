// Tests del refuerzo inteligente de errores (SM-2 simplificado).

import { describe, expect, it, beforeEach } from 'vitest';
import { useErrorReviewStore, getDueErrors } from '../errorStore';

describe('errorStore — refuerzo espaciado', () => {
  beforeEach(() => {
    useErrorReviewStore.setState({ errors: {} });
  });

  it('registrar un error lo programa para mañana y cuenta veces falladas', () => {
    const now = new Date('2026-09-14T10:00:00Z');
    useErrorReviewStore.getState().recordError({
      language: 'de', exerciseId: 'ex-u1l2-2', prompt: 'Ich ______ Anna.', correctAnswer: 'heiße', userAnswer: 'bin', now,
    });
    const all = useErrorReviewStore.getState().errors;
    expect(all['de:ex-u1l2-2'].timesWrong).toBe(1);
    expect(all['de:ex-u1l2-2'].nextReviewIso).toBe('2026-09-15');
    // Hoy NO está vencido (vence mañana)
    expect(getDueErrors(undefined, now)).toHaveLength(0);
    expect(getDueErrors(undefined, new Date('2026-09-15T08:00:00Z'))).toHaveLength(1);
  });

  it('acertar amplía el intervalo ×2.5; fallar lo resetea a 1 día', () => {
    const now = new Date('2026-09-14T10:00:00Z');
    const st = useErrorReviewStore.getState();
    st.recordError({ language: 'en', exerciseId: 'e1', prompt: 'p', correctAnswer: 'a', userAnswer: 'b', now });
    st.reviewResult('en:e1', true, now);          // interval 1 → 2.5 ≈ 3
    expect(useErrorReviewStore.getState().errors['en:e1'].intervalDays).toBe(3);
    st.reviewResult('en:e1', true, now);          // 3 → 7.5 ≈ 8
    expect(useErrorReviewStore.getState().errors['en:e1'].intervalDays).toBeGreaterThanOrEqual(7);
    st.reviewResult('en:e1', false, now);         // fallo → reset 1
    const item = useErrorReviewStore.getState().errors['en:e1'];
    expect(item.intervalDays).toBe(1);
    expect(item.nextReviewIso).toBe('2026-09-15');
  });

  it('tres aciertos gradúan el ítem (sale de la cola para siempre)', () => {
    const now = new Date('2026-09-14T10:00:00Z');
    const st = useErrorReviewStore.getState();
    st.recordError({ language: 'de', exerciseId: 'g1', prompt: 'p', correctAnswer: 'a', userAnswer: 'b', now });
    st.reviewResult('de:g1', true, now);
    st.reviewResult('de:g1', true, now);
    st.reviewResult('de:g1', true, now);
    expect(useErrorReviewStore.getState().errors['de:g1'].graduated).toBe(true);
    expect(getDueErrors(undefined, new Date('2030-01-01T00:00:00Z'))).toHaveLength(0);
  });

  it('repetir el mismo error en lección re-programa a mañana y suma timesWrong', () => {
    const now = new Date('2026-09-14T10:00:00Z');
    const st = useErrorReviewStore.getState();
    st.recordError({ language: 'en', exerciseId: 'e2', prompt: 'p', correctAnswer: 'a', userAnswer: 'b', now });
    st.reviewResult('en:e2', true, now); // pasa a intervalo 3
    st.recordError({ language: 'en', exerciseId: 'e2', prompt: 'p', correctAnswer: 'a', userAnswer: 'c', now }); // vuelve a fallar en lección
    const item = useErrorReviewStore.getState().errors['en:e2'];
    expect(item.timesWrong).toBe(2);
    expect(item.intervalDays).toBe(1);
    expect(item.nextReviewIso).toBe('2026-09-15');
  });
});
