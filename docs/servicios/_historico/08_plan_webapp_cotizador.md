# 08 · Plan de arquitectura — Web App Cotizador AG-SERV

> v1.0 · 2026-08-25 · Owner: AG-SERV · Estado: spec aprobada para implementación (prompt en `PROMPT_FRONTEND_COTIZADOR.md`).
> Producto: cotizador/showcase público orientado a **agencias de diseño** (sus clientes finales: empresas
> ingenieriles/industriales). Principio rector: **mínima carga cognitiva**, máxima claridad visual,
> cero jerga técnica en superficie, trazabilidad total bajo demanda.

---

## 1. Principios de producto

1. **Dos puertas, un mismo motor.** Presets (rápido, recomendado) o construcción desde cero (wizard guiado).
   Ambos consumen el MISMO motor determinista (`computeQuote`) — nunca hay dos fuentes de precio.
2. **Una pregunta por pantalla.** El wizard nunca muestra más de una decisión principal a la vez.
3. **El cliente habla necesidades, no jerga.** Sliders etiquetados como preguntas ("¿Cuántos modelos…?");
   los términos técnicos viven en tooltips y en el desglose colapsable.
4. **Visual antes que numérico.** Cada slider cuantitativo tiene un ayudante visual (SVG por capas /
   secuencia de imágenes). Los números acompañan; no lideran.
5. **Estimación ≠ cotización.** Disclaimer permanente en el panel de resultado; la cifra firme se cierra en SOW (01 §9).
6. **Estático y determinista.** Todo corre client-side consumiendo `src/data/services/**` (principio §0.5 del
   plan maestro). Sin backend server, sin APIs externas, funciona offline.

## 2. Arquitectura

```
src/pages/cotizador.astro                 ← página pública (isla React 19, lazy)
src/components/services/
├── CotizadorApp.tsx                      ← root: router interno Entry → Preset | Wizard | Catalog
├── state/
│   ├── useQuoteStore.ts                  ← zustand + persist (moneda, selecciones, modificadores)
│   └── selectors.ts                      ← derivados: QuoteResult memoizado vía computeQuote
├── steps/
│   ├── EntryScreen.tsx                   ← "¿Qué necesitas?" 3 puertas
│   ├── PresetGallery.tsx                 ← cards de paquetes (presets)
│   ├── PresetConfig.tsx                  ← config específica del preset elegido
│   ├── wizard/GoalStep.tsx               ← necesidad → familia sugerida
│   ├── wizard/ServiceStep.tsx            ← card de servicio dentro de la familia
│   ├── wizard/ConfigureStep.tsx          ← sliders + rúbrica cualitativa + add-ons
│   ├── wizard/ContextStep.tsx            ← moneda, lote, urgencia, lanzamiento (badge auto)
│   └── wizard/SummaryStep.tsx            ← desglose trazable + CTA
├── controls/
│   ├── SliderPiezas.tsx                  ← 5→150+ con DronePieces visual
│   ├── SliderDetalle.tsx                 ← low→high poly con PolyDetail visual
│   ├── SliderSegundos.tsx                ← 2–90 s con marcas XS/S/M/L/XL
│   ├── OrganicCards.tsx                  ← 3 cards (recta/curva/orgánica) — selección, no slider
│   └── SegmentedLevel.tsx                ← XS·S·M·L·XL con tooltip de descriptor
├── visuals/
│   ├── DronePieces.tsx                   ← drone SVG por capas (grupos se añaden con el slider)
│   ├── PolyDetail.tsx                    ← mismo asset en 3 densidades (flat/shaded/high)
│   └── OrganicSet.tsx                    ← trio de imágenes/cards para geometría
└── panels/
    ├── QuotePanel.tsx                    ← sticky: horas, subtotal, descuentos, TOTAL rango
    ├── BreakdownDrawer.tsx               ← "¿Cómo se calcula?" líneas subtarea × banda
    └── Disclaimer.tsx                    ← copy obligatorio (ver §6)
src/lib/services/ui.ts                    ← adapters: buildQuoteInput(), formatters Intl es-CO/en-US,
                                            labels de niveles, mapping necesidad→familia
```

