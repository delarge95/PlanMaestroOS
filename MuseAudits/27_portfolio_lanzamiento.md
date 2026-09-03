# 27 — Portfolio público y lanzamiento

> Estado: estructura 85%, contenido 30%. Bloqueadores con nombre: 7 placeholders en
> `links.ts` (`[EMAIL],[CV_PDF_URL],[PORTFOLIO_URL],[GITHUB_URL],[DEMO_VIDEO_URL],
> [ARTSTATION_HUMAN_BREAKDOWN_URL],[ARA_GITHUB_URL]`), 8 `cvPendingConfirmations`,
> 0 renders/fotos/video real (solo SVG), `CotizadorRedesign` expone 8/28 servicios,
> rate cards triples sin decidir, `derivarTier` fraccional sin redondear.

## 27.1 Desbloqueo (orden)

1. E1: mensaje único al usuario con las 15 confirmaciones (7 links + 8 CV) — no 15 tickets.
2. E2: media TwinSight real (capturas WebGL + demo viva verificada) + video plan 21B.
3. E3: rate card única (enterrar 2 de 3) + `derivarTier` con redondeo + `quoteSummary`
   con bundle/pago/rondas ya decididos (+30/+50 urgencia, 2⇒−5% 3+⇒−10%).
4. E4: cotizador expone catálogo completo o declara qué 8 y por qué (hoy 8/28 sin criterio
   visible) + `galleryManifest` + email OK.
5. E5: launch doc-36 paso a paso (10 pasos con `requiresAssetIds`: sin assets no avanza).

## 27.2 Deuda que infla el build

`public/library/fitness/*.pdf` (~150MB) → descarga bajo demanda (no en `public/`);
`public/index.html` huérfano fuera; `_attic/borrador_01`, `28D (1).md`,
`.worktrees/services-deploy/` eliminados; GLB (HolyBro 11.6MB, yunque 5.9MB) con
lazy-load + `dpr` capado.
