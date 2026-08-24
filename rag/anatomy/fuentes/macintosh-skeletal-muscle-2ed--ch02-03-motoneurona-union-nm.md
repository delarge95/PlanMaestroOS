<!-- chunk
id: macintosh-ch02-03-transmission-safety-factor
page: 38
topic: nerve
tags: neuromuscular-junction, safety-factor, end-plate-potential, epp, threshold
entities: anatomy:neuromuscular-junction, clinical:transmission-safety-factor
rules: neuromuscular-transmission-safety-factor
-->
neuromuscular-transmission-safety-factor: Factor de Seguridad de la Transmisión Neuromuscular: El Potencial de Placa Motora (EPP) despolarizante generado por la liberación de acetilcolina tras un potencial de acción motor supera con amplio margen el umbral necesario para activar los canales de sodio $\text{Na}_V1.4$ en los pliegues postsinápticos. Esta reserva se define como el Factor de Seguridad (Safety Factor): $\text{Safety Factor} = \frac{\text{Amplitud del EPP}\ (\approx 40\text{--}50\ \text{mV})}{\text{Despolarización requerida para el Umbral}\ (\approx 15\text{--}20\ \text{mV})} \approx 2.0\text{ a }3.0$. En reposo y condiciones fisiológicas normales, el factor de seguridad es de 2.0 a 3.0, garantizando un acoplamiento 1:1 estricto donde cada impulso axonal dispara invariablemente un potencial de acción muscular. Si el factor de seguridad cae por debajo de 1.0 (por fatiga neuromuscular de alta frecuencia o patología miasténica), la transmisión sináptica fracasa produciendo bloqueo de contracción.

<!-- chunk
id: macintosh-ch02-03-quantal-acetylcholine-release
page: 34
topic: nerve
tags: quantal-release, acetylcholine, mepp, epp, pq-calcium-channels
entities: anatomy:neuromuscular-junction, protein:cav21-pq-channel, clinical:quantal-release
rules: quantal-acetylcholine-release-parameters
-->
quantal-acetylcholine-release-parameters: Liberación Cuántica de Acetilcolina y Parámetros Biofísicos de Exocitosis: En la placa motora, el neurotransmisor acetilcolina (ACh) se almacena y libera en paquetes discretos ("cuantos"): 1 cuanto (1 vesícula sináptica) contiene $\approx 10.000$ moléculas de ACh. En reposo basal, se produce una exocitosis espontánea estocástica de cuantos aislados a una frecuencia de ~1 Hz, generando Potenciales de Placa Motora Miniatura (MEPP) de $\approx 0.5\text{ a }1.0\ \text{mV}$ (subumbrales). Con la llegada de un potencial de acción despolarizante al terminal axonal, la apertura de canales de calcio dependientes de voltaje tipo P/Q ($\text{Ca}_V2.1$) induce un influjo masivo local de $\text{Ca}^{2+}$, provocando la exocitosis síncrona de **60 a 150 cuantos** de ACh (contenido cuántico $m$), sumando un EPP total de 40 a 50 mV.

<!-- chunk
id: macintosh-ch02-03-motoneuron-morphology-and-axonal-transport
page: 22
topic: nerve
tags: motoneuron, soma, ais, kinesin, dynein, axonal-transport
entities: nerve:somatic-motoneuron, protein:nav16, protein:kinesin, protein:dynein
rules: 
-->
Morfología de la Motoneurona Somática y Transporte Axoplásmico: 1) **Soma y Segmento Inicial del Axón (AIS):** Cuerpos celulares ubicados en el asta ventral de la médula espinal (lámina IX de Rexed, diámetro de 30 a 70 $\mu\text{m}$). El segmento inicial del axón (AIS) carece de mielina y posee la mayor densidad de canales de sodio $\text{Na}_V1.6$ de toda la neurona, otorgándole el umbral de despolarización más bajo donde se origina el potencial de acción. La conducción axonal saltatoria a través de los nodos de Ranvier alcanza 50 a 120 m/s en fibras mielinizadas $A\alpha$. 2) **Transporte Axoplásmico:** a) Anterógrado rápido: mediado por la proteína motora **quinesina** (kinesin, 200–400 mm/día) hacia el terminal (vesículas, mitocondrias); b) Retrógrado rápido: mediado por **dineína** (dynein, 100–200 mm/día) desde la placa motora hacia el soma (factores neurotróficos BDNF/GDNF, vesículas recicladas).

