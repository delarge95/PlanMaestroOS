# FIX 07 — Navegación global centrada + SectionNav consistente por niveles

## Objetivo
Un solo patrón de navegación para los 3 niveles: secciones (global), subsecciones (nivel 2) y
sub-subsecciones (nivel 3). Mismo componente, misma posición, mismo estilo en TODAS las secciones.

## Nivel 1 — Barra global (modificar `NavigationShell.tsx`)

- Items visibles: `Hoy` · `Fitness` · `Laboral` · `Idiomas` + `Más`.
- **Centrada horizontalmente** en desktop (píldora flotante). En móvil: barra inferior fija con
  la misma distribución (4 + `Más`).
- `Más` abre Sheet (móvil) o dropdown (desktop) con: `Clínico`, `Gastronomía` y futuras secciones.
- El item activo usa acento + `aria-current="page"` (nunca solo color).

```tsx
<header className={styles.topbar}>
  <nav className={styles.pillNav} aria-label="Secciones principales">
    {primary.map(item => <NavPill key={item.href} {...item} />)}
    <MorePill items={more} />
  </nav>
</header>
```

```css
.topbar { display:flex; justify-content:center; padding: var(--space-3) var(--space-4);
  position: sticky; top: 0; z-index: 40;
  background: color-mix(in srgb, var(--bg) 82%, transparent); backdrop-filter: blur(20px); }
.pillNav { display:flex; gap: var(--space-1); background: var(--surface-1);
  border: 1px solid var(--separator); border-radius: 999px; padding: 4px; }
```

## Nivel 2 y 3 — `SectionNav.tsx` (componente ÚNICO, data-driven)

```ts
// src/components/shell/sectionNavConfig.ts
export const SECTION_NAV = {
  fitness: [
    { href: '/app/fitness',          label: 'Hoy',                 end: true },
    { href: '/app/fitness/library',  label: 'Rutinas y biblioteca' },
    { href: '/app/fitness/progress', label: 'Progreso y cargas' },
  ],
  'fitness.library': [
    { href: '/app/fitness/library/catalog', label: 'Catálogo de rutinas' },
    { href: '/app/fitness/library/skills',  label: 'Habilidades y progresiones' },
    { href: '/app/fitness/library/data',    label: 'Base de datos y biblioteca' },
  ],
  career: [
    { href: '/app/career',           label: 'Hoy', end: true },
    { href: '/app/career/roadmap',   label: 'Roadmap' },
    { href: '/app/career/portfolio', label: 'Portafolio y CV' },
    { href: '/app/career/projects',  label: 'Proyectos' },
    { href: '/app/career/jobs',      label: 'Empleo' },
    { href: '/app/career/learning',  label: 'Cursos' },
    { href: '/app/career/news',      label: 'Noticias' },
  ],
  // clinical, languages, gastronomy: mismo formato
};
```

Reglas del componente:
- Segmented control horizontal bajo el `PageHeader`; mismo componente para nivel 2 y 3.
- Desktop: si no cabe, scroll horizontal con fade en bordes (sin scrollbar visible).
- Móvil: más de 4 items → mostrar el activo + botón `Secciones` que abre Sheet con la lista.
- Nivel 3 solo visible dentro de su subsección, con `--fs-meta` y estilo más tenue; nunca dos
  barras idénticas apiladas compitiendo.

## Migración de navegaciones existentes

```bash
grep -rln "Tab\|pill" src/components/fitness/ src/components/career/ src/components/clinical/ src/components/languages/ src/components/gastronomy/
```

Cada subnavegación ad-hoc se reemplaza por `SectionNav` + entrada en `sectionNavConfig.ts`.

## Aceptación (con evidencia)
- 3 capturas por nivel: global centrada, nivel 2 en `/app/fitness`, nivel 3 en
  `/app/fitness/library/skills` — desktop y 375px.
- Teclado: Tab recorre la píldora, Enter navega, `Más` abre/cierra con Escape y devuelve foco.
- Ninguna vista renderiza tabs propios (`grep` de migración vacío o justificado).
