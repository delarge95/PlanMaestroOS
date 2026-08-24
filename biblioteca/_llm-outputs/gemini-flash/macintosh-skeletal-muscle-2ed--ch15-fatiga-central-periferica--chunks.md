<!-- chunk
id: macintosh-ch15-central-fatigue-interpolated-twitch
topic: nerve
tags: central-fatigue, interpolated-twitch, voluntary-activation, cortical-drive, motoneuron-pool
page: pp. 227-228
entities: nerve:somatic-motoneuron, nerve:group-iii-afferent, nerve:group-iv-afferent, clinical:central-fatigue-itt
rules: interpolated-twitch-technique-central-fatigue
-->
interpolated-twitch-technique-central-fatigue: Evaluación de la Fatiga Central mediante la Técnica de Sacudida Interpolada (ITT): La fatiga central se define como la reducción progresiva del impulso motor voluntario (drive corticoespinal) hacia el pool de motoneuronas, provocada por inhibición refleja espinal/supraespinal mediada por aferencias metabólicas intramusculares Grupo III y IV ($A\delta$ y C). Se cuantifica aplicando un estímulo eléctrico o magnético supramáximo al nervio motor durante una Contracción Voluntaria Máxima (MVC): $\text{Activación Voluntaria}\ (\%) = \left(1 - \frac{\text{Sacudida Interpolada}}{\text{Sacudida en Reposo Potenciada}}\right) \times 100$. En sujetos sanos no fatigados, la activación voluntaria es del **$95\%\text{ a }100\%$**; tras esfuerzos prolongados o de alto volumen, la activación voluntaria cae al **$70\%\text{ a }85\%$**, evidenciando que el músculo posee reserva mecánica contráctil intrínseca que el sistema nervioso central es incapaz de reclutar.

<!-- chunk
id: macintosh-ch15-inorganic-phosphate-peripheral-fatigue
topic: muscle
tags: inorganic-phosphate, peripheral-fatigue, cross-bridges, calcium-sensitivity, ryr1
page: pp. 235-240
entities: molecule:inorganic-phosphate, protein:troponin-complex, anatomy:sarcoplasmic-reticulum, protein:ryr1, clinical:inorganic-phosphate-fatigue
rules: inorganic-phosphate-primary-peripheral-fatigue-driver
-->
inorganic-phosphate-primary-peripheral-fatigue-driver: El Fosfato Inorgánico ($\text{P}_i$) como Mediador Primario de la Fatiga Periférica: Durante la contracción intensa, la rápida hidrólisis de fosfocreatina ($\text{PCr}$) y ATP eleva la concentración mioplásmica de fosfato inorgánico libre ($\text{P}_i$) desde $\sim 3\ \text{mM}$ en reposo hasta **$>30\ \text{mM}$** (aumento $\times 10$). El $\text{P}_i$ libre deprime la función contráctil mediante tres mecanismos moleculares: 1) Invierte por acción de masas el paso del golpe de fuerza (*power stroke*) de la miosina, reduciendo la fuerza isométrica por puente cruzado en un **$30\%\text{ a }40\%$**. 2) Disminuye la afinidad de la Troponina C por el $\text{Ca}^{2+}$, desplazando la curva fuerza-$p\text{Ca}$ hacia la derecha. 3) Difunde pasivamente por canales aniónicos al interior del retículo sarcoplásmico, donde se une al $\text{Ca}^{2+}$ libre precipitando en forma de fosfato de calcio insoluble ($\text{Ca}\text{P}_i$), disminuyendo el pool de $\text{Ca}^{2+}$ disponible para su liberación por los canales RyR1.

<!-- chunk
id: macintosh-ch15-plffd-low-frequency-fatigue
topic: clinical
tags: plffd, low-frequency-fatigue, triad-disruption, calpains, eccentric-damage, recovery
page: pp. 240-242
entities: clinical:plffd-low-frequency-fatigue, anatomy:sarcomere, protein:ryr1, protein:dhpr-cav11
rules: prolonged-low-frequency-force-depression-plffd
-->
prolonged-low-frequency-force-depression-plffd: Depresión Prolongada de la Fuerza a Baja Frecuencia (PLFFD / Fatiga de Baja Frecuencia): Tras contracciones excéntricas severas o ejercicio fatigante exhaustivo, se produce una pérdida persistente de la fuerza evocada a bajas frecuencias de estimulación fisiológica (**10 a 20 Hz**, el rango de disparo motor habitual), mientras que la fuerza a altas frecuencias supramáximas (80 a 100 Hz) y los sustratos metabólicos ($\text{ATP}$, $\text{PCr}$, glucógeno y $\text{pH}$) se recuperan en pocas horas. Esta depresión selectiva persiste durante **24 a 72 horas**. Mecanismo etiopatogénico: no es un fenómeno metabólico, sino una disrupción microestructural de la tríada (desacoplamiento mecánico entre los sensores de voltaje DHPR y los canales RyR1) y degradación proteolítica de proteínas de andamiaje triádico (junctofilina) por calpaínas activadas por microfugas de $\text{Ca}^{2+}$.

