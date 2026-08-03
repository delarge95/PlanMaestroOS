# Fitness — Plan maestro de auditoría y corrección

## Propósito
Convertir Fitness en un sistema único, predecible y de baja carga cognitiva: catálogo, rutina activa, registro, progreso, habilidades y preparación deben usar datos coherentes y un lenguaje común. El objetivo no es replicar PDFs ni añadir paneles; es ayudar a la persona a saber qué hacer ahora, registrar lo realizado y entender el progreso sin sobrecarga.

## Principios no negociables
- Una fuente de verdad para programas, ejercicios, sesiones y resultados.
- Una prioridad visible por pantalla; una acción primaria por contexto.
- Divulgación progresiva: primero acción y resumen, después detalle bajo demanda.
- Ningún enlace externo incorrecto, aproximado o silenciosamente sustituido.
- Las decisiones de datos son reversibles, auditables y no destruyen el historial.
- El sistema acompaña entrenamiento; no diagnostica ni trata síntomas.

## Estado conocido
- El modelo objetivo ya contempla catálogo estructurado, rutina activa, sets, RIR/RPE, carga, repeticiones, notas y alternativas.
- La integración de habilidades recibió un resolvedor estricto; aún hay que verificar visualmente que la ruta domine al paso en `Mi práctica` y `Rutas`.
- FitApp-Free no se modifica en esta ronda. Plan Maestro debe usar contenido local y deshabilitar enlaces externos no verificados.

## Orden de ejecución
| Fase | Archivo | Resultado verificable |
|---|---|---|
| 1 | 01 | Mapa de navegación y una fuente de verdad por dato |
| 2 | 02 | Catálogo y detalle escaneables, con copy y jerarquía corregidos |
| 3 | 03 | Logs, PRs y estadísticas útiles sin dashboard denso |
| 4 | 04 | Habilidades con jerarquía correcta y ficha local |
| 5 | 05 | Resolver, aliases y sustituciones validados |
| 6 | 06 | Patrones de UX, accesibilidad y copy aplicados transversalmente |
| 7 | 07 | Pruebas automáticas, QA manual y criterio de cierre |

## Priorización
### P0 — corregir antes de ampliar
- Enlaces de ejercicio incorrectos, ambiguos o con fallback.
- Pérdida de logs, sustituciones o rutina activa al recargar.
- Ejercicios prescritos sin correspondencia válida.
- Desbordamiento móvil, foco inaccesible o acciones que parecen clicables sin funcionar.

### P1 — alto impacto de UX
- Jerarquía de rutas/pasos, semanas/días y CTA.
- Notas colapsadas, copy breve y sustituciones ordenadas.
- Resumen de registro y PRs básicos.

### P2 — después del núcleo estable
- Tendencias avanzadas, filtros complejos, metas secundarias y rutas avanzadas de habilidades.

## Regla de cierre de cada fase
No comenzar la siguiente fase con errores P0 abiertos. Al cerrar cada archivo: ejecutar pruebas aplicables, revisar móvil y desktop, y documentar decisiones o casos pendientes.
