# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 11: Contracción Muscular, Acoplamiento E-C y Mecánica (pp. 151–174)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part II: Chapter 11 — Muscle Contraction: Sliding Filament Theory, Cross-Bridge Mechanics, Excitation-Contraction Coupling, Length-Tension & Force-Velocity Relationships (pp. 151–174)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Biofísica contráctil / Mecánica del sarcómero / Fisiología del ejercicio
- **Población objetivo:** Biomecánicos, preparadores físicos de alto rendimiento, fisioterapeutas y desarrolladores de motores de simulación motora
- **Alcance de esta sección:**
  - Teoría del filamento deslizante (Sliding Filament Theory de Huxley & Hanson) (pp. 151–154).
  - Ciclo de puentes cruzados de Lymn-Taylor: estados de unión débil/fuerte, hidrólisis de ATP, golpe de fuerza (power stroke: desplazamiento de ~10–12 nm y 2–5 pN por puente), liberación de $\text{P}_i$ y ADP, y estado de rigor (pp. 154–160).
  - Acoplamiento Excitación-Contracción (E-C): interacción mecánica túbulo T - retículo sarcoplásmico (DHPR $\text{Ca}_V1.1 \leftrightarrow$ RyR1), transitorio de $\text{Ca}^{2+}$ mioplasmático (50 nM reposo $\to$ 10–20 $\mu\text{M}$ pico) y regulación por el complejo Troponina-Tropomiosina (pp. 160–166).
  - Curva Tensión-Longitud activa y pasiva del sarcómero (Gordon, Huxley & Julian): rama ascendente, meseta óptima ($L_0 = 2.6\text{--}2.8\ \mu\text{m}$ en humanos), rama descendente y tensión pasiva gobernada por la titina (pp. 166–170).
  - Curva Fuerza-Velocidad concéntrica (Ecuación hiperbólica de A.V. Hill: $(F + a)(v + b) = (F_0 + a)b$) y mecánica excéntrica ($1.4\text{--}1.8 \times F_0$) (pp. 170–172).
  - Curva Potencia-Velocidad: pico de potencia mecánica ($P_{\text{max}}$) al $\sim 30\text{--}35\%$ de $V_{\text{max}}$ y $\sim 30\text{--}40\%$ de $F_0$ (pp. 172–174).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface CrossBridgeKineticsContract {
  powerStrokeDisplacementNM: number; // 10 a 12 nm por golpe de fuerza
  forcePerCrossBridgePN: number; // 2.0 a 5.0 pN
  atpConsumedPerCycle: 1;
  rigorStateOccursWhen: 'atp-depleted-nucleotide-free';
}

export interface SarcomereLengthTensionContract {
  ascendingLimbCutoffUM: 2.0; // <2.0 um (colision central de actina)
  optimalPlateauRangeUM: [2.6, 2.8]; // 2.6 a 2.8 um en humano (100% F0)
  descendingLimbZeroForceUM: 3.8; // >=3.8 um (cero solapamiento)
  passiveTensionCarrier: 'titin-molecular-spring';
}

