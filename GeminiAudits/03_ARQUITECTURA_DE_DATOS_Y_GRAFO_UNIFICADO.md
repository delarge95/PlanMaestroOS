# 03 — Arquitectura de Datos y Grafo Unificado (Life Graph)

> **Documento:** `GeminiAudits/03_ARQUITECTURA_DE_DATOS_Y_GRAFO_UNIFICADO.md`  
> **Objetivo:** Especificación formal del Grafo de Vida del usuario (Life Graph), interconexión multidominio, sincronización con Obsidian y algoritmos de propagación de impacto.

---

## 1. La Visión del Grafo Unificado: Del Silo de Datos a la Red Neuronal Personal

En la actualidad, las aplicaciones de productividad, fitness y carrera fallan por la misma razón: **operan como silos aislados**. 
*   Una aplicación de fitness no sabe que hoy tienes una entrevista de trabajo que te genera un pico de estrés y cortisol.
*   Una aplicación de tareas no sabe que tu muñeca tiene una inflamación del tendón flexor y que no deberías programar sesiones de calistenia pesada.
*   Una base de datos de cursos no sabe qué requisitos específicos exigen las 5 empresas a las que te postulaste ayer en LinkedIn.

El **Plan Maestro OS** resuelve este problema modelando la vida del usuario como un **Grafo de Conocimiento Vivo (Life Graph)**:

```
                  ┌─────────────────┐
                  │   Company (Target)
                  └────────┬────────┘
                           │ requires
                           ▼
                  ┌─────────────────┐       demonstrated_in      ┌─────────────────┐
                  │      Skill      │ ◄───────────────────────── │  GitHub Project │
                  └────────┬────────┘                            └────────┬────────┘
                           │ acquired_via                                 │ built_with
                           ▼                                              ▼
                  ┌─────────────────┐                            ┌─────────────────┐
                  │  Course/Master  │                            │  Tech/Hardware  │
                  └─────────────────┘                            └─────────────────┘
                           ▲
                           │ optimizes mental clarity
                           │
 ┌─────────────────────────┴──────────────────────────────────────────────────────┐
 │                              EJE BIOMÉDICO / FÍSICO                            │
 └─────────────────────────┬──────────────────────────────────────────────────────┘
                           │
                  ┌────────┴────────┐
                  │ Workout Session │
                  └────────┬────────┘
                           │ contains
                           ▼
                  ┌─────────────────┐       loads / targets      ┌─────────────────┐
                  │    Exercise     │ ─────────────────────────► │     Muscle      │
                  └────────┬────────┘                            └────────┬────────┘
                           │ stresses                                     │ anchors_to
                           ▼                                              ▼
                  ┌─────────────────┐       stabilizes           ┌─────────────────┐
                  │      Joint      │ ◄───────────────────────── │ Tendon/Ligament │
                  └────────┬────────┘                            └────────┬────────┘
                           │ affected_by                                  │ irritated_by
                           ▼                                              ▼
                  ┌─────────────────┐      triggers rule         ┌─────────────────┐
                  │   Pain/Injury   │ ─────────────────────────► │   DomainRule    │
                  └────────┬────────┘                            └────────┬────────┘
                           │                                              │ generates
                           │ adapts                                       ▼
                           │                                     ┌─────────────────┐
                           └───────────────────────────────────► │   Suggestion    │
                                                                 └─────────────────┘
```

---

## 2. Ontología y Esquema Formal del Grafo (TypeScript)

El grafo se estructura mediante dos primitivas fundamentales: **Nodos (`GraphNode`)** y **Aristas Tipadas (`GraphEdge`)**.

### 2.1 Taxonomía de Nodos
Cada nodo del sistema pertenece a un dominio específico y posee metadatos de estado:

