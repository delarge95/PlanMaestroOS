# Maughan — Nutrition in Sport — ENERGÍA POR OBJETIVO Y FUERZA (ch35 Manore, ch47 Rogozkin) (pp. 469–483, 621–631)

## 1) Metadatos
- Capítulos: 35 "The Overweight Athlete" (M.M. Manore, pp. 469–483), 47 "Weightlifting and Power Events" (V.A. Rogozkin, pp. 621–631). PDF offset −18.
- Extracción local. Figuras de balance energético → plan Gemini.

## 2) Contratos y entidades
- `energyBalanceMode`: `deficit | maintenance | surplus`; `goalRateKgPerWeek` — inputs de la calculadora.
- Componentes TEE: TMB + TEF (proteína 20–30% de su energía, CHO 5–10%, grasa 3–5%) + actividad (p.475).

## 3) Reglas cuantitativas

### Energía y déficit (ch35)
| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-tef-macro` | Termogénesis de los alimentos: proteína 20–30%, CHO 5–10%, grasa 3–5% de su energía | TEF por macro | reposo, mixtos | explicit | ch35 p.475 |
| `nutri-deficit-not-too-restrictive` | El programa de pérdida NO puede ser demasiado restrictivo: riesgo de lesión, pérdida de FFM, bajo rendimiento, abandono | — | atletas en déficit | qualitative | ch35 p.469 |
| `nutri-deficit-gradual-education` | Pérdida gradual con componente educativo y tiempo adecuado; presión por apariencia → riesgo de TCA (derivación) | — | red flag TCA | qualitative | ch35 p.469 |
| `nutri-epoc` | EPOC ~5–10% sobre basal horas tras ejercicio intenso (75% VO2max 90 min → +15% 12 h en ejemplo citado) | 5–15% | ejercicio intenso | inferred | ch35 p.474 |
| `nutri-tea-share` | Actividad física: 10–15% del gasto en sedentarios; atletas gastan 1000–2000 kcal extra en entrenamiento | 4.2–8.4 MJ/día extra | atletas | explicit | ch35 pp.472–473 |

### Fuerza/potencia (ch47)
| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-strength-energy-range` | Energía diaria en entrenamiento duro: **3500–5500 kcal (14.6–23.0 MJ) varones; 3000–4500 kcal mujeres** | 3500–5500 / 3000–4500 kcal | halterofilia/potencia | explicit | ch47 p.624 |
| `nutri-strength-protein` | Proteína en entrenamiento duro: **1.4–2.0 g/kg/día** (recomendación rusa citada por Rogozkin) | 1.4–2.0 g/kg/d | fuerza | explicit | ch47 p.624 |
| `nutri-strength-cho` | CHO diario en potencia: **8–10 g/kg**; grasa 1.7–2.4 g/kg | 8–10 g/kg CHO | potencia con carga glucolítica | explicit | ch47 p.624 |
| `nutri-strength-macro-split` | Resultado porcentual si se siguen los g/kg: ~15–16% proteína / 25–26% grasa / 58–60% CHO | 58–60% CHO | derivado | inferred | ch47 p.624 |

## 4–7) N/A

## 8) Integración en Plan Maestro OS
- `goal=deficit` → regla NSCA de 500 kcal/día + proteína alta (ver nsca-essentials-4ed-proteina-energia.md); Maughan aporta los límites cualitativos (no restrictivo, gradual) que el UI debe mostrar como advertencia.
- `goal=surplus` (hipertrofia/ fuerza del usuario) → rango energético de ch47 como contexto y +500 kcal NSCA como pauta.
- Red flag TCA documentado → disparar disclaimer/derivación, nunca consejo.
