// src/data/fitness/exerciseResolver.ts - Exercise Name & Alias Canonical Resolver
import { exerciseDatabase } from '../exercises';

// Normalization helper
function normalizeName(name?: string): string {
  if (!name) return '';
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ');
}

// Built-in alias map mapping common exercise display names to exact keys in exerciseDatabase
const ALIAS_MAP: Record<string, string> = {
  'barbell incline press': '45° Incline Barbell Press',
  'incline bench press': '45° Incline Barbell Press',
  'db incline press': 'Dumbbell Incline Press',
  'smith machine incline press': '45° Incline Barbell Press',
  'pseudo planche pushups': 'Push-Up',
  'pec deck': 'Pec Deck Flye',
  'db flye': 'Dumbbell Flye',
  'cable flye': 'Low-to-High Cable Flye',
  'archer ring rows': 'Inverted Row',
  'incline db yraise': 'Standing DB Y-Raise',
  'cable yraise': 'Standing DB Y-Raise',
  'highcable lateral raise': 'Standing DB Lateral Raise',
  'pullup wide grip': 'Pull-Up',
  'pullup': 'Pull-Up',
  'lat pulldown wide grip': 'Wide-Grip Lat Pulldown',
  'lat pulldown': 'Wide-Grip Lat Pulldown',
  'dualhandle lat pulldown': 'Wide-Grip Lat Pulldown',
  'chinup': 'Chin-Up',
  'kelso shrug': 'Barbell Shrug',
  'triceps pressdown': 'Cable Tricep Pushdown (V-Bar)',
  'ezbar preacher curl': 'EZ-Bar Preacher Curl',
  'preacher curl': 'EZ-Bar Preacher Curl',
  'dragon flag': 'Dragon Flag',
  'lying leg curl': 'Lying Leg Curl',
  'squat your choice': 'Back Squat',
  'back squat': 'Back Squat',
  'smith machine lunge': 'Barbell Lunge',
  'spanish squats': 'Spanish Squats',
  'spanish squat': 'Spanish Squats',
  'leg extension': 'Leg Extension',
  'standing calf raise': 'Standing Calf Raise',
  'machine hip abduction': 'Machine Hip Abduction',
  'closegrip lat pulldown': 'Close-Grip Lat Pulldown',
  'chestsupported tbar row': 'Chest-Supported Dumbbell Row',
  'machine shrug': 'Barbell Shrug',
  'machine chest press': 'Chest Press Machine',
  'cable crunch': 'Cable Crunch',
  '1arm reverse pec deck': 'Reverse Pec Deck Flye',
  'barbell rdl': 'Barbell RDL',
  'romanian deadlift': 'Barbell RDL',
  'machine hip thrust': 'Barbell Hip Thrust',
  'barbell hip thrust': 'Barbell Hip Thrust',
  'hip thrust': 'Barbell Hip Thrust',
  'leg press': 'Leg Press (45°)',
  'bayesian cable curl': 'DB Incline Curl',
  'overhead cable triceps extension': 'DB French Press',
  'modified zottman curl': 'DB Alternating Curl',
  'cable triceps kickback': 'Cable Tricep Pushdown (V-Bar)',
  'db wrist curl': 'DB Alternating Curl',
  'alternating db curl': 'DB Alternating Curl',
  'dead hang': 'Active Hang',
  'active hang': 'Active Hang',
  'machine lateral raise': 'Standing DB Lateral Raise',
  'overhead press': 'Barbell Overhead Press (OHP) / Military Press',
  'deadlift': 'Conventional Deadlift',
  'barbell bench press': 'Barbell Bench Press',
  'weighted pullup': 'Pull-Up',
  'weighted dip': 'Chest Dip',
  'face pull': 'Face Pull',
  'walking lunge': 'Barbell Lunge',
  'lower back extension': 'Barbell 45° Hyperextension',
  'frog pump': 'Barbell Hip Thrust'
};

/**
 * Resolves any exercise display name or ID to the canonical exercise key.
 */
export function resolveExerciseId(nameOrId: string): string {
  if (!nameOrId) return 'Back Squat';

  // 1. Exact match by key in exerciseDatabase
  if (exerciseDatabase && exerciseDatabase[nameOrId]) {
    return nameOrId;
  }

  // 2. Normalized alias lookup
  const normalized = normalizeName(nameOrId);
  if (ALIAS_MAP[normalized] && exerciseDatabase[ALIAS_MAP[normalized]]) {
    return ALIAS_MAP[normalized];
  }

  // 3. Search exerciseDatabase keys by normalized name
  if (exerciseDatabase) {
    for (const key of Object.keys(exerciseDatabase)) {
      if (normalizeName(key) === normalized) {
        return key;
      }
    }
  }

  // 4. Substring match fallback
  if (exerciseDatabase) {
    for (const key of Object.keys(exerciseDatabase)) {
      if (normalizeName(key).includes(normalized) || normalized.includes(normalizeName(key))) {
        return key;
      }
    }
  }

  // Safe default key
  return 'Back Squat';
}

/**
 * Retrieves full exercise details from database by resolved ID.
 */
export function getExerciseDetails(nameOrId: string) {
  const resolvedId = resolveExerciseId(nameOrId);
  const found = exerciseDatabase[resolvedId] || exerciseDatabase['Back Squat'];
  return {
    name: nameOrId || resolvedId,
    ...found
  };
}
