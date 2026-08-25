# PROMPT — Implementación Web App Cotizador AG-SERV

> Copiar este prompt COMPLETO como primer mensaje de la sesión encargada del frontend.
> Autocontenido: incluye contexto, reglas, arquitectura, UX, copy y Definition of Done.

---

Eres el agente encargado de construir la **Web App Cotizador de AG-SERV** dentro del repo `E:\Laboral`
(Astro 5 + React 19 + TypeScript strict + Zustand + vitest, deploy estático GitHub Pages, todo client-side).

## 0. Contexto y reglas vinculantes

1. Lee primero: `docs/agents/PLAN_MULTIAGENTE.md` §0 (principios), tu ficha operativa en
   `docs/servicios/REGLAS_AG-SERV.md`, y TODO `docs/servicios/` (01–07 + README).
2. Trabajas sobre la rama **`agent/servicios`** (todo el backend ya está commiteado ahí). Sin push.
   Commits por tarea con prefijo `feat(cotizador):` / `fix(cotizador):`.
3. **Regla de Oro**: nada se borra; cambios aditivos. La página `/cotizador` es territorio nuevo acordado
   por el usuario (dueño del repo); deja nota para coordinar enlace/nav con AG-PORT vía ticket al cerrar.
4. Verificación por commit: `npx astro check` (0 errores) + `npx vitest run` verde +
   `npx tsx scripts/validateServices.ts` ("catálogo íntegro").
5. **Fuera de alcance**: NO modifiques los markdowns de catálogo ni el motor salvo añadir
   `src/lib/services/ui.ts` (adapters). No agregues dependencias nuevas sin ticket.

## 1. Backend existente que DEBES consumir (no reinventar)

Todo vive en `src/data/services/index.ts`:

- `CATALOG_CORE: ServiceDefinition[]` — 17 servicios con subtareas y horas **XS/N1/N2/N3/N4**
  (`a1-render-estatico`, `a2-render-animacion`, `b1..b8-*`, `c1-visor-embebido`, `c2-visor-custom`,
  `c3-webapp-3d`, `d1-compositing-foto`, `f1-cad-webgl-ready` ⭐, `f2-generacion-texturas`,
  `g1-discovery-scoping`). F1 trae `cotizador.driverPrincipal` (nº de piezas con umbrales
  ≤15 / 15–60 / 60–150 / 150+) y `cotizador.addOns`.
- `PACKAGES` — presets computables: `PK-CAD-WEBGL` ⭐ (discovery + F1×5 lote + visor custom),
  `PK-CAD-TWIN`, `PK-LANZAMIENTO`, `PK-MICRO-LOOP` (XS ×4).
- `computeQuote(input, { getService }) → QuoteResult { hoursMin/Max, subtotalMin/Max,
  discountPctApplied, totalMin/Max, lines[], notesEs[] }` — acepta `kind:'service'|'package'`,
  `currency:'USD'|'COP'`, `modifiers:{ firstClientLaunch?, recurringClient?, batchUnits?, urgent72h?,
  critical24h? }`. Guardarrail interno: suma HORAS y redondea una vez (05 §5.2).
- `RATE_CARD_COP_V1` (mercado nacional, más económico), `LEGACY_RATE_CARD_V0` (internacional operativo),
  `TRM_REFERENCIA` (solo informativa), `LAUNCH_PROGRAM` (−25 % primeros clientes; usa su `alcanceEs` textual).
- `RUBRICA_CUALITATIVA` + `aplicarRubrica(nivelBase, deltas[])` — geometría/acabado/densidad/target con
  límites duros XS↔XL.
- `estimateService(svc, level, { currency })` para fichas del catálogo experto.

## 2. Producto

Cotizador/showcase público en ruta **`/cotizador`** para agencias de diseño (clientes finales de esas
agencias: empresas ingenieriles/industriales). Diseño minimalista, moderno, intuitivo, atractivo;
**carga cognitiva mínima**: una decisión principal por pantalla, lenguaje de necesidades (no jerga),
visuales antes que números, trazabilidad bajo demanda.

### 2.1 Arquitectura de archivos (crear)

```
src/pages/cotizador.astro
src/components/services/
├── CotizadorApp.tsx
├── state/useQuoteStore.ts          # zustand + persist('ag-serv-quote')
├── state/selectors.ts              # buildQuoteInput() + useMemo(computeQuote)
├── steps/EntryScreen.tsx
├── steps/PresetGallery.tsx
├── steps/PresetConfig.tsx
├── steps/wizard/{GoalStep,ServiceStep,ConfigureStep,ContextStep,SummaryStep}.tsx
├── controls/{SliderPiezas,SliderDetalle,SliderSegundos,OrganicCards,SegmentedLevel,ToggleChip}.tsx
├── visuals/{DronePieces,PolyDetail,OrganicSet}.tsx
└── panels/{QuotePanel,BreakdownDrawer,Disclaimer}.tsx
src/lib/services/ui.ts              # adapters + formatters + mapping objetivo→familia
```

