# Servicios freelance — Catálogo, estimación y pricing (dominio AG-SERV)

> Dominio: definir QUÉ se vende, CUÁNTO tiempo toma por nivel de complejidad y CUÁNTO cuesta,
> con trazabilidad total. Base del estimador interno (fase 1) y de la web pública de rangos (fase futura).

## Índice documental

| Doc | Contenido |
|---|---|
| [`00_METODOLOGIA.md`](./00_METODOLOGIA.md) | Anclas salariales (doc-03), rate card v1, escala S/M/L/XL, fórmula de estimación, políticas comerciales |
| [`01_render_3d.md`](./01_render_3d.md) | Familia REND: render estático y animación offline |
| [`02_assets_realtime_webgl.md`](./02_assets_realtime_webgl.md) | Familia ASRT: assets tiempo real (estáticos/animados × interactivos, shaders, mecánicas) |
| [`03_integracion_web_3d.md`](./03_integracion_web_3d.md) | Familias WEB (integración three.js/Babylon/Unity/embeds) y EXP (scrollytelling, minijuegos, catálogos, presentaciones) |
| [`04_ia_automatizacion.md`](./04_ia_automatizacion.md) | Familia IA: integración en sitios (directa/indirecta) y automatización interna |
| [`05_vfx_compositing.md`](./05_vfx_compositing.md) | Familia VFX: 3D sobre footage real y simulaciones FX |
| [`06_cad_texturas_pipeline.md`](./06_cad_texturas_pipeline.md) | Familias CAD (conversión a WebGL ready) y TEX (texturas/mapas) |
| [`07_transversales_retainers.md`](./07_transversales_retainers.md) | Familia TRA: consultoría, auditorías, performance rescue, retainers, bundles |

## Fuente determinista

El espejo TypeScript vive en `src/data/services/` (`types.ts` contratos, `rateCard.ts` tarifas v1).
**Si este catálogo y el código divergen, gana el código** (principio núcleo determinista del plan §0.1);
el markdown es especificación legible y registro de derivación.

## Reglas de lectura

1. Toda subtarea tiene clase tarifaria (`ART`/`RT`/`AI`/`TL`) y horas por tier aplicable.
2. Precio publicado = `Σ(horas × tarifa_clase)` con redondeo comercial (ver metodología §5).
3. Paquetes combinados se publican como **suma de partes redondeadas** (trazabilidad pieza a pieza),
   luego descuento de bundle si aplica.
4. Cada servicio declara exclusiones y drivers de variación — son la materia prima de los
   sliders de la web futura (ej.: drone CAD de 8 piezas → 120 piezas).
