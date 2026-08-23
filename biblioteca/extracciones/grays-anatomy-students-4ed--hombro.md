# Gray's Anatomy for Students (4ª ed.) — Región Hombro y Miembro Superior Proximal (pp. 697–776)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 7 — Upper Limb: Conceptual Overview, Shoulder, Posterior Scapular Region, Axilla & Brachial Plexus (pp. 697–776)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Anatomía humana macroscópica / anatomía clínica / biomecánica del miembro superior
- **Población objetivo:** Estudiantes de ciencias de la salud, medicina, kinesiología y biomecánica deportiva
- **Alcance de esta sección:** Complejo articular del hombro (articulaciones GH, AC, SC y mecanismo escapulotorácico), fosa axilar, paredes y contenidos de la axila, manguito rotador, musculatura escapulohumeral y toracobraquial, plexo braquial (raíces C5–T1 a ramos terminales), espacios neurovasculares (cuadrangular, triangular, intervalo) y aplicaciones clínicas (impingement, luxación GH, parálisis de Erb/Klumpke).

---

## 2) Contratos y entidades

### 2.1 Mapeo a entidades del sistema (`DomainModel` / `anatomyGraph`)

- **Articulaciones del complejo articular:**
  - `glenohumeral-joint` (GH): diartrosis esférica (triaxial), cápsula laxa, rodete glenoideo (labrum).
  - `acromioclavicular-joint` (AC): diartrosis plana, disco fibrocartilaginoso articular, ligamento coracoclavicular (conoide y trapezoide).
  - `sternoclavicular-joint` (SC): diartrosis en silla de montar (multiaxial), único nexo óseo entre miembro superior y esqueleto axial.
  - `scapulothoracic-mechanism`: seudoarticulación deslizante fascia-músculo (serrato anterior / subescapular).

- **Estructuras neurales clave (Plexo Braquial):**
  - Raíces (C5, C6, C7, C8, T1) → Troncos (Superior, Medio, Inferior) → Divisiones (Anteriores, Posteriores) → Fascículos/Cordones (Lateral, Posterior, Medial).
  - Ramos terminales principales: `axillary-nerve` (C5-C6), `suprascapular-nerve` (C5-C6), `musculocutaneous-nerve` (C5-C7), `radial-nerve` (C5-T1), `median-nerve` (C5-T1), `ulnar-nerve` (C8-T1), `long-thoracic-nerve` (C5-C7).

- **Zonas de riesgo e intermedios biomecánicos:**
  - `subacromial-space`: espacio entre el arco coracoacromial y la cabeza del húmero que contiene el tendón del supraespinoso, la bursa subacromial/subdeltoidea y la cabeza larga del bíceps.
  - `quadrangular-space`: límites (terete menor, terete mayor, cabeza larga del tríceps, húmero); transmite el nervio axilar y la arteria circunfleja humeral posterior.
  - `triangular-space`: transmite la arteria circunfleja escapular.
  - `triangular-interval`: transmite el nervio radial y la arteria braquial profunda.

---

## 3) Reglas cuantitativas y protocolos

### Regla: `shoulder-scapulohumeral-rhythm-ratio`
- **id:** `shoulder-scapulohumeral-rhythm-ratio` | **tipo:** biomecánica / ROM
- **descripción:** Por cada 3° de elevación total del brazo (flexión o abducción), 2° ocurren en la articulación glenohumeral y 1° ocurre por rotación superior de la escápula sobre la pared torácica (ratio 2:1).
- **métrica principal:** `ratioGHtoST` (2.0)
- **valores numéricos:** 
  - Elevación abducción total: ~180° (GH: ~120°, Escapulotorácica: ~60°).
  - Fase inicial ("setting phase"): en los primeros 30° de abducción o 60° de flexión, el movimiento es predominantemente glenohumeral.
- **condiciones:** Movimiento fluido sin discinesia ni pinzamiento subacromial.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 698, 715–718.

### Regla: `subacromial-space-clearance-limit`
- **id:** `subacromial-space-clearance-limit` | **tipo:** seguridad tisular / riesgo
- **descripción:** La abducción del húmero en rotación medial reduce el espacio subacromial a <6 mm, comprimiendo el tendón del supraespinoso contra el ligamento coracoacromial.
- **métrica principal:** `subacromialClearanceMM` (6.0 mm a 11.0 mm normal).
- **valores numéricos:** La abducción con rotación lateral del húmero desvía el tubérculo mayor posteriormente, previniendo el pinzamiento mecánico.
- **condiciones:** Ejercicios de elevación por encima de 90° (preses verticales, elevaciones laterales).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 717, 730–733.

