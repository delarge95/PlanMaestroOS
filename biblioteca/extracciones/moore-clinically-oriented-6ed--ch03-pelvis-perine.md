# Clinically Oriented Anatomy (6ª ed.) — Cap. 3: Pelvis, Suelo Pélvico y Periné (pp. 326–438)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 3 — Pelvis and Perineum: Pelvic Girdle, Pelvic Diaphragm, Levator Ani, Neurovasculature & Perineum (pp. 326–438)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Anatomía uroginecológica y pélvica / Biomecánica del suelo pélvico / Incontinencia y estabilidad lumbopélvica
- **Alcance de esta sección:**
  - Cintura pélvica: huesos ilion, isquion, pubis, sacro y articulaciones sacroilíacas y sínfisis púbica (pp. 327–338).
  - Ligamentos sacrotuberoso y sacroespinoso (delimitación de los forámenes ciáticos mayor y menor) (pp. 330–337).
  - Suelo pélvico (Diafragma Pélvico): músculo elevador del ano (**puborrectal**, **pubococcígeo**, **iliococcígeo**) y músculo coccígeo (pp. 338–343).
  - Inervación y vascularización: arteria ilíaca interna, plexo sacro (L4–S4), nervio pudendo (S2–S4 en el canal de Alcock) y nervios esplácnicos pélvicos parasimpáticos (S2–S4) (pp. 349–361).
  - Vísceras pélvicas: vejiga urinaria, uretra, recto, órganos genitales internos masculinos y femeninos (pp. 362–401).
  - Periné: triángulo urogenital (membrana perineal), triángulo anal (fosas isquioanales) y el **Cuerpo Perineal** (centro tendinoso del periné) (pp. 402–438).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface PelvicFloorContract {
  levatorAniSubdivisions: ('puborectalis' | 'pubococcygeus' | 'iliococcygeus');
  fecalContinenceMechanism: 'puborectalis-puborectal-sling-maintains-80-degree-anorectal-angle';
  synergisticCoreCoactivation: ['diaphragm', 'transversus-abdominis', 'lumbar-multifidus', 'pelvic-floor'];
  pudendalNerveRoute: 'exits-greater-sciatic-foramen-hooks-ischial-spine-enters-lesser-sciatic-foramen-Alcock-canal';
  perinealBodyAnchorMuscles: ('puborectalis' | 'bulbospongiosus' | 'superficial-transverse-perineal' | 'external-anal-sphincter');
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `puborectalis-anorectal-angle-continence-rule`
- **id:** `puborectalis-anorectal-angle-continence-rule` | **tipo:** anatomía funcional / continencia
- **descripción:** El músculo **puborrectal** forma una cincha o cabestrillo muscular en forma de "U" que rodea la unión anorrectal, traccionándola anteriormente hacia el pubis. Este tono basal muscular permanente crea el **ángulo anorrectal ($\sim 80^\circ$)**, el cual actúa como una válvula mecánica de compresión que mantiene la continencia fecal de reposo. La relajación voluntaria del puborrectal endereza el conducto anal ($>130^\circ$) permitiendo la defecación.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 3, pp. 338–342, 368–372.

### Regla: `pudendal-nerve-entrapment-alcock-canal`
- **id:** `pudendal-nerve-entrapment-alcock-canal` | **tipo:** neurología clínica / medicina del ciclismo
- **descripción:** El nervio pudendo (S2–S4) transita por el canal pudendo de Alcock (un desdoblamiento de la fascia del músculo obturador interno en la pared lateral de la fosa isquioanal). La compresión mecánica prolongada sobre el sillín de bicicleta o tras levantamientos con hipertonía del suelo pélvico causa **Neuralgia del Pudendo**: dolor perineal neuropático urente agravado al sentarse, disestesia en genitales externos y disfunción eréctil/esfinteriana.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 3, pp. 357–360, 408–412.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Lesiones del Suelo Pélvico y Prolapso de Vísceras Pélvicas (POP, p. 345):** El desgarro del músculo puborrectal o del cuerpo perineal durante el parto vaginal compromete la integridad del diafragma pélvico, provocando el ensanchamiento del hiato urogenital y el descenso/prolapso de la vejiga (cistocele), recto (rectocele) o útero.
- **El Cuerpo Perineal como Pilar Estructural (p. 405):** Es el punto central de anclaje donde convergen 6 músculos del periné y del suelo pélvico. Su disrupción debilita la base del diafragma pélvico.

---

## 5) Integración en Plan Maestro OS

1. **Entrenamiento de Fuerza y Presión Intraabdominal (IAP):**
   - Integrar la pre-activación del suelo pélvico en los patrones de sentadilla pesada y peso muerto para evitar fugas de presión intraabdominal o incontinencia por esfuerzo.
2. **Ergonomía Deportiva (Ciclismo):**
   - Incorporar `pudendal-nerve-entrapment-alcock-canal` para alertar sobre la correcta selección del ancho del sillín de bicicleta basado en la distancia entre tuberosidades isquiáticas.
