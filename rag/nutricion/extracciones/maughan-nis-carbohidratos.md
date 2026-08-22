# Maughan — Nutrition in Sport — CARBOHIDRATOS (ch5 Burke, ch7 Ivy, ch8 Hargreaves) (pp. 73–118)

## 1) Metadatos
- Libro: *Nutrition in Sport* (IOC, Maughan ed., 2000). Capítulos: 5 "Dietary Carbohydrates" (Burke, pp. 73–84), 7 "Optimization of Glycogen Stores" (Ivy, pp. 97–111), 8 "Carbohydrate Replacement during Exercise" (Hargreaves, pp. 112–118). PDF offset −18.
- Extracción local (PyMuPDF). Figuras 7.2–7.5 y tablas 5.5/7.x no extraídas → plan Gemini.

## 2) Contratos y entidades
- `choDailyGPerKg`, `choPeriWorkoutGPerKg`, `choDuringGPerHour` — métricas.
- Fases de resíntesis de glucógeno: rápida (independiente de insulina, ~30–60 min) y lenta (sensible a insulina, horas) — modelable como contexto de timing.

## 3) Reglas cuantitativas

| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-cho-daily-recovery` | Dieta para recuperación diaria de glucógeno / carga previa a competición prolongada | **7–10 g CHO/kg/día** | atletas de resistencia, recuperación diaria o carga | explicit | ch5 p.81 |
| `nutri-cho-post-early-recovery` | Ingerir ≥1 g CHO/kg en los primeros 30 min post-sesión | **≥1 g/kg dentro de 30 min** | recuperación temprana | explicit | ch5 p.81 |
| `nutri-cho-pre-event-meal` | Comida rica en CHO 1–4 h antes de sesión prolongada | **1–4 g CHO/kg en las 1–4 h previas** | pre-competición | explicit | ch5 p.81 |
| `nutri-cho-during-endurance` | CHO durante ejercicio prolongado moderado-alto | **30–60 g CHO/h** | ejercicio prolongado; alcanzable con 600–1200 ml/h de bebida deportiva | explicit | ch5 p.81, ch8 pp.115–116 |
| `nutri-cho-exogenous-oxidation-cap` | Techo de oxidación de CHO exógeno | **~1.0–1.3 g/min** (≈60–78 g/h) | single transportable CHO | explicit | ch8 p.115 |
| `nutri-cho-drink-concentration` | Concentración útil de CHO en bebida | **6–8% óptimo; >6–8% no mejora oxidación y empeora GI y aporte de fluido** | durante ejercicio | explicit | ch8 p.115 |
| `nutri-cho-post-frequency-amount` | Suplemento CHO inmediato + cada 2 h maximiza resíntesis | **0.7–1.4 g/kg cada 2 h** (0.35 g/kg reduce la tasa a la mitad) | recuperación 6 h post | explicit | ch7 p.104 |
| `nutri-cho-post-plateau` | Meseta de resíntesis con suplementos ≥1 g/kg | tasa máxima ~5.5–5.7 mmol·g⁻¹·h⁻¹ con ≥1–1.5 g/kg | ventana aguda | explicit | ch7 pp.104–105 |
| `nutri-cho-delay-2h-halves-rate` | Retrasar el CHO 2 h reduce la tasa de resíntesis ~50% | −50% vs inmediato | agudo | explicit | ch7 p.103 |
| `nutri-cho-daily-cap-600g` | >600 g CHO/día no aporta beneficio adicional de almacenamiento | techo ~600 g/día | 24 h post-depleción (Costill 1981) | explicit | ch7 p.101 |
| `nutri-cho-gi-high-better-recovery` | CHO de índice glucémico alto repone más glucógeno en 24 h | 10 g/kg/día alto IG +106 vs bajo IG +71.5 mmol·g⁻¹ | recuperación 24 h | explicit | ch7 p.103 |
| `nutri-cho-modified-loading` | Carga modificada (taper + 50% CHO 3 días + 70% CHO 3 días) ≈ clásica | 70% CHO últimos 3 días | pre-evento resistencia (Sherman 1981) | explicit | ch7 p.101 |
| `nutri-cho-percent-energy-caveat` | Preferir g/kg sobre % de energía: 50–60% de energía puede bastar con ingestas muy altas; 65–70% solo en ingestas bajas | orientativo | cualitativo aplicado a comunicaciones | qualitative | ch5 p.82 |

## 4–7) N/A para nutrición (sin anatomía/progresiones/cues/rehab)

## 8) Integración en Plan Maestro OS
- Estas 4 reglas de Burke (p.81) son el ESQUELETO del día tipo: pre-entreno / durante / post / diario. NSCA 4ª ed las actualiza (30–90 g/h múltiples transportadores) — conflicto a registrar: la cifra de Maughan es "30–60 g/h", NSCA "hasta ~90 g/h con glucosa+fructosa". El validador anota ambas con el año de la fuente.
- Las figuras 7.2–7.5 (protocolos de supercompensación y dosis-respuesta) van al plan Gemini para verificación visual.
