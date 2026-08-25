<!-- chunk
id: wilkins-cycle-testing-ftp-cp-and-wprime-metrics
topic: clinical
tags: cycling-testing, ftp-20min-test, critical-power, w-prime, vlamax, physiological-profiling
page: Cap. 5, "Physiological Testing", pp. 52-87
entities: molecule:lactate, clinical:cycling-power-testing
rules: ftp_20min_test_calculation, ftp_2x8_test_calculation, cp_to_ftp_conversion, wprime_norms, vlamax_norms, testing_standardization
-->
ftp_20min_test_calculation: Protocolos de Testing Fisiológico en Ciclismo: FTP, Potencia Crítica ($CP$), $W'$ y $\dot{V}\text{La}_{\max}$: 1) **Test de FTP de 20 Minutos (Hunter Allen & Coggan):** tras un calentamiento estandarizado con un **esfuerzo vaciador aláctica/glucolítico de $5\ \text{minutos}$ a tope** (para agotar la capacidad anaeróbica $W'$), realizar una crono individual de $20\ \text{minutos}$ a ritmo constante máximo: **$\text{FTP} = 0.95 \times \text{Potencia Media de los 20 min}$**. 2) **Test $2\times 8\ \text{Minutos}$:** dos esfuerzos máximos de $8\ \text{min}$ con $10\ \text{min}$ de recuperación: $\text{FTP} = 0.90 \times \text{Media de ambos bloques}$. 3) **Potencia Crítica ($CP$) y Capacidad de Trabajo Anaeróbico ($W'$):** $CP$ representa la asíntota de potencia aeróbica sostenible sin depleción continua; $W'$ representa la reserva finita de energía anaeróbica supramáxima (valores normativos de **$15\text{ a }25\ \text{kJ}$**). 4) **Tasa Glucolítica Máxima ($\dot{V}\text{La}_{\max}$):** contrarrelojistas y triatletas requieren $\dot{V}\text{La}_{\max}$ baja ($0.2\text{--}0.35\ \text{mmol/L/s}$) para maximizar la oxidación de grasas y el umbral fraccional; sprinters requieren $\dot{V}\text{La}_{\max}$ alta ($0.6\text{--}0.9\ \text{mmol/L/s}$).

<!-- chunk
id: wilkins-cycle-training-load-tss-ctl-atl-and-tsb-modeling
topic: volume
tags: training-stress-score, tss, ctl, atl, tsb, performance-management-chart, fatigue-modeling
page: Cap. 13, "Measuring Training Load", pp. 215-230
entities: clinical:banister-impulse-model, clinical:performance-management-chart
rules: tss_formula_and_hourly_reference, tsb_interpretation_ranges, weekly_tss_trajectory, safe_tsb_training_range, recovery_week_load_reduction
-->
tsb_interpretation_ranges: Modelización de Carga de Entrenamiento (TSS), Fitness (CTL), Fatiga (ATL) y Forma (TSB): 1) **Métricas del *Performance Management Chart* (PMC):** a) *TSS (Training Stress Score):* cuantifica el estrés de cada sesión en función de la intensidad normalizada e intensidad umbral ($1\ \text{hora al FTP} = 100\ \text{TSS}$); b) *CTL (Chronic Training Load / "Fitness"):* media móvil exponencial ponderada de **$42\ \text{días}$**; c) *ATL (Acute Training Load / "Fatiga"):* media móvil de **$7\ \text{días}$**; d) *TSB (Training Stress Balance / "Forma"):* **$\text{TSB} = \text{CTL} - \text{ATL}$**. 2) **Rangos Operativos de TSB:** a) *$\text{TSB } < -30$:* Zona de fatiga extrema / riesgo agudo de sobreentrenamiento; b) **$\text{TSB entre } -10\text{ y } -30$:** **Zona óptima de sobrecarga adaptativa durante semanas de carga**; c) *$\text{TSB entre } -10\text{ y } +5$:* Zona neutra / mantenimiento; d) **$\text{TSB entre } +15\text{ y } +25$:** **Zona óptima de rendimiento pico (*Race Form*) tras el *taper***; e) *$\text{TSB } > +30$:* Pérdida de adaptaciones por desentrenamiento. 3) **Semana de Descarga:** reducción del **$40\%\text{ al }50\%\ \text{del TSS semanal}$** cada 3 a 4 semanas.

