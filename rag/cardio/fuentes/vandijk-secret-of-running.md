<!-- chunk
id: vandijk-run-core-power-model-and-energy-cost
topic: volume
tags: running-power, stryd-potentiometer, specific-energy-cost, ftp-vo2max, power-equation
page: Caps. 1-3, pp. 10-30; Caps. 7-8, pp. 48-55
entities: molecule:atp-phosphocreatine, molecule:glycogen, clinical:running-power-model
rules: running_model_core, specific_energy_cost_running, ftp_vo2max_relation
-->
running_model_core: Ecuación Fundamental de Potencia en Carrera, Coste Energético Específico ($c$) y Relación FTP-$\dot{V}\text{O}_2\max$: 1) **Ecuación Biomecánica de Potencia en Carrera:** la potencia mecánica total ($P$) demandada para correr se descompone en tres resistencias físicas: **$P = P_r + P_a + P_{cl} = c \cdot v \cdot m + \frac{1}{2} \rho C_d A (v \pm v_w)^2 v + i \cdot m \cdot g \cdot v$** (donde $P_r$ es la potencia de rodadura/resistencia mecánica corporal, $P_a$ es la resistencia aerodinámica del aire/viento, y $P_{cl}$ es la potencia gravitacional para vencer pendientes). 2) **Coste Energético Específico de Carrera ($c$):** en asfalto plano, el gasto energético estándar es constante: **$c \approx 0.98\ \text{kJ/kg/km}$ (equivalente a $0.234\ \text{kcal/kg/km}$ o $\approx 1.04\ \text{kcal/kg/km}$ de gasto metabólico total bruto)**. 3) **Conversión Canónica FTP a $\dot{V}\text{O}_2\max$:** la Potencia Umbral Funcional (FTP en $1\ \text{hora}$) se relaciona linealmente con el consumo de oxígeno: **$\text{FTP (W/kg)} = 0.072 \times \dot{V}\text{O}_2\max\ (\text{mL/kg/min})$**, o recíprocamente **$\dot{V}\text{O}_2\max = 14 \times \text{FTP (W/kg)}$**.

<!-- chunk
id: vandijk-run-riegel-power-duration-curve-and-pacing
chapter: 16
page: 98
section: "también Cap. 62, pp. 360-365"
topic: progression
tags: riegel-formula, power-duration-curve, race-pacing, marathon-power, critical-power
entities: molecule:lactate, molecule:glycogen, clinical:power-duration-riegel
rules: riegel_power_time_curve, energy_time_relation, marathon_initial_pace, race_constant_power_strategy
-->
riegel_power_time_curve: Curva Potencia-Duración de Riegel y Estrategia de Potencia Constante para Competición: 1) **Fórmula de Potencia-Duración de Riegel Modificada:** la potencia máxima sostenible decrece con la duración temporal ($t$ en segundos) según la ley potencial: **$P(t) = \text{FTP} \times \left(\frac{t}{3600}\right)^{-0.07}$** (donde $-0.07$ es el exponente medio de resistencia a la fatiga). 2) **Porcentajes de FTP Objetivo por Distancia de Competición:** a) *$3000\ \text{m} / 10\ \text{min}$:* **$113\%\text{ del FTP}$**; b) *$5\ \text{K} / 20\ \text{min}$:* **$108\%\text{ FTP}$**; c) *$10\ \text{K} / 40\ \text{min}$:* **$103\%\text{ FTP}$**; d) *$1\ \text{Hora / FTP}$:* **$100\%\text{ FTP}$**; e) *Medio Maratón ($\sim 90\ \text{min}$):* **$97\%\text{ FTP}$**; f) *Maratón ($\sim 3.5\ \text{horas}$):* **$89\%\text{ a }91\%\text{ FTP}$**. 3) **Estrategia de Potencia Constante (*Even Pacing*):** mantener una potencia estrictamente constante durante toda la prueba minimiza el coste metabólico y la producción de metabolitos en comparación con ritmos variables.

<!-- chunk
id: vandijk-run-power-training-zones-and-distribution
chapter: 25
page: 140
section: "también Cap. 30, pp. 175-190"
topic: volume
tags: power-zones, polarized-training, training-distribution, easy-endurance, vo2max-intervals
entities: molecule:lactate, organelle:mitochondria, clinical:power-zones-running
rules: power_training_zones, easy_endurance_volume, threshold_interval_volume, vo2max_interval_volume, weekly_volume_progression
-->
power_training_zones: Las Cinco Zonas de Entrenamiento por Potencia y Distribución Polarizada: 1) **Las 5 Zonas de Potencia de van Dijk & van Megen (% FTP):** a) *Zona 1 — Recuperación Activa / Regenerativo:* **$<75\%\ \text{FTP}$** ($<80\%\ \text{FCmáx}$); b) *Zona 2 — Resistencia Aeróbica / Ritmo Maratón:* **$75\%\text{ a }88\%\ \text{FTP}$** ($80\%\text{--}88\%\ \text{FCmáx}$); c) *Zona 3 — Umbral / Ritmo Medio Maratón:* **$88\%\text{ a }100\%\ \text{FTP}$** ($88\%\text{--}95\%\ \text{FCmáx}$); d) *Zona 4 — $\dot{V}\text{O}_2\max$ / Ritmo 5K-10K:* **$100\%\text{ a }115\%\ \text{FTP}$** ($95\%\text{--}100\%\ \text{FCmáx}$); e) *Zona 5 — Capacidad Anaeróbica / Velocidad:* **$>115\%\ \text{FTP}$**. 2) **Distribución Polarizada de Volumen ($80/20$):** prescribir el **$\approx 80\%\ \text{del volumen semanal en Zona 1 y Zona 2}$** (resistencia oxidativa de base) y el **$\approx 20\%\ \text{en Zonas 3, 4 y 5}$** (intervalos de calidad). 3) **Sobrecarga:** progresar el kilometraje semanal a un máximo del **$+10\%\ \text{por semana}$**.

