# ACSM Guidelines for Exercise Testing and Prescription (10ª ed. 2018) — Caminata, METs, FITT

> Digest desde `biblioteca/extracciones/acsm-exercise-testing-prescription-10ed.md` (extracción de chat recuperada por AG-BIB). Fuente compartida (cardio/nutrición); aquí solo lo usado por la sección Cardio.

## METs y clasificación (Cap. 6)
- **1 MET = 3.5 mL·kg⁻¹·min⁻¹**; clasificación absoluta: sedentario ≤1.5, ligero 2.0–2.9, moderado 3.0–5.9, vigoroso ≥6.0 METs — regla `met-classification` (explicit, Cap. 6).
- **kcal/min = [(METs × 3.5 × peso_kg) / 1000] × 5** — regla de conversión (explicit, Cap. 6). Interfaz para estimador kcal de AG-NUTRI.

## Ecuaciones metabólicas (Cap. 6, Tabla 6.3 — explicit)
| Modalidad | Rango | Ecuación VO2 (mL/kg/min) |
|---|---|---|
| Caminar | 1.9–3.7 mph | (0.1×S) + (1.8×S×G) + 3.5 |
| Correr | >5.0 mph | (0.2×S) + (0.9×S×G) + 3.5 |
| Ciclo piernas | 50–200 W | (10.8×W/M) + 7 |
| Ergómetro brazos | 25–125 W | (18.0×W/M) + 3.5 |
S = m/min; G = grado decimal; W = kg·m/min (1 W = 6.12 kg·m/min); M = masa kg.
Derivación de METs de presets: dividir VO2 entre 3.5.

## Caminata (Cap. 4–6, 9)
- Cadencia ~100 pasos/min para intensidad moderada (explicit, cues Cap. 4/5).
- Rockport 1-milla: VO2max = 132.853 − 0.1692×peso − 0.3877×edad + 6.315×sexo − 3.2649×tiempo_min − 0.1565×HR (explicit, Cap. 5).
- Caminar es Tipo A (intensidad continua, mínima habilidad — Tabla 6.4); spinning/trotar Tipo B (adultos con hábito).

## FITT aeróbico (Cap. 6, Tabla 6.5 — explicit)
- Frecuencia ≥5 d/sem moderado o ≥3 d/sem vigoroso (o mixto 3–5).
- Intensidad moderada 40–59% HRR/VO2R; vigorosa 60–89%; ligera 30–39% para desentrenados.
- Tiempo 30–60 min/día moderado (≥150 min/sem) o 20–60 min vigoroso (≥75 min/sem); bouts ≥10 min.
- Volumen ≥500–1000 MET·min/sem (~1000 kcal/sem); ≥7000 pasos/día.
- Progresión +5–10 min cada 1–2 semanas las primeras 4–6 semanas (explícito, mejor que "regla 10%" para adultos que inician).