```typescript
export type NodeDomain = 
  | 'career' 
  | 'fitness' 
  | 'anatomy' 
  | 'clinical' 
  | 'nutrition' 
  | 'languages' 
  | 'gastronomy' 
  | 'hardware' 
  | 'knowledge';

export type NodeKind =
  // Laboral
  | 'company' | 'job_posting' | 'application' | 'cv_variant' | 'project' | 'portfolio_piece' | 'skill' | 'course' | 'credential'
  // Anatómico y Físico
  | 'muscle' | 'tendon' | 'ligament' | 'nerve' | 'joint' | 'bursa' | 'bone'
  | 'exercise' | 'progression' | 'routine' | 'session' | 'movement_pattern'
  // Clínico y Bienestar
  | 'symptom' | 'injury' | 'biofeedback_log' | 'cbt_protocol' | 'exposure_task'
  // Nutricional y Gastronomía
  | 'nutrient' | 'food' | 'recipe' | 'kitchen_tool'
  // Hardware y Tecnología
  | 'hardware_item' | 'peripheric' | 'software_tool'
  // Reglas e Inteligencia
  | 'rule' | 'suggestion' | 'source_document';

export interface GraphNode<T = unknown> {
  id: string;                      // e.g. "muscle:pectoralis-major", "company:epic-games"
  domain: NodeDomain;
  kind: NodeKind;
  label: string;
  description?: string;
  data: T;                         // Carga útil tipada específica del dominio
  obsidianPath?: string;           // Ruta al archivo .md espejo en _obsidian/
  updatedAt: string;
  sourceRefs?: Array<{ docId: string; chapter?: number; page?: number }>;
}
```

### 2.2 Aristas y Semántica Direccional
Las conexiones no son simples punteros; contienen significado semántico, peso y polaridad:

```typescript
export type EdgeRelationship =
  // Dependencia y Carga Biomecánica
  | 'loads_primary'       // Ejercicio -> Músculo motor primario
  | 'loads_secondary'     // Ejercicio -> Músculo sinergista
  | 'compresses_joint'    // Ejercicio -> Articulación
  | 'stresses_tendon'     // Ejercicio -> Tendón
  | 'innervated_by'       // Músculo -> Nervio
  | 'originates_from'     // Tendón -> Hueso
  | 'inserts_into'        // Tendón -> Hueso
  | 'contraindicated_for' // Ejercicio -> Lesión / Síntoma
  | 'rehabilitates'       // Ejercicio / Protocolo -> Lesión / Tendón
  
  // Carrera y Conocimiento
  | 'requires_skill'      // Oferta de empleo / Rol -> Skill
  | 'demonstrates_skill'  // Proyecto GitHub / Pieza de portafolio -> Skill
  | 'targets_company'     // Aplicación laboral -> Empresa
  | 'tailored_for'        // CV Variante -> Tipo de rol / Empresa
  | 'teaches_skill'       // Curso / Libro -> Skill
  | 'implements_project'  // Tesis / Repo GitHub -> Proyecto Portafolio
  
  // Reglas y Orquestación
  | 'evaluates_metric'    // Regla -> Métrica de usuario
  | 'modulates_volume'    // Biofeedback clínico -> Sesión de entrenamiento
  | 'suggests_action';    // Regla -> Sugerencia

export interface GraphEdge {
  id: string;
  source: string;                 // Node ID de origen
  target: string;                 // Node ID de destino
  relation: EdgeRelationship;
  weight: number;                 // 0.0 a 1.0 (Intensidad de la relación o confianza)
  bidirectional?: boolean;
  metadata?: Record<string, unknown>;
}
```

---

## 3. Algoritmos de Propagación de Impacto en el Grafo

El verdadero poder de esta arquitectura radica en la capacidad de responder preguntas complejas mediante **travesías de grafos en memoria**:

### 3.1 Caso de Uso 1: Detección y Aislamiento de Lesiones en Tiempo Real
**Escenario:** El usuario reporta: *"Dolor agudo en la cara anterior del hombro derecho al empujar (Severidad 6/10)"*.

1. **Triaje Anatómico:** El motor localiza los nodos candidatos en la región `shoulder`:
   - Músculos: `deltoid-anterior`, `pectoralis-major-clavicular`, `biceps-brachii-long-head`.
   - Tendones: `supraspinatus-tendon`, `biceps-long-head-tendon`.
   - Bursas: `subacromial-bursa`.
2. **Propagación en Grafo:**
   - La lesión se instancia como un nodo activo: `injury:shoulder-anterior-impingement-active`.
   - Se crean aristas dinámicas `contraindicated_for` hacia todos los ejercicios que tengan aristas `stresses_tendon` o `compresses_joint` con ángulo de flexión > 90° o rotación interna forzada (e.g. Dips, Planche pesada, Press militar).
