# Full-Body Flexibility (2ª ed.) — Extracción Completa de Métodos y Rutinas

> **sourceId:** `blahnik-full-body-flexibility-2ed`
> **Título:** Full-Body Flexibility (2ª edición, Jay Blahnik)
> **Editorial:** Human Kinetics, 2011 · 272 páginas
> **PDF:** `D:\Downloads\Libros\Blahnik-FullBodyFlexibility_2ed.pdf`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Full-Body Flexibility
- **Edición y Año:** 2ª edición (2011 / Human Kinetics)
- **Disciplina:** Flexibilidad funcional / Movilidad articular / Rutinas deportivas y posturales
- **Población objetivo:** Población general, atletas, fisioterapeutas, instructores de yoga/pilates y programadores de rutinas de movilidad
- **Alcance de esta sección:**
  - Los 3 tipos de estiramiento y su progresión de 3 pasos (**Three-Step Flexibility System: Dinámico $\to$ Activo/Estático $\to$ Pasivo asistido**) (pp. 1–20).
  - Escala de Intensidad del Estiramiento (RPE 1–10: zona óptima de elongación 6–8, zona de reflejo miotático/dolor 9–10) (pp. 8–12).
  - Repertorio regional de estiramientos por cadenas cinemáticas:
    - Cuello, hombros, brazos y manos (pp. 21–60).
    - Pecho, espalda y pared abdominal/core (pp. 61–90).
    - Glúteos y complejo pélvico-cadera (pp. 91–116).
    - Cuádriceps e isquiotibiales (pp. 117–138).
    - Pantorrillas, tibiales anteriores y pies (pp. 139–160).
    - Combinaciones globales total-body (pp. 161–186).
  - Rutinas específicas por deporte y programas generales de estilo de vida (Express, Completa, Postura de escritorio, Mañana/Noche) (pp. 187–264).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export type StretchModality = 'dynamic' | 'static-active' | 'static-passive';

export interface BlahnikStretchExerciseContract {
  exerciseId: string;
  name: string;
  targetRegion: ('neck' | 'shoulders' | 'arms' | 'hands' | 'chest' | 'back' | 'abdominals' | 'glutes' | 'hamstrings' | 'quadriceps' | 'calves' | 'feet')[];
  modality: StretchModality;
  recommendedHoldDurationSeconds: number; // 15 a 30 s estatico; 8 a 12 repeticiones dinamico
  stretchIntensityZoneTarget: [6, 8]; // RPE 6 a 8 sobre 10
  breathCue: 'inhale-lengthen-exhale-deepen';
}

export interface BlahnikRoutineContract {
  routineName: string;
  durationMinutes: [5, 30];
  format: 'express-standing-5min' | 'condensed-15min' | 'complete-total-body-30min' | 'desk-worker-postural';
  exerciseIdsInOrder: string[];
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `three-step-flexibility-system-progression`
- **id:** `three-step-flexibility-system-progression` | **tipo:** metodología de flexibilidad
- **descripción:** Jay Blahnik estructura la sesión de flexibilidad en una progresión fisiológica de 3 pasos continuos:
  1. **Paso 1 — Movilidad Dinámica (Calentamiento articular):** Movimientos controlados de rango progresivo (8–12 repeticiones) para aumentar el flujo sanguíneo, la temperatura del tejido conectivo y lubricar la articulación con líquido sinovial.
  2. **Paso 2 — Estiramiento Activo / Estático (Neuromuscular):** Mantener la posición utilizando la contracción del músculo antagonista sin asistencia externa (15–20 s) para inducir inhibición recíproca.
  3. **Paso 3 — Estiramiento Pasivo Asistido (Elongación plástica):** Uso de la gravedad, correas, pared o fitball para profundizar en el ROM (20–30 s a intensidad RPE 6–8) cuando el tejido ya está acondicionado.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 1, pp. 4–8; Cap. 2, pp. 13–18.

### Regla: `stretch-intensity-zone-rpe-scale`
- **id:** `stretch-intensity-zone-rpe-scale` | **tipo:** dosificación de intensidad / seguridad
- **descripción:** La intensidad del estiramiento se gradúa en una escala de 1 a 10:
  - **1 a 3 (Zona Sub-umbral):** Sin sensación de tensión; no produce ganancia de flexibilidad.
  - **4 a 5 (Zona Ligera):** Tensión muy suave, ideal para movilidad articular matutina o recuperación activa.
  - **6 a 8 (Zona Óptima de Elongación / "Comfortable Tension"):** Sensación de tensión firme pero relajada y respirable. Aquí ocurre la relajación viscoelástica del colágeno sin disparar el reflejo miotático defensivo.
  - **9 a 10 (Zona de Dolor / Alarma Miotática):** Tensión dolorosa, contracción muscular refleja involuntaria y riesgo inminente de microdesgarro fibrilar o tendinoso. **Estrictamente desaconsejada.**
- **confianza:** `explicit`
- **capítulo/página:** Cap. 1, pp. 8–11.

---

## 4) Protocolos de Rutinas Clave de Blahnik

1. **Rutina Express Total-Body De Pie (5 Minutos / 8 Ejercicios, p. 210):**
   - Head Tilt & Neck Roll (30 s) $\to$ Standing Side Reach (30 s/lado) $\to$ Standing Chest Opener (30 s) $\to$ Standing Cat-Cow / Upper Back Stretch (30 s) $\to$ Standing Quad Pull (30 s/lado) $\to$ Standing Hamstring Hinge (30 s/lado) $\to$ Standing Calf Press (30 s/lado) $\to$ Total-Body Reach (30 s).
2. **Rutina Postural para Oficinistas y Sedentarios ("Desk Worker Routine", p. 232):**
   - Diseñada para contrarrestar el patrón cruzado superior e inferior: énfasis en apertura de pectorales, flexores de cadera (psoas), extensores de cuello y activación de glúteos/dorsal medio.

---

## 5) Integración en Plan Maestro OS

1. **Módulo de Flexibilidad y Movilidad (`src/data/skills/`):**
   - Incorporar el sistema de 3 pasos de Blahnik para ordenar automáticamente los ejercicios de movilidad pre-entreno (dinámicos) y post-entreno (estáticos/pasivos).
2. **Prescriptor de Sesiones Express:**
   - Añadir las rutinas de 5 y 15 minutos de Blahnik como micropausas activas de movilidad en la app.
