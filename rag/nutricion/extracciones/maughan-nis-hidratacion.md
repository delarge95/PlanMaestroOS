# Maughan — Nutrition in Sport — HIDRATACIÓN Y ELECTROLITOS (ch15–17, 19) (pp. 203–265)

## 1) Metadatos
- Capítulos: 15 "Temperature Regulation and Fluid and Electrolyte Balance" (Maughan & Nadel, pp. 203–215), 16 "Effects of Dehydration and Rehydration on Performance" (Sawka et al., pp. 216–225), 17 "Water and Electrolyte Loss and Replacement in Exercise" (Maughan, pp. 226–240), 19 "Rehydration and Recovery after Exercise" (Shirreffs, pp. 256–265). PDF offset −18.
- Autoridad MÁXIMA del corpus en este tema (Maughan/Shirreffs/Sawka = fuentes canónicas de hidratación deportiva).

## 2) Contratos y entidades
- `bodyWaterLossPct` (% de masa corporal perdida), `sweatRateLPerHour`, `drinkSodiumMmolPerL`, `rehydrationVolumeFactor` — métricas.
- Umbrales de déficit → señales de rendimiento (1%, 2%, 4%).

## 3) Reglas cuantitativas

| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-hydration-deficit-1pct-temp` | Un déficit de agua del **1% del peso corporal** ya eleva la temperatura central durante el ejercicio | 1% BWL | ejercicio en calor/templado | explicit | ch16 p.220 |
| `nutri-hydration-deficit-1-2pct-capacity` | Déficits marginales de 1–2% reducen la capacidad de ejercicio progresivo sin alterar VO2max | 1–2% BWL | ejercicio progresivo hasta fatiga | explicit | ch16 p.219 |
| `nutri-hydration-deficit-2pct-vo2max` | 2–4% BWL reduce marcadamente la potencia aeróbica máxima (peor en calor) | 2–4% BWL | clima cálido | explicit | ch16 p.219 |
| `nutri-hydration-deficit-2pct-performance` | 2% BWL (diurético) −11% volumen plasmático: ~5% peor rendimiento en 5000/10000 m | −5% rendimiento 5–10 km | hipohidratación farmacológica | inferred | ch16 p.220 |
| `nutri-hydration-baseline-daily-water` | Requerimiento hídrico diario basal ~2.5 L; pérdidas mínimas: piel ~600 ml, orina ≥800 ml, respiración ~200 ml (hasta 1500 ml en frío seco/altitud) | ~2.5 L/día; ~1.6 L pérdidas obligatorias | reposo, nivel del mar | explicit | ch17 pp.226–227 |
| `nutri-hydration-during-running` | Maratón: 100–200 ml cada 2–3 km (1400–4200 ml totales); élite ~2 L/h no tolerable; 300 ml/h insuficiente salvo frío | 100–200 ml / 2–3 km | corredores; pauta ACSM previa 1996 | explicit | ch17 p.234 |
| `nutri-hydration-drink-cho-range` | Concentración óptima de CHO en bebida durante ejercicio: **2–8%**; >40 g/L enlentece el vaciamiento gástrico | 2–8% CHO | durante ejercicio prolongado | explicit | ch17 pp.230, 235 |
| `nutri-hydration-post-volume-150pct` | Rehidratación post-ejercicio: volumen ingerido **≥150% de la pérdida de sudor** (1 L por kg perdido no cubre diuresis obligatoria) | ×1.5 del déficit | recuperación | explicit | ch17 p.237, ch19 p.261 |
| `nutri-hydration-post-sodium` | Bebida de rehidratación con sodio similar al sudor (típico sudor: Na⁺ ~50 mmol/L, K⁺ ~5 mmol/L); bebidas deportivas 10–30 mmol/L son insuficientes para rehidratar rápido; SRO OMS 60–90 mmol/L | Na⁺ ~50 mmol/L objetivo | post-ejercicio sin comida | explicit | ch19 pp.260, 263 |
| `nutri-hydration-sodium-with-food` | Con comida sólida, el agua solo basta (la comida repone electrolitos) | — | rehidratación con alimento | qualitative | ch19 p.263 |
| `nutri-hydration-sweat-na-range` | Sodio de sudor poblacional (varones jóvenes UK): percentiles amplios alrededor de 3.8 g/L NaCl-equivalente aprox. — alta variabilidad interindividual | rango poblacional | individualización obligatoria | qualitative | ch17 p.228 |

## 4–7) N/A

## 8) Integración en Plan Maestro OS
- Regla de calculadora: peso pre/post sesión (UserState cuando exista) → déficit % → warning si ≥1%; volumen de rehidratación = déficit × 1.5.
- El día tipo: botella con electrolitos en franja peri-entreno cuando sesión >60 min o calor.
- Tabla 17.1/17.2 (composición de sudor y bebidas comerciales) → plan Gemini (tablas escaneadas).
