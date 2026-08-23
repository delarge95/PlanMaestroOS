# Neuromechanics of Human Movement (4ª ed.) — Cap. 1 y 2: Cinemática, Cinética y Fuerzas (pp. 3–90)

> **sourceId:** `enoka-neuromechanics-4ed`
> **Sección:** Part I: Chapter 1 (Describing Motion) & Chapter 2 (Forces Acting on the Body) (pp. 3–90)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autor:** Roger M. Enoka (University of Colorado at Boulder)

---

## 1) Metadatos

- **Libro:** Neuromechanics of Human Movement
- **Edición y Año:** 4ª edición (2008 / Human Kinetics)
- **Disciplina:** Biomecánica física / Cinemática y cinética del movimiento humano / Dinámica newtoniana
- **Población objetivo:** Biomecánicos, ingenieros biomédicos, entrenadores de fuerza y programadores de motores de física del movimiento
- **Alcance de esta sección:**
  - Cinemática lineal y angular: posición, desplazamiento, velocidad lineal ($v$), velocidad angular ($\omega$), aceleración lineal ($a$) y aceleración angular ($\alpha$) (pp. 3–23).
  - Relación entre variables angulares y lineales ($v_t = \omega \cdot r$; aceleración centrípeta $a_r = \omega^2 \cdot r$) (pp. 23–29).
  - Filtrado y suavizado de datos cinemáticos (filtros Butterworth pasabajos) (pp. 29–39).
  - Leyes de Newton del movimiento (Inercia, Aceleración $F = m \cdot a$ / $T = I \cdot \alpha$, Acción-Reacción) (pp. 41–43).
  - Diagramas de cuerpo libre (FBD), cálculo de torque / momento de fuerza ($T = F \cdot d_\perp$) y Centro de Masa (COM) segmental (pp. 43–56).
  - Fuerzas de Reacción del Suelo (GRF: picos de impacto vs activos en carrera y saltos) (pp. 56–68).
  - Teorema de Impulso-Momento lineal y angular ($\int F\ dt = \Delta p$; $\int T\ dt = \Delta L$) (pp. 68–81).
  - Trabajo mecánico ($W = F \cdot d \cdot \cos\theta$), energía cinética/potencial y potencia mecánica instantánea ($P = F \cdot v = T \cdot \omega$) (pp. 81–90).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface KinematicVector3D {
  positionM: [number, number, number];
  linearVelocityMS: [number, number, number];
  linearAccelerationMS2: [number, number, number];
  angularVelocityRadS: [number, number, number];
  angularAccelerationRadS2: [number, number, number];
}

export interface KineticsSegmentContract {
  segmentName: string;
  massKG: number;
  centerOfMassLocationRatio: number; // Distancia proximal/distal al COM (~0.433)
  momentOfInertiaKGM2: number; // I = m * k^2 (donde k es el radio de giro)
  jointReactionForceN: [number, number, number];
  netJointTorqueNM: [number, number, number];
  instantaneousMechanicalPowerWatts: number; // P = T * omega
}

export interface GroundReactionForceProfile {
  impactPeakForceBW: number; // 1.5 a 3.0 x BW en talonacion de carrera
  activePropulsivePeakBW: number; // 2.0 a 2.8 x BW en despegue
  loadingRateBWPerSec: number; // Tasa de aplicacion de fuerza (dF/dt)
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `impulse-momentum-jump-propulsion-rule`
- **id:** `impulse-momentum-jump-propulsion-rule` | **tipo:** biomecánica / rendimiento en salto
- **descripción:** La velocidad vertical de despegue ($v_{\text{despegue}}$) en un salto vertical (Countermovement Jump - CMJ) está matemáticamente dictada por el impulso neto vertical aplicado contra el suelo durante la fase propulsiva:
  $$\text{Impulso Neto Vertical} = \int_{t_{\text{inicio}}}^{t_{\text{despegue}}} (F_{\text{GRF}}(t) - m \cdot g)\ dt = m \cdot v_{\text{despegue}}$$
  $$\text{Altura del Salto}\ (h) = \frac{v_{\text{despegue}}^2}{2g}$$
- **consecuencia:** Maximizar la altura del salto requiere optimizar el área bajo la curva fuerza-tiempo ($\int F\ dt$), lo que implica tanto alta fuerza pico como una elevada tasa de desarrollo de fuerza (RFD).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 2, pp. 68–75.

### Regla: `moment-arm-and-joint-torque-mechanics`
- **id:** `moment-arm-and-joint-torque-mechanics` | **tipo:** biomecánica / momento articular
- **descripción:** El torque neto ($T$) producido por una fuerza externa o muscular sobre una articulación depende del producto de la magnitud de la fuerza ($F$) por la distancia perpendicular más corta desde la línea de acción de la fuerza al centro articular (brazo de momento $d_\perp$):
  $$T = F \times d_\perp = F \times d \times \sin(\theta)$$
- **implicación en el entrenamiento:** A medida que cambia el ángulo articular en un ejercicio (ej. sentadilla o press de banca), el brazo de momento de la carga varía continuamente, alterando el torque resistivo y determinando el "punto de estancamiento" (sticking point) donde la demanda de torque muscular supera la capacidad del atleta.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 2, pp. 44–46; Cap. 3, pp. 107–118.

---

## 4) Integración en Plan Maestro OS

1. **Motor de Cálculo de Carga Articular (`src/lib/fitness/`):**
   - Utilizar `moment-arm-and-joint-torque-mechanics` para calcular el perfil de resistencia (resistance profile) de los 1.779 ejercicios según el brazo de palanca en cada fase del movimiento.
2. **Evaluación de Potencia en Salto (`src/data/skills/`):**
   - Implementar `impulse-momentum-jump-propulsion-rule` para convertir el tiempo de vuelo medido en altura de salto y potencia mecánica relativa en W/kg.
