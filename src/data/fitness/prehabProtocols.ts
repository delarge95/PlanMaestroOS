// src/data/fitness/prehabProtocols.ts - Protocolos de Prehab y Control de Zonas Afectadas

export interface PrehabExercise {
  id: string;
  name: string;
  dosage: string;
  setupInstruction: string;
  safetyNote: string;
}

export interface PrehabProtocol {
  zoneId: 'knee' | 'shoulder' | 'elbow_wrist' | 'hip';
  zoneTitle: string;
  protocolTitle: string;
  recommendedDose: string;
  safetyDisclaimer: string;
  exercises: PrehabExercise[];
}

export const prehabProtocols: Record<string, PrehabProtocol> = {
  knee: {
    zoneId: 'knee',
    zoneTitle: 'Rodillas & Tendón Patelar',
    protocolTitle: 'Isométricos Cuádriceps (Spanish Squats)',
    recommendedDose: '3–5 series de 45 segundos de sostenimiento isométrico',
    safetyDisclaimer: 'Considera reducir rango o pausar hoy si la molestia pasa de 3/10.',
    exercises: [
      {
        id: 'knee_1',
        name: 'Spanish Squat Isométrico con Banda',
        dosage: '45s sostener en 90º',
        setupInstruction: 'Coloca banda gruesa detrás de huecos poplíteos y haz sentadillas verticales sostenidas.',
        safetyNote: 'Mantén tibia vertical y aprieta cuádriceps sin rebotar.'
      },
      {
        id: 'knee_2',
        name: 'Tibialis Raise en Pared',
        dosage: '3 series x 25 repeticiones',
        setupInstruction: 'Espalda apoyada en pared, eleva las puntas de los pies con talón fijo.',
        safetyNote: 'Movimiento lento en descenso.'
      }
    ]
  },
  shoulder: {
    zoneId: 'shoulder',
    zoneTitle: 'Hombro & Manguito Rotador',
    protocolTitle: 'Control Escapular & Rotadores Externos',
    recommendedDose: '3 series x 15 reps con carga mínima',
    safetyDisclaimer: 'Considera reducir rango o pausar hoy si sientes pinchazo anterior.',
    exercises: [
      {
        id: 'shoulder_1',
        name: 'Band Face Pull con Rotación Externa',
        dosage: '3x15',
        setupInstruction: 'Jala banda a la frente separando codos y rotando puños hacia arriba.',
        safetyNote: 'Cero impulso torácico.'
      },
      {
        id: 'shoulder_2',
        name: 'Scapular Pull-ups (Colgado Activo)',
        dosage: '3x10',
        setupInstruction: 'Colgado de barra, desciende escápulas sin doblar codos.',
        safetyNote: 'Control isométrico 2s en punto alto.'
      }
    ]
  },
  elbow_wrist: {
    zoneId: 'elbow_wrist',
    zoneTitle: 'Codo & Muñeca',
    protocolTitle: 'Extensión de Muñeca & Deslizamientos Nerviosos',
    recommendedDose: '2–3 series de preparación pasiva y ligera extensión',
    safetyDisclaimer: 'Considera reducir rango o pausar hoy en empujes profundos si hay rigidez.',
    exercises: [
      {
        id: 'wrist_1',
        name: 'Wrist Extension Extensiones en Cuadrupedía',
        dosage: '2x15',
        setupInstruction: 'Palmas apoyadas en suelo, mece suavemente el peso corporal sobre dedos.',
        safetyNote: 'No sobrepasar ángulo de molestias.'
      }
    ]
  },
  hip: {
    zoneId: 'hip',
    zoneTitle: 'Cadera & Cadena Posterior',
    protocolTitle: 'Movilidad 90/90 & Elephant Walks',
    recommendedDose: '2 series x 20 Elephant Walks + 10 cambios 90/90',
    safetyDisclaimer: 'Considera reducir rango o pausar hoy si notas bloqueo lumbar.',
    exercises: [
      {
        id: 'hip_1',
        name: 'Elephant Walks en Escuadro',
        dosage: '2x20 reps alternadas',
        setupInstruction: 'Manos apoyadas en bloque/suelo, extiende rodilla alternadamente manteniendo torso inclinado.',
        safetyNote: 'Estiramiento en vientre muscular, no dolor punzante articular.'
      }
    ]
  }
};
