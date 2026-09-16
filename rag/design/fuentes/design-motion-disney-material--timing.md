<!-- chunk
id: mot-duracion-easing
topic: timing
tags: duracion, easing, micro-interacciones
chapter: Material motion — duración
section: Síntesis
entities: principle:150-300ms
rules:
-->
Material: micro-interacciones 150–250ms (transiciones de estado, hover, toggles), superficies que entran/salen 250–350ms. Menos de 100ms se percibe como salto (no transición); más de 400ms en elementos pequeños se siente lenta. Easing: ease-out al entrar (decelera, el ojo alcanza), ease-in al salir (acelera, despide) — linear solo en progresos continuos.

<!-- chunk
id: mot-disney-purpose
topic: principles
tags: disney, anticipation, follow-through
chapter: The Illusion of Life — aplicado a UI
section: Síntesis
entities: principle:motion-communicates
rules:
-->
De los 12 principios de Disney, los que trasladan a UI son: anticipación (un botón que se hunde anuncia la acción), follow-through/overlapping (los elementos de una lista escalonan su entrada, no aparecen en bloque) y arcs (las superficies se mueven en trayectorias naturales, no en L). Regla dura: todo movimiento debe comunicar jerarquía, feedback o continuidad espacial; el movimiento decorativo es ruido animado.

<!-- chunk
id: mot-reduced-motion
topic: accessibility
tags: a11y, vestibular
chapter: WCAG 2.3.3 / buena práctica
section: Síntesis
entities: principle:prefers-reduced-motion
rules:
-->
Animation from motion can trigger vestibular disorders: `@media (prefers-reduced-motion: reduce)` debe degradar movimientos grandes (parallax, desplazamientos de página, zooms) a fades cortos o a nada. Las micro-transiciones de color/opacidad son tolerables; los cambios de layout animados no.

<!-- chunk
id: mot-feedback-immediate
topic: feedback
tags: feedback, estado
chapter: Material — feedback
section: Síntesis
entities: principle:instant-feedback
rules:
-->
Toda acción del usuario recibe confirmación visual inmediata (<100ms) aunque el trabajo real tarde más: ripple/press states, spinners solo si la espera supera ~1s (antes, estados optimistas). Un botón que no responde al instante parece roto aunque funcione.
