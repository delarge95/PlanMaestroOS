# Tickets multi-agente

> Formato: `[AGENTE-ORIGEN] archivo → owner → cambio pedido → estado`. AG-CORE atiende tickets de archivos compartidos; los tickets entre agentes de dominio los media AG-CORE.

- [AG-NUTRI] src/components/shell/sectionNavConfig.ts → AG-CORE → añadir entrada aditiva `{ href: '/app/fitness/nutrition', label: 'Nutrición' }` en el bloque `fitness` (la página ya existe en rama agent/nutricion; sin ella no es navegable desde el shell) → abierto
- [AG-ANATOM] src/components/shell/sectionNavConfig.ts → AG-CORE → añadir entrada aditiva `{ href: '/app/fitness/anatomy', label: 'Anatomía' }` en el bloque `fitness` (la página ya existe en rama agent/anatomia, commit 785faea; sin ella no es navegable desde el shell) → abierto
