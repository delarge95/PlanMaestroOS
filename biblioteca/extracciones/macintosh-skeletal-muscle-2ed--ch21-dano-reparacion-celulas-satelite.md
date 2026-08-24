# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 21: Daño Muscular (EIMD), Células Satélite y Reparación (pp. 313–321)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part III: Chapter 21 — Injury and Repair: Contraction-Induced Muscle Damage (EIMD), DOMS, Repeated Bout Effect & Satellite Cell Regeneration (pp. 313–321)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Fisiopatología del daño muscular / Regeneración celular / Inmunología del ejercicio
- **Alcance de esta sección:**
  - Daño muscular inducido por ejercicio (EIMD): fase mecánica primaria (disrupción del disco Z - Z-disc streaming, micro-rupturas del sarcolema) vs fase biológica secundaria (influjo de $\text{Ca}^{2+}$, proteólisis por calpaínas, respuesta inflamatoria M1 $\to$ M2) (pp. 313–316).
  - Agujetas / Dolor muscular de aparición tardía (DOMS: pico a las 24–72 h) mediado por sensibilización de nociceptores Grupo III/IV (pp. 316–318).
  - El Efecto de la Carga Repetida (Repeated Bout Effect - RBE) y sus bases biomecánicas/neurales (pp. 318–319).
  - Cascada de regeneración muscular mediada por células satélite (Pax7/MyoD) y formación de miotubos de núcleos centrales (pp. 319–321).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface EIMDKineticsContract {
  domsPeakHoursPostExercise: [24, 72]; // Pico entre 24 y 72 horas
  maximalStrengthLossPercentImmediate: [20, 50]; // Caida inmediata del 20% al 50% de F0
  strengthRecoveryTimeframeDays: [3, 7]; // 3 a 7 dias para restauracion completa
  repeatedBoutEffectProtectionDurationWeeks: [4, 12]; // Proteccion dura de 4 a 12 semanas
  inflammatoryPhases: {
    neutrophilInfiltrationHours: [6, 24];
    proInflammatoryM1MacrophagesHours: [24, 48];
    antiInflammatoryM2RepairMacrophagesHours: [48, 96];
  };
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `repeated-bout-effect-protection-window`
- **id:** `repeated-bout-effect-protection-window` | **tipo:** adaptación al entrenamiento / prevención de daño
- **descripción:** Una única sesión inicial con componente excéntrico submáximo confiere un potente efecto protector ("Repeated Bout Effect" - RBE) contra el daño muscular y dolor en sesiones posteriores que persiste durante **4 a 12 semanas**.
- **mecanismos biofísicos:**
  1. *Sarcomerogénesis en serie:* La adición de sarcómeros longitudinales reduce la deformación por estiramiento de cada sarcómero individual durante la fase excéntrica.
  2. *Refuerzo conectivo miofascial:* Incremento del cross-linking de colágeno en el perimisio y endomisio.
  3. *Optimización del reclutamiento neural:* Mayor sincronización y distribución homogénea de la carga entre unidades motoras.
- **estrategia de programación:** Introducir nuevos ejercicios o picos de volumen con cargas submáximas (ej. 2 series ligeras) 7 a 10 días antes del inicio formal de un bloque de alta intensidad para inducir el RBE y prevenir el DOMS invalidante.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 21, pp. 318–319.

---

## 4) Integración en Plan Maestro OS

1. **Gestor de Micro-Cargas Nuevas (`src/lib/fitness/`):**
   - Utilizar `repeated-bout-effect-protection-window` para programar una "sesión de aclimatación" (1–2 series RPE 6) cuando el usuario cambie de programa o incorpore ejercicios no habituales.
2. **Screening de Dolor Muscular (`src/components/clinical/`):**
   - Diferenciar en el bio-feedback el dolor benigno difuso de DOMS (pico 24–48 h bilateral simétrico) de un desgarro fibrilar agudo (dolor punzante focal asimétrico inmediato).
