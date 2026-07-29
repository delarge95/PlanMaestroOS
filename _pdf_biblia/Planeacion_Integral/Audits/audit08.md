# AUDIT-08: Performance, Estado Global y Arquitectura Técnica
**Severidad:** MEDIA | **Impacto:** Lentitud percibida, pérdida de datos, bugs de sincronización

---

## Problema Identificado

### 1. Estado local sin persistencia centralizada

Cada componente maneja su propio `useState`. En `HomeClinicalDashboard.tsx`:
- `activeTab` → estado local
- `isFocusActive` → estado local
- `workflowMode` → estado local
- `currentEnergy` → estado local

Si el usuario navega a otra sección y vuelve, todos estos estados se resetean.
Para TDAH: perder el estado de "dónde estaba" es cognitivamente disruptivo.

### 2. Inline styles masivos en cada componente

Cada componente tiene cientos de líneas de `style={{ ... }}` inline. Esto:
- Impide que el browser cachee los estilos (se recalculan en cada render)
- Hace el código imposible de mantener
- Impide usar media queries directamente

### 3. Sin manejo de error consistente

Solo `HomeClinicalDashboard` tiene `<ErrorBoundary>`. Los demás componentes no tienen
ningún fallback si falla la carga de datos.

### 4. Sin loading states

Si los datos de `canonicalDomainModel` tardan en cargar (localStorage, async), no hay
ningún skeleton/spinner visible. La pantalla aparece en blanco o con datos undefined.

---

## Solución Propuesta

### Estado Global con Zustand (mínima fricción, sin boilerplate)

Zustand es la librería de estado más simple para React. Requiere <10 líneas para configurar.

### CSS Modules para componentes complejos

Los componentes con >10 reglas de estilo deben migrar a CSS Modules (`.module.css`).

---

## Método de Ejecución

### Paso 1 — Instalar Zustand

```bash
# En el directorio de PlanMaestroOS
npm install zustand
```

### Paso 2 — Crear el store global

**Archivo nuevo:** `src/store/appStore.ts`

```typescript
// src/store/appStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EnergyLevel } from '../data/canonicalDomainModel';

interface AppState {
  // Clinical
  currentEnergy: EnergyLevel;
  clinicalActiveTab: string;
  isFocusActive: boolean;
  
  // Actions
  setCurrentEnergy: (level: EnergyLevel) => void;
  setClinicalActiveTab: (tab: string) => void;
  setFocusActive: (active: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentEnergy: 'medium',
      clinicalActiveTab: 'now',
      isFocusActive: false,
      
      setCurrentEnergy: (level) => set({ currentEnergy: level }),
      setClinicalActiveTab: (tab) => set({ clinicalActiveTab: tab }),
      setFocusActive: (active) => set({ isFocusActive: active }),
    }),
    {
      name: 'plan-maestro-state', // clave en localStorage
      partialize: (state) => ({   // solo persiste estos campos
        currentEnergy: state.currentEnergy,
        clinicalActiveTab: state.clinicalActiveTab,
      }),
    }
  )
);
```

### Paso 3 — Migrar `HomeClinicalDashboard.tsx` para usar el store

```tsx
// Antes:
const [activeTab, setActiveTab] = useState<string>('now');
const [currentEnergy, setCurrentEnergy] = useState<EnergyLevel>('medium');
const [isFocusActive, setIsFocusActive] = useState<boolean>(false);

// Después:
import { useAppStore } from '../../store/appStore';

const activeTab = useAppStore(s => s.clinicalActiveTab);
const setActiveTab = useAppStore(s => s.setClinicalActiveTab);
const currentEnergy = useAppStore(s => s.currentEnergy);
const isFocusActive = useAppStore(s => s.isFocusActive);
```

### Paso 4 — Crear un skeleton de loading universal

**Archivo nuevo:** `src/components/ui/Skeleton.tsx`

```tsx
// src/components/ui/Skeleton.tsx
export function Skeleton({ width = '100%', height = '20px', borderRadius = '8px' }:
  { width?: string; height?: string; borderRadius?: string }) {
  return (
    <div style={{
      width,
      height,
      borderRadius,
      background: 'linear-gradient(90deg, var(--color-surface-raised) 25%, var(--color-surface-overlay) 50%, var(--color-surface-raised) 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
    }} />
  );
}

// CSS en global.css:
// @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
```

### Paso 5 — Envolver secciones de datos en Suspense/ErrorBoundary

```tsx
// Patrón a aplicar en todas las páginas
import { ErrorBoundary } from '../ErrorBoundary';  // ya existe

<ErrorBoundary fallback={<p style={{ color: 'var(--color-text-tertiary)' }}>
  Error cargando esta sección.
</p>}>
  <React.Suspense fallback={<Skeleton height="120px" />}>
    <ComponenteConDatos />
  </React.Suspense>
</ErrorBoundary>
```

### Paso 6 — Migrar estilos complejos a CSS Modules (priorizar componentes >200 líneas)

**Prioridad:** `ClinicalExecutionHub.tsx` (31KB — el componente más grande), `HomeClinicalDashboard.tsx`

```bash
# Crear el módulo CSS paralelo
touch src/components/clinical/ClinicalExecutionHub.module.css
```

```css
/* ClinicalExecutionHub.module.css */
.container {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.card {
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: 18px;
  padding: var(--space-lg);
}
```

```tsx
// En ClinicalExecutionHub.tsx
import styles from './ClinicalExecutionHub.module.css';

<div className={styles.container}>
  <div className={styles.card}>
    {/* contenido */}
  </div>
</div>
```