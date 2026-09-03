# 41 — Checklists de lanzamiento (PWA, accesibilidad, performance, release, rollback)

> Fuentes: `24_qa_testing_definicion_hecho.md` (qa:app 39 rutas, ci final, DoD global),
> `06_diseno_ux_tdah.md` (design system, 375px, teclado, reduced-motion, visor 3D),
> `27_portfolio_lanzamiento.md` (15 confirmaciones, rate card única, deuda de build).
> Uso: ninguna checklist se marca verde por inspección visual. Cada ítem exige el
> comando o captura de la columna "cómo verificar" + evidencia en `EVIDENCE_TEMPLATE`
> (doc-24 E4: capturas desktop+móvil + teclado + comandos pegados). Sin evidencia
> no hay merge a main.

## Aviso previo: el "doc-36 launch" no existe en MuseAudits

- El doc-27 §27.1 E5 cita un "launch doc-36 paso a paso (10 pasos con
  `requiresAssetIds`)". En `MuseAudits/` el archivo `36_*` es la matriz
  diferencial clínica, no un documento de lanzamiento.
- Criterio aplicado: la checklist (4) reconstruye los 10 pasos desde el
  desbloqueo del doc-27 §27.1 (E1–E5) + la DoD global del doc-24 §24.2, y cada
  paso declara su evidencia exigida (que es lo que el `requiresAssetIds` pedía:
  sin assets no avanza).
- Si aparece el doc-36-launch original en `docs/roadmap/`, prevalece su texto y
  esta checklist se re-mapea fila a fila contra él.

## Cómo se usan estas 5 checklists (leer antes de marcar nada)

1. Orden de ejecución: (3) performance → (1) PWA → (2) accesibilidad → (4) release → (5) rollback listo.
2. Puerta de merge: `npm run ci` verde con el ci final del doc-24 E3
   (`validate:fitness + validate:graph + test + astro check + qa:app`).
3. Todo fallo en `qa:app` (overflow, h1 ausente, link roto, placeholder no
   declarado) bloquea el release aunque el resto esté verde (doc-24 E1).
4. Responsable por checklist: una sola persona firma cada tabla completa.
5. Re-verificación: si un merge toca Hoy, se repite el smoke de la checklist (5)
   aunque las otras 4 ya estuvieran verdes.

---

## (1) PWA — manifest, service worker, offline, instalable, update-flow

> Estado de partida (doc-27 §27.2): GLB pesados (HolyBro 11.6MB, yunque 5.9MB),
> PDFs de ~150MB en `public/`, `public/index.html` huérfano. Nada de eso puede
> ir al precache del service worker.

