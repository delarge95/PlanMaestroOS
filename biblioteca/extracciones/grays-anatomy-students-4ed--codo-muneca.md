# Gray's Anatomy for Students (4ª ed.) — Codo, Antebrazo, Muñeca y Mano (pp. 777–851)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 7 — Upper Limb: Arm, Elbow Joint, Cubital Fossa, Forearm & Hand (pp. 777–851)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Anatomía humana macroscópica / kinesiología del miembro superior distal
- **Alcance de esta sección:** Complejo del codo (articulaciones humerocubital, humerorradial, radiocubital proximal), fosa cubital, compartimentos anterior (flexor/pronador) y posterior (extensor/supinador) del antebrazo, articulación radiocarpiana, huesos del carpo, túnel carpiano, canal de Guyon, tabaquera anatómica, compartimentos intrínsecos de la mano (tenar, hipotenar, lumbricales, interóseos) e inervación motora/sensitiva distal (nervios mediano, cubital y radial).

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Articulaciones del codo y antebrazo:**
  - `humeroulnar-joint`: trocleartrosis (uniaxial, flexión/extensión).
  - `humeroradial-joint`: diartrosis condílea en la cabeza del cóndilo (capítulum) humeral.
  - `proximal-radioulnar-joint` y `distal-radioulnar-joint`: trocoides (pivote) conectadas por la membrana interósea; permiten pronación/supinación.
  - `wrist-radiocarpal-joint`: diartrosis elipsoidea/condílea (biaxial) entre radio distal + disco articular y escafoides, semilunar y piramidal.

- **Túneles y Pasajes Anatómicos:**
  - `carpal-tunnel`: espacio delimitado por los huesos del carpo (surco carpal) y el retináculo flexor (ligamento carpal transverso). Transmite 9 tendones (4 FDS, 4 FDP, 1 FPL) y el `median-nerve`.
  - `guyon-canal` (túnel cubital palmar): pasaje fibroóseo entre el pisiforme y el gancho del ganchoso; transmite el `ulnar-nerve` y la arteria cubital.
  - `cubital-fossa`: fosa triangular anterior al codo. Transmite de medial a lateral: nervio mediano, arteria braquial (bifurcación en radial y cubital), tendón del bíceps braquial y nervio radial (profundo).
  - `anatomical-snuffbox` (tabaquera anatómica): límites (EPL medialmente; EPB y APL lateralmente); suelo formado por escafoides y trapecio; contiene la arteria radial.

---

## 3) Reglas cuantitativas y protocolos

### Regla: `elbow-carrying-angle-norms`
- **id:** `elbow-carrying-angle-norms` | **tipo:** anatómico / evaluación
- **descripción:** Ángulo en el plano frontal formado por el eje longitudinal del húmero y del antebrazo con el codo en extensión completa y supinación ("carrying angle" o ángulo de carga).
- **métrica principal:** `carryingAngleDegrees`
- **valores numéricos:** 
  - Hombres: ~10°–15°.
  - Mujeres: ~15°–20° (mayor por pelvis más ancha y menor masa muscular).
  - Cubitus valgus: >20°; Cubitus varus (gunstock deformity): <5°.
- **condiciones:** Evaluación estática en bipedestación o supinación forzada.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 777–780.

### Regla: `carpal-tunnel-intracarpal-pressure-threshold`
- **id:** `carpal-tunnel-intracarpal-pressure-threshold` | **tipo:** seguridad tisular / riesgo
- **descripción:** La presión intersticial dentro del túnel carpiano aumenta de 2–10 mmHg en posición neutra a >30–50 mmHg durante la flexión o extensión extrema de la muñeca, induciendo isquemia del nervio mediano.
- **métrica principal:** `carpalTunnelPressureMMHg` (<15 mmHg neutro; >30 mmHg patológico).
- **valores numéricos:** La flexión de muñeca >30° o extensión >30° multiplica la presión intracarpiana por 3–6 veces.
- **condiciones:** Ejercicios de empuje con muñeca en hiperextensión o supinación/flexión forzada con carga.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 806–810.

---

## 4) Estructuras anatómicas de la sección

### Músculos del Brazo Anterior y Codo

#### `biceps-brachii` (Bíceps Braquial)
- **Tipo:** `muscle`
- **Origen:** Cabeza corta (apófisis coracoides de la escápula); Cabeza larga (tubérculo supraesférico de la escápula) (p. 764).
- **Inserción:** Tuberosidad del radio y aponeurosis bicipital (lacertus fibrosus) a la fascia del antebrazo (p. 764).
- **Inervación:** Nervio musculocutáneo (C5, C6, C7) (p. 764, 755).
- **Acción principal:** Potente supinador del antebrazo (especialmente con el codo flexionado a 90°); flexor principal del codo; flexor débil de la articulación GH (p. 764).
- **Páginas exactas:** pp. 764, 778–780.

#### `brachialis` (Braquial Anterior)
- **Tipo:** `muscle`
- **Origen:** Mitad distal de la cara anterior del húmero (p. 765).
- **Inserción:** Tuberosidad de la cúbito y apófisis coronoides (p. 765).
- **Inervación:** Nervio musculocutáneo (C5, C6) (p. 765).
- **Acción principal:** Principal flexor del codo en todas las posiciones del antebrazo (pronación, supinación o neutro) ("el caballo de batalla de la flexión del codo") (p. 765).
- **Páginas exactas:** pp. 765, 778.

