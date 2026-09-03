# 30 — Fusión Muse × Gemini: qué adopto, qué rechazo, qué mejoro

> Leídos los 14 archivos de `E:\Laboral\GeminiAudits\` (00-13) y verificados sus claims
> contra el código (vitest 46f/483t verde, 8 GLB, `ragEngine.ts` keyword, sin Dexie,
> sin `Courses 2025.xlsx` en disco, `master_rag_dataset.json` 1.27MB con import estático).
> Veredicto: **auditorías convergentes en diagnóstico, complementarias en remedio**.
> Gemini aporta infraestructura (OOM, backup, cifrado, plata TDAH); Muse aporta fidelidad
> a contratos reales. La fusión vive en `MuseAudits/impl/` (código drop-in, nada fuera se toca).

## 30.1 ADOPTO (pasa a `impl/` con crédito Gemini)

| # | Aporte Gemini | Dónde vive ahora |
|---|---|---|
| G1 | OOM TSServer por JSONs gigantes + carga dinámica | `impl/rag/largeJsonLoader.ts` + regla CI (§30.3) |
| G2 | `backupService.ts` (snapshot auto tras sesión/postulación) | `impl/sync/backupService.ts` |
| G3 | `worktrees:sync` (drift 14 ramas) | `impl/qa/worktreesSync.mjs` |
| G4 | Render WebGL on-demand (batería/thermal) | `impl/bridges/webglOnDemand.ts` |
| G5 | Caducidad vacantes 72h/7d + `liveJobFeed` | `impl/career/jobFeed.ts` |
| G6 | Calibración RPE (AMRAP 4 semanas) | `impl/rules/rpeCalibration.ts` (regla seed) |
| G7 | Modo offline absoluto (fuentes locales, PWA) | checklist `24` + `impl/qa/qaApp.mjs` (chequeo remotos) |
| G8 | `SecureLocalStore` PBKDF2→AES-GCM | `impl/security/secureStorage.ts` **con fix base64 por chunks (el suyo revienta stack en payloads grandes)** |
| G9 | Matriz gobernanza dominio×destino | `impl/security/dataMatrix.ts` (como código ejecutable) |
| G10 | Jerarquía evidencia + matriz especialidad (Low/Nippard/Horschig) | `impl/rules/evidence.ts` |
| G11 | Árbol triaje traumático/gradual → tejido | fusionado en `impl/injury/triage.ts` (primera pasada) + mi flujo EVA/red-flags |
| G12 | HSR/isométricos 70% MVC, MEV 1 serie, morning briefing | `impl/injury/lesionRules.ts`, `impl/bridges/minViable.ts`, `impl/bridges/morningBriefing.ts` |
| G13 | ROI cursos = Σdemanda×brecha/horas | `impl/career/courseROI.ts` |
| G14 | Pre-commit hook anti-secretos | `impl/qa/antiSecret.mjs` |
| G15 | Segregación rutas públicas/privadas en deploy | añadido como ADR-9 en `15` (abajo §30.4) |
| G16 | Sinónimos anatómicos para búsqueda (BM25+syn) | `impl/rag/synonyms.ts` (híbrido keyword+sinónimos; ver §30.2.3) |

## 30.2 RECHAZO / CORRIJO (con evidencia)

1. **"Dexie.js"** — `package.json` no lo trae; el KV es `createKvStore` propio
   (`src/lib/storage/idb.ts`). Todo claim sobre Dexie se ignora.
2. **"9 modelos GLB"** — son 8 (`public/models/anatomy/*.glb` listados). Cualquier
   cómputo de memoria parte de 8.
3. **"RAG BM25"** — `src/data/ragEngine.ts` es `includes` con pesos título×5/desc×2,
   legacy sobre `rag_index.json`, ajeno al RAG v4. La mejora real es el híbrido
   keyword+sinónimos (`impl/rag/`), no "re-rankear un BM25" que no existe.
4. **"No hay modo guiado"** (doc 10 #06) — `GuidedSessionRunner.tsx` (384L, B9) existe
   y guarda historial. El hueco real es otro: el snapshot solo se copia a mano (`21`).
5. **"Career usa fixtures mock"** — matiz: `careerStore` + seeds reales existen y la UI
   los usa; el MOCK vive en `careerServiceAdapter.ts` paralelo. El fix es borrar el
   paralelo, no "crear la BD" (`19 §19.1`).
6. **Interfaces inventadas**: su `DomainRule` (`messages.optimal/warning/violation`,
   `week{totalHardSets…}`, `todayPain`) y sus eventos (`WORKOUT_LOGGED`…) **no coinciden
   con el código** (`RuleEvaluation`, `RuleStatus`, 20 `AppEventType` reales). `impl/`
   usa SIEMPRE los contratos reales del archivo 14.
7. **⛔ Datos personales inventados en `cvComposer`** (`contact@alexwoodcock.dev`,
   linkedin/github URLs, "B.S. Multimedia — UNAD", métricas "2.4M→180k", "60 FPS",
   "−65%"): violación directa anti-slop + doc-01. `impl/career/composeVariant.ts`
   usa placeholders + `cvPendingConfirmations`. **Nada de Gemini-13 §3 se copia tal cual.**
8. **`clinicalHypothesis`** como nombre de campo — enmarca diagnóstico. Renombrado a
   `functionalHypothesis` + disclaimer obligatorio en `impl/injury/triage.ts`.
9. **"157 cursos / `Courses 2025.xlsx`"** — el xlsx no existe en disco (solo doc 06).
   `courseROI.ts` funciona con cualquier inventario; el número 157 queda como
   `placeholder` hasta que el archivo aparezca.
10. **72% vs 45-50%**: reconciliado — 72% ≈ estructura que compila; ~45-50% ≈ bucle
    diario vivo (wiring). `impl/` cierra el segundo, no discute el primero.

## 30.3 Regla CI nueva (de G1, concreta)

Ningún `.json` >500KB importado estáticamente en `src/` (solo `fetch`/`fs` + tipos
explícitos). Afecta hoy a: `src/data/master_rag_dataset.json` (1.27MB, vía
`src/pages/api/doc/[id].json.ts`), `rag/career.json` (1.39MB), `rag/anatomy.json`.
`impl/qa/antiSecret.mjs` incluye el chequeo `no-giant-json-import` (mismo script, §24).

## 30.4 ADR-9 (nuevo, de G15)

**Segregación pública/privada**: `src/pages/**` (portafolio) = público desplegable;
`src/pages/app/**` = privado local-first. Si `app/` se sirve en web, tras token
básico o `robots noindex` + sin DERs clínicos en HTML prerenderizado. Ratificación
del usuario junto a ADR-1..8.
