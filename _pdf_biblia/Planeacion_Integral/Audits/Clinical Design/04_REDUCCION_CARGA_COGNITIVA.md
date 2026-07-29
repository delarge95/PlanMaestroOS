# Reducción de carga cognitiva por pantalla

## Regla de presupuesto visual
En el primer viewport: 1 título, 1 objetivo, 1 CTA primaria, máximo 3 elementos secundarios y máximo 1 contenedor principal. Si se excede, mover contenido a disclosure, sheet, menú o página de detalle.

## Pantalla Ahora
Estructura exacta:
1. Meta contextual pequeña: día/hora o bloque actual; no saludo largo.
2. Tarea focal: nombre de hasta seis palabras, micro-paso de una línea y CTA `Empezar`.
3. Acciones secundarias: `Más tarde` y menú `…`; no mostrar más controles.
4. Lista compacta `Después` con hasta dos ítems; cada fila muestra título, hora opcional y check. Sin cards individuales.
5. `Herramientas` como icono/botón secundario abre Sheet: energía, rescate, segundo cerebro, check-in opcional.

Eliminar del estado inicial: principios, explicaciones terapéuticas, texto educativo, métricas extensas, múltiples workflows, bloques repetidos, badges de estado no accionables y cards de navegación.

## Páginas de planificación
- Mostrar primero una línea de tiempo o lista de agenda, no un panel de métricas.
- Filtros en un botón `Filtrar` que abre sheet; no chips permanentes si hay más de tres.
- Cada bloque muestra hora, título y estado; detalle al tocar.
- Para crear, usar un único `+` con menú de opciones, no varios botones de creación.

## Listas y detalle
- Lista = filas, no mosaico de cards.
- Una fila contiene: icono opcional, título, metadato mínimo, affordance de navegación.
- Los detalles extensos se abren en página o sheet. No expandir automáticamente más de un elemento a la vez.
- Empty state: título breve, una explicación de una línea y un CTA. Sin ilustración decorativa pesada.

## Palabras e iconos
Reducir palabras repetidas, no claridad. Sustituciones sugeridas:
- Ajustes -> engranaje con `aria-label="Ajustes"` y tooltip.
- Más acciones -> elipsis horizontal con menú etiquetado.
- Filtros -> sliders con label visible en móvil.
- Calendario -> icono solo dentro de barra conocida; con label en navegación móvil.
- Cerrar -> X solo en modal/sheet y siempre con `aria-label`.

Mantener texto en: CTAs de flujo, estados sensibles, tareas, confirmaciones, formularios, avisos y acciones destructivas.

## Densidad y lectura
- Agrupar por proximidad y separadores, no por cajas.
- Preferir una columna hasta 960px; dos columnas solo cuando los bloques son independientes y ambos caben sin competir.
- No colocar dos CTA primary en una misma fila.
- No usar más de dos pesos tipográficos visibles en un bloque.
- Mantener contraste WCAG AA; el texto secundario no puede convertirse en gris ilegible por perseguir minimalismo.

## Modo simple
Agregar preferencia `Modo simple` persistente. Al activarse: oculta métricas, reduce a una tarea focal y una lista de siguientes, colapsa secundarios, desactiva animaciones no esenciales y usa una sola columna. Debe poder activarse desde el menú de cuenta y desde Herramientas sin explicación.
