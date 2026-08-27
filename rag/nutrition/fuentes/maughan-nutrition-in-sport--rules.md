Reglas legacy del módulo nutrición migradas a chunks v4 (AG-NUTRI ciclo 2). Cada chunk conserva el id legacy de la regla; los valores numéricos están codificados en entities (num:ruta=valor) y parafraseados en el summary.

<!-- chunk
id: nutri-mau-protein-strength
topic: protein
tags: strength
chapter: 10
page: 144
entities: num:root.min=1.7, num:root.max=1.8, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=strength
rules: nutri-mau-protein-strength
-->
Ingesta optima de proteina en fuerza puede llegar a 1.7-1.8 g/kg/dia (varones; datos femeninos limitados).

<!-- chunk
id: nutri-mau-protein-endurance
topic: protein
tags: endurance
chapter: 10
page: 144
entities: num:root.min=1.2, num:root.max=1.4, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=endurance
rules: nutri-mau-protein-endurance
-->
Ingesta optima en resistencia: ~1.2-1.4 g/kg/dia.

<!-- chunk
id: nutri-mau-protein-rda-insufficient
topic: protein
tags: rda
chapter: 10
page: 144
entities: num:root.value=0.8, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=active
rules: nutri-mau-protein-rda-insufficient
-->
La RDA (0.8 g/kg/dia en la mayoria de paises) es inadecuada para personas fisicamente activas.

<!-- chunk
id: nutri-mau-protein-food-sufficient
topic: protein
tags: supplement-unnecessary
chapter: 10
page: 145
entities: num:root.min=1.2, num:root.max=1.8, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:energyAdequate=true
rules: nutri-mau-protein-food-sufficient
-->
1.2-1.8 g/kg/dia se alcanzan con dieta si la energia es adecuada (ej. 5000 kcal con 10% proteina ~ 1.8 g/kg en 70 kg).

<!-- chunk
id: nutri-mau-protein-studied-range
topic: protein
tags: safety
chapter: 10
page: 133
entities: num:root.min=1, num:root.max=2.7, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=trained-males
rules: nutri-mau-protein-studied-range
-->
Estudios de balance nitrogenado con ingesta de 1.0-2.7 g/kg/dia sin dano.

<!-- chunk
id: nutri-mau-protein-high-no-benefit
topic: protein
tags: safety
chapter: 10
page: 144
entities: num:root.min=1.3, num:root.max=1.4, unit:g/kg/dia, confidence:inferred, tier:expert-book, cond:population=strength
rules: nutri-mau-protein-high-no-benefit
-->
Poca evidencia de que >1.3-1.4 g/kg/dia mejore el rendimiento muscular (datos en varones, 4-8 semanas).

<!-- chunk
id: nutri-mau-cho-daily-recovery
topic: carbohydrates
tags: daily, recovery
chapter: 5
page: 81
entities: num:root.min=7, num:root.max=10, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=endurance
rules: nutri-mau-cho-daily-recovery
-->
Recuperacion diaria de glucogeno / carga: 7-10 g CHO/kg/dia.

<!-- chunk
id: nutri-mau-cho-post-early
topic: peri-workout
tags: post-workout
chapter: 5
page: 81
entities: num:root.min=1, unit:g/kg, confidence:explicit, tier:expert-book, cond:phase=post, cond:withinMin=30
rules: nutri-mau-cho-post-early
-->
>=1 g CHO/kg dentro de los 30 min post-sesion para recuperacion temprana.

<!-- chunk
id: nutri-mau-cho-pre-event
topic: peri-workout
tags: pre-workout
chapter: 5
page: 81
entities: num:root.min=1, num:root.max=4, unit:g/kg, confidence:explicit, tier:expert-book, cond:phase=pre, cond:hoursBefore=1-4
rules: nutri-mau-cho-pre-event
-->
Comida rica en CHO 1-4 g/kg en las 1-4 h previas a sesion prolongada.

<!-- chunk
id: nutri-mau-cho-during
topic: peri-workout
tags: during
chapter: 5
page: 81
entities: num:root.min=30, num:root.max=60, unit:g/h, confidence:explicit, tier:expert-book, cond:phase=during
rules: nutri-mau-cho-during
-->
30-60 g CHO/h durante ejercicio moderado-alto prolongado (2000; ver conflicto con NSCA 2016: 30-90).

