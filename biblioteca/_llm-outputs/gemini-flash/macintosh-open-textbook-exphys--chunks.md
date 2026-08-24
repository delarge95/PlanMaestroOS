<!-- chunk
id: macintosh-exphys-intensity-domains-and-thresholds
topic: clinical
tags: intensity-domains, anaerobic-threshold, critical-power, critical-speed, vo2max, endurance
page: Cap. 6A, pp. 144, 167-169; Cap. 16, pp. 276, 284
entities: clinical:intensity-domains, clinical:critical-speed
rules: intensity-domain-classification
-->
intensity-domain-classification: Clasificación de la Intensidad por Dominios Metabólicos y Umbrales Fisiológicos: La prescripción del ejercicio de resistencia se divide en dominios basados en límites metabólicos individuales: 1) **Dominio Moderado (por debajo del Umbral Aeróbico / Lactato $<2\ \text{mM}$):** sostenible durante horas con lactato en sangre basal ($[La]_b$) y estabilidad de $\dot{V}\text{O}_2$. 2) **Dominio Pesado (entre Umbral Aeróbico y Umbral Anaeróbico / MLSS / Critical Power):** elevación transitoria del lactato que se estabiliza a una nueva meseta; sostenible de **30 a 60 minutos** a la Velocidad Crítica ($CS$). 3) **Dominio Severo (entre Critical Power y $\dot{V}\text{O}_2\max$):** incapacidad de alcanzar estado estable, aparición del componente lento de $\dot{V}\text{O}_2$ y acumulación inexorable de $\text{H}^+$/lactato; duración limitada a **~30–40 min** en el extremo inferior y a **5 a 7 minutos al 100% $\dot{V}\text{O}_2\max$**. 4) **Dominio Supramáximo ($>\dot{V}\text{O}_2\max$):** limitado estrictamente por la capacidad anaeróbica finita ($W'$ o $D'$).

<!-- chunk
id: macintosh-exphys-vo2-kinetics-and-oxygen-deficit
topic: clinical
tags: vo2-kinetics, oxygen-deficit, steady-state, phase-ii-tau, slow-component
page: Cap. 1, p. 36; Cap. 6A, pp. 163-166; Cap. 16, pp. 292-294
entities: clinical:vo2-kinetics, molecule:atp-phosphocreatine
rules: vo2-kinetics-steady-state
-->
vo2-kinetics-steady-state: Cinética de $\dot{V}\text{O}_2$, Constante de Tiempo ($\tau$) y Déficit de Oxígeno: Al inicio del ejercicio a carga constante, el consumo de oxígeno ($\dot{V}\text{O}_2$) no salta instantáneamente al requerimiento energético debido a la inercia del sistema de transporte y activación enzimática mitocondrial: 1) **Fase I (Cardiodinámica, 0 a 15–20 s):** aumento inicial por incremento del gasto cardíaco y flujo sanguíneo pulmonar. 2) **Fase II (Fundamental):** incremento exponencial hacia el estado estable caracterizado por la constante de tiempo $\tau \approx 25\text{ a }50\ \text{s}$ en personas moderadamente activas y **$\tau < 20\ \text{s}$ en atletas de élite**. El estado estable se alcanza tras $\sim 4\tau$ (**$1.5\text{ a }4\ \text{minutos}$**). 3) **Déficit de Oxígeno ($O_2\text{ Deficit}$):** el desfase inicial entre el gasto metabólico y el aporte aeróbico es cubierto obligatoriamente por los fosfágenos ($\text{PCr}$) y la glucólisis anaeróbica.

