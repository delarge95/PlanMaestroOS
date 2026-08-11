# Architecture & Integration Guide: Exercise & Muscle Libraries

Este documento proporciona una especificación técnica detallada sobre la **Librería de Ejercicios**, la **Librería de Músculos**, las **Progresiones de Calistenia** y el **Sistema de Resolución de Alias y Navegación Cruzada** del proyecto **FitApp-Free** (`e:\fitapp\FitApp-Free`), optimizado para que puedas copiar la base de datos e integrarla limpiamente en otra aplicación.

---

## 📁 Estructura de Archivos de la Base de Datos

### 1. Archivos de Datos (Data Layer)
* **`e:\fitapp\FitApp-Free\exerciseData.ts`**: Punto central de agregación de la base de datos de ejercicios. Importa y combina los 10 archivos de categorías y exporta `exerciseDatabase` (diccionario clave-valor con la información detallada) y `exerciseGroups` (agrupación por patrones de movimiento).
* **`e:\fitapp\FitApp-Free\data\`**: Directorio con los módulos individuales divididos por categoría:
  * `freeWeights.ts` (~114 KB): Pesas libres (Mancuernas, Barras, Discos, Kettlebells).
  * `calisthenics.ts` (~191 KB): Ejercicios de peso corporal y calistenia avanzada.
  * `weightedCalisthenics.ts` (~12 KB): Calistenia lastrada (Dominadas lastradas, Fondos lastrados).
  * `machines.ts` (~57 KB): Máquinas mecánicas y palancas de gimnasio.
  * `cables.ts` (~54 KB): Poleas y cables.
  * `trx.ts` (~51 KB): Entrenamiento en suspensión TRX.
  * `bandsAndAccessories.ts` (~48 KB): Bandas de resistencia y accesorios prehab.
  * `mobilityWarmupPrehab.ts` (~37 KB): Movilidad, calentamiento y rehabilitación.
  * `olympicAndPower.ts` (~24 KB): Levantamientos olímpicos (Arrancadas, Dos Tiempos) y Powerlifting.
  * `sledAndStrongman.ts` (~19 KB): Arrastre de trineo y eventos Strongman.
* **`e:\fitapp\FitApp-Free\muscleData.ts`** (~43 KB): Base de datos anatómica completa. Exporta `muscleGroupsDatabase` (18 regiones musculares) y `specificMusclesDatabase` (35 músculos específicos con origen, inserción, funciones, estética, precauciones y ejercicios principales).
* **`e:\fitapp\FitApp-Free\progressionsData.ts`** (~49 KB): Árboles de habilidad y progresiones de calistenia basadas en *Overcoming Gravity* de Steven Low (niveles 1 a 10+, prerrequisitos, desbloqueos).

### 2. Componentes UI y Visualización
* **`e:\fitapp\FitApp-Free\components\ExerciseList.tsx`** (~52 KB): Vista principal de la librería con filtrado por categoría, grupo muscular objetivo, ordenamiento (A-Z, Z-A, PR mayor/menor), buscador difuso y cambio de vista (Lista / Agrupada / Progresiones).
* **`e:\fitapp\FitApp-Free\components\MuscleList.tsx`** (~11 KB): Vista anatómica detallada de grupos musculares y músculos específicos con hipervínculos hacia los ejercicios correspondientes.
* **`e:\fitapp\FitApp-Free\components\ClickableMuscleTag.tsx`**: Tag interactivo de músculo para saltar directamente de la vista de un ejercicio al detalle anatómico del músculo.
* **`e:\fitapp\FitApp-Free\components\CalisthenicsProgressions.tsx`**: Renderizador de las cadenas de progresión de calistenia con botones de autodesplazamiento hacia prerrequisitos y desbloqueos.

### 3. Motores de Alias, Búsqueda e Interconexión
* **`e:\fitapp\FitApp-Free\utils\exerciseAliases.ts`**: Módulo de normalización de nombres. Maneja equivalencias de equipos (`DB` ➔ `Dumbbell`, `BB` ➔ `Barbell`, `OHP`, `RDL`), remueve marcas de grupos de superseries (`A1`, `B2`) y detecta protocolos especiales (`21s`, `7-7-7`, `rest-pause`, `drop-set`, `tempo`). Además incluye emparejamiento por similitud Jaccard (`findBestLibraryMatch`).
* **`e:\fitapp\FitApp-Free\utils\exerciseAliasResolution.ts`**: Helper de resolución rápida para mapear cualquier string de ejercicio a su entrada canónica en `exerciseDatabase`.
* **`e:\fitapp\FitApp-Free\utils\muscleHyperlinks.ts`**: Controladores de navegación táctil y accesible entre etiquetas musculares y la pestaña de librería.

---

## 📐 Esquemas de Tipos (TypeScript Interfaces)

Para integrar esta base de datos en tu otra aplicación, debes incluir estas definiciones de tipos (definidas en `types.ts`):

```typescript
// Categorías principales de ejercicios
export type ExerciseCategory = 
  | 'Free Weights' 
  | 'Calisthenics' 
  | 'Weighted Calisthenics' 
  | 'Machines' 
  | 'Bands & Accessories' 
  | 'TRX' 
  | 'Cables' 
  | 'Olympic & Power' 
  | 'Sled & Strongman' 
  | 'Mobility, Warm-up & Prehab';

