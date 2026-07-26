# Arquitectura Web Integral para el Plan Maestro Total

## 1. Propósito del producto

Esta web debe funcionar como el **sistema operativo central** de toda la estrategia personal, clínica, física, académica, laboral e idiomática. Debe concentrar en una sola plataforma toda la información que hoy existe dispersa entre el Plan Maestro v3, los horarios por fase, el plan fitness, el plan clínico de TDAH y ansiedad social, el reporte clínico, la biblia laboral, el roadmap de 16 semanas, los materiales de TwinSight, los recursos de alemán y los documentos fuente asociados.[file:28][file:27][file:26][file:23]

La web no debe ser una vitrina estática de documentos. Debe ser una **aplicación de conocimiento operativo**, capaz de mostrar teoría, origen, justificación, reglas, cronogramas, trazabilidad, métricas, seguimiento de ejecución, replanificación y vistas múltiples del mismo sistema sin perder coherencia.[file:27][file:28]

## 2. Objetivo principal

Convertir un conjunto complejo de documentos largos en una experiencia digital donde sea posible:

- Consultar el plan completo por área, fase, día, semana, bloque horario o módulo clínico.[file:27][file:26]
- Ver la fuente exacta de cada regla, rutina o decisión, incluyendo el documento original, la sección, el concepto y la razón de su inclusión.[file:27][file:23]
- Interactuar con cronogramas visuales donde cada celda abra contexto ampliado, explicación, checklist, riesgos, fuente original y acciones relacionadas.[file:26][file:27]
- Registrar progreso real: hecho, no hecho, parcialmente hecho, reprogramado, bloqueado o descartado.[file:23][file:28]
- Mantener una capa editorial completa y una capa de ejecución diaria simplificada dentro del mismo producto.[file:27][file:28]

## 3. Tesis del producto

El sistema debe tratar el plan como una **base de conocimiento viva + motor de ejecución + tracker conductual**. El usuario no solo necesita leer el plan; necesita usarlo como tablero principal para decidir qué hacer hoy, por qué hacerlo, cómo ejecutarlo, qué evidencia lo respalda y cómo ajustar el sistema si una semana colapsa.[file:27][file:23][file:28]

## 4. Alcance funcional

La aplicación debe incluir absolutamente toda la información relevante de los siguientes universos documentales:

1. **Plan Maestro v3**: principios rectores, prioridades, módulos, rutina diaria, integración semanal, métricas y reglas de rescate.[file:28]
2. **Horarios por fase y matriz semanal**: tablas detalladas por semanas, franjas, fases y micro-reglas operativas.[file:27][file:26]
3. **Plan fitness**: fases 1-3, prehab, skill work, Min-Max adaptado, sustituciones, PM de movilidad, HIIT, LISS y reglas de seguridad.[file:27]
4. **Reporte clínico y plan de acción**: TDAH inatento, ansiedad social, sueño, cannabis, trauma, posible TEA, intervención por módulos, exposición graduada, video feedback, control de distractores, cierre de tareas y regulación emocional.[file:20][file:21][file:27]
5. **Biblia laboral y roadmap**: diagnóstico ejecutivo, paquete mínimo vendible, TwinSight como eje, portfolio, GitHub, CV, LinkedIn, ArtStation, ARA, aplicaciones, entrevistas, scorecards, legalidad, contractor readiness, playbook 16 semanas y tracker laboral.[file:23][file:22]
6. **Módulo de alemán**: Duolingo, libros A1, audios, IA conversacional, hábito diario 13:30–14:00 y progreso acumulado.[file:28][file:27][file:26]
7. **Fuentes teóricas y bibliográficas**: libros, métodos, marcos, protocolos y reportes usados como base editorial y clínica, así como la relación entre teoría y acción operativa.[file:27][file:23]

## 5. Tipo de producto recomendado