<!-- chunk
id: nutri-mau-cho-oxidation-cap
topic: peri-workout
tags: during, mechanism
chapter: 8
page: 115
entities: num:root.min=1, num:root.max=1.3, unit:g/min, confidence:explicit, tier:expert-book, cond:phase=during
rules: nutri-mau-cho-oxidation-cap
-->
Oxidacion exogena pico ~1.0-1.3 g/min.

<!-- chunk
id: nutri-mau-cho-drink-concentration
topic: hydration
tags: during, sports-drink
chapter: 8
page: 115
entities: num:root.min=2, num:root.max=8, unit:% CHO, confidence:explicit, tier:expert-book, cond:phase=during
rules: nutri-mau-cho-drink-concentration
-->
Concentracion optima de CHO en bebida durante ejercicio: 2-8%; >6-8% no aumenta oxidacion y empeora GI/fluido.

<!-- chunk
id: nutri-mau-cho-post-intervals
topic: peri-workout
tags: post-workout, glycogen
chapter: 7
page: 104
entities: num:root.min=0.7, num:root.max=1.4, unit:g/kg cada 2h, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-mau-cho-post-intervals
-->
Suplemento CHO inmediato y cada 2 h: 0.7-1.4 g/kg maximiza resintesis (0.35 g/kg la reduce a la mitad).

<!-- chunk
id: nutri-mau-cho-post-plateau
topic: peri-workout
tags: post-workout, glycogen
chapter: 7
page: 104
entities: num:root.min=5.5, num:root.max=5.7, unit:mmol/g/h, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-mau-cho-post-plateau
-->
Meseta de resintesis ~5.5-5.7 mmol/g/h con suplementos >=1-1.5 g/kg.

<!-- chunk
id: nutri-mau-cho-delay-halves
topic: peri-workout
tags: post-workout, timing
chapter: 7
page: 103
entities: num:root.value=50, unit:% reduccion, confidence:explicit, tier:expert-book, cond:phase=post, cond:delay=2h
rules: nutri-mau-cho-delay-halves
-->
Retrasar el CHO 2 h reduce la tasa de resintesis ~50% (insulinorresistencia muscular).

<!-- chunk
id: nutri-mau-cho-cap-600g
topic: carbohydrates
tags: daily
chapter: 7
page: 101
entities: num:root.max=600, unit:g/dia, confidence:explicit, tier:expert-book, cond:window=24h
rules: nutri-mau-cho-cap-600g
-->
>600 g CHO/dia no aporta beneficio adicional de almacenamiento en 24 h.

<!-- chunk
id: nutri-mau-cho-gi-high
topic: carbohydrates
tags: gi, recovery
chapter: 7
page: 103
entities: num:root.hi=106, num:root.lo=71.5, unit:mmol/g, confidence:explicit, tier:rct, cond:window=24h
rules: nutri-mau-cho-gi-high
-->
Con 10 g/kg/dia en 24 h: CHO de IG alto sintetiza mas glucogeno (106 vs 71.5 mmol/g).

<!-- chunk
id: nutri-mau-cho-modified-loading
topic: carbohydrates
tags: loading
chapter: 7
page: 101
entities: num:root.choPct=70, num:root.days=3, unit:% energia, confidence:explicit, tier:expert-book, cond:goal=carb-load
rules: nutri-mau-cho-modified-loading
-->
Carga modificada (taper 6 dias + 50% CHO 3 dias + 70% CHO 3 dias) igual de efectiva que la clasica.

<!-- chunk
id: nutri-mau-cho-gkg-over-percent
topic: carbohydrates
tags: daily
chapter: 5
page: 82
entities: confidence:qualitative, tier:expert-book, cond:population=any
rules: nutri-mau-cho-gkg-over-percent
-->
Prescribir CHO en g/kg, no en % de energia: con ingestas altas 50-60% basta; 65-70% solo con ingestas bajas.

<!-- chunk
id: nutri-mau-hyd-1pct-temp
topic: hydration
tags: dehydration, threshold
chapter: 16
page: 220
entities: num:root.value=1, unit:% peso corporal, confidence:explicit, tier:expert-book, cond:phase=during
rules: nutri-mau-hyd-1pct-temp
-->
Un deficit de agua del 1% del peso corporal ya eleva la temperatura central durante el ejercicio.

