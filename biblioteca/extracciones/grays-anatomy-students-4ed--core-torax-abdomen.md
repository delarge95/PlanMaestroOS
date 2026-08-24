# Gray's Anatomy for Students (4ª ed.) — Core, Tórax y Abdomen (pp. 126–427)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 3 (Thorax) & Chapter 4 (Abdomen) — Thoracic Wall, Diaphragm, Abdominal Wall & Posterior Abdominal Wall (pp. 126–427)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Anatomía humana macroscópica / anatomía del tronco y cavidades abdominotorácicas
- **Alcance de esta sección:** Pared torácica (costillas, esternón, músculos intercostales, fascia endotorácica), diafragma (porciones esternal, costal, lumbar, pilares diafragmáticos y hiatos T8, T10, T12), pared abdominal anterolateral (recto del abdomen, oblicuo externo, oblicuo interno, transverso del abdomen, vaina de los rectos, línea alba, canal inguinal), pared posterior del abdomen (psoas mayor, ilíaco, cuadrado lumbar) e inervación parietal (nervios intercostales T1–T11, subcostal T12, iliohipogástrico L1, ilioinguinal L1).

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Estructuras del Core Anterolateral y Posterior:**
  - `rectus-abdominis`: flexor del tronco, estabilizador de la pelvis en el plano sagital.
  - `external-oblique`: rotación contralateral del tronco, flexión lateral homolateral y flexión del tronco.
  - `internal-oblique`: rotación homolateral del tronco, flexión lateral y flexión del tronco.
  - `transversus-abdominis`: faja abdominal profunda ("corsé natural"), aumenta la presión intraabdominal (IAP) sin producir movimiento espinal primario.
  - `diaphragm`: principal músculo inspiratorio y techo de la cavidad abdominal; actúa en sinergia con el piso pélvico y transverso para generar IAP.
  - `psoas-major`: potente flexor de la cadera y estabilizador de la columna lumbar.

- **Vainas y Pasajes de la Pared Abdominal:**
  - `rectus-sheath`: vaina aponeurótica formada por los tendones de los tres músculos planos; por encima de la línea arqueada de Douglas envuelve el recto por anterior y posterior; por debajo de la línea arqueada, las tres aponeurosis pasan por anterior al recto.
  - `inguinal-canal`: pasaje oblicuo de ~4 cm en la región inguinal inferior. Transmite el cordón espermático (hombres) o ligamento redondo (mujeres) y el nervio ilioinguinal.

---

## 3) Reglas cuantitativas y protocolos

### Regla: `intra-abdominal-pressure-valsalva-mechanism`
- **id:** `intra-abdominal-pressure-valsalva-mechanism` | **tipo:** biomecánica / estabilidad
- **descripción:** La co-contracción del diafragma, transverso del abdomen, músculos del piso pélvico y multífido (mecanismo de Valsalva) incrementa la Presión Intraabdominal (IAP), reduciendo la carga de compresión sobre la columna lumbar.
- **métrica principal:** `intraAbdominalPressureKPa`
- **valores numéricos:** 
  - Reposo / respiración normal: ~0.5–1.5 kPa (4–11 mmHg).
  - Contracciones máximas / elevación de peso pesado (Valsalva): >15–25 kPa (100–180 mmHg).
  - Reducción de la fuerza de compresión lumbar: disminuye la carga sobre los discos lumbares en un ~20–40%.
- **condiciones:** Levantamientos pesados (sentadilla, peso muerto, preses).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 4, pp. 258–265, 280–288.

### Regla: `diaphragmatic-excursion-norms`
- **id:** `diaphragmatic-excursion-norms` | **tipo:** fisiología / respiración
- **descripción:** Rango de desplazamiento vertical de la cúpula diafragmática durante las distintas fases de la respiración.
- **métrica principal:** `diaphragmExcursionCM`
- **valores numéricos:** 
  - Respiración quieta (reposo): ~1.5–2 cm de descenso.
  - Inspiración/espiración profunda forzada: ~6–10 cm de excursión.
- **condiciones:** Evaluación de la función respiratoria y capacidad vital.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 3, pp. 141–146.

---

## 4) Estructuras anatómicas de la sección

### Músculos de la Pared Abdominal Anterolateral y Diafragma

#### `transversus-abdominis` (Transverso del Abdomen)
- **Tipo:** `muscle`
- **Origen:** Cartílagos costales 7–12, fascia toracolumbar, cresta ilíaca (2/3 anteriores) y ligamento inguinal (lateral 1/3) (p. 283).
- **Inserción:** Línea alba, cresta del pubis y pecten pubis a través del tendón conjunto (p. 283).
- **Inervación:** Ramos anteriores de los nervios espinales T7–T12 (intercostales y subcostal) e iliohipogástrico/ilioinguinal (L1) (p. 283).
- **Acción principal:** Comprime los contenidos abdominales, aumenta la presión intraabdominal (IAP) y estabiliza la columna lumbar y pelvis (p. 283).
- **Páginas exactas:** pp. 283–286.

