export interface GridCell {
  id: string;
  time: string;
  activity: string;
  domain: 'general' | 'clinical' | 'fitness' | 'career' | 'german' | 'schedules';
  module: string;
  rule: string;
  sourceRef: string;
  microActions: string[];
  workoutDayIndex?: number; // 1: Upper 1, 2: Lower 1, 3: Upper 2, 4: Lower 2, 5: Arms & Delts
}

export const TIME_BLOCKS = [
  '05:30 - 06:00',
  '06:00 - 06:20',
  '06:20 - 06:40',
  '06:40 - 06:55',
  '06:55 - 07:40',
  '07:40 - 08:00',
  '08:00 - 09:00',
  '09:00 - 09:20',
  '09:20 - 11:40',
  '11:40 - 12:00',
  '12:00 - 13:30',
  '13:30 - 14:00',
  '14:00 - 14:40',
  '14:45 - 16:45',
  '16:45 - 17:15',
  '17:15 - 18:30',
  '18:30 - 19:00',
  '19:00 - 21:00',
  '21:00 - 21:30'
] as const;

export const DAYS_LIST = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] as const;

export type DayName = typeof DAYS_LIST[number];
export type TimeBlockStr = typeof TIME_BLOCKS[number];

// Helper builder
function buildGrid(phase: number) {
  const grid: Record<string, Record<string, GridCell>> = {};

  TIME_BLOCKS.forEach(time => {
    grid[time] = {};
    DAYS_LIST.forEach((day, dIdx) => {
      let cell: GridCell;

      if (time === '05:30 - 06:00') {
        cell = {
          id: `p${phase}-0530-${day}`,
          time,
          activity: day === 'Sábado' ? 'Despertar 07:00 (Flex)' : day === 'Domingo' ? 'Descanso Total Matutino' : 'Despertar 05:30 & Ropa Lista',
          domain: 'clinical',
          module: 'Sueño CBT-I & Inercia de Inicio',
          rule: 'Cero celular recreativo al despertar. Ropa y bolso listos desde la noche anterior.',
          sourceRef: 'horarios_matriz_semanal_grid.md#fase-1',
          microActions: ['Levantarse al primer pulso', 'Tomar agua 300ml', 'Vestirse con ropa de gym lista']
        };
      } else if (time === '06:00 - 06:20') {
        cell = {
          id: `p${phase}-0600-${day}`,
          time,
          activity: dIdx < 5 ? 'Trayecto al Gym (Audio Neutro)' : 'Tiempo Libre Matutino',
          domain: 'general',
          module: 'Transición Circadiana',
          rule: 'Escuchar podcasts neutros o audios de calma.',
          sourceRef: 'horarios_matriz_semanal_grid.md',
          microActions: ['Caminar o transporte directo', 'Evitar revisar redes o correo']
        };
      } else if (time === '06:20 - 06:40') {
        cell = {
          id: `p${phase}-0620-${day}`,
          time,
          activity: day === 'Domingo' ? 'Descanso Articular' : 'PREHAB AM: Wrist & Spanish Squats',
          domain: 'fitness',
          module: 'Rehabilitación Articular & HSR',
          rule: 'Wrist mobility 4 puntos + Nerve glides brazo izq + Spanish Squats 3-5x45s isométrico.',
          sourceRef: 'plan_fitness.md#prehab',
          microActions: ['Flexión/extensión de muñeca (2 min)', 'Nerve glides mediano/cubital (3 min)', 'Spanish Squats 3x45s con banda (10 min)']
        };
      } else if (time === '06:40 - 06:55') {
        cell = {
          id: `p${phase}-0640-${day}`,
          time,
          activity: day === 'Domingo' ? 'Descanso' : 'SKILL WORK: Handstand & Rings',
          domain: 'fitness',
          module: 'Skills Calistenia Overcoming Gravity',
          rule: phase === 1 ? 'Wall Handstand Hold & Support Hold en anillas.' : phase === 2 ? 'Tuck Planche Leans & Compresión.' : 'Handstand libre & Planche band.',
          sourceRef: 'Overcoming Gravity 2nd Ed',
          microActions: ['Wall Handstand 3x30s', 'Support Hold en Anillas 3x30s', 'Scapular Protraction holds']
        };
      } else if (time === '06:55 - 07:40') {
        const workoutNames = [
          'MIN-MAX: Day 1 Upper 1 (Empuje & Pecho)',
          'MIN-MAX: Day 2 Lower 1 (Cuádriceps & Tendón)',
          'MIN-MAX: Day 3 Upper 2 (Tracción & Espalda)',
          'MIN-MAX: Day 4 Lower 2 (Cadena Posterior & Bisagra)',
          'MIN-MAX: Day 5 Arms + Delts (Brazo & Hombro)',
          'LISS Caminata Suave / Cardio RPE 4',
          'Descanso Total Físico'
        ];
        cell = {
          id: `p${phase}-0655-${day}`,
          time,
          activity: workoutNames[dIdx],
          domain: 'fitness',
          module: `Min-Max Nippard Fase ${phase}`,
          rule: phase === 1 ? '1 serie efectiva a RIR 1-2. Anillas en empujes.' : phase === 2 ? '2 series efectivas a RIR 1. Tempo 3-0-3.' : '2-3 series efectivas a RIR 0-1. Drop sets.',
          sourceRef: 'The Min-Max Program (Jeff Nippard)',
          microActions: ['Ejecutar ejercicios según tabla', 'Respetar RIR indicado', 'Anotar peso/reps'],
          workoutDayIndex: dIdx < 5 ? dIdx + 1 : undefined
        };
      } else if (time === '07:40 - 08:00') {
        cell = {
          id: `p${phase}-0740-${day}`,
          time,
          activity: 'Ducha Gym & Estiramiento',
          domain: 'general',
          module: 'Higiene & Recuperación',
          rule: 'Ducha rápida, estiramiento pasivo suave.',
          sourceRef: 'horarios_matriz_semanal_grid.md',
          microActions: ['Ducha agua tibia/fría', 'Cambio de ropa limpia', 'Regreso a casa']
        };
      } else if (time === '08:00 - 09:00') {
        cell = {
          id: `p${phase}-0800-${day}`,
          time,
          activity: 'Desayuno Nutritivo & Desconexión',
          domain: 'general',
          module: 'Nutrición Circadiana',
          rule: 'Desayuno alto en proteína y grasas saludables.',
          sourceRef: 'horarios_matriz_semanal_grid.md',
          microActions: ['Comer sin afán', 'Hidratación 500ml', 'Alistar mesa de trabajo']
        };
      } else if (time === '09:00 - 09:20') {
        cell = {
          id: `p${phase}-0900-${day}`,
          time,
          activity: day === 'Sábado' ? 'REVISIÓN SEMANAL: TDAH & Workspace' : day === 'Domingo' ? 'Descanso Total' : 'PLANEACIÓN TDAH: Agenda Única (Max 3 Tareas)',
          domain: 'clinical',
          module: 'TDAH Módulo A (Agenda Única)',
          rule: 'Escribir máximo 3 tareas prioritarias. Cero apertura de correos antes de planear.',
          sourceRef: 'plan_accion_tdah_ansiedad_social-1.pdf#modulo-a',
          microActions: ['Revisar Agenda Única', 'Seleccionar Tarea 1, 2 y 3', 'Cerrar pestañas no usadas']
        };
      } else if (time === '09:20 - 11:40') {
        const deepWorkTasks = [
          phase === 1 ? 'BLOQUE A: Tesis (Correcciones APA & Formato)' : phase === 2 ? 'BLOQUE A: Portfolio Web MVP (Homepage & Layout)' : 'BLOQUE A: Soft Launch (2-3 Apps cualificadas)',
          phase === 1 ? 'BLOQUE A: Tesis (Diapositivas de Sustentación)' : phase === 2 ? 'BLOQUE A: Portfolio Web (Interacción 3D WebGL)' : 'BLOQUE A: Prep Prueba Técnica Shaders',
          phase === 1 ? 'BLOQUE A: Tesis (Diapositivas Versión Segura)' : phase === 2 ? 'BLOQUE A: CV 1 pág (Unity Tech Artist)' : 'BLOQUE A: Soft Launch (2-3 Apps cualificadas)',
          phase === 1 ? 'BLOQUE A: Tesis (Video Respaldo Demo Offline)' : phase === 2 ? 'BLOQUE A: ArtStation Breakdown (Shaders)' : 'BLOQUE A: Estudio Tooling & Pipelines',
          phase === 1 ? 'BLOQUE A: Tesis (Capturas Finales e Imágenes)' : phase === 2 ? 'BLOQUE A: Auditoría Paquete Mínimo Vendible' : 'BLOQUE A: Revisión Métricas de Búsqueda',
          'Limpieza & Organización de Workspace',
          'DESCANSO TOTAL: Cero Trabajo Cognitivo'
        ];
        cell = {
          id: `p${phase}-0920-${day}`,
          time,
          activity: deepWorkTasks[dIdx],
          domain: 'career',
          module: 'TDAH Módulo B (Inicio de Tareas)',
          rule: 'Regla de 10 min: Producir Versión Mala inicial. Celular fuera del alcance.',
          sourceRef: 'plan_maestro_v3.md#bloque-a',
          microActions: ['Abrir documento exacto', 'Timer Pomodoro 45m', 'Escribir primer párrafo o código']
        };
      } else if (time === '11:40 - 12:00') {
        cell = {
          id: `p${phase}-1140-${day}`,
          time,
          activity: day === 'Domingo' ? 'Descanso' : 'CIERRE BLOQUE A: Escribir Paso de Reentrada',
          domain: 'clinical',
          module: 'TDAH Módulo C (Criterio de Terminado)',
          rule: 'Dejar escrito en nota adhesiva el primer paso exacto para cuando se retome la tarea.',
          sourceRef: 'plan_accion_tdah_ansiedad_social-1.pdf#modulo-c',
          microActions: ['Cerrar archivo', 'Anotar frase de reentrada', 'Levantarse del escritorio']
        };
      } else if (time === '12:00 - 13:30') {
        cell = {
          id: `p${phase}-1200-${day}`,
          time,
          activity: 'ALMUERZO & COCINA: 1h 30m Desconexión Real',
          domain: 'general',
          module: 'Nutrición & Desconexión',
          rule: '1 hora y 30 minutos libres para cocinar, comer en calma y reposar digestivo.',
          sourceRef: 'horarios_matriz_semanal_grid.md#almuerzo',
          microActions: ['Cocinar comida fresca', 'Comer sin pantallas de trabajo', 'Reposo digestivo 20 min']
        };
      } else if (time === '13:30 - 14:00') {
        const germanTopics = [
          'Alemán: 5m Duolingo + 20m Libro A1 Menshen',
          'Alemán: 5m Duolingo + 20m Audios A1 Pronunciación',
          'Alemán: 5m Duolingo + 20m IA Conversacional Práctica',
          'Alemán: 5m Duolingo + 20m Gramática A1 Vocabulario',
          'Alemán: 5m Duolingo + 20m IA Conversacional Diálogo',
          'Alemán: 5m Duolingo + 20m Lectura Corta A1',
          'Alemán: 5m Duolingo + 15m Práctica Libre con IA'
        ];
        cell = {
          id: `p${phase}-1330-${day}`,
          time,
          activity: germanTopics[dIdx],
          domain: 'german',
          module: 'Módulo Aprendizaje de Alemán A1 (Hábito Diario v3)',
          rule: 'Hábito diario 7 días/semana. 5 min Duolingo + 20 min Libros/Audios A1 + IA Conversacional.',
          sourceRef: 'plan_maestro_v3.md#modulo-aleman',
          microActions: ['Completar 1 lección Duolingo (5m)', 'Leer/escuchar capítulo A1 (15m)', 'Practicar 3 oraciones con IA (5m)']
        };
      } else if (time === '14:00 - 14:40') {
        const cbtTasks = [
          phase === 1 ? 'SUSTENTACIÓN (CBT): Pitch 5m Voz Alta' : phase === 2 ? 'EXPOSICIÓN (CBT): Presentación 10m Cámara' : 'ENTREVISTA/ENSAYO: Pitch 3m en Inglés',
          phase === 1 ? 'SUSTENTACIÓN (CBT): Ensayo Metodología' : phase === 2 ? 'EXPOSICIÓN (CBT): 3 Diapos a 1 Persona' : 'ENTREVISTA/ENSAYO: Preguntas Técnicas WebGL',
          phase === 1 ? 'SUSTENTACIÓN (CBT): Ensayo Arq Técnica' : phase === 2 ? 'EXPOSICIÓN (CBT): 3 Preguntas Incómodas' : 'ENTREVISTA/ENSAYO: Negociación Salarial',
          phase === 1 ? 'SUSTENTACIÓN (CBT): Ensayo Resultados' : phase === 2 ? 'EXPOSICIÓN (CBT): Demo Imperfecta 2 personas' : 'ENTREVISTA/ENSAYO: Encaje Cultural',
          phase === 1 ? 'SUSTENTACIÓN (CBT): Simulación 3 Preguntas' : phase === 2 ? 'EXPOSICIÓN (CBT): Ensayo General Sustentación' : 'ENTREVISTA/ENSAYO: Frases Alta Presión',
          'Lectura Informal o Descanso de Exposición',
          'Descanso Total'
        ];
        cell = {
          id: `p${phase}-1400-${day}`,
          time,
          activity: cbtTasks[dIdx],
          domain: 'clinical',
          module: 'Ansiedad Social Módulo E & F (Exposición & Post-evento)',
          rule: 'Ensayar en voz alta. Prohibido disculparse por pausas. Rumiación post-evento limitada a 10 min.',
          sourceRef: 'plan_accion_tdah_ansiedad_social-1.pdf#modulo-e',
          microActions: ['Activar grabador de audio/video', 'Hablar continuo 5-10 min', 'Registrar 5 preguntas de evaluación post-evento']
        };
      } else if (time === '14:45 - 16:45') {
        const blockBTasks = [
          phase === 1 ? 'BLOQUE B: TwinSight Case (Estructura)' : phase === 2 ? 'BLOQUE B: TwinSight Case (Clips GIFs)' : 'BLOQUE B: Cold Outreach LinkedIn Tech Art',
          phase === 1 ? 'BLOQUE B: TwinSight Case (Solución Arq)' : phase === 2 ? 'BLOQUE B: GitHub README TwinSight' : 'BLOQUE B: Seguimiento Respuestas & Apps',
          phase === 1 ? 'BLOQUE B: Guion Demo Walkthrough (90s)' : phase === 2 ? 'BLOQUE B: Perfil LinkedIn SEO Técnico' : 'BLOQUE B: Optimización Respuestas Feedback',
          phase === 1 ? 'BLOQUE B: TwinSight Case (Resultados)' : phase === 2 ? 'BLOQUE B: Cierre Enlaces Paquete Vendible' : 'BLOQUE B: Revisión Repos Proyectos Sec',
          phase === 1 ? 'BLOQUE B: Plan B Sustentación Checklist' : phase === 2 ? 'BLOQUE B: SUSTENTACIÓN OFICIAL (Ensayo)' : 'BLOQUE B: Tracker & Targets Siguiente Sem',
          'Proyectos Personales Libres / Ocio Temprano',
          'Descanso Total'
        ];
        cell = {
          id: `p${phase}-1445-${day}`,
          time,
          activity: blockBTasks[dIdx],
          domain: 'career',
          module: 'Roadmap Laboral Producción',
          rule: 'Avance directo de activos vendibles. 25h de trabajo útil semanal.',
          sourceRef: '14_30_60_90_execution_plan.md',
          microActions: ['Editar assets de proyecto', 'Publicar avances en GitHub/LinkedIn', 'Actualizar tracker']
        };
      } else if (time === '16:45 - 17:15') {
        cell = {
          id: `p${phase}-1645-${day}`,
          time,
          activity: day === 'Viernes' ? 'Auditoría de Horas Útiles Semanales' : day === 'Sábado' ? 'Cierre Semanal y Desconexión' : day === 'Domingo' ? 'Descanso' : 'BLOQUE LIGERO / ADMIN: Tracker & Checklist',
          domain: 'general',
          module: 'TDAH Módulo D (Control de Escapes)',
          rule: 'Revisión ligera sin sobrecarga cognitiva. Registrar horas reales producidas.',
          sourceRef: 'horarios_matriz_semanal_grid.md',
          microActions: ['Marcar tareas completadas en tracker', 'Limpiar escritorio digital']
        };
      } else if (time === '17:15 - 18:30') {
        const pmPhysical = [
          'PM FÍSICO: Elephant Walks + 90/90 + LISS 20m',
          'PM FÍSICO: Caminata Rápida LISS 30m al Aire Libre',
          'PM FÍSICO: Elephant Walks + Movilidad Cadera',
          'PM FÍSICO: Caminata LISS / Bici 30m',
          'PM FÍSICO: Elephant Walks + Movilidad Activa',
          'PM FÍSICO: Caminata Libre LISS 45m',
          'Descanso Total Físico'
        ];
        cell = {
          id: `p${phase}-1715-${day}`,
          time,
          activity: pmPhysical[dIdx],
          domain: 'fitness',
          module: 'PM Movilidad & Cadena Posterior',
          rule: 'Elephant Walks (3x20 reps) + 90/90 switches + David Thurin FS-Hamstring.',
          sourceRef: 'plan_fitness.md#movilidad-pm',
          microActions: ['Elephant Walks 3x20', '90/90 Switches 2 min', 'Caminata LISS 20-30 min']
        };
      } else if (time === '18:30 - 19:00') {
        cell = {
          id: `p${phase}-1830-${day}`,
          time,
          activity: 'Ducha PM & Transición al Ocio',
          domain: 'general',
          module: 'Regulación Emocional',
          rule: 'Ducha caliente, ropa cómoda. Marcar fin del día laboral.',
          sourceRef: 'horarios_matriz_semanal_grid.md',
          microActions: ['Ducha PM', 'Guardar equipo de trabajo', 'Transición a ocio']
        };
      } else if (time === '19:00 - 21:00') {
        cell = {
          id: `p${phase}-1900-${day}`,
          time,
          activity: 'OCIO LIBRE DE CULPA: Cena, Pareja, Videojuegos',
          domain: 'clinical',
          module: 'Regulación Emocional (Ocio Estructurado)',
          rule: 'El ocio es parte de la salud mental, no un premio condicionado al rendimiento del día.',
          sourceRef: 'plan_accion_tdah_ansiedad_social-1.pdf#ocio',
          microActions: ['Cenar en tranquilidad', 'Disfrutar videojuegos o tiempo libre', 'Cero culpa ejecutiva']
        };
      } else {
        // 21:00 - 21:30
        cell = {
          id: `p${phase}-2100-${day}`,
          time,
          activity: day === 'Domingo' ? 'Alistar Bolso Gym Lunes & Dormir 21:30' : 'RUTINA CIERRE: Celular fuera de cama & Audio 21:30',
          domain: 'clinical',
          module: 'Sueño CBT-I & Plan Cannabis',
          rule: 'Celular fuera del alcance. Pantallas apagadas a las 21:00. Audio relajante en cama.',
          sourceRef: 'plan_accion_tdah_ansiedad_social-1.pdf#cbt-i',
          microActions: ['Poner celular a cargar fuera del dormitorio', 'Encender audio de sueño', 'Acostarse a las 21:30']
        };
      }

      grid[time][day] = cell;
    });
  });

  return grid;
}

export const masterScheduleByPhase: Record<number, Record<string, Record<string, GridCell>>> = {
  1: buildGrid(1),
  2: buildGrid(2),
  3: buildGrid(3)
};
