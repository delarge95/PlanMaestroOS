# 40 — Specs de componentes React (Astro islands, UI español, clases `ds-*`)

> Fuente de verdad: `impl/injury/triage.ts`, `impl/injury/painLog.ts`, `impl/career/composeVariant.ts`,
> `impl/career/fitScore.ts`, `impl/graph/queries.ts`, `impl/worker/contract.ts` + archivos 17/18/19.
> Convenciones globales: islands Astro (`client:visible` para formularios, `client:idle` para tarjetas
> de lectura), todo texto visible en español, estilos solo con clases `ds-*`
> (`ds-card`, `ds-btn`, `ds-input`, `ds-select`, `ds-slider`, `ds-check`, `ds-badge`, `ds-alert`,
> `ds-meter`, `ds-list`, `ds-kbd`), sin estilos inline. Eventos de dominio por `appBus`
> (`src/lib/events/bus.ts`, singleton, archivo 17 §17.1). Prohibido diagnosticar (archivo 18):
> todo texto de lesión lleva `TRIAGE_DISCLAIMER`. Prohibido inventar datos de CV (archivo 19 §19.3):
> todo dato no confirmado es `[PLACEHOLDER …]` visible.

## 0. Mapeos UI → contrato (compartidos)

```ts
// Zona: import único, no hardcodear en el componente.
import type { TriageInput, TriageResult } from '@/lib/fitness/injuryDifferential';
import { BODY_ZONES } from '@/data/fitness/bodyZones'; // string[]
// Tipo UI (archivo 18 §18.1) → TriageInput:
type TipoUI = 'punzante' | 'sordo' | 'quemazón' | 'hormigueo' | 'inestabilidad' | 'inflamación';
const TIPO_MAP: Record<TipoUI, Partial<TriageInput>> = {
  'punzante':      { quality: 'sharp',    tingling: false, instability: false, swelling: false },
  'sordo':         { quality: 'dull',     tingling: false, instability: false, swelling: false },
  'quemazón':      { quality: 'stiff',    tingling: false, instability: false, swelling: false },
  'hormigueo':     { quality: 'electric', tingling: true,  instability: false, swelling: false },
  'inestabilidad': { quality: 'stiff',    tingling: false, instability: true,  swelling: false },
  'inflamación':   { quality: 'swollen',  tingling: false, instability: false, swelling: true },
};
type InicioUI = 'agudo' | 'progresivo' | 'post-sesión'; // → 'traumatic' | 'gradual' | 'post-session'
const INICIO_MAP: Record<InicioUI, TriageInput['onset']> = {
  'agudo': 'traumatic', 'progresivo': 'gradual', 'post-sesión': 'post-session',
};
const RED_FLAGS_5 = [
  'Entumecimiento progresivo', 'Pérdida de fuerza', 'Chasquido con impotencia',
  'Fiebre', 'Dolor nocturno que no cede',
] as const; // 1 marcado → blocked:true, fin del flujo automático (18 §18.1, triage.ts:97)
```

---

## 1. `InjuryCheckin` — formulario 60 segundos → `TriageInput`

Formulario en `src/components/fitness/injury/InjuryCheckin.tsx` (`client:visible`).
Campos: zona (`select` de `BODY_ZONES`), tipo (`select` 6 valores), inicio (`segmented` 3),
mecanismo (texto libre opcional, ej. «press banca»), EVA (`slider` 0–10 con valor visible),
2 interruptores (`rigidez matinal`, `mejora con calentamiento` → `morningStiffness`,
`improvesWithWarmup`), red-flags (`checklist` 5). Botón `Evaluar` + enlace `¿Dónde duele?`
que abre `AnatomyViewer` en modo selección y rellena zona.

```ts
interface InjuryCheckinProps {
  zones?: string[];                       // default BODY_ZONES
  initialZone?: string;
  anatomyPicker?: boolean;                // muestra botón ¿Dónde duele?
  onTriage?: (result: TriageResult, input: TriageInput) => void;
  onPainEntry?: (entry: { dateIso: string; zone: string; eva: number }) => void;
}
type CheckinStatus = 'idle' | 'editing' | 'blocked' | 'done' | 'error';
```

