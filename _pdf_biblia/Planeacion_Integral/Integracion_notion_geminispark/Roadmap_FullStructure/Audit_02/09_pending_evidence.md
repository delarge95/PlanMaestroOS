# FIX 09 — Evidencias pendientes de la ronda anterior (cierre real)

## Objetivo
Cerrar lo que el log reporta como hecho pero sin prueba. Nada de esto es código nuevo:
es ejecutar, capturar y pegar.

## Checklist ejecutable (cada ítem = evidencia en el PR)

### Seguridad IA / worker
- [ ] `grep -n "auth\|token\|session" worker/src/index.ts` → debe existir verificación de
      identidad en `/ai/action`. Si no existe: añadir header `x-pm-key` con secreto compartido
      (worker + app) como mínimo, o sesión real si ya hay auth.
- [ ] Build de producción + `grep -rn "AI_PROVIDER_KEY" dist/` → vacío (captura).
- [ ] GitHub → Actions → `daily-jobs` → Run workflow (dispatch) → captura del run verde.

### Sync Notion (ida y vuelta real)
- [ ] Editar una tarea en Notion → `npx tsx scripts/sync-notion-read.ts` → captura del JSON
      actualizado con `generatedAt` reciente.
- [ ] Captura del código de `sync-notion-read.ts` mostrando `new Client({ auth: ... })` y
      `databases.query(...)` contra IDs reales (si lee archivos locales, es FALLA y se corrige).
- [ ] Aprobar un cambio en la app → `sync-notion-write.ts` → captura de la página en Notion
      actualizada.

### Navegación y diseño
- [ ] Captura desktop: barra global centrada con 4 items + Más.
- [ ] Captura 375px: barra inferior 4 + Más; sheet de Más abierto.
- [ ] Confirmar que no existe toggle de "modo simple" en ninguna vista (captura de Settings).

### Fitness reestructurado (FIX 08)
- [ ] 6 capturas pedidas en FIX 08 sección E.

### Proceso
- [ ] Branch protection activada en `main` (captura de Settings → Branches).
- [ ] `docs/implementation/EVIDENCE_TEMPLATE.md` rellenada para fases 1–7 (una tabla por fase).
- [ ] Captura del run de CI en GitHub Actions verde (no solo local).

## Regla de cierre
Esta ronda se considera terminada cuando TODAS las casillas tienen evidencia pegada en el PR.
Sin evidencia = no hecho.
