// src/data/languages/german/units/unit-04-praesens-konversation.ts
// Unidad 4 A1.1 — Präsens regular y primera conversación.
// PRESERVA las lecciones originales les-de-1 y les-de-2 (ids estables, regla
// de oro #9) reubicándolas en la nueva estructura por unidades.
// Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Präsens» — páginas por verificar.

import type { Unit } from '../../types';

export const unit04: Unit = {
  id: 'u4',
  order: 4,
  title: 'Unidad 4: Präsens regular & conversación',
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
        'Verbos con cambio vocálico (e -> i/ie, a -> ä): sprechen (du sprichst), fahren (du fährst).',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Präsens» — página por verificar.'
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
      id: 'les-de-u4-l2',
      order: 2,
      title: 'El patrón regular -nen: wohnen, lernen, machen, arbeiten',
      kind: 'theory',
      estimatedMinutes: 20,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      content: [
        'Receta del Präsens regular: raíz + terminación. Infinitivo en -en → raíz = infinitivo sin -en (wohn|en).',
        'Terminaciones: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Ejemplo wohnen: ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie wohnen.',
        'Si la raíz acaba en -t/-d se añade una e puente: arbeiten → du arbeitest, er arbeitet. Igual con -n tras consonante difícil: regnen → es regnet.',
        'Conjugación idéntica para wir y sie/Sie (-en): Wir lernen. Sie lernen. El contexto y la mayúscula de Sie distinguen formal/plural.',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Präsens Regeln» — página por verificar.'
      ],
      exercises: [
        { id: 'ex-u4l2-1', type: 'fill_in_blank', prompt: 'du ______ (wohnen) in Bonn.', correctAnswer: 'wohnst' },
        { id: 'ex-u4l2-2', type: 'fill_in_blank', prompt: 'er ______ (arbeiten) viel.', correctAnswer: 'arbeitet' },
        { id: 'ex-u4l2-3', type: 'multiple_choice', prompt: 'ihr ______ (machen) Sport.', options: ['macht', 'machen', 'machst'], correctAnswer: 'macht' },
        { id: 'ex-u4l2-4', type: 'fill_in_blank', prompt: 'wir ______ (lernen) Deutsch.', correctAnswer: 'lernen' }
      ]
    },
    {
      id: 'les-de-u4-l3',
      order: 3,
      title: 'Speaking: primera conversación (trabajo y origen)',
      kind: 'speaking',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      content: [
        'MINI-DIÁLOGO MODELO — practícalo en voz alta y luego improvisa cambiando datos:',
        '— Hallo! Ich bin Max. Und du?',
        '— Hi! Ich heiße Laura. Woher kommst du, Max?',
        '— Ich komme aus Österreich. Ich arbeite als Ingenieur. Und was machst du?',
        '— Ich studiere Informatik und arbeite Teilzeit.',
        '— Interessant! Wohnst du hier in Wien?',
        '— Ja, ich wohne im Stadtzentrum. Bis bald!',
        'FRASES SALVAVIDAS: Wie bitte? (¿cómo?), Langsamer bitte (más despacio), Ich verstehe das nicht (no lo entiendo).',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Präsens/kleine Gespräche» — página por verificar.'
      ],
      exercises: [
        { id: 'ex-u4l3-1', type: 'multiple_choice', prompt: '"¿A qué te dedicas?" en el diálogo:', options: ['Was machst du?', 'Wo wohnst du?', 'Wie heißt du?'], correctAnswer: 'Was machst du?' },
        { id: 'ex-u4l3-2', type: 'fill_in_blank', prompt: 'Responde trabajo: Ich ______ als Techniker.', correctAnswer: 'arbeite' },
        { id: 'ex-u4l3-3', type: 'multiple_choice', prompt: 'No entendiste algo. Dices:', options: ['Wie bitte?', 'Auf Wiedersehen!', 'Danke schön!'], correctAnswer: 'Wie bitte?' }
      ]
    },
    {
      id: 'les-de-u4-l4',
      order: 4,
      title: 'Listening: im Café (pedir algo)',
      kind: 'listening',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      content: [
        'TRANSCRIPCIÓN — Diálogo en el café:',
        '— Guten Tag! Was möchten Sie trinken?',
        '— Ich möchte einen Kaffee, bitte.',
        '— Möchten Sie auch etwas essen?',
        '— Ja, ein Stück Kuchen. Was kostet das?',
        '— Der Kaffee kostet zwei Euro fünfzig, der Kuchen drei Euro.',
        '— Zusammen fünf Euro fünfzig. Stimmt so!',
        '— Danke! Einen schönen Tag noch!'
      ],
      exercises: [
        { id: 'ex-u4l4-1', type: 'multiple_choice', prompt: '¿Qué pide el cliente?', options: ['Té y pastel', 'Café y pastel', 'Solo café'], correctAnswer: 'Café y pastel' },
        { id: 'ex-u4l4-2', type: 'fill_in_blank', prompt: 'Precio total en palabras: ______ Euro fünfzig.', correctAnswer: 'fünf' },
        { id: 'ex-u4l4-3', type: 'multiple_choice', prompt: '"Stimmt so!" significa:', options: ['quédese el cambio', 'no es correcto', 'hasta luego'], correctAnswer: 'quédese el cambio' }
      ]
    },
    {
      id: 'les-de-u4-l5',
      order: 5,
      title: 'Writing: un email corto (Anmeldung del curso)',
      kind: 'writing',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      content: [
        'PLANTILLA — email A1 al centro de idiomas:',
        'Hallo Frau Müller,',
        'ich möchte einen Deutschkurs machen. Ich bin [nombre] und komme aus [país].',
        'Ich arbeite als [profesión]. Meine Telefonnummer ist [número].',
        'Können Sie mir helfen? Danke!',
        'Mit freundlichen Grüßen / Viele Grüße, [nombre]'
      ],
      exercises: [
        { id: 'ex-u4l5-1', type: 'order_sentence', prompt: 'Ordena la petición: [möchte] [Ich] [einen Deutschkurs] [machen]', options: ['Ich möchte einen Deutschkurs machen'], correctAnswer: 'Ich möchte einen Deutschkurs machen' },
        { id: 'ex-u4l5-2', type: 'multiple_choice', prompt: 'Despedida formal correcta de email:', options: ['Tschüss!', 'Mit freundlichen Grüßen', 'Bis dann!'], correctAnswer: 'Mit freundlichen Grüßen' },
        { id: 'ex-u4l5-3', type: 'fill_in_blank', prompt: 'Petición educada: Können Sie mir ______? (ayudar)', correctAnswer: 'helfen' }
      ]
    },
    {
      id: 'les-de-u4-l6',
      order: 6,
      title: 'Vocabulario: verbos frecuentes del día a día (10)',
      kind: 'vocabulary',
      estimatedMinutes: 10,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      content: ['Tarjetas de la unidad 4 — conjúgalas mentalmente en todas las personas al repasarlas.']
      ,
      exercises: []
    },
    {
      id: 'les-de-2',
      order: 7,
      title: 'Wechselpräpositionen: Dativ vs Akkusativ',
      kind: 'theory',
      estimatedMinutes: 25,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      content: [
        'Las preposiciones de cambio (in, an, auf, neben, unter, über, vor, hinter, zwischen) rigen Akkusativ para movimiento (Wohin?) y Dativ para posición fija (Wo?).',
        'Movimiento (Wohin?): Ich gehe in den Park (Akkusativ - den).',
        'Posición fija (Wo?): Ich bin im (in dem) Park (Dativ - dem).',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «Wechselpräpositionen» — página por verificar.'
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
};

export const unit04Vocabulary = [
  { term: 'wohnen', translation: 'vivir (residir)', example: 'Ich wohne in Bonn.', topic: 'Verbos' },
  { term: 'lernen', translation: 'aprender / estudiar', example: 'Wir lernen Deutsch.', topic: 'Verbos' },
  { term: 'arbeiten (als)', translation: 'trabajar (como)', example: 'Er arbeitet als Ingenieur.', topic: 'Verbos' },
  { term: 'machen', translation: 'hacer', example: 'Ich mache Sport.', topic: 'Verbos' },
  { term: 'sprechen', translation: 'hablar', example: 'Sprichst du Englisch?', topic: 'Verbos' },
  { term: 'verstehen', translation: 'entender', example: 'Ich verstehe das nicht.', topic: 'Verbos' },
  { term: 'möchten', translation: 'querer (educado)', example: 'Ich möchte einen Kaffee.', topic: 'Verbos' },
  { term: 'helfen', translation: 'ayudar', example: 'Können Sie mir helfen?', topic: 'Verbos' },
  { term: 'kaufen', translation: 'comprar', example: 'Ich kaufe ein Buch.', topic: 'Verbos' },
  { term: 'besuchen', translation: 'visitar / asistir a', example: 'Ich besuche einen Kurs.', topic: 'Verbos' }
];
