# 🗺️ Hoja de Ruta de Integración: Base de Datos, Progresiones y Programas de Chris Heria / Thenx

Esta hoja de ruta técnica está diseñada para que cualquier otro agente o desarrollador pueda entender, consumir e integrar de forma precisa la base de datos de ejercicios, las progresiones combinadas (*Overcoming Gravity + Chris Heria*), los programas extraídos de Chris Heria y el sistema de rutinas en otra aplicación.

---

## 📂 1. Ubicación de Archivos de Datos Extraídos (JSON)

Toda la información extraída de las aplicaciones de Chris Heria / Thenx ha sido deserializada y almacenada en archivos JSON estructurados en la raíz del proyecto:

| Archivo | Ruta Absoluta | Descripción y Contenido |
| :--- | :--- | :--- |
| **`thenx_technique_guides.json`** | [thenx_technique_guides.json](file:///e:/fitapp/FitApp-Free/thenx_technique_guides.json) | 15 Guías de técnica completas de Chris Heria. Incluye `introVideo`, `requirements` (ejercicios y requerimientos con repeticiones y videos demo), `progressions` (pasos ordenados por nivel con sus videos Vimeo HD) y `masterWorkouts`. |
| **`thenx_programs.json`** | [thenx_programs.json](file:///e:/fitapp/FitApp-Free/thenx_programs.json) | 17 Programas completos multisemanales y semanales extraídos directamente de Thenx/Heria. Contiene semanas (`parts`), días (`workouts`), ejercicios, repeticiones, tiempos de descanso y URLs de video Vimeo MP4 HD. |
| **`thenx_extracted_exercises.json`** | [thenx_extracted_exercises.json](file:///e:/fitapp/FitApp-Free/thenx_extracted_exercises.json) | Catálogo compacto de todos los ejercicios únicos extraídos de Thenx con sus nombres en inglés, imágenes y videos demo directos en Vimeo. |
| **`thenx_all_exercises.json`** | [thenx_all_exercises.json](file:///e:/fitapp/FitApp-Free/thenx_all_exercises.json) | Base de datos extendida con la metadata cruda recibida de la API/APK de Thenx. |

---

## 🏋️ 2. Base de Datos de Ejercicios y Agrupación Muscular

La base de datos principal de ejercicios de la aplicación ha sido enriquecida y reestructurada sin perder ningún punto técnico ni variante.

### Archivos Clave:
- **Base de Datos Principal en TypeScript**: [`exerciseData.ts`](file:///e:/fitapp/FitApp-Free/exerciseData.ts)
- **Base de Datos Enriquecida JSON**: [`enriched_exercise_database.json`](file:///e:/fitapp/FitApp-Free/enriched_exercise_database.json)
- **Reorganización de Grupos**: [`redistributed_groups.json`](file:///e:/fitapp/FitApp-Free/redistributed_groups.json)
- **Mapa Anatómico / Músculos**: [`muscleData.ts`](file:///e:/fitapp/FitApp-Free/muscleData.ts)

### Agrupación y Clasificación de Ejercicios:
Los ejercicios grandes y genéricos se redistribuyeron en grupos específicos para evitar categorías sobrecargadas:
- **`Pull Ups`**: Ejercicios de dominadas en pronación (Straight Bar Pull Up, Wide Pull Up, Commando Pull Up, etc.).
- **`Chin Ups`**: Ejercicios de dominadas en supinación (Classic Chin Up, L-Sit Chin Up, Close Grip Chin Up, etc.).
- **`Dips`**: Fondos de calistenia (Bar Dips, Parallel Bar Dips, Straight Bar Dips, Korean Dips, Ring Dips, Ring Muscle-Up Dips).
- **`Front Lever`**: Variaciones y progresiones de palanca delantera (Tuck Front Lever, Single Leg, Straddle, Full FL, FL Pulls, FL Raises).
- **`Back Lever`**: Variaciones y progresiones de palanca trasera (German Hang, Skin the Cat, Tuck BL, Straddle BL, Full BL).
- **`Planches`**: Progresiones y variaciones de planche (Frog Stand, Planche Lean, Tuck Planche, Straddle Planche, Full Planche, Ring Planche Holds/Taps).
- **`Deltoids Isolation`**: Ejercicios específicos de hombro (Lateral Raises, Dumbbell Front Raises, Rear Delt Cable Flyes, Pike Push-Ups, Handstand Holds).
- **`Calf Training`**: Aislamiento de pantorrillas (Standing Calf Raise, Seated Calf Raise, Single-Leg Calf Raise).
- **`Hangs & Grip Strength`**: Todos los tipos de cuelgues (Passive Hang, Active Hang, One Arm Hang, Dead Hangs).
- **`Core & Abs`**: Trabajo de compresión abdominal y estabilidad de columna (L-Sit, Dragon Flag, Hanging Leg Raise, Hollow Body Hold, Toes to Bar, Cable Crunch).

### Estructura de un Objeto Ejercicio (`ExerciseInfo`):
```typescript
export type ExerciseInfo = {
  image: string;
  category: ExerciseCategory; // 'Calisthenics' | 'Free Weights' | 'Weighted Calisthenics' | etc.
  subcategory?: string;
  muscles: {
    strength: string[];    // Músculos principales de fuerza
    stability: string[];   // Músculos estabilizadores
    mobility: MobilityRequirement[]; // Requerimientos de movilidad
  };
  techniquePoints: string[]; // Puntos clave de técnica específicos
  youtubeLink?: string;       // Enlace principal (YouTube o Vimeo MP4 HD)
  secondaryVideoLink?: string; // Enlace secundario alternativo (Opción 2)
  substitutions?: string[];   // Ejercicios sustitutos equivalentes
};
```

---

## 🤸 3. Arquitectura de Progresiones de Calistenia

Las progresiones combinan el libro *Overcoming Gravity* con las 15 guías de técnica de Chris Heria.

### Archivo Clave:
- **`progressionsData.ts`**: [`progressionsData.ts`](file:///e:/fitapp/FitApp-Free/progressionsData.ts)
- **Componente Visual**: [`CalisthenicsProgressions.tsx`](file:///e:/fitapp/FitApp-Free/components/CalisthenicsProgressions.tsx)

### Estructura de un Grupo de Progresión (`ProgressionGroup`):
```typescript
export type ProgressionGroup = {
  id: string;
  title: string;          // Título limpio (sin frases como "Follow Along")
  introduction: string;   // Introducción teórica y fisiológica de la habilidad
  introVideo?: string;    // URL del video intro de Chris Heria (Vimeo)
  requirements?: {        // Requerimientos previos
    exerciseName: string;
    repeatFormatted?: string;
    exerciseVideoUrl?: string;
  }[];
  masterWorkout?: {       // Rutina Master asociada
    name: string;
    exercises: any[];
  };
  exercises: ProgressionExercise[]; // Lista ordenada por nivel (Level 1, Level 2...)
};
```

### Organización por Fases:
En habilidades complejas (*Full Planche* y *Handstand & HSPU*), los ejercicios contienen una propiedad opcional `phaseName`:
- **Planche**: *Phase 1: Foundational Straight-Arm Conditioning*, *Phase 2: Planche Leans & Foundation*, *Phase 3: Tuck Planche Development*, *Phase 4: Advanced Tuck & Ring Variations*, *Phase 5: Straddle Planche*, *Phase 6: Full Planche Mastery*.
- **Handstand / HSPU**: *Phase 1: Balance & Inversion*, *Phase 2: Vertical Pressing Power*, *Phase 3: Press to Handstand*.

---

## 📅 4. Rutinas, Programas y Master Workouts

El sistema clasifica las rutinas en 3 categorías (`type`):
1. **`'program'`**: Programas multisemanales completos (ej. 8 o 12 semanas).
2. **`'week'`**: Rutinas estructuradas de 1 semana (ej. 7 días seguidos).
3. **`'day'`**: Entrenamientos individuales de 1 día (Master Workouts de Chris Heria o entrenamientos de 1 día).

### Archivos TypeScript Exportados:
- **`thenxPrograms.ts`**: [`thenxPrograms.ts`](file:///e:/fitapp/FitApp-Free/thenxPrograms.ts)
  - Exporta los 17 programas de Thenx/Heria ordenados por tipo (`type: 'program'` o `'week'`) con `category: 'Chris Heria / Thenx'`.
- **`thenxMasterRoutines.ts`**: [`thenxMasterRoutines.ts`](file:///e:/fitapp/FitApp-Free/thenxMasterRoutines.ts)
  - Exporta los 15 Master Workouts de las progresiones como rutinas individuales con `type: 'day'` y `category: 'Chris Heria / Thenx'`.
- **`workoutProgram.ts`**: [`workoutProgram.ts`](file:///e:/fitapp/FitApp-Free/workoutProgram.ts) (Powerbuilding de Jeff Nippard, `category: 'Jeff Nippard'`).
- **`programs/jeffNippardProgram.ts`**: [`jeffNippardProgram.ts`](file:///e:/fitapp/FitApp-Free/programs/jeffNippardProgram.ts) (Bodybuilding Transformation, `category: 'Jeff Nippard'`).
- **`programs/jeffNippardGluteProgram.ts`**: [`jeffNippardGluteProgram.ts`](file:///e:/fitapp/FitApp-Free/programs/jeffNippardGluteProgram.ts) (Glute Hypertrophy, `category: 'Jeff Nippard'`).

### Categorización en Interfaz (`Routine.tsx`):
En [`Routine.tsx`](file:///e:/fitapp/FitApp-Free/components/Routine.tsx#L1900), los programas se agrupan por `category`:
- **Programs**: *Jeff Nippard*, *Chris Heria / Thenx*, *Mis Programas*.
- **Weekly Routines**: *Chris Heria / Thenx*, *Mis Rutinas*.
- **Daily Workouts**: *Chris Heria / Thenx (Master Workouts)*, *Mis Entrenamientos*.

---

## 🎬 5. Arquitectura del Reproductor de Video In-App

El componente de reproductor universal resuelve automáticamente enlaces de YouTube, Vimeo MP4 HD y embeds oficiales de Vimeo.

### Archivo Clave:
- **`YouTubePlayer.tsx`**: [`YouTubePlayer.tsx`](file:///e:/fitapp/FitApp-Free/components/YouTubePlayer.tsx)

### Características para Integrar:
- **Detección automática de Vimeo**: Extrae el ID del video si es de Vimeo (`vimeo.com/...`) y utiliza el iframe oficial `https://player.vimeo.com/video/{ID}` o permite alternar al modo de reproductor MP4 directo.
- **Selector Opción 1 / Opción 2**: Si un ejercicio tiene `youtubeLink` y `secondaryVideoLink`, el reproductor permite alternar dinámicamente entre ambas fuentes.
- **Abrir en Nueva Pestaña**: Incluye el botón discreto para abrir la URL original en una pestaña independiente.

---

## 🐍 6. Scripts de Procesamiento y Extracción (Scratch Scripts)

Todos los scripts utilizados para extraer las APIs de Thenx/Heria y procesar los archivos JSON se encuentran guardados en el directorio de trabajo:

| Script | Ruta Absoluta | Función |
| :--- | :--- | :--- |
| **`extract_thenx_programs_and_technique_guides.py`** | [extract_thenx_programs_and_technique_guides.py](file:///C:/Users/alexw/.gemini/antigravity-ide/brain/00c7d7dd-139e-4c8f-ad90-779e3fe056cb/scratch/extract_thenx_programs_and_technique_guides.py) | Extrae la API REST de Thenx (programas, técnica, ejercicios) utilizando autenticación Bearer Token y exporta los archivos `.json`. |
| **`convert_thenx_programs.py`** | [convert_thenx_programs.py](file:///C:/Users/alexw/.gemini/antigravity-ide/brain/00c7d7dd-139e-4c8f-ad90-779e3fe056cb/scratch/convert_thenx_programs.py) | Parsea `thenx_programs.json` y genera `thenxPrograms.ts` listo para TypeScript. |
| **`generate_master_routines.py`** | [generate_master_routines.py](file:///C:/Users/alexw/.gemini/antigravity-ide/brain/00c7d7dd-139e-4c8f-ad90-779e3fe056cb/scratch/generate_master_routines.py) | Parsea `thenx_technique_guides.json` y genera `thenxMasterRoutines.ts` de tipo `day`. |
| **`blend_progressions_v3.py`** | [blend_progressions_v3.py](file:///C:/Users/alexw/.gemini/antigravity-ide/brain/00c7d7dd-139e-4c8f-ad90-779e3fe056cb/scratch/blend_progressions_v3.py) | Fusiona los 31 ejercicios de *Overcoming Gravity* con todas las progresiones y videos Vimeo HD de Chris Heria en `progressionsData.ts`. |

---

## 📋 7. Guía Paso a Paso para el Agente/Desarrollador de la Otra App

Si vas a migrar o consumir esta estructura en otra aplicación (React, Next.js, React Native, Vue, Flutter, etc.):

1. **Copiar los archivos JSON**: Copia `thenx_technique_guides.json`, `thenx_programs.json` y `enriched_exercise_database.json`.
2. **Copiar los archivos de datos TypeScript**:
   - Copia [`progressionsData.ts`](file:///e:/fitapp/FitApp-Free/progressionsData.ts) para la pantalla de progresiones.
   - Copia [`thenxPrograms.ts`](file:///e:/fitapp/FitApp-Free/thenxPrograms.ts) y [`thenxMasterRoutines.ts`](file:///e:/fitapp/FitApp-Free/thenxMasterRoutines.ts) para el módulo de rutinas/programas.
   - Copia [`exerciseData.ts`](file:///e:/fitapp/FitApp-Free/exerciseData.ts) para el catálogo general de ejercicios.
3. **Respetar los tipos de `WorkoutProgram`**: Asegúrate de incluir la propiedad opcional `type: 'program' | 'week' | 'day'` y `category: string` para que tu UI pueda agrupar por pestañas o categorías (*Jeff Nippard*, *Chris Heria*, etc.).
4. **Implementación de Vimeo/Video**: En el reproductor de video de tu app, asegúrate de soportar URLs que contengan `player.vimeo.com/video/...` usando un `<iframe>` o un reproductor HTML5 `<video>` con URLs directas de Vimeo `.mp4`.