export interface ForceVelocityContract {
  isometricMaxForceN: number; // F0 (100%)
  eccentricMaxForceN: number; // 140% a 180% de F0
  maxShorteningVelocityFLSec: number; // Vmax en longitudes de fibra por segundo (Lf/s)
  hillParameterAOverF0: number; // ~0.25 (curvatura de Hill)
  peakPowerVelocityPercentage: 0.33; // 33% de Vmax
  peakPowerForcePercentage: 0.35; // 35% de F0
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `force-velocity-hill-power-peak-rule`
- **id:** `force-velocity-hill-power-peak-rule` | **tipo:** biomecánica / potencia neuromuscular
- **descripción:** La potencia mecánica generada por el músculo esquelético ($\text{Potencia} = \text{Fuerza} \times \text{Velocidad}$) sigue una curva parabólica asimétrica derivada de la relación hiperbólica de Hill. La máxima potencia mecánica absoluta ($P_{\text{max}}$) se produce invariablemente a velocidades de acortamiento equivalentes a un tercio de la velocidad máxima ($\sim 30\text{--}35\%\ V_{\text{max}}$) con cargas correspondientes a un tercio de la fuerza isométrica máxima ($\sim 30\text{--}40\%\ F_0$).
- **métrica principal:** `optimalPowerLoadPercent` (30% a 40% de 1RM / $F_0$).
- **valores numéricos:** 
  - Entrenamiento de Potencia / Salto / Balística: cargas entre el 30% y 50% de 1RM maximizan la tasa de desarrollo de fuerza (RFD) y el output de watts.
  - Velocidad máxima de acortamiento ($V_{\text{max}}$): Fibras IIx ($\sim 4\text{--}6\ L_f/\text{s}$) $>$ Fibras IIa ($\sim 2.5\text{--}3.5\ L_f/\text{s}$) $>$ Fibras I ($\sim 0.8\text{--}1.2\ L_f/\text{s}$).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 11, pp. 170–174.

### Regla: `eccentric-contraction-force-enhancement`
- **id:** `eccentric-contraction-force-enhancement` | **tipo:** biomecánica / contracción excéntrica
- **descripción:** Durante el alargamiento muscular activo bajo carga (acción excéntrica), los puentes cruzados son estirados forzadamente hacia atrás antes de desprenderse mecánicamente (sin requerir hidrólisis inmediata de ATP). Esto permite al músculo generar entre un **140% y 180%** de su fuerza isométrica máxima ($1.4\text{--}1.8 \times F_0$) con un coste metabólico de oxígeno y ATP un ~70–80% menor que una contracción concéntrica de igual fuerza.
- **métrica principal:** `eccentricForceRatio` (1.4 a 1.8).
- **consecuencia:** Máxima tensión mecánica por unidad de sección transversal $\to$ estímulo primordial de mecanotransducción para la hipertrofia y mayor susceptibilidad a microdaño ultraestructural (EIMD).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 11, pp. 170–172.

### Regla: `sarcomere-length-tension-overlap-limits`
- **id:** `sarcomere-length-tension-overlap-limits` | **tipo:** biofísica / longitud-tensión
- **descripción:** La fuerza activa isométrica está directamente determinada por el número de puentes cruzados de miosina capaces de interactuar con la actina según la longitud del sarcómero ($L_s$).
- **valores numéricos (Sarcómero Humano):**
  - **$L_s < 2.0\ \mu\text{m}$ (Rama Ascendente):** Los filamentos delgados opuestos se solapan en la zona central y colisionan con el disco Z opuesto, generando resistencia interna e interfiriendo con la formación de puentes $\to$ la fuerza cae hacia el 0% a $\sim 1.27\ \mu\text{m}$.
  - **$L_s = 2.6\text{--}2.8\ \mu\text{m}$ (Meseta Óptima $L_0$):** Solapamiento perfecto de todos los puentes cruzados con los filamentos de actina a lo largo de la zona con cabezas de miosina $\to$ **100% de $F_0$**.
  - **$L_s = 2.8\text{--}3.8\ \mu\text{m}$ (Rama Descendente):** Desenganche progresivo lineal de puentes cruzados a medida que el sarcómero se estira $\to$ la fuerza activa cae a 0% a $\ge 3.8\ \mu\text{m}$.
  - **Tensión Pasiva (Titina):** Comienza a desarrollarse exponencialmente a partir de $L_s \ge 2.8\ \mu\text{m}$, protegiendo el sarcómero del estiramiento lesivo.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 11, pp. 166–170.

---

## 4) El Ciclo Bioquímico de Puentes Cruzados (Lymn-Taylor)

1. **Estado de Unión Débil (Con ADP y $\text{P}_i$):** El complejo $\text{Miosina}\cdot\text{ADP}\cdot\text{P}_i$ interactúa débilmente con la actina liberada de la inhibición de la tropomiosina por el $\text{Ca}^{2+}$ (p. 156).
2. **Liberación de Fosfato Inorgánico ($\text{P}_i$) y Golpe de Fuerza:** La transición al estado de unión fuerte gatilla la liberación inmediata del $\text{P}_i$, induciendo el giro conformacional de 45° del brazo de palanca de la miosina (**Power Stroke**), arrastrando el filamento delgado de actina $\sim 10\text{--}12\text{ nm}$ hacia el centro de la línea M con una fuerza unitaria de $\sim 2\text{--}5\text{ pN}$ (p. 158).
3. **Liberación de ADP:** Tras el golpe de fuerza, el ADP es liberado de la bolsa catalítica de la cabeza de miosina (p. 158).
4. **Estado de Rigor (Sin nucleótido):** La miosina permanece fuertemente unida a la actina en un estado de alta afinidad hasta que una nueva molécula de ATP entra en la bolsa (p. 159).
5. **Desprendimiento inducido por ATP:** La unión de una nueva molécula de ATP debilita instantáneamente la afinidad de la miosina por la actina en más de 1.000 veces, desprendiendo la cabeza de miosina (p. 159).
6. **Hidrólisis y Rearme ("Cocked State"):** La ATPasa de la miosina escinde el ATP en $\text{ADP} + \text{P}_i$, recolocando el brazo de palanca en la posición pretensada inicial de 90°, lista para el siguiente ciclo (p. 160).

---

## 5) Cues técnicos y aplicaciones al entrenamiento

### Optimización de la Curva Longitud-Tensión en Ejercicios Isométricos y Dinámicos
- En músculos biarticulares (ej. recto femoral, isquiotibiales, gemelos), la posición articular de la cadera o rodilla modifica la longitud del sarcómero ($L_s$):
  - *Insuficiencia Activa:* Ocurre cuando un músculo biarticular se acorta simultáneamente en ambas articulaciones (ej. flexión de cadera + extensión de rodilla para el recto femoral), situando sus sarcómeros en la rama ascendente ($L_s < 2.0\ \mu\text{m}$), donde la capacidad de generar fuerza se reduce drásticamente.
  - *Insuficiencia Pasiva:* Ocurre cuando el músculo se estira al máximo en ambas articulaciones (ej. extensión de cadera + flexión de rodilla), alcanzando el límite elástico pasivo que restringe el ROM antes del bloqueo articular.

---

## 6) Integración en Plan Maestro OS

1. **Calculadora de Potencia y Velocidad:** Utilizar `force-velocity-hill-power-peak-rule` para programar series de potencia balística con cargas entre el 30% y 45% de 1RM en la sección de fuerza/potencia.
2. **Motor de Selección de Ejercicios:** Aplicar la regla de insuficiencia activa/pasiva para categorizar qué ejercicios reclutan un músculo biarticular en su rango de longitud óptimo ($L_0$).
