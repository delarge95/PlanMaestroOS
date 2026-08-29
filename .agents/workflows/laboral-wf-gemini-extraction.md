---
description: pipeline for heavy/graphic PDFs (books, papers) using the shared extraction sub-prompt (PROMPTS_INICIALES section 0). One section per call; nothing is invented.
---

# Workflow: Gemini section-by-section extraction

## Steps
1. Extract the full TOC first (one call) and build the section list with page ranges; save rag/<domain>/extracciones/<book>/00-indice.md.
2. Process ONE section per call, in order, verifying page continuity (no gaps). Split oversized sections into sub-ranges.
3. Each output follows the mandatory template: metadata; contracts/entities; quantitative rules ONLY if measurable (id, metric, values, appliesWhen, confidence explicit|inferred|qualitative, exact chapter/page); anatomy/skills/cues/rehab sections when applicable; integration notes.
4. Paraphrase ALWAYS (copyright); every claim carries chapter/page; inconsistencies marked with a warning sign, never resolved by guessing; if the source gives only qualitative data, declare it qualitative and DO NOT invent numbers.
5. Save each section's markdown immediately; at book end, write 99-resumen.md with the coverage matrix (section -> file -> rules extracted).
6. Structure names normalized to English to cross with existing datasets.