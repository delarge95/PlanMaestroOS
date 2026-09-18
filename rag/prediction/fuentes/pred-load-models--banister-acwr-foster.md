<!-- chunk
id: pred-banister-ffm
topic: banister-model
tags: fitness, fatigue, convolution, tau, banister, performance
section: Banister Fitness-Fatigue Model
entities: formula:banister-ffm
rules:
-->
Banister Fitness-Fatigue Model (impulse-response): p(t) = p* + k₁·e^(-t/τ₁)⊗w(t) − k₂·e^(-t/τ₂)⊗w(t). p* = performance basal; w(t) = carga diaria de entrenamiento; k₁,k₂ = magnitudes de fitness y fatiga; τ₁ = constante de decaimiento del fitness (~15 días); τ₂ = constante de decaimiento de la fatiga (~1-3 días, mucho más corta). El modelo convoluciona inputs de entrenamiento en adaptación positiva (fitness) y negativa (fatiga). La performance actual = fitness acumulado − fatiga acumulada. Para calibrar: τ₁ fitness 15±5 días, τ₂ fatiga 2±1 días, ratio k₂/k₁ ≈ 2 (la fatiga pesa el doble que el fitness pero se disipa más rápido). Fuente: Banister en "Modeling Elite Athletic Performance" (1991); revisión moderna en Sports Medicine Open 2022 (Springer s40798-022-00426-x).

<!-- chunk
id: pred-acwr-gabbett
topic: acwr
tags: acute, chronic, workload, injury, risk, gabbett
section: ACWR (Acute:Chronic Workload Ratio)
entities: formula:acwr
rules:
-->
ACWR (Gabbett): ratio = carga aguda ÷ carga crónica. Aguda = suma de carga de los últimos 7 días. Crónica = promedio semanal de los últimos 28 días (suma 28d ÷ 4). Zonas: <0.8 = undertraining (riesgo relativo alto por desacondicionamiento); 0.8-1.3 = "sweet spot" (riesgo mínimo); >1.5 = "danger zone" (riesgo máximo de lesión). ACWR=1.0 significa que entrenas exactamente a tu carga habitual. Meta-análisis 2025 (Qin et al., Springer) confirma 0.8-1.3 como zona de bajo riesgo. Limitación reconocida (Zouhal 2021): el ACWR como ratio tiene críticas estadísticas; úselo como bandera, no como diagnóstico. Carga puede medirse con sRPE (RPE × minutos) o tonelaje (series × peso).

<!-- chunk
id: pred-foster-srpe
topic: session-rpe
tags: foster, monotony, strain, load, overtraining
section: Foster Session-RPE
entities: formula:srpe, formula:monotony, formula:strain
rules:
-->
Foster Session-RPE (PMC5673663): carga de sesión = RPE (escala CR-10) × duración en minutos. Carga diaria = suma de cargas de sesión del día. Carga semanal = suma de cargas diarias. Monotonía = media de carga diaria ÷ desviación estándar de carga diaria (en la semana). Strain semanal = carga semanal × monotonía. Monotonía >2.0 = riesgo elevado de enfermedad/overtraining (Foster 1998). Strain elevado (percentil 75+ de los últimos 3 meses) = bandera roja. Para la app: calcular diaria y semanalmente desde el historial de sesiones + cardio.

<!-- chunk
id: pred-wellness-composite
topic: wellness
tags: score, hrv, sleep, soreness, mood, stress
section: Wellness Score Compuesto
entities: formula:wellness
rules:
-->
Wellness score compuesto: media ponderada de 4-5 dimensiones normalizadas a 0-100. Peso típico: sueño 30% (horas vs objetivo 7-9h), estrés 20% (inverso, escala 1-5), dolor/molestia 20% (inverso), energía/estado de ánimo 20%, HRV opcional 10% (z-score de los últimos 7 días). Si no hay HRV, redistribuir a sueño y estrés. Score >70 = verde (listo), 50-70 = amarillo (modificar), <50 = rojo (descanso). Los ítems son los del Hooper-Mackinnon Index validado. Para la app: ya tenemos sueño (wearable o self-report), dolor, energía y estrés del clinicalStore; HRV del wearableStore (si existe).
