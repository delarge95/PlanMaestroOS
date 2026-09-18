<!-- chunk
id: pred-1rm-epley-brzycki
topic: 1rm-prediction
tags: epley, brzycki, lombardi, oconner, wathan, strength
section: Fórmulas de predicción de 1RM
entities: formula:epley, formula:brzycki, formula:lombardi
rules:
-->
Predicción de 1RM (One Rep Max) desde series submáximas. Epley (1985): 1RM = peso × (1 + reps/30), más precisa en 1-10 reps. Brzycki (1993): 1RM = peso / (1.0278 − 0.0278 × reps), válida en 2-10 reps. Lombardi: 1RM = peso × reps^0.10 (curva de potencia, diverge a >8 reps). O'Conner: 1RM = peso × (1 + 0.025 × reps), conservadora. Wathan: 1RM = 100 × peso / (48.8 + 53.8 × e^(-0.075 × reps)). Mayhew: 1RM = 100 × peso / (52.2 + 41.9 × e^(-0.055 × reps)). Epley corre 2-4% más alta que Brzycki (prefiera Brzycki para conservador). Todas pierden precisión >10-12 reps: a 20 reps la sobreestimación puede superar 40%. Para la app: usar el promedio de Epley+Brzycki en sets de 3-10 reps con RIR conocido como input.

<!-- chunk
id: pred-1rm-rir-adjustment
topic: 1rm-rir
tags: rir, reps-in-reserva, adjustment
section: Ajuste por RIR
entities: formula:rir-adjustment
rules:
-->
Ajuste por RIR (Reps In Reserve): si completaste N reps a RIR R, tu máximo estimado es a N+R reps. Para 1RM: usar la fórmula con reps_efectivas = N + R. Ejemplo: 8 reps a RIR 2 → calcular 1RM con 10 reps. Este ajuste es estándar en programs como Scientific Principles de Israetel (ch. 2, RIR 0-3 en hipertrofia). El error estándar del estimado crece con RIR (más incertidumbre a RIR alto).

<!-- chunk
id: pred-1rm-accuracy-table
topic: 1rm-accuracy
tags: precision, tabla, rango-reps
section: Precisión por rango
entities: reference:accuracy-table
rules:
-->
Precisión de fórmulas por rango de reps (síntesis de Macarilla 2022, PMC9465738 y DiStasio 2014): en 1-5 reps, todas las fórmulas convergen ±2%. En 6-10 reps, Epley/Brzycki siguen válidas ±5%. En 11-15 reps, Brzycki subestima ~5-8%, Lombardi sobreestima ~10%. En >15 reps, TODAS sobreestiman significativamente (>15%). Recomendación práctica: solo confiar en estimados de 1RM desde sets ≤10 reps; para >10, marcar como "estimado de baja confianza".