<!-- chunk
id: macintosh-exphys-critical-speed-and-anaerobic-capacity
topic: clinical
tags: critical-speed, critical-power, anaerobic-capacity, d-prime, w-prime, pacing
page: Cap. 6A, pp. 166-168; Cap. 16, pp. 275, 284, 297-298
entities: clinical:critical-speed, clinical:pacing-strategy
rules: critical-speed-testing, anaerobic-energy-budget, pacing-even-split
-->
critical-speed-testing: Modelo de Velocidad Crítica y Capacidad Anaeróbica Finita ($D'$ / $W'$): Protocolo de estimación mediante 3 a 5 time-trials máximos en días separados con duraciones entre **1 y 15 minutos**: relación lineal distancia-tiempo: $\text{Distancia}\ (d) = CS \times t + D'$ (o en ciclismo: $\text{Trabajo}\ = CP \times t + W'$). 1) **Velocidad Crítica ($CS$) / Potencia Crítica ($CP$):** la pendiente de la recta, que representa la máxima tasa de gasto energético puramente aeróbico sostenible sin pérdida de homeostasis metabólica (~30 a 60 min). 2) **Capacidad Anaeróbica ($D'$ o $W'$):** el intercepto con el eje Y, que representa la cantidad finita de distancia o trabajo que el atleta puede realizar por encima de $CS$/$CP$ (ej. corredor élite de 10 km: $D' \approx 285\ \text{metros}$ anaeróbicos). Pacing estratégico: mantener un ritmo parejo (*even split*) cercano a $CS$ evita el vaciamiento prematuro de $D'$ antes del sprint final.

<!-- chunk
id: macintosh-exphys-warmup-pap-balance-and-temperature
topic: muscle
tags: warm-up, pap, pape, rlc-phosphorylation, muscle-temperature, q10
page: Cap. 5, p. 126; Cap. 13, pp. 237-238, 246-247
entities: protein:myosin-atpase, protein:myosin-rlc, protein:serca-pumps, clinical:post-activation-potentiation
rules: warmup-pap-balance, temperature-warmup-performance
-->
warmup-pap-balance: Balance entre Potenciación y Fatiga en el Calentamiento y Efecto Térmico: 1) **Optimización de Calentamiento para Potencia/Sprint:** los calentamientos prolongados tradicionales (~45 min con múltiples aceleraciones) inducen fatiga residual que reduce la potencia pico. Un protocolo experimental de **~15.5 min de ciclismo aeróbico suave (hasta el 70% HRmax) seguido de un único sprint de 8 segundos** maximiza la temperatura muscular y la fosforilación de las cadenas ligeras de miosina (**RLC**) sin inducir fatiga, mejorando el rendimiento posterior. 2) **Efecto de la Temperatura Muscular ($T_m$):** cada aumento de **$1^\circ\text{C}$** en $T_m$ dentro del rango fisiológico incrementa la velocidad máxima de acortamiento ($V_{\text{max}}$) y la potencia pico en un **$2\%\text{ a }5\%$** ($Q_{10} \approx 2.0$ de la miosina ATPasa y bombas SERCA).

<!-- chunk
id: macintosh-exphys-low-frequency-fatigue-recovery
topic: clinical
tags: low-frequency-fatigue, plffd, excitation-contraction-coupling, triad, rest-intervals
page: Cap. 13, pp. 235-263
entities: protein:ryr1, protein:dhpr-cav11, clinical:plffd-low-frequency-fatigue
rules: low-frequency-fatigue-recovery
-->
low-frequency-fatigue-recovery: Recuperación de la Fatiga Muscular de Baja Frecuencia (PLFFD): La fatiga inducida por contracciones excéntricas de alargamiento o sesiones prolongadas de alta intensidad provoca una caída prolongada en la producción de fuerza a bajas frecuencias de estimulación (10–20 Hz) que **persiste durante $>24\text{ a }72\ \text{horas}$**, aun cuando la fuerza tetánica a altas frecuencias (80–100 Hz), el ATP y la fosfocreatina se hayan restablecido. Mecanismo fisiológico: desacoplamiento y microlesión mecánica en la tríada entre los receptores DHPR y los canales de liberación de calcio RyR1 del retículo sarcoplásmico. Regla de prescripción deportiva: evitar programar sesiones de máxima intensidad o alto volumen excéntrico en días consecutivos para el mismo grupo muscular, garantizando un mínimo conservador de $\ge 24\text{--}48\ \text{horas}$ de recuperación.

<!-- chunk
id: macintosh-exphys-daily-carbohydrate-and-protein-athletes
topic: clinical
tags: sports-nutrition, carbohydrates, protein-intake, athletes, macronutrient-ratios
page: Cap. 11, pp. 196, 201-203
entities: molecule:carbohydrate-stores, protein:muscle-protein-synthesis, clinical:sports-nutrition-athletes
rules: daily-carbohydrate-athletes, daily-protein-athletes
-->
daily-carbohydrate-athletes: Pautas Diarias de Ingesta de Carbohidratos y Proteínas para Atletas: 1) **Carbohidratos Diarios:** deben escalar directamente con el volumen e intensidad del entrenamiento: atletas con entrenamientos moderados a intensos requieren **$3\text{ a }12\ \text{g CHO/kg/día}$** (45% a 65% de la ingesta calórica total diaria AMDR). 2) **Proteínas Diarias:** la demanda proteica de los atletas supera ampliamente el requerimiento basal de la población sedentaria ($0.8\ \text{g/kg/día}$); para atletas de fuerza, potencia o resistencia se prescribe un rango óptimo de **$1.2\text{ a }2.0\ \text{g proteína/kg/día}$** (10% a 35% del gasto energético diario AMDR) para maximizar la síntesis proteica miofibrilar, facilitar la reparación y preservar la masa libre de grasa.