El producto no debe construirse como sitio informativo tradicional. Debe diseñarse como una **web app de conocimiento y ejecución personal**, con patrones de dashboard, documentación estructurada, base de datos relacional, calendario interactivo y paneles de seguimiento.[file:26][file:27][file:28]

El paradigma correcto es una mezcla de:

- **Knowledge base** tipo docs/wiki.
- **Dashboard operacional** tipo planner semanal.
- **Timeline / calendar engine** para fases, bloques y cronogramas.[file:26][file:27]
- **Task/progress tracker** para activos clínicos, físicos, laborales y diarios.[file:23][file:28]
- **Source graph** para trazabilidad entre regla → plan → sección → documento → teoría.[file:27][file:23]

## 6. Arquitectura de información

La arquitectura debe basarse en cinco capas jerárquicas, visibles y navegables.

### 6.1 Capa 1: Visión global

Página o vista principal de resumen ejecutivo con:

- Estado general del sistema hoy.
- Fase actual global y fase por dominio (fitness, laboral, exposición, etc.).[file:27][file:28]
- Próximos bloques de hoy.
- Estado de hábitos clave: sueño, alemán, prehab, trabajo profundo, exposición, aplicaciones.[file:26][file:27]
- Alertas de desajuste: dolor >3/10, semana caída, backlog excesivo, demasiadas tareas abiertas, falta de follow-up, baja adherencia al sueño, etc.[file:20][file:21][file:23]

### 6.2 Capa 2: Dominios maestros

Secciones principales del sistema:

1. Inicio / Dashboard
2. Plan Maestro
3. Cronogramas
4. Clínica
5. Fitness
6. Laboral
7. Alemán
8. Progreso / Tracker
9. Biblioteca de Fuentes
10. Configuración / Replanificación

Cada dominio debe tener subpáginas editoriales y vistas ejecutivas.

### 6.3 Capa 3: Módulos

Cada dominio se divide en módulos concretos. Ejemplos:

- Clínica → TDAH Módulos A-F, Ansiedad Social Módulos A-F, sueño, cannabis, trauma, TEA.[file:27]
- Fitness → Prehab, skill work, Min-Max, sustituciones, PM movilidad, fases 1/2/3.[file:27][file:26]
- Laboral → TwinSight, portfolio, GitHub, CV, LinkedIn, ArtStation, outreach, entrevistas, ARA, tracker.[file:23]
- Alemán → Duolingo, libros A1, audios, IA conversacional, progreso semanal.[file:28]

### 6.4 Capa 4: Elementos operativos

Cada módulo contiene objetos atómicos interactivos, por ejemplo:

- Un bloque horario de 09:20–11:40.[file:27]
- Una regla: “máximo 3 tareas al día”.[file:27]
- Una exposición Nivel 4.[file:27]
- Un ejercicio: Spanish Squats 3×45s.[file:27]
- Un activo laboral: TwinSight README.[file:23]
- Un recurso: Menschen A1 audio 03.[file:28]

### 6.5 Capa 5: Evidencia y origen

Todo elemento operativo debe vincularse a:

- Documento fuente.
- Sección del documento.
- Concepto de origen.
- Razonamiento de inclusión.
- Relaciones con otros elementos.[file:27][file:23]

## 7. Modelo conceptual de entidades

La app debe tratar la información como entidades enlazadas, no como páginas sueltas. Se recomienda el siguiente modelo de datos conceptual.

### 7.1 Entidades núcleo

