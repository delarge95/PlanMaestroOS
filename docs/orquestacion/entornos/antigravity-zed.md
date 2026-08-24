# ENTORNO: Antigravity (Gemini 3.7 Flash h/m/l) y Zed AI (GPT-5.6 sol, Gemini 3; $10/mes student)

**Uso:** ejecutores LOCALES de archivos con instrucciones precisas del orquestador: transforms bulk, crear archivos según plantilla, aplicar diffs aprobados, formateos, migraciones mecánicas.

**Flujo:** orquestador entrega tarea archivo-por-archivo (ruta exacta, qué añadir, qué NO tocar) → usuario la ejecuta en el IDE sobre el worktree del dominio → orquestador revisa `git diff` + `astro check` antes del commit.

**Reglas específicas:**
- Antigravity low/medium para tareas mecánicas; high solo cuando el paso lo exige (elección la hace el orquestador en la tarea).
- Zed para pasos que requieren más razonamiento por archivo (créditos limitados: usar con tino).
- Trabajan SIEMPRE en el worktree de su dominio (`E:\Laboral\.worktrees\<agente>`), jamás en `E:\Laboral` directamente.
- Matriz de ownership §1.2 del PLAN_MULTIAGENTE aplica tal cual.
- Regla de oro: nada de borrar features; nada de refactors no pedidos; commits pequeños.
- Verificación obligatoria antes de dar por buena una tanda: `npx astro check && npm test`.
