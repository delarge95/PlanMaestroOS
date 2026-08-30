# Doc 5/5 — Ciclo 2: registro de retroalimentación, aclaraciones y nuevas propuestas

> **Fuente**: revisión de Alexander (2026-08-29) sobre el [Doc 04 — previews 3D por slider](./04-previews-3d-por-slider.md). Este documento (1) registra cada decisión tomada, (2) aclara las propuestas que no quedaron claras, (3) propone los 2 sliders nuevos que faltaban (complejidad de superficie y shaders), (4) cruza las variables de `docs/servicios/` contra el cotizador para que el pricing tenga datos más claros, y (5) documenta el workflow Blender.
> **Regla**: nada de esto borra el doc 04 — es aditivo y lo referencia.

---

## 1. Registro de decisiones (feedback de Alexander, textual → decisión)

| # | Propuesta del doc 04 | Decisión |
|---|---|---|
| 0 | §0 Principios de diseño | ✅ **Aprobado tal cual** |
| 1.1 | nivel-detalle: A fabricaciones · B contador tris · C cortina | ✅ **Integrar A + B juntos** (ideal). C se guarda para el futuro. |
| 1.2 | cantidad-piezas: A ensamblaje · B explosión | ✅ **A como base** + al dejar el slider quieto **N segundos aparece la vista explosionada de B** — el cliente cuenta las piezas reales con facilidad |
| 1.3 | escenas: A dolly · B filmstrip · C mini-scroll | 🔶 C gusta; A/B no se entendieron → **re-explicadas en §2 de este doc**; mi recomendación: **C como carcasa + A como motor** (son integrables, ver abajo) |
| 1.4 | num-variantes: A configurador gira · B matriz · C combinatoria | 🔶 **A como base**, garantizando que el cliente entienda qué se transmite; **integrar partes de B y C** que lo refuercen (detalle en §2.2) |
| 2 | Sliders avanzados: swatches para materiales, microcopy para el resto | ✅ **Aprobado** |
| 3 | Sección 3 (previews del panel de configuración) | ❓ No se entendió → **explicada en §3 de este doc con diagrama** |

**Estado**: según lo que salga de este ciclo, arrancamos desarrollo.

---

## 2. Aclaraciones pedidas

### 2.1 Las tres propuestas de `escenas` (1.3), explicadas con un caso concreto

Imagina un cliente con 8 escenas para el scrollytelling de su dron: (1) hero aéreo, (2) despegue, (3) giro de cámara, (4) primer plano del gimbal, (5) explosionado de hélices, (6) specs, (7) caso de uso, (8) CTA.

- **A · Dolly de cámara por estaciones** — *es una cámara virtual viajando*. El 3D muestra el producto fijo y una CÁMARA que se mueve entre "paradas": cada escena es una toma distinta (lejos, órbita, contrapicado, primer plano del gimbal…). Mover el slider avanza la cámara por la ruta, como un travelling de rodaje. Lo que se vende: "tu historia contada con tomas de cámara".
- **B · Filmstrip curvo** — *es un storyboard físico en 3D*. Una tira de película curvada flota en pantalla con N fotogramas; cada fotograma es una miniatura del producto en la pose de esa escena. Mover el slider desplaza la tira e ilumina el fotograma activo. Lo que se vende: "así se ve tu guion visual completo".
- **C · Mini-scroll real** — *es tu página futura en miniatura*. Bajo el 3D hay una barra de scroll falsa con secciones (Intro → Beneficio → Specs → CTA); mover el slider hace scroll en esa mini-página y el 3D reacciona exactamente como reaccionará en la web real del cliente.

**Recomendación (y cómo se integran)**: **C como carcasa + A como motor.** La mini-página de C es la que el cliente mueve (lo entiende al instante: "es mi web"); los cambios de cámara que ocurren en el 3D mientras "scrollea" SON las estaciones de A. B se descarta salvo que pidas el modo storyboard. Es decir: el slider mueve la barra de scroll → el progreso alimenta la timeline de cámara por estaciones → el cliente vive su scrollytelling antes de comprarlo. Coste total estimado M.

### 2.2 `num-variantes` (1.4): A con refuerzos de B y C

Base A ("el configurador gira": el producto cambia de color/material/accesorio por preset). Los refuerzos que tomo de B y C, con el objetivo de que el cliente entienda a la perfección:

