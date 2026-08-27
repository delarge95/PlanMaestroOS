Reglas legacy del módulo nutrición migradas a chunks v4 (AG-NUTRI ciclo 2). Cada chunk conserva el id legacy de la regla; los valores numéricos están codificados en entities (num:ruta=valor) y parafraseados en el summary.

<!-- chunk
id: nutri-nsca-protein-general
topic: protein
tags: general-fitness
chapter: 9
page: 183
entities: num:root.min=0.8, num:root.max=1, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=general-fitness
rules: nutri-nsca-protein-general
-->
Adultos en programa general de fitness: 0.8-1.0 g/kg/dia.

<!-- chunk
id: nutri-nsca-protein-endurance
topic: protein
tags: endurance
chapter: 9
page: 183
entities: num:root.min=1, num:root.max=1.6, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=endurance
rules: nutri-nsca-protein-endurance
-->
Atletas de resistencia con calorias suficientes: 1.0-1.6 g/kg/dia.

<!-- chunk
id: nutri-nsca-protein-strength
topic: protein
tags: strength
chapter: 9
page: 183
entities: num:root.min=1.4, num:root.max=1.7, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=strength
rules: nutri-nsca-protein-strength
-->
Atletas de fuerza: 1.4-1.7 g/kg/dia.

<!-- chunk
id: nutri-nsca-protein-combined
topic: protein
tags: mixed
chapter: 9
page: 183
entities: num:root.min=1.4, num:root.max=1.7, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=combined
rules: nutri-nsca-protein-combined
-->
Fuerza + resistencia o sprint con calorias adecuadas: 1.4-1.7 g/kg/dia.

<!-- chunk
id: nutri-nsca-protein-deficit
topic: protein
tags: deficit, cut
chapter: 9
page: 190
entities: num:root.min=1.8, num:root.max=2.7, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=reduced-calorie
rules: nutri-nsca-protein-deficit
-->
En dieta hipocalorica para preservar musculo: 1.8-2.7 g/kg/dia (~2.3-3.1 g/kg MCM).

<!-- chunk
id: nutri-nsca-protein-renal-safe
topic: protein
tags: safety
chapter: 9
page: 184
entities: num:root.max=2.8, unit:g/kg/dia, confidence:explicit, tier:observational, cond:population=healthy
rules: nutri-nsca-protein-renal-safe
-->
Ingestas hasta 2.8 g/kg/dia no deterioraron funcion renal en registro de 7 dias.

<!-- chunk
id: nutri-nsca-protein-excess-caveat
topic: protein
tags: safety
chapter: 9
page: 184
entities: confidence:qualitative, tier:expert-book, cond:population=any
rules: nutri-nsca-protein-excess-caveat
-->
Ingestas consistentemente muy altas no se recomiendan: desplazan CHO/grasas y sus micronutrientes.

<!-- chunk
id: nutri-nsca-protein-post-young
topic: protein-timing
tags: post-workout, leucine
chapter: 10
page: 215
entities: num:root.min=20, num:root.max=25, unit:g, confidence:explicit, tier:expert-book, cond:phase=post, cond:age=<50
rules: nutri-nsca-protein-post-young
-->
Post-fuerza (jovenes): 20-25 g de proteina rapida rica en leucina (2-3 g leucina, ~8.5-10 g EAA).

<!-- chunk
id: nutri-nsca-protein-post-older
topic: protein-timing
tags: post-workout, masters
chapter: 10
page: 215
entities: num:root.min=40, unit:g, confidence:explicit, tier:expert-book, cond:phase=post, cond:age=50+
rules: nutri-nsca-protein-post-older
-->
Post-fuerza (adultos mayores): >=40 g para maximizar sintesis proteica.

<!-- chunk
id: nutri-nsca-protein-post-range
topic: protein-timing
tags: post-workout
chapter: 9
page: 184
entities: num:root.min=20, num:root.max=48, unit:g, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-nsca-protein-post-range
-->
Tras resistencia, 20-48 g probados beneficiosos para estimular sintesis aguda.

<!-- chunk
id: nutri-nsca-protein-meal-20-30
topic: protein-timing
tags: distribution
chapter: 10
page: 215
entities: num:root.min=20, num:root.max=30, unit:g/comida, confidence:explicit, tier:expert-book, cond:population=adult
rules: nutri-nsca-protein-meal-20-30
-->
Comidas con >=20-30 g de proteina alta en leucina en adultos.