| ID | Ítem | Cómo verificar | Umbral / pass |
|----|------|----------------|---------------|
| PWA-01 | Manifest válido y enlazado | Abrir `/manifest.webmanifest`, validar con DevTools → Application → Manifest (0 errores) | 0 errores; `name`, `short_name`, `start_url: /app`, `display: standalone`, `theme_color`, `background_color`, iconos 192 + 512 (maskable) presentes |
| PWA-02 | Iconos instalables reales | Comprobar que cada icono del manifest devuelve 200 y es PNG válido (no SVG renombrado) | Todos 200; 192px y 512px exactos; maskable con safe-zone |
| PWA-03 | Service worker registrado con scope `/` | DevTools → Application → Service Workers; `navigator.serviceWorker.controller` no nulo en `/app` | SW activo + `controller` set en primera carga tras instalación |
| PWA-04 | App shell offline: Hoy renderiza sin red | DevTools → Network → Offline → recargar `/app` (Hoy) | Hoy + Top3 + Bloques A/B visibles offline; 0 pantalla en blanco |
| PWA-05 | Offline: rutas `/app` críticas cacheadas | Con SW instalado, pasar a offline y navegar Hoy → Fitness-hoy → Laboral-hoy → Idiomas-hoy | Las 4 renderizan contenido cacheado o `UnavailableCard` (doc-06 hueco 1); ninguna rompe el shell |
| PWA-06 | Offline: qué se cachea está declarado | Leer la lista de precache/runtime del SW y compararla con §1.1 | Coincide al 100% con la tabla §1.1; ningún GLB/PDF/vídeo en precache |
| PWA-07 | GLB y PDFs NUNCA en precache | Buscar en el código del SW las URLs de `HolyBro`, `yunque`, `public/library/fitness/*.pdf` | 0 coincidencias en precache; solo runtime-cache bajo demanda o nada |
| PWA-08 | Instalable (criterio Chrome) | Lighthouse → PWA o `beforeinstallprompt` disparado en Android/Chrome desktop | Prompt instalable OK; sin warnings de manifest/SW |
| PWA-09 | Update-flow: versión nueva avisa, no pisa la sesión | Desplegar bump de versión con `/app` abierto en Hoy; observar banner/toast | Banner "Nueva versión disponible → Recargar" visible; la sesión actual de Hoy sigue usable hasta recargar |
| PWA-10 | Update-flow: SW viejo no sirve Hoy roto | Tras update, recargar y comprobar Hoy + smoke doc-24 §24.2 punto 3 | Hoy OK tras 1 recarga; `skipWaiting + clients.claim` solo con confirmación del usuario |
| PWA-11 | Fallback offline diseñado (no error crudo) | Sin red, abrir dominio sin datos / sin worker (`501 sin clave`) | Se ve `UnavailableCard {qué falta, qué sigue funcionando, 1 acción}` (doc-06 hueco 1), nunca stacktrace ni blanco |
| PWA-12 | `public/index.html` huérfano eliminado o redirigido | `grep` de `public/index.html` + navegar `/index.html` | Archivo fuera de `public/` (doc-27 §27.2) o redirect a `/`; no compite con el shell |

### 1.1 Matriz offline: qué se cachea y qué no

| Recurso | Estrategia | Por qué |
|---------|-----------|---------|
| Shell `/app`, CSS (`designSystem.css`, `tokens.css`), JS del shell | Precache (install) | Sin esto no hay offline total |
| Iconos manifest, splash | Precache | Instalable exige disponibilidad local |
| Fuentes | Runtime-cache con `display=swap` + fallback sistema | Bloquean render si van por red sin fallback |
| JSONs de contenido (grafo, vocabulario, fitness) | Runtime-cache tras primera lectura, revalidados | Doc-24 E3: validadores en ci, pero en cliente son datos, no shell |
| GLB (HolyBro 11.6MB, yunque 5.9MB) | Lazy bajo demanda, JAMÁS precache | Doc-27 §27.2: lazy-load obligatorio |
| `public/library/fitness/*.pdf` (~150MB) | Nada (descarga explícita fuera de `public/`) | Doc-27 §27.2: no pertenecen al build |
| Video demo portfolio | Nada (streaming/enlace) | No bloquear instalable con media |
| Worker IA / Gemini / `set:html` externo / Notion sync | Network-only con `UnavailableCard` | Sin red no hay IA: se declara, no se finge (doc-06 hueco 1) |

```bash
# Comandos PWA (pegar salida en la evidencia)
npx lighthouse http://127.0.0.1:4321/app --only-categories=pwa --view
grep -rniE "HolyBro|yunque|\.glb|\.pdf" src/service-worker* public/manifest* 2>/dev/null
test-path public/index.html  # debe NO existir (doc-27 §27.2)
```

---

## (2) Accesibilidad — foco, teclado, contraste, reduced-motion, 375px, lector

> Sube a `ci` lo que el doc-06 dejaba solo en evidence template: foco visible +
> `prefers-reduced-motion` completo (incluido visor 3D). Cobertura: las 39 `/app`
> (doc-24 E1), no solo las 11 públicas.

