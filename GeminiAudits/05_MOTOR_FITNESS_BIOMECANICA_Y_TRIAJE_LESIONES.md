# 05 — Motor de Fitness, Biomecánica y Triaje de Lesiones (Prioridad 2)

> **Documento:** `GeminiAudits/05_MOTOR_FITNESS_BIOMECANICA_Y_TRIAJE_LESIONES.md`  
> **Objetivo:** Arquitectura del generador científico multi-objetivo (fuerza, hipertrofia, calistenia, gimnasia, cardio, MMA, danza, movilidad), modelo anatómico 3D de 5 capas, triaje algorítmico de lesiones y hoja de ruta de sensores/wearables.

---

## 1. La Visión del Motor Físico Integral

El usuario ha definido uno de los objetivos más ambiciosos y completos posibles en ciencias del deporte: **unificar en un solo motor determinista la fuerza máxima, la hipertrofia, la calistenia avanzada, el acondicionamiento para combate (MMA), la movilidad artística (danza/gimnasia), el cardio cardiovascular y la preservación articular/tendinosa**.

### 1.1 El Reto Científico: La Paradoja de la Interferencia Concurrente
Entrenar múltiples cualidades atléticas a la vez suele provocar el **efecto de interferencia** (inhibición de la vía de síntesis proteica `mTOR` por la activación prolongada de la proteína quinasa `AMPK` del cardio excesivo, o fatiga acumulada del sistema nervioso central).

