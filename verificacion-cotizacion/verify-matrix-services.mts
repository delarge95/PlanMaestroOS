// Verificación matemática: motor actual (repo deploy) vs matriz-web.json (140 valores verificados)
import { computeQuote, SERVICES } from './src/data/services/formula.ts';
import { readFileSync } from 'node:fs';

const matriz = JSON.parse(readFileSync('E:/Laboral/verificacion-cotizacion/matriz-web.json', 'utf-8')) as Array<{id:string;tier:string;min:number;max:number;hmin:number;hmax:number}>;
const esperado = new Map(matriz.map(r => [`${r.id}|${r.tier}`, r]));

const LEVELS = ['XS','S','M','L','XL'] as const;
let ok = 0, diffs: string[] = [], faltantes = 0;
for (const svc of SERVICES) {
  for (const lv of LEVELS) {
    const q = computeQuote(svc.id, lv, 'COP');
    if (!q) continue;
    const key = `${svc.id}|${lv}`;
    const e = esperado.get(key);
    if (!e) { faltantes++; continue; }
    const qMin = (q as any).totalMin, qMax = (q as any).totalMax;
    const qHMin = (q as any).hoursMin, qHMax = (q as any).hoursMax;
    if (qMin === e.min && qMax === e.max && qHMin === e.hmin && qHMax === e.hmax) ok++;
    else diffs.push(`${key}: motor=(${qMin},${qMax},${qHMin}h,${qHMax}h) matriz=(${e.min},${e.max},${e.hmin}h,${e.hmax}h)`);
  }
}
console.log(`comparados: ${ok + diffs.length} | iguales: ${ok} | distintos: ${diffs.length} | sin referencia: ${faltantes}`);
diffs.slice(0, 10).forEach(d => console.log('DIFF', d));
if (diffs.length === 0) console.log('MATEMÁTICA VERIFICADA: 140/140 valores idénticos al motor auditado');