### Regla: `glenohumeral-stability-vacuum-force`
- **id:** `glenohumeral-stability-vacuum-force` | **tipo:** biomecánica / estabilidad
- **descripción:** La fosa glenoidea cubre solo un ~25–30% de la superficie de la cabeza humeral; la estabilidad depende en un 70% del manguito rotador y del labrum glenoideo que profundiza la fosa en un 50%.
- **métrica principal:** `glenoidCoverageRatio` (0.25–0.30).
- **valores numéricos:** La coaptación activa por el manguito rotador aplica una fuerza compresiva centrípeta de la cabeza humeral dentro de la fosa glenoidea.
- **condiciones:** Movimientos bajo carga rápida o rangos extremos.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 714–716.

---

## 4) Estructuras anatómicas de la sección

### Músculos del Manguito Rotador (Rotator Cuff)

#### `supraspinatus` (Supraespinoso)
- **Tipo:** `muscle`
- **Origen:** Fosa supraespinosa de la escápula (2/3 mediales) y fascia profunda (p. 730).
- **Inserción:** Carilla superior del tubérculo mayor del húmero (p. 730).
- **Inervación:** Nervio supraescapular (C5, C6) procedente del tronco superior del plexo braquial (p. 730, 752).
- **Acción principal:** Inicia los primeros 15° de abducción del brazo en la articulación GH; coapta y deprime la cabeza humeral para evitar su ascenso excesivo (p. 730).
- **ROM / Ángulo:** 0°–15° abducción (iniciador) y soporte continuo hasta 180°.
- **Vulnerabilidad / Errores:** Hipovascularidad cerca de la inserción ("zona crítica" de Codman); propenso a tendinopatía y ruptura por pinzamiento en abducción >90° con rotación interna.
- **Páginas exactas:** pp. 730, 732–733.

#### `infraspinatus` (Infraespinoso)
- **Tipo:** `muscle`
- **Origen:** Fosa infraespinosa de la escápula (2/3 mediales) (p. 731).
- **Inserción:** Carilla media del tubérculo mayor del húmero (p. 731).
- **Inervación:** Nervio supraescapular (C5, C6) (p. 731).
- **Acción principal:** Rotación lateral (externa) del brazo en la articulación GH; estabilizador posterior de la cabeza humeral (p. 731).
- **ROM / Ángulo:** Rotación externa hasta ~80°–90°.
- **Vulnerabilidad / Errores:** Atrofia por compresión del nervio supraescapular en la escotadura espinoglenoidea.
- **Páginas exactas:** pp. 731, 733.

#### `teres-minor` (Redondo Menor)
- **Tipo:** `muscle`
- **Origen:** 2/3 superiores del borde lateral de la cara posterior de la escápula (p. 731).
- **Inserción:** Carilla inferior del tubérculo mayor del húmero (p. 731).
- **Inervación:** Nervio axilar (C5, C6) (p. 731, 759).
- **Acción principal:** Rotación lateral (externa) del brazo y aducción débil; estabilizador posterior GH (p. 731).
- **Vulnerabilidad / Errores:** Compresión del nervio axilar en el espacio cuadrangular.
- **Páginas exactas:** pp. 731, 733, 759.

#### `subscapularis` (Subescapular)
- **Tipo:** `muscle`
- **Origen:** Fosa subescapular en la cara anterior de la escápula (p. 735).
- **Inserción:** Tubérculo menor del húmero (p. 735).
- **Inervación:** Nervios subescapulares superior e inferior (C5, C6, C7) derivados del cordón posterior (p. 735, 759).
- **Acción principal:** Potente rotador medial (interno) del brazo en la articulación GH; coaptador anterior de la cabeza humeral (p. 735).
- **Páginas exactas:** pp. 735, 738, 759.

---

### Músculos Superficiales y Motores Principales del Hombro

#### `deltoid` (Deltoides)
- **Tipo:** `muscle`
- **Origen:** Clavícula (tercio lateral), acromion (borde lateral) y espina de la escápula (borde inferior) (p. 729).
- **Inserción:** Tuberosidad deltoidea en la cara lateral del diáfisis humeral (p. 729).
- **Inervación:** Nervio axilar (C5, C6) (p. 729).
- **Acción principal:** 
  - Porción media (acromial): abducción del brazo de 15° a 90°.
  - Porción anterior (clavicular): flexión y rotación medial del brazo.
  - Porción posterior (espinal): extensión y rotación lateral del brazo (p. 729).
- **Páginas exactas:** pp. 729–730.

#### `pectoralis-major` (Pectoral Mayor)
- **Tipo:** `muscle`
- **Origen:** Cabeza clavicular (mitad medial de la clavícula) y cabeza esternocostales (esternón y cartílagos costales 1-6) (p. 736).
- **Inserción:** Cresta del tubérculo mayor (labio lateral del surco intertubercular) del húmero (p. 736).
- **Inervación:** Nervios pectorales lateral (C5, C6, C7) y medial (C8, T1) (p. 736, 756).
- **Acción principal:** Aducción y rotación medial del brazo; la cabeza clavicular flexiona el brazo extendido (p. 736).
- **Páginas exactas:** pp. 736–737.