#### `brachioradialis` (Braquiorradial / Supinador Largo)
- **Tipo:** `muscle`
- **Origen:** Cresta supracondílea lateral del húmero (2/3 proximales) (p. 799).
- **Inserción:** Cara lateral de la apófisis estiloides del radio (p. 799).
- **Inervación:** Nervio radial (C5, C6) antes de su división (p. 799, 760).
- **Acción principal:** Flexión del codo cuando el antebrazo está en posición semipronada (neutra) (p. 799).
- **Páginas exactas:** pp. 799, 801.

---

### Músculos del Antebrazo (Flexores y Extensores)

#### `pronator-teres` (Pronador Redondo)
- **Tipo:** `muscle`
- **Origen:** Cabeza humeral (epicóndilo medial) y cabeza cubital (apófisis coronoides) (p. 790).
- **Inserción:** Rugosidad en la mitad de la cara lateral del diáfisis radial (p. 790).
- **Inervación:** Nervio mediano (C6, C7) (p. 790).
- **Acción principal:** Pronación del antebrazo y ayuda en la flexión del codo (p. 790).
- **Páginas exactas:** pp. 790, 792.

#### `flexor-carpi-radialis` (Flexor Radial del Carpo / Palmar Mayor)
- **Tipo:** `muscle`
- **Origen:** Epicóndilo medial del húmero (tendón flexor común) (p. 790).
- **Inserción:** Base del 2º y 3º metacarpianos (p. 790).
- **Inervación:** Nervio mediano (C6, C7) (p. 790).
- **Acción principal:** Flexión y abducción (desviación radial) de la muñeca (p. 790).
- **Páginas exactas:** pp. 790, 793.

#### `flexor-carpi-ulnaris` (Flexor Cubital del Carpo / Cubital Anterior)
- **Tipo:** `muscle`
- **Origen:** Cabeza humeral (epicóndilo medial) y cabeza cubital (olécranon y borde posterior del cúbito) (p. 791).
- **Inserción:** Hueso pisiforme, y mediante ligamentos gancho del ganchoso y base del 5º metacarpiano (p. 791).
- **Inervación:** Nervio cubital (C7, C8, T1) (p. 791, 757).
- **Acción principal:** Flexión y aducción (desviación cubital) de la muñeca (p. 791).
- **Páginas exactas:** pp. 791, 794.

#### `extensor-carpi-radialis-longus` y `brevis` (Extensores Radiales del Carpo)
- **Tipo:** `muscle`
- **Origen:** Longus: cresta supracondílea lateral; Brevis: epicóndilo lateral del húmero (p. 799).
- **Inserción:** Longus: base del 2º metacarpiano; Brevis: base del 3º metacarpiano (p. 799).
- **Inervación:** Nervio radial (C6, C7) / ramo profundo del nervio radial (p. 799).
- **Acción principal:** Extensión y abducción de la muñeca (fundamentales para estabilizar la muñeca durante el agarre de fuerza) (p. 799).
- **Páginas exactas:** pp. 799–800.

---

## 5) Cues técnicos y fallos comunes en ejercicios de Codo y Antebrazo

### Ejercicio: Curl de Bíceps (Barra o Mancuerna)
- **Cues técnicos:**
  - Mantener los codos alineados a los lados del torso sin desplazarlos hacia adelante para mantener el momento puramente sobre los flexores del codo.
  - Para enfocar el bíceps braquial, mantener la supinación completa durante la fase concéntrica.
  - Para enfocar el braquial anterior y braquiorradial, usar agarre neutro (curl martillo) o en pronación (curl inverso).
- **Fallos comunes:**
  - Hiperextender la muñeca en la cima del movimiento (recarga los extensores e inhibe el agarre).
  - Elevar los hombros o desplazar los codos hacia adelante (involucra el deltoides anterior por falta de aislamiento).

### Ejercicio: Pushdown de Tríceps / Flexiones de Codo
- **Cues técnicos:**
  - Mantener los codos fijos al lado de las costillas durante toda la extensión.
  - Evitar la desviación cubital o flexión de muñeca extrema al bloquear abajo.

---

## 6) Rehab / Prehab y Manejo del Dolor

### Condición: Epicondilitis Lateral ("Codo de Tenista")
- **Etiología:** Tendinopatía por sobreuso microtraumático en el origen común de los extensores (principalmente `extensor-carpi-radialis-brevis`) en el epicóndilo lateral.
- **Prehab / Protocolos:**
  - Ejercicios excéntricos progresivos para extensores de muñeca (FlexBar / carga progresiva).
  - Optimizar la fuerza de agarre neutra y evitar la flexión/extensión repetitiva extrema bajo carga.

### Condición: Síndrome del Túnel Carpiano (Carpal Tunnel Syndrome)
- **Etiología:** Compresión del `median-nerve` dentro del túnel carpiano por inflamación de las vainas sinoviales de los tendones flexores.
- **Sintomatología:** Parestesias y adormecimiento en la cara palmar del pulgar, índice, medio y mitad lateral del anular; atrofia de la eminencia tenar.
- **Prehab:** Férula nocturna en posición neutra (0° flexión/extensión) para mantener la presión intracarpiana mínima (<15 mmHg).

---

## 7) Integración en Plan Maestro OS

- **Motor de Reglas:** Incorporar la regla `carpal-tunnel-intracarpal-pressure-threshold` para prevenir que la app prescriba ejercicios con muñeca en máxima hiperextensión cargada (ej. push-ups en piso) a usuarios con molestia tenar o entumecimiento mediano, sugiriendo agarre en paralelas/mancuernas neutras.
- **Grafo Anatómico:** Conectar `biceps-brachii`, `brachialis` y `brachioradialis` con las variantes de agarre (supinado, neutro, pronado) en el dataset de ejercicios.
