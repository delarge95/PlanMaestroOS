<!-- chunk
id: nutri-inda-female-neuromuscular-recovery-and-hormonal-profile
topic: female-physiology
tags: female-physiology, estrogen, muscle-recovery, type-1-fibers, capillary-perfusion, submaximal-volume
chapter: Strength as the Path to Aesthetics, pp. 49-54; Program Variables, pp. 89-95
entities: hormone:estrogen, muscle:type-1-fibers, metric:1rm
rules: nutri-inda-female-neuromuscular-recovery-volume-capacity
-->
Fisiología neuromuscular femenina y recuperación hormonal (FUERZA: A Female Guide to Strength and Physique por Marisa Inda, pp. 49–54, 89–95): Debido a una mayor proporción relativa de fibras musculares Tipo I (resistentes a la fatiga), una mayor densidad de perfusión capilar y diferencias hormonales (estrógenos que actúan como protectores de la integridad de la membrana muscular frente al daño contráctil), las mujeres levantadoras toleran mayor volumen relativo de trabajo submáximo (70% a 82.5% 1RM), requieren menores tiempos de descanso entre series (60 a 90 segundos en ejercicios accesorios, 2 a 3 minutos en levantamientos principales) y exhiben una tasa de recuperación neuromuscular más acelerada entre sesiones de alta frecuencia en comparación con los hombres a una misma intensidad relativa.

<!-- chunk
id: nutri-inda-female-energy-balance-and-macronutrient-management
topic: energy
tags: energy-balance, female-nutrition, macronutrients, fat-loss, muscle-retention, strength-nutrition
chapter: Nutrition & Macro Management, pp. 75-88
entities: nutrient:protein, nutrient:carbohydrates, nutrient:fat, metric:calories, diet:fat-loss
rules: 
-->
Nutrición, balance energético y gestión de macronutrientes para fuerza y composición corporal femenina (pp. 75–88): Enfoque nutricional de Marisa Inda centrado en utilizar el entrenamiento de fuerza pesada como vehículo primario para la composición corporal estética ("Strength as the Path to Aesthetics"). Enfatiza la gestión estructurada del balance energético, distribuyendo macronutrientes (proteína suficiente para soporte tisular, carbohidratos para abastecer sesiones de fuerza y grasas esenciales para la función hormonal) para optimizar la pérdida de grasa y la retención de masa magra sin comprometer el rendimiento en el gimnasio ni provocar déficits energéticos lesivos.

<!-- chunk
id: nutri-inda-squat-biomechanics-q-angle-cues
topic: female-physiology
tags: squat-biomechanics, female-anatomy, q-angle, pelvis-morphology, knee-tracking, glute-torque
chapter: Training the Squat, pp. 15-48
entities: joint:hip, joint:knee, muscle:gluteus-maximus, bone:pelvis
rules: nutri-inda-squat-technical-cues-female
-->
Fundamentos biomecánicos y cues técnicos de la sentadilla adaptados a la morfología femenina (pp. 15–48): Para acomodar la morfología pélvica y el mayor ángulo Q femenino, se prescribe una apertura de pies ligeramente más amplia que el ancho biacromial con una rotación externa de 20° a 30°. Se enfatiza el cue técnico "spread the floor / push knees out" (abrir el suelo con los pies y empujar las rodillas hacia afuera) para maximizar el torque y la activación de los glúteos, asegurando un trayecto articular seguro para la rodilla y cadera bajo cargas submáximas y máximas.

<!-- chunk
id: nutri-inda-bench-press-and-deadlift-technical-cues
topic: female-physiology
tags: bench-press, deadlift, technical-cues, scapular-retraction, leg-drive, lat-engagement, lumbar-lockout
chapter: Training the Bench Press & Deadlift, pp. 15-48
entities: muscle:latissimus-dorsi, muscle:upper-back, joint:scapulothoracic, bone:lumbar-spine
rules: nutri-inda-bench-deadlift-technical-cues
-->
Cues técnicos de Marisa Inda para press de banca y peso muerto en levantadoras (pp. 15–48):
1) Press de Banca: Retracción y depresión escapular estricta para crear una base torácica sólida, arco torácico controlado y "leg drive" activo empujando el suelo hacia adelante para estabilizar la caja torácica.
2) Peso Muerto (convencional o sumo): Enfoque en la tensión y activación de los dorsales anchos mediante los cues "bend the bar around your shins" y "pack the lats", junto con una extensión coordinada de rodilla y cadera que evite la hiperextensión de la columna lumbar en el bloqueo.

<!-- chunk
id: nutri-inda-calisthenics-pullups-and-conditioning
topic: female-physiology
tags: calisthenics, pull-ups, upper-body-strength, cardiovascular-conditioning, bodyweight
chapter: Calisthenics & Conditioning, pp. 61-74
entities: muscle:latissimus-dorsi, muscle:upper-body, system:cardiovascular
rules: 
-->
Pautas de calistenia, dominadas y acondicionamiento cardiovascular para atletas femeninas (pp. 61–74): Progresiones de fuerza en tren superior y peso corporal (dominadas y calistenia) adaptadas a la estructura femenina, combinadas con protocolos de acondicionamiento cardiovascular para promover la capacidad de trabajo y salud metabólica sin deteriorar la recuperación muscular específica requerida para los levantamientos de powerlifting.

<!-- chunk
id: nutri-inda-female-strength-cycle-contract-and-periodization
topic: female-physiology
tags: periodization, 12-week-cycle, powerlifting, female-lifter, glute-hypertrophy, volume-autoregulation
chapter: 12-Week Program, pp. 89-118; Contratos TypeScript
entities: diet:strength-training, metric:training-volume, schedule:12-week-macrocycle
rules: 
-->
Modelo de contrato del ciclo de fuerza femenina (`FemaleStrengthCycleContract`) y macrociclo de 12 semanas (pp. 89–118): Estructuración de un programa de 12 semanas de Powerlifting + Hipertrofia accesoria para levantadoras ('female_lifter'). Parámetros técnicos: primaryLifts (['competition_squat', 'competition_bench_press', 'conventional_or_sumo_deadlift']), accessoryEmphasis (['glute_hypertrophy', 'upper_back_posture', 'hamstrings_posterior_chain', 'deltoid_shaping']), cycleDurationWeeks (12) y peakingIncluded (true/false). Se integra en `src/data/schedules/` junto con el motor de autorregulación de volumen para calibrar densidades y descansos.

<!-- stats: 6 chunks, 14 entidades cubiertas -->
