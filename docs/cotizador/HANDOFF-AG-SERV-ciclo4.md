# HANDOFF AG-SERV — estado y plan de relevo (actualizado 2026-08-30, ciclo 4)

> **Leer PRIMERO si se toma el relevo.** Complementa (NO reemplaza) `docs/agents/HANDOFF-cotizador.md` (estado base) y `docs/cotizador/04`/`05` (propuestas y decisiones). Este doc vive en territorio OWN de AG-SERV y se actualiza al cierre de cada ciclo.

## Contexto en 60 segundos

- **Agente**: AG-SERV (ficha §3.10). Rama `agent/servicios`, worktree `E:\Laboral\.worktrees\servicios`. Web 3D only hasta el lunes; luego se amplía.
- **Arranque de cualquier sesión**: `cd /e/Laboral/.worktrees/servicios && git merge main --no-edit && npm install && npx astro dev --port 4321 --host 127.0.0.1` → abrir `http://127.0.0.1:4321/cotizador`.
- **Verificación por commit**: `NODE_OPTIONS=--max-old-space-size=8192 npx astro check` (0 errores) + `npm test` (verde, 480 tests al cierre del ciclo 3).
- **REGLA DE ORO §0.9**: nada se borra, cambios aditivos. Commit frecuente (el proveedor corta).
- **Regla de gobernanza (doc 05 §9.4)**: ANTES de generar cualquier modelo 3D por cualquier método, preguntar a Alexander si lo genera él. Él genera los complejos (ej: el YUNQUE con su morph — reservado para él).
- **Blender**: 5.2.0 LTS en `D:\Program Files\Blender Foundation\Blender 5.2\blender.exe` (no está en PATH). MCP addon instalado (socket 9876) pero el puente NO está registrado en ZCode; Alexander lo activa bajo pedido. Vía normal: CLI headless + script.
- **Idioma/moneda acoplados**: ES⇒COP, EN⇒USD (i18n.ts). Modo oscuro con vars CSS `.cx-root[data-theme]`.
- **Regla de créditos (vigente)**: NO generar modelos 3D pesados; solo adaptaciones de código. Tareas caras → pasarlas a Alexander.

## Arquitectura del cotizador (archivos propios, todos en territorio OWN)

| Archivo | Rol |
|---|---|
| `src/components/services/CotizadorRedesign.tsx` | Shell: nav (tema+idioma), wizard, config+panel sticky, catálogo con filtros |
| `src/components/services/GuidedWizard.tsx` | Árbol 3 niveles + QuestionCard + SliderWithPreview (previews, snapping, chips) |
| `src/components/services/ModelPreview.tsx` | Canvas WebGL: modos `detail/pieces/story/variants/surface` + STORY_ANIMS + morph |
| `src/components/services/QuoteCta.tsx`, `icons.tsx` | CTA WhatsApp/email/copy/print · iconos SVG línea |
| `src/data/services/decisionTree.ts` | Árbol (preguntas, sliders `continuous`, `preview`, advancedOptions) |
| `src/data/services/i18n.ts` | EN dict + TREE_EN/VARS_EN/CATALOG_EN en espejo por ids (fallback ES) |
| `src/data/services/treeToQuote.ts` | Mapea respuestas del árbol → picks de servicios (principal+extras) → vals |
| `src/data/services/serviceVariables.ts` | Variables por servicio + `derivarTier` (+ `RTA-01.tipoSuperficie` nuevo) |
| `src/data/services/formula.ts`, `rateCard.ts`, `catalogCore.ts` | Motor de precio, rate card, catálogo 28 servicios |
| `src/lib/services/quoteSummary.ts` | bundlePct (2⇒−5%, 3+⇒−10%, no acumula rush), esquemaPago, RONDAS_NOTA |
| `src/lib/services/__tests__/treeToQuote.test.ts` | 23 tests del mapeo (incluye superficie/interpolación) |
| `docs/cotizador/04–05` | Propuestas de previews + decisiones de cycles 2–3 |

## Estado al cierre del ciclo 3 (todo commitado en agent/servicios)

- Wizard→precio conectado (treeToQuote), panel sticky con extras+total+bundle+pago+rondas.
- Modo oscuro + i18n completos en el flujo Web 3D.
- Previews: detail (progresivo entre 1–5 con snapping, tris interpolados), pieces (ensamblaje+explosión idle 3s), story (timeline de 10 animaciones autoplay), variants (chips clickeables), surface (morph cubo→esfera).
- Descuentos: lanzamiento −25% intacto, urgencia +30/+50, bundle, pago sugerido, rondas.
- Sección 3 (preview en panel de configuración) y shaders: **NO implementados aún** → es el trabajo del ciclo 4 (ver abajo).

