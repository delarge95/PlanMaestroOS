# Clinically Oriented Anatomy (6ª ed.) — Cap. 5: Miembro Inferior (pp. 508–669)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 5 — Lower Limb: Hip, Thigh, Knee, Popliteal Fossa, Leg, Ankle, Foot & Gait (pp. 508–669)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Anatomía del aparato locomotor / Biomecánica de cadera, rodilla y tobillo / Análisis de la marcha y traumatología deportiva
- **Alcance de esta sección:**
  - Esqueleto del miembro inferior: hueso coxal, fémur (ángulo de inclinación normal $126^\circ$, anteversión $12^\circ$), rótula, tibia, fíbula y huesos del tarso/metatarso (pp. 512–531).
  - Biomecánica del Ciclo de la Marcha (60% fase de apoyo vs 40% fase de oscilación) y Signo de Trendelenburg (pp. 542–545).
  - Muslo anterior (N. Femoral L2–L4) y medial (N. Obturador L2–L4); Triángulo femoral de Scarpa (**NAVEL**) (pp. 545–562).
  - Región glútea y muslo posterior (N. Glúteo Superior L4–S1, N. Glúteo Inferior L5–S2, N. Ciático L4–S3) y músculo piriforme (pp. 562–584).
  - Fosa poplítea y pierna: compartimento anterior (N. Fibular Profundo / pie caído), lateral (N. Fibular Superficial) y posterior (N. Tibial / Tríceps Sural) (pp. 584–609).
  - Pie: arcos plantares longitudinal medial (ligamento resorte calcaneonavicular), lateral y transverso; fascia plantar (pp. 609–626).
  - Articulaciones: cadera (Ligamento Iliofemoral de Bigelow - el más fuerte del cuerpo humano), rodilla (LCA, LCP, menisco medial adherido al LCM vs menisco lateral móvil, poplíteo que desbloquea la rodilla) y tobillo (complejo ligamentoso lateral: ATFL, CFL, PTFL) (pp. 626–669).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface LowerLimbBiomechanicsContract {
  femoralNeckShaftAngleDegrees: 126; // Coxa vara <120°, Coxa valga >135°
  femoralAnteversionAngleDegrees: 12; // Anteversion excesiva >15-20°, Retroversion <8°
  femoralTriangleContentsLateralToMedial: ['Femoral_Nerve', 'Femoral_Artery', 'Femoral_Vein', 'Femoral_Canal_Lymphatics']; // NAVEL
  kneeUnlockerMuscle: 'popliteus-laterally-rotates-femur-5-degrees-on-fixed-tibia';
  ankleSprainPrimaryLigament: 'anterior-talofibular-ligament-ATFL-inversion-plantarflexion';
  trendelenburgSignMechanism: 'contralateral-pelvic-drop-due-to-ipsilateral-gluteus-medius-weakness-superior-gluteal-nerve';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `trendelenburg-test-gluteus-medius-stabilization`
- **id:** `trendelenburg-test-gluteus-medius-stabilization` | **tipo:** biomecánica / evaluación funcional
- **descripción:** Durante el apoyo monopodal en la marcha o en carrera, los músculos **glúteo medio y glúteo menor** del lado en apoyo (inervados por el nervio glúteo superior L4–S1) deben contraerse con una fuerza de $\sim 2.0\text{ a }3.0\times\text{BW}$ para mantener la pelvis horizontal y evitar la caída del lado contralateral no apoyado.
- **signo positivo:** Si el glúteo medio del lado en apoyo es débil o está denervado, la pelvis cae visiblemente hacia el lado opuesto sin apoyo (**Signo de Trendelenburg positivo**). Para compensar y mantener el centro de masa sobre el pie de apoyo, el paciente inclina el tronco hacia el lado de la lesión (marcha de Duchenne / marcha miopática en sacudida).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 5, pp. 542–544, 564–568.

### Regla: `popliteus-knee-unlocking-mechanism`
- **id:** `popliteus-knee-unlocking-mechanism` | **tipo:** anatomía funcional / biomecánica articular
- **descripción:** En extensión completa de la rodilla, la articulación se "bloquea" mecánicamente mediante la rotación medial del fémur sobre la tibia fija (o rotación lateral de la tibia), tensando los ligamentos cruzados y colaterales en posición de máximo empaquetamiento (*close-packed position*).
- **iniciador de la flexión:** El músculo **poplíteo** (inervado por el nervio tibial L4–S1) es el motor primario que inicia la flexión de rodilla al **rotar lateralmente el fémur $\sim 5^\circ$ sobre la tibia fija** en cadena cinética cerrada (o rotar medialmente la tibia en cadena abierta), relajando los ligamentos y permitiendo la flexión.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 5, pp. 586–588, 634–640.

### Regla: `ankle-inversion-sprain-atfl-vulnerability`
- **id:** `ankle-inversion-sprain-atfl-vulnerability` | **tipo:** traumatología deportiva / esguinces
- **descripción:** El mecanismo lesional típico del esguince de tobillo es la **inversión forzada con flexión plantar**. En esta posición, el **Ligamento Talofibular Anterior (ATFL)** es el primero y más vulnerable en lesionarse (representa $>80\text{--}85\%$ de todos los esguinces de tobillo). Si la fuerza persiste, se desgarran secuencialmente el ligamento Calcaneofibular (CFL) y finalmente el Talofibular Posterior (PTFL).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 5, pp. 647–652.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Tríada Desgraciada de O'Donoghue ("Unhappy Triad", p. 642):** Impacto violento en la cara lateral de la rodilla flexionada con pie fijo (fuerza en valgo + rotación externa) produce la rotura simultánea de: (1) Ligamento Cruzado Anterior (LCA), (2) Ligamento Colateral Medial (LCM) y (3) Menisco Medial (debido a la íntima adherencia anatómica entre el LCM y el borde periférico del menisco medial).
- **Síndrome de Atrapamiento del Nervio Fibular Común (p. 603):** El nervio fibular común cruza directamente sobre la cara lateral del cuello de la fíbula, cubierto solo por piel y fascia. Traumatismos directos o yesos apretados en esta zona causan parálisis del nervio fibular común $\to$ pérdida total de dorsiflexión y eversión del pie (**Pie Caído / Steppage Gait** y anestesia en dorso del pie).
- **Síndrome del Piriforme (p. 574):** Espasmo, hipertrofia o variantes anatómicas del músculo piriforme comprimen el nervio ciático en el foramen infrapiriforme, causando ciatalgia y dolor glúteo profundo irradiado sin patología discal lumbar.

---

## 5) Integración en Plan Maestro OS

1. **Grafo Anatómico (`anatomyGraph.ts`):**
   - Mapear la función del Poplíteo como desbloqueador de rodilla y del Glúteo Medio como estabilizador pélvico frontal en todos los ejercicios monopoidales (zancadas, sentadilla búlgara, step-ups).
2. **Motor de Prescripción de Prehabilitación:**
   - Incorporar ejercicios de control excéntrico de tobillo y propiocepción para proteger el ligamento ATFL en atletas con antecedentes de esguince de tobillo.
