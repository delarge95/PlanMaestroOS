# 04 · Astro frontend e información

## Objetivo
Evolucionar la app sin destruir módulos existentes. El shell debe ser simple, mientras que cada dominio puede crecer dentro de rutas y contratos aislados.

## Navegación MVP
```text
Hoy
Fitness
Carrera
Más
  ├── Tesis (próximamente)
  ├── Idiomas (próximamente)
  ├── Academia (próximamente)
  └── Gastronomía (próximamente)
```
No mostrar todas las áreas futuras como dashboards funcionales. Usar estados `Próximamente` con una descripción corta solo si aportan orientación; de lo contrario, mantenerlas fuera de la navegación primaria.

## Pantalla Hoy
Debe ser la entrada predeterminada y responder:
- Top 3 y bloque activo.
- Una sola siguiente acción principal.
- Estado resumido de Fitness y Carrera, no dashboards completos.
- Cierre rápido del día.

Ejemplo:
```text
Hoy
Bloque A · TwinSight: optimizar UI móvil
[Empezar 10 min]

Después
Fitness · Rutina activa: Upper 1
Carrera · 1 seguimiento pendiente
```

## Fitness
Conservar el trabajo actual: catálogo, rutina activa, registro, PRs, historial, habilidades y preparación. Las nuevas integraciones deben envolver los stores existentes mediante adaptadores, no reescribirlos en paralelo.

## Carrera MVP
Vistas:
1. Pipeline: cada aplicación con estado, próxima acción y fecha de seguimiento.
2. Detalle: empresa, rol, requisitos, versiones de activos y timeline.
3. Activos: CVs, cartas y portfolio, con estado de aprobación.
4. Borradores IA: separados de acciones enviadas; requiere aprobación explícita.

## Componentes y contratos
```text
src/
  components/
    shell/
    today/
    fitness/
    career/
    shared/
  data/
    contracts/
    adapters/
    snapshots/
  lib/
    notion/
    github/
    sync/
    ai/
  pages/
    app/
      index.astro
      fitness.astro
      career.astro
      more.astro
```

- `contracts/`: tipos agnósticos de proveedor.
- `adapters/`: Notion, snapshots, GitHub y storage local → contratos.
- Componentes nunca consultan Notion/GitHub directamente.
- `snapshots/` contiene solo datos saneados aptos para cliente.

## Estados de UI
Toda vista de datos debe implementar: cargando, vacío, error recuperable, desactualizado y listo. Mensajes breves y acciones claras; no ocultar fallos de sync.

## IA en UI
No instalar un chat global de primera. Empezar con acciones contextuales:
- `Proponer Top 3` en Hoy.
- `Resumir vacante` y `Preparar borrador` en Carrera.
- `Explicar progreso` en Fitness.

Cada respuesta debe mostrar fuentes/datos usados, permitir editar y requerir aprobación antes de persistir o ejecutar una acción.

## Estado de Implementación
- **Contratos Agnósticos de Interfaz**: Definidos en `src/data/contracts/domainContracts.ts` (`TodayDomainView`, `CareerPipelineView`, `UpcomingDomainState` para dominios con estado `próximamente`).
- **Adaptadores de Presentación**: `src/data/adapters/todayAdapter.ts` consolida métricas locales y snapshots sin acoplar los componentes de UI directamente a la API de Notion.
- **Acciones Contextuales IA**: Implementado el componente reutilizable `src/components/shared/ContextualAIActionButton.tsx` para `Proponer Top 3`, `Resumir vacante` y `Explicar progreso`, desplegando fuentes utilizadas, editor de borrador y aprobación explícita requerida.
- **Pantalla Hoy Rediseñada**: `src/components/schedules/TodayTabWorkspace.tsx` responde inmediatamente con el bloque activo, una primera micro-acción de menos de 10 minutos (`[Empezar 10 min]`) y resúmenes de Fitness y Carrera.
- **Corrección de Hidratación y Navegación**: `NavigationShell.tsx` corregido mediante hidratación `mounted` state para garantizar funcionamiento instantáneo de los botones "Más" y "Modo simple".
