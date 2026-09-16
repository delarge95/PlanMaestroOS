# BRIDGE — WHOOP → Plan Maestro OS (vía OpenStrap/edge)

> Cómo mover los daily metrics de la banda WHOOP hasta la web app. El wearable
> es un **ACCESORIO**: sin banda, la app funciona idéntica (self-report del
> clinicalStore como fallback en `userStateFeed`).
>
> Contexto completo: `docs/agents/ENCARGOS/ENCARGO-WEARABLE.md` (investigación
> + arquitectura). Síntesis RAG: `rag/wearable/fuentes/whoop-ble--protocolo.md`.

## 1. Cadena de ingesta

```
WHOOP Band ─BLE→ OpenStrap/edge (Android, Flutter, MIT)
                      │ export/share → wearable-daily.json
                      ▼
        (a) Import manual: Fitness → Hoy → chip WHOOP → "Importar datos JSON"
        (b) Push automático: scripts/wearable_push.py → POST /wearable/ingest
                      ▼
        Worker /wearable/ingest (valida + OK; NO escribe en Notion)
                      ▼
        Web app: wearableStore ('wearable-daily-v1', 90 días FIFO)
                      ▼
        userStateFeed → UserState + context.domain (HRV/RHR/z-score)
                      ▼
        Reglas fit:hrv-depressed / fit:rhr-elevated + chip de estado
```

El endpoint del worker NO persiste nada: la persistencia es LOCAL en el
cliente (`wearable-daily-v1` en localStorage vía zustand persist). El push por
worker existe para validar/normalizar el payload y dejar listo el camino a un
push automático desde Android (§5).

## 2. Export desde OpenStrap/edge (formato esperado)

La app captura por BLE directo (decoder on-device) y recalcula local con
métodos publicados: HRV RMSSD de los intervalos R-R, RHR del histórico 1 Hz,
sueño por stillness+FC, strain 0-21 por Karvonen/TRIMP (NO es el score
oficial de WHOOP — la banda 4.0 no lo viaja por BLE).

Exporta desde la app (share/export JSON) y guárdalo como
`wearable-daily.json`. Formato esperado — una entrada, un array, o
`{ "entries": [...] }` (el importador acepta los tres):

```json
{
  "entries": [
    {
      "dateIso": "2026-09-16",
      "sleepHours": 7.2,
      "hrvRmssdMs": 42,
      "restingHr": 52,
      "strain": 8.4,
      "batteryPct": 76,
      "skinTempOffsetC": 0.3,
      "source": "openstrap-edge"
    }
  ]
}
```

| Campo | Tipo | Rango validado | Nota |
|---|---|---|---|
| `dateIso` | string | `YYYY-MM-DD` (obligatorio) | clave única: re-ingestar la fecha hace upsert |
| `sleepHours` | number? | 0–24 | PREFERENTE sobre el self-report del día en UserState |
| `hrvRmssdMs` | number? | 0–500 | HRV nocturno RMSSD (ms) |
| `restingHr` | number? | 20–220 | RHR (bpm) |
| `strain` | number? | 0–21 | strain local open-source |
| `batteryPct` | number? | 0–100 | batería de la banda |
| `skinTempOffsetC` | number? | −5 a 5 | solo banda 5.0/MG |
| `source` | string | no vacío (obligatorio) | identifica el bridge (`openstrap-edge`) |

Los rangos se validan IGUAL en el worker (`worker/src/notion/proxy.ts`,
`WEARABLE_RANGES`) y en el store (`src/lib/wearable/wearableStore.ts`). Al
cambiar uno, cambiar el otro.

## 3. Import manual (sin scripts)

1. Copia el `wearable-daily.json` al PC.
2. Web app → **Fitness → Hoy** → chip WHOOP (junto al banner de prehab).
3. Botón **"Importar datos JSON"** → selecciona el archivo.
4. El chip parsea (`parseWearableExport`), ingesta cada entrada válida
   (`ingestDaily`) y muestra el toast "Sincronizado".

Retención: 90 días FIFO en localStorage. Sin expiración de sesión ni cuentas.

## 4. Push por script (opcional)

`scripts/wearable_push.py` lee un export JSON y hace POST al worker
(validación server-side del payload + trazabilidad del ingest):

```bash
# Worker desplegado (production):
python scripts/wearable_push.py wearable-daily.json \
  --url https://plan-maestro-ia.<tu-account>.workers.dev/wearable/ingest \
  --key $PM_WORKER_KEY

# Worker local (dev):
PM_WORKER_KEY=pm-local-secret-key python scripts/wearable_push.py wearable-daily.json \
  --url http://localhost:8787/wearable/ingest
```

Requiere Python 3.9+ (solo stdlib: `urllib`, `json`, `argparse`). Respuesta
esperada: `{ "ok": true, "ingestedAtIso": "..." }`.

> Nota de diseño: el endpoint responde OK pero NO persiste en el worker. Si
> usas el script, el dato entra a la web app por el import manual del §3 (el
> archivo es el mismo). El valor del push es validar el payload contra el
> mismo contrato y preparar el camino del §5.

### curl de prueba

```bash
curl -X POST https://plan-maestro-ia.<tu-account>.workers.dev/wearable/ingest \
  -H "Content-Type: application/json" \
  -H "x-pm-key: $PM_WORKER_KEY" \
  -d '{
    "dateIso": "2026-09-16",
    "sleepHours": 7.2,
    "hrvRmssdMs": 42,
    "restingHr": 52,
    "strain": 8.4,
    "batteryPct": 76,
    "source": "openstrap-edge"
  }'
# → {"ok":true,"ingestedAtIso":"2026-09-16T05:12:33.204Z"}
```

Errores: `401` sin/clave inválida `x-pm-key`; `400` con payload inválido
(fecha, source o métrica fuera de rango).

## 5. Futuro: push automático desde Android

Un **fork de edge** puede hacer el POST directamente con un background
service (WorkManager periódico tras el sync BLE matutino): mismo payload del
§2, mismo header `x-pm-key`, y además el body del response podría incluir la
URL de la web app para deep-link de verificación. Hasta entonces, el flujo
soportado es export → import manual (§3) o script (§4).

Limitaciones conocidas (WHOOP 4.0 por BLE): sin SpO2 calibrada ni skin temp
(se computan en cloud); recovery/strain oficiales no viajan — todo score en
esta cadena es recomputación open-source documentada en `rag/wearable`.

## 6. Dónde vive cada cosa

| Pieza | Ruta |
|---|---|
| Endpoint ingest (worker) | `worker/src/notion/proxy.ts` → `handleWearableIngest`, ruta en `worker/src/index.ts` |
| Store local (web) | `src/lib/wearable/wearableStore.ts` (`wearable-daily-v1`, FIFO 90) |
| Feed UserState | `src/lib/rules/userStateFeed.ts` (`buildWearableDomainContext`, `readWearableDaily`) |
| Reglas wearable-aware | `src/data/fitness/rules/fitnessRulesExtended.ts` (`fit:hrv-depressed`, `fit:rhr-elevated`) |
| Indicador UI | `src/components/fitness/WearableStatusChip.tsx` (Fitness → Hoy) |
| Script push | `scripts/wearable_push.py` |
| Tests | `src/lib/wearable/__tests__/wearableStore.test.ts`, `worker/src/__tests__/wearableIngest.test.ts` |
