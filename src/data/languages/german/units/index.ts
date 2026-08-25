// src/data/languages/german/units/index.ts
// Barrel del currículo A1.1 alemán: agrega las unidades y su vocabulario al
// esquema completo VocabularyItem (ids estables de-<unidad>-<n>).

import type { Unit, VocabularyItem } from '../../types';
import { unit01, unit01Vocabulary } from './unit-01-begruessung-sein-haben';
import { unit02, unit02Vocabulary } from './unit-02-artikel-nominativ';
import { unit03, unit03Vocabulary } from './unit-03-zahlen-pronomen';
import { unit04, unit04Vocabulary } from './unit-04-praesens-konversation';

/** Unidades A1.1 en orden pediátrico (sein/haben → artículos → números/pronombres → präsens). */
export const germanUnits: Unit[] = [unit01, unit02, unit03, unit04];

type UnitVocabEntry = { term: string; translation: string; example: string; topic: string };

function toItem(unit: Unit, entry: UnitVocabEntry, idx: number): VocabularyItem {
  return {
    id: `de-u${unit.order}-${String(idx + 1).padStart(2, '0')}`,
    language: 'de',
    term: entry.term,
    translation: entry.translation,
    example: entry.example,
    topic: entry.topic,
    level: 'A1',
    easeFactor: 2.5,
    intervalDays: 1
  };
}

/** Vocabulario agregado de todas las unidades (tarjetas nuevas para SM-2). */
export const germanUnitsVocabulary: VocabularyItem[] = [unit01, unit02, unit03, unit04].flatMap((unit, uIdx) => {
  const entries = [unit01Vocabulary, unit02Vocabulary, unit03Vocabulary, unit04Vocabulary][uIdx];
  return entries.map((entry, i) => toItem(unit, entry, i));
});
