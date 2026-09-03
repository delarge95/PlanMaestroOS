# 21 — Nutrición + wearables: cierres pendientes

## 21.1 Snapshot → nutrición (encargo E1, el puente F1)

`GuidedSessionRunner.tsx:157-161` construye el `SessionSnapshot` pero solo lo deja
para **copiar manual** (`copySnapshot()` al clipboard). `KcalBurnPanel.tsx:177` lo
confiesa en comentario. Fix (aditivo, 1 día): al guardar la sesión, además del
historial, `addActivity({kind:'strength', …snapshot})` en `nutritionStore`
(`nutrition-local-v1.activities` ya acepta actividades). Mantener el copiado manual
como fallback offline. Test: sesión guiada ⇒ `estimateDayBurn` sube sin tocar nada.

## 21.2 Migración a UserState (encargo E2)

Dos TODOs con nombre (`nutritionStore.ts:3`, `NutritionWorkspace.tsx:184`) piden migrar
`weightKg/sex/goal/…` a UserState. Hacerlo cuando el worker exista (lectura única
`buildUserState` + `readRealUserStateSources`), manteniendo `nutrition-local-v1`
como caché con la misma `MigrationReport` de `migrateLocalStorage` (y de paso ampliar
el mapa a las 12 keys, archivo 23).

## 21.3 `WearableDay` (encargo E3, contrato hoy, sensores después)

```ts
// src/data/contracts/wearable.ts (nuevo)
interface WearableDay { dateIso: string; steps?: number; restingHr?: number;
  hrv?: number; sleepMin?: number; sleepScore?: number; weightKg?: number; vo2max?: number; }
```
`wearableToDailyLogs()` puro en `userStateFeed.ts` (misma puerta que lo manual) +
`scripts/import-wearable-csv.ts` (CSV de báscula/banda → validado). Orden: CSV manual
→ Health Connect API → BLE (último). El registro manual nunca se bloquea: el sensor
confirma, no sustituye. Nutrición consume `weightKg` del wearable antes que el input
manual (con cita de fuente visible en UI).