#### `latissimus-dorsi` (Dorsal Ancho)
- **Tipo:** `muscle`
- **Origen:** Procesos espinosos T7–L5, fascia toracolumbar, cresta ilíaca y costillas inferiores 9–12 (p. 722).
- **Inserción:** Suelo del surco intertubercular del húmero (p. 722).
- **Inervación:** Nervio toracodorsal (C6, C7, C8) del cordón posterior (p. 722, 759).
- **Acción principal:** Extensión, aducción y rotación medial del brazo ("músculo del nadador") (p. 722).
- **Páginas exactas:** pp. 722, 737.

#### `serratus-anterior` (Serrato Anterior)
- **Tipo:** `muscle`
- **Origen:** Caras laterales de las costillas 1 a 8 u 9 (p. 737).
- **Inserción:** Cara anterior del borde medial de la escápula (desde el ángulo superior al inferior) (p. 737).
- **Inervación:** Nervio torácico largo (C5, C6, C7) que desciende por la pared lateral del tórax (p. 737, 751).
- **Acción principal:** Protracción de la escápula y fija la escápula contra la pared torácica; rotación superior de la escápula para abducción del brazo por encima de 90° (p. 737).
- **Vulnerabilidad:** Lesión del nervio torácico largo origina "escápula alada" (winged scapula).
- **Páginas exactas:** pp. 737, 739.

---

### Espacios Topográficos Neurovasculares de la Axila

| Espacio | Límites | Estructuras Transmitidas | Páginas |
|---|---|---|---|
| **Espacio Cuadrangular** | Sup: terete menor / subescapular; Inf: terete mayor; Medial: cabeza larga tríceps; Lateral: cuello quirúrgico del húmero | Nervio axilar y arteria/vena circunfleja humeral posterior | pp. 732, 759 |
| **Espacio Triangular** | Sup: terete menor; Inf: terete mayor; Lateral: cabeza larga tríceps | Arteria circunfleja escapular | p. 732 |
| **Intervalo Triangular** | Sup: terete mayor; Medial: cabeza larga tríceps; Lateral: diáfisis humeral | Nervio radial y arteria braquial profunda | pp. 732, 760 |

---

## 5) Cues técnicos y fallos comunes en ejercicios de Hombro

### Ejercicio: Press Militar / Press Vertical
- **Cues técnicos:**
  - Mantener los codos ligeramente por delante del plano coronal (~30° en plano escapular).
  - Activar serrato anterior para asegurar la rotación superior completa de la escápula al bloquear arriba.
  - Rotación externa activa del húmero para centrar el tubérculo mayor por fuera del arco coracoacromial.
- **Fallos comunes:**
  - Abducción pura a 90° en plano frontal con agarre muy ancho (comprime el tendón del supraespinoso).
  - Hiperextensión lumbar por falta de flexión pura GH o acortamiento del pectoral mayor.
  - Elevación de hombros (encogimiento por trapecio superior) antes de lograr la rotación superior escapular.

### Ejercicio: Elevaciones Laterales (Lateral Raises)
- **Cues técnicos:**
  - Orientar el pulgar ligeramente hacia arriba o en posición neutra (evitar inclinar la mancuerna "sirviendo agua" con pulgar hacia abajo).
  - Elevar la mancuerna dentro del plano escapular (30° anterior al plano frontal).
- **Fallos comunes:**
  - Elevar en rotación interna estricta (provoca impingement del supraespinoso a los 90°).
  - Impulsar con balanceo del tronco sustituyendo la acción del deltoides medio.

---

## 6) Rehab / Prehab y Manejo del Dolor

### Condición: Síndrome de Pinzamiento Subacromial (Subacromial Impingement)
- **Etiología:** Compresión del tendón del supraespinoso, bursa subacromial o cabeza larga del bíceps entre el tubérculo mayor y el arco coracoacromial (acromion tipo II/III o espolón) durante la abducción/flexión.
- **Prehab / Protocolos:**
  - Fortalecimiento de rotadores externos (infraespinoso / redondo menor) para centrar y deprimir la cabeza humeral.
  - Fortalecimiento de serrato anterior y trapecio inferior para restaurar la rotación superior escapular.
  - Flexibilización del pectoral menor para corregir la inclinación anterior (tilt anterior) de la escápula.
- **Red Flags:** Incapacidad aguda para abducir el brazo ("drop arm test" positivo) que sugiere ruptura masiva del supraespinoso; dolor nocturno severo sin antecedente traumático.

---

## 7) Integración en Plan Maestro OS

- **Motor de Reglas:** Utilizar `shoulder-scapulohumeral-rhythm-ratio` para validar que las progresiones de press overhead o dominadas incluyan movilidad escapulotorácica antes de añadir carga máxima.
- **Grafo Anatómico:** Vincular `supraspinatus`, `infraspinatus`, `teres-minor` y `subscapularis` con el nodo `subacromial-space` y los ejercicios de rotación externa/interna con polea/mancuerna.
