<!-- chunk
id: allen-ftp-testing-protocol-20min
topic: clinical
tags: ftp, functional-threshold-power, 20-min-test, power-meter, frc-depletion, cycling
page: Cap. 3, pp. 30-31; Cap. 10, pp. 187-188
entities: clinical:functional-threshold-power, clinical:aerobic-testing-frequency
rules: ftp-test-protocol, aerobic-testing-frequency
-->
ftp-test-protocol: Protocolo de Evaluación del Umbral de Potencia Funcional (FTP 20-Min): El FTP es la potencia máxima media que un ciclista puede sostener en estado cuasi-estable durante $\approx 60\ \text{minutos}$ ($30\text{ a }70\ \text{min}$ según perfil). 1) **Protocolo Estandarizado de Calentamiento:** $15\ \text{min}$ de pedaleo aeróbico progresivo $\to 3\times 1\ \text{min}$ de pedaleo a alta cadencia ($>100\ \text{rpm}$) $\to 5\ \text{min}$ de pedaleo suave $\to$ **$5\ \text{min}$ a tope (*all-out*)** para agotar la capacidad de reserva funcional anaeróbica (**FRC**) $\to 10\ \text{min}$ de recuperación suave. 2) **Test Principal de 20 Minutos:** contrarreloj máxima de $20\ \text{min}$ a ritmo uniforme. 3) **Cálculo:** **$\text{FTP} = \text{Potencia Media 20-min} \times 0.95$** (descontar el $5\%$; atletas con alta capacidad anaeróbica restan $7\%$; especialistas puramente aeróbicos restan $2\%\text{--}3\%$). Periodicidad: retestear cada **6 a 8 semanas**.

<!-- chunk
id: allen-coggan-classic-power-training-zones
topic: clinical
tags: power-zones, coggan-zones, sweet-spot, ftp-percentages, intensity-domains, cycling
page: Cap. 3, pp. 32-37; Cap. 5, pp. 58-79
entities: clinical:power-training-zones, clinical:sweet-spot-training
rules: training-zones-classic
-->
training-zones-classic: Sistema Clásico de 7 Zonas de Entrenamiento por Potencia de Coggan: Niveles de intensidad estructurados respecto al porcentaje del FTP individual: 1) **Zona 1 — Recuperación Activa (*Active Recovery*):** **$<55\%\ \text{FTP}$** (duración ilimitada; flujo sanguíneo y aclaramiento). 2) **Zona 2 — Resistencia Aeróbica (*Endurance*):** **$56\%\text{ a }75\%\ \text{FTP}$** ($2\text{ a }5+\ \text{horas}$; biogénesis mitocondrial, densidad capilar, oxidación de ácidos grasos). 3) **Zona 3 — Tempo:** **$76\%\text{ a }90\%\ \text{FTP}$** ($1\text{ a }3\ \text{horas}$; almacenamiento de glucógeno y resistencia muscular). 4) **Zona 4a — Sweet Spot:** **$88\%\text{ a }93\%\ \text{FTP}$** ($10\text{ a }60\ \text{min}$; máxima ganancia de FTP con menor fatiga residual que el umbral estricto). 5) **Zona 4 — Umbral de Lactato (*Lactate Threshold*):** **$91\%\text{ a }105\%\ \text{FTP}$** ($10\text{ a }60\ \text{min}$). 6) **Zona 5 — Potencia Aeróbica Máxima ($\dot{V}\text{O}_2\max$):** **$106\%\text{ a }120\%\ \text{FTP}$** ($3\text{ a }8\ \text{min}$). 7) **Zona 6 — Capacidad Anaeróbica (*FRC*):** **$121\%\text{ a }150\%\ \text{FTP}$** ($30\ \text{s a }2\ \text{min}$). 8) **Zona 7 — Potencia Neuromuscular ($P_{\max}$):** **$>150\%\ \text{FTP}$** ($<30\ \text{s}$; sprints y reclutamiento motor).

