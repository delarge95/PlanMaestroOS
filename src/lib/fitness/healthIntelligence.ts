// src/lib/fitness/healthIntelligence.ts — Cadena de inteligencia de salud.
//
// INTERCONEXIÓN TOTAL (fitness ↔ anatomía ↔ tendinopatía ↔ ejercicios ↔
// progresiones ↔ prehab ↔ reglas):
//   dolor reportado → zona anatómica → músculos/tendones afectados (grafo)
//   → ejercicios de la sesión de HOY que cargan esa zona → sustituciones
//   → protocolo prehab → triaje diferencial con citas → guardas de reglas.
//
// Puro y determinista (sin DOM/red) — testeable. Ningún diagnóstico: el
// triaje entrega hipótesis funcionales con tests y disclaimer (§0.1/§0.3).

import type { BodyZone } from '../../data/fitness/anatomyGraph';
import { getMuscles, getTendons, BODY_ZONE_LABELS_ES } from '../../data/fitness/anatomyGraph';
import { triage, TRIAGE_DISCLAIMER, type Onset, type PainQuality, type TriageResult } from './injuryTriage';
import { prehabProtocols, type PrehabProtocol } from '../../data/fitness/prehabProtocols';
import { getExerciseAlternatives } from '../../data/fitness/alternatives';
import { exerciseDatabase } from '../../data/exercises/exerciseData';

/** Reporte de dolor desde la UI (Fitness → ¿Dolor?). */
export interface PainReport {
  zone: BodyZone;
  eva: number; // 0–10
  onset: Onset;
  quality: PainQuality;
  morningStiffness: boolean;
  improvesWithWarmup: boolean;
  instability: boolean;
  swelling: boolean;
  tingling: boolean;
  redFlags: string[];
  /** Ejercicio durante el cual apareció (opcional). */
  duringExercise?: string;
}

/** Ejercicio planificado (nombre + músculos que carga) — viene de la sesión de hoy. */
export interface PlannedExercise {
  name: string;
  exerciseId?: string;
  muscleGroups: string[]; // strings libres de ExerciseInfo.muscles.strength
}

export interface HealthAdvisory {
  id: string;
  severity: 'info' | 'caution' | 'stop';
  title: string;
  body: string;
  citation?: string;
}

export interface AffectedExercise {
  name: string;
  loadedStructures: string[];
  substitutions: Array<{ name: string; preserves: string[] }>;
}

export interface HealthIntelligenceResult {
  zoneLabel: string;
  triage: TriageResult;
  structures: { muscles: string[]; tendons: string[] };
  affectedExercises: AffectedExercise[];
  prehab?: PrehabProtocol;
  advisories: HealthAdvisory[];
  disclaimer: string;
}

/** Mapeo BodyZone → protocolo de prehab existente (solo zonas cubiertas). */
const ZONE_TO_PREHAB: Partial<Record<BodyZone, string>> = {
  knee: 'knee',
  shoulder: 'shoulder',
  'forearm-hand': 'elbow_wrist',
  hip: 'hip',
};