1. **De B (matriz de opciones): etiquetas de causa.** Cada vez que el slider cruza una variante, un chip nombra QUÉ cambió: "Variante 7 — Grip táctil + tapa carbono". Sin nombre, el cambio de color es decoración; con nombre, es una regla de configurador.
2. **De C (combinatoria): la cuenta es real.** Las variantes no ciclan al azar: se generan combinando 3 ejes visibles (color × material × accesorio) y el badge muestra "variante 7 de 12 combinaciones" cuando el slider marca 12 — el cliente ve que 12 variantes = 12 productos distintos en uno, que es exactamente lo que cobra WEB-04.
3. **Aprendizaje con el mouse (opcional, fase C):** permitir girar el producto arrastrando para inspeccionar la variante (ya existe ese patrón en ModelPreview).

---

## 3. La sección 3 del doc 04, explicada

**Qué es la sección 3**: cuando el cliente sale del wizard y entra a configurar UN servicio (pantalla con sliders y panel de precio a la derecha — la que viste con WEB-01 y "$150 a $570"), esos sliders **hoy no tienen ningún preview 3D**. La sección 3 proponía qué haría cada slider de esa pantalla con el modelo.

**La idea clave — y por qué no es un canvas por slider**: en la pantalla de configuración NO se propone un preview por cada slider (serían 4–8 canvases compitiendo por GPU). Se propone **UN solo canvas 3D arriba del panel de configuración**, mostrando al héroe del servicio, y **cada slider de esa pantalla mueve UNA cosa distinta del MISMO modelo, a la vez**:

```
PANEL DE CONFIGURACIÓN (ejemplo: WEB-01 · Visor custom three.js)
┌──────────────────────────────────────────────┐
│   [CANVAS 3D — el visor con su modelo]       │  ← UN preview arriba
│   ────────────────────────────────────────   │
│   ¿Hotspots?        ●──────────────  0–30    │──┐
│   ¿Datos?           (Fijos)  (CMS/API)       │  │  TODOS mueven
│   ¿Dónde corre?     (Desktop) (Desktop+móvil)│──┤  AL MISMO modelo
└──────────────────────────────────────────────┘  │  en vivo
                                                  │
   Panel derecho sticky: $150–$570  ←─────────────┘  y el precio
   Horas 7.5–20h · Entrega 2–21d                     se mueve en sync
```

Los números 3.1, 3.2, 3.3… del doc 04 son la lista slider por slider: "3.1 `numHotspots` → cuando muevas ESE slider, sobre el modelo aparecen N marcadores que pulsan (propuesta A) o el cuerpo pasa a modo radiografía (propuesta B)". O sea: la sección 3 no pide construir nada nuevo conceptualmente — pide llevar el mismo lenguaje del wizard ("muevo y lo VEO") a la pantalla de configuración.

**Cómo continuaría**: la propuesta recomendada por servicio está marcada con "(rec.)" en el doc 04. Para el lunes lo razonable es solo WEB-01 (hotspots) porque es el servicio insignia; el resto entra cuando se amplíe el cotizador a todos los servicios. ¿Te parece bien ese alcance o prefieres otra prioridad?

---

## 4. Nuevo slider: complejidad de superficie (hard-surface ↔ orgánico)

**Qué pregunta**: ¿tus piezas son artificiales/inorgánicas (hard surface: bordes duros, prismas, sin curvas complejas) o lo más orgánico posible (cero bordes duros, superficie esculpida)?

**Por qué importa en el precio** (trazabilidad docs/servicios): la metodología y el catálogo B lo dicen explícito — *"orgánico sube tier; duro bien construido baja"* (BM3) — y MOD-A solo tabla hasta "superficies curvas complejas" (A-L); **orgánico/personaje ⇒ discovery obligatorio**. El slider debe traducir eso: escalable hasta cierto punto, y en el extremo orgánico el cotizador debe decir "esto se cotiza por discovery, escríbeme".

**Dónde vive**: nueva pregunta `superficie` en las ramas ver-modelo/interactivo (avanzada o principal, a decidir en build), con tierMap 1→S · 2→S · 3→M · 4→L · 5→**discovery**. Mapea a `complejidad` de CAD-01 y a nueva variable `tipoSuperficie` en RTA-01.

**Propuestas de preview 3D (mover el slider = ver la superficie cambiar):**

