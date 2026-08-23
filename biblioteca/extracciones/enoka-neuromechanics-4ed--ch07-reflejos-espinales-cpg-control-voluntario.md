# Neuromechanics of Human Movement (4ª ed.) — Cap. 7: Reflejos Espinales, CPGs y Control Supraespinal (pp. 249–302)

> **sourceId:** `enoka-neuromechanics-4ed`
> **Sección:** Part II: Chapter 7 — Voluntary Movement: Spinal Reflexes, Renshaw Cells, CPGs & Supraspinal Motor Control (pp. 249–302)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autor:** Roger M. Enoka (University of Colorado at Boulder)

---

## 1) Metadatos

- **Libro:** Neuromechanics of Human Movement
- **Edición y Año:** 4ª edición (2008 / Human Kinetics)
- **Disciplina:** Neurobiología del control motor / Circuitos reflejos espinales / Vías supraespinales y cerebelo
- **Alcance de esta sección:**
  - Circuitos reflejos espinales:
    - Reflejo miotático monosináptico y Reflejo de Hoffmann (H-Reflex) (pp. 249–256).
    - Inhibición recíproca mediada por interneuronas Ia (pp. 256–260).
    - Inhibición recurrente mediada por **Células de Renshaw** (pp. 260–264).
    - Inhibición autógena del OTG (interneurona Ib) e inhibición presináptica (pp. 264–270).
    - Reflejo flexor de retirada y reflejo extensor cruzado (pp. 270–272).
  - Generadores Centrales de Patrones (CPG - Central Pattern Generators) en la locomoción humana (pp. 272–288).
  - Control motor supraespinal: corteza motora primaria (M1), área premotora (PMA), área motora suplementaria (SMA) y tracto corticoespinal (pp. 288–294).
  - Rol de los Ganglios Basales (vía directa facilitadora vs vía indirecta inhibidora) y del Cerebelo (comparador de error en tiempo real y copia de eferencia) (pp. 294–302).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export type SpinalReflexCircuitType = 
  | 'monosynaptic-stretch-Ia'
  | 'hoffmann-H-reflex'
  | 'reciprocal-inhibition-Ia'
  | 'recurrent-inhibition-renshaw'
  | 'autogenic-inhibition-Ib'
  | 'presynaptic-inhibition'
  | 'flexor-crossed-extensor';

export interface SpinalCircuitContract {
  circuitType: SpinalReflexCircuitType;
  primaryAfferent: 'Group_Ia' | 'Group_Ib' | 'Group_II' | 'Group_III_IV' | 'none';
  interneuronsInvolved: ('Ia-inhibitory' | 'Ib-inhibitory' | 'Renshaw-cell' | 'GABAergic-presynaptic' | 'none');
  synapticLatencyMS: number; // ~1.5 a 2.0 ms monosinaptico vs 3.0 a 5.0 ms polisinaptico
  functionalRole: string;
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `renshaw-cell-recurrent-inhibition-gain-control`
- **id:** `renshaw-cell-recurrent-inhibition-gain-control` | **tipo:** neurofisiología / modulación de descarga
- **descripción:** Las ramas colaterales axónicas recurrentes de las motoneuronas alfa hacen sinapsis colinérgicas excitatorias con interneuronas inhibitorias glicinérgicas llamadas **Células de Renshaw**. Las células de Renshaw envían proyecciones inhibitorias retrógradas a la misma motoneurona que las activó y a sus motoneuronas sinergistas.
- **función de control:** Actúa como un regulador de ganancia de retroalimentación negativa que previene la sincronización descontrolada, limita la frecuencia de disparo máxima a niveles fisiológicos estables y reduce la variabilidad del temblor motor.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 260–264.

### Regla: `hoffmann-reflex-h-max-to-m-max-ratio`
- **id:** `hoffmann-reflex-h-max-to-m-max-ratio` | **tipo:** neurodiagnóstico / excitabilidad espinal
- **descripción:** El reflejo de Hoffmann (H-reflex) es el análogo eléctrico del reflejo de estiramiento monosináptico. El ratio entre la amplitud del reflejo H máximo y la onda M máxima ($\text{Ratio}\ H_{\text{max}} / M_{\text{max}}$) cuantifica la fracción del pool de motoneuronas que puede ser activada reflexivamente sin modulación supraespinal.
- **valores numéricos:** 
  - Músculo Sóleo en reposo: $H_{\text{max}} / M_{\text{max}} \approx 0.50\text{--}0.70$ (50% a 70% del pool reclutable).
  - Durante el entrenamiento de fuerza explosiva / calentamiento neuromuscular: el ratio $H_{\text{max}} / M_{\text{max}}$ aumenta significativamente, reflejando menor inhibición presináptica y mayor excitabilidad del pool de motoneuronas.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 251–256.

---

## 4) Circuitos de Control Motor Supraespinal

1. **Vías Corticoespinales:** El 85–90% de las fibras del tracto corticoespinal decusan a nivel de las pirámides bulbares formando el **tracto corticoespinal lateral**, el cual establece conexiones monosinápticas directas con las motoneuronas alfa que controlan los músculos distales de la mano y los pies (fraccionamiento del movimiento fino) (p. 289).
2. **El Cerebelo como Comparador de Error:** Recibe una "copia de eferencia" (motor command copy) desde la corteza motora a través de las fibras musgosas, y simultáneamente recibe la aferencia propioceptiva real desde los husos y receptores articulares a través del tracto espinocerebeloso. Las fibras trepadoras procedentes de la oliva inferior transmiten la señal de error, permitiendo al cerebelo ajustar en milisegundos la trayectoria motora y consolidar el aprendizaje motor (pp. 299–302).

---

## 5) Integración en Plan Maestro OS

1. **Módulo de Aprendizaje de Habilidades (`src/data/skills/`):**
   - Incorporar la teoría del comparador cerebeloso y la modulación de reflejos espinales para estructurar las progresiones técnicas de calistenia y gimnasia en fases de adquisición coordinativa (fase asociativa $\to$ fase autónoma).
2. **Grafo Anatómico:** Conectar las redes CPG espinales lumbosacras con el motor de prescripción de patrones de marcha y carrera.
