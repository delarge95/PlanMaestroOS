// scripts/validateNotionSchema.ts - Validador de Esquema y Gobernanza Notion

import fs from 'node:fs';
import path from 'node:path';
import { mapRawNotionPageToTask, mapRawNotionPageToCareerApp } from '../src/data/notion/mappers';

const MANIFEST_PATH = path.join(process.cwd(), 'src', 'data', 'notion', 'provisioningManifest.json');

export function validateNotionSchema() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error(`[Schema Validation Error] No se encontró el manifest de aprovisionamiento en: ${MANIFEST_PATH}`);
  }

  const manifestRaw = fs.readFileSync(MANIFEST_PATH, 'utf-8');
  const manifest = JSON.parse(manifestRaw);

  console.log(`[Schema Validation] Validando manifest: ${manifest.systemName} (v${manifest.version})`);

  // 1. Validar las 9 bases de datos requeridas por el documento 02
  const requiredDbKeys = [
    'areas',
    'projects',
    'tasks',
    'dailyPlan',
    'careerApplications',
    'careerAssets',
    'fitnessSessions',
    'fitnessMeasurements',
    'fitnessPRSnapshots'
  ];

  const dbMap = new Map<string, any>(manifest.databases.map((db: any) => [db.databaseKey, db]));

  for (const key of requiredDbKeys) {
    if (!dbMap.has(key)) {
      throw new Error(`[Schema Validation Error] Falta la base de datos requerida '${key}' en el manifest.`);
    }
    const db = dbMap.get(key);
    if (!db.mandatoryFields || db.mandatoryFields.length === 0) {
      throw new Error(`[Schema Validation Error] La base '${key}' no define campos obligatorios de gobernanza.`);
    }
  }

  console.log(`[Schema Validation] ✅ Las 9 bases de datos MVP están correctamente definidas con campos obligatorios.`);

  // 2. Validar las 5 Áreas iniciales
  const requiredAreas = ['Agenda', 'Fitness', 'Carrera', 'Tesis', 'Idiomas'];
  const initialAreas = manifest.initialAreas || [];
  const areaNames = new Set(initialAreas.map((a: any) => a.Nombre));

  for (const area of requiredAreas) {
    if (!areaNames.has(area)) {
      throw new Error(`[Schema Validation Error] Falta el área inicial obligatoria '${area}' en el manifest.`);
    }
  }

  console.log(`[Schema Validation] ✅ Las 5 áreas iniciales (${requiredAreas.join(', ')}) están registradas.`);

  // 3. Probar mappers con objetos de muestra
  const sampleRawPageTask = {
    id: 'page_test_123',
    created_time: new Date().toISOString(),
    last_edited_time: new Date().toISOString(),
    properties: {
      Titulo: { title: [{ plain_text: 'Probar validación de esquema' }] },
      Estado: { select: { name: 'En curso' } },
      Prioridad: { select: { name: 'Alta' } },
      ExternalId: { rich_text: [{ plain_text: 'task_ext_123' }] }
    }
  };

  const mappedTask = mapRawNotionPageToTask(sampleRawPageTask);
  if (mappedTask.header.externalId !== 'task_ext_123' || mappedTask.properties.Estado !== 'En curso') {
    throw new Error('[Schema Validation Error] Fallo en mapper mapRawNotionPageToTask.');
  }

  const sampleRawPageApp = {
    id: 'app_test_456',
    properties: {
      Empresa: { title: [{ plain_text: 'Tech Studio' }] },
      Rol: { rich_text: [{ plain_text: 'Unity Developer' }] },
      Estado: { select: { name: 'Aplicado' } },
      Notas: { rich_text: [{ plain_text: 'Nota clinica diagnostico secreta' }] }
    }
  };

  const mappedApp = mapRawNotionPageToCareerApp(sampleRawPageApp);
  if (mappedApp.properties.Notas?.includes('diagnostico')) {
    throw new Error('[Schema Validation Error] Fallo en el filtro de privacidad de mapRawNotionPageToCareerApp.');
  }

  console.log(`[Schema Validation] ✅ Mapeadores bidireccionales y filtros de privacidad verificados.`);
  console.log(`[Schema Validation] 🎉 TODO ES CORRECTO: El modelo de datos Notion cumple con la gobernanza 02.`);
}

// Ejecutar si se invoca directamente desde tsx/node
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('validateNotionSchema.ts')) {
  validateNotionSchema();
}