<!-- chunk
id: macintosh-ch02-03-neuromuscular-junction-microarchitecture
page: 32
topic: anatomy
tags: neuromuscular-junction, junctional-folds, nachr, ache, rapsyn
entities: anatomy:neuromuscular-junction, protein:nachr-receptor, protein:nav14, protein:ache-enzyme, protein:snare-complex
rules: 
-->
Microarquitectura Sináptica de la Placa Motora: 1) **Terminal Presináptica:** zonas activas donde las vesículas de ACh están ancladas al complejo SNARE (sinaptobrevina, sintaxina y SNAP-25) frente a canales de $\text{Ca}^{2+}$ $\text{Ca}_V2.1$. 2) **Hendidura Sináptica:** matriz extracelular que contiene la enzima **acetilcolinesterasa (AChE)** unida por la proteína ColQ, que hidroliza la ACh a una velocidad de $\approx 25.000\ \text{moléculas/segundo/enzima}$ en $<1\ \text{ms}$, previniendo la desensibilización del receptor. 3) **Membrana Postsináptica:** presenta pliegues junturales profundos; en las crestas superiores se concentran los receptores nicotínicos de acetilcolina (**nAChR** pentámeros $\alpha_2\beta\delta\epsilon$, $\approx 10.000/\mu\text{m}^2$) fijados por la proteína **rapsina**; en las fosas basales se concentran los canales de sodio **$\text{Na}_V1.4$**, amplificando la despolarización hacia el sarcolema.

<!-- chunk
id: macintosh-ch02-03-myasthenia-gravis-pathophysiology
page: 41
topic: clinical
tags: myasthenia-gravis, autoimmune, nachr-antibodies, junctional-folds, safety-factor
entities: clinical:myasthenia-gravis, protein:nachr-receptor, anatomy:neuromuscular-junction
rules: neuromuscular-transmission-safety-factor
-->
Fisiopatología de la Miastenia Gravis: Enfermedad autoinmune mediada por autoanticuerpos dirigidos contra los receptores nicotínicos de acetilcolina postsinápticos (anti-nAChR en el 85% de los casos) o contra la tirosina quinasa específica del músculo (anti-MuSK). La fijación de autoanticuerpos activa la cascada del complemento, provocando la destrucción y aplanamiento de los pliegues junturales postsinápticos y una severa pérdida del número de nAChR funcionales disponibles. Consecuencia electrofisiológica: con el esfuerzo repetitivo, la cantidad de ACh liberada genera un EPP progresivamente menor que cae por debajo del umbral de activación de los $\text{Na}_V1.4$ (Factor de Seguridad $<1.0$), provocando fallo en el disparo del potencial de acción muscular y debilidad neuromuscular fluctuante y fatigable (ptosis, diplopía, debilidad de extremidades).

<!-- chunk
id: macintosh-ch02-03-lambert-eaton-myasthenic-syndrome
page: 41
topic: clinical
tags: lems, lambert-eaton, pq-calcium-channels, paraneoplastic, quantal-content
entities: clinical:lambert-eaton-syndrome, protein:cav21-pq-channel, anatomy:neuromuscular-junction
rules: quantal-acetylcholine-release-parameters
-->
Síndrome Miasténico de Lambert-Eaton (LEMS): Trastorno autoinmune presináptico de origen paraneoplásico (frecuentemente asociado a carcinoma pulmonar microcítico en >50% de los pacientes) caracterizado por la presencia de autoanticuerpos contra los canales de calcio dependientes de voltaje presinápticos tipo P/Q ($\text{Ca}_V2.1$). Fisiopatología: la pérdida de canales de $\text{Ca}^{2+}$ en las zonas activas presinápticas reduce drásticamente el influjo de calcio tras la despolarización axonal, disminuyendo el contenido cuántico ($m$) de vesículas de ACh liberadas por impulso. A diferencia de la Miastenia Gravis, la debilidad muscular proximal en el LEMS **mejora de forma transitoria tras contracciones musculares breves y repetidas (facilitación post-ejercicio)**, debido a la acumulación progresiva de $\text{Ca}^{2+}$ residual en el terminal presináptico durante trenes de impulsos repetidos.

<!-- chunk
id: macintosh-ch02-03-botulinum-toxin-mechanism
page: 41
topic: clinical
tags: botulinum-toxin, botox, snare-complex, snap-25, flaccid-paralysis
entities: clinical:botulinum-toxin, protein:snare-complex, anatomy:neuromuscular-junction
rules: 
-->
Mecanismo de Acción de la Toxina Botulínica (Botox): Neurotoxina producida por la bacteria anaerobia *Clostridium botulinum*, estructurada como una cadena pesada (responsable de la unión de alta afinidad a receptores presinápticos y endocitosis) y una cadena ligera (una endopeptidasa de zinc biológicamente activa). Tras ser internalizada en el citoplasma del terminal presináptico motor, la cadena ligera escinde enzimáticamente proteínas clave del complejo de fusión vesicular **SNARE** (específicamente la proteína **SNAP-25** por las serotoxinas A y E, o la sinaptobrevina/VAMP por la serotoxina B). La disrupción de este andamiaje impide físicamente el acoplamiento y exocitosis de las vesículas de acetilcolina en las zonas activas, aboliendo de forma total la transmisión neuromuscular y generando una parálisis flácida química reversible dependiente de dosis.

<!-- stats: 7 chunks, 15 entidades cubiertas -->
