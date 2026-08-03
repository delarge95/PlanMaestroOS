# 07 · Validación, pruebas y definición de terminado

## Objetivo
Evitar que Fitness se declare terminada por apariencia. El cierre exige datos correctos, interacciones reales, persistencia, jerarquía visual, accesibilidad y pruebas repetibles.

## Validación automática
Crear o ampliar validadores para comprobar:
- Todo ejercicio obligatorio tiene referencia local y estado de resolución válido.
- Ningún enlace habilitado es ambiguo, pendiente o variante incompatible.
- Toda prescripción incluye series/reps, descanso y esfuerzo cuando aplique.
- Sustituciones existen, preservan criterios requeridos y son reversibles.
- No hay ciclos/steps huérfanos en rutas de habilidades.
- Logs preservan prescrito, ejecutado y override.
- PRs no mezclan variantes incompatibles ni se duplican tras edición.
- Persistencia migra claves previas sin borrar historial.

## Pruebas de integración
- Activar programa, cambiar semana/día, registrar sets, recargar y verificar continuidad.
- Sustituir ejercicio, guardar, revertir y confirmar historial completo.
- Abrir detalle local de ejercicio desde catálogo, tracker y habilidades.
- Validar que el contexto de semana/día se conserva al cerrar detalle.
- Verificar que una ficha FitApp pendiente no se convierte en enlace erróneo.

## QA manual agrupado
### Datos
- Comparar semana 1, intermedia y final de cada programa con la fuente disponible.
- Confirmar que no haya semanas inventadas o marcadas completas sin verificar.

### Interfaz
- `Nota` empieza colapsada.
- `Ver PDF` usa copy breve.
- Semana muestra solo números bajo un único título.
- Día prioriza `Upper 1`; el descriptor aparece como contexto secundario.
- En `Mi práctica`, la ruta es el h1 y el paso actual es h2.
- En `Rutas`, el título de ruta tiene mayor peso que cada paso.

### Enlaces
- Probar manualmente `Colgado activo y control escapular` e `Inverted Row`.
- Confirmar que ningún enlace abre back squat u otro ejercicio distinto.
- Probar una muestra de cada dominio y todas las sustituciones del programa activo.

### Registro y progreso
- Revisar sesión, historial, PR y resumen con un ejercicio sustituido.
- Confirmar que estadísticas usan lo ejecutado y no reescriben la prescripción.

### Accesibilidad
- Probar 320px, 375px, 390px, 768px y desktop.
- Probar teclado: Tab, Enter/Espacio, Escape y foco tras cerrar sheet/modal.
- Probar lector de pantalla en catálogo, logger, sustituciones y habilidades.

## Criterio de terminado
Fitness no está terminado mientras exista cualquiera de estos casos:
- ejercicio obligatorio sin resolver o con enlace incorrecto;
- pérdida de logs, sustituciones, PRs o rutina activa;
- pantalla sin jerarquía clara o con acción aparente no funcional;
- copy largo/repetitivo que reintroduce carga cognitiva;
- flujo crítico inaccesible por teclado, lector o móvil;
- ruta de habilidad que obliga a depender de un enlace externo pendiente.

## Entrega de cierre
Entregar una lista breve de:
- cambios realizados;
- archivos afectados;
- validaciones ejecutadas y resultado;
- casos pendientes, con prioridad y decisión explícita;
- capturas desktop/móvil de catálogo, tracker, habilidades y registro.
