import React, { useState } from 'react';
import { useVocabularyStore } from '../../../lib/languages/vocabularyStore';
import { germanCourse } from '../../../data/languages/germanCourse';
import ErrorBoundary from '../../ErrorBoundary';
import Button from '../../ui/Button';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

export interface PlacementTestProps {
  /** Se invoca al colocar al usuario en una unidad. */
  onPlaced?: (unitId: string) => void;
}

interface PlacementItem {
  id: string;
  unitId: string;
  prompt: string;
  options: string[];
  answer: string;
}

/**
 * Test de nivelación A1.1 (16 ítems × 4 unidades, umbral de dominio 70%).
 * Coloca al estudiante en la PRIMERA unidad aún no dominada; si domina todas,
 * queda colocado en la última con recomendación de avanzar a A1.2.
 */
const ITEMS: PlacementItem[] = [
  // u1 — saludos / sein / haben
  { id: 'p1', unitId: 'u1', prompt: 'Llegas a las 8:00. Saludarías:', options: ['Gute Nacht!', 'Guten Morgen!', 'Auf Wiedersehen!'], answer: 'Guten Morgen!' },
  { id: 'p2', unitId: 'u1', prompt: 'Ich ______ aus Deutschland.', options: ['bist', 'ist', 'bin'], answer: 'bin' },
  { id: 'p3', unitId: 'u1', prompt: 'Wir ______ zwei Katzen.', options: ['haben', 'habt', 'hat'], answer: 'haben' },
  { id: 'p4', unitId: 'u1', prompt: 'Despedida FORMAL:', options: ['Tschüss!', 'Bis dann!', 'Auf Wiedersehen!'], answer: 'Auf Wiedersehen!' },
  // u2 — artículos / nominativo / negación
  { id: 'p5', unitId: 'u2', prompt: '___ Wohnung ist groß.', options: ['Das', 'Die', 'Der'], answer: 'Die' },
  { id: 'p6', unitId: 'u2', prompt: 'Das ist ___ Buch (un libro).', options: ['eine', 'kein', 'ein'], answer: 'ein' },
  { id: 'p7', unitId: 'u2', prompt: 'Ich habe ___ Zeit (no tengo tiempo).', options: ['keine', 'nicht', 'kein'], answer: 'keine' },
  { id: 'p8', unitId: 'u2', prompt: '___ Mädchen spielt (la niña).', options: ['Der', 'Das', 'Die'], answer: 'Das' },
  // u3 — números / pronombres / W-Fragen
  { id: 'p9', unitId: 'u3', prompt: '21 se escribe:', options: ['zwanzigeins', 'zwanzigundeins', 'einundzwanzig'], answer: 'einundzwanzig' },
  { id: 'p10', unitId: 'u3', prompt: '"Woher kommst du?" pregunta por:', options: ['el origen', 'la residencia', 'el nombre'], answer: 'el origen' },
  { id: 'p11', unitId: 'u3', prompt: 'Die Frau liest. → ___ liest.', options: ['Er', 'Es', 'Sie'], answer: 'Sie' },
  { id: 'p12', unitId: 'u3', prompt: '45 = ', options: ['fünfundvierzig', 'vierundfünfzig', 'fünfundfünfzig'], answer: 'fünfundvierzig' },
  // u4 — präsens regular / conversación / wechselpräpositionen
  { id: 'p13', unitId: 'u4', prompt: 'du ______ (wohnen)', options: ['wohnt', 'wohnst', 'wohnen'], answer: 'wohnst' },
  { id: 'p14', unitId: 'u4', prompt: 'er ______ (arbeiten)', options: ['arbeitst', 'arbeiten', 'arbeitet'], answer: 'arbeitet' },
  { id: 'p15', unitId: 'u4', prompt: 'Posición fija (Wo?): Das Buch liegt auf ___ Tisch.', options: ['den', 'dem', 'das'], answer: 'dem' },
  { id: 'p16', unitId: 'u4', prompt: 'En oración enunciativa, el verbo conjugado va en la posición:', options: ['1', '2', 'última'], answer: '2' }
];

