# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 16 a 19: Desinervación, Trofismo y Desuso/Atrofia (pp. 245–297)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part III: Chapters 16, 17, 18 & 19 — Loss & Recovery of Muscle Innervation, Trophism & Muscle Disuse (pp. 245–297)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Neurobiología regenerativa / Fisiopatología de la atrofia / Modelos de desuso e inmovilización
- **Alcance de esta sección:**
  - Degeneración Walleriana y cambios morfo-fisiológicos post-desinervación (hipersensibilidad por denervación, fibrilaciones espontáneas en EMG, expresión de nAChR embrionarios $\alpha_2\beta\gamma\delta$ extrasinápticos) (pp. 245–256).
  - Regeneración nerviosa axonal (tasa de avance de 1–2 mm/día) y brotamiento colateral (collateral sprouting) (pp. 257–266).
  - Reagrupamiento fenotípico por tipo de fibra (Type Grouping) y ampliación de unidades motoras adoptivas (pp. 266–270).
  - Factores neurotróficos (BDNF, GDNF, NT-3, IGF-1) y la cascada Agrina-LRP4-MuSK-Rapsina para el anclaje postsináptico de receptores (pp. 271–283).
  - Modelos de desuso (inmovilización con yeso, reposo en cama, microgravedad): tasas de pérdida de CSA (0.5–1.0%/día), transición fenotípica lenta $\to$ rápida y vías catabólicas de proteólisis (ubiquitina-proteosoma: MuRF1, MAFbx/Atrogin-1, FoxO) (pp. 284–297).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface DisuseAtrophyContract {
  csaLossRatePercentPerDayInitial2Weeks: [0.5, 1.0]; // 0.5% a 1.0% de CSA por dia
  forceLossRatePercentPerDay: [1.0, 1.5]; // La fuerza cae mas rapido que la masa (~1.0 a 1.5%/dia)
  mostVulnerableMuscles: ('soleus' | 'vastus-lateralis' | 'quadriceps' | 'gastrocnemius-medialis');
  phenotypicFiberTypeShift: 'slow_Type_I_to_fast_Type_IIx'; // Desuso convierte a fibras rapidas glucoliticas
  activeProteolyticPathways: ('ubiquitin-proteasome-MuRF1-MAFbx' | 'autophagy-lysosome' | 'calpain-calcium');
}

export interface NerveRegenerationContract {
  axonalRegenerationRateMMDay: [1.0, 2.0]; // 1.0 a 2.0 mm/dia (~1 pulgada/mes)
  collateralSproutingCapacityMultiplier: 3.0; // Una sola motoneurona puede expandir su unidad motora hasta x3 veces
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `disuse-atrophy-and-force-decay-rate`
- **id:** `disuse-atrophy-and-force-decay-rate` | **tipo:** atrofia / inmovilización clínica
- **descripción:** Durante la inmovilización articular completa o reposo absoluto en cama:
  - El Área de Sección Transversal (CSA) del músculo disminuye a una tasa de **$0.5\%\text{ a }1.0\%$ por día** durante las primeras 1 a 2 semanas.
  - La fuerza voluntaria máxima ($F_0$) se deteriora a una tasa significativamente mayor de **$1.0\%\text{ a }1.5\%$ por día**, debido a la combinación de atrofia miofibrilar y deterioro del drive neural central (descondicionamiento cortical).
- **predilección anatómica:** Los músculos posturales antigravitatorios de contracción lenta (ej. `soleus`, `vastus-lateralis`) sufren una tasa de atrofia hasta 2–3 veces superior a los músculos fásicos no posturales.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 19, pp. 284–292.

### Regla: `peripheral-nerve-regeneration-speed`
- **id:** `peripheral-nerve-regeneration-speed` | **tipo:** neurología / tiempo de recuperación
- **descripción:** Tras una lesión de nervio periférico con conservación o reparación del tubo endoneural, los axones en regeneración avanzan a través de las bandas de Büngner a una velocidad biológica constante de **1 a 2 mm/día** ($\sim 2.5\text{ cm o 1 pulgada al mes}$).
- **aplicación clínica:** Permite calcular con precisión matemática el tiempo estimado para la reinervación muscular según la distancia anatómica en centímetros desde el sitio de lesión hasta la placa motora del músculo diana.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 17, pp. 257–262.

---

## 4) Mecanismos Moleculares de la Atrofia por Desuso

### 1. Las Atrogínas y la Vía Ubiquitina-Proteosoma
- En condiciones de descarga mecánica (unloading) o inmovilización, la inactivación de la vía anabólica Akt/mTOR permite la desfosforilación y translocación nuclear de los factores de transcripción **FoxO1 y FoxO3** (p. 293).
- FoxO activa la transcripción de las ubiquitina ligasas E3 específicas de músculo:
  - **MuRF1 (Muscle RING Finger 1):** Se une y degrada proteínas estructurales miofibrilares (miosina, titina, miosina light chains) (p. 293).
  - **MAFbx / Atrogin-1 (Muscle Atrophy F-box):** Degrada activadores transcripcionales del crecimiento como el factor de iniciación de la traducción eIF3-f y MyoD (p. 293).

---

## 5) Integración en Plan Maestro OS

1. **Calculadora de Retorno tras Inmovilización / Lesión (`src/lib/fitness/`):**
   - Utilizar `disuse-atrophy-and-force-decay-rate` para calcular la pérdida estimada de masa/fuerza según los días de reposo del usuario y dosificar el volumen de reingreso al 50% inicial para evitar rabdomiólisis o tendinopatías por sobrecarga súbita.
2. **Grafo Anatómico:** Conectar `soleus` y `vastus-lateralis` con alta prioridad de prehabilitación postural en usuarios sedentarios o en convalecencia.
