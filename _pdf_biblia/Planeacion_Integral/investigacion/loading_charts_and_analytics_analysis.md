# Technical Architecture & Analysis: Loading Charts, Graphs, Routine History & Dynamic Tables

Este documento proporciona una guía técnica completa sobre la arquitectura, funcionamiento, ubicación de archivos y funciones que controlan el sistema de **Loading Charts**, **Graficadoras (Graphs & Analytics)**, **Historial de Rutinas (Routine History)** y **Tablas Dinámicas** en la aplicación **FitApp-Free** (`e:\fitapp\FitApp-Free`).

---

## 📁 Archivos y Scripts Clave (Ubicación Completa)

### 1. Vistas y Componentes Principales
* **`e:\fitapp\FitApp-Free\App.tsx`**: Enrutador principal de la app, control de navegación entre vistas (`loadingCharts`, `library`, `routine`) mediante `React.lazy` y `SectionSlider`.
* **`e:\fitapp\FitApp-Free\components\LoadingCharts.tsx`**: Componente contenedor de las gráficas de carga y tablas dinámicas. Gestiona el modo *Universal* (matriz de discos por barra) y *Guide by Exercise* (porcentajes de 1RM), además de asociar notas a pesos específicos.
* **`e:\fitapp\FitApp-Free\components\AnalyticsChart.tsx`**: Motor gráfico interactivo basado en SVG puro. Renderiza gráficos de barras y líneas con métricas (Volumen, e1RM, Max Weight, Sets, Reps), gestos táctiles, zoom, pan, ventana deslizante (viewport), pantalla completa y filtros.
* **`e:\fitapp\FitApp-Free\components\ExerciseGuide.tsx`**: Guía paso a paso por ejercicio para calcular barras y cargas necesarias basadas en porcentajes de PR y 1RM estimado.
* **`e:\fitapp\FitApp-Free\components\UniversalTable.tsx`**: Tabla dinámicamente calculada para combinaciones de discos de cualquier barra.
* **`e:\fitapp\FitApp-Free\components\History.tsx`**: Vista modal e incrustada del historial cronológico de rutinas completadas.
* **`e:\fitapp\FitApp-Free\components\Routine.tsx`**: Pantalla principal de entrenamiento y ejecuciones de rutinas, registro de series/pesos en tiempo real, reemplazos de ejercicios y panel de analítica del programa.
* **`e:\fitapp\FitApp-Free\components\ResponsiveAnalyticsPanel.tsx`**: Panel adaptativo de resumen de métricas clave (sesiones totales, peso total, promedio de series por sesión, progreso % vs sesión previa).
* **`e:\fitapp\FitApp-Free\components\WeightConfig.tsx`**: Configuración de equipos (pesos de barras y catálogo de discos en KG o LBS).

### 2. Estado Global y Utilidades
* **`e:\fitapp\FitApp-Free\types.ts`**: Definición central de interfaces TypeScript (`UserData`, `WorkoutLog`, `ExerciseLog`, `SetLog`, `Bar`, `Plate`, `CustomNote`, `ReplacementHistoryEntry`, `FlatLogEntry`, `ChartDataPoint`, `Metric`, etc.).
* **`e:\fitapp\FitApp-Free\contexts\AppContext.tsx`**: Proveedor del estado global de la app, persistencia en `localStorage`, vista activa y contexto del ejercicio.
* **`e:\fitapp\FitApp-Free\utils.ts`**: Funciones matemáticas centrales (fórmula Brzycki de e1RM, cálculo de PR efectivo, mapeo muscular, limpieza de nombres).
* **`e:\fitapp\FitApp-Free\utils\workoutLogUtils.ts`**: Helpers para manipulación de logs de rutinas, sustituciones de ejercicios e historial de reemplazos.
* **`e:\fitapp\FitApp-Free\utils\exerciseAliasResolution.ts`**: Mapeo y resolución de nombres de ejercicios alias para mantener consistencia.
* **`e:\fitapp\FitApp-Free\hooks\useLocalStorage.ts`**: Custom hook para persistir estado local sincronizado.
* **`e:\fitapp\FitApp-Free\hooks\useSectionCleanup.ts`**: Hook para limpiar estados efímeros al cambiar de pestaña.

---

## 🛠️ Detalle de Funciones por Componente

### 1. Secciones de Loading Charts & Tablas Dinámicas (`LoadingCharts.tsx`, `UniversalTable.tsx`, `ExerciseGuide.tsx`)

| Función / Variable | Archivo de Origen | Descripción |
| :--- | :--- | :--- |
| `getWeightInKg(weight, unit)` | `LoadingCharts.tsx`, `utils.ts` | Convierte un peso dado en `lbs` a `kg` utilizando la constante `LBS_TO_KG`. |
| `getWeightInUnit(weightKg, unit)` | `LoadingCharts.tsx`, `ExerciseGuide.tsx` | Convierte un peso expresado en `kg` a la unidad objetivo (`kg` o `lbs`). |
| `findPlateCombination(weightPerSide, availablePlates)` | `LoadingCharts.tsx`, `UniversalTable.tsx`, `ExerciseGuide.tsx` | Algoritmo voraz (*greedy algorithm*) que calcula la combinación óptima de discos por lado para alcanzar un peso objetivo. |
| `notesData` (useMemo) | `LoadingCharts.tsx`, `UniversalTable.tsx` | Construye el mapa de notas asociadas a cada barra y peso redondeado (hitos de BW, marcas fijas como 100kg/140kg, notas personalizadas y notas de PRs/porcentajes). |
| `tableRows` (useMemo) | `LoadingCharts.tsx`, `UniversalTable.tsx` | Genera dinámicamente las filas de la tabla de carga desde 5 hasta 600 lbs (o 2.5 a 250 kg), calculando peso por lado, peso total y notas activas. |
| `universalChartFlatLog` (useMemo) | `LoadingCharts.tsx` | Transforma el objeto anidado `workoutLog` (`Week -> Day -> Exercise -> Sets`) a un arreglo plano `FlatLogEntry[]` optimizado para la analítica. |
| `getEffectivePrInKg(exerciseName, userData, flatLog)` | `utils.ts` | Obtiene el PR efectivo en KG comparando el PR manual ingresado y el mayor e1RM registrado en los logs históricos. |