- **Plan**: documento madre o subplan.
- **Phase**: Fase 1, 2, 3 o semanas 1–16.[file:27][file:23]
- **ScheduleBlock**: bloque horario diario o semanal.[file:26][file:27]
- **Module**: TDAH A-F, ansiedad, sueño, fitness, etc.[file:27]
- **RoutineItem**: ejercicio, hábito, regla o procedimiento concreto.
- **Task**: acción ejecutable asociada a una fecha, dominio o fase.[file:23]
- **Asset**: portfolio, TwinSight case, demo reel, README, CV, etc.[file:23]
- **Resource**: libro, audio, video, PDF, URL, herramienta, plantilla.
- **SourceDocument**: PDF, markdown u otro documento original.[file:20][file:21][file:22][file:23][file:26][file:27][file:28]
- **SourceSection**: sección específica dentro de un documento.
- **EvidenceLink**: justificación de por qué un elemento existe.
- **ProgressLog**: registro diario/semanal de ejecución real.
- **Metric**: variable cuantificable (sueño, dolor, adherencia, aplicaciones, horas profundas, etc.).[file:20][file:21][file:23]
- **RescheduleEvent**: reprogramación de una tarea o bloque.
- **RiskFlag**: alerta clínica, física, operativa o laboral.

### 7.2 Relaciones críticas

- Un **ScheduleBlock** puede activar varios **Modules**.[file:27]
- Un **RoutineItem** puede pertenecer a varias **Phases** y varios **Domains**.
- Un **Task** puede derivarse de un **Asset**, un **Module** o un **Plan**.[file:23]
- Un **RoutineItem** debe apuntar a uno o varios **SourceSections**.[file:27]
- Un **ProgressLog** debe poder marcar si algo fue completado, omitido, modificado o reprogramado.[file:23][file:28]
- Un **RiskFlag** puede modificar el horario recomendado o la intensidad de una rutina.[file:20][file:21]

## 8. Mapa de navegación principal

La experiencia debe estar diseñada con navegación persistente lateral en desktop y navegación adaptativa en móvil.

### 8.1 Sidebar principal

- Dashboard
- Hoy
- Semana
- Fases
- Plan Maestro
- Clínica
- Fitness
- Laboral
- Alemán
- Cronogramas
- Tracker
- Biblioteca
- Ajustes

### 8.2 Barra contextual superior

Debe cambiar según el dominio y permitir:

- Selector de fase.
- Selector de vista: diaria, semanal, mensual, por dominio, por módulo, por fuente.
- Búsqueda global.
- Filtros: pendiente, activo, crítico, archivado, clínico, físico, laboral, etc.
- Cambio de tema claro/oscuro.

### 8.3 Navegación por breadcrumb

Ejemplo:

`Plan Maestro > Clínica > Ansiedad Social > Módulo E > Nivel 4 > Bloque 14:00–14:40 > Fuente original`

Esto es esencial porque el sistema será muy profundo y necesita trazabilidad visible.

## 9. Vistas obligatorias del producto

## 9.1 Dashboard ejecutivo

Debe mostrar en una sola pantalla:

- Resumen del día.
- Próximo bloque activo.
- Estado de adherencia semanal.
- Progreso por dominio.
- Alertas y cuellos de botella.[file:28][file:23]
- Próximos hitos del roadmap.[file:23]

### Componentes sugeridos

- Tarjeta “Hoy”.
- Tarjeta “Semana”.
- Tarjeta “Fase actual”.
- Tarjeta “Métricas críticas”.
- Tarjeta “Pendientes de alto impacto”.
- Tarjeta “Riesgos detectados”.
- Tarjeta “Fuentes relacionadas con lo que toca hoy”.

## 9.2 Vista “Hoy”

Debe servir como centro operativo diario.

### Contenido

- Línea temporal desde 05:30 hasta 21:30.[file:26][file:27]
- Bloques coloreados por dominio.
- Estado por bloque: por hacer, en curso, completado, pospuesto, omitido.
- Modal por bloque con:
  - objetivo,
  - checklist,
  - duración,
  - regla clínica aplicable,
  - riesgo,
  - fuente,
  - enlace al plan original,
  - notas del día,
  - botón de reprogramar.

## 9.3 Vista semanal

Debe tener varias representaciones:

1. **Grid semanal tipo calendario** inspirado en la matriz de horarios.[file:26]
2. **Tabla ejecutiva por día** similar a los documentos fase por fase.[file:27]
3. **Kanban semanal** con pendientes, en curso, hecho, reprogramado.
4. **Resumen de adherencia** por categorías: clínica, fitness, laboral, alemán, sueño.[file:28]