**4.A — "Morph de superficie" (recomendada)**
- *Qué ve*: el MISMO objeto (p. ej. el grip del héroe retail) se transforma en vivo: en 1 es un prisma con biseles duros y líneas de panel (metal industrial); en 3 tiene fillets generosos y soft-touch (diseño de producto); en 5 es pura escultura (superficie continua tipo clay, sin un solo borde duro). El material cambia de acompaño: metal cepillado → plástico mate → clay de escultor (gris mate sin texturas, como ZBrush).
- *Técnica*: dos geometrías cacheadas con EL MISMO conteo de vértices (base prismática y base subdividida) + `morphTargetInfluences` — el morph interpola suave con el slider, es la forma más barata y elegante. El clay del extremo es solo material (matcap).
- *Caption dinámica*: "Superficie dura · Diseño de producto · Curvas complejas · Orgánico · Escultural (se cotiza aparte)".

**4.B — "Mitad y mitad"**
- *Qué ve*: el objeto partido verticalmente — mitad izquierda hard-surface fija, mitad derecha orgánica según el slider, con la costura marcada. Comparación directa A/B en un solo vistazo (el patrón "cortina" del 1.1.C aplicado a superficie).
- *Técnica*: scissor test con dos renders por frame. Coste M.

**4.C — "Fábrica de familias"**
- *Qué ve*: una fila de 5 versiones del mismo producto (de duro a orgánico) en abanico; el slider ilumina la del valor y las demás se atenúan. Útil para comparar sin mover, menos táctil que el morph.
- *Técnica*: 5 clones instanciados con opacidad por estado. Coste S.

**Regla de honestidad en el extremo 5**: el preview muestra el clay Y aparece la nota "El modelado orgánico/escultural se acota en una sesión de discovery — te doy precio cerrado ahí" + el CTA de contacto. Nunca fingir que el rango cubre una escultura.

---

## 5. Nuevo slider: shaders (¿cuántos y de qué estilo?)

**Las dos preguntas distintas que hay que separar** (así lo recomiendo, y así lo separan los docs):

1. **Estilo** (el espectro realista ↔ estilizado) — nueva variable `estiloShader`, slider 1–5: 1 fotorrealista PBR · 2 PBR de producto (estudio limpio) · 3 semirrealista (PBR con luz forzada/grading) · 4 toon/rampas con outline fino · 5 estilizado total (holograma, neón, emissive). Precio: estilo 4–5 entra en territorio RTA-05 (S/M/L según el efecto).
2. **Cantidad** (`numShaders`, ya existe en RTA-05) — cuántos efectos distintos simultáneos: fresnel, holograma, disolución, toon… Cada uno cobra por la tabla RTA-05 (S 50–160 USD, M 100–320, L pipeline 200–640).

**Sobre FX / postprocesado / compositing — mi criterio: NO mezclarlos en este slider.** El shader vive en el material del modelo (RTA-05, TEX-01); el postprocesado vive en la integración web (WEB-01 L dice literalmente "postpro ligero" como driver de tier) o en compositing de video (VFX-01/02). Mezclarlos rompe la trazabilidad del precio. Propuesta: en el wizard avanzado, un toggle "Efectos de postprocesado en la web (bloom, profundidad de campo)" que solo aparece cuando el servicio es WEB-01+ y añade la nota de tier. En video, el compositing ya vive en RND-02/VFX.

**Propuestas de preview 3D:**

**5.A — "Dial de realidad" (recomendada para el slider de estilo)**
- *Qué ve*: el héroe cambia de ESTILO de material en vivo por el valor: 1 metal rugoso con reflejos HDRI creíbles → 2 estudio de producto suave → 3 PBR con grading de luz dramática → 4 toon con rampas y outline → 5 holograma/neón con scanlines. Caption nombra el estilo. Es literalmente la pregunta del slider hecha imagen.
- *Técnica*: 5 presets de material cacheados (MeshStandardMaterial con envMaps distintos + 1 ShaderMaterial toon + 1 holograma) con crossfade de opacidad. Coste M.
- *Detalle que vende*: en el estilo 4–5, un outline pass fino (silueta azul de marca) aparece sobre el objeto — el "look estilizado" se reconoce al instante.

