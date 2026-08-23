# Neuromechanics of Human Movement (4ª ed.) — Cap. 3 y 4: Fuerzas Internas y Gestos Deportivos (pp. 91–178)

> **sourceId:** `enoka-neuromechanics-4ed`
> **Sección:** Part I: Chapter 3 (Forces Within the Body) & Chapter 4 (Running, Jumping, and Throwing) (pp. 91–178)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autor:** Roger M. Enoka (University of Colorado at Boulder)

---

## 1) Metadatos

- **Libro:** Neuromechanics of Human Movement
- **Edición y Año:** 4ª edición (2008 / Human Kinetics)
- **Disciplina:** Biomecánica articular interna / Dinámica inversa / Análisis biomecánico de gestos funcionales
- **Alcance de esta sección:**
  - Dinámica inversa: cálculo de fuerzas de reacción articular ($F_j$) y momentos articulares netos ($M_j$) (pp. 91–107).
  - El problema de la redundancia/indeterminación muscular y fuerzas de contacto óseo (Joint Contact Forces - JCF: dominadas por la contracción muscular activa, alcanzando 3–8x BW) (pp. 107–129).
  - Flujo de potencia articular ($P_j = M_j \cdot \omega_j$): generación concéntrica ($P > 0$) vs absorción excéntrica ($P < 0$) (pp. 129–140).
  - Biomecánica de la carrera: fases de frenado y propulsión, modelo masa-resorte (Spring-Mass Model) y rigidez vertical/de pierna ($k_{\text{vert}}$, $k_{\text{leg}}$) (pp. 141–152).
  - Biomecánica del salto y el Ciclo de Estiramiento-Acortamiento (CEA / SSC): pre-activación, retroceso elástico tendinoso y potenciación refleja (pp. 153–165).
  - Biomecánica del lanzamiento y golpeo: secuenciación proximal-a-distal de la cadena cinética (pp. 165–178).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface JointPowerDynamicsContract {
  jointName: string;
  netJointTorqueNM: number;
  angularVelocityRadSec: number;
  jointPowerWatts: number; // P = M * omega
  mechanicalWorkType: 'energy-generation-concentric' | 'energy-absorption-eccentric' | 'isometric-transfer';
}

export interface StretchShorteningCycleContract {
  eccentricPreStretchPhaseDurationMS: number; // <250 ms para SSC rapido
  couplingTimeElectromechanicalDelayMS: number; // Tiempo de acoplamiento excéntrico-concéntrico (<15-20 ms)
  performancePotentiationRatio: number; // CMJ / SJ ratio (~1.10 a 1.20 en atletas optimizados)
  legStiffnessKNPerMeter: number; // k_leg (~10 a 40 kN/m)
}

export interface KineticChainSequencingContract {
  sequencingType: 'proximal-to-distal';
  segmentalOrder: ('pelvic-rotation' | 'torso-lateral-tilt' | 'shoulder-internal-rotation' | 'elbow-extension' | 'wrist-flexion')[];
  peakSegmentalAngularVelocitiesDegSec: {
    shoulderInternalRotation: 7000; // >7.000 deg/s en beisbol/lanzamiento
    elbowExtension: 2500;
  };
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `joint-contact-force-muscle-dominance`
- **id:** `joint-contact-force-muscle-dominance` | **tipo:** biomecánica / carga articular
- **descripción:** Las fuerzas de contacto articular hueso-sobre-hueso (Joint Contact Forces - JCF) están dominadas primordialmente por la fuerza de co-contracción de los músculos esqueléticos que cruzan la articulación, representando más del **$70\%\text{ a }85\%$** de la fuerza compresiva total, superando con creces el efecto directo de la masa corporal gravídica externa.
- **valores numéricos de compresión articular:**
  - *Cadera en marcha:* **$3.0\text{ a }5.0\times\text{BW}$** (impulsada por los abductores y glúteos).
  - *Cadera en carrera / aterrizaje de salto:* **$7.0\text{ a }9.0\times\text{BW}$**.
  - *Rodilla (compartimento tibiofemoral):* **$3.0\text{ a }4.5\times\text{BW}$** en marcha; **$>6.0\text{ a }8.0\times\text{BW}$** en sentadilla profunda o frenado excéntrico.
  - *Articulación Patelofemoral:* **$>5.0\text{ a }7.0\times\text{BW}$** a $90^\circ\text{--}100^\circ$ de flexión de rodilla bajo carga.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 3, pp. 118–129.

### Regla: `stretch-shortening-cycle-potentiation-mechanisms`
- **id:** `stretch-shortening-cycle-potentiation-mechanisms` | **tipo:** biomecánica / CEA pliométrico
- **descripción:** El rendimiento de fuerza y potencia concéntrica se incrementa en un **$10\%\text{ a }20\%$** cuando la fase concéntrica es precedida inmediatamente por un pre-estiramiento excéntrico activo (Ciclo de Estiramiento-Acortamiento - CEA).
- **los 4 mecanismos biofísicos de Enoka:**
  1. *Tiempo de desarrollo de fuerza:* La fase excéntrica permite al músculo alcanzar un estado de alta activación y tensión antes de que comience el acortamiento.
  2. *Almacenamiento y retorno de energía elástica:* La deformación por tracción del tendón (ej. tendón de Aquiles) almacena energía potencial elástica que se libera pasivamente en el despegue.
  3. *Reflejos propioceptivos:* Descarga de los husos musculares (aferencias Ia) que facilitan la activación motora central.
  4. *Potenciación de los puentes cruzados y rigidez de la titina.*
- **confianza:** `explicit`
- **capítulo/página:** Cap. 4, pp. 153–165.

---

## 4) Integración en Plan Maestro OS

1. **Calculadora de Carga Articular y Prehab (`src/lib/fitness/`):**
   - Utilizar `joint-contact-force-muscle-dominance` para cuantificar la carga compresiva acumulada sobre la cadera y rodilla en ejercicios de impacto (saltos, carrera, squats).
2. **Evaluación de Habilidades Pliométricas (`src/data/skills/`):**
   - Aplicar el ratio CMJ/SJ ($\text{CEA Ratio} = \text{CMJ} / \text{SJ}$) para evaluar el perfil neuromuscular de reactividad y elasticidad tendinosa del usuario.
