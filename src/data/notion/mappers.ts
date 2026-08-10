// src/data/notion/mappers.ts - Mapeadores bidireccionales y Filtros de Privacidad

import type {
  NotionTaskPropertyMap,
  NotionCareerAppPropertyMap,
  TaskStatus,
  PriorityLevel,
  EnergyRequirement,
  CareerAppStatus
} from './schema';

import type { SyncedNotionEntity } from './contracts';

/**
 * Patrones de privacidad para campos clínicos o notas sensibles que nunca deben incluirse en proyecciones públicas
 */
const CLINICAL_SENSITIVE_KEYWORDS = [
  /diagnostico/i,
  /terapia/i,
  /psiquiatr/i,
  /rumiacion/i,
  /ansiedad_social_raw/i,
  /cannabis_log/i
];

/**
 * Filtro de privacidad: Elimina o enmascara notas que contengan información médica/psicológica sensible.
 */
export function sanitizeNotesForPublicProjection(notes?: string): string | undefined {
  if (!notes) return undefined;

  for (const pattern of CLINICAL_SENSITIVE_KEYWORDS) {
    if (pattern.test(notes)) {
      return '[REDACTADO: Registro privado de salud/bienestar]';
    }
  }

  return notes;
}

/**
 * Mapeador de página Notion API a objeto NotionTaskPropertyMap
 */
export function mapRawNotionPageToTask(page: any): SyncedNotionEntity<NotionTaskPropertyMap> {
  const props = page.properties || {};

  const getTitle = (prop: any) => prop?.title?.[0]?.plain_text || prop?.rich_text?.[0]?.plain_text || '';
  const getSelect = (prop: any, defaultVal: string) => prop?.select?.name || defaultVal;
  const getCheckbox = (prop: any) => Boolean(prop?.checkbox);

  return {
    header: {
      notionPageId: page.id,
      externalId: props.ExternalId?.rich_text?.[0]?.plain_text || `task_${page.id}`,
      schemaVersion: '1.0.0',
      lastSyncedAt: new Date().toISOString(),
      syncStatus: 'synced',
      sourceOfTruth: 'notion'
    },
    properties: {
      Titulo: getTitle(props.Titulo || props.Nombre),
      ProjectId: props.Proyecto?.relation?.[0]?.id,
      AreaId: props.Area?.relation?.[0]?.id || 'area_agenda',
      Estado: getSelect(props.Estado, 'Bandeja') as TaskStatus,
      Prioridad: getSelect(props.Prioridad, 'Media') as PriorityLevel,
      Bloque: props.Bloque?.rich_text?.[0]?.plain_text,
      Fecha: props.Fecha?.date?.start,
      DuracionEstimadaMin: props.DuracionEstimadaMin?.number,
      ProximaAccion: props.ProximaAccion?.rich_text?.[0]?.plain_text,
      EnergiaRequerida: props.EnergiaRequerida?.select?.name as EnergyRequirement,
      Regla10Min: getCheckbox(props.Regla10Min),
      SuficientementeBueno: getCheckbox(props.SuficientementeBueno),
      UrlReferencia: props.UrlReferencia?.url,
      Creado: page.created_time || new Date().toISOString(),
      Actualizado: page.last_edited_time || new Date().toISOString()
    }
  };
}

/**
 * Mapeador de página Notion API a objeto NotionCareerAppPropertyMap
 */
export function mapRawNotionPageToCareerApp(page: any): SyncedNotionEntity<NotionCareerAppPropertyMap> {
  const props = page.properties || {};

  const getTitle = (prop: any) => prop?.title?.[0]?.plain_text || '';
  const getText = (prop: any) => prop?.rich_text?.[0]?.plain_text || '';
  const getSelect = (prop: any, defaultVal: string) => prop?.select?.name || defaultVal;

  return {
    header: {
      notionPageId: page.id,
      externalId: props.ExternalId?.rich_text?.[0]?.plain_text || `app_${page.id}`,
      schemaVersion: '1.0.0',
      lastSyncedAt: new Date().toISOString(),
      syncStatus: 'synced',
      sourceOfTruth: 'notion'
    },
    properties: {
      Empresa: getTitle(props.Empresa),
      Rol: getText(props.Rol) || 'Desarrollador',
      Estado: getSelect(props.Estado, 'Prospecto') as CareerAppStatus,
      Url: props.Url?.url,
      UbicacionRemoto: getText(props.UbicacionRemoto),
      FechaAplicacion: props.FechaAplicacion?.date?.start,
      ProximaAccion: getText(props.ProximaAccion),
      FechaSeguimiento: props.FechaSeguimiento?.date?.start,
      CvVersion: getText(props.CvVersion),
      PortfolioVersion: getText(props.PortfolioVersion),
      ProyectoDestacado: getText(props.ProyectoDestacado),
      Contacto: getText(props.Contacto),
      Fuente: getText(props.Fuente),
      Notas: sanitizeNotesForPublicProjection(getText(props.Notas)),
      ConsentimientoEnvio: Boolean(props.ConsentimientoEnvio?.checkbox)
    }
  };
}
