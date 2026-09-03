// Reglas lesion:* — espejo del DomainRule REAL (archivo 14 §14.1), no del de Gemini.
// Destino: src/lib/rules/fitness/lesion-eva.ts, lesion-substitution.ts, lesion-loadcap.ts
// Cada regla cita docId existente en rag/index.json. Reviven pain[] (2 reglas muertas).

export type LesionStatus = 'ok' | 'warning' | 'violation' | 'not-applicable';

export interface PainPoint {
  zone: string;
  eva: number; // 0..10
  dateIso: string;
}

export interface LesionContext {
  todayIso: string;
  painToday: PainPoint[];
  plannedPatterns: string[]; // patrones motores de la sesión (p.ej. 'push','pull','squat')
}

export interface LesionRule {
  id: string;
  description: string;
  sourceRef: { docId: string; chapter?: string | number; page?: number };
  evaluate: (ctx: LesionContext) => { status: LesionStatus; value?: number; message: string };
}

const maxEva = (ctx: LesionContext): number | undefined =>
  ctx.painToday.length === 0 ? undefined : Math.max(...ctx.painToday.map((p) => p.eva));

/** EVA ≥7 → día de descarga/prehab (violation). */
export const lesionEvaHigh: LesionRule = {
  id: 'lesion:eva-high',
  description: 'EVA >= 7 en cualquier zona: la sesión planeada se sustituye por descarga/prehab.',
  sourceRef: { docId: 'low-overcoming-tendonitis-2019', chapter: '4-5' },
  evaluate: (ctx) => {
    const m = maxEva(ctx);
    if (m === undefined) return { status: 'not-applicable', message: 'Sin reporte de dolor hoy.' };
    if (m >= 7) {
      return { status: 'violation', value: m, message: `EVA ${m}: hoy descarga + prehab. Sin carga sobre la zona.` };
    }
    return { status: 'ok', value: m, message: `EVA ${m}: sin veto total.` };
  },
};

/** EVA 4-6 → sustitución mismo patrón, distinta estructura (warning). */
export const lesionSubstitutionWindow: LesionRule = {
  id: 'lesion:substitution-window',
  description: 'EVA 4-6: sustituir ejercicios del patrón que estresen la zona (grafo stresses).',
  sourceRef: { docId: 'low-overcoming-tendonitis-2019', chapter: '5' },
  evaluate: (ctx) => {
    const m = maxEva(ctx);
    if (m === undefined) return { status: 'not-applicable', message: 'Sin reporte de dolor hoy.' };
    if (m >= 4 && m < 7) {
      const zones = [...new Set(ctx.painToday.filter((p) => p.eva >= 4).map((p) => p.zone))];
      return {
        status: 'warning',
        value: m,
        message: `EVA ${m} en ${zones.join(', ')}: sustituir patrones ${ctx.plannedPatterns.join('/')} que la estresen (queries.whatStresses).`,
      };
    }
    return { status: 'ok', value: m, message: `EVA ${m}: fuera de ventana de sustitución.` };
  },
};

/** EVA 1-3 → reducir ROM/carga con % citado (warning leve). */
export const lesionLoadCap: LesionRule = {
  id: 'lesion:load-cap',
  description: 'EVA 1-3: -20% carga o ROM reducido en la zona, resto normal.',
  sourceRef: { docId: 'horschig-rebuilding-milo', chapter: 'técnica' },
  evaluate: (ctx) => {
    const m = maxEva(ctx);
    if (m === undefined) return { status: 'not-applicable', message: 'Sin reporte de dolor hoy.' };
    if (m >= 1 && m < 4) {
      return { status: 'warning', value: m, message: `EVA ${m}: -20% carga / ROM reducido en la zona. Vigilar 24h.` };
    }
    return { status: 'ok', value: m, message: `EVA ${m ?? 0}: sin tope.` };
  },
};

export const LESION_RULES: LesionRule[] = [lesionEvaHigh, lesionSubstitutionWindow, lesionLoadCap];
