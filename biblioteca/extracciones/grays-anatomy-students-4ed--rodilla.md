# Gray's Anatomy for Students (4ª ed.) — Rodilla y Fosa Poplítea (pp. 615–643)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 6 — Lower Limb: Knee Joint, Menisci, Ligaments & Popliteal Fossa (pp. 615–643)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Anatomía humana macroscópica / biomecánica de la articulación de la rodilla
- **Alcance de esta sección:** Articulación tibiofemoral (bicondílea), articulación patelofemoral (troclear), meniscos medial y lateral, ligamentos intraarticulares (cruzados anterior y posterior - ACL y PCL) y extraarticulares (colaterales medial y lateral - MCL y LCL, patelar, poplíteo oblicuo y arqueado), fosa poplítea (límites y contenido neurovascular), y mecanismo de bloqueo/desbloqueo articular ("screw-home mechanism").

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Estructuras Articulares e Intraarticulares:**
  - `tibiofemoral-joint`: diartrosis bicondílea (modificada en bisagra), permite flexión/extensión y rotación axial secundaria en flexión.
  - `patellofemoral-joint`: articulación plana/troclear; la rótula actúa como hueso sesamoideo aumentando el brazo de palanca del cuádriceps en un 30–50%.
  - `medial-meniscus`: menisco fibrocartilaginoso en forma de "C", menos móvil por estar unido firmemente al ligamento colateral medial.
  - `lateral-meniscus`: menisco casi circular en forma de "O", más móvil por no estar unido al ligamento colateral lateral.
  - `anterior-cruciate-ligament` (ACL): se inserta en el área intercondílea anterior de la tibia y asciende posterolateralmente hacia la cara medial del cóndilo lateral del fémur; previene el desplazamiento anterior de la tibia sobre el fémur.
  - `posterior-cruciate-ligament` (PCL): se inserta en el área intercondílea posterior de la tibia y asciende anteromedialmente hacia la cara lateral del cóndilo medial del fémur; previene el desplazamiento posterior de la tibia sobre el fémur.

- **Mecanismos Biomecánicos:**
  - `screw-home-mechanism`: rotación lateral de la tibia sobre el fémur en los últimos 5°–10° de extensión completa de la rodilla en cadena abierta (o rotación medial del fémur en cadena cerrada) para "bloquear" pasivamente la articulación. El músculo `popliteus` desbloquea la rodilla rotando lateralmente el fémur (o medialmente la tibia).

---

## 3) Reglas cuantitativas y protocolos

### Regla: `knee-q-angle-thresholds`
- **id:** `knee-q-angle-thresholds` | **tipo:** anatómico / evaluación
- **descripción:** Ángulo Q (cuádriceps) formado por la línea entre la espina ilíaca anterosuperior (ASIS) y el centro de la rótula, y la línea entre el centro de la rótula y la tuberosidad tibial.
- **métrica principal:** `qAngleDegrees`
- **valores numéricos:** 
  - Hombres: 10°–14° (promedio ~12°).
  - Mujeres: 15°–18° (promedio ~15–17°; mayor por pelvis más ancha).
  - Ángulo Q >20°: incrementa significativamente la fuerza vectorial lateral sobre la rótula, predisponiendo a subluxación patelar y síndrome de dolor patelofemoral (PFPS).
- **condiciones:** Bipedestación con rodillas extendidas.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 615–620.

### Regla: `acl-strain-angle-range`
- **id:** `acl-strain-angle-range` | **tipo:** seguridad tisular / riesgo
- **descripción:** La tensión sobre el ligamento cruzado anterior (ACL) es máxima cerca de la extensión completa (0°–30° de flexión de rodilla) bajo contracción aislada del cuádriceps.
- **métrica principal:** `aclStrainPercent`
- **valores numéricos:** 
  - 0°–30° flexión: tensión máxima en cadena abierta con contracción de cuádriceps.
  - >60° flexión: disminución sustancial de la tensión en el ACL; los isquiotibiales actúan como sinergistas protectores del ACL tirando de la tibia hacia posterior.
- **condiciones:** Rehabilitación temprana de reconstrucción del ACL.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 618–624.

---

## 4) Estructuras anatómicas de la sección

### Músculos Específicos de la Rodilla y Fosa Poplítea

#### `popliteus` (Poplíteo)
- **Tipo:** `muscle`
- **Origen:** Cara lateral del cóndilo lateral del fémur y menisco lateral (p. 626).
- **Inserción:** Cara posterior de la tibia, por encima de la línea del músculo sóleo (p. 626).
- **Inervación:** Nervio tibial (L4, L5, S1) (p. 626).
- **Acción principal:** Desbloquea la rodilla extendida rotando el fémur lateralmente sobre la tibia fija (o rotando la tibia medialmente sobre el fémur); retrae el menisco lateral durante la flexión (p. 626).
- **Páginas exactas:** pp. 626–628.

#### `gastrocnemius` (Gastrocnemio / Gemelos)
- **Tipo:** `muscle`
- **Origen:** Cabeza medial: cara posterior del cóndilo medial del fémur; Cabeza lateral: cara posterolateral del cóndilo lateral del fémur (p. 629).
- **Inserción:** Cara posterior del calcáneo mediante el tendón de Aquiles (tendón calcáneo) (p. 629).
- **Inervación:** Nervio tibial (S1, S2) (p. 629).
- **Acción principal:** Plantarflexión del pie y flexor secundario de la articulación de la rodilla (p. 629).
- **Páginas exactas:** pp. 626, 629–631.

---

## 5) Cues técnicos y fallos comunes en ejercicios de Rodilla

### Ejercicio: Sentadilla / Zancadas (Lunge)
- **Cues técnicos:**
  - Mantener las rodillas alineadas en la misma dirección que el 2º y 3º metatarsiano durante todo el recorrido.
  - Asegurar la co-activación de isquiotibiales y glúteos para contrarrestar la cizalladura anterior provocada por el cuádriceps.
- **Fallos comunes:**
  - Valgo dinámico (colapso de la rodilla hacia adentro), aumentando la tensión en el ACL y MCL.
  - Avance excesivo de la rodilla por delante de los dedos con elevación del talón (aumenta las fuerzas de compresión patelofemorales).

---

## 6) Rehab / Prehab y Manejo del Dolor

### Condición: Lesión del Ligamento Cruzado Anterior (ACL Tear)
- **Etiología:** Desaceleración no repentina, desaceleración con pivote, aterrizaje con rodilla en valgo y ligera flexión/rotación.
- **Tríada de O'Donoghue (Tríada Infeliz):** Lesión combinada de **ACL**, **MCL** y **Menisco Medial** (provocada por una fuerza severa en valgo + flexión + rotación externa).
- **Prehab:** Entrenamiento neuromuscular pliométrico (Jump-land training) enfatizando el aterrizaje con flexión de rodilla suave y control de valgo; fortalecimiento excéntrico de isquiotibiales.

---

## 7) Integración en Plan Maestro OS

- **Motor de Reglas:** Utilizar `acl-strain-angle-range` para restringir extensiones de rodilla pesadas en máquina entre 0° y 30° en etapas tempranas post-reconstrucción de ACL.
- **Grafo Anatómico:** Conectar `popliteus`, `medial-meniscus`, `lateral-meniscus` y los cuatro ligamentos principales (`ACL`, `PCL`, `MCL`, `LCL`) con la estabilidad de rodilla en el motor de evaluación física.