| ID | Ítem | Cómo verificar | Umbral / pass |
|----|------|----------------|---------------|
| A11Y-01 | Foco visible en todo interactivo | Tab por Hoy completa; inspeccionar `:focus-visible` en botones, chips, links, cards | 100% de controles con anillo/outline visible; 0 focos invisibles |
| A11Y-02 | Teclado completo por vista: Tab entra, recorre y sale sin trampas | En cada una de las 39 `/app`: Tab desde el header hasta el footer sin atascos | 0 trampas de foco; orden lógico; skip-link a contenido si hay nav larga |
| A11Y-03 | Enter/Space activan, Escape cierra/retrocede | En modales, ver-más-tarde, stats detalladas, visor 3D: Enter abre, Escape cierra y devuelve el foco | Escape siempre cierra y restaura foco al invocador; 0 diálogos sin salida de teclado |
| A11Y-04 | Contraste AA en texto y UI TDAH | Medir con DevTools/axe los pares texto/fondo de `tokens.css` + estados `Bien/Repasar` | Texto normal ≥ 4.5:1, texto grande ≥ 3:1, componentes UI ≥ 3:1 |
| A11Y-05 | Sin rojo punitivo ni lenguaje de culpa | `grep -rniE "deberías|fallaste|castigo|streak" src/pages/app` + revisión visual de errores | 0 mensajes de culpa; errores en tono neutro + 1 acción (doc-06 tono clínico) |
| A11Y-06 | `prefers-reduced-motion` global | SO con reduced-motion ON → recorrer Hoy + transiciones (`siteAnimations.ts`) | 0 animaciones no esenciales; transiciones instantáneas o `none` |
| A11Y-07 | Reduced-motion en visor 3D | Con reduced-motion ON: abrir visor anatomy (1380 piezas móvil, doc-06 hueco 5) | Sin auto-rotación ni animación de cámara; render estático + controles manuales |
| A11Y-08 | 375px sin overflow en las 39 `/app` | `npm run qa:app` con viewport 375px (doc-24 E1 + doc-06 hueco 4) | 0 rutas con scroll horizontal; `qa:app` verde en 375 y desktop |
| A11Y-09 | Sin `overflowY/maxHeight` tramposos que esconden contenido | `grep -rn "overflowY\|maxHeight" src/pages/app` y revisar cada hit a 375px | Cada hit justificado (lista con scroll interno accesible por teclado) o eliminado |
| A11Y-10 | Lector de pantalla: sliders e inputs con label | NVDA/VoiceOver en vistas con sliders (fitness, hoy, cotizador): cada control anuncia nombre + valor | 100% `label`/`aria-label` + `aria-valuenow`/texto; 0 sliders mudos |
| A11Y-11 | Imágenes y piezas 3D con alternativa textual | Lector en visor anatomy + cards con SVG/media | Toda figura informa qué es; decorativas con `aria-hidden="true"` |
| A11Y-12 | Un solo h1 por ruta + jerarquía intacta | `qa:app` chequeo h1 (doc-24 E1) en las 39 `/app` | 1 h1 por ruta; sin saltos h1→h4 |
| A11Y-13 | Estados vacíos/error/offline anunciados al lector | Lector en `UnavailableCard` y `En construcción` (doc-06 huecos 1 y 3) | Estado anunciado como región/alerta con la acción accesible por teclado |
| A11Y-14 | Inline styles bajo control (no rompen temas/contraste) | `grep -r "style=" src/pages/app \| measure` vs umbral del ENCARGO design-audit | Bajo el umbral fijado en design-audit y tendiendo a 0; tokenizado en `ds-*` |

```bash
# Comandos a11y (pegar salida en la evidencia)
npm run qa:app            # 39 /app + /cotizador, 2 viewports, h1 + overflow (docs 24/06)
npx axe http://127.0.0.1:4321/app --tags wcag2aa
grep -rniE "deberías|fallaste|¡Vamos!|DÃ©ficit" src/pages/app | head -20  # debe dar 0 (doc-06)
```

