<!-- chunk
id: enoka-ch05-06-catch-like-property-and-doublets
page: 218
topic: nerve
tags: catch-like-property, doublets, rfd, rate-of-force-development, troponin-c, ballistic-action
entities: nerve:somatic-motoneuron, protein:troponin-complex, clinical:catch-like-property-rfd
rules: catch-like-property-doublet-rfd-enhancement
-->
catch-like-property-doublet-rfd-enhancement: Propiedad "Catch-Like", Descargas en Doblete y Tasa de Desarrollo de Fuerza (RFD): Al inicio de una contracción voluntaria rápida, explosiva o balística, las motoneuronas disparan frecuentemente un "doblete" inicial (dos potenciales de acción sucesivos separados por un intervalo inter-espiga ultracorto de **5 a 10 ms**, equivalente a una frecuencia de disparo instantánea de **100 a 200 Hz**). Efecto neuromecánico (propiedad catch-like): el doblete satura instantáneamente con $\text{Ca}^{2+}$ a la Troponina C miofibrilar y estira rápidamente la distensibilidad elástica pasiva de los elementos conectivos en serie (aponeurosis, titina y tendón), **duplicando o triplicando la tasa inicial de desarrollo de fuerza (RFD)** y elevando la fuerza máxima de la posterior contracción tetánica sostenida.

<!-- chunk
id: enoka-ch05-06-emg-amplitude-to-force-relation
page: 195
topic: muscle
tags: emg-force-relation, semg, muap, limb-muscles, hand-muscles, non-linearity
entities: muscle:motor-unit-pool, clinical:emg-force-relation
rules: emg-amplitude-force-non-linearity
-->
emg-amplitude-force-non-linearity: Relación entre Amplitud de EMG de Superficie (sEMG) y Fuerza Muscular: La relación entre la señal electromiográfica rectificada y filtrada (RMS) y la fuerza isométrica voluntaria varía según la arquitectura y función del músculo: 1) **Músculos Pequeños de la Mano (Control Fino):** relación casi estrictamente lineal, dado que el reclutamiento de todas las unidades motoras se completa a fuerzas bajas (~30–50% MVC) y la fuerza adicional se modula principalmente por codificación de frecuencia (*rate coding*). 2) **Músculos Grandes de las Extremidades (Bíceps Braquial, Cuádriceps, Deltoides):** relación **no lineal curvilínea hacia arriba** (la señal de EMG crece más rápido que la fuerza), debido al reclutamiento continuo de unidades motoras rápidas de alto umbral cuyos potenciales de acción de unidad motora (MUAP) son progresivamente mayores y a los efectos de cancelación de fase en la piel.

<!-- chunk
id: enoka-ch05-06-passive-membrane-properties-cable-theory
page: 179
topic: anatomy
tags: cable-theory, time-constant, length-constant, membrane-resistance, sarcolemma
entities: anatomy:sarcolemma, nerve:somatic-motoneuron
rules: 
-->
Propiedades Pasivas de Membrana y Teoría de Cables en Fibras Musculares y Motoneuronas: La propagación del potencial eléctrico subumbral y la excitabilidad celular están determinadas por dos constantes biofísicas pasivas: 1) **Constante de Tiempo ($\tau = R_m \cdot C_m$):** tiempo requerido para que el potencial de membrana alcance el 63% de su valor estacionario tras una inyección de corriente; determina la ventana temporal para la sumación temporal de potenciales postsinápticos excitatorios (EPSP). 2) **Constante de Longitud ($\lambda = \sqrt{r_m / (r_i + r_o)}$):** distancia a lo largo de la cual un potencial electrotónico decae al 37% de su valor inicial; depende de la resistencia transversal de membrana ($r_m$) y la resistencia axial interna del citoplasma ($r_i$). Las fibras musculares de mayor diámetro poseen menor resistencia interna ($r_i$), confiriéndoles una constante $\lambda$ mayor y una velocidad de propagación del potencial de acción más rápida.

<!-- chunk
id: enoka-ch05-06-surface-emg-processing-standards
page: 185
topic: clinical
tags: semg, signal-processing, seniam, bandpass-filter, rms, mvic-normalization
entities: clinical:surface-emg-processing
rules: 
-->
Estándares Biofísicos de Procesamiento de Señal en Electromiografía de Superficie (sEMG): Directrices metodológicas internacionales (consorcio SENIAM) para el registro cuantitativo del sEMG: 1) **Frecuencia de Muestreo:** mínima de **$\ge 1.000\ \text{Hz}$** (idealmente $2.000\ \text{Hz}$) para satisfacer el teorema de Nyquist sin aliasing. 2) **Filtrado Paso-Banda:** filtro Butterworth de **10 Hz a 500 Hz** (el filtro pasaltos a 10 Hz elimina artefactos de movimiento del cable y el pasabajos a 500 Hz suprime el ruido térmico de alta frecuencia). 3) **Rectificación y Envolvente:** rectificación de onda completa (valor absoluto $|EMG|$) y suavizado cuadrático medio (**RMS - Root Mean Square**) con ventanas móviles de 50 a 100 ms. 4) **Normalización Fisiológica:** obligatoria para comparaciones inter-sujeto o inter-músculo, expresada como **porcentaje de la Contracción Voluntaria Isométrica Máxima (% MVIC)**.

<!-- chunk
id: enoka-ch05-06-twitch-tetanus-mechanics-and-unit-rotation
page: 205
topic: muscle
tags: twitch-tetanus-ratio, motor-unit-rotation, synchronization, asynchronous-firing, fatigue
entities: muscle:motor-unit-pool, nerve:somatic-motoneuron, clinical:twitch-tetanus-mechanics
rules: 
-->
Mecánica de la Sacudida Simple vs Tétanos y Rotación de Unidades Motoras: 1) **Ratio Sacudida-Tétanos ($P_t/P_0$):** la fuerza de una sacudida simple aislada ($P_t$) representa solo el **$15\%\text{ al }30\%$ de la fuerza tetánica máxima fusionada ($P_0$)** ($P_t/P_0 \approx 0.15\text{--}0.30$), debido a que el transitorio breve de calcio de una sola espiga no satura a la Troponina C el tiempo suficiente para completar el estiramiento de los elementos elásticos. 2) **Descarga Asincrónica y Rotación de Unidades Motoras:** durante contracciones submáximas continuas de baja intensidad, el SNC activa las unidades motoras de forma asincrónica a frecuencias bajas (8–15 Hz), sumando mecánicamente sus sacudidas individuales para generar una fuerza articular suave y desprovista de temblor; ante esfuerzos prolongados, el SNC alterna periódicamente el encendido y apagado de distintas unidades motoras lentas (rotación de unidades) para retrasar la fatiga metabólica.

<!-- stats: 5 chunks, 8 entidades cubiertas -->
