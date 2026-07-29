
**10 tamaños de fuente distintos** en una sola pantalla. El ojo no puede establecer
jerarquía visual porque la escala es tan granular que las diferencias son perceptivamente
insignificantes (0.75 vs 0.78 vs 0.80 son indistinguibles a distancia de pantalla normal).

Adicionalmente, hay `fontWeight: 800` en botones secundarios, lo que provoca que elementos
no-primarios compitan visualmente con los primarios.

---

## Solución Propuesta

### Escala tipográfica de 4 niveles (Type Scale Minimalista)

| Nivel | Tamaño | Weight | Uso |
|---|---|---|---|
| Display | `1.25rem` | `700` | Solo títulos de sección principales (h2) |
| Body | `0.9rem` | `400` | Todo texto de contenido, descripciones |
| Label | `0.78rem` | `500` | Metadatos, horas, subtítulos de card |
| Micro | `0.68rem` | `600` | Solo badges de estado (máx 3 palabras) |

Se elimina todo tamaño intermedio. Si un texto no encaja en estos 4, se sube o baja
al nivel más cercano.

---

## Método de Ejecución

### Paso 1 — Añadir tokens de tipografía al mismo archivo `tokens.css`

```css
/* Añadir en src/styles/tokens.css */
:root {
  --font-family-system: -apple-system, 'SF Pro Text', system-ui, sans-serif;

  --font-size-display: 1.25rem;
  --font-size-body:    0.90rem;
  --font-size-label:   0.78rem;
  --font-size-micro:   0.68rem;

  --font-weight-regular: 400;
  --font-weight-medium:  500;
  --font-weight-bold:    700;

  --line-height-display: 1.3;
  --line-height-body:    1.55;
  --line-height-label:   1.4;
}
```

### Paso 2 — Crear una utilidad de estilos tipográficos compartidos

**Archivo nuevo:** `src/styles/typography.ts`  
**Por qué:** En lugar de copiar el mismo objeto de estilos en cada componente, importas
la función y aplicas consistencia automática.

```typescript
// src/styles/typography.ts
export const typo = {
  display: {
    fontSize: 'var(--font-size-display)',
    fontWeight: 700,
    lineHeight: 1.3,
    fontFamily: 'var(--font-family-system)',
  },
  body: {
    fontSize: 'var(--font-size-body)',
    fontWeight: 400,
    lineHeight: 1.55,
    fontFamily: 'var(--font-family-system)',
  },
  label: {
    fontSize: 'var(--font-size-label)',
    fontWeight: 500,
    lineHeight: 1.4,
    fontFamily: 'var(--font-family-system)',
  },
  micro: {
    fontSize: 'var(--font-size-micro)',
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'var(--font-family-system)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.04em',
  },
} as const;
```

### Paso 3 — Aplicar en los componentes

ANTES en `HomeClinicalDashboard.tsx`:
```tsx
<h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
  Prioridades Inviolables del Día
</h3>
```

DESPUÉS:
```tsx
import { typo } from '../../styles/typography';

<h3 style={{ ...typo.display, margin: 0, color: 'var(--color-text-primary)' }}>
  Prioridades del Día
</h3>
```

### Paso 4 — Reducir longitud de textos en badges y labels

El label `"REGLA TDAH: MÁXIMO 3 TAREAS HOY"` tiene 32 caracteres.
Los labels micro deben tener máximo 3 palabras. Propuesta: `"MÁXIMO 3 TAREAS"`.

El label `"REGULACIÓN EMOCIONAL & PERMISO"` → reemplazar por `"PRINCIPIOS"`.
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