## 9.4 Vista por fases

Debe permitir entrar a Fase 1, Fase 2 y Fase 3, y ver por separado:

- estructura diaria base,
- cuadro semanal específico,
- módulos activos,
- riesgos,
- reglas nuevas de esa fase,
- cambios respecto a la fase anterior.[file:27][file:26]

Para laboral debe existir además vista por semanas 1–16 con roadmap, definition of done y decisiones del viernes.[file:23]

## 9.5 Vista documental / wiki

Debe servir para leer el contenido completo de los planes como conocimiento navegable.

### Requisitos

- Árbol lateral de secciones.
- Render de markdown o bloques enriquecidos.
- Hipervínculos internos entre conceptos y módulos.
- Panel lateral de “relaciones” y “fuentes citadas”.
- Posibilidad de colapsar/expandir secciones largas.

## 9.6 Vista de fuentes y trazabilidad

Debe permitir responder a preguntas como:

- ¿De dónde salió esta regla?
- ¿Qué documento la respalda?
- ¿Qué secciones derivan de este libro o protocolo?
- ¿Qué bloques del horario usan este concepto?

Cada ítem debe mostrar:

- nombre de la fuente,
- tipo de fuente,
- dominio impactado,
- secciones derivadas,
- elementos operativos relacionados,
- cita editorial o resumen del origen.[file:27][file:23]

## 9.7 Vista de progreso y seguimiento

Debe funcionar como tracker integral.

### Categorías mínimas

- Trabajo profundo realizado por semana.[file:28]
- Exposiciones de sustentación realizadas.[file:27]
- Días de alemán completados.[file:26]
- Cumplimiento de prehab, LISS, PM físico y sueño.[file:26][file:27]
- Activos laborales cerrados o pendientes: portfolio, README, demo, CV, LinkedIn, ArtStation, aplicaciones, outreach.[file:23]
- Estado del consumo y noches de prueba sin cannabis.[file:21][file:27]

### Estados por ítem

- No iniciado
- Planeado
- En progreso
- Completado
- Parcial
- Reprogramado
- Bloqueado
- Cancelado

### Log de reestructuración

Debe existir historial de cambios para saber:

- qué se movió,
- cuándo,
- por qué,
- cuál fue el gatillo,
- qué impacto tuvo.

## 10. Interacción por cuadro/celda de cronograma

Este es uno de los núcleos del producto. Cada cuadro del cronograma debe ser un objeto interactivo de alta densidad informativa.[file:26][file:27]

### 10.1 Comportamiento esperado

Al hacer clic o tocar una celda, debe abrirse un drawer lateral o modal con:

- título del bloque,
- horario,
- dominio,
- objetivo del bloque,
- micro-acciones,
- checklist,
- regla TDAH/ansiedad/sueño/fitness activada,
- motivo estratégico,
- dependencia con otros bloques,
- métricas relacionadas,
- fuente exacta,
- enlace a la sección del documento original,
- notas y aprendizaje de iteraciones previas,
- botón de marcar estado,
- botón de duplicar o reprogramar,
- botón de ver bloque equivalente en otra fase.

### 10.2 Profundidad explicativa

Cada bloque no debe solo decir “haz X”. Debe responder:

- qué es,
- por qué está aquí,
- qué problema resuelve,
- cómo se ejecuta correctamente,
- qué errores evitar,
- qué señal indica que debes ajustar intensidad o duración.

## 11. Funcionalidades clave por dominio

## 11.1 Clínica

Debe incluir:

- Módulos TDAH A-F.[file:27]
- Módulos ansiedad social A-F.[file:27]
- Jerarquía de exposición 1–9 con historial de práctica.[file:27]
- Video feedback workflow.[file:27]
- Sueño y cannabis con diario, noches de prueba y tendencias.[file:21][file:27]
- Mapa de disparadores, máscara social/camuflaje y recuperación sensorial.[file:27]

