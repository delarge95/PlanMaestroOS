# 34 — Landmarks de volumen por músculo (semilla del catálogo 100+ reglas)

> Rangos MEV/MAV/MRV (series duras/semana) compilados de Israetel (RP) y Nippard.
> `confidence: inferred`, tier `expert-book`. Cada fila se convierte en 1-3 reglas
> con el prompt DESPACHO-5 §A **verificando contra tu biblioteca** (no aplicar a ciegas:
> si OG2/Nippard extraído dice otro número, manda el libro vía `evidence.ts`).
> Destino: `rag/fitness/fuentes/volume-landmarks.md` (chunks) → reglas `fit:vol-*`.

| Músculo | MEV | MAV | MRV | Frec mín | Nota |
|---|---|---|---|---|---|
| Pectoral | 6-8 | 10-16 | 18-22 | 2× | banca/fondos cuentan doble para tríceps/deltoides |
| Espalda (dorsal) | 10 | 14-20 | 22-25 | 2× | remo + jalón vertical |
| Trapecio | 8 | 12-16 | 18 | 2× | peso muerto cuenta parcial |
| Deltoides lateral | 8 | 14-20 | 22-26 | 2-3× | el que más volumen tolera del torso |
| Deltoides frontal | 4 | 6-10 | 12 | 1-2× | ya trabaja en todo press |
| Deltoides posterior | 8 | 12-18 | 20 | 2× | face pulls, pájaros |
| Bíceps | 8 | 12-18 | 20 | 2× | remos supinos cuentan mitad |
| Tríceps | 8 | 12-16 | 18 | 2× | press cerrado/fondos cuentan |
| Cuádriceps | 8 | 12-16 | 18-20 | 2× | sentadilla profunda = más estímulo por serie |
| Femorales | 6 | 10-14 | 16 | 2× | rumano + curl (cadera + rodilla) |
| Glúteos | 6 | 10-16 | 18 | 2× | hip thrust + sentadilla |
| Gemelos | 8 | 12-16 | 20 | 2-3× | recto (gastro) + flexionado (sóleo) |
| Abdominales | 8 | 14-20 | 25 | 2-3× | anti-extensión + flexión |
| Antebrazos | 6 | 10-14 | 16 | 2× | agarre de todo jalón cuenta |
| Cuello/trapezoide sup. | 4 | 6-10 | 12 | 1-2× | solo intermedios+ |

## Reglas de conversión (mecánicas, 1 encargo)

1. Por fila: `fit:vol-<musculo>-mev` (warning si < MEV 2 semanas: "estímulo insuficiente"),
   `fit:vol-<musculo>-mrv` (violation si > MRV), opcional `fit:vol-<musculo>-freq`
   (warning si frec < mín). Máx 3 por chunk (DESPACHO-5 §A).
2. `metric` = hard sets/semana del patrón o grupo (usar `patternVolumeFromSessions`
   para patrones; para músculos, `volumeStats.calculateMuscleVolumeFromLogs` — puente
   músculo↔patrón documentado en archivo 14).
3. Toda regla sin cifra del libro → SKIP (no inventar). Toda regla con cifra que
   contradiga esta tabla → gana el libro (`resolveConflict`, `impl/rules/evidence.ts`).
4. Lote 1 (encargo M1-a): torso empuje (pectoral, deltoides ×3, tríceps). Lote 2:
   tirón (espalda, trapecio, bíceps). Lote 3: pierna. Lote 4: resto + frecuencia.
   Cada lote: chunks → reglas → tests warning+not-applicable → merge.