**Reglas técnicas:** reutilizar `src/components/ui/**` y tokens existentes · Zustand ya está en deps ·
sin dependencias nuevas (sliders nativos estilizados; 3D diferido a fase 2 con `<model-viewer>` lazy) ·
formato moneda con `Intl.NumberFormat('es-CO' | 'en-US')` · `prefers-reduced-motion` respetado ·
isla hidratada solo en `/cotizador`.

## 3. Flujo — puerta 1: PRESETS

Entry → card de preset → `PresetConfig` con sliders propios → QuotePanel en vivo.

| Preset | Configurador (controles) |
|---|---|
| **PK-CAD-WEBGL** Conversión CAD corporativa → WebGL ⭐ | Slider nº modelos (1–20, default 5) afecta cantidad F1 · SegmentedLevel global S/M/L · Chip "Vista explosionada" (B6 add-on) · Target desktop/mobile |
| **PK-CAD-TWIN** Gemelo visual piloto | Slider nº modelos · Toggle "Datos vivos" (mock→real: nota change request) |
| **PK-LANZAMIENTO** Film + web interactivo | Toggle tipo de toma (foto/video) en D1 · SegmentedLevel por bloque (colapsado en avanzado) |
| **PK-MICRO-LOOP** Pack micro-loops 2–3 s | Slider cantidad (4–12, XS fijo) · Chips de plataforma (web/redes) |

Badge automático **"−25 % Lanzamiento"** visible cuando `firstClientLaunch` esté activo (default ON en
primera visita; editable en ContextStep).

## 4. Flujo — puerta 2: DESDE CERO (wizard)

| Paso | Pantalla | Decide |
|---|---|---|
| 1 | **Tu objetivo** | Chips de necesidad → sugiere familia (mapping §5) |
| 2 | **El servicio** | Card(s) de servicio de esa familia, descripción de una línea |
| 3 | **Configúralo** | Slider del driver principal + rúbrica cualitativa como preguntas visuales + add-ons chips |
| 4 | **Contexto** | Moneda, cantidad/lote, urgencia, lanzamiento |
| 5 | **Resumen** | Desglose trazable colapsable + disclaimer + CTA |

Mapping objetivo→familia: *Mostrar producto en 3D* → C1/C2 (±B) · *Vender con variantes* → Web App (C3) ·
*Explicar cómo funciona* → F1/B2/B6 · *Video de producto* → A2/A1/D · *IA en sitio/procesos* → E1–E5 ·
*Tengo archivos CAD/STP* → push directo al preset PK-CAD-WEBGL.

## 5. Puerta 3: CATÁLOGO EXPERTO

Acordeón A–G con fichas completas de los markdowns (drivers, incluye/no incluye, tabla XS–XL en horas,
presupuesto derivado en vivo con la moneda activa). Colapsado por defecto; pensado para el visitante
técnico que quiere leerlo todo.

## 6. Copy obligatorio (no negociable)

- Bajo TODO rango: *"Rango orientativo, no cotización. La cifra firme se cierra en un SOW."*
- Servicios IA: *"Consumo de APIs por cuenta del cliente (BYOK)."*
- Lanzamiento: usar `LAUNCH_PROGRAM.alcanceEs` textual.
- Assets demo inexistentes: placeholder etiquetado *"demo por producir"* — jamás inventar casos.

## 7. Fases

- **F1 (esta spec):** flujo completo funcional con visuales SVG/imagen-placeholder, dual moneda, presets + wizard + catálogo.
- **F2:** assets 3D demo reales (doc-33 sprint) sustituyen placeholders; `<model-viewer>` lazy.
- **F3:** integración visual con el sitio público (coordinación AG-PORT vía ticket) + analítica de eventos.