### Interacciones específicas

- Escalas subjetivas pre/post exposición.
- Límite de rumiación con temporizador opcional.
- Registro de predicción catastrófica vs evidencia observada.[file:27]

## 11.2 Fitness

Debe incluir:

- Prehab AM detallado.[file:27]
- Skill work y objetivos técnicos.[file:27]
- Bloques Min-Max según fase.[file:26][file:27]
- Sustituciones Nippard → calistenia/anillas con razón médica y de rendimiento.[file:27]
- PM movilidad, LISS, HIIT, David Thurin, Jefferson Curls, Muscle-up.[file:27]
- Registro de dolor, adherencia, recuperación y cambio de fase.[file:20][file:21]

### Interacciones específicas

- Escala diaria de dolor hombro/brazo/rodilla.
- Selector de fase física.
- Reglas automáticas de ajuste si dolor >3/10.[file:20][file:21]

## 11.3 Laboral

Debe incluir:

- Diagnóstico y brechas laborales.[file:23]
- Paquete mínimo vendible.[file:23]
- TwinSight case y activos dependientes.[file:23]
- Portfolio, GitHub, CV, LinkedIn, ArtStation y demo reel.[file:23]
- Pipeline de aplicaciones, scoring, outreach, follow-ups y entrevistas.[file:23]
- Scorecard de ofertas, legalidad contractor y movilidad.[file:22][file:23]
- Playbook semana por semana.[file:23]

### Interacciones específicas

- Tabla de empresas y roles con scoring.
- Estado de cada asset público.
- Kanban de pipeline laboral.
- Vista “qué bloquea aplicar hoy”.

## 11.4 Alemán

Debe incluir:

- Rutina diaria 13:30–14:00.[file:28][file:26]
- Seguimiento de Duolingo, libros, audios e IA.[file:27][file:28]
- Biblioteca de recursos A1.
- Contador de racha real y días completados.
- Microdiario de vocabulario o conceptos revisados.

## 12. Diseño de información para trazabilidad editorial

La web debe tener un sistema explícito de referencias internas. Cada pieza operativa debe poder citar:

- documento,
- sección,
- subtítulo,
- cita corta de origen,
- interpretación operativa,
- dominio(s) afectados.[file:27][file:23]

### Ejemplo de ficha de trazabilidad

**Elemento**: Bloque 14:00–14:40 Exposición CBT.

- Origen primario: Plan de acción TDAH/Ansiedad Social → Módulo E Exposición graduada.[file:21]
- Origen operativo: Horarios Maestros Fase por Fase → bloque de sustentación/exposición.[file:27]
- Razón de inclusión: convertir ansiedad de desempeño en práctica graduada medible.[file:21][file:27]
- Relaciones: video feedback, rumiación post-evento, TwinSight pitch, entrevista técnica.

## 13. Sistema de diseño recomendado

La app debe sentirse sobria, técnica, densa y muy legible; no debe parecer una landing genérica ni una plantilla SaaS superficial. Se recomienda una dirección visual **editorial-suiza + dashboard técnico + knowledge system**.

### 13.1 Principios visuales

- Alto contraste semántico.
- Tipografía muy legible para mucha densidad de información.
- Jerarquía fuerte pero tranquila.
- Colores por dominio, usados con moderación.
- Superficies neutras con capas muy claras.
- Interacción refinada, no decorativa.
- Sensación de herramienta seria, no de app juguetona.

### 13.2 Estilo visual sugerido

- **Tono**: preciso, serio, clínico-técnico, operativo.
- **Inspiración**: combinación entre Linear, Notion docs densas, dashboards de research ops y herramientas de planificación avanzada.
- **Evitar**: gradientes de IA, tarjetas excesivamente redondeadas, iconos decorativos sin función, hero centrista, “productividad aesthetic” vacía.

### 13.3 Color system por dominio

Base neutra para fondo/superficies y acentos por sistema:

- Plan Maestro / General: teal profundo.
- Clínica: ciruela o magenta sobrio.
- Fitness: verde estructural o ámbar controlado.
- Laboral: azul técnico.
- Alemán: dorado suave o mostaza editorial.
- Alertas: rojo notificación moderado.

Los colores deben comunicar contexto, no decorar.

### 13.4 Tipografía recomendada

- **Body/UI**: Satoshi, Inter o General Sans.
- **Display/títulos documentales**: Boska, Zodiak o una serif editorial muy limitada para secciones de lectura profunda.
- La mayor parte de la app debe vivir en tipografía de producto, no de marketing.

### 13.5 Componentes de diseño esenciales

- Sidebar fija.
- Header contextual.
- Cards de estado.
- Drawer de detalle.
- Timeline interactivo.
- Grid semanal de celdas clicables.
- Panel de métricas.
- Tablas densas con filtros.
- Árbol de documentos.
- Panel de trazabilidad.
- Chips de dominio/fase/estado.
- Toggles de vista.
- Modales de edición / registro.

## 14. Arquitectura técnica sugerida

## 14.1 Stack recomendado

Para una implementación robusta y escalable se recomienda:

- **Frontend**: Next.js o React con TypeScript.
- **UI**: Tailwind CSS + componentes headless o sistema propio.
- **Estado local**: Zustand o Redux Toolkit según complejidad.
- **Datos estructurados**: JSON/Markdown inicial, luego base relacional o documentos indexados.
- **Render documental**: MDX o markdown parser enriquecido.
- **Tablas complejas**: TanStack Table.
- **Calendario/timeline**: FullCalendar o grid custom con virtualización.
- **Gráficas de progreso**: Recharts o Plotly para métricas simples.
- **Búsqueda**: Fuse.js local o motor indexado más fuerte si el corpus crece mucho.
- **Gestión de formularios**: React Hook Form + Zod.

## 14.2 Backend sugerido

Si se quiere persistencia real, historial, múltiples vistas y reestructuración, conviene usar backend ligero pero serio:

- **API**: Next API routes / tRPC / Express según preferencia.
- **Base de datos**: PostgreSQL.
- **ORM**: Prisma.
- **Autenticación**: simple y privada; la app puede ser single-user privada al inicio.

## 14.3 Estrategia de contenido

La app debe separar:

1. **Contenido fuente**: markdown/PDF parseado, con metadatos.[file:20][file:21][file:22][file:23][file:26][file:27][file:28]
2. **Contenido estructurado**: entidades normalizadas (bloques, módulos, tareas, métricas).
3. **Contenido dinámico del usuario**: progreso, notas, reprogramaciones, estado.

## 15. Sistema de datos propuesto

### 15.1 Estructura base de documentos fuente

Cada documento debe tener metadatos como:

- id
- título
- tipo
- dominio
- fecha
- versión
- resumen
- índice de secciones
- enlaces a entidades derivadas

### 15.2 Estructura base de bloque horario

```json
{
  "id": "block-f1-mon-1400-sustentacion",
  "phase": "fase-1",
  "day": "lunes",
  "start": "14:00",
  "end": "14:40",
  "domain": ["clinica", "academico"],
  "title": "Sustentación CBT",
  "objective": "practicar exposición graduada sin perfeccionismo",
  "microActions": [
    "usar guion de 3 ideas",
    "grabar audio o video",
    "limitar rumiación a 10 minutos"
  ],
  "modules": ["ansiedad-social-modulo-e", "ansiedad-social-modulo-f"],
  "sourceRefs": ["file:21#modulo-e", "file:27#fase-1-bloque-1400"],
  "relatedMetrics": ["numero_exposiciones", "rumiacion_minutos", "ansiedad_pre_post"],
  "riskRules": ["si la ansiedad supera 8/10 reducir duración pero no cancelar"],
  "status": "planned"
}
```

### 15.3 Estructura base de tarea laboral

