# Sistema de diseño: calmado, moderno y minimalista

## Dirección visual
Inspiración: claridad funcional de Apple, no imitación literal. Superficies abiertas, jerarquía sobria, tipografía legible, iconografía consistente, profundidad tenue y movimientos discretos. El minimalismo se consigue retirando decisiones y contenedores, no encogiendo texto ni escondiendo funciones críticas.

## Tokens obligatorios
Crear o consolidar `src/styles/tokens.css`. Usar variables; prohibido introducir nuevos hex, sombras, radios o espaciados inline fuera de casos excepcionales documentados.

```css
:root {
  --bg: #F5F5F7;
  --surface: #FFFFFF;
  --surface-elevated: #FFFFFF;
  --text: #1D1D1F;
  --text-secondary: #6E6E73;
  --text-tertiary: #86868B;
  --separator: rgba(60, 60, 67, .18);
  --accent: #0071E3;
  --accent-pressed: #0077ED;
  --success: #248A3D;
  --warning: #B25000;
  --danger: #B42318;
  --focus: rgba(0, 113, 227, .35);
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --shadow-float: 0 8px 28px rgba(0, 0, 0, .08);
  --ease-standard: cubic-bezier(.2, .8, .2, 1);
}
```

Usar modo oscuro solo si está diseñado y probado como tema completo; no mezclar tonos oscuros parciales. En móvil, evitar transparencias intensas y blur costoso.

## Tipografía
Usar `ui-sans-serif, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif`. Escala máxima de cinco roles:
- Display: 28–34px, 700, solo una vez por pantalla.
- Title: 20–22px, 650–700.
- Body: 16px, 400–450, line-height 1.45–1.55.
- Label: 13–14px, 550–600.
- Meta: 12px, 450–500.

No usar mayúsculas completas para contenido. Si existe una necesidad de etiqueta visual, usar sentence case. Limitar longitud de línea a 65–75 caracteres en lectura y evitar párrafos de más de 3 líneas en dashboard.

## Superficies y tarjetas
- El fondo es una superficie continua; no colocar cada bloque dentro de una card.
- Usar cards solo cuando agrupen una unidad interactiva independiente o una decisión: tarea focal, sesión, formulario, panel de detalle.
- Máximo dos estilos de superficie por viewport: fondo y card; elevada solo para modal/popover.
- Card estándar: fondo blanco, borde `--separator`, radio 14px, padding 16–24px. Sin sombra salvo flotantes.
- Reemplazar grids de cards informativas por listas con separadores, disclosure rows o secciones con headings.

## Botones y controles
Crear componentes en `src/components/ui`: `Button`, `IconButton`, `Disclosure`, `SegmentedControl`, `Sheet`, `Menu`, `ListRow`, `EmptyState`, `Toast`.
- Una sola acción `primary` por pantalla/contexto.
- `secondary` para alternativa importante; `ghost` para baja prioridad; nunca más de tres acciones visibles juntas.
- `IconButton` debe tener 44x44px mínimo, `aria-label`, tooltip con delay 500ms en escritorio y texto accesible para lector. En touch no depender del hover: el icono debe ser reconocible o abrir un menú etiquetado.
- No reemplazar con iconos acciones ambiguas o de alto riesgo: `Eliminar`, `Guardar`, `Enviar`, `Posponer`, `Iniciar` conservan texto.
- Iconos: Lucide, trazo 1.75–2px, tamaño 18–20px; no mezclar emojis con iconos de sistema.

## Motion y feedback
Duración 120–200ms para hover, reveal y cambio de sección. Usar opacidad y traslación de 2–4px. No usar rebotes. Toda animación debe desactivarse con `prefers-reduced-motion`. Feedback de guardado: toast breve, no modal; feedback de tarea: check discreto junto al elemento, no overlay central intrusivo.
