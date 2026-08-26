# 09 · Plan de UX — Cotizador AG-SERV

> v1.0 · 2026-08-25 · Owner: AG-SERV · Estado: **implementado** (capa UX en `src/lib/services/ux.ts` +
> componentes `controls/`·`visuals/`; ver §7). El DISEÑO visual (estética, marca, ilustración final, assets 3D
> demo) se delega al agente de diseño — este documento define qué recibe y qué NO le corresponde.

---

## 1. Objetivo

Que una agencia de diseño (o su cliente industrial) obtenga un rango orientativo de costo/tiempo **sin
fricción**: máximo 2 interacciones antes del primer número, una decisión por pantalla, cero jerga técnica en
superficie y feedback causa→efecto inmediato ante cualquier cambio.

## 2. Principios anti-carga-cognitiva (vinculantes)

| # | Principio | Aplicación |
|---|---|---|
| P1 | **Reconocer > recordar** | Toda opción visible con etiqueta humana; nada depende de memoria de pasos anteriores |
| P2 | **≤ 6 opciones por decisión** | Presets primero (efecto pastelera); chips de necesidad = 6; niveles mostrados como XS·S·M·L·XL discretos |
| P3 | **Progressive disclosure** | Avanzado (rúbrica fina, nivel por componente) colapsado tras "Ajustar detalles" |
| P4 | **Feedback causa→efecto inmediato y acotado** | Al mover un control cambian SOLO 3 cosas: número humano, chip de nivel S/M/L/XL y el ayudante visual. Nunca "parpadea toda la pantalla" |
| P5 | **Discreto > continuo cuando hay tramos** | Los precios saltan por umbrales reales; el slider lo hace evidente con ticks y snap |
| P6 | **Defaults inteligentes** | N2 · 5 modelos · lanzamiento ON · moneda persistida. Cero pantallas en blanco |
| P7 | **Prevención > corrección** | Urgencia crítica deshabilitada con explicación donde no aplica (discovery); pisos visibles antes de comprometer |
| P8 | **Consistencia posicional** | El TOTAL vive siempre en el mismo lugar (panel persistente / última fila del resumen) |

## 3. Inventario de sliders/controles (dónde y cómo)

| # | Control | Servicios | Tipo | Rango / opciones | Ayudante visual (ejecutado) | Feedback en vivo |
|---|---|---|---|---|---|---|
| S1 | **Nº de piezas CAD** ("¿Cuántos modelos…?") | F1, PK-CAD-WEBGL/TWIN | Slider discreto + snap a umbrales | 1–20 modelos (presets) · 1–150 (desde cero) | `DronePieces` SVG por capas: grupos que SE AÑADEN al avanzar | "≈ N piezas" + chip nivel auto (S/M/L/XL) |
| S2 | **Detalle poligonal** ("¿Cuánto detalle…?") | B1–B4, C2 | Segmentado 3 estados | Low / Medio / High | `PolyDetail`: MISMO asset en 3 densidades (silueta → facetado → suave+wire), activo resaltado | Chip nivel sincronizado (Low↔XS/S, High↔XL) |
| S3 | **Duración** ("¿De cuántos segundos…?") | A2 | Slider continuo con snap | 2–90 s | `ImageSequence` turntable: frames que rotan más lentamente a mayor duración; marcas XS(2–3)/S(10)/M(30)/L(60)/XL(90) | Duración legible + chip nivel + nota "micro-loop" si ≤3 s |
| S4 | **Cantidad / lote** ("¿Cuántas unidades…?") | A2-pack, F1 lote, PK-MICRO-LOOP | Stepper −/+ | según servicio | Contador grande + **precio marginal**: "+cada unidad ≈ $X–$Y" | Total recalculado; descuento lote visible como línea propia |
| S5 | **Organicidad de piezas** *(rúbrica)* | asset/datos/render | 3 cards seleccionables (NO slider) | Recta / Curva / Orgánica | `ChoiceCards` con mini-ilustración por clase | Chip nivel si delta=+1 |
| S6 | **Acabado visual** *(rúbrica)* | render/asset/vfx | 3 cards | Viewport / Marketing / Close-up hero | Ídem | Ídem (−1 habilita XS) |
| S7 | **Target técnico** *(rúbrica)* | web/asset | Toggle 2 opciones | Desktop estándar / Móvil exigente | Icono perf + nota "sube solo QA/perf" | Nota en resumen |
| S8 | **Urgencia** | todos | Segmentado 3 | Ninguna / <72 h (+25 %) / <24 h (+50 %) | Semáforo (verde/ámbar/rojo) + aviso disponibilidad; crítico DESHABILITADO con explicación en servicios con discovery | Descuento/recargo como línea propia |
| S9 | **Moneda** | global | Segmentado persistente | USD / COP | Bandera-less: códigos claros; COP muestra nota "mercado nacional" la primera vez | Todo el cotizador recalcula |