<!-- chunk
id: macintosh-exphys-pre-during-post-competition-nutrition
topic: clinical
tags: nutrient-timing, pre-event-meal, during-event-carbs, post-event-recovery, glycogen-resynthesis
page: Cap. 11, pp. 189-191, 218-224
entities: molecule:carbohydrate-stores, protein:muscle-protein-synthesis, clinical:nutrient-timing-windows
rules: pre-event-meal, during-event-cho, post-event-recovery-nutrition, strength-protein-timing
-->
pre-event-meal: Temporización de Nutrientes en Competición (Pre, Durante y Post-Evento): 1) **Comida Pre-Evento:** ingerir **$1\text{ a }4\ \text{g CHO/kg}$ consumidos de 1 a 4 horas antes** del inicio; baja en grasa y fibra, con proteína moderada e hidratación para maximizar glucógeno sin malestar digestivo. 2) **Aporte Intra-Evento (Ejercicio $>1\ \text{hora}$):** consumir **$30\text{ a }60\ \text{g CHO/hora}$** ($\sim 0.7\ \text{g/kg/h}$) administrados en tomas fraccionadas cada 10–15 min mediante bebidas deportivas al **6% a 8% de carbohidratos**; en pruebas ultra $>2.5\ \text{h}$, hasta **$90\ \text{g/h}$** con mezclas de glucosa:fructosa. 3) **Recuperación Post-Evento (Ventana $<8\ \text{h}$ antes de la siguiente sesión):** ingerir **$1.0\text{ a }1.2\ \text{g CHO/kg/hora}$ durante las primeras 4 horas** (iniciando en los primeros 30 min) junto a **$0.25\text{ a }0.30\ \text{g/kg}$ de proteína** de alto valor biológico.

<!-- chunk
id: macintosh-exphys-carbohydrate-loading-and-water-storage
topic: clinical
tags: carbohydrate-loading, glycogen-supercompensation, endurance-events, water-retention
page: Cap. 11, pp. 201, 218-219
entities: molecule:carbohydrate-stores, clinical:carbohydrate-loading-protocol
rules: carbohydrate-loading
-->
carbohydrate-loading: Protocolo de Carga de Carbohidratos y Retención Hídrica: Para competiciones continuas de resistencia de duración superior a **$>2\ \text{horas}$** donde el glucógeno es el factor limitante primario del rendimiento: 1) **Protocolo de Sobrecarga:** mantener una ingesta de **$10\text{ a }12\ \text{g CHO/kg/día}$ durante 36 a 48 horas previas al evento**, acompañada de una reducción simultánea marcada del volumen de entrenamiento (tapering). 2) **Estequiometría de Retención Hídrica:** cada **1 gramo de glucógeno almacenado liga y retiene aproximadamente $3\ \text{gramos de agua}$** intracelular ($1\ \text{g Glucógeno} : 3\ \text{g }H_2O$). Consecuencia biomecánica: este protocolo incrementa el peso corporal total en $\sim 1.0\text{ a }2.0\ \text{kg}$, lo cual es metabólicamente protector en eventos largos pero puede resultar gravídicamente perjudicial en pruebas cortas o deportes con categorías de peso.

<!-- chunk
id: macintosh-exphys-hydration-sweat-rate-and-electrolytes
topic: clinical
tags: hydration, sweat-rate, dehydration-threshold, hyponatremia, rehydration
page: Cap. 11, pp. 189, 191, 211-212, 219-222
entities: clinical:hydration-protocol, clinical:sweat-rate-testing
rules: hydration-pre, hydration-during, hydration-post, sweat-rate-testing, body-mass-dehydration-threshold
-->
hydration-pre: Protocolos de Hidratación, Cálculo de Tasa de Sudor y Riesgo de Hiponatremia: 1) **Pre-Hidratación:** beber **$5\text{ a }10\ \text{mL/kg}$** de agua o bebida isotónica **2 a 4 horas antes** del ejercicio (asegurando orina clara). 2) **Durante el Ejercicio:** limitar la pérdida de masa corporal a **$<2\%$**; en sesiones $>1\ \text{h}$, la tasa de sudor oscila entre **$0.3\text{ y }2.4\ \text{L/hora}$** y exige reposición con bebidas electrolíticas (sodio $20\text{--}30\ \text{mmol/L}$). Alerta: la ingesta excesiva de agua pura sin sodio en eventos largos induce **hiponatremia por dilución**, una urgencia médica potencialmente fatal. 3) **Cálculo de Tasa de Sudor:** $\text{Tasa (mL/h)} = \frac{(\text{Peso Pre} - \text{Peso Post})\times 1000 + \text{Líquido Ingerido (mL)} - \text{Orina (mL)}}{\text{Horas de Ejercicio}}$. 4) **Rehidratación Post-Evento:** consumir **$1.25\text{ a }1.5\ \text{litros}$ de fluido por cada 1 kg de peso corporal perdido**.