---

## (3) Performance — presupuesto, GLB, dpr, JSONs, imágenes, sin bloqueantes

> Riesgo #1 declarado (doc-06 hueco 5): 1380 piezas en móvil. El presupuesto
> existe para que el visor 3D no se coma el lanzamiento.

### 3.0 Presupuesto (local, `http://127.0.0.1:4321`, Moto G4 / 4G simulado)

| Métrica | Umbral local | Se mide en |
|---------|-------------|------------|
| FCP Hoy | ≤ 1.8 s | Lighthouse local, Hoy fría |
| LCP Hoy (sin 3D) | ≤ 2.5 s | Lighthouse local |
| TTI Hoy | ≤ 3.5 s | Lighthouse local |
| Peso JS inicial `/app` (sin 3D) | ≤ 250 KB gzip | Coverage + bundle analyzer |
| GLB inicial en Hoy | 0 bytes (prohibido) | Network, carga fría |
| CLS | ≤ 0.1 | Lighthouse, desktop + 375px |

| ID | Ítem | Cómo verificar | Umbral / pass |
|----|------|----------------|---------------|
| PERF-01 | FCP local dentro de presupuesto | `lighthouse http://127.0.0.1:4321/app` 3 corridas, mediana | Mediana FCP ≤ 1.8 s; LCP ≤ 2.5 s; CLS ≤ 0.1 |
| PERF-02 | GLB lazy + dispose (HolyBro 11.6MB, yunque 5.9MB) | Network: carga fría de Hoy → 0 `.glb`; abrir visor → carga bajo demanda; cerrar → `dispose()` libera GPU | 0 GLB en Hoy fría; al cerrar visor la memoria GPU vuelve a baseline (±10%) |
| PERF-03 | `dpr` capado + LOD/progresivo en visor | Leer config del renderer + probar en móvil 375px (doc-06 hueco 5) | `dpr ≤ 2` desktop, `≤ 1.5` móvil; LOD activo; descarga progresiva verificada en Network |
| PERF-04 | JSONs de datos fuera del bundle inicial | Coverage/bundle: grafo, vocabulario, fitness-library NO en chunk inicial; import dinámico | 0 JSONs de dominio > 50 KB en el JS inicial; `import()` bajo demanda |
| PERF-05 | Imágenes con tamaño declarado | `grep` de `<img` sin `width/height` o `aspect-ratio` en `/app` + Lighthouse CLS | 0 imágenes sin dimensiones; CLS ≤ 0.1 en 375px |
| PERF-06 | Sin asset remoto bloqueante | Network con throttling: 0 `<script>/<link>` remotos sin `async/defer/preconnect` que retrasen FCP | FCP con red simulada lenta dentro de presupuesto; fuentes con `display=swap` |
| PERF-07 | PDFs 150MB fuera del build servido | `du` de `public/` + comprobar que `public/library/fitness/*.pdf` ya no está en `public/` | `public/` sin PDFs; descarga bajo demanda (doc-27 §27.2) |
| PERF-08 | Basura de build eliminada | `test-path` de `_attic/borrador_01`, `28D (1).md`, `.worktrees/services-deploy`, `public/index.html` | Ninguno existe en el árbol de deploy (doc-27 §27.2) |
| PERF-09 | Animaciones no bloquean hilo principal en móvil | Performance trace en 375px con visor abierto (doc-06: `siteAnimations.ts` parcial) | Sin long-tasks > 200ms atribuibles a animación; con reduced-motion el trace es plano |
| PERF-10 | Presupuesto firmado por dominio pesado | Cada dominio con 3D/media adjunta su trace + peso en su evidencia (doc-24 E4) | Todos los dominios pesados ≤ presupuesto o con excepción firmada + plan |

