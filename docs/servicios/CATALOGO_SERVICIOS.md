# Catálogo Maestro de Servicios — AG-SERV · v1.0

> Fecha: 2026-08-25 · Owner: AG-SERV (rama `agent/services`) · Estado: **v1 — estimación operativa**
> Fuente de verdad del catálogo. El espejo determinista vive en `src/data/services/**` (mismos IDs); los rangos USD por subtarea se computan con el motor de estimación (`estimateSubtask`), no a mano.
> **Naturaleza de las cifras:** todos los rangos son *estimación operativa para scoping* (definir expectativa antes de discovery). La **cotización cerrada** se emite por proyecto tras discovery. Nunca comunicar un rango como precio final sin esa aclaración.

---

## 0. Convenciones de lectura

| Símbolo | Significado |
|---|---|
| `S / M / L / XL` | Tier de complejidad (§1.3) |
| `1–3` | Rango de **horas netas de trabajo** (min–max) |
| `—` | Tier no aplica para esa subtarea |
| `Clase` | Rate class aplicada (§1.2): `ART` · `RT` · `AI` · `TL` |
| Costo subtarea | `costo = horas × tarifa de la clase`: `[h_min × t_min, h_max × t_max]`, redondeado a múltiplos de 5 USD |
| Costo tarea | Suma de subtareas seleccionadas (el motor agrega; incluye gestión §2.4) |

Regla de trazabilidad (vincula con principio §0.1 del plan multiagente): toda cifra visible en cualquier UI futura debe poder reconstruirse como `serviceId → subtaskId → tier → rateClass → fuente tarifaria`. Sin números huérfanos.

---

## 1. Modelo de cobro

### 1.1 Filosofía: paquetes claros + desglose auditable

1. Se vende por **paquetes** (§4) con alcance, entregables y rangos explícitos — el cliente decide con información.
2. Todo paquete se descompone en **tareas → subtareas** con rangos hora/tier (§3). Internamente es à-la-carte; externamente se presenta el paquete.
3. Bundle discount: armar paquete cuesta menos que sumar servicios sueltos (−10 % sobre el punto medio agregado, ver §4).
4. Trabajo con presupuesto cerrado solo tras discovery firmado; antes, siempre rangos.

### 1.2 Rate card v1 (USD/hora, remote desde Colombia, clientes internacionales)

| ID | Clase | Aplica a | min | max | Derivación (fuente citada) |
|---|---|---|---|---|---|
| `ART` | Arte & Diseño | modelado, texturizado, lookdev, iluminación, render, animación, diseño UI | 25 | 38 | Doc 03: freelance global USD 20–50/h; 3D Artist US promedio 82 k/año ≈ 39.5/h (ZipRecruiter, doc 03 §) ajustado a mercado LATAM contractor |
| `RT` | Realtime & Dev | integración WebGL/three.js/babylon/Unity, optimización, shaders, tooling | 28 | 45 | Doc 03: Middle Unity Developer Colombia USD 27–35/h (Lemon.io) + banda freelance global 20–50/h; techo por perfil technical artist híbrido |
| `AI` | IA & Automatización | RAG, prompt engineering, workers IA, integraciones n8n/Make, pilotos | 35 | 55 | Doc 03: Python dev LATAM mid ≈ 46 k/año empleado + prima de especialización IA en freelance (banda global 20–50/h, extremo alto por demanda) |
| `TL` | Dirección Técnica | discovery, arquitectura, QA, gestión de proyecto, consultoría | 32 | 48 | Doc 03: senior LATAM 55–70 k/año empleado ≈ 26–34/h × prima contractor 1.25–1.5× |

Notas de política:
- Tarifas **blended**: dentro de una subtarea no se factura distinto si la ejecuta mano izquierda o derecha; la clase refleja el tipo de trabajo.
- La rate card es **versionada**: cambiar precios = nueva versión de este doc + del espejo TS, citando fuente. v1 queda como baseline para calibrar contra cotizaciones cerradas reales (§6).
- Moneda de factura: USD. Referencia COP solo informativa (TRM del día; placeholder explícito hasta confirmar método de cobro definitivo — pendiente usuario: Wise/Payoneer/Deel, doc 03 §pagos).

### 1.3 Tiers de complejidad estándar (definiciones operativas)

Anclas cuantificadas; si dos anclas de distinto tier conviven, manda la dominante.

