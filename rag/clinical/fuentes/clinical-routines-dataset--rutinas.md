Fuente: dataset de rutinas de la app (src/data/clinical/routines.ts). Rutinas operacionales CBT/TDAH ya implementadas, parafraseadas de su propia definición. Uso conductual, no diagnóstico.

<!-- chunk
id: clin-app-rot-desconexion-nocturna
topic: rutina-diaria
tags: sueno, luz-calida, volcado-fisico
section: rot-1 (Desconexión Nocturna)
entities: rutina:desconexion-nocturna, duracion:15-min, frecuencia:diaria
rules: clin:sueno-plan-minimo
-->
Rutina diaria de desconexión nocturna (~15 min): apagar pantallas principales a las 21:00, activar luz cálida de lectura y anotar pensamientos pendientes en una libreta de volcado físico. Objetivo declarado: proteger la ventana de descanso reduciendo la estimulación dopaminérgica de la noche.

<!-- chunk
id: clin-app-rot-exposicion-microinteracciones
topic: rutina-diaria
tags: exposicion-social, micro-interacciones, pre-post-0-10
section: rot-2 (Exposición Social Gradual)
entities: rutina:exposicion-micro, metrica:ansiedad-pre-post-0-10, frecuencia:diaria
rules: clin:as-jerarquia-exposicion
-->
Rutina diaria de exposición social gradual vía micro-interacciones (~10 min): enviar un mensaje o comentario sin revisarlo tres veces, hacer una consulta directa en tienda o videollamada corta, y registrar la ansiedad percibida (0-10) antes y después. Objetivo: aumentar tolerancia a la evaluación externa con pasos de bajo riesgo y evidencia propia del contraste pre/post.

<!-- chunk
id: clin-app-rot-pausa-somatica
topic: rutina-diaria
tags: respiracion-4-7-8, tono-vagal, regulacion-somatica
section: rot-3 (Pausa Somática)
entities: tecnica:respiracion-4-7-8, estrategia:puntos-de-contacto, frecuencia:diaria
rules: clin:emocion-frase-puente
-->
Rutina diaria de pausa somática (~5 min) para momentos de hiperactivación o sobrecarga: tres ciclos de respiración con inspiración de 4 segundos, sostener 7 y exhalar en 8; atender los puntos de contacto de los pies con el suelo; reanudar la actividad a velocidad intencionalmente pausada. Objetivo: reajustar el tono autonómico antes de continuar.
