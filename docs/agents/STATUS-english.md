# STATUS — AG-EN (Inglés Profesional) · Ciclo 1 Completo

> Rama `agent/english` · 2026-08-25 · Plan Maestro OS (AG-EN)
> Verificación al corte: `npx astro check` **0 errores** · `npm test` **278/278 tests verdes** (30 test suites) · árbol limpio

---

## 🚀 Entregado (Ciclo 1 — Integración de Inglés Técnico y de Negocio)

| # | Tarea | Componentes / Datasets | Commit |
|---|---|---|---|
| T1 | Glosario Técnico EN | `src/data/languages/english/vocabulary.ts` (128 términos en 4 categorías: Real-Time, 3D, Web, AI) + suite de validación `englishVocabulary.test.ts` | `ad0a1cd` |
| T2 | Escenarios & Precisión | `src/data/languages/english/scenarios.ts` (8 escenarios ágiles + 3 STAR) + `precision.ts` (collocations, phrasals, falsos amigos) + suite `englishScenariosAndPrecision.test.ts` | `b3a12cd` |
| T3 | Expansión englishCourse | `src/data/languages/englishCourse.ts` (4 unidades estructuradas, lecciones originales `les-en-1` y `les-en-2` preservadas §0.9) + suite `englishCourse.test.ts` | `87b8454` |
| T4-T5 | UI & Motor SR SM-2 | `SpeakingPracticeEN.tsx` (Web Speech API + fallback texto) + `EnglishCourseView.tsx` (consumo de `vocabularyStore.ts` con SM-2, racha y lecciones) + `english.astro` | `18b4e55` |
| T6 | RAG English v4.0.0 | `rag/english/` (manifest + fuentes `internal-curated-en.md` y `interview-answer-bank-doc23.md`) $\to$ `rag/english.json` (7 chunks) + `rag/index.json` (9 dominios) | `5470a58` |
| T7 | Verificación & Cierre | `docs/agents/STATUS-english.md` + validación completa `astro check` (0 errores) y `npm test` (278/278 verdes) | `[este commit]` |

---

## 📐 Consumo del Motor Spaced Repetition (SM-2)

1. **Catálogo de Tarjetas:**
   - 128 términos técnicos en inglés exportados en `englishTechnicalVocabulary` con `language: 'en'`.
   - Se inyecta directamente a `VocabularySession`: `<VocabularySession language="en" catalogItems={englishTechnicalVocabulary} />`.
   - Integrado en `initialVocabulary` en `src/data/languages/vocabulary.ts`.

2. **Persistencia & Racha:**
   - El store `useVocabularyStore` persiste de forma desacoplada el progreso bajo `byLanguage.en`.
   - La racha real se calcula dinámicamente con `computeStreakDays(activityDates)` sin valores artificiales.

3. **Speaking & Simulación Oral:**
   - `SpeakingPracticeEN.tsx` utiliza Web Speech API para reconocimiento de voz en navegador y `speechSynthesis` (voz nativa `en-US`, rate 0.92) para modelar pronunciación.
   - Evaluación inteligente de coincidencia léxica contra palabras clave del escenario / STAR.

---

## 📊 Volúmenes del Dominio English

- **Términos Técnicos:** 128 (64 B2, 64 C1).
- **Escenarios de Negocio:** 8 (Standup, Sprint Planning, Code Review, Disagreeing, Architecture, Video Calls, Small Talk, Salary Negotiation).
- **Respuestas STAR Técnicas:** 3 (WebGL 60 FPS Optimization, CAD-to-Realtime Pipeline, ARA Framework Automation) con citas a `doc-23`.
- **Precisión C1:** 10 Collocations técnicas, 10 Phrasal Verbs, 8 Pares Formal/Informal, 8 Falsos Amigos ES $\to$ EN.
- **Unidades del Curso:** 4 unidades temáticas con 12 lecciones activas.
- **Base RAG:** 7 chunks citados en `rag/english.json`.

---

## 🧪 Validación Final de Integridad

```
NODE_OPTIONS="--max-old-space-size=8192" npx astro check
  Result (427 files): 0 errors, 0 warnings, 50 hints

npx vitest run
  Test Files: 30 passed (30)
  Tests: 278 passed (278)
```
