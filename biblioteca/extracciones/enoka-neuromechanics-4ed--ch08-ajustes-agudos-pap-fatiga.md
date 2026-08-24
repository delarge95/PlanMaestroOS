# Neuromechanics of Human Movement (4ª ed.) — Cap. 8: Ajustes Agudos, PAP y Mecánica del Estiramiento (pp. 303–348)

> **sourceId:** `enoka-neuromechanics-4ed`
> **Sección:** Part III: Chapter 8 — Acute Adjustments: Warm-Up, Post-Activation Potentiation (PAP), Stretching Mechanics & Acute Fatigue (pp. 303–348)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autor:** Roger M. Enoka (University of Colorado at Boulder)

---

## 1) Metadatos

- **Libro:** Neuromechanics of Human Movement
- **Edición y Año:** 4ª edición (2008 / Human Kinetics)
- **Disciplina:** Fisiología del rendimiento deportivo / Mecanismos de calentamiento y potenciación neuromuscular
- **Alcance de esta sección:**
  - Efectos biológicos del calentamiento: incremento de la temperatura muscular intramuscular ($T_m$), aceleración enzimática de la ATPasa de miosina ($Q_{10} \approx 2.0$), reducción de la viscosidad pasiva y aumento de la velocidad de conducción nerviosa (pp. 303–309).
  - Potenciación Post-Activación (PAP / PAPE): fosforilación de las cadenas ligeras reguladoras de la miosina (RLC) mediada por MLCK y su ventana temporal de expresión óptima (pp. 338–343).
  - Biomecánica del estiramiento muscular: estiramiento estático vs dinámico, viscoelasticidad, relajación de estrés (stress relaxation) y el déficit agudo de fuerza inducido por estiramiento estático prolongado ($>60\text{ s}$) (pp. 309–313).
  - Daño muscular agudo y dolor (DOMS) (pp. 313–317).
  - Dependencia de la tarea en los mecanismos de fatiga aguda (pp. 317–338).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface PostActivationPotentiationContract {
  conditioningContractionIntensity: 'heavy_85_90_percent_1RM' | 'maximal_isometric_5s';
  primaryMolecularMechanism: 'myosin_regulatory_light_chain_phosphorylation_by_MLCK';
  fatigueDecayHalfLifeMinutes: [2.0, 3.0];
  potentiationDecayHalfLifeMinutes: [4.0, 6.0];
  optimalPerformanceEnhancementWindowMinutes: [4, 8]; // Ventana de 4 a 8 minutos
  potentiatedActivities: ('vertical-jump' | 'sprint' | 'ballistic-throw');
}

export interface StretchingMechanicsContract {
  staticStretchDurationPerMuscleSec: number;
  acuteForceDeficitThresholdSec: 60; // >60 s continuo produce deficit de 3-7% en F0 y RFD
  dynamicStretchingEffect: 'enhances_or_preserves_power_and_rfd';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `post-activation-potentiation-optimal-window`
- **id:** `post-activation-potentiation-optimal-window` | **tipo:** preparación deportiva / potenciación PAP
- **descripción:** Tras una contracción de acondicionamiento de alta intensidad (ej. 3 repeticiones de sentadilla pesada al 85–90% 1RM o contracción isométrica máxima de 5 s), coexisten dos procesos antagónicos: la **fatiga residual** y la **potenciación post-activación (PAP)**.
- **cinética temporal:**
  - En los primeros 1–3 minutos: la fatiga predomina sobre la potenciación.
  - Entre los **4 y 8 minutos**: la fatiga se ha disipado en gran medida ($t_{1/2} \approx 2.5\text{ min}$) mientras que la fosforilación de las cadenas ligeras de miosina (RLC) permanece elevada ($t_{1/2} \approx 5\text{ min}$), creando una **ventana óptima de potenciación neta** donde la altura de salto vertical, la aceleración de sprint o la RFD aumentan en un **$3\%\text{ a }7\%$**.
  - A partir de los 10–12 minutos: la potenciación decae a niveles basales.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 8, pp. 338–343.

### Regla: `static-stretching-acute-power-deficit`
- **id:** `static-stretching-acute-power-deficit` | **tipo:** seguridad tisular / protocolo de calentamiento
- **descripción:** El estiramiento estático sostenido de duración superior a **$\ge 60\text{ segundos}$ por grupo muscular** realizado inmediatamente antes de una prueba de fuerza máxima, potencia balística o salto induce un **déficit agudo temporal del $3\%\text{ a }7\%$** en la fuerza máxima ($F_0$) y en la tasa de desarrollo de fuerza (RFD).
- **mecanismo dual:** Reducción de la rigidez pasiva de la unidad músculo-tendón (mayor distensibilidad que retrasa la transmisión de fuerza al hueso) junto con inhibición neural refleja del pool de motoneuronas (disminución de la excitabilidad del reflejo H).
- **recomendación de protocolo:** El calentamiento previo a tareas explosivas debe priorizar **estiramientos dinámicos y movilidad activa**, reservando el estiramiento estático prolongado para el final de la sesión o bloques dedicados de flexibilidad.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 8, pp. 309–313.

### Regla: `temperature-dependent-muscle-performance-scaling`
- **id:** `temperature-dependent-muscle-performance-scaling` | **tipo:** fisiología térmica / calentamiento
- **descripción:** Cada incremento de **$1^\circ\text{C}$** en la temperatura intramuscular ($T_m$) dentro del rango fisiológico ($34^\circ\text{C} \to 38.5^\circ\text{C}$) acelera la velocidad máxima de acortamiento ($V_{\text{max}}$) y la potencia mecánica máxima en un **$2\%\text{ a }5\%$**, debido al coeficiente de temperatura enzimático ($Q_{10} \approx 2.0$) de la miosina ATPasa y de las bombas SERCA.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 8, pp. 305–309.

---

## 4) Integración en Plan Maestro OS

1. **Generador de Calentamiento Específico (`src/lib/fitness/`):**
   - Implementar `static-stretching-acute-power-deficit` para advertir al usuario si incluye estiramientos estáticos de $>60\text{ s}$ en su bloque de warm-up antes de levantamientos pesados.
2. **Protocolos de Contraste Complejo (Complex Training):**
   - Utilizar `post-activation-potentiation-optimal-window` para temporizar las pausas de 4 a 6 minutos en superseries de contraste (ej. Sentadilla pesada $\to$ descanso de 5 min $\to$ Saltos al cajón).
