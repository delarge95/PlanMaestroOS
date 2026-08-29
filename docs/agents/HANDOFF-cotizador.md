# HANDOFF — AG-SERV: Cotizador interactivo (transferencia a chat dedicado)

> **Contexto completo para continuar el trabajo en un chat nuevo.** Creado por misión control 2026-08-29. Este documento + el código en el worktree son TODO lo que se necesita — no se requiere contexto de ninguna conversación anterior.

## Identidad

- **Agente:** AG-SERV (ficha §3.10 del plan, rama `agent/servicios`, worktree `E:\Laboral\.worktrees\servicios`)
- **Entrega:** cotizador interactivo público para clientes freelance, presentable el **lunes** a una agencia de diseño que trabaja con empresas industriales B2B
- **Después del lunes:** se ampliará a todos los servicios; ahora solo Web 3D

## Estado ACTUAL (commiteado en agent/servicios, mergeado a main)

### Lo que funciona
1. **Arquitectura de dos modos:** "Cotizar" (guiado por árbol de decisión) + "Catálogo" (lista completa con filtros)
2. **Fondo WebGL:** grid de cubos flotantes azul #0071e3 que reaccionan al mouse (CotizadorRedesign.tsx)
3. **Árbol de decisión 3 niveles** (decisionTree.ts):
   - N1: ¿Qué quieres lograr? (web 3D / video / imágenes / IA / no sé)
   - N2 (web-3d): Solo mostrarlo / Interactivo / Scrollytelling / App completa
   - N3: Preguntas específicas de "ver-modelo" (6 preguntas, ver abajo)
4. **Preview visual en sliders:** nivel de detalle (SVG wireframe→shaded→full), piezas (aparecen al subir)
5. **Opciones técnicas expandibles:** `<details>` bajo cada pregunta con bajo contraste — el cliente las rellena solo si las conoce
6. **Branding público:** Alexander Woodcock, email alexwssonn@hotmail.com, WhatsApp 573054396581 (branding.ts = fuente única)
7. **CTA WhatsApp/Email** con mensaje prellenado directo
8. **PDF/print formal:** encabezado marca+contacto+validez 15 días (solo visible al imprimir)

### La rama "ver-modelo" (completa, 6 preguntas)
1. ¿Ya tienes el modelo? → Sí/No + [desplegable: formato (7 opciones), calidad fuente]
2. ¿Nivel de detalle? → **Slider 1-5** + [materiales 1-15, fidelidad 1-5, polígonos 4 niveles, texturas]
3. ¿Cuántas piezas? → **Slider 1-50** + [piezas móviles, vista explosionada]
4. ¿Acabados? → Simple/Variado/Detallado + [PBR, iluminación HDRI]
5. ¿Qué puede hacer el visitante? → Rotar/Zoom/Auto + [fondo, interfaz]
6. ¿Dónde lo muestras? → Select + [CMS, prioridad rendimiento]

### Pendiente CRÍTICO para el lunes (en orden)

**1. Conectar respuestas del árbol → cálculo de precio** (el wizard recolecta pero no cotiza)
   - `GuidedWizard.tsx` recolecta `answers: Record<string, string|number|boolean>`
   - Necesita: mapear answers → SERVICE_VARIABLES (serviceVariables.ts) → computeQuote (formula.ts)
   - El tier se deriva con derivarTier(serviceId, vals) — ya funciona
   - Mostrar precio en panel sticky derecha (ya existe el layout en CotizadorRedesign)

**2. Filtros en el catálogo** — ahora muestra todos sin filtrar
   - Filtrar por familia (web-3d, render, etc.)
   - Grid de cards con Tilt al hover (ya existe ServiceCard en CotizadorRedesign)

**3. Completar las otras 3 ramas del árbol** (interactivo, scrollytelling, web-app) — solo tienen estructura básica; "ver-modelo" es el modelo a seguir

**4. Previews WebGL reales** — sustituir los SVG por mini-canvas Three.js que muestren un modelo procedural que aumenta detalle/piezas en tiempo real

**5. Pase visual final:** el usuario quiere minimalismo Apple/Awwwards. Feedback recibido: "no se ve profesional", "los emojis se ven baratos", "necesita más espacio", "el slider debe arrastrarse no solo click", "las opciones técnicas deben expandir bajo cada pregunta en bajo contraste"

## Reglas del agente (ya aplicadas, mantener)

- **REGLA DE ORO §0.9:** nada se borra, cambios aditivos
- **Territorio OWN:** `src/components/services/**`, `src/data/services/**`, `src/lib/services/**`, `src/pages/cotizador.astro`, `docs/cotizador/**`
- **FORBIDDEN:** career, fitness, ui/tokens, nav (ticket)
- **Verificación por commit:** `NODE_OPTIONS=--max-old-space-size=8192 npx astro check` (0) + `npm test` (verde)
- **SSR:** Astro renderiza servidor primero — NUNCA `window.*` directo en render; usar useEffect o clases CSS
- **Commits frecuentes** (el proveedor corta): `[wip]` si a medias

## Investigación UX previa (3 docs, leerlos)

- `docs/cotizador/01-personas-friccion.md` — personas B2B y fricciones (F1-F4)
- `docs/cotizador/02-necesidades-consolidadas.md` — N1-N6
- `docs/cotizador/03-soluciones-roadmap.md` — S1-S12 con fase y métrica

## Feedback acumulado del usuario (incorporar en el diseño)

1. "El diseño está mucho mejor pero necesita mucho más trabajo UX/UI. Se debe buscar siempre el minimalismo, Apple-like"
2. "Si se va a ofrecer servicios de 3D web se necesita mostrar los recursos de forma mucho más profesional"
3. "Las configuraciones de tris por ejemplo, sean algo más intuitivo, podemos usar modelos 3D existentes"
4. "Necesitamos un flujo mucho más agradable e intuitivo para quien cotiza y que se muestre de forma más interactiva"
5. "Una skill impeccable para diseño e integra mejor el 3d en la web en todas las opciones configurables"
6. "No tiene sentido ver los 4 dots numerados arriba, si para avanzar hay que scrollear"
7. "Tener cajas con scroll interno se ve horrible, hace que el espacio se sienta apeñuscado"
8. "En escritorio se ve horrible así [estrecho]. Debe ser responsive, para móvil está bien que se angoste, pero en escritorio"
9. "Qué carajos es eso verde" (el fondo verde del SVG)
10. "Prefiero que sean dos secciones aparte: cotizar de forma guiada y la lista completa con filtros"
11. "Se ve una web genérica hecha por un principiante" (referencia al diseño pre-rediseño)
12. "Incluyas WebGL en toda la web, para cards más agradables, sliders más estéticos"
13. "Queremos que se vean de lujo, cuando tenga el nivel apropiado ampliamos"
14. "Vas a rediseñar la página, buscamos algo más intuitivo, menos palabras, decir más con menos"
15. "Debajo de cada sección, haya un desplegable justamente para esas opciones avanzadas"
16. "El slider debe poder arrastrarse, no solo clickear" (FIXED)
17. "Cuando se añadan los modelos 3D para las previews, que se integren de forma natural, sin marco"

## Tareas del cotizador NO incluidas aquí (otros agentes)
- Assets visuales reales (producción humana, galleryManifest.ts ya listo)
- Email confirmado (ya: alexwssonn@hotmail.com)
- Conexión con career (futuro, por contrato de eventos)
