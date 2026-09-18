<!-- chunk
id: pred-muscle-gain-rates
topic: bodycomp
tags: muscle, gain, rate, novice, intermediate, advanced
section: Rate of Muscle Gain (McDonald/Aragon)
entities: reference:muscle-gain-rates
rules:
-->
Rate de ganancia muscular natural (McDonald + Aragon): Primer año = 1-1.5% del peso corporal/mes (~2 lbs/mes para hombre de 80kg). Segundo año = 0.5-1%/mes (~1 lb/mes). Tercer año+ = 0.25-0.5%/mes (~0.5 lb/mes). Después de 4 años = "3/5ths of jack squat" (McDonald). Aragon (percentage-based): Year 1 = 1-1.5% BW/month, Year 2 = 0.5-1%, Year 3+ = 0.25-0.5%. Para la app: calcular training age desde la primera sesión registrada, aplicar la tasa correspondiente, y predecir peso objetivo a 30/60/90 días dado surplus calórico. Si la ganancia real supera la tasa por >50%, marcar como posible grasa.

<!-- chunk
id: pred-sleep-performance
topic: sleep
tags: sleep, debt, recovery, performance, hrv
section: Sleep y Recuperación
entities: reference:sleep-debt
rules:
-->
Sleep debt y performance: cada noche <6h reduce la síntesis proteica miofibrilar y eleva la pérdida de masa magra en déficit (Nippard muscle-ladder-2024). El sleep debt acumulado (>5h en 7 días) preduce performance entre 3-8% en fuerza. HRV nocturno (RMSSD) como predictor de readiness: si HRV de hoy < media 7d − 1 desviación estándar → riesgo de bajo performance; si < media − 2σ → alto riesgo de enfermedad/lesión. La HRV tarda 48-72h en reflejar una sesión de carga alta (lag fisiológico). Para la app: calcular sleep debt semanal desde wearable/self-report y z-score de HRV desde wearableStore.

<!-- chunk
id: pred-stagnation-detection
topic: progress
tags: stagnation, plateau, progression, detection
section: Detección de Estancamiento
entities: reference:stagnation
rules:
-->
Detección de estancamiento: si en las últimas 3 semanas el volumen efectivo (series duras × peso medio) por patrón no crece >2% Y el 1RM estimado no mejora >1%, marcar como "posible estancamiento". Causas a sugerir en orden de probabilidad: volumen insuficiente (<MEV), recuperación inadecuada (sleep debt o HRV bajo), monotonía alta (>2.0), o necesidad de deload (fatiga acumulada >4 semanas sin descarga). La app ya tiene las reglas fit:volume-mev/mrv y fit:deload-due; este módulo las conecta con el historial real para detectar cuándo está PASANDO y no solo cuando la regla lo dice en abstracto.