<!-- chunk
id: nutri-nsca-protein-window-fasted
topic: protein-timing
tags: window
chapter: 10
page: 215
entities: num:root.max=30, unit:min, confidence:explicit, tier:expert-book, cond:phase=post, cond:fed=false
rules: nutri-nsca-protein-window-fasted
-->
Ejercicio en ayunas: proteina dentro de 30 min; en estado alimentado la ventana post es considerablemente mayor.

<!-- chunk
id: nutri-nsca-protein-sensitivity-48h
topic: protein-timing
tags: window
chapter: 9
page: 183
entities: num:root.max=48, unit:h, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-nsca-protein-sensitivity-48h
-->
La sensibilidad muscular a aminoacidos permanece elevada hasta 48 h post-sesion (decreciente).

<!-- chunk
id: nutri-nsca-protein-delay-3h
topic: protein-timing
tags: endurance
chapter: 10
page: 211
entities: num:root.min=3, unit:h, confidence:explicit, tier:expert-book, cond:phase=post, cond:mode=endurance
rules: nutri-nsca-protein-delay-3h
-->
Retrasar la proteina 3 h tras ejercicio de resistencia atenúa su efecto anabolico.

<!-- chunk
id: nutri-nsca-protein-endurance-min
topic: protein-timing
tags: endurance
chapter: 10
page: 215
entities: num:root.min=10, unit:g, confidence:explicit, tier:expert-book, cond:phase=post, cond:mode=endurance
rules: nutri-nsca-protein-endurance-min
-->
Post-resistencia aerobica: al menos 10 g de proteina dentro de las 3 h.

<!-- chunk
id: nutri-nsca-bulk-surplus
topic: energy
tags: bulk, surplus
chapter: 10
page: 217
entities: num:root.value=500, unit:kcal/dia, confidence:explicit, tier:expert-book, cond:goal=surplus
rules: nutri-nsca-bulk-surplus
-->
Ganancia de peso: ~+500 kcal/dia (guia general ajustable).

<!-- chunk
id: nutri-nsca-bulk-protein
topic: energy
tags: bulk, protein
chapter: 10
page: 217
entities: num:root.min=1.5, num:root.max=2, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:goal=surplus
rules: nutri-nsca-bulk-protein
-->
Ganancia de masa magra: 1.5-2.0 g/kg/dia de proteina.

<!-- chunk
id: nutri-nsca-bulk-overfeeding
topic: energy
tags: bulk
chapter: 10
page: 217
entities: num:root.value=45, unit:% exceso como masa magra, confidence:explicit, tier:rct, cond:goal=surplus
rules: nutri-nsca-bulk-overfeeding
-->
Overfeeding 8 semanas: dieta normal (15%) o alta (25%) en proteina almaceno ~45% del exceso como masa magra vs 95% grasa con 5%.

<!-- chunk
id: nutri-nsca-cut-deficit
topic: energy
tags: cut, deficit
chapter: 10
page: 218
entities: num:root.value=500, unit:kcal/dia, confidence:explicit, tier:expert-book, cond:goal=deficit
rules: nutri-nsca-cut-deficit
-->
Perdida de grasa preservando musculo: deficit moderado ~500 kcal/dia.

<!-- chunk
id: nutri-nsca-cut-adherence
topic: energy
tags: cut
chapter: 10
page: 218
entities: confidence:qualitative, tier:expert-book, cond:goal=deficit
rules: nutri-nsca-cut-adherence
-->
Predictor principal de exito: adherencia; no existe dieta ideal universal (low-carb ~ low-fat en deficit isocalorico).

<!-- chunk
id: nutri-nsca-kcal-kg-table
topic: energy
tags: maintenance, calculator
chapter: 10
page: 217
entities: num:root.male.light=38, num:root.male.moderate=41, num:root.male.heavy=50, num:root.female.light=35, num:root.female.moderate=37, num:root.female.heavy=44, unit:kcal/kg/dia, confidence:explicit, tier:expert-book, cond:goal=maintenance
rules: nutri-nsca-kcal-kg-table
-->
Necesidades estimadas: varon 38/41/50 kcal/kg (actividad ligera/moderada/intensa); mujer 35/37/44 kcal/kg.