<!-- chunk
id: macintosh-exphys-energy-availability-and-female-triad
topic: clinical
tags: energy-availability, female-athlete-triad, red-s, amenorrhea, bone-density, stress-fractures
page: Cap. 11, pp. 214-215
entities: clinical:energy-availability-triad, clinical:red-s-syndrome
rules: energy-availability-risk
-->
energy-availability-risk: Baja Disponibilidad Energética (LEA) y Tríada de la Atleta Femenina / RED-S: La Disponibilidad Energética ($EA$) se define como la energía dietética residual para funciones metabólicas basales tras descontar el gasto energético del ejercicio: $EA = \frac{\text{Ingesta Energética (kcal)} - \text{Gasto Ejercicio (kcal)}}{\text{Masa Libre de Grasa (FFM, kg)}}$. 1) **Umbral Crítico de Riesgo:** un valor de **$EA < 30\ \text{kcal/kg FFM/día}$** desencadena disrupciones neuroendocrinas severas (supresión del eje hipotálamo-hipofisario-ovárico, caída de leptina y T3). 2) **Consecuencias Clínicas:** induce oligomenorrea o amenorrea hipotalámica funcional, pérdida acelerada de la densidad mineral ósea (osteopenia/osteoporosis precoz) y un riesgo multiplicado de fracturas por estrés óseo y disfunción inmune.

<!-- chunk
id: macintosh-exphys-heat-budget-and-evaporative-cooling
topic: clinical
tags: thermoregulation, heat-production, evaporative-cooling, sweat-cooling, hyperthermia
page: Cap. 6A, pp. 144-146; Cap. 16, pp. 300-303
entities: clinical:heat-thermoregulation-budget
rules: heat-evaporation-budget
-->
heat-evaporation-budget: Balance Térmico, Calor Metabólico y Presupuesto de Enfriamiento Evaporativo: Dado que la eficiencia mecánica del músculo esquelético es de apenas el 20% al 25%, el 75% al 80% de la energía metabólica consumida se libera como calor interno: 1) **Calor Total Generado:** $\text{Calor (kcal)} \approx \text{Costo Energético (kcal/kg/km)} \times \text{Masa (kg)} \times \text{Distancia (km)}$. En ausencia de disipación térmica, la temperatura corporal aumentaría $\approx \frac{\text{kcal Totales}}{\text{Masa Corporal (kg)}}$, alcanzando valores incompatibles con la vida en $<30\ \text{min}$. 2) **Capacidad de Enfriamiento por Evaporación:** la evaporación de sudor es el principal mecanismo de disipación térmica en ambientes cálidos: **1 litro de sudor completamente evaporado disipa $\approx 540\ \text{kcal}$** de calor ($\approx 2.26\ \text{kJ/mL}$ o $0.44\ \text{mL/kJ}$). El sudor que gotea no contribuye al enfriamiento evaporativo.

<!-- chunk
id: macintosh-exphys-running-and-cycling-economy
topic: clinical
tags: running-economy, cycling-economy, rolling-resistance, aerodynamic-drag, cadence
page: Cap. 5, pp. 132-134; Cap. 6A, pp. 182-183; Cap. 16, pp. 274, 279
entities: clinical:running-economy, clinical:cycling-economy
rules: running-economy-reference, cycling-economy-power
-->
running-economy-reference: Determinantes de la Economía de Carrera y Ciclismo de Rendimiento: 1) **Economía de Carrera:** cuantificada como el costo calórico por unidad de masa y distancia recorrida: rango normal de **$0.95\text{ a }1.25\ \text{kcal/kg/km}$** (regla empírica práctica de $\sim 1.0\ \text{kcal/kg/km}$; en corredores élite masculinos de 10 km $\sim 0.96\ \text{kcal/kg/km}$; en élite femenina $\sim 1.01\ \text{kcal/kg/km}$). Optimizada minimizando la oscilación vertical del centro de masa. 2) **Economía de Ciclismo:** la potencia requerida en llano depende de la resistencia aerodinámica ($P_{\text{aero}} \propto C_d A \cdot v^3$) y resistencia de rodadura ($P_{\text{rr}} \propto C_{\text{rr}} \cdot m \cdot g \cdot v$). La cadencia de pedaleo que minimiza la activación muscular aumenta progresivamente a medida que se incrementa el output de potencia generado.

