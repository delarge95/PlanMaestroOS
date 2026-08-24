# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 20: Adaptaciones al Entrenamiento de Fuerza e Hipertrofia (pp. 298–312)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part III: Chapter 20 — Muscle Training: Strength, Power, Hypertrophy, Endurance & Molecular Signaling (pp. 298–312)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Fisiología del entrenamiento de fuerza / Biología molecular de la hipertrofia / Vías de señalización celular
- **Alcance de esta sección:**
  - Cronología temporal de adaptaciones: adaptaciones neurales tempranas (semanas 1–4) vs hipertrofia estructural miofibrilar (semanas 4–8+) (pp. 298–301).
  - Sarcomerogénesis en paralelo (aumento de PCSA y fuerza máxima $F_0$) vs sarcomerogénesis en serie (aumento de longitud de fibra $L_f$ y $V_{\text{max}}$) (pp. 301–304).
  - Vías de señalización de la hipertrofia: mecanotransducción en los costámeros $\to$ ácido fosfatídico / Akt $\to$ complejo **mTORC1** $\to$ activación de **p70S6K** y **4E-BP1** para síntesis proteica miofibrilar (pp. 308–311).
  - Vías de adaptación aeróbica: Calcineurina/CaMK, **AMPK** y coactivador transcripcional **$\text{PGC-1}\alpha$** (biogénesis mitocondrial y capilarización) (pp. 304–307).
  - El Efecto de Interferencia en entrenamiento concurrente (crosstalk AMPK $\dashv$ mTORC1) (pp. 310–312).
  - Transiciones fenotípicas de cadenas pesadas de miosina: conversión $\text{MHC-IIx} \to \text{MHC-IIa}$ con el entrenamiento de sobrecarga (pp. 302–304).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface HypertrophySignalingContract {
  anabolicPathway: 'mechanotransduction-Akt-mTORC1-p70S6K-4EBP1';
  oxidativePathway: 'CaMK-Calcineurin-AMPK-PGC1alpha';
  concurrentInterferenceMechanism: 'AMPK_phosphorylates_TSC2_inhibiting_mTORC1';
  parallelSarcomerogenesisStimulus: 'mechanical-tension-concentric-isometric';
  seriesSarcomerogenesisStimulus: 'eccentric-overload-at-long-muscle-lengths';
  fiberTypeShiftUnderResistanceTraining: 'Type_IIx_shifts_to_Type_IIa';
  fiberTypeOvershootOnDetraining: 'Type_IIx_supercompensation';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `neural-vs-hypertrophy-adaptation-timeline`
- **id:** `neural-vs-hypertrophy-adaptation-timeline` | **tipo:** fisiología del entrenamiento / progresión
- **descripción:** La ganancia de fuerza voluntaria durante un programa de entrenamiento con sobrecarga sigue una curva temporal bifásica:
  - **Semanas 1 a 4:** El $\sim 80\%\text{ a }90\%$ de las ganancias de fuerza se deben a adaptaciones neurales (aumento de la activación voluntaria, mayor frecuencia de disparo/dobletes de descarga de motoneuronas, disminución de la coactivación de antagonistas y sincronización).
  - **Semanas 4 a 8 en adelante:** La hipertrofia estructural miofibrilar (sarcomerogénesis en paralelo) se convierte en el contribuyente dominante de la fuerza a largo plazo.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 20, pp. 298–301.

### Regla: `mhc-iix-to-iia-phenotypic-compression`
- **id:** `mhc-iix-to-iia-phenotypic-compression` | **tipo:** fisiología molecular / tipos de fibra
- **descripción:** El entrenamiento de fuerza regular induce una conversión fenotípica casi total de las fibras puramente glucolíticas **MHC-IIx hacia fibras MHC-IIa**. Las fibras IIa conservan exactamente la misma tensión específica y velocidad de acortamiento que las IIx, pero adquieren mayor densidad mitocondrial y resistencia a la fatiga.
- **rebote por desentrenamiento (Tapering / Peak):** Tras 2 a 4 semanas de cese del entrenamiento o reducción marcada de volumen (tapering), se produce un efecto de "supercompensación" o rebote donde las fibras IIa se reconvierten a fibras híbridas IIa/IIx y puras IIx, alcanzando proporciones de IIx superiores al nivel basal pre-entrenamiento (mecanismo fisiológico del pico de potencia en atletas de fuerza).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 20, pp. 302–304.

### Regla: `concurrent-training-molecular-interference-window`
- **id:** `concurrent-training-molecular-interference-window` | **tipo:** planificación / entrenamiento concurrente
- **descripción:** El ejercicio aeróbico de resistencia de alta intensidad agota el ATP intracelular y eleva drásticamente el AMP, activando **AMPK**. La AMPK activada fosforila a la proteína **TSC2** y a **Raptor**, bloqueando directamente la activación de **mTORC1** inducida por el entrenamiento de fuerza durante un período de **6 a 18 horas**.
- **protocolo de mitigación:** Separar las sesiones de cardio intenso y entrenamiento de fuerza por al menos **6 a 8 horas** (o realizarlas en días alternos), o situar la sesión de fuerza antes de la de resistencia de baja intensidad.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 20, pp. 310–312.

---

## 4) Integración en Plan Maestro OS

1. **Planificador Semanal Concurrente (`src/data/schedules/`):**
   - Implementar `concurrent-training-molecular-interference-window` para evitar que el planificador ubique sesiones de HIIT o carrera intensa inmediatamente antes o durante el mismo bloque de fuerza máxima.
2. **Motor de Progresiones (`src/lib/rules/`):**
   - Utilizar la regla `neural-vs-hypertrophy-adaptation-timeline` para explicar a usuarios principiantes por qué sus cargas progresan rápidamente en el primer mes sin cambios visibles inmediatos en la circunferencia muscular.
