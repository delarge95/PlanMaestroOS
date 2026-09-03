// importWearableCsv — CSV de báscula/banda -> WearableDay[] validados.
// Formato: date,steps,resting_hr,hrv,sleep_min,weight_kg,vo2max (cabecera flexible,
// columnas opcionales salvo date). Puro. Destino: scripts/import-wearable-csv.ts
import { validateWearableDay, type WearableDay } from './wearable';

export interface CsvImportResult {
  days: WearableDay[];
  errors: Array<{ line: number; reason: string }>;
}

const ALIASES: Record<string, keyof WearableDay> = {
  date: 'dateIso', fecha: 'dateIso', day: 'dateIso',
  steps: 'steps', pasos: 'steps',
  resting_hr: 'restingHr', rhr: 'restingHr',
  hrv: 'hrv', rmssd: 'hrv',
  sleep_min: 'sleepMin', sueno_min: 'sleepMin', sleep: 'sleepMin',
  weight_kg: 'weightKg', peso: 'weightKg', weight: 'weightKg',
  vo2max: 'vo2max', vo2_max: 'vo2max',
};

function toNum(raw: string): number | undefined {
  const t = raw.trim();
  if (t === '') return undefined;
  const n = Number(t.replace(',', '.'));
  return Number.isFinite(n) ? n : undefined;
}

export function importWearableCsv(csv: string): CsvImportResult {
  const lines = csv.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const errors: CsvImportResult['errors'] = [];
  const days: WearableDay[] = [];
  if (lines.length < 2) return { days, errors: [{ line: 0, reason: 'CSV vacío o sin cabecera' }] };

  const header = lines[0].split(',').map((h) => h.trim().toLowerCase());
  const cols = header.map((h) => ALIASES[h]);
  if (!cols.includes('dateIso')) {
    return { days, errors: [{ line: 1, reason: 'falta columna date/fecha' }] };
  }

  lines.slice(1).forEach((line, idx) => {
    const cells = line.split(',');
    const raw: Record<string, unknown> = {};
    cols.forEach((key, i) => {
      if (!key) return;
      raw[key] = key === 'dateIso' ? (cells[i] ?? '').trim() : toNum(cells[i] ?? '');
    });
    if (!raw.dateIso) {
      errors.push({ line: idx + 2, reason: 'fecha vacía' });
      return;
    }
    const day: WearableDay = { dateIso: raw.dateIso as string };
    const numKeys = ['steps', 'restingHr', 'hrv', 'sleepMin', 'sleepScore', 'weightKg', 'vo2max'] as const;
    for (const k of numKeys) {
      const v = raw[k];
      if (typeof v === 'number') (day as unknown as Record<string, number>)[k] = v;
    }
    const clean = validateWearableDay(day);
    if (!clean || Object.keys(clean).length <= 1) {
      errors.push({ line: idx + 2, reason: 'fila sin valores válidos' });
      return;
    }
    days.push(clean);
  });
  return { days, errors };
}