<!-- chunk
id: nutri-nsca-record-method
topic: energy
tags: method
chapter: 10
page: 217
entities: num:root.min=3, unit:dias, confidence:explicit, tier:expert-book, cond:method=food-record
rules: nutri-nsca-record-method
-->
Alternativa: registro dietetico de >=3 dias representativos con peso estable estima el requerimiento.

<!-- chunk
id: nutri-nsca-pre-4h
topic: peri-workout
tags: pre-workout
chapter: 10
page: 203
entities: num:root.choMin=1, num:root.choMax=4, num:root.proteinMin=0.15, num:root.proteinMax=0.25, unit:g/kg, confidence:explicit, tier:expert-book, cond:phase=pre, cond:hoursBefore=4
rules: nutri-nsca-pre-4h
-->
Comida >=4 h antes: 1-4 g CHO/kg + 0.15-0.25 g proteina/kg.

<!-- chunk
id: nutri-nsca-pre-2h
topic: peri-workout
tags: pre-workout
chapter: 10
page: 203
entities: num:root.value=1, unit:g/kg, confidence:explicit, tier:expert-book, cond:phase=pre, cond:hoursBefore=2
rules: nutri-nsca-pre-2h
-->
Comida 2 h antes: ~1 g CHO/kg.

<!-- chunk
id: nutri-nsca-pre-1h-liquid
topic: peri-workout
tags: pre-workout
chapter: 10
page: 204
entities: confidence:qualitative, tier:expert-book, cond:phase=pre, cond:hoursBefore=1
rules: nutri-nsca-pre-1h-liquid
-->
1 h antes: preferir CHO liquido/gels (vaciamiento gastrico mas rapido que solido).

<!-- chunk
id: nutri-nsca-pre-usg
topic: hydration
tags: pre-workout, marker
chapter: 10
page: 203
entities: num:root.max=1.02, unit:USG, confidence:explicit, tier:expert-book, cond:phase=pre
rules: nutri-nsca-pre-usg
-->
Prehidratar horas antes; objetivo USG (gravedad especifica de orina) <1.020.

<!-- chunk
id: nutri-nsca-during-cho
topic: peri-workout
tags: during, carbs
chapter: 10
page: 209
entities: num:root.min=30, num:root.max=90, unit:g/h, confidence:explicit, tier:expert-book, cond:phase=during, cond:durationMin=60
rules: nutri-nsca-during-cho
-->
30-90 g CHO/h con multiples tipos (glucosa+fructosa/sacarosa/maltodextrina) en resistencia prolongada.

<!-- chunk
id: nutri-nsca-during-studied-range
topic: peri-workout
tags: during, carbs
chapter: 10
page: 208
entities: num:root.min=28, num:root.max=144, unit:g/h, confidence:explicit, tier:expert-book, cond:phase=during
rules: nutri-nsca-during-studied-range
-->
Rango estudiado completo: 28-144 g CHO/h (cifras altas en ciclismo).

<!-- chunk
id: nutri-nsca-during-cap
topic: peri-workout
tags: during, mechanism
chapter: 10
page: 208
entities: num:root.min=1, num:root.max=1.1, unit:g/min, confidence:explicit, tier:expert-book, cond:phase=during, cond:choType=single
rules: nutri-nsca-during-cap
-->
Oxidacion exogena maxima ~1.0-1.1 g/min con un solo transportador; mezclas la superan.

<!-- chunk
id: nutri-nsca-during-fructose
topic: peri-workout
tags: during, fructose
chapter: 10
page: 208
entities: num:root.min=25, num:root.max=50, unit:% mas lento, confidence:explicit, tier:expert-book, cond:phase=during
rules: nutri-nsca-during-fructose
-->
Fructosa/galactosa/amilosa se oxidan 25-50% mas lento que glucosa/sacarosa/maltodextrinas.

<!-- chunk
id: nutri-nsca-during-drink-electrolytes
topic: hydration
tags: during, electrolytes
chapter: 10
page: 204
entities: num:root.naMin=460, num:root.naMax=690, num:root.kMin=78, num:root.kMax=195, num:root.choPctMin=5, num:root.choPctMax=10, unit:mg/L, %, confidence:explicit, tier:expert-book, cond:phase=during, cond:heat=true
rules: nutri-nsca-during-drink-electrolytes
-->
Bebida deportiva en calor: Na 460-690 mg/L (20-30 mEq), K 78-195 mg/L (2-5 mEq), CHO 5-10%.

