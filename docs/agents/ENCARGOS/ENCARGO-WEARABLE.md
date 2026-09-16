# ENCARGO: WEARABLE — Integración WHOOP open-source (AG-WEAR)

> Fase de INVESTIGACIÓN completada el 2026-09-16. Este documento contiene el
> hallazgo, la selección de repositorio y el plan de integración con la app web
> (Astro 5 + React 19 + TS, worker Cloudflare `plan-maestro-ia`, Notion, motor
> de reglas sobre UserState v1).

---

## 1. INVESTIGACIÓN — repos analizados (WebFetch + WebSearch, nada inventado)

| Repo | Stack | Estado (sep-2026) | Features BLE | Captura | Licencia |
|---|---|---|---|---|---|
| **SKULLFIRE07/openwhoop** | NINGUNO — solo README | 2 commits, 2★. **Vaporware**: promete interceptores BLE/protocol maps "próximamente", cero código | Ninguna implementada | — | MIT (badge) |
| **ryanbr/noop** (fork de muftiarfan/noop) | Swift (macOS 13+) + Kotlin (Android 8+), GRDB/SQLite | 881★, 268 forks, 2861 commits. Activo. El más completo COMO APP | WHOOP 4.0 FULL (HR, R-R, HRV RMSSD/SDNN, recovery, strain, sueño 4 fases, batería, skin temp, SpO2, respiración); 5.0/MG experimental; Oura exp. | BLE directo + offload ~14 días de historial | **PolyForm Noncommercial** |
| **OpenStrap/edge** (+org) | Flutter/Dart (+ protocol/analytics/research/backend) | 585★, 101 forks, 1305 commits, última actualización 2026-09-14. Prensa: Hackaday, Adafruit, Android Central, TechRadar | WHOOP 4.0/5/MG + straps HR estándar (0x180D): HR, HRV, sueño, recovery, strain, stress, workouts GPS, journal | BLE directo (decoder propio on-device) | **MIT** |
| **OpenStrap (org completa)** | 7 repos: edge, protocol (Dart puro zero-dep), analytics (Dart), research (Python+bleak), backend (TS), icons, .github | Todos MIT, muy activa | Decoder multi-generación (4.0 "Harvard" 6108xxxx, 5.0 "fd4b"), analítica citada, referencia de protocolo ejecutable | research_playground.py: scan/monitor/sync/live con bleak | MIT |

### Linaje upstream (importante para no perder la pista)

- **bWanShiTong/openwhoop** (Rust) — el original real que reventó el protocolo 4.0
  (decode type-47 + clasificador de sueño). El repo ya no resuelve (404); su doc
  sobrevive en `bwanshitong-reverse-engineering-whoop-post.mintlify.app`.
- **jogolden/whoomp** — origen del CRC/framing; también 404 (citado por FINDINGS.md).
- **johnmiddleton12/wearable** (my-whoop) — 310★, Swift iOS + **servidor Python
  FastAPI/TimescaleDB**; su `FINDINGS.md` es la referencia de protocolo más completa
  y validada en hardware (UUIDs, offsets, opcodes, flujo de sync).
- **b-nnett/goose** — 2.7k★, SwiftUI+Rust, WHOOP 5.0 ("puffin"); **archivado jun-2026**.
- **cs-balazs/gowhoop** — Go+ClickHouse+Grafana; patrón bridge homelab demostrado.
- **christianmeurer/whoop-reader** — Python CLI temprano; su mapa UUID está marcado
  como **no fiable** por FINDINGS.md (no usar).

### Protocolo BLE WHOOP (síntesis validada)

