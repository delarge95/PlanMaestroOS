# 10 — Lista maestra: puntos débiles → refuerzo → cobertura

Leyenda: 🔴 crítico · 🟡 medio · 🔵 menor. "Cobertura" = en qué archivo se detalla el fix.

| # | Punto débil (evidencia) | Refuerzo | Cobertura |
|---|--------------------------|----------|-----------|
| 1 | 🔴 3 backlogs divergentes (arch 11 vs roadmap 13 vs impl 00-07) | ADR + roadmap/13 como vigente | 01, 09 |
| 2 | 🔴 AG-ORQ virgen bloquea Today real | Priorizar ORQ como fase "puerta de entrada" | 01, 09 |
| 3 | 🔴 Pipeline empleo 3 vs 7 estados sin migración | Tabla mapping + migración de seeds | 01 |
| 4 | 🔴 Monorepo `apps/` vs `src/` sin decidir | ADR-1: quedarse en `src/` | 02 |
| 5 | 🔴 No hay grafo real (solo listas) | `graph.ts` + builder + 5 queries | 02 |
| 6 | 🔴 Contratos faltantes (Course, ProjectPortfolio, ReviewCard…) | Crear tipos + tests | 02 |
| 7 | 🔴 Lesión→rutina es solo mensaje genérico | Sistema M3 (anamnesis→candidatos→reescritura→painLog) | 03 |
| 8 | 🔴 Sin presupuesto global de fatiga multiobjetivo | Unidad RPE×min + reglas interferencia | 03, 09 |
| 9 | 🔴 Empresas = semilla, no BD viva | Job career-research + señales + descalificadores-regla | 04 |
| 10 | 🔴 CV manual, no procedural por empresa | `CVVariant` generado + export | 04 |
| 11 | 🔴 Portafolio sin link-checker ni snapshots GitHub | Worker sync + badge demo viva/muerta | 04 |
| 12 | 🔴 Skills sin demanda/lift salarial | Serie vacantes + bandas doc-03 | 04 |
| 13 | 🔴 RAG EN/DE raquítico (9/12 chunks) | Convertir JSONs curados a chunks (>150) | 07, 09 |
| 14 | 🔴 B1 OG2/Tendonitis/Nippard sin ingerir | LOTE fitness con pipeline v4 existente | 03, 07 |
| 15 | 🔴 Worker/Notion mocks (`ENABLE_LIVE_SYNC=false`, URL ficticia) | Desplegar worker + 1 dominio piloto | 01, 09 |
| 16 | 🔴 Secret en `.env` sin test anti-leak | `grep AIza` en `ci` + `.gitignore` verificado | 05 |
| 17 | 🟡 Salud sin `local-only` ni borrado/export | Flag por dominio + botón exportar/borrar | 05 |
| 18 | 🟡 `set:html` sin auditar con contenido externo | Grep + prohibición con externos | 05 |
| 19 | 🟡 Nav rota (nutrition/anatomy sin entrada) | Cerrar 2 tickets + checklist ruta-nueva | 06 |
| 20 | 🟡 1381 inline styles + encoding + h1 + emojis | DESPACHO-4 + design-audit (en curso) | 06 |
| 21 | 🟡 QA solo 11 rutas públicas, 0 de `/app` | Extender `qa.mjs` a 39 rutas | 06, 09 |
| 22 | 🟡 Visor 1380 piezas en móvil sin LOD garantizado | Cap DPR + progresivo + LOD | 06 |
| 23 | 🟡 IA sin tope costo ni métrica aprobación | Límite tokens/día + % aprobados | 07 |
| 24 | 🟡 Jobs diseñados pero no implementados | M1: 4 jobs con puertas L1-L3 | 07, 08 |
| 25 | 🟡 F1 snapshot→nutrición sin consumir | Conectar en `NutritionWorkspace` | 08 |
| 26 | 🟡 Gastronomía/fitnessGoal reservado sin implementar | F8 del bus | 08, 11 |
| 27 | 🟡 Spark sin resguardos de privacidad | Reglas (a)-(d) archivo 08 | 08 |
| 28 | 🔵 Duplicados (`28D (1).md`, `_attic`, huérfanos) | Limpieza S5 | 09 |
| 29 | 🔵 Typo `NORMAS_ORGESTRADOR` en DESPACHO-1 | Corregir (rompe copy-paste) | 10 (aquí) |
| 30 | 🔵 OX Alpha dado de baja pero despachos 1-2 aún lo asignan | Migrar A1-A4 a Turbo/Flash (D3 ya lo hizo) | 10 (aquí) |

## Puntos no tenidos en cuenta (nuevos, aportados por esta auditoría)

- N1. Signos de alarma con derivación inmediata (frena automatizar lesiones sin red de seguridad).
- N2. `WearableDay` como contrato previo a cualquier sensor (evita reescribir UserState 2 veces).
- N3. `fitScore` con desglose citado (evita caja negra en decisiones laborales).
- N4. `UnavailableCard` uniforme (modo sin-worker/sin-RAG diseñado, no error críptico).
- N5. Tesis/TechArt y Portugués: decidir alcance explícito (hoy tierra de nadie).
- N6. `derivarTier` fraccional + rate cards triples (bloquea publicar precios del cotizador).
- N7. `base: /PlanMaestroOS/` condicional rompe GLB en deploy (fijar estrategia assets).
- N8. PDFs 150MB en `public/library` inflan build (mover a descarga bajo demanda).