<!-- chunk
id: vandijk-run-running-dynamics-cadence-and-ground-contact
topic: technique
tags: running-dynamics, cadence-180, ground-contact-time, gct, vertical-oscillation, tendon-elasticity
page: Caps. 37-39, pp. 212-235; Cap. 65, pp. 386-395
entities: tendon:achilles-tendon, tendon:plantar-aponeurosis, clinical:running-dynamics
rules: cadence_economy_target, stride_length_speed_relation, gct_interpretation
-->
cadence_economy_target: Dinámica de Carrera, Cadencia Óptima ($180\ \text{spm}$) y Tiempo de Contacto con el Suelo (GCT): 1) **Cadencia Óptima de Zancada:** una cadencia de **$\approx 180\ \text{pasos por minuto (spm)}$** ($175\text{--}185\ \text{spm}$) optimiza la frecuencia de resonancia elástica del tendón de Aquiles y la aponeurosis plantar (modelo masa-resorte), minimizando el coste de oxígeno por kilómetro. Cadencias bajas ($<165\ \text{spm}$) provocan zancada excesivamente larga (*overstriding*), frenado por impacto anterior y mayor oscilación vertical. 2) **Tiempo de Contacto con el Suelo (*GCT*):** corredores entrenados presentan un GCT de **$200\text{ a }240\ \text{milisegundos}$** (élites $<200\ \text{ms}$); un aumento en el GCT a la misma velocidad refleja fatiga neuromuscular o técnica ineficiente. 3) **Oscilación Vertical:** mantener el desplazamiento vertical del centro de masa entre **$6\text{ y }10\ \text{cm}$**; oscilaciones $>10\ \text{cm}$ disipan potencia vertical inútil contra la gravedad.

<!-- chunk
id: vandijk-run-environmental-physics-wind-hills-and-altitude
topic: clinical
tags: environmental-physics, drafting-aerodynamics, headwind-penalty, hill-power, altitude-effects
page: Caps. 13-15, pp. 80-97; Caps. 47-49, pp. 276-293; Caps. 53-56, pp. 310-333
entities: molecule:oxygen, clinical:environmental-running-physics
rules: air_resistance_drafting, wind_net_time_loss, hill_speed_adjustment, altitude_performance_reduction
-->
air_resistance_drafting: Física Ambiental en Carrera: Aerodinámica del *Drafting*, Viento, Cuestas y Altitud: 1) **Ahorro por *Drafting* (Correr a Estela):** correr inmediatamente detrás de otro atleta reduce la resistencia del aire en un **$40\%\text{--}60\%$**, lo que se traduce en un **ahorro neto de potencia metabólica del $2\%\text{ a }4\%$** (equivalente a $3\text{--}6\ \text{segundos por kilómetro}$ en días calmos y hasta $10\text{--}15\ \text{s/km}$ con viento en contra). 2) **Penalización Neta del Viento:** el tiempo perdido corriendo contra viento en contra **nunca se recupera totalmente corriendo con viento a favor** (debido a la relación cuadrática de la resistencia aerodinámica $F_a \propto v^2$). 3) **Cuestas:** en subida, mantener la potencia constante reduciendo la velocidad de forma proporcional a la pendiente ($P_{cl} = i \cdot m \cdot g \cdot v$). 4) **Altitud:** por encima de $1500\ \text{m}$, el $\dot{V}\text{O}_2\max$ decae un **$\approx 1\%\ \text{por cada }100\ \text{metros}$** de elevación adicional.

<!-- chunk
id: vandijk-run-temperature-sweat-rate-and-marathon-fueling
topic: clinical
tags: thermal-optimum, wbgt, sweat-rate, marathon-fueling, carb-loading, glycogen-resynthesis
page: Caps. 42-44, pp. 244-265; Caps. 57-60, pp. 334-353
entities: molecule:glucose, molecule:water, molecule:sodium, clinical:marathon-nutrition-protocol
rules: temperature_optimum, wet_bulb_heat_safety, sweat_loss_limit, carbo_loading_protocol, marathon_drink_protocol, marathon_energy_deficit
-->
temperature_optimum: Temperatura Óptima de Carrera, Estrés Térmico y Protocolo de Nutrición en Maratón: 1) **Temperatura Ambiental Óptima:** la temperatura de máxima eficiencia para maratón se sitúa entre **$8^\circ\text{C y }12^\circ\text{C}$**; por cada $5^\circ\text{C}$ de elevación térmica por encima de $15^\circ\text{C}$, el tiempo de finalización empeora entre un $1.5\%\text{ y }2.0\%$ debido al gasto cardiovascular de disipación de calor cutáneo. 2) **Sobrecarga de Glucógeno (*Carbo-Loading*):** durante los **$2\text{ a }3\ \text{días previos al maratón}$**, consumir una dieta compuesta por un **$70\%\ \text{de carbohidratos}$ ($7\text{ a }10\ \text{g/kg/día}$)** para saturar los depósitos de glucógeno muscular y hepático (ganancia esperada de $1\text{--}1.5\ \text{kg}$ de peso corporal por agua ligada). 3) **Estrategia en Carrera:** ingerir **$150\ \text{mL}$ de bebida isotónica cada $5\ \text{km}$** ($60\text{ a }90\ \text{g de carbohidratos/hora}$) para prevenir el "muro" del km 32.

<!-- stats: 6 chunks, 15 entidades cubiertas -->
