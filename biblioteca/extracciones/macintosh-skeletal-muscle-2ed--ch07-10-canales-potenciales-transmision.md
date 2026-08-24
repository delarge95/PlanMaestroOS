# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 7 a 10: Canales Iónicos, Potencial de Membrana y Transmisión (pp. 87–150)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part II: Chapters 7, 8, 9 & 10 — Ion Channels, Pumps, Axoplasmic Transport, Resting & Action Potentials, Neuromuscular Transmission (pp. 87–150)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Biofísica de membranas / Electrofisiología muscular / Canales iónicos y bombas
- **Alcance de esta sección:**
  - Canales de $\text{Na}^+$ ($\text{Na}_V1.4$), $\text{K}^+$ ($K_{ir}$, $K_V$, $K_{ATP}$), $\text{Cl}^-$ (ClC-1) y $\text{Ca}^{2+}$ (DHPR / $\text{Ca}_V1.1$ y RyR1) (pp. 87–106).
  - La bomba $\text{Na}^+$-$\text{K}^+$ ATPasa (3 $\text{Na}^+$ fuera / 2 $\text{K}^+$ dentro por ATP) y su rol en la prevención de la despolarización por fatiga (pp. 92–96).
  - Bombas de calcio del retículo sarcoplásmico (SERCA1a en fibras rápidas vs SERCA2a en lentas) y proteínas fijadoras (calsecuestrina, parvalbúmina) (pp. 98–104).
  - Conductancia al cloruro (ClC-1): responsable del 70–80% de la conductancia en reposo del sarcolema (p. 104).
  - Potencial de membrana en reposo (RMP: -80 a -90 mV) y ecuación de Goldman-Hodgkin-Katz (pp. 118–124).
  - Génesis y propagación del potencial de acción muscular a lo largo del sarcolema y el sistema de túbulos T (pp. 125–132).
  - Dinámica presináptica del $\text{Ca}^{2+}$, sinaptotagmina y acoplamiento cuántico en la unión neuromuscular (pp. 137–146).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface SarcolemmaElectrophysiologyContract {
  restingMembranePotentialMV: number; // -80 a -90 mV
  actionPotentialOvershootMV: number; // +30 a +40 mV
  chlorideConductanceRestingPercent: number; // 70% a 80% (Canal ClC-1)
  potassiumConductanceRestingPercent: number; // 20% a 30% (Canal Kir)
  sodiumPotassiumPumpStoichiometry: '3Na_out_2K_in_per_ATP';
  tTubuleConductionVelocityMS: number; // ~0.2 a 0.4 m/s radial
  sarcolemmaLongitudinalConductionVelocityMS: number; // ~2.0 a 6.0 m/s
  sercaIsoform: 'SERCA1a_fast' | 'SERCA2a_slow';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `sarcolemma-chloride-conductance-stability`
- **id:** `sarcolemma-chloride-conductance-stability` | **tipo:** electrofisiología / estabilidad de membrana
- **descripción:** A diferencia de las neuronas (donde el potencial de reposo depende casi exclusivamente del $\text{K}^+$), en el sarcolema del músculo esquelético humano el canal de cloruro **ClC-1** representa el **70% al 80%** de la conductancia iónica total en reposo. Esto previene que la acumulación de $\text{K}^+$ extracelular en el espacio luminal estrecho de los túbulos T durante trenes repetitivos de potenciales de acción despolarice la membrana e induzca descargas miotónicas espontáneas o bloqueo de conducción.
- **métrica principal:** `gCltoGKRatio` (~4:1 en reposo).
- **patología:** La mutación con pérdida de función en ClC-1 produce Miotonía Congénita (Thomsen / Becker), caracterizada por rigidez muscular y retraso en la relajación post-contracción.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 104–106; Cap. 9, pp. 120–123.

### Regla: `na-k-pump-extracellular-potassium-clearance`
- **id:** `na-k-pump-extracellular-potassium-clearance` | **tipo:** bioenergética / fatiga muscular
- **descripción:** Durante el ejercicio de alta intensidad, cada potencial de acción expulsa $\text{K}^+$ al espacio intersticial y tubular T. La concentración de $[\text{K}^+]_e$ puede aumentar desde 4.0 mM en reposo hasta >8.0–12.0 mM, despolarizando el RMP hacia -60 mV e inactivando los canales $\text{Na}_V1.4$. La activación máxima de la bomba $\text{Na}^+$-$\text{K}^+$ ATPasa (estimulada por catecolaminas e influjo intracelular de $\text{Na}^+$) es el mecanismo compensatorio fundamental que restaura el gradiente iónico para mantener la excitabilidad.
- **valores numéricos:** 
  - $[\text{K}^+]_e$ reposo: 4.0–4.5 mM $\to$ RMP = -85 mV.
  - $[\text{K}^+]_e$ fatiga extrema: 10–13 mM $\to$ RMP = -60 mV (inactivación de $\text{Na}_V1.4$ $\to$ pérdida de fuerza).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 92–96; Cap. 9, pp. 126–130.

---

## 4) Estructuras y Canales Iónicos Clave

| Canal / Bomba Iónica | Gen / Subtipo | Función Biofísica Primaria | Páginas |
|---|---|---|---|
| **$\text{Na}_V1.4$** | *SCN4A* | Canal de sodio dependiente de voltaje; fase de despolarización rápida del potencial de acción muscular | pp. 90–92 |
| **Bomba $\text{Na}^+$-$\text{K}^+$** | $\alpha_1/\alpha_2$, $\beta_1$ | Bomba electrogénica (3 $\text{Na}^+$ salientes / 2 $\text{K}^+$ entrantes); mantiene gradientes iónicos | pp. 92–96 |
| **$K_{ir}$ (Inward Rectifier)** | *KCNJ2* ($K_{ir}2.1$) | Mantiene el potencial de membrana en reposo cerca del potencial de equilibrio del potasio ($E_K \approx -95\text{ mV}$) | pp. 96–98 |
| **$K_{ATP}$** | *KCNJ11* ($K_{ir}6.2$) | Se abre cuando el ratio ATP/ADP intracelular cae severamente; reduce la excitabilidad para proteger la fibra de la necrosis metabólica | pp. 97–98 |
| **ClC-1** | *CLCN1* | Canal de cloruro de reposo (70–80% de conductancia); estabiliza el potencial eléctrico del túbulo T | pp. 104–106 |
| **DHPR ($\text{Ca}_V1.1$)** | *CACNA1S* | Sensor de voltaje en el túbulo T acoplado mecánicamente al RyR1 para la liberación de calcio | pp. 98–101 |
| **SERCA1a / SERCA2a** | *ATP2A1* / *ATP2A2* | Bomba de calcio del retículo sarcoplásmico (secuestra 2 $\text{Ca}^{2+}$ por ATP); responsable de la velocidad de relajación | pp. 101–104 |

---

## 5) Integración en Plan Maestro OS

1. **Simulación de Fatiga Periférica:** Utilizar `na-k-pump-extracellular-potassium-clearance` para modelar la pérdida temporal de fuerza durante series de alta densidad o intervalos anaeróbicos lácticos (HIIT).
2. **Grafo Anatómico:** Conectar las bombas SERCA1a/2a con la velocidad de relajación y los tiempos de recuperación entre repeticiones.
