# Auditoría exhaustiva de Plan Maestro OS + integración FitApp-Free

## Alcance

Esta auditoría evalúa la web app visible en `http://127.0.0.1:4321/app`, el repositorio `PlanMaestroOS` y el repositorio `FitApp-Free`, con foco en arquitectura de información, sistema de diseño, UX, carga cognitiva, requisitos clínicos, integración transversal de secciones y absorción funcional del módulo fitness.[cite:page:33][cite:page:34][cite:page:35]

El objetivo no es solo detectar defectos visuales o técnicos, sino verificar si el sistema realmente funciona como un sistema operativo personal coherente: accionable, clínicamente seguro, navegable, trazable y capaz de sostener seguimiento longitudinal.[cite:page:33][cite:page:35]

## Diagnóstico ejecutivo

La base conceptual de PlanMaestroOS es fuerte: ya existe una arquitectura documental amplia con fuentes separadas por dominio, una app corriendo con múltiples secciones estratégicas y una intención clara de integrar operación diaria, matrices, clínica, fitness, alemán, biblioteca y progreso.[cite:page:33][cite:page:35]

Sin embargo, la implementación todavía presenta una **brecha estructural** entre “repositorio de conocimiento” y “sistema de ejecución”. El repositorio `PlanMaestroOS` contiene decenas de documentos estratégicos y taxonomías temáticas, mientras que `FitApp-Free` es una aplicación de entrenamiento más madura con analítica, accesibilidad, progresiones y gestión de datos; la app visible parece estar en una fase intermedia donde la navegación macro existe, pero aún no puede asumirse que toda la lógica fina, los vínculos bidireccionales y la trazabilidad completa estén realmente integrados extremo a extremo.[cite:page:33][cite:page:34][cite:page:35]

En otras palabras: la dirección es correcta, pero todavía debe convertirse en una plataforma unificada con modelo de datos común, diseño coherente, reglas clínicas explícitas y observabilidad interna real.[cite:page:33][cite:page:34]

## Evidencia revisada

### App visible

La app abierta muestra una estructura principal con Home/Dashboard, Hoy Live, Cronograma y matriz, además de secciones estratégicas como Laboral, Fitness, Alemán y Clínica, junto con Biblioteca, lo que confirma una intención clara de hub integral.[cite:page:33]

### Repositorio PlanMaestroOS

El repositorio `PlanMaestroOS` contiene carpetas de `src`, `public`, `scripts`, `Research`, `_pdf_biblia`, `_roadmap_laboral` y una larga serie de documentos numerados que cubren posicionamiento, salarios, movilidad, idiomas, educación, portfolio, TwinSight, outreach, tracker, dashboard semanal, ejecución, benchmarks y estrategia final integrada.[cite:page:35]

También declara un modelo de contenido donde copy, rutas, placeholders, links y variantes de foco viven en `src/data`, lo cual es una buena base para un sistema de contenido desacoplado, aunque no prueba por sí mismo que la UI explote toda esa riqueza documental de manera relacional.[cite:page:35]

### Repositorio FitApp-Free

`FitApp-Free` es un proyecto React + Vite + TypeScript con componentes explícitos para analítica y fitness como `AnalyticsChart`, `ProgramAnalytics`, `Routine`, `CalisthenicsProgressions`, `ResponsiveAnalyticsPanel`, `History`, `DataManagement`, `UniversalTable`, `ExerciseGuide`, `ExerciseAlternatives`, además de contexto de aplicación, datos de ejercicios por categorías y documentación extensa sobre accesibilidad, cobertura de ejercicios, mejoras UX y validación WCAG AA.[cite:page:34]

Su `package.json` confirma una app React/Vite con tests vía Vitest, despliegue a GitHub Pages y un foco técnico más centrado en app que en sitio estático tradicional.[cite:page:34]

## Hallazgos principales

### 1. Arquitectura de información: bien orientada, pero aún demasiado federada

La mayor fortaleza es la existencia de dominios claros: laboral, fitness, clínica, alemán, biblioteca, cronogramas y dashboard principal.[cite:page:33][cite:page:35]

