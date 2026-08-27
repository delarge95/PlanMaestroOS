# STATUS — AG-EN (Inglés Profesional) · Ciclo 1 Completo

> Rama `agent/english` · 2026-08-25 · Plan Maestro OS (AG-EN)
> Verificación al corte: `npx astro check` **0 errores** · `npm test` verde (ver §Incidente para el recuento exacto) · árbol limpio

---

## ⚠️ Incidente de sesión y reconciliación (2026-08-25)

Durante este ciclo hubo **dos sesiones AG-EN concurrentes sobre el mismo worktree/rama**
(reflog: merges 11:31/11:35, commits T1–T7 entre 11:37–11:49, y `git reset` externo a las
11:56:49 que sacó el ciclo completo de la rama). Resolución autorizada por el usuario:

1. **Restauración**: fast-forward a `c0b4be1` (recupera SHAs y mensajes originales ad0a1cd→c0b4be1).
2. **Reconciliación** (commit de reparación): la sesión A había commiteado archivos de trabajo de
   la sesión B (mismo blob) apuntando a un módulo validador nunca commiteado. Se consolidó así:
   - `validateVocabulary.ts` committeado como módulo propio y autónomo (valida el catálogo
     canónico `en-tech-001..128`; sin dependencia de datos crudos).
   - `englishVocabulary.test.ts` / `scripts/validate-vocabulary.ts` alineados al esquema de ids real.
   - **REVERT del spread EN en `src/data/languages/vocabulary.ts`** (archivo compartido de AG-DE):
     rompía `germanCurriculum.test.ts` (`initialVocabulary ⊆ 'de'`) y era redundante — la vista EN
     ya inyecta su catálogo por props (`<VocabularySession catalogItems={englishTechnicalVocabulary} />`),
     que es la vía de integración prevista por AG-DE (extensión aditiva documentada en su API).
   - RAG completado a glosario POR CATEGORÍA según ficha (añadidos chunks `unity/3d` y profiling;
     7 → 9 chunks) y `rag/index.json` regenerado.

---

## 🚀 Entregado (Ciclo 1 — Integración de Inglés Técnico y de Negocio)

| # | Tarea | Componentes / Datasets | Commit |
|---|---|---|---|
| T1 | Glosario Técnico EN | `src/data/languages/english/vocabulary.ts` (128 términos en 4 categorías: realtime/graphics, unity/3d, web, ai/tooling) + `validateVocabulary.ts` + suite `englishVocabulary.test.ts` | `ad0a1cd` |
| T2 | Escenarios & Precisión | `src/data/languages/english/scenarios.ts` (8 escenarios ágiles + 8 business terms + 3 STAR con cita doc-23 preservada) + `precision.ts` (collocations, phrasals, pares formal/informal, falsos amigos) + suite `englishScenariosAndPrecision.test.ts` | `b3a12cd` |
| T3 | Expansión englishCourse | `src/data/languages/englishCourse.ts` (4 unidades estructuradas, lecciones originales `les-en-1` y `les-en-2` integradas con sus ejercicios intactos §0.9) + suite `englishCourse.test.ts` | `87b8454` |
| T4-T5 | UI & Motor SR SM-2 | `SpeakingPracticeEN.tsx` (Web Speech API con fallback a texto + speechSynthesis modelo en-US + detección de keywords por frase clave) + `EnglishCourseView.tsx` (pestañas curso/SR/speaking/precisión; cola de vencidos + racha vía `vocabularyStore` READ) + `english.astro` (el SpeakingPractice compartido de AG-DE SIN tocar) | `18b4e55` |
| T6 | RAG English v4.0.0 | `rag/english/` (manifest + fuentes `internal-curated-en.md` y `interview-answer-bank-doc23.md`) → `rag/english.json` (9 chunks: glosario por categoría, escenarios business, precisión C1, 3 STAR citando `doc-23 §…`) + `rag/index.json` (9 dominios) | `5470a58` |
| T7 | Verificación & Cierre | `docs/agents/STATUS-english.md` + verificación completa | `c0b4be1` + commit de reparación |

---

## 📐 Consumo del Motor Spaced Repetition (SM-2)

1. **Catálogo de Tarjetas:**
   - 128 términos técnicos en inglés exportados como `englishTechnicalVocabulary` con `language: 'en'`.
   - Se inyecta directamente a `VocabularySession`: `<VocabularySession language="en" catalogItems={englishTechnicalVocabulary} />`.
   - NO se añade al `initialVocabulary` compartido (contrato AG-DE: ese banco es solo-DE; la inyección
     por props es la integración soportada).

2. **Persistencia & Racha:**
   - El store `useVocabularyStore` persiste de forma desacoplada el progreso bajo `byLanguage.en`
     (solo ids + estado SM-2; cero acoplamiento de contenido).
   - La racha real se calcula dinámicamente con `computeStreakDays(activityDates)` sin valores artificiales.

3. **Speaking & Simulación Oral:**
   - `SpeakingPracticeEN.tsx` utiliza Web Speech API (`SpeechRecognition`/`webkit`, con declaración
     local de tipos) y fallback automático a input de texto cuando no hay soporte; `speechSynthesis`
     (voz `en-US`, rate 0.92) modela pronunciación de la frase objetivo.
   - Evaluación por coincidencia léxica contra keywords de la frase clave seleccionada (scenarios)
     o del banco técnico (STAR).

---

## 📊 Volúmenes del Dominio English (contados del código, no estimados)

- **Términos Técnicos:** 128 (68 B2, 60 C1) en 4 categorías (32 c/u).
- **Escenarios de Negocio:** 8 (Standup, Sprint Planning, Code Review, Disagreement, Stakeholder Negotiation, Video Calls, Small Talk, Salary Negotiation) + 8 business terms.
- **Respuestas STAR Técnicas:** 3 (WebGL 60 FPS Optimization, CAD-to-Realtime Pipeline, ARA Framework Automation) con `sourceCitation` doc-23 §preservada del curado.
- **Precisión C1:** 12 Collocations técnicas, 10 Phrasal Verbs, 10 Pares Formal/Informal, 10 Falsos Amigos ES → EN.
- **Unidades del Curso:** 4 unidades temáticas, 12 lecciones (incluye les-en-1 y les-en-2 preservadas).
- **Base RAG:** 9 chunks citados en `rag/english.json` (glosario por categoría ×5, business, precisión, STAR ×3 citando doc-23).

---

## 🧪 Validación Final de Integridad

```
NODE_OPTIONS="--max-old-space-size=8192" npx astro check
  Result (427 files): 0 errors

npx vitest run
  Test Files / Tests: ver recuento en el commit de reparación (30 suites; incluye
  germanCurriculum.test.ts de AG-DE en verde tras el revert del banco compartido)

npx tsx src/data/languages/english/scripts/validate-vocabulary.ts
  OK: 128 ítems EN válidos (categoría válida + ejemplo no vacío + ids en-tech-<nnn>)

npx tsx scripts/build_rag/index.ts --domain english --check
  OK: rag/english.json válido (esquema v4.0.0)
```
