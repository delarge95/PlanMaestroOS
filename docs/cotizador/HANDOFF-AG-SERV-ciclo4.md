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

---

## ACTUALIZACIÓN fin de ciclo 4 (2026-08-30, por agotamiento de créditos)

### Implementado y commitado (0 errores astro, 482 tests verdes)
- **Fix 1** detalle: morph real — una malla merged-box: etapa 1 edges azules, [1,2] se rellena sólida, [2,3] la MISMA malla morphea box→píldora (`morphToPill`, proyección cápsula + computeVertexNormals), [3,5] igual que antes (aprobado). NO verificado visualmente el tramo 2→3.
- **Fix 2** superficie: sliders `continuous` (step 0.1, con snapping ±0.25 como detalle) y morph bidireccional robusto (`lastMorphT` local con epsilon 0.0005). NO verificado visualmente el reverse.
- **Fix 3** acabados: modo `finish` con el HolyBro GLB real (`public/cotizador/models/holybro-x500.glb`, 11.6 MB, sirve 200). Simple=clay · Variado=presets metal/plástico/fibra/acento · Detallado=materiales baked originales (son OSCUROS — si se ven negros, subir exposure). Pregunta `materiales-acabado` con `preview: 'finish'` a nivel de pregunta (nuevo campo en TreeQuestion). VERIFICADO en navegador: dron visible con 'variado'.
- **Fix 4** piezas: modo `assembly` — `holybro.ts` define HOLYBRO_STEPS (10 pasos grandes→pequeñas con regex sobre nombres: motor→hélice→tubo→frame sup ×4→frame inf→aterrizaje→electrónica→batería→plataforma→tornillería). Slider piezas /5 = paso. Usa presets 'variado' (los baked son oscuros). La jerarquía del GLB SÍ es separable (60 meshes nombradas) — no hace falta tarea de Alexander.
- **Fix 5** story: chips clickeables (pointer-events on; click → salta al momento y el ciclo sigue). NO verificado el click.
- **Fix 6** variantes: desbloqueo progresivo — orden: colores 1-6, material 2, material 3, accesorio 2, accesorio 3 (12 combos base); chips bloqueados opacidad 0.45 + disabled + tooltip. NO verificado visualmente.
- **Shaders (sección 5)**: pregunta `estilo` 1–5 en ver-modelo e interactivo, preview `shader-dial` (1 PBR env alto / 2 estudio / 3 semireal / 4 toon MeshToonMaterial / 5 holograma ShaderMaterial fresnel+scanlines). Precio: estilo ≥4 ⇒ pick extra **RTA-05** (numShaders 1) con label "El look estilizado (shaders)". Tests añadidos (25 en treeToQuote). NO verificado visualmente el dial 4/5.
- **Sección 3**: `configPreview` en CotizadorRedesign — canvas sobre las variables: WEB-01/RTA-02→hotspots (marcadores pulsantes = vals.numHotspots), WEB-05→story, WEB-04→variants, resto→detail 3. NO verificado visualmente.

### Pendiente de verificar (PRÓXIMO AGENTE, en este orden)
1. Navegador: detalle 1→2→3 (¿morph real?), superficie bajar (¿remorphea?), story click en chips, variantes con slider bajo (¿chips bloqueados?), estilo 4/5 (¿toon/holograma visibles?), sección 3 (config WEB-01: ¿hotspots pulsan?).
2. **TRAMPA**: `public/cotizador/models/` se sirve en `/cotizador/models/...` (HOLYBRO_URL ya corregido). Si el GLB da 404 tras build, verificar inclusión en el deploy.
3. **Riesgo rendimiento**: 6 canvases WebGL simultáneos en ver-modelo (5 previews + fondo). IntersectionObserver pausa los fuera de vista, pero si va lento: limitar DPR o montar solo el preview visible.
4. Captura de Alexander sobreassembly a piezas bajas: solo el motor se ve (correcto pero poco vistoso) — valorar empezar el paso 1 con motor+mount+brazo.
5. `npm test` (482) y `astro check` (0) al cierre.

### Si me reemplazas
Lee este archivo + `docs/cotizador/05` §9-10. Territorio OWN, regla de oro aditiva, commits `[wip]` frecuentes. El servidor de dev se arranca con `npm run dev` (puerto 4321). NO generar modelos 3D sin preguntar a Alexander; tareas 3D pesadas → pasarlas a él (GLB listo para Piezas ya sirve; el yunque sigue pendiente de él para sustituir el cubo→esfera).

---

## CICLO 5 + CICLO 6 — completados y commiteados (2026-08-30/31, AutoCoder + ZCode)

### Ciclo 5 (commit bd0fb37)
1. Superficie = yunque real (anvil.ts, clone por instancia). 2. Pregunta estilo RETIRADA. 3. Fix raiz canvas en blanco: el loader compartia UN root 3D entre instancias (robo de padre + revealSteps envenenaba acabados) — ahora clone(true) por instancia con geometrias/texturas compartidas (flag glbShared). Piezas granulares (k = N/50 x 60). 4. Acabados: clay flatShading, variado muestreado de texturas originales, modelo +35%. 5-8. Renombres+ayudas config (numHotspots/numSecciones/numSKUs), ocultarEnConfig en numVariantes, slots de variantes aditivos.

### Ciclo 6 (commit d236158)
1. yunke.glb optimizado 53MB->5.9MB (tools/optimize_yunke.py, solo ANVIL LOW POLI conservada). 2. Morph keys en orden CORRECTO (usuario): t1=Key2 (simple), t3=Key1 (intermedia), t5=base (yunque completo); Key1 pico en t3 (0->1->0), Key2 1->0 en [1,3]. 3. Clay gris (luminancia ~197, visible). 4. Assembly: encuadre por bbox de piezas visibles con ease (zoom cerrado en motor -> full frame). 5. Story = HolyBro real + animacion "Despegue" (11 chips). 6. Camara por bbox en todos los modos (modelos mas grandes). 7. Variantes = HolyBro frame-only (brazos+motores+helices+frames) con 17 slots del usuario (colores por sets, explosion, cortes transversales, filtros, piezas adicionales batería/electronica/plataforma, xray, lineart, vuelo, 3 luces, aislamiento); fix raiz: traverse de visibilidad ocultaba el nodo raiz Scene (solo meshes ahora); defaultSlotOn solo color-base. 8. Explosion idle en assembly (3s). 9. Panel de config con acordion colapsable + re-precio en vivo. 10. Boton atras del navegador = seccion anterior (history API, nivel 1<->2<->3<->config, respuestas preservadas).

### Verificacion ciclo 6 (AutoCoder independiente)
- qa-ciclo6-verify.mjs: 27/27. npm test: 483. astro check: 0 errores. Post-merge main (e2eb031): 483 + 0 errores re-verificados.

### EXTRACCION a repo independiente (2026-08-31)
- Repo: https://github.com/delarge95/Services (privado). Solo cotizador: src/pages/cotizador.astro + src/components/services/** + src/data/services/** + src/lib/services/** + styles/tokens.css + env.d.ts + public/cotizador/** + configs propios (package.json reducido, astro.config base=/Services/ en CI, deploy.yml Pages). 78 tests, astro check 0, build OK, deploy Pages verde.
- URL publica: https://delarge95.github.io/Services/cotizador/ (el portfolio original NO se toca).
- El worktree agent/servicios sigue siendo la fuente de verdad del desarrollo; el repo Services se re-sincroniza copiando los mismos directorios.