Estado interno: `zona, tipo: TipoUI|null, inicio: InicioUI|null, mecanismo: string, eva: number (5),
rigidez: boolean, calentamiento: boolean, redFlags: Set<string>, status, result: TriageResult|null,
errores: Record<string,string>`. Al marcar tipo se pre-rellenan `tingling/instability/swelling`
según `TIPO_MAP` (editables solo vía cambiar tipo, no checkboxes sueltos: evita combinaciones imposibles).

Eventos emitidos: `appBus.emit('session:pain-reported', { zone, eva, dateIso })` tras evaluar con éxito
(17 §17.1, 18 §18.1); escribe `pain[]` vía `onPainEntry` (revive las 2 reglas muertas, 18 §18.1);
`onTriage(result, input)` para el padre (`GuidedSessionRunner`, `TendonLoadMonitor`).

Pseudocódigo del flujo:

```
alEnviar():
  errores = validar(zona requerida ∈ zones, tipo requerido, inicio requerido, eva 0..10 entero)
  si errores: status='error', pintar ds-alert por campo, return
  input: TriageInput = { zone: zona, onset: INICIO_MAP[inicio], quality: TIPO_MAP[tipo].quality,
    eva, morningStiffness: rigidez, improvesWithWarmup: calentamiento,
    instability/swelling/tingling de TIPO_MAP, mechanism: mecanismo||undefined, redFlags: [...set] }
  result = triage(input)   // puro, triage.ts:96
  entry = { dateIso: hoyYYYYMMDD(), zone: zona, eva }
  onPainEntry(entry); emit('session:pain-reported', entry)
  status = result.blocked ? 'blocked' : 'done'; onTriage(result, input)
render():
  si status idle/editing/error: formulario + checklist red-flags
  si blocked: ds-alert rojo «Derivación profesional» + blockReason + 1 tarjeta unknown/doctor_now + disclaimer + botón «Ver prehab suave»
  si done: top-3 tarjetas (badge alta/media/baja + structureHint + porQué + tests[2] + acción legible + cita) + disclaimer + «Datos usados: regla + chunk»
```

Validación: zona vacía → «Elige una zona»; EVA fuera de rango imposible por slider pero se clamp;
mecanismo máx 140 caracteres; red-flag no bloquea el envío, bloquea el flujo posterior
(`blocked:true`, solo prehab suave, 18 §18.1).

Casos de test UI:

1. Clic `Evaluar` con zona vacía → `status='error'`, `ds-alert` «Elige una zona», no se emite evento.
2. Zona=rodilla, tipo=sordo, inicio=progresivo, EVA=3, sin red-flags → `status='done'`, 3 tarjetas con `disclaimer`, evento `session:pain-reported` emitido una vez.
3. Marcar 1 red-flag (`Fiebre`) + evaluar → `status='blocked'`, banner derivación + `blockReason` con «Fiebre», sin top-3 útil (solo `unknown/doctor_now`), botón prehab visible.
4. Clic `¿Dónde duele?` → abre picker; elegir hombro → `select` zona = hombro.
5. EVA=8 + tipo=inestabilidad + inicio=agudo → tarjeta 1 con acción «Acudir al médico» (`doctor_now`, `actionFor` ligamento EVA≥4).

Qué NO hace: no diagnostica (nunca escribe nombres de patología como certeza, solo `structureHint` +
«podría ser… verifica»); no prescribe fármacos ni infiltraciones; no sustituye la sesión por sí solo
(eso es E3 `lesion:<slug>`); no guarda en `localStorage` directo (usa `onPainEntry` → `logPain`).

---

## 2. `PainWeekCard` — 7 días EVA por zona + regla de derivación visible

Tarjeta de Hoy-fitness (`client:idle`). Lee `log: PainEntry[]`, muestra serie de 7 días de la zona,
tendencia y decisión de derivación con el texto literal de la regla. Migra aquí el check-in de
`PrehabBlock` (18 §18.4): el botón `+ Registrar hoy` abre mini-input EVA.

```ts
import type { PainEntry, PainTrend, ReferralDecision } from '@/lib/fitness/painLog';
interface PainWeekCardProps {
  log: PainEntry[];                 // fuente: logPain(), tope 30/zona
  zone: string;
  zones?: string[];                 // selector de zona si hay >1
  onZoneChange?: (zone: string) => void;
  onAddToday?: (entry: PainEntry) => void;  // padre aplica logPain(log, entry)
}
```

