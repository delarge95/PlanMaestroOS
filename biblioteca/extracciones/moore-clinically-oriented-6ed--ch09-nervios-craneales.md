# Clinically Oriented Anatomy (6ª ed.) — Cap. 9: Nervios Craneales (NC I a NC XII) (pp. 1053–1082)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 9 — Cranial Nerves: Functional Summary, Innervation Territories & Clinical Lesions (pp. 1053–1082)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Neuroanatomía clínica / Semiología de pares craneales / Diagnóstico neurológico topográfico
- **Alcance de esta sección:**
  - Resumen funcional integral de los 12 pares craneales (NC I a NC XII) (pp. 1053–1054).
  - Forámenes craneales de salida, componentes funcionales (motor somático, motor branquial/especial, parasimpático, sensitivo general, sensitivo especial y sensitivo visceral) (pp. 1054–1075).
  - Semiología y cuadros clínicos de lesión:
    - NC I (Olfatorio: anosmia) (pp. 1054–1060).
    - NC II (Óptico: hemianopsia bitemporal vs homónima) (pp. 1061–1062).
    - NC III, IV y VI (Oculomotores: estrabismo, ptosis, pupila midriática, diplopía) (pp. 1062–1065, 1068).
    - NC V (Trigémino: reflejo corneal aferente, neuralgia) (pp. 1065–1068).
    - NC VII (Facial: parálisis de Bell vs parálisis central UMN, reflejo corneal eferente) (pp. 1068–1071).
    - NC VIII (Vestibulococlear: hipoacusia neurosensorial, vértigo) (pp. 1071–1072).
    - NC IX y X (Glosofaríngeo y Vago: reflejo nauseoso, cuerdas vocales, desviación de úvula) (pp. 1072–1075).
    - NC XI (Accesorio: trapecio y ECM) y NC XII (Hipogloso: desviación de la lengua hacia el lado lesionado) (pp. 1075–1082).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface CranialNerveSummaryContract {
  cranialNerveNumber: number; // 1 a 12
  name: string;
  cranialExitForamen: string;
  functionalModalities: ('GSE' | 'GVE_parasympathetic' | 'GSA' | 'GVA' | 'SVA_taste_smell' | 'SSA_vision_hearing' | 'SVE_branchial')[];
  primaryInnervatedStructures: string[];
  characteristicLesionSign: string;
}