---

### 2. Motor de Gráficas y Analítica (`AnalyticsChart.tsx`, `ResponsiveAnalyticsPanel.tsx`)

| Función / Variable | Archivo de Origen | Descripción |
| :--- | :--- | :--- |
| `calculateE1RM(weight, reps)` | `utils.ts` | Calcula el 1RM estimado usando la fórmula de Brzycki: `weight / (1.0278 - 0.0278 * reps)`. |
| `SVGChart` (Componente React.memo) | `AnalyticsChart.tsx` | Renderiza de manera nativa los ejes X e Y, líneas de guía, barras (`rect`) o líneas de tendencia (`path`), etiquetas giradas y tooltips. |
| `useTouchGestures` | `hooks/useTouchGestures.ts` | Captura eventos multitáctiles en móviles (gestos de pinza para zoom in/out y desplazamiento para pan). |
| `clampViewport(vp, total)` | `AnalyticsChart.tsx` | Limita el rango visible de la ventana gráfica durante acciones de zoom y pan para evitar desbordamientos. |
| `exerciseWorksMuscles(exerciseName, targetMuscles)` | `AnalyticsChart.tsx` | Filtra ejercicios que estimulan grupos musculares primarios o secundarios apoyándose en `exerciseDatabase`. |
| `mergedState` / `corrections` (useMemo) | `AnalyticsChart.tsx` | Valida y sanitiza el estado del gráfico (métrica, filtro, granularidad, presets de fechas). |
| `METRIC_INSIGHTS` | `AnalyticsChart.tsx` | Diccionario con recomendaciones fisiológicas y progresiones científicas según la métrica seleccionada. |

---

### 3. Historial de Rutinas y Log de Entrenamiento (`History.tsx`, `Routine.tsx`, `workoutLogUtils.ts`)

| Función / Variable | Archivo de Origen | Descripción |
| :--- | :--- | :--- |
| `History` (Componente React.FC) | `History.tsx` | Despliega acordeones jerárquicos ordenados por Semana -> Día -> Ejercicio -> Series completadas. |
| `applyReplacement(prev, weekId, dayId, exerciseId, originalName, replacementName, opts)` | `workoutLogUtils.ts` | Registra el reemplazo de un ejercicio por una alternativa en el `workoutLog` y añade una entrada al `replacementsHistory`. |
| `revertReplacement(prev, weekId, dayId, exerciseId, opts)` | `workoutLogUtils.ts` | Revierte la sustitución de un ejercicio a su versión original en la rutina y añade el evento de reversión. |
| `getReplacementStats(history)` | `workoutLogUtils.ts` | Retorna estadísticas consolidadas sobre el uso de sustitutos (total aplicados, revertidos y desglose por ejercicio). |
| `estimateWeightForRPE(prInKg, targetRepsStr, targetRpeStr, displayUnit)` | `Routine.tsx` | Estima la carga sugerida para una serie en función del PR y el RPE objetivo. |
| `estimateAccessoryWeight(progEx, setGroup, user)` | `Routine.tsx` | Infiere pesos iniciales recomendados para ejercicios accesorios usando proporciones relativas a los levantamientos principales (Sentadilla, Press Banco, Peso Muerto). |

---

## 📊 Estructura del Objeto de Datos (`UserData` & `WorkoutLog`)

Para integrar este módulo en otra aplicación, el objeto principal de datos debe respetar la siguiente estructura en TypeScript:

```typescript
export type SetLog = {
  weight: number | null;
  reps: number | null;
  timestamp?: string; // ISO 8601
};

export type ExerciseLog = {
  [setKey: string]: SetLog | string | undefined;
  chosenExercise?: string; // Si fue reemplazado
};

export type DayLog = {
  [exerciseId: string]: ExerciseLog;
};

export type WorkoutLog = {
  [weekId: string]: {
    [dayId: string]: DayLog;
  };
};

export type UserData = {
  bodyWeight: number;
  bwUnit: 'kg' | 'lbs';
  bars: Bar[];
  exercises: Exercise[];
  plates: Plate[];
  customNotes: CustomNote[];
  workoutLog: WorkoutLog;
  replacementsHistory?: ReplacementHistoryEntry[];
  userPrograms: WorkoutProgram[];
  programState: ProgramState;
};
```

---

## 🔄 Flujo de Trabajo e Integración Recomendado

1. **Gestión de Cargas (`LoadingCharts.tsx`)**:
   - Para replicar la tabla dinámica de discos, importa `findPlateCombination` y la lista de barras/discos del usuario (`userData.bars`, `userData.plates`).
   - `notesData` se encarga de agrupar automáticamente las marcas de peso (PRs, % de PRs, peso corporal y notas personalizadas).
2. **Visualización Gráfica (`AnalyticsChart.tsx`)**:
   - No requiere librerías externas de gráficos (como Chart.js o Recharts); utiliza SVG nativo optimizado para móviles y escritorio.
   - Requiere pasar `flatLog` (que se obtiene convirtiendo el `workoutLog` anidado con la lógica en `LoadingCharts.tsx` o `AppContent`).
3. **Historial de Rutinas (`History.tsx`)**:
   - Es un componente ligero que consume la información del programa activo y `userData.workoutLog` para presentar el resumen ordenado de entrenamientos previos.
