// src/data/clinical/routines.ts - Rutinas Operacionales Diarias y Semanales (CBT / TDAH)

export interface ClinicalRoutine {
  id: string;
  title: string;
  objective1Line: string;
  steps: string[];
  estimatedMinutes: number;
  frequency: 'Diaria' | 'Semanal' | 'Según necesidad';
}

export const clinicalRoutines: ClinicalRoutine[] = [
  {
    id: 'rot-1',
    title: 'Desconexión Nocturna & Higiene de Sueño CBT-I',
    objective1Line: 'Proteger la ventana de descanso reduciendo la estimulación dopaminérgica.',
    steps: [
      'Apagar pantallas principales a las 21:00.',
      'Activar luz cálida de lectura.',
      'Anotar pensamientos pendientes en libreta de volcado físico.'
    ],
    estimatedMinutes: 15,
    frequency: 'Diaria'
  },
  {
    id: 'rot-2',
    title: 'Exposición Social Gradual (Micro-interacciones)',
    objective1Line: 'Aumentar la tolerancia a la evaluación externa con micro-pasos de bajo riesgo.',
    steps: [
      'Enviar 1 mensaje o comentario sin revisar 3 veces.',
      'Realizar 1 consulta directa en tienda o videollamada corta.',
      'Registrar nivel de ansiedad percibida (0–10) antes y después.'
    ],
    estimatedMinutes: 10,
    frequency: 'Diaria'
  },
  {
    id: 'rot-3',
    title: 'Pausa Somática de Regulación',
    objective1Line: 'Reajustar el tono vagal en momentos de hiperactividad o sobrecarga.',
    steps: [
      'Inspiración profunda en 4s, sostener 7s, exhalación en 8s (3 ciclos).',
      'Sentir puntos de contacto de pies en suelo.',
      'Reanudar actividad a velocidad intencionalmente pausada.'
    ],
    estimatedMinutes: 5,
    frequency: 'Diaria'
  }
];