El mayor riesgo es que estos dominios sigan funcionando como **silos semánticos**. El repositorio muestra gran volumen de documentos fuente, pero no hay evidencia suficiente de que cada entidad del sistema —por ejemplo una tarea de lunes 6:20 AM, una fase clínica, una sesión de movilidad, una regla de exposición social o una acción del roadmap laboral— comparta un identificador único, backlinks, estado, origen documental, evidencia clínica, prioridad y dependencias. Sin ese nivel de integración, la app se vuelve un contenedor bonito de información en lugar de una máquina operativa robusta.[cite:page:33][cite:page:35]

#### Corrección concreta

Implementar un **modelo canónico de entidades** con tipos como:

- `Plan`
- `Phase`
- `ScheduleBlock`
- `Task`
- `Habit`
- `ClinicalProtocol`
- `FitnessRoutine`
- `Exercise`
- `ProgressMetric`
- `SourceDocument`
- `EvidenceNote`
- `ReviewLog`
- `AdjustmentDecision`

Cada entidad debe tener:

- `id` único estable
- `title`
- `domain`
- `status`
- `phase`
- `tags`
- `originDocuments[]`
- `rationale`
- `whyThisExists`
- `linkedBlocks[]`
- `linkedMetrics[]`
- `clinicalConstraints[]`
- `reviewCadence`
- `lastUpdated`
- `owner`

## 2. Navegación: macro correcta, micro insuficiente para uso intensivo

La navegación superior/lateral parece correcta para orientación global, pero para un sistema tan denso no basta con rutas por sección.[cite:page:33]

Falta comprobar —y probablemente desarrollar— una navegación de segundo y tercer nivel con estas capacidades:

- Ver por dominio, fase, semana, día, prioridad y estado.
- Saltar de un bloque del cronograma a su fundamento original.
- Abrir contexto clínico, técnico y operativo en el mismo flujo.
- Pasar de “qué hago ahora” a “por qué existe esto” sin perderse.

#### Corrección concreta

Diseñar navegación en capas:

1. **Capa operativa**: Hoy, Esta semana, Próximo bloque, Cierre del día.
2. **Capa de planificación**: Cronograma semanal, fases, roadmap 30/60/90, escenarios.
3. **Capa de conocimiento**: biblioteca, documentos fuente, benchmarks, libros, protocolos.
4. **Capa de seguimiento**: progreso, cumplimiento, síntomas, energía, ajustes y retrospectivas.
5. **Capa de sistema**: settings, integridad de datos, auditoría, changelog, versionado.

## 3. Requisitos clínicos: deben pasar de inspiración a reglas de producto

La app debe responder a necesidades asociadas a TDAH inatento, ansiedad de desempeño, rumiación, fatiga de decisión, vulnerabilidad al sobreplaneamiento y necesidad de contención ejecutiva. La auditoría previa que ya generaste iba en esa dirección; ahora el punto es convertirlo en mecanismos de producto verificables.[cite:page:33]

#### Riesgos clínicos típicos si no se corrige

- Exceso de opciones por pantalla.
- Demasiada densidad textual antes de iniciar acción.
- Mezcla de planificación profunda con ejecución inmediata.
- Falta de “arranque guiado” para días malos.
- Exceso de métricas que alimentan autojuicio y no ajuste.
- Cronogramas hiperambiciosos sin absorción de desvíos.

#### Reglas clínicas obligatorias de diseño

- Cada vista operativa debe responder a una sola pregunta principal.
- Toda pantalla debe distinguir entre **hacer ahora**, **consultar**, **registrar** y **revisar**.
- El sistema debe tener modos de energía: alta, media, baja, crisis.
- Los bloques deben poder degradarse a una versión mínima viable sin desaparecer.
- Toda reestructuración debe registrar el motivo: dolor, sueño, ansiedad, imprevisto, energía, prioridad externa.
- Debe existir un “modo inicio” de menos de 60 segundos para arrancar el día y un “modo cierre” de menos de 3 minutos para registrar cumplimiento y ajustar mañana.

## 4. Carga cognitiva: actualmente el riesgo principal no es falta de información, sino exceso

La propuesta general apunta a incluir absolutamente todo, lo cual es correcto a nivel de base de conocimiento, pero peligroso en la interfaz si no hay compactación progresiva.[cite:page:33][cite:page:35]

#### Problemas previsibles

