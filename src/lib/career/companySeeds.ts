// companySeeds — BD viva inicial desde doc-11 real (120 empresas con scoring).
// Incluye: las 8 Priority-A + 9 configuradoras/WebGL estratégicas (prioridad B).
// HONESTIDAD: stack inferido de la categoría (stackSource:'inferred'); el job
// careerResearch lo verifica contra vacantes reales y lo marca 'verified'.
// remotePolicy 'unknown' = 1 punto neutral (prior documentado, no invención).
// Destino: src/data/career/companySeeds.ts (reemplaza/amplía companiesSeed actual)

export type RemotePolicy = 'remote' | 'hybrid' | 'onsite' | 'unknown';

export interface CompanySeed {
  id: string;
  name: string;
  region: string;
  category: string;
  careersUrl: string;
  priority: 'A' | 'B';
  doc11Fit: number; // Fit 1-5 de la scoring table
  stack: string[];
  stackSource: 'inferred' | 'verified';
  remotePolicy: RemotePolicy;
  workingLanguage: 'es' | 'en' | 'de';
}

const S = (stack: string[]): { stack: string[]; stackSource: 'inferred' } => ({ stack, stackSource: 'inferred' });

export const COMPANY_SEEDS: CompanySeed[] = [
  // Priority A (doc-11 scoring)
  { id: 'co-treeview', name: 'Treeview Studio', region: 'USA / LATAM', category: 'Unity / XR / digital twin', careersUrl: 'https://treeview.studio/', priority: 'A', doc11Fit: 5, ...S(['unity', 'c#', 'xr', 'digital-twin']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-unity', name: 'Unity Technologies', region: 'Global', category: 'Engine / RT3D platform', careersUrl: 'https://unity.com/careers', priority: 'A', doc11Fit: 5, ...S(['unity', 'c#', 'render-pipelines']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-realvirtual', name: 'realvirtual.io', region: 'Germany', category: 'Unity simulation / digital twin', careersUrl: 'https://realvirtual.io/', priority: 'A', doc11Fit: 5, ...S(['unity', 'c#', 'digital-twin']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-capgemini-eng', name: 'Capgemini Engineering', region: 'Global / EU', category: 'Digital twin consulting', careersUrl: 'https://www.capgemini.com/careers/', priority: 'A', doc11Fit: 5, ...S(['unity', 'digital-twin', 'consulting']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-active-theory', name: 'Active Theory', region: 'USA', category: 'WebGL / creative tech', careersUrl: 'https://activetheory.net/careers/', priority: 'A', doc11Fit: 5, ...S(['three.js', 'webgl', 'typescript', 'glsl']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-teravision', name: 'Teravision Games', region: 'Colombia / USA', category: 'Game development', careersUrl: 'https://teravisiongames.bamboohr.com/careers', priority: 'A', doc11Fit: 4, ...S(['unity', 'unreal', 'c#', 'c++']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-globant-gaming', name: 'Globant Gaming', region: 'LATAM / global', category: 'Game tech / outsourcing', careersUrl: 'https://www.globant.com/careers', priority: 'A', doc11Fit: 4, ...S(['unity', 'unreal', 'c#']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-bairesdev', name: 'BairesDev', region: 'LATAM / USA', category: 'Nearshore software', careersUrl: 'https://www.bairesdev.com/careers/', priority: 'A', doc11Fit: 3, ...S(['typescript', 'react']), remotePolicy: 'remote', workingLanguage: 'en' },
  // Configuradoras 3D / WebGL estratégicas (B, encaje TwinSight directo)
  { id: 'co-threekit', name: 'Threekit', region: 'USA', category: '3D product configurator', careersUrl: 'https://www.threekit.com/careers', priority: 'B', doc11Fit: 4, ...S(['three.js', 'webgl', 'typescript']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-vntana', name: 'VNTANA', region: 'USA', category: '3D commerce / product viz', careersUrl: 'https://www.vntana.com/careers/', priority: 'B', doc11Fit: 4, ...S(['three.js', 'webgl']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-emersya', name: 'Emersya', region: 'France', category: '3D configurators', careersUrl: 'https://emersya.com/', priority: 'B', doc11Fit: 5, ...S(['three.js', 'webgl', 'typescript']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-expivi', name: 'Expivi', region: 'Netherlands', category: '3D configurators', careersUrl: 'https://www.expivi.com/', priority: 'B', doc11Fit: 5, ...S(['three.js', 'webgl']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-matterport', name: 'Matterport', region: 'USA', category: '3D capture / digital twin', careersUrl: 'https://matterport.com/careers', priority: 'B', doc11Fit: 4, ...S(['webgl', 'computer-vision', 'typescript']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-unit9', name: 'UNIT9', region: 'UK / global', category: 'Creative tech / XR', careersUrl: 'https://www.unit9.com/careers', priority: 'B', doc11Fit: 4, ...S(['three.js', 'webgl', 'unity']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-resn', name: 'Resn', region: 'NZ / Netherlands', category: 'WebGL creative tech', careersUrl: 'https://resn.co.nz/', priority: 'B', doc11Fit: 4, ...S(['three.js', 'webgl', 'glsl']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-14islands', name: '14islands', region: 'Sweden', category: 'WebGL / creative tech', careersUrl: 'https://www.14islands.com/', priority: 'B', doc11Fit: 4, ...S(['three.js', 'webgl', 'typescript']), remotePolicy: 'unknown', workingLanguage: 'en' },
  { id: 'co-demodern', name: 'Demodern', region: 'Germany', category: 'Creative tech / XR', careersUrl: 'https://demodern.com/', priority: 'B', doc11Fit: 4, ...S(['unity', 'webgl', 'three.js']), remotePolicy: 'unknown', workingLanguage: 'en' },
];

/** fitScore con prior neutral para remote desconocido (documentado, no invención). */
export function remotePoints(policy: RemotePolicy, remoteOk: boolean): { points: number; cite: string } {
  if (policy === 'remote') return { points: 2, cite: 'remote' };
  if (policy === 'hybrid' && remoteOk) return { points: 1, cite: 'hybrid' };
  if (policy === 'onsite') return { points: 0, cite: 'onsite' };
  return { points: 1, cite: 'remote desconocido: prior neutral 1 (verificar en research)' };
}