<!-- chunk
id: allen-interval-stop-criterion-dropoff
topic: clinical
tags: interval-training, drop-off-criterion, fatigue-threshold, vo2max-intervals, quality-control
page: Cap. 5, pp. 55-58
entities: clinical:interval-stop-criterion, clinical:power-intervals
rules: interval-stop-criterion
-->
interval-stop-criterion: Criterio de Detención de Intervalos por Caída de Potencia (*Drop-Off Rule*): Para asegurar que las series de intervalos de alta intensidad mantengan el estímulo de calidad fisiológica sin acumular fatiga estéril: 1) **Referencia del Tercer Intervalo:** los dos primeros intervalos de una serie se descartan como referencia base debido a la disponibilidad inicial de la reserva anaeróbica fresca (FRC); **la potencia media del tercer intervalo representa la capacidad repetible del día**. 2) **Umbrales de Interrupción de la Sesión:** a) *Intervalos de $\dot{V}\text{O}_2\max$ (Zona 5, 3–8 min):* finalizar la sesión de intervalos en cuanto la potencia media caiga **$>5\%$ por debajo de la potencia del 3er intervalo**; b) *Intervalos de Capacidad Anaeróbica (Zona 6, 30 s–2 min):* detener cuando la potencia decaiga **$>10\%\text{ a }12\%$**; c) *Intervalos Neuromusculares (Zona 7, $<30\ \text{s}$):* detener cuando no se alcance el umbral mínimo objetivo de potencia pico.

<!-- chunk
id: allen-normalized-power-and-variability-index
topic: clinical
tags: normalized-power, variability-index, np-algorithm, pacing-steadiness, rolling-average
page: Cap. 7, pp. 107-110
entities: clinical:normalized-power, clinical:variability-index
rules: normalized-power-calculation, variability-index-norms
-->
normalized-power-calculation: Algoritmo de Potencia Normalizada (NP) e Índice de Variabilidad (VI): 1) **Cálculo Matemático de Potencia Normalizada ($NP$):** estima el costo metabólico y neuromuscular real de un esfuerzo variable: a) Calcular la media móvil de $30\ \text{segundos}$ de potencia; b) Elevar cada valor móvil a la cuarta potencia ($\text{W}^4$); c) Promediar todos los valores elevados; d) Extraer la raíz cuarta ($\sqrt[4]{\text{Media}}$). Solo es matemáticamente válido para segmentos continuos $\ge 30\ \text{segundos}$. 2) **Índice de Variabilidad ($VI = NP / \text{Potencia Media}$):** cuantifica la regularidad del ritmo: **Contrarreloj plana / Triatlón:** $VI = 1.00\text{ a }1.05$ (ritmo uniforme óptimo); **Carreras en Ruta / Criteriums:** $VI = 1.05\text{ a }1.15$; **MTB Cross-Country / Ciclocross:** $VI = 1.10\text{ a }1.20+$.

<!-- chunk
id: allen-training-stress-score-and-intensity-factor
topic: clinical
tags: tss, intensity-factor, training-stress-score, workload-quantification, session-load
page: Cap. 7, pp. 111-114
entities: clinical:training-stress-score, clinical:intensity-factor
rules: tss-calculation
-->
tss-calculation: Factor de Intensidad (IF) y Training Stress Score (TSS): 1) **Factor de Intensidad ($IF$):** ratio entre la potencia normalizada de la sesión y el FTP del atleta: $IF = \frac{NP}{FTP}$ (recuperación $<0.75$; fondo $0.65\text{--}0.80$; tempo $0.75\text{--}0.90$; contrarreloj 1h $\sim 1.00$). 2) **Training Stress Score ($TSS$):** cuantificación de la dosis de carga biológica de la sesión: $\text{TSS} = \frac{\text{Tiempo (segundos)} \times NP \times IF}{FTP \times 3600} \times 100 = \text{Duración (horas)} \times IF^2 \times 100$. Referencia base: **$1\ \text{hora al 100% FTP} = 100\ \text{TSS}$ ($IF = 1.0$)**. Sensibilidad matemática: debido a la relación cuadrática ($IF^2$), un error del $4\%$ en la estimación del FTP introduce un error del $\approx 8\%$ en el cálculo final del TSS.