```json
{
  "id": "task-twinsight-readme-v1",
  "domain": "laboral",
  "asset": "twinsight-readme",
  "phase": "roadmap-semana-5",
  "priority": "alta",
  "definitionOfDone": "README legible con overview, features, pipeline, metrics y limitations",
  "blockedBy": ["capturas-finales", "demo-90s"],
  "sourceRefs": ["file:23#github-readme"],
  "status": "in_progress"
}
```

## 16. Vistas del tracker y métricas

## 16.1 Métricas mínimas del sistema

### Clínica

- número de exposiciones por semana,
- minutos de rumiación post-evento,
- noches con pantalla fuera de cama,
- noches con o sin cannabis,
- nivel subjetivo de ansiedad por bloque.[file:21][file:27]

### Fitness

- cumplimiento prehab,
- sesiones Min-Max hechas,
- sesiones PM hechas,
- dolor hombro/brazo/rodilla,
- progreso de skill work,
- días LISS.[file:27][file:26]

### Laboral

- horas profundas,
- activos cerrados,
- targets scoreados,
- aplicaciones enviadas,
- follow-ups,
- entrevistas,
- feedback de mercado.[file:23]

### Alemán

- racha,
- días completados,
- minutos estudiados,
- recursos usados.

## 16.2 Dashboards analíticos sugeridos

- Heatmap de adherencia semanal.
- Gráfica de cumplimiento por dominio.
- Tendencia de dolor y sueño.
- Burndown de activos laborales.
- Timeline de fases y entregables.
- Historial de reprogramaciones.

## 17. Sistema de reestructuración y adaptación

La app debe asumir que el plan va a cambiar. Por tanto, necesita una arquitectura de replanificación real.

### 17.1 Funciones obligatorias

- Posponer bloque.
- Reprogramar tarea.
- Duplicar rutina a otro día.
- Bajar intensidad de una semana.
- Marcar una semana en “modo rescate”.[file:28]
- Guardar razón de cambio.
- Registrar efectos posteriores.

### 17.2 Modo rescate

Debe existir una vista especial para semanas caídas, con mínimos vitales:

- sueño,
- prehab,
- bloque A,
- alemán mínimo,
- exposición mínima o mantenimiento,
- tracker reducido.[file:28]

## 18. Biblioteca integral de fuentes

La web debe tener una sección dedicada a materiales de origen.

### 18.1 Tipos de fuente

- PDFs clínicos.[file:20][file:21]
- Markdown maestros.[file:26][file:27][file:28]
- Roadmap y biblia laboral.[file:22][file:23]
- Recursos de idiomas.[file:28]
- Teorías, libros y protocolos mencionados en los planes.[file:27]

### 18.2 Funciones de la biblioteca

- Ver documentos completos o resumidos.
- Ver qué módulos o bloques nacen de cada fuente.
- Extraer citas clave o reglas operativas.
- Navegar por conexiones entre teoría y práctica.

## 19. Requisitos de UX

### 19.1 Reglas de usabilidad

- La vista “Hoy” debe poder usarse en menos de 2 clics desde cualquier punto.
- Un bloque horario debe abrir detalles en menos de 150 ms percibidos.
- El usuario debe saber siempre en qué fase está y qué domina hoy.
- El sistema debe minimizar sobrecarga cognitiva mostrando capas progresivas de información.
- Debe existir modo compacto y modo expandido.

### 19.2 Estrategia de densidad

La app debe soportar dos modos:

- **Modo Operativo**: compacto, directo, accionable.
- **Modo Biblioteca**: profundo, explicativo, editorial, de lectura larga.

La misma información debe poder mostrarse en ambos modos sin duplicar datos.

## 20. Requisitos de accesibilidad y calidad

- Diseño completamente responsive.
- Navegación por teclado.
- Modo oscuro obligatorio.
- Tipografía legible a alta densidad.
- Contraste AA mínimo.
- Scroll principal único en vistas complejas.
- Persistencia visual clara del contexto.
- Búsqueda global rápida.