Estado interno: `adding: boolean, evaHoy: number, error: string|null`. Derivados puros
(sin estado): `serie = zoneSeries(log, zone)`, `trend = painTrend(log, zone)`,
`decision = referralDue(log, zone)` — recalcular en cada render, nunca cachear.

Pseudocódigo:

```
serie = zoneSeries(log, zone).slice(-7)
trend = painTrend(log, zone)        // <3 registros → 'insufficient-data'
decision = referralDue(log, zone)   // EVA≥8 | 2 deltas + | 7d sin mejora → refer:true
render():
  ds-card: título «Dolor · {zone}», selector zona, tira 7 celdas (fecha corta + EVA, vacío = «—»)
  badge tendencia: mejorando / estable / empeorando / «faltan datos»
  si decision.refer: ds-alert rojo «Derivación sugerida: {reason}» + «No seguimos auto-ajustando»
  si no: ds-alert neutro «En seguimiento: {reason}»
  botón «+ Registrar hoy» → slider 0..10 + Guardar → onAddToday({ dateIso: hoy, zone, eva })
```

Texto de regla siempre visible (pie, `ds-kbd`): «Empeora 2 días seguidos o sin mejora en 7 días → derivación».

Casos de test UI:

1. Log con EVA 2,3,5 últimos 3 → badge «empeorando» + alerta derivación «Empeora 2 días seguidos».
2. 7 registros misma zona sin mejora (último ≥ primero) → alerta «Sin mejora en 7 días».
3. Último EVA=8 → alerta «EVA 8 ≥ 8: derivación inmediata» aunque la tendencia sea estable.
4. Zona sin registros → «sin registros», tira vacía, botón `+ Registrar hoy` visible; guardar EVA=4 → `onAddToday` llamado con `{dateIso: hoy, zone, eva: 4}`.
5. Cambiar selector a otra zona → serie y tendencia se recalculan (no persiste la anterior).

Qué NO hace: no edita ni borra histórico (solo upsert por fecha+zona vía `logPain` en el padre);
no diagnostica ni propone ejercicios (eso es `InjuryCheckin`/E3); no promedia zonas distintas;
no oculta la alerta una vez `refer:true` (persiste hasta cambio de zona o nuevo registro que la cancele).

---

## 3. `VariantComposer` — selects empresa+rol → preview `CVVariant` → checklist → export

Isla en career (`client:visible`). Selects de empresa y rol (`RoleSlug` 5 valores), preview del
`CVVariant` generado por `composeVariant()` procedural, desglose `fitScore()` anti-caja-negra y
checklist de `placeholders`; export bloqueado hasta resolver todos (19 §19.3, desbloquea las 8
`cvPendingConfirmations` en 1 mensaje consolidado).

```ts
import type { CVVariant, RoleSlug, ProjectLite, CompanyLite } from '@/lib/career/composeVariant';
import type { CandidateProfile, FitScore } from '@/lib/career/fitScore';
interface VariantComposerProps {
  companies: CompanyLite[];         // { id, name, stack[] }
  roles: RoleSlug[];                // 5 slugs de composeVariant.ts:37
  projects: ProjectLite[];          // bullets defendibles + demoUrl real o '[DEMO_URL_PENDIENTE]'
  candidateStack: string[];
  profile: CandidateProfile;        // para fitScore anti-caja-negra
  pendingConfirmations: string[];   // ej. email/tel/ubicación/URLs/métricas/demo (8)
  onResolve?: (key: string, value: string) => void; // cierra 1 placeholder
  onExport?: (variant: CVVariant) => void;          // solo si placeholders.length===0
}
```

Estado interno: `companyId: string|null, role: RoleSlug|null, variant: CVVariant|null,
fit: FitScore|null, resolved: Record<string,string>`. `variant` se deriva con
`composeVariant(company, role, projects, candidateStack, pendientesNoResueltos)`; `fit` con
`fitScore(profile, { …company, seniority, remotePolicy, workingLanguage, recentSignal })`.
`skillOrder` pinta skills de la oferta primero; `projectIds` en orden `fitScore desc`.

Pseudocódigo:

```
alCambiar(empresa|rol):
  si ambos elegidos:
    variant = composeVariant(company, role, projects, candidateStack, pendientesAbiertos)
    fit = fitScore(profile, companyViva)
render():
  selects empresa + rol (ds-select, labels «Empresa», «Rol objetivo»)
  si !variant: placeholder «Elige empresa y rol para previsualizar»
  si variant:
    headline, summary (con [PLACEHOLDER_SUMMARY] visible si aplica), lista proyectos ordenados,
    skillOrder como chips (coincidentes destacados), fitNote + desglose reasons (factor/puntos/cita)
    checklist placeholders: cada uno con input + «Marcar resuelto» → onResolve
    botón Exportar: disabled si placeholders.length>0 con tooltip «Resuelve N pendientes»
    alExportar(): si placeholders.length===0 → onExport(variant)
```

Casos de test UI:

1. Sin empresa elegida → preview vacío, export oculto/deshabilitado.
2. Elegir empresa+rol → headline de plantilla `ROLE_HEADLINES[role]` + summary con encaje `hits/stack`.
3. Con 2 placeholders abiertos → botón export `disabled` + «Resuelve 2 pendientes»; resolver ambos → habilitado; clic → `onExport` con `CVVariant` sin placeholders.
4. Proyecto sin demo real muestra `[DEMO_URL_PENDIENTE]`, nunca URL inventada.
5. Desglose fit visible junto al número (5 filas stack/seniority/remote/language/signal con puntos y cita).

Qué NO hace: no inventa email, URLs, títulos ni métricas (rechaza el `cvComposer` que los inventaba,
composeVariant.ts:3); no reordena proyectos por otro criterio que `hits` de stack; no exporta con
placeholders (puerta dura); no edita bullets de proyecto (solo `doc-01` defendibles, E4 portafolio aparte).

---

## 4. `GraphInspector` — buscador + ficha + vecinos + las 5 queries como acciones

Explorador del grafo de vida (`client:visible`). Buscador por id/etiqueta, ficha del nodo
(kind, etiqueta, citas), lista de vecinos (requiere/desbloquea/carga/estresa) y las 5 queries de
aceptación (queries.ts) como botones de acción con resultado pintado. Sin las 5 en verde el grafo
no existe (queries.ts:2).

```ts
import type { GraphNode } from '@/lib/graph/types';
import type { LifeGraphEngine } from '@/lib/graph/engine';
type InspectorAction = 'what-loads' | 'what-stresses' | 'unlock-path' | 'feed-for' | 'fits-edge';
interface GraphInspectorProps {
  engine: Pick<LifeGraphEngine,
    'getNode' | 'incomingEdges' | 'propagateInjuryImpact' | 'findSubstitutes' |
    'incoming' | 'outgoing' | 'toJSON'>;
  initialNodeId?: string;
  evaDefault?: number;              // default 4 = vetoThreshold
  onSelectNode?: (id: string) => void;
}
interface InspectorState { query: string; selectedId: string | null; action: InspectorAction | null; eva: number; goal: 'deficit' | 'mantenimiento' | 'volumen'; }
```

Pseudocódigo:

```
buscar(query): engine.toJSON() filtrar nodos por id/label incluye(query) → ds-list (máx 20)
alSeleccionar(id): ficha = engine.getNode(id); vecinos = incoming+outgoing resumidos
acciones (requieren nodo seleccionado, salvo feed-for):
  [Qué lo carga]      → whatLoads(engine, muscleId) ordenados por peso-evidencia
  [Qué lo estresa]    → whatStresses(engine, structureId, eva, veto=4) → vetados + sustitutos (si eva<4: vetados=[])
  [Ruta desbloqueo]   → unlockPath(engine, skillId) → { prerequisites (requires⁻¹), next (unlocks) }
  [Comida p/objetivo] → feedFor(engine, goal) → { recipes, sessions } que apuntan a goal:{goal}
  [Encaje proyecto]   → fitsEdge(projectId, companyId, score0to10, reasons) → arista fits + weight + cite (puente con career/fitScore)
render(): buscador ds-input + resultados + ficha (kind badge + citas) + vecinos clicables + panel acciones + resultados como ds-list clicable (clic → selecciona)
```

Mapeo kind→acción sugerida: `Muscle→Qué lo carga`, `Structure→Qué lo estresa`,
`Skill→Ruta desbloqueo`, `Goal→Comida p/objetivo`, `Project+Company→Encaje`.

Casos de test UI:

1. Buscar «sentadilla» → aparece en resultados; clic → ficha con kind `Exercise` + vecinos.
2. Con músculo seleccionado, clic `Qué lo carga` → lista ordenada por peso desc (verifica 2 con pesos distintos).
3. Con estructura + EVA=2 (<4), clic `Qué lo estresa` → vetados vacíos, sustitutos vacíos.
4. Con skill, clic `Ruta desbloqueo` → prerequisitos (`requires` invertida) + siguiente (`unlocks`).
5. `Comida p/objetivo` con goal=volumen → solo nodos `Recipe`/`Session` con arista `targets → goal:volumen`.

Qué NO hace: no muta el grafo (sin crear/editar nodos ni aristas, solo lectura + `fitsEdge` como
vista previa no persistida); no ejecuta el worker ni RAG; no sustituye `AnatomyViewer` (solo enlaza
por id de estructura); no cachea resultados entre nodos (cada acción re-ejecuta la query pura).

---

## 5. `UnavailableCard` — 4 estados con 1 acción cada uno

Tarjeta de degradación elegante (`client:idle`, sin JS pesado). Un prop `state` con 4 variantes
cerradas; cada una pinta icono, título, mensaje (español, sin tecnicismos) y exactamente 1 acción
primaria. Cubre: worker sin key (`NO_KEY_501`, contract.ts:38), RAG vacío, datos vacíos y offline.

```ts
type UnavailableState = 'no-worker' | 'no-rag' | 'no-data' | 'offline';
interface UnavailableCardProps {
  state: UnavailableState;
  detail?: string;                  // ej. docId, entidad vacía, job afectado — jamás texto libre de salud
  onAction?: (state: UnavailableState) => void; // default: comportamiento por defecto abajo
}
const COPY: Record<UnavailableState, { title: string; msg: string; cta: string }> = {
  'no-worker': { title: 'IA no disponible', msg: 'La app sigue 100% funcional sin IA.', cta: 'Ver qué puedo hacer sin IA' },
  'no-rag':    { title: 'Sin base de conocimiento', msg: 'Aún no hay documentos para esta tarea.', cta: 'Abrir biblioteca' },
  'no-data':   { title: 'Sin datos todavía', msg: 'Registra tu primer dato para activar esta vista.', cta: 'Crear primer registro' },
  'offline':   { title: 'Sin conexión', msg: 'Tus datos locales están a salvo.', cta: 'Reintentar' },
};
```

Pseudocódigo:

```
render(state):
  ds-card ds-alert neutro (offline = aviso, resto = info) + icono + title + msg + detail? (truncate 120)
  botón ds-btn primario con cta[state] → onAction(state) ?? default:
    no-worker → scroll/modal «modo sin IA» (lista AI_ACTIONS no disponibles + alternativa manual)
    no-rag    → navegar a /library (curar 1 entidad = 1 chunk, formato LOTE-1, archivo 18 §18.5)
    no-data   → foco al creador correspondiente (InjuryCheckin / VariantComposer / plan)
    offline   → window.location.reload() o revalidar fetch
  nunca más de 1 botón primario (link secundario «Detalles» opcional vía <details>)
```

Detección (padre, no la tarjeta): `no-worker` si respuesta worker `501` (`NO_KEY_501`);
`no-rag` si `contextChunkIds=[]` o RAG 0 chunks; `no-data` si store/entidad vacía;
`offline` si `navigator.onLine===false` o fetch falla por red.

Casos de test UI:

1. `state='no-worker'` → título «IA no disponible», CTA única; clic → abre modal modo sin IA, app usable.
2. `state='no-rag'` → clic CTA → navega a biblioteca (no intenta llamar al worker).
3. `state='no-data'` → clic CTA → foco en el creador (ej. abre `InjuryCheckin`).
4. `state='offline'` → clic Reintentar sin red → sigue visible, sin crash ni spinner infinito.

Qué NO hace: no reintenta el worker en bucle ni pide la API key al usuario final (es config de
despliegue, `WORKER_SECRET_KEY/GEMINI_API_KEY`); no muestra stacktraces ni `status` HTTP crudos;
no mezcla estados (1 tarjeta = 1 estado, prioridad `offline > no-worker > no-rag > no-data`);
no envía jamás texto libre de salud al worker (solo `contextChunkIds`, contract.ts `DraftRequest`).

---