| Tier | Anclas típicas |
|---|---|
| **S** | ≤ 8 piezas o 1 elemento; materiales ≤ 4; presupuesto ≤ 15 k tris; sin animación o 1 loop simple; 1 plataforma destino; 1 fuente de referencia |
| **M** | 9–40 piezas o personaje simple; 5–12 materiales; 15–80 k tris; ≤ 3 clips de animación; 1–2 plataformas; CAD limpio paramétrico |
| **L** | 41–150 piezas o personaje completo riggeado; shaders custom; 80–250 k tris; multi-plataforma; performance budget exigente; CAD con superficies curvas relevantes |
| **XL** | > 150 piezas o sistema completo (web app/producto); pipeline multi-asset repetible; IA avanzada (RAG multi-fuente, agentes, evaluaciones); requisitos de rendimiento contractuales |

Drivers universales que suben el tier de una subtarea aunque el resto sea simple: cantidad de elementos, curvatura/orgánico, calidad del material de entrada, animación, interactividad, plataformas destino, exigencia de performance, dependencias externas (CMS, APIs, brand guidelines del cliente).

---

## 2. Políticas transversales (aplican a todo servicio/paquete)

| # | Política | Regla v1 |
|---|---|---|
| 2.1 | Discovery | Primera llamada de scoping (45 min) sin costo. Discovery profundo con spec escrito se cobra como subtarea TL aparte, descontable del proyecto si se cierra |
| 2.2 | Revisiones | **2 rondas incluidas** por entregable (una ronda = un feedback consolidado). Ronda adicional: 10–15 % del costo de la subtarea afectada |
| 2.3 | Cambios de alcance | Fuera de scope ⇒ nueva estimación firmada antes de ejecutar; nunca scope creep silencioso |
| 2.4 | Gestión de proyecto | Incluida implícitamente: +10 % sobre horas netas del proyecto se agrega como línea TL en la cotización cerrada (visible, no oculta) |
| 2.5 | Rush | Entrega ≤ 7 días corridos: +30 %. ≤ 72 h: +50 %. Solo sobre líneas afectadas, sujeto a disponibilidad |
| 2.6 | Pagos | Proyectos < USD 1 500: 50 % anticipo / 50 % entrega. ≥ USD 1 500: hitos 30/40/30. Retainers: prepago mensual |
| 2.7 | Licencias | Entregable con licencia de uso comercial worldwide para el cliente. Autoría y derechos de portafolio retenidos. Archivos fuente editables (.blend/.max/.ts del proyecto): solo si se pactan (+20–40 % sobre líneas de creación) |
| 2.8 | Cancelación | Trabajo ejecutado hasta la fecha se paga proporcionalmente; anticipos cubren primero las líneas ya iniciadas |
| 2.9 | Duración calendario | Semanas ≈ `ceil(horas_netas_max_del_paquete / 25)` (incluye ciclos de feedback normales). Rush comprime solo si 2.5 lo activa |
| 2.10 | Dependencias del cliente | Brand guidelines, accesos (CMS/DNS/repos), feedback consolidado. Demoras del cliente mueven fechas, no amplían precio |

---

## 3. Catálogo de familias, tareas y subtareas

### Familia A — Render 3D offline (estático y animación)

#### A1 · Render 3D estático (product viz / arquitectura / arte)

Entregable: imagen(es) final(es) alta resolución + passes si se pactan.

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| A1.0 | Briefing técnico y referencias (nº imágenes, resolución, estilo) | 1–2 | 2–3 | 3–5 | 5–8 | TL |
| A1.1 | Setup/import/bloqueo de escena (assets existentes, escala, unidades) | 1–3 | 3–6 | 6–12 | 12–20 | ART |
| A1.2 | Modelado hard-surface por bloque (omitir si el cliente aporta modelo; drivers: nº objetos, curvatura, detalle) | 2–4 | 4–10 | 10–24 | 24–48 | ART |
| A1.3 | Lookdev + texturizado PBR (nº materiales únicos, mapas custom) | 1–3 | 3–8 | 8–18 | 18–36 | ART |
| A1.4 | Iluminación + cámaras (estudio/HDRI/exterior; nº tomas) | 1–2 | 2–5 | 5–10 | 10–18 | ART |
| A1.5 | Setup render + iteraciones (denoise, resolución, gran formato) | 1–3 | 3–6 | 6–12 | 12–24 | ART |
| A1.6 | Postproducción/compositing (color grade, retoque, textos) | 0.5–1 | 1–3 | 3–6 | 6–12 | ART |

Drivers de escala por volumen: cada imagen adicional con misma escena ≈ 20–40 % de A1.4+A1.5+A1.6 (ángulo nuevo); escena nueva ⇒ re-estimar A1.1–A1.5.