<!-- chunk
id: nutri-mau-hyd-1-2pct-capacity
topic: hydration
tags: dehydration, performance
chapter: 16
page: 219
entities: num:root.min=1, num:root.max=2, unit:% peso corporal, confidence:explicit, tier:expert-book, cond:phase=during
rules: nutri-mau-hyd-1-2pct-capacity
-->
Deficits marginales de 1-2% reducen la capacidad de ejercicio progresivo sin alterar VO2max.

<!-- chunk
id: nutri-mau-hyd-2-4pct-vo2max
topic: hydration
tags: dehydration, performance
chapter: 16
page: 219
entities: num:root.min=2, num:root.max=4, unit:% peso corporal, confidence:explicit, tier:expert-book, cond:phase=during, cond:heat=true
rules: nutri-mau-hyd-2-4pct-vo2max
-->
Deficits de 2-4% reducen marcadamente la potencia aerobica maxima, sobre todo en calor.

<!-- chunk
id: nutri-mau-hyd-2pct-running
topic: hydration
tags: dehydration, performance
chapter: 16
page: 220
entities: num:root.bwl=2, num:root.performanceLoss=5, unit:%, confidence:inferred, tier:expert-book, cond:mode=running
rules: nutri-mau-hyd-2pct-running
-->
2% de perdida (−11% volumen plasmatico): ~5% peor rendimiento en 5000-10000 m.

<!-- chunk
id: nutri-mau-hyd-baseline-daily
topic: hydration
tags: daily
chapter: 17
page: 226
entities: num:root.value=2.5, unit:L/dia, confidence:explicit, tier:expert-book, cond:phase=rest
rules: nutri-mau-hyd-baseline-daily
-->
Requerimiento hidrico diario basal ~2.5 L (piel ~600 ml, orina >=800 ml, respiracion ~200 ml).

<!-- chunk
id: nutri-mau-hyd-during-600-1200
topic: hydration
tags: during, fluid-rate
chapter: 8
page: 115
entities: num:root.min=600, num:root.max=1200, unit:ml/h, confidence:explicit, tier:expert-book, cond:phase=during, cond:durationMin=60
rules: nutri-mau-hyd-during-600-1200
-->
30-60 g CHO/h se alcanzan con bebida deportiva a 600-1200 ml/h, aportando ademas fluido y reduciendo efectos de la deshidratacion.

<!-- chunk
id: nutri-mau-hyd-marathon-intervals
topic: hydration
tags: during, running
chapter: 17
page: 234
entities: num:root.min=100, num:root.max=200, unit:ml cada 2-3 km, confidence:explicit, tier:expert-book, cond:phase=during, cond:mode=running
rules: nutri-mau-hyd-marathon-intervals
-->
Maraton: 100-200 ml cada 2-3 km (1400-4200 ml totales); ~2 L/h intolerable; 300 ml/h insuficiente salvo frio.

<!-- chunk
id: nutri-mau-hyd-post-150pct
topic: hydration
tags: post-workout, rehydration
chapter: 17
page: 237
entities: num:root.min=150, unit:% del deficit, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-mau-hyd-post-150pct
-->
Rehidratacion: volumen >=150% de la perdida de sudor (1 L por kg perdido no cubre la diuresis obligatoria).

<!-- chunk
id: nutri-mau-hyd-post-na-50
topic: hydration
tags: post-workout, electrolytes
chapter: 19
page: 263
entities: num:root.na=50, num:root.k=5, unit:mmol/L, confidence:explicit, tier:expert-book, cond:phase=post, cond:withoutFood=true
rules: nutri-mau-hyd-post-na-50
-->
Bebida de rehidratacion: sodio similar al sudor (típico Na ~50 mmol/L, K ~5 mmol/L) para retener el fluido.

<!-- chunk
id: nutri-mau-hyd-sports-drinks-na
topic: hydration
tags: post-workout, electrolytes
chapter: 19
page: 263
entities: num:root.min=10, num:root.max=30, unit:mmol/L, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-mau-hyd-sports-drinks-na
-->
Las bebidas deportivas (10-30 mmol Na/L) son insuficientes para rehidratar rapido sin comida; SRO OMS 60-90 mmol/L.

<!-- chunk
id: nutri-mau-hyd-food-sufficient
topic: hydration
tags: post-workout
chapter: 19
page: 263
entities: confidence:qualitative, tier:expert-book, cond:phase=post, cond:withFood=true
rules: nutri-mau-hyd-food-sufficient
-->
Si se come alimento solido junto al agua, la comida repone los electrolitos y el agua sola basta.