<!-- chunk
id: nutri-nsca-during-team-fluids
topic: hydration
tags: during, team-sports
chapter: 10
page: 209
entities: num:root.min=200, num:root.max=400, unit:ml, confidence:explicit, tier:expert-book, cond:phase=during, cond:sport=racket
rules: nutri-nsca-during-team-fluids
-->
Deportes con pausas (tenis): 200-400 ml por cambio de lado, parte de bebida deportiva.

<!-- chunk
id: nutri-nsca-during-mouth-rinse
topic: peri-workout
tags: during, cns
chapter: 10
page: 208
entities: num:root.min=2, num:root.max=3, unit:% mejora, confidence:explicit, tier:expert-book, cond:phase=during, cond:durationMin=60
rules: nutri-nsca-during-mouth-rinse
-->
Enjuague bucal con CHO mejora 2-3% el rendimiento de ~1 h (via SNC), sin ingerir.

<!-- chunk
id: nutri-nsca-post-cho-30min
topic: peri-workout
tags: post-workout, carbs
chapter: 10
page: 215
entities: num:root.value=1.5, unit:g/kg, confidence:explicit, tier:expert-book, cond:phase=post, cond:withinMin=30
rules: nutri-nsca-post-cho-30min
-->
~1.5 g CHO/kg dentro de los primeros 30 min post-ejercicio.

<!-- chunk
id: nutri-nsca-post-glycogen-rate
topic: peri-workout
tags: post-workout, glycogen
chapter: 10
page: 210
entities: num:root.min=1, num:root.max=1.85, unit:g/kg/h, confidence:explicit, tier:expert-book, cond:phase=post, cond:recoveryLessThanH=24
rules: nutri-nsca-post-glycogen-rate
-->
Resintesis maxima: 1.0-1.85 g CHO/kg/h inmediato y cada 15-60 min hasta 5 h.

<!-- chunk
id: nutri-nsca-post-cho-sparing
topic: peri-workout
tags: post-workout, protein-sparing
chapter: 10
page: 212
entities: num:root.min=30, num:root.max=100, unit:g, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-nsca-post-cho-sparing
-->
30-100 g de CHO post-ejercicio con dano muscular reducen la proteolisis.

<!-- chunk
id: nutri-nsca-post-wait-2h
topic: peri-workout
tags: post-workout, flexibility
chapter: 10
page: 210
entities: num:root.max=2, unit:h, confidence:explicit, tier:rct, cond:phase=post, cond:recoveryGreaterThanH=24
rules: nutri-nsca-post-wait-2h
-->
Si hay >24 h hasta la proxima sesion, esperar hasta 2 h para comer CHO no reduce la resintesis a 24 h.

<!-- chunk
id: nutri-nsca-post-sodium-foods
topic: hydration
tags: post-workout, recovery
chapter: 10
page: 210
entities: confidence:qualitative, tier:expert-book, cond:phase=post
rules: nutri-nsca-post-sodium-foods
-->
Rehidratar con comidas con sodio o sal anadida retiene el fluido; individualizar midiendo peso pre/post.

<!-- chunk
id: nutri-nsca-post-1.5-study
topic: peri-workout
tags: post-workout, strength
chapter: 10
page: 212
entities: num:root.value=1.5, unit:g/kg x2, confidence:explicit, tier:rct, cond:phase=post, cond:mode=strength
rules: nutri-nsca-post-1.5-study
-->
Tras series de rodilla (deplecion al 71%): 1.5 g CHO/kg inmediato + a la 1 h restauro 91% del glucogeno en 6 h (vs 75% solo agua).

<!-- chunk
id: nutri-nsca-strength-cho-daily
topic: carbohydrates
tags: strength
chapter: 10
page: 215
entities: num:root.min=5, num:root.max=6, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=strength
rules: nutri-nsca-strength-cho-daily
-->
Fuerza/velocidad: 5-6 g CHO/kg/dia; CHO pre/durante mantiene fuerza y minimiza proteolisis.

<!-- chunk
id: nutri-nsca-cho-endurance-daily
topic: carbohydrates
tags: endurance
chapter: 10
page: 215
entities: num:root.min=8, num:root.max=10, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=endurance, cond:sessionMin=90
rules: nutri-nsca-cho-endurance-daily
-->
Atletas de resistencia: 8-10 g CHO/kg/dia, especialmente entrenando 90+ min por sesion.

