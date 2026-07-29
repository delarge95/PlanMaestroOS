# Arquitectura de información y navegación

## Modelo de tres niveles

### Nivel 1: navegación persistente
Mantener solo tres destinos visibles:
- `Ahora` (icono casa/bolt): acción y bloque actual.
- `Plan` (calendario): agenda, semana, cronograma y planificación.
- `Más` (cuadrícula): áreas, biblioteca, preferencias y herramientas.

En escritorio: sidebar estrecha de iconos con labels visibles al expandirse o tooltip al hover; mantener el destino activo claramente marcado. En móvil: bottom bar con esos tres labels; no usar navegación con solo iconos en móvil.

### Nivel 2: contexto
Al entrar a un área desde `Más`, usar header compacto: breadcrumb `Más / Clínica`, título corto y una sola acción contextual si es indispensable. No duplicar links del menú global dentro de cada página.

### Nivel 3: contenido bajo demanda
Configuración, filtros, principios, historial largo, métricas, ayuda y acciones menos frecuentes deben ir en `Sheet`, popover, disclosure o página secundaria. No ocupar el estado inicial.

## Menú Más
Organizar por intención, no por lista plana:
- `Áreas`: Clínica, Laboral, Alemán, Fitness.
- `Recursos`: Biblioteca, plantillas, archivos.
- `Sistema`: ajustes, apariencia, ayuda.

Cada elemento usa icono + label + una línea opcional de contexto solo si aporta orientación. No mostrar contadores decorativos.

## Reglas de navegación
- Conservar ubicación al volver: ruta, filtro y scroll cuando sea razonable.
- Persistir solo preferencias y contexto de navegación estable; no reabrir modales ni estados transitorios tras reload.
- En cada pantalla, el header debe responder: dónde estoy, qué importa ahora y cómo vuelvo.
- Evitar tabs si hay menos de tres categorías o si una categoría es claramente secundaria; usar disclosure o sheet.

## Aplicación a Clínica
`Ahora` es la vista por defecto. `Rescate` y `Segundo cerebro` deben dejar de competir como tabs prominentes: moverlos a un botón `Herramientas` que abre un Sheet con dos filas. El contenido principal no debe cambiar abruptamente entre tres dashboards completos.

## Aplicación a otras áreas
No rediseñar Fitness en profundidad en esta etapa. Solo reemplazar navegación, header, botones, superficies y densidad conforme a estos documentos. Conservar su flujo funcional para la auditoría específica posterior.
