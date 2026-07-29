# AUDIT-03: Layout, Espaciado y Densidad de Elementos
**Severidad:** ALTA | **Impacto:** Overwhelm visual, incapacidad de saber dónde enfocar

---

## Problema Identificado

En `HomeClinicalDashboard.tsx`, el tab "AHORA" renderiza simultáneamente:

1. Segmented control con 4 tabs (sticky)
2. 2 botones de workflow (Inicio + Cierre) con label largo
3. Indicador de nivel de energía
4. `ClinicalCurrentBlockPanel` — panel del bloque actual (componente completo)
5. Grid con 2 cards grandes:
   - Card de 3 tareas (con 3 sub-items cada una con 2 líneas de texto)
   - Card de principios terapéuticos (con 3 sub-items de 2+ líneas)

**Total de elementos informativos simultáneos:** >20 unidades de información.
El Working Memory del cerebro humano procesa 4 ± 1 chunks. Un usuario con TDAH tiene
este límite reducido efectivamente a 2-3 chunks antes de que ocurra el "mental freeze".

Adicionalmente, todos los elementos tienen el mismo peso visual (mismo tamaño de card,
mismo padding), lo que elimina cualquier jerarquía espacial natural.

---

## Solución Propuesta

### Principio de "Una Pantalla, Un Objetivo"

Cada vista del tab "AHORA" debe responder a una sola pregunta:
**"¿Qué hago ahora mismo?"**

Todo lo demás (principios terapéuticos, workflow launchers, mapa de secciones) debe estar
disponible pero NO visible por defecto. Se accede mediante interacción intencional.

### Estructura propuesta para tab "AHORA":
[Hero: Bloque actual + Tarea actual] ← Ocupa 60% del viewport
[Tres tareas del día en lista compacta] ← Expandible bajo demanda
[Botón "Ver más herramientas" → drawer] ← Workflow, principios, energía dentro del drawer

---

## Método de Ejecución

### Paso 1 — Mover los Workflow Launchers a un Drawer/Modal

**Dónde:** `HomeClinicalDashboard.tsx`, líneas de los botones "Modo Inicio" y "Modo Cierre".  
**Cómo:** Reemplazarlos por un único botón discreto `"⚙ Herramientas"` que abre un
`<Drawer>` o el `MorningEveningWorkflowsModal` existente. El selector de energía también va ahí.

```tsx
// Reemplaza el bloque de 2 botones + span de energía por:
<button
  type="button"
  onClick={() => setDrawerOpen(true)}
  style={{
    background: 'transparent',
    border: '1px solid var(--color-border-visible)',
    color: 'var(--color-text-secondary)',
    padding: '6px 14px',
    borderRadius: '10px',
    fontSize: 'var(--font-size-label)',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '8px',
  }}
>
  ⚙ Herramientas del día
</button>

{/* El drawer contiene: nivel de energía, modo inicio, modo cierre */}
```

### Paso 2 — Rediseñar la card de "Principios Terapéuticos" como elemento colapsable

**Dónde:** Segunda card del grid en `HomeClinicalDashboard.tsx`.  
**Por qué:** Los principios no cambian diariamente y no requieren atención constante.
Verlos cada vez genera ruido sin valor inmediato.

```tsx
const [showPrinciples, setShowPrinciples] = useState(false);

{/* Reemplaza la card completa por: */}
<button
  onClick={() => setShowPrinciples(p => !p)}
  style={{
    width: '100%',
    background: 'var(--color-surface-raised)',
    border: '1px solid var(--color-border-subtle)',
    borderRadius: '14px',
    padding: '14px 18px',
    color: 'var(--color-text-secondary)',
    fontSize: 'var(--font-size-label)',
    fontWeight: 500,
    cursor: 'pointer',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
  }}
>
  Principios terapéuticos activos
  <span>{showPrinciples ? '▲' : '▼'}</span>
</button>

{showPrinciples && (
  <div style={{ /* contenido original de la card */ }} />
)}
```

### Paso 3 — Reducir el grid de 2 columnas a columna única en mobile

El `gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'` en pantallas <700px
pone las 2 cards en columna única, lo cual es correcto. En desktop, también se recomienda
hacerlo columna única para esta vista específica, porque el objetivo es FOCO, no overview.

```tsx
// Cambiar de grid a flex column
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
```

### Paso 4 — Aplicar espaciado consistente con tokens

```css
/* En tokens.css */
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
}
```

Reemplazar todos los valores de `gap`, `padding`, `margin` hardcodeados con estas variables.