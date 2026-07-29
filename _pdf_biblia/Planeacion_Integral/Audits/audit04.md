# AUDIT-04: Navegación y Arquitectura de Información
**Severidad:** ALTA | **Impacto:** Desorientación, pérdida del hilo, abandono de sesión

---

## Problema Identificado

La app tiene **dos sistemas de navegación paralelos y superpuestos**:

1. **Sidebar/Header global** (con links a `/app`, `/app/today`, `/app/schedules`, 
   `/app/career`, `/app/fitness`, `/app/german`, `/app/clinical`, biblioteca, etc.)
2. **Segmented control interno** dentro de `/app/clinical` con sus propios tabs
   (AHORA, Rescate, 2º Cerebro, Secciones)

El tab "Secciones" dentro del clinical dashboard repite exactamente las mismas rutas
que ya están en el sidebar global. Esto es redundancia de navegación que crea incertidumbre:
¿hay dos lugares distintos o es lo mismo?

Adicionalmente, la sidebar (según el snippet de la web) tiene entradas como:
- "Laboral", "Fitness", "Alemán", "Clínica" (secciones estratégicas)
- "Biblioteca" (conocimiento RAG)
- "Hoy Live", "Cronograma y matriz" (operación diaria)

Esto suma al menos 7-8 destinos de primer nivel visibles simultáneamente, más los tabs
secundarios. Para un usuario con TDAH, esto genera **parálisis de decisión**:
cualquier ruta se siente igual de válida en cualquier momento.

---

## Solución Propuesta

### Estructura de navegación de 2 niveles estrictos

**Nivel 1 — Intención del momento (3 opciones máximo):**
- `⚡ Ahora` → Qué hacer en este momento
- `📅 Planear` → Cronograma, tareas, bloques
- `🗂 Todo lo demás` → Acceso a todas las secciones (career, fitness, german, biblioteca)

**Nivel 2 — Solo aparece cuando estás dentro de una sección.**
Las secciones internas (como los tabs de clinical) solo se muestran al estar en esa sección.

---

## Método de Ejecución

### Paso 1 — Rediseñar el layout principal

**Archivo:** `src/layouts/` (el layout global de Astro)  
**Cómo:** Identificar el componente de sidebar/nav actual. Reducir los links visibles a 3.

```astro
<!-- src/layouts/AppLayout.astro (ejemplo estructural) -->
<nav style="/* sidebar o bottom nav */">
  <NavItem href="/app/today" icon="⚡" label="Ahora" />
  <NavItem href="/app/schedules" icon="📅" label="Planear" />
  <NavItem href="/app" icon="≡" label="Todo" />
</nav>
```

### Paso 2 — Eliminar el tab "Secciones" del Segmented Control de Clinical

**Archivo:** `HomeClinicalDashboard.tsx`  
**Dónde:** El array `TABS` en la línea:
```tsx
const TABS = [
  { id: 'now', label: '🎯 AHORA' },
  { id: 'rescue', label: '🛡️ Rescate' },
  { id: 'second_brain', label: '🧠 2º Cerebro' },
  { id: 'sections', label: '🗺️ Secciones' }  // ← ELIMINAR ESTE
];
```

El acceso a las secciones ya existe en el nav global. Tener este tab duplica la información
y consume espacio cognitivo en el control más visible de la vista.

### Paso 3 — Implementar "contexto de navegación" visual

Cuando el usuario está en `/app/clinical`, mostrar un breadcrumb discreto (no un header grande)
que diga simplemente `Plan Maestro > Clínica`. Esto ancla la ubicación sin ocupar espacio.

```tsx
// En el layout de cada página
<p style={{
  fontSize: 'var(--font-size-micro)',
  color: 'var(--color-text-tertiary)',
  marginBottom: 'var(--space-md)',
  letterSpacing: '0.03em',
}}>
  PLAN MAESTRO → CLÍNICA
</p>
```

### Paso 4 — Agregar transiciones entre tabs para mantener orientación

El cambio abrupto entre tabs sin ninguna transición visual hace que el usuario pierda
el contexto de dónde está. Añadir una transición `opacity` simple:

```tsx
// En el contenedor de cada tab content
<div
  key={activeTab}
  style={{
    animation: 'fadeIn 180ms ease-out',
  }}
>
  {/* contenido del tab */}
</div>

// En el CSS global o en un <style> tag
// @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
```