**Regla de oro de sliders:** el ayudante visual representa el EXTREMO hacia el que se mueve el usuario
(más piezas = drone más cargado; más detalle = malla más densa). Nunca decorativo: debe cambiar SIEMPRE
que cambia el valor.

## 4. Matriz de ayudas visuales — qué tecnología ahora vs diseño

| Ayuda | Ahora (UX implementada) | Fase diseño (agente de diseño) |
|---|---|---|
| Drone por capas (S1) | ✅ SVG vectorial por grupos con transición | Ilustración refinada / iconset de marca |
| Detalle poligonal (S2) | ✅ SVG tri-estado interactivo | Reemplazo por renders reales low/mid/high del demo drone |
| Turntable duración (S3) | ✅ Secuencia genérica crossfade (frames placeholder generados) | Strip real de renders del producto demo (doc-33) |
| **Modelo 3D básico** | 🔶 `Model3DFrame`: marco honesto "demo 3D por producir" con spec lista para `<model-viewer>` (CDN requiere aprobación — ticket) | Integrar `<model-viewer>` + assets GLB del sprint doc-33; conectar slider→camera/orbit |
| Cards orgánico/acabado (S5/S6) | ✅ Cards con pictograma SVG simple | Fotografía/ilustración final |

## 5. Arquitectura de decisión (flujo)

```
Entry ──► [A] Presets ──► Config preset ──┐
      ├──► [B] Desde cero (wizard 5 pasos, 1 decisión/pantalla):
      │      1 Goal (6 chips) ──► 2 Service (cards de familia sugerida)
      │      ──► 3 Configure (S1–S7 según ficha + rúbrica como preguntas)
      │      ──► 4 Context (S8 urgencia + lote + moneda ya global)
      │      ──► 5 Summary
      └──► [C] Catálogo experto (colapsado por defecto)
QuotePanel persistente (P8) en A-config/B3+ y Summary completo.
```

Gating: "Siguiente" deshabilitado solo cuando falta una decisión OBLIGATORIA (nunca por campos
opcionales). Progreso: "Paso X de 4" + barra. Back siempre disponible sin pérdida de estado.

## 6. Microcopy (reglas)

- Sliders formulados como **pregunta directa** + unidad humana: "¿Cuántos modelos necesitas convertir?".
- Término técnico solo dentro de tooltip (`title`) o drawer de trazabilidad.
- Todo rango acompañado del disclaimer fijo; cifras SIEMPRE formateadas Intl según moneda.
- Modificadores nunca ocultos: aparecen como línea "original → modificador → final".

## 7. Implementación (hecho en este ciclo)

| Pieza | Archivo |
|---|---|
| Specs de controles por servicio + copy humanizado + preguntas de rúbrica | `src/lib/services/ux.ts` |
| SmartSlider (P4/P5), Segmented, ChoiceCards, Stepper marginal | `src/components/services/controls/*` |
| PolyDetail tri-estado, ImageSequence crossfade, Model3DFrame F2-ready | `src/components/services/visuals/*` |
| Wizard separado Goal→Service→Configure→Context (+progreso y gating) | `src/components/services/steps/wizard/*` |
| QuotePanel agrupado por componente con labels humanos | `src/components/services/panels/QuotePanel.tsx` |

## 8. Delegado al AGENTE DE DISEÑO (fuera de mi alcance UX)

1. Sistema visual: paleta/tipografía final, logo, ilustración de cards, estados hover/focus estilizados.
   Único requisito: contraste AA y legibilidad (hoy garantizado con neutros).
2. Assets demo REALES para sustituir placeholders (drone low/high, turntable strip): sprint doc-33.
3. Integración `<model-viewer>` para S1/S2 en fase 3 (requiere aprobar script CDN — ticket a AG-CORE).
4. Micro-interacciones premium (spring physics, parallax ligero) — opcional, sin sacrificar P4.
5. Responsive fino >1080 px y pruebas de contraste con herramientas automáticas.