**5.B — "Split de material"**
- *Qué ve*: el producto partido verticalmente: mitad material realista fijo, mitad con el estilo del valor; la costura sigue al slider. Para un director de arte es la comparación que decide. (Mismo patrón de cortina que 1.1.C/4.B — si se aprueba ese patrón, se reutiliza el mecanismo.)
- *Técnica*: scissor + dos materiales. Coste M.

**5.C — "Zonas multi-shader" (para el slider de cantidad)**
- *Qué ve*: `numShaders` = N efectos activos SIMULTÁNEOS en zonas distintas del héroe (cuerpo fresnel, anillo holograma, tapa disolución…); chips nombran cada efecto activo. Así el cliente ve que "3 shaders" = 3 tratamientos coordinados, no 3 colores.
- *Técnica*: materiales por zona (los grupos de caras ya existen del canal texturas 3.10.A). Coste S–M.

**Integración**: `estiloShader` entra como pregunta cards (5 estilos con nombre y miniatura estática) o slider con preview A en la rama interactiva/web-app avanzada; numShaders ya existe en RTA-05 y recibe el preview 5.C en config.

---

## 6. Cruce de variables: `docs/servicios/` ↔ cotizador actual

La revisión completa de los 9 docs arrojó **74 variables/drivers**; ~40 ya están cubiertas por `SERVICE_VARIABLES` o son políticas internas. Abajo lo accionable, en tres bloques.

### 6.1 Variables de ALTO valor para cotizar mejor (proponer incorporar)

| # | Variable (doc fuente) | Propuesta de pregunta en lenguaje cliente | Efecto en precio | Dónde vive hoy |
|---|---|---|---|---|
| V1 | **tipoSuperficie / curvatura** (BM3, MOD-A) | Slider complejidad §4 de este doc | S→L; orgánico ⇒ discovery | ❌ No existe — **el gap más importante** |
| V2 | **estiloShader** (RTA-05, lookdev) | Slider §5 de este doc | Estilo 4–5 ⇒ RTA-05 S/M/L | ❌ No existe |
| V3 | **discovery tarifado** (WEB-04 SIEMPRE 8–16 h RC-CON; AI-01 L/XL 4–8 h; CAD-01 XL 6–12 h + lotes) | No se pregunta: se MUESTRA como línea del presupuesto "Sesión de alcance — USD 320–880" | Suma una línea RC-CON real | ❌ El cotizador hoy lo omite — **subestima WEB-04/AI-01/CAD-01** |
| V4 | **numPiezas = piezas ÚNICAS/tipos** (06 CAD: "40 tornillos = 1 tipo") | Reformular: "¿Cuántas piezas DIFERENTES tiene (las repetidas cuentan una vez)?" | Evita sobrecotizar ensamblajes con tornillería | ⚠️ Existe pero la pregunta induce contar repetidas |
| V5 | **movimientoRequerido** (B7.1 CAD) | "¿Alguna pieza necesita moverse (articulaciones, engranajes)?" | Subensamblajes ⇒ M/L | ⚠️ Solo como avanzado en ver-modelo (`piezas-moviles`); generalizar a CAD-01 |
| V6 | **tipoMovimientoCamara** (VFX-01 D1.2: fija S / handheld M / travelling L) | "¿Cómo se mueve la cámara en tu video?" (select) | S/M/L por shot | ❌ No existe |
| V7 | **tipoFondo/contextoEscena** (RND-01: estudio vs contexto vs set dressing) | "¿Fondo de estudio o escena con contexto?" | S/M/L | ⚠️ Existe `setDressing` toggle; granular a select 3 opciones |
| V8 | **numNiveles** (WEB-06: 1 / 3–5 / multi-sistema) | "¿Cuántos niveles tiene el juego?" | S/M/L | ⚠️ Solo `mecanica` select; falta el contador |
| V9 | **integracionEcommerce** (WEB-07 L: CTA compra, comparador) | "¿El catálogo vende directo (carrito/CTA)?" | M→L | ❌ No existe |
| V10 | **plataformasDestino** (catálogo: 1 / 1–2 / multi ⇒ tier) | "¿Dónde tiene que funcionar?" (web / web+móvil / multi incl. pantallas feria) | Sube tier L | ⚠️ `target` cubre desktop/móvil; falta "multi-plataforma" |
| V11 | **archivosFuenteEditables** (catálogo 2.7: +20–40 %) | Avanzado: "¿Necesitas los archivos editables (.blend/.max)?" | Multiplicador sobre líneas de creación | ❌ No existe |
| V12 | **actualizacionIndice** (AI-01: manual S vs automatizada M) | "¿El contenido del chat lo actualizas tú o solo?" | S/M | ❌ No existe |
| V13 | **tipoFeatureIA** (AI-02: búsqueda/recomendador/generación/ruteo) | "¿Qué función de IA necesitas?" (select) | Pricing por feature 8–30 h | ❌ No existe |
| V14 | **datosVivos/filtrosTiempoReal** (WEB-08 L) | "¿Los datos cambian en tiempo real?" | M→L | ❌ No existe |
| V15 | **explosionMultiNivel** (RTA-06 L: >40 piezas o multi-nivel) | Cubierto por numPartes + avanzado `piezas-desmontables` | — | ✅ OK |

