# Clinically Oriented Anatomy (6ª ed.) — Cap. 1: Tórax y Vísceras Torácicas (pp. 71–180)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 1 — Thorax: Thoracic Wall, Respiratory Mechanics, Pleurae, Lungs, Mediastinum & Heart (pp. 71–180)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Anatomía regional del tórax / Biomecánica ventilatoria / Cardiología y Neumología clínica
- **Alcance de esta sección:**
  - Esqueleto torácico: 12 costillas (verdaderas 1–7, falsas 8–10, flotantes 11–12), cartílagos costales, esternón y Ángulo de Louis (plano transverso T4/T5) (pp. 72–80).
  - Biomecánica ventilatoria: movimiento en "brazo de bomba" (diámetro AP) vs "asa de cubo" (diámetro transversal) (pp. 81–86).
  - Musculatura torácica y paquete neurovascular intercostal (orientación **VAN** de superior a inferior en el surco costal) (pp. 86–96).
  - Mamas, ligamentos suspensorios de Cooper y drenaje linfático axilar (>75%) (pp. 98–106).
  - Pleuras (parietal vs visceral), recesos costodiafragmáticos y árbol traqueobronquial (bronquio principal derecho más ancho, corto y vertical) (pp. 108–127).
  - Mediastino (superior, anterior, medio, posterior), pericardio y cavidades cardíacas (pp. 127–151).
  - Circulación coronaria (dominancia derecha ~85% vs izquierda ~15%) y sistema de conducción eléctrico del corazón (pp. 151–160).
  - Vasos del mediastino posterior: aorta torácica, sistema ácigos, conducto torácico, nervios vagos y frénicos (C3–C5) (pp. 160–180).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface ThoracicWallBiomechanicsContract {
  pumpHandleMovementRibs: [1, 2, 3, 4, 5, 6]; // Aumenta diametro anteroposterior
  bucketHandleMovementRibs: [7, 8, 9, 10];     // Aumenta diametro transversal lateral
  primaryInspiratoryMuscle: 'diaphragm-phrenic-nerve-C3-C5';
  intercostalNeurovascularSequenceSuperoInferior: ['Intercostal_Vein', 'Intercostal_Artery', 'Intercostal_Nerve']; // VAN
}

export interface CoronaryCirculationContract {
  rightCoronaryArteryBranches: ('SA-nodal' | 'right-marginal' | 'posterior-interventricular-PDA' | 'AV-nodal')[];
  leftCoronaryArteryBranches: ('anterior-interventricular-LAD' | 'circumflex' | 'left-marginal')[];
  cardiacDominancePopulationPercentage: {
    rightDominantPDAfromRCA: 85; // 85% poblacion
    leftDominantPDAfromCircumflex: 15; // 15% poblacion
  };
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `thoracocentesis-needle-placement-safety-rule`
- **id:** `thoracocentesis-needle-placement-safety-rule` | **tipo:** anatomía quirúrgica / procedimiento clínico
- **descripción:** Para drenar líquido pleural (toracocentesis) o realizar un bloqueo anestésico intercostal, la aguja o tubo torácico debe insertarse **estrictamente sobre el borde superior de la costilla inferior**, evitando el borde inferior de la costilla superior donde discurre el paquete neurovascular (**VAN**: Vena, Arteria, Nervio intercostal) alojado en el surco costal.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 1, pp. 91–96, 120.

### Regla: `sternal-angle-of-louis-anatomical-landmarks`
- **id:** `sternal-angle-of-louis-anatomical-landmarks` | **tipo:** anatomía de superficie / plano de referencia
- **descripción:** El Ángulo Esternal de Louis (unión manubrio-esternal a nivel del disco intervertebral T4/T5) define el plano horizontal de referencia torácica fundamental:
  1. Articulación del 2º cartílago costal (referencia para contar costillas y auscultación cardíaca).
  2. Bifurcación de la tráquea (Carina traqueal).
  3. Comienzo y finalización del arco aórtico.
  4. Límite divisorio entre el mediastino superior y el mediastino inferior.
  5. Entrada de la vena ácigos en la vena cava superior (VCS).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 1, pp. 78–81, 127.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Tórax Batiente (Flail Chest, p. 83):** Múltiples fracturas costales en dos o más puntos de costillas contiguas producen un segmento parietal torácico libre con **respiración paradójica** (el segmento se hunde hacia adentro durante la inspiración y protruye hacia afuera en la espiración), provocando hipoxia severa y compromiso ventilatorio.
- **Aspiración de Cuerpos Extraños (p. 120):** Debido a que el bronquio principal derecho es más ancho, más corto y desciende con una trayectoria más vertical que el izquierdo, los cuerpos extraños aspirados (o sondas endotraqueales mal posicionadas) penetran casi invariablemente en el pulmón derecho.
- **Infarto de Miocardio y Territorios Coronarios (pp. 151–158):**
  - Oclusión de la arteria interventricular anterior (**LAD** - "arteria de la muerte súbita", 40–50% de infartos): necrosis de la pared anterior del ventrículo izquierdo y dos tercios anteriores del tabique interventricular.
  - Oclusión de la arteria coronaria derecha (**RCA**, 30–40%): necrosis de la pared inferior del VI, ventrículo derecho y nodos SA/AV (bradicardias y bloqueos cardíacos).

---

## 5) Integración en Plan Maestro OS

1. **Grafo Anatómico (`anatomyGraph.ts`):**
   - Incorporar la inervación del diafragma (N. Frénico C3–C5) y los movimientos de bomba/asa de cubo para parametrizar los ejercicios de respiración diafragmática y bracing abdominal.
2. **Sistema de Red Flags Clínicas:**
   - Mapear el dolor torácico anginoso y la respiración paradójica en los protocolos de triaje de urgencias médicas.
