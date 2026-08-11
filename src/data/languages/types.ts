// src/data/languages/types.ts - Modelo de datos oficial para Idiomas

export type Exercise = {
  id: string;
  type: 'fill_in_blank' | 'order_sentence' | 'multiple_choice';
  prompt: string;
  options?: string[];
  correctAnswer: string;
};

export type Lesson = {
  id: string;
  order: number;
  title: string;
  kind: 'theory' | 'vocabulary' | 'listening' | 'speaking' | 'writing';
  content: string[];
  exercises: Exercise[];
  estimatedMinutes: number;
  sourcePdfUrl?: string;
};

export type Unit = {
  id: string;
  order: number;
  title: string;
  lessons: Lesson[];
};

export type LanguageCourse = {
  id: string;
  language: 'de' | 'en';
  title: string;
  units: Unit[];
};

export type VocabularyItem = {
  id: string;
  language: string;
  term: string;
  translation: string;
  example?: string;
  topic: string;
  level: string;
  lastReviewed?: string;
  easeFactor: number;
  intervalDays?: number;
};
