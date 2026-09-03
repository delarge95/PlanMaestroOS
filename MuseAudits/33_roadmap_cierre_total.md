# 33 — Roadmap de cierre total (lo que falta, átomo por átomo)

> Todo lo que falta para que la app cumpla sus propósitos a corto/mediano/largo plazo.
> Regla de zona: yo (Muse) solo escribo en `MuseAudits/`; los agentes aterrizan en el repo;
> el usuario decide secretos/validaciones físicas. Cada tarea: dueño, depende de,
> tamaño, aceptación. Nada se da por hecho sin su criterio de salida.

## CORTO (semanas 1-4) — Cerrar la mina de especificaciones

### S1. Encargos despacho-ready (yo, 3 días, depende de: nada)
Escribir `35_encargos_despacho.md`: 12 ENCARGOS copy-paste (formato NORMAS: objetivo
único, rutas exactas, qué NO tocar, verificación) uno por módulo `impl/`:
W1 grafo, W2 injury-UI, W3 CV, W4 wearable, W5 jobs, W6 QA/UnavailableCard,
W7 worker, W8 sync, W9 RAG EN/DE, W10 nav, W11 seguridad, W12 gastro.
Aceptación: cada encargo cabe en 1-3 días-agente y cita su spec + su test.

### S2. Contenido curado restante (yo, 5 días, depende de: S1 esquema)
- `36_matriz_diferencial_completa.md`: 12 filas (estructura, patrón, 2-3 tests,
  cita cap/pág, confidence). Donde la biblioteca aún no da página exacta:
  `por-verificar` honesto, jamás inventada.
- `37_appliances_rig.md`: matriz receta↔equipo (20 equipos),
  `RigSpec` workstation (CPU/GPU/RAM/NVMe/monitor/periféricos con COP y prioridad),
  laboratorio gaming (FPS/1% lows/shaders de referencia).
- `38_reglas_interferencia_fatiga.md`: presupuesto global RPE×min + reglas
  cardio-fuerza (separar ≥6h), skills frescos nunca al fallo, MMA/baile como
  conditioning con costo.
- `39_micros_top20.md`: tabla Fe/Zn/Mg/Ca/D3/B12/C/colágeno/Na/K por receta top
  (estructura + 5 filas ejemplo; el resto lo cura NUTRI con RP Kitchen).
Aceptación: cada archivo trae su plan de test y su puerta anti-slop.

### S3. Scripts restantes (yo, 4 días, depende de: 30/22/23)
`impl/scripts/` (nuevos, todos `.mjs` cero-deps + tests donde aplique):
link-checker (7 links + demos), github-sync (Octokit snapshot→ProjectCard),
obsidian-sync (md↔graph.json), wearable-csv-runner (usa `importWearableCsv`),
tracker-reimport (usa `parse-tracker.ts` del repo, solo documenta invocación),
en-json-to-chunks / de-json-to-chunks (EN/DE → v4), restore-backup (usa `restoreBackup`).
Aceptación: `node --check` + corrida `--dry-run` documentada.

### S4. Specs de componentes React (yo, 4 días, depende de: 18/19/16)
`40_specs_componentes.md`: props, estado, eventos y pseudocódigo completo de
`InjuryCheckin`, `VariantComposer`, `GraphInspector`, `UnavailableCard`,
`PainWeekCard`, `ApprovalMeter` (% aprobados IA). Sin JSX final (lo escriben los
ejecutores), pero con contratos tan cerrados que el JSX es mecánico.
Aceptación: cada spec incluye sus casos de test UI (qué clic → qué estado).

### S5. Checklists de salida (yo, 2 días, depende de: 24/06)
`41_checklists_lanzamiento.md`: PWA (manifest/sw/offline), a11y (foco/teclado/
contraste/reduced-motion), perf (GLB lazy, dpr cap, JSONs dinámicos), release
(mapeo doc-36 paso→evidencia), rollback (qué revertir si un merge rompe Hoy).
Aceptación: cada checklist es una tabla [ítem | cómo verificar | umbral].

## MEDIANO (meses 1-3) — Aterrizaje (agentes; yo verifico)

- M1 (sem 5-6): worker real + 4 jobs + UserState 3 dominios + 100 reglas (lotes `34`).
  Puerta: morning-plan genera Top3 aprobable 5 días seguidos.
- M2 (sem 7): grafo v1 + 5 queries verdes + visor. Puerta: `validateGraph` en `ci`.
- M3 (sem 8): lesiones v1 + painLog + prehab cerrado. Puerta: 1 caso simulado punta a punta.
- M4 (sem 9): CV procedural + 12 seeds + 1 aplicación real seguida en la app.
- M5 (sem 10): WearableDay CSV + hormonas display-only + micros top-20.
- M6 (sem 11): Notion piloto 1 dominio + backup auto + `ENABLE_LIVE_SYNC` parcial.
- M7 (sem 12): QA 52 rutas en `ci` + PWA instalable + a11y pase.
Puerta global mediano: las 5 condiciones del archivo `01` en verde.

## LARGO (meses 3-12) — Ecosistema

- L1: IA L2/L3 con ApprovalMeter >50% 4 semanas seguidas (si no, jobs pausados).
- L2: Health Connect + báscula BLE (contrato `WearableDay` ya lo soporta).
- L3: gastronomía completa + cocina por niveles con presupuesto ejecutado.
- L4: dominios hardware/gaming vivos (`RigSpec` + lab FPS).
- L5: API del grafo + export Obsidian + backup cifrado con passphrase.
- L6: video TwinSight + lanzamiento público (doc-36) + rate card única decidida.
Puerta global largo: 1 mes operando solo con la app (sin sheets paralelos ni trackers
manuales fuera de ella).

## Lo que YO no puedo hacer desde esta carpeta (frontera honesta)

1. Escribir en el repo, correr migraciones, desplegar worker/Pages, firmar commits.
2. Conseguir secretos (keys, tokens), PDFs ausentes, confirmaciones CV/links.
3. Validación física (dolor real, cocina real, entrevistas reales, BLE con banda real).
4. Decidir dinero (rate card, bandas COP, cuentas) y alcance (Tesis, Portugués).
Todo lo demás —docs, código, matemáticas, tests, scripts, seeds— sí cabe aquí y es
lo que S1-S5 termina.