### 6.2 Reglas comerciales con discrepancia (decisión tuya antes de codificar)

| # | Tema | docs/servicios dicen | Cotizador hoy | Propuesta |
|---|---|---|---|---|
| D1 | **Urgencia** | Rush <60 % plazo **+30 %**; super-rush <40 % **+50 %** | 72 h → **+25 %**, 24 h → +50 % | Alinear a +30/+50, o mantener +25 como precio de lanzamiento — tu call |
| D2 | **Bundle** | ≥3 servicios ⇒ **−5 a −10 %** (no acumula con rush) | No existe | El wizard ya produce planes de 2 picks; aplicar −5 % cuando picks ≥3 (o ≥2) — tu call |
| D3 | **Ronda extra** | **+10 %** por ronda (metodología) vs +10–15 % (catálogo v1) | No existe | Dejarlo fuera del cotizador público (se negocia por chat) — mi recomendación |
| D4 | **Gestión de proyecto** | Catálogo v1: **+10 %** línea TL visible; metodología v2 NO la tiene | No existe | NO añadir (v2 manda); resolver en la unificación de docs |
| D5 | **Esquema de pago** | ≤500 USD 100 % · 500–2k 50/50 · 2k–8k 40/30/30 · >8k hitos | No se muestra | Mostrar en el panel sticky bajo el CTA ("Pago sugerido: 50/50") — confianza P4, coste XS |
| D6 | **Validez** | 15 días (ya en print) | ✅ Ya visible | OK |

### 6.3 Discrepancia de umbrales entre generaciones de docs (gobernanza)

`CATALOGO_SERVICIOS.md` (v1.0, generación anterior) usa umbrales distintos a `00_METODOLOGIA.md` v2 y a los C1–C7 (ej.: tris S = ≤15k en v1 vs <10k en v2; piezas L = 41–150 en v1 vs 31–100 en v2). **El código actual (serviceVariables/formula) sigue la escala v2.** Propuesta: declarar v2 como fuente de verdad, marcar el catálogo v1 como histórico (deprecación, no borrado, según regla de oro §0.8/0.9 del plan), y anotarlo en el README de docs/servicios. Lo dejado así no bloquea el cotizador; lo documento para que no sorprenda.

---

## 7. Workflow Blender (estado y protocolo)

**Estado verificado (2026-08-29, corregido tras apunte de Alexander: "tenemos Blender 5.2 con el MCP oficial"):**
- ✅ **Blender 5.2.0 LTS** (build 2026-07-14) instalado en `D:\Program Files\Blender Foundation\Blender 5.2\blender.exe` — mi primera búsqueda solo miró `C:\Program Files` y PATH, por eso dije 4.3; la 5.2 vive en `D:`. *No está en PATH*: se invoca por ruta absoluta (`--background --python script.py` para headless).
- ✅ **Addon MCP de Blender instalado** en la configuración de la 5.2: `%APPDATA%\Blender Foundation\Blender\5.2\scripts\addons\blender_mcp_addon.py` — abre un servidor socket en `localhost:9876` dentro de una instancia de Blender EN EJECUCIÓN (se activa desde el panel del addon en Blender).
- ✅ **`uv`/`uvx` 0.10.9** disponibles (puede lanzar el servidor puente `uvx blender-mcp`).
- ⚠️ **El puente MCP no está registrado en ZCode para este workspace**: en esta sesión no tengo herramientas MCP de Blender (revisados `~/.zcode/cli/config.json`, `.mcp.json` del workspace, `~/.cursor/mcp.json` — el único MCP del lado cliente que vi registrado es de Cursor con notion/chrome/firecrawl/github, sin blender). **Para usarlo desde aquí falta**: (1) registrar el servidor MCP (`uvx blender-mcp`) en la configuración de MCP de ZCode — acción tuya desde la UI o me autorizas a editar el config de usuario — y (2) tener Blender 5.2 abierto con el servidor del addon iniciado (panel BlenderMCP → Start server). Mientras tanto, mi vía operativa es la CLI headless con la 5.2.

