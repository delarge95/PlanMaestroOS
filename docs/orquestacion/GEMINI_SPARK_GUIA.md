# GUÍA COMPLETA — Gemini Spark: implementación paso a paso (U2)

> Investigación del orquestador (2026-09-16). Complementa DESPACHO-5 §B (donde
> viven los prompts listos). Objetivo: que configures las 4 tareas recurrentes
> en ~30 minutos sin equivocarte, sabiendo qué esperar de cada integración.

## 1. Qué es y qué necesitas

Gemini Spark corre tareas de fondo 24/7 en tu cuenta de Google. **No requiere
API key ni código** — es un agente con tareas programadas que usa tu sesión
de Chrome (YouTube, Sheets, Docs) y MCP connectors.

**Checklist previo:**
- [ ] Cuenta de Google con Gemini (plan que incluya Spark/scheduled tasks)
- [ ] Chrome con tu sesión de YouTube (la revisión de videos la hace vía browser)
- [ ] Dos Google Sheets creados por ti: **"Contenido Revisado"** y **"Aplicaciones Diarias"**
- [ ] Un Google Doc vacío: **"Síntesis Semanal"**

## 2. La brecha de Notion (y sus 2 caminos)

Spark **no tiene integración nativa con Notion** (pendiente de Google, verano 2026).

| Camino | Cómo | Cuándo usarlo |
|---|---|---|
| **A — Sheets como intermediario** (hoy) | Spark escribe en Sheets (nativo, fiable). La app/sistema lee Sheets o copias manual. | Ya mismo — cero fricción |
| **B — Worker como puente** (recomendado a 1 semana) | Tras el deploy del Worker IA (U3), Spark puede pegar a `POST https://…/notion/fitness-session` y `/notion/career-app` con el header `x-pm-key` — escribe DIRECTO en Notion | Cuando U3 esté desplegado y Spark soporte llamadas con headers (si no: Sheets sigue como puente) |

Decisión práctica: **arranca con A hoy, migra a B cuando pruebes que Spark
hace fetch con headers** (pruébalo con una tarea de prueba que pegue a
`/health` del worker).

## 3. Configuración paso a paso

### Tarea 1 — Revisión diaria de YouTube (08:00)
1. Abre Gemini → Spark → "Nueva tarea programada" → diaria 8:00.
2. Pega el PROMPT de DESPACHO-5 §B Tarea 1 (íntegro — ya está afinado).
3. Ajustes: revisa que la primera ejecución pida permiso de YouTube/Chrome.
4. **Pega al final del prompt** esta línea (nueva, coordina con el sistema):
   `Al final, escribe una línea de resumen con el formato: <fecha>|<videos
   importantes>|<resumibles>|<inservibles>.`

### Tarea 2 — Historial YouTube (14:00)
Igual, con el prompt de §B Tarea 2. Sin ajustes.

### Tarea 3 — Búsqueda laboral (09:00)
Prompt de §B Tarea 3. **Mejora clave**: tus 126 empresas ya viven en la DB
"Career Applications" de Notion y en la app. Añade al final del prompt:
```
Prioriza empresas de esta lista si aparecen en resultados: Treeview Studio,
Active Theory, Snap AR, YAGER, Roblox, Cesium, Osso VR, Flat2VR Studios,
FLEXUS, Active Theory (lista A1 en mi tracker). Fit 1-5 usando: WebGL/Unity
obligatorio = +2, remoto desde Colombia = +2, agencia B2B/industrial = +1.
```

### Tarea 4 — Síntesis semanal (domingo 18:00)
Prompt de §B Tarea 4. Sin ajustes.

## 4. Cómo se conecta con la app (Plan Maestro OS)

| Dato de Spark | Destino en la app | Mecanismo |
|---|---|---|
| Vacantes encontradas (T3) | Career Applications | Camino B (worker) o copia manual → research panel → "Aplicar → Pipeline" |
| Sesiones/métricas fitness | Fitness Sessions (Notion) | Camino B (worker ya lo soporta: POST /notion/fitness-session) |
| Síntesis semanal | — (la lees tú; yo puedo importarla si la pegas en el chat) | Manual |

## 5. Riesgos y mitigaciones

- **Calidad variable**: Spark clasifica videos con criterio imperfecto → la
  columna "Relevancia + motivo" del Sheet te deja auditar barato. Yo hago
  spot-check si me pegas el Sheet semanal.
- **No confiar en Spark para ESCRIBIR en Notion directamente**: rompería el
  schema. Siempre vía worker (que valida payload) o Sheets→importación.
- **Costo de cuota**: 4 tareas diarias es ligero; la T3 (browsing de LinkedIn)
  es la más pesada — si hay límites, reduzcala a 3 días/semana.

## 6. Checklist final de configuración

- [ ] 4 tareas creadas con los prompts de §B (+ mejoras de esta guía)
- [ ] Sheets "Contenido Revisado" con columnas: Fecha|Título|Canal|Categoría|Subcategoría|Relevancia|Resumen|URL
- [ ] Sheet "Aplicaciones Diarias" con: Fecha|Empresa|Rol|URL|Fit|CV variante sugerida
- [ ] Primera ejecución de cada tarea supervisada (los agentes piden permisos)
- [ ] Tras el deploy del worker (U3): probar fetch del worker desde Spark
