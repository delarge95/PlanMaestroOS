# STATUS — AG-CLIN (ciclo 1, rama `agent/clinical`)

> 2026-08-25 · Worktree `E:\Laboral\.worktrees\clinical` · base = main @ 194c16c (merge --no-edit sin conflictos)

## Verificación al corte

| Gate | Resultado |
|---|---|
| `npx astro check` | **0 errores** (406 archivos; 46 hints preexistentes) |
| `npm test` | **215 tests verdes** en 24 archivos |
| Builder RAG `--domain clinical --check` | OK: esquema v4.0.0 válido (14 sources, 22 chunks) |
| Diff vs OWN | Solo `src/components/clinical/**`, `src/pages/app/clinical/**`, `src/data/clinical/**`, `rag/clinical*`. Cero toques a fitness/ui/nav/tokens |

## Commits (uno por tarea)

1. `feat(clinical)` — **T1 Cableado del hub**: nuevo `ClinicalWorkspace.tsx` compone SectionNav+ClinicalToday (INTACTO, §0.9) + disclaimer + ClinicalExecutionHub + ClinicalUncompletedTaskProtocol como experiencia principal de `/app/clinical`.
2. `feat(clinical)` — **T2 unblock real**: `src/pages/app/clinical/unblock.astro` monta UnblockPanel (el nav apuntaba a 404).
3. `refactor(clinical)` — **T3 Auditoría de huérfanos** (grep-verificada): StaleTaskCard + staleTasksDetector CONECTADOS en ClinicalToday; 6 muertos → `_attic/` con README de razón e imports corregidos.
4. `feat(clinical)` — **T4 Store persistido**: `src/data/clinical/clinicalStore.ts` (zustand persist `clinical-state-v1` v1): bio-feedback diario (energía 1-10 / ansiedad / dolor / sueño, upsert por fecha ISO, máx 30) + exposiciones Baja/Media/Alta con pre/post; hub refactorizado al store; migración NO destructiva de claves legacy (`clinical_biofeedback_logs`, `clinical_exposures`) con flag y conteo de omitidos.
5. `feat(clinical)` — **T5 rag/clinical.json v4**: 22 chunks parafraseados del plan de acción TDAH/AS (15), informe clínico (1, solo psicoeducación funcional) y datasets protocols/routines (6), con locator página/sección. Disclaimer (`ClinicalDisclaimerNote`) en las 5 superficies: workspace, unblock, protocols, routines (+hub interno ya lo tenía en copy propio).
6. `feat(clinical)` — **T6 Sub-RAG salud sexual** (mandato usuario): 4 libros + 6 papers registrados en `rag/clinical/manifest.json` con bloque `gates` por fuente (info+derivación; JAMÁS intervención/consejo médico; pastuszak solo contextual-farmacológico-informativo con derivación obligatoria; veale psicoeducativo sin screening). sourceIds cuadran con `biblioteca/MANIFEST.md` §8/§13. Chunking llega por puente Gemini Flash → soltar `.md` en `fuentes/` y rebuild (warnings actuales = esperados). Documentado en `rag/clinical/README.md`.
7. `test(clinical)` — **T7 Smoke tests store**: 9 tests (upsert/clamping/límite 30/orden desc/toggle/upsert exposición/persistencia clave/migración legacy/helpers). Nota técnica: zustand v5 usa `window.localStorage` — el stub de tests cubre ambos globales.
8. `chore(clinical)` — **T8** este STATUS + gates finales.

## Decisiones documentadas

- **Composición de /app/clinical**: ClinicalToday se conserva tal cual (REGLA DE ORO) y el Hub se monta debajo dentro de `ClinicalWorkspace`; el protocolo "cero deuda" cierra la página. Un solo header, cero duplicación de nav.
- **InertiaRescueModal NO es huérfano**: lo consume `schedules/DailyOperatingView` (AG-ORQ). No se tocó.
- **MorningEveningWorkflowsModal archivado pero señalado** en el README del ático como pieza para Fase 3 (modulación minViable/normal/extended vía EnergyLevel de canonicalDomainModel): revivir, no reescribir.
- **ClinicalCurrentBlockPanel archivado**: bloque actual hardcodeado (mock) — requiere contrato del grid semanal de AG-ORQ (hoyAdapter).
- **Legacy bio-feedback**: labels es-ES ("lun., 24 ago.") → ISO año corriente; los ilegibles se omiten y se informan en toast (no se inventan fechas).
- **PDFs clínicos leídos vía PyMuPDF local** (el modelo no soporta input PDF directo); texto extraído a temp fuera del repo.

## Pendientes (próximo ciclo)

1. Conectar bio-feedback → UserState de CORE por contrato (puente energía/dolor con fitness) cuando exista el adaptador.
2. Fase 3 del plan: modulación minViable/normal/extended del día vía EventBus (revivir MorningEveningWorkflowsModal desde `_attic/`).
3. Chunking salud sexual cuando lleguen salidas Gemini Flash (B5 puente) + revisar gates por chunk sensible.
4. Reglas DomainRule clínicas (rumiación >10 min, sueño <X h → versión mínima) sobre el motor de CORE.
5. Persistencia IndexedDB: migrar `clinical-state-v1` al adaptador de CORE manteniendo nombre de clave documentado aquí.
