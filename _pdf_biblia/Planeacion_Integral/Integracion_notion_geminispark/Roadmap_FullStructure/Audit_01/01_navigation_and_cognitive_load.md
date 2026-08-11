# FIX 01 — Navegación y reducción de carga cognitiva (transversal)

## Problema
La navegación muestra todas las secciones en línea (Hoy, Fitness, Clínico, Laboral, Idiomas,
Gastronomía, Más) tanto en desktop como en móvil. Esto viola la regla central del sistema:
una pantalla = una prioridad, y la navegación no debe competir con el contenido.

## Decisión de diseño (no negociable)

### Desktop
- Navegación lateral o superior con **4 items visibles**:
  `Hoy` · `Fitness` · `Laboral` · `Idiomas`
- Todo lo demás dentro de un menú `Más` (dropdown o sección):
  `Clínico`, `Gastronomía`, y en el futuro `Tesis`, `Proyectos`.
- Justificación: Hoy/Fitness/Laboral/Idiomas son el MVP declarado por el usuario; Clínico se
  alcanza desde Hoy (sus tareas ya aparecen ahí) y desde `Más`.

### Móvil
- Barra inferior fija con 4 items + `Más`.
- `Más` abre un sheet desde abajo con la lista restante.

## Implementación exacta

### 1. `src/components/shell/navItems.ts` (crear)

```ts
export type NavItem = { href: string; label: string; icon: string; section: 'primary' | 'more' };

export const NAV_ITEMS: NavItem[] = [
  { href: '/app/today',      label: 'Hoy',        icon: 'sun',        section: 'primary' },
  { href: '/app/fitness',    label: 'Fitness',    icon: 'dumbbell',   section: 'primary' },
  { href: '/app/career',     label: 'Laboral',    icon: 'briefcase',  section: 'primary' },
  { href: '/app/languages',  label: 'Idiomas',    icon: 'languages',  section: 'primary' },
  { href: '/app/clinical',   label: 'Clínico',    icon: 'heart-pulse',section: 'more' },
  { href: '/app/gastronomy', label: 'Gastronomía',icon: 'chef-hat',   section: 'more' },
];
```

### 2. `NavigationShell.tsx` (modificar)

```tsx
const primary = NAV_ITEMS.filter(i => i.section === 'primary');
const more = NAV_ITEMS.filter(i => i.section === 'more');

// Desktop: renderiza `primary` + botón "Más" que abre dropdown con `more`.
// Móvil: misma lógica pero dropdown -> bottom sheet (componente Sheet existente).
// El item activo se calcula por ruta; si la ruta actual pertenece a `more`,
// el botón "Más" muestra indicador de activo (punto o borde), NO se expande solo.
```

Reglas duras:
- Nunca más de 5 elementos en la barra (4 + Más).
- Ningún item ocupa dos líneas; labels exactos del array.
- El dropdown/sheet de `Más` cierra con `Escape` y devuelve foco al botón.
- Eliminar cualquier rail horizontal scrolleable de secciones.

### 3. Subnavegación por sección
Dentro de Fitness, Laboral, Idiomas, etc.: las subsecciones van en un header local de la sección
(tabs o lista), nunca en la navegación global. Ejemplo Fitness:
`Hoy` · `Rutinas` · `Habilidades` · `Progreso`. En móvil, si no caben: botón `Secciones` con sheet.

## Sección D — Checklist transversal anti-saturación (aplicar a TODAS las vistas nuevas)

Para cada vista creada en fases 3–7, verificar y corregir:
- [ ] Una sola acción primaria visible (botón sólido); el resto secundarias o ghost.
- [ ] Máximo 3 bloques de contenido antes del primer CTA.
- [ ] Todo texto de más de ~5 líneas vive en un disclosure cerrado por defecto.
- [ ] Ningún número/rojo de alarma permanente (rachas, retrasos) — los contadores son neutros.
- [ ] A 375px no hay scroll horizontal ni más de una columna.
- [ ] El estado vacío existe y tiene copy breve + una acción.

## Copy exacto
`Más` · `Secciones` · `Cerrar`. Prohibido: `Menú`, `Otros`, iconos sin label.

## Aceptación (con evidencia)
- Captura desktop: 5 elementos de navegación máximo.
- Captura 375px: barra inferior 4 + Más; sheet de Más abierto en segunda captura.
- Recorrido con teclado completo: Tab llega a Más, Enter abre, Escape cierra, foco vuelve.
- Tabla de la sección D aplicada a: `/app/clinical`, `/app/career`, `/app/languages`,
  `/app/gastronomy` (una fila por vista con OK/FALLA).