- Dashboard demasiado rico para ser decisional.
- Cronogramas sobrecargados con detalles visibles prematuramente.
- Duplicación de conceptos entre planes, roadmap, biblioteca y rutinas.
- Métricas y notas históricas compitiendo con la acción del día.

#### Corrección concreta

Aplicar una estrategia de **divulgación progresiva extrema**:

- Nivel 1: acción mínima visible.
- Nivel 2: detalle contextual bajo demanda.
- Nivel 3: fundamento y documentos fuente en panel lateral o drawer.
- Nivel 4: vista documental completa.

Cada tarjeta o bloque del cronograma debe mostrar por defecto solo:

- nombre
- hora
- tipo
- estado
- energía requerida
- duración
- bandera clínica si aplica

Y al expandirse:

- explicación clara
- checklist
- variantes mínima/normal/extendida
- enlaces al plan original
- fuente/libro/documento
- racional de por qué está ahí
- criterios de éxito
- criterios de ajuste

## 5. Sistema de diseño: debe pasar a design system explícito y auditado

La aplicación necesita un sistema de diseño estable porque va a escalar en densidad, tipos de entidad y vistas. Si cada sección evoluciona por su cuenta, aparecerá fragmentación visual y cognitiva.[cite:page:33][cite:page:34]

#### Principios de diseño obligatorios

- Misma semántica de color en todas las secciones.
- Misma jerarquía tipográfica para acción, contexto, evidencia y metadata.
- Mismos componentes base para cards, drawer, modal, timeline, heatmap, tabla, badges y estados.
- Mismos patrones de interacción para expandir, editar, reprogramar, marcar, diferir y justificar.

#### Tokens mínimos

- Colores semánticos: `action`, `info`, `success`, `warning`, `clinical`, `blocked`, `paused`, `completed`, `deferred`.
- Espaciado en escala 4/8/12/16/24/32.
- Radios, sombras y bordes consistentes.
- Tipografía con 5 niveles máximo visibles por pantalla.
- Iconografía uniforme por dominio.

#### Estados visuales obligatorios

- default
- hovered
- focused
- active
- disabled
- blocked by clinical rule
- delayed
- completed
- modified from original plan

## 6. Trazabilidad de fuentes: indispensable y todavía no garantizada

Tu requerimiento central es que cada bloque del sistema pueda remontarse a su origen: documento, libro, teoría, protocolo, razonamiento y adaptación personalizada.[cite:page:33]

Eso exige una arquitectura RAG o semántica interna mucho más explícita que simples links sueltos a markdowns.[cite:page:35]

#### Corrección concreta

Cada entidad interactuable debe tener pestañas o subpaneles:

- **Qué es**
- **Cómo hacerlo**
- **Por qué existe**
- **Fuente original**
- **Adaptación personal**
- **Historial de cambios**

Además, la sección Biblioteca no debe ser solo exploratoria; debe poder responder:

- “Muéstrame todo lo que deriva de Overcoming Gravity.”
- “Muéstrame todos los bloques respaldados por clínica.”
- “Muéstrame qué partes del fitness se relacionan con dolor de rodilla.”
- “Muéstrame qué tareas laborales dependen de TwinSight.”

## 7. Integración de FitApp-Free: hoy parece parcial y debe ser absorbida funcionalmente

FitApp-Free ya contiene muchos activos listos para reaprovechar: analítica, progresiones, historial, librería de ejercicios, alternativas, tablas, modales accesibles, gestión de datos y paneles responsivos.[cite:page:34]

La integración correcta no es incrustar una sección separada, sino **normalizar sus conceptos** dentro del modelo maestro.

#### Lo que debe integrarse sí o sí

- Historial de sesiones.
- Registro por ejercicio.
- Progresión por rutina/fase.
- Visualizaciones de volumen, frecuencia, adherencia y evolución.
- Biblioteca de ejercicios con sustituciones y alternativas.
- Progresiones de calistenia.
- Relación ejercicio ↔ lesión ↔ restricción ↔ sustituto.
- Gestión de programas y versiones.

#### Gráficas requeridas

- Adherencia semanal por bloque y por dominio.
- Volumen de entrenamiento por semana.
- Tendencia de dolor por zona vs entrenamiento realizado.
- Progreso por habilidades: handstand, planche, dominadas, movilidad, LISS.
- Carga total planificada vs ejecutada.
- Cumplimiento del AM block y PM block.
- Días con ajuste por fatiga, dolor o sueño.

