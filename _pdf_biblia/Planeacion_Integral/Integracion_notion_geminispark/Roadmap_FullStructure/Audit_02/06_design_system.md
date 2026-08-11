# FIX 06 — Sistema de diseño (estilo Apple, minimalista)

## Objetivo
Crear la base visual ÚNICA de toda la app. Ninguna vista nueva escribe CSS propio fuera de este
sistema. Esto es lo que faltó en las fases 1–7.

## Principios (Apple-like)
- Fondo plano oscuro, superficies apenas elevadas, bordes sutiles (1px, baja opacidad) en vez de
  sombras pesadas.
- Un solo color de acento en toda la app (azul sistema). Verde solo para "guardado/completado".
- Tipografía del sistema: stack `system-ui`. Escala tipográfica fija; nada de tamaños inventados.
- Espaciado en múltiplos de 4px. Radios consistentes. Animaciones de 150–200ms con
  `prefers-reduced-motion` respetado.

## 1. Tokens — crear `src/styles/tokens.css`

```css
:root {
  --bg: #000000;
  --surface-1: #0d0d0f;
  --surface-2: #161619;
  --separator: rgba(255,255,255,0.08);
  --text-primary: #f5f5f7;
  --text-secondary: #98989d;
  --accent: #0a84ff;
  --success: #30d158;

  --font: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, "Segoe UI", Roboto, sans-serif;
  --fs-eyebrow: 0.75rem;
  --fs-meta: 0.8125rem;
  --fs-body: 0.9375rem;
  --fs-step: 1.0625rem;
  --fs-section: 1.25rem;
  --fs-page: 1.75rem;

  --radius-s: 8px; --radius-m: 12px; --radius-l: 16px;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-8: 48px;
}
```

## 2. Primitivas — crear/auditar en `src/components/ui/`

| Componente | Uso obligatorio |
|---|---|
| `PageHeader.astro` | Título de sección (`--fs-page`) + meta opcional. Toda página de sección lo usa |
| `SectionNav.tsx` | Subnavegación de nivel 2 y 3 (FIX 07). Prohibido crear tabs ad-hoc |
| `ListRow.tsx` | Toda lista de entidades. Auditar que TODAS las listas lo usen |
| `Disclosure.tsx` | Todo contenido secundario (notas, detalles, fuentes) |
| `Button.tsx` | variants `primary`/`secondary`/`ghost`. Una sola primary por vista |
| `Sheet.tsx` | Bottom sheet móvil / panel desktop para filtros y "Más" |
| `StatusBadge.tsx` | Estados cortos (`Activo hoy`, `Guardado`, `Recomendada`) |
| `EmptyState.tsx` | Toda lista vacía: 1 línea + 1 acción |

## 3. Barrido de consistencia (parte de este PR)

```bash
grep -rEn "font-size:\s*[0-9]+px" src/components/ | grep -vE "12px|13px|15px|17px|20px|28px|var\(--fs-"
grep -rEn "#[0-9a-fA-F]{6}" src/components/ | grep -v "tokens.css"
grep -rn "box-shadow" src/components/ | grep -v "tokens"
```

Todo tamaño/color/radio hardcodeado se reemplaza por token.

## 4. Eliminar el "modo simple"

```bash
grep -rni "modo simple\|simpleMode\|simple-mode\|viewMode" src/
```

- Eliminar el toggle y su estado persistido (migración: borrar la key de localStorage
  silenciosamente).
- La app SIEMPRE renderiza el layout minimalista; no hay dos modos.

## Aceptación (con evidencia)
- Capturas de Hoy, Fitness, Laboral, Idiomas a 1440px y 375px con el mismo header, subnavegación
  y tipografía.
- Salida de los 3 greps vacía o justificada ítem por ítem.
- No existe ningún control de "modo" en la UI.
