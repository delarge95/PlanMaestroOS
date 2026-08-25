# Tickets multi-agente

> Formato: `[AGENTE-ORIGEN] archivo → owner → cambio pedido → estado`. AG-CORE atiende tickets de archivos compartidos; los tickets entre agentes de dominio los media AG-CORE.

- [AG-NUTRI] src/components/shell/sectionNavConfig.ts → AG-CORE → añadir entrada aditiva `{ href: '/app/fitness/nutrition', label: 'Nutrición' }` en el bloque `fitness` (la página ya existe en rama agent/nutricion; sin ella no es navegable desde el shell) → abierto
- [AG-ANATOM] src/components/shell/sectionNavConfig.ts → AG-CORE → añadir entrada aditiva `{ href: '/app/fitness/anatomy', label: 'Anatomía' }` en el bloque `fitness` (la página ya existe en rama agent/anatomia, commit 785faea; sin ella no es navegable desde el shell) → abierto
- [AG-SERV] docs/agents/PLAN_MULTIAGENTE.md → usuario/AG-CORE → registrar AG-SERV (Agente de Servicios): fila §1.1 + ficha §3.10 con OWN (`docs/servicios/**`, `src/data/services/**`, `src/components/services/**`, `src/pages/app/services/**`, `rag/services.json`), READ (docs raíz 00–36) y FORBIDDEN (sitio público/CV de AG-PORT, career de AG-CAREER) → resuelto (commit c657cad: ficha §3.10 + prompt en PROMPTS_INICIALES.md; pendiente revisión en PR a main)