### 2.2 Estado global (Zustand)

```ts
type Screen = 'entry' | 'presets' | 'preset-config' | 'wizard' | 'catalog' | 'summary';
interface QuoteStore {
  screen: Screen;
  currency: 'USD' | 'COP';            // persistido; default 'USD'
  presetId?: string;                   // si flujo preset
  wizard: { family?: FamilyId; serviceId?: string;
            levelBase: LevelId;        // default 'N2'
            qualitativeDeltas: Record<string /*rubricDimId*/, -1 | 0 | 1>;
            addons: string[] };
  modifiers: { firstClientLaunch: boolean; recurringClient?: boolean;
               batchUnits?: number; urgent72h?: boolean; critical24h?: boolean };
  quantity: number;                    // para servicios/paquetes unitarios
  actions: { go(screen): void; setCurrency(c): void; selectPreset(id?): void;
             setWizard(patch): void; toggleAddon(id): void; setModifier(k,v): void; reset(): void };
}
```

El resultado se deriva SIEMPRE con `computeQuote(buildQuoteInput(state))` en un selector memoizado.
Formateo: `Intl.NumberFormat(currency==='COP' ? 'es-CO' : 'en-US', { style:'currency', currency,
maximumFractionDigits: 0 })`.

### 2.3 Flujo A — PRESETS (puerta recomendada)

`PresetGallery`: una card por elemento de `PACKAGES` con nombre, `clienteObjetivoEs`, chips de
componentes y rango "desde $X" (computeQuote a nivel default, moneda activa). Click → `PresetConfig`.

Configuradores por preset (controles → efecto en QuoteInput):

| Preset | Controles | Efecto |
|---|---|---|
| PK-CAD-WEBGL ⭐ | `SliderPiezas` 1–20 modelos (default 5) · `SegmentedLevel` S/M/L aplica a todos los componentes · Chip "Vista explosionada" (nota add-on B6) · Toggle desktop/mobile-exigente | `quantity` = nº modelos en componente f1 · `levelByComponent` uniforme · nota B6 en notes |
| PK-CAD-TWIN | `SliderPiezas` 1–10 · Toggle "Datos vivos reales" OFF→nota CR | igual patrón |
| PK-LANZAMIENTO | Toggle toma foto/video (afecta d1 label) · SegmentedLevel colapsado "avanzado" | `levelByComponent.d1-compositing-foto` |
| PK-MICRO-LOOP | `SliderSegundos` fijo XS (2–3 s) · Slider cantidad 4–12 | `quantity`=cantidad, nivel XS fijo |

En todos: moneda USD/COP toggle · badge **"−25 % Lanzamiento"** auto (toggle apagable) · CTA final
"Solicitar cotización firme" → mailto con asunto/resumen (placeholder hasta formulario).

### 2.4 Flujo B — DESDE CERO (wizard de 5 pasos)

| Paso | Pantalla | Contenido exacto |
|---|---|---|
| 1 GoalStep | "¿Qué quieres lograr?" | Chips (con icono): Mostrar producto en 3D → familia web-3d(±asset-rt) · Vender con variantes/configurador → c3-webapp-3d · Explicar cómo funciona/montaje → datos(f1)+asset-rt(b2/b6) · Video/animación de producto → render(a1/a2)/vfx(d1) · IA en mi sitio o procesos → ia(e1–e5) · Tengo archivos CAD/STP → **redirige a preset PK-CAD-WEBGL** |
| 2 ServiceStep | "Este servicio encaja" | Card(s) de `SERVICE_CATALOG` de esa familia: nameEs, unitEs, driversEs como bullets de una línea, rango XS–XL vivo |
| 3 ConfigureStep | Sliders del driver principal + rúbrica | Ver §2.5. Preguntas cualitativas como CARDS seleccionables (no sliders): "Tus piezas son… rectas/curvas/orgánicas" → delta geometría; "Lo verás de cerca…" viewport/marketing/close-up → delta acabado; "Target…" desktop/móvil exigente |
| 4 ContextStep | "Contexto" | Moneda · cantidad/lote (si aplica, muestra −15 % lote) · urgencia (ninguna/<72 h/+50 % crítico con warning de disponibilidad) · badge lanzamiento ON por defecto |
| 5 SummaryStep | Resumen | Desglose por líneas (colapsable), horas totales, subtotal, descuentos como línea propia, TOTAL rango grande, disclaimer, CTA firme |

### 2.5 Controles con ayudas visuales (spec)

