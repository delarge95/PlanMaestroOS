# Gray's Anatomy for Students (4ª ed.) — Columna Vertebral y Cervical (pp. 52–125)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 2 — Back: Conceptual Overview, Skeletal Framework, Joints, Ligaments, Back Musculature & Spinal Cord (pp. 52–125)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Anatomía humana macroscópica / anatomía clínica de la columna vertebral
- **Alcance de esta sección:** Marco esquelético de la columna vertebral (33 vértebras: 7 cervicales, 12 torácicas, 5 lumbares, 5 sacras fusionadas, 4 coccígeas), articulaciones intervertebrales (sinfisis del disco intervertebral y sinoviales cigapofisarias/facetarias), aparato ligamentoso (ALL, PLL, ligamento amarillo, interespinoso, supraespinoso, nucal), musculatura intrínseca/epaxial (erector de la columna, transversoespinoso, suboccipitales) y extrínseca, meninges y médula espinal (cono medular L1–L2, cauda equina, raíces nerviosas y dermatomas espinales).

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Segmentos y Articulaciones Vertebrales:**
  - `cervical-spine` (C1–C7): alta movilidad (flexión, extensión, rotación C1-C2 atlantaxial, inclinación atlantoccipital C0-C1).
  - `thoracic-spine` (T1–T12): articulaciones costovertebrales y costotransversas; limitada flexión/extensión por la jaula torácica; buena rotación.
  - `lumbar-spine` (L1–L5): procesos articulares sagitales (facetas); favorecen flexión/extensión, restringen fuertemente la rotación axial (<5° total).
  - `sacrum-coccyx` (S1–S5, Co1–Co4): articulación sacroilíaca (SIJ) y sacrococcígea.

- **Componentes Tisulares Intervertebrales:**
  - `intervertebral-disc` (IVD): compuesto por el `anulus-fibrosus` (anillos concéntricos de colágeno tipo I) y el `nucleus-pulposus` (núcleo gelatinoso rico en proteoglicanos y colágeno tipo II que absorbe cargas de compresión).
  - `zygapophysial-joint` (faceta articular): articulaciones sinoviales planas que guían y limitan el plano de movimiento según la orientación regional.
  - `ligamentum-flavum`: ligamento rico en elastina (80%) que conecta las láminas vertebrales contiguas, manteniendo la tensión sobre el canal medular.

---

## 3) Reglas cuantitativas y protocolos

### Regla: `spinal-sagittal-curvature-angles`
- **id:** `spinal-sagittal-curvature-angles` | **tipo:** postura / evaluación
- **descripción:** Ángulos sagitales fisiológicos de la columna vertebral en bipedestación neutra.
- **métrica principal:** `sagittalCurveDegrees`
- **valores numéricos:** 
  - Lordosis cervical: 20°–40° (secundaria).
  - Cifosis torácica: 20°–50° (primaria).
  - Lordosis lumbar: 30°–80° (promedio ~45°; secundaria).
  - Inclinación sacra: 30°–50°.
- **condiciones:** Bipedestación erguida sin carga externa.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 2, pp. 53–56, 115–117.

### Regla: `spinal-cord-termination-level`
- **id:** `spinal-cord-termination-level` | **tipo:** anatomía clínica / seguridad
- **descripción:** Nivel de terminación de la médula espinal adulta (cono medular), por debajo del cual se extiende la cauda equina dentro de la cisterna lumbar.
- **métrica principal:** `conusMedullarisLevel`
- **valores numéricos:** 
  - Adultos: disco L1–L2 (rango entre el borde inferior de T12 y el disco L2–L3).
  - Neonato: nivel L3.
  - Punción lumbar segura: espacio intervertebral L3–L4 o L4–L5.
- **condiciones:** Procedimientos invasivos lumbares / evaluación de síndrome de cauda equina.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 2, pp. 102–106.

---

## 4) Estructuras anatómicas de la sección

### Musculatura Intrínseca (Epaxial / Profunda) de la Columna