// Requerimientos de Movilidad
export type MobilityRequirement = {
  muscle: string;
  level: 'Low' | 'Moderate' | 'High';
  description: string;
};

// Estructura de cada Ejercicio en la Base de Datos
export type ExerciseInfo = {
  image: string;
  subcategory?: string;
  muscles: {
    strength: string[];    // Músculos principales de fuerza
    stability: string[];   // Músculos estabilizadores
    mobility: MobilityRequirement[]; // Requisitos de movilidad articular
  };
  techniquePoints: string[]; // Puntos clave de técnica y forma
  category: ExerciseCategory;
  attachments?: string[];    // Agarres/accesorios necesarios (e.g. "V-Bar", "Rope")
  bodyweightVariant?: string; // Enlace a la versión sin peso
  weightedVariant?: string;   // Enlace a la versión con lastre
  youtubeLink?: string;       // Enlace al video explicativo/demostración
  substitutions?: string[];   // Nombres de ejercicios alternativos recomendados
};

// Categorías Anatómicas Principales
export type MuscleGroupCategory = 'Legs' | 'Chest' | 'Back' | 'Shoulders' | 'Arms' | 'Core' | 'Thorax';

// Grupo Muscular Macro
export type MuscleGroupInfo = {
  name: string;        // e.g., "Pectoral Region"
  overview: string;    // Descripción anatómica general
  category: MuscleGroupCategory; // e.g., "Chest"
  specificMuscles: string[];    // Claves de specificMusclesDatabase (e.g., ["Pectoralis Major", "Pectoralis Minor"])
};

// Músculo Específico
export type SpecificMuscle = {
  name: string;
  group: MuscleGroupCategory;
  origin: string;              // Origen anatómico
  insertion: string;           // Inserción anatómica
  functions: string[];         // Acciones biomecánicas
  biomechanicalRole: string;   // Rol funcional durante el ejercicio
  mainExercises: string[];     // Ejercicios principales recomendados
  aesthetics: string;          // Impacto estético en el físico
  precautions: string;         // Precauciones, riesgos y prevención de lesiones
};

// Progresión de Calistenia
export type ProgressionExercise = {
  name: string;
  level: number;               // Nivel de dificultad (1 a 10+)
  prerequisites: string | null; // Nombre del ejercicio previo requerido
  unlocks: string;             // Nombre del siguiente ejercicio que desbloquea
  technique: string[];
  primaryMuscles: string[];
  stabilizers: string[];
  mobility: string[];
  weightedVariation: string | null;
  precautions: string[];
  purpose: string;             // Objetivo funcional de la habilidad
};

