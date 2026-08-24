# Gray's Anatomy for Students (4ª ed.) — Cabeza, Cuello y ATM (pp. 852–1153)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 8 — Head and Neck: Neck Triangles, Cervical Musculature, Temporomandibular Joint (TMJ) & Muscles of Mastication (pp. 852–1153)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Anatomía humana macroscópica / anatomía estomatognática y cervical
- **Alcance de esta sección:** Músculos de la cara y masticación (masetero, temporal, pterigoideos medial y lateral), articulación temporomandibular (ATM), disco articular biconcavo, movimiento mandibular (depresión, elevación, protrusión, retracción, excursión lateral), triángulos del cuello (anterior y posterior), músculos hioideos (suprahipideos e infrahioideos), músculos escalenos (anterior, medio, posterior), esternocleidomastoideo e inervación craneal/cervical (nervio trigémino V3, nervio accesorio XI, plexo cervical C1–C4).

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Articulación y Elementos de la ATM:**
  - `temporomandibular-joint` (TMJ): articulación sinovial bicondílea compleja con un disco articular fibrocartilaginoso que divide la cavidad en dos compartimentos (superior: traslación/deslizamiento; inferior: rotación/bisagra).
  - `articular-disc-tmj`: disco biconcavo de fibrocartílago avascular y no inervado en su centro; su zona posterior (almohadilla retrodiscal / retrodiscal pad) es rica en vasos y nervios.

- **Espacios y Triángulos Cervicales:**
  - `posterior-triangle-neck`: límites (esternocleidomastoideo anterior, trapecio posterior, clavícula inferior). Contiene el nervio accesorio (XI), el plexo braquial (emergencia entre escalenos anterior y medio) y la arteria subclavia.
  - `scalene-triangle` (triángulo interescalénico): espacio entre el escaleno anterior, escaleno medio y 1ª costilla. Transmite los troncos del plexo braquial y la arteria subclavia.

---

## 3) Reglas cuantitativas y protocolos

### Regla: `tmj-normal-rom-thresholds`
- **id:** `tmj-normal-rom-thresholds` | **tipo:** ROM / evaluación
- **descripción:** Parámetros de movimiento funcional y máximo de la articulación temporomandibular.
- **métrica principal:** `tmjDepressionMM`
- **valores numéricos:** 
  - Apertura máxima normal (depresión): 40–50 mm (equivalente a 3 dedos o nudillos del paciente interincisivos).
  - Apertura mínima funcional para masticación: ~18–25 mm (equivalente a 2 nudillos).
  - Excursión lateral: 8–11 mm hacia cada lado.
  - Protrusión mandibular: >5 mm (los incisivos inferiores sobrepasan a los superiores).
- **condiciones:** Evaluación clínica mandibular sin dolor.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 8, pp. 852–860, 870–878.

---

## 4) Estructuras anatómicas de la sección

### Músculos de la Masticación y Cuello

#### `masseter` (Masetero)
- **Tipo:** `muscle`
- **Origen:** Arco cigomático (borde inferior y cara medial) (p. 871).
- **Inserción:** Cara lateral de la rama y ángulo de la mandíbula (p. 871).
- **Inervación:** Nervio maseterino del ramo mandibular del nervio trigémino ($V_3$) (p. 871).
- **Acción principal:** Potente elevador de la mandíbula (cierra la boca) y protrusión ligera (p. 871).
- **Páginas exactas:** pp. 871–873.

#### `temporalis` (Temporal)
- **Tipo:** `muscle`
- **Origen:** Fosa temporal y fascia temporal (p. 871).
- **Inserción:** Apófisis coronoides de la mandíbula y borde anterior de la rama mandibular (p. 871).
- **Inervación:** Nervios temporales profundos del ramo mandibular del trigémino ($V_3$) (p. 871).
- **Acción principal:** Eleva la mandíbula; sus fibras posteriores retraen (tiran hacia atrás) la mandíbula (p. 871).
- **Páginas exactas:** pp. 871, 874.

#### `lateral-pterygoid` (Pterigoideo Lateral)
- **Tipo:** `muscle`
- **Origen:** Cabeza superior: ala mayor del esfenoides; Cabeza inferior: cara lateral de la lámina lateral de la apófisis pterigoides (p. 872).
- **Inserción:** Fosita pterigoidea en el cuello de la mandíbula, cápsula articular y disco articular de la ATM (p. 872).
- **Inervación:** Nervio pterigoideo lateral del ramo $V_3$ del trigémino (p. 872).
- **Acción principal:** Actuando bilateralmente, protruye la mandíbula y tira del disco articular hacia adelante durante la apertura; actuando unilateralmente, produce la desviación lateral contralateral de la mandíbula (p. 872).
- **Páginas exactas:** pp. 872–875.

#### `sternocleidomastoid` (Esternocleidomastoideo - SCM)
- **Tipo:** `muscle`
- **Origen:** Cabeza esternal: manubrio del esternón; Cabeza clavicular: tercio medial de la clavícula (p. 885).
- **Inserción:** Apófisis mastoides del hueso temporal y línea nucal superior (p. 885).
- **Inervación:** Nervio accesorio (XI) para motor y C2–C3 para propiocepción (p. 885).
- **Acción principal:** Unilateral: flexiona lateralmente el cuello hacia el mismo lado y rota la cara hacia el lado opuesto. Bilateral: flexiona el cuello o extiende la articulación atlantoccipital (p. 885).
- **Páginas exactas:** pp. 885–887.

---

## 5) Cues técnicos y fallos comunes en Postura Cervical

### Forward Head Posture (Postura de Cabeza Adelantada)
- **Mecánica:** Desplazamiento anterior de la cabeza respecto al acromion. Conlleva una hiperextensión cervical superior (C1–C3) y flexión cervical inferior (C4–C7).
- **Sobrecarga muscular:** Por cada pulgada (~2.5 cm) de avance anterior de la cabeza, el esfuerzo mecánico efectivo sobre los extensores cervicales profundos y trapecio superior aumenta en un 100% (~4.5 kg adicionales de carga resistiva).

---

## 6) Rehab / Prehab y Manejo del Dolor

### Condición: Trastorno Temporomandibular (TMD - Temporomandibular Joint Dysfunction)
- **Etiología:** Desplazamiento anterior del disco articular con o sin reducción, bruxismo o hipertonía de los músculos pterigoideos y masetero.
- **Prehab:** Ejercicios de reeducación del control mandibular (apertura en eje neutro con la punta de la lengua en el paladar), relajación del masetero e higiene postural cervical.

---

## 7) Integración en Plan Maestro OS

- **Motor de Reglas:** Incorporar `tmj-normal-rom-thresholds` en la evaluación de dolor crónico facial/cervical y evaluar el acoplamiento postural entre la articulación temporomandibular y la columna cervical.
- **Grafo Anatómico:** Conectar `masseter`, `temporalis`, `lateral-pterygoid` y `sternocleidomastoid` con las disfunciones de cabeza adelantada y dolor miofascial cervical.