- **SliderPiezas** (F1/presets CAD): range 1–150 step 1. Umbrales visuales: ≤15 / ≤60 / ≤120 / 150+
  cambian etiqueta de nivel sugerido. Visual `DronePieces`: SVG del drone compuesto por GRUPOS que se
  revelan progresivamente — G1 base (frame+4 brazos+4 hélices ≈9 pzas) siempre; G2 batería+canopy+cámara
  (>8); G3 gimbal 3 ejes (>20); G4 tren+antenas (>40); G5 arneses+tornillería+sensores densos (>90).
  Etiqueta viva "≈ N piezas". Transiciones opacity/transform 200 ms.
- **SliderDetalle** (B/C): 3 estados del mismo asset — LOW (silueta plana), MEDIUM (flat-shading facetado),
  HIGH (suave + hint wireframe). Implementar como 3 SVGs/imagenes intercambiadas con crossfade; mapea a
  niveles XS–S / N2–N3 / N4 respectivamente. Micro-copy: "Más detalle = más horas de modelado".
- **OrganicCards**: 3 cards con imagen (caja / carena curva / tela-orgánico) para la dimensión geométrica
  de la rúbrica. Selección única → delta ±0/+1. Nunca slider continuo para esto.
- **SliderSegundos** (A2): 2–90 s con marcas conmutando automáticamente el nivel: 2–3 s=XS · ~10 s=S ·
  ~30 s=M · ≥60 s=L/XL (chip de nivel se ilumina). Preview: barra de timeline que crece.
- Todos los controles: label = pregunta en lenguaje cliente, valor legible, tooltip técnico opcional
  (`title`/popover) con el término real (p.ej. "presupuesto poligonal").

### 2.6 Panel de cotización (persistente)

Desktop: columna derecha sticky · Mobile: bottom-sheet colapsable. Contenido:
horas totales estimadas · subtotal · descuentos como LÍNEA PROPIA (original → modificador → final, 05 §5.4)
· **TOTAL rango grande** · botón "¿Cómo se calcula?" → `BreakdownDrawer` con las `lines` (subtarea × banda)
y las `notesEs` · `Disclaimer` permanente: *"Rango orientativo, no cotización. La cifra firme se cierra en
un SOW."* · En servicios IA añadir: *"Consumo de APIs por cuenta del cliente (BYOK)."*

### 2.7 Puerta C — Catálogo experto

Acordeón por familia A–G leyendo `SERVICE_CATALOG` + fichas textuales esenciales (drivers, unidad,
confidence) con tabla XS–XL de horas y presupuesto derivado en vivo (moneda activa). Colapsado por defecto.

## 3. Sistema visual

- Reutiliza `src/styles/tokens.css` + tipografía global. Si falta un token, defínelo localmente en el
  componente (no toques tokens globales — TICKET).
- Paleta: neutros cálidos + UN acento (el del tema actual). Superficies amplias, whitespace generoso,
  radios moderados (8–14 px), sombras suaves de un solo nivel.
- Tipografía: jerarquía de 3 niveles máximo por pantalla (título pregunta / apoyo / dato).
- Motion: fade+slide sutil 180–240 ms entre pasos; respeta `prefers-reduced-motion` (sin transiciones).
- Mobile-first: wizard de un paso por viewport; QuotePanel como bottom-sheet; breakpoints 360/768/1080.
- Accesibilidad: foco visible, labels asociados, contraste AA, targets ≥44 px, aria-live en el TOTAL.

## 4. Copy deck (ES — usar textual)

- Entry: título "¿Qué necesitas construir en 3D?" · sub "Obtén un rango orientativo en menos de 2 minutos."
- Botones puerta: "Empezar con un paquete" (recomendado) / "Cotizar desde cero" / "Ver catálogo completo"
- Disclaimer fijo: "Rango orientativo, no cotización. La cifra firme se cierra en un SOW."
- Lanzamiento badge: "−25 % · Lanzamiento primeros clientes"
- IA: "Consumo de APIs por cuenta del cliente (BYOK)."
- Placeholder assets: "Demo por producir — fase visual" (jamás inventar casos/clients).

## 5. Definition of Done

1. `npx astro check` → 0 errores. `npx vitest run` → verde (añade tests en
   `src/lib/services/__tests__/ui.test.ts` para adapters/formatters/mapping).
2. `npx tsx scripts/validateServices.ts` sigue en OK.
3. Recorrido manual: los 3 flujos completos en mobile+desktop, ambas monedas, con/sin lanzamiento.
4. Ningún literal de precio hardcodeado fuera de `computeQuote`; ningún URL/caso inventado.
5. Diff solo toca archivos listados en §2.1 (+ cotizador.astro). PR a `main` con resumen.

## 6. Entregable adicional

Al terminar, deja `docs/servicios/PROMPT_FRONTEND_NOTAS.md` con: decisiones tomadas, desviaciones de esta
spec (si las hubo y por qué), y screenshots/rutas para QA humano.
