# Builder RAG v4 (AG-CORE)

Construye y valida `rag/<domain>.json` desde los markdowns de extracción. Esquema único compartido: `schema.ts` (única definición — builder, validador y consumo runtime lo importan).

## Uso

```bash
npx tsx scripts/build_rag/index.ts --domain fitness   # construye rag/fitness.json
npx tsx scripts/build_rag/index.ts --domain fitness --check  # solo valida el ya construido
npx tsx scripts/build_rag/index.ts --index            # reconstruye rag/index.json
```

Exit codes: `0` OK (admite warnings), `1` errores. **Nunca escribe un documento inválido.**

## Entrada por dominio

```
rag/<domain>/
  manifest.json      # OPCIONAL: bibliografía { sources: RagSource[] } con evidenceTier/authority/edición
  fuentes/*.md       # markdowns de extracción (un archivo por fuente)
```

- Sin `manifest.json`, cada markdown auto-registra su fuente como `internal-doc` (con warning) — suficiente para arrancar.
- Con manifest, todo `sourceId` de archivo DEBE estar declarado (protección de typos) y las fuentes declaradas sin chunks generan warning.
- Compatible con el formato del sub-prompt §0 de `docs/agents/PROMPTS_INICIALES.md`.

## Formato de los markdowns fuente

El nombre del archivo determina la fuente: `<sourceId>.md` o `<sourceId>--<slug>.md` (se corta en el primer `--`). Cada archivo contiene bloques:

```md
<!-- chunk
id: og2-ch12-p148-volume        # único en TODO el documento (prefijo por fuente)
topic: volume                   # taxonomía del dominio
tags: hypertrophy, chest        # lista separada por comas
chapter: 12                     # chapter | page | section (al menos uno)
page: 148
entities: exercise:planche, muscle:pec-major
rules: fit:volume-10-20
-->
Paráfrasis propia del contenido (máx. 1200 chars por chunk; sin texto literal con copyright)...

<!-- chunk ... -->
```

Los bloques incompletos (sin id/topic/locator/summary) fallan el build — mejor error en build que RAG corrompido.

## Reglas del esquema (resumen del validador)

- `domain` ∈ fitness|anatomy|nutrition|career|german|english|clinical|portfolio|gastronomy|core.
- `sources[]`: `id` estable único, `title`, `type` (book|paper|md|pdf|dataset), `evidenceTier` (meta-analysis|rct|observational|expert-book|internal-doc), `authority{domains[],priority≥1}`; **los libros exigen `edition`**.
- `chunks[]`: `id` único, `sourceId` existente, `topic`, `locator` con cita exacta obligatoria, `summary` parafraseado ≤1200 chars, `tags/entities/rules` arrays.
- `evidenceTier` usa el vocabulario de `src/lib/rules` ('rct').

## Para agentes de dominio (flujo)

1. Crear `rag/<domain>/fuentes/<sourceId>.md` con bloques chunk (extracciones §0).
2. Opcional/mejor: `rag/<domain>/manifest.json` con la bibliografía (o heredar del `biblioteca/MANIFEST.md` de AG-BIB).
3. `npx tsx scripts/build_rag/index.ts --domain <d>` → commit del JSON resultante.
4. En CI: `--check` para validar que lo commiteado sigue siendo válido.