#### A2 · Render de animación 3D

Entregable: video final (segundos definidos) + master ProRes/H.264.

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| A2.0 | Briefing + storyboard/animatic aprobado | 2–4 | 4–8 | 8–16 | 16–30 | TL |
| A2.1 | Layout de escena + cámaras | 1–3 | 3–6 | 6–12 | 12–24 | ART |
| A2.2 | Animación objeto/cámara (sin personajes; drivers: segundos, coreografía, easing) | 2–5 | 5–12 | 12–28 | 28–60 | ART |
| A2.3 | Rigging de personaje (si aplica; facial sube tier) | — | 8–16 | 16–40 | 40–80 | ART |
| A2.4 | Animación de personaje (por clip) | — | 8–16 | 16–35 | 35–70 | ART |
| A2.5 | Simulaciones (telas/partículas/líquidos/rigid body) | — | 4–10 | 10–25 | 25–50 | ART |
| A2.6 | Iluminación + render (setup + tiempo máquina estimado) | 2–4 | 4–10 | 10–22 | 22–45 | ART |
| A2.7 | Compositing + edición + audio básico | 1–3 | 3–8 | 8–16 | 16–32 | ART |

Nota: tiempo de render de máquina se estima y se comunica aparte (no es horas de trabajo, pero sí costo si hay farm/cloud — placeholder de proveedor hasta definir).

---

### Familia B — Assets 3D realtime para WebGL / videojuegos

Pipeline modular compartido. Cada tarjeta de tarea indica qué módulos aplica.

