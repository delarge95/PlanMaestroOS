import type { RoutineWeek } from '../../components/fitness/UnifiedRoutineTable';

// 1. JEFF NIPPARD MIN-MAX PROGRAM (PDF + FITAPP DATASET)
export const minMaxWeeks: RoutineWeek[] = [
  {
    weekName: 'Bloque 1 • Semana 1 (Intro Week)',
    notes: 'En la semana 1 la mayoría de series se llevan a RPE 7-9 (1-3 repeticiones en reserva). Sirve como adaptación previa al fallo.',
    days: [
      {
        dayName: 'Upper 1 (Empuje & Pecho)',
        exercises: [
          { name: 'Barbell Incline Press', subOption1: 'DB Incline Press', subOption2: 'Smith Machine Incline Press', calisthenicsSub: 'Pseudo Planche Pushups', warmupSets: '2-4', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 / RIR 2', rest: '3-5 min', notes: 'Banca a 30°-45°. Pausa de 1 segundo en el fondo con tensión en pectorales.' },
          { name: 'Pec Deck', subOption1: 'DB Flye', subOption2: 'Cable Flye', calisthenicsSub: 'Archer Ring Rows', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Pausa 1s al fondo. Mantener tensión constante en pectoral mayor.' },
          { name: 'Incline DB Y-Raise', subOption1: 'Cable Y-Raise', subOption2: 'High-Cable Lateral Raise', calisthenicsSub: 'Ring Lateral Leans', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Banco inclinado a 30°. Elevar mancuernas formando una Y.' },
          { name: 'Pull-Up (Wide Grip)', subOption1: 'Lat Pulldown (Wide Grip)', subOption2: 'Dual-Handle Pulldown', calisthenicsSub: 'Chin-Up', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 / RIR 0', rest: '2-3 min', notes: 'Agarre prono 1.5x ancho de hombros. Excéntrica controlada sintiendo el dorsal.' },
          { name: 'Kelso Shrug', subOption1: 'Seated Cable Kelso Shrug', subOption2: 'Incline DB Kelso Shrug', calisthenicsSub: 'Scapular Pulls', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 / RIR 0', rest: '2-3 min', notes: 'Pausa 1s arriba. Retracción escapular pura sin doblar codos.' },
          { name: 'Triceps Pressdown', subOption1: 'Close-Grip Bench Press', subOption2: 'Smith Machine JM Press', calisthenicsSub: 'Close-Grip Pushup', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Cuerda o barra. Mantener codos bloqueados a los lados.' },
          { name: 'EZ-Bar Preacher Curl', subOption1: 'DB Preacher Curl', subOption2: 'Machine Preacher Curl', calisthenicsSub: 'Bodyweight Curl', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Tríceps firmemente pegados al soporte. Repeticiones fluidas y estrictas.' },
          { name: 'Dragon Flag', subOption1: 'Lying Leg Raise', subOption2: 'Bent-Knee Dragon Flag', calisthenicsSub: 'Hanging Leg Raise', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Cuerpo rígido durante todo el rango. Control de core.' }
        ]
      },
      {
        dayName: 'Lower 1 (Cuádriceps & Rodilla)',
        exercises: [
          { name: 'Lying Leg Curl', subOption1: 'Nordic Ham Curl', subOption2: 'Seated Leg Curl', calisthenicsSub: 'Asian Squat', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Ajustar máquina para máximo estiramiento en la posición baja.' },
          { name: 'Squat (Your Choice)', subOption1: 'Barbell Lunge', subOption2: 'DB Lunge', calisthenicsSub: 'Box Pistol Squat', warmupSets: '2-4', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 / RIR 0', rest: '3-5 min', notes: 'Sentadilla trasera, frontal, péndulo o Smith. Profundidad controlada.' },
          { name: 'Smith Machine Lunge', subOption1: 'Sissy Squat', subOption2: 'Reverse Nordic', calisthenicsSub: 'Spanish Squat', warmupSets: '1-2', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Minimizar impulso de la pierna trasera.' },
          { name: 'Leg Extension', subOption1: 'Donkey Calf Raise', subOption2: 'Leg Press Calf Press', calisthenicsSub: 'Bodyweight Squat', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Asiento echado hacia atrás. Anestesia tendinosa con tempo 3-0-3.' },
          { name: 'Standing Calf Raise', subOption1: 'Donkey Calf Raise', subOption2: 'Leg Press Calf Press', calisthenicsSub: 'Elevation Heel Raise', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Pausa de 1-2 segundos en el fondo antes de subir.' },
          { name: 'Machine Hip Abduction', subOption1: 'Standing Plate Abduction', subOption2: 'Cable Hip Abduction', calisthenicsSub: 'Side Plank Leg Lift', warmupSets: '0-1', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Inclinarse hacia adelante y agarrar rieles para mayor rango en glúteos.' }
        ]
      },
      {
        dayName: 'Upper 2 (Tracción & Espalda)',
        exercises: [
          { name: 'Close-Grip Lat Pulldown', subOption1: '1-Arm Cable Pulldown', subOption2: 'Close-Grip Pull-Up', calisthenicsSub: 'Chin-Up', warmupSets: '2-3', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 1 / RIR 0', rest: '2-3 min', notes: 'Inclinación de 15° hacia atrás. Traer codos hacia abajo.' },
          { name: 'Chest-Supported T-Bar Row', subOption1: 'Chest-Supported DB Row', subOption2: 'Chest-Supported Machine Row', calisthenicsSub: 'Archer Ring Rows', warmupSets: '2-3', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 1 / RIR 0', rest: '2-3 min', notes: 'Codos abiertos a 45°. Squeeze fuerte de escápulas arriba.' },
          { name: 'Machine Shrug', subOption1: 'Cable Shrug-In', subOption2: 'Barbell Shrug', calisthenicsSub: 'Scapular Dip', warmupSets: '1-2', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Encoger hombros pensando en llevarlos hacia las orejas.' },
          { name: 'Machine Chest Press', subOption1: 'DB Bench Press', subOption2: 'Smith Machine Bench Press', calisthenicsSub: 'Pseudo Planche Pushup', warmupSets: '2-4', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 1 / RIR 0', rest: '3-5 min', notes: 'Pausa de 1s al fondo reteniendo tensión en pechos.' },
          { name: 'High-Cable Lateral Raise', subOption1: 'Machine Lateral Raise', subOption2: 'DB Lateral Raise', calisthenicsSub: 'Ring Lateral Leans', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Polea a la altura de la cadera. Estiramiento profundo abajo.' },
          { name: 'Cable Crunch', subOption1: 'Machine Crunch', subOption2: 'Weighted Crunch', calisthenicsSub: 'V Sit-Up', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Redondear espalda baja al apretar los abdominales.' },
          { name: '1-Arm Reverse Pec Deck', subOption1: 'Reverse Cable Crossover', subOption2: 'Lying Reverse DB Flye', calisthenicsSub: 'Rear Delt Flye Ring', warmupSets: '0-1', sets: 1, repRange: '8-10', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Barrer el peso formando el semicírculo más amplio posible.' }
        ]
      },
      {
        dayName: 'Lower 2 (Cadena Posterior & Bisagra)',
        exercises: [
          { name: 'Leg Extension', subOption1: 'Sissy Squat', subOption2: 'Reverse Nordic', calisthenicsSub: 'Spanish Squats', warmupSets: '1-2', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Profundidad sin redondeo lumbar.' },
          { name: 'Barbell RDL', subOption1: 'Seated Cable Deadlift', subOption2: 'DB RDL', calisthenicsSub: '45° Hyperextension', warmupSets: '2-3', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 2 / RIR 1', rest: '2-3 min', notes: 'Empujar cadera directo atrás manteniendo columna neutra.' },
          { name: 'Machine Hip Thrust', subOption1: '45° Hyperextension', subOption2: 'Barbell Hip Thrust', calisthenicsSub: 'Single Leg Glute Bridge', warmupSets: '2-4', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 1 / RIR 0', rest: '2-3 min', notes: 'Apretar glúteos fuerte arriba y controlar el descenso.' },
          { name: 'Leg Press', subOption1: 'Barbell Squat', subOption2: 'Smith Machine Squat', calisthenicsSub: 'Bodyweight Squat', warmupSets: '2-4', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '2-3 min', notes: 'Pies bajos en la plataforma para máximo enfoque en cuádriceps.' },
          { name: 'Standing Calf Raise', subOption1: 'Donkey Calf Raise', subOption2: 'Leg Press Calf Press', calisthenicsSub: 'Single Leg Calf Raise', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Pausa de 1-2 segundos en el estiramiento bajo.' }
        ]
      },
      {
        dayName: 'Arms & Delts (Brazo & Hombro)',
        exercises: [
          { name: 'Bayesian Cable Curl', subOption1: 'Standing DB Curl', subOption2: 'Incline DB Curl', calisthenicsSub: 'Ring Biceps Curl', warmupSets: '0-1', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Inclinarse ligeramente para evitar rozar polea. Sintiendo estiramiento.' },
          { name: 'Overhead Cable Triceps Extension', subOption1: 'Skull Crusher', subOption2: 'Overhead DB Triceps Extension', calisthenicsSub: 'Ring Overhead Triceps Extension', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Sensación de estiramiento profundo en la cabeza larga del tríceps.' },
          { name: 'Modified Zottman Curl', subOption1: 'Preacher Hammer Curl', subOption2: 'DB Hammer Curl', calisthenicsSub: 'Chin-Up Static Hold', warmupSets: '0-1', sets: 1, repRange: '8-10', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Curl estilo martillo al subir y supinado al bajar.' },
          { name: 'Cable Triceps Kickback', subOption1: 'Close Grip Dip', subOption2: 'Seated Dip Machine', calisthenicsSub: 'Bench Dip', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Mantener brazo por detrás del torso durante todo el rango.' },
          { name: 'DB Wrist Curl', subOption1: 'Cable Wrist Curl', subOption2: 'Barbell Curl', calisthenicsSub: 'Dead Hang', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Repeticiones suaves y totalmente controladas.' },
          { name: 'Alternating DB Curl', subOption1: 'Cable Wrist Extension', subOption2: 'EZ-Bar Curl', calisthenicsSub: 'Dead Hang', warmupSets: '0-1', sets: 1, repRange: '6-8', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Trabajo controlado sin balanceo.' },
          { name: 'Dead Hang', subOption1: 'Active Hang', subOption2: 'One-Arm Hang', calisthenicsSub: 'Dead Hang', warmupSets: '0', sets: 2, repRange: 'Max Time', rirOrRpe: 'Failure', rest: '1-2 min', notes: 'Descompresión espinal y sobrecarga de agarre.' },
          { name: 'Machine Lateral Raise', subOption1: 'DB Lateral Raise', subOption2: 'High-Cable Lateral Raise', calisthenicsSub: 'Ring Lateral Leans', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0 / RIR 0', rest: '1-2 min', notes: 'Enfoque total en contraer el deltoides lateral.' }
        ]
      }
    ]
  },
  {
    weekName: 'Bloque 2 • Semana 7 (Fallo e Intensidad)',
    notes: 'En el bloque 2 se introducen técnicas de intensidad en la última serie: Drop sets, Partiales alargadas y Myo-reps.',
    days: [
      {
        dayName: 'Upper 1 (Empuje & Pecho + Drop Sets)',
        exercises: [
          { name: 'Barbell Incline Press', subOption1: 'DB Incline Press', subOption2: 'Smith Machine Incline Press', calisthenicsSub: 'Pseudo Planche Pushups', warmupSets: '2-4', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 + Drop Set', rest: '3-5 min', notes: 'Última serie: al llegar al fallo, reducir peso un 25% y continuar al fallo.' },
          { name: 'Pec Deck', subOption1: 'DB Flye', subOption2: 'Cable Flye', calisthenicsSub: 'Archer Ring Rows', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 + Weighted Hold', rest: '1-2 min', notes: 'Última serie: sostener 30s la posición estirada al fallo.' },
          { name: 'Incline DB Y-Raise', subOption1: 'Cable Y-Raise', subOption2: 'High-Cable Lateral Raise', calisthenicsSub: 'Ring Lateral Leans', warmupSets: '0-1', sets: 2, repRange: '8-10', rirOrRpe: 'RIR 0', rest: '1-2 min', notes: 'Fallo técnico total.' },
          { name: 'Pull-Up (Wide Grip)', subOption1: 'Lat Pulldown (Wide Grip)', subOption2: 'Dual-Handle Pulldown', calisthenicsSub: 'Chin-Up', warmupSets: '1-2', sets: 2, repRange: '6-8', rirOrRpe: 'RIR 0 + Lengthened Partials', rest: '2-3 min', notes: 'Partiales al fondo tras el fallo.' }
        ]
      }
    ]
  }
];

// 2. FITAPP POWERBUILDING PROGRAM (WORKOUTPROGRAM.TS)
export const powerbuildingWeeks: RoutineWeek[] = [
  {
    weekName: 'Semana 1: Bloque de Fuerza & Potencia',
    notes: 'Enfoque en levantamientos básicos (Squat, Deadlift, Bench, OHP) combinados con accesorios de hipertrofia.',
    days: [
      {
        dayName: 'Full Body 1: Squat & OHP',
        exercises: [
          { name: 'Back Squat', subOption1: 'Safety Bar Squat', subOption2: 'Front Squat', warmupSets: '4', sets: 3, repRange: '5 / 8', rirOrRpe: 'RPE 7.5 - 8', rest: '3-4 min', notes: 'Top Set: 1x5 a 75-80% 1RM. Back-off: 2x8 al 70%. Enfoque en velocidad de barra.' },
          { name: 'Overhead Press', subOption1: 'Seated DB Press', subOption2: 'Machine Shoulder Press', warmupSets: '2', sets: 3, repRange: '8', rirOrRpe: '70% 1RM (RPE 7.5)', rest: '2-3 min', notes: 'Resetear en cada repetición. Mantener glúteos apretados.' },
          { name: 'Glute Ham Raise', subOption1: 'Nordic Ham Curl', subOption2: 'Seated Leg Curl', warmupSets: '1', sets: 3, repRange: '8-10', rirOrRpe: 'RPE 7', rest: '1-2 min', notes: 'Caderas alineadas. Usar las manos si falta fuerza excéntrica.' },
          { name: 'Helms Row', subOption1: 'Chest-Supported Row', subOption2: 'Pendlay Row', warmupSets: '1', sets: 3, repRange: '12-15', rirOrRpe: 'RPE 9', rest: '1-2 min', notes: 'Forma estricta. Llevar codos hacia atrás a 45°.' },
          { name: 'Hammer Curl', subOption1: 'Cable Rope Curl', subOption2: 'Preacher Hammer Curl', warmupSets: '0', sets: 3, repRange: '20-25', rirOrRpe: 'RPE 10', rest: '1-2 min', notes: 'Mantener codos fijos y apretar el mango con fuerza.' }
        ]
      },
      {
        dayName: 'Full Body 2: Deadlift & Bench',
        exercises: [
          { name: 'Deadlift', subOption1: 'Sumo Deadlift', subOption2: 'Trap Bar Deadlift', warmupSets: '4', sets: 3, repRange: '4', rirOrRpe: '80% 1RM (RPE 8)', rest: '3-5 min', notes: 'Posición convencional o sumo. Tensar dorsales antes de despegar.' },
          { name: 'Barbell Bench Press', subOption1: 'Flat DB Press', subOption2: 'Machine Chest Press', warmupSets: '4', sets: 3, repRange: '3 / 10', rirOrRpe: '82.5% / RPE 8.5', rest: '4-5 min', notes: 'Top set 1x3 al 82.5%. 2 series de 10 reps con 1s de pausa en pecho.' },
          { name: 'Weighted Pull-Up', subOption1: 'Lat Pulldown', subOption2: 'Chin-Up', warmupSets: '1', sets: 3, repRange: '5-8', rirOrRpe: 'RPE 8', rest: '3-4 min', notes: 'Agarre 1.5x ancho de hombros. Pecho a la barra.' },
          { name: 'Floor Skull Crusher', subOption1: 'EZ-Bar Skull Crusher', subOption2: 'Triceps Pressdown', warmupSets: '1', sets: 3, repRange: '10-12', rirOrRpe: 'RPE 8', rest: '1-2 min', notes: 'Llevar la barra detrás de la cabeza tocando suavemente el suelo.' }
        ]
      },
      {
        dayName: 'Full Body 3: Squat & Dip',
        exercises: [
          { name: 'Back Squat', subOption1: 'Box Squat', subOption2: 'Leg Press', warmupSets: '4', sets: 3, repRange: '4', rirOrRpe: '80% 1RM', rest: '3-4 min', notes: 'Mantener tensión en la parte alta de la espalda contra la barra.' },
          { name: 'Weighted Dip', subOption1: 'DB Floor Press', subOption2: 'Close-Grip Bench Press', warmupSets: '2', sets: 3, repRange: '8', rirOrRpe: 'RPE 8', rest: '2-3 min', notes: 'Inclinación ligera de torso para mayor enfoque en pecho.' },
          { name: 'Face Pull', subOption1: 'Reverse Cable Flye', subOption2: 'Band Pull-Apart', warmupSets: '0', sets: 4, repRange: '15-20', rirOrRpe: 'RPE 9', rest: '1-2 min', notes: 'Retraer escápulas y rotar externamente al tirar hacia la cara.' },
          { name: 'Incline Dumbbell Curl', subOption1: 'Bayesian Cable Curl', subOption2: 'EZ-Bar Curl', warmupSets: '1', sets: 3, repRange: '12-15', rirOrRpe: 'RPE 9', rest: '1-2 min', notes: 'Ejecutar un brazo a la vez iniciando con el lado más débil.' }
        ]
      }
    ]
  }
];

// 3. JEFF NIPPARD GLUTE HYPERTROPHY PROGRAM (JEFFNIPPARDGLUTEPROGRAM.TS)
export const gluteWeeks: RoutineWeek[] = [
  {
    weekName: 'Bloque de Acumulación • Semana 1',
    notes: 'Programa especializado en hipertrofia de glúteos e isquiotibiales con pirámides de carga y bombeo metabólico.',
    days: [
      {
        dayName: 'Day 1: Lower Body (Fuerza & Glúteo)',
        exercises: [
          { name: 'Back Squat', subOption1: 'Safety Bar Squat', subOption2: 'Goblet Squat', warmupSets: 'Pirámide', sets: 3, repRange: '5', rirOrRpe: '75-80% 1RM (RPE 8)', rest: '3.0 min', notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.' },
          { name: 'Romanian Deadlift', subOption1: 'DB RDL', subOption2: 'Snatch-Grip RDL', warmupSets: '1-2', sets: 3, repRange: '6-8', rirOrRpe: 'RPE 8', rest: '1.5 min', notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.' },
          { name: 'Seated Leg Curl (Superset)', subOption1: 'Lying Leg Curl', subOption2: 'Nordic Ham Curl', warmupSets: '1', sets: 3, repRange: '12-15', rirOrRpe: 'RPE 8', rest: '0.0 min', notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.' },
          { name: 'Machine Hip Abduction', subOption1: 'Cable Hip Abduction', subOption2: 'Banded Side Walk', warmupSets: '0', sets: 3, repRange: '25-30', rirOrRpe: 'RPE 8', rest: '1.5 min', notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.' }
        ]
      },
      {
        dayName: 'Day 3: Lower Body (Hipertrofia Glúteo Mayor)',
        exercises: [
          { name: 'Barbell Hip Thrust', subOption1: 'Single Leg Hip Thrust', subOption2: 'Machine Hip Thrust', warmupSets: '2-3', sets: 3, repRange: '10-12', rirOrRpe: 'RPE 8', rest: '1.5 min', notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.' },
          { name: 'Barbell Hip Thrust (Drop Set)', subOption1: 'Banded Hip Thrust', subOption2: 'Frog Pumps', warmupSets: '0', sets: 1, repRange: '15-20', rirOrRpe: 'RPE 9', rest: '1.5 min', notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.' },
          { name: 'Cable Pullthrough', subOption1: 'DB Swing', subOption2: 'Hyperextension 45°', warmupSets: '1', sets: 3, repRange: '10-12', rirOrRpe: 'RPE 8', rest: '1.5 min', notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.' },
          { name: 'Cable Glute Kick Back', subOption1: 'Banded Kickback', subOption2: 'Donkey Kicks', warmupSets: '1', sets: 3, repRange: '12-15', rirOrRpe: 'RPE 8', rest: '1.5 min', notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.' }
        ]
      },
      {
        dayName: 'Day 5: Lower Body (Densidad & Zancadas)',
        exercises: [
          { name: 'Walking Lunge', subOption1: 'DB Static Lunge', subOption2: 'Bulgarian Split Squat', warmupSets: '2', sets: 3, repRange: '20-30 Zancadas', rirOrRpe: 'RPE 7-8', rest: '1.5 min', notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.' },
          { name: 'Lower Back Extension', subOption1: 'Jefferson Curl', subOption2: 'Glute Ham Raise', warmupSets: '1', sets: 3, repRange: '15-20', rirOrRpe: 'RPE 8', rest: '1.0 min', notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.' },
          { name: 'Frog Pump', subOption1: 'Banded Abduction', subOption2: 'Elevated Glute Bridge', warmupSets: '0', sets: 2, repRange: '30-50', rirOrRpe: 'RPE 9', rest: '1.0 min', notes: 'Tempo rápido y apretón máximo al llegar a la extensión.' }
        ]
      }
    ]
  }
];