<!-- chunk
id: wilkins-cycle-vo2max-interval-architectures-and-hard-starts
topic: volume
tags: vo2max-intervals, hard-start-intervals, billat-microbursts, oxygen-uptake-kinetics, hiit-cycling
page: Cap. 11, "Session Types", pp. 165-185
entities: molecule:oxygen, organelle:mitochondria, clinical:vo2max-interval-protocols
rules: classic_vo2max_intervals, hard_start_vo2max_intervals, billat_hr_vo2max_intervals, microburst_vo2max_intervals
-->
classic_vo2max_intervals: Diseños de Intervalos para $\dot{V}\text{O}_2\max$: Clásicos, Salida Fuerte (*Hard-Start*) y Microbursts: 1) **Intervalos Clásicos de $\dot{V}\text{O}_2\max$:** **$4\text{ a }6\ \text{repeticiones}$ de $3\text{ a }5\ \text{minutos al }105\%\text{--}120\%\text{ del FTP}$ con ratio $1:1$ de recuperación activa en Zona 1** ($3\text{--}5\ \text{min}$); acumula de $15\text{ a }25\ \text{minutos}$ en la zona diana. 2) **Intervalos con Salida Fuerte (*Hard-Start Intervals*):** iniciar el intervalo con un sprint/aceleración de **$30\text{ a }45\ \text{segundos al }130\%\text{--}150\%\text{ FTP}$**, estabilizándose inmediatamente después al **$105\%\text{--}110\%\text{ FTP}$ durante $3\text{ a }4\ \text{minutos}$**; acelera drásticamente la cinética de captación de oxígeno ($\dot{V}\text{O}_2$), reduciendo el déficit de oxígeno inicial y maximizando el tiempo efectivo a $>95\%\ \dot{V}\text{O}_2\max$. 3) **Microbursts / Protocolo Billat:** **$2\text{ a }3\ \text{bloques}$ de $10\text{ a }12\ \text{repeticiones}$ de $30\ \text{s al }125\%\text{--}130\%\text{ FTP} / 15\ \text{s al }50\%\text{ FTP}$** con $5\ \text{min}$ de descanso entre bloques.

<!-- chunk
id: wilkins-cycle-threshold-over-unders-and-lactate-clearance
topic: volume
tags: threshold-intervals, over-unders, lactate-clearance, sweet-spot, low-cadence-torque
page: Cap. 10, pp. 141-154; Cap. 11, pp. 185-195
entities: molecule:lactate, protein:mct1-transporters, muscle:type-i-fibers
rules: lactate_threshold_intervals, over_unders_lactate_clearance, low_cadence_zone3_prescription
-->
over_unders_lactate_clearance: Intervalos de Umbral, Protocolo *Over/Under* y Aclaramiento de Lactato: 1) **Protocolo *Over/Under* para Transporte y Aclaramiento de Lactato:** **$3\text{ a }4\ \text{series}$ de $10\text{ a }15\ \text{minutos}$ alternando continuamente micro-fases:** a) *Micro-fase "Over" ($1\text{ a }2\ \text{min}$):* al **$105\%\text{--}110\%\text{ del FTP}$** (induce acumulación aguda de lactato y protones $[H^+]$); b) *Micro-fase "Under" ($2\text{ a }3\ \text{min}$):* al **$90\%\text{--}95\%\text{ FTP}$** (fuerza a las fibras oxidativas Tipo I y al miocardio a utilizar el lactato acumulado como sustrato energético oxidativo a través de transportadores MCT-1). 2) **Intervalos de Umbral Sostenido (*Steady Threshold*):** $2\times 20\ \text{min}$ o $3\times 15\ \text{min}$ al $95\%\text{--}100\%\text{ FTP}$. 3) **Trabajo de Torque a Baja Cadencia:** intervalos en Zona 3 / Sweet Spot al **$85\%\text{--}92\%\text{ FTP}$ a $50\text{ a }60\ \text{rpm}$** para reclutar unidades motoras de alto umbral sin estrés cardiovascular elevado.

