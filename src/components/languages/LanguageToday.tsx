import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SectionNav from '../ui/SectionNav';
import Button from '../ui/Button';
import { Languages, Flame } from 'lucide-react';
import { computeStreakDays, useVocabularyStore } from '../../lib/languages/vocabularyStore';
import { germanCourse } from '../../data/languages/germanCourse';
import { englishCourse } from '../../data/languages/englishCourse';
import ErrorReviewSession from './ErrorReviewSession';
import BookStudyMode from './BookStudyMode';

/** Bloque prescriptivo de un idioma para "hoy". */
export interface LanguageTodayBlock {
  label: string;
  title: string;
  minutes?: number;
  href: string;
}

export interface LanguageTodayProps {
  currentPath?: string;
  /**
   * Toggle del bloque inglés (por defecto true). Ya no es un estado fijo:
   * el hub puede ocultarlo pasando false.
   */
  showEnglish?: boolean;
  /**
   * Overrides aditivos de los bloques por idioma. Por defecto se derivan del
   * primer bloque pendiente de cada curso (german/english) — cero hardcode de
   * idioma concreto en el componente.
   */
  germanBlock?: Partial<LanguageTodayBlock>;
  englishBlock?: Partial<LanguageTodayBlock> | null;
}

function firstPendingBlock(
  courseUnits: { lessons: { title: string; estimatedMinutes: number }[] }[],
  fallbackTitle: string,
  href: string,
  label: string,
  override?: Partial<LanguageTodayBlock> | null
): LanguageTodayBlock | null {
  if (override === null) return null;
  const lesson = courseUnits[0]?.lessons[0];
  return {
    label,
    title: lesson?.title ?? fallbackTitle,
    minutes: lesson?.estimatedMinutes,
    href,
    ...override
  };
}

export default function LanguageToday({
  currentPath = '/app/languages',
  showEnglish = true,
  germanBlock,
  englishBlock
}: LanguageTodayProps) {
  // Racha REAL: días consecutivos con actividad de estudio (store persistido).
  // Sin actividad registrada muestra 0 — nunca un número fabricado.
  const activityDates = useVocabularyStore((s) => s.activityDates);
  const streakDays = computeStreakDays(activityDates);

  const de = firstPendingBlock(germanCourse.units, 'Alemán A1', '/app/languages/german', 'Alemán hoy', germanBlock);
  const en = showEnglish
    ? firstPendingBlock(englishCourse.units, 'Inglés profesional', '/app/languages/english', 'Inglés hoy', englishBlock)
    : null;

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>

        {/* NAVEGACIÓN NIVEL 2 */}
        {/* CABECERA PRESCRIPTIVA DE IDIOMAS */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 'var(--space-xs)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Languages size={22} style={{ color: 'var(--accent)' }} />
            <div>
              <h2 className="ds-h2" style={{ margin: 0 }}>
                Hoy
              </h2>
              <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
                Práctica diaria de Alemán e Inglés profesional
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '4px 10px', borderRadius: '20px', border: '1px solid var(--color-border-subtle)', fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }} title="Días consecutivos con actividad de estudio">
            <Flame size={15} style={{ color: streakDays > 0 ? 'var(--warning)' : 'var(--text-tertiary)' }} />
            <span>Racha: {streakDays} {streakDays === 1 ? 'día' : 'días'}</span>
          </div>
        </div>

        {[de, en].map((block, i) =>
          block ? (
            <div key={block.href} style={{
              background: 'var(--surface)',
              border: i === 0 && !germanBlock ? '1px solid var(--color-accent-primary-soft)' : '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-md)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div>
                <span style={{ fontSize: 'var(--fs-eyebrow)', color: i === 0 && !germanBlock ? 'var(--accent)' : 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {block.label}
                </span>
                <strong style={{ fontSize: i === 0 && !germanBlock ? '1rem' : '0.92rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
                  {block.title}{block.minutes ? ` (${block.minutes} min)` : ''}
                </strong>
              </div>

              <a href={block.href} style={{ textDecoration: 'none' }}>
                <Button variant={i === 0 && !germanBlock ? 'primary' : 'secondary'} size="sm">
                  Empezar sesión
                </Button>
              </a>
            </div>
          ) : null
        )}

        {/* Refuerzo inteligente de errores + estudio con libro (traslado del libro a la app) */}
        <ErrorReviewSession />
        <BookStudyMode />

      </div>
    </ErrorBoundary>
  );
}
