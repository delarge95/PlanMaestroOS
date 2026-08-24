# ENTORNO: Navegador — GLM 5.3 Max (z.ai) y Qwen 3.8 Max (ilimitados)

**Uso:** razonamiento de contenido y specs donde Flash se queda corto, sin tocar créditos: diseño de currículos, second opinions, specs de contratos, revisión crítica de datasets ya curados.

**Flujo:** igual que gemini-flash (tarea → puente → output a `biblioteca/_llm-outputs/<glm53|qwen>/` → verificación).

**Reglas específicas:**
- Rol de REVISOR predilecto: dado un artefacto + su fuente, cazar slop, cifras sin cita y formatos rotos.
- Los dos entornos NO trabajan la misma tarea a la vez (se usa uno como autor y el otro como revisor cuando el artefacto es crítico).
- Nunca tocan el repo; entregan texto/JSON.