const norm = (s?: string) => (s ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/**
 * Tokens significativos para matchear estructura↔ejercicio. Se excluyen
 * palabras ambiguas ('biceps' existe en brazo Y en biceps femoris de rodilla;
 * 'femoris' en cuádriceps e isquios): la colisión genera falsos positivos.
 */
const AMBIGUOUS = new Set([
  'muscle', 'tendon', 'longus', 'brevis', 'major', 'minor',
  'biceps', 'triceps', 'femoris', 'dorsi', 'anterior', 'posterior',
  'medial', 'lateral', 'inferior', 'superior', 'group',
]);
function tokens(name?: string): string[] {
  return norm(name).split(/[\s-]+/).filter((t) => t.length >= 5 && !AMBIGUOUS.has(t));
}

/**
 * El motor completo. `plannedToday` son los ejercicios de la sesión de HOY;
 * el resultado dice qué tocar, qué sustituir, qué prehab y con qué citas.
 */
export function runHealthIntelligence(
  report: PainReport,
  plannedToday: PlannedExercise[] = [],
): HealthIntelligenceResult {
  const zoneLabel = BODY_ZONE_LABELS_ES[report.zone] ?? report.zone;
  const muscles = getMuscles(report.zone).map((m) => m.nameEn);
  const tendons = getTendons(report.zone).map((t) => t.nameEn);
  const structureTokens = [...muscles, ...tendons].flatMap(tokens);
  // La etiqueta de zona también matchea ('rodilla' en 'knee extension').
  const zoneTokens = [...tokens(zoneLabel), ...tokens(report.zone)];

  // 1) Triaje diferencial (con red flags bloqueantes).
  const t = triage({
    zone: report.zone,
    onset: report.onset,
    quality: report.quality,
    eva: report.eva,
    morningStiffness: report.morningStiffness,
    improvesWithWarmup: report.improvesWithWarmup,
    instability: report.instability,
    swelling: report.swelling,
    tingling: report.tingling,
    redFlags: report.redFlags,
  });

  // 2) Ejercicios de hoy que cargan la zona (match por tokens de estructura).
  const affectedExercises: AffectedExercise[] = [];
  for (const ex of plannedToday) {
    const loaded: string[] = [];
    for (const mg of ex.muscleGroups) {
      const mgT = tokens(mg);
      const hits =
        // token de estructura vs token de ejercicio: igualdad o prefijo largo (≥6)
        structureTokens.some((st) => mgT.some((m) => m === st || (m.length >= 6 && st.startsWith(m)) || (st.length >= 6 && m.startsWith(st)))) ||
        zoneTokens.some((zt) => norm(mg).includes(zt));
      if (hits) loaded.push(mg);
    }
    if (loaded.length === 0) continue;

    // 3) Sustituciones según el triaje: con 'rehab_load' (tendinopatía) la
    //    alternativa CORRECTA conserva el músculo con menor carga (HSR,
    //    p.ej. Spanish Squats); con descanso relativo se evita la zona.
    const alts = getExerciseAlternatives(ex.exerciseId ?? '', []);
    const rehabLoad = t.candidates.some((c) => c.action === 'rehab_load');
    const loadsZone = (id: string): boolean => {
      const mg = exerciseDatabase[id]?.muscles?.strength ?? [];
      return mg.some((m) => {
        const mt = tokens(m);
        return structureTokens.some((st) => mt.some((x) => x === st || (x.length >= 6 && st.startsWith(x)) || (st.length >= 6 && x.startsWith(st))));
      });
    };
    const safeSubs = alts
      .filter((a) => (rehabLoad ? a.preserves.includes('primary-muscle') as never || a.preserves.includes('load-profile') as never : !loadsZone(a.exerciseId)))
      .slice(0, 3)
      .map((a) => ({ name: a.name, preserves: a.preserves as string[] }));

    affectedExercises.push({ name: ex.name, loadedStructures: [...new Set(loaded)], substitutions: safeSubs });
  }

  const prehabKey = ZONE_TO_PREHAB[report.zone];
  const prehab = prehabKey ? prehabProtocols[prehabKey] : undefined;

  // 4) Advisories priorizados.
  const advisories: HealthAdvisory[] = [];
  if (t.blocked) {
    advisories.push({
      id: 'red-flag',
      severity: 'stop',
      title: 'Signo de alarma — no entrenar la zona',
      body: `${t.blockReason ?? 'Red flag presente'}. Derivación médica antes de cargar la zona.`,
      citation: 'criterio de seguridad §18.1 (archivo 18)',
    });
  }
  for (const c of t.candidates.slice(0, 2)) {
    advisories.push({
      id: `triage-${c.tissue}`,
      severity: c.action === 'doctor_now' ? 'stop' : c.level === 'alta' ? 'caution' : 'info',
      title: `Hipótesis: ${c.structureHint} (${c.tissue})`,
      body: `${c.why} · Tests: ${c.tests.join('; ')} · Acción: ${actionLabel(c.action)}`,
      citation: c.citation,
    });
  }
  if (report.eva >= 4) {
    advisories.push({
      id: 'volume-guard',
      severity: 'caution',
      title: `EVA ${report.eva}/10 — recorta volumen de la zona hoy`,
      body:
        'Mantén el dolor ≤3/10 durante la sesión y que no empeore al día siguiente. Si una serie pasa de 3/10, se corta la serie; dos series seguidas, se corta el ejercicio.',
      citation: 'reglas fit:pain-session-ceiling y fit:pain-not-worse-next-day',
    });
  }
  if (prehab) {
    advisories.push({
      id: 'prehab',
      severity: 'info',
      title: `Prehab activo: ${prehab.protocolTitle}`,
      body: `${prehab.recommendedDose} — actívalo en la tarjeta de prehab de Hoy (zona ${prehab.zoneTitle}).`,
      citation: 'protocolo prehab interno (prehabProtocols.ts)',
    });
  }
  if (affectedExercises.length > 0) {
    const withSubs = affectedExercises.filter((a) => a.substitutions.length > 0);
    advisories.push({
      id: 'subs',
      severity: 'caution',
      title: `${affectedExercises.length} ejercicio(s) de hoy cargan ${zoneLabel}`,
      body:
        (withSubs.length > 0
          ? `Sustituye: ${withSubs.map((a) => `${a.name} → ${a.substitutions.map((s) => s.name).join(' / ')}`).join(' · ')}. `
          : '') +
        (affectedExercises.length > withSubs.length
          ? `Sin sustitución automática hoy para: ${affectedExercises
              .filter((a) => a.substitutions.length === 0)
              .map((a) => a.name)
              .join(', ')} — omítelos o mantén rango con dolor ≤3/10 (con carga progresiva tolerable si el triaje lo permite).`
          : ''),
      citation: 'motor de alternativas (alternatives.ts) + grafo anatómico',
    });
  }

  return {
    zoneLabel,
    triage: t,
    structures: { muscles, tendons },
    affectedExercises,
    prehab,
    advisories,
    disclaimer: TRIAGE_DISCLAIMER,
  };
}

function actionLabel(a: string): string {
  switch (a) {
    case 'rehab_load': return 'carga progresiva tolerable (HSR/isométricos)';
    case 'relative_rest': return 'descanso relativo de la zona';
    case 'nerve_gliding': return 'neurodinámica suave, sin tensión sostenida';
    default: return 'derivación médica';
  }
}
