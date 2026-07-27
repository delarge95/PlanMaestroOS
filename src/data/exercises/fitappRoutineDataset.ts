import type { RoutineWeek, RoutineDay } from '../../components/fitness/UnifiedRoutineTable';

// BASE DAY DEFINITIONS FOR MIN-MAX PROGRAM (PDF ACCURATE)
const minMaxWeek1Days: RoutineDay[] = [
  {
    dayName: 'Day 1: Upper 1 (Empuje & Pecho)',
    exercises: [
      { name: 'Barbell Incline Press', subOption1: 'DB Incline Press', subOption2: 'Smith Machine Incline Press', calisthenicsSub: 'Pseudo Planche Pushups', warmupSets: '2-4', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 (Set 1) / RIR 0 (Set 2)', rest: '3-5 min', notes: 'Banca a 30° o 45°. Pausa 1s en la parte inferior manteniendo tensión en el pecho.' },
      { name: 'Pec Deck', subOption1: 'DB Flye', subOption2: 'Cable Flye', calisthenicsSub: 'Archer Ring Rows', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Pausa 1s en la contracción. Enfocar tensión en pectoral mayor.' },
      { name: 'Incline DB Y-Raise', subOption1: 'Cable Y-Raise', subOption2: 'High-Cable Lateral Raise', calisthenicsSub: 'Ring Lateral Leans', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Banco inclinado a 30°. Elevar mancuernas en ángulo Y para deltoides lateral.' },
      { name: 'Pull-Up (Wide Grip)', subOption1: 'Lat Pulldown (Wide Grip)', subOption2: 'Dual-Handle Lat Pulldown', calisthenicsSub: 'Chin-Up', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 (Set 1) / RIR 0 (Set 2)', rest: '2-3 min', notes: 'Agarre prono 1.5x ancho de hombros. Excéntrica controlada de 3 segundos.' },
      { name: 'Kelso Shrug', subOption1: 'Seated Cable Kelso Shrug', subOption2: 'Incline DB Kelso Shrug', calisthenicsSub: 'Scapular Pulls', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 (Set 1) / RIR 0 (Set 2)', rest: '2-3 min', notes: 'Pausa de 1s en la contracción máxima. Retracción escapular pura.' },
      { name: 'Triceps Pressdown', subOption1: 'Close-Grip Bench Press', subOption2: 'Smith Machine JM Press', calisthenicsSub: 'Close-Grip Pushup', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Cuerda o barra. Fijar codos al costado del cuerpo.' },
      { name: 'EZ-Bar Preacher Curl', subOption1: 'DB Preacher Curl', subOption2: 'Machine Preacher Curl', calisthenicsSub: 'Bodyweight Curl', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Tríceps pegados al pad. Rango de movimiento completo y estricto.' },
      { name: 'Dragon Flag', subOption1: 'Lying Leg Raise', subOption2: 'Bent-Knee Dragon Flag', calisthenicsSub: 'Hanging Leg Raise', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Mantener cuerpo rígido durante todo el rango de movimiento.' }
    ]
  },
  {
    dayName: 'Day 2: Lower 1 (Cuádriceps & Rodilla)',
    exercises: [
      { name: 'Lying Leg Curl', subOption1: 'Nordic Ham Curl', subOption2: 'Seated Leg Curl', calisthenicsSub: 'Asian Squat', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Ajustar la máquina para máximo estiramiento en la posición baja.' },
      { name: 'Squat (Your Choice)', subOption1: 'Barbell Lunge', subOption2: 'DB Lunge', calisthenicsSub: 'Box Pistol Squat', warmupSets: '2-4', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 (Set 1) / RIR 0 (Set 2)', rest: '3-5 min', notes: 'Sentadilla Trasera, Frontal, Hack o Smith. Profundidad paralela o más.' },
      { name: 'Smith Machine Lunge', subOption1: 'Sissy Squat', subOption2: 'Reverse Nordic', calisthenicsSub: 'Spanish Squat', warmupSets: '1-2', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Minimizar impulso de la pierna trasera.' },
      { name: 'Leg Extension', subOption1: 'Donkey Calf Raise', subOption2: 'Leg Press Calf Press', calisthenicsSub: 'Bodyweight Squat', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Tempo 3-0-3 en bajada y subida para anestesia tendinosa rotuliana.' },
      { name: 'Standing Calf Raise', subOption1: 'Donkey Calf Raise', subOption2: 'Leg Press Calf Press', calisthenicsSub: 'Elevation Heel Raise', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Pausa de 1-2 segundos en el fondo del estiramiento.' },
      { name: 'Machine Hip Abduction', subOption1: 'Standing Plate Abduction', subOption2: 'Cable Hip Abduction', calisthenicsSub: 'Side Plank Leg Lift', warmupSets: '0-1', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Colocar almohadillas entre rodillas y máquina si es posible.' }
    ]
  },
  {
    dayName: 'Day 3: Upper 2 (Tracción & Espalda)',
    exercises: [
      { name: 'Close-Grip Lat Pulldown', subOption1: '1-Arm Cable Pulldown', subOption2: 'Close-Grip Pull-Up', calisthenicsSub: 'Chin-Up', warmupSets: '2-3', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 1 (Set 1) / RIR 0 (Set 2)', rest: '2-3 min', notes: 'Inclinación de 15° hacia atrás y llevar codos hacia abajo.' },
      { name: 'Chest-Supported T-Bar Row', subOption1: 'Chest-Supported DB Row', subOption2: 'Chest-Supported Machine Row', calisthenicsSub: 'Archer Ring Rows', warmupSets: '2-3', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 1 (Set 1) / RIR 0 (Set 2)', rest: '2-3 min', notes: 'Codos abiertos a 45°. Apretar escápulas fuertemente al final del recorrido.' },
      { name: 'Machine Shrug', subOption1: 'Cable Shrug-In', subOption2: 'Barbell Shrug', calisthenicsSub: 'Scapular Dip', warmupSets: '1-2', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Encoger pensando en llevar los hombros a las orejas.' },
      { name: 'Machine Chest Press', subOption1: 'DB Bench Press', subOption2: 'Smith Machine Bench Press', calisthenicsSub: 'Pseudo Planche Pushup', warmupSets: '2-4', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 1 (Set 1) / RIR 0 (Set 2)', rest: '3-5 min', notes: 'Pausa de 1 segundo abajo manteniendo tensión pectoral.' },
      { name: 'High-Cable Lateral Raise', subOption1: 'Machine Lateral Raise', subOption2: 'DB Lateral Raise', calisthenicsSub: 'Ring Lateral Leans', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Polea a la altura de cadera. Estiramiento profundo abajo.' },
      { name: 'Cable Crunch', subOption1: 'Machine Crunch', subOption2: 'Weighted Crunch', calisthenicsSub: 'V Sit-Up', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Redondear la espalda baja al hacer la contracción abdominal.' },
      { name: '1-Arm Reverse Pec Deck', subOption1: 'Reverse Cable Crossover', subOption2: 'Lying Reverse DB Flye', calisthenicsSub: 'Rear Delt Flye Ring', warmupSets: '0-1', sets: 1, repRange: '8-10', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Barrer el brazo hacia afuera creando un arco amplio.' }
    ]
  },
  {
    dayName: 'Day 4: Lower 2 (Cadena Posterior & Bisagra)',
    exercises: [
      { name: 'Leg Extension', subOption1: 'Sissy Squat', subOption2: 'Reverse Nordic', calisthenicsSub: 'Spanish Squats', warmupSets: '1-2', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Profundidad limpia sin giros lumbares.' },
      { name: 'Barbell RDL', subOption1: 'Seated Cable Deadlift', subOption2: 'DB RDL', calisthenicsSub: '45° Hyperextension', warmupSets: '2-3', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 2 (Set 1) / RIR 1 (Set 2)', rest: '2-3 min', notes: 'Empujar glúteos atrás con barra pegada a las piernas.' },
      { name: 'Machine Hip Thrust', subOption1: '45° Hyperextension', subOption2: 'Barbell Hip Thrust', calisthenicsSub: 'Single Leg Glute Bridge', warmupSets: '2-4', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 (Set 1) / RIR 0 (Set 2)', rest: '2-3 min', notes: 'Apretar glúteos fuerte arriba y controlar el descenso.' },
      { name: 'Leg Press', subOption1: 'Barbell Squat', subOption2: 'Smith Machine Squat', calisthenicsSub: 'Bodyweight Squat', warmupSets: '2-4', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '2-3 min', notes: 'Pies en la parte baja para mayor estímulo de cuádriceps.' },
      { name: 'Standing Calf Raise', subOption1: 'Donkey Calf Raise', subOption2: 'Leg Press Calf Press', calisthenicsSub: 'Single Leg Calf Raise', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Pausa de 1-2 segundos abajo en estiramiento.' }
    ]
  },
  {
    dayName: 'Day 5: Arms & Delts (Brazo & Hombro)',
    exercises: [
      { name: 'Bayesian Cable Curl', subOption1: 'Standing DB Curl', subOption2: 'Incline DB Curl', calisthenicsSub: 'Ring Biceps Curl', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Inclinarse ligeramente para evitar que el cable golpee la muñeca.' },
      { name: 'Overhead Cable Triceps Extension', subOption1: 'Skull Crusher', subOption2: 'Overhead DB Triceps Extension', calisthenicsSub: 'Ring Overhead Triceps Extension', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Sentir estiramiento profundo en tríceps durante la fase negativa.' },
      { name: 'Modified Zottman Curl', subOption1: 'Preacher Hammer Curl', subOption2: 'DB Hammer Curl', calisthenicsSub: 'Chin-Up Static Hold', warmupSets: '0-1', sets: 1, repRange: '8-10', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Martillo al subir y supinado al bajar.' },
      { name: 'Cable Triceps Kickback', subOption1: 'Close Grip Dip', subOption2: 'Seated Dip Machine', calisthenicsSub: 'Bench Dip', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Brazo por detrás del torso durante todo el rango.' },
      { name: 'DB Wrist Curl', subOption1: 'Cable Wrist Curl', subOption2: 'Barbell Curl', calisthenicsSub: 'Dead Hang', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Repeticiones suaves y totalmente controladas.' },
      { name: 'Alternating DB Curl', subOption1: 'Cable Wrist Extension', subOption2: 'EZ-Bar Curl', calisthenicsSub: 'Dead Hang', warmupSets: '0-1', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Sin balanceo del cuerpo.' },
      { name: 'Dead Hang', subOption1: 'Active Hang', subOption2: 'One-Arm Hang', calisthenicsSub: 'Dead Hang', warmupSets: '0', sets: 2, repRange: 'Max Time', rirOrRpe: 'Failure', rest: '1-2 min', notes: 'Intentar sumar más segundos cada semana.' },
      { name: 'Machine Lateral Raise', subOption1: 'DB Lateral Raise', subOption2: 'High-Cable Lateral Raise', calisthenicsSub: 'Ring Lateral Leans', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 (Set 1) / RIR 0 (Set 2)', rest: '1-2 min', notes: 'Squeeze deltoides lateral.' }
    ]
  }
];

// GENERATE ALL 12 WEEKS FOR MIN-MAX PROGRAM
export const minMaxWeeks: RoutineWeek[] = Array.from({ length: 12 }, (_, index) => {
  const weekNum = index + 1;
  const isBlock2 = weekNum >= 7;
  const isDeload = weekNum === 6 || weekNum === 12;

  let blockLabel = `Bloque ${isBlock2 ? '2' : '1'}`;
  let phaseTitle = isDeload ? 'Semana de Descanso / Deload' : isBlock2 ? 'Bloque de Máxima Intensidad & Fallo' : 'Bloque de Sobrecarga Progresiva';

  let notes = isDeload
    ? 'Semana de descarga estratégica. Reducir la intensidad a RIR 2-3 para permitir la supercompensación del sistema nervioso central y tendones.'
    : isBlock2
    ? 'Bloque 2: La última serie de cada ejercicio se lleva al fallo (RIR 0) con técnicas de intensidad (Drop Sets en empuje, Lengthened Partials en jalones, Myo-reps en brazos).'
    : 'Bloque 1: Llevar la primera serie a RIR 1 y la segunda serie al fallo técnico (RIR 0). Buscar incremento de carga o repeticiones respecto a la semana anterior.';

  // Clone days and adjust intensity notes per week
  const days = minMaxWeek1Days.map((day) => ({
    ...day,
    exercises: day.exercises.map((ex) => ({
      ...ex,
      rirOrRpe: isDeload
        ? 'RIR 2 - 3 (Deload)'
        : isBlock2
        ? 'RIR 0 + Técnica de Intensidad'
        : ex.rirOrRpe
    }))
  }));

  return {
    weekName: `Semana ${weekNum} (${blockLabel} • ${phaseTitle})`,
    notes,
    days
  };
});

// GENERATE ALL 8 WEEKS FOR POWERBUILDING PROGRAM
export const powerbuildingWeeks: RoutineWeek[] = Array.from({ length: 8 }, (_, index) => {
  const weekNum = index + 1;
  const isDeload = weekNum === 4 || weekNum === 8;

  return {
    weekName: `Semana ${weekNum} ${isDeload ? '(Deload Estratégico)' : '(Fase de Fuerza Base)'}`,
    notes: isDeload
      ? 'Deload de descarga: reducir pesos un 10-15% para consolidar adaptaciones de fuerza.'
      : `Semana ${weekNum} de sobrecarga progresiva. Incrementar 2.5kg en básicos o 1 repetición en accesorios.`,
    days: [
      {
        dayName: 'Full Body 1: Squat & OHP',
        exercises: [
          { name: 'Back Squat', subOption1: 'Safety Bar Squat', subOption2: 'Front Squat', warmupSets: '4', sets: 3, repRange: isDeload ? '5' : '5 / 8', rirOrRpe: isDeload ? 'RPE 6.5' : 'RPE 8.0', rest: '3-4 min', notes: 'Top Set: 1x5 a 75-80% 1RM. Back-off: 2x8 al 70%. Velocidad explosiva.' },
          { name: 'Overhead Press', subOption1: 'Seated DB Press', subOption2: 'Machine Shoulder Press', warmupSets: '2', sets: 3, repRange: '8', rirOrRpe: isDeload ? 'RPE 6.5' : 'RPE 7.5', rest: '2-3 min', notes: 'Resetear en cada repetición. Mantener glúteos e inframaxilar apretados.' },
          { name: 'Glute Ham Raise', subOption1: 'Nordic Ham Curl', subOption2: 'Seated Leg Curl', warmupSets: '1', sets: 3, repRange: '8-10', rirOrRpe: 'RPE 7.5', rest: '1-2 min', notes: 'Caderas alineadas. Usar brazos en excéntrica si es necesario.' },
          { name: 'Helms Row', subOption1: 'Chest-Supported Row', subOption2: 'Pendlay Row', warmupSets: '1', sets: 3, repRange: '12-15', rirOrRpe: 'RPE 9.0', rest: '1-2 min', notes: 'Forma estricta. Codos proyectados atrás a 45°.' },
          { name: 'Hammer Curl', subOption1: 'Cable Rope Curl', subOption2: 'Preacher Hammer Curl', warmupSets: '0', sets: 3, repRange: '20-25', rirOrRpe: 'RPE 10', rest: '1-2 min', notes: 'Codos fijos a los lados. Squeeze de braquial al subir.' }
        ]
      },
      {
        dayName: 'Full Body 2: Deadlift & Bench',
        exercises: [
          { name: 'Deadlift', subOption1: 'Sumo Deadlift', subOption2: 'Trap Bar Deadlift', warmupSets: '4', sets: 3, repRange: '4', rirOrRpe: isDeload ? 'RPE 6.5' : 'RPE 8.0', rest: '3-5 min', notes: 'Posición convencional o sumo. Tensar dorsales antes del despegue.' },
          { name: 'Barbell Bench Press', subOption1: 'Flat DB Press', subOption2: 'Machine Chest Press', warmupSets: '4', sets: 3, repRange: '3 / 10', rirOrRpe: isDeload ? 'RPE 7.0' : 'RPE 8.5', rest: '4-5 min', notes: 'Top set 1x3 al 82.5%. 2 series de 10 reps con 1s de pausa en el pecho.' },
          { name: 'Weighted Pull-Up', subOption1: 'Lat Pulldown', subOption2: 'Chin-Up', warmupSets: '1', sets: 3, repRange: '5-8', rirOrRpe: 'RPE 8.0', rest: '3-4 min', notes: 'Agarre 1.5x ancho de hombros. Pecho directo a la barra.' },
          { name: 'Floor Skull Crusher', subOption1: 'EZ-Bar Skull Crusher', subOption2: 'Triceps Pressdown', warmupSets: '1', sets: 3, repRange: '10-12', rirOrRpe: 'RPE 8.0', rest: '1-2 min', notes: 'Llevar la barra detrás de la cabeza tocando suavemente el suelo.' }
        ]
      },
      {
        dayName: 'Full Body 3: Squat & Dip',
        exercises: [
          { name: 'Back Squat', subOption1: 'Box Squat', subOption2: 'Leg Press', warmupSets: '4', sets: 3, repRange: '4', rirOrRpe: '80% 1RM', rest: '3-4 min', notes: 'Mantener tensión en la parte alta de la espalda contra la barra.' },
          { name: 'Weighted Dip', subOption1: 'DB Floor Press', subOption2: 'Close-Grip Bench Press', warmupSets: '2', sets: 3, repRange: '8', rirOrRpe: 'RPE 8.0', rest: '2-3 min', notes: 'Inclinación ligera de torso para mayor enfoque en pecho.' },
          { name: 'Face Pull', subOption1: 'Reverse Cable Flye', subOption2: 'Band Pull-Apart', warmupSets: '0', sets: 4, repRange: '15-20', rirOrRpe: 'RPE 9.0', rest: '1-2 min', notes: 'Retraer escápulas y rotar externamente al tirar hacia la cara.' },
          { name: 'Incline Dumbbell Curl', subOption1: 'Bayesian Cable Curl', subOption2: 'EZ-Bar Curl', warmupSets: '1', sets: 3, repRange: '12-15', rirOrRpe: 'RPE 9.0', rest: '1-2 min', notes: 'Ejecutar un brazo a la vez iniciando con el lado más débil.' }
        ]
      }
    ]
  };
});

// GENERATE ALL 8 WEEKS FOR GLUTE HYPERTROPHY PROGRAM
export const gluteWeeks: RoutineWeek[] = Array.from({ length: 8 }, (_, index) => {
  const weekNum = index + 1;
  const isMetabolic = weekNum >= 7;

  return {
    weekName: `Semana ${weekNum} (${isMetabolic ? 'Bloque Metabólico & Bombeo' : 'Bloque de Acumulación & Carga'})`,
    notes: isMetabolic
      ? 'Fase metabólica: pesos moderados, mayor volumen de repeticiones (20-30 reps) y descansos más breves (60s).'
      : `Semana ${weekNum} de sobrecarga progresiva en caderas y cadena posterior.`,
    days: [
      {
        dayName: 'Day 1: Lower Body (Fuerza & Glúteo)',
        exercises: [
          { name: 'Back Squat', subOption1: 'Safety Bar Squat', subOption2: 'Goblet Squat', warmupSets: 'Pirámide', sets: 3, repRange: '5', rirOrRpe: '75-80% 1RM (RPE 8)', rest: '3.0 min', notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.' },
          { name: 'Romanian Deadlift', subOption1: 'DB RDL', subOption2: 'Snatch-Grip RDL', warmupSets: '1-2', sets: 3, repRange: '6-8', rirOrRpe: 'RPE 8.0', rest: '1.5 min', notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.' },
          { name: 'Seated Leg Curl', subOption1: 'Lying Leg Curl', subOption2: 'Nordic Ham Curl', warmupSets: '1', sets: 3, repRange: '12-15', rirOrRpe: 'RPE 8.0', rest: '1.0 min', notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.' },
          { name: 'Machine Hip Abduction', subOption1: 'Cable Hip Abduction', subOption2: 'Banded Side Walk', warmupSets: '0', sets: 3, repRange: '25-30', rirOrRpe: 'RPE 8.0', rest: '1.5 min', notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.' }
        ]
      },
      {
        dayName: 'Day 3: Lower Body (Hipertrofia Glúteo Mayor)',
        exercises: [
          { name: 'Barbell Hip Thrust', subOption1: 'Single Leg Hip Thrust', subOption2: 'Machine Hip Thrust', warmupSets: '2-3', sets: 3, repRange: '10-12', rirOrRpe: 'RPE 8.0', rest: '1.5 min', notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.' },
          { name: 'Barbell Hip Thrust (Drop Set)', subOption1: 'Banded Hip Thrust', subOption2: 'Frog Pumps', warmupSets: '0', sets: 1, repRange: '15-20', rirOrRpe: 'RPE 9.0', rest: '1.5 min', notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.' },
          { name: 'Cable Pullthrough', subOption1: 'DB Swing', subOption2: 'Hyperextension 45°', warmupSets: '1', sets: 3, repRange: '10-12', rirOrRpe: 'RPE 8.0', rest: '1.5 min', notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.' },
          { name: 'Cable Glute Kick Back', subOption1: 'Banded Kickback', subOption2: 'Donkey Kicks', warmupSets: '1', sets: 3, repRange: '12-15', rirOrRpe: 'RPE 8.0', rest: '1.5 min', notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.' }
        ]
      },
      {
        dayName: 'Day 5: Lower Body (Densidad & Zancadas)',
        exercises: [
          { name: 'Walking Lunge', subOption1: 'DB Static Lunge', subOption2: 'Bulgarian Split Squat', warmupSets: '2', sets: 3, repRange: '20-30 Zancadas', rirOrRpe: 'RPE 7.5', rest: '1.5 min', notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.' },
          { name: 'Lower Back Extension', subOption1: 'Jefferson Curl', subOption2: 'Glute Ham Raise', warmupSets: '1', sets: 3, repRange: '15-20', rirOrRpe: 'RPE 8.0', rest: '1.0 min', notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.' },
          { name: 'Frog Pump', subOption1: 'Banded Abduction', subOption2: 'Elevated Glute Bridge', warmupSets: '0', sets: 2, repRange: '30-50', rirOrRpe: 'RPE 9.0', rest: '1.0 min', notes: 'Tempo rápido y apretón máximo al llegar a la extensión.' }
        ]
      }
    ]
  };
});
