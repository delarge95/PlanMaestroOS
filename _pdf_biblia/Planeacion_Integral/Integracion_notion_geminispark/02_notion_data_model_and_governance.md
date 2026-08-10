# 02 · Modelo de datos Notion y gobernanza

## Principio
No crear una única base por área con campos heterogéneos. Usar bases pequeñas con relaciones y convenciones estables. Las cinco pestañas actuales de Google Sheets son un prototipo útil, no el esquema final.

## Bases del MVP
### 1. Areas
Campos: `Nombre`, `Icono`, `Estado`, `Orden`, `Descripción breve`.
Valores iniciales: Agenda, Fitness, Carrera, Tesis, Idiomas.

### 2. Projects
Campos: `Nombre`, `Área (relación)`, `Estado`, `Objetivo`, `Siguiente acción`, `Prioridad`, `Fecha objetivo`, `Repositorio (relación)`, `Notas`.
Estados: Idea, Activo, En espera, Terminado, Archivado.

### 3. Tasks
Campos: `Título`, `Proyecto`, `Área`, `Estado`, `Prioridad`, `Bloque`, `Fecha`, `Duración estimada`, `Próxima acción`, `Energía requerida`, `Regla 10 min`, `Suficientemente bueno`, `URL/Referencia`, `Creado`, `Actualizado`.
Estados: Bandeja, Próxima, En curso, Esperando, Hecho, Cancelado.

### 4. Daily plan
Campos: `Fecha`, `Top 3 (relación Tasks)`, `Bloque A`, `Bloque B`, `Energía`, `Sueño`, `Check-in AM`, `Cierre PM`, `Notas`.
Una página por día; no duplicar tareas como texto.

### 5. Career applications
Campos: `Empresa`, `Rol`, `Estado`, `URL`, `Ubicación/Remoto`, `Fecha aplicación`, `Próxima acción`, `Fecha seguimiento`, `CV version`, `Portfolio version`, `Proyecto destacado`, `Contacto`, `Fuente`, `Notas`, `Consentimiento de envío`.
Estados: Prospecto, Preparar, Aplicado, Seguimiento, Entrevista, Oferta, Rechazado, Cerrado.

### 6. Career assets
Campos: `Nombre`, `Tipo` (CV, carta, portfolio, case study), `Versión`, `Rol objetivo`, `URL`, `Estado`, `Última revisión`, `Aprobado para enviar`.

### 7. Fitness sessions
Campos: `Fecha`, `Programa`, `Semana`, `Día`, `Sesión id`, `Completada`, `RPE sesión`, `Notas`, `Fuente de captura`.
No usar esta DB para cada set en MVP si la app registra alta frecuencia.

### 8. Fitness measurements
Campos: `Fecha`, `Peso corporal`, `% grasa opcional`, `Perímetros opcionales`, `Energía`, `Sueño`, `Prehab`, `Notas`.

### 9. Fitness PR snapshots
Campos: `Fecha`, `Ejercicio canónico`, `Variante`, `Tipo PR`, `Valor`, `Unidad`, `Sesión`, `Verificado`.

## Datos locales de alta frecuencia
Las series, repeticiones y carga por set viven inicialmente en el almacenamiento de la aplicación con exportación JSON/CSV y backups. Sincronizar a Notion solo:
- sesión resumida;
- PR nuevo;
- métricas corporales;
- check-in de salud/prehab.

Antes de sincronizar sets individuales, definir volumen esperado, coste API, conflicto offline y política de corrección.

## IDs y contratos
- Guardar `notionPageId` y un `externalId` estable de Plan Maestro para toda entidad sincronizada.
- Nunca usar título/nombre como clave de sincronización.
- Añadir `schemaVersion`, `lastSyncedAt`, `syncStatus` y `sourceOfTruth` en contratos internos, no necesariamente visibles en Notion.

## Privacidad y datos de salud
- Registrar solo datos necesarios para planificación personal.
- Separar check-ins subjetivos de documentos clínicos.
- No sincronizar diagnósticos, archivos clínicos completos, detalles íntimos ni textos de terapia a snapshots públicos.
- Configurar vistas privadas de Notion y una política de exportación/borrado.

## Gobernanza
Cada DB necesita: propietario, finalidad, campos obligatorios, vista operativa, vista archivo, retención y definición de “hecho”. Documentar cambios de schema mediante migración, nunca renombrar/eliminar campos sin adaptador.

## Estado de Implementación
- **Esquemas TypeScript**: Definidos formalmente en `src/data/notion/schema.ts` para las 9 bases de datos MVP.
- **Contratos y Encabezados**: Implementados en `src/data/notion/contracts.ts` con `notionPageId`, `externalId` único y campos de gobernanza (`DatabaseGovernanceConfig`).
- **Mapeadores y Privacidad**: `src/data/notion/mappers.ts` con filtro automático `sanitizeNotesForPublicProjection` que previene filtraciones de salud/terapia.
- **Manifest Declarativo**: Definido en `src/data/notion/provisioningManifest.json` conteniendo el registro de las 5 áreas iniciales (*Agenda*, *Fitness*, *Carrera*, *Tesis*, *Idiomas*).
- **Adaptador de Resumen Fitness**: `src/data/fitness/fitnessSyncAdapter.ts` para enviar únicamente métricas resumidas y PRs a Notion sin contaminar la API con interacción de alta frecuencia de sets.
- **Validador de Gobernanza**: Script `scripts/validateNotionSchema.ts` ejecutable en desarrollo y CI.
