// worker/src/lib/sanitize.ts - Saneamiento de PII y Marcadores de Salud
export interface ScrubReport {
  clean: string;
  replacements: number;
  blocked: boolean;
  blockReason?: string;
}

const EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const PHONE = /(\+?\d[\d\s.-]{7,}\d)/g;
const URL_WITH_USER = /https?:\/\/[^\s]*@[^\s]*/gi;

/**
 * Tokeniza emails/teléfonos/URLs con usuario. Si el texto trae marcadores de
 * salud cruda (diagnóstico, fármacos, terapia), BLOQUEA: la IA solo recibe agregados.
 */
export function scrubForLLM(text: string): ScrubReport {
  const lower = text.toLowerCase();
  const healthMarkers = ['diagnostico', 'diagnóstico', 'farmaco', 'fármaco', 'terapia:', 'psiquiatr', 'dosis'];
  const hit = healthMarkers.find((m) => lower.includes(m));
  if (hit) {
    return { clean: '', replacements: 0, blocked: true, blockReason: `marcador de salud cruda: ${hit}. Enviar solo agregados.` };
  }
  let replacements = 0;
  const clean = text
    .replace(URL_WITH_USER, () => { replacements++; return '[URL]'; })
    .replace(EMAIL, () => { replacements++; return '[EMAIL]'; })
    .replace(PHONE, () => { replacements++; return '[TEL]'; });
  return { clean, replacements, blocked: false };
}
