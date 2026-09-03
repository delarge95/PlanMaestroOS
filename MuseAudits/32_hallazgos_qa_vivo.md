# 32 — Hallazgos del QA vivo (primera corrida `qaApp`, 2026-09-04)

> Corrida contra `http://127.0.0.1:4321`: 52 rutas (13 públicas + 39 `/app`).
> Resultado: VERDE con 3 warns. Nada fuera de `MuseAudits/` fue modificado.

## Redirect-shells por diseño (no son bugs, pero la nav debe apuntar al destino real)

| Ruta | Destino real | Consecuencia |
|---|---|---|
| `/app/fitness/today` | Hoy-en-Fitness (wrapper) | `sectionNavConfig.fitness` NO debe listar `today` sino el destino final |
| `/app/fitness/catalog` | `/app/fitness/library/catalog` (meta-refresh) | idem `catalog`: apuntar a `library/catalog` |
| `/app/german` | legacy → `/app/languages/german` (verificar) | encargo E4: confirmar redirect o eliminar ruta |

## Regla derivada (añadida a `17 §17.4`)

Toda entrada de `SECTION_NAV` debe resolver a una ruta con `<h1>` (200 + h1),
jamás a un redirect-shell. `qaApp.mjs` lo verifica solo.

## Anti-secret

Corrida `antiSecret.mjs --all` (2026-09-04): VERDE (0 fallos). `.env` no está en git.
Re-correr en cada encargo (DoD `24 §24.2.5`).

## Link-checker sobre seeds (2026-09-04): 15/17 vivas, 2 corregidas

`linkChecker.mjs --seeds` detectó 2 careers 404 del doc-11, corregidas con fuente:
- Teravision Games: `teravisiongames.com/careers/` (404) → `teravisiongames.bamboohr.com/careers`
  (enlace "WORK WITH US" del about oficial). Intel: 4 roles abiertos engineering/remoto.
- Threekit: `threekit.com/company/careers` (404) → `threekit.com/careers`
  (board BambooHR + proceso de 3 pasos documentado: assessment → phone → interview).
Regla derivada: `linkChecker` corre semanal (job) y cualquier MUERTA abre ticket con
URL candidata + fuente, jamás se borra la empresa.

## ragAudit sobre JSON reales (2026-09-04): VERDE en calidad, rojo en volumen

`ragAudit.mjs`: 9 dominios, 0% sin-locator, 0 TODO-cita, 0 >1200, 0 duplicados.
El problema NO es calidad sino cobertura: english 9 chunks / german 12 chunks
(vs career 1647), y sin JSON `core` ni `gastronomy`. Encargo E7 ataca volumen,
no limpieza.