<!-- chunk
id: allen-performance-management-chart-pmc
topic: clinical
tags: pmc, ctl, atl, tsb, chronic-training-load, acute-training-load, training-stress-balance
page: Cap. 9, pp. 153-180
entities: clinical:performance-manager-chart, clinical:ctl-ramp-rate
rules: performance-manager-defaults, ctl-ramp-rate-safety
-->
performance-manager-defaults: Modelo del Performance Management Chart (PMC: CTL, ATL, TSB): Modela la dinámica de adaptación biológica mediante medias móviles exponenciales ponderadas (EWMA) del TSS diario: 1) **Carga Crónica de Entrenamiento ($CTL$, "Fitness"):** constante de tiempo de **$42\ \text{días}$** ($\approx 6\ \text{semanas}$); refleja adaptaciones fisiológicas a largo plazo ($CTL$ óptimo sostenible $100\text{ a }150\ \text{TSS/día}$). 2) **Carga Aguda de Entrenamiento ($ATL$, "Fatiga"):** constante de tiempo de **$7\ \text{días}$** ($5\text{ a }14\ \text{días}$ según edad/modalidad); refleja fatiga reciente. 3) **Balance de Estrés del Entrenamiento ($TSB$, "Forma"):** **$\text{TSB} = \text{CTL} - \text{ATL}$**. 4) **Tasa Segura de Incremento de CTL (*Ramp Rate*):** incremento semanal seguro de **$3\text{ a }7\ \text{TSS/día/semana}$**. Superar $>7\ \text{TSS/día/semana}$ durante $>4\ \text{semanas}$ consecutivas eleva exponencialmente el riesgo de sobreentrenamiento (*overreaching* no funcional/enfermedad).

<!-- chunk
id: allen-tsb-peaking-and-tapering-guidelines
topic: clinical
tags: tsb, peaking, tapering, race-readiness, form-status, personal-best
page: Cap. 9, pp. 167-170
entities: clinical:tsb-peaking-guidelines, clinical:tapering-protocol
rules: tsb-peaking-guidelines
-->
tsb-peaking-guidelines: Pautas de Puesta a Punto (Peaking y Tapering) según Valores de TSB: El valor óptimo de TSB para el día de competición depende del perfil neuromuscular de la prueba: 1) **Eventos Cortos y Explosivos ($<5\ \text{min}$, Pista / Criterium / Sprints):** demandan máxima frescura neuromuscular con **$\text{TSB} = +15\text{ a }+30$**. 2) **Eventos Aeróbicos y de Resistencia General ($>5\ \text{min}$, Fondo / Ruta / Triatlón):** el rendimiento óptimo ocurre en una amplia ventana de **$\text{TSB} = -10\text{ a }+25$**; la mayoría de récords personales (*Personal Bests*) acontecen con **$\text{TSB entre } -5\text{ y }+15$**. 3) **Pruebas de Ultra-Resistencia (Ironman / Gran Fondo):** no extender excesivamente el descanso pasivo; un TSB excesivamente positivo ($>+25\text{ a }+30$) produce pérdida de acondicionamiento aeróbico periférico; un TSB neutro o ligeramente positivo ($0\text{ a }+10$) con pendiente ascendente es ideal.

<!-- chunk
id: allen-functional-reserve-capacity-and-matches
topic: clinical
tags: frc, matches, matchbook, anaerobic-capacity, power-duration, tactical-pacing
page: Cap. 6, pp. 99-101; Cap. 8, pp. 139-153
entities: clinical:functional-reserve-capacity, clinical:matchbook-tactics
rules: match-definition, frc-capacity-math
-->
match-definition: Capacidad de Reserva Funcional (FRC) y Gestión Táctica de "Fósforos" (*Matches*): 1) **Capacidad de Reserva Funcional ($FRC$):** cantidad total de trabajo continuo que el ciclista puede producir por encima de su FTP antes de alcanzar el agotamiento (expresada en kilojulios, ej. $FRC = 20\ \text{kJ}$). Cálculo de potencia sobre FTP: $\text{Vatios Extra} = \frac{FRC\ (\text{Joules})}{\text{Duración (segundos)}}$ (ej. con $20\ \text{kJ}$, se disponen de $+666\ \text{W}$ sobre FTP durante $30\ \text{s}$, o $+166\ \text{W}$ durante $120\ \text{s}$). 2) **Definición de "Fósforo" (*Match*):** esfuerzo de alta intensidad que sobrepasa **$\ge 120\%\ \text{FTP}$ durante $\ge 1\ \text{minuto}$** (o $\ge 110\%\ \text{FTP}$ durante $\ge 5\ \text{min}$). Cada ataque o subida explosiva "quema un fósforo" del stock finito; una vez agotado el *matchbook*, el atleta pierde la capacidad de responder a ataques y sufre fallo de rendimiento.

