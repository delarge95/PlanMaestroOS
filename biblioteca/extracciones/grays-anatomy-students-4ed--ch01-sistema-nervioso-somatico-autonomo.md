# Gray's Anatomy for Students (4ª ed.) — Capítulo 1: Sistema Nervioso Somático y Autónomo (pp. 32–51)

> **sourceId:** `grays-anatomy-students-4ed`
> **Sección:** Chapter 1 — The Body: Nervous System (CNS, PNS, Somatic, Dermatomes, Myotomes, Visceral/Autonomic & Plexuses) & Clinical Cases (pp. 32–51)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Alcance:** Micro-sección 1.3 (pp. 32–51): Sistema nervioso central (encéfalo, médula espinal, meninges y LCR), sistema nervioso periférico (12 pares craneales y 31 pares espinales), división funcional somática (aferencias cutáneas/propioceptivas, eferencias motoras, mapas de dermatomas y miotomas), división visceral/autónoma (simpático toracolumbar T1–L2 vs parasimpático craneosacro III, VII, IX, X, S2–S4), dolor referido visceral, plexos somáticos y viscerales, y correlaciones clínicas fundacionales.

---

## 1) Metadatos

- **Libro:** Gray's Anatomy for Students
- **Autores:** Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell
- **Edición y Año:** 4ª edición (2020 / Elsevier)
- **Disciplina:** Neuroanatomía descriptiva, segmentaria y funcional
- **Alcance de esta sección:**
  - Sistema nervioso central (SNC): hemisferios cerebrales, tronco del encéfalo, cerebelo, médula espinal, leptomeninges (aracnoides y piamadre), paquimeninge (duramadre) y espacio subaracnoideo con líquido cefalorraquídeo (LCR) (pp. 32–33).
  - Sistema nervioso somático: componentes sensitivo somático (GSA) y motor somático (GSE) (pp. 34–35).
  - Concepto embriológico y clínico de Dermatoma y Miotoma (pp. 35–37).
  - Sistema nervioso autónomo (SNA / visceral): cadena de dos neuronas (preganglionar y postganglionar) (pp. 37–40).
  - Sistema Simpático (Toracolumbar: T1–L2): asta intermediolateral (IML), ramos comunicantes blancos (T1–L2) vs ramos comunicantes grises (todos los 31 niveles espinales), troncos simpáticos paravertebrales y ganglios prevertebrales (pp. 41–46).
  - Sistema Parasimpático (Craneosacro): pares craneales III, VII, IX y X (vago) y nervios esplácnicos pélvicos (S2–S4); ganglios terminales en la pared de las vísceras (pp. 46–48).
  - Dolor referido visceral y convergencia viscerosomática en el asta dorsal (pp. 47–48).
  - Plexos somáticos (cervical, braquial, lumbar, sacro) vs plexos viscerales/autónomos (cardíaco, pulmonar, celíaco, mesentérico, hipogástrico) (p. 49).
  - Casos clínicos del Capítulo 1 (pp. 51–52).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export type NervousSystemDivision = 'CNS' | 'PNS-somatic' | 'PNS-sympathetic' | 'PNS-parasympathetic' | 'enteric';

export type SpinalNerveSegment = 
  | `C${1|2|3|4|5|6|7|8}`
  | `T${1|2|3|4|5|6|7|8|9|10|11|12}`
  | `L${1|2|3|4|5}`
  | `S${1|2|3|4|5}`
  | 'Co1';

export interface DermatomeDefinition {
  segment: SpinalNerveSegment;
  autonomousSensoryPoint: string; // Punto de mínima superposición
  sensoryTerritoryDescription: string;
  adjacentOverlappingSegments: SpinalNerveSegment[];
  hasAxialLine: boolean; // Ej. C4-T2 en el miembro superior
}

export interface MyotomeDefinition {
  segment: SpinalNerveSegment;
  primaryJointMovement: string;
  keyTargetMuscles: string[];
  clinicalReflexTested?: string;
}

