# STATUS — AG-DE (Alemán) · ciclo 1 completo

> Rama `agent/german` · 2026-08-25 · OX Alpha (reemplazo del AG-DE caído)
> Verificación al corte: `npx astro check` **0 errores** · `npm test` **226/226 verdes** · árbol limpio

## Entregado (8 tareas, 1 commit c/u)

| # | Tarea | Commit |
|---|---|---|
| Paso 0+T1 | Motor SM-2 real (`spacedRepetition.ts`) saneado del trabajo a medias + suite extendida | `28bd5c3` |
| T2 | `vocabularyStore.ts` zustand persist `'languages-vocabulary-v1'` (SR por idioma, progreso lecciones, racha real, cola de vencidos) | `b39c9d6` |
| T3 | Genéricos compatibles: `LanguageToday` (racha real, toggle inglés por prop), `VocabularySession` (persistencia + cola SM-2 + 4 calidades), `LessonView` (corrección de respuestas, props aditivas). englishCourse.ts SIN tocar | `b111dd5` |
| T4 | Legado `/app/german` muerto (grep-verificado): componentes borrados; ruta conservada como redirect estático | `ae6c1b8` |
| T6* | Currículo A1.1 por unidades `src/data/languages/german/units/*.ts` (4 unidades, 22 lecciones, 42 tarjetas SR) + test de integridad | `91c431b` |
| T5 | `PlacementTest.tsx` (16 ítems, umbral 70% → coloca unidad) + `GermanCourseView` en german.astro | `e91c337` |
| T7 | `rag/german.json` v4.0.0: manifest + 12 chunks de gramática + build + `--index` (6 dominios) | `f0ef58a` |

\* T6 ejecutada antes que T5 porque el PlacementTest consume los ids/títulos reales de las unidades.

## ⚠️ API del motor SR-2 — PUBLICADA PARA AG-EN

AG-EN puede integrar el motor YA (su Fase 0 depende de esto). Todo vive en `src/lib/languages/spacedRepetition.ts` (puro, sin DOM) y `src/lib/languages/vocabularyStore.ts` (zustand persist, storage no-op en SSR).

```tsx
// 1) Motor puro (import directo, testeable)
import {
  updateEaseFactor,      // (ease: number, quality: AcceptedQuality) => number  [1.3..2.8]
  getNextInterval,       // (intervalDays: number, quality, ease?) => number   (días; 0 = relearn hoy)
  scheduleReview,        // (state: SrScheduling, quality, now?) => SrScheduling
  isDue,                 // ({lastReviewed?, intervalDays?}, now?) => boolean  (convención Anki: vence en last+interval)
  type ReviewQuality     // 'again' | 'hard' | 'good' | 'easy'  (+ alias legacy 'review' ≡ 'again')
} from 'src/lib/languages/spacedRepetition';

// 2) Store persistido por idioma ('en', 'de', cualquier clave de idioma)
import { useVocabularyStore, getDueQueue, getSchedulingFor } from 'src/lib/languages/vocabularyStore';

const recordReview = useVocabularyStore((s) => s.recordReview);
recordReview('en', 'w-shader-01', 'good');            // aplica SM-2 + alimenta la racha real

const catalog = myEnglishVocabularyItems;             // VocabularyItem[] estáticos (solo ids se usan para cola)
const progress = useVocabularyStore((s) => s.byLanguage.en);
const dueIds = getDueQueue(catalog, progress);        // vencidos primero (más retrasado arriba), luego nuevas
```

Reglas de integración AG-EN:
- El store guarda SOLO progreso por id → tu contenido vive en tus archivos `english/**`, cero acoplamiento.
- Componentes genéricos ya aceptan inyección: `<VocabularySession language="en" catalogItems={misItems} />`.
- Si falta algo del motor o de los genéricos compartidos: TICKET a AG-DE/CORE, no editarlos.
- Ejecución de calidad en UI: botones again/hard/good/easy (ver `VocabularySession.tsx` como referencia).

## Decisiones técnicas

- **SM-2 canónico con variantes Anki**: ease [1.3–2.8], deltas por calidad (again −0.32 / hard −0.14 / good ±0 / easy +0.10); intervalo usa el ease POST-repaso; hard ×1.2, easy ×ease×1.3; again → intervalo 0 («vence hoy») y repeticiones a 0. Progresión base siempre-good: 1→3→8→20→50 días.
- **Racha real** = días consecutivos con actividad (repasos o lecciones) que terminan hoy o ayer (`computeStreakDays`). Cero números fabricados: si no hay actividad muestra 0.
- **Cola de repaso** = vencidos por retraso descendente + nuevas al final; los repasados-en-sesión salen hasta la siguiente tanda.
- **Compatibilidad golden rule #9**: les-de-1/les-de-2 preservadas (ids estables), semilla v1-v5 intacta, `englishCourse.ts` y páginas EN sin diff.

## Pendientes / tickets

1. **USUARIO**: restaurar `public/docs/Grammatik_Aktiv_A1_A2.pdf` (no está ni en repo ni en biblioteca accesible). Mientras falte, TODAS las citas de página quedan marcadas «por verificar» (visible en lessons y chunks RAG).
2. **B3 Gemini Flash no llegó**: las 4 unidades A1.1 fueron autorizadas localmente siguiendo el esquema B3 (gramática estándar parafraseada). Cuando llegue el JSON de Flash, sustituir/ampliar unidades y cerrar páginas — el esquema ya lo soporta.
3. **TICKET→AG-CLIN** (`ClinicalCurrentBlockPanel.tsx:168`) y **TICKET→AG-ORQ** (`DailyOperatingView.tsx:26`): retarget de `/app/german` → `/app/languages/german`. Cubierto temporalmente por redirect.
4. Ciclo siguiente: listening con audio real, speaking Web Speech (propio de DE), módulo Goethe A1 (fase 2), sugerencias SR en briefing (con EventBus CORE).

## Validación

```
npx astro check          → 0 errores, 0 warnings
npx vitest run           → 23 archivos / 226 tests OK
  ├─ spacedRepetition.test.ts    21 (SM-2 completo)
  ├─ vocabularyStore.test.ts     15 (racha, cola, acciones, persist key)
  └─ germanCurriculum.test.ts     7 (integridad currículo)
npx tsx scripts/build_rag/index.ts --domain german --check → válido
```
