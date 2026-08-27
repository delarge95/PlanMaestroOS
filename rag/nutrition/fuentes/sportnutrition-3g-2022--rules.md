Reglas legacy del módulo nutrición migradas a chunks v4 (AG-NUTRI ciclo 2). Cada chunk conserva el id legacy de la regla; los valores numéricos están codificados en entities (num:ruta=valor) y parafraseados en el summary.

<!-- chunk
id: nutri-3g-protein-distribution
topic: protein-timing
tags: distribution
chapter: 4
page: 151
entities: num:root.min=3, num:root.max=5, unit:h, confidence:explicit, tier:expert-book, cond:population=athlete
rules: nutri-3g-protein-distribution
-->
Distribuir proteina de calidad a lo largo del dia cada 3-5 h y tras sesiones clave.

<!-- chunk
id: nutri-3g-protein-window
topic: protein-timing
tags: post-workout
chapter: 4
page: 151
entities: num:root.min=0.5, num:root.max=2, unit:h, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-3g-protein-window
-->
Ventana post-entreno recomendada: entre 30 min y 2 h.

<!-- chunk
id: nutri-3g-protein-total
topic: protein
tags: total
chapter: 4
page: 150
entities: num:root.min=1.2, num:root.max=2, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:population=athlete
rules: nutri-3g-protein-total
-->
Rango total proteico deportivo: 1.2-2.0 g/kg/dia.

<!-- chunk
id: nutri-3g-protein-seniors
topic: protein
tags: masters
chapter: 4
page: 169
entities: num:root.min=1, num:root.max=1.3, unit:g/kg/dia, confidence:explicit, tier:expert-book, cond:age=65+
rules: nutri-3g-protein-seniors
-->
Mayores sin entrenamiento: 1.0-1.3 g/kg/dia.

<!-- chunk
id: nutri-3g-absorption-rate
topic: protein
tags: physiology
chapter: 4
page: 165
entities: num:root.value=10, unit:g AA/h, confidence:explicit, tier:expert-book, cond:context=physiology
rules: nutri-3g-absorption-rate
-->
El tracto digestivo absorbe ~10 g de aminoacidos por hora; una comida normal se absorbe completa en horas.

<!-- chunk
id: nutri-3g-leucine-2.5
topic: protein-timing
tags: leucine
chapter: 4
page: 168
entities: num:root.value=2.5, unit:g leucina, confidence:explicit, tier:expert-book, cond:phase=post
rules: nutri-3g-leucine-2.5
-->
Estudio citado: EAA con 2.5 g de leucina post-ejercicio mejora la sintesis proteica.

<!-- chunk
id: nutri-3g-cho-general
topic: carbohydrates
tags: general
chapter: 2
page: 60
entities: num:root.min=45, num:root.max=65, unit:% energia, confidence:explicit, tier:expert-book, cond:population=general
rules: nutri-3g-cho-general
-->
Poblacion general: 45-65% de la energia como CHO (225-325 g en 2000 kcal).

<!-- chunk
id: nutri-3g-cut-monitor-protein
topic: energy
tags: deficit
chapter: 6
page: 286
entities: confidence:qualitative, tier:expert-book, cond:goal=deficit
rules: nutri-3g-cut-monitor-protein
-->
En deficit: vigilar cantidad, calidad y timing de proteina; evitar restriccion energetica severa.

<!-- chunk
id: nutri-3g-cut-timing
topic: energy
tags: deficit, timing
chapter: 6
page: 289
entities: confidence:qualitative, tier:expert-book, cond:goal=deficit
rules: nutri-3g-cut-timing
-->
En deficit: distribuir comidas/snacks a lo largo del dia y alrededor del ejercicio.
