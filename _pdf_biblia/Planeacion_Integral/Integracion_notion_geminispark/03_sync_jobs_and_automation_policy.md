# 03 · Sincronización, jobs y política de automatización

## Principio rector
Automatizar preparación, clasificación, recordatorios y borradores; mantener al usuario como aprobador de acciones externas o sensibles. La automatización debe reducir rumia y fricción, no generar nuevas obligaciones ni decisiones opacas.

## Direcciones de sincronización
| Entidad | Dueño | Dirección permitida MVP | Frecuencia |
|---|---|---|---|
| Tareas y plan diario | Notion | Notion → app; app → worker con aprobación | evento o manual |
| Aplicaciones laborales | Notion | Notion → app; borradores IA → Notion | manual/evento |
| Repositorios y PRs | GitHub | GitHub → worker → Notion resumen | webhook/diario |
| Fitness de sets | App local | app → export/backup; resumen → Notion | fin de sesión |
| Métricas corporales | Notion/App | app/Notion → resumen | manual/diario |
| Sheets | Bridge temporal | Notion → Sheets, solo reportes | programado |

No habilitar Notion↔Sheets bidireccional hasta que existan owner, `externalId`, log de cambios y estrategia de conflicto por entidad.

## Jobs del MVP
### Mañana — propuesta, no imposición
- Leer el plan diario, tareas próximas y bloqueadores.
- Proponer Top 3 con máximo tres elementos y una primera acción de menos de 10 minutos para cada uno.
- No reordenar ni cerrar tareas automáticamente.

### Mediodía — opcional
- Recordatorio contextual de bloque B o hábito de idioma solo si el usuario lo habilita.
- Evitar notificaciones acumulativas.

### Noche — cierre asistido
- Resumir sesiones/acciones registradas.
- Preguntar qué mover, completar o pausar.
- Proponer un borrador de plan de mañana.
- No evaluar “cumplimiento” de forma moralizante ni modificar datos de salud sin confirmación.

## Automatizaciones de carrera
Permitidas:
- detectar vacantes desde fuentes autorizadas;
- resumir requisitos;
- comparar con perfil y portfolio;
- crear borrador de aplicación o seguimiento;
- crear tarea de revisión.

Requieren aprobación humana:
- enviar CV/carta/mensaje;
- aplicar a una vacante;
- publicar, editar o eliminar perfil;
- contactar reclutadores;
- compartir datos personales.

## Automatizaciones fitness
Permitidas:
- proponer la rutina activa y mostrar último desempeño;
- detectar PR a partir de sesión guardada;
- recordar prehab configurado;
- resumir adherencia.

No permitidas sin confirmación profesional/usuario:
- diagnóstico, tratamiento, cambios automáticos de carga por dolor, recomendaciones médicas personalizadas o interpretación clínica.

## Requisitos técnicos de jobs
- Idempotency key por job/entidad.
- Cola con máximo de concurrencia y rate limit Notion de promedio 3 req/s. [web:101]
- Retry con backoff y jitter para 429/5xx; no reintentar indefinidamente.
- Dead-letter queue o lista de fallos revisable.
- Dry-run disponible para todos los jobs de escritura.
- Log de auditoría con diff antes/después para cambios automatizados.

## Tiempos iniciales sugeridos
No fijar horarios rígidos hasta probar carga real. Comenzar con:
- preparación matinal manualmente disparable;
- cierre nocturno manualmente disparable;
- digest diario de GitHub/Carrera;
- ningún job que envíe comunicaciones.

Tras dos semanas de uso, medir utilidad y ajustar horarios/volumen de notificaciones.

## Estado de Implementación
- **Guardián de Políticas**: Implementado en `src/lib/sync/automationPolicy.ts` con la función `requiresHumanApproval()` para auditar e inhabilitar envíos automáticos de comunicaciones, aplicaciones o modificaciones prescritas sin consentimiento explícito.
- **Motor de Sync e Idempotencia**: Clase `SyncEngine` implementada en `src/lib/sync/syncEngine.ts` con control de `idempotencyKey`, limitador de tasa Notion (~3 req/s en `RateLimiter`), reintentos con backoff exponencial/jitter y Dead Letter Queue (DLQ).
- **Jobs MVP**: Definidos en `src/lib/sync/jobDefinitions.ts`:
  - `runMorningPrepJob`: Propuesta de Top 3 con micro-acciones <10 min (sin reordenar ni cerrar tareas).
  - `runEveningAssistJob`: Resumen y propuesta de borrador sin tono moralizante.
  - `runGitHubDigestJob`: Digest de actividad de repos a Notion.
  - `runCareerDraftJob`: Detección y borrador de aplicaciones laborales.
- **CLI Runner de Jobs**: `scripts/runSyncJobs.ts` soporta ejecución individual o masiva en modo `--dryRun` o `--live`.
