# FIX 05 — Tests, CI y evidencia por fase (cierre del agujero de proceso)

## Problema
Las 7 fases se marcaron completas con solo `astro check`. No hay tests de reglas de negocio
ni evidencia manual. Esto permitió que pasaran los problemas P0 de navegación, jerarquía,
seguridad y datos.

## Implementación

### 1. Tests mínimos (Vitest) — crear

```text
src/data/contracts/__tests__/task.test.ts
src/lib/fitness/__tests__/loadCalculator.test.ts      // PR+RPE -> carga/discos, casos borde
src/lib/fitness/__tests__/volumeStats.test.ts         // volumen usa ejercicio EJECUTADO
src/lib/languages/__tests__/spacedRepetition.test.ts  // intervalos 1/3/7/14/30
src/lib/career/__tests__/pipelineRules.test.ts        // 1 próxima acción por aplicación
src/lib/sync/__tests__/idempotency.test.ts            // mismo sessionId no duplica
```

Cada test: 3–5 casos concretos con datos reales de ejemplo. Si una regla no tiene test,
la feature no se marca completa.

### 2. Scripts en package.json

```json
{
  "scripts": {
    "validate:fitness": "tsx scripts/validateFitness.ts",
    "test": "vitest run",
    "ci": "npm run validate:fitness && npm run test && astro check"
  }
}
```

### 3. CI obligatorio

`.github/workflows/ci.yml` corre `npm run ci` en cada push a `main` y cada PR.
El merge queda bloqueado si falla (branch protection).

### 4. Plantilla de evidencia por fase

Crear `docs/implementation/EVIDENCE_TEMPLATE.md`:

```markdown
## Fase X — evidencia de cierre
| Ítem | Resultado | Evidencia (captura/comando) |
|---|---|---|
| ... | OK/FALLA | ... |

### Capturas
- [ ] Desktop 1440px
- [ ] Móvil 375px
- [ ] Flujo con teclado (video o lista de pasos)

### Comandos ejecutados
- [ ] `npm run ci` → salida pegada
- [ ] Validadores de fase → salida pegada
```

### 5. Re-ejecutar cierres retroactivamente
Para fases 1–7 ya "completadas": rellenar la plantilla de evidencia de cada una.
Donde un ítem falle, abrir issue etiquetado `retro-fix` y corregir en el orden del FIX 00.

## Aceptación
- `npm run ci` verde en CI (captura del run).
- Plantilla de evidencia rellenada para las 7 fases.
- Branch protection activada (captura de settings).