<!-- chunk
id: wilkins-cycle-concurrent-strength-training-for-cyclists
topic: hypertrophy
tags: cycling-strength, concurrent-training, heavy-lifting, rate-of-force-development, economy
page: Cap. 15, "Strength Training for Cyclists", pp. 245-260
entities: tendon:tendon-stiffness, muscle:skeletal-muscle, nerve:motor-units
rules: strength_development_frequency, strength_periodization_rep_progression, strength_session_structure
-->
strength_development_frequency: Entrenamiento Concurrente de Fuerza Pesada para Rendimiento en Ciclismo: 1) **Beneficios Fisiológicos de la Fuerza Pesada en Ciclistas:** incrementa el pico de fuerza isométrica, la tasa de desarrollo de fuerza (*Rate of Force Development - RFD*), la rigidez de los tendones del tren inferior y la coordinación intermuscular, **reduciendo el porcentaje fraccional de reclutamiento de fibras musculares por pedalada y mejorando la economía de ciclismo (menos $mL\ O_2/\text{W}$)**. 2) **Dosificación y Ejercicios Principales:** prescribir **$2\ \text{sesiones semanales}$** en fase de base/preparatoria ($1\times/\text{sem}$ en competición): a) *Ejercicios Compuestos:* Sentadilla trasera (*Back Squat*), Prensa de piernas, Zancadas búlgaras y Peso muerto; b) *Intensidad:* **$3\text{ a }4\ \text{series}$ de $4\text{ a }6\text{RM}$ a alta intensidad ($\ge 80\%\text{--}85\%\ 1\text{RM}$)** con descansos completos de **$3\text{ a }5\ \text{minutos}$** (evita la hipertrofia excesiva no funcional).

<!-- chunk
id: wilkins-cycle-race-tapering-carbs-and-monitoring-lsct
topic: progression
tags: race-tapering, tsb-target, carb-intake-cycling, lsct-test, fatigue-monitoring
page: Cap. 16, pp. 261-270; Cap. 17, pp. 270-285
entities: molecule:glucose, molecule:glycogen, molecule:caffeine, clinical:lsct-submaximal-test
rules: taper_duration_and_volume, taper_intensity_maintenance, taper_tsb_target, race_carb_intake_during_event, lsct_protocol, lsct_fatigue_thresholds
-->
taper_duration_and_volume: Puesta a Punto Pre-Carrera (*Tapering*), Nutrición Intra-Evento y Test LSCT: 1) **Protocolo Canónico de *Tapering* ($7\text{ a }14\ \text{Días}$):** a) **Reducción del $40\%\text{ al }60\%$ del volumen de entrenamiento**; b) **Mantenimiento absoluto de la intensidad** (intervalos cortos de apertura/activación a ritmo de carrera); c) Alcanzar un **$\text{TSB objetivo de } +15\text{ a } +25$** el día del evento. 2) **Nutrición Intra-Competición:** ingerir de **$60\text{ a }90\ \text{g de carbohidratos/hora}$** (ratio $2:1$ glucosa:fructosa para saturar los transportadores intestinales SGLT-1 y GLUT-5) en eventos de $>2\ \text{horas}$, acompañado de **$3\text{ a }6\ \text{mg/kg}$ de cafeína**. 3) **Test Submáximo de Fatiga (LSCT):** protocolo de $15\ \text{min}$ monitorizando FC y potencia submáxima; una caída de la FC $>5\ \text{lpm}$ a potencia fijada junto con RPE elevado indica fatiga parasimpática / sobrecarga.

<!-- stats: 6 chunks, 16 entidades cubiertas -->
