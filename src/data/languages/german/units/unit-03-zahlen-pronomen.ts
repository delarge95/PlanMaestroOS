// src/data/languages/german/units/unit-03-zahlen-pronomen.ts
// Unidad 3 A1.1 — Números 0–100 y pronombres personales/preguntas.
// Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. de números y Pronomen/W-Fragen.
// NOTA: PDF pendiente de restaurar en public/docs → páginas «por verificar».

import type { Unit } from '../../types';

export const unit03: Unit = {
  id: 'u3',
  order: 3,
  title: 'Unidad 3: Números & pronombres interrogativos',
  lessons: [
    {
      id: 'les-de-u3-l1',
      order: 1,
      title: 'Zahlen 0–100: contar, edad y teléfono',
      kind: 'theory',
      estimatedMinutes: 20,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Página ausente a propósito: pendiente de verificar contra el PDF (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Zahlen' },
      content: [
        'Base: null(0) eins(1) zwei(2) drei(3) vier(4) fünf(5) sechs(6) sieben(7) acht(8) neun(9) zehn(10).',
        'De 13 a 19 = raíz + zehn: dreizehn, vierzehn… neunzehn. Decenas: zwanzig(20), dreißig(30), vierzig, fünfzig… hundert(100).',
        'Unidades+decenas se dicen EN ORDEN INVERSO al español: 21 = einundzwanzig (uno-y-veinte), 34 = vierunddreißig. Se escribe en una palabra.',
        'Usos A1: la edad (Ich bin 30 Jahre alt), el número de teléfono (Meine Nummer ist null-eins-sieben…, se dice dígito a dígito), precios (Das kostet fünf Euro).',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Zahlen» — página por verificar.'
      ],
      exercises: [
        { id: 'ex-u3l1-1', type: 'multiple_choice', prompt: '¿Cómo se dice 21?', options: ['zwanzigeins', 'einundzwanzig', 'zwanzigundein'], correctAnswer: 'einundzwanzig' },
        { id: 'ex-u3l1-2', type: 'fill_in_blank', prompt: '30 = ______ (ojo con ß)', correctAnswer: 'dreißig' },
        { id: 'ex-u3l1-3', type: 'multiple_choice', prompt: '"vierundsechzig" es:', options: ['46', '64', '74'], correctAnswer: '64' },
        { id: 'ex-u3l1-4', type: 'order_sentence', prompt: 'Ordena la frase de edad: [Jahre] [alt] [Ich] [bin] [dreißig]', options: ['Ich bin dreißig Jahre alt'], correctAnswer: 'Ich bin dreißig Jahre alt' }
      ]
    },
    {
      id: 'les-de-u3-l2',
      order: 2,
      title: 'Personalpronomen + W-Fragen (wer, was, wie, woher)',
      kind: 'theory',
      estimatedMinutes: 20,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Página ausente a propósito: pendiente de verificar contra el PDF (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Pronomen/W-Fragen' },
      content: [
        'Pronombres personales nominativo: ich, du, er/sie/es, wir, ihr, sie/Sie. Sustituyen al sujeto: Der Mann ist hier → Er ist hier.',
        'El Sie formal se escribe SIEMPRE con mayúscula y conjuga como sie (ellos): Sie sind… puede ser «ustedes son» o «ellos son» — el contexto decide.',
        'Preguntas W (la palabra interrogativa ocupa el puesto 1, el verbo el 2): Wie heißt du? Woher kommst du? Wo wohnst du? Wer ist das? Was ist das?',
        'Respuestas cortas típicas: Ich heiße Anna. / Ich komme aus Mexiko. / Ich wohne in Köln.',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Pronomen/W-Fragen» — página por verificar.'
      ],
      exercises: [
        { id: 'ex-u3l2-1', type: 'multiple_choice', prompt: '¿Qué pregunta responde "Ich komme aus Peru"?', options: ['Wo wohnst du?', 'Woher kommst du?', 'Wie heißt du?'], correctAnswer: 'Woher kommst du?' },
        { id: 'ex-u3l2-2', type: 'fill_in_blank', prompt: 'Sustituye el sujeto: Die Frau arbeitet viel. → ______ arbeitet viel.', correctAnswer: 'Sie' },
        { id: 'ex-u3l2-3', type: 'multiple_choice', prompt: '"¿Quién es?" se pregunta:', options: ['Wer ist das?', 'Was ist das?', 'Wie ist das?'], correctAnswer: 'Wer ist das?' },
        { id: 'ex-u3l2-4', type: 'fill_in_blank', prompt: 'Formal: ______ wohnen in Bonn. (ustedes viven)', correctAnswer: 'Sie' }
      ]
    },
    {
      id: 'les-de-u3-l3',
      order: 3,
      title: 'Vocabulario: números útiles y datos personales (10)',
      kind: 'vocabulary',
      estimatedMinutes: 10,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Sin línea «Fuente:» propia → capítulo del tema de la unidad; página pendiente (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Zahlen' },
      content: ['Tarjetas de la unidad 3 — números y palabras para dar datos personales.'],
      exercises: []
    },
    {
      id: 'les-de-u3-l4',
      order: 4,
      title: 'Listening: ammeldeamt — dar tus datos (dictado de números)',
      kind: 'listening',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Dictado de números y datos personales; página pendiente de verificar (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Zahlen' },
      content: [
        'TRANSCRIPCIÓN — Diálogo en el registro (Büro):',
        '— Guten Tag! Ihr Name, bitte?',
        '— Ich heiße David Rojas.',
        '— Wie alt sind Sie?',
        '— Ich bin siebenundzwanzig Jahre alt.',
        '— Ihre Telefonnummer?',
        '— Null-eins-neun-vier, zwei-drei-sieben-acht.',
        '— Und woher kommen Sie?',
        '— Aus Kolumbien. Danke schön!'
      ],
      exercises: [
        { id: 'ex-u3l4-1', type: 'multiple_choice', prompt: '¿Cuántos años tiene David?', options: ['37', '27', '17'], correctAnswer: '27' },
        { id: 'ex-u3l4-2', type: 'fill_in_blank', prompt: 'La primera cifra de su teléfono que oímos: ______ -eins-neun-vier', correctAnswer: 'null' },
        { id: 'ex-u3l4-3', type: 'multiple_choice', prompt: '¿De dónde es David?', options: ['Aus Deutschland', 'Aus Peru', 'Aus Kolumbien'], correctAnswer: 'Aus Kolumbien' }
      ]
    },
    {
      id: 'les-de-u3-l5',
      order: 5,
      title: 'Writing: formulario de registro',
      kind: 'writing',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Escritura guiada de números/datos; página pendiente de verificar (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Zahlen' },
      content: [
        'PLANTILLA — rellena un formulario con frases completas:',
        'Name: Ich heiße [nombre completo].',
        'Alter: Ich bin [número en letras] Jahre alt.',
        'Telefonnummer: Meine Nummer ist [dígitos en letras].',
        'Land: Ich komme aus [país].',
        'Stadt: Ich wohne in [ciudad].'
      ],
      exercises: [
        { id: 'ex-u3l5-1', type: 'order_sentence', prompt: 'Ordena: [wohne] [Köln] [in] [Ich]', options: ['Ich wohne in Köln'], correctAnswer: 'Ich wohne in Köln' },
        { id: 'ex-u3l5-2', type: 'fill_in_blank', prompt: 'Edad en letras de 42: Ich bin ______ Jahre alt.', correctAnswer: 'zweiundvierzig' },
        { id: 'ex-u3l5-3', type: 'multiple_choice', prompt: '¿Qué campo pide "Woher kommen Sie?"', options: ['el nombre', 'el país de origen', 'la edad'], correctAnswer: 'el país de origen' }
      ]
    }
  ]
};

export const unit03Vocabulary = [
  { term: 'die Zahl, -en', translation: 'el número', example: 'Welche Zahl ist das?', topic: 'Números' },
  { term: 'das Jahr, -e', translation: 'el año', example: 'Ich bin 30 Jahre alt.', topic: 'Tiempo' },
  { term: 'die Telefonnummer, -n', translation: 'el número de teléfono', example: 'Meine Telefonnummer ist neu.', topic: 'Datos' },
  { term: 'der Preis, -e', translation: 'el precio', example: 'Der Preis ist gut.', topic: 'Compras' },
  { term: 'kosten', translation: 'costar', example: 'Was kostet das?', topic: 'Compras' },
  { term: 'wie viel', translation: 'cuánto', example: 'Wie viel kostet das Buch?', topic: 'Preguntas' },
  { term: 'wer', translation: 'quién', example: 'Wer ist das?', topic: 'Preguntas' },
  { term: 'woher', translation: 'de dónde', example: 'Woher kommst du?', topic: 'Preguntas' },
  { term: 'wohnen', translation: 'vivir (residir)', example: 'Ich wohne in Madrid.', topic: 'Verbos' },
  { term: 'kommen (aus)', translation: 'venir (de)', example: 'Ich komme aus Deutschland.', topic: 'Verbos' }
];
