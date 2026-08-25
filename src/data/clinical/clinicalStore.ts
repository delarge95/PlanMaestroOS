import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ExposureHierarchyLevel = 'Baja' | 'Media' | 'Alta';

export interface BioFeedbackEntry {
  dateIso: string;
  energy: number;
  anxiety: number;
  pain: number;
  sleepHours: number;
}

export interface ExposureItem {
  id: string;
  title: string;
  hierarchyLevel: ExposureHierarchyLevel;
  description: string;
  preAnxiety: number;
  postAnxiety: number;
  completed: boolean;
  notes: string;
}

export interface ClinicalState {
  biofeedback: BioFeedbackEntry[];
  exposures: ExposureItem[];
  saveBioFeedback: (
    input: { energy: number; anxiety: number; pain: number; sleepHours: number },
    dateIso?: string
  ) => void;
  toggleExposureCompleted: (id: string) => boolean;
  updateExposureField: <K extends keyof ExposureItem>(
    id: string,
    field: K,
    value: ExposureItem[K]
  ) => void;
  addExposure: (input: Omit<ExposureItem, 'id'> & { id?: string }) => string;
}

export const MAX_BIOFEEDBACK_ENTRIES = 30;

export function clampScore(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value)));
}

export function todayLocalIso(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export const DEFAULT_EXPOSURES: ExposureItem[] = [
  {
    id: 'exp_1',
    title: 'Sustentación de 3 Ideas Principales en Llamada / Reunión',
    hierarchyLevel: 'Baja',
    description: 'Presentar 3 conceptos estructurados sin disculparse por pausas ni justificar el silencio.',
    preAnxiety: 5,
    postAnxiety: 3,
    completed: false,
    notes: ''
  },
  {
    id: 'exp_2',
    title: 'Demostración de Caso de Estudio TwinSight a Reclutador / Colega',
    hierarchyLevel: 'Media',
    description: 'Mostrar demo interactiva o capturas de TwinSight enfocándote en valor técnico sin subestimar el trabajo.',
    preAnxiety: 7,
    postAnxiety: 4,
    completed: false,
    notes: ''
  },
  {
    id: 'exp_3',
    title: 'Solicitud de Feedback Técnico Directo sin Actitud Defensiva',
    hierarchyLevel: 'Alta',
    description: 'Recibir críticas técnicas sobre código o portafolio aceptando observaciones con apertura.',
    preAnxiety: 8,
    postAnxiety: 5,
    completed: false,
    notes: ''
  }
];

const LEGACY_BIO_KEY = 'clinical_biofeedback_logs';
const LEGACY_EXP_KEY = 'clinical_exposures';
const LEGACY_MIGRATED_FLAG = 'clinical_legacy_migrated_v1';

const ES_MONTHS: Record<string, string> = {
  ene: '01', feb: '02', mar: '03', abr: '04', may: '05', jun: '06',
  jul: '07', ago: '08', sep: '09', oct: '10', nov: '11', dic: '12'
};

function parseLegacyEsDateLabel(label: unknown): string | null {
  if (typeof label !== 'string') return null;
  const match = label.match(/(\d{1,2})\s+([a-zA-Záéí]{3})/);
  if (!match) return null;
  const day = String(parseInt(match[1], 10)).padStart(2, '0');
  const month = ES_MONTHS[match[2].toLowerCase()];
  if (!month || !day) return null;
  return `${new Date().getFullYear()}-${month}-${day}`;
}

function coerceLegacyExposure(raw: unknown): ExposureItem | null {
  if (typeof raw !== 'object' || raw === null) return null;
  const r = raw as Record<string, unknown>;
  if (typeof r['id'] !== 'string' || typeof r['title'] !== 'string') return null;
  const level = r['hierarchyLevel'];
  return {
    id: r['id'],
    title: r['title'],
    hierarchyLevel: level === 'Baja' || level === 'Media' || level === 'Alta' ? level : 'Media',
    description: typeof r['description'] === 'string' ? r['description'] : '',
    preAnxiety: clampScore(Number(r['preAnxiety'] ?? 0), 0, 10),
    postAnxiety: clampScore(Number(r['postAnxiety'] ?? 0), 0, 10),
    completed: Boolean(r['completed']),
    notes: typeof r['notes'] === 'string' ? r['notes'] : ''
  };
}

export function migrateLegacyLocalStorage(): {
  biofeedbackMigrated: number;
  biofeedbackSkipped: number;
  exposuresMigrated: number;
} {
  const result = { biofeedbackMigrated: 0, biofeedbackSkipped: 0, exposuresMigrated: 0 };
  try {
    if (localStorage.getItem(LEGACY_MIGRATED_FLAG) === '1') return result;
    const state = useClinicalStore.getState();

    if (state.biofeedback.length === 0) {
      const raw = JSON.parse(localStorage.getItem(LEGACY_BIO_KEY) ?? '[]') as unknown;
      if (Array.isArray(raw)) {
        const migrated: BioFeedbackEntry[] = [];
        for (const item of raw) {
          const r = item as Record<string, unknown>;
          const dateIso = parseLegacyEsDateLabel(r['date']);
          if (!dateIso) {
            result.biofeedbackSkipped += 1;
            continue;
          }
          migrated.push({
            dateIso,
            energy: clampScore(Number(r['energy'] ?? 5), 1, 10),
            anxiety: clampScore(Number(r['anxiety'] ?? 0), 0, 10),
            pain: clampScore(Number(r['pain'] ?? 0), 0, 10),
            sleepHours: clampScore(Number(r['sleepHours'] ?? 7), 0, 24)
          });
        }
        if (migrated.length > 0) {
          const merged = [...migrated];
          for (const existing of state.biofeedback) {
            if (!merged.some((m) => m.dateIso === existing.dateIso)) merged.push(existing);
          }
          merged.sort((a, b) => b.dateIso.localeCompare(a.dateIso));
          useClinicalStore.setState({ biofeedback: merged.slice(0, MAX_BIOFEEDBACK_ENTRIES) });
          result.biofeedbackMigrated = migrated.length;
        }
      }
    }

    if (state.exposures.length === 0) {
      const raw = JSON.parse(localStorage.getItem(LEGACY_EXP_KEY) ?? '[]') as unknown;
      if (Array.isArray(raw)) {
        const coerced = raw.map(coerceLegacyExposure).filter((e): e is ExposureItem => e !== null);
        if (coerced.length > 0) {
          useClinicalStore.setState({ exposures: coerced });
          result.exposuresMigrated = coerced.length;
        }
      }
    }

    localStorage.setItem(LEGACY_MIGRATED_FLAG, '1');
  } catch {
    return result;
  }
  return result;
}

export const useClinicalStore = create<ClinicalState>()(
  persist(
    (set, get) => ({
      biofeedback: [],
      exposures: DEFAULT_EXPOSURES,

      saveBioFeedback: (input, dateIso) => {
        const entry: BioFeedbackEntry = {
          dateIso: dateIso ?? todayLocalIso(),
          energy: clampScore(input.energy, 1, 10),
          anxiety: clampScore(input.anxiety, 0, 10),
          pain: clampScore(input.pain, 0, 10),
          sleepHours: clampScore(input.sleepHours, 0, 24)
        };
        set((state) => {
          const others = state.biofeedback.filter((b) => b.dateIso !== entry.dateIso);
          const next = [entry, ...others].sort((a, b) => b.dateIso.localeCompare(a.dateIso));
          return { biofeedback: next.slice(0, MAX_BIOFEEDBACK_ENTRIES) };
        });
      },

      toggleExposureCompleted: (id) => {
        let nowCompleted = false;
        set((state) => ({
          exposures: state.exposures.map((exp) => {
            if (exp.id !== id) return exp;
            nowCompleted = !exp.completed;
            return { ...exp, completed: nowCompleted };
          })
        }));
        return nowCompleted;
      },

      updateExposureField: (id, field, value) => {
        set((state) => ({
          exposures: state.exposures.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
        }));
      },

      addExposure: (input) => {
        const id = input.id ?? `exp_${Date.now()}`;
        const item: ExposureItem = {
          id,
          title: input.title,
          hierarchyLevel: input.hierarchyLevel,
          description: input.description,
          preAnxiety: clampScore(input.preAnxiety, 0, 10),
          postAnxiety: clampScore(input.postAnxiety, 0, 10),
          completed: Boolean(input.completed),
          notes: input.notes
        };
        if (!get().exposures.some((e) => e.id === id)) {
          set((state) => ({ exposures: [...state.exposures, item] }));
        }
        return id;
      }
    }),
    {
      name: 'clinical-state-v1',
      version: 1,
      partialize: (state) => ({
        biofeedback: state.biofeedback,
        exposures: state.exposures
      })
    }
  )
);

export function formatDateLabel(dateIso: string): string {
  const parsed = new Date(`${dateIso}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return dateIso;
  return parsed.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
}