3. **Recálculo de la Sesión de Hoy:**
   - La consulta al grafo filtra la lista de ejercicios de la sesión del día:
     $$\text{Ejercicios Permitidos} = \text{Ejercicios Sesión} \setminus \text{Contraindicados por Lesión}$$
   - El motor busca nodos de sustitución conectados con aristas `loads_primary` a los mismos grupos musculares sanos pero con arista `rehabilitates` o `neutral_stress` (e.g., sustituir Fondos en paralelas por Extensiones de tríceps en polea o Floor Press neutro).
   - Se emite una tarjeta `Suggestion` con la cita bibliográfica de Steven Low (*Overcoming Tendonitis*, p. 84).

### 3.2 Caso de Uso 2: Arbitraje de Habilidades Laborales y Priorización de Cursos
**Escenario:** El usuario tiene 157 cursos en su inventario (`Courses 2025.xlsx`) y dispone de 45 minutos al día. ¿Qué curso estudiar hoy?

1. **Agregación de Demandas:** El grafo cuenta las aristas entrantes `requires_skill` desde las 30 empresas del target prioritario (`Tier 1` y `Tier 2` en `docs/11_company_targets_job_boards_recruiters.md`).
   - Ejemplo: `skill:hlsl-shaders` (18 aristas), `skill:webgl-optimization` (14 aristas), `skill:houdini-procedural` (9 aristas).
2. **Análisis de Brecha (Gap Analysis):**
   - El grafo evalúa los proyectos completados en GitHub: `TwinSight X500` demuestra WebGL y optimización CAD, pero el portafolio carece de shaders complejos en tiempo real.
3. **Cálculo de Centralidad de Grado:**
   - El algoritmo selecciona el curso que maximiza la fórmula:
     $$\text{ROI} = \frac{\sum \text{Demanda Empresas Target} \times \text{Brecha en Portafolio}}{\text{Duración del Curso (Horas)}}$$
   - El sistema sugiere exactamente el módulo del curso de Rebelway o el tutorial de HLSL que produce el artefacto necesario para cerrar la brecha con Epic Games o agencias WebGL B2B.

---

## 4. Sincronización Bidireccional con Obsidian (`_obsidian/`)

El repositorio ya contiene un directorio `_obsidian/`. La auditoría recomienda formalizar este enlace para que Obsidian actúe como **el visor visual y manual del Segundo Cerebro**, mientras que la web app Astro actúa como **el motor ejecutable**:

```
┌────────────────────────────────────────────────────────┐
│             ARCHIVOS MARKDOWN (Frontmatter YAML)        │
│          Almacenados en `_obsidian/nodes/*.md`          │
│          (Leíbles, editables por humanos y Git)        │
└───────────────────────────┬────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
┌───────────────────────────┐   ┌───────────────────────────┐
│     OBSIDIAN APP          │   │     ASTRO WEB APP         │
│ - Grafo visual 2D/3D      │   │ - Motor de grafos en mem  │
│ - Edición de notas        │   │ - Ejecución de rutinas    │
│ - Enlaces bidireccionales │   │ - Evaluación de reglas TS │
│   [[NodeName]]            │   │ - Interfaz "Hoy" reactiva │
└───────────────────────────┘   └───────────────────────────┘
```

### Formato Estándar de Nodo en Markdown:
```markdown
---
id: "ex:planche-lean"
domain: "fitness"
kind: "exercise"
title: "Planche Lean"
primaryMuscles: ["muscle:deltoid-anterior", "muscle:serratus-anterior"]
stressedJoints: ["joint:wrist", "joint:elbow"]
stressedTendons: ["tendon:biceps-distal"]
sourceRef: "low-overcoming-gravity-2ed:ch12:p156"
---

# Planche Lean

Ejercicio preparatorio para la palanca anterior. Progresión fundamental de calistenia.

## Conexiones en el Segundo Cerebro:
- Fortalece: [[deltoid-anterior]], [[serratus-anterior]]
- Carga articular en: [[joint-wrist]]
- Prerrequisito para: [[full-planche]]
- Documentación clínica: [[biceps-tendonitis-prevention]]
```

Un script ligero (`scripts/sync_obsidian_graph.ts`) compila estos archivos en milisegundos en el grafo JSON que la aplicación carga en memoria.
