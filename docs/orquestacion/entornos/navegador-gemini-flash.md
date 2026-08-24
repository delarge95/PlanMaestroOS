# ENTORNO: Navegador — Gemini 3.7 Flash Pro (chat, casi ilimitado)

**Uso:** caballo de batalla de VOLUMEN. Curación de extracciones, chunking RAG, redacción de datasets estructurados, traducciones, parafraseado con cita, transformación de formatos.

**Flujo:** orquestador entrega tarea con plantilla exacta → puente la pega → respuesta se guarda en `biblioteca/_llm-outputs/gemini-flash/<tarea-id>.md` → orquestador verifica e integra.

**Reglas específicas:**
- Una tarea = un objetivo = un formato de salida. Dividir trabajos grandes en tandas de ~1 archivo o ~1 sección.
- Para chunks RAG: usar el formato `<!-- chunk -->` de `scripts/build_rag/README.md` (el orquestador lo adjunta a cada tarea).
- Nunca "resumir resumiendo": si la entrada trae rondas de auditoría, quedarse con la ronda FINAL marcada.
- Prohibido generar código de la app (salvo snippets inline pedidos expresamente).
