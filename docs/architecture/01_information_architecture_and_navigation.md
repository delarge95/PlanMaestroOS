# 01 · Arquitectura de información y navegación

## Estructura global
```text
Plan Maestro OS
├── Hoy (live tracker global)
├── Fitness
├── Clínico
├── Laboral
├── Idiomas
├── Gastronomía
└── Más (Tesis, Proyectos, Otros)
```

Las subsecciones dentro de cada dominio se describen a continuación; cada una está diseñada para volcar información clave hacia la pantalla Hoy.

## 1. Hoy (live tracker)
### Subsecciones
- **Task manager del día**
  - Top 3 y resto de tareas relevantes.
  - Vista por Bloque A/B y prioridades.
- **Vista de plan**
  - **Calendario** con filtros por etiqueta (fitness, laboral, idiomas, clínico, etc.).
  - **Modo canvas** para ver bloques visuales de tiempo/energía.
  - **Tablas visuales** de stats: adherencia, horas por área, logros, rachas.

### Propósito clave
Responder en segundos:
- ¿Qué debo hacer ahora?
- ¿Qué sigue después?
- ¿Qué ya hice hoy?
- ¿Qué se está arrastrando?

## 2. Fitness
### a) Hoy (fitness)
- Rutina del día activa.
- Calendario fitness (cronograma + historial + progreso).
- Mini-sección de molestias/prehab con prioridad visual cuando exista dolor o zona afectada.

### b) Rutinas y biblioteca
- **Catálogo de rutinas**
  - Lista de programas, cada uno con días y ejercicios.
  - Botón "Añadir nueva rutina" al inicio y al final.
- **Habilidades y progresiones**
  - Roadmaps por disciplina: calistenia, gimnasia, MMA, boxeo, parkour, movilidad, flexibilidad.
  - “Mi práctica” se mueve al Hoy general, con filtros por disciplina/plan.
- **Base de datos (FitApp) y biblioteca**
  - Base de datos de ejercicios de FitApp (con errores pendientes de corrección en su repo).
  - Biblioteca con libros, PDFs, teoría, videos y enlaces.

### c) Progreso y tabla de cargas
- Histórico de entrenamiento: PRs, volumen por músculo, sesiones, consistencia.
- Tabla de cargas y discos por ejercicio (misma lógica que FitApp).
- Filtros por programa, período, patrón, equipo.

## 3. Clínico
### Subsecciones propuestas
- **Hoy clínico**
  - Tareas del día relacionadas con TDAH/ansiedad social.
  - Ayudas inmediatas para bloqueo (checklists, micro-pasos).
- **Plan & rutinas**
  - Rutinas diarias/semanales clínicas (respiración, exposición, etc.).
  - Recordatorios y ajustes basados en estado.
- **Protocolos y recursos**
  - Resúmenes claros de protocolos (ej. manejo de ansiedad, rumia, plan de descanso).
  - Enlaces a documentos fuente (plan_accion_tdah_ansiedad_social, reporte_clinico_neurodesarrollo_ansiedad).

## 4. Laboral
### a) Roadmap, Portafolio y CV
- Roadmap con goals de corto/mediano/largo plazo y calendario.
- Vista de portafolio actual y CV con sincronización a GitHub/LinkedIn/ArtStation/web.
- Selección de proyectos clave para portfolio y CV.

### b) Proyectos
- **TwinSight** y otros proyectos activos como subsecciones propias.
- Base de datos de proyectos completados/archivados con estado (pulir, mejorar, listo para portfolio).

### c) Empleo
- Pipeline de empresas: frío/tibio/caliente.
- Cronograma diario de contactos (Hoy, Mañana, Pasado mañana, Próximos días).
- Base de datos histórica de empresas, mensajes, respuestas, CVs enviados.
- Investigación de tendencias laborales y ofertas relevantes.

### d) Cursos y aprendizaje
- Hoy: tareas de cursos activos.
- Cursos activos.
- Cursos en la mira, ordenados por prioridad.
- Noticias, especializaciones, másteres, becas relevantes.

### e) Noticias y contenido
- Categorías mejoradas, por ejemplo:
  - IA (tendencias y conocimiento profundo).
  - 3D / Tech Art (teórico + actualidad).
  - Desarrollo, diseño y producto.
  - Carrera y empleabilidad.

## 5. Idiomas
### a) Hoy (idiomas)
- Tareas del día para alemán e inglés.

### b) Inglés
- Empresarial.
- Técnico.
- Teoría (estructura completa como en libro).
- Práctica speaking/listening con IA.

### c) Alemán
- Teórico clásico (libros tradicionales adaptados a web).
- Speaking con IA (corrección de pronunciación y estructura).
- Vocabulario diario.
- (Portugués queda definido pero no construido en MVP).

## 6. Gastronomía
### Subsecciones propuestas MVP
- **Biblioteca y recursos**
  - Recetas, técnicas, libros, chefs.
  - Notas propias y resúmenes originales.
- **Planificación y dietas**
  - Planes dietarios por objetivo.
  - Registro de macros y calorías para recetas seleccionadas.
- **Ver más tarde / descubrir**
  - Guardado de recetas/platos/videos desde redes y fuentes externas.

## Relación entre áreas y Hoy
Cada sección puede marcar tareas y eventos con etiquetas:
- `fitness`, `clinico`, `laboral`, `idiomas`, `gastronomia`, `tesis`, etc.

La pantalla Hoy:
- Lee todas las tareas y sesiones relevantes con esas etiquetas.
- Calcula un Top 3 global y bloques recomendados.
- Permite filtrar vista de calendario y tablas por etiqueta.
