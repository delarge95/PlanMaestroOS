// src/data/languages/english/validateVocabulary.ts — Validador propio del banco EN (AG-EN)
//
// Regla de la ficha §3.6 / tarea 1: todo íitem del glosario técnico con
// categoría válida, ejemplo no vacío e id estable. Puro (sin I/O): lo consumen
// el test vitest y el script npx tsx de esta carpeta.
//
// El catálogo canónico vive en ./vocabulary.ts (conversión del curado T2A,
// ids en-tech-001..128). Este módulo NO re-convierte nada: solo valida.

import { englishTechnicalVocabulary } from './vocabulary';

/** Categorías técnicas válidas (las 4 del curado T2A / perfil del usuario). */
export const ENGLISH_TECH_CATEGORIES = ['realtime/graphics', 'unity/3d', 'web', 'ai/tooling'] as const;

/** Niveles CEFR presentes en el banco técnico. */
export const ENGLISH_TECH_LEVELS = ['B2', 'C1'] as const;

export interface VocabularyValidationIssue {
  index: number;
  itemId?: string;
  field: string;
  message: string;
}

export interface VocabularyValidationResult {
  ok: boolean;
  issues: VocabularyValidationIssue[];
  totalItems: number;
}

interface ValidatableItem {
  id: string;
  language: string;
  term: string;
  translation: string;
  example?: string;
  topic: string;
  level: string;
  easeFactor: number;
}

/** Valida un catálogo convertido contra las reglas mínimas del dominio EN. */
export function validateEnglishVocabulary(
  items: readonly ValidatableItem[] = englishTechnicalVocabulary
): VocabularyValidationResult {
  const issues: VocabularyValidationIssue[] = [];
  const seenIds = new Set<string>();

  items.forEach((item, index) => {
    const at = (field: string, message: string) => issues.push({ index, itemId: item.id, field, message });

    if (!(ENGLISH_TECH_CATEGORIES as readonly string[]).includes(item.topic)) {
      at('topic', `categoría inválida "${item.topic}" (válidas: ${ENGLISH_TECH_CATEGORIES.join(', ')}).`);
    }
    if (!item.example || item.example.trim().length === 0) {
      at('example', 'ejemplo vacío.');
    }
    if (!item.term || item.term.trim().length === 0) at('term', 'término vacío.');
    if (!item.translation || item.translation.trim().length === 0) at('translation', 'definición vacía.');
    if (item.language !== 'en') at('language', `idioma "${item.language}" ≠ 'en'.`);
    if (!(ENGLISH_TECH_LEVELS as readonly string[]).includes(item.level)) {
      at('level', `nivel "${item.level}" fuera de ${ENGLISH_TECH_LEVELS.join('/')}.`);
    }
    if (!(item.easeFactor > 0)) at('easeFactor', 'easeFactor debe ser > 0.');
    if (!/^en-tech-\d{3}$/.test(item.id)) at('id', `id "${item.id}" fuera del esquema en-tech-<nnn>.`);
    if (seenIds.has(item.id)) at('id', `id duplicado "${item.id}".`);
    seenIds.add(item.id);
  });

  return { ok: issues.length === 0, issues, totalItems: items.length };
}
