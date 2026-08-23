# Clinically Oriented Anatomy (6ª ed.) — Cap. 2: Abdomen y Vísceras Abdominales (pp. 181–325)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 2 — Abdomen: Anterolateral Wall, Rectus Sheath, Inguinal Canal, Peritoneum, Viscera & Posterior Wall (pp. 181–325)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Anatomía abdominal clínica / Mecánica de la pared del core y presión intraabdominal (IAP) / Gastroenterología quirúrgica
- **Alcance de esta sección:**
  - Pared abdominal anterolateral: capas fasciales (Camper y Scarpa), músculos oblicuo externo, oblicuo interno, transverso del abdomen, recto del abdomen y piramidal (pp. 184–193).
  - Estructura de la Vaina de los Rectos (línea arqueada de Douglas) y Línea Alba (pp. 187–191).
  - Canal inguinal (4 cm), orificios profundo/superficial, contenido (cordón espermático / ligamento redondo) y hernias inguinales (indirectas vs directas en el Triángulo de Hesselbach) (pp. 202–210).
  - Peritoneo (cavidad peritoneal, omento mayor/menor, foramen epiploico de Winslow) (pp. 217–226).
  - Vísceras digestivas: estómago, duodeno, yeyuno, íleon, ciego, apéndice vermiforme (Punto de McBurney) y colon (pp. 226–263).
  - Hígado (segmentación de Couinaud I–VIII), vesícula biliar (Triángulo de Calot), páncreas y bazo (pp. 263–289).
  - Pared abdominal posterior: músculos psoas mayor, ilíaco y cuadrado lumbar; plexo lumbar (T12–L4) y diafragma con sus hiatos (T8 Vena Cava, T10 Esófago, T12 Aorta) (pp. 306–325).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface AbdominalWallCoreContract {
  transversusAbdominisActivation: 'feedforward-anticipatory-IAP-stabilization';
  rectusSheathArcuateLineTransition: {
    aboveArcuateLine: 'posterior_wall_contains_internal_oblique_and_transversus_aponeurosis';
    belowArcuateLine: 'all_aponeuroses_pass_anterior_leaving_only_transversalis_fascia_posteriorly';
  };
  inguinalHerniaDifferential: {
    indirectHernia: 'enters_deep_ring_lateral_to_inferior_epigastric_artery_congenital';
    directHernia: 'protrudes_through_Hesselbach_triangle_medial_to_inferior_epigastric_artery_acquired';
  };
  diaphragmaticAperturesVertebralLevels: {
    cavalForamen: 'T8';
    esophagealHiatus: 'T10';
    aorticHiatus: 'T12';
  };
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `hesselbach-triangle-inguinal-hernia-boundaries`
- **id:** `hesselbach-triangle-inguinal-hernia-boundaries` | **tipo:** anatomía quirúrgica / diagnóstico diferencial
- **descripción:** El Triángulo Inguinal de Hesselbach es la zona de debilidad de la pared abdominal posterior por donde protruyen las **hernias inguinales directas**:
  - *Límite Lateral:* Arteria y vena epigástricas inferiores.
  - *Límite Medial:* Borde lateral del músculo recto del abdomen (línea semilunar).
  - *Límite Inferior:* Ligamento inguinal de Poupart.
  - *Suelo:* Fascia transversalis.
- **diferenciación clínica:** Las hernias directas son mediales a los vasos epigástricos inferiores; las hernias indirectas pasan por el anillo inguinal profundo situándose laterales a dichos vasos.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 2, pp. 202–206.

### Regla: `mcburneys-point-appendicitis-palpation`
- **id:** `mcburneys-point-appendicitis-palpation` | **tipo:** semiología clínica / dolor abdominal
- **descripción:** La base anatómica del apéndice vermiforme se proyecta sobre la pared abdominal en el **Punto de McBurney**, localizado en la unión del tercio lateral con los dos tercios mediales de la línea que une la Espina Ilíaca Anterosuperior (EIAS) derecha con el ombligo. El dolor agudo a la descompresión brusca en este punto (Signo de Blumberg) indica peritonitis localizada secundaria a apendicitis aguda.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 2, pp. 248–250.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Meralgia Parestésica (p. 312):** Atrapamiento por compresión del **nervio cutáneo femoral lateral** (L2–L3) al pasar por debajo del ligamento inguinal medial a la EIAS (debido a cinturones pesados de levantamiento de pesas, obesidad o ropa muy ajustada), provocando dolor urente, entumecimiento y disestesia en la cara anterolateral del muslo sin déficit motor.
- **Diástasis de Rectos y Hernias de la Línea Alba (p. 197):** La separación de los músculos rectos del abdomen por estiramiento de la línea alba durante el embarazo o por aumento crónico no coordinado de la presión intraabdominal. No es una hernia verdadera si no hay orificio fascial, pero compromete la transferencia de fuerza del core.

---

## 5) Integración en Plan Maestro OS

1. **Motor de Estabilidad del Core (`src/lib/fitness/`):**
   - Utilizar la mecánica del músculo transverso del abdomen y la fascia toracolumbar para programar ejercicios de anti-extensión, anti-rotación y bracing intraabdominal (IAP).
2. **Sistema de Detección de Red Flags:**
   - Incorporar el mapeo del Punto de McBurney y la evaluación de atrapamientos del nervio cutáneo femoral lateral en el módulo de triaje.