## 21. Roadmap de implementación sugerido

## Fase A – Fundación de contenido

Objetivo: cargar todo el corpus documental y convertirlo en datos navegables.

- Ingesta de markdown/PDF.
- Normalización por documentos, secciones y entidades.
- Mapeo inicial de fuentes a módulos y bloques.
- Definición del esquema de datos.

## Fase B – Shell de aplicación

Objetivo: construir navegación, layout y sistema de vistas.

- Sidebar.
- Header contextual.
- Dashboard base.
- Vista documental.
- Vista “Hoy” y vista semanal.

## Fase C – Interactividad profunda

Objetivo: volver cada bloque y módulo totalmente interactivo.

- Drawer de detalle.
- Trazabilidad fuente→bloque.
- Sistema de estado y progreso.
- Reprogramación y notas.

## Fase D – Tracker y métricas

Objetivo: convertir la web en herramienta diaria real.

- Logs diarios.
- Métricas por dominio.
- Alertas.
- Modo rescate.
- Dashboards analíticos.

## Fase E – Refinamiento editorial

Objetivo: enriquecer el conocimiento sin romper la operatividad.

- Fichas conceptuales.
- Glosario.
- Relaciones cruzadas.
- Biblioteca ampliada.
- Vistas por teoría, libro o protocolo.

## 22. Estructura de páginas propuesta

```text
/app
  /dashboard
  /today
  /week
  /phases
    /fase-1
    /fase-2
    /fase-3
    /roadmap-16-semanas
  /master-plan
  /clinical
    /tdah
    /ansiedad-social
    /sueno
    /cannabis
    /trauma
    /tea
  /fitness
    /prehab
    /skill-work
    /min-max
    /movilidad-pm
    /fases
  /career
    /twinsight
    /portfolio
    /github
    /cv
    /linkedin
    /artstation
    /applications
    /interviews
    /offers
    /legal
  /german
    /routine
    /resources
    /progress
  /tracker
    /daily-log
    /weekly-review
    /metrics
    /restructures
  /library
    /documents
    /sources
    /concepts
```

## 23. Componentes técnicos de mayor prioridad

1. Layout con sidebar y header.
2. Motor de bloques horarios interactivos.
3. Render de documentos con backlinks.
4. Tracker de progreso multi-dominio.
5. Motor de filtros por fase, dominio y estado.
6. Sistema de referencias y trazabilidad.
7. Panel de reprogramación.
8. Dashboard de métricas.

## 24. Reglas de implementación editorial

- No duplicar contenido si puede representarse por referencia.
- Toda acción debe poder vincularse a una fuente o criterio.
- Todo contenido largo debe poder verse en versión resumida.
- Todo bloque horario debe poder verse fuera del calendario como ficha autónoma.
- Todo cambio de plan debe dejar rastro.
- Todo dominio debe tener una lectura ejecutiva y una lectura profunda.

## 25. Resultado esperado

Si esta web se implementa correctamente, se convertirá en una plataforma donde el usuario pueda:

- entender el sistema completo,
- actuar sin releer 15 documentos largos,
- navegar de la teoría a la práctica y viceversa,
- registrar progreso real,
- revisar por qué algo existe,
- ajustar el plan sin destruir su lógica,
- sostener trabajo profundo, recuperación, exposición, entrenamiento, aprendizaje de alemán y roadmap laboral desde un solo lugar.[file:27][file:28][file:23][file:26]

## 26. Definición final del producto

La mejor definición de esta web es:

> **Un sistema operativo personal interactivo, trazable y multi-dominio que convierte documentos clínicos, físicos, laborales, académicos e idiomáticos en una base de conocimiento accionable con cronogramas interactivos, seguimiento de progreso y capacidad de reestructuración.**

Ese es el estándar que debe guiar tanto la arquitectura funcional como la implementación técnica.[file:27][file:28][file:23]
