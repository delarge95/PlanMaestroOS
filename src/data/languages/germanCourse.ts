// src/data/languages/germanCourse.ts - Curso de Alemán A1.1 (compuesto por unidades)
// Las unidades viven en src/data/languages/german/units/*.ts (currículo B3).
// Este archivo solo las compone — el contrato LanguageCourse no cambia.

import type { LanguageCourse } from './types';
import { germanUnits } from './german/units';

export const germanCourse: LanguageCourse = {
  id: 'german-a1-a2',
  language: 'de',
  title: 'Alemán A1.1 — Currículo académico por unidades',
  units: germanUnits
};
