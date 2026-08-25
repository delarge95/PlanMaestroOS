Fuente: dataset de protocolos de la app (src/data/clinical/protocols.ts). Estrategias conductuales breves ya implementadas; cada una remite al documento clínico interno citado en su sourcePdfUrl. Uso conductual, no diagnóstico.

<!-- chunk
id: clin-app-proto-rumia-10-min
topic: rumiacion
tags: limite-10-min, cambio-de-entorno, volcado-escrito
section: proto-1 (Control de Rumia)
entities: protocolo:rumia-10-min, estrategia:cambio-de-entorno
rules: clin:post-evento-limite-10-min
-->
Protocolo de control de rumia implementado en la app: cuando un pensamiento recursivo supera los 10 minutos, se considera improductivo por definición operativa — se escribe en papel (volcado físico) y se cambia de entorno físico inmediatamente. Fundamento parafraseado del dataset: la rumiación consume recursos ejecutivos sin generar resolución, así que el temporizador estricto convierte la revisión mental en una tarea acotada con final visible.

<!-- chunk
id: clin-app-proto-suficientemente-bueno
topic: anti-perfeccionismo
tags: estandar-suficientemente-bueno, umbral-minimo, cierre
section: proto-2 (Estándar Suficientemente Bueno)
entities: concepto:umbral-minimo-aceptable, estrategia:sin-capas-de-pulido
rules: clin:tdah-cierre-terminado
-->
Anti-perfeccionismo operativo: definir el umbral mínimo aceptable del entregable ANTES de iniciar; cuando los criterios core se cumplen, la tarea se marca completada sin añadir capas secundarias de pulido. El criterio del dataset: un entregable funcional a tiempo supera infinitamente un borrador perfecto sin publicar.

<!-- chunk
id: clin-app-proto-desconexion-nocturna
topic: higiene-del-sueno
tags: cbt-i, pantallas-60-min, latencia-de-inicio
section: proto-3 (Desconexión Nocturna CBT-I)
entities: regla:cero-pantallas-60-min, sustituto:lectura-fisica-o-musica
rules: clin:sueno-plan-minimo
-->
Protocolo de desconexión nocturna CBT-I: cero pantallas interactivas durante los 60 minutos previos a la ventana de sueño, reemplazando el feed social por lectura física o música ambiental. Objetivo parafraseado del dataset: reducir la latencia de inicio del sueño y estabilizar el ritmo circadiano.
