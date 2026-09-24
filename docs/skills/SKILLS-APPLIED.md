# Skills integradas de anthropics/skills — aplicación al proyecto

> Fuente: [anthropics/skills](https://github.com/anthropics/skills) — identificadas
> desde los videos del usuario. Copiadas a `docs/skills/` como referencia.
> El conocimiento de cada skill ya está aplicado o cableado al código.

## 1. frontend-design → aplicado al design system y al portafolio

**Qué aporta**: principios de diseño anti-genérico — el hero abre con lo más
característico del tema, tipografía con personalidad (no Inter default),
línea <80 caracteres, estructura visual ES información (eyebrows/labels solo
si codifican datos), cero tells de página generada.

**Dónde está aplicado**:
- `src/components/portfolio/PortfolioHero.tsx`: hero con lo más característico
  (WebGL 3D, no un "big number + gradient")
- `src/styles/portfolio.css`: tracking negativo solo en display, secciones
  con respiración 120-160px
- `src/styles/designSystem.css`: jerarquía por peso/tamaño, no por color extra
- Auditoría AG-DISE-TIP: los "tells genéricos" (eyebrow decorativo, número
  secuencial sin sentido) ya fueron eliminados

## 2. webapp-testing → patrón para smoke tests

**Qué aporta**: patrón de test con Playwright: reconnaissance-then-action
(navigate → networkidle → screenshot/DOM → interact). Helper `with_server.py`
para gestionar lifecycle del server.

**Dónde aplica**:
- Los QA Playwright que corren en cada commit de la flota usan este patrón
- Futuro: `scripts/smoke_test.py` que arranque `npm run preview` y corra
  los 5 flujos críticos (fitness guardar, laboral pipeline, idiomas lección,
  health advisory, generador CV) — pendiente de implementar

## 3. theme-factory → referencia para variantes de tema

**Qué aporta**: 10 temas predefinidos con paletas y font pairings. El patrón
de tokens por tema (colors, fonts, variants) es el mismo de nuestro
`tokens.css`.

**Dónde aplica**: si se quiere añadir un tema light a la app, el patrón es
duplicar tokens.css con override de las variables `--surface-*`, `--text-*`
y `--accent`. El theme-factory no se usa directamente (tenemos nuestro
propio sistema), pero su estructura de 10 temas valida que nuestro enfoque
token-first es el correcto.

## 4. web-artifacts-builder → para widgets embeddables del portafolio

**Qué aporta**: patrón React+Vite+Parcel para self-contained HTML. Anti-slop:
"cero purple gradients, cero uniform rounded corners, cero Inter font".

**Dónde aplica**: el portafolio público (AG-PORT) ya sigue estos principios:
- 0 purple gradients (acento azul #0a84ff sobre dark)
- 0 uniform rounded corners (radios variados por jerarquía)
- 0 Inter font (system-ui con tracking personalizado)
- Futuro: si se quiere un widget standalone (calculadora 1RM embeddable para
  el portafolio), el patrón de init-artifact + bundle es el camino

## 5. mcp-builder → para exponer la app como herramienta de IA

**Qué aporta**: guía para crear MCP servers (Python FastMCP o TS SDK) con
tool naming consistente, cobertura de API vs workflow tools, validación de
inputs.

**Dónde aplica (futuro)**:
- Un MCP server que exponga las operaciones de Plan Maestro OS como tools:
  `pm_get_today_view()`, `pm_add_application()`, `pm_log_workout()`,
  `pm_get_prediction()`, etc.
- Requiere el worker desplegado (U3) como backend
- El patrón de naming (`pm_` prefix + action_verb) y el balance de
  "comprehensive API vs workflow tools" de la skill es la referencia

## Instalación técnica (para Claude Code)

Si el usuario quiere instalarlos como plugins de Claude Code:
```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```

Las skills document-skills (docx/pdf/pptx/xlsx) ya están disponibles en
esta sesión como plugins.