- **4.0**: servicio custom `61080001-8d6d-82b8-614a-1c8cb0f8dcc6`; chars
  `61080002` write (comandos), `61080003`/`04`/`05`/`07` notify (respuestas,
  eventos, datos, memfault). Estándar sin bond: `0x180D`/`0x2A37` (HR+R-R),
  `0x180F` batería, `0x180A` device info. Framing `[0xAA][len u16][crc8-0x07]
  [type][seq][cmd][payload pad×4][crc32-zlib]`, reensamblado por longitud.
  Bond just-works forzado con 1 write confirmado a `61080002`. Sync: set-clock →
  5 init-packets → echo de token 8B (inner[13:21]) con write acknowledged tras
  persistir → HistoryComplete. La banda NO borra su flash (~14 días).
- **5.0/MG**: servicio `fd4b0001-…`, CRC16-Modbus, paquetes "puffin", un solo bond
  cifrado a la vez; HR vivo vía perfil estándar sin bond. Estado: experimental.
- **Sin membresía se obtiene**: HR en vivo, intervalos R-R (→ HRV local), historial
  ~14 días, IMU, batería. **NO viaja por BLE en 4.0**: SpO2 calibrada y skin temp
  (computadas en cloud desde PPG raw) ni los scores recovery/strain/sueño —
  edge/noop los recalculan local con métodos publicados (RMSSD, Karvonen, etc.).
- **API oficial WHOOP**: inútil sin membresía activa (OAuth no completa).

### Web Bluetooth (alternativa evaluada)

Solo Chromium (no Safari/Firefox/iOS), HTTPS + user gesture + pestaña enfocada,
sin background, **sin gestión de bonding** → no sirve para el servicio custom
(requiere link cifrado). Único uso realista: HR estándar `0x180D` en vivo como
feature secundaria. Nadie ha demostrado Web Bluetooth contra el protocolo custom.

---

## 2. REPOSITORIO SELECCIONADO — OpenStrap (org): `research` + `protocol` + `analytics` (+ `edge` como app de referencia)

**Justificación:**
1. **Licencia MIT** (noop es PolyForm Noncommercial → su código NO se puede reutilizar).
2. **Modularidad que encaja con nuestro stack**: `research` trae un cliente Python
   single-file con `bleak` (corre en Windows 10+ nativo — validación inmediata en el
   PC del usuario), `protocol` es un decoder Dart puro sin dependencias (port
   mecánico a TypeScript para la web), `analytics` documenta los algoritmos con citas.
3. **Activo** (última actualización 2026-09-14) y con prensa/tracción.
4. Soporta 4.0 + 5/MG (aunque 4.0 es lo maduro).
5. `backend` (TS) demuestra el patrón self-hosted que replicaremos en el worker.

Descartes: SKULLFIRE07/openwhoop (sin código), noop (licencia + stack nativo no
portable), goose (archivado), my-whoop (referencia de lectura — FINDINGS.md es
canon — pero 1 commit y sin mantenimiento claro), whoop-reader (UUIDs no fiables).

---

## 3. ARQUITECTURA PROPUESTA

```
┌──────────────────┐   BLE GATT (bond just-works,    ┌─────────────────────────────┐
│  WHOOP 4.0/5.0   │   servicio 61080001/fd4b)       │  pm-whoop-bridge (NUEVO)    │
│  (banda)         │◄───────────────────────────────►│  Python + bleak (Win10+)    │
└──────────────────┘                                 │  · set-clock + init packets │
       ▲                                             │  · live HR/R-R (0x28/2A37)  │
       │ HR vivo opcional (bond-free 0x180D)         │  · history sync (0x2F+token)│
       │                                             │  · decode: framing+CRC8/32  │
┌──────────────────┐                                 └──────────────┬──────────────┘
│  App web (Astro) │                                                │ POST /wearable/ingest
│  · decoder TS     │                                   JSON normalizado │ Header x-pm-key
│    (port de       │                                                ▼
│    openstrap/     │                                 ┌─────────────────────────────┐
│    protocol)      │                                 │  Worker Cloudflare          │
│  · panel wearable │◄──── GET /wearable/today ──────│  plan-maestro-ia            │
│  · Web Bluetooth  │                                 │  · valida x-pm-key          │
│    (solo HR vivo) │                                 │  · escribe Notion:          │
└────────┬─────────┘                                 │    Fitness Measurements     │
         │                                           │    Fitness Sessions         │
         ▼                                           └──────────────┬──────────────┘
┌──────────────────────────────────────────────────────────────────┐│
│ userStateFeed.ts (extensión WHOOP) → UserState v1 → MOTOR DE     │◄┘
│ REGLAS (gates por sueño real, HRV z-score, RHR, strain/ACWR)     │
└──────────────────────────────────────────────────────────────────┘
```