```bash
# Comandos performance (pegar salida en la evidencia)
npx lighthouse http://127.0.0.1:4321/app --only-categories=performance --view
du -sh public/ 2>/dev/null; find public -name "*.pdf" | head  # debe dar 0 PDFs
grep -rn "devicePixelRatio\|setPixelRatio\|dpr" src/components/*3d* src/components/*viewer* src/pages/app 2>/dev/null | head -20
```

---

## (4) Release — 10 pasos launch + evidencias, 15 confirmaciones, rate card, links, video

### 4.0 Los 10 pasos (mapeados desde doc-27 §27.1 + DoD doc-24 §24.2)

| ID | Paso launch | Evidencia exigida (sin esto no avanza) | Pass |
|----|-------------|----------------------------------------|------|
| REL-01 | E1: mensaje ÚNICO al usuario con las 15 confirmaciones (no 15 tickets) | Copia del mensaje enviado + fecha; respuestas pegadas en §4.1 | 1 solo hilo; 15/15 respondidas |
| REL-02 | Cero placeholders en `links.ts` (los 7) | `grep -n "\[EMAIL\]\|\[CV_PDF_URL\]\|\[PORTFOLIO_URL\]\|\[GITHUB_URL\]\|\[DEMO_VIDEO_URL\]\|\[ARTSTATION_HUMAN_BREAKDOWN_URL\]\|\[ARA_GITHUB_URL\]"` → 0 hits + `qa:app` verde (placeholder no declarado = fail, doc-24 E1) | 0 placeholders; cada link abre 200 |
| REL-03 | 8 `cvPendingConfirmations` resueltas | Diff o captura del CV final por cada una de las 8 | 8/8 confirmadas por el usuario, 0 `pending` |
| REL-04 | Media TwinSight real: capturas WebGL + demo viva verificada | PNGs WebGL reales + URL demo viva + checklist de verificación de la demo (doc-27 E2) | 0 SVG-marcador; demo viva responde en 4321 |
| REL-05 | Video demo (plan 21B citado en doc-27 E2) | URL del vídeo + guion/plan 21B + captura de portada | Vídeo público, < 3 min, enlazado desde portfolio (no `[DEMO_VIDEO_URL]`) |
| REL-06 | Rate card ÚNICA + `derivarTier` redondeado + `quoteSummary` decidido | Diff que entierra 2 de 3 rate cards; test de `derivarTier` con redondeo; `quoteSummary` con bundle/pago/rondas (+30/+50 urgencia, 2⇒−5% 3+⇒−10%, doc-27 E3) | 1 sola rate card visible; tiers enteros; cotización reproducible |
| REL-07 | Cotizador: catálogo completo O criterio visible de qué 8/28 + `galleryManifest` + email OK | Captura del catálogo + texto del criterio (si 8/28) + `galleryManifest` válido + email de prueba recibido (doc-27 E4) | Sin servicios fantasma; email llega < 2 min |
| REL-08 | Deuda de build liquidada (doc-27 §27.2) | `ls`/`test-path` de cada ruta eliminada + `du public/` sin PDFs + PERF-07/PERF-08 verdes | 150MB fuera; huérfanos eliminados |
| REL-09 | `ci` final + `qa:app` + `astro check` verdes | Log completo de `npm run ci` (doc-24 E3) + `astro check` 0 errores + `qa:app` 39 rutas + `/cotizador` 2 viewports | Todo verde en main, mismo commit del tag |
| REL-10 | Tag + handoff + nav + demo de lanzamiento | Tag `vX.Y.Z`, `STATUS-*.md` actualizado, nav con rutas nuevas + smoke (DoD doc-24 puntos 3-4, 7), demo grabada | Tag firmado; handoff al día; link-checker verde (REL-12) |

### 4.1 Las 15 confirmaciones del usuario (doc-27: 7 links + 8 CV)