<!-- chunk
id: allen-triathlon-and-time-trial-pacing-budget
topic: clinical
tags: triathlon-pacing, time-trial, ironman-pacing, intensity-budget, cycling-efficiency
page: Cap. 12, pp. 241-246
entities: clinical:triathlon-power-pacing, clinical:ironman-cycling-budget
rules: triathlon-pacing-if-budget
-->
triathlon-pacing-if-budget: Presupuesto de Intensidad (IF) y Pacing en Triatlón y Contrarreloj: Para preservar la capacidad muscular para el segmento final de carrera a pie, la potencia en bicicleta debe regularse por distancia: 1) **Presupuesto por Disciplina:** a) *Triatlón Sprint:* $IF = 0.90\text{ a }0.95$ ($\text{TSS } 80\text{--}100$); b) *Triatlón Olímpico:* $IF = 0.80\text{ a }0.90$ ($\text{TSS } 120\text{--}160$); c) *Medio Ironman (70.3):* $IF = 0.70\text{ a }0.80$ ($\text{TSS } 180\text{--}250$); d) *Ironman Completo:* **$IF = 0.65\text{ a }0.75$** con un techo estricto de **$\text{TSS } \le 280\text{ a }300$** ($>300\ \text{TSS}$ = colapso en el maratón). 2) **Gestión del Ritmo en Subidas y Salida:** primeros 30–45 min al $95\%$ del target; colinas largas ($>3\ \text{min}$) a $\le 105\%$ del target; repechos cortos ($30\ \text{s--}2\ \text{min}$) a $\le 110\%$; mantener $VI \le 1.05$.

<!-- chunk
id: allen-quadrant-analysis-force-velocity
topic: muscle
tags: quadrant-analysis, aepf, cpv, pedal-force, cadence, neuromuscular-specificity
page: Cap. 7, pp. 114-129
entities: clinical:quadrant-analysis, muscle:skeletal-muscle
rules: quadrant-analysis-thresholds, strength-not-limiting
-->
quadrant-analysis-thresholds: Análisis de Cuadrantes (Fuerza Efectiva de Pedaleo vs Velocidad Periférica): Divide el esfuerzo neuromuscular según los umbrales de Fuerza Efectiva Media por Pedalada (AEPF, Newtons) y Velocidad Periférica de la Biela (CPV, m/s) medidos en FTP: 1) **Cuadrante I (Alta Fuerza + Alta Velocidad):** sprints, ataques lanzados, aceleraciones a alta cadencia. 2) **Cuadrante II (Alta Fuerza + Baja Velocidad):** subidas empinadas, arrancadas desde parado (*standing starts*), pedaleo a baja cadencia; reclutamiento acelerado de fibras Tipo II. 3) **Cuadrante III (Baja Fuerza + Baja Velocidad):** rodaje suave de recuperación, pedaleo pasivo en pelotón. 4) **Cuadrante IV (Baja Fuerza + Alta Velocidad):** pedaleo fluido en llano, bajadas, criteriums rápidos. Regla neuromuscular: la fuerza máxima no es limitante en ciclismo de resistencia (se utiliza $<25\%$ de la fuerza máxima voluntaria en FTP y $<50\%$ en subidas de 45 rpm).

<!-- chunk
id: allen-kilojoule-caloric-expenditure-equivalence
topic: clinical
tags: kilojoules, calories, mechanical-work, thermodynamic-efficiency, energy-budget
page: Cap. 1, p. 11
entities: clinical:caloric-expenditure, clinical:mechanical-work-kj
rules: kilojoule-calorie-estimation
-->
kilojoule-calorie-estimation: Equivalencia Práctica 1:1 entre Kilojulios Mecánicos y Calorías Metabólicas: En el análisis de datos de potenciómetros ciclistas, el trabajo mecánico total realizado registrado en kilojulios ($\text{kJ}$) equivale prácticamente $1:1$ al gasto de energía metabólica del ciclista expresado en kilocalorías ($\text{kcal}$): $\text{Gasto Metabólico (kcal)} \approx \text{Trabajo Mecánico Registrado (kJ)}$. Fundamento biofísico: la eficiencia termodinámica bruta (*gross efficiency*) del músculo humano durante el pedaleo oscila entre el **$20\%\text{ y el }25\%$** ($\approx 22\%$). Dado que $1\ \text{kcal} = 4.184\ \text{kJ}$ (factor multiplicador $\times 4.184$), el rendimiento del $22\%$ ($\times 0.22$) cancela exactamente la constante de conversión termodinámica ($4.184 \times 0.22 \approx 0.92\text{ a }1.04$). Ejemplo práctico: una sesión de $2000\ \text{kJ}$ en el potenciómetro representa un gasto calórico real de $\approx 2000\ \text{kcal}$.

<!-- stats: 11 chunks, 16 entidades cubiertas -->
