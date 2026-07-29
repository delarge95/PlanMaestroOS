# AUDIT-01: Sistema de Color y Paleta Visual
**Severidad:** CRÍTICA | **Impacto:** Carga cognitiva máxima

---

## Problema Identificado

El código fuente revela un sistema de color completamente improvisado y sin tokens centralizados.
En `HomeClinicalDashboard.tsx` se usan simultáneamente:

- `#30d158` (verde iOS) — botones de inicio, badges, bordes izquierdos
- `#bf5af2` (púrpura iOS) — botón cierre, borders, texto
- `#0a84ff` (azul iOS) — cards de tarea, links de nav
- `#ff375f` (rojo iOS) — sección emocional
- `#ff9f0a` (naranja iOS) — tarea de alemán
- `#64d2ff` (cian iOS) — sección "Hoy" en el mapa
- `#ffffff`, `#98989d`, `#8e8e93` — textos

**Esto son 7 colores de acento distintos en una sola pantalla.**  
Para un usuario con TDAH, cada color diferente es una señal de "atención aquí", lo que genera
activación involuntaria del sistema de alerta de forma constante. El cerebro no puede procesar
cuál señal es realmente urgente porque todas compiten igual.

Para un usuario con ansiedad social, el exceso cromático se percibe como entorno caótico
e impredecible, lo cual eleva el arousal basal y la sensación de falta de control.

---

## Solución Propuesta

### Reducir a 3 colores semánticos + 1 neutral

| Rol semántico | Color actual (múltiples) | Color nuevo propuesto | Uso exclusivo |
|---|---|---|---|
| Acción primaria / confirmación | `#30d158`, `#0a84ff` | `#0a84ff` (azul) | Botones CTA, links activos, progreso |
| Alerta / urgencia | `#ff375f`, `#ff9f0a` | `#ff9f0a` (ámbar) | Solo para advertencias, no decoración |
| Inactivo / secundario | `#98989d`, `#8e8e93` | `#636366` | Texto secundario, estados inactivos |
| Surface / background | múltiples rgba oscuros | `rgba(28,28,30,X)` | Cards, superficies |

El púrpura (`#bf5af2`) y el cian (`#64d2ff`) se **eliminan completamente** como colores de UI.
Se pueden usar máximo como iconos decorativos sin función semántica.

---

## Método de Ejecución

### Paso 1 — Crear archivo de tokens CSS centralizados

**Archivo:** `src/styles/tokens.css`  
**Cuándo:** Primero que todo, antes de tocar cualquier componente.  
**Por qué:** Si defines los colores en un solo lugar, cambiar uno cambia toda la app.

```css
/* src/styles/tokens.css */
:root {
  /* === COLORES DE ACENTO (máximo 2 en pantalla simultáneamente) === */
  --color-accent-primary: #0a84ff;    /* Acción confirmada, progreso */
  --color-accent-warning: #ff9f0a;    /* Alerta, pendiente importante */
  --color-accent-danger: #ff453a;     /* Solo errores críticos */

  /* === SUPERFICIE === */
  --color-surface-base:    rgba(28, 28, 30, 0.95);
  --color-surface-raised:  rgba(44, 44, 46, 0.85);
  --color-surface-overlay: rgba(58, 58, 60, 0.70);

  /* === TEXTO === */
  --color-text-primary:   #ffffff;
  --color-text-secondary: #aeaeb2;
  --color-text-tertiary:  #636366;

  /* === BORDES === */
  --color-border-subtle:  rgba(255, 255, 255, 0.08);
  --color-border-visible: rgba(255, 255, 255, 0.15);

  /* === ESTADOS SEMÁNTICOS (SOLO badges y bordes izquierdos) === */
  --color-state-active:    var(--color-accent-primary);
  --color-state-pending:   var(--color-text-tertiary);
  --color-state-done:      #30d158;   /* Verde solo para "completado" */
}
```

### Paso 2 — Reemplazar en cada componente

**Archivo:** Cada `.tsx` en `src/components/clinical/`, `src/components/today/`, etc.  
**Cómo:** Busca (Ctrl+Shift+F en VS Code) cada hex code hardcodeado y reemplázalo con
la variable CSS correspondiente.

**Ejemplo concreto en `HomeClinicalDashboard.tsx`:**

ANTES:
```tsx
color: '#30d158',
background: 'rgba(48, 209, 88, 0.15)',
```

DESPUÉS:
```tsx
color: 'var(--color-state-done)',
background: 'rgba(10, 132, 255, 0.12)',  /* solo si el badge es de acción activa */
```

### Paso 3 — Auditar que en ninguna pantalla haya más de 2 colores de acento simultáneos

**Regla:** Abre cada ruta del router (`/app`, `/app/today`, `/app/schedules`, etc.) y
cuenta visualmente cuántos colores diferentes ves. Si son más de 2, identifica cuál puede
convertirse en `--color-text-secondary` gris.

---

## Por qué esto funciona para TDAH + Ansiedad

El color es el mecanismo de priorización más primitivo del cerebro. Cuando todo tiene color,
nada tiene prioridad. Al limitar a 2 colores de acento, el cerebro aprende rápidamente:
"azul = hago algo", "ámbar = ojo con esto". El resto es silencio visual.