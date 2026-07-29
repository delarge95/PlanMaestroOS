# AUDIT-02: Tipografía, Escala y Densidad de Texto
**Severidad:** ALTA | **Impacto:** Fatiga visual, fragmentación de lectura

---

## Problema Identificado

En `HomeClinicalDashboard.tsx` se detectan los siguientes tamaños de fuente en una sola vista:
1.2rem → Títulos de card (h3)
1.0rem → Títulos de nav-card (h4)
0.88rem → Tarea nombre principal
0.84rem → Tabs del segmented control
0.82rem → Texto de principios terapéuticos
0.80rem → Botones de workflow
0.78rem → Descripción de nav-cards
0.75rem → Subtítulo de tarea (bloque + hora)
0.70rem → Badge de estado (En curso / Pendiente)
0.68rem → Label de sección (REGLA TDAH, REGULACIÓN EMOCIONAL)

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