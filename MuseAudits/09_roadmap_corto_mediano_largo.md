# 09 — Roadmap reordenado: corto, mediano y largo

## Orden vigente declarado

`roadmap/13 + implementation/00-07` mandan; `architecture/11` queda histórico.
Fases: 0 Setup ✓ · 1 Hoy+Fitness básico (verificar, 01_phase_01) · 2 Fitness completo ·
3 Clínico · 4 Laboral · 5 Idiomas · 6 Gastronomía · 7 IA. AG-ORQ integra al final de cada fase.

## CORTO (2-4 semanas): cerrar lo abierto

- [ ] S1. Verificación Fase 1 (implementation 01: rutas/nav/copy/datos/fitness básico).
- [ ] S2. Migración ds-* (DESPACHO-4, 6 prompts) + design-audit (encoding, h1, inline, emojis).
- [ ] S3. UserState P3 completo + F1/F6 (snapshot→nutrición, fila laboral en Hoy).
- [ ] S4. Worker IA M6 (ENCARGO-worker-ia) + primer consumidor (botón nutrición).
- [ ] S5. ADR-1..4 (archivo 02) + tickets nav (nutrition/anatomy) + limpieza
  (`services-deploy/`, `28D (1).md`, `_attic`, `public/index.html` huérfano).
- [ ] S6. B1 RAG fitness (OG2→Tendonitis→Nippard→resto) + english/german a >150 chunks.

## MEDIANO (1-3 meses): hacerlo cerebro

- [ ] M1. 100+ reglas citadas (prompt DESPACHO-5 §A) + jobs morning/evening/stuck/career.
- [ ] M2. Grafo v1 (`build_graph.ts` + 5 queries + visor solo-lectura).
- [ ] M3. Lesiones v1 (anamnesis + top-3 candidatos + reescritura sesión + painLog 7d).
- [ ] M4. CV procedural por empresa + fitScore + tracker punta a punta con 1 aplicación real.
- [ ] M5. WearableDay CSV + prehab↔dolor cerrado + hormonas en targets (display-only).
- [ ] M6. Worker desplegado + Notion IDs reales + `ENABLE_LIVE_SYNC=true` en 1 dominio piloto.
- [ ] M7. QA `/app` completo (39 rutas desktop+móvil en `qa.mjs`) + PWA instalable.

## LARGO (3-12 meses): segundo cerebro + vida

- [ ] L1. IA proactiva L2/L3 con métrica aprobación >50% (archivo 07).
- [ ] L2. Ingesta Health Connect + báscula BLE + sueño/HRV en planificación.
- [ ] L3. Gastronomía completa + cocina inteligente (archivo 11).
- [ ] L4. Computación/gaming/hardware/periféricos como dominios (archivo 11).
- [ ] L5. API pública del grafo + export Obsidian Dataview + backup cifrado.
- [ ] L6. Video demo TwinSight + lanzamiento público (docs 21B/36) + rate card decidido.

## Complementos al roadmap que no existían

C1. Fase "Puerta de entrada" (ORQ primero, no último): sin Today real nada luce.
C2. Serie temporal de mercado (doc-30 mensual) en vez de snapshot único.
C3. Estrategia Obsidian (archivo 02 ADR-3) — hoy sin fase ni dueño.
C4. Dominio Tesis/TechArt (mencionado en agentes, sin doc ni fase) — decidir alcance.
C5. Portugués: declarar explícitamente fuera de alcance 2026 (evita código fantasma).
C6. Presupuesto de fatiga global (fuerza+skills+MMA+baile+cardio en una sola unidad RPE×min).
