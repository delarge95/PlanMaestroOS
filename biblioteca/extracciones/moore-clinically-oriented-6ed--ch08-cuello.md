# Clinically Oriented Anatomy (6ª ed.) — Cap. 8: Cuello y Fascias Cervicales (pp. 981–1052)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 8 — Neck: Hyoid Bone, Deep Cervical Fascia, Triangles of Neck, Prevertebral Muscles & Viscera (pp. 981–1052)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Anatomía topográfica del cuello / Cirugía de cabeza y cuello / Biomecánica prevertebral y dolor cervical
- **Alcance de esta sección:**
  - Hueso hioides (cuerpo, astas mayor y menor) y vértebras cervicales (pp. 982–985).
  - Capas de la fascia cervical profunda: lámina de revestimiento (superficial), lámina pretraqueal, lámina prevertebral (vaina axilar) y **Vaina Carotídea** (pp. 985–989).
  - El espacio retrofaríngeo ("espacio peligroso" del cuello con comunicación directa al mediastino posterior) (p. 988).
  - Músculo Esternocleidomastoideo (ECM / NC XI) y su acción biomecánica (pp. 989–992).
  - **Triángulo Cervical Posterior (Lateral):** límites, suelo, contenido (NC XI vulnerable, troncos del plexo braquial, arteria subclavia) (pp. 992–999).
  - **Triángulo Cervical Anterior:** subdivisiones (submentoniano, submandibular, carotídeo y muscular/omotraqueal), seno carotídeo/glomus carotídeo (NC IX/X) y el asa cervical (C1–C3) para los músculos infrahioideos (pp. 999–1012).
  - Músculos prevertebrales (longus colli, longus capitis) y escalenos (anterior, medio, posterior) con el triángulo interescalénico (pp. 1012–1018).
  - Vísceras cervicales: glándula tiroides, laringe, faringe y esófago (pp. 1018–1052).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface CarotidSheathContract {
  contentsMedialToLateral: ['Common_or_Internal_Carotid_Artery', 'Vagus_Nerve_CN_X_posterior', 'Internal_Jugular_Vein'];
  carotidSinusBaroreceptorInnervation: 'Glossopharyngeal_Nerve_CN_IX';
  carotidBodyChemoreceptorInnervation: ['CN_IX', 'CN_X'];
}

export interface InterscaleneTriangleContract {
  anteriorBoundary: 'anterior-scalene-muscle';
  posteriorBoundary: 'middle-scalene-muscle';
  inferiorBoundary: 'first-rib';
  transitingStructures: ['Brachial_Plexus_Trunks_C5_T1', 'Subclavian_Artery'];
  excludedStructure: 'Subclavian_Vein_passes_anterior_to_anterior_scalene';
  pathology: 'thoracic-outlet-syndrome-TOS';
}

export interface DeepNeckFlexorStabilityContract {
  muscles: ['longus-colli', 'longus-capitis', 'rectus-capitis-anterior'];
  innervation: 'cervical-ventral-rami-C1-C6';
  biomechanicalRole: 'cervical-lordosis-flattening-and-segmental-craniocervical-stabilization';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `interscalene-triangle-thoracic-outlet-syndrome`
- **id:** `interscalene-triangle-thoracic-outlet-syndrome` | **tipo:** biomecánica / síndrome compresivo
- **descripción:** El espacio o triángulo interescalénico está delimitado por el músculo escaleno anterior (adelante), escaleno medio (atrás) y la 1ª costilla (abajo). A través de este estrecho desfiladero pasan exclusivamente los **troncos del plexo braquial (C5–T1) y la arteria subclavia** (la vena subclavia discurre anterior al escaleno anterior).
- **síndrome del desfiladero torácico (TOS):** La hipertrofia de los escalenos (frecuente en levantadores de pesas o lanzadores), una costilla cervical supernumeraria o bandas fibrosas comprimen el tronco inferior del plexo braquial (C8–T1) y la arteria subclavia, provocando dolor neuropático, parestesias en borde cubital de la mano y debilidad de la musculatura intrínseca, agravado al elevar el brazo en abducción (Test de Adson / Wright positivo).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 8, pp. 996–998, 1012–1016.

### Regla: `retropharyngeal-danger-space-mediastinitis`
- **id:** `retropharyngeal-danger-space-mediastinitis` | **tipo:** anatomía fascial / urgencia infecciosa
- **descripción:** El **espacio retrofaríngeo** es un plano de deslizamiento de tejido areolar laxo situado entre la fascia bucofaríngea (recubriendo faringe y esófago) y la lámina prevertebral de la fascia cervical profunda. Se extiende continuamente desde la base del cráneo hasta el mediastino superior y posterior (a nivel de T4 o bifurcación traqueal).
- **vía de propagación:** Los abscesos retrofaríngeos (secundarios a faringitis bacterianas complicadas o traumatismos por cuerpos extraños) pueden propagarse gravitacionalmente en sentido inferior directamente hacia el tórax, causando **mediastinitis aguda necrosante**, una complicación de altísima mortalidad.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 8, pp. 988–989.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Vulnerabilidad del Nervio Accesorio Espinal (NC XI, p. 994):** En el triángulo cervical posterior, el NC XI discurre muy superficialmente, inmediatamente por debajo de la lámina de revestimiento de la fascia profunda. Es la estructura neurológica más frecuentemente lesionada de forma iatrogénica durante biopsias ganglionares o cirugías de cuello $\to$ caída del hombro, atrofia del trapecio e incapacidad para abducir el brazo por encima de los $90^\circ$.
- **Hipersensibilidad del Seno Carotídeo (p. 1004):** El seno carotídeo (en la dilatación de la bifurcación carotídea) contiene barorreceptores de presión inervados por el nervio del seno carotídeo (ramo del NC IX). La presión externa súbita sobre esta zona (ej. masajes o cuellos de camisa excesivamente apretados) desencadena un reflejo vagal masivo que produce bradicardia severa, vasodilatación, hipotensión y síncope transitorio.

---

## 5) Integración en Plan Maestro OS

1. **Rehabilitación Cervical y Corrección Postural:**
   - Incorporar la activación de los **flexores cervicales profundos** (*longus colli* y *longus capitis*) en protocolos de corrección de la postura de cabeza adelantada (Forward Head Posture) y dolor cervical crónico.
2. **Screening de Atrapamiento Neurovascular:**
   - Mapear el Síndrome del Desfiladero Torácico (TOS) en la evaluación de dolor de miembro superior que no responde a protocolos estándar de hombro o codo.