**Cuándo entra cada vía:**
- Los previews del cotizador corren en el navegador del CLIENTE → generación **procedural en three.js** (sin Blender) sigue siendo la vía para los sliders: es lo que hace el preview en vivo, en el dispositivo, sin descargas pesadas.
- **Blender headless (CLI)** para generar/bakear assets de producción: script Python → exporta `.glb` (Draco) → `public/cotizador/models/` → `GLTFLoader`+`DRACOLoader` en ModelPreview (el sistema de canales no cambia: el GLB reemplaza al héroe procedural y los sliders siguen moviendo materiales, piezas, explosión, hotspots).
- **Blender vía MCP** (cuando esté registrado) para trabajo interactivo: inspeccionar la escena abierta por Alexander, ejecutar Python en la instancia viva, capturar el viewport para validar looks antes de exportar.

**Protocolo de reporte** — cada vez que genere algo en 3D declararé:
1. **Herramienta y versión** (three.js r1xx procedural · Blender 5.2.0 LTS headless + script · Blender 5.2 vía MCP).
2. **Método** (paramétrico en código / script Blender — con el script commiteado en `scripts/blender/`).
3. **Ficha del asset** (tris, texturas y resolución, peso del GLB, si lleva Draco).
4. **Ubicación** (archivo fuente .py + .blend si aplica + .glb final) y **cómo se carga** en la web.

---

## 8. Resumen de decisiones para arrancar desarrollo

1. **1.1**: fabricaciones (A) + contador de tris (B) juntos. Cortina (C) a la reserva.
2. **1.2**: ensamblaje (A); **idle 3 s ⇒ vista explosionada** (B) con transición suave; al mover de nuevo, re-ensambla.
3. **1.3**: mini-scroll real (C) como carcasa + dolly por estaciones (A) como motor. Filmstrip descartada.
4. **1.4**: configurador gira (A) + chips de causa (B) + contador de combinaciones real (C).
5. **§2 avanzados**: swatches + microcopy, como estaba.
6. **Sección 3**: explicada arriba — confirmar alcance (solo WEB-01 para lunes, o más).
7. **Nuevo slider `superficie`**: propuesta 4.A morph (recomendada) + regla de discovery en el extremo orgánico.
8. **Nuevo slider `estiloShader`**: propuesta 5.A dial de realidad + `numShaders` con 5.C zonas; postpro separado (toggle avanzado en WEB-01).
9. **Variables**: priorizar V1–V3 (superficie, estilo, línea de discovery tarifado) y la reformulación V4 (piezas únicas). Discrepancias D1 (urgencia +25 vs +30) y D2 (bundle −5 %) esperan tu decisión.
10. **Blender**: sin MCP; CLI 4.3 disponible; protocolo de reporte definido en §7.

---

## 9. Ciclo 2.1 — decisiones finales de Alexander (2026-08-29, segunda ronda) y arranque de desarrollo

> Estas decisiones completan y cierran las pendientes de §2, §4, §5, §6.2 y §8. Donde esta sección precise algo de §8, manda esta.

### 9.1 Decisiones de previews

| # | Decisión |
|---|---|
| 2.1 escenas | ✅ Aprobada la síntesis: **mini-scroll real (C) como carcasa + dolly por estaciones (A) como motor** |
| 2.2 variantes | ✅ Aprobada (A + chips de causa + contador), **con requisito nuevo**: las variantes NO se limitan a color/material — mostrar todas las opciones de variante que pueden existir (tamaño, accesorios, módulos, acabados, grabados, componentes, configuración de piezas…). Los ejes de combinación deben representar esa variedad |
| 4 superficie | ✅ **Morph (4.A) confirmado**. Alexander propone el **yunque** como héroe del extremo "curvas complejas sin llegar a escultura" — opinión de AG-SERV: **de acuerdo, es mejor que mi propuesta original** (análisis completo en 9.2). Queda pendiente el visto bueno final de Alexander a mi análisis |
| 5 shaders | ✅ **Aprobadas A (dial de realidad) + C (zonas multi-shader)** |