export type ProgressionGroup = {
  id: string;
  title: string;
  introduction: string;
  exercises: ProgressionExercise[];
};
```

---

## 🔍 Motor de Alias y Normalización (`exerciseAliases.ts`)

Cuando el usuario busca o ingresa un ejercicio en la app (ej: `"A1 DB Incline Bench Press"` o `"21s Barbell Curls"`), el sistema lo normaliza usando la función:

```typescript
normalizeExerciseName(input: string): NormalizedExercise
```

### Proceso de Normalización:
1. **Extracción de Marcadores de Superserie**: Detecta prefijos como `A1:`, `B2.`, `[C1]` y extrae la información del grupo.
2. **Reconocimiento de Protocolos**: Detecta notas como `21s`, `7-7-7`, `rest-pause`, `drop-set`, `tempo` y las separa de la búsqueda.
3. **Mapeo de Abreviaturas (`TERM_ALIASES`)**:
   - `db` / `dbs` ➔ `Dumbbell`
   - `bb` / `bar` ➔ `Barbell`
   - `ohp` ➔ `Barbell Overhead Press (OHP) / Military Press`
   - `rdl` ➔ `RDL`
   - `bs` ➔ `Back Squat`
   - `fs` ➔ `Front Squat`
4. **Coincidencia Difusa por Similitud Jaccard (`findBestLibraryMatch`)**:
   Compara los conjuntos de palabras del string ingresado contra todas las claves de `exerciseDatabase` ignorando el orden de las palabras, lo que permite machear `"Incline DB Press"` con `"Dumbbell Incline Press"`.

---

## 🔗 Sistema de Navegación Cruzada entre Ejercicios y Músculos

La app conecta bidireccionalmente los ejercicios con la anatomía muscular:

1. **De Ejercicio ➔ Músculo**:
   El componente `<ClickableMuscleTag />` llama a `createMuscleTapHandler(muscleTarget, navigateTo)`. Esto cambia la pestaña a `Muscles`, expande el acordeón del grupo correspondiente (`Gluteal Region`) y desplaza suavemente la pantalla (`scrollIntoView`) hacia el músculo específico (`Gluteus Maximus`).
2. **De Músculo ➔ Ejercicio**:
   En `MuscleList.tsx`, cada músculo lista sus `mainExercises`. Al presionar cualquier botón de ejercicio, la función `handleExerciseClick(exName)` navega hacia la librería de ejercicios, abre el grupo del patrón de movimiento correspondiente (vía `exerciseGroups`) y selecciona el ejercicio objetivo.

---

## 🚀 Pasos para Exportar e Integrar en tu Otra App

1. **Copiar las Bases de Datos**:
   Copia el directorio `data/` y los archivos `exerciseData.ts`, `muscleData.ts`, `progressionsData.ts` y `types.ts` a tu nuevo proyecto.
2. **Copiar el Motor de Alias**:
   Copia `utils/exerciseAliases.ts` y `utils/exerciseAliasResolution.ts` para mantener la búsqueda inteligente y resolución de abreviaturas sin fallos de mapeo.
3. **Importar y Consumir**:
   ```typescript
   import { exerciseDatabase, exerciseGroups } from './exerciseData';
   import { muscleGroupsDatabase, specificMusclesDatabase } from './muscleData';
   import { calisthenicsProgressions } from './progressionsData';
   import { normalizeExerciseName, findBestLibraryMatch } from './utils/exerciseAliases';

   // Ejemplo de búsqueda canónica:
   const searchInput = "db bench press";
   const normalized = normalizeExerciseName(searchInput);
   const match = findBestLibraryMatch(normalized.canonical, Object.keys(exerciseDatabase));

   if (match) {
     const exerciseInfo = exerciseDatabase[match.match];
     console.log("Ejercicio encontrado:", match.match, exerciseInfo);
   }
   ```
