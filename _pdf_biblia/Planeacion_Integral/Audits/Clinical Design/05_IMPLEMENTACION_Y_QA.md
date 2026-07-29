# Implementación técnica y QA

## Refactor requerido
1. Eliminar estilos inline de pantallas complejas y migrar a CSS Modules o clases semánticas.
2. Consolidar tokens; prohibir valores de color/espaciado/radio/sombra fuera de tokens mediante lint o revisión de PR.
3. Implementar primitives UI antes de migrar páginas: Button, IconButton, Sheet, Menu, ListRow, Disclosure, Tooltip y Toast.
4. Usar `Sheet` accesible: focus trap, `Escape`, click fuera configurable, restauración de foco al trigger, scroll lock, título accesible, `aria-describedby` si existe descripción.
5. Usar menús accesibles: navegación por teclado, roles correctos, foco inicial, cierre con Escape y al seleccionar.
6. No usar tooltips como única vía para información imprescindible.

## Component API mínima
```ts
type IconButtonProps = {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  tone?: 'default' | 'accent' | 'danger';
};

type DisclosureProps = {
  label: string;
  summary?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};
```

`IconButton` debe renderizar `<button aria-label={label}>`, ofrecer tooltip en pointer fine y no depender del tooltip para lectores de pantalla. `Disclosure` usa botón con `aria-expanded` y `aria-controls`.

## Accesibilidad
- Objetivo WCAG 2.2 AA.
- Todo control operable por teclado; orden de tab lógico; focus visible de al menos 2px.
- Objetivos táctiles 44x44 CSS px.
- Inputs con label persistente; placeholder nunca como única etiqueta.
- Respeto de `prefers-reduced-motion`, zoom 200%, contraste alto y lectores de pantalla.
- No introducir auto-focus que robe contexto al navegar entre vistas.
- Confirmación para acciones irreversibles; undo para acciones reversibles cuando aplique.

## Performance
- Cargar iconos de forma tree-shaken.
- Evitar backdrop-filter masivo, sombras múltiples y animaciones que disparen layout.
- Lazy-load de paneles secundarios, gráficos, biblioteca y contenido de Más.
- Mantener datos del dashboard resumidos; cargar historial al abrir detalle.

## Plan por PR
- PR 1: tokens, tipografía, primitives UI y pruebas unitarias de accesibilidad.
- PR 2: App shell, navegación de tres destinos, menú Más, headers y responsive.
- PR 3: `Ahora` y Clínica; mover secundarios a Sheet; modo simple.
- PR 4: migración transversal de Plan, Laboral, Alemán y Biblioteca sin cambiar lógica de negocio.
- PR 5: QA, auditoría de copy, eliminación de duplicados y medición de rendimiento.

## Checklist de aceptación
- [ ] Ninguna pantalla principal tiene más de una CTA primary visible.
- [ ] Ningún dashboard usa cards como decoración o separación.
- [ ] El primer viewport de Ahora tiene una tarea focal y máximo dos siguientes.
- [ ] Toda acción icon-only tiene nombre accesible y tooltip cuando corresponde.
- [ ] En móvil, navegación lleva labels y controles cumplen 44px.
- [ ] Las rutas secundarias no compiten con Ahora/Plan/Más.
- [ ] La app funciona con teclado, zoom 200% y reduced motion.
- [ ] El modo simple persiste tras recarga y se puede desactivar fácilmente.
- [ ] No quedan términos moralizantes o de presión en copy visible.
- [ ] Build, lint, typecheck y pruebas pasan sin errores.