#### Regla clave

No basta con mostrar charts. Cada gráfica debe soportar decisiones:

- qué mantener
- qué reducir
- qué sustituir
- qué escalar
- qué revisar con prioridad clínica

## 8. Seguimiento de progreso: debe unificar ejecución, síntomas y ajuste

El progreso no puede limitarse a completado/no completado. En tu sistema, progreso significa cumplimiento, capacidad, tolerancia, consistencia, calidad subjetiva y necesidad de reestructuración.[cite:page:33]

#### Modelo mínimo de tracking

Por cada bloque:

- planificado
- iniciado
- completado
- completado en versión reducida
- pospuesto
- cancelado
- reemplazado
- motivo del desvío
- nivel de energía
- fricción de inicio
- satisfacción post-bloque
- dolor o carga emocional asociada

#### Retrospectivas requeridas

- diaria: cumplimiento y ajuste del siguiente día
- semanal: patrones de falla y éxito
- quincenal: reestructuración de fase
- mensual: auditoría de sostenibilidad

## 9. UX operativa: lo más importante es el “siguiente paso”

Para un sistema tan grande, la app no debe preguntarle al usuario “¿qué quieres explorar?”, sino decirle con claridad “esto es lo que toca ahora”.[cite:page:33]

#### Pantallas obligatorias de alto valor

1. **Hoy / Live**
   - Próximo bloque
   - temporizador
   - versión mínima viable
   - razón del bloque
   - botón iniciar
   - botón reprogramar con motivo
   - cierre rápido

2. **Semana**
   - vista calendario
   - vista lista
   - vista energía/carga
   - vista cumplimiento

3. **Bloque detalle**
   - instrucciones
   - checklist
   - links a fuentes
   - variantes
   - notas
   - historial

4. **Fitness**
   - rutina actual
   - restricciones activas
   - historial
   - gráficos
   - biblioteca de ejercicios
   - sustituciones recomendadas

5. **Clínica**
   - protocolos
   - señales de alerta
   - exposiciones
   - regulación
   - síntomas
   - decisiones de ajuste

## 10. Técnica y arquitectura de frontend: faltan garantías de coherencia entre repos

`FitApp-Free` muestra una base React/Vite madura con lazy loading, contexto, fallback components, algunos componentes accesibles y analítica modular.[cite:page:34]

`PlanMaestroOS` parece ser Astro con `src` y `public`, orientado a contenido y aplicación híbrida.[cite:page:35]

#### Riesgo técnico

Tener dos filosofías de app distintas sin una capa de dominio común puede producir:

- duplicación de componentes
- estilos inconsistentes
- dos fuentes de verdad para fitness
- sincronización deficiente de progreso
- navegación incongruente
- mantenimiento costoso

#### Corrección concreta

Definir una arquitectura única:

- **Capa 1: dominio** → esquemas, tipos, validaciones, reglas de negocio.
- **Capa 2: contenido** → markdown, JSON, catálogos, bibliografía, protocolos.
- **Capa 3: aplicación** → vistas, navegación, componentes, estados.
- **Capa 4: analytics** → métricas derivadas, agregados, alertas.
- **Capa 5: auditabilidad** → logs, cambios, trazabilidad, integridad.

Idealmente:

- usar un solo design system compartido
- centralizar tipos de entidades en un paquete o carpeta `domain`
- definir adaptadores para importar datos de FitApp-Free al modelo maestro
- crear una capa `fitness` dentro del dominio del sistema, no una subapp aislada

## 11. Accesibilidad y consistencia: FitApp-Free aporta bastante, pero hay que heredarlo bien

FitApp-Free incluye evidencia documental de trabajo en WCAG AA, modales accesibles, skeletons, loading states, feedback components y algunos patrones de navegación por teclado.[cite:page:34]

Eso debe preservarse e institucionalizarse en PlanMaestroOS mediante una checklist global:

- navegación completa por teclado
- focus visible coherente
- contraste AA real
- jerarquía de encabezados consistente
- etiquetas claras para gráficos y toggles
- tablas con headers correctos
- modales con focus trap
- drawers cerrables con escape
- mensajes de error accionables

## 12. Calidad del contenido: gran volumen, pero necesita curaduría operativa

