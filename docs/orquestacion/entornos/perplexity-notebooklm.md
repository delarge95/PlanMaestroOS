# ENTORNO: Perplexity Pro (kimi k3 / web / deep research) + NotebookLM

**Perplexity — uso:** research con fuentes (papers de hormonas femeninas y nutrición que faltan, capacidades de herramientas, benchmarks, datos de mercado para career). Output: markdown con links → `biblioteca/_llm-outputs/perplexity/`.

**NotebookLM — uso:** síntesis citada sobre MÚLTIPLES extracciones largas a la vez (p.ej. "cruza los 6 capítulos de Gray's sobre hombro con Moore ch06 y produce la ficha consolidada del grafo anatómico"). Fuentes: subir los .md de `biblioteca/extracciones/`.

**Reglas específicas:**
- Perplexity: toda afirmación con link; distinguir hecho vs estimación.
- NotebookLM: pedir SIEMPRE citas al documento fuente en el output; rechazar síntesis "creativas".
- Ninguno genera código ni toca el repo.
