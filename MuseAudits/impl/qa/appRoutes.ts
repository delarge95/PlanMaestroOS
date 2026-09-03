// Fuente de verdad de rutas para qaApp.mjs — 39 /app + 11 públicas + cotizador.
// Verificadas contra src/pages el 2026-09-04 (archivo 17 §17.4: faltan en nav
// today/catalog/skills, library/index+thenx, library/schedules/master-plan).

export const APP_ROUTES = [
  '/app', '/app/today', '/app/today/plan', '/app/schedules', '/app/master-plan',
  '/app/german',
  '/app/languages', '/app/languages/german', '/app/languages/english',
  '/app/library',
  '/app/fitness', '/app/fitness/today', '/app/fitness/catalog', '/app/fitness/cardio',
  '/app/fitness/nutrition', '/app/fitness/progress', '/app/fitness/skills',
  '/app/fitness/anatomy', '/app/fitness/library', '/app/fitness/library/catalog',
  '/app/fitness/library/data', '/app/fitness/library/muscles', '/app/fitness/library/skills',
  '/app/fitness/library/thenx',
  '/app/clinical', '/app/clinical/routines', '/app/clinical/protocols', '/app/clinical/unblock',
  '/app/career', '/app/career/roadmap', '/app/career/portfolio', '/app/career/projects',
  '/app/career/jobs', '/app/career/learning', '/app/career/news',
  '/app/gastronomy', '/app/gastronomy/library', '/app/gastronomy/plans', '/app/gastronomy/saved',
];

export const PUBLIC_ROUTES = [
  '/', '/work', '/twinsight-x500', '/human-character-pipeline', '/ara-framework',
  '/about', '/contact', '/focus/technical-visualization', '/focus/unity-webgl',
  '/focus/unity-technical-artist', '/focus/3d-pipeline', '/cv', '/cotizador',
];