#### `rectus-abdominis` (Recto del Abdomen)
- **Tipo:** `muscle`
- **Origen:** Cresta del pubis, tubérculo del pubis y sínfisis del pubis (p. 281).
- **Inserción:** Cartílagos costales 5–7 y apófisis xifoides del esternón (p. 281).
- **Inervación:** Ramos anteriores de los nervios T7–T12 (p. 281).
- **Acción principal:** Flexión del tronco (columna vertebral), retroversión pélvica y compresión de vísceras (p. 281).
- **Páginas exactas:** pp. 281–283.

#### `external-oblique` (Oblicuo Externo del Abdomen)
- **Tipo:** `muscle`
- **Origen:** Caras externas de las costillas 5 a 12 (p. 281).
- **Inserción:** Línea alba, tubérculo del pubis y mitad anterior de la cresta ilíaca (p. 281).
- **Inervación:** Ramos anteriores de T7–T12 (p. 281).
- **Acción principal:** Flexión lateral del tronco homolateral, rotación del tronco hacia el lado opuesto (contralateral) y flexión anterior bilateral (p. 281).
- **Páginas exactas:** pp. 281–284.

#### `internal-oblique` (Oblicuo Interno del Abdomen)
- **Tipo:** `muscle`
- **Origen:** Fascia toracolumbar, cresta ilíaca (2/3 anteriores) y ligamento inguinal (p. 282).
- **Inserción:** Bordes inferiores de las costillas 10–12, línea alba y pecten pubis (p. 282).
- **Inervación:** Ramos anteriores de T7–T12 y L1 (p. 282).
- **Acción principal:** Flexión lateral e inclinación del tronco homolateral, rotación del tronco hacia el mismo lado (homolateral) y flexión anterior (p. 282).
- **Páginas exactas:** pp. 282–285.

#### `diaphragm` (Diafragma)
- **Tipo:** `muscle`
- **Origen:** Apófisis xifoides (porción esternal), cartílagos costales 7–12 (porción costal), y vértebras L1–L3 a través de los pilares derecho e izquierdo (porción lumbar) (p. 141).
- **Inserción:** Centro tendinoso (centro frénico) (p. 141).
- **Inervación:** Nervio frénico (C3, C4, C5: "C3, 4, 5 keeps the diaphragm alive") (p. 142).
- **Acción principal:** Motor primario de la inspiración; al contraerse desciende el centro tendinoso, aumentando el volumen de la cavidad torácica y la presión abdominal (p. 141).
- **Orificios Principales:**
  - Hiato de la Vena Cava: T8 (en el centro tendinoso).
  - Hiato Esofágico: T10 (en el pilar derecho).
  - Hiato Aórtico: T12 (posterior a los pilares).
- **Páginas exactas:** pp. 141–146.

---

## 5) Cues técnicos y fallos comunes en ejercicios de Core

### Ejercicio: Abdominal Bracing vs. Abdominal Hollowing
- **Bracing (Co-contracción global):**
  - Cue: "Prepárate para recibir un golpe en el estómago". Contracción simultánea de recto, oblicuos y transverso pushing hacia afuera/lateral.
  - Genera la máxima estabilidad espinal e IAP para levantamientos pesados (squats, deadlifts).
- **Hollowing (Vacío/retracción):**
  - Cue: "Lleva el ombligo hacia la columna". Enfoca el aislamiento del transverso del abdomen.
  - Útil en rehab inicial, pero inadecuado como estrategia única en cargas altas.

---

## 6) Rehab / Prehab y Manejo del Dolor

### Condición: Diástasis de los Rectos (Diastasis Recti)
- **Etiología:** Separación de los vientres del `rectus-abdominis` por estiramiento y adelgazamiento de la línea alba (>2 cm de separación en la línea media).
- **Prehab / Tratamiento:** Evitar crunches/sit-ups tradicionales (que aumentan la protrusión anterior); priorizar la activación aislada del `transversus-abdominis` e inclinación pélvica controlada.

### Condición: Hernia Inguinal (Directa vs. Indirecta)
- **Hernia Indirecta:** Sale lateral a los vasos epigástricos inferiores, ingresando al canal inguinal por el anillo inguinal profundo (congénita/persistencia del proceso vaginal).
- **Hernia Directa:** Sale medial a los vasos epigástricos inferiores, proyectándose directamente a través del trígono inguinal (triángulo de Hesselbach) por debilidad muscular adquirida.

---

## 7) Integración en Plan Maestro OS

- **Motor de Reglas:** Utilizar `intra-abdominal-pressure-valsalva-mechanism` para sugerir bracing y respiración diafragmática adecuada en ejercicios compuestos con RPE ≥8.
- **Grafo Anatómico:** Conectar `transversus-abdominis`, `diaphragm` y `internal-oblique` con la categoría de estabilidad de tronco y anti-rotación/anti-flexión.
