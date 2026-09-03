# MuseAudits — Índice general

Auditoría exhaustiva del proyecto "Segundo Cerebro / Plan Maestro OS" en `E:\Laboral`.
Fecha: 2026-09-03. Fuente: `docs/orquestacion` (NORMAS + 5 despachos + entornos + LOTE-1),
`docs/agents` (23 archivos + servicios + cotizador), `docs/architecture` (13),
`docs/roadmap` (19), `docs/implementation` (9), 123 markdowns en `docs/`,
37 documentos raíz `00_`–`36_`, `biblioteca/` (277 archivos), `rag/` (9 dominios),
`src/` (477 archivos, 39 rutas `/app`), 14 worktrees activos, app viva en
`http://127.0.0.1:4321/app` (verificada: responde Hoy/Fitness/Laboral/Idiomas).

## Archivos

| # | Archivo | Tema |
|---|---------|------|
| 00 | `00_INDICE.md` | Este índice |
| 01 | `01_viabilidad_tecnica.md` | Viabilidad técnica + veredicto + % real implementado |
| 02 | `02_arquitectura_datos_grafos.md` | Arquitectura, modelo de datos, grafo real propuesto |
| 03 | `03_fitness_clinico_lesiones.md` | Fitness + clínico + sistema de lesiones (punto 2 del usuario) |
| 04 | `04_career_segundo_cerebro_laboral.md` | Cerebro laboral: empresas, CV/portafolio modular (punto 1) |
| 05 | `05_seguridad_privacidad.md` | Seguridad, privacidad salud, secretos, GDPR |
| 06 | `06_diseno_ux_tdah.md` | Diseño, design system ds-*, UX TDAH |
| 07 | `07_ia_rag_antialucinacion.md` | IA, RAG, agentes proactivos sin alucinar |
| 08 | `08_interconexion_automatizacion.md` | Interconexión dominios, automatización máxima, wearables |
| 09 | `09_roadmap_corto_mediano_largo.md` | Roadmap reordenado + complementos + fases |
| 10 | `10_puntos_debiles_refuerzos.md` | Lista maestra: 30 debilidades → refuerzo → cobertura |
| 11 | `11_gastronomia_hardware_gaming_cocina.md` | Gastronomía, cocina inteligente, computación, gaming, periféricos |
| 12 | `12_formacion_recomendada.md` | Maestrías, cursos, tutoriales para hacerlo real |
| 13 | `13_workflows_codigo.md` | Workflows ejecutables + esqueletos de código propuestos |
| 14 | `14_contratos_reales_y_deuda.md` | **Mapa de contratos REALES del código + 10 divergencias a unificar** |
| 15 | `15_ADRs_decisiones.md` | 8 ADRs propuestos (repo, deploy, Obsidian, IA, salud, ORQ…) |
| 16 | `16_grafo_especificacion_ejecutable.md` | Grafo tipado + builder + 5 queries de aceptación |
| 17 | `17_orquestador_today_real.md` | EventBus singleton, todayAdapter completo, rituales, nav |
| 18 | `18_lesiones_v2_ejecutable.md` | InjuryReport + matriz 12 filas + reglas + painLog 7d |
| 19 | `19_career_ejecutable.md` | fitScore, CV procedural, portafolio vivo, matar mock |
| 20 | `20_idiomas_clinico_cierres.md` | Speaking DE real, bug firstPendingBlock, ClinicalToday persist |
| 21 | `21_nutricion_wearables_cierres.md` | Snapshot→nutrición, migración UserState, WearableDay |
| 22 | `22_worker_real.md` | Contrato HTTP único, Gemini real, jobs con entradas reales |
| 23 | `23_sync_notion_verdad.md` | Unificación adapters/env/migración + piloto 1 dominio |
| 24 | `24_qa_testing_definicion_hecho.md` | qa:app 39 rutas, tests worker, ci final, DoD global |
| 25 | `25_seguridad_endurecida.md` | Anti-secret CI, salud local-only, set:html, checklist pre-sync |
| 26 | `26_gastronomia_cocina_ejecutable.md` | Conexiones gastro + cocina inteligente |
| 27 | `27_portfolio_lanzamiento.md` | 15 desbloqueos, rate card única, deuda de build |
| 28 | `28_operativa_diaria_gobernanza.md` | Ritmo, reglas de despacho, ownership, próximas 8 semanas |
| 29 | `29_auto_preguntas_cierre.md` | Auto-preguntas qué/cómo/por qué/cuándo/dónde + 7 preguntas al usuario |
| 30 | `30_fusion_gemini_muse.md` | Fusión con `GeminiAudits/`: 16 adopciones, 10 rechazos con evidencia, ADR-9 |
| 31 | `31_matematica_formulas.md` | Todas las fórmulas con deducción, ejemplo y fuente |
| 32 | `32_hallazgos_qa_vivo.md` | Primera corrida `qaApp`: redirect-shells + regla de nav + anti-secret verde |
| 33 | `33_roadmap_cierre_total.md` | **Lo que falta átomo por átomo**: S1-S5 (en carpeta) + M1-M7 + L1-L6 + frontera honesta |
| 34 | `34_landmarks_volumen.md` | Tabla MEV/MAV/MRV por músculo + plan de conversión a reglas en 4 lotes |
| 35 | `35_encargos_despacho.md` | 12 encargos copy-paste (E1-E12) para los ejecutores del repo |
| 36 | `36_matriz_diferencial_completa.md` | 12 filas lesión: patrón, tests, intervención, cita honesta, red-flags |
| 37 | `37_appliances_rig.md` | 20 equipos cocina + RigSpec workstation + laboratorio gaming |
| 38 | `38_interferencia_fatiga.md` | Presupuesto RPE×min + 5 reglas interferencia + split referencia |
| 39 | `39_micros_top20.md` | Esquema micros + 5 recetas + 6 alertas + plan curación 15 restantes |
| 40 | `40_specs_componentes.md` | 6 componentes React con props/estado/tests UI cerrados |
| 41 | `41_checklists_lanzamiento.md` | PWA + a11y + perf + release + rollback en tablas verificables |
| 42 | `42_matriz_tarifas_decision.md` | v1 vs v2 vs v1.3 vs código + recomendación + 7 marcas para el usuario |
| 43 | `43_deuda_interna_impl.md` | Autocrítica: 10 duplicados/pendientes de mi propia carpeta con puerta |
| — | `impl/` | **La app completa en código**: grafo, career, injury, rules, worker, sync, qa, security, bridges, rag — TS estricto + 50 tests verdes + 3 scripts `.mjs`. Mapa de aterrizaje en `impl/README.md` |

## Cómo leer

- Cada archivo es autocontenido: problema → evidencia (ruta exacta) → propuesta concreta.
- El orden de ejecución recomendado está en `09_roadmap_corto_mediano_largo.md`.
- La lista accionable priorizada está en `10_puntos_debiles_refuerzos.md`.
- Nada de lo aquí propuesto se ha codificado: es teoría lista para despachar
  como ENCARGOS al sistema de orquestación existente (NORMAS_ORQUESTADOR §flujo 4 pasos).