El sistema de Plan Maestro OS resuelve esto implementando **Periodización Concurrente por Bloques y Ondulación Diaria (DUP)** respaldada por la literatura científica disponible en `biblioteca/`:
*   **Hipertrofia y Fuerza:** Modelos de Haff & Triplett (NSCA), Jeff Nippard (*The Muscle Ladder*) y Mike Israetel (*Scientific Principles of Hypertrophy*).
*   **Habilidades de Calistenia y Gimnasia:** Progresiones de Steven Low (*Overcoming Gravity 2nd Edition*) y guías técnicas THENX.
*   **Cardio y Resistencia:** Sistema VDOT y zonas aeróbicas de Jack Daniels (*Daniels' Running Formula 4th Ed*) y Bangsbo.
*   **Combate y Artes Marciales:** Periodización de potencia y resistencia láctica de Christoph Delp (Muay Thai), Stuart Tomlinson y Kostikiadis (MMA S&C).
*   **Movilidad y Danza:** Kinesiología y flexibilidad activa de Karen Clippinger (*Dance Anatomy and Kinesiology*) y Jay Blahnik (*Full-Body Flexibility*).
*   **Preservación y Rehabilitación de Tejidos:** Steven Low (*Overcoming Tendonitis*), Aaron Horschig (*Rebuilding Milo*) y Pamela Levangie (*Joint Structure and Function*).

---

## 2. El Modelo Anatómico de 5 Capas (`anatomyGraph.ts`)

Para localizar lesiones y adaptar rutinas con precisión milimétrica, el sistema descompone el cuerpo humano en 5 capas biológicas interconectadas en el grafo:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CAPA 1: HUESO Y ESQUELETO                       │
│  - 206 huesos indexados en `src/data/fitness/anatomy/bones.ts`         │
│  - Puntos de anclaje de inserción y origen anatómico                   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   CAPA 2: ARTICULACIONES Y LIGAMENTOS                  │
│  - Grados de libertad y Rangos de Movimiento (ROM) en `jointRom.ts`    │
│  - Ligamentos estabilizadores pasivos (evitan traslación patológica)  │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                    CAPA 3: BURSAS (AMORTIGUACIÓN)                      │
│  - Bolsas sinoviales periarticulares (subacromial, trocantérea, etc.) │
│  - Reducen fricción entre tendón y prominencia ósea                    │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                  CAPA 4: MÚSCULOS Y UNIDADES TENDINOSAS                │
│  - Músculos motores primarios, antagonistas y fijadores                │
│  - Tendones: unión músculo-hueso y almacenamiento elástico de energía  │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                CAPA 5: INERVACIÓN Y SISTEMA NEUROLÓGICO                │
│  - Plexos braquial y lumbosacro, nervios periféricos (radial, ciático) │
│  - Vía sensitiva (dolor neuropático) y vía motora (control neuromuscular)
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Algoritmo de Triaje y Diagnóstico Diferencial de Lesiones

Cuando el usuario experimenta dolor o molestias, la aplicación no adivina ni realiza un diagnóstico médico formal (prohibido por el principio §0.3). En su lugar, ejecuta un **árbol de decisión determinista basado en síntomas funcionales** para clasificar el tejido lesionado y derivar la acción de entrenamiento:

```
                               ¿INICIO DEL DOLOR?
                                       │
                     ┌─────────────────┴─────────────────┐
                     ▼                                   ▼
           TRAUMÁTICO / SÚBITO                  GRADUAL / INSIDIOSO
        (Chasquido, torsión, golpe)            (Aumenta con el volumen)
                     │                                   │
         ┌───────────┴───────────┐           ┌───────────┴───────────┐
         ▼                       ▼           ▼                       ▼
   ¿Inestabilidad /        ¿Hematoma /  ¿Dolor matutino    ¿Hinchazón focal
   sensación de que      desgarro muscular  mejora con calor  como "globo de
   la articulación "baila"?    localizado?  y empeora post?   agua" sin inest.?
         │                       │           │                       │
         ▼                       ▼           ▼                       ▼
   SOSPECHA DE             SOSPECHA DE  SOSPECHA DE        SOSPECHA DE
    LIGAMENTO                MÚSCULO      TENDÓN             BURSA
 (Esguince Grado I-III)    (Distensión)  (Tendinopatía/HSR) (Bursitis friccional)
         │                       │           │                       │
         └───────────┬───────────┴───────────┴───────────────────────┘
                     ▼
         ¿DOLOR TIPO "CORRIENTE ELÉCTRICA",
         HORMIGUEO O QUEMAZÓN CON IRRADIACIÓN?
                     │
                     ├────────► SÍ: SOSPECHA DE NERVIO / ATRAPAMIENTO
                     │          (Parestesia / radiculopatía / neurodinámica)
                     │
                     └────────► NO: TEJIDO CONECTIVO / MECÁNICO
```

### 3.1 Criterios Diferenciales del Motor:
1. **Tendón (Tendinopatía / Enfriamiento):**
   *   *Signo patognomónico:* Dolor sordo que disminuye después del calentamiento y reaparece intensamente horas después de la sesión o a la mañana siguiente.
   *   *Intervención:* Steven Low (*Overcoming Tendonitis*): **Prohibido el estiramiento agresivo** (aumenta las fuerzas compresivas en la inserción). Prescribir **Carga Lenta y Pesada (Heavy Slow Resistance - HSR)** o isométricos analgésicos a 70% MVC (30-45s) para inducir remodelación de colágeno sin estrés de cizallamiento.
2. **Ligamento (Esguince / Inestabilidad):**
   *   *Signo patognomónico:* Inicio agudo, chasquido (*pop*), sensación de fallo articular.
   *   *Intervención:* Inmovilización relativa, exclusión total de movimientos en el plano de la inestabilidad (e.g., plano frontal en ligamentos colaterales de rodilla).
3. **Bursa (Bursitis por Fricción / Pinzamiento):**
   *   *Signo patognomónico:* Hinchazón superficial visible, fluctuación líquida, dolor exquisito a la palpación directa en prominencia ósea, dolor en reposo.
   *   *Intervención:* Descompresión mecánica. Reducción inmediata de ángulos articulares que comprimen la bursa (e.g., abducción > 90° en bursitis subacromial).
4. **Nervio (Neuropatía / Irritación de Raíz):**
   *   *Signo patognomónico:* Parestesia, adormecimiento, sensación de descarga eléctrica que sigue el trayecto de un dermatoma (e.g. desde el cuello por el brazo hasta los dedos índice/pulgar = raíz C6 / nervio radial).
   *   *Intervención:* Exclusión de ejercicios de tracción con hiperextensión cervical; prescripción de movilizaciones neurodinámicas (*nerve flossing/gliding*) suaves sin tensión sostenida.

---

## 4. Adaptación Automática de la Rutina Diaria

Una vez que el usuario marca una zona en el visor 3D o completa el triaje de síntomas:

1. **Generación de Lista Negra Temporal (`ExcludedExercises`):**
   - El motor consulta el `anatomyGraph.ts`.
   - Si la estructura afectada es el `supraspinatus-tendon`, se vetan automáticamente ejercicios con elevación lateral con rotación interna forzada, dips profundos y lanzamientos balísticos.
2. **Selección de Reemplazos Válidos:**
   - La base de datos de ejercicios (`exerciseDatabase` en `src/data/exercises/exerciseData.ts`) contiene un campo `substituteOptions` validado.
   - El sistema busca un ejercicio que comparta el mismo patrón motor (e.g. Empuje Horizontal) pero reduzca la carga sobre la articulación irritada (e.g. cambiar Press de Banca con barra por Press con mancuernas en agarre neutro en el suelo - *Floor Press*).
3. **Inyección de Bloques de Prehab / Rehab:**
   - La rutina del día en `TodayRoutineStack.tsx` añade automáticamente una tarjeta de prehabilitación específica (e.g., rotaciones externas con banda elástica a 30° de abducción o trabajo de serrato anterior con *push-up plus*).

---

## 5. El Generador Multi-Objetivo Científico

El generador de rutinas toma como entrada la configuración de objetivos del usuario:
*   **Objetivos Primarios:** Hipertrofia (torso/brazos) + Fuerza en Calistenia (Planche / Handstand Push-up).
*   **Objetivos Secundarios:** Movilidad de cadera (Danza/Gimnasia) + Capacidad aeróbica (Cardio Zona 2) + Potencia de golpeo (MMA).

### 5.1 La Matriz Semanal de Distribución de Carga (Split Científico)

```typescript
// Ejemplo de arquitectura de microciclo de 7 días calculado por el motor:
export const SCIENTIFIC_MULTI_OBJECTIVE_SPLIT = {
  monday: {
    focus: 'Calisthenics Skill (Planche) + Upper Body Hypertrophy (Push)',
    structure: [
      { tier: 'Skill / Neuromuscular', exercise: 'Planche Leans / Tuck Holds', rpe: 7, rest: '3-4 min' },
      { tier: 'Relative Strength', exercise: 'Handstand Push-ups eccentrics', rpe: 8, rest: '3 min' },
      { tier: 'Hypertrophy Acc.', exercise: 'Incline DB Press + Lateral Raises', sets: 4, rpe: 8.5, rest: '90s' },
      { tier: 'Tendon Prehab', exercise: 'Biceps Curl neutro (HSR) + Wrist extensions', sets: 3, rest: '60s' }
    ]
  },
  tuesday: {
    focus: 'Lower Body Strength & Hypertrophy + Hip Mobility (Dance/Gymnastics)',
    structure: [
      { tier: 'Compound Strength', exercise: 'Front Squat (Horschig cues)', rpe: 8, rest: '3 min' },
      { tier: 'Hamstring / Glute', exercise: 'Romanian Deadlift (Nippard technique)', rpe: 8, rest: '2 min' },
      { tier: 'Active Mobility', exercise: 'Loaded Middle Split PNF (Blahnik/Clippinger)', sets: 4, hold: '30s' }
    ]
  },
  wednesday: {
    focus: 'Cardio Base Aeróbica (Daniels Zona 2) + Core Anti-Rotación',
    structure: [
      { tier: 'Aerobic Base', exercise: 'Running o Ciclismo (65-75% FC Max)', duration: '45 min' },
      { tier: 'MMA Core', exercise: 'Pallof Press + Rotational Med Ball Slams', sets: 3 }
    ]
  },
  thursday: {
    focus: 'Calisthenics Skill (Front Lever) + Upper Body Hypertrophy (Pull)',
    structure: [
      { tier: 'Skill / Neuromuscular', exercise: 'Front Lever Progressions (Low OG2)', rpe: 7, rest: '3-4 min' },
      { tier: 'Strength / Lat', exercise: 'Weighted Pull-ups (NSCA tempo)', rpe: 8.5, rest: '3 min' },
      { tier: 'Hypertrophy Acc.', exercise: 'Chest-Supported Row + Face Pulls', sets: 4, rest: '90s' }
    ]
  },
  friday: {
    focus: 'MMA Conditioning & Power + Dynamic Balance',
    structure: [
      { tier: 'Anaerobic Alactic', exercise: 'Bolsa pesada / Pads por intervalos (Kostikiadis)', sets: '5 x 3 min' },
      { tier: 'Rotational Power', exercise: 'Kettlebell Snatches / Cleans', rpe: 7.5 }
    ]
  },
  saturday: {
    focus: 'Full Body Deload & Active Recovery + Dance Technique & Flow',
    structure: [
      { tier: 'Dance Flow', exercise: 'Floor Barre / Contemporary technique (Howse/Haas)', duration: '40 min' },
      { tier: 'Passive Flexibility', exercise: 'Full Body Static Stretch (Blahnik 3-step)', duration: '20 min' }
    ]
  },
  sunday: {
    focus: 'Rest & Weekly Review (Análisis biométrico y de fatiga)'
  }
};
```

---

## 6. Hoja de Ruta de Entrada de Datos: De Manual a Wearables

```
┌────────────────────────────────────────────────────────────────────────┐
│                      FASE 1: REGISTRO MANUAL RÁPIDO                    │
│  - Logger set-a-set optimizado para móvil (cero fricción)             │
│  - Selección táctil en 3D de zonas dolorosas con escala visual 1-10    │
│  - Registro de sueño, estrés y energía en el Daily Briefing matutino  │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   FASE 2: CONECTIVIDAD WEB BLUETOOTH (BLE)             │
│  - Web Bluetooth API directamente en el navegador (Chrome/Edge/PWA)   │
│  - Conexión con bandas de frecuencia cardíaca (Polar H10, Garmin HRM)  │
│  - Medición en vivo de FC y cálculo real de TRIMP (Training Impulse)   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   FASE 3: BÁSCULA INTELIGENTE Y REPOSO 24/7            │
│  - Integración vía export JSON / Webhook con Health Connect y Withings│
│  - Ingesta automática de peso matutino, % grasa corporal y masa magra  │
│  - Variabilidad de Frecuencia Cardíaca (HRV) como indicador de readin.│
└────────────────────────────────────────────────────────────────────────┘
```
