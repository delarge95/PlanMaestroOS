# AUDIT-05: Sistema de Botones y Calls-to-Action
**Severidad:** ALTA | **Impacto:** No está claro qué se puede presionar ni para qué

---

## Problema Identificado

En una sola pantalla del dashboard clínico se detectan al menos **5 variantes distintas de botón**:

1. Botón de workflow "Modo Inicio" — verde semitransparente, borde verde, texto verde, `fontWeight: 800`
2. Botón de workflow "Modo Cierre" — púrpura semitransparente, borde púrpura, texto púrpura
3. Botones del segmented control — blancos cuando activos, grises cuando inactivos
4. Botón "Focus Mode" (dentro de `ClinicalCurrentBlockPanel`) — desconocido sin leer el componente
5. Links de navegación que parecen cards (`<a>` con estilos de card)

No existe una jerarquía de acción. Todo tiene el mismo nivel de "llamada a la atención".
Para TDAH: sin jerarquía de CTA, el cerebro repasa constantemente todos los botones buscando
el "correcto" sin poder decidirse.

---

## Solución Propuesta

### Sistema de 3 niveles de botón

| Nivel | Nombre | Cuándo usar | Máximo por pantalla |
|---|---|---|---|
| Primary | Filled, color accent | La acción más importante de la vista | 1 |
| Secondary | Outlined, borde visible | Acciones alternativas importantes | 2-3 |
| Ghost | Sin borde, solo texto | Acciones terciarias, cancelar, "ver más" | Sin límite |

### Regla de oro: En mobile/foco, solo 1 botón Primary visible por pantalla.

---

## Método de Ejecución

### Paso 1 — Crear componente `Button` reutilizable

**Archivo nuevo:** `src/components/ui/Button.tsx`

```tsx
// src/components/ui/Button.tsx
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const styles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--color-accent-primary)',
    color: '#ffffff',
    border: 'none',
    fontWeight: 600,
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-text-primary)',
    border: '1px solid var(--color-border-visible)',
    fontWeight: 500,
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: 'none',
    fontWeight: 400,
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '6px 12px', fontSize: 'var(--font-size-label)', borderRadius: '8px' },
  md: { padding: '10px 18px', fontSize: 'var(--font-size-body)', borderRadius: '12px' },
};

export function Button({
  variant = 'secondary',
  size = 'md',
  onClick,
  children,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        ...sizeStyles[size],
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'opacity 150ms ease, transform 100ms ease',
        fontFamily: 'var(--font-family-system)',
      }}
      onMouseDown={(e) => { (e.currentTarget.style.transform = 'scale(0.97)'); }}
      onMouseUp={(e) => { (e.currentTarget.style.transform = 'scale(1)'); }}
    >
      {children}
    </button>
  );
}
```

### Paso 2 — Reclasificar los botones existentes

| Botón actual | Nuevo nivel | Justificación |
|---|---|---|
| "🌅 Modo Inicio" | `secondary` | No es la acción principal de la vista |
| "🌙 Modo Cierre" | `ghost` | Acción de fin de día, no urgente durante el día |
| Segmented control tabs | Mantener diseño actual | Es un control de navegación, no un CTA |
| "Focus Mode" toggle | `primary` | La acción más importante cuando aplica |

### Paso 3 — Eliminar `fontWeight: 800` de botones secundarios

Busca en todo el proyecto `fontWeight: 800` o `fontWeight: '800'` y cámbialo a `500` o `600`.
`800` (ExtraBold) en UI es equivalente a gritar — solo se justifica en headings muy grandes.