### 9.2 El yunque como héroe del slider `superficie` — opinión de AG-SERV

**Me parece una elección excelente, mejor que mi propuesta original (el grip de un producto).** Razones:

1. **Es el objeto canónico de "hard-surface con curvas complejas"**: cuerna cónica (superficie de revolución), cuello con entallado de fillets generosos, talón escalonado, cara plana de trabajo. Exactamente el punto medio del slider que hay que representar.
2. **Reconocible al instante** para la audiencia del negocio (industrial B2B): no hay que explicarlo.
3. **Tiene narrativa**: el yunque se FORJA — comunica trabajo artesanal de superficie, que es justo lo que el slider está tarifando.
4. **Es viable proceduralmente por etapas** desde algo muy simple, que es lo que pide el morph: 1 bloque rectangular de caras planas → 2 biseles → 3 entallado del cuello + arranque de cuerna → 4 yunque completo (patrón London) con cuerna curva pulida. Cada etapa añade exactamente el tipo de trabajo que el valor del slider representa. Los agujeros (hardy/pritchel) entran como detalle en la etapa 4 (insets oscuros, sin CSG).
5. **Nivel 5 (escultura)**: el yunque no llega ahí — y eso es correcto. Solución: cross-dissolve a una forma esculpida orgánica (abstracta, material clay) manteniendo el mismo material para que la transición se lea como "el objeto se vuelve escultura" + la nota de discovery ya definida.

Alternativas consideradas si se prefiriera un objeto "más producto": ratón ergonómico, panel de carrocería, pala de turbina (morphs hard→orgánico con topología continua). Ninguna tiene la narrativa ni la iconicidad del yunque. **Recomendación: yunque, con la progresión por etapas del punto 4.**

### 9.3 Decisiones comerciales (cierran §6.2)

| # | Decisión final |
|---|---|
| D1 urgencia | **Alinear a +30 % / +50 %** (Pronto/Crítico). **Se conserva el descuento de lanzamiento −25 %** |
| D2 bundle | **2 servicios ⇒ −5 % · 3+ servicios ⇒ −10 %** (no acumula con urgencia, según docs) |
| D3 rondas | Se negocian por chat, **pero se muestran en el cotizador**: "2 rondas de ajuste incluidas · ronda adicional ≈ +10 %" |
| D4 gestión proyecto | **No añadir** |
| D5 pago | **Mostrar esquema de pago sugerido** en el panel (≤500 USD 100 % anticipado · 500–2k 50/50 · 2k–8k 40/30/30 · >8k hitos quincenales) |
| D6 validez | ✅ Ya visible (15 días) |
| 6.3 umbrales | **De cara al cliente se usa el esquema XS–XL** (más digerible) — ya implementado en el panel. Internamente, v2 es fuente de verdad; catálogo v1 queda histórico |

### 9.4 Regla de gobernanza para generación de modelos 3D (obligatoria)

> **Antes de generar CUALQUIER modelo 3D, por cualquier método (three.js procedural, Blender headless, Blender MCP), AG-SERV debe preguntar a Alexander: "¿lo genero yo con el workflow X, o lo generas tú?"** Alexander puede generar él los modelos más complejos. Esto aplica también a los héroes procedurales de los previews.

Estado del puente Blender MCP: se activa solo cuando haga falta trabajo interactivo complejo — AG-SERV avisa y Alexander activa el puente. Para el resto: Blender headless + Python.

### 9.5 Desarrollo arrancado en este ciclo (lo no dependiente de modelos 3D)

- ✅ D1: urgencia +30/+50 en el cotizador (lanzamiento −25 % intacto).
- ✅ D2: bundle −5 %/−10 % aplicado al total proyecto del wizard (no acumula con urgencia).
- ✅ D3: línea visible de rondas de ajuste incluidas + coste de ronda extra.
- ✅ D5: esquema de pago sugerido según el total (con conversión TRM para COP).
- Pendiente de la pregunta de quién genera cada modelo (9.4): previews 1.1, 1.2, escenas, variantes, yunque, shaders.
