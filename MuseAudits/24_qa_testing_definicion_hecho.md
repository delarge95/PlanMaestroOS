# 24 — QA, testing y definición de hecho

> Estado: 46 tests (0 en worker), `qa.mjs` sin script npm auditando solo portfolio
> (11 rutas, 0 de `/app`), validadores fitness fuera de `ci` salvo 1, `set:html` sin auditar.

## 24.1 Cierres (encargos)

- E1: `qa.mjs` → 39 rutas `/app` + `/cotizador`, 2 viewports, más chequeo `set:html`
  con datos externos y rutas GLB con `base`. Script npm `qa:app`. Falla en CI si overflow,
  h1 ausente, link roto o placeholder no declarado.
- E2: primeros tests worker (contrato 22: timeout, parse, whitelist, auth sin key).
  Gate: `worker/` con cobertura en `ci`.
- E3: `validateGraph.ts` (archivo 16) + `validate-vocabulary.ts` entran a `ci`.
  `ci` final: `validate:fitness + validate:graph + test + astro check + qa:app`.
- E4: `EVIDENCE_TEMPLATE.md` por dominio y fase (capturas desktop+móvil + teclado +
  comandos pegados). Sin evidencia no hay merge a main.

## 24.2 Definición de hecho (global, pegar en cada ENCARGO)

1. `npm run ci` verde. 2. `astro check` 0 errores. 3. Smoke de la ruta en 4321 con
   captura. 4. Nav actualizada si hay ruta nueva. 5. Sin secretos en diff
   (`grep AIza|ghp_|notion_`). 6. Ownership respetado (diff solo en dominio).
   7. Handoff actualizado (`STATUS-*.md` + este cerebro si cambia un contrato).
