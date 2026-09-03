# 28 — Operativa diaria y gobernanza (cómo trabaja el enjambre)

## 28.1 Ritmo

Día: morning-plan → Top3 (Aprobar/Editar) → ejecutar → evening-review (cierre+mañana) ≤10 min
gestión. Semana: 3 empresas nuevas + 1 ajuste CV + % aprobados IA. Mes: re-snapshot
mercado (doc-30 como serie) + recalibración fitScore + 1 curso. Domingo: síntesis (Spark T4).

## 28.2 Reglas de despacho (añaden a NORMAS_ORQUESTADOR, no la cambian)

- 1 entorno = 1 tarea; worktree por dominio; navegadores nunca tocan repo
  (`biblioteca/_llm-outputs/<entorno>/`); verificación por tanda (archivo 24 §24.2).
- Todo ENCARGO trae: objetivo único, rutas exactas, qué NO tocar, formato de salida,
  verificación. Todo HANDOFF trae: contratos, decisiones, estado.
- Correcciones pendientes en orquestación: typo `NORMAS_ORGESTRADOR` (DESPACHO-1),
  migrar A1-A4 de DESPACHO-2 fuera de OX Alpha (D3 ya usa Turbo/Flash),
  crear LOTE-2/3 o renombrar citas al LOTE-1 real, actualizar CHECKPOINT (dice
  "virgen" donde hay ciclos completos).
- Ownership nuevo: AG-ORQ (todayAdapter+eventos, ADR-7), AG-GASTRO (activar, archivo 26),
  grafo (AG-CORE), matriz lesiones (AG-FIT + fisio), `mappers.ts` Notion (AG-CORE).

## 28.3 Orden de encargos (las próximas 8 semanas)

S1 verificación Fase-1 → S2 ds-* → S3 snapshot→nutrición + fila laboral →
S4 worker M6 → S5 limpieza + ADRs + tickets nav → S6 RAG fitness + EN/DE →
M1 100 reglas + 4 jobs → M2 grafo → M3 lesiones → M4 CV procedural.
Detalle fechado en archivo 09. Si un encargo no cabe en 1-3 días, se parte.
