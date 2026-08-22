# NSCA Essentials 4ª ed — PROTEÍNA Y ENERGÍA POR OBJETIVO (ch9, ch10) (pp. 175–224)

## 1) Metadatos
- Libro: *Essentials of Strength Training and Conditioning* 4ª ed. (2016), eds. Haff & Triplett, NSCA/Human Kinetics. Capítulos 9 "Basic Nutrition Factors in Health" (pp. 175–200) y 10 "Nutrition Strategies for Maximizing Performance" (M. Spano, pp. 201–224). PDF offset −16.
- Fuente CANÓNICA por modernidad (2016) en proteína/energía para fuerza.
- Extracción local. Tablas 9.4, 10.1–10.4 parcialmente legibles → plan Gemini para las tablas complejas.

## 2) Contratos y entidades
- `population`: `general-fitness | endurance | strength | combined | reduced-calorie`.
- `goal`: `cut | maintain | bulk` (inputs calculadora).
- `kcalPerKgByActivity`: light 38 / moderate 41 / heavy 50 (varón) — tabla 10.4.

## 3) Reglas cuantitativas

### Proteína total (ch9 p.183, p.190)
| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-protein-general-fitness` | Adultos en programa general de fitness | **0.8–1.0 g/kg/día** | fitness general | explicit | ch9 p.183 |
| `nutri-protein-endurance` | Atletas de resistencia aeróbica con calorías suficientes | **1.0–1.6 g/kg/día** | resistencia | explicit | ch9 p.183, p.190 |
| `nutri-protein-strength` | Atletas de fuerza | **1.4–1.7 g/kg/día** | fuerza | explicit | ch9 p.183, p.190, ch10 p.215 |
| `nutri-protein-combined` | Combinación fuerza + resistencia o esprint con calorías adecuadas | **1.4–1.7 g/kg/día** | mixto | explicit | ch9 p.183 |
| `nutri-protein-deficit` | Atletas en dieta hipocalórica (preservar músculo) | **1.8–2.7 g/kg/día** (≈2.3–3.1 g/kg MCM) | déficit calórico | explicit | ch9 p.190, ch10 p.218 |
| `nutri-protein-renal-safe` | Ingestas hasta 2.8 g/kg/día sin deterioro de función renal en estudio de 7 días de registro | ≤2.8 g/kg/día | individuos sanos | explicit | ch9 p.184 |
| `nutri-protein-excess-caveat` | Ingestas consistentemente altas no recomendadas (desplazan CHO/grasas y sus micronutrientes) | — | cualitativo | qualitative | ch9 p.184 |

### Distribución y timing proteico (ch9 p.183–184, ch10 pp.214–215)
| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-protein-post-dose-young` | Post-entreno de fuerza (jóvenes): **20–25 g** de proteína rápida rica en leucina (**2–3 g leucina**; ≈8.5–10 g EAA) | 20–25 g + 2–3 g leucina | <~50 años | explicit | ch10 p.215 |
| `nutri-protein-post-dose-older` | Adultos mayores: **≥40 g** para maximizar síntesis post-entreno | ≥40 g | mayores | explicit | ch10 p.215 |
| `nutri-protein-post-range-studies` | Rango 20–48 g probado beneficioso tras resistencia | 20–48 g | agudo | explicit | ch9 p.184 |
| `nutri-protein-meal-min` | Comidas con **≥20–30 g** de proteína con leucina alta en adultos | 20–30 g/comida | distribución diaria | explicit | ch10 p.215 |
| `nutri-protein-window-fasted` | Si el ejercicio fue en ayunas: consumir dentro de **30 min** post-sesión; si en estado alimentado, la ventana es considerablemente mayor | 30 min (ayunas) vs flexible | depende de estado previo | explicit | ch10 p.215 |
| `nutri-protein-sensitivity-48h` | Sensibilidad muscular a aminoácidos elevada hasta **48 h** post-sesión (decreciente) | 48 h | agudo | explicit | ch9 p.183 |
| `nutri-protein-delay-3h-blunts` | Retrasar la proteína 3 h tras ejercicio de resistencia atenúa efecto anabólico | ≥3 h = peor | resistencia | explicit | ch10 p.211 |
| `nutri-protein-post-endurance-min` | Post-resistencia aeróbica: ≥10 g de proteína en las 3 h (antes mejor) | ≥10 g / 3 h | resistencia prolongada | explicit | ch10 p.215 |

### Energía por objetivo (ch10 pp.217–218)
| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-energy-bulk-surplus` | Ganancia de peso: **+500 kcal/día** aprox. (ajustable) | +500 kcal/d | ganancia | explicit | ch10 p.217 |
| `nutri-energy-bulk-protein` | Proteína para maximizar masa magra en ganancia: **1.5–2.0 g/kg/día** | 1.5–2.0 g/kg | ganancia | explicit | ch10 p.217 |
| `nutri-energy-bulk-overfeeding-split` | Sobre alimentación controlada: dieta normal (15%) y alta (25%) en proteína almacena ~45% del exceso como masa magra vs 95% grasa en baja (5%) | 45% vs 95% | overfeeding 8 semanas | explicit | ch10 p.217 |
| `nutri-energy-cut-deficit` | Pérdida de grasa preservando músculo: **déficit moderado ~500 kcal/día** | −500 kcal/d | déficit | explicit | ch10 p.218 |
| `nutri-energy-cut-protein` | En déficit: **1.8–2.7 g/kg/día** (2.3–3.1 g/kg FFM) | 1.8–2.7 g/kg | déficit | explicit | ch10 p.218 |
| `nutri-energy-cut-adherence` | El predictor nº1 de éxito: adherencia; sin dieta ideal universal (low-carb vs low-fat equivalentes en déficit iso) | — | cualitativo | qualitative | ch10 p.218 |
| `nutri-energy-needs-table` | Necesidades calóricas estimadas: varón **38/41/50 kcal/kg** (ligera/moderada/intensa), mujer **35/37/44 kcal/kg** | tabla 10.4 | estimación rápida | explicit | ch10 p.217 |
| `nutri-energy-record-method` | Alternativa: registro dietético ≥3 días representativos con peso estable = requisito medio | ≥3 días | método | qualitative | ch10 p.217 |

## 4–7) N/A

## 8) Integración en Plan Maestro OS
- Motor de la calculadora v1: peso × kcal/kg (por horas de entrenamiento → actividad) ± 500 según objetivo; proteína según población/objetivo; cada número ligado a su ruleId y cita de esta tabla.
- Tabla 10.4 (kcal/kg) es el núcleo del cálculo de mantenimiento; las horas/semana se mapean: <5 h → light-moderate, 5–10 → moderate, >10 → heavy (inferencia nuestra: `inferred`, documentada).