Flujo: la banda habla BLE solo con el bridge local (PC con BT); el bridge decodifica
y sube JSON al worker (mismo patrón auth que `/notion/fitness-session`); la web app
nunca toca BLE salvo HR vivo opcional; el motor de reglas consume vía UserState.

---

## 4. FASES DE IMPLEMENTACIÓN

| Fase | What | How | Esfuerzo |
|---|---|---|---|
| **F0 — Validación de protocolo** | Confirmar en hardware que el PC ve la banda y el sync funciona | Clonar `OpenStrap/research`, correr `research_playground.py scan/info/sync/live` con bleak en Windows; capturar fixtures HEX para tests | 1–2 sesiones |
| **F1 — pm-whoop-bridge** | Servicio local que sincroniza y normaliza | Script Python (bleak) reutilizando framing/decoders de research: set-clock, init, sync histórico, live HR; salida `wearable-daily.json` (sleep, HRV RMSSD nocturno, RHR, strain local, batería) + `wearable-sessions.json` (workouts por HR). Task Scheduler opcional | 2–3 días |
| **F2 — Worker ingest** | Endpoint de entrada y persistencia | `POST /wearable/ingest` (x-pm-key) en `worker/src/index.ts` + módulo `worker/src/wearable/`: upsert diario a Notion Fitness Measurements (fecha como clave), sesiones detectadas a Fitness Sessions | 1–2 días |
| **F3 — Feed UserState + UI** | Datos objetivos en el contrato y panel visual | Extender `userStateFeed.ts`: DailyLog.sleepHours/sleepQuality desde WHOOP (el auto-reporte pasa a fallback), campos opcionales nuevos `hrvMs`/`restingHr` (v1 permite opcionales sin breaking). Panel React "Wearable" con tendencias 7/30 d | 2–3 días |
| **F4 — Motor de reglas** | Gates objetivos | Reglas nuevas/extendidas: (a) sueño real <6h → gate de volumen (sustituye el proxy actual), (b) HRV < −1 SD de baseline 7d → reducir intensidad, (c) RHR +5% sobre baseline → flag fatiga/enfermedad, (d) strain/ACWR objetivo para reglas de volumen existentes | 1–2 días |
| **F5 (opcional) — Decoder TS + Web Bluetooth** | Visualización cruda en web y HR vivo | Port de `openstrap_protocol` (Dart puro → TS puro, CRC8/CRC32 + layouts) para replay de fixtures; `navigator.bluetooth` filtrando `heart_rate` service para FC en vivo en Chromium | 2–3 días |

Total estimado: **7–12 sesiones**. F0 es go/no-go: si el PC no ve la banda, parar y
reevaluar (banda 5.0/MG → usar edge en Android como fuente y saltar a F2 vía export).

---

## 5. MAPEO DE DATOS WHOOP → STORES EXISTENTES

| Dato WHOOP (vía bridge) | Destino | Nota |
|---|---|---|
| Duración de sueño + eficiencia + staging | `DailyLog.sleepHours` + `sleepQuality` (UserState) y prefill del biofeedback clínico | Deja de ser auto-reporte; el clinicalStore conserva energía/ansiedad/dolor subjetivos |
| HRV RMSSD nocturno, RHR | `DailyLog.hrvMs?`, `DailyLog.restingHr?` (campos opcionales NUEVOS en UserState v1 — permitido sin breaking) | Baseline 7/30 d calculado en vistas derivadas del contrato |
| Workouts auto-detectados (HR zones, duración) | `TrainingSession` (pattern `cardio`) + Notion **Fitness Sessions** | Enriquece el ACWR actual |
| SpO2 / skin temp (SOLO si banda 5.0/MG) | Notion **Fitness Measurements** | En 4.0 NO existen por BLE (limitación documentada) |
| Batería / estado del device | Estado en UI del panel wearable | Cmd 26/98 |
| Strain diario / semanal local | Contexto del motor de reglas (`context.domain`) | Computado por el bridge con métodos de `analytics` (no es el score oficial) |