## CICLO 4 EN CURSO — retroalimentación de Alexander (2026-08-30) y plan

1. **Detalle 1→2 y 2→3 deben ser MORPH real** (hoy es reemplazo suavizado; 3→4 y 4→5 están BIEN, no tocar). Plan: una sola malla merged-box: etapa 1 = edges (EdgesGeometry), [1,2] se rellena sólida + edges se desvanecen, [2,3] la MISMA malla morphea box→pill (proyección cápsula por vértice, computeVertexNormals por frame), [3,5] igual que ahora.
2. **Superficie**: morph debe ser continuo → slider `continuous` (step 0.1) + BUG: al volver hacia atrás no remorphea (hacer robusto: comparar con epsilon en var local del closure, no userData).
3. **Acabados con HolyBro X500**: GLB real en `E:\WebGL_tesis\blender_files\welded\ready-to-bake_005_rizomUV-packed_04.glb` (texturas incluidas). Copiar a `public/cotizador/models/holybro-x500.glb`. Modo `finish`: simple=clay plano · variado=presets metal/plástico · detallado=materiales originales del GLB. Enganchar a la pregunta cards `materiales-acabado` (QuestionCard necesita soportar preview en cards, no solo sliders).
4. **Piezas con HolyBro progresivo**: orden pedido por Alexander: motor → hélice → tubo del brazo → frame superior (con INSTANCIAS: 4 tubos+4 motores+4 hélices cuentan como 1 tipo) → frame inferior → rail de aterrizaje… grandes→pequeñas. **Depende de que el GLB tenga partes separadas por nombre** — INSPECCIONAR la jerarquía primero (script node leyendo el JSON chunk del GLB). Si viene welded/una sola malla: dejarlo anotado como TAREA PARA ALEXANDER (separar por partes en Blender) y mantener el ensamblaje procedural actual.
5. **Story**: chips clickeables para saltar a un momento (autoplay sigue después). pointerEvents on + cursor pointer + click → recalcular storyT0.
6. **Variantes**: desbloqueo progresivo — el slider N desbloquea opciones en los chips (orden: colores 1→6, material 2, material 3, accesorio 2, accesorio 3 ≈ 12 slots base; los chips bloqueados se ven apagados y no clickeables; >12 mostrar "+N combinaciones"). Así "aumentar variantes desbloquea opciones".
7. **estiloShader (sección 5, aprobado doc 05 §9.1 A+C)**: pregunta `estilo` slider 1–5 (1 fotorrealista → 5 estilizado total) en ver-modelo/interactivo con preview `shader-dial` (presets: PBR env alto / estudio / semirrealista grading / toon MeshToonMaterial / holograma ShaderMaterial fresnel+scanlines). Precio: si estilo ≥4 → añadir pick extra **RTA-05** (numShaders 1) con label "El look estilizado (shaders)" en treeToQuote (planVerModelo + planInteractivo + planScrollytelling si aplica).
8. **Sección 3 (pendiente histórica)**: preview en el panel de configuración — canvas arriba de la columna izquierda; WEB-01 → modo `hotspots` (marcadores pulsantes = vals.numHotspots); otros WEB3D → producto rotando (detail 3). Mínimo viable.

## Tareas para Alexander (no del agente)

- **Yunque**: modelo + morph (reservado, sustituirá al cubo→esfera en `surface`).
- **HolyBro**: si el GLB está welded y se quiere el preview de piezas progresivo real → separar por partes con nombres claros en Blender (motor, helice, tubo_brazo, frame_sup, frame_inf, rail…) y re-exportar; el código ya lo consumiría por nombre.

## Trampas conocidas (no repetir)

- `treeToQuote` valida que todo `vals` key exista en `SERVICE_VARIABLES[serviceId].variables` (test de consistencia) — si añades una var al árbol, añádela también al servicio.
- `derivarTier` con valores fraccionales: 4.1+ cae en el siguiente tierMap (aceptado).
- Emojis = prohibidos (iconos SVG en `icons.tsx`). Sin marcos en los canvas. Paleta: #0071e3 claro / #2997ff oscuro.
- El heredoc de bash rompe con scripts largos → escribir script a archivo temporal y ejecutarlo.
- `astro check` lento (~2 min): usar solo al cierre de cambios, no por paso.