<!-- chunk
id: nutri-mau-hyd-sweat-variability
topic: hydration
tags: sweat, individualization
chapter: 17
page: 228
entities: confidence:qualitative, tier:expert-book, cond:population=any
rules: nutri-mau-hyd-sweat-variability
-->
La composicion del sudor varia mucho entre individuos y en el tiempo: pautas de electrolitos individualizadas.

<!-- chunk
id: nutri-mau-creatine-loading
topic: supplements
tags: creatine
chapter: 27
page: 369
entities: num:root.load=20, num:root.days=6, num:root.maintenance=2, unit:g/dia, confidence:explicit, tier:rct, cond:supplement=creatine-monohydrate
rules: nutri-mau-creatine-loading
-->
Carga 20 g/dia (4x5 g) durante 5-6 dias, luego 2 g/dia de mantenimiento; aumenta creatina muscular ~20%.

<!-- chunk
id: nutri-mau-creatine-slow-route
topic: supplements
tags: creatine
chapter: 27
page: 370
entities: num:root.value=3, unit:g/dia, confidence:explicit, tier:rct, cond:supplement=creatine-monohydrate, cond:protocol=no-load
rules: nutri-mau-creatine-slow-route
-->
Sin carga: 3 g/dia alcanza niveles similares en ~28-30 dias.

<!-- chunk
id: nutri-mau-creatine-cho-synergy
topic: supplements
tags: creatine, carbs
chapter: 27
page: 370
entities: num:root.cho=370, unit:g/dia, confidence:explicit, tier:rct, cond:supplement=creatine-monohydrate
rules: nutri-mau-creatine-cho-synergy
-->
La co-ingesta de CHO (~370 g/dia) o CHO+proteina potencia el almacenamiento de creatina via insulina.

<!-- chunk
id: nutri-mau-creatine-pool
topic: supplements
tags: creatine
chapter: 27
page: 367
entities: num:root.total=120, num:root.musclePct=95, unit:g, confidence:explicit, tier:expert-book, cond:context=physiology
rules: nutri-mau-creatine-pool
-->
Pool corporal total ~120 g, 95% en musculo.

<!-- chunk
id: nutri-mau-creatine-safety
topic: supplements
tags: creatine, safety
chapter: 27
page: 371
entities: confidence:qualitative, tier:expert-book, cond:supplement=creatine-monohydrate
rules: nutri-mau-creatine-safety
-->
Sin efectos adversos serios en protocolos estandar; posible malestar GI con dosis unicas altas.

<!-- chunk
id: nutri-mau-caffeine-range
topic: supplements
tags: caffeine
chapter: 28
page: 380
entities: num:root.min=3, num:root.max=13, unit:mg/kg, confidence:explicit, tier:expert-book, cond:supplement=caffeine
rules: nutri-mau-caffeine-range
-->
Dosis ergogenicas estudiadas 3-13 mg/kg; beneficio desde 3, deterioro en algunos atletas a 9+.

<!-- chunk
id: nutri-mau-caffeine-adverse-9
topic: supplements
tags: caffeine, safety
chapter: 28
page: 380
entities: num:root.min=9, num:root.max=13, unit:mg/kg, confidence:explicit, tier:expert-book, cond:supplement=caffeine, cond:safety=true
rules: nutri-mau-caffeine-adverse-9
-->
Efectos adversos mas prevalentes a 9-13 mg/kg y asociados a peor rendimiento en algunos.

<!-- chunk
id: nutri-mau-caffeine-timing
topic: supplements
tags: caffeine, timing
chapter: 28
page: 381
entities: num:root.value=60, unit:min pre, confidence:explicit, tier:expert-book, cond:supplement=caffeine
rules: nutri-mau-caffeine-timing
-->
Ingestion ~60 min antes del ejercicio o durante el mismo (protocolos de los estudios citados).

<!-- chunk
id: nutri-mau-caffeine-flat-6
topic: supplements
tags: caffeine
chapter: 28
page: 380
entities: num:root.min=6, unit:mg/kg, confidence:inferred, tier:expert-book, cond:supplement=caffeine
rules: nutri-mau-caffeine-flat-6
-->
Sin beneficio adicional >6 mg/kg en la mayoria de comparaciones de dosis.

