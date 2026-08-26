# Doc 3/3 — Soluciones: qué construir, cómo y en qué orden

> **Fuentes**: [Doc 1 — Personas y fricción](./01-personas-friccion.md) · [Doc 2 — Necesidades consolidadas](./02-necesidades-consolidadas.md).
> Cada solución indica: problema que ataca (refs F#.# / N#), qué hacer, cómo implementarlo (componentes concretos del codebase actual), esfuerzo y métrica de éxito. Stack: Astro + React islands + Zustand, todo client-side, sin backend.

---

## Mapa general fricción → solución

| Fricción (Doc 1) | Necesidad (Doc 2) | Solución | Fase |
|---|---|---|---|
| F1.3 dead-end post-presupuesto | N5 | **S1** CTA "Enviar cotización" | 1 |
| F1.6, F3.3 jerga en desglose | N3, N6 | **S2** Desglose legible por fases | 1 |
| F1.4/F4.3 urgencia bloqueada | N3 | **S3** Urgencia honesta | 1 |
| F1.5 sospecha COP/USD | N3 | **S4** Tooltip moneda dual | 1 |
| F4.2 no exportar/compartir | N5 | **S5** Link compartible + PDF print | 1–2 |
| F1.1/F4.1 entrada por catálogo | N1 | **S6** Wizard "¿Qué quieres lograr?" | 2 |
| F2.2/F2.3 cero ejemplos visuales | N2 | **S7** Galería servicio×nivel | 2 |
| F2.1/F3.1/F3.2 sliders técnicos | N4, N6 | **S8** Modo "No sé" + defaults explicados | 2 |
| F3.4/F2.4 sin adjuntos | N4 | **S9** Drag & drop referencias | 3 |
| F2.5/F1.2 opacidad del precio | N3 | **S10** Panel "¿Por qué este precio?" | 2 |
| F4.4 sin proceso/FAQ | N5 | **S11** FAQ + proceso público | 1 |
| Chat reactivo (transversal) | todas | **S12** Chat contextual proactivo | 3 |

---

## FASE 1 — Que nadie se quede bloqueado (quick wins, 1 semana)

### S1 — CTA "Enviar esta cotización" *(resuelve F1.3, N5)*
**Qué**: tras el precio, botón principal *Enviar por WhatsApp* + secundario *Enviar por email*. Abre wa.me / mailto con resumen prellenado: servicio elegido, variables clave, nivel derivado, rango de precio, ID corto de cotización (hash del estado) y fecha.
**Cómo**: componente `QuoteCta.tsx`; generador de resumen en texto plano desde el store Zustand existente; ID = hash simple del estado serializado (sin backend). Copiar al portapapeles como tercera opción.
**Esfuerzo**: S (½ día). **Métrica**: % de sesiones con presupuesto que ejecutan el CTA (>15% = bien).

### S2 — Desglose legible por fases *(resuelve F1.6, F3.3, N6)*
**Qué**: agrupar subtareas bajo fases humanas — *Descubrimiento · Producción · Calidad y entrega* — con horas totales por fase; ocultar códigos RC-* detrás de etiquetas ("Arte y diseño", "Ingeniería 3D", "Desarrollo web", "IA", "Consultoría"); colapsable.
**Cómo**: mapping `rateClass → label/color/fase` en un nuevo `src/data/services/rateLabels.ts`; render agrupado en la sección resultado de `DirectCotizador.tsx`. El detalle técnico queda disponible en `<details>` para P3.
**Esfuerzo**: S (½–1 día). **Métrica**: reducción de abandono en pantalla de resultado.

### S3 — Urgencia honesta *(resuelve F1.4, F4.3, N3)*
**Qué**: nunca deshabilitar "Crítico". Mostrarlo activo con nota *"sujeto a disponibilidad — confirmamos por chat"*. Añadir micro-explicación de cada opción ("Estándar: entra a cola normal").
**Cómo**: quitar `disabled` de la opción crítica en `DirectCotizador.tsx`, mantener el recargo (+50%) visible; nota inline.
**Esfuerzo**: XS (1 h). **Métrica**: selecciones de Crítico >0 sin aumento de fricción.

### S4 — Transparencia de moneda dual *(resuelve F1.5, N3)*
**Qué**: tooltip/i junto al toggle USD/COP: *"Precios COP para mercado local colombiano; USD internacional. Misma calidad; economías distintas."*
**Cómo**: componente `Term` reutilizable (tooltip accesible con glosario); primera entrada del glosario.
**Esfuerzo**: XS. **Métrica**: consultas al chat sobre precios COP ↓.

### S5 — Cotización compartible y guardada *(resuelve F4.2, N5)*
**Qué**: (a) autosave del estado en localStorage (ya existe patrón career-store); (b) botón *Copiar link*: serializa estado en query params (`?s=RTA-01&v=...&cur=COP`) y genera vista idéntica al abrir; (c) export PDF vía `window.print()` con stylesheet de impresión limpio (logo, resumen, fases, validez 15 días, datos de contacto).
**Cómo**: helper `encodeQuoteState()/decodeQuoteState()` + hidratación inicial del store desde URL; `print.css` scoped a la vista resultado.
**Esfuerzo**: M (1–2 días). **Métrica**: links copiados/sesión; P4 logra pasar el documento a compra interna.

### S11 — FAQ + proceso público *(resuelve F4.4, N5)*
**Qué**: sección colapsable bajo el resultado o página hermana `/cotizador/proceso`: los 6 pasos del flujo de trabajo, garantías (2 rondas incluidas), qué pasa con archivos del cliente, formas de pago (50/50), validez del presupuesto.
**Cómo**: contenido estático en MDX/Astro + componente acordeón; enlazado desde el resultado.
**Esfuerzo**: S. **Métrica**: apertura del acordeón; preguntas repetidas al chat ↓.

---

## FASE 2 — Que todos entiendan qué compran (núcleo UX, 2–3 semanas)

### S6 — Entrada por objetivo: wizard "¿Qué quieres lograr?" *(resuelve F1.1, F4.1 — la fricción #1, N1)*
**Qué**: nueva pantalla inicial con 6 tarjetas visuales + opción asistida:
1. Mostrar mi producto en 3D en la web → RTA-01, WEB-01/02, CAD-01
2. Video/animación para redes y campañas → RND-02, VFX-01..03
3. Imágenes de producto (e-commerce/print) → RND-01
4. Interactivo para vendedores/ferias (hotspots, configurador) → RTA-02, RTA-06, WEB-04
5. IA en mi web o automatizar mi negocio → AI-01..04
6. No sé exactamente / guíame → chat con quick-replies + preguntas N1 del Doc 2

**Cómo**: `GoalPicker.tsx` arriba del selector actual (el catálogo completo sigue accesible en modo "avanzado"); mapping `goalToServices` en `catalogCore.ts` (metadato `goals?: string[]` por servicio); al elegir goal, filtra/reordena servicios y muestra tarjeta-resumen por servicio ("qué hace, desde USD X, entrega Y") antes de entrar a variables.
**Esfuerzo**: M (2–3 días + contenido visual de tarjetas). **Métrica**: tiempo hasta primer presupuesto ↓; abandono en selector ↓.

### S7 — Galería por servicio × nivel *(resuelve F2.2, F2.3 — fricción #2, N2)*
**Qué**: dentro del cotizador, panel "¿Qué incluye este nivel?" con: imagen/video de ejemplo del nivel ACTUAL (cambia al mover sliders), comparador S/M/L del mismo objeto, y descripción humana del badge ("M — alcance típico: …").
**Cómo**: componente `TierGallery.tsx`; assets en `public/cotizador/gallery/{serviceId}/{tier}.webp` (empezar con 6 servicios estrella: RND-01, RND-02, RTA-01, CAD-01, WEB-01, AI-01; resto con placeholder genérico por familia); lazy-load.
**Esfuerzo**: M código + L contenido (producción de ejemplos reales incremental). **Métrica**: interacción con galería; conversión posterior ↑.

### S8 — Modo "No estoy seguro" en variables *(resuelve F2.1, F3.1, F3.2, N4/N6)*
**Qué**: cada slider/select ofrece toggle *"No sé — recomiéndame"* → fija valor recomendado según objetivo/contexto declarado y muestra por qué ("Para e-commerce con 30 productos, recomendamos ~10k tris/pieza"). Badge en el resultado: *"Nivel calculado automáticamente: M"* reforzando que el cliente nunca elige el tier.
**Cómo**: extender `ServiceVariable` con `recommendedFor?: Record<goalId, number|string>`; estado `unsure:Set<varId>` en store; UI de toggle junto al label; tooltips `Term` en labels técnicos (tris, LODs, PBR…).
**Esfuerzo**: M (1–2 días). **Métrica**: uso del modo no-sé (>40% esperado en P2/P4) sin caída de conversión.

### S10 — Panel "¿Por qué este precio?" *(resuelve F1.2, F2.5, N3)*
**Qué**: junto al total, lista causal ordenada por impacto: "↑ 24 piezas (+38%) · ↑ resolución 4K (+12%) · −20% descuento lanzamiento". Cada línea es interactiva: click sugiere bajar ese driver y muestra delta estimado.
**Cómo**: computable ya — comparar quote actual vs quote con defaults mínimos por variable; componente `PriceWhy.tsx`.
**Esfuerzo**: M (1 día). **Métrica**: apertura del panel; ajustes posteriores (aprendizaje activo).

---

## FASE 3 — Que fluya solo (diferenciación, continuo)

### S9 — Referencias y adjuntos *(resuelve F2.4, F3.4, N4)*
**Qué**: zona drag & drop ("sueltan aquí tus referencias o tu modelo") que NO sube nada: lista nombres/tamaños, valida extensión y peso contra checklist (S9a autodiagnóstico: ".step ✓ 84 MB ✓ escala m ✓"), y adjunta el inventario al mailto del CTA S1 + instrucción de envío del archivo real por Drive/Wetransfer. Checklists dedicados: "¿Mi CAD sirve para web?", "¿Mi modelo sirve para realtime?"
**Cómo**: componente `RefDropzone.tsx` (File API local); `fileChecklist.ts` con reglas por extensión; integración en paso de contacto.
**Esfuerzo**: M (1–2 días). **Métrica**: sesiones con ≥1 referencia adjuntada; calidad de briefs entrantes ↑.

### S12 — Chat contextual proactivo *(transversal)*
**Qué**: el chat actual pasa de reactivo a asistente por sección: en selector sugiere por objetivo; en variables explica el término bajo foco ("¿Qué son los tris?") y ofrece "recomiéndame"; en resultado responde objeciones (precio, proceso, plazos) con quick-replies por persona (P1 habla de plazos/margen, P2 de look, P3 de archivos).
**Cómo**: extender `intentMatcher.ts` con intents contextuales (estado del store como señal) + respuestas curadas por sección; burbuja sugerida con 2 chips de pregunta relevante.
**Esfuerzo**: M (2 días + redacción). **Métrica**: conversaciones iniciadas ↑; escaladas a contacto con contexto completo.

### Contenido visual continuo (alimenta S6/S7)
Prioridad de producción: 1 render demo por servicio estrella ×3 niveles (18 assets) → 1 video loop 15 s por categoría (6) → casos por industria (4). Publicables incrementalmente; placeholders por familia mientras tanto.

---

## Roadmap resumido

```
FASE 1 (semana 1)      S1 CTA · S2 desglose fases · S3 urgencia · S4 moneda
                       S5 link/PDF · S11 FAQ/proceso
                       → elimina TODOS los dead-ends actuales
FASE 2 (semanas 2–4)   S6 wizard objetivos · S7 galería niveles ·
                       S8 modo no-sé · S10 why-price
                       → ataca las 2 fricciones críticas de entrada/comprensión
FASE 3 (continuo)      S9 referencias/checklists · S12 chat proactivo ·
                       producción visual incremental
                       → diferenciación y autoservicio real
```

## Métricas globales de éxito
1. **Time-to-quote**: clicks hasta ver primer precio (hoy: seleccionar servicio+configurar; meta: ≤3 desde wizard).
2. **Tasa de envío de cotización** (CTA S1): ≥15% de presupuestos vistos.
3. **Abandono en selector** (post-S6): <25%.
4. **Preguntas de jerga al chat**: tendencia ↓ tras S2/S8/S4.
5. **Cotizaciones compartidas** (S5): indicador directo del caso P4/aprobadores.

## Riesgos y mitigaciones
| Riesgo | Mitigación |
|---|---|
| Galería vacía da peor imagen que sin galería | Lanzar S7 solo con servicios que tengan assets; placeholder neutro elegante por familia |
| Wizard añade un paso percibido | Wizard es opcional y saltable ("ver todos los servicios"); recordar elección en localStorage |
| Expectativas fijadas por ejemplo de galería | Pie de galería: "ejemplo orientativo del nivel; tu versión parte de tus referencias" |
| Doble mantenimiento catálogo/wizard | Mapping `goals` vive en el mismo `catalogCore.ts`; un solo source of truth ya auditado |