export interface AutonomicPathwayContract {
  system: 'sympathetic' | 'parasympathetic';
  preganglionicOrigin: string; // T1-L2 IML o Núcleos Pares III, VII, IX, X, S2-S4
  ganglionLocation: 'paravertebral-trunk' | 'prevertebral' | 'terminal-intramural';
  postganglionicTarget: string;
  neurotransmitterPrimary: 'acetylcholine' | 'norepinephrine';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `dermatome-overlap-and-anesthesia-rule`
- **id:** `dermatome-overlap-and-anesthesia-rule` | **tipo:** neurología / semiología diagnóstica
- **descripción:** Cada dermatoma sensitivo presenta una amplia superposición (overlap) con los dermatomas inmediatamente superior e inferior contiguos. Por tanto, la lesión o sección de una única raíz espinal sensitiva produce disminución de la sensibilidad (hipoestesia) pero NO anestesia completa, excepto en los puntos autónomos focales centrales del dermatoma.
- **métrica principal:** `sensoryOverlapPercent` (~50% de superposición en el tronco).
- **valores numéricos:** 
  - Se requiere la pérdida de al menos 3 raíces espinales sensitivas consecutivas para producir una banda completa de anestesia cutánea total en el tronco.
  - Excepción: en las extremidades existen "líneas axiales" (axial lines) donde dermatomas no contiguos se tocan sin superposición (ej. entre C4 y T2 en el tórax superior/brazo; entre L1 y S2 en el muslo posterior).
- **condiciones:** Examen de sensibilidad táctil y dolorosa en radiculopatías.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 1, pp. 35–36.

### Regla: `sympathetic-rami-communicantes-distribution`
- **id:** `sympathetic-rami-communicantes-distribution` | **tipo:** neuroanatomía / sistema autónomo
- **descripción:** Los ramos comunicantes blancos (mielinizados, que transportan fibras preganglionares desde el asta IML al tronco simpático) existen ÚNICAMENTE entre los niveles espinales **T1 y L2**. En contraste, los ramos comunicantes grises (no mielinizados, que devuelven fibras postganglionares a los nervios espinales para inervar vasos, glándulas sudoríparas y músculos piloerectores de la pared corporal) existen en **los 31 pares de nervios espinales**.
- **métrica principal:** `whiteRamiLevels` (14 niveles: T1–L2) vs `grayRamiLevels` (31 niveles: C1–Co1).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 1, pp. 41–44.

---

## 4) Estructuras anatómicas y funcionales

### 1. Sistema Nervioso Central y Meninges
- **Meninges craneoespinales:**
  1. *Duramadre:* Capa externa fibrosa resistente. En el cráneo tiene dos láminas (perióstica y meníngea); en la columna forma el saco dural espinal rodeado por el espacio epidural rico en grasa y plexos venosos vertebrales (p. 33).
  2. *Aracnoides:* Membrana intermedia avascular adherida a la cara interna de la duramadre.
  3. *Piamadre:* Capa celular fina y altamente vascularizada adherida íntimamente a la superficie del encéfalo y médula espinal (p. 33).
- **Espacio Subaracnoideo:** Espacio real entre la aracnoides y la piamadre que contiene trabéculas aracnoideas, vasos sanguíneos cerebrales y Líquido Cefalorraquídeo (LCR), amortiguando el SNC (p. 33).

---

### 2. Anatomía del Dolor Referido Visceral (Referred Pain)
- **Mecanismo Neurobiológico:** Las fibras aferentes viscerales del dolor (GVA) viajan retrógradamente junto con las fibras simpáticas hasta alcanzar los mismos niveles espinales del asta dorsal que recogen las fibras sensitivas somáticas (GSA) de la pared corporal (convergencia en neuronas de segundo orden del tracto espinotalámico) (p. 47).
- **Interpretación Cortical:** El córtex somatosensorial no puede distinguir el origen real del estímulo y proyecta el dolor al dermatoma somático correspondiente a ese nivel espinal (p. 47).
- **Ejemplos Canónicos:**
  - *Infarto de Miocardio / Isquemia Cardíaca:* Aferencias cardíacas entran en T1–T4/T5 → Dolor referido a la región subesternal, cara medial del brazo izquierdo y axila (dermatomas T1–T2).
  - *Vesícula Biliar / Hígado (Irritación Diafragmática):* Aferencias frénicas entran en C3–C5 → Dolor referido en la punta del hombro derecho (dermatomas C3–C5).
  - *Apendicitis Temprana:* Aferencias viscerales apendiculares entran en T10 → Dolor sordo inicial periumbilical (dermatoma T10); al inflamarse el peritoneo parietal somático, el dolor se localiza en la fosa ilíaca derecha (punto de McBurney).

---

## 5) Cues técnicos y evaluación clínica

### Diferenciación entre Dolor Somático y Dolor Visceral Referido
- **Dolor Somático:** Bien localizado, agudo, empeora con la palpación directa o movimiento mecánico articular.
- **Dolor Visceral Referido:** Sordo, profundo, mal delimitado, no reproducible con la palpación mecánica de los músculos locales, a menudo acompañado de síntomas neurovegetativos (náuseas, sudoración, taquicardia).

---

## 6) Rehab / Prehab y Manejo del Dolor

### Alerta de Bandera Roja (Red Flag): Dolor Torácico o de Espalda no Mecánico
- Si un usuario reporta dolor en la región dorsal interescapular (T4–T7) o en el hombro izquierdo que **no cambia** con el movimiento de la columna ni con la contracción muscular activa, debe considerarse la posibilidad de origen visceral (aórtico, cardíaco o gástrico) y derivarse de inmediato a atención médica.

---

## 7) Integración en Plan Maestro OS

1. **Screening Clínico (`src/components/clinical/`):**
   - Integrar la regla de `dermatome-overlap-and-anesthesia-rule` y los patrones de dolor referido visceral en el triaje de síntomas del bio-feedback diario.
2. **Grafo de Conocimiento:**
   - Vincular los nervios somáticos y viscerales con sus raíces medulares (`T1-L2` simpático; craneosacro parasimpático) para respaldar las explicaciones del motor RAG.