const PASS_THRESHOLD = 0.7;

export default function PlacementTest({ onPlaced }: PlacementTestProps) {
  const setPlacementAction = useVocabularyStore((s) => s.setPlacement);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const current = ITEMS[index];
  const progress = Math.round((index / ITEMS.length) * 100);

  const handleAnswer = (option: string) => {
    const next = { ...answers, [current.id]: option };
    setAnswers(next);
    if (index < ITEMS.length - 1) {
      setIndex(index + 1);
      return;
    }

    // Calificación: primera unidad NO dominada (≥70% por unidad)
    const units = germanCourse.units.map((u) => u.id);
    let placed = units[units.length - 1];
    for (const unitId of units) {
      const itemsOfUnit = ITEMS.filter((i) => i.unitId === unitId);
      const correct = itemsOfUnit.filter((i) => next[i.id] === i.answer).length;
      if (correct / itemsOfUnit.length < PASS_THRESHOLD) {
        placed = unitId;
        break;
      }
    }
    setPlacementAction('de', placed);
    setFinished(true);
    onPlaced?.(placed);
  };

  const restart = () => {
    setAnswers({});
    setIndex(0);
    setFinished(false);
  };

  if (finished) {
    const units = germanCourse.units.map((u) => u.id);
    const results = units.map((unitId) => {
      const itemsOfUnit = ITEMS.filter((i) => i.unitId === unitId);
      const correct = itemsOfUnit.filter((i) => answers[i.id] === i.answer).length;
      return { unitId, correct: correct, total: itemsOfUnit.length };
    });
    const placedUnit = useVocabularyStore.getState().byLanguage.de?.placementUnitId ?? 'u1';
    const unitTitle = germanCourse.units.find((u) => u.id === placedUnit)?.title ?? '';

    return (
      <ErrorBoundary>
        <div className="ds-card ds-stack" style={{ borderColor: 'var(--color-state-done)' }}>
          <div className="ds-row" style={{ gap: '8px' }}>
            <CheckCircle2 size={20} style={{ color: 'var(--color-state-done)' }} />
            <h3 className="ds-h3" style={{ margin: 0 }}>
              Colocación completada
            </h3>
          </div>

          <div className="ds-body">
            Te colocamos en: <strong style={{ color: 'var(--accent)' }}>{unitTitle}</strong>
          </div>

          <div className="ds-stack-sm" style={{ gap: '6px' }}>
            {results.map(({ unitId, correct, total }) => (
              <div key={unitId} className="ds-row-between ds-caption" style={{ color: correct / total >= PASS_THRESHOLD ? 'var(--color-state-done)' : 'var(--text-tertiary)' }}>
                <span>{germanCourse.units.find((u) => u.id === unitId)?.title}</span>
                <strong>{correct}/{total} ({Math.round((correct / total) * 100)}%)</strong>
              </div>
            ))}
          </div>

          <Button variant="secondary" size="sm" onClick={restart}>
            Repetir test
          </Button>
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className="ds-card ds-stack">

        <div className="ds-row-between">
          <div className="ds-row" style={{ gap: '8px' }}>
            <ClipboardList size={18} style={{ color: 'var(--accent)' }} />
            <h3 className="ds-h3" style={{ margin: 0 }}>
              Test de nivelación A1.1
            </h3>
          </div>
          <span className="ds-caption" style={{ color: 'var(--text-tertiary)' }}>
            Pregunta {index + 1} de {ITEMS.length}
          </span>
        </div>

        <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: 'var(--accent)', borderRadius: '2px', transition: 'width 200ms' }} />
        </div>

        <div style={{ padding: 'var(--space-sm) 0' }}>
          <strong className="ds-label" style={{ fontSize: 'var(--fs-step)' }}>{current.prompt}</strong>
        </div>

        <div className="ds-stack-sm" style={{ gap: '8px' }}>
          {current.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => handleAnswer(opt)}
              className="ds-card ds-card-clickable ds-body"
              style={{
                textAlign: 'left',
                padding: '10px 14px'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
}
