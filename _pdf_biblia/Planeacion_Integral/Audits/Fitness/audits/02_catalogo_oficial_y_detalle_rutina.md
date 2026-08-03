# 02 · Catálogo oficial y detalle de rutina

## Objetivo
Hacer que los programas oficiales sean fáciles de escanear y ejecutar, sin convertir la pantalla en una reproducción del PDF. La estructura de datos conserva prescripción y procedencia; la UI muestra solo lo necesario en cada nivel.

## Jerarquía de pantalla
### Catálogo
Cada programa muestra: título, objetivo en una línea, duración/frecuencia, equipo principal y una acción clara (`Ver programa` o `Activar`). No mostrar notas, ejercicios ni leyendas extensas en la tarjeta.

### Detalle de programa
1. Título del programa.
2. Resumen breve de objetivo y estructura.
3. Acción primaria: `Activar rutina` o `Continuar`.
4. Acción secundaria: `Ver PDF`.
5. Selector de semana y día.
6. Prescripción del día seleccionado.

## Copy y controles obligatorios
### Semana
```text
Semana
1  2  3  4  5  6
```
- Usar un único label `Semana`.
- Mostrar solo números en los controles; no repetir `Sem.` ni `Semana`.
- El número activo tiene estado seleccionado accesible.

### Día
```text
Día
Upper 1  Lower 1  Upper 2

[al seleccionar]
Upper 1
Empuje y pecho
```
- El nombre principal (`Upper 1`) es el título.
- La descripción (`Empuje y pecho`) es secundaria y solo se muestra en el panel/contenido del día activo.
- No mezclar abreviaturas diferentes para un mismo día.

### PDF y notas
- Reemplazar toda variante larga de CTA por `Ver PDF`.
- Mostrar `Nota` como disclosure colapsado por defecto.
- Abrir la nota solo por acción explícita; excepción: advertencia de seguridad verdaderamente crítica.
- Las notas deben ser originales, concretas y breves; no copiar contenido extenso del PDF.

## Ejercicios y detalle
- En desktop, una fila por ejercicio muestra: nombre, series x repeticiones, esfuerzo, descanso y estado de sustitución.
- En móvil, mostrar nombre, series x repeticiones y esfuerzo; revelar descanso, warm-up, técnica y nota en `Ver detalle`.
- El nombre abre la ficha local de ejercicio sin perder la semana/día actual.

## Sustituir
Al abrir `Sustituir`, ordenar resultados así:
1. Opciones documentadas por el programa, con badge `Recomendada`.
2. Alternativas personales/aprobadas del plan, si existen.
3. Alternativas compatibles provenientes de FitApp.

No mostrar `recomendado por el PDF` ni párrafos justificativos largos. La fuente define el orden, no el ruido visual. Si no hay coincidencia segura, mostrar `No hay sustitución segura configurada`.

## Criterios de aceptación
- Todas las notas comienzan cerradas.
- Existe una única acción `Ver PDF` por contexto relevante.
- Semana y día se entienden sin labels repetidos.
- El ejercicio, su sustituto y el motivo quedan visibles en el historial sin alterar la prescripción fuente.
