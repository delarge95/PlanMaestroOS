# Principios clínicos y guardrails

## Alcance y límites
Este documento traduce necesidades funcionales descritas en material clínico aportado por el usuario a decisiones de producto. No diagnostica ni sustituye atención clínica. No mostrar etiquetas diagnósticas, puntajes, advertencias o métricas clínicas como contenido persistente salvo que el usuario entre voluntariamente a una sección privada de seguimiento.

## Perfil funcional de diseño
La interfaz debe asumir alta distractibilidad, dificultad de inicio/cierre y organización temporal, sensibilidad a evaluación/vergüenza, rumiación, fatiga social, posible sensibilidad sensorial y energía variable. El producto debe funcionar como sistema externo: recordar, reducir opciones, preparar el siguiente paso y permitir pausar sin culpa.

## Reglas no negociables
- No usar urgencia falsa: evitar rojo, contadores agresivos, badges de atraso, lenguaje de deuda o rachas punitivas.
- No convertir el historial en juicio: decir `Retomar` y `Siguiente paso`, nunca `Fallaste`, `Atrasado` o `Incumplido`.
- No exigir explicación para posponer, cancelar o cerrar un modo. La salida segura debe ser siempre visible.
- No mostrar más de tres tareas accionables en el estado inicial de `Ahora`.
- No pedir recordar información que la app ya conoce; prellenar contexto, proyecto y siguiente paso.
- No usar animaciones largas, parallax, auto-play ni pulsos continuos. Respetar `prefers-reduced-motion`.
- No depender solo de color para comunicar estado; combinar icono, etiqueta accesible y texto breve cuando sea necesario.

## Patrones terapéuticamente coherentes
- Inicio de baja fricción: `Empezar 10 min` abre el recurso exacto y muestra un único micro-paso.
- Cierre explícito: toda sesión termina con `Hecho`, `Pausa` o `Siguiente paso`; guardar un siguiente paso redactable en una línea.
- Aplazamiento neutral: `Más tarde` abre 15 min, 30 min, esta tarde o elegir hora; no requiere justificación.
- Exposición y tareas sensibles: describirlas como prácticas opcionales, progresivas y privadas. Nunca mostrar un nivel como examen, ranking ni evaluación pública.
- Recuperación: ofrecer `Bajar estímulo` o `Modo simple` como preferencia global y no como señal de fracaso.

## Lenguaje
Usar frases de 2–5 palabras para controles: `Empezar`, `Pausar`, `Más tarde`, `Ver detalle`, `Guardar`, `Cerrar`. Usar tono descriptivo, no imperativo. Sustituir: `obligatorio`, `inviolable`, `deber`, `máximo`, `atraso`, `pendiente crítico`, `fallo` por `sugerido`, `para hoy`, `cuando puedas`, `por revisar`, `siguiente`.

## Información clínica sensible
- Seguridad o apoyo debe estar disponible desde el menú de cuenta/ayuda, pero no como alerta dominante en el dashboard si no hay un evento activo.
- Cualquier check-in de ánimo, sueño o consumo debe ser opt-in, con explicación corta de uso, opción `Omitir` y visualización privada.
- No inferir ni presentar diagnóstico a partir de datos de uso.
