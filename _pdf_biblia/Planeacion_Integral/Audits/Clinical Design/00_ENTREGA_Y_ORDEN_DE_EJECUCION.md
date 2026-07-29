# Auditoría global UX/UI — Plan Maestro OS

## Objetivo
Transformar la aplicación en un sistema calmado, predecible y de baja carga cognitiva. No es un rediseño decorativo: cada pantalla debe ayudar a elegir y completar una acción sin exigir memoria, lectura extensa ni comparación entre muchas opciones.

## Resultado esperado
- Una acción primaria por vista y por momento.
- Navegación principal con tres destinos: Ahora, Plan y Más.
- Interfaz de superficie limpia, jerarquía tipográfica corta y controles consistentes.
- Detalles, explicaciones y configuraciones accesibles bajo demanda.
- Sin cambios funcionales profundos en Fitness durante esta fase; solo aplicar el sistema transversal.

## Orden obligatorio
1. Leer `01_PRINCIPIOS_CLINICOS_Y_GUARDRAILS.md`.
2. Implementar fundaciones en `02_SISTEMA_DE_DISENO_APPLE_LIKE.md`.
3. Refactorizar shell y navegación según `03_ARQUITECTURA_DE_INFORMACION.md`.
4. Aplicar reglas por pantalla de `04_REDUCCION_CARGA_COGNITIVA.md`.
5. Ejecutar accesibilidad, responsive y QA de `05_IMPLEMENTACION_Y_QA.md`.

## Criterio de salida
No aprobar una pantalla si contiene más de una acción primaria, más de tres acciones visibles equivalentes, texto explicativo permanente que pueda revelarse bajo demanda, o tarjetas usadas solo como separación visual.
