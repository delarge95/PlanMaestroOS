<!-- chunk
id: enoka-ch01-02-impulse-momentum-jump-propulsion
page: 68
topic: clinical
tags: impulse-momentum, jump-propulsion, cmj, takeoff-velocity, ground-reaction-force, rfd
entities: clinical:impulse-momentum-theorem, clinical:ground-reaction-forces
rules: impulse-momentum-jump-propulsion-rule
-->
impulse-momentum-jump-propulsion-rule: Teorema de Impulso-Momento y Propulsión en el Salto Vertical: La velocidad vertical alcanzada en el instante del despegue ($v_{\text{despegue}}$) en un salto con contramovimiento (CMJ) o salto vertical depende estrictamente del impulso mecánico neto vertical aplicado contra el suelo durante la fase propulsiva: $$\text{Impulso Neto Vertical} = \int_{t_{\text{inicio}}}^{t_{\text{despegue}}} (F_{\text{GRF}}(t) - m \cdot g)\ dt = m \cdot v_{\text{despegue}}$$ $$\text{Altura del Salto}\ (h) = \frac{v_{\text{despegue}}^2}{2g}$$ Principio biomecánico: para maximizar la velocidad de despegue y la altura del salto no basta con alcanzar una fuerza pico aislada elevada, sino que es imprescindible maximizar el área integral bajo la curva fuerza-tiempo ($\int F\ dt$), lo que requiere una altísima tasa de desarrollo de fuerza temprana y tardía (RFD) durante los $200\text{ a }350\ \text{ms}$ de la fase concéntrica.

<!-- chunk
id: enoka-ch01-02-moment-arm-and-joint-torque
page: 44
topic: joint
tags: moment-arm, joint-torque, resistance-profile, sticking-point, biomechanics
entities: joint:moment-arm-torque
rules: moment-arm-and-joint-torque-mechanics
-->
moment-arm-and-joint-torque-mechanics: Brazo de Momento, Torque Articular y Perfiles de Resistencia: El momento de fuerza o torque neto ($T$) ejercido sobre un eje articular por una fuerza externa o muscular es el producto de la magnitud de la fuerza ($F$) por el brazo de momento ($d_\perp$, la distancia perpendicular más corta entre la línea de acción de la fuerza y el centro instantáneo de rotación articular): $$T = F \times d_\perp = F \times d \times \sin(\theta)$$ Dinámica en el ejercicio de fuerza: a medida que los segmentos corporales rotan en un ejercicio (ej. flexión/extensión de rodilla en sentadilla o codo en curl), el brazo de momento de la carga de gravedad varía continuamente, modificando la demanda de torque articular resistivo a lo largo del rango articular (ROM). Esto define las curvas de resistencia y el "punto de estancamiento" (*sticking point*), donde la demanda externa de torque se maximiza coincidiendo con un punto de desventaja biomecánica muscular.

<!-- chunk
id: enoka-ch01-02-linear-and-angular-kinetics-newton
page: 3
topic: clinical
tags: kinematics, kinetics, newtons-laws, moment-of-inertia, angular-acceleration
entities: clinical:newtonian-kinematics-kinetics
rules: 
-->
Cinemática, Cinética y Leyes de Newton en el Movimiento Humano: 1) **Cinemática Lineal y Angular:** posición, desplazamiento, velocidad lineal ($v$), velocidad angular ($\omega$), aceleración lineal ($a$) y aceleración angular ($\alpha$). Relación entre variables tangenciales y rotacionales: velocidad tangencial $v_t = \omega \cdot r$; aceleración centrípeta $a_r = \omega^2 \cdot r$. 2) **Leyes del Movimiento de Newton:** a) Inercia lineal y rotacional ($I = m \cdot k^2$, donde $k$ es el radio de giro segmental); b) Aceleración: la sumatoria de fuerzas y torques determina la aceleración del centro de masa (COM) segmental y corporal ($\sum F = m \cdot a$; $\sum T = I \cdot \alpha$); c) Acción y Reacción: las fuerzas musculares internas generan momentos articulares que interactúan con las fuerzas de reacción externas.

<!-- chunk
id: enoka-ch01-02-ground-reaction-forces-and-running-impacts
page: 56
topic: clinical
tags: grf, ground-reaction-force, impact-peak, active-peak, loading-rate, running-mechanics
entities: clinical:ground-reaction-forces
rules: 
-->
Fuerzas de Reacción del Suelo (GRF) y Dinámica de Impacto en la Marcha y Carrera: Al contactar con el suelo, la plataforma de fuerza registra la fuerza de reacción del suelo tridimensional ($F_x$ mediolateral, $F_y$ anteroposterior y $F_z$ vertical): 1) **Pico de Impacto Transitorio Pasivo (Impact Peak):** ocurre en los primeros **$10\text{ a }30\ \text{ms}$** tras el apoyo con el talón (*rearfoot strike*) en carrera, alcanzando magnitudes de **$1.5\text{ a }3.0 \times \text{Peso Corporal (BW)}$** con una altísima tasa de aplicación de fuerza (*loading rate* $>50\text{--}100\ \text{BW/s}$), transmitiendo ondas de choque axiales a la tibia y columna. 2) **Pico Activo Propulsivo:** ocurre a la mitad del apoyo (**$100\text{ a }150\ \text{ms}$**), alcanzando **$2.0\text{ a }2.8 \times \text{BW}$**, generado activamente por la contracción excéntrico-concéntrica del tríceps sural y cuádriceps para impulsar el centro de masa hacia adelante y arriba.

<!-- chunk
id: enoka-ch01-02-mechanical-work-energy-and-power
page: 81
topic: clinical
tags: mechanical-work, kinetic-energy, potential-energy, mechanical-power, efficiency
entities: clinical:mechanical-work-power
rules: 
-->
Trabajo Mecánico, Transferencia de Energía y Potencia Instantánea: 1) **Trabajo Mecánico ($W$):** producto escalar de la fuerza aplicada por el desplazamiento lineal ($W = F \cdot d \cdot \cos\theta$) o del torque articular por el desplazamiento angular ($W = \int T\ d\theta$). El trabajo positivo ($W > 0$) representa producción concéntrica de energía mecánica; el trabajo negativo ($W < 0$) representa absorción y disipación excéntrica de energía mecánica por el músculo y tendón. 2) **Conservación y Transformación de Energía:** intercambio continuo entre energía cinética ($E_k = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$) y energía potencial gravitatoria ($E_p = m g h$) durante la locomoción. 3) **Potencia Mecánica Instantánea ($P$):** tasa de trabajo realizado en el tiempo ($P = \frac{dW}{dt} = F \cdot v = T \cdot \omega$), variable clave que define el rendimiento en gestos balísticos y deportivos de alta velocidad.

<!-- stats: 5 chunks, 5 entidades cubiertas -->