<!-- chunk
id: nutri-mau-ergogenic-classification
topic: supplements
tags: classification
chapter: 26
page: 356
entities: confidence:qualitative, tier:expert-book, cond:population=any
rules: nutri-mau-ergogenic-classification
-->
Solo una minoria de ayudas ergogenicas tiene evidencia solida (macronutrientes, agua/electrolitos, cafeina, creatina entre las eficaces).

<!-- chunk
id: nutri-mau-tef-macro
topic: energy
tags: tef
chapter: 35
page: 475
entities: num:root.proteinMin=20, num:root.proteinMax=30, num:root.choMin=5, num:root.choMax=10, num:root.fatMin=3, num:root.fatMax=5, unit:%, confidence:explicit, tier:expert-book, cond:context=rest
rules: nutri-mau-tef-macro
-->
Termogenesis de alimentos: proteina 20-30%, CHO 5-10%, grasa 3-5% de su energia.

<!-- chunk
id: nutri-mau-deficit-not-restrictive
topic: energy
tags: deficit, safety
chapter: 35
page: 469
entities: confidence:qualitative, tier:expert-book, cond:goal=deficit
rules: nutri-mau-deficit-not-restrictive
-->
El programa de perdida no puede ser demasiado restrictivo: riesgo de lesion, perdida de masa magra, bajo rendimiento y abandono.

<!-- chunk
id: nutri-mau-tca-redflag
topic: energy
tags: deficit, red-flag
chapter: 35
page: 469
entities: confidence:qualitative, tier:expert-book, cond:goal=deficit, cond:redFlag=eating-disorder
rules: nutri-mau-tca-redflag
-->
Presion por apariencia/rendimiento puede llevar a perdida desesperada de peso y TCA: derivar a profesional.

<!-- chunk
id: nutri-mau-epoc
topic: energy
tags: epoc
chapter: 35
page: 474
entities: num:root.min=5, num:root.max=15, unit:%, confidence:inferred, tier:expert-book, cond:intensity=high
rules: nutri-mau-epoc
-->
EPOC ~5-10% sobre basal tras ejercicio (ejemplo citado: +15% durante 12 h tras 90 min al 75% VO2max).

<!-- chunk
id: nutri-mau-tea-athletes
topic: energy
tags: expenditure
chapter: 35
page: 472
entities: num:root.min=1000, num:root.max=2000, unit:kcal/dia, confidence:explicit, tier:expert-book, cond:population=athlete
rules: nutri-mau-tea-athletes
-->
Atletas gastan 1000-2000 kcal extra en entrenamiento (vs 10-15% del gasto en sedentarios).

<!-- chunk
id: nutri-mau-strength-energy
topic: energy
tags: strength
chapter: 47
page: 624
entities: num:root.maleMin=3500, num:root.maleMax=5500, num:root.femaleMin=3000, num:root.femaleMax=4500, unit:kcal/dia, confidence:explicit, tier:expert-book, cond:population=strength
rules: nutri-mau-strength-energy
-->
Entrenamiento duro de fuerza: 3500-5500 kcal/dia varones; 3000-4500 kcal mujeres.

<!-- chunk
id: nutri-mau-strength-protein
topic: protein
tags: strength
chapter: 47
page: 624
entities: num:root.min=1.4, num:root.max=2, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=strength
rules: nutri-mau-strength-protein
-->
Proteina en entrenamiento duro (recomendacion rusa citada): 1.4-2.0 g/kg/dia.

<!-- chunk
id: nutri-mau-strength-cho
topic: carbohydrates
tags: strength
chapter: 47
page: 624
entities: num:root.choMin=8, num:root.choMax=10, num:root.fatMin=1.7, num:root.fatMax=2.4, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=strength
rules: nutri-mau-strength-cho
-->
CHO diario en potencia: 8-10 g/kg; grasa 1.7-2.4 g/kg.

<!-- chunk
id: nutri-mau-strength-split
topic: energy
tags: strength
chapter: 47
page: 624
entities: num:root.choMin=58, num:root.choMax=60, unit:% energia, confidence:inferred, tier:expert-book, cond:population=strength
rules: nutri-mau-strength-split
-->
Siguiendo los g/kg anteriores: ~15-16% proteina / 25-26% grasa / 58-60% CHO de la energia.
