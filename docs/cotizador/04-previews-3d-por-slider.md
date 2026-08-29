# Doc 4/4 — Previews 3D por slider: cómo se modifica el modelo según el slider y cómo integrarlo

> **Fuente**: feedback acumulado del usuario (HANDOFF #3, #12, #17): *"las configuraciones de tris, hagámoslo algo más intuitivo, podemos usar modelos 3D existentes"*, *"incluyas WebGL en toda la web"*, *"que se integren de forma natural, sin marco"*.
> **Alcance**: cada slider del cotizador (wizard + panel de configuración) con 1–3 propuestas de qué ve el cliente mover el slider, cómo reacciona el modelo 3D y cómo se integra en el código actual.
> **Estado del sistema hoy**: `ModelPreview.tsx` ya renderiza un producto procedural (cuerpo + anillo azul + piezas satélite) que reacciona a `detail` (1–5) y `pieces` (1–50) vía `stateRef` sin reconstruir el contexto WebGL. Los sliders del wizard lo usan; los del panel de configuración (LuxeSlider) aún no tienen preview.

---

## 0. Principios de diseño para todas las propuestas

1. **El slider ES la animación.** No hay botón "aplicar": mover el slider transforma el modelo en tiempo real con easing suave (120–200 ms). El precio del panel sticky debe latir/actualizar en sincronía — el cliente aprende la regla *"más piezas/más detalle = más precio"* jugando (N3 del doc 02).
2. **Procedural primero, assets después.** Todo lo propuesto se puede construir sin assets externos (geometría paramétrica + materiales estándar). Cuando existan assets reales del sprint doc-33, el mismo sistema de props acepta un GLB y el hero procedural se retira — cero refactor de UI.
3. **Sin marco, con suelo.** Canvas transparente sobre el fondo de la página + sombra elíptica suave (patrón ya implementado). Nada de cajas con borde.
4. **Un solo héroe, muchas reacciones.** No inventamos un objeto distinto por slider: definimos 4 "objetos héroe" procedurales y cada slider modifica UNA propiedad del héroe. Es lo que hace Apple: el producto es siempre el mismo, lo que cambia es la demostración.

### Los 4 objetos héroe (registry `heroObjects.ts`, procedurales)

| Héroe | Descripción | Familias que lo usan |
|---|---|---|
| **H1 · Motor** | Cuerpo cilíndrico achatado + anillo acento #0071e3 + pernos + tapa con ranuras. El actual de ModelPreview, evolucionado. | ver-modelo, RTA-*, CAD-01, WEB-01 |
| **H2 · Producto retail** | Botella/auricular estilizado con 3 zonas de material (cuerpo, grip, botón) + decal de logo. | configuradores, WEB-04/07, RND-01, TEX-01 |
| **H3 · Escenario web** | Plano/plataforma con el H1 encima y paneles DOM-flotantes alrededor. | WEB-02/05/08, scrollytelling |
| **H4 · Nube de datos** | Globo wireframe + tarjetas flotantes conectadas por líneas. | AI-01..04 |

### Reglas técnicas transversales (aplican a todas las integraciones)

- **Props, no reconstrucción**: los sliders escriben en `stateRef` (patrón ya vivo en ModelPreview); el render loop aplica cambios. Nunca re-crear el renderer al mover un slider.
- **Instancing para conteos**: todo slider de "cuántos X" usa `InstancedMesh` (1 draw call) con tope visual de 12–20 instancias + badge "+N" cuando el valor real es mayor. El badge SIEMPRE muestra el número real del slider (honestidad), la escena muestra lo que el ojo distingue.
- **Crossfade > rebuild**: cambios de material/LOD se hacen con `material` swap u opacidad, no regenerando geometría — salvo el slider de detalle donde la regeneración ES el mensaje (y se hace con debounce 80 ms).
- **Pausa fuera de vista**: `IntersectionObserver` pausa el loop del canvas no visible (el wizard puede tener 2 previews en DOM).
- **Fallback móvil**: si `devicePixelRatio` alto + móvil gama baja (heurística `navigator.hardwareConcurrency <= 4`), bajar DPR a 1 y desactivar la animación idle; el modelo queda estático pero reacciona al slider igual.
- **SSR**: sin cambios — todo dentro de `useEffect`.

---

## 1. Sliders del wizard (los que ya tienen preview)

### 1.1 `nivel-detalle` — 1 a 5 · "¿Qué nivel de detalle necesitas?" (ver-modelo, interactivo, scrollytelling)

**Hoy**: wireframe → flat → smooth+metal. Correcto pero abstracto: el objeto no "gana" nada visible entre 3 y 5.

**Propuesta 1.1.A — "El mismo objeto, 5 fabricaciones" (recomendada)**
- *Qué ve el cliente*: el Motor (H1) pasa por 5 etapas de fabricación real: **1** cajas primitivas sin bisel (blockout de diseño) → **2** biseles y formas flat-shaded → **3** superficies suaves con material base → **4** aparecen los detalles (tornillos, ranuras de la tapa, cables) → **5** materiales PBR completos: rugosidad por zona, decal de logo, iluminación HDRI con reflejos. Es literalmente lo que el cliente compra: el precio sube porque el trabajo sube, y lo VE.
- *Comportamiento*: 5 sub-niveles geométricos preconstruidos del H1 (geometrías cacheadas al montar); crossfade de opacidad entre nivel N y N+1 mientras el slider se arrastra; el nivel 4-5 añade `envMapIntensity` y un decal (plano con textura de logo procedural).
- *Integración*: ampliar el `preview: 'detail-level'` de `decisionTree.ts` sin cambiar tipo. En `ModelPreview`, `buildStatic(d)` ya se llama por cambio — sustituir la esfera/torus por `getHeroLOD('motor', d)` del nuevo `heroObjects.ts` (geometrías memoizadas). Debounce de 80 ms en el rebuild para arrastres rápidos. Overlay de caption ya existente ("Boceto — solo geometría…") se mantiene.

**Propuesta 1.1.B — "Contador de triángulos en vivo"**
- *Qué ve el cliente*: igual que 1.1.A pero con un contador HTML superpuesto (`≈ 1.2k tris → 48k tris`) que escala con el slider, y una rejilla wireframe superpuesta opcional al nivel 1–2. Conecta con el feedback #3 (hacer intuitivo lo de tris): el número existe pero acompañado de la imagen.
- *Comportamiento*: el contador mapea lineal-exponencial 1→400 tris, 5→250k tris (los mismos órdenes que usa `POLY_POR_NIVEL` en `treeToQuote.ts` — trazabilidad visual del número que luego cotiza).
- *Integración*: div absoluto sobre el canvas (sin tocar el render); `fmt` compacto (k). Coste: XS.

**Propuesta 1.1.C — "Antes/después con cortina"**
- *Qué ve el cliente*: el héroe se muestra partido: mitad izquierda en nivel 1 (blockout), mitad derecha en el nivel seleccionado; una cortina vertical marca el corte. El slider de detalle mueve la cortina la primera vez y después cambia el lado derecho. Muy efectivo para P2 (directores de arte) que comparan niveles.
- *Comportamiento*: dos renders de la misma escena con `scissor test` (dos pasadas por frame); la geometría izquierda fija en LOD1, derecha en LOD del valor.
- *Integración*: `renderer.setScissorTest(true)` + dos cámaras compartidas; el divisor es un div CSS. Coste M. Solo si el pase de A pide comparación explícita.

### 1.2 `cantidad-piezas` — 1 a 50 · "¿Cuántas piezas o partes tiene tu producto?" (ver-modelo, interactivo)

**Hoy**: satélites genéricos orbitando. Funciona pero no comunica "ensamblaje de un producto".

**Propuesta 1.2.A — "El ensamblaje se construye" (recomendada)**
- *Qué ve el cliente*: un engranaje central del Motor va RECEPCIENDO piezas reales de ensamblaje (pernos → rodamientos → tapas → módulos) que caen y encajan con un pequeño asentamiento elástico. Con 5 piezas es un producto simple; con 30 se ve un mecanismo serio; con 50 la escena es densa y el badge dice "+30 más". El precio y la complejidad se sienten.
- *Comportamiento*: catálogo procedural de 6 tipos de pieza (cilindro, toro, caja biselada, perno hex, resorte hélice, módulo con LEDs) distribuidos en anillos concéntricos según `i % 6`; cada pieza nueva entra con `scale 0→1` + drop con overshoot (`easeOutBack`), 60 ms escalonadas; máximo visible 20 + badge real.
- *Integración*: sustituye `syncSatellites` actual; el `value` del slider entra por `stateRef` (igual que hoy). Piezas como 1 `InstancedMesh` por tipo (6 draw calls). Coste S.

**Propuesta 1.2.B — "Explosión proporcional"**
- *Qué ve el cliente*: el ensamblaje se muestra EXPLOTADO — a más piezas, más niveles de explosión y más etiquetas técnicas (líneas guía con puntitos). Comunica "cada pieza adicional = trabajo de metadata y despiece" (que es exactamente lo que cobra CAD-01/RTA-06).
- *Comportamiento*: factor de explosión = `0.25 + piezas/50 * 0.75`; líneas guía (`LineSegments`) desde cada pieza al borde con puntos de anclaje; etiquetas numéricas como sprites (no HTML — más barato).
- *Integración*: reutiliza el catálogo de piezas de 1.2.A; añade `explodeFactor` al stateRef. Coste S sobre A.

**Propuesta 1.2.C — "Caja sorpresa desmontable"** (para la rama interactivo, no ver-modelo)
- *Qué ve el cliente*: al pasar de ~10 piezas, la tapa del Motor se abre sola (bisel animado) mostrando el interior con más piezas — el "momento wow" que vende la rama interactiva.
- *Integración*: keyframe de rotación de tapa disparado al cruzar el umbral 10 (una sola vez por arrastre). Coste S. *Riesgo*: puede distraer en ver-modelo; activarlo solo si `branch === 'interactivo'` (prop nueva `variant`).

### 1.3 `escenas` — 3 a 10 · "¿Cuántas escenas o momentos tiene tu historia?" (scrollytelling) — **sin preview hoy**

**Propuesta 1.3.A — "Dolly de cámara por estaciones" (recomendada)**
- *Qué ve el cliente*: el héroe H1 sobre su plataforma (H3) y la CÁMARA viaja entre estaciones: cada valor del slider define una toma distinta (3 = viaje corto: lejos-medio-detalle; 10 = viaje largo con órbita, contrapicado y primer plano). Un chip "Escena 4/8" cambia con el slider y una barra de progreso tipo rail se llena. Es una miniatura de lo que el cliente está comprando (WEB-05).
- *Comportamiento*: array de keyframes de cámara `{pos, lookAt, fov}` generado para N estaciones sobre una curva CatmullRom; el slider interpola posición del playhead (`value/max`); lerp con damping 0.08. El héroe además cambia sutilmente de pose por estación (rotación Y progresiva).
- *Integración*: `preview: 'dolly-cam'` nuevo en la unión de `decisionTree.ts`; en ModelPreview, modo `scenes` con `stations={value}`. Chip y rail como HTML overlay. Coste M.

**Propuesta 1.3.B — "Filmstrip curvo"**
- *Qué ve el cliente*: una tira de película curvada en 3D con N fotogramas flotantes; cada fotograma muestra el producto desde el ángulo de esa escena; la tira avanza al mover el slider y el fotograma activo se ilumina.
- *Comportamiento*: N planos redondeados sobre curva; en vez de render-to-texture (caro), cada plano lleva un mini-render simplificado (silueta del héroe con otro ángulo de rotación — copias baratas del mesh).
- *Integración*: `InstancedMesh` de planos + shader de borde iluminado. Coste M. *Cuándo elegir sobre A*: si el cliente quiere VER la narrativa como storyboard más que sentir la cámara.

**Propuesta 1.3.C — "Mini-scroll real"**
- *Qué ve el cliente*: bajo el canvas hay una mini-barra de scroll; el slider la posiciona y el 3D reacciona exactamente como reaccionará su página al scroll del usuario (producto rota/avanza/se despieza por tramos). Es la demo más honesta: "esto es lo que hará tu web".
- *Integración*: la barra ES el slider (mismo handler); el valor mapea a `scrollProgress` 0–1 que alimenta una timeline de estados del héroe (misma que usará la implementación real). Coste M–L. *Nota*: sólo si se quiere vender el mecanismo; A ya lo comunica.

### 1.4 `num-variantes` — 2 a 50 · "¿Cuántas variantes u opciones configurables tiene?" (web-app) — **sin preview hoy**

**Propuesta 1.4.A — "El configurador gira" (recomendada)**
- *Qué ve el cliente*: el Producto retail (H2) cambia de variante en vivo: color de cuerpo, material del grip y accesorio rotan por presets según el valor del slider (valor 1 = variante A, 2 = B…). Una tira de chips bajo el canvas muestra "Variante 7 · Carbón / Grip táctil". Mover el slider = ver el configurador funcionando.
- *Comportamiento*: 8 presets de material (colores de marca + metal + madera procedural + carbón + translúcido); `value % 8` selecciona preset con lerp de color 200 ms; el accesorio (aro/clip/tapa) se intercambia por `value % 3`.
- *Integración*: `preview: 'variant-swirl'`; modo `variants` en ModelPreview con hero H2. Chips HTML. Coste S–M.

**Propuesta 1.4.B — "Matriz de opciones conectadas"**
- *Qué ve el cliente*: tarjetas flotantes (una por grupo de opciones) orbitan el producto conectadas por líneas a la parte que afectan (color→cuerpo, ruedas→base); a más variantes, más tarjetas y más densidad de conexiones. Comunica "reglas", que es lo que cuesta en WEB-04.
- *Comportamiento*: planos instanciados en anillo + `LineSegments` a vértices ancla del héroe; tope visual 12 tarjetas + badge.
- *Integración*: modo `rules-graph`. Coste M.

**Propuesta 1.4.C — "Combinatoria binaria"**
- *Qué ve el cliente*: 3 interruptores flotantes (color × tapa × accesorio) alrededor del producto; el slider "escribe" el número de variantes encendiendo combinaciones — el producto se recompone por cada salto de combinación. Demuestra que N variantes = N productos distintos en uno.
- *Integración*: 3 grupos de partes intercambiables; `value` decodificado en binario a 3 bits. Coste M. *Elegir si* se quiere enfatizar la lógica de reglas sobre el catálogo de looks.

---

## 2. Sliders avanzados del wizard (dentro de `<details>`)

Hoy son `<input type="range">` nativos (`num-materiales` 1–15, `nivel-fidelidad` 1–5, `piezas-moviles`, etc.). Están bajo contraste a propósito: el cliente los rellena solo si los conoce.

**Propuesta 2.A — "Mini-preview en línea" (recomendada para `num-materiales`)**
- Al lado del slider nativo, un swatch circular del material que se añade por unidad (bola de material estilo Blender: metal, goma, plástico, madera, cristal…) — 15 materiales procedurales cacheados. Cero canvas nuevo; sólo swatches CSS 3D-ish (radial-gradient) que aparecen. Coste XS, no pesa en móvil.
**Propuesta 2.B — Sin preview, con microcopy de consecuencia**
- Para `nivel-fidelidad` y los selects avanzados: una línea dinámica bajo el control que traduce el valor a consecuencia de precio ("Fidelidad 4 ≈ réplica de referencia fotográfica · sube el rango"). Reusa el patrón de `help` existente. Coste XS.
- *Decisión sugerida*: los avanzados NO llevan canvas WebGL — el héroe principal ya está reaccionando arriba; añadir más canvases compite por GPU sin valor de venta. La sutileza es parte del diseño (opciones para quien sabe).

---

## 3. Sliders del panel de configuración (LuxeSlider — hoy sin preview)

Ubicación de la preview: **cabecera del panel izquierdo**, entre el título del servicio y las variables — un canvas de 160–180 px que muestra al héroe del servicio reaccionando a TODOS los sliders a la vez (no uno por slider). El panel derecho (precio) no se toca. Esto evita 4 canvases por servicio y cumple "más espacio, menos cajas".

> Regla de mapeo: cada variable numérica del servicio controla un canal del héroe. Abajo, slider por slider.

### Familia Web 3D (el foco del lunes)

**3.1 `numHotspots` (WEB-01: 0–30 · RTA-02: 1–30)**
- **A (rec.): "Marcadores que pulsan"** — N puntos de anclaje aparecen sobre el Motor con pulso suave (escala 1→1.3 loop); al llegar a 6+, se conectan con líneas finas formando la "capa de información". Con 0, el producto está limpio (el propio slider enseña para qué sirve un hotspot). Anclas en vértices predefinidos del héroe; sprites circulares + halo aditivo; tope visual 12 + badge. *Integración*: canal `hotspots` del héroe H1; `sprite.material.opacity` por índice. Coste S.
- **B: "Radiografía"** — con hotspots > 0 el cuerpo pasa a material fantasma (opacity 0.25, `depthWrite false`) y los marcadores brillan a través — el look "viewer técnico" que vende WEB-01. Coste S (solo material swap).
- **C: "Fichas conectadas"** — líneas guía de cada hotspot a una lista lateral HTML (nombres de parte generados). Comunica la metadata por pieza. Coste M.

**3.2 `numEscenas` (WEB-02: 1–10)**
- **A (rec.): "Carrusel de embebidos"** — N mini-marco redondeados flotan en arco alrededor del héroe, cada uno con la pose del producto que tendría ese embed; el marco activo se agranda. Tope 8 + badge. *Integración*: planos instanciados con distintas rotaciones del clon simplificado. Coste S–M.
- **B: "Cambio de decorado"** — el fondo/iluminación de la escena cambia por escena (estudio neutro → gradiente → entorno cálido): demuestra que cada embed puede tener su ambiente. *Integración*: presets de `scene.environment`/color de fondo con lerp. Coste S.

**3.3 `numVariantes` (WEB-04: 2–50)** — mismas propuestas 1.4.A/B/C (es la misma pregunta en otro sitio; reutilizar modo `variants`).

**3.4 `numSKUs` (WEB-04: 1–100)**
- **A (rec.): "Estantería que se llena"** — detrás del héroe, una parrilla de copias simplificadas (siluetas con el color de la variante) se va llenando; la cámara hace dolly-out suave a medida que el número crece para "caber" más. Tope visual 24 + badge real. *Integración*: 1 `InstancedMesh` + `camera.position.z = f(log(num))`. Coste S.
- **B: "Cinta transportadora"** — siluetas de producto desfilan por una banda bajo el héroe a velocidad constante; el número controla densidad (separación). Más dinámico, menos "almacén". Coste S.

**3.5 `numSecciones` (WEB-05: 2–15)** — misma propuesta 1.3.A (dolly por estaciones); en config el héroe es H3 (plataforma + paneles flotantes que aparecen por sección). Coste S sobre el modo scenes.

**3.6 `numProductos` (WEB-07: 1–100)**
- **A (rec.): "Showroom orbital"** — la parrilla de 3.4.A pero con variedad: 4 primitivas de producto (caja, cilindro, esfera, cápsula) alternadas con colores de catálogo, en parrilla 3D con profundidad; dolly-out logarítmico. *Integración*: 4 InstancedMesh (uno por primitiva). Coste S.
- **B: "Zoom a la ficha"** — 1 producto hero en primer plano con tarjeta flotante de ficha (nombre+precio mock), los demás products se ven desenfocados detrás en cantidad N — comunica "catálogo navegables con visor compartido". Coste M (DOF simulado con opacidad/blur de instancias lejanas).
- **C: "Filtros vivos"** — productos se re-agrupan por color/familia en clústeres al mover el slider (cuenta = tamaño de catálogo, agrupación = el toggle de filtros del servicio). Coste M.

**3.7 `numSlides` (WEB-08: 3–30)**
- **A (rec.): "Deck en abanico"** — N tarjetas de presentación flotan en abanico detrás del héroe; el slider abre el abanico y añade tarjetas; la activa se realza con borde azul. Tope 12 + badge. *Integración*: planos redondeados instanciados con rotación Y progresiva. Coste S.
- **B: "Presentador"** — el héroe se desplaza al tercio izquierdo y una tarjeta grande ocupa el derecho, alternando lado por slide — la vista real de "slide con 3D embebido". Coste S–M.

### Familia Assets realtime (RTA-*)

**3.8 `polyCount` (RTA-01..04: 500–500.000 tris)**
- **A (rec.): "LOD + contador honesto"** — el Motor cambia entre 4 LODs reales precalculados (los cortes del slider: ≤10k / ≤50k / ≤150k / +150k son EXACTAMENTE los `tierMap` de `serviceVariables.ts`) y un contador HTML marca los tris del slider con formato compacto. El cliente ve que el presupuesto poligonal no es un número arbitrario: es la silueta que se suaviza. *Integración*: canal `lod` del héroe + overlay contador; mapa logarítmico slider→tris visibles. Coste S. **Este es el que responde directo al feedback #3 del usuario.**
- **B: "Malla densa"** — overlay wireframe cuya densidad de líneas crece con el valor (shader de retícula sobre el material) + faceting que desaparece. Menos literal que A pero muy estético. Coste M.
- **C: "Split presupuesto"** — mitad facetada / mitad suave con la costura moviéndose según el valor. Coste M (scissor, ver 1.1.C).

**3.9 `numPiezas` (RTA-01: 1–200 · CAD-01: 1–300)** — mismas propuestas 1.2.A/B; en config, el héroe Motor ya está en escena, el canal `pieces` añade piezas al ensamblaje con el mismo catálogo de 6 tipos. El badge muestra el número real siempre.

**3.10 `numTexturas` (RTA-01: 1–10)**
- **A (rec.): "Zonas de material que aparecen"** — el Motor gana zonas diferenciadas (cuerpo metal cepillado → grip goma → botón plástico → tapa con decal → anillo cromado…); la zona nueva entra con un flash de contorno azul 300 ms. Comunica que cada set de texturas es trabajo distinto. *Integración*: grupos de caras pre-asignados con materiales cacheados; swap + pulso de emissive. Coste S.
- **B: "Canales PBR flotando"** — mini-planos con las texturas (albedo checker, normal púrpura, roughness gris, AO oscuro) se apilan junto al héroe según el count. Vende el oficio (P3 lo entiende). Coste S.

**3.11 `numLoops` (RTA-03: 1–10)**
- **A (rec.): "Mecanismo encadenado"** — el Motor se anima en loop; cada clip añade un movimiento (rotación del anillo, sube/baja la tapa, órbita de pernos, vibración); una barrita de timeline HTML marca los clips activos. *Integración*: array de clips procedurales; `value` = número de clips encolados; timeline HTML. Coste S–M.
- **B: "Estelas de movimiento"** — trails fantasma detrás de la parte móvil por cada clip (líneas buffered con fade). Estético, comunica "animación embebida". Coste M.

**3.12 `numEstados` (RTA-04: 2–20)**
- **A (rec.): "Estados que se conmutan"** — chips HTML bajo el canvas (Cerrado · Abierto · Exploded · Color A…) y el Motor salta al estado `value` con snap elástico. Es la demo de "animación bajo control del usuario". *Integración*: keyframes discretos de pose/escala por grupo de partes. Coste S.
- **B: "Grafo de triggers"** — nodos conectados por líneas crecen junto al producto (estado→acción); el nodo activo late. Vende la complejidad de triggers que cobra RTA-04. Coste M.

**3.13 `numShaders` (RTA-05: 1–15)**
- **A (rec.): "Carrusel de efectos"** — el material del héroe cicla por efectos reales: fresnel rim azul, holograma (scanlines + transparencia), disolución (noise threshold), toon (rampas), emissive pulsante. Cada "shader" del slider añade uno a una tira de miniaturas y el activo se aplica. *Integración*: `ShaderMaterial`/`onBeforeCompile` presets cacheados; es EL slider donde el WebGL brilla. Coste M.
- **B: "Split estilizado"** — mitad material PBR base, mitad efecto activo, costura según el valor. Coste M.

**3.14 `numPartes` (RTA-06: 2–100)**
- **A (rec.): "Explosión en vivo"** — el slider ES el factor de despiece: 2 = cerrado, 100 = totalmente explotado con etiquetas de partes flotando (sprites numéricos). Literal, táctil, memorable — y es el servicio "mecánicas sobre asset". *Integración*: lerp entre transform ensamblado y explosionado de cada pieza (`explodeFactor = value/100`); etiquetas sprites. Coste S–M. **Candidato a preview estrella del pase de lunes.**
- **B: "Etapas de despiece"** — en vez de continuo, el slider avanza por etapas con etiqueta ("Etapa 2: carcaza exterior"), con pausa de 150 ms por etapa — comunica las "múltiples etapas" del tier M. Coste S.
- **C: "Cotas técnicas"** — líneas de medición con flechas y cotas (sprites "42.0 mm") aparecen entre partes al crecer el count. look documentación técnica industrial. Coste M.

### Familia Render (RND-*)

**3.15 `numImagenes` (RND-01: 1–20)**
- **A (rec.): "Muro de renders"** — N marcos flotantes se llenan con poses del héroe desde cámaras distintas (frontal, 3/4, detalle, top…); el marco nuevo entra con efecto flash de disparo (overlay blanco 80 ms). *Integración*: planos instanciados + flash overlay; poses = rotaciones prefijadas. Coste S.
- **B: "Turntable"** — el héroe gira a la siguiente vista canónica por cada imagen, con un contador "4/20". Más limpio en móvil. Coste S.

**3.16 `numMateriales` (RND-01: 1–20)** — misma 3.10.A (zonas de material) cambiando el catálogo a materiales de render (cerámica, vidrio, metal pintado, tela…). Coste S.

**3.17 `duracion` (RND-02: 2–90 s)**
- **A (rec.): "Timeline con beats"** — una animación loop del héroe cuya duración escala con el slider; una regla HTML de segundos corre debajo y a ciertos hitos (10 s, 30 s, 60 s) el producto estrena un "beat" nuevo (giro extra, explosión breve, cambio de material) — comunica "más segundos = más animación". *Integración*: `clock` escalado por `value/10`; beats por umbral. Coste M.
- **B: "Loop simple estirado"** — la misma animación se ralentiza/alarga con el slider sin beats; honesto y barato. Coste S.

**3.18 `numShots` (RND-02: 1–12)**
- **A (rec.): "Corte a corte"** — cortes duros de cámara entre N ángulos mientras un loop corto se reproduce; flash negro de 60 ms entre corte + chip "Shot 3/12". *Integración*: keyframes de cámara sin lerp (snap) + overlay. Coste S.
- **B: "Storyboard strip"** — tira de mini-marcos bajo el canvas que se llena por shot (silueta estática, sin mini-renders). Coste XS.

### Familia IA (AI-*)

**3.19 `fuentes` (AI-01: 1–50)**
- **A (rec.): "Constelación de conocimiento"** — el globo H4 con N tarjetas-documento orbitando conectadas por líneas hacia un chip central "RAG"; el globo late al añadir cada fuente. Tope visual 20 + badge. *Integración*: planos instanciados + `LineSegments` dinámico; latido = pulso de emissive del globo. Coste M.
- **B: "Ingesta en flujo"** — partículas-documento caen hacia el globo y se absorben; count = flujo. Más movimiento, menos legible. Coste M.

**3.20 `idiomas` (AI-01: 1–5)**
- **A (rec.): "Globo de idiomas"** — marcadores ES/EN/DE… aparecen sobre el globo wireframe con su código ISO en sprite; un chip cambia "Respuesta en: ES · EN". *Integración*: sprites + anclas latitud/longitud prefijadas. Coste S.

**3.21 `numFlujos` (AI-03) / `numProcesos` (AI-04)** — variante de 3.19.B: nodos de proceso conectados en cadena (descubrir→automatizar→revisar) que crecen con el slider; el héroe de fondo es la nube. 1–2 propuestas suficiente: A cadena de nodos (rec.), B timeline de automatización con pasos que se "tican". Coste S–M.

### Familia VFX / Texturas / Pipeline / Consultoría (secundarias para lunes)

**3.22 `numElementosCG` (VFX-01) · `numSets` (VFX-02)** — A: el héroe se compone sobre un "footage" de fondo (plano con gradiente animado tipo vídeo real) y N elementos 3D (marca de anclaje + wireframe de tracking) se añaden a la escena con líneas de track (rec.). B: split "footage / footage+CG" con costura según valor. Coste M.

**3.23 `numScripts` (PIPE-01)** — A: nodos de pipeline (iconos geométricos: entrada → proceso → QA → salida) se conectan en serie sobre cinta; count = nodos; un "check" verde recorre la cadena en loop (rec.). B: consola flotante con líneas de log que se escriben solas, una por script. Coste S–M.

**3.24 `numSesiones` (CON-01)** — A: calendario 3D minimalista (plano con rejilla) donde N bloques de sesión se marcan en azul con el héroe en modo "mesa de trabajo" (plano + documentos flotantes). B: contador de horas apilándose como barras 3D. Coste S.

---

## 4. Priorización para el lunes y después

| Fase | Slider | Propuesta | Esfuerzo | Por qué |
|---|---|---|---|---|
| **A (lunes)** | 1.1 nivel-detalle | 1.1.A fabricaciones (+1.1.B contador, XS) | S–M | Es LA pregunta de venta del web-3d |
| **A (lunes)** | 1.2 cantidad-piezas | 1.2.A ensamblaje | S | Ya existe el 70 % en ModelPreview |
| **A (lunes)** | 3.14 numPartes (si se abre RTA-06 en demo) | 1.2.B explosión en vivo | S–M | Momento wow barato |
| **A (lunes)** | 1.3 escenas | 1.3.A dolly | M | Rama scrollytelling queda viva |
| **A (lunes)** | 1.4 num-variantes | 1.4.A configurador gira | S–M | Rama web-app queda viva |
| **B (semana 1)** | 3.8 polyCount | 3.8.A LOD + contador | S | Responde feedback #3 con trazabilidad |
| **B (semana 1)** | 3.1 numHotspots | 3.1.A marcadores | S | WEB-01 es el servicio insignia |
| **B (semana 1)** | 3.10 numTexturas | 3.10.A zonas | S | Precio de texturas se vuelve visible |
| **C (continuo)** | resto de config | según tabla por familia | S–M c/u | Entra con el widen post-lunes a todos los servicios |
| **C (continuo)** | assets GLB reales | sustituir héroe procedural por GLB (mismo sistema de canales) | M | Sprint doc-33 con AG-PORT |

## 5. Checklist de integración (transversal a cualquier propuesta que se elija)

1. Extender la unión `preview` de `decisionTree.ts` (`'dolly-cam' | 'variant-swirl' | …`) — el dato manda, el componente obedece.
2. `ModelPreview` gana prop `mode` con más variantes y prop `hero` (`'motor' | 'retail' | 'web' | 'data'`); el registro vive en `heroObjects.ts` con geometrías/materiales memoizados por héroe.
3. Todo canal de slider entra por `stateRef` (ya implementado) — prohibido re-montar el efecto WebGL por cambio de valor.
4. Overlay de badges/chips en HTML (no en el canvas): accesible, traducible, imprimible.
5. Tope visual + badge real en TODO conteo (12–24 instancias máx).
6. `IntersectionObserver` para pausar canvas fuera de viewport; `document.visibilitychange` para pausar el loop.
7. Verificación por commit: `astro check` 0 + `npm test` + pase visual desktop/móvil.