El repositorio `PlanMaestroOS` contiene una enorme cantidad de documentos temáticos y estratégicos, lo cual es excelente como base intelectual.[cite:page:35]

El riesgo es convertir esa riqueza en contaminación si no se asigna a cada documento uno de estos roles:

- fuente activa
- fuente histórica
- benchmark
- evidencia
- plantilla
- salida final
- derivado resumido

#### Corrección concreta

En Biblioteca, cada documento debe tener:

- estado de vigencia
- dominio
- prioridad
- grado de confianza
- si alimenta UI activa o solo archivo
- última revisión
- entidades derivadas

## Backlog priorizado

### P0 — Crítico

- Unificar modelo de datos canónico entre PlanMaestroOS y FitApp-Free.
- Implementar trazabilidad completa bloque → fuente → racional → adaptación.
- Crear vista Hoy/Live verdaderamente operacional con inicio y cierre rápido.
- Integrar restricciones clínicas como reglas de producto, no solo contenido.
- Incorporar tracking de desvíos con motivo y energía.
- Integrar fitness con historial, progresiones y gráficas dentro del sistema maestro.

### P1 — Alto impacto

- Diseñar vistas múltiples de cronograma: calendario, lista, carga, adherencia.
- Crear biblioteca semántica con filtros por origen, dominio, fase y derivaciones.
- Añadir panel de detalle unificado para cada bloque interactuable.
- Estandarizar design system, tokens y componentes.
- Consolidar dashboards por dominio con métricas accionables.

### P2 — Importante

- Añadir retrospectivas diaria/semanal/quincenal.
- Implementar changelog personal y versionado de planes.
- Añadir comparativas planificado vs ejecutado.
- Incorporar vistas de capacidad y fatiga acumulada.
- Mejorar responsive para sesiones de uso largo en móvil.

### P3 — Evolutivo

- Búsqueda semántica avanzada.
- Recomendaciones automáticas de ajuste.
- Reglas inteligentes de degradación según energía y dolor.
- Exportación de reportes clínicos y de entrenamiento.
- Modo revisión con línea de tiempo integral.

## Estructura recomendada para corrección

### Dominio

- `src/domain/entities`
- `src/domain/value-objects`
- `src/domain/policies`
- `src/domain/mappers`
- `src/domain/events`

### Contenido

- `src/content/plans`
- `src/content/clinical`
- `src/content/fitness`
- `src/content/library`
- `src/content/roadmaps`
- `src/content/sources`

### App

- `src/features/today`
- `src/features/schedules`
- `src/features/fitness`
- `src/features/clinical`
- `src/features/career`
- `src/features/library`
- `src/features/progress`
- `src/features/review`

### Shared UI

- `src/ui/primitives`
- `src/ui/patterns`
- `src/ui/charts`
- `src/ui/tables`
- `src/ui/forms`
- `src/ui/navigation`

## Criterios de aceptación para considerar la corrección exitosa

La app sólo debería considerarse realmente robusta cuando cumpla simultáneamente estas condiciones:

- Un bloque del cronograma se puede abrir y entender en menos de 10 segundos.[cite:page:33]
- Cada bloque tiene fuente, racional y adaptación personal visibles.[cite:page:35]
- La pantalla de hoy reduce, no aumenta, la carga cognitiva.[cite:page:33]
- Las reglas clínicas afectan comportamiento del sistema, no solo texto informativo.
- Fitness no es una sección aparte injertada, sino un dominio integrado con progreso, restricciones y decisiones.[cite:page:34]
- La biblioteca conecta todos los planes, libros, benchmark y documentos a las entidades activas.[cite:page:35]
- Hay trazabilidad de cambios y razones de reestructuración.
- Se puede revisar progreso por día, semana, fase y dominio.
- El sistema visual es coherente en todas las vistas.

## Recomendación final

La dirección correcta no es “seguir agregando páginas”, sino cerrar primero la columna vertebral del sistema: modelo canónico, trazabilidad, vistas operativas, reglas clínicas y absorción completa del módulo fitness.[cite:page:33][cite:page:34][cite:page:35]

Después de eso, sí vale la pena refinar charts, microinteracciones y capas avanzadas de revisión. Sin esa base, cualquier expansión sólo aumenta complejidad y deuda cognitiva.[cite:page:34][cite:page:35]
