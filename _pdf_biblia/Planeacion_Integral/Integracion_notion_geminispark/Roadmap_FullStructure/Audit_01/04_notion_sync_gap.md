# FIX 04 — Brecha de sincronización con Notion (P0 de datos)

## Problema
El log de las fases 1–7 muestra archivos de datos locales (`clinicalTasks.ts`, `goals.ts`,
`companies.ts`, `recipes.ts`…) pero NO muestra: scripts de sync a Notion, snapshots generados,
ni lectura de Notion en build. Es muy probable que la app esté corriendo sobre datos hardcodeados,
no sobre el "segundo cerebro" en Notion que era el objetivo central.

## Verificación previa (ejecutar y pegar salida)

```bash
ls public/data/ 2>/dev/null || echo "NO EXISTE public/data/"
ls scripts/ | grep -i sync || echo "SIN scripts de sync"
grep -rn "@notionhq/client" package.json src/ scripts/ worker/ 2>/dev/null | head
grep -rln "notionPageId" src/data/ | head
```

## Decisión por entidad (aplicar tal cual)

| Entidad | Dueño | Qué se implementa AHORA |
|---|---|---|
| Tareas / plan diario | Notion | sync real (este fix) |
| Aplicaciones laborales / empresas | Notion | sync real (este fix) |
| Fitness: sets y sesiones | App local | se queda local; solo resumen a Notion (fase posterior) |
| Clínico: tareas | Notion | sync real (este fix) |
| Idiomas, gastronomía | App local MVP | queda local con export JSON; sync documentado, no bloqueante |
| Goals de roadmap | Notion | sync real (este fix) |

## Implementación mínima obligatoria

### 1. Contrato con IDs estables

```ts
// src/data/contracts/syncedEntity.ts
export type SyncedEntity = {
  externalId: string;        // ID de Plan Maestro, estable
  notionPageId?: string;     // asignado tras crear en Notion
  schemaVersion: number;
  lastSyncedAt?: string;
  syncStatus: 'local' | 'synced' | 'pending' | 'conflict';
};
```

`Task`, `CareerApplication`, `Company`, `Goal` extienden `SyncedEntity`.

### 2. Scripts de sync (build-time, secrets solo en CI/local)

```text
scripts/sync-notion-read.ts   // Notion -> public/data/{today,career,clinical,goals}.json
scripts/sync-notion-write.ts  // cambios aprobados en app -> Notion (cola de escrituras)
src/lib/adapters/notionTasks.ts
src/lib/adapters/notionCareer.ts
```

- `sync-notion-read.ts` corre en `prebuild` y en un workflow diario.
- Los snapshots incluyen `generatedAt` y `schemaVersion`.
- La UI lee snapshots; si el snapshot no existe, cae a datos locales con aviso
  `Sin conexión a Notion — mostrando datos locales`.

### 3. Escrituras
- Nunca directas desde componentes. El usuario aprueba un cambio → se encola en
  `localStorage` (`writeQueue`) → el worker/script lo aplica a Notion → se marca `synced`.
- Idempotencia por `externalId`: reintentar no duplica páginas.

### 4. Rate limiting
`scripts/lib/notionRateLimit.ts`: cola serial con máximo 3 req/s, respeta `Retry-After`,
backoff con jitter. Todo script de sync lo usa; nadie llama al SDK directamente.

## Copy exacto
`Sin conexión a Notion — mostrando datos locales` · `Actualizado hace Xh` · `Sincronizando…` ·
`Cambio guardado, pendiente de sincronizar`.

## Aceptación (con evidencia)
- Editar una tarea en Notion → correr `sync-notion-read` → aparece en la app tras rebuild.
- Aprobar un cambio en la app → `sync-notion-write` → visible en Notion (captura).
- Apagar red / sin token → la app sigue funcionando con snapshot viejo + aviso.
- Tabla: cada entidad de la tabla de decisión con su estado real (sync / local) y ruta del adapter.
