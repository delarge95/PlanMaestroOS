# Tickets multi-agente

> Formato: `[AGENTE-ORIGEN] archivo â†’ owner â†’ cambio pedido â†’ estado`. AG-CORE atiende tickets de archivos compartidos; los tickets entre agentes de dominio los media AG-CORE.

- [AG-NUTRI] src/components/shell/sectionNavConfig.ts â†’ AG-CORE â†’ aÃ±adir entrada aditiva `{ href: '/app/fitness/nutrition', label: 'NutriciÃ³n' }` en el bloque `fitness` (la pÃ¡gina ya existe en rama agent/nutricion; sin ella no es navegable desde el shell) â†’ abierto
- [AG-ANATOM] src/components/shell/sectionNavConfig.ts â†’ AG-CORE â†’ aÃ±adir entrada aditiva `{ href: '/app/fitness/anatomy', label: 'AnatomÃ­a' }` en el bloque `fitness` (la pÃ¡gina ya existe en rama agent/anatomia, commit 785faea; sin ella no es navegable desde el shell) â†’ abierto
- [AG-SERV] docs/agents/PLAN_MULTIAGENTE.md â†’ usuario/AG-CORE â†’ registrar AG-SERV (Agente de Servicios): fila `| AG-SERV | agent/services |` en Â§1.1 + ficha Â§3.x con OWN (`docs/servicios/**`, `src/data/services/**`, `src/components/services/**`, `src/pages/app/services/**`, `rag/services.json`), READ (docs raÃ­z 00â€“36) y FORBIDDEN (pÃ¡ginas pÃºblicas de AG-PORT). Rama y worktree ya existen (precreados). Carta completa en `docs/agents/STATUS-serv.md` â†’ abierto
