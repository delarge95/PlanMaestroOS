<!-- chunk
id: tip-scale-modular
topic: scale
tags: escala, modular
chapter: Elements of Typographic Style
section: Síntesis — escala
entities: principle:modular-scale
rules:
-->
Una escala tipográfica (p.ej. razón 1.25) define tamaños armónicos en lugar de valores arbitrarios; en UI esto vive como tokens (--fs-*). Respetar la escala existente importa más que el valor concreto: los tamaños que no están en la escala rompen el ritmo aunque parezcan «casi iguales».

<!-- chunk
id: tip-measure-lineheight
topic: readability
tags: line-length, interlineado
chapter: Elements of Typographic Style
section: Síntesis — legibilidad
entities: principle:45-75-chars
rules:
-->
La medida (longitud de línea) óptima para lectura sostenida es 45–75 caracteres; más larga exige saltos oculares costosos. Interlineado 1.4–1.6 para cuerpo (mayor si la medida crece); en bloques grandes de texto, max-width con estas medidas no es un detalle estético sino la diferencia entre leer y decodificar.

<!-- chunk
id: tip-vertical-rhythm
topic: rhythm
tags: ritmo-vertical, espaciado
chapter: Elements of Typographic Style
section: Síntesis — ritmo
entities: principle:vertical-rhythm
rules:
-->
El ritmo vertical alinea las líneas de texto consecutivas a una retícula horizontal implícita: márgenes y saltos coherentes (múltiplos del interlineado) hacen que la página «se sostenga». Espaciados idiosincráticos por sección rompen el ritmo aunque cada valor individual parezca razonable.

<!-- chunk
id: tit-tracking
topic: titles
tags: tracking, titulos
chapter: Elements of Typographic Style
section: Síntesis — títulos
entities: principle:tracking-titles
rules:
-->
Los títulos grandes llevan tracking ligeramente negativo (las letras grandes necesitan menos aire entre sí); el cuerpo nunca. En UI esto se traduce en letter-spacing −0.01…−0.02em solo en h1/h2 grandes.