## 6. `ApprovalMeter` — % aprobados IA semanal por job con puerta <50%

Medidor de confianza del orquestador (Hoy, `client:idle`). Agrega `AiDraft[]` por `job`
(mañana/noche/career — archivo 17 §17.3, 19 §19.2) y semana ISO; barra % aprobados, conteos y
puerta ADR-5: si <50% dos semanas seguidas, job pausado (requiere reactivación manual).

```ts
import type { AiDraft } from '@/worker/contract'; // { requiresApproval, task, ... }
type JobKind = 'morning-plan' | 'evening-review' | 'career-research';
interface ApprovalMeterProps {
  job: JobKind;
  weekIso: string;                  // 'YYYY-Www'
  approved: number;                 // decisiones humanas aprobar
  rejected: number;                 // rechazar/editar-sustancial cuenta como no-aprobado
  pending?: number;                 // borradores sin decidir (no entran al %)
  prevWeekBelow50?: boolean;        // la semana anterior cerró <50%
  paused?: boolean;
  onOpenReview?: (job: JobKind) => void; // abre AiDraftReview
  onPause?: (job: JobKind) => void;
  onResume?: (job: JobKind) => void;
}
```

Pseudocódigo:

```
total = approved + rejected
pct = total===0 ? null : round(100*approved/total)
puerta = pct!==null && pct<50
render():
  ds-card: «Aprobación IA · {job} · {weekIso}» + ds-meter (pct o «sin decisiones»)
  conteos «Aprobados N · Rechazados M · Pendientes P» + desglose: el % SIEMPRE con conteos (anti-caja-negra, como fitScore)
  si puerta && prevWeekBelow50: ds-alert rojo «Puerta <50% dos semanas: job pausado» + botón Reanudar (manual)
  si puerta && !prevWeekBelow50: ds-alert ámbar «Bajo 50%: si se repite, el job se pausa (ADR-5)»
  si paused: badge «pausado» + botón Reanudar; botón «Revisar borradores» → onOpenReview (AiDraftReview Aprobar/Editar)
  jobs runMorningPlanJob/runEveningReviewJob consultan paused antes de emitir time:morning|evening
```

Casos de test UI:

1. 7 aprobados + 3 rechazados → «70%», barra 70, sin alerta.
2. 2 aprobados + 6 rechazados (25%) primera semana → alerta ámbar ADR-5, job sigue activo.
3. 25% con `prevWeekBelow50=true` → alerta roja + badge pausado, botón Reanudar visible; clic → `onResume(job)`.
4. 0 decisiones (solo pendientes) → «sin decisiones», sin % ni puerta, botón Revisar visible.
5. Clic `Revisar borradores` → `onOpenReview(job)` abre `AiDraftReview` con Top3 aprobable.

Qué NO hace: no aprueba ni edita borradores (eso es `AiDraftReview`); no calcula el % con pendientes;
no pausa automáticamente con 1 sola semana mala (exige 2, ADR-5); no mezcla jobs (1 medidor = 1 job +
1 semana); no registra contenido sensible (solo conteos y `task`, `auditLogger` tipo+fecha, 17 §17.1).

---

## Apéndice — matriz isla/evento/dato

| Componente | Isla Astro | Emite (bus/props) | Lee (puro) | Escribe |
|---|---|---|---|---|
| `InjuryCheckin` | `client:visible` | `session:pain-reported`, `onTriage`, `onPainEntry` | `triage()`, `BODY_ZONES` | `pain[]` vía padre |
| `PainWeekCard` | `client:idle` | `onAddToday`, `onZoneChange` | `zoneSeries`, `painTrend`, `referralDue` | nada directo (padre `logPain`) |
| `VariantComposer` | `client:visible` | `onResolve`, `onExport` | `composeVariant`, `fitScore` | variante (no persiste) |
| `GraphInspector` | `client:visible` | `onSelectNode` | `whatLoads`, `whatStresses`, `unlockPath`, `feedFor`, `fitsEdge` | nada (lectura) |
| `UnavailableCard` | `client:idle` | `onAction` | `NO_KEY_501`, `navigator.onLine` | nada |
| `ApprovalMeter` | `client:idle` | `onOpenReview`, `onPause`, `onResume` | conteos `AiDraft` + `prevWeekBelow50` | flag `paused` vía padre/jobs |
