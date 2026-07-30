// src/data/fitness/skills/exercises.ts - Local Skill Exercise Fichas & FitApp Binding Contract
export type FitAppReference = {
  exerciseId: string | null;
  verified: boolean;
  verifiedAt?: string;
  fitAppRevision?: string;
  match: 'exact' | 'variant' | 'unavailable';
};

export type SkillExercise = {
  id: string;
  title: string;
  aliases: string[];
  shortDescription: string;
  instructions: string[];     // 3–5 pasos originales y breves
  commonErrors: string[];     // máximo 3
  setup?: string[];
  equipment: string[];
  fitApp: FitAppReference;
};

export const skillExercises: Record<string, SkillExercise> = {
  'pull-step-1': {
    id: 'pull-step-1',
    title: 'Colgado Activo & Control Escapular',
    aliases: ['Active Hang', 'Scapular Pull-up', 'Colgado de Barra'],
    shortDescription: 'Activación isométrica de los depresores de la escápula sin flexión de codos.',
    setup: [
      'Grip prono a anchura de hombros sobre barra horizontal.',
      'Cuerpo en alineación neutra con abdomen en ligera tensión.'
    ],
    instructions: [
      'Cuélgate relajando los hombros hacia arriba en inicio pasivo.',
      'Tira activamente de los omóplatos hacia abajo y atrás sin doblar los codos.',
      'Mantén la tensión isométrica arriba durante el tiempo objetivo.',
      'Desciende con control manteniendo la alineación del torso.'
    ],
    commonErrors: [
      'Doblar codos para simular el tirón.',
      'Arquear la columna lumbar desmedidamente.',
      'Colapsar bruscamente al desciender.'
    ],
    equipment: ['Barra', 'Anillas'],
    fitApp: {
      exerciseId: 'Active Hang',
      verified: true,
      verifiedAt: '2026-07-29',
      match: 'exact'
    }
  },
  'pull-step-2': {
    id: 'pull-step-2',
    title: 'Remo Inclinado en Barra o Anillas',
    aliases: ['Inverted Row', 'Australian Pull-up'],
    shortDescription: 'Tracción horizontal asistida cambiando el ángulo del torso.',
    instructions: [
      'Coloca las anillas o barra a la altura del pecho.',
      'Inclínate hacia atrás manteniendo el cuerpo rígido como una tabla.',
      'Tira del torso hasta tocar la barra/anillas con el pecho.',
      'Baja con excéntrica controlada de 2 segundos.'
    ],
    commonErrors: [
      'Dejar caer la cadera.',
      'Tirar con el cuello adelantado.'
    ],
    equipment: ['Anillas', 'Barra'],
    fitApp: {
      exerciseId: 'Neutral Grip Inverted Row',
      verified: true,
      verifiedAt: '2026-07-29',
      match: 'exact'
    }
  },
  'pull-step-3': {
    id: 'pull-step-3',
    title: 'Remo Horizontal Paralelo (Anillas)',
    aliases: ['Horizontal Ring Row'],
    shortDescription: 'Remo invertido avanzado con torso paralelo al suelo.',
    instructions: [
      'Ajusta las anillas para que los hombros queden rozando el suelo.',
      'Mantén pies apoyados y cuerpo plano horizontal.',
      'Tira activamente retrayendo las escápulas.',
      'Pausa de 1 segundo arriba antes de descender.'
    ],
    commonErrors: [
      'Inestabilidad descontrolada en anillas.',
      'Perder alineación de tobillos a hombros.'
    ],
    equipment: ['Anillas'],
    fitApp: {
      exerciseId: 'Neutral Grip Inverted Row',
      verified: true,
      verifiedAt: '2026-07-29',
      match: 'exact'
    }
  },
  'pull-step-4': {
    id: 'pull-step-4',
    title: 'Dominada Asistida con Banda',
    aliases: ['Banded Pull-up'],
    shortDescription: 'Tracción vertical completa utilizando asistencia elástica.',
    instructions: [
      'Engancha la banda elástica en la barra y coloca un pie o rodilla.',
      'Arranca desde colgado activo.',
      'Tira con los dorsales hasta llevar la barbilla por encima de la barra.',
      'Resiste el descenso.'
    ],
    commonErrors: [
      'Usar rebote elástico brusco abajo.',
      'Cerrar el pecho al subir.'
    ],
    equipment: ['Barra', 'Banda'],
    fitApp: {
      exerciseId: 'Lat Pulldown',
      verified: true,
      verifiedAt: '2026-07-29',
      match: 'exact'
    }
  },
  'pull-step-5': {
    id: 'pull-step-5',
    title: 'Dominada Estricta sobre Barra',
    aliases: ['Strict Pull-up'],
    shortDescription: 'Tracción vertical corporal estricta sin impulso de piernas.',
    instructions: [
      'Grip prono a anchura superior a hombros.',
      'Inicia desde extensión completa en colgado activo.',
      'Eleva el cuerpo hasta pasar la barbilla holgadamente sobre la barra.',
      'Desciende en 2 segundos hasta el bloqueo seguro.'
    ],
    commonErrors: [
      'Realizar kipping o patada compensatoria.',
      'Rango incompleto arriba o abajo.'
    ],
    equipment: ['Barra'],
    fitApp: {
      exerciseId: 'Pull-Up',
      verified: true,
      verifiedAt: '2026-07-29',
      match: 'exact'
    }
  },
  'push-step-1': {
    id: 'push-step-1',
    title: 'Flexión Inclinada sobre Banco',
    aliases: ['Incline Push-up'],
    shortDescription: 'Empuje horizontal regresado con manos elevadas.',
    instructions: [
      'Apoya las manos en un banco firmemente.',
      'Mantén el cuerpo en línea recta.',
      'Desciende hasta rozar el banco con el esternón.',
      'Empuja fuertemente extendiendo codos.'
    ],
    commonErrors: ['Encoger hombros', 'Arqueo lumbar'],
    equipment: ['Suelo', 'Banco'],
    fitApp: { exerciseId: 'Push-Up', verified: true, match: 'exact' }
  },
  'push-step-2': {
    id: 'push-step-2',
    title: 'Flexión Estricta en Suelo',
    aliases: ['Strict Push-up'],
    shortDescription: 'Empuje en suelo con alineación de plank rígida.',
    instructions: [
      'Manos a la anchura de hombros en suelo.',
      'Baja hasta que el pecho rozar el suelo.',
      'Empuja protrayendo escápulas en la cima.'
    ],
    commonErrors: ['Caída de cadera', 'Codos a 90° abiertos'],
    equipment: ['Suelo'],
    fitApp: { exerciseId: 'Push-Up', verified: true, match: 'exact' }
  },
  'core-step-1': {
    id: 'core-step-1',
    title: 'Hollow Body Regresado',
    aliases: ['Tuck Hollow Hold'],
    shortDescription: 'Basculación pélvica posterior y contacto lumbar.',
    instructions: [
      'Túmbate en el suelo sobre la espalda.',
      'Flexiona rodillas al pecho y presiona la zona lumbar 100% plana contra el suelo.',
      'Despega escápulas del suelo.'
    ],
    commonErrors: ['Despegue lumbar del suelo'],
    equipment: ['Suelo'],
    fitApp: { exerciseId: 'Hollow holds', verified: true, match: 'exact' }
  },
  'core-step-2': {
    id: 'core-step-2',
    title: 'Hollow Hold Completo',
    aliases: ['Full Hollow Body Hold'],
    shortDescription: 'Palanca de abdomen completa con brazos y piernas extendidos.',
    instructions: [
      'Extiende piernas a 45° y brazos tras la cabeza.',
      'Mantén lumbar pegada firmemente al suelo sin hueco.'
    ],
    commonErrors: ['Perder contacto lumbar'],
    equipment: ['Suelo'],
    fitApp: { exerciseId: 'Hollow holds', verified: true, match: 'exact' }
  },
  'leg-step-1': {
    id: 'leg-step-1',
    title: 'Split Squat & Sentadilla Unilateral',
    aliases: ['Split Squat'],
    shortDescription: 'Sentadilla zancada estática para fuerza unilateral.',
    instructions: ['Paso amplio', 'Desciende verticalmente', 'Empuja con la pierna delantera.'],
    commonErrors: ['Valgo de rodilla'],
    equipment: ['Suelo'],
    fitApp: { exerciseId: 'Barbell Lunge', verified: true, match: 'exact' }
  },
  'leg-step-4': {
    id: 'leg-step-4',
    title: 'Pistol Squat Estricta Libre',
    aliases: ['Full Pistol Squat'],
    shortDescription: 'Sentadilla profunda a una pierna sin apoyo.',
    instructions: ['Eleva una pierna al frente', 'Baja profundo', 'Empuja sobre talón.'],
    commonErrors: ['Descolgar talón'],
    equipment: ['Suelo'],
    fitApp: { exerciseId: 'Pistol Squat', verified: true, match: 'exact' }
  },
  'supp-step-1': {
    id: 'supp-step-1',
    title: 'Support Hold en Paralelas',
    aliases: ['Parallette Support Hold'],
    shortDescription: 'Soporte estático de brazos bloqueados sobre paralelas.',
    instructions: ['Bloquea codos arriba', 'Deprime hombros lejos de orejas.'],
    commonErrors: ['Hombros encogidos'],
    equipment: ['Paralelas'],
    fitApp: { exerciseId: 'Dip', verified: true, match: 'exact' }
  },
  'mob-step-1': {
    id: 'mob-step-1',
    title: 'Acondicionamiento de Muñeca',
    aliases: ['Wrist Prehab Routine'],
    shortDescription: 'Movilidad articular y carga progresiva en cuadrupedia.',
    instructions: ['Carga peso suavemente en flexión y extensión de muñeca.'],
    commonErrors: ['Carga excesiva brusca'],
    equipment: ['Suelo'],
    fitApp: { exerciseId: 'Active Hang', verified: true, match: 'exact' }
  }
};
