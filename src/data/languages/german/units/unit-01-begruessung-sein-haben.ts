// src/data/languages/german/units/unit-01-begruessung-sein-haben.ts
// Unidad 1 A1.1 — Saludos, presentaciones y los verbos sein/haben.
// Fuente: Grammatik aktiv A1–A2 (Cornelsen), capítulos de presentación y sein/haben.
// NOTA: el PDF no está aún en public/docs → páginas marcadas «por verificar».

import type { Unit } from '../../types';

export const unit01: Unit = {
  id: 'u1',
  order: 1,
  title: 'Unidad 1: Saludos, presentaciones & sein/haben',
  lessons: [
    {
      id: 'les-de-u1-l1',
      order: 1,
      title: 'Guten Tag! Saludar y despedirse',
      kind: 'theory',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Página ausente a propósito: pendiente de verificar contra el PDF (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Saludo y presentación' },
      content: [
        'Saludos formales: Guten Tag (buenos días), Guten Morgen (buenos días, hasta mediodía), Guten Abend (buenas tardes/noche). Informal: Hallo (hola).',
        'Para preguntar cómo estás: Wie geht es dir? (informal) / Wie geht es Ihnen? (formal). Respuestas típicas: Gut, danke. (bien, gracias) / Es geht. (más o menos).',
        'Despedidas: Tschüss! (¡chao!, informal), Auf Wiedersehen! (¡hasta luego!, formal), Bis bald! (¡hasta pronto!).',
        'Presentarse: Ich heiße… (me llamo…) o Ich bin… (soy…). Preguntar el nombre: Wie heißt du? (¿cómo te llamas?, informal) / Wie heißen Sie? (formal).',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. de saludo y presentación — página por verificar (PDF pendiente de restaurar en public/docs).'
      ],
      exercises: [
        { id: 'ex-u1l1-1', type: 'multiple_choice', prompt: 'Es por la mañana. ¿Qué saludo es correcto?', options: ['Guten Morgen!', 'Gute Nacht!', 'Auf Wiedersehen!'], correctAnswer: 'Guten Morgen!' },
        { id: 'ex-u1l1-2', type: 'fill_in_blank', prompt: 'Completa la presentación: Ich ______ Anna.', correctAnswer: 'heiße' },
        { id: 'ex-u1l1-3', type: 'multiple_choice', prompt: '¿Cuál despedida es FORMAL?', options: ['Tschüss!', 'Auf Wiedersehen!', 'Bis bald!'], correctAnswer: 'Auf Wiedersehen!' },
        { id: 'ex-u1l1-4', type: 'fill_in_blank', prompt: 'Pregunta formal del nombre: Wie ______ Sie?', correctAnswer: 'heißen' }
      ]
    },
    {
      id: 'les-de-u1-l2',
      order: 2,
      title: 'sein — ser/estar (yo soy, tú eres…)',
      kind: 'theory',
      estimatedMinutes: 20,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Página ausente a propósito: pendiente de verificar contra el PDF (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'sein' },
      content: [
        'El verbo SEIN (ser/estar) es irregular y se memoriza completo: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.',
        'Se usa para identidad y profesión: Ich bin Alexander. Ich bin Technical Artist. (Soy artista técnico.)',
        'Y para origen con aus + ciudad: Ich bin aus Kolumbien. (Soy de Colombia.) Woher bist du? (¿De dónde eres?)',
        'Negación básica del predicado con nicht al final del grupo: Das ist nicht richtig. (Eso no es correcto.)',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «sein» — página por verificar.'
      ],
      exercises: [
        { id: 'ex-u1l2-1', type: 'fill_in_blank', prompt: 'Ich ______ aus Deutschland.', correctAnswer: 'bin' },
        { id: 'ex-u1l2-2', type: 'fill_in_blank', prompt: 'Du ______ sehr freundlich.', correctAnswer: 'bist' },
        { id: 'ex-u1l2-3', type: 'multiple_choice', prompt: 'Wir ______ Studenten.', options: ['sind', 'seid', 'ist'], correctAnswer: 'sind' },
        { id: 'ex-u1l2-4', type: 'multiple_choice', prompt: 'Forma correcta para "vosotros": ihr ______ …', options: ['sind', 'seid', 'bist'], correctAnswer: 'seid' },
        { id: 'ex-u1l2-5', type: 'order_sentence', prompt: 'Ordena: [aus] [Ich] [Spanien] [bin]', options: ['Ich bin aus Spanien'], correctAnswer: 'Ich bin aus Spanien' }
      ]
    },
    {
      id: 'les-de-u1-l3',
      order: 3,
      title: 'haben — tener (edad, posesión)',
      kind: 'theory',
      estimatedMinutes: 20,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Página ausente a propósito: pendiente de verificar contra el PDF (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'haben' },
      content: [
        'El verbo HABEN (tener): ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.',
        'Cuidado con el falso amigo del inglés: la edad en alemán va con SEIN (como en español), no con haben → Ich bin 30 Jahre alt. Wie alt bist du?',
        'HABEN expresa posesión y estados: Ich habe ein Buch. (Tengo un libro.) Hast du Zeit? (¿Tienes tiempo?) Wir haben heute Unterricht. (Hoy tenemos clase.)',
        'Truco de memoria: sein responde «quién/cómo/cuántos años», haben responde «qué tiene».',
        'Fuente: Grammatik aktiv A1–A2 (Cornelsen), cap. «haben» — página por verificar.'
      ],
      exercises: [
        { id: 'ex-u1l3-1', type: 'fill_in_blank', prompt: 'Ich ______ eine Frage.', correctAnswer: 'habe' },
        { id: 'ex-u1l3-2', type: 'multiple_choice', prompt: 'Sie (ella) ______ ein Auto.', options: ['hat', 'habe', 'habt'], correctAnswer: 'hat' },
        { id: 'ex-u1l3-3', type: 'fill_in_blank', prompt: 'Ihr ______ Glück! (tenéis suerte)', correctAnswer: 'habt' },
        { id: 'ex-u1l3-4', type: 'multiple_choice', prompt: '"¿Tienes tiempo?" se dice:', options: ['Hast du Zeit?', 'Bist du Zeit?', 'Ist du Zeit?'], correctAnswer: 'Hast du Zeit?' }
      ]
    },
    {
      id: 'les-de-u1-l4',
      order: 4,
      title: 'Vocabulario: presentación personal (10 palabras)',
      kind: 'vocabulary',
      estimatedMinutes: 10,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Sin línea «Fuente:» propia → capítulo del tema de la unidad; página pendiente (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Saludo y presentación' },
      content: [
        'Tarjetas de la unidad 1: salúdalas en VocabularySession — entran a la cola SM-2 como tarjetas nuevas.'
      ],
      exercises: []
    },
    {
      id: 'les-de-u1-l5',
      order: 5,
      title: 'Listening: primer diálogo (Hallo, wie geht es dir?)',
      kind: 'listening',
      estimatedMinutes: 15,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Diálogo del capítulo de presentación; página pendiente de verificar (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Saludo y presentación' },
      content: [
        'TRANSCRIPCIÓN — Diálogo A1:',
        '— Hallo Lisa!',
        '— Hallo Max! Wie geht es dir?',
        '— Gut, danke! Und dir?',
        '— Auch gut. Ich bin jetzt zu Hause.',
        '— Super! Bis morgen, Lisa!',
        '— Ja, bis morgen! Tschüss!'
      ],
      exercises: [
        { id: 'ex-u1l5-1', type: 'multiple_choice', prompt: '¿Cómo pregunta Max cómo está Lisa?', options: ['Wie geht es dir?', 'Woher kommst du?', 'Wie heißt du?'], correctAnswer: 'Wie geht es dir?' },
        { id: 'ex-u1l5-2', type: 'multiple_choice', prompt: '¿Dónde está Max ahora?', options: ['In der Schule', 'Zu Hause', 'Im Büro'], correctAnswer: 'Zu Hause' },
        { id: 'ex-u1l5-3', type: 'fill_in_blank', prompt: 'Cierra el diálogo como Max: Bis ______, Lisa!', correctAnswer: 'morgen' }
      ]
    },
    {
      id: 'les-de-u1-l6',
      order: 6,
      title: 'Writing: plantilla de autopresentación',
      kind: 'writing',
      estimatedMinutes: 20,
      sourcePdfUrl: '/docs/Grammatik_Aktiv_A1_A2.pdf',
      // Escritura guiada del capítulo de presentación; página pendiente (regla §0.1).
      sourceBook: { bookId: 'grammatik-aktiv-a1-a2', section: 'Saludo y presentación' },
      content: [
        'PLANTILLA — complétala y escríbela de memoria:',
        'Hallo! Ich heiße [nombre].',
        'Ich bin [profesión].',
        'Ich komme aus / Ich bin aus [país].',
        'Ich habe [algo que tienes].',
        'Tschüss! / Auf Wiedersehen!'
      ],
      exercises: [
        { id: 'ex-u1l6-1', type: 'order_sentence', prompt: 'Ordena una autopresentación completa: [heiße] [Ich] [Anna]', options: ['Ich heiße Anna'], correctAnswer: 'Ich heiße Anna' },
        { id: 'ex-u1l6-2', type: 'fill_in_blank', prompt: 'Profesión: Ich bin ______ (artista técnico).', correctAnswer: 'Technical Artist' },
        { id: 'ex-u1l6-3', type: 'multiple_choice', prompt: '¿Qué frase NO pertenece a una autopresentación?', options: ['Ich heiße Max.', 'Ich bin aus Berlin.', 'Hast du Zeit?'], correctAnswer: 'Hast du Zeit?' }
      ]
    }
  ]
};

/** Vocabulario de la unidad (entra al banco SR del idioma). */
export const unit01Vocabulary = [
  { term: 'hallo', translation: 'hola', example: 'Hallo, Anna!', topic: 'Saludos' },
  { term: 'guten Morgen', translation: 'buenos días (mañana)', example: 'Guten Morgen, Frau Klein!', topic: 'Saludos' },
  { term: 'guten Tag', translation: 'buenos días (formal)', example: 'Guten Tag, Herr Braun.', topic: 'Saludos' },
  { term: 'tschüss', translation: 'chao', example: 'Tschüss, bis morgen!', topic: 'Despedidas' },
  { term: 'auf Wiedersehen', translation: 'hasta luego (formal)', example: 'Auf Wiedersehen, bis Montag!', topic: 'Despedidas' },
  { term: 'der Name, -n', translation: 'el nombre', example: 'Mein Name ist Anna.', topic: 'Presentación' },
  { term: 'das Land, ¨-er', translation: 'el país', example: 'Deutschland ist ein schönes Land.', topic: 'Presentación' },
  { term: 'die Frage, -n', translation: 'la pregunta', example: 'Ich habe eine Frage.', topic: 'Comunicación' },
  { term: 'die Antwort, -n', translation: 'la respuesta', example: 'Die Antwort ist richtig.', topic: 'Comunicación' },
  { term: 'freundlich', translation: 'amable', example: 'Der Lehrer ist sehr freundlich.', topic: 'Descripción' }
];