| # | Confirmación | Estado (pendiente / OK + fecha) |
|---|--------------|----------------------------------|
| CONF-01 | `[EMAIL]` real | |
| CONF-02 | `[CV_PDF_URL]` real | |
| CONF-03 | `[PORTFOLIO_URL]` real | |
| CONF-04 | `[GITHUB_URL]` real | |
| CONF-05 | `[DEMO_VIDEO_URL]` real (= REL-05) | |
| CONF-06 | `[ARTSTATION_HUMAN_BREAKDOWN_URL]` real | |
| CONF-07 | `[ARA_GITHUB_URL]` real | |
| CONF-08 | CV pendiente 1/8 | |
| CONF-09 | CV pendiente 2/8 | |
| CONF-10 | CV pendiente 3/8 | |
| CONF-11 | CV pendiente 4/8 | |
| CONF-12 | CV pendiente 5/8 | |
| CONF-13 | CV pendiente 6/8 | |
| CONF-14 | CV pendiente 7/8 | |
| CONF-15 | CV pendiente 8/8 | |

> Detalle de cada `cvPendingConfirmation` (qué dato falta y valor final aceptado)
> vive en el hilo de REL-01, no aquí. Esta tabla solo cuenta 15/15.

| ID | Ítem | Cómo verificar | Umbral / pass |
|----|------|----------------|---------------|
| REL-11 | Rate card única enterrando 2 de 3 (doc-27 E3) | Solo 1 rate card renderizada en portfolio + cotizador; `grep -rni "rate.?card" src` sin tríos activos | 1 visible; las otras 2 borradas o tras flag documentado |
| REL-12 | Link-checker verde (internos + 7 links + CV_PDF) | `qa:app` link-check + `curl -o /dev/null -w "%{http_code}"` por cada URL de CONF-01…07 | 0 rotos; todo 200/301; `set:html` externos declarados (doc-24 E1) |
| REL-13 | Video demo enlazado y reproducible | Abrir portfolio → play del vídeo en desktop + 375px | Reproduce con sonido opcional subtitulado; < 3 min |
| REL-14 | Puerta `requiresAssetIds`: paso sin asset no avanza | Revisar §4.0: todo REL con asset (media, links, CV, email) enlaza su evidencia | 0 pasos marcados OK sin evidencia adjunta |

```bash
# Comandos release (pegar salida en la evidencia)
grep -rn "\[EMAIL\]\|\[CV_PDF_URL\]\|\[PORTFOLIO_URL\]\|\[GITHUB_URL\]\|\[DEMO_VIDEO_URL\]\|\[ARTSTATION" src/config/links.ts
npm run ci && npx astro check  # 0 errores (doc-24 §24.2 puntos 1-2)
grep -rn "AIza\|ghp_\|notion_" --exclude-dir=node_modules --exclude-dir=.git src/ | head  # 0 (DoD punto 5)
```

---

## (5) Rollback — qué revertir si un merge rompe Hoy, cómo detectarlo, backups

> Hoy es la puerta única (doc-06: encabezado mínimo + Top3 + Bloques A/B). Si Hoy
> cae, no hay workaround por dominio: se revierte, no se parchea en caliente.

### 5.0 Detectar (smoke, < 5 min, doc-24 §24.2 punto 3)

| ID | Señal | Cómo detectar | Umbral de alarma |
|----|-------|---------------|------------------|
| RB-01 | Hoy no responde en 4321 | `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4321/app` | ≠ 200 → rollback inmediato |
| RB-02 | Hoy responde pero Top3/Bloques vacíos o en error | Smoke visual + `qa:app` de la ruta `/app` | Top3 ausente, `UnavailableCard` donde había datos, o h1 ausente → rollback |
| RB-03 | Overflow / layout roto solo en Hoy tras el merge | `qa:app` 2 viewports sobre `/app` | Cualquier overflow nuevo a 375px → revert del diff de estilos del merge |
| RB-04 | Worker/IA caído disfrazado de Hoy roto | Llamar al endpoint worker directo (contrato doc-22: timeout, parse, whitelist) | Si el worker falla pero Hoy local funciona → NO revert de Hoy; activar `UnavailableCard` + revert solo del dominio IA |

