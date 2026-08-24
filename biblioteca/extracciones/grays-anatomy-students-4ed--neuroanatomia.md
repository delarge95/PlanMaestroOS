# Gray's Anatomy for Students (4ª ed.) — Neuroanatomía y Nervios Periféricos (pp. 1154–1233)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 9 — Neuroanatomy: Nervous System Overview, Spinal Cord, Dermatomes, Myotomes & Peripheral Nerves (pp. 1154–1233)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Neuroanatomía / neurología clínica / neurociencia aplicada al movimiento
- **Alcance de esta sección:** Organización del sistema nervioso (SNC y SNP), estructura segmentaria de la médula espinal, dermatomas sensitivos del cuerpo, miotomas motores segmentarios de los miembros superior e inferior, mapa de reflejos osteotendinosos (DTR), plexos somáticos (braquial, lumbar, sacro) y trayectos de nervios periféricos clave.

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Mapas Neurológicos Segmentarios:**
  - `DermatomeMap`: franja de piel inervada por las fibras sensitivas de una sola raíz espinal (ganglio de la raíz dorsal).
  - `MyotomeMap`: grupo de músculos inervados por las fibras motoras de una sola raíz espinal (asta anterior).
  - `DeepTendonReflexMap` (DTR): arco reflejo monosináptico evaluado clínicamente (escala 0 a 4+).

---

## 3) Reglas cuantitativas y protocolos

### Regla: `myotome-segmental-motor-mapping`
- **id:** `myotome-segmental-motor-mapping` | **tipo:** neurología / evaluación
- **descripción:** Mapeo de la función motora principal probada clínicamente por raíz espinal (miotoma).
- **métrica principal:** `musclePowerGrade` (Escala MRC 0 a 5).
- **valores numéricos por nivel:** 
  - **C5:** Abducción del hombro (`deltoid`) / Flexión del codo (`biceps-brachii`).
  - **C6:** Extensión de la muñeca (`extensor-carpi-radialis`).
  - **C7:** Extensión del codo (`triceps-brachii`) y Flexión de la muñeca (`flexor-carpi-radialis`).
  - **C8:** Flexión de los dedos (`flexor-digitorum-profundus`) y Extensión del pulgar.
  - **T1:** Abducción/Aducción de los dedos (interóseos de la mano).
  - **L2:** Flexión de la cadera (`iliopsoas`).
  - **L3:** Extensión de la rodilla (`quadriceps`).
  - **L4:** Dorsiflexión del tobillo (`tibialis-anterior`).
  - **L5:** Extensión del dedo gordo (`extensor-hallucis-longus`) y abducción de cadera.
  - **S1:** Plantarflexión del tobillo (`gastrocnemius`/`soleus`).
- **condiciones:** Pruebas musculares manuales aisladas por nivel segmentario.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 9, pp. 1154–1160, 1186–1195.

### Regla: `key-dermatome-sensory-landmarks`
- **id:** `key-dermatome-sensory-landmarks` | **tipo:** neurología / evaluación
- **descripción:** Puntos anatómicos clave para la evaluación de la sensibilidad cutánea por raíz espinal.
- **métrica principal:** `sensoryScore` (0 = ausente; 1 = alterado; 2 = normal).
- **valores numéricos:** 
  - **C5:** Aspecto lateral de la fosa cubital (sobre el deltoides lateral).
  - **C6:** Cara dorsal del primer espacio interdigital / pulgar.
  - **C7:** Dedo medio (cara dorsal o palmar).
  - **C8:** Dedo meñique (5º dedo).
  - **T4:** Nivel de los pezones / 4º espacio intercostal.
  - **T10:** Nivel del ombligo.
  - **L2:** Cara anterior del muslo medio.
  - **L3:** Cóndilo femoral medial.
  - **L4:** Maléolo medial.
  - **L5:** Cara dorsal de la 3ª articulación metatarsofalángica / espacio interdigital 1–2.
  - **S1:** Cara lateral del talón / maléolo lateral.