export interface CranialReflexArcsContract {
  cornealReflex: {
    afferentLimb: 'Trigeminal_Nerve_V1_nasociliary';
    centralIntegration: 'Spinal_trigeminal_nucleus_and_facial_nucleus';
    efferentLimb: 'Facial_Nerve_CN_VII_orbicularis_oculi';
  };
  pupillaryLightReflex: {
    afferentLimb: 'Optic_Nerve_CN_II';
    centralIntegration: 'Pretectal_nucleus_and_Edinger_Westphal_nuclei_bilateral';
    efferentLimb: 'Oculomotor_Nerve_CN_III_sphincter_pupillae';
  };
  gagReflex: {
    afferentLimb: 'Glossopharyngeal_Nerve_CN_IX';
    centralIntegration: 'Nucleus_ambiguus';
    efferentLimb: 'Vagus_Nerve_CN_X_pharyngeal_constrictors';
  };
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `hypoglossal-nerve-tongue-deviation-rule`
- **id:** `hypoglossal-nerve-tongue-deviation-rule` | **tipo:** semiología neurológica / pares craneales
- **descripción:** El nervio hipogloso (NC XII) inerva todos los músculos intrínsecos y extrínsecos de la lengua (excepto el palatogloso). El músculo **geniogloso** protruye la lengua traccionándola hacia adelante y medialmente.
- **signo clínico:** En una lesión unilateral del NC XII (motoneurona inferior / LMN), la parálisis del geniogloso ipsilateral permite que el geniogloso sano del lado opuesto empuje sin oposición, haciendo que **la lengua se desvíe visiblemente hacia el mismo lado de la lesión ("la lengua apunta al nervio lesionado")**.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 9, pp. 1075–1080.

### Regla: `facial-nerve-bell-vs-central-stroke-forehead-sparing`
- **id:** `facial-nerve-bell-vs-central-stroke-forehead-sparing` | **tipo:** neurología clínica / diagnóstico diferencial de ACV
- **descripción:** La porción del núcleo del nervio facial que inerva los músculos de la mitad superior de la cara (**músculo frontal / frente y orbicular de los ojos**) recibe inervación corticonuclear **bilateral** desde ambas cortezas motoras, mientras que la mitad inferior recibe inervación estrictamente **contralateral**:
  - *Parálisis Facial Periférica (Parálisis de Bell / Lesión de LMN del NC VII):* Parálisis de **toda la hemicara ipsilateral**, incluyendo la frente (el paciente no puede arrugar la frente ni cerrar el ojo).
  - *Parálisis Facial Central (ACV / Ictus de motoneurona superior UMN):* Parálisis de la musculatura peribucal contralateral con **respeto de la frente ("Forehead Sparing")**, ya que la frente sigue recibiendo eferencias corticales del hemisferio no afectado.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 9, pp. 1068–1071.

---

## 4) Tabla Maestra de Pares Craneales (NC I a NC XII)

| Par Craneal | Nombre | Foramen Craneal | Funciones Principales | Signo Clínico de Lesión |
|---|---|---|---|---|
| **NC I** | Olfatorio | Forámenes de la lámina cribosa del etmoides | Olfato (Sensitivo Especial) | Anosmia |
| **NC II** | Óptico | Conducto óptico | Visión (Sensitivo Especial) | Ceguera monocular / Hemianopsia |
| **NC III** | Oculomotor | Fisura orbitaria superior | Músculos extraoculares (MR, SR, IR, IO, LPS), miosis pupilar | Ptosis, ojo "abajo y afuera", midriasis arreactiva |
| **NC IV** | Troclear / Patético | Fisura orbitaria superior | Músculo oblicuo superior | Diplopía vertical al bajar escaleras |
| **NC V** | Trigémino ($V_1, V_2, V_3$) | Fisura orbitaria superior ($V_1$), Redondo ($V_2$), Oval ($V_3$) | Sensibilidad de cara, músculos de masticación ($V_3$) | Pérdida reflejo corneal, neuralgia del trigémino |
| **NC VI** | Abducens / Motor Ocular Externo | Fisura orbitaria superior | Músculo recto lateral | Estrabismo convergente, diplopía horizontal |
| **NC VII** | Facial | Meato acústico interno $\to$ Foramen estilomastoideo | Mímica facial, gusto 2/3 anteriores lengua, lagrimación/salivación | Parálisis de Bell, pérdida gusto anterior |
| **NC VIII** | Vestibulococlear | Meato acústico interno | Audición y equilibrio | Hipoacusia neurosensorial, vértigo, acúfenos |
| **NC IX** | Glosofaríngeo | Foramen yugular | Gusto y sensibilidad 1/3 posterior lengua, seno carotídeo, deglución | Abolición del reflejo nauseoso (aferencia) |
| **NC X** | Vago / Neumogástrico | Foramen yugular | Fonación (laringe), parasimpático toracoabdominal, constrictores faríngeos | Disfonía, disfagia, úvula desviada al lado sano |
| **NC XI** | Accesorio / Espinal | Foramen yugular | Músculos Esternocleidomastoideo y Trapecio | Caída del hombro, debilidad giro cefálico |
| **NC XII** | Hipogloso | Conducto del nervio hipogloso | Músculos de la lengua | Desviación lingual hacia el lado de la lesión |

---

## 5) Integración en Plan Maestro OS

1. **Protocolo de Detección de ACV / FAST (`src/components/clinical/`):**
   - Utilizar `facial-nerve-bell-vs-central-stroke-forehead-sparing` para discriminar con precisión si una asimetría facial es de origen periférico benigno (Bell) o central de emergencia neurológica (ACV isquémico).
2. **Evaluación de Pares Craneales en TCE:**
   - Incorporar los reflejos pupilar, corneal y oculomotor en la lista de chequeo de traumatismo craneoencefálico de Plan Maestro OS.