<!-- chunk
id: macintosh-ch15-central-vs-peripheral-fatigue-loci
topic: muscle
tags: fatigue-mechanisms, central-fatigue, peripheral-fatigue, t-tubule, cross-bridge
page: pp. 226-236
entities: nerve:somatic-motoneuron, anatomy:t-tubules, anatomy:sarcoplasmic-reticulum, anatomy:sarcomere
rules: 
-->
Loci Anatómicos y Mecanismos de la Fatiga Neuromuscular: La fatiga muscular se subdivide en dos grandes dominios según su origen anatómico: 1) **Fatiga Central (Proximal a la Unión Neuromuscular):** reducción del comando motor voluntario por inhibición cortical supraespinal (serotonina/dopamina central) e inhibición espinal refleja inducida por aferencias nociceptivas y metaborreceptores musculares Grupo III y IV. 2) **Fatiga Periférica (Distal a la Unión Neuromuscular):** a) Falla de excitabilidad de la membrana sarcolémica y túbulos T por acumulación de potasio extracelular ($[\text{K}^+]_e > 10\ \text{mM}$); b) Falla del acoplamiento Excitación-Contracción (reducción de la liberación de $\text{Ca}^{2+}$ por el retículo sarcoplásmico por precipitación de $\text{Ca}\text{P}_i$); c) Inhibición directa de los puentes cruzados de miosina por exceso de $\text{P}_i$ libre y $\text{H}^+$.

<!-- chunk
id: macintosh-ch15-muscle-recovery-timecourse-table
topic: clinical
tags: muscle-recovery, pcr-resynthesis, glycogen-replenishment, ph-buffering, rest-intervals
page: pp. 241-244
entities: clinical:muscle-recovery-timecourse, molecule:inorganic-phosphate
rules: 
-->
Cronología y Fases de Recuperación de los Parámetros Fisiológicos Post-Fatiga: 1) **Resíntesis de Fosfocreatina ($\text{PCr}$):** vida media $t_{1/2} = 30\ \text{s}$; restauración $\ge 95\%$ en **3 a 5 minutos**. 2) **Aclaramiento de Fosfato Inorgánico ($\text{P}_i$):** $t_{1/2} = 2\text{ a }4\ \text{min}$; normalización completa en **10 a 15 minutos**. 3) **Amortiguación del pH y Aclaramiento de Lactato:** $t_{1/2} = 5\text{ a }8\ \text{min}$; normalización a $\text{pH} = 7.0$ en **20 a 30 minutos**. 4) **Recuperación del Drive Central del SNC:** $t_{1/2} = 10\text{ a }20\ \text{min}$; normalización completa en **1 a 2 horas** tras sesiones habituales. 5) **Resíntesis de Glucógeno Muscular:** $t_{1/2} = 5\text{ a }10\ \text{h}$; reposición total en **24 a 48 horas** con ingesta adecuada de carbohidratos (7–10 g/kg/día). 6) **Resolución de la Fatiga de Baja Frecuencia (PLFFD / Daño en tríadas):** $t_{1/2} = 12\text{ a }24\ \text{h}$; recuperación completa en **48 a 72 horas**.

<!-- chunk
id: macintosh-ch15-training-frequency-and-recovery-spacing
topic: clinical
tags: recovery-spacing, training-frequency, plffd, central-fatigue, muscle-soreness
page: pp. 240-244
entities: clinical:plffd-low-frequency-fatigue, clinical:muscle-recovery-timecourse
rules: prolonged-low-frequency-force-depression-plffd
-->
Programación de la Frecuencia de Entrenamiento Basada en la Cinética de Fatiga: Para optimizar la síntesis proteica miofibrilar y evitar el sobreentrenamiento neuromecánico, la frecuencia semanal por grupo muscular debe respetar las ventanas biológicas de recuperación: 1) Las variables metabólicas rápidas ($\text{PCr}$, $\text{pH}$, $\text{P}_i$) y la fatiga central estándar se resuelven en minutos u horas post-sesión. 2) Sin embargo, sesiones intensas con alto volumen excéntrico o series llevadas al fallo muscular (RPE 9–10) inducen **PLFFD estructural y microdaño en tríadas que deprime la fuerza submáxima durante 48 a 72 horas**. Por consiguiente, el espaciamiento óptimo entre sesiones de alta intensidad para un mismo grupo muscular requiere un intervalo mínimo de **48 a 72 horas** de descanso para permitir la resíntesis de junctofilina y la reparación del acoplamiento E-C.

<!-- stats: 6 chunks, 14 entidades cubiertas -->