- **condiciones:** Examen sensitivo con alfiler (dolor) y algodón (tacto fino).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 9, pp. 1155–1158, 1188.

### Regla: `deep-tendon-reflex-arch-mapping`
- **id:** `deep-tendon-reflex-arch-mapping` | **tipo:** neurología / reflejos
- **descripción:** Mapeo de los arcos reflejos monosinápticos osteotendinosos principales.
- **métrica principal:** `reflexGrade` (0 = arreflexia; 2+ = normal; 4+ = clonus).
- **valores numéricos:** 
  - Reflejo Bicipital: **C5–C6** (Nervio musculocutáneo).
  - Reflejo Braquiorradial: **C5–C6** (Nervio radial).
  - Reflejo Tricipital: **C7** (Nervio radial).
  - Reflejo Patelar (Rotuliano): **L3–L4** (Nervio femoral).
  - Reflejo Aquileo: **S1** (Nervio tibial).
- **condiciones:** Examen neurológico estándar con martillo de reflejos.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 9, pp. 1186–1190.

---

## 4) Estructuras anatómicas de la sección

### Trayectos y Atrapamientos de Nervios Periféricos Principales

| Nervio Periférico | Raíces de Origen | Punto Frecuente de Atrapamiento | Clínica por Lesión | Páginas |
|---|---|---|---|---|
| **Nervio Axilar** | C5, C6 | Cuello quirúrgico del húmero / Espacio cuadrangular | Parálisis del deltoides + anestesia sobre el "parche del deltoides" | pp. 759, 1192 |
| **Nervio Radial** | C5–T1 | Surco del nervio radial (húmero) / Túnel supinador (Arcada de Frohse) | "Pie de gota" o mano caída (drop wrist) por parálisis extensora | pp. 760, 1192 |
| **Nervio Mediano** | C5–T1 | Túnel carpiano / Entre las cabezas del pronador redondo | "Mano de predicador" o signo de simio (atrofia tenar) | pp. 755, 1193 |
| **Nervio Cubital** | C8, T1 | Túnel cubital (detrás del epicóndilo medial) / Canal de Guyon | "Mano en garra" (claw hand) de los dedos 4º y 5º + atrofia hipotenar | pp. 757, 1193 |
| **Nervio Femoral** | L2, L3, L4 | Bajo el ligamento inguinal | Imposibilidad para extender la rodilla + pérdida del reflejo patelar | pp. 572, 1194 |
| **Nervio Ciático** | L4–S3 | Bajo/a través del músculo piriforme | Ciática (dolor/parestesias posteriores de muslo y pierna) | pp. 573, 1194 |
| **Nervio Peroneo Común** | L4–S2 | Cuello del peroné (superficial) | Pie caído (foot drop) + incapacidad para dorsiflexionar/evertir el pie | pp. 612, 1195 |

---

## 5) Rehab / Prehab y Manejo de Lesiones Neurales

### Neurodinámica (Neural Mobilization / Sliders & Tensioners)
- **Concepto:** Las estructuras neurales requieren capacidad de deslizamiento (sliding) y elongación (tensioning) respecto a las interfaces mecánicas que las rodean durante el movimiento articular.
- **Tensión Neural:** Movilizaciones neurodinámicas para el nervio mediano (ULTT1), nervio radial (ULTT2), nervio cubital (ULTT3) y nervio ciático (SLUMP test / Straight Leg Raise - SLR).

---

## 6) Integración en Plan Maestro OS

- **Motor de Reglas:** Utilizar `myotome-segmental-motor-mapping` y `key-dermatome-sensory-landmarks` para diferenciar si la debilidad de un músculo es de origen periférico muscular o de origen radicular cervical/lumbar.
- **Grafo Anatómico:** Conectar las raíces `C5` a `S1` con sus respectivos miotomas y dermatomas en el sistema de screening clínico de la aplicación.
