# Gray's Anatomy for Students (4ª ed.) — Tobillo, Pierna y Pie (pp. 644–696)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 6 — Lower Limb: Leg, Ankle Joint, Subtalar Joint, Arches of the Foot & Foot Intrinsic Muscles (pp. 644–696)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Anatomía humana macroscópica / kinesiología del pie y tobillo
- **Alcance de esta sección:** Compartimentos de la pierna (anterior, lateral, posterior superficial y profundo), articulación talocrural (tobillo), articulación subtalar (talocalcánea), articulaciones del mediopié y antepié, ligamentos laterales (ATFL, CFL, PTFL) y ligamento deltoideo medial, arcos del pie (longitudinal medial, longitudinal lateral, transverso), aponeurosis plantar, mecanismo de molinete ("windlass mechanism"), túnel tarsiano e inervación sensitiva y motora distal (nervios peroneo profundo, peroneo superficial, tibial, plantar medial y plantar lateral).

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Articulaciones del Tobillo y Pie:**
  - `talocrural-joint` (tobillo): trocleartrosis (uniaxial) entre la mortaja tibiofibular y el astrágalo (talo); permite dorsiflexión y plantarflexión.
  - `subtalar-joint`: articulación diartrodial entre astrágalo y calcáneo; permite inversión (supinación) y eversión (pronación).
  - `transverse-tarsal-joint` (Chopart): articulaciones talonavicular y calcaneocuboidea.

- **Estructuras Estabilizadoras y Pasivas:**
  - `anterior-talofibular-ligament` (ATFL): ligamento lateral del tobillo más débil y vulnerable a esguinces por inversión en plantarflexión.
  - `calcaneofibular-ligament` (CFL): estabilizador lateral en posición neutra o dorsiflexión.
  - `deltoid-ligament`: complejo ligamentoso medial muy resistente (partes tibionavicular, tibiocalcánea, tibiotalar anterior y posterior).
  - `plantar-fascia` (aponeurosis plantar): banda de tejido conectivo denso que soporta el arco longitudinal medial.
  - `windlass-mechanism`: tensión mecánica de la aponeurosis plantar generada por la extensión (dorsiflexión) de las articulaciones metatarsofalángicas (MTP), acortando la distancia entre el calcáneo y las cabezas metatarsales para elevar el arco y convertir el pie en una palanca rígida durante el despegue.

---

## 3) Reglas cuantitativas y protocolos

### Regla: `ankle-dorsiflexion-range-norms`
- **id:** `ankle-dorsiflexion-range-norms` | **tipo:** ROM / evaluación
- **descripción:** Rango de movimiento pasivo y activo de la articulación talocrural.
- **métrica principal:** `dorsiflexionDegrees`
- **valores numéricos:** 
  - ROM normal de dorsiflexión: ~20° (rango 15°–25°).
  - Mínimo funcional para marcha normal: ~10° de dorsiflexión con la rodilla extendida.
  - Mínimo para sentadilla profunda sin compensación: ≥15°–20°.
  - ROM normal de plantarflexión: ~50°.
- **condiciones:** Evaluación con goniómetro o prueba "Weight-Bearing Lunge Test" (WBLT).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 644–648, 676–680.

---

## 4) Estructuras anatómicas de la sección

### Músculos de la Pierna y Pie

#### `tibialis-anterior` (Tibial Anterior)
- **Tipo:** `muscle`
- **Origen:** Cóndilo lateral de la tibia y 2/3 superiores de la cara lateral de la tibia (p. 630).
- **Inserción:** Cara medial e inferior del cuneiforme medial y base del 1er metacarpiano (p. 630).
- **Inervación:** Nervio peroneo profundo (L4, L5) (p. 630).
- **Acción principal:** Dorsiflexión del tobillo e inversión del pie; soporta el arco longitudinal medial (p. 630).
- **Vulnerabilidad:** Su parálisis provoca "foot drop" (pie caído) y marcha en estepaje.
- **Páginas exactas:** pp. 630–632.

#### `fibularis-longus` / `marcant-peroneus-longus` (Peroneo Largo)
- **Tipo:** `muscle`
- **Origen:** Cabeza y 2/3 superiores de la cara lateral del peroné (p. 633).
- **Inserción:** Cruza la planta del pie para insertarse en la base del 1er metatarsiano y cuneiforme medial (p. 633).
- **Inervación:** Nervio peroneo superficial (L5, S1) (p. 633).
- **Acción principal:** Eversión del pie, plantarflexión débil y mantiene el arco transverso del pie (p. 633).
- **Páginas exactas:** pp. 633–635.

#### `tibialis-posterior` (Tibial Posterior)
- **Tipo:** `muscle`
- **Origen:** Membrana interósea y caras posteriores contiguas de la tibia y el peroné (p. 637).
- **Inserción:** Tuberosidad del escafoides (navicular), cuneiformes, cuboides y bases de los metatarsianos 2–4 (p. 637).
- **Inervación:** Nervio tibial (L4, L5) (p. 637).
- **Acción principal:** Inversión del pie, plantarflexión y dinámicamente soporta el arco longitudinal medial (p. 637).
- **Páginas exactas:** pp. 637–640.

---

## 5) Cues técnicos y fallos comunes en ejercicios de Pie y Tobillo

### Ejercicio: Sentadilla / Salto (Trópode del Pie y Apoyo)
- **Cues técnicos:**
  - Mantener el peso distribuido activamente en el "trípode del pie": 1ª cabeza metatarsal, 5ª cabeza metatarsal y calcáneo.
  - Enganchar el `windlass-mechanism` mediante la garra ligera activa de los dedos para estabilizar el arco plantar durante el despegue.
- **Fallos comunes:**
  - Colapso del arco longitudinal medial (hiperpronación / pie plano valgo dinámico) que induce rotación interna de la tibia y valgo de rodilla.

---

## 6) Rehab / Prehab y Manejo del Dolor

### Condición: Esguince Lateral de Tobillo (Ankle Sprain)
- **Etiología:** Inversión forzada del pie en plantarflexión. El ligamento lesionado con mayor frecuencia es el **ATFL** (anterior talofibular ligament), seguido del **CFL**.
- **Prehab:** Entrenamiento propioceptivo en plato de equilibrio / superficie inestable; fortalecimiento de los músculos eversores (`fibularis-longus` y `brevis`).

### Condición: Fascitis Plantar (Plantar Fasciitis)
- **Etiología:** Microtrauma repetitivo y sobreuso en el origen calcáneo de la `plantar-fascia`.
- **Prehab:** Estiramiento de la fascia plantar utilizando el `windlass-mechanism` (extensión pasiva del dedo gordo); estiramiento del tríceps sural (sóleo y gemelos).

---

## 7) Integración en Plan Maestro OS

- **Motor de Reglas:** Utilizar `ankle-dorsiflexion-range-norms` para evaluar si la falta de profundidad en la sentadilla se debe a restricción del tobillo, recomendando elevación de talón temporal mientras se realiza movilidad de dorsiflexión.
- **Grafo Anatómico:** Conectar `plantar-fascia`, `tibialis-anterior`, `tibialis-posterior` y `fibularis-longus` con la biomecánica del arco plantar y el ciclo de marcha.
