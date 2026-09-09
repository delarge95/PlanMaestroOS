// src/data/languages/german/units/unit-02-artikel-nominativ.ts
// Unidad 2 A1.1 — Artículos y caso nominativo (der/die/das, ein/eine, kein).
// Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. de artículos/nominativo.
// NOTA: PDF pendiente de restaurar en public/docs → páginas «por verificar».

import type { Unit } from '../../types';

export const unit02: Unit = {
  id: 'u2',
  order: 2,
  title: 'Unidad 2: Artículos & nominativo (der/die/das)',
  lessons: [
    {
      id: 'les-de-u2-l1',
      order: 1,
      title: 'der, die, das — el género de los sustantivos',
      kind: 'theory',
      estimatedMinutes: 20,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Página ausente a propósito: pendiente de verificar contra el PDF (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Artikel/Nominativ' },
      content: [
        'Todo sustantivo alemán tiene género MASCULINO (der), FEMENINO (die) o NEUTRO (das). El artículo SIEMPRE se aprende junto con la palabra: der Tisch (la mesa), die Lampe (la lámpara), das Buch (el libro).',
        'Pistas útiles (con excepciones): palabras en -ung, -heit, -keit, -schaft, -tion suelen ser die; palabras en -chen y -lein son siempre das; muchas profesiones/personas masculinas en -er son der.',
        'El NATURALEZA no siempre manda: das Mädchen (la niña) es neutro por el sufijo -chen.',
        'En NOMINATIVO el sujeto de la oración va con el artículo definido base: Der Mann liest. (El hombre lee.) Die Frau arbeitet. Das Kind spielt.',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Artikel/Nominativ» — página por verificar.'
      ],
      exercises: [
        { id: 'ex-u2l1-1', type: 'multiple_choice', prompt: '___ Wohnung (piso) termina en -ung →', options: ['die', 'der', 'das'], correctAnswer: 'die' },
        { id: 'ex-u2l1-2', type: 'multiple_choice', prompt: '___ Mädchen es neutro por el sufijo -chen →', options: ['das', 'die', 'der'], correctAnswer: 'das' },
        { id: 'ex-u2l1-3', type: 'fill_in_blank', prompt: 'Sujeto: ______ Buch ist neu. (das)', correctAnswer: 'Das' },
        { id: 'ex-u2l1-4', type: 'multiple_choice', prompt: '¿Cuál par es correcto?', options: ['der Frau', 'die Mann', 'der Mann'], correctAnswer: 'der Mann' }
      ]
    },
    {
      id: 'les-de-u2-l2',
      order: 2,
      title: 'ein, eine y kein — indefinido y negación',
      kind: 'theory',
      estimatedMinutes: 20,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Página ausente a propósito: pendiente de verificar contra el PDF (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Negación' },
      content: [
        'El indefinido: ein para masculino/neutro (ein Tisch, ein Buch), eine para femenino (eine Lampe). En plural no existe indefinido (→ «Tische» sin artículo).',
        'Negación de sustantivos con KEIN: kein/keine niega lo que ein introduciría: Das ist ein Auto. → Das ist kein Auto. Ich habe keine Zeit. (No tengo tiempo.)',
        'nicht niega verbos, adjetivos y nombres propios/con artículo definido: Das ist nicht mein Buch. Er kommt nicht.',
        'Regla rápida: ¿negarías con «un…»? → kein. ¿Lo demás? → nicht.',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Negación» — página por verificar.'
      ],
      exercises: [
        { id: 'ex-u2l2-1', type: 'fill_in_blank', prompt: 'Das ist ______ Idee. (una idea, fem.)', correctAnswer: 'eine' },
        { id: 'ex-u2l2-2', type: 'multiple_choice', prompt: 'Niega: "Ich habe ___ Zeit." (no tengo tiempo)', options: ['keine', 'nicht', 'kein'], correctAnswer: 'keine' },
        { id: 'ex-u2l2-3', type: 'fill_in_blank', prompt: '______ Problem! (¡ningún problema!, neutro)', correctAnswer: 'Kein' },
        { id: 'ex-u2l2-4', type: 'multiple_choice', prompt: '"Er kommt ___ heute" (no viene hoy) — niega al verbo:', options: ['kein', 'nicht', 'keine'], correctAnswer: 'nicht' }
      ]
    },
    {
      id: 'les-de-u2-l3',
      order: 3,
      title: 'Vocabulario: objetos cotidianos con género (12)',
      kind: 'vocabulary',
      estimatedMinutes: 10,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Sin línea «Fuente:» propia → capítulo del tema de la unidad; página pendiente (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Artikel/Nominativ' },
      content: ['Tarjetas de la unidad 2 — aprende SIEMPRE palabra + artículo juntos.']
      ,
      exercises: []
    },
    {
      id: 'les-de-u2-l4',
      order: 4,
      title: 'Listening: Was ist das? (nombrar cosas)',
      kind: 'listening',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Diálogo de nominativo/artículos; página pendiente de verificar (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Artikel/Nominativ' },
      content: [
        'TRANSCRIPCIÓN — Diálogo A1:',
        '— Was ist das, Anna?',
        '— Das ist ein Buch. Es ist neu.',
        '— Und was ist das dort?',
        '— Das ist die Lampe von meinem Bruder.',
        '— Ist das dein Handy?',
        '— Nein, das ist nicht mein Handy. Meins ist hier!'
      ],
      exercises: [
        { id: 'ex-u2l4-1', type: 'multiple_choice', prompt: '¿Qué es "ein Buch"?', options: ['un libro', 'una lámpara', 'un móvil'], correctAnswer: 'un libro' },
        { id: 'ex-u2l4-2', type: 'multiple_choice', prompt: '¿De quién es la lámpara?', options: ['de Anna', 'de su hermano', 'del profesor'], correctAnswer: 'de su hermano' },
        { id: 'ex-u2l4-3', type: 'fill_in_blank', prompt: 'Niega con posesivo: Das ist ______ mein Handy.', correctAnswer: 'nicht' }
      ]
    },
    {
      id: 'les-de-u2-l5',
      order: 5,
      title: 'Writing: describir tu escritorio',
      kind: 'writing',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Escritura guiada de nominativo/artículos; página pendiente (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Artikel/Nominativ' },
      content: [
        'PLANTILLA — describe 5 objetos que tienes a mano:',
        'Das ist ein/eine [objeto].',
        'Der/Die/Das [objeto] ist [adjetivo]. (neu / alt / groß / klein)',
        'Ich habe auch [objeto].',
        'Beispiel (ejemplo): Das ist ein Computer. Der Computer ist neu. Ich habe auch eine Lampe.'
      ],
      exercises: [
        { id: 'ex-u2l5-1', type: 'order_sentence', prompt: 'Ordena: [ist] [Das] [ein] [Tisch]', options: ['Das ist ein Tisch'], correctAnswer: 'Das ist ein Tisch' },
        { id: 'ex-u2l5-2', type: 'fill_in_blank', prompt: 'Adjetivo contrario de alt (viejo): Der Computer ist ______ .', correctAnswer: 'neu' },
        { id: 'ex-u2l5-3', type: 'multiple_choice', prompt: 'Completa con indefinido: Ich habe auch ___ Lampe.', options: ['eine', 'ein', 'kein'], correctAnswer: 'eine' }
      ]
    }
  ]
};

export const unit02Vocabulary = [
  { term: 'der Tisch, -e', translation: 'la mesa', example: 'Das Buch liegt auf dem Tisch.', topic: 'Objetos' },
  { term: 'das Buch, ¨-er', translation: 'el libro', example: 'Das Buch ist neu.', topic: 'Objetos' },
  { term: 'die Lampe, -n', translation: 'la lámpara', example: 'Die Lampe ist hell.', topic: 'Objetos' },
  { term: 'das Handy, -s', translation: 'el móvil', example: 'Mein Handy ist hier.', topic: 'Tecnología' },
  { term: 'der Computer, -', translation: 'el ordenador', example: 'Der Computer ist schnell.', topic: 'Tecnología' },
  { term: 'die Wohnung, -en', translation: 'el piso / apartamento', example: 'Die Wohnung ist groß.', topic: 'Casa' },
  { term: 'die Zeit, -en', translation: 'el tiempo', example: 'Ich habe keine Zeit.', topic: 'General' },
  { term: 'der Freund, -e', translation: 'el amigo', example: 'Mein Freund wohnt in Berlin.', topic: 'Personas' },
  { term: 'die Stadt, ¨-e', translation: 'la ciudad', example: 'Köln ist eine große Stadt.', topic: 'Ciudad' },
  { term: 'das Auto, -s', translation: 'el coche', example: 'Das Auto ist rot.', topic: 'Objetos' },
  { term: 'neu', translation: 'nuevo', example: 'Das ist ein neues Buch.', topic: 'Descripción' },
  { term: 'alt', translation: 'viejo; mayor (edad)', example: 'Der Tisch ist alt.', topic: 'Descripción' }
];
