# 06 · Carrera MVP y flujos de IA

## Objetivo
Convertir la búsqueda laboral en un pipeline accionable para roles remotos junior de Technical Artist, VFX/real-time, QA Automation y perfiles afines, sin automatizar envíos ni reemplazar juicio humano. La app debe priorizar una próxima acción concreta sobre una lista infinita de vacantes.

## Modelo de pipeline
```text
Prospecto → Investigar → Preparar → Revisar → Aplicado → Seguimiento → Entrevista → Oferta/Cerrado
```
Cada aplicación necesita una sola `Próxima acción`, fecha de seguimiento, versión de CV/portfolio, fuente y estado. No permitir múltiples “siguientes pasos” activos.

## Flujo de usuario
1. Agregar vacante por URL o manualmente.
2. Worker extrae/normaliza solo información permitida: empresa, rol, ubicación, requisitos, fecha y fuente.
3. IA produce un resumen y una matriz breve `encaje / huecos / evidencia de portfolio`.
4. Usuario selecciona activos y solicita borrador de CV/carta/mensaje.
5. Borrador queda en estado `Revisar`; el usuario edita y aprueba.
6. Tras aplicar manualmente, se registra fecha, versión enviada y próximo seguimiento.

## IA: límites y prompt contract
Cada herramienta IA debe recibir un contrato:
```ts
type AiRequest = {
  action: 'summarize-job' | 'tailor-cv' | 'draft-cover-letter' | 'draft-follow-up';
  allowedSources: string[];
  targetRole?: string;
  approvalRequired: true;
  retention: 'minimal';
};
```
- Usar solo perfil y activos explícitamente seleccionados.
- Mostrar fuentes usadas y campos asumidos.
- No inventar experiencia, herramientas, títulos, salarios o contacto.
- Marcar afirmaciones no verificadas para revisión.
- Nunca enviar ni publicar automáticamente.

## GitHub y portfolio
- Conectar repositorios mediante GitHub App de permisos mínimos.
- Crear un resumen de repositorio: README, tecnologías, estado de release, issues/PRs relevantes y enlace público.
- No indexar repositorios privados ni código sensible para IA sin selección explícita.
- Relacionar cada activo de portfolio con evidencias verificables: demo, repo, case study, rol y contribución.

## Métricas útiles
- Aplicaciones por semana.
- Tiempo desde aplicación hasta seguimiento.
- Estado del pipeline.
- Activos aprobados/listos.

Evitar métricas moralizantes como “productividad” o rankings; la métrica debe ayudar a elegir próxima acción.

## Criterios de aceptación
- Se puede completar una aplicación desde prospecto hasta seguimiento sin perder versiones de activos.
- Los borradores IA no se confunden con documentos enviados.
- Toda comunicación externa requiere aprobación humana explícita.

## Estado de Implementación
- **Contratos de Pipeline y Solicitudes IA**: Definidos en `src/data/career/careerContracts.ts` (`CareerPipelineStage` en 8 estadios, `singleNextAction` único y `AiRequestContract` con `approvalRequired: true`).
- **Servicio y Adaptador de Carrera**: `src/data/career/careerServiceAdapter.ts` gestiona transiciones de candidaturas, vinculación de evidencias de repositorios GitHub (`PlanMaestroOS`) y borradores aislados.
- **Workspace de Carrera Rediseñado**: `src/components/career/CareerTabWorkspace.tsx` proporciona las 4 vistas clave (Pipeline, Detalle & Encaje, Activos & Evidencias GitHub y Borradores IA) junto con métricas accionables no moralizantes.
