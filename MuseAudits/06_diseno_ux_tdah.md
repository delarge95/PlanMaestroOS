# 06 — Diseño y UX (incl. TDAH)

## Estado

Existe `designSystem.css` + `tokens.css` con clases `ds-*` (card/stack/row-between/
btn/chip/stat/h3/eyebrow/caption) y 6 prompts de migración (DESPACHO-4) + ENCARGO
design-audit (encoding `DÃ©ficit`, `overflowY/maxHeight`, h1 duplicados, 1381 inline
styles, emojis→lucide, full-width). El diagnóstico es correcto y los prompts, buenos.
Falta el cierre: verificación con grep + smoke visual por dominio.

## Principios que ya funcionan (no romper)

- Hoy como puerta única: encabezado mínimo + Top3 + Bloques A/B + filas condensadas.
- Máx 3 focos, avanzado tras botón, copy de apoyo sin exigencia
  (`Empezar 10 min`, prohibido `¡Vamos!`/emojis — implementation 01).
- Prehab primero si hay molestia; habilidad solo si activa; stats tras
  `Ver estadísticas detalladas`; cola Ver-más-tarde máx 10 (anti-feed-infinito).

## Huecos de diseño detectados

1. **Sin estados vacíos/error/offline diseñados**: qué ve un dominio sin datos,
   sin RAG, sin worker (`501 sin clave` existe en API pero falta su UI uniforme:
   componente `UnavailableCard {qué falta, qué sigue funcionando, 1 acción}`).
2. **Navegación rota parcial**: nutrition/anatomy existen pero sin entrada
   (`sectionNavConfig.ts`, 2 tickets). Añadir checklist "toda ruta nueva trae nav +
   smoke" al cierre de cada encargo.
3. **Densidad desigual**: fitness tiene 14 vistas library; gastronomy 4 casi vacías.
   Regla: dominio con <50% contenido muestra `En construcción: qué hay / qué falta /
   próximo paso` (mismo componente que Próximamente uniforme de implementation 01).
4. **Móvil 375px**: skills/fitness exigen sin-overflow; extender la exigencia a
   todas las rutas `/app` en el QA (`scripts/qa.mjs` ya audita 11 rutas públicas —
   añadir las 39 `/app` al mismo script).
5. **Accesibilidad**: teclado Tab/Enter/Escape exigido solo en evidence template.
   Subirlo a `ci`: test de foco visible + `prefers-reduced-motion` ya parcial en
   `siteAnimations.ts` — completar en visor 3D (1380 piezas en móvil es el riesgo
   de rendimiento #1: LOD + `dpr` capado + descarga progresiva ya iniciada, continuar).
6. **Tono clínico**: prohibir rojo punitivo, lenguaje de culpa (`deberías/fallaste`),
   streaks punitivos (vocab ya lo hace bien: `Bien/Repasar` sin castigo — extender
   el patrón a fitness rachas y a estancadas clínicas).

## Cierre propuesto (2 semanas, ejecutores baratos)

Orden DESPACHO-4 (PROMPT 1 fitness-hoy primero) + ENCARGO design-audit, con puertas:
`grep inline < umbral`, `astro check 0`, `npm test` verde, captura desktop+móvil por
dominio en `qa-screenshots/`, y pase visual final del orquestador antes del merge.