<!-- chunk
id: macintosh-exphys-rer-substrate-and-energy-equivalent
topic: clinical
tags: rer, rq, indirect-calorimetry, caloric-equivalent, substrate-oxidation, crossover
page: Cap. 6A, pp. 144, 171-177
entities: clinical:indirect-calorimetry-rer
rules: substrate-estimation-guard, oxygen-energy-equivalent
-->
substrate-estimation-guard: Cociente Respiratorio (RER / RQ) y Equivalentes Energéticos del Oxígeno: La calorimetría indirecta utiliza la tasa de intercambio respiratorio ($RER = \dot{V}\text{CO}_2 / \dot{V}\text{O}_2$) para estimar la proporción de sustratos energéticos oxidados: 1) **Valores Extremos:** $RQ = 1.00$ refleja oxidación exclusiva de carbohidratos (**$5.047\ \text{kcal / L }O_2$**); $RQ = 0.70$ refleja oxidación exclusiva de grasas (**$4.686\ \text{kcal / L }O_2$**). 2) **Fórmula de Conversión Energética:** $\text{Energía (J / L }O_2) = RQ \times 5153.3 + 15963$. 3) **Guarda Metodológica:** $RER = RQ$ únicamente en estado estable por debajo del umbral anaeróbico; por encima del umbral, el amortiguamiento de $\text{H}^+$ por bicarbonato eleva el $\dot{V}\text{CO}_2$ no metabólico, sobreestimando $RER > 1.0$.

<!-- chunk
id: macintosh-exphys-tendon-stiffness-and-running-economy
topic: tendon
tags: tendon-stiffness, achilles-tendon, patellar-tendon, compliance, elastic-strain-energy
page: Cap. 16, pp. 281-282
entities: tendon:achilles-tendon, tendon:patellar-tendon, clinical:tendon-stiffness-economy
rules: tendon-stiffness-economy
-->
tendon-stiffness-economy: Rigidez Tendinosa Regional y Modulación del Costo Energético: Las propiedades mecánicas de rigidez (*stiffness*, N/mm) y distensibilidad (*compliance*, mm/N) de los tendones modulan de forma diferenciada la economía de carrera: 1) **Tendón de Aquiles Rígido (*Stiff Achilles*):** una mayor rigidez en el tendón de Aquiles se correlaciona directamente con un **menor costo energético ($\text{kcal/kg/km}$)** en carrera, al transferir rápidamente la fuerza reactiva del tríceps sural a la palanca del calcáneo y minimizar el trabajo mecánico de acortamiento de las fibras musculares. 2) **Tendón Rotuliano Distensible (*Compliant Patellar*):** una mayor distensibilidad en el tendón rotuliano permite almacenar y retornar energía elástica durante la fase de frenado de la rodilla, permitiendo que los fascículos del cuádriceps operen en condiciones casi isométricas energéticamente económicas.

<!-- chunk
id: macintosh-exphys-evidence-based-ergogenics-and-antioxidants
topic: clinical
tags: ergogenic-aids, creatine, caffeine, sodium-bicarbonate, nitrates, antioxidants, anti-doping
page: Cap. 11, pp. 210-211, 224
entities: molecule:creatine-monohydrate, clinical:evidence-based-supplements
rules: antioxidant-supplements, evidence-based-ergogenics
-->
evidence-based-ergogenics: Ayudas Ergogénicas con Evidencia Científica Sólida y Precaución Antioxidante: 1) **Suplementos con Eficacia Demostrada en Rendimiento:** a) **Creatina Monohidrato:** eventos repetidos de sprint y potencia de alta intensidad; b) **Cafeína:** resistencia aeróbica y alerta neuromuscular; c) **Bicarbonato Sódico:** amortiguador extracelular en esfuerzos anaeróbicos lácticos de 1 a 10 min (con riesgo de malestar gastrointestinal); d) **Nitratos Dietarios (Jugo de Remolacha):** vasodilatación y eficiencia mitocondrial. Riesgo de dopaje involuntario: entre el **3% y 25% de los suplementos comerciales no certificados contienen sustancias dopantes no declaradas**. 2) **Suplementación Antioxidante Rutinaria:** no se recomienda el uso masivo de megadosis de antioxidantes (vitamina C/E sintéticas), ya que amortiguan las especies reactivas de oxígeno fisiológicas necesarias como señalizadoras para la biogénesis mitocondrial y adaptaciones al entrenamiento.

<!-- stats: 15 chunks, 18 entidades cubiertas -->