<!-- chunk
id: nutri-nsca-strength-post-high-gi
topic: carbohydrates
tags: strength, gi
chapter: 10
page: 215
entities: confidence:qualitative, tier:expert-book, cond:population=strength, cond:recompeteWithinH=24
rules: nutri-nsca-strength-post-high-gi
-->
CHO de indice glucemico alto inmediato post-competencia de fuerza si se vuelve a competir <24 h.

<!-- chunk
id: nutri-nsca-creatine-protocol
topic: supplements
tags: creatine
chapter: 11
page: 243
entities: num:root.loadMin=20, num:root.loadMax=25, num:root.loadDays=5, num:root.maintenance=2, unit:g/dia, confidence:explicit, tier:expert-book, cond:supplement=creatine-monohydrate
rules: nutri-nsca-creatine-protocol
-->
Carga 20-25 g/dia x 5 dias (o 0.3 g/kg/dia), mantenimiento 2 g/dia (0.03 g/kg/dia).

<!-- chunk
id: nutri-nsca-creatine-no-load
topic: supplements
tags: creatine
chapter: 11
page: 243
entities: num:root.value=3, unit:g/dia, confidence:explicit, tier:expert-book, cond:supplement=creatine-monohydrate, cond:protocol=no-load
rules: nutri-nsca-creatine-no-load
-->
Sin carga: 3 g/dia alcanza similar concentracion muscular en ~30 dias.

<!-- chunk
id: nutri-nsca-creatine-washout
topic: supplements
tags: creatine
chapter: 11
page: 243
entities: num:root.value=4, unit:semanas, confidence:explicit, tier:expert-book, cond:supplement=creatine-monohydrate, cond:phase=washout
rules: nutri-nsca-creatine-washout
-->
Al suspender, la creatina muscular vuelve a basal en ~4 semanas.

<!-- chunk
id: nutri-nsca-creatine-muscle-increase
topic: supplements
tags: creatine
chapter: 11
page: 243
entities: num:root.value=20, unit:% aumento, confidence:explicit, tier:expert-book, cond:supplement=creatine-monohydrate
rules: nutri-nsca-creatine-muscle-increase
-->
Aumenta la creatina muscular ~20%; saturacion a 150-160 mmol/kg peso seco.

<!-- chunk
id: nutri-nsca-creatine-strength-gains
topic: supplements
tags: creatine, strength
chapter: 11
page: 243
entities: num:root.min=2, num:root.max=3, unit:x vs placebo, confidence:explicit, tier:expert-book, cond:supplement=creatine-monohydrate, cond:population=trained
rules: nutri-nsca-creatine-strength-gains
-->
Ganancias de fuerza 2-3x mayores vs placebo en entrenados (banca/sentadilla/power clean).

<!-- chunk
id: nutri-nsca-creatine-bm-gain
topic: supplements
tags: creatine, body-mass
chapter: 11
page: 244
entities: num:root.min=0.5, num:root.max=2, unit:kg, confidence:explicit, tier:expert-book, cond:supplement=creatine-monohydrate
rules: nutri-nsca-creatine-bm-gain
-->
Suplementacion en entrenamiento: +0.5-2 kg de masa (magra/agua intracelular) en semanas-meses.

<!-- chunk
id: nutri-nsca-creatine-explosive
topic: supplements
tags: creatine, sprint
chapter: 11
page: 244
entities: num:root.loadDays=5, num:root.chronicDaysMin=28, num:root.chronicDaysMax=84, unit:dias, confidence:inferred, tier:expert-book, cond:supplement=creatine-monohydrate, cond:outcome=single-effort
rules: nutri-nsca-creatine-explosive
-->
Sprint/salto de esfuerzo unico: sin mejora consistente con carga de 5 dias; mejoras con 28-84 dias de uso.

<!-- chunk
id: nutri-nsca-creatine-safety
topic: supplements
tags: creatine, safety
chapter: 11
page: 243
entities: confidence:qualitative, tier:expert-book, cond:supplement=creatine-monohydrate
rules: nutri-nsca-creatine-safety
-->
Segura y relativamente barata; eficacia en entrenados y no entrenados (maxima fuerza, potencia, masa magra).