### 5.1 Qué revertir — orden inverso por dominio (último mergeado, primero revertido)

> Regla: se revierte en orden inverso al merge, dominio por dominio, y Hoy el
> último (es la base). Ownership respetado: el diff revertido no toca otros
> dominios (DoD doc-24 punto 6).

| Orden | Revertir | Por qué este orden | Verificación tras revertir |
|-------|----------|--------------------|----------------------------|
| 1.º | Dominio del merge sospechoso (fitness / career / idiomas / nutrition / anatomy / gastro…) | Es lo último que entró; probabilidad máxima de culpa | Smoke de ese dominio + `npm test` de su carpeta |
| 2.º | Capas compartidas que tocó el merge (`sectionNavConfig.ts`, `siteAnimations.ts`, design tokens) | Un token/nav roto simula "Hoy roto" en todas las rutas (doc-06 huecos 2, 4) | `qa:app` nav + 375px verdes |
| 3.º | Worker/sync (`worker/`, adapters Notion) si el merge los tocó | Un sync colgado deja Hoy sin datos (parece caída de Hoy, es caída de datos) | Contrato doc-22 verde; `UnavailableCard` solo donde toca |
| 4.º (último) | Hoy / `todayAdapter` / EventBus (doc-17) | Base de todo; revertirlo tumba los rituales y Top3 de todos los dominios | `curl /app` 200 + Top3 + captura desktop/móvil |

| ID | Ítem | Cómo verificar | Umbral / pass |
|----|------|----------------|---------------|
| RB-05 | Cada merge a main deja tag revertible | `git tag` post-merge `pre Release`/`post`; `git log --oneline -5` | Tag por merge; `git revert` limpio sin conflictos de ownership |
| RB-06 | Backups antes del release: código + datos locales + evidencias | Tag + copia de `STATUS-*.md` + `qa-screenshots/` del release anterior accesibles | Restauración ensayada 1 vez: del tag anterior a Hoy verde en < 15 min |
| RB-07 | Handoff post-rollback actualizado | `STATUS-*.md` + cerebro: qué se revirtió, por qué, qué queda bloqueado (DoD punto 7) | Handoff escrito antes de reintentar el merge |
| RB-08 | Prohibido re-merge sin causa raíz | El merge revertido vuelve solo con test que reproduzca RB-01…04 + evidencia | Test nuevo en `ci`; sin test no hay segundo intento |
| RB-09 | Datos de salud nunca salen en el backup/rollback | `grep` de secretos + regla doc-25: salud local-only | 0 secretos en el diff de revert; backup de salud solo local |
| RB-10 | Tiempo máximo de Hoy caído | Reloj desde RB-01 hasta Hoy verde post-revert | ≤ 30 min; si se supera, se congela todo merge no crítico 48 h |

```bash
# Comandos rollback (pegar salida en la evidencia)
curl -s -o NUL -w "%{http_code}" http://127.0.0.1:4321/app  # 200 o rollback
git log --oneline -5 && git tag --sort=-creatordate | head -5
git revert --no-commit <sha-del-merge> && git status --short  # solo dominio culpable
```

---

## Cierre — firma del lanzamiento

- [ ] (1) PWA: 12/12 verdes + matriz §1.1 firmada.
- [ ] (2) Accesibilidad: 14/14 verdes en las 39 `/app`, desktop + 375px.
- [ ] (3) Performance: presupuesto §3.0 cumplido + 10/10 verdes.
- [ ] (4) Release: 10 pasos con evidencia + 15/15 confirmaciones + rate card única + link-checker + video.
- [ ] (5) Rollback: tags + backups + smoke ensayado (< 15 min a Hoy verde).
- [ ] DoD global doc-24 §24.2 (7 puntos) pegada en el ENCARGO de release y cumplida.
- [ ] Firma: __________ Fecha: __________ Tag: __________.
