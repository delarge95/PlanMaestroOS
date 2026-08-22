# Maughan — Nutrition in Sport — SUPLEMENTOS (ch26 Williams, ch27 Greenhaff, ch28 Spriet) (pp. 356–392)

## 1) Metadatos
- Capítulos: 26 "Nutritional Ergogenic Aids" (M.H. Williams & B.C. Leutholtz, pp. 356–366), 27 "Creatine" (P.L. Greenhaff, pp. 367–378), 28 "Caffeine" (L.L. Spriet & R.A. Howlett, pp. 379–392). PDF offset −18.
- Tier de evidencia: los capítulos revisan RCTs directamente (Greenhaff y Spriet son investigadores primarios del tema).

## 2) Contratos y entidades
- `supplementProtocol` { sustancia, fase carga, mantenimiento, timing pre-evento, umbral riesgo }.

## 3) Reglas cuantitativas

### Creatina (ch27 Greenhaff)
| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-creatine-loading` | Protocolo de carga: **20 g/día (4×5 g) durante 5–6 días**, luego **2 g/día** mantenimiento | 20 g/d × 5–6 d → 2 g/d | atletas; aumenta creatina muscular ~20% | explicit | ch27 pp.369–370 |
| `nutri-creatine-slow-route` | Sin carga: 3 g/día alcanza el mismo nivel muscular en más tiempo (~28–30 días vs 5–6) | 3 g/d lento | alternativa sin carga | explicit | ch27 p.370 |
| `nutri-creatine-with-cho` | La insulina potencia la retención: CHO concurrente (~370 g/día, o CHO+proteína) aumenta el almacenamiento | CHO mejora uptake | co-ingestión | explicit | ch27 pp.370–371 |
| `nutri-creatine-total-pool` | Pools corporales: ~120 g total, 95% muscular; saturación del tejido tras carga | ~120 g | contexto fisiológico | explicit | ch27 pp.367–368 |
| `nutri-creatine-side-effects` | Evidencia revisada sin efectos adversos serios en protocolos estándar; malestar GI posible con dosis únicas altas | — | carga 20 g/d repartida | qualitative | ch27 pp.371–372 |

### Cafeína (ch28 Spriet & Howlett)
| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-caffeine-ergogenic-range` | Dosis ergogénicas: **3–13 mg/kg** estudiadas; efectos benéficos desde 3, óptimo ~5–6; rendimiento deteriorado en algunos atletas a 9+ | 3–13 mg/kg (efectivo 3–6) | 1 h antes o durante ejercicio prolongado | explicit | ch28 pp.380–382, 390 |
| `nutri-caffeine-side-effects-threshold` | Efectos adversos (ansiedad, temblor, GI, insomnio) más frecuentes ≥9 mg/kg | ≥9 mg/kg | umbral de riesgo | explicit | ch28 p.380 |
| `nutri-caffeine-timing` | Ingestión ~60 min antes del ejercicio (pico plasmático) o durante el mismo | 1 h pre | evento | explicit | ch28 p.381 (protocolos citados) |
| `nutri-caffeine-dose-response-flat` | Sin beneficio adicional por encima de ~6 mg/kg en la mayoría de estudios de dosis comparadas | plano >6 | dosis comparadas | inferred | ch28 pp.380–381 |

### Ayudas ergogénicas general (ch26)
| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-ergogenic-classification` | Clasificación de ayudas en categorías de eficacia; solo una minoría tiene evidencia sólida (macronutrientes, agua, electrolitos, cafeína, creatina entre las eficaces) | — | marco general | qualitative | ch26 pp.356–361 |

## 4–7) N/A

## 8) Integración en Plan Maestro OS
- Panel de suplementos SOLO con creatina + cafeína + proteína (los tres con evidencia y dosis). Cualquier otro suplemento: fuera hasta que llegue extracción con tier.
- Cruce con NSCA ch11 (2016): mismas cifras de creatina (20–25 g/d carga, 0.3 g/kg, 2 g/d mantenimiento) — corroboración explícita entre fuentes S2 y S3.
- Figuras 27.1–27.4 y tablas de composición → plan Gemini.