<!-- chunk
id: nutri-nsca-caffeine-protocol
topic: supplements
tags: caffeine
chapter: 11
page: 245
entities: num:root.min=3, num:root.max=9, unit:mg/kg, confidence:explicit, tier:expert-book, cond:supplement=caffeine, cond:timing=60min-pre
rules: nutri-nsca-caffeine-protocol
-->
3-9 mg/kg ~60 min antes o durante ejercicio prolongado; sin beneficio adicional >=9 mg/kg.

<!-- chunk
id: nutri-nsca-caffeine-risk
topic: supplements
tags: caffeine, safety
chapter: 11
page: 245
entities: num:root.min=9, unit:mg/kg, confidence:explicit, tier:expert-book, cond:supplement=caffeine, cond:safety=true
rules: nutri-nsca-caffeine-risk
-->
Riesgo de efectos adversos (ansiedad, GI, insomnio, temblor, arritmias) aumenta >9 mg/kg.

<!-- chunk
id: nutri-nsca-caffeine-no-diuresis
topic: supplements
tags: caffeine, hydration
chapter: 11
page: 245
entities: confidence:qualitative, tier:expert-book, cond:supplement=caffeine, cond:phase=during
rules: nutri-nsca-caffeine-no-diuresis
-->
La literatura no respalda diuresis por cafeina durante el ejercicio ni dano del balance hidrico.

<!-- chunk
id: nutri-nsca-caffeine-lethal
topic: supplements
tags: caffeine, safety
chapter: 11
page: 245
entities: num:root.min=5, unit:g, confidence:explicit, tier:expert-book, cond:supplement=caffeine, cond:safety=true
rules: nutri-nsca-caffeine-lethal
-->
Dosis letal tipicamente >5 g (~42 cafes de 120 mg).

<!-- chunk
id: nutri-nsca-caffeine-tablet
topic: supplements
tags: caffeine
chapter: 11
page: 244
entities: confidence:qualitative, tier:expert-book, cond:supplement=caffeine
rules: nutri-nsca-caffeine-tablet
-->
El beneficio ergogenico parece mayor con cafeina anhidra (tableta) que con cafe.

<!-- chunk
id: nutri-nsca-caffeine-energy-drinks
topic: supplements
tags: caffeine, energy-drinks
chapter: 11
page: 245
entities: num:root.value=2, unit:mg/kg, confidence:explicit, tier:expert-book, cond:supplement=caffeine, cond:form=energy-drink
rules: nutri-nsca-caffeine-energy-drinks
-->
Bebidas energeticas ~2 mg/kg: por debajo del rango ergogenico documentado (3-9).

<!-- chunk
id: nutri-nsca-bicarbonate
topic: supplements
tags: bicarbonate
chapter: 11
page: 247
entities: num:root.value=0.3, unit:g/kg, confidence:explicit, tier:expert-book, cond:supplement=sodium-bicarbonate, cond:eventMin=1-7
rules: nutri-nsca-bicarbonate
-->
Bicarbonato sodico 0.3 g/kg antes de eventos de 1-7 min; efectos GI adversos frecuentes.

<!-- chunk
id: nutri-nsca-citrate
topic: supplements
tags: citrate
chapter: 11
page: 248
entities: num:root.min=0.4, num:root.max=0.6, unit:g/kg, confidence:explicit, tier:expert-book, cond:supplement=sodium-citrate
rules: nutri-nsca-citrate
-->
Citrato sodico 0.4-0.6 g/kg con potencial ergogenico similar al bicarbonato.

<!-- chunk
id: nutri-nsca-hmb
topic: supplements
tags: hmb
chapter: 11
page: 246
entities: num:root.min=1.5, num:root.max=3, unit:g/dia, confidence:explicit, tier:expert-book, cond:supplement=hmb
rules: nutri-nsca-hmb
-->
HMB 1.5-3 g/dia: menor perdida de masa magra en regimenes restrictivos de novicios; poco efecto en entrenados.

<!-- chunk
id: nutri-nsca-arginine
topic: supplements
tags: arginine
chapter: 11
page: 246
entities: num:root.dose=6, num:root.giThreshold=13, unit:g, confidence:explicit, tier:expert-book, cond:supplement=arginine
rules: nutri-nsca-arginine
-->
Arginina ~6 g sin mejora clara de rendimiento; dosis >13 g causan malestar GI.
