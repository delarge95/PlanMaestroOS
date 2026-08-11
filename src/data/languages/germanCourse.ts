// src/data/languages/germanCourse.ts - Estructura de Curso de Alemán A1/A2

import type { LanguageCourse } from './types';

export const germanCourse: LanguageCourse = {
  id: 'german-a1-a2',
  language: 'de',
  title: 'Alemán A1.1 / A2.1 — Estructura & Gramática',
  units: [
    {
      id: 'u1',
      order: 1,
      title: 'Unidad 1: Estructura Oracional & Verbos en Presente (Präsens)',
      lessons: [
        {
          id: 'les-de-1',
          order: 1,
          title: 'Verbos Regulares e Irregulares en Präsens',
          kind: 'theory',
          estimatedMinutes: 20,
          sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
          content: [
            'En alemán, el verbo conjugado ocupa SIEMPRE la posición 2 en oraciones enunciativas principales.',
            'Ejemplo: Ich lerne Deutsch (Sujeto + Verbo en Posición 2 + Objeto).',
            'Verbos con cambio vocálico (e -> i/ie, a -> ä): sprechen (du sprichst), fahren (du fährst).'
          ],
          exercises: [
            {
              id: 'ex-1',
              type: 'fill_in_blank',
              prompt: 'Er ______ (kommen) aus Kolumbien.',
              correctAnswer: 'kommt'
            },
            {
              id: 'ex-2',
              type: 'order_sentence',
              prompt: 'Ordena: [Deutsch] [ich] [lerne] [heute]',
              options: ['Heute lerne ich Deutsch', 'Ich lerne heute Deutsch'],
              correctAnswer: 'Ich lerne heute Deutsch'
            },
            {
              id: 'ex-3',
              type: 'multiple_choice',
              prompt: '¿Cuál es la forma correcta para "du" con el verbo "fahren"?',
              options: ['du fahrst', 'du fährst', 'du fahrt'],
              correctAnswer: 'du fährst'
            }
          ]
        },
        {
          id: 'les-de-2',
          order: 2,
          title: 'Wechselpräpositionen: Dativ vs Akkusativ',
          kind: 'theory',
          estimatedMinutes: 25,
          sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
          content: [
            'Las preposiciones de cambio (in, an, auf, neben, unter, über, vor, hinter, zwischen) rigen Akkusativ para movimiento (Wohin?) y Dativ para posición fija (Wo?).',
            'Movimiento (Wohin?): Ich gehe in den Park (Akkusativ - den).',
            'Posición fija (Wo?): Ich bin im (in dem) Park (Dativ - dem).'
          ],
          exercises: [
            {
              id: 'ex-4',
              type: 'multiple_choice',
              prompt: 'Wo ist der Schlüssel? Er liegt auf ___ Tisch (m).',
              options: ['dem', 'den', 'das'],
              correctAnswer: 'dem'
            }
          ]
        }
      ]
    }
  ]
};
