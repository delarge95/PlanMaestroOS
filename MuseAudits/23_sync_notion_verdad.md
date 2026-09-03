# 23 — Sync Notion: la verdad y el piloto

> Estado: doble adaptador (`Title/Status` vs `Titulo/Estado` + filtro clínico solo en uno),
> env `NOTION_API_KEY` vs `NOTION_TOKEN`, migración 4/12 keys con 1 huérfana,
> `sync-write([])` no-op, `NotionSyncStatus` hardcodeado `offline_local`,
> snapshots de `2026-08-11`, `provisioningManifest` de 9 DBs vs 1 usada.

## 23.1 Unificación (encargo E1, 1 día)

- Env: dueña `NOTION_TOKEN`; corregir `.env.example` (1 línea) + documentar las 9
  `NOTION_*_DB_ID` (hoy solo `TASKS` se usa).
- Adapters: dueña `src/data/notion/mappers.ts` (tiene sanitización clínica);
  `notionTasks.ts|notionCareer.ts` pasan a wrappers con tabla de mapeo explícita
  `Title↔Titulo, Status↔Estado…` (la divergencia ES/EN es el bug más tonto y más caro).
- Migración: ampliar `LOCALSTORAGE_MIGRATION_MAP` a las 12 keys (archivo 14 §14.2),
  matar `plan_maestro_career_goals`, `MigrationReport` visible en Hoy la primera vez.
- `NotionSyncStatus`: leer estado real (último sync, pendiente, error) en vez del
  `offline_local` quemado en `NavigationShell.tsx:70`.

## 23.2 Piloto (encargo E2)

Un dominio (tareas del día) con `ENABLE_LIVE_SYNC=true`: `sync-notion-read` →
`public/data/today.json` + `Actualizado hace Xh` → escritura vía worker (contrato
archivo 22) con idempotencia (`SyncEngine.executeJob`, DLQ). Resto de dominios siguen
offline hasta 2 semanas sin conflictos. Scripts consiguen npm (`sync:read`, `sync:write`,
`jobs:run`): hoy existen pero sin script y nadie los corre.
