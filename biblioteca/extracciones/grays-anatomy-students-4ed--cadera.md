# Gray's Anatomy for Students (4ª ed.) — Cadera, Pelvis y Muslo (pp. 428–614)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 5 (Pelvis & Perineum) & Chapter 6 (Lower Limb) — Bony Pelvis, Hip Joint, Gluteal Region & Thigh (pp. 428–614)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Anatomía humana macroscópica / kinesiología del miembro inferior proximal
- **Alcance de esta sección:** Pelvis ósea (ilion, isquion, pubis, sacro), articulación coxofemoral (hip joint), labrum acetabular, refuerzos capsulares (ligamentos iliofemoral, pubofemoral, isquiofemoral), región glútea (glúteos mayor, medio, menor, rotadores externos profundos), triángulo femoral (de Scarpa), compartimentos del muslo (anterior/cuádriceps, medial/aductores, posterior/isquiotibiales) e inervación principal (plexo lumbar L1–L4 y sacro L4–S4: nervios femoral, obturador, ciático, glúteo superior e inferior).

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Articulación y Estructuras Capsulares:**
  - `hip-joint`: diartrosis esférica (triaxial), congruencia ósea profunda reforzada por el `acetabular-labrum`.
  - `iliofemoral-ligament` (ligamento en Y de Bigelow): el ligamento más resistente del cuerpo; previene la hiperextensión de la cadera en bipedestación.
  - `pubofemoral-ligament`: previene la abducción excesiva.
  - `ischiofemoral-ligament`: previene la rotación interna excesiva.

- **Vías y Triángulos Anatómicos:**
  - `femoral-triangle`: límites (ligamento inguinal superiormente, sartorio lateralmente, aductor largo medialmente). Transmite de lateral a medial: Nervio Femoral, Arteria Femoral, Vena Femoral, Canales linfáticos ("NAVEL").
  - `greater-sciatic-foramen`: convertido por los ligamentos sacroespinoso y sacrotuberoso. El músculo `piriformis` pasa por su centro. Por encima pasa el nervio/arteria glútea superior; por debajo pasan el `sciatic-nerve`, nervio/arteria glútea inferior y nervio pudendo.

---

## 3) Reglas cuantitativas y protocolos

### Regla: `femoral-neck-inclination-angle`
- **id:** `femoral-neck-inclination-angle` | **tipo:** anatómico / evaluación
- **descripción:** Ángulo en el plano frontal entre el eje del cuello femoral y el eje de la diáfisis femoral.
- **métrica principal:** `inclinationAngleDegrees`
- **valores numéricos:** 
  - Adulto normal: ~125° (rango 120°–135°).
  - Coxa valga: >135° (aumenta la longitud relativa del miembro, disminuye el brazo de palanca del glúteo medio).
  - Coxa vara: <120° (aumenta el brazo de palanca del glúteo medio pero incrementa el esfuerzo de cizallamiento en el cuello femoral).
- **condiciones:** Evaluación radiológica o clínica de alineación.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 563–567.

### Regla: `trendelenburg-sign-gluteus-medius-mechanics`
- **id:** `trendelenburg-sign-gluteus-medius-mechanics` | **tipo:** evaluación / biomecánica
- **descripción:** Caída de la pelvis hacia el lado contralateral (sin carga) durante el apoyo unipodal, indicando debilidad o parálisis del `gluteus-medius` y `gluteus-minimus` del lado en apoyo (inervados por el nervio glúteo superior).
- **métrica principal:** `pelvicTiltUnipodalDegrees`
- **valores numéricos:** La pelvis debe permanecer nivelada o elevarse ligeramente en el lado contralateral durante la marcha o apoyo unipodal.
- **condiciones:** Prueba de apoyo unipodal (Trendelenburg test).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 583–587.

---

## 4) Estructuras anatómicas de la sección

### Músculos de la Región Glútea y Muslo Posterior

#### `gluteus-maximus` (Glúteo Mayor)
- **Tipo:** `muscle`
- **Origen:** Cara posterior del ilion (detrás de la línea glútea posterior), cara posterior del sacro y cóccix, y ligamento sacrotuberoso (p. 583).
- **Inserción:** Banda iliotibial (tracto iliotibial) de la fascia lata y tuberosidad glútea del fémur (p. 583).
- **Inervación:** Nervio glúteo inferior (L5, S1, S2) (p. 583).
- **Acción principal:** Potente extensor de la cadera (especialmente desde flexión / subiendo escaleras / levantando peso); rotador lateral del fémur; estabilizador de la articulación GH y rodilla a través del tracto iliotibial (p. 583).
- **Páginas exactas:** pp. 583–585.