## 6. CÓMO ALIMENTA EL MOTOR DE REGLAS

- **Sueño objetivo**: los gates actuales que usan `sleepHours` del biofeedback pasan a
  consumir el dato medido (proxy → real). `energy/anxiety/pain` siguen siendo subjetivos
  y se correlacionan en `context.domain` (p.ej. energía percibida baja + sueño WHOOP
  bueno → buscar otras causas).
- **Readiness barato**: z-score de HRV (7d) + delta RHR como gate de intensidad —
  equivalente open-source del recovery sin pagar membresía.
- **ACWR objetivo**: las reglas de volumen (catálogo U1, 39 reglas) reciben strain
  real de cardio en lugar de solo volumen de series.
- Ninguna regla inventa datos: si el bridge no corrió (banda no conectada), el feed
  cae al auto-reporte existente y se marca `source: 'self-report'` (REGLA DURA §0.1).

## 7. RIESGOS Y MITIGACIONES

| Riesgo | Mitigación |
|---|---|
| Firmware OTA de WHOOP rompe layouts/opcode | No volver a la app oficial tras adoptar (5.0: además solo 1 bond); tests del decoder contra fixtures HEX de F0; pin de versión de firmware documentado |
| Web Bluetooth no gestiona bonding | Por diseño: captura completa SOLO vía bridge local; Web Bluetooth limitado a HR vivo 0x180D (feature secundaria) |
| 4.0 sin SpO2/skin temp por BLE | Gestionar expectativas: métricas reales = HR, R-R/HRV, sueño, IMU, batería. Si se exigen SpO2/temp → banda 5.0/MG (vía edge) |
| "Groundhog Day": token 8B mal ecoado → lote infinito | Escribir el ack (cmd 23) SOLO tras persistir, con write acknowledged (lección documentada en research/FINDINGS) |
| Reboot de banda invalida clockRef | Re-set-clock en cada conexión del bridge |
| Legal/ToS | Uso personal de interoperabilidad, sin redistribuir firmware ni assets WHOOP; solo código MIT propio/OpenStrap; el código de noop (PolyForm) NO se copia — solo sus papers/métodos |
| Fricción operativa (correr el bridge) | Task Scheduler diario + indicador "último sync" en la UI; el sistema degrada a self-report sin datos |

## 8. HARDWARE NECESARIO

- Banda **WHOOP 4.0** (protocolo maduro, recomendada para F0–F4) o 5.0/MG (experimental).
- PC **Windows 10+ con Bluetooth LE** (bleak soporta WinRT nativo) — el del usuario sirve.
  Alternativa: Android 8+ con `OpenStrap/edge` instalado como capturador.
- NO se necesita Raspberry Pi ni dongle BLE especial.

## 9. FUENTES (para citar en implementación)

- `github.com/OpenStrap/{edge,protocol,analytics,research,backend}` (MIT)
- `github.com/johnmiddleton12/wearable` — `FINDINGS.md` (canon del protocolo 4.0)
- `github.com/ryanbr/noop` — algoritmos RMSSD/recovery/strain (referencia, no copiar código)
- `bwanshitong-reverse-engineering-whoop-post.mintlify.app/protocol/ble-services`
- MDN Web Bluetooth API + Chrome docs (limitaciones plataforma/bonding)
- Síntesis RAG: `rag/wearable/fuentes/whoop-ble--protocolo.md` (chunks wear-*)