#### `erector-spinae` (Erector de la Columna: Iliocostal, Longísimo, Espinoso)
- **Tipo:** `muscle`
- **Origen:** Masa tendinosa común en el sacro, crestas ilíacas y procesos espinosos lumbares (p. 88).
- **Inserción:**
  - `iliocostalis`: ángulos de las costillas y procesos transversos cervicales (p. 88).
  - `longissimus`: procesos transversos de vértebras torácicas y cervicales, y apófisis mastoides (p. 88).
  - `spinalis`: procesos espinosos torácicos superiores y cervicales (p. 88).
- **Inervación:** Ramos posteriores (dorsales) de los nervios espinales (p. 88).
- **Acción principal:** Extensión bilateral de la columna vertebral y cabeza; inclinación lateral unilateral (p. 88).
- **Páginas exactas:** pp. 88–92.

#### `multifidus` (Multífido)
- **Tipo:** `muscle`
- **Origen:** Sacro, origen del erector spinae, procesos mamilares lumbares, procesos transversos torácicos y procesos articulares C4–C7 (p. 92).
- **Inserción:** Cruza 2 a 4 segmentos para insertarse en los procesos espinosos de las vértebras superiores (p. 92).
- **Inervación:** Ramos posteriores de los nervios espinales (p. 92).
- **Acción principal:** Estabilización segmentaria paso a paso de la columna lumbar; extensión y rotación contralateral segmentaria (p. 92).
- **Páginas exactas:** pp. 92–94.

#### `quadratus-lumborum` (Cuadrado Lumbar)
- **Tipo:** `muscle`
- **Origen:** Cresta ilíaca y ligamento iliolumbar (p. 97).
- **Inserción:** Borde inferior de la 12ª costilla y procesos transversos de L1–L4 (p. 97).
- **Inervación:** Ramos anteriores de T12 y L1–L4 (p. 97).
- **Acción principal:** Inclinación lateral de la columna lumbar; fija la 12ª costilla durante la inspiración (p. 97).
- **Páginas exactas:** pp. 97, 100.

---

## 5) Cues técnicos y fallos comunes en ejercicios de Columna

### Ejercicio: Peso Muerto / Sentadilla (Carga Lumbar)
- **Cues técnicos:**
  - Mantener la columna neutra durante todo el rango de movimiento sin permitir la flexión lumbar bajo carga.
  - La flexión de columna desplaza el núcleo pulposo hacia posterior contra las fibras anulares posteriores (mayor riesgo de herniación).
  - Evitar la combinación de flexión lumbar con rotación axial bajo carga pesada (la orientación de las facetas lumbares restringe la rotación y la fuerza aplicada en este ángulo rasga el anillo fibroso).
- **Fallos comunes:**
  - "Butt wink" o retroversión pélvica extrema al final de la sentadilla profunda.
  - Perder la tensión del erector spinae y multífidos en la fase excéntrica del peso muerto.

---

## 6) Rehab / Prehab y Manejo del Dolor

### Condición: Hernia del Disco Intervertebral (L4–L5 / L5–S1)
- **Etiología:** Ruptura de las láminas del `anulus-fibrosus` (usualmente posterolateral, donde el ligamento longitudinal posterior es más estrecho) y herniación del `nucleus-pulposus`.
- **Compresión radicular:** Una hernia posterolateral en L4–L5 comprime típicamente la raíz nerviosa **L5** (la raíz pasante hacia el foramen L5–S1 inferior).
- **Red Flags / Síndrome de Cauda Equina:** Parestesia en silla de montar (anestesia perineal), incontinencia o retención urinaria/fecal, debilidad bilateral progresiva de miembros inferiores → Urgencia quirúrgica inmediata.

---

## 7) Integración en Plan Maestro OS

- **Motor de Reglas:** Implementar `spinal-cord-termination-level` y las biomecánicas del disco para restringir la prescripción de ejercicios rotacionales pesados en usuarios con antecedentes de discopatía posterolateral.
- **Grafo Anatómico:** Conectar `multifidus`, `erector-spinae` y `quadratus-lumborum` con los patrones de movimiento de extensión y anti-rotación del core.