#### `gluteus-medius` (Glúteo Medio)
- **Tipo:** `muscle`
- **Origen:** Cara lateral del ilion entre las líneas glúteas anterior y posterior (p. 584).
- **Inserción:** Cara lateral del trocánter mayor del fémur (p. 584).
- **Inervación:** Nervio glúteo superior (L4, L5, S1) (p. 584).
- **Acción principal:** Abducción de la cadera; mantiene la pelvis nivelada durante el apoyo unipodal; las fibras anteriores rotan medialmente la cadera (p. 584).
- **Páginas exactas:** pp. 584–586.

#### `piriformis` (Piriforme / Piramidal)
- **Tipo:** `muscle`
- **Origen:** Cara anterior del sacro (entre los forámenes sacros anteriores 2 a 4) (p. 585).
- **Inserción:** Borde superior del trocánter mayor del fémur (p. 585).
- **Inervación:** Ramo directo del plexo sacro (S1, S2) (p. 585).
- **Acción principal:** Rotación lateral de la cadera extendida; abducción de la cadera flexionada (p. 585).
- **Páginas exactas:** pp. 585, 588.

#### `iliopsoas` (Ilíaco y Psoas Mayor)
- **Tipo:** `muscle`
- **Origen:** Psoas: procesos transversos y cuerpos vertebrales T12–L5. Ilíaco: fosa ilíaca (p. 592).
- **Inserción:** Trocánter menor del fémur mediante un tendón común (p. 592).
- **Inervación:** Psoas: ramos anteriores de L1–L3. Ilíaco: nervio femoral (L2, L3) (p. 592).
- **Acción principal:** Principal flexor de la cadera; flexiona el tronco hacia adelante si el fémur está fijo (p. 592).
- **Páginas exactas:** pp. 592–594.

#### `biceps-femoris` (Bíps Femoral)
- **Tipo:** `muscle`
- **Origen:** Cabeza larga: tuberosidad isquiática; Cabeza corta: labio lateral de la línea áspera del fémur (p. 598).
- **Inserción:** Cara lateral de la cabeza del peroné (p. 598).
- **Inervación:** Cabeza larga: división tibial del nervio ciático (L5, S1, S2); Cabeza corta: división peronea común del nervio ciático (L5, S1, S2) (p. 598).
- **Acción principal:** Extensión de la cadera y flexión de la rodilla; rotación lateral de la rodilla flexionada (p. 598).
- **Páginas exactas:** pp. 598, 601.

---

## 5) Cues técnicos y fallos comunes en ejercicios de Cadera

### Ejercicio: Hip Thrust / Peso Muerto / Sentadilla (Extensión de Cadera)
- **Cues técnicos:**
  - Iniciar la extensión de cadera mediante la contracción activa consciente del glúteo mayor sin arquear la columna lumbar.
  - Mantener las rodillas empujando ligeramente hacia afuera (abducción/rotación externa activa) para reclutar el glúteo medio y prevenir el colapso en valgo.
- **Fallos comunes:**
  - Sustituir la extensión de cadera con hiperextensión lumbar (dominancia de erector spinae por inhibición del glúteo mayor).
  - Colapso de rodillas hacia adentro (valgo dinámico) por debilidad del glúteo medio.

---

## 6) Rehab / Prehab y Manejo del Dolor

### Condición: Síndrome del Piriforme (Piriformis Syndrome)
- **Etiología:** Compresión del `sciatic-nerve` a su paso por el foramen isquiático mayor debajo (o a través) del músculo `piriformis` hipertrófico o espasmódico.
- **Sintomatología:** Dolor en la nalga con irradiación por la cara posterior del muslo y pierna (pseudo-ciática).
- **Prehab:** Estiramiento en aducción y rotación interna de cadera flexionada a 90°; fortalecimiento de abductores y rotadores externos.

### Condición: Choque Femoroacetabular (FAI - Femoroacetabular Impingement)
- **Cam Type:** Prominencia ósea no esférica en la unión cabeza-cuello femoral.
- **Pincer Type:** Sobrecobertura del labrum por el borde acetabular anterior.

---

## 7) Integración en Plan Maestro OS

- **Motor de Reglas:** Utilizar `trendelenburg-sign-gluteus-medius-mechanics` para prescribir ejercicios de abducción y estabilidad unipodal (ej. clamshells, Monster Walks) cuando se detecte valgo dinámico.
- **Grafo Anatómico:** Conectar `gluteus-maximus`, `gluteus-medius`, `iliopsoas` y los isquiotibiales (`biceps-femoris`, `semitendinosus`, `semimembranosus`) con los patrones de bisagra de cadera.
