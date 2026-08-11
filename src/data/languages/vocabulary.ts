// src/data/languages/vocabulary.ts - Banco de Vocabulario para Repetición Espaciada

import type { VocabularyItem } from './types';

export const initialVocabulary: VocabularyItem[] = [
  { id: 'v1', language: 'de', term: 'die Anforderung', translation: 'el requisito / requerimiento', example: 'Das ist eine wichtige Anforderung.', topic: 'Tech/Work', level: 'A2', easeFactor: 2.5, intervalDays: 1 },
  { id: 'v2', language: 'de', term: 'die Entwicklung', translation: 'el desarrollo', example: 'Softwareentwicklung ist mein Beruf.', topic: 'Tech/Work', level: 'A2', easeFactor: 2.5, intervalDays: 1 },
  { id: 'v3', language: 'de', term: 'entscheiden', translation: 'decidir', example: 'Wir müssen jetzt entscheiden.', topic: 'General', level: 'A1', easeFactor: 2.5, intervalDays: 1 },
  { id: 'v4', language: 'de', term: 'der Speicher', translation: 'la memoria / almacenamiento', example: 'Der Arbeitsspeicher ist voll.', topic: 'Tech/Work', level: 'A2', easeFactor: 2.5, intervalDays: 1 },
  { id: 'v5', language: 'de', term: 'die Vorbereitung', translation: 'la preparación', example: 'Die Vorbereitung dauert 10 Minuten.', topic: 'General', level: 'A2', easeFactor: 2.5, intervalDays: 1 }
];