| Sub | Módulo de pipeline (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| BM1 | Referencia + bloqueo (silueta, proporciones, moodboard) | 1–2 | 2–4 | 4–8 | 8–16 | ART |
| BM2 | High-poly / sculpt (omitible en hard-surface limpio) | 0–2 | 4–10 | 10–24 | 24–60 | ART |
| BM3 | Retopología low-poly (orgánico sube tier; duro bien construido baja) | 1–3 | 3–10 | 10–25 | 25–50 | ART |
| BM4 | UVs (nº UDIM/atlas, texel density objetivo) | 0.5–1.5 | 1.5–4 | 4–10 | 10–20 | ART |
| BM5 | Bake de mapas (normal/AO/curvature; nº pieces) | 0.5–1.5 | 1.5–4 | 4–8 | 8–16 | RT |
| BM6 | Texturizado PBR (materiales únicos, wear, trim sheets) | 1–3 | 3–8 | 8–18 | 18–40 | ART |
| BM7 | Rigging (huesos, IK, facial, mecánico vs orgánico) | — | 6–14 | 14–35 | 35–70 | ART |
| BM8 | Clips de animación (loop idle, acciones; blending) | — | 3–8 | 8–20 | 20–45 | ART |
| BM9 | LODs + optimización (draw calls, atlas, instancing, memoria) | 0.5–1.5 | 1.5–4 | 4–10 | 10–24 | RT |
| BM10 | Export glTF/engine + validación en target real | 0.5–1.5 | 1.5–3 | 3–6 | 6–12 | RT |
| BM11 | QA visual + performance budget (checklist por plataforma) | 0.5–1 | 1–3 | 3–6 | 6–12 | TL |
| BM12 | Prep interactividad (jerarquía semántica, pivotes, grupos, hotspots) | 0.5–1.5 | 1.5–4 | 4–8 | 8–16 | RT |

#### B1 · Asset estático NO interactuable
Módulos: BM1–BM6, BM9–BM11. Caso: hero visual web, fondo de escena, props.
Rango total típico: **S ≈ 6–13 h · M ≈ 17–46 h · L ≈ 46–107 h · XL ≈ 100–228 h**

#### B2 · Asset estático INTERACTUABLE (inspeccionable: rotar/zoom/seleccionar partes)
Módulos: BM1–BM6, **BM12**, BM9–BM11. Caso: visor de producto, pieza de museo, equipamiento médico.
Rango total típico: **S ≈ 7–15 h · M ≈ 19–50 h · L ≈ 50–115 h · XL ≈ 108–244 h**

#### B3 · Asset animado NO interactuable
Módulos: BM1–BM8, BM9–BM11. Caso: mascota/logo animado, NPC de fondo, turntable animado.
Rango total típico (sin personaje riggeado completo): **M ≈ 26–66 h · L ≈ 68–152 h · XL ≈ 148–333 h**

#### B4 · Asset animado INTERACTUABLE
Módulos: BM1–BM8, **BM12**, BM9–BM11. Caso: personaje jugable, demostrador de producto con estados.
Rango total típico: **M ≈ 32–76 h · L ≈ 82–187 h · XL ≈ 178–403 h**

#### B5 · Shaders estilizados (toon, holograma, disolución, agua, outline…)

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| B5.1 | Definición de look (referencias, pruebas de estilo) | 1–2 | 2–4 | 4–8 | 8–14 | ART |
| B5.2 | Prototipo de shader (GLSL/graph; nº passes, luz requerida) | 3–6 | 6–14 | 14–30 | 30–60 | RT |
| B5.3 | Parámetros expuestos + variantes de material (sliders, presets) | 1–3 | 3–6 | 6–12 | 12–20 | RT |
| B5.4 | Optimización WebGL/mobile (precisión, fills, overdraw) | 1–2 | 2–5 | 5–10 | 10–18 | RT |
| B5.5 | Fallbacks/degradación elegante (dispositivos bajos) | 0.5–1 | 1–3 | 3–6 | 6–10 | RT |

Total típico: **S ≈ 7–14 h · M ≈ 14–32 h · L ≈ 32–66 h · XL ≈ 66–122 h**

#### B6 · Mecánicas específicas sobre modelo (vista explosionada, corte, medición…)

Requiere asset con jerarquía apta (propio o de tercero; si es de tercero, B6.1 audita primero).

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| B6.1 | Auditoría/preparación de jerarquía del asset | 1–2 | 2–5 | 5–10 | 10–20 | RT |
| B6.2 | Vista explosionada (curvas, estados, reversible) | 2–5 | 5–12 | 12–25 | 25–45 | RT |
| B6.3 | Corte seccional / x-ray / medición acotada | 2–4 | 4–10 | 10–20 | 20–35 | RT |
| B6.4 | Callouts/etiquetas 3D→2D (hotspots, líneas guía, fichas) | 1–3 | 3–6 | 6–12 | 12–20 | RT |
| B6.5 | UI de control integrada (sliders/toggles/estados persistidos) | 1–3 | 3–6 | 6–12 | 12–24 | RT |

Vista explosionada standalone (con asset propio listo): **S ≈ 6–12 h · M ≈ 14–29 h · L ≈ 29–59 h · XL ≈ 57–104 h**

#### B7 · Conversión CAD → 3D WebGL-ready ⭐ (ancla comercial)

El caso del "slider de drone": mismo servicio, extremos muy distintos. Pricing = setup base + volumen de piezas con complejidad por pieza.

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| B7.1 | Auditoría CAD (formato STEP/IGES/native, nº piezas, topología, unidades, movimiento requerido) | 0.5–1.5 | 1.5–4 | 4–8 | 8–16 | RT |
| B7.2 | Tessellation/import con tolerancia adecuada | 0.5–2 | 2–5 | 5–12 | 12–24 | RT |
| B7.3 | Limpieza geométrica (normales, agujeros, coplanos, ngons) | 0.5–1.5 | 1.5–6 | 6–15 | 15–35 | RT |
| B7.4 | Decimación a presupuesto de tris | 0.5–1 | 1–3 | 3–8 | 8–18 | RT |
| B7.5 | Jerarquía + pivotes por pieza (habilita explosión/selección posterior) | 0.5–1.5 | 1.5–4 | 4–10 | 10–20 | RT |
| B7.6 | UVs + bake (automáticas manuales según caso) | 0.5–1.5 | 1.5–5 | 5–12 | 12–25 | RT |
| B7.7 | Materiales (spec-driven desde CAD o artístico) | 0.5–2 | 2–5 | 5–12 | 12–25 | ART |
| B7.8 | LODs + validación final en target webgl | 0.5–1 | 1–3 | 3–7 | 7–15 | RT |

Total típico: **S ≈ 4–12 h · M ≈ 12–35 h · L ≈ 35–84 h · XL ≈ 84–178 h**

**Tabla de excedente por pieza** (cuando el conteo domina el esfuerzo; se combina con el tier):

| Tipo de pieza | Definición | Horas/pieza | Costo/pieza (RT) |
|---|---|---|---|
| Primitiva | extrusiones simples, tornillería, placas | 0.1–0.25 | 3–11 USD |
| Curva | superficies curvas/NURBS, fillets complejos | 0.25–0.6 | 7–27 USD |
| Compleja/articulada | engranajes, mecanismos, mallas orgánicas, piezas con movimiento | 0.6–1.5 | 17–68 USD |

Descuento por volumen: −10 % a partir de pieza 41, −20 % a partir de pieza 101 (sobre el excedente).

**Ejemplos ancla para la futura UI de slider (doc §3.10 Fase 2 — placeholders visuales hasta tener assets propios):**

| Extremo | Descripción | Tier | Estimación |
|---|---|---|---|
| Slider mínimo | Drone quad mini estilo juguete: 6–8 piezas primitivas, estático, 12 k tris, materiales planos | S | ≈ 8–14 h ⇒ **225–630 USD** |
| Slider medio | Drone consumer con hélices y tren removibles: ~25 piezas, algunas curvas, texturas PBR estándar | M | ≈ 24–45 h ⇒ **670–2 000 USD** |
| Slider alto | Drone cinematográfico: ~80 piezas, gimbal articulado, preparado para vista explosionada, LODs | L | ≈ 60–110 h ⇒ **1 700–5 000 USD** |
| Slider máximo | Familia/flota de drones con accesorios configurables: >150 piezas, pipeline paramétrico reutilizable | XL | ≈ 120–220 h ⇒ **3 400–9 900 USD** |

(Cálculo con clases RT/ART según módulos; el motor de estimación reproduce estos números.)

---

### Familia C — Web 3D e integración

#### C1 · Embedding con visor embebido (Spline / model-viewer / Sketchfab)

| Sub | Subtarea | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| C1.1 | Selección de visor + licencias + límites | 0.5–1.5 | 1.5–3 | — | — | TL |
| C1.2 | Adaptación del asset al formato del visor | 1–3 | 3–8 | 8–16 | — | RT |
| C1.3 | Integración en página (responsive, lazy load, estados de carga) | 1–3 | 3–6 | 6–12 | — | RT |
| C1.4 | QA cross-browser/mobile | 0.5–1 | 1–3 | 3–6 | — | RT |

Total típico: **S ≈ 3–8 h · M ≈ 7–20 h · L ≈ 17–34 h**

#### C2 · Integración custom three.js / babylon.js

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| C2.1 | Setup proyecto/escena/pipeline de assets (DRACO/KTX2, CI) | 2–4 | 4–8 | 8–16 | 16–30 | RT |
| C2.2 | Carga y gestión de assets + presupuesto de memoria | 1–3 | 3–6 | 6–14 | 14–28 | RT |
| C2.3 | Iluminación/environment/postprocessing | 1–3 | 3–8 | 8–16 | 16–30 | RT |
| C2.4 | Controles/interacción/raycasting (selección, hover, drag) | 2–4 | 4–10 | 10–20 | 20–40 | RT |
| C2.5 | Performance pass (instancing, culling, budgets, profiling) | 1–2 | 2–6 | 6–14 | 14–28 | RT |
| C2.6 | QA cross-device + hooks de analítica | 1–2 | 2–4 | 4–8 | 8–16 | TL |

Visor interactivo single-model (C2.1–C2.6 tier S/M): **≈ 8–38 h**

#### C3 · Unity WebGL embebido

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| C3.1 | Config de build WebGL (compresión Brotli, memory growth, thresholds) | 2–4 | 4–8 | 8–16 | — | RT |
| C3.2 | Loader UX personalizado (progreso, fallback) | 1–3 | 3–6 | 6–12 | — | RT |
| C3.3 | Bridge JS↔Unity (mensajería bidireccional, eventos) | 2–5 | 5–10 | 10–20 | 20–40 | RT |
| C3.4 | Hosting/CDN/caché de build (headers, streaming) | 1–2 | 2–5 | 5–10 | — | RT |

#### C4 · Scrollytelling 3D

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| C4.1 | Storyboard técnico + plan de secciones (nº secciones, keyframes de cámara) | 2–4 | 4–8 | 8–16 | 16–28 | TL |
| C4.2 | Scroll controller + sincronización cámara/escena/animación | 3–6 | 6–14 | 14–28 | 28–50 | RT |
| C4.3 | Progressive loading/preload UX (primera pintura rápida) | 1–3 | 3–6 | 6–12 | 12–20 | RT |
| C4.4 | Reduced-motion + accesibilidad fallback | 1–2 | 2–4 | 4–8 | — | RT |

One-page scrolly con asset existente: **M ≈ 15–32 h · L ≈ 32–64 h** (el asset va por familia B aparte).

#### C5 · Minijuego 3D en web

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| C5.1 | GDD breve + mecánica core definida | 2–4 | 4–8 | 8–14 | 14–24 | TL |
| C5.2 | Gameplay loop implementado (física, colisiones, input) | 6–12 | 12–30 | 30–70 | 70–140 | RT |
| C5.3 | HUD/UI + estados de juego (start/win/lose/pausa) | 2–5 | 5–12 | 12–24 | 24–45 | RT |
| C5.4 | Score/persistencia/share (opcional) | 1–3 | 3–6 | 6–12 | 12–20 | RT |
| C5.5 | Controles mobile + game feel/tuning | 1–3 | 3–8 | 8–18 | 18–35 | RT |

Minijuego arcade simple: **M ≈ 22–64 h · L ≈ 64–136 h** (assets aparte, familia B).

#### C6 · Catálogo interactivo / configurador de producto

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| C6.1 | Arquitectura de datos (headless CMS o JSON gestionable) | 2–4 | 4–10 | 10–20 | 20–40 | RT |
| C6.2 | Listado/grid + visor 3D embebido por ítem | 3–6 | 6–14 | 14–28 | 28–50 | RT |
| C6.3 | Variantes/materiales configurables + cálculo de precio | — | 6–14 | 14–30 | 30–60 | RT |
| C6.4 | Filtros/búsqueda/comparador | 2–4 | 4–10 | 10–20 | 20–35 | RT |
| C6.5 | CTA compra/contacto + integración e-commerce básica | 1–3 | 3–8 | 8–16 | 16–30 | RT |

Configurador de producto (tier M, con assets listos): **≈ 21–56 h**

#### C7 · Web App 3D completa (producto)

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| C7.1 | Discovery/spec funcional + wireframes | 4–8 | 8–16 | 16–32 | 32–64 | TL |
| C7.2 | Sistema visual UI hi-fi (design system ligero) | 4–8 | 8–16 | 16–32 | 32–64 | ART |
| C7.3 | Frontend core (routing, estado, componentes, forms) | 8–16 | 16–40 | 40–90 | 90–180 | RT |
| C7.4 | Capa 3D (combina C2 según necesidad) | 6–12 | 12–30 | 30–70 | 70–150 | RT |
| C7.5 | Backend/API/auth/CMS según alcance | — | 10–24 | 24–60 | 60–140 | RT |
| C7.6 | Analytics/SEO/performance audit | 2–4 | 4–8 | 8–16 | 16–32 | TL |
| C7.7 | Deploy CI + documentación + handoff | 2–4 | 4–8 | 8–14 | 14–24 | TL |

MVP acotado (tier M sin backend pesado): **≈ 62–142 h**. Producto completo XL: **300–650+ h ⇒ multi-mes con hitos**.

#### C8 · Presentación web / microsite de pitch

| Sub | Subtarea | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| C8.1 | Narrativa + estructura de contenido | 2–4 | 4–8 | 8–14 | 14–22 | TL |
| C8.2 | Diseño + build de secciones | 4–8 | 8–18 | 18–36 | 36–60 | RT |
| C8.3 | Motion/transiciones + responsive pulido | 2–4 | 4–10 | 10–20 | 20–32 | RT |

Microsite de presentación (tier M): **≈ 16–36 h**

---

### Familia D — 3D sobre footage real (VFX / compositing) · pricing POR SHOT

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| D1.1 | Ingesta + análisis de escena (reconocimiento: interior/exterior, luces, óptica, movimiento) | 0.5–1.5 | 1.5–4 | 4–8 | 8–14 | RT |
| D1.2 | Camera tracking/solve (fija=S, handheld=M, travelling complejo=L/XL) | 0.5–1.5 | 1.5–4 | 4–10 | 10–18 | RT |
| D1.3 | Geometría proxy / generación de planos de la escena | — | 2–5 | 5–12 | 12–24 | RT |
| D1.4 | Matching de iluminación (HDRI del set, sombras de contacto, reflejos) | 1–3 | 3–8 | 8–18 | 18–35 | ART |
| D1.5 | Integración del modelo + animación del shot | 2–4 | 4–10 | 10–22 | 22–45 | ART |
| D1.6 | FX sobre el plano (simulación: humo, partículas, deformación) | — | 4–12 | 12–28 | 28–55 | ART |
| D1.7 | Compositing de passes + grain/color match | 1–3 | 3–6 | 6–14 | 14–28 | ART |
| D1.8 | QC + entregas de versiones | 0.5–1 | 1–2 | 2–4 | 4–8 | TL |

Shot simple (modelo sobre foto o plano fijo, sin FX): **S ≈ 5–10 h**. Shot cinematográfico con cámara móvil + FX: **L/XL ≈ 46–227 h**.
Pack de shots: −10 % a partir del 2º shot (reutiliza tracking/setup cuando la secuencia lo permite).

---

### Familia E — Integración de IA

#### E1 · Chatbot / asistente IA en sitio web (directo)

| Sub | Subtarea (drivers) | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| E1.1 | Definición de casos de uso, tono, guardrails | 2–4 | 4–8 | 8–14 | 14–22 | TL |
| E1.2 | Base de conocimiento (RAG/embeddings sobre contenido del cliente; nº fuentes) | 3–6 | 6–14 | 14–30 | 30–60 | AI |
| E1.3 | Prompt engineering + set de pruebas de evaluación | 2–4 | 4–10 | 10–20 | 20–40 | AI |
| E1.4 | Widget de UI (burbuja, streaming, historial, mobile) | 3–6 | 6–14 | 14–26 | 26–45 | RT |
| E1.5 | Worker/backend (key management, rate limits, control de costos por llamada) | 3–6 | 6–12 | 12–24 | 24–44 | AI |
| E1.6 | Logging/observabilidad básica (qué preguntaron, qué respondió) | 1–2 | 2–5 | 5–10 | 10–16 | AI |

Asistente FAQ (tier S/M): **≈ 14–51 h**. Asistente con RAG multi-fuente (L): **≈ 63–124 h**.
Nota de operación: costo de tokens/API lo paga el cliente directo o vía recargo transparente (decidir por proyecto; placeholder hasta definir proveedor).

#### E2 · Automatización indirecta en sitio (generadores internos, formularios inteligentes, resúmenes)

| Sub | Subtarea | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| E2.1 | Mapa del proceso + spec | 2–4 | 4–8 | 8–16 | 16–28 | TL |
| E2.2 | Implementación del flujo (prompts + integración API + validaciones) | 4–8 | 8–18 | 18–40 | 40–80 | AI |
| E2.3 | UI admin/config interna | 2–5 | 5–12 | 12–24 | 24–40 | RT |
| E2.4 | Evaluación + iteración con uso real | 1–3 | 3–8 | 8–16 | 16–28 | AI |

Automatización de 1 flujo (tier M): **≈ 20–46 h**

#### E3 · IA dentro de empresa/agencia (consultoría + implementación)

| Sub | Subtarea | S | M | L | XL | Clase |
|---|---|---|---|---|---|---|
| E3.1 | Auditoría de procesos (workshop(s) con el equipo) | 4–8 | 8–16 | 16–30 | 30–50 | TL |
| E3.2 | Mapa de oportunidades + ROI priorizado (documento entregable) | 2–5 | 5–10 | 10–20 | 20–35 | TL |
| E3.3 | Piloto end-to-end (1 flujo automatizado real) | 8–16 | 16–40 | 40–80 | 80–160 | AI |
| E3.4 | Integraciones con herramientas (n8n/Make/scripts/custom) | 4–8 | 8–20 | 20–45 | 45–90 | AI |
| E3.5 | Capacitación + documentación + handoff | 2–4 | 4–8 | 8–16 | 16–28 | TL |
| E3.6 | Mejora continua (retainer mensual) | 4–8 h/mes | 8–16 | 16–32 | 32–64 | AI |

Engagement completo inicial (tier M: E3.1–E3.5): **≈ 43–102 h**.

---

### Familia F — Activos, FX y servicios recurrentes

| Task | Servicio | Desglose y rangos | Clase |
|---|---|---|---|
| F1 | Generación de texturas y mapas | Tileable único S 1–3 h · Trim sheet M 3–8 h · Librería de materiales L 8–20 h · Sistema procedural XL 20–45 h (por set; AI-assisted con refinamiento humano incluido en esas horas) | ART |
| F2 | FX genérico (partículas/simulación para render offline o realtime VFX graph) | S 2–5 · M 5–14 · L 14–30 · XL 30–60 h por efecto; packs con −15 % desde el 3º efecto similar | ART |
| F3 | **Optimization Doctor** — rescate/optimización de assets existentes | Auditoría S 1–3 / M 3–8 h (reporte de draw calls, memoria, tris) + optimización S 2–5 / M 5–14 / L 14–30 / XL 30–70 h. Coincide con el posicionamiento doc 02 | RT |
| F4 | Consultoría técnica / auditorías puntuales | Hora suelta TL 32–48 USD. Auditoría de performance WebGL empaquetada: S 3–6 · M 6–12 · L 12–24 h | TL |
| F5 | Retainer mensual de producción mixta | Bloques prepagados 20 h (−10 %) / 40 h (−12 %) / 80 h (−15 %) mezclando familias A–F; expira a 60 días | mix |

---

## 4. Paquetes comerciales v1 (lo que se publica)

Cada paquete declara: incluye / no incluye / rango agregado (motor) / duración calendario (política 2.9). Descuento bundle −10 % sobre punto medio à-la-carte ya reflejado en los rangos publicados.

| ID | Paquete | Composición (à-la-carte) | Rango publicado* | Duración |
|---|---|---|---|---|
| PK-01 | **Hero Renders** | A1 ×3 imágenes misma escena (mix S/M) | 700–2 400 USD | 1–2 sem |
| PK-02 | **Turntable de Producto** | B1 (S/M) + C1 embed | 550–2 100 USD | 1–2 sem |
| PK-03 | **Exploded Experience** | B7 (M/L) + B6 explosión + callouts + C2 visor | 3 200–12 000 USD | 3–6 sem |
| PK-04 | **Scrolly Landing** | C4 + C2 + asset B1/B3 (M/L) | 2 800–11 000 USD | 3–6 sem |
| PK-05 | **Minijuego Promo** | C5 (M/L) + asset B3/B4 | 2 500–9 500 USD | 3–6 sem |
| PK-06 | **Catálogo Interactivo** | C6 (M/L) + B2 ×n assets | 2 200–9 000 USD | 3–7 sem |
| PK-07 | **Asistente IA para tu Web** | E1 (S/L) | 900–5 000 USD | 2–4 sem |
| PK-08 | **VFX Shot Pack** | D1 ×3 shots (mix S/M) | 1 100–4 200 USD | 2–4 sem |
| PK-09 | **Web App 3D MVP** | C7 recortado (M, backend ligero) | 4 500–11 000 USD | 4–8 sem |
| PK-10 | **Retainer Producción** | F5 bloques 20/40/80 h | 570–3 420 USD/mes | continuo |

*Rangos publicados = agregados del motor ± buffer de riesgo pequeño; se recalculan al recalibrar la rate card. Los valores de esta tabla son los puntos de partida v1 y DEBEN regenerarse desde el motor antes de publicarse en cualquier superficie (pendiente Fase 1).

Anti-patrones de venta (reglas propias):
1. Nunca vender XL como fixed price sin hitos y cláusula de alcance.
2. Nunca prometer performance contractual sin fase de medición previa.
3. IA siempre con guardrails y evaluación — nunca entregar un prompt suelto como "integración".

---

## 5. Flujo de venta estándar (cómo se usa este catálogo)

1. Cliente llega con necesidad cruda → mapear a familia/tarea (si no calza, registrar gap §7).
2. Questionnaire de drivers por subtarea (cantidad, curvatura, plataformas, animación, interactividad) → asignar tier.
3. Motor de estimación → rango horas/USD + duración calendario → propuesta con paquete recomendado.
4. Discovery firmado → cotización cerrada por hitos (30/40/30) con las políticas §2 embebidas.
5. Al cierre: registrar cifras reales vs estimadas (insumo de calibración §6).

---

## 6. Versionado y calibración

- v1 (este doc): rangos por juicio experto anclado al benchmark doc 03. **Confianza: media** — aún sin cotizaciones cerradas propias.
- Cada cotización cerrada se registra (fecha, paquete, estimado vs real, drivers que fallaron) en `docs/servicios/calibracion.md` (se crea con el primer registro).
- Regla: ≥3 desviaciones sistemáticas del mismo driver (>25 %) obligan a revisión de ese rango → v1.x. Cambio de rate card → v2 mayor.
- Los rangos publicados en UI siempre exponen la versión del catálogo usada.

## 7. Gaps y pendientes de definición

1. Método de cobro internacional definitivo (Wise/Payoneer/Deel + facturación Colombia) — placeholder, decisión del usuario (doc 03 §pagos como insumo).
2. Política de costos de infra IA (tokens/API) y hosting de builds Unity WebGL — decidir por proyecto hasta tener defaults.
3. Servicios no listados detectados en ventas (p. ej. impresión 3D, AR/USDZ, virtual staging) → se añaden como nueva fila de familia con el mismo formato; no se improvisan rangos en conversación.
4. Fase web visual (slider por tier con ejemplos): requiere assets de ejemplo reales — coordinar con sprint doc-33 (AG-PORT). Placeholders explícitos mientras tanto.

---

*AG-SERV · catálogo v1.0 — espejo determinista: `src/data/services/**`. Cualquier cifra de UI debe reproducir estos números.*
